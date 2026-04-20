/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Box.module.scss";
/**
 * @class Box
 * @description
 * 最も基本的なレイアウトコンポーネント。Chakra UI の Box に相当する。
 * デフォルトは div をレンダリングし、`as` prop で要素を変更可能。
 *
 * @example
 * <Box style={{ padding: "16px", background: "#f0f0f0" }}>内容</Box>
 * <Box as="section" class="my-section">セクション</Box>
 */
class BoxComponent {
    view(vnode) {
        const { as: tag = "div", class: className, ...rest } = vnode.attrs;
        return m(tag, { ...rest, class: classNames(styles.box, className) }, vnode.children);
    }
}
export { BoxComponent as Box };
