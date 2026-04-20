/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./ColorSwatch.module.scss";
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
/** サイズクラス名を生成 */
function sizeClass(size) {
    if (size.startsWith("2"))
        return "size2" + size.slice(1);
    return `size${capitalize(size)}`;
}
/**
 * ColorSwatch コンポーネント — 色の見本表示
 *
 * @example
 * ```tsx
 * <ColorSwatch value="#ff0000" size="md" />
 * <ColorSwatch value="rgba(0,0,255,0.5)" rounded />
 * ```
 */
class ColorSwatchComponent {
    view(vnode) {
        const { value, size = "md", rounded, class: className, ...rest } = vnode.attrs;
        return (m("span", { ...rest, class: classNames(styles.swatch, styles[sizeClass(size)], { [styles.rounded]: rounded }, className), style: { "--swatch-color": value } }, vnode.children));
    }
}
class ColorSwatchMixComponent {
    view(vnode) {
        const { colors, size = "md", class: className, ...rest } = vnode.attrs;
        const gradient = `linear-gradient(to right, ${colors.join(", ")})`;
        return (m("span", { ...rest, class: classNames(styles.swatch, styles[sizeClass(size)], className), style: { "--swatch-color": gradient } }));
    }
}
export { ColorSwatchComponent as ColorSwatch, ColorSwatchMixComponent as ColorSwatchMix };
