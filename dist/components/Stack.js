/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Stack.module.scss";
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
class StackComponent {
    view(vnode) {
        const { direction = "column", gap, align, justify, wrap, separator, as: tag = "div", class: className, style, ...rest } = vnode.attrs;
        const inlineStyle = {};
        inlineStyle.flexDirection = direction;
        if (gap !== undefined && !separator)
            inlineStyle.gap = typeof gap === "number" ? `${gap}px` : gap;
        if (align)
            inlineStyle.alignItems = align;
        if (justify)
            inlineStyle.justifyContent = justify;
        if (wrap)
            inlineStyle.flexWrap = wrap;
        const mergedStyle = typeof style === "string"
            ? `${Object.entries(inlineStyle).map(([k, v]) => `${k.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`)}:${v}`).join(";")}${style ? `;${style}` : ""}`
            : { ...inlineStyle, ...(style || {}) };
        let children = vnode.children;
        // セパレーター挿入
        if (separator && Array.isArray(children)) {
            const flat = children.flat().filter((c) => c != null && c !== false && c !== "");
            const withSep = [];
            flat.forEach((child, i) => {
                if (i > 0)
                    withSep.push(separator);
                withSep.push(child);
            });
            children = withSep;
        }
        return m(tag, {
            ...rest,
            class: classNames(styles.stack, className),
            style: mergedStyle,
        }, children);
    }
}
/**
 * HStack — 横方向 Stack のショートカット
 */
class HStackComponent {
    view(vnode) {
        return m(StackComponent, { ...vnode.attrs, direction: "row" }, vnode.children);
    }
}
/**
 * VStack — 縦方向 Stack のショートカット
 */
class VStackComponent {
    view(vnode) {
        return m(StackComponent, { ...vnode.attrs, direction: "column" }, vnode.children);
    }
}
export { StackComponent as Stack, HStackComponent as HStack, VStackComponent as VStack };
