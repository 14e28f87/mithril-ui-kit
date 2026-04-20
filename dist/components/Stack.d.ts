/** @jsx m */
import m from "mithril";
/**
 * Stack の属性
 */
export interface StackAttrs {
    /** スタック方向 */
    direction?: "row" | "column" | "row-reverse" | "column-reverse";
    /** gap */
    gap?: string | number;
    /** align-items */
    align?: string;
    /** justify-content */
    justify?: string;
    /** flex-wrap */
    wrap?: "wrap" | "nowrap" | "wrap-reverse";
    /** セパレーター要素 */
    separator?: m.Children;
    /** レンダリングする要素タグ */
    as?: string;
    /** 追加クラス */
    class?: string;
    /** インラインスタイル */
    style?: Record<string, string> | string;
    [key: string]: any;
}
/**
 * @class Stack
 * @description
 * 子要素を縦方向または横方向に並べるレイアウトコンポーネント。
 * Chakra UI の Stack に相当する。デフォルトは column 方向。
 *
 * @example
 * <Stack gap="8px">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Stack>
 */
declare class StackComponent implements m.ClassComponent<StackAttrs> {
    view(vnode: m.Vnode<StackAttrs>): m.Vnode<any, any>;
}
/**
 * HStack — 横方向 Stack のショートカット
 */
declare class HStackComponent implements m.ClassComponent<StackAttrs> {
    view(vnode: m.Vnode<StackAttrs>): m.Vnode<StackAttrs, unknown>;
}
/**
 * VStack — 縦方向 Stack のショートカット
 */
declare class VStackComponent implements m.ClassComponent<StackAttrs> {
    view(vnode: m.Vnode<StackAttrs>): m.Vnode<StackAttrs, unknown>;
}
export { StackComponent as Stack, HStackComponent as HStack, VStackComponent as VStack };
export type { StackAttrs as HStackAttrs, StackAttrs as VStackAttrs };
//# sourceMappingURL=Stack.d.ts.map