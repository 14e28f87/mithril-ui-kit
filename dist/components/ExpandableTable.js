/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./ExpandableTable.module.scss";
/**
 * ExpandableTable
 *
 * 概要:
 * - テーブル形式のリスト表示
 * - 各行の左側にある展開ボタンをクリックするとアコーディオン展開
 * - 展開時に指定されたコンテンツを表示
 *
 * 使用例:
 * ```tsx
 * <ExpandableTable<User>
 *   dataSource={users}
 *   columns={columns}
 *   rowKey="id"
 *   expandable={{
 *     expandedRowRender: (record, index) => <div>詳細: {record.name}</div>
 *   }}
 * />
 * ```
 */
export class ExpandableTable {
    constructor() {
        this.internalExpandedKeys = new Set();
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
    getRowKeyName(vnode) {
        return vnode.attrs.rowKey ?? "key";
    }
    getRowKeyFromRow(vnode, row, idx) {
        const keyName = this.getRowKeyName(vnode);
        return String(row?.[keyName] ?? `r_${idx}`);
    }
    /**
     * 展開を切り替え
     */
    toggleExpand(vnode, rowKey) {
        const expandedKeys = this.getExpandedKeys(vnode);
        if (expandedKeys.has(rowKey)) {
            expandedKeys.delete(rowKey);
        }
        else {
            expandedKeys.add(rowKey);
        }
        this.setExpandedKeys(vnode, expandedKeys);
        m.redraw();
    }
    /**
     * view: テンプレートの描画
     */
    view(vnode) {
        const rows = vnode.attrs.dataSource;
        const cols = vnode.attrs.columns;
        return (m("div", { class: classNames(styles.expandableTable, vnode.attrs.class), style: vnode.attrs.style }, rows.length === 0 ? (m("div", { class: styles.emptyAlert, role: "alert" }, "\u30C7\u30FC\u30BF\u304C\u3042\u308A\u307E\u305B\u3093")) : (m("div", { class: styles.tableResponsive },
            m("table", { class: styles.table },
                m("thead", null,
                    m("tr", null,
                        m("th", { style: "width: 50px;" }),
                        cols.map((col) => (m("th", { key: col.key ?? col.dataIndex }, col.title))))),
                m("tbody", null, rows.map((record, index) => {
                    const rowKey = this.getRowKeyFromRow(vnode, record, index);
                    const expandedKeys = this.getExpandedKeys(vnode);
                    const isExpanded = expandedKeys.has(rowKey);
                    const canExpand = vnode.attrs.expandable.rowExpandable
                        ? vnode.attrs.expandable.rowExpandable(record)
                        : true;
                    const expandedContent = isExpanded && canExpand
                        ? vnode.attrs.expandable.expandedRowRender(record, index)
                        : null;
                    return m.fragment({ key: `rowfrag_${rowKey}` }, [
                        m("tr", null,
                            m("td", { style: "width: 50px; text-align: center;" }, canExpand && (m("button", { type: "button", class: styles.expandBtn, onclick: (e) => {
                                    e.stopPropagation();
                                    this.toggleExpand(vnode, rowKey);
                                }, style: "text-decoration: none;" },
                                m("i", { class: classNames("bi", isExpanded ? "bi-dash-square" : "bi-plus-square") })))),
                            cols.map((col) => {
                                const value = record[col.dataIndex];
                                const displayValue = col.render ? col.render(value, record, index) : value;
                                const isVisible = col.visible ? col.visible(record) : true;
                                return (m("td", { key: col.key ?? col.dataIndex, class: col.class }, isVisible ? displayValue : ""));
                            })),
                        isExpanded && canExpand ? (m("tr", null,
                            m("td", { colSpan: cols.length + 1 }, expandedContent))) : null,
                    ]);
                })))))));
    }
}
