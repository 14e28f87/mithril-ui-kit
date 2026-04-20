/** @jsx m */
/**
 * @fileoverview
 * Pagination — Chakra UI 現行 API 準拠の compound component 型ページネーション
 *
 * @example
 * ```tsx
 * <Pagination.Root count={100} pageSize={10} page={1}>
 *   <Pagination.PrevTrigger>前へ</Pagination.PrevTrigger>
 *   <Pagination.Items />
 *   <Pagination.NextTrigger>次へ</Pagination.NextTrigger>
 * </Pagination.Root>
 * ```
 *
 * @module Pagination
 */
/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Pagination.module.scss";
// --- マーカークラス ---
/** @class PaginationPrevTriggerMarker */
export class PaginationPrevTriggerMarker {
    view(vnode) { return m("button", { type: "button" }, vnode.children); }
}
PaginationPrevTriggerMarker.__paginationRole = "prev-trigger";
/** @class PaginationNextTriggerMarker */
export class PaginationNextTriggerMarker {
    view(vnode) { return m("button", { type: "button" }, vnode.children); }
}
PaginationNextTriggerMarker.__paginationRole = "next-trigger";
/** @class PaginationItemsMarker */
export class PaginationItemsMarker {
    view(vnode) { return m("span", null, vnode.children); }
}
PaginationItemsMarker.__paginationRole = "items";
/** @class PaginationPageTextMarker */
export class PaginationPageTextMarker {
    view(vnode) { return m("span", null, vnode.children); }
}
PaginationPageTextMarker.__paginationRole = "page-text";
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
    return v.tag?.__paginationRole;
}
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
/**
 * Bootstrap Icons `three-dots` を内包した省略記号アイコン。
 * Copyright (c) The Bootstrap Authors
 * Licensed under the MIT License.
 * Source: https://icons.getbootstrap.com/icons/three-dots/
 */
function renderPaginationEllipsisIcon() {
    return (m("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 16 16", "aria-hidden": "true", focusable: "false" },
        m("path", { d: "M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" })));
}
/**
 * ページ番号の範囲と省略記号を生成する
 */
function buildPageRange(current, totalPages, siblingCount) {
    const result = [];
    const left = Math.max(1, current - siblingCount);
    const right = Math.min(totalPages, current + siblingCount);
    if (left > 1) {
        result.push(1);
        if (left > 2)
            result.push("ellipsis");
    }
    for (let i = left; i <= right; i++) {
        result.push(i);
    }
    if (right < totalPages) {
        if (right < totalPages - 1)
            result.push("ellipsis");
        result.push(totalPages);
    }
    return result;
}
/**
 * @class PaginationRoot
 * @description
 * ページネーションのルートコンポーネント。
 * 自動でページ番号リスト＋省略記号を描画し、前後ナビゲーションを管理する。
 *
 * 主な機能:
 * - count / pageSize でページ数を自動計算
 * - siblingCount で省略表示の幅を調整
 * - variant (solid / outline / subtle)
 * - size (xs / sm / md / lg)
 * - 制御/非制御両対応
 *
 * @example
 * <Pagination.Root count={200} pageSize={20} defaultPage={3}>
 *   <Pagination.PrevTrigger>←</Pagination.PrevTrigger>
 *   <Pagination.Items />
 *   <Pagination.NextTrigger>→</Pagination.NextTrigger>
 * </Pagination.Root>
 */
export class PaginationRoot {
    constructor() {
        this.currentPage = 1;
    }
    oninit(vnode) {
        this.currentPage = this.resolvePage(vnode.attrs, true);
    }
    isControlled(attrs) {
        return attrs.page !== undefined;
    }
    resolvePage(attrs, preferDefault) {
        if (this.isControlled(attrs))
            return attrs.page;
        if (preferDefault && attrs.defaultPage !== undefined)
            return attrs.defaultPage;
        return this.currentPage;
    }
    totalPages(attrs) {
        return Math.max(1, Math.ceil(attrs.count / (attrs.pageSize ?? 10)));
    }
    setPage(attrs, page) {
        const total = this.totalPages(attrs);
        const clamped = Math.max(1, Math.min(page, total));
        if (!this.isControlled(attrs))
            this.currentPage = clamped;
        attrs.onPageChange?.({ page: clamped });
        if (!this.isControlled(attrs))
            m.redraw();
    }
    view(vnode) {
        const attrs = vnode.attrs;
        const allChildren = toChildArray(vnode.children);
        const current = this.resolvePage(attrs, false);
        const total = this.totalPages(attrs);
        const siblingCount = attrs.siblingCount ?? 1;
        const variant = attrs.variant ?? "outline";
        const size = attrs.size ?? "md";
        const pages = buildPageRange(current, total, siblingCount);
        const prevVNode = allChildren.find(c => getRole(c) === "prev-trigger");
        const nextVNode = allChildren.find(c => getRole(c) === "next-trigger");
        const pageTextVNode = allChildren.find(c => getRole(c) === "page-text");
        const hasItems = allChildren.some(c => getRole(c) === "items");
        return (m("nav", { class: classNames(styles.root, styles[`variant${capitalize(variant)}`], styles[`size${capitalize(size)}`], attrs.class), style: attrs.style, "aria-label": "pagination", "data-scope": "pagination", "data-part": "root" },
            prevVNode ? (m("button", { type: "button", class: classNames(styles.prevTrigger, styles.pageButton, prevVNode.attrs.class), style: prevVNode.attrs.style, "data-part": "prev-trigger", disabled: current <= 1, onclick: () => this.setPage(attrs, current - 1) }, prevVNode.children)) : null,
            hasItems ? (pages.map((item, i) => item === "ellipsis" ? (m("span", { key: `e-${i}`, class: styles.ellipsis, "data-part": "ellipsis" }, renderPaginationEllipsisIcon())) : (m("button", { key: item, type: "button", class: classNames(styles.pageButton, { [styles.active]: item === current }), "data-part": "item", "data-selected": item === current ? "true" : undefined, "aria-current": item === current ? "page" : undefined, onclick: () => this.setPage(attrs, item) }, item)))) : null,
            pageTextVNode ? (m("span", { class: classNames(styles.pageText, pageTextVNode.attrs.class), style: pageTextVNode.attrs.style, "data-part": "page-text" }, (() => {
                const fmt = pageTextVNode.attrs.format ?? "short";
                switch (fmt) {
                    case "compact": return `${current}/${total}`;
                    case "long": return `${current} / ${total} ページ (${attrs.count}件)`;
                    default: return `${current} / ${total}`;
                }
            })())) : null,
            nextVNode ? (m("button", { type: "button", class: classNames(styles.nextTrigger, styles.pageButton, nextVNode.attrs.class), style: nextVNode.attrs.style, "data-part": "next-trigger", disabled: current >= total, onclick: () => this.setPage(attrs, current + 1) }, nextVNode.children)) : null));
    }
}
/**
 * Pagination compound component のバンドル。
 */
export const Pagination = {
    Root: PaginationRoot,
    PrevTrigger: PaginationPrevTriggerMarker,
    NextTrigger: PaginationNextTriggerMarker,
    Items: PaginationItemsMarker,
    PageText: PaginationPageTextMarker,
};
