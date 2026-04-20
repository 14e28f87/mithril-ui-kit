/** @jsx m */
import m from "mithril";
import Overlay from "./Overlay";
import "animate.css";
import styles from "./ModalClassic.module.scss";

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

type ModalWrapperAttrs = {
	hide: () => void;
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
	static show<T = boolean>(opts: ModalClassicOptions<T>): Promise<T> {
		return new Promise<T>((resolve) => {
			/**
			 * ModalWrapper コンポーネント
			 *
			 * Bootstrap 5 の modal 構造を持つラッパーコンポーネント
			 * - modal-dialog: モーダルの位置とサイズを制御
			 * - modal-content: モーダルの実際のコンテンツ
			 * - modal-header: タイトルと閉じるボタン
			 * - modal-body: ユーザー指定のコンテンツ
			 */
			class ModalWrapper implements m.ClassComponent<ModalWrapperAttrs> {
				view(vnode: m.Vnode<ModalWrapperAttrs>) {
					const Content = opts.content;
					const attrs = opts.attrs ?? {};

					return (
						<div class={`${styles.modal} ${styles.modalShow}`} tabindex="-1" style="display: block; pointer-events: none;">
							<div class={styles.modalDialog}>
								<div class={styles.modalContent} data-modal-content="" style="pointer-events: auto;">
									{/* ヘッダー */}
									<div class={styles.modalHeader}>
										<h5 class={styles.modalTitle}>{opts.title ?? ""}</h5>
										<button
											type="button"
											class={styles.btnClose}
											aria-label="Close"
											onclick={() => {
												resolve(false as unknown as T);
												vnode.attrs.hide();
											}}
										></button>
									</div>

									{/* ボディ */}
									<div class={styles.modalBody}>
										{m(Content as m.Component<ModalClassicContentAttrs<T>>, {
											...attrs,
											resolve: (v: T) => {
												resolve(v);
												vnode.attrs.hide();
											},
											hide: () => {
												resolve(false as unknown as T);
												vnode.attrs.hide();
											},
										})}
									</div>
								</div>
							</div>
						</div>
					);
				}

				oncreate(vnode: m.VnodeDOM<ModalWrapperAttrs>) {
					const dom = vnode.dom as HTMLElement;
					const content = dom.querySelector("[data-modal-content]");
					if (content) {
						content.classList.add("animate__animated", "animate__fadeIn");
						content.addEventListener(
							"animationend",
							() => {
								content.classList.remove("animate__animated", "animate__fadeIn");
							},
							{ once: true }
						);
					}
				}
				
			//	onupdate (){
			//		console.log("ModalWrapper onupdate");
			//	}

				onbeforeremove(vnode: any) {
					const dom = vnode.dom as HTMLElement;
					return new Promise<void>((done) => {
						const content = dom.querySelector("[data-modal-content]");
						if (content) {
							content.classList.remove("animate__fadeIn");
							content.classList.add("animate__animated", "animate__fadeOut");
							content.addEventListener("animationend", () => {
								done();
							}, { once: true });
						} else {
							done();
						}
					});
				}

			//	onremove   (){
			//		console.log("ModalWrapper onremove  ");
			//	}


				
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
