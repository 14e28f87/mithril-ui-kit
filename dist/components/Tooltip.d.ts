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
export declare class TooltipTriggerMarker implements m.Component<TooltipTriggerAttrs> {
    static __tooltipRole: TooltipRole;
    view(vnode: m.Vnode<TooltipTriggerAttrs>): JSX.Element;
}
/** @class TooltipContentMarker */
export declare class TooltipContentMarker implements m.Component<TooltipContentAttrs> {
    static __tooltipRole: TooltipRole;
    view(vnode: m.Vnode<TooltipContentAttrs>): JSX.Element;
}
/** @class TooltipArrowMarker */
export declare class TooltipArrowMarker implements m.Component<TooltipArrowAttrs> {
    static __tooltipRole: TooltipRole;
    view(vnode: m.Vnode<TooltipArrowAttrs>): JSX.Element;
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
export declare class TooltipRoot implements m.Component<TooltipRootAttrs> {
    private isOpen;
    private openTimer;
    private closeTimer;
    private readonly uid;
    private static seed;
    oninit(vnode: m.Vnode<TooltipRootAttrs>): void;
    onremove(): void;
    private clearTimers;
    private resolveOpen;
    private show;
    private hide;
    view(vnode: m.Vnode<TooltipRootAttrs>): JSX.Element;
}
/**
 * Tooltip compound component のバンドル。
 */
export declare const Tooltip: {
    readonly Root: typeof TooltipRoot;
    readonly Trigger: typeof TooltipTriggerMarker;
    readonly Content: typeof TooltipContentMarker;
    readonly Arrow: typeof TooltipArrowMarker;
};
export {};
//# sourceMappingURL=Tooltip.d.ts.map