/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./SegmentedControl.module.scss";
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
/* ─── マーカークラス ─── */
class SCItemMarker {
    view() { return null; }
}
SCItemMarker.__scRole = "item";
class SCItemTextMarker {
    view() { return null; }
}
SCItemTextMarker.__scRole = "itemText";
class SCItemHiddenInputMarker {
    view() { return null; }
}
SCItemHiddenInputMarker.__scRole = "itemHiddenInput";
class SCIndicatorMarker {
    view() { return null; }
}
SCIndicatorMarker.__scRole = "indicator";
/**
 * SegmentedControl Root コンポーネント — ボタン風の切替セレクタ
 *
 * @example
 * ```tsx
 * <SegmentedControl.Root value={selected} onValueChange={v => selected = v}>
 *   <SegmentedControl.Item value="list">
 *     <SegmentedControl.ItemText>リスト</SegmentedControl.ItemText>
 *   </SegmentedControl.Item>
 *   <SegmentedControl.Item value="grid">
 *     <SegmentedControl.ItemText>グリッド</SegmentedControl.ItemText>
 *   </SegmentedControl.Item>
 * </SegmentedControl.Root>
 * ```
 */
class SegmentedControlRoot {
    view(vnode) {
        const { size = "md", value, onValueChange, orientation = "horizontal", class: className, ...rest } = vnode.attrs;
        const children = (Array.isArray(vnode.children) ? vnode.children : [vnode.children]).flat(Infinity);
        const items = [];
        for (const child of children) {
            if (child && typeof child === "object" && "tag" in child) {
                const tag = child.tag;
                const cv = child;
                if (tag?.__scRole === "item") {
                    const itemValue = cv.attrs?.value;
                    const checked = value === itemValue;
                    const disabled = cv.attrs?.disabled;
                    items.push(m("button", { type: "button", class: classNames(styles.item, { [styles.itemSelected]: checked }, { [styles.disabled]: disabled }, cv.attrs?.class), disabled: disabled, onclick: () => { if (!disabled)
                            onValueChange?.(itemValue); } }, this.renderItemContent(cv.children)));
                    continue;
                }
            }
            items.push(child);
        }
        return (m("div", { ...rest, role: "radiogroup", class: classNames(styles.root, styles[`size${capitalize(size)}`], styles[orientation], className) }, items));
    }
    renderItemContent(children) {
        const arr = (Array.isArray(children) ? children : [children]).flat(Infinity);
        const rendered = [];
        for (const child of arr) {
            if (child && typeof child === "object" && "tag" in child) {
                const tag = child.tag;
                const cv = child;
                if (tag?.__scRole === "itemText") {
                    rendered.push(m("span", { class: cv.attrs?.class }, cv.children));
                    continue;
                }
                if (tag?.__scRole === "itemHiddenInput")
                    continue;
            }
            rendered.push(child);
        }
        return rendered;
    }
}
/**
 * SegmentedControl コンポーネント名前空間
 */
export const SegmentedControl = {
    Root: SegmentedControlRoot,
    Item: SCItemMarker,
    ItemText: SCItemTextMarker,
    ItemHiddenInput: SCItemHiddenInputMarker,
    Indicator: SCIndicatorMarker,
};
export { SegmentedControlRoot };
