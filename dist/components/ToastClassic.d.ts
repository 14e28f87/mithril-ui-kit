/** @jsx m */
import m from "mithril";
import "./ToastClassic.scss";
/**
 * Toast 表示位置タイプ
 */
export type ToastClassicPosition = "TopLeft" | "TopRight" | "BottomLeft" | "BottomRight" | "TopCenter" | "BottomCenter";
export type ToastClassicAppearance = "soft" | "solid" | "glass";
type ToastType = "success" | "error" | "warning" | "info";
/**
 * @typedef {Object} ToastOptions
 * @property {string} [title] - トーストのタイトル
 * @property {m.ComponentTypes<any> | string} content - トーストに表示するコンテンツ
 * @property {number} [duration=4500] - トーストを自動で閉じるまでの時間（ミリ秒）。0 で自動閉じなし
 * @property {ToastClassicPosition} [position="TopRight"] - トーストの表示位置
 * @property {boolean} [closeOnOutsideClick=true] - トースト外クリックで閉じるかどうか
 * @property {"success" | "error" | "warning" | "info"} [type="info"] - トーストのタイプ
 * @property {ToastClassicAppearance} [appearance="soft"] - トーストの見た目バリエーション
 */
export type ToastClassicOptions<T = any> = {
    title?: string;
    content: m.ComponentTypes<any> | string;
    duration?: number;
    position?: ToastClassicPosition;
    closeOnOutsideClick?: boolean;
    type?: ToastType;
    appearance?: ToastClassicAppearance;
};
/**
 * @class Toast
 * @description
 * トースト通知コンポーネント
 *
 * このクラスは Bootstrap 5 スタイルのトースト通知を表示します。
 * Overlay クラスを基盤として使用し、Promise ベースの API を提供します。
 *
 * 主な機能:
 * - タイトルとコンテンツを指定してトーストを表示
 * - 画面のどこに表示するか位置を指定可能（TopLeft, TopRight, BottomLeft, BottomRight など）
 * - 一定時間後に自動的に消える（duration オプション）
 * - Promise を返すため、async/await で表示終了を待機できる
 * - フェードイン/フェードアウトアニメーション対応
 *
 * 使い方の流れ:
 * 1. Toast.show() を呼ぶ
 * 2. トーストが画面に表示される
 * 3. duration 秒後に自動で閉じる
 * 4. Promise が解決される
 *
 * @example
 * await Toast.show({
 *   title: "成功",
 *   content: "保存されました",
 *   position: "TopRight",
 *   type: "success"
 * });
 *
 * @example
 * // カスタムコンテンツの場合
 * await Toast.show({
 *   title: "確認",
 *   content: {
 *     view(vnode) {
 *       return (
 *         <div>
 *           <p>カスタムメッセージ</p>
 *           <button onclick={() => vnode.attrs.hide()}>閉じる</button>
 *         </div>
 *       );
 *     }
 *   },
 *   position: "BottomCenter"
 * });
 */
export declare class ToastClassic {
    /**
     * トースト用コンテナを管理するマップ（位置ごと）
     * @private
     */
    private static containers;
    /**
     * 指定位置のコンテナ要素を取得または作成
     * @private
     */
    private static getContainerForPosition;
    /**
     * @function show
     * @static
     * @description
     * トーストを表示し、Promise で結果を返します
     *
     * @param {ToastOptions} opts - トーストのオプション
     * @returns {Promise<void>} - トーストが閉じられた時点で解決される
     *
     * 実装の詳細:
     * 1. Promise を作成し、resolve を保持
     * 2. ToastWrapper コンポーネントを作成
     *    - Bootstrap の toast クラスを使用
     *    - ヘッダー（タイトル + 閉じるボタン）
     *    - ボディ（コンテンツ）
     * 3. 指定位置のコンテナに Mithril をマウント
     * 4. duration が 0 以外の場合、自動的に close する
     * 5. resolve が呼ばれると Promise が解決される
     */
    static show<T = void>(opts: ToastClassicOptions<T>): Promise<T>;
}
export {};
//# sourceMappingURL=ToastClassic.d.ts.map