/** @jsx m */
import m from "mithril";
import Overlay from "./Overlay";
import "animate.css";
import styles from "./ModalClassic.module.scss";
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
export class ModalClassic {
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
    static show(opts) {
        return new Promise((resolve) => {
            /**
             * ModalWrapper コンポーネント
             *
             * Bootstrap 5 の modal 構造を持つラッパーコンポーネント
             * - modal-dialog: モーダルの位置とサイズを制御
             * - modal-content: モーダルの実際のコンテンツ
             * - modal-header: タイトルと閉じるボタン
             * - modal-body: ユーザー指定のコンテンツ
             */
            class ModalWrapper {
                view(vnode) {
                    const Content = opts.content;
                    const attrs = opts.attrs ?? {};
                    return (m("div", { class: `${styles.modal} ${styles.modalShow}`, tabindex: "-1", style: "display: block; pointer-events: none;" },
                        m("div", { class: styles.modalDialog },
                            m("div", { class: styles.modalContent, "data-modal-content": "", style: "pointer-events: auto;" },
                                m("div", { class: styles.modalHeader },
                                    m("h5", { class: styles.modalTitle }, opts.title ?? ""),
                                    m("button", { type: "button", class: styles.btnClose, "aria-label": "Close", onclick: () => {
                                            resolve(false);
                                            vnode.attrs.hide();
                                        } })),
                                m("div", { class: styles.modalBody }, m(Content, {
                                    ...attrs,
                                    resolve: (v) => {
                                        resolve(v);
                                        vnode.attrs.hide();
                                    },
                                    hide: () => {
                                        resolve(false);
                                        vnode.attrs.hide();
                                    },
                                }))))));
                }
                oncreate(vnode) {
                    const dom = vnode.dom;
                    const content = dom.querySelector("[data-modal-content]");
                    if (content) {
                        content.classList.add("animate__animated", "animate__fadeIn");
                        content.addEventListener("animationend", () => {
                            content.classList.remove("animate__animated", "animate__fadeIn");
                        }, { once: true });
                    }
                }
                //	onupdate (){
                //		console.log("ModalWrapper onupdate");
                //	}
                onbeforeremove(vnode) {
                    const dom = vnode.dom;
                    return new Promise((done) => {
                        const content = dom.querySelector("[data-modal-content]");
                        if (content) {
                            content.classList.remove("animate__fadeIn");
                            content.classList.add("animate__animated", "animate__fadeOut");
                            content.addEventListener("animationend", () => {
                                done();
                            }, { once: true });
                        }
                        else {
                            done();
                        }
                    });
                }
            }
            // Overlay を使ってモーダルを表示
            const overlay = new Overlay(ModalWrapper, {
                closeOnEscapeKey: opts.closeOnEscapeKey ?? true,
                closeOnOutsideClick: opts.closeOnOutsideClick ?? false,
                hasBackdrop: opts.hasBackdrop ?? true,
                inline: opts.inline ?? false,
            });
            overlay.show();
        });
    }
}
