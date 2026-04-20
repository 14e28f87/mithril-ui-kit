/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Progress.module.scss";
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
/* ─── マーカークラス ─── */
class ProgressTrackMarker {
    view() { return null; }
}
ProgressTrackMarker.__progressRole = "track";
class ProgressRangeMarker {
    view() { return null; }
}
ProgressRangeMarker.__progressRole = "range";
class ProgressLabelMarker {
    view() { return null; }
}
ProgressLabelMarker.__progressRole = "label";
class ProgressValueTextMarker {
    view() { return null; }
}
ProgressValueTextMarker.__progressRole = "valueText";
/**
 * Progress Root コンポーネント — 進捗バー
 *
 * @example
 * ```tsx
 * <Progress.Root value={60} size="md" colorPalette="green">
 *   <Progress.Label>アップロード中</Progress.Label>
 *   <Progress.ValueText />
 *   <Progress.Track>
 *     <Progress.Range />
 *   </Progress.Track>
 * </Progress.Root>
 * ```
 */
class ProgressRoot {
    view(vnode) {
        const { value, min = 0, max = 100, variant = "outline", size = "md", colorPalette = "blue", striped, animated, class: className, ...rest } = vnode.attrs;
        const indeterminate = value === null || value === undefined;
        const percent = indeterminate ? 0 : Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));
        const children = (Array.isArray(vnode.children) ? vnode.children : [vnode.children]).flat(Infinity);
        const rendered = [];
        for (const child of children) {
            if (child && typeof child === "object" && "tag" in child) {
                const tag = child.tag;
                const cv = child;
                if (tag?.__progressRole === "label") {
                    rendered.push(m("span", { class: classNames(styles.label, cv.attrs?.class) }, cv.children));
                    continue;
                }
                if (tag?.__progressRole === "valueText") {
                    rendered.push(m("span", { class: classNames(styles.valueText, cv.attrs?.class) }, indeterminate ? "" : `${Math.round(percent)}%`));
                    continue;
                }
                if (tag?.__progressRole === "track") {
                    rendered.push(m("div", { class: classNames(styles.track, cv.attrs?.class) },
                        m("div", { class: classNames(styles.range, { [styles.striped]: striped || animated }, { [styles.animated]: animated }, { [styles.indeterminate]: indeterminate }), style: { width: indeterminate ? "100%" : `${percent}%` }, role: "progressbar", "aria-valuenow": indeterminate ? undefined : value, "aria-valuemin": min, "aria-valuemax": max })));
                    continue;
                }
                if (tag?.__progressRole === "range") {
                    continue; // range は track 内で自動生成
                }
            }
            rendered.push(child);
        }
        return (m("div", { ...rest, class: classNames(styles.root, styles[`variant${capitalize(variant)}`], styles[`size${capitalize(size)}`], styles[`color${capitalize(colorPalette)}`], className) }, rendered));
    }
}
/**
 * Progress コンポーネント名前空間
 */
export const Progress = {
    Root: ProgressRoot,
    Track: ProgressTrackMarker,
    Range: ProgressRangeMarker,
    Label: ProgressLabelMarker,
    ValueText: ProgressValueTextMarker,
};
export { ProgressRoot };
