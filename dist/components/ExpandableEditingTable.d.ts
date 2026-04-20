/** @jsx m */
import m from "mithril";
/** Handler 型エイリアス（EditableTable と同じ） */
export type CreateHandler<TRow> = (newRow: TRow) => void | boolean | TRow | Promise<void | boolean | TRow>;
export type UpdateHandler<TRow> = (oldRow: TRow, newRow: TRow) => void | boolean | TRow | Promise<void | boolean | TRow>;
export type DeleteHandler<TRow> = (row: TRow) => void | boolean | Promise<void | boolean>;
/**
 * render 関数の戻り値（colspan 対応）
 * - 単純な m.Children を返すか
 * - { children: m.Children; props: { colSpan?: number } } を返すか
 * colSpan: 0 の場合はセルをスキップ
 */
export type RenderResult = m.Children | {
    children: m.Children;
    props: {
        colSpan?: number;
    };
};
/**
 * 列定義（EditableTable と同じ）
 */
export type ExpandableEditableColumn<TRow = any> = {
    title: string;
    dataIndex: keyof TRow | string;
    key?: string;
    render?: (value: any, record: TRow, index: number) => RenderResult;
    editable?: boolean;
    inputType?: "text" | "number" | "select";
    options?: {
        label: string;
        value: any;
    }[];
    class?: string;
    validator?: (v: any, record?: TRow) => boolean | string | Promise<boolean | string>;
    visible?: (record: TRow) => boolean;
};
export type ExpandedRowRender<TRow = any> = (record: TRow, index: number, defaultContent?: m.Children) => m.Children;
export type ExpandableEditingTableExpandable<TRow = any> = {
    expandedRowRender?: ExpandedRowRender<TRow>;
    rowExpandable?: (record: TRow) => boolean;
};
/**
 * ExpandableEditingTable コンポーネント属性
 */
export type ExpandableEditingTableAttrs<TRow = any> = {
    dataSource: TRow[];
    columns: ExpandableEditableColumn<TRow>[];
    rowKey?: keyof TRow | string;
    class?: string;
    style?: Record<string, string>;
    onChange?: (newData: TRow[]) => void;
    newRowFactory?: () => TRow;
    newRowPosition?: "top" | "bottom";
    onCreate?: CreateHandler<TRow>;
    onUpdate?: UpdateHandler<TRow>;
    onDelete?: DeleteHandler<TRow>;
    preserveDraftsOnExternalChange?: boolean;
    expandable?: ExpandableEditingTableExpandable<TRow>;
    expandedRowKeys?: (string | number)[];
    onExpandedRowsChange?: (expandedRowKeys: (string | number)[]) => void;
};
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
export declare class ExpandableEditingTable<TRow = any> implements m.Component<ExpandableEditingTableAttrs<TRow>> {
    private drafts;
    private draftOrder;
    private internalExpandedKeys;
    private editingForms;
    private errors;
    private localData;
    private getExpandedKeys;
    private setExpandedKeys;
    /**
     * 初期化時にデータソースをコピーし、キーを生成
     */
    oninit(vnode: m.Vnode<ExpandableEditingTableAttrs<TRow>>): void;
    /**
     * 外部からのデータ変更を反映
     */
    onbeforeupdate(vnode: m.Vnode<ExpandableEditingTableAttrs<TRow>>, old: m.VnodeDOM<any>): void;
    private getRowKeyName;
    private getRowKeyFromRow;
    /**
     * 新規行を追加
     */
    private addRow;
    /**
     * 展開を切り替え
     */
    private toggleExpand;
    /**
     * バリデータを実行
     */
    private runValidator;
    /**
     * 行全体をバリデート
     */
    private validateRow;
    /**
     * 編集内容を保存（Create or Update）
     */
    private saveEdit;
    /**
     * 削除（アニメーション + API呼び出し）
     */
    private deleteRow;
    /**
     * フォーム内の入力フィールドを生成
     */
    private renderFormField;
    /**
     * 拡張可能な行を生成（リスト + アコーディオン）
     */
    private getRowsToRender;
    private ensureDraftForRow;
    private renderExpandedContent;
    /**
     * render 関数の結果を解析し、children と colSpan を抽出
     */
    private parseRenderResult;
    /**
     * 行の各セル info を事前計算（colSpan 対応）
     */
    private computeCellInfos;
    /**
     * view: テンプレートの描画
     */
    view(vnode: m.Vnode<ExpandableEditingTableAttrs<TRow>>): JSX.Element;
}
//# sourceMappingURL=ExpandableEditingTable.d.ts.map