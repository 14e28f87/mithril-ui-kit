/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Wrap.module.scss";

/**
 * Wrap の属性
 */
export interface WrapAttrs {
	/** gap */
	gap?: string | number;
	/** row-gap */
	rowGap?: string | number;
	/** column-gap */
	columnGap?: string | number;
	/** align-items */
	align?: string;
	/** justify-content */
	justify?: string;
	/** レンダリングする要素タグ */
	as?: string;
	/** 追加クラス */
	class?: string;
	/** インラインスタイル */
	style?: Record<string, string> | string;
	[key: string]: any;
}

/**
 * @class Wrap
 * @description
 * 要素間にスペースを追加し、自動で折り返すレイアウトコンポーネント。
 * Chakra UI の Wrap に相当する。
 *
 * @example
 * <Wrap gap="8px">
 *   <Badge>Tag 1</Badge>
 *   <Badge>Tag 2</Badge>
 * </Wrap>
 */
class WrapComponent implements m.ClassComponent<WrapAttrs> {
	view(vnode: m.Vnode<WrapAttrs>) {
		const {
			gap = "8px", rowGap, columnGap, align, justify,
			as: tag = "div", class: className, style,
			...rest
		} = vnode.attrs;

		const inlineStyle: Record<string, string> = {};
		if (gap !== undefined) inlineStyle.gap = typeof gap === "number" ? `${gap}px` : gap;
		if (rowGap !== undefined) inlineStyle.rowGap = typeof rowGap === "number" ? `${rowGap}px` : rowGap;
		if (columnGap !== undefined) inlineStyle.columnGap = typeof columnGap === "number" ? `${columnGap}px` : columnGap;
		if (align) inlineStyle.alignItems = align;
		if (justify) inlineStyle.justifyContent = justify;

		const mergedStyle = typeof style === "string"
			? `${Object.entries(inlineStyle).map(([k, v]) => `${k.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`)}:${v}`).join(";")}${style ? `;${style}` : ""}`
			: { ...inlineStyle, ...(style || {}) };

		return m(tag, {
			...rest,
			class: classNames(styles.wrap, className),
			style: mergedStyle,
		}, vnode.children);
	}
}

export { WrapComponent as Wrap };
