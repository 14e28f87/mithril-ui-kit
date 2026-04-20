/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import * as _ from "lodash-es";
import { Input } from "./Input";
import { InputNumberClassic } from "./InputNumberClassic";
import { SelectClassic as Select } from "./SelectClassic";
import styles from "./EditableTable.module.scss";
/**
 * ユニークキー生成（簡易 UUID ライク）
 */
function generateKey(prefix = "k") {
    return `${prefix}_${Date.now().toString(36)}_${Math.floor(Math.random() * 0xffff).toString(36)}`;
}
/**
 * EditableTable
 *
 * 概要:
 * - インラインで編集可能なテーブルコンポーネント
 * - ドラフト段階で必ずユニーク key を生成
 * - Save/Delete/Edit は key ベースで管理
 * - 親 dataSource 更新時はドラフトを保持（オプション）
 * - 行の移動は FLIP アニメーション
 * - Delete は height 0px + opacity 0 で消える
 *
 * 使用例:
 * ```tsx
 * <EditableTable<User>
 *   dataSource={users}
 *   columns={columns}
 *   rowKey="id"
 *   onCreate={async (row) => await api.create(row)}
 *   onUpdate={async (old, new) => await api.update(new)}
 *   onDelete={async (row) => await api.delete(row)}
 *   onChange={(data) => users = data}
 * />
 * ```
 *
 * @template TRow - テーブルの行データ型
 */
export class EditableTable {
    constructor() {
        /** ドラフト状態（編集中の行データ） */
        this.drafts = {};
        /** ドラフトの順序 */
        this.draftOrder = [];
        /** 編集中のキーセット */
        this.editingKeys = new Set();
        /** エラー状態 */
        this.errors = {};
        /** ローカルデータソース */
        this.localData = [];
        /** FLIP 用：直前の行位置 */
        this.lastPositions = {};
        /** 削除アニメーション中のキー */
        this.leavingKeys = new Set();
    }
    /**
     * 初期化時にデータソースをコピーし、キーを生成
     * @param vnode Mithril 仮想ノード
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
     * 更新前に現在の行位置を記録（FLIP: First）
     */
    onbeforeupdate(vnode, old) {
        this.capturePositions();
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
                this.editingKeys.clear();
                this.errors = {};
            }
        }
    }
    /**
     * 更新後に FLIP アニメーションを再生（FLIP: Last → Invert → Play）
     */
    onupdate() {
        this.playFLIP();
    }
    getRowKeyName(vnode) {
        return vnode.attrs.rowKey ?? "key";
    }
    getRowKeyFromRow(vnode, row, idx) {
        const keyName = this.getRowKeyName(vnode);
        return String(row?.[keyName] ?? `r_${idx}`);
    }
    /**
     * 現在の行位置を記録（テーブル全体）
     */
    capturePositions() {
        const rows = document.querySelectorAll("tr[data-rowkey]");
        const map = {};
        rows.forEach((row) => {
            const el = row;
            const key = el.dataset.rowkey;
            if (!key)
                return;
            map[key] = el.getBoundingClientRect();
        });
        this.lastPositions = map;
    }
    /**
     * FLIP アニメーションを再生
     */
    playFLIP() {
        const rows = document.querySelectorAll("tr[data-rowkey]");
        rows.forEach((row) => {
            const el = row;
            const key = el.dataset.rowkey;
            if (!key)
                return;
            const oldPos = this.lastPositions[key];
            if (!oldPos)
                return;
            const newPos = el.getBoundingClientRect();
            const dx = oldPos.left - newPos.left;
            const dy = oldPos.top - newPos.top;
            if (dx === 0 && dy === 0)
                return;
            el.style.transition = "none";
            el.style.transform = `translate(${dx}px, ${dy}px)`;
            requestAnimationFrame(() => {
                el.style.transition = "transform 0.25s ease";
                el.style.transform = "";
            });
        });
        this.lastPositions = {};
    }
    /**
     * Add: 新規ドラフトを追加（ユニーク key 割り当て）
     */
    addRow(vnode) {
        const factory = vnode.attrs.newRowFactory ?? (() => ({}));
        const newRow = factory();
        const keyName = this.getRowKeyName(vnode);
        const generated = generateKey("d");
        newRow[keyName] = generated;
        const key = String(newRow[keyName]);
        this.drafts[key] = { ...newRow };
        const pos = vnode.attrs.newRowPosition ?? "top";
        if (pos === "top")
            this.draftOrder = [key, ...this.draftOrder];
        else
            this.draftOrder = [...this.draftOrder, key];
        this.editingKeys.add(key);
        this.errors[key] = {};
        m.redraw();
    }
    /**
     * 既存行の編集開始
     */
    startEditExisting(vnode, row, idx) {
        const keyName = this.getRowKeyName(vnode);
        if (row[keyName] == null) {
            row[keyName] = generateKey("p");
        }
        const key = String(row[keyName]);
        this.drafts[key] = { ...row };
        this.editingKeys.add(key);
        this.errors[key] = {};
        m.redraw();
    }
    /**
     * 編集をキャンセル
     */
    cancelEdit(vnode, rowKey) {
        if (this.drafts[rowKey])
            delete this.drafts[rowKey];
        this.draftOrder = this.draftOrder.filter((k) => k !== rowKey);
        this.editingKeys.delete(rowKey);
        if (this.errors[rowKey])
            delete this.errors[rowKey];
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
            // visible 条件をチェック
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
     * セル単位でバリデート
     */
    async validateCell(vnode, rowKey, col) {
        if (!col.editable)
            return true;
        const draft = this.drafts[rowKey] ?? {};
        const val = draft[col.dataIndex];
        const msg = await this.runValidator(col, val, draft);
        const rowErrs = { ...(this.errors[rowKey] || {}) };
        if (msg)
            rowErrs[col.dataIndex] = msg;
        else
            delete rowErrs[col.dataIndex];
        this.errors[rowKey] = rowErrs;
        m.redraw();
        return !msg;
    }
    /**
     * saveEdit: Create / Update
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
        this.editingKeys.delete(rowKey);
        if (this.errors[rowKey])
            delete this.errors[rowKey];
        m.redraw();
    }
    /**
     * 内部用：実際の削除ロジック（データ更新だけ）
     */
    performDelete(vnode, rowKey) {
        const keyName = this.getRowKeyName(vnode);
        const hasDraft = !!this.drafts[rowKey];
        const persistedIdx = this.localData.findIndex((r) => String(r?.[keyName]) === String(rowKey));
        const isPersisted = persistedIdx >= 0;
        if (hasDraft) {
            delete this.drafts[rowKey];
            this.draftOrder = this.draftOrder.filter((k) => k !== rowKey);
            this.editingKeys.delete(rowKey);
            if (this.errors[rowKey])
                delete this.errors[rowKey];
            if (isPersisted) {
                this.localData = this.localData.filter((r) => String(r?.[keyName]) !== String(rowKey));
                vnode.attrs.onChange?.(this.localData.map((r) => ({ ...r })));
            }
            return;
        }
        if (isPersisted) {
            this.localData = this.localData.filter((r) => String(r?.[keyName]) !== String(rowKey));
            vnode.attrs.onChange?.(this.localData.map((r) => ({ ...r })));
            this.editingKeys.delete(rowKey);
            if (this.errors[rowKey])
                delete this.errors[rowKey];
        }
    }
    /**
     * deleteRow: アニメーションしてから削除
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
        // 削除アニメーション：高さ 0px + opacity 0
        const rowEl = document.querySelector(`tr[data-rowkey="${rowKey}"]`);
        if (rowEl && !this.leavingKeys.has(rowKey)) {
            this.leavingKeys.add(rowKey);
            const height = rowEl.offsetHeight;
            rowEl.style.height = height + "px";
            rowEl.style.transition = "height 0.25s ease, opacity 0.25s ease";
            rowEl.offsetHeight; // reflow
            rowEl.style.height = "0px";
            rowEl.style.opacity = "0";
            await new Promise((resolve) => setTimeout(resolve, 260));
            this.leavingKeys.delete(rowKey);
        }
        this.performDelete(vnode, rowKey);
        m.redraw();
    }
    /**
     * セルのレンダリング（編集モード切り替え）
     */
    renderCell(vnode, col, row, rowKey, rowIndex) {
        const isEditing = this.editingKeys.has(rowKey) || !!this.drafts[rowKey];
        if (!isEditing) {
            const value = row[col.dataIndex];
            return col.render ? col.render(value, row, rowIndex) : value;
        }
        const draft = (this.drafts[rowKey] ?? row);
        const value = draft[col.dataIndex];
        const setValue = (v, validateNow = false) => {
            if (!this.drafts[rowKey])
                this.drafts[rowKey] = { ...row };
            this.drafts[rowKey][col.dataIndex] = v;
            if (this.errors[rowKey]?.[col.dataIndex]) {
                this.runValidator(col, v, this.drafts[rowKey]).then((msg) => {
                    const rowErrs = { ...(this.errors[rowKey] || {}) };
                    if (!msg)
                        delete rowErrs[col.dataIndex];
                    else
                        rowErrs[col.dataIndex] = msg;
                    this.errors[rowKey] = rowErrs;
                    m.redraw();
                });
            }
            else if (validateNow) {
                this.runValidator(col, v, this.drafts[rowKey]).then((msg) => {
                    const rowErrs = { ...(this.errors[rowKey] || {}) };
                    if (msg)
                        rowErrs[col.dataIndex] = msg;
                    else
                        delete rowErrs[col.dataIndex];
                    this.errors[rowKey] = rowErrs;
                    m.redraw();
                });
            }
            else {
                m.redraw();
            }
        };
        const errorMsg = this.errors[rowKey]?.[col.dataIndex];
        if (col.inputType === "number") {
            return (m("div", null,
                m(InputNumberClassic, { value: value, oninput: (v) => setValue(v), class: classNames({ "is-invalid": !!errorMsg }) }),
                errorMsg && m("div", { class: "invalid-feedback d-block" }, errorMsg)));
        }
        else if (col.inputType === "select") {
            return (m("div", null,
                m(Select, { value: value, oninput: (v) => {
                        setValue(v, true);
                    }, options: (col.options || []).map((o) => ({ label: o.label, value: o.value })), showSearch: false, allowClear: true, class: classNames({ "is-invalid": !!errorMsg }), onDropdownVisibleChange: async (open) => {
                        if (!open) {
                            await this.validateCell(vnode, rowKey, col);
                        }
                    } }),
                errorMsg && m("div", { class: "invalid-feedback d-block" }, errorMsg)));
        }
        else {
            return (m("div", null,
                m(Input, { value: value, oninput: (v) => setValue(v), class: classNames({ "is-invalid": !!errorMsg }) }),
                errorMsg && m("div", { class: "invalid-feedback d-block" }, errorMsg)));
        }
    }
    /**
     * view: テーブルの描画
     */
    view(vnode) {
        const cols = vnode.attrs.columns;
        const keyName = this.getRowKeyName(vnode);
        const persistedRows = this.localData.map((r) => ({ ...r }));
        const persistedReplaced = persistedRows.map((r, idx) => {
            const k = String(r?.[keyName] ?? `r_${idx}`);
            if (this.drafts[k])
                return this.drafts[k];
            return r;
        });
        const newDraftKeys = this.draftOrder.filter((k) => {
            return !persistedRows.some((r) => String(r?.[keyName]) === k);
        });
        const newDraftRows = newDraftKeys.map((k) => this.drafts[k]).filter(Boolean);
        const pos = vnode.attrs.newRowPosition ?? "top";
        const rowsToRender = pos === "top" ? [...newDraftRows, ...persistedReplaced] : [...persistedReplaced, ...newDraftRows];
        const tableClass = classNames("table table-sm table-hover", vnode.attrs.class);
        /**
         * 与えられたレコードに対して表示条件を満たすカラムをフィルタリング
         */
        const getVisibleCols = (record) => {
            return cols.filter((col) => {
                if (col.visible) {
                    return col.visible(record);
                }
                return true;
            });
        };
        return (m("div", { class: styles["editable-table-wrapper"] },
            m("div", { class: "d-flex justify-content-between align-items-center mb-2" },
                m("div", null,
                    m("button", { type: "button", class: "btn btn-sm btn-primary", onclick: () => this.addRow(vnode) },
                        m("i", { class: "bi bi-plus-circle" }),
                        " \u8FFD\u52A0")),
                m("div", { class: "text-muted small" },
                    "\u4EF6\u6570: ",
                    rowsToRender.length)),
            m("table", { class: tableClass, style: vnode.attrs.style },
                m("thead", null,
                    m("tr", null,
                        getVisibleCols(rowsToRender.length > 0 ? rowsToRender[0] : {}).map((col) => (m("th", { key: col.key ?? col.dataIndex, class: col.class }, col.title))),
                        m("th", { style: { width: "200px" } }, "\u64CD\u4F5C"))),
                m("tbody", null,
                    rowsToRender.map((record, idx) => {
                        const rowKey = String(record?.[keyName] ?? `r_${idx}`);
                        const isEditing = !!this.drafts[rowKey] || this.editingKeys.has(rowKey);
                        const visibleCols = getVisibleCols(record);
                        return (m("tr", { key: rowKey, "data-rowkey": rowKey, class: classNames({ [styles["editable-table-row-editing"]]: isEditing }) },
                            visibleCols.map((col) => (m("td", { key: col.key ?? col.dataIndex }, this.renderCell(vnode, col, record, rowKey, idx)))),
                            m("td", { class: classNames(styles["editable-table-actions"], { [styles["is-editing"]]: isEditing }) }, isEditing ? (m("div", { class: "d-flex gap-1" },
                                m("button", { type: "button", class: "btn btn-sm btn-success", onclick: () => this.saveEdit(vnode, rowKey) },
                                    m("i", { class: "bi bi-check-circle" }),
                                    " \u4FDD\u5B58"),
                                m("button", { type: "button", class: "btn btn-sm btn-secondary", onclick: () => this.cancelEdit(vnode, rowKey) },
                                    m("i", { class: "bi bi-x" }),
                                    " \u30AD\u30E3\u30F3\u30BB\u30EB"))) : (m("div", { class: "d-flex gap-1" },
                                m("button", { type: "button", class: "btn btn-sm btn-outline-primary", onclick: () => this.startEditExisting(vnode, record, idx) },
                                    m("i", { class: "bi bi-pencil" }),
                                    " \u7DE8\u96C6"),
                                m("button", { type: "button", class: "btn btn-sm btn-outline-danger", onclick: () => this.deleteRow(vnode, rowKey) },
                                    m("i", { class: "bi bi-trash" }),
                                    " \u524A\u9664"))))));
                    }),
                    rowsToRender.length === 0 && (m("tr", null,
                        m("td", { colspan: cols.length + 1, class: "text-center text-muted py-3" }, "\u30C7\u30FC\u30BF\u304C\u3042\u308A\u307E\u305B\u3093")))))));
    }
}
