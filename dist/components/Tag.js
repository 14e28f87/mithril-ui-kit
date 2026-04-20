/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Tag.module.scss";
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
/* ─── マーカークラス ─── */
class TagLabelMarker {
    view() { return null; }
}
TagLabelMarker.__tagRole = "label";
class TagStartElementMarker {
    view() { return null; }
}
TagStartElementMarker.__tagRole = "startElement";
class TagEndElementMarker {
    view() { return null; }
}
TagEndElementMarker.__tagRole = "endElement";
class TagCloseTriggerMarker {
    view() { return null; }
}
TagCloseTriggerMarker.__tagRole = "closeTrigger";
/**
 * Tag Root コンポーネント — ラベルやカテゴリの表示
 *
 * @example
 * ```tsx
 * <Tag.Root variant="solid" colorPalette="blue">
 *   <Tag.Label>TypeScript</Tag.Label>
 * </Tag.Root>
 * <Tag.Root closable onClose={() => console.log("closed")}>
 *   <Tag.Label>削除可能</Tag.Label>
 * </Tag.Root>
 * ```
 */
class TagRoot {
    view(vnode) {
        const { variant = "subtle", size = "md", colorPalette = "gray", closable, onClose, class: className, ...rest } = vnode.attrs;
        const children = (Array.isArray(vnode.children) ? vnode.children : [vnode.children]).flat(Infinity);
        const rendered = [];
        for (const child of children) {
            if (child && typeof child === "object" && "tag" in child) {
                const tag = child.tag;
                const cv = child;
                if (tag?.__tagRole === "label") {
                    rendered.push(m("span", { class: classNames(styles.label, cv.attrs?.class) }, cv.children));
                    continue;
                }
                if (tag?.__tagRole === "startElement") {
                    rendered.push(m("span", { class: classNames(styles.startElement, cv.attrs?.class) }, cv.children));
                    continue;
                }
                if (tag?.__tagRole === "endElement") {
                    rendered.push(m("span", { class: classNames(styles.endElement, cv.attrs?.class) }, cv.children));
                    continue;
                }
                if (tag?.__tagRole === "closeTrigger") {
                    rendered.push(m("button", { type: "button", class: classNames(styles.closeTrigger, cv.attrs?.class), onclick: (e) => {
                            e.stopPropagation();
                            onClose?.();
                        }, "aria-label": "\u9589\u3058\u308B" }, cv.children && cv.children.length > 0 ? cv.children : "✕"));
                    continue;
                }
            }
            rendered.push(child);
        }
        if (closable && !children.some(c => c && typeof c === "object" && "tag" in c && c.tag &&
            c.tag?.__tagRole === "closeTrigger")) {
            rendered.push(m("button", { type: "button", class: styles.closeTrigger, onclick: (e) => {
                    e.stopPropagation();
                    onClose?.();
                }, "aria-label": "\u9589\u3058\u308B" }, "\u2715"));
        }
        return (m("span", { ...rest, class: classNames(styles.root, styles[`variant${capitalize(variant)}`], styles[`size${capitalize(size)}`], styles[`color${capitalize(colorPalette)}`], className) }, rendered));
    }
}
/**
 * Tag コンポーネント名前空間
 */
export const Tag = {
    Root: TagRoot,
    Label: TagLabelMarker,
    StartElement: TagStartElementMarker,
    EndElement: TagEndElementMarker,
    CloseTrigger: TagCloseTriggerMarker,
};
export { TagRoot };
