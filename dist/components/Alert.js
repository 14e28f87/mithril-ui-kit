/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Alert.module.scss";
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
/* ─── ステータスアイコン ─── */
const STATUS_ICONS = {
    info: "ℹ️",
    warning: "⚠️",
    success: "✅",
    error: "❌",
    neutral: "💬",
};
/* ─── マーカークラス ─── */
class AlertIndicatorMarker {
    view() { return null; }
}
AlertIndicatorMarker.__alertRole = "indicator";
class AlertContentMarker {
    view() { return null; }
}
AlertContentMarker.__alertRole = "content";
class AlertTitleMarker {
    view() { return null; }
}
AlertTitleMarker.__alertRole = "title";
class AlertDescriptionMarker {
    view() { return null; }
}
AlertDescriptionMarker.__alertRole = "description";
/**
 * Alert Root コンポーネント — フィードバックメッセージの表示
 *
 * @example
 * ```tsx
 * <Alert.Root status="success" variant="subtle">
 *   <Alert.Indicator />
 *   <Alert.Content>
 *     <Alert.Title>成功</Alert.Title>
 *     <Alert.Description>操作が完了しました。</Alert.Description>
 *   </Alert.Content>
 * </Alert.Root>
 * ```
 */
class AlertRoot {
    view(vnode) {
        const { status = "info", variant = "subtle", size = "md", class: className, ...rest } = vnode.attrs;
        const children = (Array.isArray(vnode.children) ? vnode.children : [vnode.children]).flat(Infinity);
        const rendered = [];
        for (const child of children) {
            if (child && typeof child === "object" && "tag" in child) {
                const tag = child.tag;
                const cv = child;
                if (tag?.__alertRole === "indicator") {
                    rendered.push(m("span", { class: classNames(styles.indicator, cv.attrs?.class) }, cv.children && cv.children.length > 0 ? cv.children : STATUS_ICONS[status]));
                    continue;
                }
                if (tag?.__alertRole === "content") {
                    rendered.push(m("div", { class: classNames(styles.content, cv.attrs?.class) }, this.renderContent(cv.children)));
                    continue;
                }
                if (tag?.__alertRole === "title") {
                    rendered.push(m("div", { class: classNames(styles.title, cv.attrs?.class) }, cv.children));
                    continue;
                }
                if (tag?.__alertRole === "description") {
                    rendered.push(m("div", { class: classNames(styles.description, cv.attrs?.class) }, cv.children));
                    continue;
                }
            }
            rendered.push(child);
        }
        return (m("div", { ...rest, role: "alert", class: classNames(styles.root, styles[`status${capitalize(status)}`], styles[`variant${capitalize(variant)}`], styles[`size${capitalize(size)}`], className) }, rendered));
    }
    renderContent(children) {
        const result = [];
        const arr = (Array.isArray(children) ? children : [children]).flat(Infinity);
        for (const child of arr) {
            if (child && typeof child === "object" && "tag" in child) {
                const tag = child.tag;
                const cv = child;
                if (tag?.__alertRole === "title") {
                    result.push(m("div", { class: classNames(styles.title, cv.attrs?.class) }, cv.children));
                    continue;
                }
                if (tag?.__alertRole === "description") {
                    result.push(m("div", { class: classNames(styles.description, cv.attrs?.class) }, cv.children));
                    continue;
                }
            }
            result.push(child);
        }
        return result;
    }
}
/**
 * Alert コンポーネント名前空間
 */
export const Alert = {
    Root: AlertRoot,
    Indicator: AlertIndicatorMarker,
    Content: AlertContentMarker,
    Title: AlertTitleMarker,
    Description: AlertDescriptionMarker,
};
export { AlertRoot };
