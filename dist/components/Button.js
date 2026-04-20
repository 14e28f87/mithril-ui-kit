/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Button.module.scss";
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
/**
 * @class Button
 * @description
 * アクションやイベントをトリガーするボタンコンポーネント。
 * Chakra UI の Button に相当する。
 *
 * @example
 * <Button variant="solid" colorPalette="blue">クリック</Button>
 * <Button variant="outline" size="lg" loading>保存中...</Button>
 */
class ButtonComponent {
    view(vnode) {
        const { variant = "solid", size = "md", colorPalette, disabled, loading, loadingText, spinnerPlacement = "start", rounded, as: tag = "button", class: className, ...rest } = vnode.attrs;
        const isDisabled = disabled || loading;
        return m(tag, {
            ...rest,
            type: tag === "button" ? (rest.type || "button") : undefined,
            disabled: isDisabled,
            "data-loading": loading || undefined,
            class: classNames(styles.button, styles[`variant${capitalize(variant)}`], styles[`size${capitalize(size)}`], colorPalette && styles[`color${capitalize(colorPalette)}`], rounded && styles[`rounded${capitalize(rounded)}`], loading && styles.loading, className),
        }, [
            loading && spinnerPlacement === "start" && (m("span", { class: styles.spinner },
                m("span", { class: styles.spinnerIcon }))),
            loading && loadingText ? loadingText : vnode.children,
            loading && spinnerPlacement === "end" && (m("span", { class: styles.spinner },
                m("span", { class: styles.spinnerIcon }))),
        ]);
    }
}
/**
 * @class ButtonGroup
 * @description ボタンのグループ化
 */
class ButtonGroupComponent {
    view(vnode) {
        const { attached, gap, class: className, ...rest } = vnode.attrs;
        const inlineStyle = {};
        if (gap !== undefined && !attached)
            inlineStyle.gap = typeof gap === "number" ? `${gap}px` : gap;
        return (m("div", { ...rest, class: classNames(styles.buttonGroup, attached && styles.groupAttached, className), style: inlineStyle, role: "group" }, vnode.children));
    }
}
export { ButtonComponent as Button, ButtonGroupComponent as ButtonGroup };
