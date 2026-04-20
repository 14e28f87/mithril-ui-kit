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
// --- マーカークラス ---
/** @class PopoverTriggerMarker */
export class PopoverTriggerMarker {
    view(vnode) { return m("span", null, vnode.children); }
}
PopoverTriggerMarker.__popoverRole = "trigger";
/** @class PopoverContentMarker */
export class PopoverContentMarker {
    view(vnode) { return m("div", null, vnode.children); }
}
PopoverContentMarker.__popoverRole = "content";
/** @class PopoverHeaderMarker */
export class PopoverHeaderMarker {
    view(vnode) { return m("div", null, vnode.children); }
}
PopoverHeaderMarker.__popoverRole = "header";
/** @class PopoverBodyMarker */
export class PopoverBodyMarker {
    view(vnode) { return m("div", null, vnode.children); }
}
PopoverBodyMarker.__popoverRole = "body";
/** @class PopoverTitleMarker */
export class PopoverTitleMarker {
    view(vnode) { return m("span", null, vnode.children); }
}
PopoverTitleMarker.__popoverRole = "title";
/** @class PopoverFooterMarker */
export class PopoverFooterMarker {
    view(vnode) { return m("div", null, vnode.children); }
}
PopoverFooterMarker.__popoverRole = "footer";
/** @class PopoverCloseTriggerMarker */
export class PopoverCloseTriggerMarker {
    view(vnode) { return m("button", { type: "button" }, vnode.children); }
}
PopoverCloseTriggerMarker.__popoverRole = "close-trigger";
/** @class PopoverArrowMarker */
export class PopoverArrowMarker {
    view(vnode) { return m("div", null); }
}
PopoverArrowMarker.__popoverRole = "arrow";
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
    return v.tag?.__popoverRole;
}
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
/**
 * CloseTrigger を children 内から再帰的に探し、onclick を注入して返す
 */
function injectCloseHandler(children, closeFn) {
    return toChildArray(children).map(child => {
        if (!isVnodeLike(child))
            return child;
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
export class PopoverRoot {
    constructor() {
        this.isOpen = false;
        this.uid = `muk-popover-${PopoverRoot.seed++}`;
        this.outsideClickHandler = null;
        this.escapeHandler = null;
        this.rootDom = null;
    }
    oninit(vnode) {
        this.isOpen = vnode.attrs.defaultOpen ?? false;
    }
    oncreate(vnode) {
        this.rootDom = vnode.dom;
        if (this.resolveOpen(vnode.attrs))
            this.registerGlobalHandlers(vnode.attrs);
    }
    onupdate(vnode) {
        this.rootDom = vnode.dom;
        if (this.resolveOpen(vnode.attrs)) {
            this.registerGlobalHandlers(vnode.attrs);
        }
        else {
            this.unregisterGlobalHandlers();
        }
    }
    onremove() {
        this.unregisterGlobalHandlers();
    }
    resolveOpen(attrs) {
        return attrs.open !== undefined ? attrs.open : this.isOpen;
    }
    toggle(attrs) {
        const next = !this.resolveOpen(attrs);
        if (attrs.open === undefined)
            this.isOpen = next;
        attrs.onOpenChange?.({ open: next });
        m.redraw();
    }
    close(attrs) {
        if (attrs.open === undefined)
            this.isOpen = false;
        attrs.onOpenChange?.({ open: false });
        m.redraw();
    }
    registerGlobalHandlers(attrs) {
        if (!this.outsideClickHandler && (attrs.closeOnInteractOutside !== false)) {
            this.outsideClickHandler = (e) => {
                if (this.rootDom && !this.rootDom.contains(e.target)) {
                    this.close(attrs);
                }
            };
            document.addEventListener("mousedown", this.outsideClickHandler);
        }
        if (!this.escapeHandler && (attrs.closeOnEscape !== false)) {
            this.escapeHandler = (e) => {
                if (e.key === "Escape")
                    this.close(attrs);
            };
            document.addEventListener("keydown", this.escapeHandler);
        }
    }
    unregisterGlobalHandlers() {
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
    renderContentInner(contentVNode, attrs) {
        const children = toChildArray(contentVNode.children);
        const closeFn = () => this.close(attrs);
        return children.map((child, i) => {
            if (!isVnodeLike(child))
                return child;
            const role = getRole(child);
            if (role === "header") {
                const v = child;
                return (m("div", { key: `h-${i}`, class: classNames(styles.header, v.attrs.class), style: v.attrs.style, "data-part": "header" }, v.children));
            }
            if (role === "body") {
                const v = child;
                return (m("div", { key: `b-${i}`, class: classNames(styles.body, v.attrs.class), style: v.attrs.style, "data-part": "body" }, v.children));
            }
            if (role === "title") {
                const v = child;
                return (m("div", { key: `t-${i}`, class: classNames(styles.title, v.attrs.class), style: v.attrs.style, "data-part": "title" }, v.children));
            }
            if (role === "footer") {
                const v = child;
                return (m("div", { key: `f-${i}`, class: classNames(styles.footer, v.attrs.class), style: v.attrs.style, "data-part": "footer" }, injectCloseHandler(v.children, closeFn).map((fc, fi) => {
                    if (isVnodeLike(fc) && getRole(fc) === "close-trigger") {
                        const cv = fc;
                        return (m("button", { key: `ct-${fi}`, type: "button", class: classNames(styles.closeTrigger, cv.attrs.class), style: cv.attrs.style, "data-part": "close-trigger", onclick: () => closeFn() }, cv.children));
                    }
                    return fc;
                })));
            }
            if (role === "close-trigger") {
                const v = child;
                return (m("button", { key: `ct-${i}`, type: "button", class: classNames(styles.closeTrigger, v.attrs.class), style: v.attrs.style, "data-part": "close-trigger", onclick: () => closeFn() }, v.children));
            }
            if (role === "arrow") {
                const v = child;
                return m("div", { key: `a-${i}`, class: classNames(styles.arrow, v.attrs.class), style: v.attrs.style, "data-part": "arrow" });
            }
            return child;
        });
    }
    view(vnode) {
        const attrs = vnode.attrs;
        const allChildren = toChildArray(vnode.children);
        const triggerVNode = allChildren.find(c => getRole(c) === "trigger");
        const contentVNode = allChildren.find(c => getRole(c) === "content");
        const open = this.resolveOpen(attrs);
        const placement = attrs.placement ?? "bottom";
        const size = attrs.size ?? "md";
        return (m("span", { class: classNames(styles.root, attrs.class), style: attrs.style, "data-scope": "popover", "data-part": "root" },
            m("button", { type: "button", class: classNames(styles.trigger, triggerVNode?.attrs.class), style: triggerVNode?.attrs.style, "data-part": "trigger", "aria-haspopup": "dialog", "aria-expanded": open ? "true" : "false", "aria-controls": open ? this.uid : undefined, onclick: (e) => { e.stopPropagation(); this.toggle(attrs); } }, triggerVNode?.children),
            open && contentVNode ? (m("div", { id: this.uid, class: classNames(styles.positioner, styles[`placement${capitalize(placement)}`], styles[`size${capitalize(size)}`], contentVNode.attrs.class), style: contentVNode.attrs.style, "data-part": "content", role: "dialog" }, this.renderContentInner(contentVNode, attrs))) : null));
    }
}
PopoverRoot.seed = 1;
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
};
