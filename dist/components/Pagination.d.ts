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
type PaginationRole = "prev-trigger" | "next-trigger" | "items" | "page-text";
/** @class PaginationPrevTriggerMarker */
export declare class PaginationPrevTriggerMarker implements m.Component<PaginationPrevTriggerAttrs> {
    static __paginationRole: PaginationRole;
    view(vnode: m.Vnode<PaginationPrevTriggerAttrs>): JSX.Element;
}
/** @class PaginationNextTriggerMarker */
export declare class PaginationNextTriggerMarker implements m.Component<PaginationNextTriggerAttrs> {
    static __paginationRole: PaginationRole;
    view(vnode: m.Vnode<PaginationNextTriggerAttrs>): JSX.Element;
}
/** @class PaginationItemsMarker */
export declare class PaginationItemsMarker implements m.Component<PaginationItemsAttrs> {
    static __paginationRole: PaginationRole;
    view(vnode: m.Vnode<PaginationItemsAttrs>): JSX.Element;
}
/** @class PaginationPageTextMarker */
export declare class PaginationPageTextMarker implements m.Component<PaginationPageTextAttrs> {
    static __paginationRole: PaginationRole;
    view(vnode: m.Vnode<PaginationPageTextAttrs>): JSX.Element;
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
export declare class PaginationRoot implements m.Component<PaginationRootAttrs> {
    private currentPage;
    oninit(vnode: m.Vnode<PaginationRootAttrs>): void;
    private isControlled;
    private resolvePage;
    private totalPages;
    private setPage;
    view(vnode: m.Vnode<PaginationRootAttrs>): JSX.Element;
}
/**
 * Pagination compound component のバンドル。
 */
export declare const Pagination: {
    readonly Root: typeof PaginationRoot;
    readonly PrevTrigger: typeof PaginationPrevTriggerMarker;
    readonly NextTrigger: typeof PaginationNextTriggerMarker;
    readonly Items: typeof PaginationItemsMarker;
    readonly PageText: typeof PaginationPageTextMarker;
};
export {};
//# sourceMappingURL=Pagination.d.ts.map