/** @jsx m */
/**
 * @fileoverview
 * Carousel — Chakra UI 現行 API 準拠の compound component 型カルーセル
 *
 * スライド式のコンテンツ表示コンポーネント。
 * ページ単位の前後移動、インジケーター、自動再生をサポートする。
 *
 * @example
 * ```tsx
 * <Carousel.Root slideCount={3}>
 *   <Carousel.Control>
 *     <Carousel.PrevTrigger>◀</Carousel.PrevTrigger>
 *     <Carousel.NextTrigger>▶</Carousel.NextTrigger>
 *   </Carousel.Control>
 *   <Carousel.ItemGroup>
 *     <Carousel.Item index={0}>スライド 1</Carousel.Item>
 *     <Carousel.Item index={1}>スライド 2</Carousel.Item>
 *     <Carousel.Item index={2}>スライド 3</Carousel.Item>
 *   </Carousel.ItemGroup>
 *   <Carousel.IndicatorGroup>
 *     <Carousel.Indicator index={0} />
 *     <Carousel.Indicator index={1} />
 *     <Carousel.Indicator index={2} />
 *   </Carousel.IndicatorGroup>
 * </Carousel.Root>
 * ```
 *
 * @module Carousel
 */
/** @jsx m */
import m from "mithril";
/** カルーセルの方向 */
export type CarouselOrientation = "horizontal" | "vertical";
/**
 * ページ変更イベントの詳細
 */
export type CarouselPageChangeDetails = {
    page: number;
};
/**
 * Carousel.Root に渡せる属性
 */
export type CarouselRootAttrs = {
    /** スライド総数 */
    slideCount: number;
    /** 制御モード: 現在のページ（0始まり） */
    page?: number;
    /** 非制御モード: 初期ページ */
    defaultPage?: number;
    /** ページ変更コールバック */
    onPageChange?: (details: CarouselPageChangeDetails) => void;
    /** 1ページに表示するスライド数（デフォルト: 1） */
    slidesPerPage?: number;
    /** 1回で移動するスライド数（デフォルト: 1） */
    slidesPerMove?: number;
    /** 方向（デフォルト: "horizontal"） */
    orientation?: CarouselOrientation;
    /** ループ再生 */
    loop?: boolean;
    /** 自動再生（ms間隔、falseで無効） */
    autoplay?: number | false;
    /** マウスドラッグ操作 */
    allowMouseDrag?: boolean;
    class?: string;
    style?: Record<string, string>;
};
/** Carousel.ItemGroup に渡せる属性 */
export type CarouselItemGroupAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Carousel.Item に渡せる属性 */
export type CarouselItemAttrs = {
    /** スライドインデックス（0始まり） */
    index: number;
    class?: string;
    style?: Record<string, string>;
};
/** Carousel.Control に渡せる属性 */
export type CarouselControlAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Carousel.PrevTrigger に渡せる属性 */
export type CarouselPrevTriggerAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Carousel.NextTrigger に渡せる属性 */
export type CarouselNextTriggerAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Carousel.IndicatorGroup に渡せる属性 */
export type CarouselIndicatorGroupAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Carousel.Indicator に渡せる属性 */
export type CarouselIndicatorAttrs = {
    /** インジケーター対象のページインデックス */
    index: number;
    class?: string;
    style?: Record<string, string>;
};
type CarouselRole = "item-group" | "item" | "control" | "prev-trigger" | "next-trigger" | "indicator-group" | "indicator";
/** @class CarouselItemGroupMarker */
export declare class CarouselItemGroupMarker implements m.Component<CarouselItemGroupAttrs> {
    static __carouselRole: CarouselRole;
    view(vnode: m.Vnode<CarouselItemGroupAttrs>): JSX.Element;
}
/** @class CarouselItemMarker */
export declare class CarouselItemMarker implements m.Component<CarouselItemAttrs> {
    static __carouselRole: CarouselRole;
    view(vnode: m.Vnode<CarouselItemAttrs>): JSX.Element;
}
/** @class CarouselControlMarker */
export declare class CarouselControlMarker implements m.Component<CarouselControlAttrs> {
    static __carouselRole: CarouselRole;
    view(vnode: m.Vnode<CarouselControlAttrs>): JSX.Element;
}
/** @class CarouselPrevTriggerMarker */
export declare class CarouselPrevTriggerMarker implements m.Component<CarouselPrevTriggerAttrs> {
    static __carouselRole: CarouselRole;
    view(vnode: m.Vnode<CarouselPrevTriggerAttrs>): JSX.Element;
}
/** @class CarouselNextTriggerMarker */
export declare class CarouselNextTriggerMarker implements m.Component<CarouselNextTriggerAttrs> {
    static __carouselRole: CarouselRole;
    view(vnode: m.Vnode<CarouselNextTriggerAttrs>): JSX.Element;
}
/** @class CarouselIndicatorGroupMarker */
export declare class CarouselIndicatorGroupMarker implements m.Component<CarouselIndicatorGroupAttrs> {
    static __carouselRole: CarouselRole;
    view(vnode: m.Vnode<CarouselIndicatorGroupAttrs>): JSX.Element;
}
/** @class CarouselIndicatorMarker */
export declare class CarouselIndicatorMarker implements m.Component<CarouselIndicatorAttrs> {
    static __carouselRole: CarouselRole;
    view(vnode: m.Vnode<CarouselIndicatorAttrs>): JSX.Element;
}
/**
 * @class CarouselRoot
 * @description
 * カルーセルのルートコンポーネント。
 * スライド切り替え、前後ナビゲーション、インジケーター、ループ、自動再生を管理する。
 *
 * 主な機能:
 * - slidesPerPage / slidesPerMove
 * - orientation (horizontal / vertical)
 * - loop（端でループ）
 * - autoplay（自動再生）
 * - IndicatorGroup + Indicator
 * - 制御/非制御両対応
 *
 * @example
 * <Carousel.Root slideCount={5} slidesPerPage={2} loop autoplay={3000}>
 *   ...
 * </Carousel.Root>
 */
export declare class CarouselRoot implements m.Component<CarouselRootAttrs> {
    private currentPage;
    private autoplayTimer;
    oninit(vnode: m.Vnode<CarouselRootAttrs>): void;
    oncreate(vnode: m.VnodeDOM<CarouselRootAttrs>): void;
    onupdate(vnode: m.VnodeDOM<CarouselRootAttrs>): void;
    onremove(): void;
    private isControlled;
    private resolvePage;
    private totalPages;
    private setPage;
    private startAutoplay;
    private stopAutoplay;
    view(vnode: m.Vnode<CarouselRootAttrs>): JSX.Element;
}
/**
 * Carousel compound component のバンドル。
 */
export declare const Carousel: {
    readonly Root: typeof CarouselRoot;
    readonly ItemGroup: typeof CarouselItemGroupMarker;
    readonly Item: typeof CarouselItemMarker;
    readonly Control: typeof CarouselControlMarker;
    readonly PrevTrigger: typeof CarouselPrevTriggerMarker;
    readonly NextTrigger: typeof CarouselNextTriggerMarker;
    readonly IndicatorGroup: typeof CarouselIndicatorGroupMarker;
    readonly Indicator: typeof CarouselIndicatorMarker;
};
export {};
//# sourceMappingURL=Carousel.d.ts.map