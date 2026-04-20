/** @jsx m */
/**
 * @fileoverview
 * InputPassword — compound component 型のパスワード入力コンポーネント
 *
 * Chakra UI の password-input API を参考に、表示/非表示トグル機能を備えた
 * パスワード入力フィールドを提供する。
 *
 * @example
 * ```tsx
 * <InputPassword.Root>
 *   <InputPassword.Input placeholder="パスワード" />
 *   <InputPassword.VisibilityTrigger />
 * </InputPassword.Root>
 * ```
 *
 * @module InputPassword
 */
/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./InputPassword.module.scss";
// ─── マーカークラス ───
/** @class InputPasswordInputMarker - 入力フィールドマーカー */
export class InputPasswordInputMarker {
    view(vnode) { return m("span", null, vnode.children); }
}
InputPasswordInputMarker.__inputPasswordRole = "input";
/** @class InputPasswordVisibilityTriggerMarker - 表示/非表示トグルボタンマーカー */
export class InputPasswordVisibilityTriggerMarker {
    view(vnode) { return m("button", { type: "button" }, vnode.children); }
}
InputPasswordVisibilityTriggerMarker.__inputPasswordRole = "visibility-trigger";
/** @class InputPasswordLabelMarker - ラベルマーカー */
export class InputPasswordLabelMarker {
    view(vnode) { return m("label", null, vnode.children); }
}
InputPasswordLabelMarker.__inputPasswordRole = "label";
/** @class InputPasswordStrengthMeterMarker - パスワード強度メーターマーカー */
export class InputPasswordStrengthMeterMarker {
    view(vnode) { return m("div", null, vnode.children); }
}
InputPasswordStrengthMeterMarker.__inputPasswordRole = "strength-meter";
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
    return v.tag?.__inputPasswordRole;
}
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
// ─── SVG アイコン ───
/**
 * 目アイコン（パスワード表示中）
 * Copyright (c) The Bootstrap Authors - MIT License
 */
function renderEyeIcon() {
    return (m("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 16 16", "aria-hidden": "true", focusable: "false" },
        m("path", { d: "M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" }),
        m("path", { d: "M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" })));
}
/**
 * 目スラッシュアイコン（パスワード非表示中）
 * Copyright (c) The Bootstrap Authors - MIT License
 */
function renderEyeSlashIcon() {
    return (m("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 16 16", "aria-hidden": "true", focusable: "false" },
        m("path", { d: "M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" }),
        m("path", { d: "M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" }),
        m("path", { d: "M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709z" }),
        m("path", { d: "m10.707 12.828-7.07-7.071L4.344 5.05l7.07 7.071z" })));
}
// ─── 強度メーターの色とラベル ───
const STRENGTH_COLORS = ["#dc3545", "#fd7e14", "#ffc107", "#20c997", "#198754"];
const STRENGTH_LABELS = ["", "弱い", "やや弱い", "普通", "強い"];
// ─── ルートコンポーネント ───
/**
 * @class InputPasswordRoot
 * @description
 * パスワード入力のルートコンポーネント。
 * 子コンポーネントのマーカーを検出し、パスワード入力 UI を構築する。
 *
 * 主な機能:
 * - パスワード表示/非表示トグル（visible / defaultVisible / onVisibleChange）
 * - 制御/非制御 両対応（value / defaultValue）
 * - variant (outline / filled / flushed)
 * - size (xs / sm / md / lg)
 * - Form 連携（oninput / onblur / name）
 * - StrengthMeter（パスワード強度表示）
 */
export class InputPasswordRoot {
    constructor() {
        this.internalValue = "";
        this.internalVisible = false;
        this.focused = false;
    }
    oninit(vnode) {
        this.internalValue = this.isValueControlled(vnode.attrs)
            ? (vnode.attrs.value ?? "")
            : (vnode.attrs.defaultValue ?? "");
        this.internalVisible = this.isVisibleControlled(vnode.attrs)
            ? (vnode.attrs.visible ?? false)
            : (vnode.attrs.defaultVisible ?? false);
    }
    isValueControlled(attrs) {
        return attrs.value !== undefined;
    }
    isVisibleControlled(attrs) {
        return attrs.visible !== undefined;
    }
    resolveValue(attrs) {
        return this.isValueControlled(attrs) ? (attrs.value ?? "") : this.internalValue;
    }
    resolveVisible(attrs) {
        return this.isVisibleControlled(attrs) ? (attrs.visible ?? false) : this.internalVisible;
    }
    handleInput(attrs, newValue) {
        if (!this.isValueControlled(attrs)) {
            this.internalValue = newValue;
        }
        attrs.onValueChange?.(newValue);
        attrs.oninput?.(newValue);
    }
    handleBlur(attrs) {
        this.focused = false;
        attrs.onblur?.();
    }
    toggleVisibility(attrs) {
        const newVal = !this.resolveVisible(attrs);
        if (!this.isVisibleControlled(attrs)) {
            this.internalVisible = newVal;
        }
        attrs.onVisibleChange?.(newVal);
    }
    onbeforeupdate(vnode, old) {
        if (this.isValueControlled(vnode.attrs) && vnode.attrs.value !== old.attrs.value) {
            this.internalValue = vnode.attrs.value ?? "";
        }
        if (this.isVisibleControlled(vnode.attrs) && vnode.attrs.visible !== old.attrs.visible) {
            this.internalVisible = vnode.attrs.visible ?? false;
        }
    }
    // ─── レンダリング ───
    renderInput(attrs, inputVNode) {
        const isVisible = this.resolveVisible(attrs);
        const currentValue = this.resolveValue(attrs);
        return (m("input", { type: isVisible ? "text" : "password", class: classNames(styles.input, inputVNode?.attrs?.class), style: inputVNode?.attrs?.style, name: attrs.name, value: currentValue, placeholder: inputVNode?.attrs?.placeholder, disabled: attrs.disabled, readonly: attrs.readOnly, autocomplete: "current-password", "data-part": "input", onfocus: () => { this.focused = true; }, oninput: (e) => { this.handleInput(attrs, e.target.value); }, onblur: () => { this.handleBlur(attrs); } }));
    }
    renderVisibilityTrigger(attrs, triggerVNode) {
        const isVisible = this.resolveVisible(attrs);
        const customChildren = triggerVNode?.children && toChildArray(triggerVNode.children).length > 0;
        return (m("button", { type: "button", tabindex: -1, "aria-label": isVisible ? "パスワードを隠す" : "パスワードを表示する", class: classNames(styles.visibilityTrigger, triggerVNode?.attrs?.class), style: triggerVNode?.attrs?.style, "data-part": "visibility-trigger", disabled: attrs.disabled, onclick: () => { this.toggleVisibility(attrs); } }, customChildren
            ? triggerVNode.children
            : (isVisible ? renderEyeIcon() : renderEyeSlashIcon())));
    }
    renderStrengthMeter(strengthVNode) {
        const value = Math.max(0, Math.min(4, strengthVNode.attrs?.value ?? 0));
        const segments = [0, 1, 2, 3];
        return (m("div", { class: classNames(styles.strengthMeter, strengthVNode.attrs?.class), style: strengthVNode.attrs?.style, "data-part": "strength-meter" },
            m("div", { class: styles.strengthBar }, segments.map(i => (m("div", { key: i, class: classNames(styles.strengthSegment, { [styles.strengthSegmentActive]: i < value }), style: i < value ? { backgroundColor: STRENGTH_COLORS[value] } : {} })))),
            value > 0 ? m("span", { class: styles.strengthLabel, style: { color: STRENGTH_COLORS[value] } }, STRENGTH_LABELS[value]) : null));
    }
    view(vnode) {
        const attrs = vnode.attrs;
        const allChildren = toChildArray(vnode.children);
        const variant = attrs.variant ?? "outline";
        const size = attrs.size ?? "md";
        // マーカーを検出
        const inputVNode = allChildren.find(c => getRole(c) === "input");
        const triggerVNode = allChildren.find(c => getRole(c) === "visibility-trigger");
        const labelVNode = allChildren.find(c => getRole(c) === "label");
        const strengthVNode = allChildren.find(c => getRole(c) === "strength-meter");
        const rootStyle = { ...(attrs.style ?? {}) };
        if (attrs.width)
            rootStyle.width = attrs.width;
        return (m("div", { class: classNames(styles.root, styles[`variant${capitalize(variant)}`], styles[`size${capitalize(size)}`], { [styles.disabled]: attrs.disabled }, { [styles.focused]: this.focused }, attrs.class), style: rootStyle, "data-scope": "input-password2", "data-part": "root" },
            labelVNode ? (m("label", { class: classNames(styles.label, labelVNode.attrs?.class), style: labelVNode.attrs?.style, "data-part": "label" }, labelVNode.children)) : null,
            m("div", { class: styles.inputGroup, "data-part": "input-group" },
                inputVNode !== undefined ? this.renderInput(attrs, inputVNode) : null,
                triggerVNode !== undefined ? this.renderVisibilityTrigger(attrs, triggerVNode) : null),
            strengthVNode !== undefined ? this.renderStrengthMeter(strengthVNode) : null));
    }
}
/**
 * InputPassword compound component のバンドル。
 *
 * @example
 * ```tsx
 * <InputPassword.Root>
 *   <InputPassword.Input placeholder="パスワード" />
 *   <InputPassword.VisibilityTrigger />
 * </InputPassword.Root>
 * ```
 */
export const InputPassword = {
    Root: InputPasswordRoot,
    Input: InputPasswordInputMarker,
    VisibilityTrigger: InputPasswordVisibilityTriggerMarker,
    Label: InputPasswordLabelMarker,
    StrengthMeter: InputPasswordStrengthMeterMarker,
};
