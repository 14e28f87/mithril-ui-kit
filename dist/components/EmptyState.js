/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./EmptyState.module.scss";
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
/* ─── マーカークラス ─── */
class EmptyStateContentMarker {
    view() { return null; }
}
EmptyStateContentMarker.__esRole = "content";
class EmptyStateIndicatorMarker {
    view() { return null; }
}
EmptyStateIndicatorMarker.__esRole = "indicator";
class EmptyStateTitleMarker {
    view() { return null; }
}
EmptyStateTitleMarker.__esRole = "title";
class EmptyStateDescriptionMarker {
    view() { return null; }
}
EmptyStateDescriptionMarker.__esRole = "description";
/**
 * EmptyState Root コンポーネント — データが空の時の表示
 *
 * @example
 * ```tsx
 * <EmptyState.Root>
 *   <EmptyState.Content>
 *     <EmptyState.Indicator>📭</EmptyState.Indicator>
 *     <EmptyState.Title>データがありません</EmptyState.Title>
 *     <EmptyState.Description>新しいアイテムを追加してください。</EmptyState.Description>
 *   </EmptyState.Content>
 * </EmptyState.Root>
 * ```
 */
class EmptyStateRoot {
    view(vnode) {
        const { size = "md", class: className, ...rest } = vnode.attrs;
        return (m("div", { ...rest, class: classNames(styles.root, styles[`size${capitalize(size)}`], className) }, this.renderChildren(vnode.children)));
    }
    renderChildren(children) {
        const arr = (Array.isArray(children) ? children : [children]).flat(Infinity);
        const rendered = [];
        for (const child of arr) {
            if (child && typeof child === "object" && "tag" in child) {
                const tag = child.tag;
                const cv = child;
                if (tag?.__esRole === "content") {
                    rendered.push(m("div", { class: classNames(styles.content, cv.attrs?.class) }, this.renderChildren(cv.children)));
                    continue;
                }
                if (tag?.__esRole === "indicator") {
                    rendered.push(m("div", { class: classNames(styles.indicator, cv.attrs?.class) }, cv.children));
                    continue;
                }
                if (tag?.__esRole === "title") {
                    rendered.push(m("div", { class: classNames(styles.title, cv.attrs?.class) }, cv.children));
                    continue;
                }
                if (tag?.__esRole === "description") {
                    rendered.push(m("div", { class: classNames(styles.description, cv.attrs?.class) }, cv.children));
                    continue;
                }
            }
            rendered.push(child);
        }
        return rendered;
    }
}
/**
 * EmptyState コンポーネント名前空間
 */
export const EmptyState = {
    Root: EmptyStateRoot,
    Content: EmptyStateContentMarker,
    Indicator: EmptyStateIndicatorMarker,
    Title: EmptyStateTitleMarker,
    Description: EmptyStateDescriptionMarker,
};
export { EmptyStateRoot };
