/** @jsx m */
import m from "mithril";
/**
 * ColorSwatch サイズ
 */
export type ColorSwatchSize = "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
/**
 * ColorSwatch の属性
 */
export interface ColorSwatchAttrs {
    /** 表示する色（CSS色値） */
    value: string;
    /** サイズ */
    size?: ColorSwatchSize;
    /** 角丸 */
    rounded?: boolean;
    /** 追加クラス */
    class?: string;
    [key: string]: any;
}
/**
 * ColorSwatch コンポーネント — 色の見本表示
 *
 * @example
 * ```tsx
 * <ColorSwatch value="#ff0000" size="md" />
 * <ColorSwatch value="rgba(0,0,255,0.5)" rounded />
 * ```
 */
declare class ColorSwatchComponent implements m.ClassComponent<ColorSwatchAttrs> {
    view(vnode: m.Vnode<ColorSwatchAttrs>): JSX.Element;
}
/**
 * ColorSwatchMix — 複数の色を混ぜて表示
 */
export interface ColorSwatchMixAttrs {
    /** 色の配列 */
    colors: string[];
    /** サイズ */
    size?: ColorSwatchSize;
    /** 追加クラス */
    class?: string;
    [key: string]: any;
}
declare class ColorSwatchMixComponent implements m.ClassComponent<ColorSwatchMixAttrs> {
    view(vnode: m.Vnode<ColorSwatchMixAttrs>): JSX.Element;
}
export { ColorSwatchComponent as ColorSwatch, ColorSwatchMixComponent as ColorSwatchMix };
//# sourceMappingURL=ColorSwatch.d.ts.map