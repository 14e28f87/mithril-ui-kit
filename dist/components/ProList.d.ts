/** @jsx m */
import m from "mithril";
type Key = string | number;
export type ProListMetaValueRender<TRow = any> = (text: any, record: TRow, index: number) => m.Children;
export type ProListMetaField<TRow = any> = {
    dataIndex?: keyof TRow | string;
    title?: m.Children;
    render?: ProListMetaValueRender<TRow>;
};
export type ProListMetas<TRow = any> = {
    avatar?: ProListMetaField<TRow>;
    title?: ProListMetaField<TRow>;
    subTitle?: ProListMetaField<TRow>;
    description?: ProListMetaField<TRow>;
    content?: ProListMetaField<TRow>;
    extra?: ProListMetaField<TRow>;
    actions?: ProListMetaField<TRow>;
};
export type ProListRowSelection<TRow = any> = {
    selectedRowKeys?: Key[];
    defaultSelectedRowKeys?: Key[];
    onChange?: (selectedRowKeys: Key[], selectedRows: TRow[]) => void;
    getCheckboxProps?: (record: TRow) => {
        disabled?: boolean;
    };
};
export type ProListExpandable<TRow = any> = {
    expandedRowRender: (record: TRow, index: number) => m.Children;
    rowExpandable?: (record: TRow) => boolean;
    expandedRowKeys?: Key[];
    defaultExpandedRowKeys?: Key[];
    onExpandedRowsChange?: (expandedRowKeys: Key[]) => void;
    expandIconPosition?: "left" | "right";
};
export type ProListPagination = {
    current?: number;
    defaultCurrent?: number;
    pageSize?: number;
    defaultPageSize?: number;
    total?: number;
    showSizeChanger?: boolean;
    pageSizeOptions?: number[];
    onChange?: (page: number, pageSize: number) => void;
};
export type ProListAttrs<TRow = any> = {
    dataSource: TRow[];
    rowKey?: keyof TRow | string | ((record: TRow, index: number) => Key);
    metas?: ProListMetas<TRow>;
    renderItem?: (record: TRow, index: number, metaDom: m.Children) => m.Children;
    rowSelection?: ProListRowSelection<TRow>;
    expandable?: ProListExpandable<TRow>;
    pagination?: false | ProListPagination;
    headerTitle?: m.Children;
    toolBarRender?: () => m.Children;
    loading?: boolean;
    locale?: {
        emptyText?: m.Children;
    };
    size?: "small" | "default" | "large";
    bordered?: boolean;
    ghost?: boolean;
    split?: boolean;
    onRow?: (record: TRow, index: number) => {
        onclick?: (e: Event) => void;
    };
    class?: string;
    style?: Record<string, string>;
};
export declare class ProList<TRow = any> implements m.Component<ProListAttrs<TRow>> {
    private internalSelectedKeys;
    private internalExpandedKeys;
    private internalCurrent;
    private internalPageSize;
    oninit(vnode: m.Vnode<ProListAttrs<TRow>>): void;
    private resolveRowKey;
    private getSelectionKeys;
    private updateSelection;
    private getExpandedKeys;
    private updateExpanded;
    private getPagination;
    private getCurrentPage;
    private getPageSize;
    private updatePagination;
    private getMetaRawValue;
    private renderMeta;
    private renderActions;
    private renderMetaDom;
    private renderExpandIcon;
    private buildPageNumbers;
    view(vnode: m.Vnode<ProListAttrs<TRow>>): JSX.Element;
}
export {};
//# sourceMappingURL=ProList.d.ts.map