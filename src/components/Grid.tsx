/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Grid.module.scss";

/**
 * Grid の属性
 */
export interface GridAttrs {
	/** grid-template-columns */
	templateColumns?: string;
	/** grid-template-rows */
	templateRows?: string;
	/** grid-template-areas */
	templateAreas?: string;
	/** grid-auto-flow */
	autoFlow?: string;
	/** grid-auto-rows */
	autoRows?: string;
	/** grid-auto-columns */
	autoColumns?: string;
	/** grid-column */
	column?: string;
	/** grid-row */
	row?: string;
	/** gap */
	gap?: string | number;
	/** row-gap */
	rowGap?: string | number;
	/** column-gap */
	columnGap?: string | number;
	/** inline grid */
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
 * GridItem の属性
 */
export interface GridItemAttrs {
	/** colSpan */
	colSpan?: number | string;
	/** rowSpan */
	rowSpan?: number | string;
	/** colStart */
	colStart?: number | string;
	/** colEnd */
	colEnd?: number | string;
	/** rowStart */
	rowStart?: number | string;
	/** rowEnd */
	rowEnd?: number | string;
	/** grid-area */
	area?: string;
	/** レンダリングする要素タグ */
	as?: string;
	/** 追加クラス */
	class?: string;
	/** インラインスタイル */
	style?: Record<string, string> | string;
	[key: string]: any;
}

/**
 * @class Grid
 * @description
 * CSS Grid レイアウトコンポーネント。Chakra UI の Grid に相当する。
 *
 * @example
 * <Grid templateColumns="repeat(3, 1fr)" gap="16px">
 *   <GridItem>1</GridItem>
 *   <GridItem colSpan={2}>2-3</GridItem>
 * </Grid>
 */
class GridComponent implements m.ClassComponent<GridAttrs> {
	view(vnode: m.Vnode<GridAttrs>) {
		const {
			templateColumns, templateRows, templateAreas,
			autoFlow, autoRows, autoColumns, column, row,
			gap, rowGap, columnGap, inline,
			as: tag = "div", class: className, style,
			...rest
		} = vnode.attrs;

		const inlineStyle: Record<string, string> = {};
		if (templateColumns) inlineStyle.gridTemplateColumns = templateColumns;
		if (templateRows) inlineStyle.gridTemplateRows = templateRows;
		if (templateAreas) inlineStyle.gridTemplateAreas = templateAreas;
		if (autoFlow) inlineStyle.gridAutoFlow = autoFlow;
		if (autoRows) inlineStyle.gridAutoRows = autoRows;
		if (autoColumns) inlineStyle.gridAutoColumns = autoColumns;
		if (column) inlineStyle.gridColumn = column;
		if (row) inlineStyle.gridRow = row;
		if (gap !== undefined) inlineStyle.gap = typeof gap === "number" ? `${gap}px` : gap;
		if (rowGap !== undefined) inlineStyle.rowGap = typeof rowGap === "number" ? `${rowGap}px` : rowGap;
		if (columnGap !== undefined) inlineStyle.columnGap = typeof columnGap === "number" ? `${columnGap}px` : columnGap;

		const mergedStyle = typeof style === "string"
			? `${Object.entries(inlineStyle).map(([k, v]) => `${k.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`)}:${v}`).join(";")}${style ? `;${style}` : ""}`
			: { ...inlineStyle, ...(style || {}) };

		return m(tag, {
			...rest,
			class: classNames(styles.grid, inline && styles.inline, className),
			style: mergedStyle,
		}, vnode.children);
	}
}

/**
 * @class GridItem
 * @description Grid 内のアイテム。colSpan, rowSpan でサイズ制御。
 */
class GridItemComponent implements m.ClassComponent<GridItemAttrs> {
	view(vnode: m.Vnode<GridItemAttrs>) {
		const {
			colSpan, rowSpan, colStart, colEnd, rowStart, rowEnd, area,
			as: tag = "div", class: className, style,
			...rest
		} = vnode.attrs;

		const inlineStyle: Record<string, string> = {};
		if (colSpan !== undefined) inlineStyle.gridColumn = `span ${colSpan}`;
		if (rowSpan !== undefined) inlineStyle.gridRow = `span ${rowSpan}`;
		if (colStart !== undefined) inlineStyle.gridColumnStart = String(colStart);
		if (colEnd !== undefined) inlineStyle.gridColumnEnd = String(colEnd);
		if (rowStart !== undefined) inlineStyle.gridRowStart = String(rowStart);
		if (rowEnd !== undefined) inlineStyle.gridRowEnd = String(rowEnd);
		if (area) inlineStyle.gridArea = area;

		const mergedStyle = typeof style === "string"
			? `${Object.entries(inlineStyle).map(([k, v]) => `${k.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`)}:${v}`).join(";")}${style ? `;${style}` : ""}`
			: { ...inlineStyle, ...(style || {}) };

		return m(tag, {
			...rest,
			class: classNames(className),
			style: mergedStyle,
		}, vnode.children);
	}
}

export { GridComponent as Grid, GridItemComponent as GridItem };
