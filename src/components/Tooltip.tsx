/** @jsx m */
/**
 * @fileoverview
 * Tooltip — Chakra UI 現行 API 準拠の compound component 型ツールチップ
 *
 * ホバーまたはフォーカスでコンテンツを浮かせて表示する。
 * ポジショニングは CSS のみで実装（floating-ui 不使用）。
 *
 * @example
 * ```tsx
 * <Tooltip.Root>
 *   <Tooltip.Trigger>ホバーしてね</Tooltip.Trigger>
 *   <Tooltip.Content>ツールチップの内容</Tooltip.Content>
 * </Tooltip.Root>
 * ```
 *
 * @module Tooltip
 */
/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Tooltip.module.scss";

/** ツールチップの配置方向 */
export type TooltipPlacement = "top" | "bottom" | "left" | "right";

/**
 * 開閉イベントの詳細
 */
export type TooltipOpenChangeDetails = {
	open: boolean;
};

/**
 * Tooltip.Root に渡せる属性
 */
export type TooltipRootAttrs = {
	/** 制御モード: 開閉状態 */
	open?: boolean;
	/** 非制御モード: 初期開閉状態 */
	defaultOpen?: boolean;
	/** 開閉コールバック */
	onOpenChange?: (details: TooltipOpenChangeDetails) => void;
	/** 表示遅延（ms, デフォルト: 400） */
	openDelay?: number;
	/** 非表示遅延（ms, デフォルト: 150） */
	closeDelay?: number;
	/** 配置方向（デフォルト: "top"） */
	placement?: TooltipPlacement;
	/** 無効化 */
	disabled?: boolean;
	/** ツールチップ上にホバーしても閉じない */
	interactive?: boolean;
	/** 矢印を表示するか */
	showArrow?: boolean;
	class?: string;
	style?: Record<string, string>;
};

/** Tooltip.Trigger に渡せる属性 */
export type TooltipTriggerAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Tooltip.Content に渡せる属性 */
export type TooltipContentAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Tooltip.Arrow に渡せる属性 */
export type TooltipArrowAttrs = {
	class?: string;
	style?: Record<string, string>;
};

type TooltipRole = "trigger" | "content" | "arrow";

/** @class TooltipTriggerMarker */
export class TooltipTriggerMarker implements m.Component<TooltipTriggerAttrs> {
	public static __tooltipRole: TooltipRole = "trigger";
	public view(vnode: m.Vnode<TooltipTriggerAttrs>) { return <span>{vnode.children}</span>; }
}

/** @class TooltipContentMarker */
export class TooltipContentMarker implements m.Component<TooltipContentAttrs> {
	public static __tooltipRole: TooltipRole = "content";
	public view(vnode: m.Vnode<TooltipContentAttrs>) { return <div>{vnode.children}</div>; }
}

/** @class TooltipArrowMarker */
export class TooltipArrowMarker implements m.Component<TooltipArrowAttrs> {
	public static __tooltipRole: TooltipRole = "arrow";
	public view(vnode: m.Vnode<TooltipArrowAttrs>) { return <div />; }
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

function getRole(v: any): TooltipRole | undefined {
	if (!isVnodeLike(v)) return undefined;
	return (v.tag as any)?.__tooltipRole;
}

/**
 * @class TooltipRoot
 * @description
 * ツールチップのルートコンポーネント。
 * ホバー/フォーカスで Tooltip.Content を表示する。
 *
 * 主な機能:
 * - placement (top / bottom / left / right)
 * - openDelay / closeDelay
 * - interactive（ツールチップにマウスが乗っても閉じない）
 * - showArrow
 * - 制御/非制御両対応
 * - disabled
 *
 * @example
 * <Tooltip.Root placement="bottom" openDelay={200}>
 *   <Tooltip.Trigger>ホバーで表示</Tooltip.Trigger>
 *   <Tooltip.Content>ヒントテキスト</Tooltip.Content>
 * </Tooltip.Root>
 */
export class TooltipRoot implements m.Component<TooltipRootAttrs> {
	private isOpen = false;
	private openTimer: ReturnType<typeof setTimeout> | null = null;
	private closeTimer: ReturnType<typeof setTimeout> | null = null;
	private readonly uid = `muk-tooltip-${TooltipRoot.seed++}`;
	private static seed = 1;

	public oninit(vnode: m.Vnode<TooltipRootAttrs>) {
		this.isOpen = vnode.attrs.defaultOpen ?? false;
	}

	public onremove() {
		this.clearTimers();
	}

	private clearTimers() {
		if (this.openTimer) { clearTimeout(this.openTimer); this.openTimer = null; }
		if (this.closeTimer) { clearTimeout(this.closeTimer); this.closeTimer = null; }
	}

	private resolveOpen(attrs: TooltipRootAttrs): boolean {
		return attrs.open !== undefined ? attrs.open : this.isOpen;
	}

	private show(attrs: TooltipRootAttrs) {
		if (attrs.disabled) return;
		if (this.closeTimer) { clearTimeout(this.closeTimer); this.closeTimer = null; }
		const delay = attrs.openDelay ?? 400;
		this.openTimer = setTimeout(() => {
			this.openTimer = null;
			if (attrs.open === undefined) this.isOpen = true;
			attrs.onOpenChange?.({ open: true });
			m.redraw();
		}, delay);
	}

	private hide(attrs: TooltipRootAttrs) {
		if (this.openTimer) { clearTimeout(this.openTimer); this.openTimer = null; }
		const delay = attrs.closeDelay ?? 150;
		this.closeTimer = setTimeout(() => {
			this.closeTimer = null;
			if (attrs.open === undefined) this.isOpen = false;
			attrs.onOpenChange?.({ open: false });
			m.redraw();
		}, delay);
	}

	public view(vnode: m.Vnode<TooltipRootAttrs>) {
		const attrs = vnode.attrs;
		const allChildren = toChildArray(vnode.children);
		const triggerVNode = allChildren.find(c => getRole(c) === "trigger") as m.Vnode<TooltipTriggerAttrs> | undefined;
		const contentVNode = allChildren.find(c => getRole(c) === "content") as m.Vnode<TooltipContentAttrs> | undefined;
		const open = this.resolveOpen(attrs);
		const placement = attrs.placement ?? "top";
		const showArrow = attrs.showArrow ?? false;

		return (
			<span
				class={classNames(styles.root, attrs.class)}
				style={attrs.style}
				data-scope="tooltip"
				data-part="root"
			>
				{/* トリガー */}
				<span
					class={classNames(styles.trigger, triggerVNode?.attrs.class)}
					style={triggerVNode?.attrs.style}
					data-part="trigger"
					aria-describedby={open ? this.uid : undefined}
					onmouseenter={() => this.show(attrs)}
					onmouseleave={() => this.hide(attrs)}
					onfocusin={() => this.show(attrs)}
					onfocusout={() => this.hide(attrs)}
					tabindex={0}
				>
					{triggerVNode?.children}
				</span>

				{/* コンテンツ */}
				{open && contentVNode ? (
					<div
						id={this.uid}
						class={classNames(styles.positioner, styles[`placement${placement.charAt(0).toUpperCase() + placement.slice(1)}`])}
						data-part="positioner"
						role="tooltip"
						onmouseenter={() => { if (attrs.interactive) { this.clearTimers(); } }}
						onmouseleave={() => { if (attrs.interactive) { this.hide(attrs); } }}
					>
						{showArrow && <div class={styles.arrow} data-part="arrow" />}
						<div
							class={classNames(styles.content, contentVNode.attrs.class)}
							style={contentVNode.attrs.style}
							data-part="content"
						>
							{contentVNode.children}
						</div>
					</div>
				) : null}
			</span>
		);
	}
}

/**
 * Tooltip compound component のバンドル。
 */
export const Tooltip = {
	Root: TooltipRoot,
	Trigger: TooltipTriggerMarker,
	Content: TooltipContentMarker,
	Arrow: TooltipArrowMarker,
} as const;
