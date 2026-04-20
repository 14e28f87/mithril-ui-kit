/** @jsx m */
import m from "mithril";
/**
 * Rating サイズ
 */
export type RatingSize = "xs" | "sm" | "md" | "lg";
export interface RatingRootAttrs {
    /** サイズ */
    size?: RatingSize;
    /** カラーパレット */
    colorPalette?: string;
    /** アイテム数 */
    count?: number;
    /** 現在値 */
    value?: number;
    /** デフォルト値 */
    defaultValue?: number;
    /** 値変更コールバック */
    onValueChange?: (value: number) => void;
    /** 半分刻み許可 */
    allowHalf?: boolean;
    /** 読み取り専用 */
    readOnly?: boolean;
    /** 無効 */
    disabled?: boolean;
    /** 追加クラス */
    class?: string;
    [key: string]: any;
}
/**
 * Rating Root コンポーネント — 星評価
 *
 * @example
 * ```tsx
 * <Rating.Root value={rating} onValueChange={v => rating = v} count={5} />
 * <Rating.Root value={3.5} readOnly allowHalf />
 * ```
 */
declare class RatingRoot implements m.ClassComponent<RatingRootAttrs> {
    private internalValue;
    private hoverValue;
    oninit(vnode: m.Vnode<RatingRootAttrs>): void;
    view(vnode: m.Vnode<RatingRootAttrs>): JSX.Element;
}
/**
 * Rating コンポーネント名前空間
 */
export declare const Rating: {
    readonly Root: typeof RatingRoot;
};
export { RatingRoot };
//# sourceMappingURL=Rating.d.ts.map