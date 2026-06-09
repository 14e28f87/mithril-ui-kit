/**
 * @fileoverview
 * floating.ts — @floating-ui/dom を利用した浮動要素の位置計算ユーティリティ。
 *
 * viewport 端での flip() と shift() により画面外へのはみ出しを防ぐ。
 * position: fixed 戦略を使用するため、transform を持つ祖先の影響を受けない。
 *
 * @module utils/floating
 */
import { computePosition, flip, offset, shift, size, autoUpdate } from "@floating-ui/dom";
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
export function startFloating(reference, floating, options = {}) {
    const { placement = "bottom-start", offsetValue = 8, matchWidth = false } = options;
    // 初期位置を画面外に設定してフラッシュを防ぐ。visibility:hidden で oncreate 前の一瞬も隠す
    Object.assign(floating.style, {
        position: "fixed",
        margin: "0",
        top: "-9999px",
        left: "-9999px",
        visibility: "hidden",
    });
    let firstUpdate = true;
    const update = () => {
        computePosition(reference, floating, {
            placement,
            strategy: "fixed",
            middleware: [
                offset(offsetValue),
                flip(),
                shift({ padding: 8 }),
                ...(matchWidth
                    ? [
                        size({
                            apply({ rects, elements }) {
                                elements.floating.style.minWidth = `${rects.reference.width}px`;
                            },
                        }),
                    ]
                    : []),
            ],
        }).then(({ x, y }) => {
            const update = { left: `${x}px`, top: `${y}px` };
            if (firstUpdate) {
                update.visibility = "";
                firstUpdate = false;
            }
            Object.assign(floating.style, update);
        });
    };
    return autoUpdate(reference, floating, update);
}
