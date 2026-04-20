/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./TextArea.module.scss";
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
/**
 * TextArea コンポーネント — 複数行テキスト入力
 *
 * @example
 * ```tsx
 * <TextArea placeholder="コメントを入力..." />
 * <TextArea variant="flushed" size="lg" autoresize />
 * ```
 */
class TextAreaComponent {
    view(vnode) {
        const { variant = "outline", size = "md", autoresize, resize = "vertical", disabled, invalid, class: className, ...rest } = vnode.attrs;
        return (m("textarea", { ...rest, disabled: disabled, "aria-invalid": invalid || undefined, class: classNames(styles.textarea, styles[`variant${capitalize(variant)}`], styles[`size${capitalize(size)}`], { [styles.disabled]: disabled }, { [styles.invalid]: invalid }, className), style: { resize: autoresize ? "none" : resize }, oninput: autoresize ? (e) => {
                const target = e.target;
                target.style.height = "auto";
                target.style.height = target.scrollHeight + "px";
                if (rest.oninput)
                    rest.oninput(e);
            } : rest.oninput }));
    }
}
export { TextAreaComponent as TextArea };
