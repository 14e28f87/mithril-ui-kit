/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./AspectRatio.module.scss";
/**
 * @class AspectRatio
 * @description
 * 子要素のアスペクト比を維持するコンポーネント。
 * Chakra UI の AspectRatio に相当する。
 *
 * @example
 * <AspectRatio ratio={16 / 9}>
 *   <img src="photo.jpg" style={{ objectFit: "cover" }} />
 * </AspectRatio>
 */
class AspectRatioComponent {
    view(vnode) {
        const { ratio = 4 / 3, as: tag = "div", class: className, style, ...rest } = vnode.attrs;
        const ratioStyle = {
            aspectRatio: String(ratio),
        };
        const mergedStyle = typeof style === "string"
            ? `aspect-ratio:${ratio};${style}`
            : { ...ratioStyle, ...(style || {}) };
        return m(tag, {
            ...rest,
            class: classNames(styles.aspectRatio, className),
            style: mergedStyle,
        }, vnode.children);
    }
}
export { AspectRatioComponent as AspectRatio };
