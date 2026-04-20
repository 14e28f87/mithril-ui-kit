/** @jsx m */
import m from "mithril";
/**
 * ScrollArea の属性
 */
export interface ScrollAreaAttrs {
    /** スクロール方向 */
    type?: "scroll" | "auto" | "hover" | "always";
    /** 最大高さ */
    maxHeight?: string | number;
    /** 最大幅 */
    maxWidth?: string | number;
    /** スクロールバーサイズ */
    scrollbarSize?: "sm" | "md" | "lg";
    /** レンダリングする要素タグ */
    as?: string;
    /** 追加クラス */
    class?: string;
    /** インラインスタイル */
    style?: Record<string, string> | string;
    [key: string]: any;
}
/**
 * @class ScrollArea
 * @description
 * スクロール可能な領域を提供するコンポーネント。
 * Chakra UI の ScrollArea に相当する。
 *
 * @example
 * <ScrollArea maxHeight="200px">
 *   <div>たくさんのコンテンツ...</div>
 * </ScrollArea>
 */
declare class ScrollAreaComponent implements m.ClassComponent<ScrollAreaAttrs> {
    view(vnode: m.Vnode<ScrollAreaAttrs>): m.Vnode<any, any>;
}
export { ScrollAreaComponent as ScrollArea };
//# sourceMappingURL=ScrollArea.d.ts.map