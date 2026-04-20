/** @jsx m */
/**
 * @fileoverview
 * InputNumber — compound component 型の数値入力コンポーネント
 *
 * @example
 * ```tsx
 * <InputNumber.Root defaultValue={10} min={0} max={100}>
 *   <InputNumber.Control />
 *   <InputNumber.Input />
 * </InputNumber.Root>
 * ```
 *
 * @module InputNumber
 */
/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./InputNumber.module.scss";
// ─── マーカークラス ───
/** @class InputNumberInputMarker - InputNumber の入力フィールドマーカー */
export class InputNumberInputMarker {
    view(vnode) { return m("span", null, vnode.children); }
}
InputNumberInputMarker.__inputNumberRole = "input";
/** @class InputNumberControlMarker - InputNumber のコントロール（増減ボタン）マーカー */
export class InputNumberControlMarker {
    view(vnode) { return m("span", null, vnode.children); }
}
InputNumberControlMarker.__inputNumberRole = "control";
/** @class InputNumberIncrementTriggerMarker - 増加ボタンマーカー */
export class InputNumberIncrementTriggerMarker {
    view(vnode) { return m("button", { type: "button" }, vnode.children); }
}
InputNumberIncrementTriggerMarker.__inputNumberRole = "increment-trigger";
/** @class InputNumberDecrementTriggerMarker - 減少ボタンマーカー */
export class InputNumberDecrementTriggerMarker {
    view(vnode) { return m("button", { type: "button" }, vnode.children); }
}
InputNumberDecrementTriggerMarker.__inputNumberRole = "decrement-trigger";
/** @class InputNumberLabelMarker - ラベルマーカー */
export class InputNumberLabelMarker {
    view(vnode) { return m("label", null, vnode.children); }
}
InputNumberLabelMarker.__inputNumberRole = "label";
/** @class InputNumberValueTextMarker - 値テキスト表示マーカー */
export class InputNumberValueTextMarker {
    view(vnode) { return m("span", null, vnode.children); }
}
InputNumberValueTextMarker.__inputNumberRole = "value-text";
// ─── ユーティリティ ───
function toChildArray(children) {
    if (Array.isArray(children))
        return children.flatMap(c => toChildArray(c));
    if (children === null || children === undefined || typeof children === "boolean")
        return [];
    return [children];
}
function isVnodeLike(v) {
    return !!v && typeof v === "object" && "tag" in v;
}
function getRole(v) {
    if (!isVnodeLike(v))
        return undefined;
    return v.tag?.__inputNumberRole;
}
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
/** 値を precision に丸める */
function roundToPrecision(value, precision) {
    if (precision === undefined)
        return value;
    const factor = Math.pow(10, precision);
    return Math.round(value * factor) / factor;
}
/** 値を文字列に変換 */
function formatValue(value, precision) {
    if (value === null || value === undefined || isNaN(value))
        return "";
    if (precision !== undefined)
        return value.toFixed(precision);
    return String(value);
}
/** 文字列を数値にパース */
function parseValue(str) {
    if (str === "" || str === "-")
        return null;
    const n = Number(str);
    return isNaN(n) ? null : n;
}
/** min/max にクランプ */
function clamp(value, min, max) {
    let v = value;
    if (min !== undefined && v < min)
        v = min;
    if (max !== undefined && v > max)
        v = max;
    return v;
}
// ─── Bootstrap Icons SVG ───
/**
 * 上向き三角アイコン
 * Copyright (c) The Bootstrap Authors - MIT License
 */
function renderChevronUp() {
    return (m("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 16 16", "aria-hidden": "true", focusable: "false" },
        m("path", { "fill-rule": "evenodd", d: "M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" })));
}
/**
 * 下向き三角アイコン
 * Copyright (c) The Bootstrap Authors - MIT License
 */
function renderChevronDown() {
    return (m("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 16 16", "aria-hidden": "true", focusable: "false" },
        m("path", { "fill-rule": "evenodd", d: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" })));
}
// ─── ルートコンポーネント ───
/**
 * @class InputNumberRoot
 * @description
 * 数値入力のルートコンポーネント。
 * 子コンポーネントのマーカーを検出し、完全な数値入力 UI を構築する。
 *
 * 主な機能:
 * - min / max / step によるバリデーション
 * - precision で小数桁数を制御
 * - clampValueOnBlur で blur 時にクランプ
 * - allowMouseWheel でマウスホイール操作
 * - variant (outline / filled / flushed)
 * - size (xs / sm / md / lg)
 * - 制御/非制御両対応
 * - Form 連携（oninput / onblur / name）
 */
export class InputNumberRoot {
    constructor() {
        this.internalValue = null;
        this.textValue = "";
        this.focused = false;
    }
    oninit(vnode) {
        const initial = this.isControlled(vnode.attrs)
            ? vnode.attrs.value ?? null
            : vnode.attrs.defaultValue ?? null;
        this.internalValue = initial !== null ? roundToPrecision(initial, vnode.attrs.precision) : null;
        this.textValue = formatValue(this.internalValue, vnode.attrs.precision);
    }
    isControlled(attrs) {
        return attrs.value !== undefined;
    }
    resolveValue(attrs) {
        return this.isControlled(attrs) ? (attrs.value ?? null) : this.internalValue;
    }
    setValue(attrs, newValue) {
        const rounded = newValue !== null ? roundToPrecision(newValue, attrs.precision) : null;
        if (!this.isControlled(attrs)) {
            this.internalValue = rounded;
        }
        this.textValue = formatValue(rounded, attrs.precision);
        const details = {
            value: rounded,
            valueAsString: this.textValue,
        };
        attrs.onValueChange?.(details);
        attrs.oninput?.(rounded);
    }
    increment(attrs) {
        const current = this.resolveValue(attrs) ?? 0;
        const step = attrs.step ?? 1;
        const newVal = clamp(current + step, attrs.min, attrs.max);
        this.setValue(attrs, roundToPrecision(newVal, attrs.precision));
    }
    decrement(attrs) {
        const current = this.resolveValue(attrs) ?? 0;
        const step = attrs.step ?? 1;
        const newVal = clamp(current - step, attrs.min, attrs.max);
        this.setValue(attrs, roundToPrecision(newVal, attrs.precision));
    }
    canIncrement(attrs) {
        if (attrs.disabled || attrs.readOnly)
            return false;
        const current = this.resolveValue(attrs);
        if (current === null)
            return true;
        if (attrs.max !== undefined)
            return current < attrs.max;
        return true;
    }
    canDecrement(attrs) {
        if (attrs.disabled || attrs.readOnly)
            return false;
        const current = this.resolveValue(attrs);
        if (current === null)
            return true;
        if (attrs.min !== undefined)
            return current > attrs.min;
        return true;
    }
    handleInputChange(attrs, rawText) {
        this.textValue = rawText;
    }
    handleBlur(attrs) {
        this.focused = false;
        const parsed = parseValue(this.textValue);
        const shouldClamp = attrs.clampValueOnBlur !== false;
        const final = parsed !== null && shouldClamp
            ? clamp(roundToPrecision(parsed, attrs.precision), attrs.min, attrs.max)
            : (parsed !== null ? roundToPrecision(parsed, attrs.precision) : null);
        this.setValue(attrs, final);
        attrs.onblur?.();
    }
    handleKeyDown(attrs, e) {
        if (attrs.disabled || attrs.readOnly)
            return;
        if (e.key === "ArrowUp") {
            e.preventDefault();
            this.increment(attrs);
        }
        else if (e.key === "ArrowDown") {
            e.preventDefault();
            this.decrement(attrs);
        }
        else if (e.key === "Enter") {
            this.handleBlur(attrs);
        }
    }
    handleWheel(attrs, e) {
        if (!attrs.allowMouseWheel || attrs.disabled || attrs.readOnly)
            return;
        if (!this.focused)
            return;
        e.preventDefault();
        if (e.deltaY < 0) {
            this.increment(attrs);
        }
        else if (e.deltaY > 0) {
            this.decrement(attrs);
        }
    }
    onbeforeupdate(vnode, old) {
        if (this.isControlled(vnode.attrs) && !this.focused) {
            const newVal = vnode.attrs.value ?? null;
            if (newVal !== (old.attrs.value ?? null)) {
                this.internalValue = newVal;
                this.textValue = formatValue(newVal, vnode.attrs.precision);
            }
        }
    }
    // ─── レンダリング ───
    renderInput(attrs, inputVNode) {
        const displayValue = this.focused ? this.textValue : formatValue(this.resolveValue(attrs), attrs.precision);
        return (m("input", { type: "text", inputmode: "decimal", role: "spinbutton", "aria-valuemin": attrs.min, "aria-valuemax": attrs.max, "aria-valuenow": this.resolveValue(attrs) ?? undefined, "aria-valuetext": displayValue || undefined, class: classNames(styles.input, inputVNode?.attrs?.class), style: inputVNode?.attrs?.style, name: attrs.name, value: displayValue, placeholder: inputVNode?.attrs?.placeholder, disabled: attrs.disabled, readonly: attrs.readOnly, "data-part": "input", onfocus: () => { this.focused = true; this.textValue = formatValue(this.resolveValue(attrs), attrs.precision); }, oninput: (e) => { this.handleInputChange(attrs, e.target.value); }, onblur: () => { this.handleBlur(attrs); }, onkeydown: (e) => { this.handleKeyDown(attrs, e); } }));
    }
    renderIncrementButton(attrs, triggerVNode) {
        return (m("button", { type: "button", tabindex: -1, "aria-label": "\u5024\u3092\u5897\u3084\u3059", class: classNames(styles.incrementTrigger, triggerVNode?.attrs?.class), style: triggerVNode?.attrs?.style, "data-part": "increment-trigger", disabled: !this.canIncrement(attrs), onclick: () => { this.increment(attrs); } }, triggerVNode?.children && toChildArray(triggerVNode.children).length > 0
            ? triggerVNode.children
            : renderChevronUp()));
    }
    renderDecrementButton(attrs, triggerVNode) {
        return (m("button", { type: "button", tabindex: -1, "aria-label": "\u5024\u3092\u6E1B\u3089\u3059", class: classNames(styles.decrementTrigger, triggerVNode?.attrs?.class), style: triggerVNode?.attrs?.style, "data-part": "decrement-trigger", disabled: !this.canDecrement(attrs), onclick: () => { this.decrement(attrs); } }, triggerVNode?.children && toChildArray(triggerVNode.children).length > 0
            ? triggerVNode.children
            : renderChevronDown()));
    }
    view(vnode) {
        const attrs = vnode.attrs;
        const allChildren = toChildArray(vnode.children);
        const variant = attrs.variant ?? "outline";
        const size = attrs.size ?? "md";
        // マーカーを検出
        const inputVNode = allChildren.find(c => getRole(c) === "input");
        const controlVNode = allChildren.find(c => getRole(c) === "control");
        const incVNode = allChildren.find(c => getRole(c) === "increment-trigger");
        const decVNode = allChildren.find(c => getRole(c) === "decrement-trigger");
        const labelVNode = allChildren.find(c => getRole(c) === "label");
        const valueTextVNode = allChildren.find(c => getRole(c) === "value-text");
        // Control マーカーがある場合はインクリメント・デクリメントを両方レンダリング
        const hasControl = !!controlVNode;
        const hasStandaloneInc = !!incVNode;
        const hasStandaloneDec = !!decVNode;
        const rootStyle = { ...(attrs.style ?? {}) };
        if (attrs.width)
            rootStyle.width = attrs.width;
        return (m("div", { class: classNames(styles.root, styles[`variant${capitalize(variant)}`], styles[`size${capitalize(size)}`], { [styles.disabled]: attrs.disabled }, { [styles.focused]: this.focused }, attrs.class), style: rootStyle, "data-scope": "input-number2", "data-part": "root", onwheel: (e) => { this.handleWheel(attrs, e); } },
            labelVNode ? (m("label", { class: classNames(styles.label, labelVNode.attrs?.class), style: labelVNode.attrs?.style, "data-part": "label" }, labelVNode.children)) : null,
            valueTextVNode ? (m("span", { class: classNames(styles.valueText, valueTextVNode.attrs?.class), style: valueTextVNode.attrs?.style, "data-part": "value-text" }, formatValue(this.resolveValue(attrs), attrs.precision) || "—")) : null,
            m("div", { class: styles.inputGroup, "data-part": "input-group" },
                hasStandaloneDec && !hasControl ? this.renderDecrementButton(attrs, decVNode) : null,
                inputVNode !== undefined ? this.renderInput(attrs, inputVNode) : null,
                hasControl ? (m("div", { class: classNames(styles.control, controlVNode.attrs?.class), style: controlVNode.attrs?.style, "data-part": "control" },
                    this.renderIncrementButton(attrs, incVNode),
                    this.renderDecrementButton(attrs, decVNode))) : null,
                hasStandaloneInc && !hasControl ? this.renderIncrementButton(attrs, incVNode) : null)));
    }
}
/**
 * InputNumber compound component のバンドル。
 *
 * @example
 * ```tsx
 * <InputNumber.Root defaultValue={10} min={0} max={100}>
 *   <InputNumber.Control />
 *   <InputNumber.Input />
 * </InputNumber.Root>
 * ```
 */
export const InputNumber = {
    Root: InputNumberRoot,
    Input: InputNumberInputMarker,
    Control: InputNumberControlMarker,
    IncrementTrigger: InputNumberIncrementTriggerMarker,
    DecrementTrigger: InputNumberDecrementTriggerMarker,
    Label: InputNumberLabelMarker,
    ValueText: InputNumberValueTextMarker,
};
