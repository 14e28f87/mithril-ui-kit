/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./ProList.module.scss";
export class ProList {
    constructor() {
        this.internalSelectedKeys = new Set();
        this.internalExpandedKeys = new Set();
        this.internalCurrent = 1;
        this.internalPageSize = 10;
    }
    oninit(vnode) {
        const rs = vnode.attrs.rowSelection;
        if (rs?.defaultSelectedRowKeys) {
            this.internalSelectedKeys = new Set(rs.defaultSelectedRowKeys);
        }
        const ex = vnode.attrs.expandable;
        if (ex?.defaultExpandedRowKeys) {
            this.internalExpandedKeys = new Set(ex.defaultExpandedRowKeys);
        }
        const pg = vnode.attrs.pagination;
        if (pg && typeof pg === "object") {
            this.internalCurrent = pg.defaultCurrent ?? 1;
            this.internalPageSize = pg.defaultPageSize ?? 10;
        }
    }
    resolveRowKey(vnode, record, index) {
        const rowKey = vnode.attrs.rowKey;
        if (typeof rowKey === "function") {
            return rowKey(record, index);
        }
        const keyName = rowKey ?? "key";
        const value = record?.[keyName];
        return value ?? `row_${index}`;
    }
    getSelectionKeys(attrs) {
        if (attrs.rowSelection?.selectedRowKeys) {
            return new Set(attrs.rowSelection.selectedRowKeys);
        }
        return this.internalSelectedKeys;
    }
    updateSelection(vnode, keys) {
        const rs = vnode.attrs.rowSelection;
        const nextKeys = Array.from(keys);
        const selectedRows = vnode.attrs.dataSource.filter((record, index) => {
            const rowKey = this.resolveRowKey(vnode, record, index);
            return keys.has(rowKey);
        });
        rs?.onChange?.(nextKeys, selectedRows);
        if (!rs?.selectedRowKeys) {
            this.internalSelectedKeys = keys;
        }
        m.redraw();
    }
    getExpandedKeys(attrs) {
        if (attrs.expandable?.expandedRowKeys) {
            return new Set(attrs.expandable.expandedRowKeys);
        }
        return this.internalExpandedKeys;
    }
    updateExpanded(vnode, keys) {
        const ex = vnode.attrs.expandable;
        ex?.onExpandedRowsChange?.(Array.from(keys));
        if (!ex?.expandedRowKeys) {
            this.internalExpandedKeys = keys;
        }
        m.redraw();
    }
    getPagination(attrs) {
        if (attrs.pagination === false)
            return null;
        return attrs.pagination ?? { defaultCurrent: 1, defaultPageSize: 10 };
    }
    getCurrentPage(pg) {
        return pg.current ?? this.internalCurrent;
    }
    getPageSize(pg) {
        return pg.pageSize ?? this.internalPageSize;
    }
    updatePagination(vnode, page, pageSize) {
        const pg = this.getPagination(vnode.attrs);
        if (!pg)
            return;
        const safePage = Math.max(1, page);
        const safeSize = Math.max(1, pageSize);
        pg.onChange?.(safePage, safeSize);
        if (pg.current == null)
            this.internalCurrent = safePage;
        if (pg.pageSize == null)
            this.internalPageSize = safeSize;
        m.redraw();
    }
    getMetaRawValue(meta, record) {
        if (!meta?.dataIndex)
            return undefined;
        return record?.[meta.dataIndex];
    }
    renderMeta(meta, record, index) {
        if (!meta)
            return null;
        const raw = this.getMetaRawValue(meta, record);
        if (meta.render)
            return meta.render(raw, record, index);
        if (raw != null)
            return raw;
        return meta.title ?? null;
    }
    renderActions(actionsDom) {
        if (actionsDom == null)
            return null;
        if (Array.isArray(actionsDom)) {
            return (m("ul", { class: styles.actions }, actionsDom.map((action, idx) => (m("li", { key: `action_${idx}` }, action)))));
        }
        return actionsDom;
    }
    renderMetaDom(vnode, record, index) {
        const metas = vnode.attrs.metas;
        if (!metas)
            return null;
        const avatarDom = this.renderMeta(metas.avatar, record, index);
        const titleDom = this.renderMeta(metas.title, record, index);
        const subTitleDom = this.renderMeta(metas.subTitle, record, index);
        const descriptionDom = this.renderMeta(metas.description, record, index);
        const contentDom = this.renderMeta(metas.content, record, index);
        const extraDom = this.renderMeta(metas.extra, record, index);
        const actionsDom = this.renderActions(this.renderMeta(metas.actions, record, index));
        return [
            avatarDom ? m("div", null, avatarDom) : null,
            m("div", { class: styles.metaMain },
                m("div", { class: styles.titleRow },
                    m("div", { class: styles.titleBlock },
                        titleDom ? m("h4", { class: styles.title }, titleDom) : null,
                        subTitleDom ? m("div", null, subTitleDom) : null),
                    extraDom ? m("div", { class: styles.extra }, extraDom) : null),
                descriptionDom ? m("div", { class: styles.description }, descriptionDom) : null,
                contentDom ? m("div", { class: styles.content }, contentDom) : null,
                actionsDom ? m("div", null, actionsDom) : null),
        ];
    }
    renderExpandIcon(vnode, record, index) {
        const ex = vnode.attrs.expandable;
        if (!ex)
            return null;
        const rowKey = this.resolveRowKey(vnode, record, index);
        const expandedKeys = this.getExpandedKeys(vnode.attrs);
        const expanded = expandedKeys.has(rowKey);
        const canExpand = ex.rowExpandable ? ex.rowExpandable(record) : true;
        return (m("button", { type: "button", class: classNames(styles.expandTrigger, { [styles.expandTriggerDisabled]: !canExpand }), disabled: !canExpand, onclick: (e) => {
                e.stopPropagation();
                if (!canExpand)
                    return;
                const next = this.getExpandedKeys(vnode.attrs);
                if (next.has(rowKey))
                    next.delete(rowKey);
                else
                    next.add(rowKey);
                this.updateExpanded(vnode, next);
            }, "aria-label": expanded ? "collapse" : "expand" },
            m("i", { class: classNames("bi", expanded ? "bi-dash-square" : "bi-plus-square") })));
    }
    buildPageNumbers(current, pageCount) {
        if (pageCount <= 7) {
            return Array.from({ length: pageCount }, (_, i) => i + 1);
        }
        const start = Math.max(1, current - 2);
        const end = Math.min(pageCount, start + 4);
        const adjustedStart = Math.max(1, end - 4);
        return Array.from({ length: end - adjustedStart + 1 }, (_, i) => adjustedStart + i);
    }
    view(vnode) {
        const attrs = vnode.attrs;
        const data = attrs.dataSource ?? [];
        const split = attrs.split ?? true;
        const size = attrs.size ?? "default";
        const pagination = this.getPagination(attrs);
        const total = pagination?.total ?? data.length;
        const current = pagination ? this.getCurrentPage(pagination) : 1;
        const pageSize = pagination ? this.getPageSize(pagination) : data.length;
        const pageCount = pagination ? Math.max(1, Math.ceil(total / pageSize)) : 1;
        const clampedCurrent = Math.min(Math.max(current, 1), pageCount);
        const useLocalPaging = !pagination || pagination.total == null || pagination.total <= data.length;
        const pageData = pagination && useLocalPaging
            ? data.slice((clampedCurrent - 1) * pageSize, clampedCurrent * pageSize)
            : data;
        const pageNumbers = pagination ? this.buildPageNumbers(clampedCurrent, pageCount) : [];
        const pageStartIndex = pagination && useLocalPaging ? (clampedCurrent - 1) * pageSize : 0;
        const selectionKeys = this.getSelectionKeys(attrs);
        const selectableRows = pageData.filter((record) => !(attrs.rowSelection?.getCheckboxProps?.(record)?.disabled));
        const selectableRowKeys = new Set(selectableRows.map((record, index) => this.resolveRowKey(vnode, record, pageStartIndex + index)));
        const checkedAll = selectableRows.length > 0 && Array.from(selectableRowKeys).every((key) => selectionKeys.has(key));
        return (m("div", { class: classNames(styles.proList, attrs.class, {
                [styles.bordered]: attrs.bordered,
                [styles.ghost]: attrs.ghost,
            }), style: attrs.style },
            (attrs.headerTitle || attrs.toolBarRender) && (m("div", { class: styles.toolbar },
                m("div", { class: styles.headerTitle }, attrs.headerTitle),
                m("div", null, attrs.toolBarRender?.()))),
            attrs.loading ? (m("div", { class: "d-flex justify-content-center py-4" },
                m("div", { class: "spinner-border", role: "status", "aria-label": "loading" }))) : pageData.length === 0 ? (m("div", { class: styles.empty }, attrs.locale?.emptyText ?? "データがありません")) : (m("ul", { class: styles.items }, pageData.map((record, index) => {
                const globalIndex = pageStartIndex + index;
                const rowKey = this.resolveRowKey(vnode, record, globalIndex);
                const rowProps = attrs.onRow?.(record, globalIndex);
                const disabled = attrs.rowSelection?.getCheckboxProps?.(record)?.disabled ?? false;
                const checked = selectionKeys.has(rowKey);
                const metaDom = this.renderMetaDom(vnode, record, globalIndex);
                const customItem = attrs.renderItem?.(record, globalIndex, metaDom);
                const ex = attrs.expandable;
                const expanded = ex ? this.getExpandedKeys(attrs).has(rowKey) : false;
                const canExpand = ex ? (ex.rowExpandable ? ex.rowExpandable(record) : true) : false;
                const expandIcon = ex ? this.renderExpandIcon(vnode, record, globalIndex) : null;
                const expandLeft = ex && (ex.expandIconPosition ?? "left") === "left";
                return (m("li", { key: `pli_${String(rowKey)}`, class: classNames(styles.item, {
                        [styles.itemNoSplit]: !split,
                        [styles.smallItem]: size === "small",
                        [styles.largeItem]: size === "large",
                    }), onclick: rowProps?.onclick },
                    m("div", { class: styles.itemInner },
                        attrs.rowSelection && (m("div", { class: styles.selector },
                            m("input", { type: "checkbox", class: "form-check-input", disabled: disabled, checked: checked, onclick: (e) => e.stopPropagation(), onchange: (e) => {
                                    e.stopPropagation();
                                    if (disabled)
                                        return;
                                    const next = this.getSelectionKeys(attrs);
                                    const input = e.target;
                                    if (input.checked)
                                        next.add(rowKey);
                                    else
                                        next.delete(rowKey);
                                    this.updateSelection(vnode, next);
                                } }))),
                        expandLeft ? expandIcon : null,
                        m("div", { class: styles.metaMain },
                            customItem ?? metaDom,
                            ex && expanded && canExpand ? (m("div", { class: styles.expanded }, ex.expandedRowRender(record, globalIndex))) : null),
                        !expandLeft ? expandIcon : null)));
            }))),
            attrs.rowSelection && pageData.length > 0 && (m("div", { class: styles.pagination },
                m("div", { class: "form-check" },
                    m("input", { type: "checkbox", class: "form-check-input", checked: checkedAll, onchange: (e) => {
                            const input = e.target;
                            const next = this.getSelectionKeys(attrs);
                            if (input.checked) {
                                selectableRows.forEach((record, index) => {
                                    next.add(this.resolveRowKey(vnode, record, pageStartIndex + index));
                                });
                            }
                            else {
                                selectableRows.forEach((record, index) => {
                                    next.delete(this.resolveRowKey(vnode, record, pageStartIndex + index));
                                });
                            }
                            this.updateSelection(vnode, next);
                        } }),
                    m("label", { class: "form-check-label ms-2" }, "\u30DA\u30FC\u30B8\u5185\u3092\u3059\u3079\u3066\u9078\u629E")),
                m("div", { class: "small text-muted" },
                    selectionKeys.size,
                    " \u4EF6\u9078\u629E\u4E2D"))),
            pagination && pageData.length > 0 && (m("div", { class: styles.pagination },
                m("div", { class: "small text-muted" },
                    "\u5408\u8A08 ",
                    total,
                    " \u4EF6"),
                m("div", { class: styles.pager },
                    m("button", { type: "button", class: "btn btn-sm btn-outline-secondary", disabled: clampedCurrent <= 1, onclick: () => this.updatePagination(vnode, clampedCurrent - 1, pageSize) }, "\u524D\u3078"),
                    pageNumbers.map((p) => (m("button", { key: `pg_${p}`, type: "button", class: classNames("btn btn-sm", p === clampedCurrent ? "btn-primary" : "btn-outline-secondary"), onclick: () => this.updatePagination(vnode, p, pageSize) }, p))),
                    m("button", { type: "button", class: "btn btn-sm btn-outline-secondary", disabled: clampedCurrent >= pageCount, onclick: () => this.updatePagination(vnode, clampedCurrent + 1, pageSize) }, "\u6B21\u3078"),
                    pagination.showSizeChanger && (m("select", { class: "form-select form-select-sm", style: "width: auto;", value: String(pageSize), onchange: (e) => {
                            const target = e.target;
                            this.updatePagination(vnode, 1, Number(target.value));
                        } }, (pagination.pageSizeOptions ?? [5, 10, 20, 50]).map((sizeOption) => (m("option", { value: String(sizeOption) },
                        sizeOption,
                        " / page"))))))))));
    }
}
