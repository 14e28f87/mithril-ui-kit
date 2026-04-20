/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./ScrollArea.module.scss";
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
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
class ScrollAreaComponent {
    view(vnode) {
        const { type = "auto", maxHeight, maxWidth, scrollbarSize = "md", as: tag = "div", class: className, style, ...rest } = vnode.attrs;
        const inlineStyle = {};
        if (maxHeight !== undefined)
            inlineStyle.maxHeight = typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight;
        if (maxWidth !== undefined)
            inlineStyle.maxWidth = typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth;
        const mergedStyle = typeof style === "string"
            ? `${Object.entries(inlineStyle).map(([k, v]) => `${k.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`)}:${v}`).join(";")}${style ? `;${style}` : ""}`
            : { ...inlineStyle, ...(style || {}) };
        return m(tag, {
            ...rest,
            class: classNames(styles.scrollArea, styles[`type${capitalize(type)}`], styles[`scrollbar${capitalize(scrollbarSize)}`], className),
            style: mergedStyle,
        }, vnode.children);
    }
}
export { ScrollAreaComponent as ScrollArea };
