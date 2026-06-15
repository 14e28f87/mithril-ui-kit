/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Badge.module.scss";
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
/**
 * Badge コンポーネント — ステータスやカテゴリのハイライト表示に使用
 *
 * @example
 * ```tsx
 * <Badge variant="solid" color="success">New</Badge>
 * <Badge variant="outline" size="lg">Status</Badge>
 * ```
 */
class BadgeComponent {
    view(vnode) {
        const { variant = "subtle", size = "sm", color, class: className, ...rest } = vnode.attrs;
        return (m("span", { ...rest, class: classNames(styles.badge, styles[`variant${capitalize(variant)}`], styles[`size${capitalize(size)}`], color && styles[`color${capitalize(color)}`], className) }, vnode.children));
    }
}
export { BadgeComponent as Badge };
