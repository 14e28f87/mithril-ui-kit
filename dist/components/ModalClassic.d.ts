/** @jsx m */
import m from "mithril";
import "animate.css";
/**
 * @typedef {Object} ModalOptions
 * @property {string} [title] - モーダルのタイトル
 * @property {m.ComponentTypes<any>} content - モーダル内に表示するコンポーネント
 * @property {boolean} [closeOnEscapeKey=true] - Escape キーで閉じるかどうか
 * @property {boolean} [closeOnOutsideClick=false] - モーダル外クリックで閉じるかどうか
 * @property {boolean} [hasBackdrop=true] - バックドロップを表示するかどうか
 * @property {boolean} [inline=false] - インライン表示するかどうか
 */
export type ModalClassicOptions<T = any> = {
    title?: string;
    content: m.ComponentTypes<any>;
    attrs?: Record<string, any>;
    closeOnEscapeKey?: boolean;
    closeOnOutsideClick?: boolean;
    hasBackdrop?: boolean;
    inline?: boolean;
};
export type ModalClassicContentAttrs<T = any> = {
    resolve: (v: T) => void;
    hide: () => void;
    [key: string]: any;
};
/**
 * @class Modal
 * @description
 * モーダルダイアログコンポーネント
 *
 * このクラスは Bootstrap 5 スタイルのモーダルを表示します。
 * Overlay クラスを基盤として使用し、Promise ベースの API を提供します。
 *
 * 主な機能:
 * - タイトルとコンテンツを指定してモーダルを表示
 * - Promise を返すため、async/await で結果を待機できる
 * - コンテンツコンポーネントから resolve(value) を呼んで結果を返せる
 * - フェードイン/フェードアウトアニメーション対応
 *
 * 使い方の流れ:
 * 1. Modal.show() を呼ぶ
 * 2. モーダルが表示される
 * 3. コンテンツコンポーネント内で resolve(true/false) を呼ぶ
 * 4. モーダルが閉じ、Promise が解決される
 * 5. 呼び出し側で結果を受け取れる
 *
 * @example
 * const result = await Modal.show({
 *   title: "確認",
 *   content: {
 *     view(vnode) {
 *       return (
 *         <div>
 *           <p>削除しますか？</p>
 *           <button onclick={() => vnode.attrs.resolve(true)}>OK</button>
 *           <button onclick={() => vnode.attrs.resolve(false)}>Cancel</button>
 *         </div>
 *       );
 *     }
 *   }
 * });
 * console.log(result); // true or false
 */
export declare class ModalClassic {
    /**
     * @function show
     * @static
     * @description
     * モーダルを表示し、結果を Promise で返します
     *
     * @param {ModalOptions} opts - モーダルのオプション
     * @returns {Promise<boolean>} - モーダルの結果（resolve で渡された値）
     *
     * 実装の詳細:
     * 1. Promise を作成し、resolve を保持
     * 2. ModalWrapper コンポーネントを作成
     *    - Bootstrap の modal クラスを使用
     *    - ヘッダー（タイトル + 閉じるボタン）
     *    - ボディ（コンテンツコンポーネント）
     * 3. コンテンツコンポーネントに resolve と hide を attrs として渡す
     * 4. Overlay を使ってモーダルを表示
     * 5. resolve が呼ばれると Promise が解決され、モーダルが閉じる
     *
     * 注意:
     * - コンテンツコンポーネントは vnode.attrs.resolve(value) を呼ぶ必要がある
     * - resolve を呼ぶとモーダルが自動的に閉じる
     * - 閉じるボタンや Escape キーで閉じた場合は false を返す
     */
    static show<T = boolean>(opts: ModalClassicOptions<T>): Promise<T>;
}
//# sourceMappingURL=ModalClassic.d.ts.map