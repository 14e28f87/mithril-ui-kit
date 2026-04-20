/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Status.module.scss";
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
/* ─── マーカークラス ─── */
class StatusIndicatorMarker {
    view() { return null; }
}
StatusIndicatorMarker.__statusRole = "indicator";
/** マーカー検出 */
function findMarkers(children) {
    let hasIndicator = false;
    if (Array.isArray(children)) {
        for (const child of children) {
            if (child && typeof child === "object" && "tag" in child) {
                const tag = child.tag;
                if (tag?.__statusRole === "indicator")
                    hasIndicator = true;
            }
        }
    }
    return { hasIndicator };
}
/**
 * Status Root コンポーネント — プロセスやステートの状態表示
 *
 * @example
 * ```tsx
 * <Status.Root value="success">
 *   <Status.Indicator />
 *   完了
 * </Status.Root>
 * ```
 */
class StatusRoot {
    view(vnode) {
        const { value = "info", size = "md", class: className, ...rest } = vnode.attrs;
        const children = (Array.isArray(vnode.children) ? vnode.children : [vnode.children]).flat(Infinity);
        const rendered = [];
        for (const child of children) {
            if (child && typeof child === "object" && "tag" in child) {
                const tag = child.tag;
                if (tag?.__statusRole === "indicator") {
                    rendered.push(m("span", { class: classNames(styles.indicator, styles[`value${capitalize(value)}`]) }));
                    continue;
                }
            }
            rendered.push(child);
        }
        return (m("span", { ...rest, class: classNames(styles.root, styles[`size${capitalize(size)}`], className), "data-status": value }, rendered));
    }
}
/**
 * Status コンポーネント名前空間
 */
export const Status = {
    Root: StatusRoot,
    Indicator: StatusIndicatorMarker,
};
export { StatusRoot };
