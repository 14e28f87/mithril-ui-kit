/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Float.module.scss";
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
function camelCase(str) {
    return str.split("-").map((part, i) => i === 0 ? part : capitalize(part)).join("");
}
/**
 * @class Float
 * @description
 * 親要素のエッジにアンカーする位置決めコンポーネント。
 * Chakra UI の Float に相当する。親要素に position: relative が必要。
 *
 * @example
 * <Box style={{ position: "relative" }}>
 *   <Float placement="top-end">
 *     <Badge>3</Badge>
 *   </Float>
 * </Box>
 */
class FloatComponent {
    view(vnode) {
        const { placement = "top-end", offsetX, offsetY, offset, as: tag = "div", class: className, style, ...rest } = vnode.attrs;
        const placementClass = styles[camelCase(placement)] || "";
        const inlineStyle = {};
        const offX = offsetX ?? offset;
        const offY = offsetY ?? offset;
        if (offX !== undefined)
            inlineStyle["--float-offset-x"] = typeof offX === "number" ? `${offX}px` : offX;
        if (offY !== undefined)
            inlineStyle["--float-offset-y"] = typeof offY === "number" ? `${offY}px` : offY;
        const mergedStyle = typeof style === "string"
            ? `${Object.entries(inlineStyle).map(([k, v]) => `${k}:${v}`).join(";")}${style ? `;${style}` : ""}`
            : { ...inlineStyle, ...(style || {}) };
        return m(tag, {
            ...rest,
            class: classNames(styles.float, placementClass, className),
            style: mergedStyle,
        }, vnode.children);
    }
}
export { FloatComponent as Float };
