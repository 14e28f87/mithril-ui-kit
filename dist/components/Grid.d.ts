/** @jsx m */
import m from "mithril";
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
declare class GridComponent implements m.ClassComponent<GridAttrs> {
    view(vnode: m.Vnode<GridAttrs>): m.Vnode<any, any>;
}
/**
 * @class GridItem
 * @description Grid 内のアイテム。colSpan, rowSpan でサイズ制御。
 */
declare class GridItemComponent implements m.ClassComponent<GridItemAttrs> {
    view(vnode: m.Vnode<GridItemAttrs>): m.Vnode<any, any>;
}
export { GridComponent as Grid, GridItemComponent as GridItem };
//# sourceMappingURL=Grid.d.ts.map