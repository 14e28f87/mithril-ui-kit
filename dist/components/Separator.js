/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Separator.module.scss";
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
/**
 * @class Separator
 * @description
 * コンテンツを視覚的に分離するセパレーターコンポーネント。
 * Chakra UI の Separator に相当する。
 *
 * @example
 * <Separator />
 * <Separator orientation="vertical" variant="dashed" />
 * <Separator label="セクション" />
 */
class SeparatorComponent {
    view(vnode) {
        const { variant = "solid", size = "sm", orientation = "horizontal", label, labelPlacement = "center", colorPalette, class: className, ...rest } = vnode.attrs;
        const isVertical = orientation === "vertical";
        return (m("div", { ...rest, role: "separator", "aria-orientation": orientation, class: classNames(styles.separator, isVertical ? styles.vertical : styles.horizontal, styles[`variant${capitalize(variant)}`], styles[`size${capitalize(size)}`], colorPalette && styles[`color${capitalize(colorPalette)}`], label && styles.hasLabel, label && styles[`label${capitalize(labelPlacement)}`], className) }, label && m("span", { class: styles.label }, label)));
    }
}
export { SeparatorComponent as Separator };
