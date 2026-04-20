/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./SimpleGrid.module.scss";

/**
 * SimpleGrid の属性
 */
export interface SimpleGridAttrs {
	/** カラム数 */
	columns?: number;
	/** 子要素の最小幅（auto-fit に使用） */
	minChildWidth?: string;
	/** gap */
	gap?: string | number;
	/** row-gap */
	rowGap?: string | number;
	/** column-gap */
	columnGap?: string | number;
	/** レンダリングする要素タグ */
	as?: string;
	/** 追加クラス */
	class?: string;
	/** インラインスタイル */
	style?: Record<string, string> | string;
	[key: string]: any;
}

/**
 * @class SimpleGrid
 * @description
 * 簡単にレスポンシブなグリッドレイアウトを作れるコンポーネント。
 * Chakra UI の SimpleGrid に相当する。
 *
 * @example
 * <SimpleGrid columns={3} gap="16px">
 *   <div>1</div><div>2</div><div>3</div>
 * </SimpleGrid>
 * <SimpleGrid minChildWidth="200px" gap="16px">
 *   <div>自動レスポンシブ</div>
 * </SimpleGrid>
 */
class SimpleGridComponent implements m.ClassComponent<SimpleGridAttrs> {
	view(vnode: m.Vnode<SimpleGridAttrs>) {
		const {
			columns, minChildWidth, gap, rowGap, columnGap,
			as: tag = "div", class: className, style,
			...rest
		} = vnode.attrs;

		const inlineStyle: Record<string, string> = {};

		if (minChildWidth) {
			inlineStyle.gridTemplateColumns = `repeat(auto-fit, minmax(${minChildWidth}, 1fr))`;
		} else if (columns) {
			inlineStyle.gridTemplateColumns = `repeat(${columns}, 1fr)`;
		}

		if (gap !== undefined) inlineStyle.gap = typeof gap === "number" ? `${gap}px` : gap;
		if (rowGap !== undefined) inlineStyle.rowGap = typeof rowGap === "number" ? `${rowGap}px` : rowGap;
		if (columnGap !== undefined) inlineStyle.columnGap = typeof columnGap === "number" ? `${columnGap}px` : columnGap;

		const mergedStyle = typeof style === "string"
			? `${Object.entries(inlineStyle).map(([k, v]) => `${k.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`)}:${v}`).join(";")}${style ? `;${style}` : ""}`
			: { ...inlineStyle, ...(style || {}) };

		return m(tag, {
			...rest,
			class: classNames(styles.simpleGrid, className),
			style: mergedStyle,
		}, vnode.children);
	}
}

export { SimpleGridComponent as SimpleGrid };
