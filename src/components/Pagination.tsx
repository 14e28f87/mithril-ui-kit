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

/** ページネーションのサイズ */
export type PaginationSize = "xs" | "sm" | "md" | "lg";

/** ページネーションのバリエーション */
export type PaginationVariant = "solid" | "outline" | "subtle";

/**
 * ページ変更イベントの詳細
 */
export type PaginationPageChangeDetails = {
	page: number;
};

/**
 * Pagination.Root に渡せる属性
 */
export type PaginationRootAttrs = {
	/** 総アイテム数 */
	count: number;
	/** 1ページあたりの表示数（デフォルト: 10） */
	pageSize?: number;
	/** 制御モード: 現在のページ（1始まり） */
	page?: number;
	/** 非制御モード: 初期ページ */
	defaultPage?: number;
	/** ページ変更コールバック */
	onPageChange?: (details: PaginationPageChangeDetails) => void;
	/** 省略表示する前後のページ数（デフォルト: 1） */
	siblingCount?: number;
	/** サイズ（デフォルト: "md"） */
	size?: PaginationSize;
	/** バリエーション（デフォルト: "outline"） */
	variant?: PaginationVariant;
	class?: string;
	style?: Record<string, string>;
};

/** Pagination.PrevTrigger に渡せる属性 */
export type PaginationPrevTriggerAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Pagination.NextTrigger に渡せる属性 */
export type PaginationNextTriggerAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Pagination.Items に渡せる属性 */
export type PaginationItemsAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Pagination.PageText に渡せる属性 */
export type PaginationPageTextAttrs = {
	/** 表示フォーマット。デフォルトは "{page} / {totalPages}" */
	format?: "short" | "compact" | "long";
	class?: string;
	style?: Record<string, string>;
};

// --- ロール ---
type PaginationRole = "prev-trigger" | "next-trigger" | "items" | "page-text";

// --- マーカークラス ---
/** @class PaginationPrevTriggerMarker */
export class PaginationPrevTriggerMarker implements m.Component<PaginationPrevTriggerAttrs> {
	public static __paginationRole: PaginationRole = "prev-trigger";
	public view(vnode: m.Vnode<PaginationPrevTriggerAttrs>) { return <button type="button">{vnode.children}</button>; }
}

/** @class PaginationNextTriggerMarker */
export class PaginationNextTriggerMarker implements m.Component<PaginationNextTriggerAttrs> {
	public static __paginationRole: PaginationRole = "next-trigger";
	public view(vnode: m.Vnode<PaginationNextTriggerAttrs>) { return <button type="button">{vnode.children}</button>; }
}

/** @class PaginationItemsMarker */
export class PaginationItemsMarker implements m.Component<PaginationItemsAttrs> {
	public static __paginationRole: PaginationRole = "items";
	public view(vnode: m.Vnode<PaginationItemsAttrs>) { return <span>{vnode.children}</span>; }
}

/** @class PaginationPageTextMarker */
export class PaginationPageTextMarker implements m.Component<PaginationPageTextAttrs> {
	public static __paginationRole: PaginationRole = "page-text";
	public view(vnode: m.Vnode<PaginationPageTextAttrs>) { return <span>{vnode.children}</span>; }
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

function getRole(v: any): PaginationRole | undefined {
	if (!isVnodeLike(v)) return undefined;
	return (v.tag as any)?.__paginationRole;
}

function capitalize(s: string): string {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

/**
 * Bootstrap Icons `three-dots` を内包した省略記号アイコン。
 * Copyright (c) The Bootstrap Authors
 * Licensed under the MIT License.
 * Source: https://icons.getbootstrap.com/icons/three-dots/
 */
function renderPaginationEllipsisIcon() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
			<path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
		</svg>
	);
}

/**
 * ページ番号の範囲と省略記号を生成する
 */
function buildPageRange(current: number, totalPages: number, siblingCount: number): (number | "ellipsis")[] {
	const result: (number | "ellipsis")[] = [];
	const left = Math.max(1, current - siblingCount);
	const right = Math.min(totalPages, current + siblingCount);

	if (left > 1) {
		result.push(1);
		if (left > 2) result.push("ellipsis");
	}
	for (let i = left; i <= right; i++) {
		result.push(i);
	}
	if (right < totalPages) {
		if (right < totalPages - 1) result.push("ellipsis");
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
export class PaginationRoot implements m.Component<PaginationRootAttrs> {
	private currentPage = 1;

	public oninit(vnode: m.Vnode<PaginationRootAttrs>) {
		this.currentPage = this.resolvePage(vnode.attrs, true);
	}

	private isControlled(attrs: PaginationRootAttrs): boolean {
		return attrs.page !== undefined;
	}

	private resolvePage(attrs: PaginationRootAttrs, preferDefault: boolean): number {
		if (this.isControlled(attrs)) return attrs.page!;
		if (preferDefault && attrs.defaultPage !== undefined) return attrs.defaultPage;
		return this.currentPage;
	}

	private totalPages(attrs: PaginationRootAttrs): number {
		return Math.max(1, Math.ceil(attrs.count / (attrs.pageSize ?? 10)));
	}

	private setPage(attrs: PaginationRootAttrs, page: number) {
		const total = this.totalPages(attrs);
		const clamped = Math.max(1, Math.min(page, total));
		if (!this.isControlled(attrs)) this.currentPage = clamped;
		attrs.onPageChange?.({ page: clamped });
		if (!this.isControlled(attrs)) m.redraw();
	}

	public view(vnode: m.Vnode<PaginationRootAttrs>) {
		const attrs = vnode.attrs;
		const allChildren = toChildArray(vnode.children);
		const current = this.resolvePage(attrs, false);
		const total = this.totalPages(attrs);
		const siblingCount = attrs.siblingCount ?? 1;
		const variant = attrs.variant ?? "outline";
		const size = attrs.size ?? "md";
		const pages = buildPageRange(current, total, siblingCount);

		const prevVNode = allChildren.find(c => getRole(c) === "prev-trigger") as m.Vnode<PaginationPrevTriggerAttrs> | undefined;
		const nextVNode = allChildren.find(c => getRole(c) === "next-trigger") as m.Vnode<PaginationNextTriggerAttrs> | undefined;
		const pageTextVNode = allChildren.find(c => getRole(c) === "page-text") as m.Vnode<PaginationPageTextAttrs> | undefined;
		const hasItems = allChildren.some(c => getRole(c) === "items");

		return (
			<nav
				class={classNames(
					styles.root,
					styles[`variant${capitalize(variant)}`],
					styles[`size${capitalize(size)}`],
					attrs.class
				)}
				style={attrs.style}
				aria-label="pagination"
				data-scope="pagination"
				data-part="root"
			>
				{/* 前へ */}
				{prevVNode ? (
					<button
						type="button"
						class={classNames(styles.prevTrigger, styles.pageButton, prevVNode.attrs.class)}
						style={prevVNode.attrs.style}
						data-part="prev-trigger"
						disabled={current <= 1}
						onclick={() => this.setPage(attrs, current - 1)}
					>
						{prevVNode.children}
					</button>
				) : null}

				{/* ページ番号リスト */}
				{hasItems ? (
					pages.map((item, i) =>
						item === "ellipsis" ? (
							<span key={`e-${i}`} class={styles.ellipsis} data-part="ellipsis">
								{renderPaginationEllipsisIcon()}
							</span>
						) : (
							<button
								key={item}
								type="button"
								class={classNames(styles.pageButton, { [styles.active]: item === current })}
								data-part="item"
								data-selected={item === current ? "true" : undefined}
								aria-current={item === current ? "page" : undefined}
								onclick={() => this.setPage(attrs, item)}
							>
								{item}
							</button>
						)
					)
				) : null}

				{/* ページテキスト */}
				{pageTextVNode ? (
					<span
						class={classNames(styles.pageText, pageTextVNode.attrs.class)}
						style={pageTextVNode.attrs.style}
						data-part="page-text"
					>
						{(() => {
							const fmt = pageTextVNode.attrs.format ?? "short";
							switch (fmt) {
								case "compact": return `${current}/${total}`;
								case "long": return `${current} / ${total} ページ (${attrs.count}件)`;
								default: return `${current} / ${total}`;
							}
						})()}
					</span>
				) : null}

				{/* 次へ */}
				{nextVNode ? (
					<button
						type="button"
						class={classNames(styles.nextTrigger, styles.pageButton, nextVNode.attrs.class)}
						style={nextVNode.attrs.style}
						data-part="next-trigger"
						disabled={current >= total}
						onclick={() => this.setPage(attrs, current + 1)}
					>
						{nextVNode.children}
					</button>
				) : null}
			</nav>
		);
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
} as const;
