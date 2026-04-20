/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Grid.module.scss";
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
class GridComponent {
    view(vnode) {
        const { templateColumns, templateRows, templateAreas, autoFlow, autoRows, autoColumns, column, row, gap, rowGap, columnGap, inline, as: tag = "div", class: className, style, ...rest } = vnode.attrs;
        const inlineStyle = {};
        if (templateColumns)
            inlineStyle.gridTemplateColumns = templateColumns;
        if (templateRows)
            inlineStyle.gridTemplateRows = templateRows;
        if (templateAreas)
            inlineStyle.gridTemplateAreas = templateAreas;
        if (autoFlow)
            inlineStyle.gridAutoFlow = autoFlow;
        if (autoRows)
            inlineStyle.gridAutoRows = autoRows;
        if (autoColumns)
            inlineStyle.gridAutoColumns = autoColumns;
        if (column)
            inlineStyle.gridColumn = column;
        if (row)
            inlineStyle.gridRow = row;
        if (gap !== undefined)
            inlineStyle.gap = typeof gap === "number" ? `${gap}px` : gap;
        if (rowGap !== undefined)
            inlineStyle.rowGap = typeof rowGap === "number" ? `${rowGap}px` : rowGap;
        if (columnGap !== undefined)
            inlineStyle.columnGap = typeof columnGap === "number" ? `${columnGap}px` : columnGap;
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
class GridItemComponent {
    view(vnode) {
        const { colSpan, rowSpan, colStart, colEnd, rowStart, rowEnd, area, as: tag = "div", class: className, style, ...rest } = vnode.attrs;
        const inlineStyle = {};
        if (colSpan !== undefined)
            inlineStyle.gridColumn = `span ${colSpan}`;
        if (rowSpan !== undefined)
            inlineStyle.gridRow = `span ${rowSpan}`;
        if (colStart !== undefined)
            inlineStyle.gridColumnStart = String(colStart);
        if (colEnd !== undefined)
            inlineStyle.gridColumnEnd = String(colEnd);
        if (rowStart !== undefined)
            inlineStyle.gridRowStart = String(rowStart);
        if (rowEnd !== undefined)
            inlineStyle.gridRowEnd = String(rowEnd);
        if (area)
            inlineStyle.gridArea = area;
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
