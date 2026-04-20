/** @jsx m */
import m from "mithril";
/** Float の配置タイプ */
export type FloatPlacement = "top-start" | "top-center" | "top-end" | "middle-start" | "middle-center" | "middle-end" | "bottom-start" | "bottom-center" | "bottom-end";
/**
 * Float の属性
 */
export interface FloatAttrs {
    /** 配置 */
    placement?: FloatPlacement;
    /** X オフセット */
    offsetX?: string | number;
    /** Y オフセット */
    offsetY?: string | number;
    /** X・Y 両方のオフセット */
    offset?: string | number;
    /** レンダリングする要素タグ */
    as?: string;
    /** 追加クラス */
    class?: string;
    /** インラインスタイル */
    style?: Record<string, string> | string;
    [key: string]: any;
}
/**
 * @class Float
 * @description
 * 親要素のエッジにアンカーする位置決めコンポーネント。
 * Chakra UI の Float に相当する。親要素に position: relative が必要。
 *
 * @example
 * <Box style={{ position: "relative" }}>
 *   <Float placement="top-end">
 *     <Badge>3</Badge>
 *   </Float>
 * </Box>
 */
declare class FloatComponent implements m.ClassComponent<FloatAttrs> {
    view(vnode: m.Vnode<FloatAttrs>): m.Vnode<any, any>;
}
export { FloatComponent as Float };
//# sourceMappingURL=Float.d.ts.map