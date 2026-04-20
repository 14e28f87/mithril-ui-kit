/** @jsx m */
/**
 * @fileoverview
 * Breadcrumb — Chakra UI 現行 API 準拠の compound component 型パンくずリスト
 *
 * @example
 * ```tsx
 * <Breadcrumb.Root>
 *   <Breadcrumb.List>
 *     <Breadcrumb.Item>
 *       <Breadcrumb.Link href="/">ホーム</Breadcrumb.Link>
 *     </Breadcrumb.Item>
 *     <Breadcrumb.Separator />
 *     <Breadcrumb.Item>
 *       <Breadcrumb.CurrentLink>現在のページ</Breadcrumb.CurrentLink>
 *     </Breadcrumb.Item>
 *   </Breadcrumb.List>
 * </Breadcrumb.Root>
 * ```
 *
 * @module Breadcrumb
 */
/** @jsx m */
import m from "mithril";
/** パンくずリストの外観バリエーション */
export type BreadcrumbVariant = "underline" | "plain";
/** パンくずリストのサイズ */
export type BreadcrumbSize = "sm" | "md" | "lg";
/**
 * Breadcrumb.Root に渡せる属性
 */
export type BreadcrumbRootAttrs = {
    /** 外観（デフォルト: "plain"） */
    variant?: BreadcrumbVariant;
    /** サイズ（デフォルト: "md"） */
    size?: BreadcrumbSize;
    /** セパレーター文字（デフォルト: "/"） */
    separator?: string | m.Children;
    class?: string;
    style?: Record<string, string>;
};
/** Breadcrumb.List に渡せる属性 */
export type BreadcrumbListAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Breadcrumb.Item に渡せる属性 */
export type BreadcrumbItemAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Breadcrumb.Link に渡せる属性 */
export type BreadcrumbLinkAttrs = {
    /** 遷移先 URL */
    href?: string;
    class?: string;
    style?: Record<string, string>;
};
/** Breadcrumb.CurrentLink に渡せる属性 */
export type BreadcrumbCurrentLinkAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Breadcrumb.Separator に渡せる属性 */
export type BreadcrumbSeparatorAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Breadcrumb.Ellipsis に渡せる属性 */
export type BreadcrumbEllipsisAttrs = {
    class?: string;
    style?: Record<string, string>;
};
type BreadcrumbRole = "list" | "item" | "link" | "current-link" | "separator" | "ellipsis";
/**
 * @class BreadcrumbListMarker
 * @description パンくずリスト ol 要素のマーカー
 */
export declare class BreadcrumbListMarker implements m.Component<BreadcrumbListAttrs> {
    static __breadcrumbRole: BreadcrumbRole;
    view(vnode: m.Vnode<BreadcrumbListAttrs>): JSX.Element;
}
/**
 * @class BreadcrumbItemMarker
 * @description パンくずリスト項目のマーカー
 */
export declare class BreadcrumbItemMarker implements m.Component<BreadcrumbItemAttrs> {
    static __breadcrumbRole: BreadcrumbRole;
    view(vnode: m.Vnode<BreadcrumbItemAttrs>): JSX.Element;
}
/**
 * @class BreadcrumbLinkMarker
 * @description リンクのマーカー
 */
export declare class BreadcrumbLinkMarker implements m.Component<BreadcrumbLinkAttrs> {
    static __breadcrumbRole: BreadcrumbRole;
    view(vnode: m.Vnode<BreadcrumbLinkAttrs>): JSX.Element;
}
/**
 * @class BreadcrumbCurrentLinkMarker
 * @description 現在のページリンクのマーカー (aria-current="page")
 */
export declare class BreadcrumbCurrentLinkMarker implements m.Component<BreadcrumbCurrentLinkAttrs> {
    static __breadcrumbRole: BreadcrumbRole;
    view(vnode: m.Vnode<BreadcrumbCurrentLinkAttrs>): JSX.Element;
}
/**
 * @class BreadcrumbSeparatorMarker
 * @description セパレーターのマーカー
 */
export declare class BreadcrumbSeparatorMarker implements m.Component<BreadcrumbSeparatorAttrs> {
    static __breadcrumbRole: BreadcrumbRole;
    view(vnode: m.Vnode<BreadcrumbSeparatorAttrs>): JSX.Element;
}
/**
 * @class BreadcrumbEllipsisMarker
 * @description 省略記号のマーカー
 */
export declare class BreadcrumbEllipsisMarker implements m.Component<BreadcrumbEllipsisAttrs> {
    static __breadcrumbRole: BreadcrumbRole;
    view(vnode: m.Vnode<BreadcrumbEllipsisAttrs>): JSX.Element;
}
/**
 * @class BreadcrumbRoot
 * @description
 * パンくずリストのルートコンポーネント。
 * nav 要素として描画し、子の List/Item/Link/Separator を収集して ARIA 対応のリストを生成する。
 *
 * 主な機能:
 * - variant (underline / plain)
 * - size (sm / md / lg)
 * - カスタムセパレーター
 * - Ellipsis（省略記号）対応
 * - CurrentLink（aria-current="page"）
 *
 * @example
 * <Breadcrumb.Root separator="›" size="sm">
 *   <Breadcrumb.List>
 *     <Breadcrumb.Item><Breadcrumb.Link href="/">ホーム</Breadcrumb.Link></Breadcrumb.Item>
 *     <Breadcrumb.Separator />
 *     <Breadcrumb.Item><Breadcrumb.CurrentLink>現在ページ</Breadcrumb.CurrentLink></Breadcrumb.Item>
 *   </Breadcrumb.List>
 * </Breadcrumb.Root>
 */
export declare class BreadcrumbRoot implements m.Component<BreadcrumbRootAttrs> {
    view(vnode: m.Vnode<BreadcrumbRootAttrs>): JSX.Element;
}
/**
 * Breadcrumb compound component のバンドル。
 */
export declare const Breadcrumb: {
    readonly Root: typeof BreadcrumbRoot;
    readonly List: typeof BreadcrumbListMarker;
    readonly Item: typeof BreadcrumbItemMarker;
    readonly Link: typeof BreadcrumbLinkMarker;
    readonly CurrentLink: typeof BreadcrumbCurrentLinkMarker;
    readonly Separator: typeof BreadcrumbSeparatorMarker;
    readonly Ellipsis: typeof BreadcrumbEllipsisMarker;
};
export {};
//# sourceMappingURL=Breadcrumb.d.ts.map