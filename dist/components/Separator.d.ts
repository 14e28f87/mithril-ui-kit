/** @jsx m */
import m from "mithril";
/** Separator のバリアント */
export type SeparatorVariant = "solid" | "dashed" | "dotted";
/** Separator のサイズ */
export type SeparatorSize = "xs" | "sm" | "md" | "lg";
/**
 * Separator の属性
 */
export interface SeparatorAttrs {
    /** バリアント */
    variant?: SeparatorVariant;
    /** サイズ (太さ) */
    size?: SeparatorSize;
    /** 方向 */
    orientation?: "horizontal" | "vertical";
    /** ラベル */
    label?: string;
    /** ラベル位置 */
    labelPlacement?: "start" | "center" | "end";
    /** カラーパレット */
    colorPalette?: string;
    /** 追加クラス */
    class?: string;
    [key: string]: any;
}
/**
 * @class Separator
 * @description
 * コンテンツを視覚的に分離するセパレーターコンポーネント。
 * Chakra UI の Separator に相当する。
 *
 * @example
 * <Separator />
 * <Separator orientation="vertical" variant="dashed" />
 * <Separator label="セクション" />
 */
declare class SeparatorComponent implements m.ClassComponent<SeparatorAttrs> {
    view(vnode: m.Vnode<SeparatorAttrs>): JSX.Element;
}
export { SeparatorComponent as Separator };
//# sourceMappingURL=Separator.d.ts.map