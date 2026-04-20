/** @jsx m */
import m from "mithril";
/**
 * 列定義
 */
export type ExpandableColumn<TRow = any> = {
    title: string;
    dataIndex: keyof TRow | string;
    key?: string;
    render?: (value: any, record: TRow, index: number) => m.Children;
    class?: string;
    visible?: (record: TRow) => boolean;
};
export type ExpandedRowRender<TRow = any> = (record: TRow, index: number) => m.Children;
export type ExpandableTableExpandable<TRow = any> = {
    expandedRowRender: ExpandedRowRender<TRow>;
    rowExpandable?: (record: TRow) => boolean;
};
/**
 * ExpandableTable コンポーネント属性
 */
export type ExpandableTableAttrs<TRow = any> = {
    dataSource: TRow[];
    columns: ExpandableColumn<TRow>[];
    rowKey?: keyof TRow | string;
    class?: string;
    style?: Record<string, string>;
    expandable: ExpandableTableExpandable<TRow>;
    expandedRowKeys?: (string | number)[];
    onExpandedRowsChange?: (expandedRowKeys: (string | number)[]) => void;
};
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
export declare class ExpandableTable<TRow = any> implements m.Component<ExpandableTableAttrs<TRow>> {
    private internalExpandedKeys;
    private getExpandedKeys;
    private setExpandedKeys;
    private getRowKeyName;
    private getRowKeyFromRow;
    /**
     * 展開を切り替え
     */
    private toggleExpand;
    /**
     * view: テンプレートの描画
     */
    view(vnode: m.Vnode<ExpandableTableAttrs<TRow>>): JSX.Element;
}
//# sourceMappingURL=ExpandableTable.d.ts.map