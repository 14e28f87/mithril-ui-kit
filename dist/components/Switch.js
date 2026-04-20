/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Switch.module.scss";
// ===========================
// マーカーコンポーネント
// ===========================
/**
 * Switch.Control — トラック部分のマーカー
 */
export class SwitchControlMarker {
    view(vnode) {
        return m("div", null, vnode.children);
    }
}
SwitchControlMarker.__switchRole = "control";
/**
 * Switch.Thumb — つまみ部分のマーカー
 */
export class SwitchThumbMarker {
    view(vnode) {
        return m("div", null, vnode.children);
    }
}
SwitchThumbMarker.__switchRole = "thumb";
/**
 * Switch.ThumbIndicator — つまみ内アイコンのマーカー
 */
export class SwitchThumbIndicatorMarker {
    view(vnode) {
        return m("div", null, vnode.children);
    }
}
SwitchThumbIndicatorMarker.__switchRole = "thumbIndicator";
/**
 * Switch.Label — ラベルのマーカー
 */
export class SwitchLabelMarker {
    view(vnode) {
        return m("div", null, vnode.children);
    }
}
SwitchLabelMarker.__switchRole = "label";
/**
 * Switch.Indicator — チェック状態インジケーターのマーカー
 */
export class SwitchIndicatorMarker {
    view(vnode) {
        return m("div", null, vnode.children);
    }
}
SwitchIndicatorMarker.__switchRole = "indicator";
/**
 * Switch.HiddenInput — 隠し input のマーカー
 */
export class SwitchHiddenInputMarker {
    view(vnode) {
        return m("div", null, vnode.children);
    }
}
SwitchHiddenInputMarker.__switchRole = "hiddenInput";
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
            if (tag && tag.__switchRole) {
                map.set(tag.__switchRole, child);
            }
        }
    }
    return map;
}
// ===========================
// メインコンポーネント
// ===========================
/**
 * Switch.Root — スイッチのルートコンポーネント
 *
 * @description
 * Chakra UI 風の Switch compound component。
 * 制御モード（checked）と非制御モード（defaultChecked）の両方をサポート。
 */
export class SwitchRoot {
    constructor() {
        this.internalChecked = false;
        this.inputId = `switch-${Math.random().toString(36).substr(2, 9)}`;
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
        const next = !this.getChecked(attrs);
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
        const state = checked ? "checked" : "unchecked";
        const markers = findMarkers(vnode.children);
        // ラベル
        const labelVnode = markers.get("label");
        // コントロール
        const controlVnode = markers.get("control");
        const thumbVnode = markers.get("thumb");
        const thumbIndicatorVnode = markers.get("thumbIndicator");
        const indicatorVnode = markers.get("indicator");
        // カラーパレット
        const rootStyle = { ...(attrs.style ?? {}) };
        if (attrs.colorPalette) {
            rootStyle["--switch-color"] = attrs.colorPalette;
        }
        return (m("label", { class: classNames(styles.root, styles[`size${capitalize(size)}`], styles[`variant${capitalize(variant)}`], {
                [styles.disabled]: attrs.disabled,
                [styles.readOnly]: attrs.readOnly,
                [styles.invalid]: attrs.invalid,
            }, attrs.class), style: rootStyle, "data-scope": "switch", "data-part": "root", "data-state": state },
            m("input", { class: styles.hiddenInput, type: "checkbox", id: this.inputId, checked: checked, disabled: attrs.disabled, readonly: attrs.readOnly, name: attrs.name, value: attrs.value ?? "on", onchange: () => this.toggle(attrs), "aria-checked": checked, role: "switch" }),
            m("span", { class: classNames(styles.control, controlVnode?.attrs.class), style: controlVnode?.attrs.style, "data-scope": "switch", "data-part": "control", "data-state": state, tabindex: 0, onkeydown: (e) => {
                    if (e.key === " " || e.key === "Enter") {
                        e.preventDefault();
                        this.toggle(attrs);
                    }
                } },
                indicatorVnode && (m("span", { class: classNames(styles.indicator, indicatorVnode.attrs.class), style: indicatorVnode.attrs.style, "data-part": "indicator", "data-state": state }, checked
                    ? indicatorVnode.children
                    : indicatorVnode.attrs.fallback ?? null)),
                m("span", { class: classNames(styles.thumb, thumbVnode?.attrs.class), style: thumbVnode?.attrs.style, "data-part": "thumb", "data-state": state }, thumbIndicatorVnode && (m("span", { class: classNames(styles.thumbIndicator, thumbIndicatorVnode.attrs.class), style: thumbIndicatorVnode.attrs.style, "data-part": "thumb-indicator", "data-state": state }, thumbIndicatorVnode.children)))),
            labelVnode && (m("span", { class: classNames(styles.label, labelVnode.attrs.class), style: labelVnode.attrs.style, "data-part": "label", "data-state": state }, labelVnode.children))));
    }
}
// ===========================
// バンドルエクスポート
// ===========================
/**
 * Switch compound component
 *
 * @example
 * ```tsx
 * <Switch.Root checked={isOn} onCheckedChange={({ checked }) => isOn = checked}>
 *   <Switch.Control>
 *     <Switch.Thumb />
 *   </Switch.Control>
 *   <Switch.Label>Wi-Fi</Switch.Label>
 * </Switch.Root>
 * ```
 */
export const Switch = {
    Root: SwitchRoot,
    Control: SwitchControlMarker,
    Thumb: SwitchThumbMarker,
    ThumbIndicator: SwitchThumbIndicatorMarker,
    Label: SwitchLabelMarker,
    Indicator: SwitchIndicatorMarker,
    HiddenInput: SwitchHiddenInputMarker,
};
