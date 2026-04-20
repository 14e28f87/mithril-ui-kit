/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Container.module.scss";
/**
 * @class Container
 * @description
 * コンテンツの幅を制約するコンテナコンポーネント。
 * Chakra UI の Container に相当する。
 *
 * @example
 * <Container maxWidth="960px">
 *   <p>コンテンツ...</p>
 * </Container>
 */
class ContainerComponent {
    view(vnode) {
        const { maxWidth, centerContent, fluid, as: tag = "div", class: className, style, ...rest } = vnode.attrs;
        const inlineStyle = {};
        if (maxWidth && !fluid)
            inlineStyle.maxWidth = maxWidth;
        const mergedStyle = typeof style === "string"
            ? `${Object.entries(inlineStyle).map(([k, v]) => `${k.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`)}:${v}`).join(";")}${style ? `;${style}` : ""}`
            : { ...inlineStyle, ...(style || {}) };
        return m(tag, {
            ...rest,
            class: classNames(styles.container, fluid && styles.fluid, centerContent && styles.centerContent, className),
            style: mergedStyle,
        }, vnode.children);
    }
}
export { ContainerComponent as Container };
