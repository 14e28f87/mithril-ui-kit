/** @jsx m */
import m from "mithril";
/**
 * Bleed の属性
 */
export interface BleedAttrs {
    /** 水平方向のネガティブマージン */
    inline?: string | number;
    /** 垂直方向のネガティブマージン */
    block?: string | number;
    /** inline-start 方向 */
    inlineStart?: string | number;
    /** inline-end 方向 */
    inlineEnd?: string | number;
    /** block-start 方向 */
    blockStart?: string | number;
    /** block-end 方向 */
    blockEnd?: string | number;
    /** レンダリングする要素タグ */
    as?: string;
    /** 追加クラス */
    class?: string;
    /** インラインスタイル */
    style?: Record<string, string> | string;
    [key: string]: any;
}
/**
 * @class Bleed
 * @description
 * コンテナの境界を超えて要素を拡張するコンポーネント。
 * Chakra UI の Bleed に相当する。
 *
 * @example
 * <Box style={{ padding: "20px" }}>
 *   <Bleed inline="20px">
 *     <div style={{ background: "tomato", padding: "20px" }}>Bleed</div>
 *   </Bleed>
 * </Box>
 */
declare class BleedComponent implements m.ClassComponent<BleedAttrs> {
    view(vnode: m.Vnode<BleedAttrs>): m.Vnode<any, any>;
}
export { BleedComponent as Bleed };
//# sourceMappingURL=Bleed.d.ts.map