/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Timeline.module.scss";
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
/* ─── マーカークラス ─── */
class TimelineItemMarker {
    view() { return null; }
}
TimelineItemMarker.__tlRole = "item";
class TimelineConnectorMarker {
    view() { return null; }
}
TimelineConnectorMarker.__tlRole = "connector";
class TimelineSeparatorMarker {
    view() { return null; }
}
TimelineSeparatorMarker.__tlRole = "separator";
class TimelineIndicatorMarker {
    view() { return null; }
}
TimelineIndicatorMarker.__tlRole = "indicator";
class TimelineContentMarker {
    view() { return null; }
}
TimelineContentMarker.__tlRole = "content";
class TimelineTitleMarker {
    view() { return null; }
}
TimelineTitleMarker.__tlRole = "title";
class TimelineDescriptionMarker {
    view() { return null; }
}
TimelineDescriptionMarker.__tlRole = "description";
/**
 * Timeline Root コンポーネント — タイムライン表示
 *
 * @example
 * ```tsx
 * <Timeline.Root>
 *   <Timeline.Item>
 *     <Timeline.Separator>
 *       <Timeline.Indicator>🔵</Timeline.Indicator>
 *       <Timeline.Connector />
 *     </Timeline.Separator>
 *     <Timeline.Content>
 *       <Timeline.Title>ステップ 1</Timeline.Title>
 *       <Timeline.Description>説明テキスト</Timeline.Description>
 *     </Timeline.Content>
 *   </Timeline.Item>
 * </Timeline.Root>
 * ```
 */
class TimelineRoot {
    view(vnode) {
        const { variant = "solid", size = "md", class: className, ...rest } = vnode.attrs;
        return (m("div", { ...rest, class: classNames(styles.root, styles[`variant${capitalize(variant)}`], styles[`size${capitalize(size)}`], className) }, this.renderChildren(vnode.children)));
    }
    renderChildren(children) {
        const arr = (Array.isArray(children) ? children : [children]).flat(Infinity);
        const rendered = [];
        for (const child of arr) {
            if (child && typeof child === "object" && "tag" in child) {
                const tag = child.tag;
                const cv = child;
                if (tag?.__tlRole === "item") {
                    rendered.push(m("div", { class: classNames(styles.item, cv.attrs?.class) }, this.renderChildren(cv.children)));
                    continue;
                }
                if (tag?.__tlRole === "separator") {
                    rendered.push(m("div", { class: classNames(styles.separator, cv.attrs?.class) }, this.renderChildren(cv.children)));
                    continue;
                }
                if (tag?.__tlRole === "connector") {
                    rendered.push(m("div", { class: classNames(styles.connector, cv.attrs?.class) }));
                    continue;
                }
                if (tag?.__tlRole === "indicator") {
                    rendered.push(m("div", { class: classNames(styles.indicator, cv.attrs?.class) }, cv.children));
                    continue;
                }
                if (tag?.__tlRole === "content") {
                    rendered.push(m("div", { class: classNames(styles.content, cv.attrs?.class) }, this.renderChildren(cv.children)));
                    continue;
                }
                if (tag?.__tlRole === "title") {
                    rendered.push(m("div", { class: classNames(styles.title, cv.attrs?.class) }, cv.children));
                    continue;
                }
                if (tag?.__tlRole === "description") {
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
 * Timeline コンポーネント名前空間
 */
export const Timeline = {
    Root: TimelineRoot,
    Item: TimelineItemMarker,
    Connector: TimelineConnectorMarker,
    Separator: TimelineSeparatorMarker,
    Indicator: TimelineIndicatorMarker,
    Content: TimelineContentMarker,
    Title: TimelineTitleMarker,
    Description: TimelineDescriptionMarker,
};
export { TimelineRoot };
