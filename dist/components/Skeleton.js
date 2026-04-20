/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Skeleton.module.scss";
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
/**
 * Skeleton コンポーネント — コンテンツ読み込み中のプレースホルダー表示
 *
 * @example
 * ```tsx
 * <Skeleton height="20px" width="200px" />
 * <Skeleton loading={isLoading}><p>実際のコンテンツ</p></Skeleton>
 * ```
 */
class SkeletonComponent {
    view(vnode) {
        const { variant = "pulse", loading = true, height, width, borderRadius, class: className, ...rest } = vnode.attrs;
        if (!loading) {
            return m(m.fragment, null, vnode.children);
        }
        const style = {};
        if (height)
            style.height = height;
        if (width)
            style.width = width;
        if (borderRadius)
            style.borderRadius = borderRadius;
        return (m("div", { ...rest, class: classNames(styles.skeleton, styles[`variant${capitalize(variant)}`], className), style: style, "aria-busy": "true", "aria-live": "polite" }));
    }
}
/**
 * SkeletonCircle — 丸型の Skeleton
 */
class SkeletonCircleComponent {
    view(vnode) {
        const { size = "2.5rem", class: className, ...rest } = vnode.attrs;
        return (m(SkeletonComponent, { ...rest, height: size, width: size, borderRadius: "50%", class: className }));
    }
}
class SkeletonTextComponent {
    view(vnode) {
        const { noOfLines = 3, class: className, loading = true, ...rest } = vnode.attrs;
        if (!loading) {
            return m(m.fragment, null, vnode.children);
        }
        const lines = Array.from({ length: noOfLines }, (_, i) => (m(SkeletonComponent, { key: i, ...rest, height: "0.75rem", width: i === noOfLines - 1 ? "80%" : "100%", class: styles.textLine })));
        return (m("div", { class: classNames(styles.textContainer, className) }, lines));
    }
}
export { SkeletonComponent as Skeleton, SkeletonCircleComponent as SkeletonCircle, SkeletonTextComponent as SkeletonText };
