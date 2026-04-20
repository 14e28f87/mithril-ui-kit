/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import Overlay from "./Overlay";
import styles from "./Modal.module.scss";

// ===========================
// 型定義
// ===========================

/** Modal のサイズ */
export type ModalSize = "xs" | "sm" | "md" | "lg" | "xl" | "cover" | "full";

/** Modal の配置 */
export type ModalPlacement = "top" | "center" | "bottom";

/** Modal のスクロール動作 */
export type ModalScrollBehavior = "inside" | "outside";

/** Modal のアニメーション */
export type ModalMotionPreset = "scale" | "none";

/** open 状態変更時の詳細 */
export type ModalOpenChangeDetails = {
	open: boolean;
};

/**
 * Modal.Root に渡せる属性
 */
export type ModalRootAttrs = {
	/** 開閉状態（制御モード） */
	open?: boolean;
	/** 初期表示状態（非制御モード） */
	defaultOpen?: boolean;
	/** 開閉状態が変わったときのコールバック */
	onOpenChange?: (details: ModalOpenChangeDetails) => void;
	/** サイズ（デフォルト: "md"） */
	size?: ModalSize;
	/** 配置（デフォルト: "top"） */
	placement?: ModalPlacement;
	/** スクロール動作（デフォルト: "outside"） */
	scrollBehavior?: ModalScrollBehavior;
	/** アニメーション（デフォルト: "scale"） */
	motionPreset?: ModalMotionPreset;
	/** Escape キーで閉じるか（デフォルト: true） */
	closeOnEscape?: boolean;
	/** 外側クリックで閉じるか（デフォルト: true） */
	closeOnInteractOutside?: boolean;
	/** ARIA role（デフォルト: "dialog"） */
	role?: "dialog" | "alertdialog";
	/** 背後のスクロールを防止するか（デフォルト: true） */
	preventScroll?: boolean;
	class?: string;
	style?: Record<string, string>;
};

/** Modal.Trigger に渡せる属性 */
export type ModalTriggerAttrs = {
	/** 子要素をそのまま使用するか */
	asChild?: boolean;
	class?: string;
	style?: Record<string, string>;
};

/** Modal.Backdrop に渡せる属性 */
export type ModalBackdropAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Modal.Positioner に渡せる属性 */
export type ModalPositionerAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Modal.Content に渡せる属性 */
export type ModalContentAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Modal.Header に渡せる属性 */
export type ModalHeaderAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Modal.Title に渡せる属性 */
export type ModalTitleAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Modal.Description に渡せる属性 */
export type ModalDescriptionAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Modal.Body に渡せる属性 */
export type ModalBodyAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Modal.Footer に渡せる属性 */
export type ModalFooterAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Modal.CloseTrigger に渡せる属性 */
export type ModalCloseTriggerAttrs = {
	/** 子要素をそのまま使用するか */
	asChild?: boolean;
	class?: string;
	style?: Record<string, string>;
};

/** Modal.ActionTrigger に渡せる属性 */
export type ModalActionTriggerAttrs = {
	/** 子要素をそのまま使用するか */
	asChild?: boolean;
	class?: string;
	style?: Record<string, string>;
};

/** Modal.show() に渡すオプション */
export type ModalShowOptions<T = any> = {
	/** モーダル内に表示するコンポーネント（resolve/hide が attrs に注入される） */
	content: m.ComponentTypes<any>;
	/** content に渡す追加の attrs */
	attrs?: Record<string, any>;
	/** サイズ */
	size?: ModalSize;
	/** 配置 */
	placement?: ModalPlacement;
	/** スクロール動作 */
	scrollBehavior?: ModalScrollBehavior;
	/** アニメーション */
	motionPreset?: ModalMotionPreset;
	/** Escape キーで閉じるか */
	closeOnEscape?: boolean;
	/** 外側クリックで閉じるか */
	closeOnInteractOutside?: boolean;
	/** ARIA role */
	role?: "dialog" | "alertdialog";
};

/** show() で content コンポーネントに注入される attrs */
export type ModalContentInjectedAttrs<T = any> = {
	/** 値を返してモーダルを閉じる */
	resolve: (value: T) => void;
	/** モーダルを閉じる（false を返す） */
	hide: () => void;
	[key: string]: any;
};

// ===========================
// 内部ロール定義
// ===========================

type ModalRole =
	| "trigger"
	| "backdrop"
	| "positioner"
	| "content"
	| "header"
	| "title"
	| "description"
	| "body"
	| "footer"
	| "closeTrigger"
	| "actionTrigger";

// ===========================
// モジュールレベル コンテキスト
// ===========================

/**
 * マーカーコンポーネントが参照する描画コンテキスト。
 * ImperativeWrapper.view() または Root の syncPortal() 内で設定される。
 * Mithril の同期レンダリングサイクルにより、子コンポーネントの view() 実行時に読み取れる。
 */
interface ModalContext {
	close: () => void;
	closeOnInteractOutside: boolean;
	entering: boolean;
	exiting: boolean;
	motionPreset: ModalMotionPreset;
	size: ModalSize;
	placement: ModalPlacement;
	scrollBehavior: ModalScrollBehavior;
}

let _modalCtx: ModalContext | null = null;

// ===========================
// ユーティリティ
// ===========================

function capitalize(s: string): string {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

/**
 * asChild: 子要素の onclick をラップして追加のハンドラを呼ぶ
 */
function wrapChildOnclick(children: m.Children, handler: () => void): m.Children {
	if (!children) return children;
	const arr = Array.isArray(children) ? children : [children];
	return arr.map((child) => {
		if (!child || typeof child !== "object" || !("tag" in child)) return child;
		const origOnclick = child.attrs?.onclick;
		return {
			...child,
			attrs: {
				...child.attrs,
				onclick: (e: MouseEvent) => {
					if (typeof origOnclick === "function") origOnclick(e);
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
export class ModalTriggerMarker implements m.Component<ModalTriggerAttrs> {
	static __modalRole: ModalRole = "trigger";
	view(vnode: m.Vnode<ModalTriggerAttrs>) {
		return <div>{vnode.children}</div>;
	}
}

/**
 * Modal.Backdrop — 半透明バックドロップ。コンテキストからアニメーション状態を取得。
 */
export class ModalBackdropMarker implements m.Component<ModalBackdropAttrs> {
	static __modalRole: ModalRole = "backdrop";
	view(vnode: m.Vnode<ModalBackdropAttrs>) {
		const ctx = _modalCtx;
		return (
			<div
				class={classNames(styles.backdrop, {
					[styles.backdropEnter]: ctx?.entering && ctx?.motionPreset !== "none",
					[styles.backdropExit]: ctx?.exiting && ctx?.motionPreset !== "none",
				}, vnode.attrs.class)}
				style={vnode.attrs.style}
				data-modal-backdrop=""
			/>
		);
	}
}

/**
 * Modal.Positioner — ポジショニングコンテナ。
 * コンテキストからサイズ・配置・スクロール動作を読み取り、外側クリックで閉じる。
 */
export class ModalPositionerMarker implements m.Component<ModalPositionerAttrs> {
	static __modalRole: ModalRole = "positioner";
	view(vnode: m.Vnode<ModalPositionerAttrs>) {
		const ctx = _modalCtx;
		const size = ctx?.size ?? "md";
		const placement = ctx?.placement ?? "top";
		const scrollBehavior = ctx?.scrollBehavior ?? "outside";
		const closeOnInteractOutside = ctx?.closeOnInteractOutside ?? true;
		return (
			<div
				class={classNames(
					styles.positioner,
					(styles as any)[`size${capitalize(size)}`],
					{
						[styles.placementCenter]: placement === "center",
						[styles.placementBottom]: placement === "bottom",
						[styles.scrollInside]: scrollBehavior === "inside",
					},
					vnode.attrs.class,
				)}
				style={vnode.attrs.style}
				data-modal-positioner=""
				onclick={() => {
					if (closeOnInteractOutside && ctx?.close) ctx.close();
				}}
			>
				{vnode.children}
			</div>
		);
	}
}

/**
 * Modal.Content — モーダル本体のカード枠。コンテキストからアニメーション状態を取得。
 * onclick stopPropagation によりポジショナーの閉じる動作を阻止する。
 */
export class ModalContentMarker implements m.Component<ModalContentAttrs> {
	static __modalRole: ModalRole = "content";
	view(vnode: m.Vnode<ModalContentAttrs>) {
		const ctx = _modalCtx;
		return (
			<div
				class={classNames(styles.content, {
					[styles.contentEnter]: ctx?.entering && ctx?.motionPreset !== "none",
					[styles.contentExit]: ctx?.exiting && ctx?.motionPreset !== "none",
				}, vnode.attrs.class)}
				style={vnode.attrs.style}
				role="dialog"
				aria-modal="true"
				data-modal-content=""
				onclick={(e: MouseEvent) => e.stopPropagation()}
			>
				{vnode.children}
			</div>
		);
	}
}

/**
 * Modal.Header — ヘッダー領域
 */
export class ModalHeaderMarker implements m.Component<ModalHeaderAttrs> {
	static __modalRole: ModalRole = "header";
	view(vnode: m.Vnode<ModalHeaderAttrs>) {
		return (
			<div class={classNames(styles.header, vnode.attrs.class)} style={vnode.attrs.style}>
				{vnode.children}
			</div>
		);
	}
}

/**
 * Modal.Title — タイトル（h2）
 */
export class ModalTitleMarker implements m.Component<ModalTitleAttrs> {
	static __modalRole: ModalRole = "title";
	view(vnode: m.Vnode<ModalTitleAttrs>) {
		return (
			<h2 class={classNames(styles.title, vnode.attrs.class)} style={vnode.attrs.style}>
				{vnode.children}
			</h2>
		);
	}
}

/**
 * Modal.Description — 説明文（p）
 */
export class ModalDescriptionMarker implements m.Component<ModalDescriptionAttrs> {
	static __modalRole: ModalRole = "description";
	view(vnode: m.Vnode<ModalDescriptionAttrs>) {
		return (
			<p class={classNames(styles.description, vnode.attrs.class)} style={vnode.attrs.style}>
				{vnode.children}
			</p>
		);
	}
}

/**
 * Modal.Body — ボディ領域
 */
export class ModalBodyMarker implements m.Component<ModalBodyAttrs> {
	static __modalRole: ModalRole = "body";
	view(vnode: m.Vnode<ModalBodyAttrs>) {
		return (
			<div class={classNames(styles.body, vnode.attrs.class)} style={vnode.attrs.style}>
				{vnode.children}
			</div>
		);
	}
}

/**
 * Modal.Footer — フッター領域
 */
export class ModalFooterMarker implements m.Component<ModalFooterAttrs> {
	static __modalRole: ModalRole = "footer";
	view(vnode: m.Vnode<ModalFooterAttrs>) {
		return (
			<div class={classNames(styles.footer, vnode.attrs.class)} style={vnode.attrs.style}>
				{vnode.children}
			</div>
		);
	}
}

/**
 * Modal.CloseTrigger — 閉じる×ボタン。コンテキストから close ハンドラを自動取得。
 */
export class ModalCloseTriggerMarker implements m.Component<ModalCloseTriggerAttrs> {
	static __modalRole: ModalRole = "closeTrigger";
	view(vnode: m.Vnode<ModalCloseTriggerAttrs>) {
		const ctx = _modalCtx;
		const closeFn = ctx?.close ?? (() => {});
		if (vnode.attrs.asChild && vnode.children) {
			return wrapChildOnclick(vnode.children, closeFn);
		}
		return (
			<button
				type="button"
				class={classNames(styles.closeTrigger, vnode.attrs.class)}
				style={vnode.attrs.style}
				aria-label="Close"
				onclick={() => closeFn()}
			/>
		);
	}
}

/**
 * Modal.ActionTrigger — アクション実行＋閉じるトリガー
 */
export class ModalActionTriggerMarker implements m.Component<ModalActionTriggerAttrs> {
	static __modalRole: ModalRole = "actionTrigger";
	view(vnode: m.Vnode<ModalActionTriggerAttrs>) {
		const ctx = _modalCtx;
		const closeFn = ctx?.close ?? (() => {});
		if (vnode.attrs.asChild && vnode.children) {
			return wrapChildOnclick(vnode.children, closeFn);
		}
		return (
			<button
				type="button"
				class={vnode.attrs.class}
				style={vnode.attrs.style}
				onclick={() => closeFn()}
			>
				{vnode.children}
			</button>
		);
	}
}

// ===========================
// Portal コンポーネント
// ===========================

/**
 * Portal — 子要素を document.body に転送するコンポーネント。
 */
export class Portal implements m.Component {
	private portalRoot: HTMLElement | null = null;

	oncreate(vnode: m.VnodeDOM) {
		this.portalRoot = document.createElement("div");
		this.portalRoot.setAttribute("data-modal-portal", "");
		document.body.appendChild(this.portalRoot);
		this.renderPortal(vnode);
	}

	onupdate(vnode: m.VnodeDOM) {
		this.renderPortal(vnode);
	}

	private renderPortal(vnode: m.VnodeDOM | m.Vnode) {
		if (!this.portalRoot) return;
		m.render(this.portalRoot, vnode.children as m.Children);
	}

	onremove() {
		if (this.portalRoot) {
			m.render(this.portalRoot, null);
			this.portalRoot.remove();
			this.portalRoot = null;
		}
	}

	view() {
		return <div style="display:none" />;
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
export class ModalRoot implements m.Component<ModalRootAttrs> {
	private internalOpen = false;
	private entering = false;
	private exiting = false;
	private escHandler: ((e: KeyboardEvent) => void) | null = null;
	private scrollLocked = false;
	private prevOverflow = "";
	private portalEl: HTMLElement | null = null;
	private portalContent: m.Children = null;
	private portalOpen = false;

	oninit(vnode: m.Vnode<ModalRootAttrs>) {
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
				return self.portalOpen ? (self.portalContent as m.Children) : null;
			},
		});
	}

	private isControlled(attrs: ModalRootAttrs): boolean {
		return attrs.open !== undefined;
	}

	private getOpen(attrs: ModalRootAttrs): boolean {
		return this.isControlled(attrs) ? attrs.open! : this.internalOpen;
	}

	private setOpen(attrs: ModalRootAttrs, value: boolean) {
		if (!this.isControlled(attrs)) {
			this.internalOpen = value;
		}
		attrs.onOpenChange?.({ open: value });
	}

	private doOpen(attrs: ModalRootAttrs) {
		if (this.getOpen(attrs)) return;
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

	private doClose(attrs: ModalRootAttrs) {
		if (!this.getOpen(attrs) && !this.exiting) return;
		this.exiting = true;
		m.redraw();
		setTimeout(() => {
			this.exiting = false;
			this.setOpen(attrs, false);
			m.redraw();
		}, 170);
	}

	private lockScroll(attrs: ModalRootAttrs) {
		if (attrs.preventScroll !== false && !this.scrollLocked) {
			this.prevOverflow = document.body.style.overflow;
			document.body.style.overflow = "hidden";
			this.scrollLocked = true;
		}
	}

	private unlockScroll() {
		if (this.scrollLocked) {
			document.body.style.overflow = this.prevOverflow;
			this.scrollLocked = false;
		}
	}

	private bindEscape(attrs: ModalRootAttrs) {
		if (attrs.closeOnEscape === false) return;
		if (this.escHandler) return;
		this.escHandler = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				this.doClose(attrs);
			}
		};
		document.addEventListener("keydown", this.escHandler);
	}

	private unbindEscape() {
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

	view(vnode: m.Vnode<ModalRootAttrs>) {
		const attrs = vnode.attrs;
		const isOpen = this.getOpen(attrs) || this.exiting;

		// スクロールロック・Escape バインドは view で同期的に管理
		if (isOpen) {
			this.lockScroll(attrs);
			this.bindEscape(attrs);
		} else {
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
		const triggerChildren: m.Children[] = [];
		const portalParts: m.Children[] = [];

		for (const child of allChildren) {
			if (child && typeof child === "object" && "tag" in child) {
				const tag = child.tag as any;
				if (tag && tag.__modalRole === "trigger") {
					const tAttrs = child.attrs ?? {};
					if (tAttrs.asChild && child.children) {
						triggerChildren.push(wrapChildOnclick(child.children, () => this.doOpen(attrs)));
					} else {
						triggerChildren.push(
							<button
								type="button"
								class={tAttrs.class}
								style={tAttrs.style}
								onclick={() => this.doOpen(attrs)}
							>
								{child.children}
							</button>,
						);
					}
				} else {
					// Trigger 以外はすべてポータルコンテンツ
					portalParts.push(child);
				}
			} else {
				triggerChildren.push(child);
			}
		}

		// ポータル状態を保存（m.mount で登録済みのポータルが auto-redraw 時に読み取る）
		this.portalContent = portalParts;
		this.portalOpen = isOpen;

		return (
			<div class={attrs.class} style={attrs.style} data-modal-root="">
				{triggerChildren}
			</div>
		);
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
class ModalImperativeWrapper implements m.ClassComponent<{ hide: () => void }> {
	private opts: ModalShowOptions<any>;
	private resolvePromise: ((value: any) => void) | null;
	private entering = true;
	private exiting = false;
	private escHandler: ((e: KeyboardEvent) => void) | null = null;

	constructor(opts: ModalShowOptions<any>, resolvePromise: (value: any) => void) {
		this.opts = opts;
		this.resolvePromise = resolvePromise;
	}

	private doClose(value: any, hideFn: () => void) {
		if (!this.resolvePromise) return;
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

	private removeEscHandler() {
		if (this.escHandler) {
			document.removeEventListener("keydown", this.escHandler);
			this.escHandler = null;
		}
	}

	oncreate(vnode: m.VnodeDOM<{ hide: () => void }>) {
		// Escape キーハンドラ登録
		if (this.opts.closeOnEscape !== false) {
			const hideFn = vnode.attrs.hide;
			this.escHandler = (e: KeyboardEvent) => {
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

	view(vnode: m.Vnode<{ hide: () => void }>) {
		const opts = this.opts;
		const size = opts.size ?? "md";
		const placement = opts.placement ?? "top";
		const scrollBehavior = opts.scrollBehavior ?? "outside";
		const motionPreset = opts.motionPreset ?? "scale";
		const hideFn = vnode.attrs.hide;

		const closeFn = () => this.doClose(false, hideFn);
		const resolveFn = (value: any) => this.doClose(value, hideFn);

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

		return (
			<div style="display: contents;">
				{m(ModalBackdropMarker)}
				{m(ModalPositionerMarker, {},
					m(Content as m.Component<ModalContentInjectedAttrs>, {
						...contentAttrs,
						resolve: resolveFn,
						hide: closeFn,
					}),
				)}
			</div>
		);
	}

	onbeforeremove() {
		if (this.exiting) {
			return new Promise<void>((done) => {
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
 * **方式2: 宣言的 API（JSX compound component）**
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
	show<T = boolean>(opts: ModalShowOptions<T>): Promise<T> {
		return new Promise<T>((resolve) => {
			const wrapper = new ModalImperativeWrapper(opts, (value: T) => {
				resolve(value);
			});

			const overlay = new Overlay(
				{
					view(vnode: m.Vnode<{ hide: () => void }>) {
						return wrapper.view(vnode);
					},
					oncreate(vnode: m.VnodeDOM<{ hide: () => void }>) {
						wrapper.oncreate(vnode);
					},
					onremove() {
						wrapper.onremove();
					},
					onbeforeremove() {
						return wrapper.onbeforeremove();
					},
				} as m.Component<{ hide: () => void }>,
				{
					closeOnEscapeKey: false, // Modal が自前で管理
					closeOnOutsideClick: false,
					hasBackdrop: false, // Modal が自前でバックドロップを描画
					inline: false,
				},
			);

			overlay.show();
		});
	},
};
