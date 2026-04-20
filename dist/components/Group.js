/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Group.module.scss";
/**
 * @class Group
 * @description
 * 要素をグループ化して並べるコンポーネント。
 * Chakra UI の Group に相当する。
 *
 * @example
 * <Group attached>
 *   <Button>Left</Button>
 *   <Button>Right</Button>
 * </Group>
 */
class GroupComponent {
    view(vnode) {
        const { attached, grow, gap, as: tag = "div", class: className, style, ...rest } = vnode.attrs;
        const inlineStyle = {};
        if (gap !== undefined && !attached)
            inlineStyle.gap = typeof gap === "number" ? `${gap}px` : gap;
        const mergedStyle = typeof style === "string"
            ? `${Object.entries(inlineStyle).map(([k, v]) => `${k.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`)}:${v}`).join(";")}${style ? `;${style}` : ""}`
            : { ...inlineStyle, ...(style || {}) };
        return m(tag, {
            ...rest,
            class: classNames(styles.group, attached && styles.attached, grow && styles.grow, className),
            style: mergedStyle,
        }, vnode.children);
    }
}
export { GroupComponent as Group };
