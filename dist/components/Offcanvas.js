/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import Overlay from "./Overlay";
import styles from "./Offcanvas.module.scss";
let _offcanvasCtx = null;
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
 * Offcanvas.Trigger — Offcanvas を開くトリガー（Root 内で使用）
 */
export class OffcanvasTriggerMarker {
    view(vnode) {
        return m("div", null, vnode.children);
    }
}
OffcanvasTriggerMarker.__offcanvasRole = "trigger";
/**
 * Offcanvas.Backdrop — 半透明バックドロップ。コンテキストからアニメーション状態を取得。
 */
export class OffcanvasBackdropMarker {
    view(vnode) {
        const ctx = _offcanvasCtx;
        return (m("div", { class: classNames(styles.backdrop, {
                [styles.backdropEnter]: ctx?.entering,
                [styles.backdropExit]: ctx?.exiting,
            }, vnode.attrs.class), style: vnode.attrs.style, "data-offcanvas-backdrop": "" }));
    }
}
OffcanvasBackdropMarker.__offcanvasRole = "backdrop";
/**
 * Offcanvas.Positioner — ポジショニングコンテナ。
 * コンテキストからサイズ・配置を読み取り、外側クリックで閉じる。
 */
export class OffcanvasPositionerMarker {
    view(vnode) {
        const ctx = _offcanvasCtx;
        const placement = ctx?.placement ?? "end";
        const closeOnInteractOutside = ctx?.closeOnInteractOutside ?? true;
        return (m("div", { class: classNames(styles.positioner, styles[`placement${capitalize(placement)}`], vnode.attrs.class), style: vnode.attrs.style, "data-offcanvas-positioner": "", onclick: () => {
                if (closeOnInteractOutside && ctx?.close)
                    ctx.close();
            } }, vnode.children));
    }
}
OffcanvasPositionerMarker.__offcanvasRole = "positioner";
/**
 * Offcanvas.Content — Offcanvas 本体のカード枠。
 * コンテキストからアニメーション状態と配置を取得。
 */
export class OffcanvasContentMarker {
    view(vnode) {
        const ctx = _offcanvasCtx;
        const placement = ctx?.placement ?? "end";
        return (m("div", { class: classNames(styles.content, {
                [styles.contentEnterStart]: ctx?.entering && placement === "start",
                [styles.contentExitStart]: ctx?.exiting && placement === "start",
                [styles.contentEnterEnd]: ctx?.entering && placement === "end",
                [styles.contentExitEnd]: ctx?.exiting && placement === "end",
                [styles.contentEnterTop]: ctx?.entering && placement === "top",
                [styles.contentExitTop]: ctx?.exiting && placement === "top",
                [styles.contentEnterBottom]: ctx?.entering && placement === "bottom",
                [styles.contentExitBottom]: ctx?.exiting && placement === "bottom",
            }, vnode.attrs.class), style: vnode.attrs.style, role: "dialog", "aria-modal": "true", "data-offcanvas-content": "", onclick: (e) => e.stopPropagation() }, vnode.children));
    }
}
OffcanvasContentMarker.__offcanvasRole = "content";
/**
 * Offcanvas.Header — ヘッダー領域
 */
export class OffcanvasHeaderMarker {
    view(vnode) {
        return (m("div", { class: classNames(styles.header, vnode.attrs.class), style: vnode.attrs.style }, vnode.children));
    }
}
OffcanvasHeaderMarker.__offcanvasRole = "header";
/**
 * Offcanvas.Title — タイトル（h5）
 */
export class OffcanvasTitleMarker {
    view(vnode) {
        return (m("h5", { class: classNames(styles.title, vnode.attrs.class), style: vnode.attrs.style }, vnode.children));
    }
}
OffcanvasTitleMarker.__offcanvasRole = "title";
/**
 * Offcanvas.Body — ボディ領域
 */
export class OffcanvasBodyMarker {
    view(vnode) {
        return (m("div", { class: classNames(styles.body, vnode.attrs.class), style: vnode.attrs.style }, vnode.children));
    }
}
OffcanvasBodyMarker.__offcanvasRole = "body";
/**
 * Offcanvas.Footer — フッター領域
 */
export class OffcanvasFooterMarker {
    view(vnode) {
        return (m("div", { class: classNames(styles.footer, vnode.attrs.class), style: vnode.attrs.style }, vnode.children));
    }
}
OffcanvasFooterMarker.__offcanvasRole = "footer";
/**
 * Offcanvas.CloseTrigger — 閉じる×ボタン。コンテキストから close ハンドラを自動取得。
 */
export class OffcanvasCloseTriggerMarker {
    view(vnode) {
        const ctx = _offcanvasCtx;
        const closeFn = ctx?.close ?? (() => { });
        if (vnode.attrs.asChild && vnode.children) {
            return wrapChildOnclick(vnode.children, closeFn);
        }
        return (m("button", { type: "button", class: classNames(styles.closeTrigger, vnode.attrs.class), style: vnode.attrs.style, "aria-label": "Close", onclick: () => closeFn() }));
    }
}
OffcanvasCloseTriggerMarker.__offcanvasRole = "closeTrigger";
// ===========================
// Root コンポーネント（宣言的 API）
// ===========================
/**
 * Offcanvas.Root — Offcanvas のルートコンポーネント（宣言的 API）
 *
 * @description
 * Chakra UI Drawer 風の compound component。
 * 制御モード（open）と非制御モード（Trigger でトグル）の両方をサポート。
 *
 * Trigger 以外の子要素（Backdrop, Positioner, Content 等）は open 時のみ
 * document.body 直下のポータルにレンダリングされる。
 *
 * 使い方:
 * ```tsx
 * <Offcanvas.Root open={open} onOpenChange={(d) => { open = d.open; }} size="md" placement="end">
 *   <Offcanvas.Trigger asChild><button>開く</button></Offcanvas.Trigger>
 *   <Offcanvas.Backdrop />
 *   <Offcanvas.Positioner>
 *     <Offcanvas.Content>
 *       <Offcanvas.Header>
 *         <Offcanvas.Title>タイトル</Offcanvas.Title>
 *         <Offcanvas.CloseTrigger />
 *       </Offcanvas.Header>
 *       <Offcanvas.Body>コンテンツ</Offcanvas.Body>
 *     </Offcanvas.Content>
 *   </Offcanvas.Positioner>
 * </Offcanvas.Root>
 * ```
 */
export class OffcanvasRoot {
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
        this.portalEl.setAttribute("data-offcanvas-portal", "");
        document.body.appendChild(this.portalEl);
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
            }, 260);
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
        }, 210);
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
        if (isOpen) {
            this.lockScroll(attrs);
            this.bindEscape(attrs);
        }
        else {
            this.unlockScroll();
            this.unbindEscape();
        }
        if (isOpen) {
            _offcanvasCtx = {
                close: () => this.doClose(attrs),
                closeOnInteractOutside: attrs.closeOnInteractOutside !== false,
                entering: this.entering,
                exiting: this.exiting,
                size: attrs.size ?? "md",
                placement: attrs.placement ?? "end",
            };
        }
        // 子要素を Trigger（インプレース）と Portal コンテンツに分離
        const allChildren = Array.isArray(vnode.children) ? vnode.children : [vnode.children];
        const triggerChildren = [];
        const portalParts = [];
        for (const child of allChildren) {
            if (child && typeof child === "object" && "tag" in child) {
                const tag = child.tag;
                if (tag && tag.__offcanvasRole === "trigger") {
                    const tAttrs = child.attrs ?? {};
                    if (tAttrs.asChild && child.children) {
                        triggerChildren.push(wrapChildOnclick(child.children, () => this.doOpen(attrs)));
                    }
                    else {
                        triggerChildren.push(m("button", { type: "button", class: tAttrs.class, style: tAttrs.style, onclick: () => this.doOpen(attrs) }, child.children));
                    }
                }
                else {
                    portalParts.push(child);
                }
            }
            else {
                triggerChildren.push(child);
            }
        }
        // サイズクラスをポータルコンテンツにラップ
        const size = attrs.size ?? "md";
        const sizeClass = styles[`size${capitalize(size)}`];
        this.portalContent = m("div", { class: sizeClass, style: "display: contents;" }, portalParts);
        this.portalOpen = isOpen;
        return (m("div", { class: attrs.class, style: attrs.style, "data-offcanvas-root": "" }, triggerChildren));
    }
}
// ===========================
// 命令的 API 用の内部ラッパー
// ===========================
/**
 * show() で使われる内部ラッパーコンポーネント。
 * Overlay 経由で body にマウントされる。
 */
class OffcanvasImperativeWrapper {
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
        }, 210);
    }
    removeEscHandler() {
        if (this.escHandler) {
            document.removeEventListener("keydown", this.escHandler);
            this.escHandler = null;
        }
    }
    oncreate(vnode) {
        if (this.opts.closeOnEscape !== false) {
            const hideFn = vnode.attrs.hide;
            this.escHandler = (e) => {
                if (e.key === "Escape") {
                    this.doClose(false, hideFn);
                }
            };
            document.addEventListener("keydown", this.escHandler);
        }
        document.body.style.overflow = "hidden";
        requestAnimationFrame(() => {
            setTimeout(() => {
                this.entering = false;
                m.redraw();
            }, 260);
        });
    }
    onremove() {
        this.removeEscHandler();
        document.body.style.overflow = "";
    }
    view(vnode) {
        const opts = this.opts;
        const size = opts.size ?? "md";
        const placement = opts.placement ?? "end";
        const hideFn = vnode.attrs.hide;
        const closeFn = () => this.doClose(false, hideFn);
        const resolveFn = (value) => this.doClose(value, hideFn);
        const Content = opts.content;
        const contentAttrs = opts.attrs ?? {};
        _offcanvasCtx = {
            close: closeFn,
            closeOnInteractOutside: opts.closeOnInteractOutside !== false,
            entering: this.entering,
            exiting: this.exiting,
            size,
            placement,
        };
        const sizeClass = styles[`size${capitalize(size)}`];
        return (m("div", { style: "display: contents;", class: sizeClass },
            m(OffcanvasBackdropMarker),
            m(OffcanvasPositionerMarker, {}, m(Content, {
                ...contentAttrs,
                resolve: resolveFn,
                hide: closeFn,
            }))));
    }
    onbeforeremove() {
        if (this.exiting) {
            return new Promise((done) => {
                setTimeout(done, 250);
            });
        }
    }
}
// ===========================
// バンドルエクスポート
// ===========================
/**
 * Offcanvas — Chakra UI Drawer 風のオフキャンバスコンポーネント
 *
 * @description
 * 2つの使い方をサポート:
 *
 * **方式1: 命令的 API（Offcanvas.show）**
 * ```tsx
 * const result = await Offcanvas.show({
 *   size: "md",
 *   placement: "end",
 *   content: {
 *     view(vnode) {
 *       return (
 *         <Offcanvas.Content>
 *           <Offcanvas.Header>
 *             <Offcanvas.Title>タイトル</Offcanvas.Title>
 *             <Offcanvas.CloseTrigger />
 *           </Offcanvas.Header>
 *           <Offcanvas.Body>本文</Offcanvas.Body>
 *           <Offcanvas.Footer>
 *             <button onclick={() => vnode.attrs.resolve(true)}>OK</button>
 *           </Offcanvas.Footer>
 *         </Offcanvas.Content>
 *       );
 *     }
 *   }
 * });
 * ```
 *
 * **方式2: 宣言的 API（JSX component）**
 * ```tsx
 * <Offcanvas.Root open={open} onOpenChange={(d) => { open = d.open; }} size="md" placement="end">
 *   <Offcanvas.Trigger asChild><button>開く</button></Offcanvas.Trigger>
 *   <Offcanvas.Backdrop />
 *   <Offcanvas.Positioner>
 *     <Offcanvas.Content>
 *       <Offcanvas.Header>
 *         <Offcanvas.Title>タイトル</Offcanvas.Title>
 *         <Offcanvas.CloseTrigger />
 *       </Offcanvas.Header>
 *       <Offcanvas.Body>コンテンツ</Offcanvas.Body>
 *     </Offcanvas.Content>
 *   </Offcanvas.Positioner>
 * </Offcanvas.Root>
 * ```
 */
export const Offcanvas2 = {
    Root: OffcanvasRoot,
    Trigger: OffcanvasTriggerMarker,
    Backdrop: OffcanvasBackdropMarker,
    Positioner: OffcanvasPositionerMarker,
    Content: OffcanvasContentMarker,
    Header: OffcanvasHeaderMarker,
    Title: OffcanvasTitleMarker,
    Body: OffcanvasBodyMarker,
    Footer: OffcanvasFooterMarker,
    CloseTrigger: OffcanvasCloseTriggerMarker,
    /**
     * 命令的に Offcanvas を表示し、結果を Promise で返す
     *
     * @description
     * content コンポーネントには以下の attrs が自動注入される:
     * - resolve(value) — 値を返して Offcanvas を閉じる
     * - hide() — Offcanvas を閉じる（false を返す）
     *
     * content 内では `<Offcanvas.Content>` で囲み、その中に Header, Body, Footer 等を配置する。
     * バックドロップとポジショナーは show() が自動生成する。
     */
    show(opts) {
        return new Promise((resolve) => {
            const wrapper = new OffcanvasImperativeWrapper(opts, (value) => {
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
                closeOnEscapeKey: false,
                closeOnOutsideClick: false,
                hasBackdrop: false,
                inline: false,
            });
            overlay.show();
        });
    },
};
