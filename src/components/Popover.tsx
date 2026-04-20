/** @jsx m */
/**
 * @fileoverview
 * Popover — Chakra UI 現行 API 準拠の compound component 型ポップオーバー
 *
 * クリックでトリガーし、リッチなコンテンツを浮かせて表示する。
 * タイトル、ボディ、フッター、閉じるボタンなどを含む構造化コンテンツに対応。
 *
 * @example
 * ```tsx
 * <Popover.Root>
 *   <Popover.Trigger>開く</Popover.Trigger>
 *   <Popover.Content>
 *     <Popover.Header>タイトル</Popover.Header>
 *     <Popover.Body>本文</Popover.Body>
 *     <Popover.Footer>
 *       <Popover.CloseTrigger>閉じる</Popover.CloseTrigger>
 *     </Popover.Footer>
 *   </Popover.Content>
 * </Popover.Root>
 * ```
 *
 * @module Popover
 */
/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Popover.module.scss";

/** ポップオーバーの配置方向 */
export type PopoverPlacement = "top" | "bottom" | "left" | "right";

/** ポップオーバーのサイズ */
export type PopoverSize = "xs" | "sm" | "md" | "lg";

/**
 * 開閉イベントの詳細
 */
export type PopoverOpenChangeDetails = {
	open: boolean;
};

/**
 * Popover.Root に渡せる属性
 */
export type PopoverRootAttrs = {
	/** 制御モード: 開閉状態 */
	open?: boolean;
	/** 非制御モード: 初期開閉状態 */
	defaultOpen?: boolean;
	/** 開閉コールバック */
	onOpenChange?: (details: PopoverOpenChangeDetails) => void;
	/** 配置方向（デフォルト: "bottom"） */
	placement?: PopoverPlacement;
	/** サイズ（デフォルト: "md"） */
	size?: PopoverSize;
	/** Escape キーで閉じる（デフォルト: true） */
	closeOnEscape?: boolean;
	/** 外部クリックで閉じる（デフォルト: true） */
	closeOnInteractOutside?: boolean;
	/** オートフォーカス有効 */
	autoFocus?: boolean;
	class?: string;
	style?: Record<string, string>;
};

/** Popover.Trigger に渡せる属性 */
export type PopoverTriggerAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Popover.Content に渡せる属性 */
export type PopoverContentAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Popover.Header に渡せる属性 */
export type PopoverHeaderAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Popover.Body に渡せる属性 */
export type PopoverBodyAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Popover.Title に渡せる属性 */
export type PopoverTitleAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Popover.Footer に渡せる属性 */
export type PopoverFooterAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Popover.CloseTrigger に渡せる属性 */
export type PopoverCloseTriggerAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Popover.Arrow に渡せる属性 */
export type PopoverArrowAttrs = {
	class?: string;
	style?: Record<string, string>;
};

// --- ロール ---
type PopoverRole = "trigger" | "content" | "header" | "body" | "title" | "footer" | "close-trigger" | "arrow";

// --- マーカークラス ---
/** @class PopoverTriggerMarker */
export class PopoverTriggerMarker implements m.Component<PopoverTriggerAttrs> {
	public static __popoverRole: PopoverRole = "trigger";
	public view(vnode: m.Vnode<PopoverTriggerAttrs>) { return <span>{vnode.children}</span>; }
}

/** @class PopoverContentMarker */
export class PopoverContentMarker implements m.Component<PopoverContentAttrs> {
	public static __popoverRole: PopoverRole = "content";
	public view(vnode: m.Vnode<PopoverContentAttrs>) { return <div>{vnode.children}</div>; }
}

/** @class PopoverHeaderMarker */
export class PopoverHeaderMarker implements m.Component<PopoverHeaderAttrs> {
	public static __popoverRole: PopoverRole = "header";
	public view(vnode: m.Vnode<PopoverHeaderAttrs>) { return <div>{vnode.children}</div>; }
}

/** @class PopoverBodyMarker */
export class PopoverBodyMarker implements m.Component<PopoverBodyAttrs> {
	public static __popoverRole: PopoverRole = "body";
	public view(vnode: m.Vnode<PopoverBodyAttrs>) { return <div>{vnode.children}</div>; }
}

/** @class PopoverTitleMarker */
export class PopoverTitleMarker implements m.Component<PopoverTitleAttrs> {
	public static __popoverRole: PopoverRole = "title";
	public view(vnode: m.Vnode<PopoverTitleAttrs>) { return <span>{vnode.children}</span>; }
}

/** @class PopoverFooterMarker */
export class PopoverFooterMarker implements m.Component<PopoverFooterAttrs> {
	public static __popoverRole: PopoverRole = "footer";
	public view(vnode: m.Vnode<PopoverFooterAttrs>) { return <div>{vnode.children}</div>; }
}

/** @class PopoverCloseTriggerMarker */
export class PopoverCloseTriggerMarker implements m.Component<PopoverCloseTriggerAttrs> {
	public static __popoverRole: PopoverRole = "close-trigger";
	public view(vnode: m.Vnode<PopoverCloseTriggerAttrs>) { return <button type="button">{vnode.children}</button>; }
}

/** @class PopoverArrowMarker */
export class PopoverArrowMarker implements m.Component<PopoverArrowAttrs> {
	public static __popoverRole: PopoverRole = "arrow";
	public view(vnode: m.Vnode<PopoverArrowAttrs>) { return <div />; }
}

// --- ユーティリティ ---
function toChildArray(children: m.Children): any[] {
	if (Array.isArray(children)) return children.flatMap(c => toChildArray(c));
	if (children === null || children === undefined || typeof children === "boolean") return [];
	return [children];
}

function isVnodeLike(v: any): v is m.Vnode<any> {
	return !!v && typeof v === "object" && "tag" in v;
}

function getRole(v: any): PopoverRole | undefined {
	if (!isVnodeLike(v)) return undefined;
	return (v.tag as any)?.__popoverRole;
}

function capitalize(s: string): string {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

/**
 * CloseTrigger を children 内から再帰的に探し、onclick を注入して返す
 */
function injectCloseHandler(children: m.Children, closeFn: () => void): any[] {
	return toChildArray(children).map(child => {
		if (!isVnodeLike(child)) return child;
		if (getRole(child) === "close-trigger") {
			return {
				...child,
				attrs: { ...child.attrs, __closeFn: closeFn },
			};
		}
		return child;
	});
}

/**
 * @class PopoverRoot
 * @description
 * ポップオーバーのルートコンポーネント。
 * クリックトリガーでリッチコンテンツを浮かせて表示する。
 *
 * 主な機能:
 * - placement (top / bottom / left / right)
 * - size (xs / sm / md / lg)
 * - closeOnEscape / closeOnInteractOutside
 * - 制御/非制御両対応 (open / defaultOpen)
 * - Header, Body, Footer, CloseTrigger, Title, Arrow
 *
 * @example
 * <Popover.Root placement="bottom" size="md">
 *   <Popover.Trigger>詳細を表示</Popover.Trigger>
 *   <Popover.Content>
 *     <Popover.Header>タイトル</Popover.Header>
 *     <Popover.Body>ボディ部分</Popover.Body>
 *     <Popover.Footer><Popover.CloseTrigger>閉じる</Popover.CloseTrigger></Popover.Footer>
 *   </Popover.Content>
 * </Popover.Root>
 */
export class PopoverRoot implements m.Component<PopoverRootAttrs> {
	private isOpen = false;
	private readonly uid = `muk-popover-${PopoverRoot.seed++}`;
	private static seed = 1;
	private outsideClickHandler: ((e: MouseEvent) => void) | null = null;
	private escapeHandler: ((e: KeyboardEvent) => void) | null = null;
	private rootDom: Element | null = null;

	public oninit(vnode: m.Vnode<PopoverRootAttrs>) {
		this.isOpen = vnode.attrs.defaultOpen ?? false;
	}

	public oncreate(vnode: m.VnodeDOM<PopoverRootAttrs>) {
		this.rootDom = vnode.dom;
		if (this.resolveOpen(vnode.attrs)) this.registerGlobalHandlers(vnode.attrs);
	}

	public onupdate(vnode: m.VnodeDOM<PopoverRootAttrs>) {
		this.rootDom = vnode.dom;
		if (this.resolveOpen(vnode.attrs)) {
			this.registerGlobalHandlers(vnode.attrs);
		} else {
			this.unregisterGlobalHandlers();
		}
	}

	public onremove() {
		this.unregisterGlobalHandlers();
	}

	private resolveOpen(attrs: PopoverRootAttrs): boolean {
		return attrs.open !== undefined ? attrs.open : this.isOpen;
	}

	private toggle(attrs: PopoverRootAttrs) {
		const next = !this.resolveOpen(attrs);
		if (attrs.open === undefined) this.isOpen = next;
		attrs.onOpenChange?.({ open: next });
		m.redraw();
	}

	private close(attrs: PopoverRootAttrs) {
		if (attrs.open === undefined) this.isOpen = false;
		attrs.onOpenChange?.({ open: false });
		m.redraw();
	}

	private registerGlobalHandlers(attrs: PopoverRootAttrs) {
		if (!this.outsideClickHandler && (attrs.closeOnInteractOutside !== false)) {
			this.outsideClickHandler = (e: MouseEvent) => {
				if (this.rootDom && !this.rootDom.contains(e.target as Node)) {
					this.close(attrs);
				}
			};
			document.addEventListener("mousedown", this.outsideClickHandler);
		}
		if (!this.escapeHandler && (attrs.closeOnEscape !== false)) {
			this.escapeHandler = (e: KeyboardEvent) => {
				if (e.key === "Escape") this.close(attrs);
			};
			document.addEventListener("keydown", this.escapeHandler);
		}
	}

	private unregisterGlobalHandlers() {
		if (this.outsideClickHandler) {
			document.removeEventListener("mousedown", this.outsideClickHandler);
			this.outsideClickHandler = null;
		}
		if (this.escapeHandler) {
			document.removeEventListener("keydown", this.escapeHandler);
			this.escapeHandler = null;
		}
	}

	/**
	 * content vnode の children を展開し Header / Body / Footer / Arrow を分離して描画する
	 */
	private renderContentInner(contentVNode: m.Vnode<PopoverContentAttrs>, attrs: PopoverRootAttrs) {
		const children = toChildArray(contentVNode.children);
		const closeFn = () => this.close(attrs);

		return children.map((child, i) => {
			if (!isVnodeLike(child)) return child;
			const role = getRole(child);
			if (role === "header") {
				const v = child as m.Vnode<PopoverHeaderAttrs>;
				return (
					<div key={`h-${i}`} class={classNames(styles.header, v.attrs.class)} style={v.attrs.style} data-part="header">
						{v.children}
					</div>
				);
			}
			if (role === "body") {
				const v = child as m.Vnode<PopoverBodyAttrs>;
				return (
					<div key={`b-${i}`} class={classNames(styles.body, v.attrs.class)} style={v.attrs.style} data-part="body">
						{v.children}
					</div>
				);
			}
			if (role === "title") {
				const v = child as m.Vnode<PopoverTitleAttrs>;
				return (
					<div key={`t-${i}`} class={classNames(styles.title, v.attrs.class)} style={v.attrs.style} data-part="title">
						{v.children}
					</div>
				);
			}
			if (role === "footer") {
				const v = child as m.Vnode<PopoverFooterAttrs>;
				return (
					<div key={`f-${i}`} class={classNames(styles.footer, v.attrs.class)} style={v.attrs.style} data-part="footer">
						{injectCloseHandler(v.children, closeFn).map((fc: any, fi: number) => {
							if (isVnodeLike(fc) && getRole(fc) === "close-trigger") {
								const cv = fc as m.Vnode<PopoverCloseTriggerAttrs & { __closeFn?: () => void }>;
								return (
									<button
										key={`ct-${fi}`}
										type="button"
										class={classNames(styles.closeTrigger, cv.attrs.class)}
										style={cv.attrs.style}
										data-part="close-trigger"
										onclick={() => closeFn()}
									>
										{cv.children}
									</button>
								);
							}
							return fc;
						})}
					</div>
				);
			}
			if (role === "close-trigger") {
				const v = child as m.Vnode<PopoverCloseTriggerAttrs>;
				return (
					<button
						key={`ct-${i}`}
						type="button"
						class={classNames(styles.closeTrigger, v.attrs.class)}
						style={v.attrs.style}
						data-part="close-trigger"
						onclick={() => closeFn()}
					>
						{v.children}
					</button>
				);
			}
			if (role === "arrow") {
				const v = child as m.Vnode<PopoverArrowAttrs>;
				return <div key={`a-${i}`} class={classNames(styles.arrow, v.attrs.class)} style={v.attrs.style} data-part="arrow" />;
			}
			return child;
		});
	}

	public view(vnode: m.Vnode<PopoverRootAttrs>) {
		const attrs = vnode.attrs;
		const allChildren = toChildArray(vnode.children);
		const triggerVNode = allChildren.find(c => getRole(c) === "trigger") as m.Vnode<PopoverTriggerAttrs> | undefined;
		const contentVNode = allChildren.find(c => getRole(c) === "content") as m.Vnode<PopoverContentAttrs> | undefined;
		const open = this.resolveOpen(attrs);
		const placement = attrs.placement ?? "bottom";
		const size = attrs.size ?? "md";

		return (
			<span
				class={classNames(styles.root, attrs.class)}
				style={attrs.style}
				data-scope="popover"
				data-part="root"
			>
				{/* トリガー */}
				<button
					type="button"
					class={classNames(styles.trigger, triggerVNode?.attrs.class)}
					style={triggerVNode?.attrs.style}
					data-part="trigger"
					aria-haspopup="dialog"
					aria-expanded={open ? "true" : "false"}
					aria-controls={open ? this.uid : undefined}
					onclick={(e: Event) => { e.stopPropagation(); this.toggle(attrs); }}
				>
					{triggerVNode?.children}
				</button>

				{/* コンテンツ */}
				{open && contentVNode ? (
					<div
						id={this.uid}
						class={classNames(
							styles.positioner,
							styles[`placement${capitalize(placement)}`],
							styles[`size${capitalize(size)}`],
							contentVNode.attrs.class,
						)}
						style={contentVNode.attrs.style}
						data-part="content"
						role="dialog"
					>
						{this.renderContentInner(contentVNode, attrs)}
					</div>
				) : null}
			</span>
		);
	}
}

/**
 * Popover compound component のバンドル。
 */
export const Popover = {
	Root: PopoverRoot,
	Trigger: PopoverTriggerMarker,
	Content: PopoverContentMarker,
	Header: PopoverHeaderMarker,
	Body: PopoverBodyMarker,
	Title: PopoverTitleMarker,
	Footer: PopoverFooterMarker,
	CloseTrigger: PopoverCloseTriggerMarker,
	Arrow: PopoverArrowMarker,
} as const;
