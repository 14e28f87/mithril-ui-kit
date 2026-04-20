/** @jsx m */
import m from "mithril";
import "./ToastClassic.scss";
const TOAST_META = {
    info: { label: "INFO", icon: "i" },
    success: { label: "SUCCESS", icon: "ok" },
    warning: { label: "WARNING", icon: "!" },
    error: { label: "ERROR", icon: "x" },
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
export class ToastClassic {
    /**
     * 指定位置のコンテナ要素を取得または作成
     * @private
     */
    static getContainerForPosition(position) {
        const containerId = `toast-classic-container-${position}`;
        let container = document.getElementById(containerId);
        if (!container) {
            container = document.createElement("div");
            container.id = containerId;
            // 位置に応じた style を適用
            Object.assign(container.style, {
                position: "fixed",
                display: "flex",
                flexDirection: "column",
                gap: "0.9rem",
                width: "max-content",
                maxWidth: "calc(100vw - 1.5rem)",
                zIndex: "1060",
                pointerEvents: "none",
            });
            // 位置に応じた top/bottom/left/right を設定
            const spacing = "1rem";
            switch (position) {
                case "TopLeft":
                    Object.assign(container.style, { top: spacing, left: spacing, alignItems: "flex-start" });
                    break;
                case "TopRight":
                    Object.assign(container.style, { top: spacing, right: spacing, alignItems: "flex-end" });
                    break;
                case "TopCenter":
                    Object.assign(container.style, {
                        top: spacing,
                        left: "50%",
                        transform: "translateX(-50%)",
                        alignItems: "center",
                    });
                    break;
                case "BottomLeft":
                    Object.assign(container.style, {
                        bottom: spacing,
                        left: spacing,
                        alignItems: "flex-start",
                        flexDirection: "column-reverse",
                    });
                    break;
                case "BottomRight":
                    Object.assign(container.style, {
                        bottom: spacing,
                        right: spacing,
                        alignItems: "flex-end",
                        flexDirection: "column-reverse",
                    });
                    break;
                case "BottomCenter":
                    Object.assign(container.style, {
                        bottom: spacing,
                        left: "50%",
                        transform: "translateX(-50%)",
                        alignItems: "center",
                        flexDirection: "column-reverse",
                    });
                    break;
            }
            document.body.appendChild(container);
        }
        this.containers.set(position, container);
        return container;
    }
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
    static show(opts) {
        return new Promise((resolve) => {
            const position = opts.position ?? "TopRight";
            const duration = Math.max(0, opts.duration ?? 4500);
            const autoCloseOnOutsideClick = opts.closeOnOutsideClick ?? true;
            /**
             * ToastWrapper コンポーネント
             *
             * Bootstrap 5 の toast 構造を持つラッパーコンポーネント
             * - toast: トーストのコンテナ
             * - toast-header: タイトルと閉じるボタン
             * - toast-body: コンテンツ
             */
            class ToastWrapper {
                view(vnode) {
                    const { options, closing } = vnode.attrs;
                    const type = options.type ?? "info";
                    const appearance = options.appearance ?? "soft";
                    const meta = TOAST_META[type];
                    let contentNode;
                    if (typeof options.content === "string") {
                        contentNode = m("p", { class: "mui-toast__message" }, options.content);
                    }
                    else {
                        contentNode = m(options.content, {
                            hide: vnode.attrs.hide,
                        });
                    }
                    return (m("div", { class: [
                            "mui-toast",
                            `mui-toast--${type}`,
                            `mui-toast--${appearance}`,
                            closing ? "mui-toast--closing" : "",
                        ].join(" "), role: "alert", "aria-live": type === "error" || type === "warning" ? "assertive" : "polite", "aria-atomic": "true" },
                        m("div", { class: "mui-toast__accent" }),
                        m("div", { class: "mui-toast__icon", "aria-hidden": "true" }, meta.icon),
                        m("div", { class: "mui-toast__main" },
                            m("div", { class: "mui-toast__eyebrow" }, meta.label),
                            m("div", { class: "mui-toast__header" },
                                options.title ? m("strong", { class: "mui-toast__title" }, options.title) : m("span", { class: "mui-toast__title mui-toast__title--empty" }, "Notification"),
                                m("span", { class: "mui-toast__pill" }, appearance)),
                            m("div", { class: "mui-toast__body" }, contentNode),
                            vnode.attrs.duration > 0 ? (m("div", { class: "mui-toast__progress", "aria-hidden": "true" },
                                m("span", { class: "mui-toast__progress-bar", style: { animationDuration: `${vnode.attrs.duration}ms` } }))) : null),
                        m("button", { type: "button", class: "mui-toast__close", "aria-label": "Close", onclick: vnode.attrs.hide },
                            m("span", { "aria-hidden": "true" }, "x"))));
                }
            }
            // トースト用マウントコンテナを作成
            const toastRoot = document.createElement("div");
            const container = ToastClassic.getContainerForPosition(position);
            container.appendChild(toastRoot);
            // Mithril をマウント
            let isHidden = false;
            let isClosing = false;
            let closeTimer = null;
            let teardownTimer = null;
            let bindOutsideClickTimer = null;
            let documentPointerDownHandler = null;
            const clearCloseTimer = () => {
                if (closeTimer !== null) {
                    clearTimeout(closeTimer);
                    closeTimer = null;
                }
            };
            const clearTeardownTimer = () => {
                if (teardownTimer !== null) {
                    clearTimeout(teardownTimer);
                    teardownTimer = null;
                }
            };
            const clearBindOutsideClickTimer = () => {
                if (bindOutsideClickTimer !== null) {
                    clearTimeout(bindOutsideClickTimer);
                    bindOutsideClickTimer = null;
                }
            };
            const detachOutsideClickHandler = () => {
                if (documentPointerDownHandler !== null) {
                    document.removeEventListener("mousedown", documentPointerDownHandler, true);
                    documentPointerDownHandler = null;
                }
            };
            const finalizeHide = () => {
                if (isHidden) {
                    return;
                }
                isHidden = true;
                clearCloseTimer();
                clearTeardownTimer();
                clearBindOutsideClickTimer();
                detachOutsideClickHandler();
                m.mount(toastRoot, null);
                toastRoot.remove();
                resolve(undefined);
            };
            const hide = () => {
                if (isHidden || isClosing) {
                    return;
                }
                isClosing = true;
                clearCloseTimer();
                detachOutsideClickHandler();
                m.redraw();
                teardownTimer = window.setTimeout(finalizeHide, 220);
            };
            class ToastWrapperComponent {
                view() {
                    return m(ToastWrapper, {
                        hide,
                        options: opts,
                        closing: isClosing,
                        duration,
                    });
                }
                oncreate() {
                    if (duration > 0) {
                        closeTimer = window.setTimeout(() => {
                            hide();
                        }, duration);
                    }
                    if (autoCloseOnOutsideClick) {
                        documentPointerDownHandler = (event) => {
                            const target = event.target;
                            if (!(target instanceof Node)) {
                                return;
                            }
                            if (!toastRoot.contains(target)) {
                                hide();
                            }
                        };
                        bindOutsideClickTimer = window.setTimeout(() => {
                            if (documentPointerDownHandler !== null) {
                                document.addEventListener("mousedown", documentPointerDownHandler, true);
                            }
                        }, 0);
                    }
                }
                onremove() {
                    clearCloseTimer();
                    clearTeardownTimer();
                    clearBindOutsideClickTimer();
                    detachOutsideClickHandler();
                }
            }
            m.mount(toastRoot, ToastWrapperComponent);
        });
    }
}
/**
 * トースト用コンテナを管理するマップ（位置ごと）
 * @private
 */
ToastClassic.containers = new Map();
