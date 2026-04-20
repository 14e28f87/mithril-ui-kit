/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import * as _ from "lodash-es";
import styles from "./ExpandableEditingTable.module.scss";
import { Input } from "./Input";
import { InputNumberClassic } from "./InputNumberClassic";
import { SelectClassic as Select } from "./SelectClassic";
import { Form } from "./Form";
import { FormItem } from "./FormItem";
/**
 * ユニークキー生成（簡易 UUID ライク）
 */
function generateKey(prefix = "k") {
    return `${prefix}_${Date.now().toString(36)}_${Math.floor(Math.random() * 0xffff).toString(36)}`;
}
/**
 * ExpandableEditingTable
 *
 * 概要:
 * - テーブル形式のリスト表示
 * - 各行の左側にある展開ボタン（+/-）をクリックするとアコーディオン展開
 * - EditableTable のバリデーション・Create/Update/Delete ロジックを再利用
 *
 * 使用例:
 * ```tsx
 * <ExpandableEditingTable<User>
 *   dataSource={users}
 *   columns={columns}
 *   rowKey="id"
 *   onCreate={async (row) => await api.create(row)}
 *   onUpdate={async (old, new) => await api.update(new)}
 *   onDelete={async (row) => await api.delete(row)}
 *   onChange={(data) => users = data}
 * />
 * ```
 */
export class ExpandableEditingTable {
    constructor() {
        this.drafts = {};
        this.draftOrder = [];
        this.internalExpandedKeys = new Set();
        this.editingForms = {};
        this.errors = {};
        this.localData = [];
    }
    getExpandedKeys(vnode) {
        if (vnode.attrs.expandedRowKeys !== undefined) {
            return new Set(vnode.attrs.expandedRowKeys);
        }
        return this.internalExpandedKeys;
    }
    setExpandedKeys(vnode, keys) {
        if (vnode.attrs.onExpandedRowsChange) {
            vnode.attrs.onExpandedRowsChange(Array.from(keys));
        }
        else {
            this.internalExpandedKeys = keys;
        }
    }
    /**
     * 初期化時にデータソースをコピーし、キーを生成
     */
    oninit(vnode) {
        this.localData = (vnode.attrs.dataSource || []).map((r) => ({ ...r }));
        const keyName = this.getRowKeyName(vnode);
        this.localData = this.localData.map((r) => {
            if (r[keyName] == null)
                r[keyName] = generateKey("p");
            return r;
        });
    }
    /**
     * 外部からのデータ変更を反映
     */
    onbeforeupdate(vnode, old) {
        if (!_.isEqual(vnode.attrs.dataSource, old.attrs.dataSource)) {
            const preserve = vnode.attrs.preserveDraftsOnExternalChange ?? true;
            const keyName = this.getRowKeyName(vnode);
            const incoming = (vnode.attrs.dataSource || []).map((r) => {
                const copy = { ...(r || {}) };
                if (copy[keyName] == null)
                    copy[keyName] = generateKey("p");
                return copy;
            });
            if (preserve) {
                this.localData = incoming;
                Object.keys(this.drafts).forEach((k) => {
                    if (!this.draftOrder.includes(k))
                        this.draftOrder.push(k);
                    if (!this.errors[k])
                        this.errors[k] = {};
                });
            }
            else {
                this.localData = incoming;
                this.drafts = {};
                this.draftOrder = [];
                this.internalExpandedKeys.clear();
                this.editingForms = {};
                this.errors = {};
            }
        }
    }
    getRowKeyName(vnode) {
        return vnode.attrs.rowKey ?? "key";
    }
    getRowKeyFromRow(vnode, row, idx) {
        const keyName = this.getRowKeyName(vnode);
        return String(row?.[keyName] ?? `r_${idx}`);
    }
    /**
     * 新規行を追加
     */
    addRow(vnode) {
        const factory = vnode.attrs.newRowFactory ?? (() => ({}));
        const newRow = factory();
        const keyName = this.getRowKeyName(vnode);
        const generated = generateKey("d");
        newRow[keyName] = generated;
        const key = String(newRow[keyName]);
        this.drafts[key] = { ...newRow };
        this.draftOrder.push(key);
        const expandedKeys = this.getExpandedKeys(vnode);
        expandedKeys.clear();
        expandedKeys.add(key);
        this.setExpandedKeys(vnode, expandedKeys);
        this.editingForms[key] = new Form();
        this.errors[key] = {};
        m.redraw();
    }
    /**
     * 展開を切り替え
     */
    toggleExpand(vnode, rowKey) {
        const expandedKeys = this.getExpandedKeys(vnode);
        if (expandedKeys.has(rowKey)) {
            expandedKeys.delete(rowKey);
            if (!this.draftOrder.includes(rowKey)) {
                delete this.drafts[rowKey];
                delete this.editingForms[rowKey];
                if (this.errors[rowKey])
                    delete this.errors[rowKey];
            }
            this.setExpandedKeys(vnode, expandedKeys);
            m.redraw();
            return;
        }
        expandedKeys.clear();
        expandedKeys.add(rowKey);
        // 初めて展開する場合はフォーム参照を確保
        if (!this.editingForms[rowKey]) {
            this.editingForms[rowKey] = new Form();
        }
        this.setExpandedKeys(vnode, expandedKeys);
        m.redraw();
    }
    /**
     * バリデータを実行
     */
    async runValidator(col, value, draft) {
        if (!col.validator)
            return null;
        try {
            const res = col.validator(value, draft);
            if (res && typeof res.then === "function") {
                const awaited = await res;
                if (awaited === true)
                    return null;
                if (awaited === false)
                    return "入力が不正です";
                if (typeof awaited === "string")
                    return awaited;
                return null;
            }
            else {
                if (res === true)
                    return null;
                if (res === false)
                    return "入力が不正です";
                if (typeof res === "string")
                    return res;
                return null;
            }
        }
        catch {
            return "検証中にエラーが発生しました";
        }
    }
    /**
     * 行全体をバリデート
     */
    async validateRow(vnode, rowKey, draft) {
        const cols = vnode.attrs.columns;
        const errs = {};
        for (const col of cols) {
            if (!col.editable)
                continue;
            if (col.visible && !col.visible(draft))
                continue;
            const val = draft[col.dataIndex];
            const msg = await this.runValidator(col, val, draft);
            if (msg)
                errs[col.dataIndex] = msg;
        }
        this.errors[rowKey] = errs;
        m.redraw();
        return Object.keys(errs).length === 0;
    }
    /**
     * 編集内容を保存（Create or Update）
     */
    async saveEdit(vnode, rowKey) {
        const draft = this.drafts[rowKey];
        if (!draft)
            return;
        const ok = await this.validateRow(vnode, rowKey, draft);
        if (!ok)
            return;
        const keyName = this.getRowKeyName(vnode);
        const isExisting = this.localData.some((r) => String(r?.[keyName]) === String(rowKey));
        if (isExisting) {
            const idx = this.localData.findIndex((r) => String(r?.[keyName]) === String(rowKey));
            const oldRow = { ...this.localData[idx] };
            if (vnode.attrs.onUpdate) {
                try {
                    const res = await vnode.attrs.onUpdate(oldRow, { ...draft });
                    if (res === false)
                        return;
                    if (res && typeof res === "object") {
                        this.localData[idx] = { ...res };
                    }
                    else {
                        this.localData[idx] = { ...draft };
                    }
                }
                catch {
                    return;
                }
            }
            else {
                this.localData[idx] = { ...draft };
            }
        }
        else {
            if (vnode.attrs.onCreate) {
                try {
                    const res = await vnode.attrs.onCreate({ ...draft });
                    if (res === false)
                        return;
                    const pos = vnode.attrs.newRowPosition ?? "top";
                    if (res && typeof res === "object") {
                        if (pos === "top")
                            this.localData = [{ ...res }, ...this.localData];
                        else
                            this.localData = [...this.localData, { ...res }];
                    }
                    else {
                        if (pos === "top")
                            this.localData = [{ ...draft }, ...this.localData];
                        else
                            this.localData = [...this.localData, { ...draft }];
                    }
                }
                catch {
                    return;
                }
            }
            else {
                const pos = vnode.attrs.newRowPosition ?? "top";
                if (pos === "top")
                    this.localData = [{ ...draft }, ...this.localData];
                else
                    this.localData = [...this.localData, { ...draft }];
            }
        }
        vnode.attrs.onChange?.(this.localData.map((r) => ({ ...r })));
        delete this.drafts[rowKey];
        this.draftOrder = this.draftOrder.filter((k) => k !== rowKey);
        const expandedKeys = this.getExpandedKeys(vnode);
        expandedKeys.delete(rowKey);
        this.setExpandedKeys(vnode, expandedKeys);
        delete this.editingForms[rowKey];
        if (this.errors[rowKey])
            delete this.errors[rowKey];
        m.redraw();
    }
    /**
     * 削除（アニメーション + API呼び出し）
     */
    async deleteRow(vnode, rowKey) {
        const keyName = this.getRowKeyName(vnode);
        const hasDraft = !!this.drafts[rowKey];
        const persistedIdx = this.localData.findIndex((r) => String(r?.[keyName]) === String(rowKey));
        const isPersisted = persistedIdx >= 0;
        const target = hasDraft
            ? { ...this.drafts[rowKey] }
            : isPersisted
                ? { ...this.localData[persistedIdx] }
                : null;
        if (vnode.attrs.onDelete && target) {
            try {
                const res = await vnode.attrs.onDelete(target);
                if (res === false)
                    return;
            }
            catch {
                return;
            }
        }
        if (hasDraft) {
            delete this.drafts[rowKey];
            this.draftOrder = this.draftOrder.filter((k) => k !== rowKey);
            const expandedKeys = this.getExpandedKeys(vnode);
            expandedKeys.delete(rowKey);
            this.setExpandedKeys(vnode, expandedKeys);
            delete this.editingForms[rowKey];
            if (this.errors[rowKey])
                delete this.errors[rowKey];
        }
        else if (isPersisted) {
            this.localData = this.localData.filter((r) => String(r?.[keyName]) !== String(rowKey));
        }
        vnode.attrs.onChange?.(this.localData.map((r) => ({ ...r })));
        m.redraw();
    }
    /**
     * フォーム内の入力フィールドを生成
     */
    renderFormField(vnode, col, rowKey, draft, formRef) {
        if (!col.editable)
            return null;
        const errorMsg = this.errors[rowKey]?.[col.dataIndex];
        const handleValueChange = (v) => {
            draft[col.dataIndex] = v;
            formRef.setFieldValue(col.dataIndex, v);
        };
        if (col.inputType === "number") {
            return (m(FormItem, { name: col.dataIndex, label: col.title, formRef: formRef, initialValue: draft[col.dataIndex] },
                m(InputNumberClassic, { value: draft[col.dataIndex], oninput: handleValueChange, class: classNames({ "is-invalid": !!errorMsg }) })));
        }
        else if (col.inputType === "select") {
            return (m(FormItem, { name: col.dataIndex, label: col.title, formRef: formRef, initialValue: draft[col.dataIndex] },
                m(Select, { value: draft[col.dataIndex], oninput: (v) => handleValueChange(v), options: (col.options || []).map((o) => ({ label: o.label, value: o.value })), showSearch: false, allowClear: true, class: classNames({ "is-invalid": !!errorMsg }) })));
        }
        else {
            return (m(FormItem, { name: col.dataIndex, label: col.title, formRef: formRef, initialValue: draft[col.dataIndex] },
                m(Input, { value: draft[col.dataIndex], oninput: handleValueChange, class: classNames({ "is-invalid": !!errorMsg }) })));
        }
    }
    /**
     * 拡張可能な行を生成（リスト + アコーディオン）
     */
    getRowsToRender(vnode) {
        const keyName = this.getRowKeyName(vnode);
        const persistedRows = this.localData.map((r) => ({ ...r }));
        const newDraftKeys = this.draftOrder.filter((k) => {
            return !persistedRows.some((r) => String(r?.[keyName]) === k);
        });
        const newDraftRows = newDraftKeys.map((k) => this.drafts[k]).filter(Boolean);
        const pos = vnode.attrs.newRowPosition ?? "top";
        const rowsToRender = pos === "top" ? [...newDraftRows, ...persistedRows] : [...persistedRows, ...newDraftRows];
        return rowsToRender.map((record, idx) => {
            const rowKey = String(record?.[keyName] ?? `r_${idx}`);
            return { record, rowKey, index: idx };
        });
    }
    ensureDraftForRow(vnode, record, rowKey) {
        if (!this.drafts[rowKey]) {
            this.drafts[rowKey] = { ...record };
        }
        if (!this.editingForms[rowKey]) {
            this.editingForms[rowKey] = new Form();
        }
        if (!this.errors[rowKey]) {
            this.errors[rowKey] = {};
        }
        return this.drafts[rowKey];
    }
    renderExpandedContent(vnode, draft, rowKey, idx) {
        const cols = vnode.attrs.columns;
        const formRef = this.editingForms[rowKey] || new Form();
        const visibleCols = cols.filter((col) => {
            if (col.visible) {
                return col.visible(draft);
            }
            return true;
        });
        return (m("div", { class: styles.expandedContent },
            m("form", { onsubmit: (e) => {
                    e.preventDefault();
                    this.saveEdit(vnode, rowKey);
                } },
                m("div", { class: "mb-3" }, visibleCols.map((col) => {
                    if (!col.editable) {
                        const value = draft[col.dataIndex];
                        const displayValue = col.render ? col.render(value, draft, idx) : value;
                        return (m("div", { key: col.key ?? col.dataIndex, class: "mb-2" },
                            m("label", { class: "form-label" },
                                m("strong", null,
                                    col.title,
                                    ":")),
                            m("div", { class: "form-control-plaintext" }, displayValue)));
                    }
                    return this.renderFormField(vnode, col, rowKey, draft, formRef);
                })),
                m("div", { class: styles.formActions },
                    m("button", { type: "submit", class: "btn btn-sm btn-success" },
                        m("i", { class: "bi bi-check-circle" }),
                        " \u4FDD\u5B58"),
                    m("button", { type: "button", class: "btn btn-sm btn-secondary", onclick: () => this.toggleExpand(vnode, rowKey) },
                        m("i", { class: "bi bi-x" }),
                        " \u30AD\u30E3\u30F3\u30BB\u30EB"),
                    m("button", { type: "button", class: "btn btn-sm btn-outline-danger", onclick: () => this.deleteRow(vnode, rowKey) },
                        m("i", { class: "bi bi-trash" }),
                        " \u524A\u9664")))));
    }
    /**
     * render 関数の結果を解析し、children と colSpan を抽出
     */
    parseRenderResult(result) {
        if (result &&
            typeof result === "object" &&
            !Array.isArray(result) &&
            "children" in result &&
            "props" in result) {
            const obj = result;
            return {
                children: obj.children,
                colSpan: obj.props.colSpan,
            };
        }
        return { children: result };
    }
    /**
     * 行の各セル info を事前計算（colSpan 対応）
     */
    computeCellInfos(vnode, record, index) {
        const cols = vnode.attrs.columns;
        const cellInfos = [];
        for (const col of cols) {
            const value = record[col.dataIndex];
            const isVisible = col.visible ? col.visible(record) : true;
            let displayValue = "";
            let colSpan = undefined;
            let shouldSkip = false;
            if (!isVisible) {
                // visible: false の場合、このセルはスキップ
                shouldSkip = true;
            }
            else if (col.render) {
                const renderResult = col.render(value, record, index);
                const parsed = this.parseRenderResult(renderResult);
                displayValue = parsed.children;
                colSpan = parsed.colSpan;
                if (colSpan === 0) {
                    shouldSkip = true;
                }
            }
            else {
                displayValue = value;
            }
            cellInfos.push({
                col,
                value,
                displayValue,
                colSpan,
                shouldSkip,
            });
        }
        return cellInfos;
    }
    /**
     * view: テンプレートの描画
     */
    view(vnode) {
        const rows = this.getRowsToRender(vnode);
        const cols = vnode.attrs.columns;
        return (m("div", { class: classNames(styles.expandableEditingTable, vnode.attrs.class), style: vnode.attrs.style },
            m("div", { class: styles.toolbar },
                m("div", null,
                    m("button", { type: "button", class: "btn btn-sm btn-primary", onclick: () => this.addRow(vnode) },
                        m("i", { class: "bi bi-plus-circle" }),
                        " \u8FFD\u52A0")),
                m("div", { class: styles.countText },
                    "\u4EF6\u6570: ",
                    rows.length)),
            rows.length === 0 ? (m("div", { class: styles.emptyAlert, role: "alert" }, "\u30C7\u30FC\u30BF\u304C\u3042\u308A\u307E\u305B\u3093")) : (m("div", { class: styles.tableResponsive },
                m("table", { class: styles.table },
                    m("thead", null,
                        m("tr", null,
                            m("th", { style: "width: 50px;" }),
                            cols.map((col) => (m("th", { key: col.key ?? col.dataIndex }, col.title))),
                            m("th", null, "\u64CD\u4F5C"))),
                    m("tbody", null, rows.map(({ record, rowKey, index }) => {
                        const expandedKeys = this.getExpandedKeys(vnode);
                        const isExpanded = expandedKeys.has(rowKey);
                        const canExpand = vnode.attrs.expandable?.rowExpandable
                            ? vnode.attrs.expandable.rowExpandable(record)
                            : true;
                        let expandedContent = null;
                        if (isExpanded && canExpand) {
                            const draft = this.ensureDraftForRow(vnode, record, rowKey);
                            const defaultExpandedContent = this.renderExpandedContent(vnode, draft, rowKey, index);
                            expandedContent = vnode.attrs.expandable?.expandedRowRender
                                ? vnode.attrs.expandable.expandedRowRender(record, index, defaultExpandedContent)
                                : defaultExpandedContent;
                        }
                        // セル情報を事前計算
                        const cellInfos = this.computeCellInfos(vnode, record, index);
                        const renderedCells = cellInfos
                            .map((cellInfo) => {
                            if (cellInfo.shouldSkip) {
                                return null;
                            }
                            const tdAttrs = {
                                key: cellInfo.col.key ?? cellInfo.col.dataIndex,
                                class: cellInfo.col.class,
                            };
                            if (cellInfo.colSpan !== undefined && cellInfo.colSpan !== 1) {
                                tdAttrs.colSpan = cellInfo.colSpan;
                            }
                            return m("td", { ...tdAttrs }, cellInfo.displayValue);
                        })
                            .filter((x) => x !== null);
                        const tableRows = [
                            m("tr", null,
                                m("td", { style: "width: 50px; text-align: center;" }, canExpand && (m("button", { type: "button", class: styles.expandBtn, onclick: (e) => {
                                        e.stopPropagation();
                                        this.toggleExpand(vnode, rowKey);
                                    }, style: "text-decoration: none;" },
                                    m("i", { class: classNames("bi", isExpanded ? "bi-dash-square" : "bi-plus-square") })))),
                                renderedCells,
                                m("td", { class: styles.textEnd },
                                    m("span", { class: styles.badgeSecondary }, isExpanded ? "編集中" : ""))),
                            ...(isExpanded && canExpand
                                ? [
                                    m("tr", { id: `exp-row-${rowKey}` },
                                        m("td", { colSpan: cols.length + 2 }, expandedContent)),
                                ]
                                : []),
                        ];
                        return m.fragment({ key: `rowfrag_${rowKey}` }, tableRows);
                    })))))));
    }
}
