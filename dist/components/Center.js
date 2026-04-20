/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Center.module.scss";
/**
 * @class Center
 * @description
 * 子要素を水平・垂直にセンタリングするコンポーネント。
 * Chakra UI の Center に相当する。
 *
 * @example
 * <Center style={{ height: "100px", background: "tomato", color: "white" }}>
 *   中央に配置されます
 * </Center>
 */
class CenterComponent {
    view(vnode) {
        const { inline, as: tag = "div", class: className, ...rest } = vnode.attrs;
        return m(tag, {
            ...rest,
            class: classNames(styles.center, inline && styles.inline, className),
        }, vnode.children);
    }
}
/**
 * @class Square
 * @description
 * 固定サイズの正方形コンテナ内に子要素をセンタリングする。
 */
class SquareComponent {
    view(vnode) {
        const { size, as: tag = "div", class: className, style, ...rest } = vnode.attrs;
        const sizeVal = typeof size === "number" ? `${size}px` : size;
        const sizeStyle = {};
        if (sizeVal) {
            sizeStyle.width = sizeVal;
            sizeStyle.height = sizeVal;
        }
        const mergedStyle = typeof style === "string"
            ? `width:${sizeVal};height:${sizeVal};${style}`
            : { ...sizeStyle, ...(style || {}) };
        return m(tag, {
            ...rest,
            class: classNames(styles.square, className),
            style: mergedStyle,
        }, vnode.children);
    }
}
/**
 * @class Circle
 * @description
 * Square に borderRadius: 9999px を追加し、完全な円を作る。
 */
class CircleComponent {
    view(vnode) {
        const { class: className, ...rest } = vnode.attrs;
        return m(SquareComponent, {
            ...rest,
            class: classNames(styles.circle, className),
        }, vnode.children);
    }
}
export { CenterComponent as Center, SquareComponent as Square, CircleComponent as Circle };
