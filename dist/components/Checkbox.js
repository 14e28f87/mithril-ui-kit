/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Checkbox.module.scss";
// ===========================
// マーカーコンポーネント
// ===========================
/** Checkbox.HiddenInput — 隠し input のマーカー */
export class CheckboxHiddenInputMarker {
    view(vnode) {
        return m("div", null, vnode.children);
    }
}
CheckboxHiddenInputMarker.__checkboxRole = "hiddenInput";
/** Checkbox.Control — コントロール枠のマーカー */
export class CheckboxControlMarker {
    view(vnode) {
        return m("div", null, vnode.children);
    }
}
CheckboxControlMarker.__checkboxRole = "control";
/** Checkbox.Indicator — チェックアイコンのマーカー */
export class CheckboxIndicatorMarker {
    view(vnode) {
        return m("div", null, vnode.children);
    }
}
CheckboxIndicatorMarker.__checkboxRole = "indicator";
/** Checkbox.Label — ラベルのマーカー */
export class CheckboxLabelMarker {
    view(vnode) {
        return m("div", null, vnode.children);
    }
}
CheckboxLabelMarker.__checkboxRole = "label";
// ===========================
// ユーティリティ
// ===========================
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
/** VDOM の子要素からマーカーを検出する */
function findMarkers(children) {
    const map = new Map();
    if (!children)
        return map;
    const arr = Array.isArray(children) ? children : [children];
    for (const child of arr) {
        if (child && typeof child === "object" && "tag" in child) {
            const tag = child.tag;
            if (tag && tag.__checkboxRole) {
                map.set(tag.__checkboxRole, child);
            }
        }
    }
    return map;
}
// ===========================
// デフォルトアイコン
// ===========================
/** チェックマーク SVG */
function CheckIcon() {
    return (m("svg", { viewBox: "0 0 12 10", width: "1em", height: "1em", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        m("polyline", { points: "1.5 6 4.5 9 10.5 1" })));
}
/** インデターミネートマーク SVG */
function IndeterminateIcon() {
    return (m("svg", { viewBox: "0 0 12 12", width: "1em", height: "1em", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round" },
        m("line", { x1: "2.5", y1: "6", x2: "9.5", y2: "6" })));
}
// ===========================
// メインコンポーネント
// ===========================
/**
 * @class CheckboxRoot
 * @description
 * Chakra UI 風の Checkbox compound component。
 *
 * 制御モード（checked）と非制御モード（defaultChecked）の両方をサポート。
 * indeterminate 状態もサポート。
 *
 * 主な機能:
 * - solid / outline / subtle バリアント
 * - xs / sm / md / lg サイズ
 * - colorPalette によるカスタムカラー
 * - formRef による Mithril UI Kit Form 連携
 * - indeterminate 状態
 *
 * @example
 * <Checkbox.Root onCheckedChange={({ checked }) => { ... }}>
 *   <Checkbox.HiddenInput />
 *   <Checkbox.Control>
 *     <Checkbox.Indicator />
 *   </Checkbox.Control>
 *   <Checkbox.Label>同意する</Checkbox.Label>
 * </Checkbox.Root>
 */
export class CheckboxRoot {
    constructor() {
        this.internalChecked = false;
        this.inputId = `checkbox-${Math.random().toString(36).substr(2, 9)}`;
    }
    oninit(vnode) {
        this.internalChecked = vnode.attrs.defaultChecked ?? false;
    }
    isControlled(attrs) {
        return attrs.checked !== undefined;
    }
    getChecked(attrs) {
        return this.isControlled(attrs) ? attrs.checked : this.internalChecked;
    }
    toggle(attrs) {
        if (attrs.disabled || attrs.readOnly)
            return;
        const current = this.getChecked(attrs);
        // indeterminate → true, true → false, false → true
        const next = current === "indeterminate" ? true : !current;
        if (!this.isControlled(attrs)) {
            this.internalChecked = next;
        }
        attrs.onCheckedChange?.({ checked: next });
    }
    view(vnode) {
        const attrs = vnode.attrs;
        const checked = this.getChecked(attrs);
        const size = attrs.size ?? "md";
        const variant = attrs.variant ?? "solid";
        const state = checked === "indeterminate" ? "indeterminate" : checked ? "checked" : "unchecked";
        const isCheckedOrIndeterminate = checked === true || checked === "indeterminate";
        const markers = findMarkers(vnode.children);
        const controlVnode = markers.get("control");
        const indicatorVnode = markers.get("indicator");
        const labelVnode = markers.get("label");
        // カラーパレット
        const rootStyle = { ...(attrs.style ?? {}) };
        if (attrs.colorPalette) {
            rootStyle["--checkbox-color"] = attrs.colorPalette;
        }
        return (m("label", { class: classNames(styles.root, styles[`size${capitalize(size)}`], styles[`variant${capitalize(variant)}`], {
                [styles.disabled]: attrs.disabled,
                [styles.readOnly]: attrs.readOnly,
                [styles.invalid]: attrs.invalid,
            }, attrs.class), style: rootStyle, "data-scope": "checkbox", "data-part": "root", "data-state": state },
            m("input", { class: styles.hiddenInput, type: "checkbox", id: this.inputId, checked: checked === true, disabled: attrs.disabled, readonly: attrs.readOnly, name: attrs.name, value: attrs.value ?? "on", onchange: () => this.toggle(attrs), "aria-checked": checked === "indeterminate" ? "mixed" : !!checked, "data-part": "hidden-input" }),
            m("span", { class: classNames(styles.control, controlVnode?.attrs.class), style: controlVnode?.attrs.style, "data-scope": "checkbox", "data-part": "control", "data-state": state }, isCheckedOrIndeterminate && (m("span", { class: classNames(styles.indicator, indicatorVnode?.attrs.class), style: indicatorVnode?.attrs.style, "data-part": "indicator", "data-state": state }, indicatorVnode?.children && indicatorVnode.children.length > 0
                ? indicatorVnode.children
                : checked === "indeterminate"
                    ? IndeterminateIcon()
                    : CheckIcon()))),
            labelVnode && (m("span", { class: classNames(styles.label, labelVnode.attrs.class), style: labelVnode.attrs.style, "data-part": "label", "data-state": state }, labelVnode.children))));
    }
}
/**
 * @class CheckboxGroup
 * @description
 * 複数の Checkbox を管理するグループコンポーネント。
 * value 配列で選択状態を管理し、onValueChange で配列を返す。
 *
 * @example
 * <CheckboxGroup
 *   value={selectedValues}
 *   onValueChange={({ value }) => selectedValues = value}
 * >
 *   <Checkbox.Root value="a">
 *     <Checkbox.Control><Checkbox.Indicator /></Checkbox.Control>
 *     <Checkbox.Label>A</Checkbox.Label>
 *   </Checkbox.Root>
 * </CheckboxGroup>
 */
export class CheckboxGroup {
    constructor() {
        this.internalValue = [];
    }
    oninit(vnode) {
        this.internalValue = vnode.attrs.defaultValue ?? [];
    }
    isControlled(attrs) {
        return attrs.value !== undefined;
    }
    getValue(attrs) {
        return this.isControlled(attrs) ? (attrs.value ?? []) : this.internalValue;
    }
    view(vnode) {
        const attrs = vnode.attrs;
        const currentValue = this.getValue(attrs);
        const orientation = attrs.orientation ?? "vertical";
        return (m("div", { class: classNames(attrs.class), style: {
                display: "flex",
                flexDirection: orientation === "horizontal" ? "row" : "column",
                gap: orientation === "horizontal" ? "1rem" : "0.5rem",
                ...(attrs.style ?? {}),
            }, role: "group", "data-scope": "checkbox-group", "data-part": "root" }, this.processChildren(vnode.children, attrs, currentValue)));
    }
    /** 子 CheckboxRoot に checked / onCheckedChange を注入 */
    processChildren(children, attrs, currentValue) {
        if (!children)
            return null;
        const arr = Array.isArray(children) ? children : [children];
        return arr.map((child) => {
            if (child && typeof child === "object" && "tag" in child) {
                const tag = child.tag;
                if (tag === CheckboxRoot || tag === Checkbox.Root) {
                    const itemValue = child.attrs?.value ?? "";
                    const isChecked = currentValue.includes(itemValue);
                    return m(tag, {
                        ...child.attrs,
                        checked: isChecked,
                        disabled: child.attrs?.disabled || attrs.disabled,
                        name: child.attrs?.name ?? attrs.name,
                        onCheckedChange: (details) => {
                            let next;
                            if (details.checked === true) {
                                next = [...currentValue, itemValue];
                            }
                            else {
                                next = currentValue.filter((v) => v !== itemValue);
                            }
                            if (!this.isControlled(attrs)) {
                                this.internalValue = next;
                            }
                            attrs.onValueChange?.({ value: next });
                            child.attrs?.onCheckedChange?.(details);
                        },
                    }, ...(Array.isArray(child.children) ? child.children : child.children ? [child.children] : []));
                }
            }
            return child;
        });
    }
}
// ===========================
// バンドルエクスポート
// ===========================
/**
 * Checkbox compound component
 *
 * @example
 * ```tsx
 * <Checkbox.Root onCheckedChange={({ checked }) => { ... }}>
 *   <Checkbox.HiddenInput />
 *   <Checkbox.Control>
 *     <Checkbox.Indicator />
 *   </Checkbox.Control>
 *   <Checkbox.Label>同意する</Checkbox.Label>
 * </Checkbox.Root>
 * ```
 */
export const Checkbox = {
    Root: CheckboxRoot,
    HiddenInput: CheckboxHiddenInputMarker,
    Control: CheckboxControlMarker,
    Indicator: CheckboxIndicatorMarker,
    Label: CheckboxLabelMarker,
    Group: CheckboxGroup,
};
