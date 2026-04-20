/** @jsx m */
import m from "mithril";
/**
 * Table バリアント
 */
export type TableVariant = "line" | "outline";
/**
 * Table サイズ
 */
export type TableSize = "sm" | "md" | "lg";
type TableRole = "header" | "body" | "footer" | "row" | "columnHeader" | "cell" | "caption" | "scrollArea" | "columnGroup" | "column";
export interface TableRootAttrs {
    /** バリアント */
    variant?: TableVariant;
    /** サイズ */
    size?: TableSize;
    /** ストライプ */
    striped?: boolean;
    /** ホバーハイライト */
    hoverable?: boolean;
    /** スティッキーヘッダー */
    stickyHeader?: boolean;
    /** 追加クラス */
    class?: string;
    [key: string]: any;
}
declare class THeaderMarker {
    static __tRole: TableRole;
    view(): null;
}
declare class TBodyMarker {
    static __tRole: TableRole;
    view(): null;
}
declare class TFooterMarker {
    static __tRole: TableRole;
    view(): null;
}
declare class TRowMarker {
    static __tRole: TableRole;
    view(): null;
}
declare class TColumnHeaderMarker {
    static __tRole: TableRole;
    view(): null;
}
declare class TCellMarker {
    static __tRole: TableRole;
    view(): null;
}
declare class TCaptionMarker {
    static __tRole: TableRole;
    view(): null;
}
declare class TScrollAreaMarker {
    static __tRole: TableRole;
    view(): null;
}
declare class TColumnGroupMarker {
    static __tRole: TableRole;
    view(): null;
}
declare class TColumnMarker {
    static __tRole: TableRole;
    view(): null;
}
/**
 * Table Root コンポーネント — データテーブル表示
 *
 * @example
 * ```tsx
 * <Table.Root variant="line" striped>
 *   <Table.Header>
 *     <Table.Row>
 *       <Table.ColumnHeader>名前</Table.ColumnHeader>
 *       <Table.ColumnHeader>値</Table.ColumnHeader>
 *     </Table.Row>
 *   </Table.Header>
 *   <Table.Body>
 *     <Table.Row>
 *       <Table.Cell>項目A</Table.Cell>
 *       <Table.Cell>100</Table.Cell>
 *     </Table.Row>
 *   </Table.Body>
 * </Table.Root>
 * ```
 */
declare class TableRoot implements m.ClassComponent<TableRootAttrs> {
    view(vnode: m.Vnode<TableRootAttrs>): JSX.Element;
    private renderChildren;
}
/**
 * Table コンポーネント名前空間
 */
export declare const Table: {
    readonly Root: typeof TableRoot;
    readonly Header: typeof THeaderMarker;
    readonly Body: typeof TBodyMarker;
    readonly Footer: typeof TFooterMarker;
    readonly Row: typeof TRowMarker;
    readonly ColumnHeader: typeof TColumnHeaderMarker;
    readonly Cell: typeof TCellMarker;
    readonly Caption: typeof TCaptionMarker;
    readonly ScrollArea: typeof TScrollAreaMarker;
    readonly ColumnGroup: typeof TColumnGroupMarker;
    readonly Column: typeof TColumnMarker;
};
export { TableRoot };
//# sourceMappingURL=Table.d.ts.map