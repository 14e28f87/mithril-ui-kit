/** @jsx m */
import m from "mithril";
/**
 * レスポンシブ方向指定のブレークポイントオブジェクト
 */
export interface ResponsiveDirection {
    /** デフォルト（モバイルファースト） */
    base?: "row" | "column" | "row-reverse" | "column-reverse";
    /** ≥576px */
    sm?: "row" | "column" | "row-reverse" | "column-reverse";
    /** ≥768px */
    md?: "row" | "column" | "row-reverse" | "column-reverse";
    /** ≥992px */
    lg?: "row" | "column" | "row-reverse" | "column-reverse";
    /** ≥1200px */
    xl?: "row" | "column" | "row-reverse" | "column-reverse";
    /** ≥1400px */
    xxl?: "row" | "column" | "row-reverse" | "column-reverse";
}
/**
 * Stack の属性
 */
export interface StackAttrs {
    /**
     * スタック方向。文字列またはレスポンシブオブジェクトで指定可能。
     * @example
     * direction="row"
     * direction={{ base: "column", md: "row" }}
     */
    direction?: "row" | "column" | "row-reverse" | "column-reverse" | ResponsiveDirection;
    /** gap */
    gap?: string | number;
    /** align-items */
    align?: string;
    /** justify-content */
    justify?: string;
    /** flex-wrap */
    wrap?: "wrap" | "nowrap" | "wrap-reverse";
    /** セパレーター要素。StackSeparator を渡すと方向に合わせて自動回転する */
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
 * StackSeparator の属性
 */
export interface StackSeparatorAttrs {
    /** Stack から注入される方向（手動指定も可） */
    _direction?: "row" | "column" | "row-reverse" | "column-reverse";
    /** 追加クラス */
    class?: string;
    /** インラインスタイル */
    style?: Record<string, string> | string;
    [key: string]: any;
}
/**
 * @class StackSeparator
 * @description
 * Stack の方向（縦/横）に合わせて自動で向きが変わるセパレーターコンポーネント。
 * Stack の `separator` prop に渡すと、Stack が `_direction` を自動的に注入する。
 *
 * @example
 * <Stack direction="row" separator={<StackSeparator />}>
 *   <div>A</div>
 *   <div>B</div>
 * </Stack>
 */
declare class StackSeparatorComponent implements m.ClassComponent<StackSeparatorAttrs> {
    view(vnode: m.Vnode<StackSeparatorAttrs>): m.Vnode<any, any>;
}
/**
 * @class Stack
 * @description
 * 子要素を縦方向または横方向に並べるレイアウトコンポーネント。
 * Chakra UI の Stack に相当する。デフォルトは column 方向。
 * `direction` にオブジェクトを渡すとレスポンシブ方向切り替えが有効になる。
 *
 * @example
 * <Stack gap="8px">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Stack>
 *
 * @example レスポンシブ方向
 * <Stack direction={{ base: "column", md: "row" }} gap="16px">
 *   <div>A</div>
 *   <div>B</div>
 * </Stack>
 */
declare class StackComponent implements m.ClassComponent<StackAttrs> {
    /** レスポンシブ用スタイル要素を管理する一意 ID */
    private uid;
    /** レスポンシブ direction の場合に <style> を生成・更新する */
    private syncResponsiveStyle;
    oncreate(vnode: m.VnodeDOM<StackAttrs>): void;
    onupdate(vnode: m.VnodeDOM<StackAttrs>): void;
    onremove(): void;
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
export { StackComponent as Stack, HStackComponent as HStack, VStackComponent as VStack, StackSeparatorComponent as StackSeparator, };
export type { StackAttrs as HStackAttrs, StackAttrs as VStackAttrs };
//# sourceMappingURL=Stack.d.ts.map