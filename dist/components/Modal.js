/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import Overlay from "./Overlay";
import styles from "./Modal.module.scss";
let _modalCtx = null;
// ===========================
// ユーティリティ
// ===========================
/**
 * @function capitalize
 * @description 文字列の先頭を大文字に変換する。
 * CSS Modules のクラス名（例: `sizeMd`, `sizeXl`）を動的に組み立てる際に使用する。
 *
 * @param {string} s - 変換する文字列
 * @returns {string} 先頭を大文字に変換した文字列
 */
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
/**
 * @function wrapChildOnclick
 * @description
 * `asChild` 使用時に子要素の既存 `onclick` を保持したまま、追加のハンドラを割り込む。
 * 元の `onclick` があれば先に実行され、その後 `handler`（モーダルを開く / 閉じる）を呼び出す。
 * Mithril の仮想 DOM vnode（`"tag"` プロパティを持つオブジェクト）以外はそのまま返す。
 *
 * @param {m.Children} children - ラップ対象の子要素
 * @param {() => void} handler - 追加で実行するハンドラ（例: モーダルを開く / 閉じる）
 * @returns {m.Children} `onclick` が拡張された子要素
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
 * @class ModalTriggerMarker
 * @description
 * `Modal.Trigger` — モーダルを開くトリガーコンポーネント。`Modal.Root` の直下に配置して使う。
 *
 * `asChild` を指定すると子要素をそのままトリガーとして扱い、`onclick` にモーダルを開く処理を
 * ラップする。省略した場合は `<button>` で自動ラップされる。
 *
 * @example
 * // asChild なし（デフォルト: `<button>` でラップされる）
 * <Modal.Trigger>開く</Modal.Trigger>
 *
 * // asChild あり（子要素そのままをトリガーに）
 * <Modal.Trigger asChild><a href="#">開く</a></Modal.Trigger>
 */
export class ModalTriggerMarker {
    view(vnode) {
        return m("div", null, vnode.children);
    }
}
ModalTriggerMarker.__modalRole = "trigger";
/**
 * @class ModalBackdropMarker
 * @description
 * `Modal.Backdrop` — モーダルの背後に表示される半透明のオーバーレイ。
 *
 * モジュールレベルの `_modalCtx` からアニメーション状態（`entering` / `exiting`）を読み取り、
 * CSS クラスを切り替えることでフェードイン・フェードアウトを実現する。
 * `motionPreset === "none"` の場合はアニメーションクラスを付与しない。
 *
 * @example
 * <Modal.Root open={open}>
 *   <Modal.Backdrop />
 *   <Modal.Positioner>...</Modal.Positioner>
 * </Modal.Root>
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
 * @class ModalPositionerMarker
 * @description
 * `Modal.Positioner` — モーダルコンテンツを画面内に配置するコンテナ。
 *
 * `_modalCtx` からサイズ（`size`）・配置（`placement`）・スクロール動作（`scrollBehavior`）を読み取り、
 * 対応する CSS クラスを付与する。`closeOnInteractOutside` が有効な場合、
 * 自身（背景部分）のクリックで `ctx.close()` を呼びモーダルを閉じる。
 * `Modal.Content` 内で `e.stopPropagation()` を設定しているため、コンテンツ内のクリックでは閃じない。
 *
 * @example
 * <Modal.Positioner>
 *   <Modal.Content>...</Modal.Content>
 * </Modal.Positioner>
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
 * @class ModalContentMarker
 * @description
 * `Modal.Content` — モーダル本体を描画するカード框コンポーネント。
 *
 * `_modalCtx` から `entering` / `exiting` を読み取り、スケールアニメーションの CSS クラスを付与する。
 * `onclick` に `e.stopPropagation()` を設定し、コンテンツ内クリックが `Modal.Positioner` の
 * 「外側クリックで閃じる」処理に伝播するのを防ぐ。
 * `role="dialog"` と `aria-modal="true"` を付与してアクセシビリティに対応する。
 *
 * @example
 * <Modal.Content>
 *   <Modal.Header><Modal.Title>タイトル</Modal.Title></Modal.Header>
 *   <Modal.Body>本文</Modal.Body>
 *   <Modal.Footer>...</Modal.Footer>
 * </Modal.Content>
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
 * @class ModalHeaderMarker
 * @description
 * `Modal.Header` — モーダルのヘッダー領域。タイトル（`Modal.Title`）や
 * 閃じるボタン（`Modal.CloseTrigger`）を配置するエリア。
 */
export class ModalHeaderMarker {
    view(vnode) {
        return (m("div", { class: classNames(styles.header, vnode.attrs.class), style: vnode.attrs.style }, vnode.children));
    }
}
ModalHeaderMarker.__modalRole = "header";
/**
 * @class ModalTitleMarker
 * @description
 * `Modal.Title` — モーダルのタイトル。セマンティクに `<h2>` としてレンダリングされる。
 */
export class ModalTitleMarker {
    view(vnode) {
        return (m("h2", { class: classNames(styles.title, vnode.attrs.class), style: vnode.attrs.style }, vnode.children));
    }
}
ModalTitleMarker.__modalRole = "title";
/**
 * @class ModalDescriptionMarker
 * @description
 * `Modal.Description` — モーダルの補足説明文。`<p>` タグでレンダリングされる。
 * モーダルの目的や操作の概要をウーザーに传える際に使用する。
 */
export class ModalDescriptionMarker {
    view(vnode) {
        return (m("p", { class: classNames(styles.description, vnode.attrs.class), style: vnode.attrs.style }, vnode.children));
    }
}
ModalDescriptionMarker.__modalRole = "description";
/**
 * @class ModalBodyMarker
 * @description
 * `Modal.Body` — モーダルのメインコンテンツ領域。
 * `scrollBehavior === "inside"` の場合、この領域のみスクロールする。
 */
export class ModalBodyMarker {
    view(vnode) {
        return (m("div", { class: classNames(styles.body, vnode.attrs.class), style: vnode.attrs.style }, vnode.children));
    }
}
ModalBodyMarker.__modalRole = "body";
/**
 * @class ModalFooterMarker
 * @description
 * `Modal.Footer` — モーダルのフッター領域。アクションボタン（OK ・キャンセル等）を配置する。
 */
export class ModalFooterMarker {
    view(vnode) {
        return (m("div", { class: classNames(styles.footer, vnode.attrs.class), style: vnode.attrs.style }, vnode.children));
    }
}
ModalFooterMarker.__modalRole = "footer";
/**
 * @class ModalCloseTriggerMarker
 * @description
 * `Modal.CloseTrigger` — モーダルを閃じるためのボタンコンポーネント。
 *
 * `_modalCtx` から `close` ハンドラを自動取得するため、`Modal.Root` でも `Modal.show()` でも
 * 明示的なコールバックの渡しこみは不要。
 * `asChild` を指定すると子要素の `onclick` にクローズ処理をラップする。
 *
 * @example
 * // デフォルト（×ボタン）
 * <Modal.CloseTrigger />
 *
 * // asChild（カスタムボタン）
 * <Modal.CloseTrigger asChild><button>閃じる</button></Modal.CloseTrigger>
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
 * @class ModalActionTriggerMarker
 * @description
 * `Modal.ActionTrigger` — アクションを実行しつつモーダルを閃じるトリガーボタン。
 *
 * `CloseTrigger` との違いは、子要素（ラベルなど）をそのまま `<button>` 内に描画できる点。
 * `asChild` を指定すると子要素の `onclick` にクローズ処理をラップする。
 *
 * @example
 * <Modal.ActionTrigger>送信して閃じる</Modal.ActionTrigger>
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
 * @class Portal
 * @description
 * 子要素を `document.body` に転送する汎用コンポーネント。
 *
 * Mithril の仮想 DOM ツリーから切り離して `body` 直下に独立したポータルルートを作成し、
 * `m.render()` で子要素を直接描画する。z-index や `overflow: hidden` の影響を
 * 受けたくない要素（モーダル・トーストなど）に使用する。
 *
 * 注意: `ModalRoot` では `Portal` を直接使わず `m.mount()` 方式を採用しているため、
 * この `Portal` クラスは他のコンポーネントから利用する汎用実装として公開している。
 */
export class Portal {
    constructor() {
        this.portalRoot = null;
    }
    oncreate(vnode) {
        // ポータル用の <div> を body に追加し、子要素を m.render() で描画する
        this.portalRoot = document.createElement("div");
        this.portalRoot.setAttribute("data-modal-portal", "");
        document.body.appendChild(this.portalRoot);
        this.renderPortal(vnode);
    }
    onupdate(vnode) {
        // 再描画のたびにポータルの内容を最新状態に更新する
        this.renderPortal(vnode);
    }
    renderPortal(vnode) {
        if (!this.portalRoot)
            return;
        m.render(this.portalRoot, vnode.children);
    }
    onremove() {
        // m.render(null) でアンマウントしてから DOM を削除し、メモリリークを防ぐ
        if (this.portalRoot) {
            m.render(this.portalRoot, null);
            this.portalRoot.remove();
            this.portalRoot = null;
        }
    }
    view() {
        // ポータル本体は body 側に描画するため、メインツリーには非表示の div を置くだけ
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
        // 非制御モードの場合、defaultOpen を初期値として内部状態を設定する
        this.internalOpen = vnode.attrs.defaultOpen ?? false;
    }
    oncreate() {
        // ポータル用 <div> を body に追加し、m.mount で登録する
        // m.mount を使う理由: m.render と異なり auto-redraw に参加するため、
        // ポータル内のイベント（クリック等）でメインツリーも自動再描画される
        this.portalEl = document.createElement("div");
        this.portalEl.setAttribute("data-modal-portal", "");
        document.body.appendChild(this.portalEl);
        const self = this;
        m.mount(this.portalEl, {
            view() {
                return self.portalOpen ? self.portalContent : null;
            },
        });
    }
    /** `open` prop が渡されているか（制御モード）かどうかを返す */
    isControlled(attrs) {
        return attrs.open !== undefined;
    }
    /** 現在の open 状態を返す。制御モードなら `attrs.open`、非制御なら内部状態を使う */
    getOpen(attrs) {
        return this.isControlled(attrs) ? attrs.open : this.internalOpen;
    }
    /**
     * open 状態を変更する。
     * 非制御モードなら内部状態を更新し、`onOpenChange` コールバックを常に呼ぶ。
     */
    setOpen(attrs, value) {
        if (!this.isControlled(attrs)) {
            this.internalOpen = value;
        }
        attrs.onOpenChange?.({ open: value });
    }
    /**
     * @description
     * モーダルを開き、エンターアニメーションを開始する。
     * `requestAnimationFrame` + `setTimeout(220ms)` の二重待機で
     * CSS トランジションが確実に再生されてから `entering` フラグを落とす。
     */
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
    /**
     * @description
     * モーダルを閉じ、エグジットアニメーションを開始する。
     * `exiting` フラグを立てて CSS アニメーションを開始し、
     * 170ms 後にフラグを落として open を false にする。
     */
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
    /**
     * @description
     * `preventScroll` が有効な場合、`body` の `overflow` を `hidden` にして背後のスクロールを防ぐ。
     * 元の `overflow` 値を `prevOverflow` に退避しておき、`unlockScroll` で復元する。
     */
    lockScroll(attrs) {
        if (attrs.preventScroll !== false && !this.scrollLocked) {
            this.prevOverflow = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            this.scrollLocked = true;
        }
    }
    /** スクロールロックを解除し、退避しておいた `overflow` 値を復元する */
    unlockScroll() {
        if (this.scrollLocked) {
            document.body.style.overflow = this.prevOverflow;
            this.scrollLocked = false;
        }
    }
    /**
     * @description
     * Escape キーの `keydown` リスナーを `document` に登録する。
     * 多重登録を防ぐため `escHandler` が既に存在する場合は何もしない。
     * `closeOnEscape === false` のときは登録をスキップする。
     */
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
    /** Escape キーリスナーを解除し、`escHandler` を null に戻す */
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
 * @class ModalImperativeWrapper
 * @description
 * `Modal.show()` で使われる内部ラッパーコンポーネント。
 *
 * `Overlay` 経由で `document.body` に動的マウントされ、バックドロップと
 * ポジショナーを自動生成する。ユーザーが渡した `content` コンポーネントは
 * ポジショナー内に配置され、`resolve` / `hide` が attrs として注入される。
 *
 * アニメーション管理・Escape キー処理・スクロールロックを内包し、
 * `Modal.show()` の呼び出し元から完全に隠蔽する。
 *
 * 注意: このクラスは内部実装であり、直接使用しないこと。
 */
class ModalImperativeWrapper {
    constructor(opts, resolvePromise) {
        this.entering = true;
        this.exiting = false;
        this.escHandler = null;
        this.opts = opts;
        this.resolvePromise = resolvePromise;
    }
    /**
     * @description
     * モーダルを閉じて Promise を解決する。
     * 二重呼び出しを防ぐため `resolvePromise` を null にリセットしてから実行する。
     * フェードアウトアニメーション（170ms）完了後に `hideFn` で Overlay をアンマウントする。
     */
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
        // Escape キーハンドラを登録する（closeOnEscape が false の場合はスキップ）
        if (this.opts.closeOnEscape !== false) {
            const hideFn = vnode.attrs.hide;
            this.escHandler = (e) => {
                if (e.key === "Escape") {
                    this.doClose(false, hideFn);
                }
            };
            document.addEventListener("keydown", this.escHandler);
        }
        // モーダル表示中はページのスクロールを禁止する
        document.body.style.overflow = "hidden";
        // requestAnimationFrame + setTimeout で CSS トランジションを確実に開始させてからフラグを落とす
        requestAnimationFrame(() => {
            setTimeout(() => {
                this.entering = false;
                m.redraw();
            }, 220);
        });
    }
    onremove() {
        // コンポーネント破棄時に Escape リスナーとスクロールロックを必ずクリーンアップする
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
     * @function show
     * @static
     * @description
     * 命令的にモーダルを表示し、結果を Promise で返す。
     *
     * `content` コンポーネントには以下の attrs が自動注入される:
     * - `resolve(value)` — 任意の値を返してモーダルを閉じる
     * - `hide()` — `false` を返してモーダルを閉じる
     *
     * バックドロップとポジショナーは `show()` が自動生成するため、
     * `content` 内では `<Modal.Content>` から始める。
     *
     * @param {ModalShowOptions<T>} opts - 表示オプション（content、size、placement など）
     * @returns {Promise<T>} resolve() に渡した値で解決される Promise
     *
     * 実装の詳細:
     * 1. `ModalImperativeWrapper` を生成してアニメーション・Escape・スクロールロックを委譲
     * 2. `Overlay` に wrapper をアダプトして body にマウント
     * 3. resolve() / hide() 呼び出し後、フェードアウト完了で Overlay がアンマウントされ Promise が解決
     *
     * @example
     * const result = await Modal.show({
     *   content: {
     *     view(vnode) {
     *       return (
     *         <Modal.Content>
     *           <Modal.Header><Modal.Title>確認</Modal.Title></Modal.Header>
     *           <Modal.Body>本当によろしいですか？</Modal.Body>
     *           <Modal.Footer>
     *             <button onclick={() => vnode.attrs.resolve(true)}>はい</button>
     *             <button onclick={() => vnode.attrs.hide()}>キャンセル</button>
     *           </Modal.Footer>
     *         </Modal.Content>
     *       );
     *     }
     *   }
     * });
     * if (result) { // ユーザーが「はい」を選んだ場合
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
