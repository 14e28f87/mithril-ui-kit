/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Spinner.module.scss";
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
/**
 * Spinner コンポーネント — 処理中であることを示すビジュアルキュー
 *
 * @example
 * ```tsx
 * <Spinner size="md" />
 * <Spinner size="lg" colorPalette="blue" />
 * ```
 */
class SpinnerComponent {
    view(vnode) {
        const { size = "md", colorPalette, label = "読み込み中", class: className, ...rest } = vnode.attrs;
        return (m("span", { ...rest, role: "status", class: classNames(styles.spinner, styles[`size${capitalize(size)}`], colorPalette && styles[`color${capitalize(colorPalette)}`], className) },
            m("span", { class: styles.srOnly }, label)));
    }
}
export { SpinnerComponent as Spinner };
