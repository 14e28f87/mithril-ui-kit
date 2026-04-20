/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./RadioCard.module.scss";
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
/* ─── マーカークラス ─── */
class RCLabelMarker {
    view() { return null; }
}
RCLabelMarker.__rcRole = "label";
class RCItemMarker {
    view() { return null; }
}
RCItemMarker.__rcRole = "item";
class RCItemHiddenInputMarker {
    view() { return null; }
}
RCItemHiddenInputMarker.__rcRole = "itemHiddenInput";
class RCItemControlMarker {
    view() { return null; }
}
RCItemControlMarker.__rcRole = "itemControl";
class RCItemContentMarker {
    view() { return null; }
}
RCItemContentMarker.__rcRole = "itemContent";
class RCItemTextMarker {
    view() { return null; }
}
RCItemTextMarker.__rcRole = "itemText";
class RCItemDescriptionMarker {
    view() { return null; }
}
RCItemDescriptionMarker.__rcRole = "itemDescription";
class RCItemIndicatorMarker {
    view() { return null; }
}
RCItemIndicatorMarker.__rcRole = "itemIndicator";
class RCItemAddonMarker {
    view() { return null; }
}
RCItemAddonMarker.__rcRole = "itemAddon";
/**
 * RadioCard Root コンポーネント — カード形式のラジオ選択
 *
 * @example
 * ```tsx
 * <RadioCard.Root value={selected} onValueChange={v => selected = v}>
 *   <RadioCard.Item value="a">
 *     <RadioCard.ItemControl>
 *       <RadioCard.ItemText>オプションA</RadioCard.ItemText>
 *       <RadioCard.ItemDescription>説明A</RadioCard.ItemDescription>
 *     </RadioCard.ItemControl>
 *     <RadioCard.ItemIndicator />
 *   </RadioCard.Item>
 * </RadioCard.Root>
 * ```
 */
class RadioCardRoot {
    view(vnode) {
        const { variant = "outline", size = "md", value, onValueChange, name, orientation = "vertical", class: className, ...rest } = vnode.attrs;
        return (m("div", { ...rest, role: "radiogroup", class: classNames(styles.root, styles[`variant${capitalize(variant)}`], styles[`size${capitalize(size)}`], styles[orientation], className) }, this.renderItems(vnode.children, { value, onValueChange, name, variant })));
    }
    renderItems(children, ctx) {
        const arr = (Array.isArray(children) ? children : [children]).flat(Infinity);
        const rendered = [];
        for (const child of arr) {
            if (child && typeof child === "object" && "tag" in child) {
                const tag = child.tag;
                const cv = child;
                if (tag?.__rcRole === "label") {
                    rendered.push(m("div", { class: classNames(styles.label, cv.attrs?.class) }, cv.children));
                    continue;
                }
                if (tag?.__rcRole === "item") {
                    const itemValue = cv.attrs?.value;
                    const checked = ctx.value === itemValue;
                    const disabled = cv.attrs?.disabled;
                    rendered.push(m("label", { class: classNames(styles.item, { [styles.checked]: checked }, { [styles.disabled]: disabled }, cv.attrs?.class) },
                        m("input", { type: "radio", name: ctx.name, value: itemValue, checked: checked, disabled: disabled, class: styles.hiddenInput, onchange: () => { if (!disabled)
                                ctx.onValueChange?.(itemValue); } }),
                        this.renderItemContent(cv.children, checked)));
                    continue;
                }
            }
            rendered.push(child);
        }
        return rendered;
    }
    renderItemContent(children, checked) {
        const arr = (Array.isArray(children) ? children : [children]).flat(Infinity);
        const rendered = [];
        for (const child of arr) {
            if (child && typeof child === "object" && "tag" in child) {
                const tag = child.tag;
                const cv = child;
                if (tag?.__rcRole === "itemHiddenInput")
                    continue;
                if (tag?.__rcRole === "itemControl") {
                    rendered.push(m("div", { class: classNames(styles.itemControl, cv.attrs?.class) }, this.renderItemContent(cv.children, checked)));
                    continue;
                }
                if (tag?.__rcRole === "itemContent") {
                    rendered.push(m("div", { class: classNames(styles.itemContent, cv.attrs?.class) }, this.renderItemContent(cv.children, checked)));
                    continue;
                }
                if (tag?.__rcRole === "itemText") {
                    rendered.push(m("div", { class: classNames(styles.itemText, cv.attrs?.class) }, cv.children));
                    continue;
                }
                if (tag?.__rcRole === "itemDescription") {
                    rendered.push(m("div", { class: classNames(styles.itemDescription, cv.attrs?.class) }, cv.children));
                    continue;
                }
                if (tag?.__rcRole === "itemIndicator") {
                    rendered.push(m("span", { class: classNames(styles.itemIndicator, cv.attrs?.class) },
                        m("span", { class: classNames(styles.indicatorDot, { [styles.indicatorDotChecked]: checked }) })));
                    continue;
                }
                if (tag?.__rcRole === "itemAddon") {
                    rendered.push(m("div", { class: classNames(styles.itemAddon, cv.attrs?.class) }, cv.children));
                    continue;
                }
            }
            rendered.push(child);
        }
        return rendered;
    }
}
/**
 * RadioCard コンポーネント名前空間
 */
export const RadioCard = {
    Root: RadioCardRoot,
    Label: RCLabelMarker,
    Item: RCItemMarker,
    ItemHiddenInput: RCItemHiddenInputMarker,
    ItemControl: RCItemControlMarker,
    ItemContent: RCItemContentMarker,
    ItemText: RCItemTextMarker,
    ItemDescription: RCItemDescriptionMarker,
    ItemIndicator: RCItemIndicatorMarker,
    ItemAddon: RCItemAddonMarker,
};
export { RadioCardRoot };
