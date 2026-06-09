import type { Placement } from "@floating-ui/dom";
export type { Placement as FloatingPlacement };
/** startFloating のオプション */
export interface FloatingOptions {
    /** 配置方向（デフォルト: "bottom-start"） */
    placement?: Placement;
    /** トリガーからのオフセット距離（デフォルト: 8px） */
    offsetValue?: number;
    /**
     * 浮動要素の最小幅をトリガーの幅に合わせるか（デフォルト: false）
     * Select / Combobox など幅を揃えたい場合に true を渡す。
     */
    matchWidth?: boolean;
}
/**
 * @floating-ui/dom を使用して浮動要素の位置計算・自動更新を開始する。
 *
 * - position: fixed 戦略を使用（transform を持つ祖先による制約を回避）
 * - flip() により反対方向に反転してビューポート内に収める
 * - shift({ padding: 8 }) によりビューポート端からのはみ出しを防ぐ
 * - autoUpdate により scroll / resize 時に再計算
 *
 * @param reference 基準となる要素（トリガー）
 * @param floating 位置を調整する浮動要素
 * @param options オプション
 * @returns cleanup 関数（コンポーネントの onremove 時に呼ぶこと）
 */
export declare function startFloating(reference: Element, floating: HTMLElement, options?: FloatingOptions): () => void;
//# sourceMappingURL=floating.d.ts.map