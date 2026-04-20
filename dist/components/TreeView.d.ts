/** @jsx m */
import m from "mithril";
/**
 * TreeView サイズ
 */
export type TreeViewSize = "sm" | "md" | "lg";
/**
 * ツリーノードデータ
 */
export interface TreeNode {
    id: string;
    name: string;
    children?: TreeNode[];
    icon?: string;
    disabled?: boolean;
}
export interface TreeViewRootAttrs {
    /** サイズ */
    size?: TreeViewSize;
    /** バリアント */
    variant?: "plain" | "subtle";
    /** 選択値 */
    selectedIds?: string[];
    /** 値変更コールバック */
    onSelectionChange?: (ids: string[]) => void;
    /** 展開中のノード */
    expandedIds?: string[];
    /** 展開変更コールバック */
    onExpandChange?: (ids: string[]) => void;
    /** ツリーデータ */
    data?: TreeNode[];
    /** 追加クラス */
    class?: string;
    [key: string]: any;
}
/**
 * TreeView Root コンポーネント — ツリー構造の表示
 *
 * @example
 * ```tsx
 * const data = [
 *   { id: "1", name: "フォルダA", children: [
 *     { id: "1-1", name: "ファイル1" },
 *   ]},
 * ];
 * <TreeView.Root data={data} size="md" />
 * ```
 */
declare class TreeViewRoot implements m.ClassComponent<TreeViewRootAttrs> {
    private expandedIds;
    private selectedIds;
    oninit(vnode: m.Vnode<TreeViewRootAttrs>): void;
    onupdate(vnode: m.Vnode<TreeViewRootAttrs>): void;
    private toggleExpand;
    private toggleSelect;
    view(vnode: m.Vnode<TreeViewRootAttrs>): JSX.Element;
    private renderNode;
}
/**
 * TreeView コンポーネント名前空間
 */
export declare const TreeView: {
    readonly Root: typeof TreeViewRoot;
};
export { TreeViewRoot };
//# sourceMappingURL=TreeView.d.ts.map