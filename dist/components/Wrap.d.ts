/** @jsx m */
import m from "mithril";
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
declare class WrapComponent implements m.ClassComponent<WrapAttrs> {
    view(vnode: m.Vnode<WrapAttrs>): m.Vnode<any, any>;
}
export { WrapComponent as Wrap };
//# sourceMappingURL=Wrap.d.ts.map