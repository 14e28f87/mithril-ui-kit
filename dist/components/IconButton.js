/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Button.module.scss";
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
/**
 * @class IconButton
 * @description
 * アイコンのみを表示する正方形のボタンコンポーネント。
 * Chakra UI の IconButton に相当する。
 *
 * @example
 * <IconButton aria-label="検索" variant="outline">
 *   <i class="bi bi-search" />
 * </IconButton>
 */
class IconButtonComponent {
    view(vnode) {
        const { variant = "solid", size = "md", colorPalette, disabled, loading, rounded, class: className, ...rest } = vnode.attrs;
        const isDisabled = disabled || loading;
        return (m("button", { ...rest, type: rest.type || "button", disabled: isDisabled, "data-loading": loading || undefined, class: classNames(styles.button, styles.iconButton, styles[`variant${capitalize(variant)}`], styles[`iconSize${capitalize(size)}`], colorPalette && styles[`color${capitalize(colorPalette)}`], rounded && styles[`rounded${capitalize(rounded)}`], loading && styles.loading, className) }, loading
            ? m("span", { class: styles.spinnerIcon })
            : vnode.children));
    }
}
export { IconButtonComponent as IconButton };
