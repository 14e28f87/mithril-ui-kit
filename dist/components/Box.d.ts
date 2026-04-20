/** @jsx m */
import m from "mithril";
/**
 * Box の属性
 */
export interface BoxAttrs {
    /** レンダリングする要素タグ */
    as?: string;
    /** 追加クラス */
    class?: string;
    /** インラインスタイル */
    style?: Record<string, string> | string;
    [key: string]: any;
}
/**
 * @class Box
 * @description
 * 最も基本的なレイアウトコンポーネント。Chakra UI の Box に相当する。
 * デフォルトは div をレンダリングし、`as` prop で要素を変更可能。
 *
 * @example
 * <Box style={{ padding: "16px", background: "#f0f0f0" }}>内容</Box>
 * <Box as="section" class="my-section">セクション</Box>
 */
declare class BoxComponent implements m.ClassComponent<BoxAttrs> {
    view(vnode: m.Vnode<BoxAttrs>): m.Vnode<any, any>;
}
export { BoxComponent as Box };
//# sourceMappingURL=Box.d.ts.map