/** @jsx m */
import m from "mithril";
import type { ThemeColor } from "../types.js";
/**
 * Spinner サイズ
 */
export type SpinnerSize = "inherit" | "xs" | "sm" | "md" | "lg" | "xl";
/**
 * Spinner の属性
 */
export interface SpinnerAttrs {
    /** サイズ */
    size?: SpinnerSize;
    /** カラー（Bootstrap テーマカラー） */
    color?: ThemeColor;
    /** ラベル（アクセシビリティ用） */
    label?: string;
    /** 追加クラス */
    class?: string;
    [key: string]: any;
}
/**
 * Spinner コンポーネント — 処理中であることを示すビジュアルキュー
 *
 * @example
 * ```tsx
 * <Spinner size="md" />
 * <Spinner size="lg" color="primary" />
 * ```
 */
declare class SpinnerComponent implements m.ClassComponent<SpinnerAttrs> {
    view(vnode: m.Vnode<SpinnerAttrs>): JSX.Element;
}
export { SpinnerComponent as Spinner };
//# sourceMappingURL=Spinner.d.ts.map