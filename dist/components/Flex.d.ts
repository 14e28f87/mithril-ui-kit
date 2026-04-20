/** @jsx m */
import m from "mithril";
/**
 * Flex の属性
 */
export interface FlexAttrs {
    /** フレックス方向 */
    direction?: "row" | "row-reverse" | "column" | "column-reverse";
    /** align-items */
    align?: string;
    /** justify-content */
    justify?: string;
    /** flex-wrap */
    wrap?: "wrap" | "nowrap" | "wrap-reverse";
    /** flex-basis */
    basis?: string;
    /** flex-grow */
    grow?: number | string;
    /** flex-shrink */
    shrink?: number | string;
    /** gap */
    gap?: string | number;
    /** inline flex */
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
 * @class Flex
 * @description
 * Flexbox レイアウトコンポーネント。Chakra UI の Flex に相当する。
 *
 * @example
 * <Flex direction="row" gap="8px" align="center">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Flex>
 */
declare class FlexComponent implements m.ClassComponent<FlexAttrs> {
    view(vnode: m.Vnode<FlexAttrs>): m.Vnode<any, any>;
}
/**
 * Spacer コンポーネント — Flex 内の隙間を埋める
 */
declare class SpacerComponent implements m.ClassComponent {
    view(): JSX.Element;
}
export { FlexComponent as Flex, SpacerComponent as Spacer };
//# sourceMappingURL=Flex.d.ts.map