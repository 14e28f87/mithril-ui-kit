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
import classNames from "classnames";
import styles from "./Carousel.module.scss";
// --- マーカークラス ---
/** @class CarouselItemGroupMarker */
export class CarouselItemGroupMarker {
    view(vnode) { return m("div", null, vnode.children); }
}
CarouselItemGroupMarker.__carouselRole = "item-group";
/** @class CarouselItemMarker */
export class CarouselItemMarker {
    view(vnode) { return m("div", null, vnode.children); }
}
CarouselItemMarker.__carouselRole = "item";
/** @class CarouselControlMarker */
export class CarouselControlMarker {
    view(vnode) { return m("div", null, vnode.children); }
}
CarouselControlMarker.__carouselRole = "control";
/** @class CarouselPrevTriggerMarker */
export class CarouselPrevTriggerMarker {
    view(vnode) { return m("button", { type: "button" }, vnode.children); }
}
CarouselPrevTriggerMarker.__carouselRole = "prev-trigger";
/** @class CarouselNextTriggerMarker */
export class CarouselNextTriggerMarker {
    view(vnode) { return m("button", { type: "button" }, vnode.children); }
}
CarouselNextTriggerMarker.__carouselRole = "next-trigger";
/** @class CarouselIndicatorGroupMarker */
export class CarouselIndicatorGroupMarker {
    view(vnode) { return m("div", null, vnode.children); }
}
CarouselIndicatorGroupMarker.__carouselRole = "indicator-group";
/** @class CarouselIndicatorMarker */
export class CarouselIndicatorMarker {
    view(vnode) { return m("button", { type: "button" }); }
}
CarouselIndicatorMarker.__carouselRole = "indicator";
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
    return v.tag?.__carouselRole;
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
export class CarouselRoot {
    constructor() {
        this.currentPage = 0;
        this.autoplayTimer = null;
    }
    oninit(vnode) {
        this.currentPage = this.resolvePage(vnode.attrs, true);
    }
    oncreate(vnode) {
        this.startAutoplay(vnode.attrs);
    }
    onupdate(vnode) {
        // autoplay 設定が変わったとき
        this.startAutoplay(vnode.attrs);
    }
    onremove() {
        this.stopAutoplay();
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
        const perPage = attrs.slidesPerPage ?? 1;
        return Math.max(1, Math.ceil(attrs.slideCount / perPage));
    }
    setPage(attrs, page) {
        const total = this.totalPages(attrs);
        let next;
        if (attrs.loop) {
            next = ((page % total) + total) % total;
        }
        else {
            next = Math.max(0, Math.min(page, total - 1));
        }
        if (!this.isControlled(attrs))
            this.currentPage = next;
        attrs.onPageChange?.({ page: next });
        if (!this.isControlled(attrs))
            m.redraw();
    }
    startAutoplay(attrs) {
        this.stopAutoplay();
        if (attrs.autoplay && attrs.autoplay > 0) {
            this.autoplayTimer = setInterval(() => {
                this.setPage(attrs, this.resolvePage(attrs, false) + 1);
            }, attrs.autoplay);
        }
    }
    stopAutoplay() {
        if (this.autoplayTimer) {
            clearInterval(this.autoplayTimer);
            this.autoplayTimer = null;
        }
    }
    view(vnode) {
        const attrs = vnode.attrs;
        const allChildren = toChildArray(vnode.children);
        const current = this.resolvePage(attrs, false);
        const total = this.totalPages(attrs);
        const orientation = attrs.orientation ?? "horizontal";
        const perPage = attrs.slidesPerPage ?? 1;
        // 子コンポーネント分類
        const controlVNode = allChildren.find(c => getRole(c) === "control");
        const itemGroupVNode = allChildren.find(c => getRole(c) === "item-group");
        const indicatorGroupVNode = allChildren.find(c => getRole(c) === "indicator-group");
        // Control 内部の PrevTrigger / NextTrigger を取得
        const controlChildren = controlVNode ? toChildArray(controlVNode.children) : [];
        const prevVNode = controlChildren.find(c => getRole(c) === "prev-trigger");
        const nextVNode = controlChildren.find(c => getRole(c) === "next-trigger");
        // ItemGroup 内部の Item
        const items = itemGroupVNode ? toChildArray(itemGroupVNode.children).filter(c => getRole(c) === "item") : [];
        // IndicatorGroup 内部の Indicator
        const indicators = indicatorGroupVNode ? toChildArray(indicatorGroupVNode.children).filter(c => getRole(c) === "indicator") : [];
        // 可視スライド範囲
        const startSlide = current * (attrs.slidesPerMove ?? 1);
        return (m("div", { class: classNames(styles.root, { [styles.orientationVertical]: orientation === "vertical" }, attrs.class), style: attrs.style, "data-scope": "carousel", "data-part": "root", "data-orientation": orientation, "aria-roledescription": "carousel" },
            controlVNode ? (m("div", { class: classNames(styles.control, controlVNode.attrs.class), style: controlVNode.attrs.style, "data-part": "control" },
                prevVNode ? (m("button", { type: "button", class: classNames(styles.prevTrigger, prevVNode.attrs.class), style: prevVNode.attrs.style, "data-part": "prev-trigger", disabled: !attrs.loop && current <= 0, onclick: () => this.setPage(attrs, current - 1) }, prevVNode.children)) : null,
                nextVNode ? (m("button", { type: "button", class: classNames(styles.nextTrigger, nextVNode.attrs.class), style: nextVNode.attrs.style, "data-part": "next-trigger", disabled: !attrs.loop && current >= total - 1, onclick: () => this.setPage(attrs, current + 1) }, nextVNode.children)) : null)) : null,
            m("div", { class: classNames(styles.itemGroup, itemGroupVNode?.attrs.class), style: itemGroupVNode?.attrs.style, "data-part": "item-group" },
                m("div", { class: styles.track, style: {
                        transform: orientation === "horizontal"
                            ? `translateX(-${current * 100}%)`
                            : `translateY(-${current * 100}%)`,
                    } }, items.map((item, i) => (m("div", { key: item.attrs.index, class: classNames(styles.item, item.attrs.class), style: {
                        ...item.attrs.style,
                        flexBasis: `${100 / perPage}%`,
                    }, "data-part": "item", "data-index": item.attrs.index, "aria-roledescription": "slide" }, item.children))))),
            indicatorGroupVNode ? (m("div", { class: classNames(styles.indicatorGroup, indicatorGroupVNode.attrs.class), style: indicatorGroupVNode.attrs.style, "data-part": "indicator-group" }, indicators.map(ind => (m("button", { key: ind.attrs.index, type: "button", class: classNames(styles.indicator, ind.attrs.class, {
                    [styles.indicatorActive]: ind.attrs.index === current,
                }), style: ind.attrs.style, "data-part": "indicator", "data-index": ind.attrs.index, "data-current": ind.attrs.index === current ? "true" : undefined, "aria-label": `スライド ${ind.attrs.index + 1}`, onclick: () => this.setPage(attrs, ind.attrs.index) }))))) : null));
    }
}
/**
 * Carousel compound component のバンドル。
 */
export const Carousel = {
    Root: CarouselRoot,
    ItemGroup: CarouselItemGroupMarker,
    Item: CarouselItemMarker,
    Control: CarouselControlMarker,
    PrevTrigger: CarouselPrevTriggerMarker,
    NextTrigger: CarouselNextTriggerMarker,
    IndicatorGroup: CarouselIndicatorGroupMarker,
    Indicator: CarouselIndicatorMarker,
};
