/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import Overlay from "./Overlay";
import styles from "./Offcanvas.module.scss";

// ===========================
// 型定義
// ===========================

/** Offcanvas のサイズ */
export type OffcanvasSize = "sm" | "md" | "lg" | "xl" | "full";

/** Offcanvas の配置 */
export type OffcanvasPlacement = "start" | "end" | "top" | "bottom";

/** open 状態変更時の詳細 */
export type OffcanvasOpenChangeDetails = {
	open: boolean;
};

/**
 * Offcanvas.Root に渡せる属性
 */
export type OffcanvasRootAttrs = {
	/** 開閉状態（制御モード） */
	open?: boolean;
	/** 初期表示状態（非制御モード） */
	defaultOpen?: boolean;
	/** 開閉状態が変わったときのコールバック */
	onOpenChange?: (details: OffcanvasOpenChangeDetails) => void;
	/** サイズ（デフォルト: "md"） */
	size?: OffcanvasSize;
	/** 配置（デフォルト: "end"） */
	placement?: OffcanvasPlacement;
	/** Escape キーで閉じるか（デフォルト: true） */
	closeOnEscape?: boolean;
	/** 外側クリックで閉じるか（デフォルト: true） */
	closeOnInteractOutside?: boolean;
	/** 背後のスクロールを防止するか（デフォルト: true） */
	preventScroll?: boolean;
	class?: string;
	style?: Record<string, string>;
};

/** Offcanvas.Trigger に渡せる属性 */
export type OffcanvasTriggerAttrs = {
	/** 子要素をそのまま使用するか */
	asChild?: boolean;
	class?: string;
	style?: Record<string, string>;
};

/** Offcanvas.Backdrop に渡せる属性 */
export type OffcanvasBackdropAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Offcanvas.Positioner に渡せる属性 */
export type OffcanvasPositionerAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Offcanvas.Content に渡せる属性 */
export type OffcanvasContentAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Offcanvas.Header に渡せる属性 */
export type OffcanvasHeaderAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Offcanvas.Title に渡せる属性 */
export type OffcanvasTitleAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Offcanvas.Body に渡せる属性 */
export type OffcanvasBodyAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Offcanvas.Footer に渡せる属性 */
export type OffcanvasFooterAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Offcanvas.CloseTrigger に渡せる属性 */
export type OffcanvasCloseTriggerAttrs = {
	/** 子要素をそのまま使用するか */
	asChild?: boolean;
	class?: string;
	style?: Record<string, string>;
};

/** Offcanvas.show() に渡すオプション */
export type OffcanvasShowOptions<T = any> = {
	/** Offcanvas 内に表示するコンポーネント（resolve/hide が attrs に注入される） */
	content: m.ComponentTypes<any>;
	/** content に渡す追加の attrs */
	attrs?: Record<string, any>;
	/** サイズ */
	size?: OffcanvasSize;
	/** 配置 */
	placement?: OffcanvasPlacement;
	/** Escape キーで閉じるか */
	closeOnEscape?: boolean;
	/** 外側クリックで閉じるか */
	closeOnInteractOutside?: boolean;
};

/** show() で content コンポーネントに注入される attrs */
export type OffcanvasContentInjectedAttrs<T = any> = {
	/** 値を返して Offcanvas を閉じる */
	resolve: (value: T) => void;
	/** Offcanvas を閉じる（false を返す） */
	hide: () => void;
	[key: string]: any;
};

// ===========================
// 内部ロール定義
// ===========================

type OffcanvasRole =
	| "trigger"
	| "backdrop"
	| "positioner"
	| "content"
	| "header"
	| "title"
	| "body"
	| "footer"
	| "closeTrigger";

// ===========================
// モジュールレベル コンテキスト
// ===========================

/**
 * マーカーコンポーネントが参照する描画コンテキスト。
 * Mithril の同期レンダリングサイクルにより、子コンポーネントの view() 実行時に読み取れる。
 */
interface OffcanvasContext {
	close: () => void;
	closeOnInteractOutside: boolean;
	entering: boolean;
	exiting: boolean;
	size: OffcanvasSize;
	placement: OffcanvasPlacement;
}

let _offcanvasCtx: OffcanvasContext | null = null;

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
 * Offcanvas.Trigger — Offcanvas を開くトリガー（Root 内で使用）
 */
export class OffcanvasTriggerMarker implements m.Component<OffcanvasTriggerAttrs> {
	static __offcanvasRole: OffcanvasRole = "trigger";
	view(vnode: m.Vnode<OffcanvasTriggerAttrs>) {
		return <div>{vnode.children}</div>;
	}
}

/**
 * Offcanvas.Backdrop — 半透明バックドロップ。コンテキストからアニメーション状態を取得。
 */
export class OffcanvasBackdropMarker implements m.Component<OffcanvasBackdropAttrs> {
	static __offcanvasRole: OffcanvasRole = "backdrop";
	view(vnode: m.Vnode<OffcanvasBackdropAttrs>) {
		const ctx = _offcanvasCtx;
		return (
			<div
				class={classNames(styles.backdrop, {
					[styles.backdropEnter]: ctx?.entering,
					[styles.backdropExit]: ctx?.exiting,
				}, vnode.attrs.class)}
				style={vnode.attrs.style}
				data-offcanvas-backdrop=""
			/>
		);
	}
}

/**
 * Offcanvas.Positioner — ポジショニングコンテナ。
 * コンテキストからサイズ・配置を読み取り、外側クリックで閉じる。
 */
export class OffcanvasPositionerMarker implements m.Component<OffcanvasPositionerAttrs> {
	static __offcanvasRole: OffcanvasRole = "positioner";
	view(vnode: m.Vnode<OffcanvasPositionerAttrs>) {
		const ctx = _offcanvasCtx;
		const placement = ctx?.placement ?? "end";
		const closeOnInteractOutside = ctx?.closeOnInteractOutside ?? true;
		return (
			<div
				class={classNames(
					styles.positioner,
					(styles as any)[`placement${capitalize(placement)}`],
					vnode.attrs.class,
				)}
				style={vnode.attrs.style}
				data-offcanvas-positioner=""
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
 * Offcanvas.Content — Offcanvas 本体のカード枠。
 * コンテキストからアニメーション状態と配置を取得。
 */
export class OffcanvasContentMarker implements m.Component<OffcanvasContentAttrs> {
	static __offcanvasRole: OffcanvasRole = "content";
	view(vnode: m.Vnode<OffcanvasContentAttrs>) {
		const ctx = _offcanvasCtx;
		const placement = ctx?.placement ?? "end";
		return (
			<div
				class={classNames(styles.content, {
					[styles.contentEnterStart]: ctx?.entering && placement === "start",
					[styles.contentExitStart]: ctx?.exiting && placement === "start",
					[styles.contentEnterEnd]: ctx?.entering && placement === "end",
					[styles.contentExitEnd]: ctx?.exiting && placement === "end",
					[styles.contentEnterTop]: ctx?.entering && placement === "top",
					[styles.contentExitTop]: ctx?.exiting && placement === "top",
					[styles.contentEnterBottom]: ctx?.entering && placement === "bottom",
					[styles.contentExitBottom]: ctx?.exiting && placement === "bottom",
				}, vnode.attrs.class)}
				style={vnode.attrs.style}
				role="dialog"
				aria-modal="true"
				data-offcanvas-content=""
				onclick={(e: MouseEvent) => e.stopPropagation()}
			>
				{vnode.children}
			</div>
		);
	}
}

/**
 * Offcanvas.Header — ヘッダー領域
 */
export class OffcanvasHeaderMarker implements m.Component<OffcanvasHeaderAttrs> {
	static __offcanvasRole: OffcanvasRole = "header";
	view(vnode: m.Vnode<OffcanvasHeaderAttrs>) {
		return (
			<div class={classNames(styles.header, vnode.attrs.class)} style={vnode.attrs.style}>
				{vnode.children}
			</div>
		);
	}
}

/**
 * Offcanvas.Title — タイトル（h5）
 */
export class OffcanvasTitleMarker implements m.Component<OffcanvasTitleAttrs> {
	static __offcanvasRole: OffcanvasRole = "title";
	view(vnode: m.Vnode<OffcanvasTitleAttrs>) {
		return (
			<h5 class={classNames(styles.title, vnode.attrs.class)} style={vnode.attrs.style}>
				{vnode.children}
			</h5>
		);
	}
}

/**
 * Offcanvas.Body — ボディ領域
 */
export class OffcanvasBodyMarker implements m.Component<OffcanvasBodyAttrs> {
	static __offcanvasRole: OffcanvasRole = "body";
	view(vnode: m.Vnode<OffcanvasBodyAttrs>) {
		return (
			<div class={classNames(styles.body, vnode.attrs.class)} style={vnode.attrs.style}>
				{vnode.children}
			</div>
		);
	}
}

/**
 * Offcanvas.Footer — フッター領域
 */
export class OffcanvasFooterMarker implements m.Component<OffcanvasFooterAttrs> {
	static __offcanvasRole: OffcanvasRole = "footer";
	view(vnode: m.Vnode<OffcanvasFooterAttrs>) {
		return (
			<div class={classNames(styles.footer, vnode.attrs.class)} style={vnode.attrs.style}>
				{vnode.children}
			</div>
		);
	}
}

/**
 * Offcanvas.CloseTrigger — 閉じる×ボタン。コンテキストから close ハンドラを自動取得。
 */
export class OffcanvasCloseTriggerMarker implements m.Component<OffcanvasCloseTriggerAttrs> {
	static __offcanvasRole: OffcanvasRole = "closeTrigger";
	view(vnode: m.Vnode<OffcanvasCloseTriggerAttrs>) {
		const ctx = _offcanvasCtx;
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
export class OffcanvasRoot implements m.Component<OffcanvasRootAttrs> {
	private internalOpen = false;
	private entering = false;
	private exiting = false;
	private escHandler: ((e: KeyboardEvent) => void) | null = null;
	private scrollLocked = false;
	private prevOverflow = "";
	private portalEl: HTMLElement | null = null;
	private portalContent: m.Children = null;
	private portalOpen = false;

	oninit(vnode: m.Vnode<OffcanvasRootAttrs>) {
		this.internalOpen = vnode.attrs.defaultOpen ?? false;
	}

	oncreate() {
		this.portalEl = document.createElement("div");
		this.portalEl.setAttribute("data-offcanvas-portal", "");
		document.body.appendChild(this.portalEl);
		const self = this;
		m.mount(this.portalEl, {
			view() {
				return self.portalOpen ? (self.portalContent as m.Children) : null;
			},
		});
	}

	private isControlled(attrs: OffcanvasRootAttrs): boolean {
		return attrs.open !== undefined;
	}

	private getOpen(attrs: OffcanvasRootAttrs): boolean {
		return this.isControlled(attrs) ? attrs.open! : this.internalOpen;
	}

	private setOpen(attrs: OffcanvasRootAttrs, value: boolean) {
		if (!this.isControlled(attrs)) {
			this.internalOpen = value;
		}
		attrs.onOpenChange?.({ open: value });
	}

	private doOpen(attrs: OffcanvasRootAttrs) {
		if (this.getOpen(attrs)) return;
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

	private doClose(attrs: OffcanvasRootAttrs) {
		if (!this.getOpen(attrs) && !this.exiting) return;
		this.exiting = true;
		m.redraw();
		setTimeout(() => {
			this.exiting = false;
			this.setOpen(attrs, false);
			m.redraw();
		}, 210);
	}

	private lockScroll(attrs: OffcanvasRootAttrs) {
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

	private bindEscape(attrs: OffcanvasRootAttrs) {
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

	view(vnode: m.Vnode<OffcanvasRootAttrs>) {
		const attrs = vnode.attrs;
		const isOpen = this.getOpen(attrs) || this.exiting;

		if (isOpen) {
			this.lockScroll(attrs);
			this.bindEscape(attrs);
		} else {
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
		const triggerChildren: m.Children[] = [];
		const portalParts: m.Children[] = [];

		for (const child of allChildren) {
			if (child && typeof child === "object" && "tag" in child) {
				const tag = child.tag as any;
				if (tag && tag.__offcanvasRole === "trigger") {
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
					portalParts.push(child);
				}
			} else {
				triggerChildren.push(child);
			}
		}

		// サイズクラスをポータルコンテンツにラップ
		const size = attrs.size ?? "md";
		const sizeClass = (styles as any)[`size${capitalize(size)}`];
		this.portalContent = <div class={sizeClass} style="display: contents;">{portalParts}</div>;
		this.portalOpen = isOpen;

		return (
			<div class={attrs.class} style={attrs.style} data-offcanvas-root="">
				{triggerChildren}
			</div>
		);
	}
}

// ===========================
// 命令的 API 用の内部ラッパー
// ===========================

/**
 * show() で使われる内部ラッパーコンポーネント。
 * Overlay 経由で body にマウントされる。
 */
class OffcanvasImperativeWrapper implements m.ClassComponent<{ hide: () => void }> {
	private opts: OffcanvasShowOptions<any>;
	private resolvePromise: ((value: any) => void) | null;
	private entering = true;
	private exiting = false;
	private escHandler: ((e: KeyboardEvent) => void) | null = null;

	constructor(opts: OffcanvasShowOptions<any>, resolvePromise: (value: any) => void) {
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
		}, 210);
	}

	private removeEscHandler() {
		if (this.escHandler) {
			document.removeEventListener("keydown", this.escHandler);
			this.escHandler = null;
		}
	}

	oncreate(vnode: m.VnodeDOM<{ hide: () => void }>) {
		if (this.opts.closeOnEscape !== false) {
			const hideFn = vnode.attrs.hide;
			this.escHandler = (e: KeyboardEvent) => {
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

	view(vnode: m.Vnode<{ hide: () => void }>) {
		const opts = this.opts;
		const size = opts.size ?? "md";
		const placement = opts.placement ?? "end";
		const hideFn = vnode.attrs.hide;

		const closeFn = () => this.doClose(false, hideFn);
		const resolveFn = (value: any) => this.doClose(value, hideFn);

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

		const sizeClass = (styles as any)[`size${capitalize(size)}`];

		return (
			<div style="display: contents;" class={sizeClass}>
				{m(OffcanvasBackdropMarker)}
				{m(OffcanvasPositionerMarker, {},
					m(Content as m.Component<OffcanvasContentInjectedAttrs>, {
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
	show<T = boolean>(opts: OffcanvasShowOptions<T>): Promise<T> {
		return new Promise<T>((resolve) => {
			const wrapper = new OffcanvasImperativeWrapper(opts, (value: T) => {
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
					closeOnEscapeKey: false,
					closeOnOutsideClick: false,
					hasBackdrop: false,
					inline: false,
				},
			);

			overlay.show();
		});
	},
};
