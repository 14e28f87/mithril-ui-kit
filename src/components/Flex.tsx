/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Flex.module.scss";

/**
 * Flex の属性
 */
export interface FlexAttrs {
	/** フレックス方向 */
	direction?: "row" | "row-reverse" | "column" | "column-reverse";
	/** align-items */
	align?: string;
	/** justify-content */
	justify?: string;
	/** flex-wrap */
	wrap?: "wrap" | "nowrap" | "wrap-reverse";
	/** flex-basis */
	basis?: string;
	/** flex-grow */
	grow?: number | string;
	/** flex-shrink */
	shrink?: number | string;
	/** gap */
	gap?: string | number;
	/** inline flex */
	inline?: boolean;
	/** レンダリングする要素タグ */
	as?: string;
	/** 追加クラス */
	class?: string;
	/** インラインスタイル */
	style?: Record<string, string> | string;
	[key: string]: any;
}

/**
 * @class Flex
 * @description
 * Flexbox レイアウトコンポーネント。Chakra UI の Flex に相当する。
 *
 * @example
 * <Flex direction="row" gap="8px" align="center">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Flex>
 */
class FlexComponent implements m.ClassComponent<FlexAttrs> {
	view(vnode: m.Vnode<FlexAttrs>) {
		const {
			direction, align, justify, wrap, basis, grow, shrink,
			gap, inline, as: tag = "div", class: className, style,
			...rest
		} = vnode.attrs;

		const inlineStyle: Record<string, string> = {};
		if (direction) inlineStyle.flexDirection = direction;
		if (align) inlineStyle.alignItems = align;
		if (justify) inlineStyle.justifyContent = justify;
		if (wrap) inlineStyle.flexWrap = wrap;
		if (basis) inlineStyle.flexBasis = basis;
		if (grow !== undefined) inlineStyle.flexGrow = String(grow);
		if (shrink !== undefined) inlineStyle.flexShrink = String(shrink);
		if (gap !== undefined) inlineStyle.gap = typeof gap === "number" ? `${gap}px` : gap;

		const mergedStyle = typeof style === "string"
			? `${Object.entries(inlineStyle).map(([k, v]) => `${k.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`)}:${v}`).join(";")}${style ? `;${style}` : ""}`
			: { ...inlineStyle, ...(style || {}) };

		return m(tag, {
			...rest,
			class: classNames(styles.flex, inline && styles.inline, className),
			style: mergedStyle,
		}, vnode.children);
	}
}

/**
 * Spacer コンポーネント — Flex 内の隙間を埋める
 */
class SpacerComponent implements m.ClassComponent {
	view() {
		return <div class={styles.spacer} />;
	}
}

export { FlexComponent as Flex, SpacerComponent as Spacer };
