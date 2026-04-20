/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./HoverCard.module.scss";

/**
 * HoverCard サイズ
 */
export type HoverCardSize = "xs" | "sm" | "md" | "lg";

/* ─── Role Types ─── */
type HoverCardRole = "trigger" | "positioner" | "content" | "arrow" | "arrowTip";

/* ─── Attrs ─── */
export interface HoverCardRootAttrs {
	/** 表示遅延 (ms) */
	openDelay?: number;
	/** 非表示遅延 (ms) */
	closeDelay?: number;
	/** サイズ */
	size?: HoverCardSize;
	/** 配置 */
	placement?: "top" | "bottom" | "left" | "right";
	/** 追加クラス */
	class?: string;
	[key: string]: any;
}

function capitalize(s: string): string {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

/* ─── マーカークラス ─── */
class HCTriggerMarker { static __hcRole: HoverCardRole = "trigger"; view() { return null; } }
class HCPositionerMarker { static __hcRole: HoverCardRole = "positioner"; view() { return null; } }
class HCContentMarker { static __hcRole: HoverCardRole = "content"; view() { return null; } }
class HCArrowMarker { static __hcRole: HoverCardRole = "arrow"; view() { return null; } }
class HCArrowTipMarker { static __hcRole: HoverCardRole = "arrowTip"; view() { return null; } }

/**
 * HoverCard Root コンポーネント — ホバーで表示されるカード
 *
 * @example
 * ```tsx
 * <HoverCard.Root openDelay={200} closeDelay={150}>
 *   <HoverCard.Trigger>ホバーしてください</HoverCard.Trigger>
 *   <HoverCard.Content>
 *     カードの内容...
 *   </HoverCard.Content>
 * </HoverCard.Root>
 * ```
 */
class HoverCardRoot implements m.ClassComponent<HoverCardRootAttrs> {
	private isOpen = false;
	private openTimer: ReturnType<typeof setTimeout> | null = null;
	private closeTimer: ReturnType<typeof setTimeout> | null = null;

	onremove() {
		if (this.openTimer) clearTimeout(this.openTimer);
		if (this.closeTimer) clearTimeout(this.closeTimer);
	}

	view(vnode: m.Vnode<HoverCardRootAttrs>) {
		const {
			openDelay = 600,
			closeDelay = 300,
			size = "md",
			placement = "bottom",
			class: className,
			...rest
		} = vnode.attrs;

		const children = (Array.isArray(vnode.children) ? (vnode.children as any[]) : [vnode.children]).flat(Infinity);
		let triggerContent: m.Children = null;
		let cardContent: m.Children = null;

		for (const child of children) {
			if (child && typeof child === "object" && "tag" in child) {
				const tag = (child as m.Vnode<any>).tag as any;
				const cv = child as m.Vnode<any>;
				if (tag?.__hcRole === "trigger") {
					triggerContent = cv.children;
				}
				if (tag?.__hcRole === "content" || tag?.__hcRole === "positioner") {
					cardContent = tag?.__hcRole === "positioner"
						? this.extractContent(cv.children)
						: cv.children;
				}
			}
		}

		return (
			<div
				{...rest}
				class={classNames(styles.root, className)}
				onmouseenter={() => this.startOpen(openDelay)}
				onmouseleave={() => this.startClose(closeDelay)}
			>
				<div class={styles.trigger}>{triggerContent}</div>
				{this.isOpen && (
					<div
						class={classNames(
							styles.content,
							(styles as any)[`size${capitalize(size)}`],
							(styles as any)[`placement${capitalize(placement)}`]
						)}
						onmouseenter={() => this.cancelClose()}
						onmouseleave={() => this.startClose(closeDelay)}
					>
						{cardContent}
					</div>
				)}
			</div>
		);
	}

	private extractContent(children: m.Children): m.Children {
		const arr = (Array.isArray(children) ? (children as any[]) : [children]).flat(Infinity);
		for (const child of arr) {
			if (child && typeof child === "object" && "tag" in child) {
				const tag = (child as m.Vnode<any>).tag as any;
				if (tag?.__hcRole === "content") return (child as m.Vnode<any>).children;
			}
		}
		return children;
	}

	private startOpen(delay: number) {
		if (this.closeTimer) { clearTimeout(this.closeTimer); this.closeTimer = null; }
		if (this.isOpen) return;
		this.openTimer = setTimeout(() => {
			this.isOpen = true;
			m.redraw();
		}, delay);
	}

	private startClose(delay: number) {
		if (this.openTimer) { clearTimeout(this.openTimer); this.openTimer = null; }
		this.closeTimer = setTimeout(() => {
			this.isOpen = false;
			m.redraw();
		}, delay);
	}

	private cancelClose() {
		if (this.closeTimer) { clearTimeout(this.closeTimer); this.closeTimer = null; }
	}
}

/**
 * HoverCard コンポーネント名前空間
 */
export const HoverCard = {
	Root: HoverCardRoot,
	Trigger: HCTriggerMarker,
	Positioner: HCPositionerMarker,
	Content: HCContentMarker,
	Arrow: HCArrowMarker,
	ArrowTip: HCArrowTipMarker,
} as const;

export { HoverCardRoot };
