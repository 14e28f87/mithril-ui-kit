/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./CheckboxCard.module.scss";
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
/* ─── マーカークラス ─── */
class CCHiddenInputMarker {
    view() { return null; }
}
CCHiddenInputMarker.__ccRole = "hiddenInput";
class CCControlMarker {
    view() { return null; }
}
CCControlMarker.__ccRole = "control";
class CCContentMarker {
    view() { return null; }
}
CCContentMarker.__ccRole = "content";
class CCLabelMarker {
    view() { return null; }
}
CCLabelMarker.__ccRole = "label";
class CCDescriptionMarker {
    view() { return null; }
}
CCDescriptionMarker.__ccRole = "description";
class CCIndicatorMarker {
    view() { return null; }
}
CCIndicatorMarker.__ccRole = "indicator";
class CCAddonMarker {
    view() { return null; }
}
CCAddonMarker.__ccRole = "addon";
/**
 * CheckboxCard Root コンポーネント — カード形式のチェックボックス
 *
 * @example
 * ```tsx
 * <CheckboxCard.Root checked={isChecked} onCheckedChange={v => isChecked = v}>
 *   <CheckboxCard.Control>
 *     <CheckboxCard.Content>
 *       <CheckboxCard.Label>ラベル</CheckboxCard.Label>
 *       <CheckboxCard.Description>説明</CheckboxCard.Description>
 *     </CheckboxCard.Content>
 *     <CheckboxCard.Indicator />
 *   </CheckboxCard.Control>
 * </CheckboxCard.Root>
 * ```
 */
class CheckboxCardRoot {
    constructor() {
        this.internalChecked = false;
    }
    oninit(vnode) {
        this.internalChecked = vnode.attrs.defaultChecked || false;
    }
    view(vnode) {
        const { variant = "outline", size = "md", checked, defaultChecked, onCheckedChange, disabled, class: className, ...rest } = vnode.attrs;
        const isChecked = checked !== undefined ? checked : this.internalChecked;
        return (m("label", { ...rest, class: classNames(styles.root, styles[`variant${capitalize(variant)}`], styles[`size${capitalize(size)}`], { [styles.checked]: isChecked }, { [styles.disabled]: disabled }, className) },
            m("input", { type: "checkbox", checked: isChecked, disabled: disabled, class: styles.hiddenInput, onchange: () => {
                    if (disabled)
                        return;
                    const next = !isChecked;
                    this.internalChecked = next;
                    onCheckedChange?.(next);
                } }),
            this.renderChildren(vnode.children, isChecked)));
    }
    renderChildren(children, checked) {
        const arr = (Array.isArray(children) ? children : [children]).flat(Infinity);
        const rendered = [];
        for (const child of arr) {
            if (child && typeof child === "object" && "tag" in child) {
                const tag = child.tag;
                const cv = child;
                if (tag?.__ccRole === "hiddenInput")
                    continue;
                if (tag?.__ccRole === "control") {
                    rendered.push(m("div", { class: classNames(styles.control, cv.attrs?.class) }, this.renderChildren(cv.children, checked)));
                    continue;
                }
                if (tag?.__ccRole === "content") {
                    rendered.push(m("div", { class: classNames(styles.content, cv.attrs?.class) }, this.renderChildren(cv.children, checked)));
                    continue;
                }
                if (tag?.__ccRole === "label") {
                    rendered.push(m("div", { class: classNames(styles.label, cv.attrs?.class) }, cv.children));
                    continue;
                }
                if (tag?.__ccRole === "description") {
                    rendered.push(m("div", { class: classNames(styles.description, cv.attrs?.class) }, cv.children));
                    continue;
                }
                if (tag?.__ccRole === "indicator") {
                    rendered.push(m("span", { class: classNames(styles.indicator, { [styles.indicatorChecked]: checked }, cv.attrs?.class) }, checked ? "✓" : ""));
                    continue;
                }
                if (tag?.__ccRole === "addon") {
                    rendered.push(m("div", { class: classNames(styles.addon, cv.attrs?.class) }, cv.children));
                    continue;
                }
            }
            rendered.push(child);
        }
        return rendered;
    }
}
/**
 * CheckboxCard コンポーネント名前空間
 */
export const CheckboxCard = {
    Root: CheckboxCardRoot,
    HiddenInput: CCHiddenInputMarker,
    Control: CCControlMarker,
    Content: CCContentMarker,
    Label: CCLabelMarker,
    Description: CCDescriptionMarker,
    Indicator: CCIndicatorMarker,
    Addon: CCAddonMarker,
};
export { CheckboxCardRoot };
