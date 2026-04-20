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
type PopoverRole = "trigger" | "content" | "header" | "body" | "title" | "footer" | "close-trigger" | "arrow";
/** @class PopoverTriggerMarker */
export declare class PopoverTriggerMarker implements m.Component<PopoverTriggerAttrs> {
    static __popoverRole: PopoverRole;
    view(vnode: m.Vnode<PopoverTriggerAttrs>): JSX.Element;
}
/** @class PopoverContentMarker */
export declare class PopoverContentMarker implements m.Component<PopoverContentAttrs> {
    static __popoverRole: PopoverRole;
    view(vnode: m.Vnode<PopoverContentAttrs>): JSX.Element;
}
/** @class PopoverHeaderMarker */
export declare class PopoverHeaderMarker implements m.Component<PopoverHeaderAttrs> {
    static __popoverRole: PopoverRole;
    view(vnode: m.Vnode<PopoverHeaderAttrs>): JSX.Element;
}
/** @class PopoverBodyMarker */
export declare class PopoverBodyMarker implements m.Component<PopoverBodyAttrs> {
    static __popoverRole: PopoverRole;
    view(vnode: m.Vnode<PopoverBodyAttrs>): JSX.Element;
}
/** @class PopoverTitleMarker */
export declare class PopoverTitleMarker implements m.Component<PopoverTitleAttrs> {
    static __popoverRole: PopoverRole;
    view(vnode: m.Vnode<PopoverTitleAttrs>): JSX.Element;
}
/** @class PopoverFooterMarker */
export declare class PopoverFooterMarker implements m.Component<PopoverFooterAttrs> {
    static __popoverRole: PopoverRole;
    view(vnode: m.Vnode<PopoverFooterAttrs>): JSX.Element;
}
/** @class PopoverCloseTriggerMarker */
export declare class PopoverCloseTriggerMarker implements m.Component<PopoverCloseTriggerAttrs> {
    static __popoverRole: PopoverRole;
    view(vnode: m.Vnode<PopoverCloseTriggerAttrs>): JSX.Element;
}
/** @class PopoverArrowMarker */
export declare class PopoverArrowMarker implements m.Component<PopoverArrowAttrs> {
    static __popoverRole: PopoverRole;
    view(vnode: m.Vnode<PopoverArrowAttrs>): JSX.Element;
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
export declare class PopoverRoot implements m.Component<PopoverRootAttrs> {
    private isOpen;
    private readonly uid;
    private static seed;
    private outsideClickHandler;
    private escapeHandler;
    private rootDom;
    oninit(vnode: m.Vnode<PopoverRootAttrs>): void;
    oncreate(vnode: m.VnodeDOM<PopoverRootAttrs>): void;
    onupdate(vnode: m.VnodeDOM<PopoverRootAttrs>): void;
    onremove(): void;
    private resolveOpen;
    private toggle;
    private close;
    private registerGlobalHandlers;
    private unregisterGlobalHandlers;
    /**
     * content vnode の children を展開し Header / Body / Footer / Arrow を分離して描画する
     */
    private renderContentInner;
    view(vnode: m.Vnode<PopoverRootAttrs>): JSX.Element;
}
/**
 * Popover compound component のバンドル。
 */
export declare const Popover: {
    readonly Root: typeof PopoverRoot;
    readonly Trigger: typeof PopoverTriggerMarker;
    readonly Content: typeof PopoverContentMarker;
    readonly Header: typeof PopoverHeaderMarker;
    readonly Body: typeof PopoverBodyMarker;
    readonly Title: typeof PopoverTitleMarker;
    readonly Footer: typeof PopoverFooterMarker;
    readonly CloseTrigger: typeof PopoverCloseTriggerMarker;
    readonly Arrow: typeof PopoverArrowMarker;
};
export {};
//# sourceMappingURL=Popover.d.ts.map