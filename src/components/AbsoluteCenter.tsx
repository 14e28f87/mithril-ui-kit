/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./AbsoluteCenter.module.scss";

/**
 * AbsoluteCenter の属性
 */
export interface AbsoluteCenterAttrs {
	/** センタリングする軸 */
	axis?: "horizontal" | "vertical" | "both";
	/** レンダリングする要素タグ */
	as?: string;
	/** 追加クラス */
	class?: string;
	/** インラインスタイル */
	style?: Record<string, string> | string;
	[key: string]: any;
}

/**
 * @class AbsoluteCenter
 * @description
 * 親要素に対して絶対位置で中央配置するコンポーネント。
 * 親要素に position: relative が必要。
 * Chakra UI の AbsoluteCenter に相当する。
 *
 * @example
 * <Box style={{ position: "relative", height: "100px" }}>
 *   <AbsoluteCenter>中央</AbsoluteCenter>
 * </Box>
 */
class AbsoluteCenterComponent implements m.ClassComponent<AbsoluteCenterAttrs> {
	view(vnode: m.Vnode<AbsoluteCenterAttrs>) {
		const { axis = "both", as: tag = "div", class: className, ...rest } = vnode.attrs;

		const axisClass =
			axis === "horizontal" ? styles.horizontal :
			axis === "vertical" ? styles.vertical :
			styles.both;

		return m(tag, {
			...rest,
			class: classNames(styles.absoluteCenter, axisClass, className),
		}, vnode.children);
	}
}

export { AbsoluteCenterComponent as AbsoluteCenter };
