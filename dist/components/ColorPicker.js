/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./ColorPicker.module.scss";
// ===========================
// マーカー
// ===========================
export class CPLabelMarker {
    view(vnode) { return m("div", null, vnode.children); }
}
CPLabelMarker.__cpRole = "label";
export class CPControlMarker {
    view(vnode) { return m("div", null, vnode.children); }
}
CPControlMarker.__cpRole = "control";
export class CPInputMarker {
    view(vnode) { return m("div", null, vnode.children); }
}
CPInputMarker.__cpRole = "input";
export class CPTriggerMarker {
    view(vnode) { return m("div", null, vnode.children); }
}
CPTriggerMarker.__cpRole = "trigger";
export class CPContentMarker {
    view(vnode) { return m("div", null, vnode.children); }
}
CPContentMarker.__cpRole = "content";
export class CPAreaMarker {
    view(vnode) { return m("div", null, vnode.children); }
}
CPAreaMarker.__cpRole = "area";
export class CPChannelSliderMarker {
    view(vnode) { return m("div", null, vnode.children); }
}
CPChannelSliderMarker.__cpRole = "channelSlider";
export class CPSwatchGroupMarker {
    view(vnode) { return m("div", null, vnode.children); }
}
CPSwatchGroupMarker.__cpRole = "swatchGroup";
export class CPSwatchTriggerMarker {
    view(vnode) { return m("div", null, vnode.children); }
}
CPSwatchTriggerMarker.__cpRole = "swatchTrigger";
export class CPSwatchMarker {
    view(vnode) { return m("div", null, vnode.children); }
}
CPSwatchMarker.__cpRole = "swatch";
export class CPEyeDropperMarker {
    view(vnode) { return m("div", null, vnode.children); }
}
CPEyeDropperMarker.__cpRole = "eyeDropper";
// ===========================
// カラーユーティリティ
// ===========================
/** 16進数文字列を HSVA に変換 */
function hexToHsva(hex) {
    hex = hex.replace(/^#/, "");
    let a = 1;
    if (hex.length === 8) {
        a = parseInt(hex.slice(6, 8), 16) / 255;
        hex = hex.slice(0, 6);
    }
    else if (hex.length === 4) {
        a = parseInt(hex[3] + hex[3], 16) / 255;
        hex = hex.slice(0, 3);
    }
    if (hex.length === 3)
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    const r = parseInt(hex.slice(0, 2), 16) / 255;
    const g = parseInt(hex.slice(2, 4), 16) / 255;
    const b = parseInt(hex.slice(4, 6), 16) / 255;
    return rgbToHsva(r, g, b, a);
}
function rgbToHsva(r, g, b, a) {
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const d = max - min;
    let h = 0;
    if (d !== 0) {
        if (max === r)
            h = ((g - b) / d + 6) % 6;
        else if (max === g)
            h = (b - r) / d + 2;
        else
            h = (r - g) / d + 4;
        h *= 60;
    }
    const s = max === 0 ? 0 : d / max;
    return { h, s, v: max, a };
}
/** HSVA → hex */
function hsvaToHex(c, includeAlpha = false) {
    const { r, g, b } = hsvaToRgb(c);
    const hex = "#" + [r, g, b].map((x) => Math.round(x * 255).toString(16).padStart(2, "0")).join("");
    if (includeAlpha) {
        return hex + Math.round(c.a * 255).toString(16).padStart(2, "0");
    }
    return hex;
}
function hsvaToRgb(c) {
    const { h, s, v } = c;
    const i = Math.floor(h / 60) % 6;
    const f = h / 60 - Math.floor(h / 60);
    const p = v * (1 - s);
    const q = v * (1 - f * s);
    const t = v * (1 - (1 - f) * s);
    const map = [
        [v, t, p], [q, v, p], [p, v, t], [p, q, v], [t, p, v], [v, p, q],
    ];
    const [r, g, b] = map[i];
    return { r, g, b };
}
/** CSS カラー文字列 → HSVA（hex / rgb() / hsl() に対応） */
function parseColor(str) {
    str = str.trim().toLowerCase();
    // hex
    if (str.startsWith("#"))
        return hexToHsva(str);
    // rgb/rgba
    const rgbMatch = str.match(/rgba?\(\s*(\d+)[,\s]+(\d+)[,\s]+(\d+)(?:[,\s/]+([\d.]+))?\)/);
    if (rgbMatch) {
        return rgbToHsva(parseInt(rgbMatch[1]) / 255, parseInt(rgbMatch[2]) / 255, parseInt(rgbMatch[3]) / 255, rgbMatch[4] !== undefined ? parseFloat(rgbMatch[4]) : 1);
    }
    // デフォルト黒
    return { h: 0, s: 0, v: 0, a: 1 };
}
/** HSVA → フォーマット文字列 */
function formatColor(c, f) {
    switch (f) {
        case "hexa": return hsvaToHex(c, true);
        case "rgb": {
            const { r, g, b } = hsvaToRgb(c);
            return `rgb(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)})`;
        }
        case "rgba": {
            const { r, g, b } = hsvaToRgb(c);
            return `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, ${c.a.toFixed(2)})`;
        }
        case "hsl": {
            const [hl, sl, l] = hsvaToHsl(c);
            return `hsl(${Math.round(hl)}, ${Math.round(sl)}%, ${Math.round(l)}%)`;
        }
        case "hsla": {
            const [hl, sl, l] = hsvaToHsl(c);
            return `hsla(${Math.round(hl)}, ${Math.round(sl)}%, ${Math.round(l)}%, ${c.a.toFixed(2)})`;
        }
        default: return hsvaToHex(c);
    }
}
function hsvaToHsl(c) {
    const l = c.v * (1 - c.s / 2);
    const sl = l === 0 || l === 1 ? 0 : (c.v - l) / Math.min(l, 1 - l);
    return [c.h, sl * 100, l * 100];
}
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
// ===========================
// メインコンポーネント
// ===========================
function findAllMarkers(children) {
    const result = [];
    if (!children)
        return result;
    const arr = Array.isArray(children) ? children : [children];
    for (const child of arr) {
        if (child && typeof child === "object" && "tag" in child) {
            const tag = child.tag;
            if (tag && tag.__cpRole) {
                result.push(child);
            }
        }
    }
    return result;
}
/**
 * @class ColorPickerRoot
 * @description
 * Chakra UI 風のカラーピッカー compound component。
 *
 * 色相・彩度・明度の2Dエリア、Hue / Alpha スライダー、
 * SW atch プリセット、テキスト入力をサポートする。
 *
 * @example
 * <ColorPicker.Root defaultValue="#ff0000">
 *   <ColorPicker.Label>Color</ColorPicker.Label>
 *   <ColorPicker.Control>
 *     <ColorPicker.Input />
 *     <ColorPicker.Trigger />
 *   </ColorPicker.Control>
 *   <ColorPicker.Positioner>
 *     <ColorPicker.Content>
 *       <ColorPicker.Area />
 *       <ColorPicker.ChannelSlider channel="hue" />
 *       <ColorPicker.ChannelSlider channel="alpha" />
 *     </ColorPicker.Content>
 *   </ColorPicker.Positioner>
 * </ColorPicker.Root>
 */
export class ColorPickerRoot {
    constructor() {
        this.internalColor = { h: 0, s: 1, v: 1, a: 1 };
        this.isOpen = false;
        this.areaEl = null;
        this.dragging = false;
        this.rootEl = null;
        this.boundDocClick = null;
    }
    oninit(vnode) {
        const val = vnode.attrs.defaultValue ?? vnode.attrs.value ?? "#ff0000";
        this.internalColor = parseColor(val);
    }
    oncreate(vnode) {
        this.rootEl = vnode.dom;
        this.boundDocClick = (e) => {
            if (!this.isOpen || !this.rootEl)
                return;
            // Shadow DOM 内クリック時は e.target がリターゲティングされるため composedPath() で判定
            if (!e.composedPath().includes(this.rootEl)) {
                this.isOpen = false;
                m.redraw();
            }
        };
        document.addEventListener("mousedown", this.boundDocClick);
    }
    onremove() {
        if (this.boundDocClick) {
            document.removeEventListener("mousedown", this.boundDocClick);
            this.boundDocClick = null;
        }
    }
    isControlled(attrs) {
        return attrs.value !== undefined;
    }
    getColor(attrs) {
        if (this.isControlled(attrs)) {
            return parseColor(attrs.value);
        }
        return this.internalColor;
    }
    getFormat(attrs) {
        return attrs.format ?? "hex";
    }
    emitChange(attrs, color) {
        const fmt = this.getFormat(attrs);
        const value = formatColor(color, fmt);
        if (!this.isControlled(attrs)) {
            this.internalColor = color;
        }
        attrs.onValueChange?.({ value, valueAsColor: color });
        m.redraw();
    }
    emitChangeEnd(attrs, color) {
        const fmt = this.getFormat(attrs);
        attrs.onValueChangeEnd?.({ value: formatColor(color, fmt), valueAsColor: color });
    }
    // --- Area ドラッグ ---
    startAreaDrag(attrs, e) {
        if (attrs.disabled || attrs.readOnly)
            return;
        this.dragging = true;
        this.updateAreaFromEvent(attrs, e);
        const onMove = (ev) => {
            ev.preventDefault();
            this.updateAreaFromEvent(attrs, ev);
        };
        const onUp = () => {
            this.dragging = false;
            this.emitChangeEnd(attrs, this.getColor(attrs));
            document.removeEventListener("mousemove", onMove);
            document.removeEventListener("mouseup", onUp);
            document.removeEventListener("touchmove", onMove);
            document.removeEventListener("touchend", onUp);
        };
        document.addEventListener("mousemove", onMove);
        document.addEventListener("mouseup", onUp);
        document.addEventListener("touchmove", onMove, { passive: false });
        document.addEventListener("touchend", onUp);
    }
    updateAreaFromEvent(attrs, e) {
        if (!this.areaEl)
            return;
        const rect = this.areaEl.getBoundingClientRect();
        const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
        const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
        const s = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
        const v = Math.max(0, Math.min(1, 1 - (clientY - rect.top) / rect.height));
        const color = { ...this.getColor(attrs), s, v };
        this.emitChange(attrs, color);
    }
    // --- スライダーハンドル ---
    startSliderDrag(attrs, channel, e, sliderEl) {
        if (attrs.disabled || attrs.readOnly)
            return;
        const update = (ev) => {
            const rect = sliderEl.getBoundingClientRect();
            const clientX = "touches" in ev ? ev.touches[0].clientX : ev.clientX;
            const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
            const color = { ...this.getColor(attrs) };
            if (channel === "hue")
                color.h = ratio * 360;
            else
                color.a = ratio;
            this.emitChange(attrs, color);
        };
        update(e);
        const onMove = (ev) => { ev.preventDefault(); update(ev); };
        const onUp = () => {
            this.emitChangeEnd(attrs, this.getColor(attrs));
            document.removeEventListener("mousemove", onMove);
            document.removeEventListener("mouseup", onUp);
            document.removeEventListener("touchmove", onMove);
            document.removeEventListener("touchend", onUp);
        };
        document.addEventListener("mousemove", onMove);
        document.addEventListener("mouseup", onUp);
        document.addEventListener("touchmove", onMove, { passive: false });
        document.addEventListener("touchend", onUp);
    }
    view(vnode) {
        const attrs = vnode.attrs;
        const color = this.getColor(attrs);
        const size = attrs.size ?? "md";
        const fmt = this.getFormat(attrs);
        const colorStr = formatColor(color, fmt);
        const hexStr = hsvaToHex(color);
        const markers = findAllMarkers(vnode.children);
        return (m("div", { class: classNames(styles.root, styles[`size${capitalize(size)}`], { [styles.disabled]: attrs.disabled }, attrs.class), style: attrs.style, "data-scope": "color-picker", "data-part": "root" },
            this.renderChildren(vnode.children, attrs, color, colorStr, hexStr, fmt),
            attrs.name && m("input", { type: "hidden", name: attrs.name, value: colorStr })));
    }
    renderChildren(children, attrs, color, colorStr, hexStr, fmt) {
        if (!children)
            return null;
        const arr = Array.isArray(children) ? children : [children];
        return arr.map((child) => {
            if (!child || typeof child !== "object" || !("tag" in child))
                return child;
            const tag = child.tag;
            if (!tag || !tag.__cpRole)
                return child;
            const role = tag.__cpRole;
            switch (role) {
                case "label":
                    return (m("span", { class: classNames(styles.label, child.attrs?.class), style: child.attrs?.style, "data-part": "label" }, child.children));
                case "control":
                    return (m("div", { class: classNames(styles.control, child.attrs?.class), style: child.attrs?.style, "data-part": "control" }, this.renderChildren(child.children, attrs, color, colorStr, hexStr, fmt)));
                case "input":
                    return (m("input", { class: classNames(styles.input, child.attrs?.class), style: child.attrs?.style, type: "text", value: colorStr, "data-part": "input", oninput: (e) => {
                            const v = e.target.value;
                            try {
                                const c = parseColor(v);
                                this.emitChange(attrs, c);
                            }
                            catch { }
                        }, onblur: (e) => {
                            const v = e.target.value;
                            try {
                                const c = parseColor(v);
                                this.emitChangeEnd(attrs, c);
                            }
                            catch { }
                        } }));
                case "trigger":
                    return (m("button", { type: "button", class: classNames(styles.trigger, child.attrs?.class), style: { ...(child.attrs?.style ?? {}), "--cp-current-color": hexStr }, "data-part": "trigger", onclick: () => { this.isOpen = !this.isOpen; } }, child.children));
                case "positioner":
                    if (!this.isOpen)
                        return null;
                    return (m("div", { class: classNames(styles.positioner, child.attrs?.class), "data-part": "positioner" }, this.renderChildren(child.children, attrs, color, colorStr, hexStr, fmt)));
                case "content":
                    return (m("div", { class: classNames(styles.content, child.attrs?.class), style: child.attrs?.style, "data-part": "content" }, this.renderChildren(child.children, attrs, color, colorStr, hexStr, fmt)));
                case "area":
                    return (m("div", { class: classNames(styles.area, child.attrs?.class), style: {
                            ...(child.attrs?.style ?? {}),
                            "--cp-hue-bg": `hsl(${color.h}, 100%, 50%)`,
                        }, "data-part": "area", oncreate: (v) => { this.areaEl = v.dom; }, onupdate: (v) => { this.areaEl = v.dom; }, onmousedown: (e) => this.startAreaDrag(attrs, e), ontouchstart: (e) => this.startAreaDrag(attrs, e) },
                        m("div", { class: styles.areaThumb, style: {
                                left: `${color.s * 100}%`,
                                top: `${(1 - color.v) * 100}%`,
                                backgroundColor: hexStr,
                            }, "data-part": "area-thumb" })));
                case "channelSlider": {
                    const channel = child.attrs?.channel ?? "hue";
                    return (m("div", { class: classNames(styles.channelSlider, channel === "hue" ? styles.hueSlider : styles.alphaSlider, child.attrs?.class), style: {
                            ...(child.attrs?.style ?? {}),
                            ...(channel === "alpha" ? { "--cp-alpha-end": hexStr } : {}),
                        }, "data-part": `channel-slider-${channel}`, onmousedown: (e) => {
                            this.startSliderDrag(attrs, channel, e, e.currentTarget);
                        }, ontouchstart: (e) => {
                            this.startSliderDrag(attrs, channel, e, e.currentTarget);
                        } },
                        m("div", { class: styles.sliderThumb, style: {
                                left: `${channel === "hue" ? (color.h / 360) * 100 : color.a * 100}%`,
                                backgroundColor: channel === "hue"
                                    ? `hsl(${color.h}, 100%, 50%)`
                                    : hexStr,
                            }, "data-part": "slider-thumb" })));
                }
                case "swatchGroup":
                    return (m("div", { class: classNames(styles.swatchGroup, child.attrs?.class), style: child.attrs?.style, "data-part": "swatch-group" }, this.renderChildren(child.children, attrs, color, colorStr, hexStr, fmt)));
                case "swatchTrigger": {
                    const swatchValue = child.attrs?.value ?? "#000000";
                    return (m("button", { type: "button", class: classNames(styles.swatchTrigger, child.attrs?.class), style: child.attrs?.style, "data-part": "swatch-trigger", onclick: () => {
                            const c = parseColor(swatchValue);
                            this.emitChange(attrs, c);
                            this.emitChangeEnd(attrs, c);
                            this.isOpen = false;
                        } }, (Array.isArray(child.children) ? child.children.length > 0 : !!child.children) ? child.children : (m("div", { class: styles.swatch, style: { backgroundColor: swatchValue }, "data-part": "swatch" }))));
                }
                case "swatch":
                    return (m("div", { class: classNames(styles.swatch, child.attrs?.class), style: { ...(child.attrs?.style ?? {}), backgroundColor: child.attrs?.value ?? hexStr }, "data-part": "swatch" }));
                case "eyeDropper":
                    return (m("button", { type: "button", class: classNames(styles.eyeDropper, child.attrs?.class), style: child.attrs?.style, "data-part": "eye-dropper", onclick: async () => {
                            if ("EyeDropper" in window) {
                                try {
                                    const dropper = new window.EyeDropper();
                                    const result = await dropper.open();
                                    const c = parseColor(result.sRGBHex);
                                    this.emitChange(attrs, c);
                                    this.emitChangeEnd(attrs, c);
                                }
                                catch { }
                            }
                        } }, (Array.isArray(child.children) ? child.children.length > 0 : !!child.children) ? child.children : "🎨"));
                default:
                    return child;
            }
        });
    }
}
// ===========================
// Positioner マーカー（Content を直接開閉と位置制御する）
// ===========================
/**
 * Positioner は Content のラッパー。
 * Root 内部で content マーカーの表示制御に使う。
 * 実際の描画は Root 側で行うため identity 通過させる。
 */
export class CPPositionerMarker {
    view(vnode) { return m("div", null, vnode.children); }
}
CPPositionerMarker.__cpRole = "positioner";
// ===========================
// バンドルエクスポート
// ===========================
/**
 * ColorPicker compound component
 *
 * @example
 * ```tsx
 * <ColorPicker.Root defaultValue="#3b82f6">
 *   <ColorPicker.Label>Color</ColorPicker.Label>
 *   <ColorPicker.Control>
 *     <ColorPicker.Input />
 *     <ColorPicker.Trigger />
 *   </ColorPicker.Control>
 *   <ColorPicker.Positioner>
 *     <ColorPicker.Content>
 *       <ColorPicker.Area />
 *       <ColorPicker.ChannelSlider channel="hue" />
 *     </ColorPicker.Content>
 *   </ColorPicker.Positioner>
 * </ColorPicker.Root>
 * ```
 */
export const ColorPicker = {
    Root: ColorPickerRoot,
    Label: CPLabelMarker,
    Control: CPControlMarker,
    Input: CPInputMarker,
    Trigger: CPTriggerMarker,
    Positioner: CPPositionerMarker,
    Content: CPContentMarker,
    Area: CPAreaMarker,
    ChannelSlider: CPChannelSliderMarker,
    SwatchGroup: CPSwatchGroupMarker,
    SwatchTrigger: CPSwatchTriggerMarker,
    Swatch: CPSwatchMarker,
    EyeDropper: CPEyeDropperMarker,
};
