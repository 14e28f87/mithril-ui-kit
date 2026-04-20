/** @jsx m */
import m from "mithril";
/**
 * Center の属性
 */
export interface CenterAttrs {
    /** inline-flex で表示 */
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
 * Square の属性
 */
export interface SquareAttrs {
    /** 正方形のサイズ */
    size?: string | number;
    /** レンダリングする要素タグ */
    as?: string;
    /** 追加クラス */
    class?: string;
    /** インラインスタイル */
    style?: Record<string, string> | string;
    [key: string]: any;
}
/**
 * @class Center
 * @description
 * 子要素を水平・垂直にセンタリングするコンポーネント。
 * Chakra UI の Center に相当する。
 *
 * @example
 * <Center style={{ height: "100px", background: "tomato", color: "white" }}>
 *   中央に配置されます
 * </Center>
 */
declare class CenterComponent implements m.ClassComponent<CenterAttrs> {
    view(vnode: m.Vnode<CenterAttrs>): m.Vnode<any, any>;
}
/**
 * @class Square
 * @description
 * 固定サイズの正方形コンテナ内に子要素をセンタリングする。
 */
declare class SquareComponent implements m.ClassComponent<SquareAttrs> {
    view(vnode: m.Vnode<SquareAttrs>): m.Vnode<any, any>;
}
/**
 * @class Circle
 * @description
 * Square に borderRadius: 9999px を追加し、完全な円を作る。
 */
declare class CircleComponent implements m.ClassComponent<SquareAttrs> {
    view(vnode: m.Vnode<SquareAttrs>): m.Vnode<SquareAttrs, unknown>;
}
export { CenterComponent as Center, SquareComponent as Square, CircleComponent as Circle };
//# sourceMappingURL=Center.d.ts.map