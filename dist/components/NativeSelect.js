/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./NativeSelect.module.scss";
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
/* ─── マーカークラス ─── */
class NativeSelectFieldMarker {
    view() { return null; }
}
NativeSelectFieldMarker.__nsRole = "field";
class NativeSelectIndicatorMarker {
    view() { return null; }
}
NativeSelectIndicatorMarker.__nsRole = "indicator";
/**
 * NativeSelect Root コンポーネント — ネイティブセレクトボックス
 *
 * @example
 * ```tsx
 * <NativeSelect.Root variant="outline" size="md">
 *   <NativeSelect.Field>
 *     <option value="">選択してください</option>
 *     <option value="a">オプションA</option>
 *     <option value="b">オプションB</option>
 *   </NativeSelect.Field>
 *   <NativeSelect.Indicator />
 * </NativeSelect.Root>
 * ```
 */
class NativeSelectRoot {
    view(vnode) {
        const { variant = "outline", size = "md", disabled, class: className, ...rest } = vnode.attrs;
        const children = (Array.isArray(vnode.children) ? vnode.children : [vnode.children]).flat(Infinity);
        const rendered = [];
        let hasIndicator = false;
        for (const child of children) {
            if (child && typeof child === "object" && "tag" in child) {
                const tag = child.tag;
                const cv = child;
                if (tag?.__nsRole === "field") {
                    rendered.push(m("select", { ...(cv.attrs || {}), disabled: disabled, class: classNames(styles.field, cv.attrs?.class) }, cv.children));
                    continue;
                }
                if (tag?.__nsRole === "indicator") {
                    hasIndicator = true;
                    rendered.push(m("span", { class: classNames(styles.indicator, cv.attrs?.class) }, cv.children && cv.children.length > 0 ? cv.children : "▾"));
                    continue;
                }
            }
            rendered.push(child);
        }
        if (!hasIndicator) {
            rendered.push(m("span", { class: styles.indicator }, "\u25BE"));
        }
        return (m("div", { ...rest, class: classNames(styles.root, styles[`variant${capitalize(variant)}`], styles[`size${capitalize(size)}`], { [styles.disabled]: disabled }, className) }, rendered));
    }
}
/**
 * NativeSelect コンポーネント名前空間
 */
export const NativeSelect = {
    Root: NativeSelectRoot,
    Field: NativeSelectFieldMarker,
    Indicator: NativeSelectIndicatorMarker,
};
export { NativeSelectRoot };
