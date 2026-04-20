/** @jsx m */
import m from "mithril";
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
declare class SimpleGridComponent implements m.ClassComponent<SimpleGridAttrs> {
    view(vnode: m.Vnode<SimpleGridAttrs>): m.Vnode<any, any>;
}
export { SimpleGridComponent as SimpleGrid };
//# sourceMappingURL=SimpleGrid.d.ts.map