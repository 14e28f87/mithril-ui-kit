/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Slider.module.scss";
// ===========================
// マーカーコンポーネント
// ===========================
/** Slider.Label マーカー */
export class SliderLabelMarker {
    view(vnode) { return m("div", null, vnode.children); }
}
SliderLabelMarker.__sliderRole = "label";
/** Slider.ValueText マーカー */
export class SliderValueTextMarker {
    view(vnode) { return m("div", null, vnode.children); }
}
SliderValueTextMarker.__sliderRole = "valueText";
/** Slider.Control マーカー */
export class SliderControlMarker {
    view(vnode) { return m("div", null, vnode.children); }
}
SliderControlMarker.__sliderRole = "control";
/** Slider.Track マーカー */
export class SliderTrackMarker {
    view(vnode) { return m("div", null, vnode.children); }
}
SliderTrackMarker.__sliderRole = "track";
/** Slider.Range マーカー */
export class SliderRangeMarker {
    view(vnode) { return m("div", null, vnode.children); }
}
SliderRangeMarker.__sliderRole = "range";
/** Slider.Thumb マーカー */
export class SliderThumbMarker {
    view(vnode) { return m("div", null, vnode.children); }
}
SliderThumbMarker.__sliderRole = "thumb";
/** Slider.DraggingIndicator マーカー */
export class SliderDraggingIndicatorMarker {
    view(vnode) { return m("div", null, vnode.children); }
}
SliderDraggingIndicatorMarker.__sliderRole = "draggingIndicator";
/** Slider.HiddenInput マーカー */
export class SliderHiddenInputMarker {
    view(vnode) { return m("div", null, vnode.children); }
}
SliderHiddenInputMarker.__sliderRole = "hiddenInput";
/** Slider.MarkerGroup マーカー */
export class SliderMarkerGroupMarker {
    view(vnode) { return m("div", null, vnode.children); }
}
SliderMarkerGroupMarker.__sliderRole = "markerGroup";
/** Slider.Marker マーカー */
export class SliderMarkerMarker {
    view(vnode) { return m("div", null, vnode.children); }
}
SliderMarkerMarker.__sliderRole = "marker";
// ===========================
// ユーティリティ
// ===========================
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
function clamp(val, min, max) {
    return Math.min(Math.max(val, min), max);
}
function roundToStep(val, step, min) {
    const steps = Math.round((val - min) / step);
    return min + steps * step;
}
function percentOf(val, min, max) {
    if (max === min)
        return 0;
    return ((val - min) / (max - min)) * 100;
}
/** VDOM の子要素からマーカー群を検出する */
function collectChildren(children) {
    const result = [];
    if (!children)
        return result;
    const arr = Array.isArray(children) ? children : [children];
    for (const child of arr) {
        if (child && typeof child === "object" && "tag" in child) {
            const tag = child.tag;
            if (tag && tag.__sliderRole) {
                result.push({ role: tag.__sliderRole, vnode: child });
            }
        }
    }
    return result;
}
/** Track の子を検出 */
function collectTrackChildren(vnode) {
    const rangeVnode = null;
    const thumbVnodes = [];
    if (!vnode.children)
        return { rangeVnode, thumbVnodes };
    const arr = Array.isArray(vnode.children) ? vnode.children : [vnode.children];
    let foundRange = null;
    for (const child of arr) {
        if (child && typeof child === "object" && "tag" in child) {
            const tag = child.tag;
            if (tag?.__sliderRole === "range")
                foundRange = child;
            if (tag?.__sliderRole === "thumb")
                thumbVnodes.push(child);
        }
    }
    return { rangeVnode: foundRange, thumbVnodes };
}
// ===========================
// メインコンポーネント
// ===========================
/**
 * Slider.Root — スライダーのルートコンポーネント
 *
 * @description
 * Chakra UI 風の Slider compound component。
 * 単一サム・マルチサム・range スライダーに対応。
 * ドラッグ、キーボード操作、マーカー表示をサポート。
 */
export class SliderRoot {
    constructor() {
        this.internalValue = [0];
        this.draggingIndex = -1;
        this.controlEl = null;
        this.handlePointerDown = (e, attrs) => {
            if (attrs.disabled || attrs.readOnly)
                return;
            e.preventDefault();
            const val = this.getPercentFromPointer(e, attrs);
            const idx = this.findClosestThumb(val, attrs);
            this.draggingIndex = idx;
            this.setValueAtIndex(attrs, idx, val);
            const onMove = (ev) => {
                const newVal = this.getPercentFromPointer(ev, attrs);
                this.setValueAtIndex(attrs, this.draggingIndex, newVal);
                m.redraw();
            };
            const onUp = (ev) => {
                document.removeEventListener("pointermove", onMove);
                document.removeEventListener("pointerup", onUp);
                attrs.onValueChangeEnd?.({ value: this.getValue(attrs) });
                this.draggingIndex = -1;
                m.redraw();
            };
            document.addEventListener("pointermove", onMove);
            document.addEventListener("pointerup", onUp);
        };
    }
    oninit(vnode) {
        const defaultVal = vnode.attrs.defaultValue ?? [vnode.attrs.min ?? 0];
        this.internalValue = [...defaultVal];
    }
    isControlled(attrs) {
        return attrs.value !== undefined;
    }
    getValue(attrs) {
        return this.isControlled(attrs) ? attrs.value : this.internalValue;
    }
    setValue(attrs, newValue) {
        if (!this.isControlled(attrs)) {
            this.internalValue = newValue;
        }
        attrs.onValueChange?.({ value: newValue });
    }
    setValueAtIndex(attrs, index, rawVal) {
        const min = attrs.min ?? 0;
        const max = attrs.max ?? 100;
        const step = attrs.step ?? 1;
        const minSteps = attrs.minStepsBetweenThumbs ?? 0;
        let val = roundToStep(clamp(rawVal, min, max), step, min);
        // 小数精度を丸める
        val = parseFloat(val.toFixed(10));
        const current = [...this.getValue(attrs)];
        // マルチサム制約
        if (minSteps > 0 && current.length > 1) {
            const minGap = minSteps * step;
            if (index > 0 && val < current[index - 1] + minGap) {
                val = current[index - 1] + minGap;
            }
            if (index < current.length - 1 && val > current[index + 1] - minGap) {
                val = current[index + 1] - minGap;
            }
        }
        current[index] = val;
        this.setValue(attrs, current);
    }
    getPercentFromPointer(e, attrs) {
        if (!this.controlEl)
            return 0;
        const rect = this.controlEl.getBoundingClientRect();
        const orientation = attrs.orientation ?? "horizontal";
        const min = attrs.min ?? 0;
        const max = attrs.max ?? 100;
        let ratio;
        if (orientation === "horizontal") {
            ratio = clamp((e.clientX - rect.left) / rect.width, 0, 1);
        }
        else {
            ratio = clamp(1 - (e.clientY - rect.top) / rect.height, 0, 1);
        }
        return min + ratio * (max - min);
    }
    findClosestThumb(val, attrs) {
        const values = this.getValue(attrs);
        let closest = 0;
        let minDist = Infinity;
        for (let i = 0; i < values.length; i++) {
            const dist = Math.abs(values[i] - val);
            if (dist < minDist) {
                minDist = dist;
                closest = i;
            }
        }
        return closest;
    }
    handleKeyDown(e, attrs, index) {
        if (attrs.disabled || attrs.readOnly)
            return;
        const step = attrs.step ?? 1;
        const min = attrs.min ?? 0;
        const max = attrs.max ?? 100;
        const bigStep = (max - min) / 10;
        const current = this.getValue(attrs)[index];
        let newVal = null;
        switch (e.key) {
            case "ArrowRight":
            case "ArrowUp":
                newVal = current + step;
                break;
            case "ArrowLeft":
            case "ArrowDown":
                newVal = current - step;
                break;
            case "PageUp":
                newVal = current + bigStep;
                break;
            case "PageDown":
                newVal = current - bigStep;
                break;
            case "Home":
                newVal = min;
                break;
            case "End":
                newVal = max;
                break;
        }
        if (newVal !== null) {
            e.preventDefault();
            this.setValueAtIndex(attrs, index, newVal);
            attrs.onValueChangeEnd?.({ value: this.getValue(attrs) });
        }
    }
    view(vnode) {
        const attrs = vnode.attrs;
        const min = attrs.min ?? 0;
        const max = attrs.max ?? 100;
        const size = attrs.size ?? "md";
        const variant = attrs.variant ?? "outline";
        const orientation = attrs.orientation ?? "horizontal";
        const origin = attrs.origin ?? "start";
        const values = this.getValue(attrs);
        const isDragging = this.draggingIndex >= 0;
        const markers = collectChildren(vnode.children);
        // ラベル・ValueText
        const labelVnode = markers.find(m => m.role === "label")?.vnode;
        const valueTextVnode = markers.find(m => m.role === "valueText")?.vnode;
        const controlVnode = markers.find(m => m.role === "control")?.vnode;
        const markerGroupVnode = markers.find(m => m.role === "markerGroup")?.vnode;
        // Track/Range/Thumb はコントロール内で探索
        let trackVnode = null;
        let rangeVnode = null;
        let thumbVnodes = [];
        if (controlVnode?.children) {
            const controlChildren = Array.isArray(controlVnode.children) ? controlVnode.children : [controlVnode.children];
            for (const child of controlChildren) {
                if (child && typeof child === "object" && "tag" in child) {
                    const tag = child.tag;
                    if (tag?.__sliderRole === "track") {
                        trackVnode = child;
                        const trackChildren = collectTrackChildren(child);
                        rangeVnode = trackChildren.rangeVnode;
                        thumbVnodes = trackChildren.thumbVnodes;
                    }
                    if (tag?.__sliderRole === "thumb") {
                        thumbVnodes.push(child);
                    }
                }
            }
        }
        // range スタイル計算
        const rangeStyle = {};
        if (values.length === 1) {
            const pct = percentOf(values[0], min, max);
            if (origin === "center") {
                const centerPct = 50;
                if (orientation === "horizontal") {
                    rangeStyle.left = `${Math.min(centerPct, pct)}%`;
                    rangeStyle.width = `${Math.abs(pct - centerPct)}%`;
                }
                else {
                    rangeStyle.bottom = `${Math.min(centerPct, pct)}%`;
                    rangeStyle.height = `${Math.abs(pct - centerPct)}%`;
                }
            }
            else {
                if (orientation === "horizontal") {
                    rangeStyle.left = "0%";
                    rangeStyle.width = `${pct}%`;
                }
                else {
                    rangeStyle.bottom = "0%";
                    rangeStyle.height = `${pct}%`;
                }
            }
        }
        else if (values.length >= 2) {
            const minPct = percentOf(Math.min(...values), min, max);
            const maxPct = percentOf(Math.max(...values), min, max);
            if (orientation === "horizontal") {
                rangeStyle.left = `${minPct}%`;
                rangeStyle.width = `${maxPct - minPct}%`;
            }
            else {
                rangeStyle.bottom = `${minPct}%`;
                rangeStyle.height = `${maxPct - minPct}%`;
            }
        }
        // マーカー
        let markerVnodes = [];
        if (markerGroupVnode?.children) {
            const arr = Array.isArray(markerGroupVnode.children) ? markerGroupVnode.children : [markerGroupVnode.children];
            for (const child of arr) {
                if (child && typeof child === "object" && "tag" in child) {
                    const tag = child.tag;
                    if (tag?.__sliderRole === "marker")
                        markerVnodes.push(child);
                }
            }
        }
        return (m("div", { class: classNames(styles.root, styles[`size${capitalize(size)}`], styles[`variant${capitalize(variant)}`], styles[`orientation${capitalize(orientation)}`], {
                [styles.disabled]: attrs.disabled,
                [styles.readOnly]: attrs.readOnly,
            }, attrs.class), style: attrs.style, "data-scope": "slider", "data-part": "root", "data-dragging": isDragging ? "true" : "false", "data-orientation": orientation },
            (labelVnode || valueTextVnode) && (m("div", { class: styles.headerRow },
                labelVnode && (m("span", { class: classNames(styles.label, labelVnode.attrs.class), style: labelVnode.attrs.style, "data-part": "label" }, labelVnode.children)),
                valueTextVnode && (m("span", { class: classNames(styles.valueText, valueTextVnode.attrs.class), style: valueTextVnode.attrs.style, "data-part": "value-text" }, valueTextVnode.children ?? values.join(", "))))),
            m("div", { class: classNames(styles.control, controlVnode?.attrs.class), style: controlVnode?.attrs.style, "data-part": "control", "data-orientation": orientation, oncreate: (v) => { this.controlEl = v.dom; }, onupdate: (v) => { this.controlEl = v.dom; }, onpointerdown: (e) => this.handlePointerDown(e, attrs) },
                m("div", { class: classNames(styles.track, trackVnode?.attrs.class), style: trackVnode?.attrs.style, "data-part": "track" },
                    m("div", { class: classNames(styles.range, rangeVnode?.attrs.class), style: { ...rangeStyle, ...(rangeVnode?.attrs.style ?? {}) }, "data-part": "range" })),
                values.map((val, i) => {
                    const pct = percentOf(val, min, max);
                    const thumbAttrs = thumbVnodes[i]?.attrs ?? thumbVnodes[0]?.attrs ?? {};
                    const thumbStyle = { ...(thumbAttrs.style ?? {}) };
                    if (orientation === "horizontal") {
                        thumbStyle.left = `${pct}%`;
                        thumbStyle.transform = "translateX(-50%)";
                    }
                    else {
                        thumbStyle.bottom = `${pct}%`;
                        thumbStyle.transform = "translateY(50%)";
                    }
                    return (m("div", { key: i, class: classNames(styles.thumb, thumbAttrs.class), style: thumbStyle, "data-part": "thumb", "data-index": i, tabindex: attrs.disabled ? -1 : 0, role: "slider", "aria-valuemin": min, "aria-valuemax": max, "aria-valuenow": val, "aria-orientation": orientation, "aria-disabled": attrs.disabled, onkeydown: (e) => this.handleKeyDown(e, attrs, i) }, thumbVnodes[i]?.children));
                })),
            markerGroupVnode && markerVnodes.length > 0 && (m("div", { class: classNames(styles.markerGroup, markerGroupVnode.attrs.class), style: markerGroupVnode.attrs.style, "data-part": "marker-group" }, markerVnodes.map(mv => {
                const markerVal = mv.attrs.value;
                const pct = percentOf(markerVal, min, max);
                const markerStyle = { ...(mv.attrs.style ?? {}) };
                if (orientation === "horizontal") {
                    markerStyle.left = `${pct}%`;
                }
                else {
                    markerStyle.bottom = `${pct}%`;
                }
                return (m("span", { key: markerVal, class: classNames(styles.marker, mv.attrs.class), style: markerStyle, "data-part": "marker", "data-value": markerVal }, mv.children ?? markerVal));
            })))));
    }
}
// ===========================
// バンドルエクスポート
// ===========================
/**
 * Slider compound component
 *
 * @example
 * ```tsx
 * <Slider.Root min={0} max={100} defaultValue={[50]}>
 *   <Slider.Label>音量</Slider.Label>
 *   <Slider.ValueText />
 *   <Slider.Control>
 *     <Slider.Track>
 *       <Slider.Range />
 *     </Slider.Track>
 *     <Slider.Thumb index={0} />
 *   </Slider.Control>
 * </Slider.Root>
 * ```
 */
export const Slider = {
    Root: SliderRoot,
    Label: SliderLabelMarker,
    ValueText: SliderValueTextMarker,
    Control: SliderControlMarker,
    Track: SliderTrackMarker,
    Range: SliderRangeMarker,
    Thumb: SliderThumbMarker,
    DraggingIndicator: SliderDraggingIndicatorMarker,
    HiddenInput: SliderHiddenInputMarker,
    MarkerGroup: SliderMarkerGroupMarker,
    Marker: SliderMarkerMarker,
};
