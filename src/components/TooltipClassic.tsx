/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import { autoUpdate, computePosition, flip, offset, shift, arrow, type Placement } from "@floating-ui/dom";
import styles from "./TooltipClassic.module.scss";

export type TooltipClassicPlacement = Placement;
export type TooltipClassicTrigger = "hover" | "click" | "focus";

export type TooltipClassicAttrs = {
	content: m.Children;
	placement?: TooltipClassicPlacement;
	trigger?: TooltipClassicTrigger | TooltipClassicTrigger[];
	open?: boolean;
	defaultOpen?: boolean;
	offset?: number;
	class?: string;
	style?: Record<string, string>;
	showDelay?: number;
	hideDelay?: number;
	disabled?: boolean;
	id?: string;
	onOpenChange?: (open: boolean) => void;
};

export class TooltipClassic implements m.ClassComponent<TooltipClassicAttrs> {
	private open = false;
	private referenceEl?: HTMLElement;
	private floatingEl?: HTMLElement;
	private arrowEl?: HTMLElement;
	private portal?: HTMLElement;
	private cleanupAutoUpdate?: () => void;
	private showTimer: number | null = null;
	private hideTimer: number | null = null;
	private uid = `mku-tooltip-${TooltipClassic.seed++}`;
	private static seed = 1;

	oninit(vnode: m.Vnode<TooltipClassicAttrs>) {
		this.open = vnode.attrs.defaultOpen ?? false;
	}

	oncreate(vnode: m.VnodeDOM<TooltipClassicAttrs>) {
		this.ensurePortal();
		this.renderFloating(vnode.attrs);
	}

	onupdate(vnode: m.VnodeDOM<TooltipClassicAttrs>) {
		this.renderFloating(vnode.attrs);
	}

	onremove() {
		this.clearTimers();
		this.teardownAutoUpdate();
		this.destroyPortal();
	}

	view(vnode: m.Vnode<TooltipClassicAttrs>) {
		const triggers = this.normalizeTriggers(vnode.attrs.trigger);
		const isOpen = this.getOpenState(vnode.attrs);
		const describedby = isOpen && !vnode.attrs.disabled ? vnode.attrs.id ?? this.uid : undefined;

		return (
			<span
				class="mku-tooltip-trigger"
				aria-describedby={describedby}
				onmouseenter={triggers.hover ? () => this.handleShow(vnode.attrs) : undefined}
				onmouseleave={triggers.hover ? () => this.handleHide(vnode.attrs) : undefined}
				onfocusin={triggers.focus ? () => this.handleShow(vnode.attrs) : undefined}
				onfocusout={triggers.focus ? () => this.handleHide(vnode.attrs) : undefined}
				onclick={triggers.click ? () => this.handleToggle(vnode.attrs) : undefined}
				oncreate={(v) => {
					this.referenceEl = v.dom as HTMLElement;
					this.renderFloating(vnode.attrs);
				}}
				onupdate={(v) => {
					this.referenceEl = v.dom as HTMLElement;
				}}
			>
				{vnode.children}
			</span>
		);
	}

	private normalizeTriggers(input?: TooltipClassicTrigger | TooltipClassicTrigger[]) {
		const triggers = new Set<TooltipClassicTrigger>();
		if (!input) {
			triggers.add("hover");
			triggers.add("focus");
		} else if (Array.isArray(input)) {
			input.forEach((t) => triggers.add(t));
		} else {
			triggers.add(input);
		}
		return {
			hover: triggers.has("hover"),
			click: triggers.has("click"),
			focus: triggers.has("focus"),
		};
	}

	private handleShow(attrs: TooltipClassicAttrs) {
		if (attrs.disabled) return;
		this.clearTimers();
		const delay = attrs.showDelay ?? 80;
		if (delay <= 0) {
			this.setOpen(true, attrs);
		} else {
			this.showTimer = window.setTimeout(() => this.setOpen(true, attrs), delay);
		}
	}

	private handleHide(attrs: TooltipClassicAttrs) {
		this.clearTimers();
		const delay = attrs.hideDelay ?? 120;
		if (delay <= 0) {
			this.setOpen(false, attrs);
		} else {
			this.hideTimer = window.setTimeout(() => this.setOpen(false, attrs), delay);
		}
	}

	private handleToggle(attrs: TooltipClassicAttrs) {
		const next = !this.getOpenState(attrs);
		next ? this.handleShow(attrs) : this.handleHide(attrs);
	}

	private clearTimers() {
		if (this.showTimer !== null) window.clearTimeout(this.showTimer);
		if (this.hideTimer !== null) window.clearTimeout(this.hideTimer);
		this.showTimer = null;
		this.hideTimer = null;
	}

	private isControlled(attrs: TooltipClassicAttrs) {
		return typeof attrs.open === "boolean";
	}

	private getOpenState(attrs: TooltipClassicAttrs) {
		return this.isControlled(attrs) ? !!attrs.open : this.open;
	}

	private setOpen(next: boolean, attrs: TooltipClassicAttrs) {
		const prev = this.getOpenState(attrs);
		if (!this.isControlled(attrs)) {
			this.open = next;
		}
		if (prev !== next) {
			attrs.onOpenChange?.(next);
		}
		this.renderFloating(attrs);
	}

	private ensurePortal() {
		if (!this.portal) {
			this.portal = document.createElement("div");
			document.body.appendChild(this.portal);
		}
	}

	private destroyPortal() {
		if (this.portal) {
			m.render(this.portal, null);
			this.portal.remove();
			this.portal = undefined;
		}
		this.floatingEl = undefined;
		this.arrowEl = undefined;
	}

	private renderFloating(attrs: TooltipClassicAttrs) {
		if (!this.portal) return;
		const isOpen = this.getOpenState(attrs) && !attrs.disabled;
		if (!isOpen) {
			this.teardownAutoUpdate();
			m.render(this.portal, null);
			return;
		}

		m.render(
			this.portal,
			<div
				class={classNames(styles["mku-tooltip"], { [styles.show]: isOpen }, attrs.class)}
				role="tooltip"
				id={attrs.id ?? this.uid}
				style={attrs.style}
				data-placement={attrs.placement ?? "top"}
				oncreate={(v) => {
					this.floatingEl = v.dom as HTMLElement;
					this.updatePosition(attrs);
				}}
				onupdate={(v) => {
					this.floatingEl = v.dom as HTMLElement;
				}}
			>
				<div class={styles["mku-tooltip-inner"]}>{attrs.content}</div>
				<div
					class={styles["mku-tooltip-arrow"]}
					oncreate={(v) => (this.arrowEl = v.dom as HTMLElement)}
					onupdate={(v) => (this.arrowEl = v.dom as HTMLElement)}
				></div>
			</div>
		);

		this.setupAutoUpdate(attrs);
		this.updatePosition(attrs);
	}

	private setupAutoUpdate(attrs: TooltipClassicAttrs) {
		if (this.cleanupAutoUpdate || !this.referenceEl || !this.floatingEl) return;
		this.cleanupAutoUpdate = autoUpdate(this.referenceEl, this.floatingEl, () => {
			this.updatePosition(attrs);
		});
	}

	private teardownAutoUpdate() {
		if (this.cleanupAutoUpdate) {
			this.cleanupAutoUpdate();
			this.cleanupAutoUpdate = undefined;
		}
	}

	private async updatePosition(attrs: TooltipClassicAttrs) {
		if (!this.referenceEl || !this.floatingEl) return;

		const middleware = [offset(attrs.offset ?? 8), flip({ padding: 8 }), shift({ padding: 8 })];

		if (this.arrowEl) {
			middleware.push(arrow({ element: this.arrowEl }));
		}

		const { x, y, placement, middlewareData } = await computePosition(this.referenceEl, this.floatingEl, {
			placement: attrs.placement ?? "top",
			middleware,
		});

		Object.assign(this.floatingEl.style, {
			left: `${x}px`,
			top: `${y}px`,
			position: "absolute",
		});

		this.floatingEl.dataset.placement = placement;

		if (this.arrowEl && middlewareData.arrow) {
			const { x: ax, y: ay } = middlewareData.arrow;
			this.arrowEl.style.left = ax != null ? `${ax}px` : "";
			this.arrowEl.style.top = ay != null ? `${ay}px` : "";
			this.arrowEl.style.right = "";
			this.arrowEl.style.bottom = "";

			const basePlacement = placement.split("-")[0] as "top" | "bottom" | "left" | "right";
			const staticSide: Record<string, string> = {
				top: "bottom",
				bottom: "top",
				left: "right",
				right: "left",
			};
			const side = staticSide[basePlacement];
			if (side) {
				(this.arrowEl.style as any)[side] = "-5px";
			}
		}
	}
}
