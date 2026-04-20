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
/** @class TooltipTriggerMarker */
export class TooltipTriggerMarker {
    view(vnode) { return m("span", null, vnode.children); }
}
TooltipTriggerMarker.__tooltipRole = "trigger";
/** @class TooltipContentMarker */
export class TooltipContentMarker {
    view(vnode) { return m("div", null, vnode.children); }
}
TooltipContentMarker.__tooltipRole = "content";
/** @class TooltipArrowMarker */
export class TooltipArrowMarker {
    view(vnode) { return m("div", null); }
}
TooltipArrowMarker.__tooltipRole = "arrow";
// --- ユーティリティ ---
function toChildArray(children) {
    if (Array.isArray(children))
        return children.flatMap(c => toChildArray(c));
    if (children === null || children === undefined || typeof children === "boolean")
        return [];
    return [children];
}
function isVnodeLike(v) {
    return !!v && typeof v === "object" && "tag" in v;
}
function getRole(v) {
    if (!isVnodeLike(v))
        return undefined;
    return v.tag?.__tooltipRole;
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
export class TooltipRoot {
    constructor() {
        this.isOpen = false;
        this.openTimer = null;
        this.closeTimer = null;
        this.uid = `muk-tooltip-${TooltipRoot.seed++}`;
    }
    oninit(vnode) {
        this.isOpen = vnode.attrs.defaultOpen ?? false;
    }
    onremove() {
        this.clearTimers();
    }
    clearTimers() {
        if (this.openTimer) {
            clearTimeout(this.openTimer);
            this.openTimer = null;
        }
        if (this.closeTimer) {
            clearTimeout(this.closeTimer);
            this.closeTimer = null;
        }
    }
    resolveOpen(attrs) {
        return attrs.open !== undefined ? attrs.open : this.isOpen;
    }
    show(attrs) {
        if (attrs.disabled)
            return;
        if (this.closeTimer) {
            clearTimeout(this.closeTimer);
            this.closeTimer = null;
        }
        const delay = attrs.openDelay ?? 400;
        this.openTimer = setTimeout(() => {
            this.openTimer = null;
            if (attrs.open === undefined)
                this.isOpen = true;
            attrs.onOpenChange?.({ open: true });
            m.redraw();
        }, delay);
    }
    hide(attrs) {
        if (this.openTimer) {
            clearTimeout(this.openTimer);
            this.openTimer = null;
        }
        const delay = attrs.closeDelay ?? 150;
        this.closeTimer = setTimeout(() => {
            this.closeTimer = null;
            if (attrs.open === undefined)
                this.isOpen = false;
            attrs.onOpenChange?.({ open: false });
            m.redraw();
        }, delay);
    }
    view(vnode) {
        const attrs = vnode.attrs;
        const allChildren = toChildArray(vnode.children);
        const triggerVNode = allChildren.find(c => getRole(c) === "trigger");
        const contentVNode = allChildren.find(c => getRole(c) === "content");
        const open = this.resolveOpen(attrs);
        const placement = attrs.placement ?? "top";
        const showArrow = attrs.showArrow ?? false;
        return (m("span", { class: classNames(styles.root, attrs.class), style: attrs.style, "data-scope": "tooltip", "data-part": "root" },
            m("span", { class: classNames(styles.trigger, triggerVNode?.attrs.class), style: triggerVNode?.attrs.style, "data-part": "trigger", "aria-describedby": open ? this.uid : undefined, onmouseenter: () => this.show(attrs), onmouseleave: () => this.hide(attrs), onfocusin: () => this.show(attrs), onfocusout: () => this.hide(attrs), tabindex: 0 }, triggerVNode?.children),
            open && contentVNode ? (m("div", { id: this.uid, class: classNames(styles.positioner, styles[`placement${placement.charAt(0).toUpperCase() + placement.slice(1)}`]), "data-part": "positioner", role: "tooltip", onmouseenter: () => { if (attrs.interactive) {
                    this.clearTimers();
                } }, onmouseleave: () => { if (attrs.interactive) {
                    this.hide(attrs);
                } } },
                showArrow && m("div", { class: styles.arrow, "data-part": "arrow" }),
                m("div", { class: classNames(styles.content, contentVNode.attrs.class), style: contentVNode.attrs.style, "data-part": "content" }, contentVNode.children))) : null));
    }
}
TooltipRoot.seed = 1;
/**
 * Tooltip compound component のバンドル。
 */
export const Tooltip = {
    Root: TooltipRoot,
    Trigger: TooltipTriggerMarker,
    Content: TooltipContentMarker,
    Arrow: TooltipArrowMarker,
};
