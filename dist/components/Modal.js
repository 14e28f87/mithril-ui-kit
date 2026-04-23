/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import Overlay from "./Overlay";
import styles from "./Modal.module.scss";
let _modalCtx = null;
// ===========================
// ユーティリティ
// ===========================
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
/**
 * asChild: 子要素の onclick をラップして追加のハンドラを呼ぶ
 */
function wrapChildOnclick(children, handler) {
    if (!children)
        return children;
    const arr = Array.isArray(children) ? children : [children];
    return arr.map((child) => {
        if (!child || typeof child !== "object" || !("tag" in child))
            return child;
        const origOnclick = child.attrs?.onclick;
        return {
            ...child,
            attrs: {
                ...child.attrs,
                onclick: (e) => {
                    if (typeof origOnclick === "function")
                        origOnclick(e);
                    handler();
                },
            },
        };
    });
}
// ===========================
// セルフスタイリング マーカーコンポーネント
// ===========================
/**
 * Modal.Trigger — モーダルを開くトリガー（Root 内で使用）
 */
export class ModalTriggerMarker {
    view(vnode) {
        return m("div", null, vnode.children);
    }
}
ModalTriggerMarker.__modalRole = "trigger";
/**
 * Modal.Backdrop — 半透明バックドロップ。コンテキストからアニメーション状態を取得。
 */
export class ModalBackdropMarker {
    view(vnode) {
        const ctx = _modalCtx;
        return (m("div", { class: classNames(styles.backdrop, {
                [styles.backdropEnter]: ctx?.entering && ctx?.motionPreset !== "none",
                [styles.backdropExit]: ctx?.exiting && ctx?.motionPreset !== "none",
            }, vnode.attrs.class), style: vnode.attrs.style, "data-modal-backdrop": "" }));
    }
}
ModalBackdropMarker.__modalRole = "backdrop";
/**
 * Modal.Positioner — ポジショニングコンテナ。
 * コンテキストからサイズ・配置・スクロール動作を読み取り、外側クリックで閉じる。
 */
export class ModalPositionerMarker {
    view(vnode) {
        const ctx = _modalCtx;
        const size = ctx?.size ?? "md";
        const placement = ctx?.placement ?? "top";
        const scrollBehavior = ctx?.scrollBehavior ?? "outside";
        const closeOnInteractOutside = ctx?.closeOnInteractOutside ?? true;
        return (m("div", { class: classNames(styles.positioner, styles[`size${capitalize(size)}`], {
                [styles.placementCenter]: placement === "center",
                [styles.placementBottom]: placement === "bottom",
                [styles.scrollInside]: scrollBehavior === "inside",
            }, vnode.attrs.class), style: vnode.attrs.style, "data-modal-positioner": "", onclick: () => {
                if (closeOnInteractOutside && ctx?.close)
                    ctx.close();
            } }, vnode.children));
    }
}
ModalPositionerMarker.__modalRole = "positioner";
/**
 * Modal.Content — モーダル本体のカード枠。コンテキストからアニメーション状態を取得。
 * onclick stopPropagation によりポジショナーの閉じる動作を阻止する。
 */
export class ModalContentMarker {
    view(vnode) {
        const ctx = _modalCtx;
        return (m("div", { class: classNames(styles.content, {
                [styles.contentEnter]: ctx?.entering && ctx?.motionPreset !== "none",
                [styles.contentExit]: ctx?.exiting && ctx?.motionPreset !== "none",
            }, vnode.attrs.class), style: vnode.attrs.style, role: "dialog", "aria-modal": "true", "data-modal-content": "", onclick: (e) => e.stopPropagation() }, vnode.children));
    }
}
ModalContentMarker.__modalRole = "content";
/**
 * Modal.Header — ヘッダー領域
 */
export class ModalHeaderMarker {
    view(vnode) {
        return (m("div", { class: classNames(styles.header, vnode.attrs.class), style: vnode.attrs.style }, vnode.children));
    }
}
ModalHeaderMarker.__modalRole = "header";
/**
 * Modal.Title — タイトル（h2）
 */
export class ModalTitleMarker {
    view(vnode) {
        return (m("h2", { class: classNames(styles.title, vnode.attrs.class), style: vnode.attrs.style }, vnode.children));
    }
}
ModalTitleMarker.__modalRole = "title";
/**
 * Modal.Description — 説明文（p）
 */
export class ModalDescriptionMarker {
    view(vnode) {
        return (m("p", { class: classNames(styles.description, vnode.attrs.class), style: vnode.attrs.style }, vnode.children));
    }
}
ModalDescriptionMarker.__modalRole = "description";
/**
 * Modal.Body — ボディ領域
 */
export class ModalBodyMarker {
    view(vnode) {
        return (m("div", { class: classNames(styles.body, vnode.attrs.class), style: vnode.attrs.style }, vnode.children));
    }
}
ModalBodyMarker.__modalRole = "body";
/**
 * Modal.Footer — フッター領域
 */
export class ModalFooterMarker {
    view(vnode) {
        return (m("div", { class: classNames(styles.footer, vnode.attrs.class), style: vnode.attrs.style }, vnode.children));
    }
}
ModalFooterMarker.__modalRole = "footer";
/**
 * Modal.CloseTrigger — 閉じる×ボタン。コンテキストから close ハンドラを自動取得。
 */
export class ModalCloseTriggerMarker {
    view(vnode) {
        const ctx = _modalCtx;
        const closeFn = ctx?.close ?? (() => { });
        if (vnode.attrs.asChild && vnode.children) {
            return wrapChildOnclick(vnode.children, closeFn);
        }
        return (m("button", { type: "button", class: classNames(styles.closeTrigger, vnode.attrs.class), style: vnode.attrs.style, "aria-label": "Close", onclick: () => closeFn() }));
    }
}
ModalCloseTriggerMarker.__modalRole = "closeTrigger";
/**
 * Modal.ActionTrigger — アクション実行＋閉じるトリガー
 */
export class ModalActionTriggerMarker {
    view(vnode) {
        const ctx = _modalCtx;
        const closeFn = ctx?.close ?? (() => { });
        if (vnode.attrs.asChild && vnode.children) {
            return wrapChildOnclick(vnode.children, closeFn);
        }
        return (m("button", { type: "button", class: vnode.attrs.class, style: vnode.attrs.style, onclick: () => closeFn() }, vnode.children));
    }
}
ModalActionTriggerMarker.__modalRole = "actionTrigger";
// ===========================
// Portal コンポーネント
// ===========================
/**
 * Portal — 子要素を document.body に転送するコンポーネント。
 */
export class Portal {
    constructor() {
        this.portalRoot = null;
    }
    oncreate(vnode) {
        this.portalRoot = document.createElement("div");
        this.portalRoot.setAttribute("data-modal-portal", "");
        document.body.appendChild(this.portalRoot);
        this.renderPortal(vnode);
    }
    onupdate(vnode) {
        this.renderPortal(vnode);
    }
    renderPortal(vnode) {
        if (!this.portalRoot)
            return;
        m.render(this.portalRoot, vnode.children);
    }
    onremove() {
        if (this.portalRoot) {
            m.render(this.portalRoot, null);
            this.portalRoot.remove();
            this.portalRoot = null;
        }
    }
    view() {
        return m("div", { style: "display:none" });
    }
}
// ===========================
// Root コンポーネント（宣言的 API）
// ===========================
/**
 * Modal.Root — モーダルのルートコンポーネント（宣言的 API）
 *
 * @description
 * Chakra UI Dialog 風の compound component。
 * 制御モード（open）と非制御モード（Trigger でトグル）の両方をサポート。
 *
 * Trigger 以外の子要素（Backdrop, Positioner, Content 等）は open 時のみ
 * document.body 直下の Portal にレンダリングされる。
 *
 * 使い方:
 * ```tsx
 * <Modal.Root open={open} onOpenChange={(d) => { open = d.open; }}>
 *   <Modal.Trigger asChild><button>開く</button></Modal.Trigger>
 *   <Modal.Backdrop />
 *   <Modal.Positioner>
 *     <Modal.Content>
 *       <Modal.Header>
 *         <Modal.Title>タイトル</Modal.Title>
 *         <Modal.CloseTrigger />
 *       </Modal.Header>
 *       <Modal.Body>コンテンツ</Modal.Body>
 *     </Modal.Content>
 *   </Modal.Positioner>
 * </Modal.Root>
 * ```
 */
export class ModalRoot {
    constructor() {
        this.internalOpen = false;
        this.entering = false;
        this.exiting = false;
        this.escHandler = null;
        this.scrollLocked = false;
        this.prevOverflow = "";
        this.portalEl = null;
        this.portalContent = null;
        this.portalOpen = false;
    }
    oninit(vnode) {
        this.internalOpen = vnode.attrs.defaultOpen ?? false;
    }
    oncreate() {
        this.portalEl = document.createElement("div");
        this.portalEl.setAttribute("data-modal-portal", "");
        document.body.appendChild(this.portalEl);
        // m.mount でポータルを登録 → auto-redraw に参加し、ポータル内のイベントでメインツリーも再描画される
        const self = this;
        m.mount(this.portalEl, {
            view() {
                return self.portalOpen ? self.portalContent : null;
            },
        });
    }
    isControlled(attrs) {
        return attrs.open !== undefined;
    }
    getOpen(attrs) {
        return this.isControlled(attrs) ? attrs.open : this.internalOpen;
    }
    setOpen(attrs, value) {
        if (!this.isControlled(attrs)) {
            this.internalOpen = value;
        }
        attrs.onOpenChange?.({ open: value });
    }
    doOpen(attrs) {
        if (this.getOpen(attrs))
            return;
        this.setOpen(attrs, true);
        this.entering = true;
        this.exiting = false;
        requestAnimationFrame(() => {
            setTimeout(() => {
                this.entering = false;
                m.redraw();
            }, 220);
        });
    }
    doClose(attrs) {
        if (!this.getOpen(attrs) && !this.exiting)
            return;
        this.exiting = true;
        m.redraw();
        setTimeout(() => {
            this.exiting = false;
            this.setOpen(attrs, false);
            m.redraw();
        }, 170);
    }
    lockScroll(attrs) {
        if (attrs.preventScroll !== false && !this.scrollLocked) {
            this.prevOverflow = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            this.scrollLocked = true;
        }
    }
    unlockScroll() {
        if (this.scrollLocked) {
            document.body.style.overflow = this.prevOverflow;
            this.scrollLocked = false;
        }
    }
    bindEscape(attrs) {
        if (attrs.closeOnEscape === false)
            return;
        if (this.escHandler)
            return;
        this.escHandler = (e) => {
            if (e.key === "Escape") {
                this.doClose(attrs);
            }
        };
        document.addEventListener("keydown", this.escHandler);
    }
    unbindEscape() {
        if (this.escHandler) {
            document.removeEventListener("keydown", this.escHandler);
            this.escHandler = null;
        }
    }
    onremove() {
        this.unlockScroll();
        this.unbindEscape();
        if (this.portalEl) {
            m.mount(this.portalEl, null);
            this.portalEl.remove();
            this.portalEl = null;
        }
    }
    view(vnode) {
        const attrs = vnode.attrs;
        const isOpen = this.getOpen(attrs) || this.exiting;
        // スクロールロック・Escape バインドは view で同期的に管理
        if (isOpen) {
            this.lockScroll(attrs);
            this.bindEscape(attrs);
        }
        else {
            this.unlockScroll();
            this.unbindEscape();
        }
        // コンテキストを設定（メインツリー→ポータルの描画順で子マーカーが読み取れる）
        if (isOpen) {
            _modalCtx = {
                close: () => this.doClose(attrs),
                closeOnInteractOutside: attrs.closeOnInteractOutside !== false,
                entering: this.entering,
                exiting: this.exiting,
                motionPreset: attrs.motionPreset ?? "scale",
                size: attrs.size ?? "md",
                placement: attrs.placement ?? "top",
                scrollBehavior: attrs.scrollBehavior ?? "outside",
            };
        }
        // 子要素を Trigger（インプレース）と Portal コンテンツに分離
        const allChildren = Array.isArray(vnode.children) ? vnode.children : [vnode.children];
        const triggerChildren = [];
        const portalParts = [];
        for (const child of allChildren) {
            if (child && typeof child === "object" && "tag" in child) {
                const tag = child.tag;
                if (tag && tag.__modalRole === "trigger") {
                    const tAttrs = child.attrs ?? {};
                    if (tAttrs.asChild && child.children) {
                        triggerChildren.push(wrapChildOnclick(child.children, () => this.doOpen(attrs)));
                    }
                    else {
                        triggerChildren.push(m("button", { type: "button", class: tAttrs.class, style: tAttrs.style, onclick: () => this.doOpen(attrs) }, child.children));
                    }
                }
                else {
                    // Trigger 以外はすべてポータルコンテンツ
                    portalParts.push(child);
                }
            }
            else {
                triggerChildren.push(child);
            }
        }
        // ポータル状態を保存（m.mount で登録済みのポータルが auto-redraw 時に読み取る）
        this.portalContent = portalParts;
        this.portalOpen = isOpen;
        return (m("div", { class: attrs.class, style: attrs.style, "data-modal-root": "" }, triggerChildren));
    }
}
// ===========================
// 命令的 API（Modal.show）用の内部ラッパー
// ===========================
/**
 * show() で使われる内部ラッパーコンポーネント。
 * Overlay 経由で body にマウントされる。
 * バックドロップとポジショナーを自動生成し、ユーザーの content コンポーネントを
 * ポジショナー内にマウントする。content 側は <Modal.Content> で囲んで使う。
 */
class ModalImperativeWrapper {
    constructor(opts, resolvePromise) {
        this.entering = true;
        this.exiting = false;
        this.escHandler = null;
        this.opts = opts;
        this.resolvePromise = resolvePromise;
    }
    doClose(value, hideFn) {
        if (!this.resolvePromise)
            return;
        const resolve = this.resolvePromise;
        this.resolvePromise = null;
        this.exiting = true;
        m.redraw();
        setTimeout(() => {
            this.removeEscHandler();
            resolve(value);
            hideFn();
        }, 170);
    }
    removeEscHandler() {
        if (this.escHandler) {
            document.removeEventListener("keydown", this.escHandler);
            this.escHandler = null;
        }
    }
    oncreate(vnode) {
        // Escape キーハンドラ登録
        if (this.opts.closeOnEscape !== false) {
            const hideFn = vnode.attrs.hide;
            this.escHandler = (e) => {
                if (e.key === "Escape") {
                    this.doClose(false, hideFn);
                }
            };
            document.addEventListener("keydown", this.escHandler);
        }
        // スクロールロック
        document.body.style.overflow = "hidden";
        // エンターアニメーション終了
        requestAnimationFrame(() => {
            setTimeout(() => {
                this.entering = false;
                m.redraw();
            }, 220);
        });
    }
    onremove() {
        this.removeEscHandler();
        document.body.style.overflow = "";
    }
    view(vnode) {
        const opts = this.opts;
        const size = opts.size ?? "md";
        const placement = opts.placement ?? "top";
        const scrollBehavior = opts.scrollBehavior ?? "outside";
        const motionPreset = opts.motionPreset ?? "scale";
        const hideFn = vnode.attrs.hide;
        const closeFn = () => this.doClose(false, hideFn);
        const resolveFn = (value) => this.doClose(value, hideFn);
        const Content = opts.content;
        const contentAttrs = opts.attrs ?? {};
        // モジュールレベルコンテキストを設定（子マーカーが同じ描画サイクル内で参照）
        _modalCtx = {
            close: closeFn,
            closeOnInteractOutside: opts.closeOnInteractOutside !== false,
            entering: this.entering,
            exiting: this.exiting,
            motionPreset,
            size,
            placement,
            scrollBehavior,
        };
        return (m("div", { style: "display: contents;" },
            m(ModalBackdropMarker),
            m(ModalPositionerMarker, {}, m(Content, {
                ...contentAttrs,
                resolve: resolveFn,
                hide: closeFn,
            }))));
    }
    onbeforeremove() {
        if (this.exiting) {
            return new Promise((done) => {
                setTimeout(done, 200);
            });
        }
    }
}
// ===========================
// バンドルエクスポート
// ===========================
/**
 * Modal — Chakra UI Dialog 風のモーダルコンポーネント
 *
 * @description
 * 2つの使い方をサポート:
 *
 * **方式1: 命令的 API（Modal.show）**
 * ```tsx
 * const result = await Modal.show({
 *   content: {
 *     view(vnode) {
 *       return (
 *         <Modal.Content>
 *           <Modal.Header><Modal.Title>タイトル</Modal.Title></Modal.Header>
 *           <Modal.Body>本文</Modal.Body>
 *           <Modal.Footer>
 *             <button onclick={() => vnode.attrs.resolve(true)}>OK</button>
 *           </Modal.Footer>
 *         </Modal.Content>
 *       );
 *     }
 *   }
 * });
 * ```
 *
 * **方式2: 宣言的 API（JSX component）**
 * ```tsx
 * <Modal.Root open={open} onOpenChange={(d) => { open = d.open; }}>
 *   <Modal.Trigger asChild><button>開く</button></Modal.Trigger>
 *   <Modal.Backdrop />
 *   <Modal.Positioner>
 *     <Modal.Content>
 *       <Modal.Header>
 *         <Modal.Title>タイトル</Modal.Title>
 *         <Modal.CloseTrigger />
 *       </Modal.Header>
 *       <Modal.Body>コンテンツ</Modal.Body>
 *     </Modal.Content>
 *   </Modal.Positioner>
 * </Modal.Root>
 * ```
 */
export const Modal = {
    Root: ModalRoot,
    Trigger: ModalTriggerMarker,
    Backdrop: ModalBackdropMarker,
    Positioner: ModalPositionerMarker,
    Content: ModalContentMarker,
    Header: ModalHeaderMarker,
    Title: ModalTitleMarker,
    Description: ModalDescriptionMarker,
    Body: ModalBodyMarker,
    Footer: ModalFooterMarker,
    CloseTrigger: ModalCloseTriggerMarker,
    ActionTrigger: ModalActionTriggerMarker,
    /**
     * 命令的にモーダルを表示し、結果を Promise で返す
     *
     * @description
     * content コンポーネントには以下の attrs が自動注入される:
     * - resolve(value) — 値を返してモーダルを閉じる
     * - hide() — モーダルを閉じる（false を返す）
     *
     * content 内では `<Modal.Content>` で囲み、その中に Header, Body, Footer 等を配置する。
     * バックドロップとポジショナーは show() が自動生成する。
     */
    show(opts) {
        return new Promise((resolve) => {
            const wrapper = new ModalImperativeWrapper(opts, (value) => {
                resolve(value);
            });
            const overlay = new Overlay({
                view(vnode) {
                    return wrapper.view(vnode);
                },
                oncreate(vnode) {
                    wrapper.oncreate(vnode);
                },
                onremove() {
                    wrapper.onremove();
                },
                onbeforeremove() {
                    return wrapper.onbeforeremove();
                },
            }, {
                closeOnEscapeKey: false, // Modal が自前で管理
                closeOnOutsideClick: false,
                hasBackdrop: false, // Modal が自前でバックドロップを描画
                inline: false,
            });
            overlay.show();
        });
    },
};
