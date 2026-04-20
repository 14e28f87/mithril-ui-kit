/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./ProgressCircle.module.scss";
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
/** サイズから SVG 寸法を取得 */
const SIZE_MAP = {
    xs: { size: 24, stroke: 3 },
    sm: { size: 32, stroke: 3.5 },
    md: { size: 48, stroke: 4 },
    lg: { size: 64, stroke: 5 },
    xl: { size: 80, stroke: 6 },
};
/* ─── マーカークラス ─── */
class ProgressCircleCircleMarker {
    view() { return null; }
}
ProgressCircleCircleMarker.__pcRole = "circle";
class ProgressCircleTrackMarker {
    view() { return null; }
}
ProgressCircleTrackMarker.__pcRole = "track";
class ProgressCircleRangeMarker {
    view() { return null; }
}
ProgressCircleRangeMarker.__pcRole = "range";
class ProgressCircleValueTextMarker {
    view() { return null; }
}
ProgressCircleValueTextMarker.__pcRole = "valueText";
/**
 * ProgressCircle Root コンポーネント — 円形の進捗インジケーター
 *
 * @example
 * ```tsx
 * <ProgressCircle.Root value={75} size="lg" colorPalette="green">
 *   <ProgressCircle.Circle>
 *     <ProgressCircle.Track />
 *     <ProgressCircle.Range />
 *   </ProgressCircle.Circle>
 *   <ProgressCircle.ValueText />
 * </ProgressCircle.Root>
 * ```
 */
class ProgressCircleRoot {
    view(vnode) {
        const { value, min = 0, max = 100, size = "md", colorPalette = "blue", class: className, ...rest } = vnode.attrs;
        const indeterminate = value === null || value === undefined;
        const percent = indeterminate ? 0 : Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));
        const dim = SIZE_MAP[size] || SIZE_MAP.md;
        const radius = (dim.size - dim.stroke) / 2;
        const circumference = 2 * Math.PI * radius;
        const dashOffset = indeterminate ? circumference * 0.25 : circumference * (1 - percent / 100);
        return (m("div", { ...rest, class: classNames(styles.root, styles[`color${capitalize(colorPalette)}`], { [styles.indeterminate]: indeterminate }, className), role: "progressbar", "aria-valuenow": indeterminate ? undefined : value, "aria-valuemin": min, "aria-valuemax": max, style: { width: `${dim.size}px`, height: `${dim.size}px` } },
            m("svg", { class: styles.svg, viewBox: `0 0 ${dim.size} ${dim.size}` },
                m("circle", { class: styles.track, cx: dim.size / 2, cy: dim.size / 2, r: radius, fill: "none", "stroke-width": dim.stroke }),
                m("circle", { class: styles.range, cx: dim.size / 2, cy: dim.size / 2, r: radius, fill: "none", "stroke-width": dim.stroke, "stroke-dasharray": circumference, "stroke-dashoffset": dashOffset, "stroke-linecap": "round", transform: `rotate(-90 ${dim.size / 2} ${dim.size / 2})` })),
            !indeterminate && this.renderValueText(vnode.children, percent)));
    }
    renderValueText(children, percent) {
        const arr = (Array.isArray(children) ? children : [children]).flat(Infinity);
        for (const child of arr) {
            if (child && typeof child === "object" && "tag" in child) {
                const tag = child.tag;
                const cv = child;
                if (tag?.__pcRole === "valueText") {
                    return (m("span", { class: classNames(styles.valueText, cv.attrs?.class) }, cv.children && cv.children.length > 0 ? cv.children : `${Math.round(percent)}%`));
                }
            }
        }
        return null;
    }
}
/**
 * ProgressCircle コンポーネント名前空間
 */
export const ProgressCircle = {
    Root: ProgressCircleRoot,
    Circle: ProgressCircleCircleMarker,
    Track: ProgressCircleTrackMarker,
    Range: ProgressCircleRangeMarker,
    ValueText: ProgressCircleValueTextMarker,
};
export { ProgressCircleRoot };
