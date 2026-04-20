/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Radio.module.scss";
// ===========================
// ユーティリティ
// ===========================
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
// ===========================
// メインコンポーネント
// ===========================
/**
 * @class RadioRoot
 * @description
 * Chakra UI 風ラジオグループコンポーネント。
 * Checkbox / Switch と統一された複合コンポーネントパターン。
 *
 * インジケーターは丸型で、variant は Checkbox と同様に
 * インジケーターのスタイルに反映される。
 *
 * @example
 * <Radio.Root value={val} onValueChange={(d) => val = d.value}>
 *   <Radio.Item value="a">
 *     <Radio.ItemIndicator />
 *     <Radio.ItemText>オプション A</Radio.ItemText>
 *     <Radio.ItemHiddenInput />
 *   </Radio.Item>
 * </Radio.Root>
 */
class RadioRoot {
    constructor() {
        this.internalValue = "";
        this.groupName = "";
    }
    oninit(vnode) {
        this.internalValue = vnode.attrs.defaultValue ?? "";
        this.groupName = vnode.attrs.name || `radio-${Math.random().toString(36).slice(2, 9)}`;
    }
    view(vnode) {
        const { variant = "outline", size = "md", colorPalette, value, defaultValue, onValueChange, name, disabled, readOnly, orientation = "vertical", class: className, style, } = vnode.attrs;
        const currentValue = value !== undefined ? value : this.internalValue;
        const handleChange = (val) => {
            if (disabled || readOnly)
                return;
            if (!this.isControlled(vnode.attrs)) {
                this.internalValue = val;
            }
            onValueChange?.({ value: val });
        };
        // カラーパレット → CSS 変数
        const rootStyle = { ...(style ?? {}) };
        if (colorPalette) {
            rootStyle["--radio-color"] = colorPalette;
        }
        const children = this.processChildren(vnode.children, {
            variant, size, currentValue, groupName: this.groupName,
            disabled, readOnly, handleChange,
        });
        return (m("div", { role: "radiogroup", "aria-orientation": orientation, class: classNames(styles.root, orientation === "horizontal" ? styles.horizontal : styles.vertical, className), style: rootStyle, "data-scope": "radio-group", "data-part": "root" }, children));
    }
    isControlled(attrs) {
        return attrs.value !== undefined;
    }
    processChildren(children, ctx) {
        if (!children)
            return children;
        if (!Array.isArray(children))
            return children;
        return children.map((child) => {
            if (!child || typeof child !== "object" || !child.tag)
                return child;
            if (child.tag === RadioItem) {
                return m(RadioItem, {
                    ...child.attrs,
                    _ctx: ctx,
                }, child.children);
            }
            return child;
        });
    }
}
/**
 * @class RadioItem
 * @description
 * ラジオグループの個別アイテム。
 * Checkbox.Root の `<label>` と同じ構造で、variant/size クラスを持つ。
 */
class RadioItem {
    view(vnode) {
        const { value, disabled: itemDisabled, invalid, class: className, style, _ctx } = vnode.attrs;
        const ctx = _ctx || {};
        const isDisabled = itemDisabled || ctx.disabled;
        const isChecked = ctx.currentValue === value;
        const state = isChecked ? "checked" : "unchecked";
        const handleClick = () => {
            if (!isDisabled && !ctx.readOnly)
                ctx.handleChange?.(value);
        };
        const children = this.processChildren(vnode.children, {
            ...ctx, value, isChecked, isDisabled, state, handleClick,
        });
        return (m("label", { class: classNames(styles.item, styles[`variant${capitalize(ctx.variant || "outline")}`], styles[`size${capitalize(ctx.size || "md")}`], {
                [styles.disabled]: isDisabled,
                [styles.readOnly]: ctx.readOnly,
                [styles.invalid]: invalid,
            }, className), style: style, "data-scope": "radio-group", "data-part": "item", "data-state": state }, children));
    }
    processChildren(children, ctx) {
        if (!children)
            return children;
        if (!Array.isArray(children))
            return children;
        return children.map((child) => {
            if (!child || typeof child !== "object" || !child.tag)
                return child;
            if (child.tag === RadioItemIndicator) {
                return m(RadioItemIndicator, { ...child.attrs, _ctx: ctx }, child.children);
            }
            if (child.tag === RadioItemText) {
                return m(RadioItemText, { ...child.attrs, _ctx: ctx }, child.children);
            }
            if (child.tag === RadioItemHiddenInput) {
                return m(RadioItemHiddenInput, { ...child.attrs, _ctx: ctx }, child.children);
            }
            return child;
        });
    }
}
/**
 * @class RadioItemIndicator
 * @description
 * ラジオボタンのインジケーター（丸い選択マーク）。
 * Checkbox.Control + Checkbox.Indicator に相当。
 * data-state で "checked" / "unchecked" を切り替え。
 */
class RadioItemIndicator {
    view(vnode) {
        const { _ctx, class: className, style } = vnode.attrs;
        const ctx = _ctx || {};
        return (m("span", { class: classNames(styles.control, className), style: style, "data-scope": "radio-group", "data-part": "item-control", "data-state": ctx.state || "unchecked" },
            m("span", { class: styles.indicator, "data-part": "item-indicator", "data-state": ctx.state || "unchecked" },
                m("span", { class: styles.indicatorDot }))));
    }
}
/**
 * @class RadioItemText
 * @description ラジオボタンのテキストラベル
 */
class RadioItemText {
    view(vnode) {
        const { class: className, style, _ctx } = vnode.attrs;
        return (m("span", { class: classNames(styles.label, className), style: style, "data-scope": "radio-group", "data-part": "item-text", "data-state": _ctx?.state || "unchecked" }, vnode.children));
    }
}
/**
 * @class RadioItemHiddenInput
 * @description hidden input（フォーム送信用・アクセシビリティ）
 */
class RadioItemHiddenInput {
    view(vnode) {
        const ctx = vnode.attrs._ctx || {};
        return (m("input", { type: "radio", name: ctx.groupName, value: ctx.value, checked: ctx.isChecked, disabled: ctx.isDisabled, class: styles.hiddenInput, onchange: () => ctx.handleClick?.(), role: "radio", "aria-checked": ctx.isChecked, "data-scope": "radio-group", "data-part": "item-hidden-input" }));
    }
}
/**
 * Radio 複合コンポーネント namespace
 */
const Radio = {
    Root: RadioRoot,
    Item: RadioItem,
    ItemIndicator: RadioItemIndicator,
    ItemText: RadioItemText,
    ItemHiddenInput: RadioItemHiddenInput,
};
export { Radio, RadioRoot, RadioItem, RadioItemIndicator, RadioItemText, RadioItemHiddenInput };
