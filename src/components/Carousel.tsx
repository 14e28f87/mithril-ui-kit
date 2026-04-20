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

// --- ロール ---
type CarouselRole = "item-group" | "item" | "control" | "prev-trigger" | "next-trigger" | "indicator-group" | "indicator";

// --- マーカークラス ---
/** @class CarouselItemGroupMarker */
export class CarouselItemGroupMarker implements m.Component<CarouselItemGroupAttrs> {
	public static __carouselRole: CarouselRole = "item-group";
	public view(vnode: m.Vnode<CarouselItemGroupAttrs>) { return <div>{vnode.children}</div>; }
}

/** @class CarouselItemMarker */
export class CarouselItemMarker implements m.Component<CarouselItemAttrs> {
	public static __carouselRole: CarouselRole = "item";
	public view(vnode: m.Vnode<CarouselItemAttrs>) { return <div>{vnode.children}</div>; }
}

/** @class CarouselControlMarker */
export class CarouselControlMarker implements m.Component<CarouselControlAttrs> {
	public static __carouselRole: CarouselRole = "control";
	public view(vnode: m.Vnode<CarouselControlAttrs>) { return <div>{vnode.children}</div>; }
}

/** @class CarouselPrevTriggerMarker */
export class CarouselPrevTriggerMarker implements m.Component<CarouselPrevTriggerAttrs> {
	public static __carouselRole: CarouselRole = "prev-trigger";
	public view(vnode: m.Vnode<CarouselPrevTriggerAttrs>) { return <button type="button">{vnode.children}</button>; }
}

/** @class CarouselNextTriggerMarker */
export class CarouselNextTriggerMarker implements m.Component<CarouselNextTriggerAttrs> {
	public static __carouselRole: CarouselRole = "next-trigger";
	public view(vnode: m.Vnode<CarouselNextTriggerAttrs>) { return <button type="button">{vnode.children}</button>; }
}

/** @class CarouselIndicatorGroupMarker */
export class CarouselIndicatorGroupMarker implements m.Component<CarouselIndicatorGroupAttrs> {
	public static __carouselRole: CarouselRole = "indicator-group";
	public view(vnode: m.Vnode<CarouselIndicatorGroupAttrs>) { return <div>{vnode.children}</div>; }
}

/** @class CarouselIndicatorMarker */
export class CarouselIndicatorMarker implements m.Component<CarouselIndicatorAttrs> {
	public static __carouselRole: CarouselRole = "indicator";
	public view(vnode: m.Vnode<CarouselIndicatorAttrs>) { return <button type="button" />; }
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

function getRole(v: any): CarouselRole | undefined {
	if (!isVnodeLike(v)) return undefined;
	return (v.tag as any)?.__carouselRole;
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
export class CarouselRoot implements m.Component<CarouselRootAttrs> {
	private currentPage = 0;
	private autoplayTimer: ReturnType<typeof setInterval> | null = null;

	public oninit(vnode: m.Vnode<CarouselRootAttrs>) {
		this.currentPage = this.resolvePage(vnode.attrs, true);
	}

	public oncreate(vnode: m.VnodeDOM<CarouselRootAttrs>) {
		this.startAutoplay(vnode.attrs);
	}

	public onupdate(vnode: m.VnodeDOM<CarouselRootAttrs>) {
		// autoplay 設定が変わったとき
		this.startAutoplay(vnode.attrs);
	}

	public onremove() {
		this.stopAutoplay();
	}

	private isControlled(attrs: CarouselRootAttrs): boolean {
		return attrs.page !== undefined;
	}

	private resolvePage(attrs: CarouselRootAttrs, preferDefault: boolean): number {
		if (this.isControlled(attrs)) return attrs.page!;
		if (preferDefault && attrs.defaultPage !== undefined) return attrs.defaultPage;
		return this.currentPage;
	}

	private totalPages(attrs: CarouselRootAttrs): number {
		const perPage = attrs.slidesPerPage ?? 1;
		return Math.max(1, Math.ceil(attrs.slideCount / perPage));
	}

	private setPage(attrs: CarouselRootAttrs, page: number) {
		const total = this.totalPages(attrs);
		let next: number;
		if (attrs.loop) {
			next = ((page % total) + total) % total;
		} else {
			next = Math.max(0, Math.min(page, total - 1));
		}
		if (!this.isControlled(attrs)) this.currentPage = next;
		attrs.onPageChange?.({ page: next });
		if (!this.isControlled(attrs)) m.redraw();
	}

	private startAutoplay(attrs: CarouselRootAttrs) {
		this.stopAutoplay();
		if (attrs.autoplay && attrs.autoplay > 0) {
			this.autoplayTimer = setInterval(() => {
				this.setPage(attrs, this.resolvePage(attrs, false) + 1);
			}, attrs.autoplay);
		}
	}

	private stopAutoplay() {
		if (this.autoplayTimer) { clearInterval(this.autoplayTimer); this.autoplayTimer = null; }
	}

	public view(vnode: m.Vnode<CarouselRootAttrs>) {
		const attrs = vnode.attrs;
		const allChildren = toChildArray(vnode.children);
		const current = this.resolvePage(attrs, false);
		const total = this.totalPages(attrs);
		const orientation = attrs.orientation ?? "horizontal";
		const perPage = attrs.slidesPerPage ?? 1;

		// 子コンポーネント分類
		const controlVNode = allChildren.find(c => getRole(c) === "control") as m.Vnode<CarouselControlAttrs> | undefined;
		const itemGroupVNode = allChildren.find(c => getRole(c) === "item-group") as m.Vnode<CarouselItemGroupAttrs> | undefined;
		const indicatorGroupVNode = allChildren.find(c => getRole(c) === "indicator-group") as m.Vnode<CarouselIndicatorGroupAttrs> | undefined;

		// Control 内部の PrevTrigger / NextTrigger を取得
		const controlChildren = controlVNode ? toChildArray(controlVNode.children) : [];
		const prevVNode = controlChildren.find(c => getRole(c) === "prev-trigger") as m.Vnode<CarouselPrevTriggerAttrs> | undefined;
		const nextVNode = controlChildren.find(c => getRole(c) === "next-trigger") as m.Vnode<CarouselNextTriggerAttrs> | undefined;

		// ItemGroup 内部の Item
		const items = itemGroupVNode ? toChildArray(itemGroupVNode.children).filter(c => getRole(c) === "item") as m.Vnode<CarouselItemAttrs>[] : [];

		// IndicatorGroup 内部の Indicator
		const indicators = indicatorGroupVNode ? toChildArray(indicatorGroupVNode.children).filter(c => getRole(c) === "indicator") as m.Vnode<CarouselIndicatorAttrs>[] : [];

		// 可視スライド範囲
		const startSlide = current * (attrs.slidesPerMove ?? 1);

		return (
			<div
				class={classNames(
					styles.root,
					{ [styles.orientationVertical]: orientation === "vertical" },
					attrs.class,
				)}
				style={attrs.style}
				data-scope="carousel"
				data-part="root"
				data-orientation={orientation}
				aria-roledescription="carousel"
			>
				{/* コントロール */}
				{controlVNode ? (
					<div class={classNames(styles.control, controlVNode.attrs.class)} style={controlVNode.attrs.style} data-part="control">
						{prevVNode ? (
							<button
								type="button"
								class={classNames(styles.prevTrigger, prevVNode.attrs.class)}
								style={prevVNode.attrs.style}
								data-part="prev-trigger"
								disabled={!attrs.loop && current <= 0}
								onclick={() => this.setPage(attrs, current - 1)}
							>
								{prevVNode.children}
							</button>
						) : null}
						{nextVNode ? (
							<button
								type="button"
								class={classNames(styles.nextTrigger, nextVNode.attrs.class)}
								style={nextVNode.attrs.style}
								data-part="next-trigger"
								disabled={!attrs.loop && current >= total - 1}
								onclick={() => this.setPage(attrs, current + 1)}
							>
								{nextVNode.children}
							</button>
						) : null}
					</div>
				) : null}

				{/* スライドコンテナ */}
				<div
					class={classNames(styles.itemGroup, itemGroupVNode?.attrs.class)}
					style={itemGroupVNode?.attrs.style}
					data-part="item-group"
				>
					<div
						class={styles.track}
						style={{
							transform: orientation === "horizontal"
								? `translateX(-${current * 100}%)`
								: `translateY(-${current * 100}%)`,
						}}
					>
						{items.map((item, i) => (
							<div
								key={item.attrs.index}
								class={classNames(styles.item, item.attrs.class)}
								style={{
									...item.attrs.style,
									flexBasis: `${100 / perPage}%`,
								}}
								data-part="item"
								data-index={item.attrs.index}
								aria-roledescription="slide"
							>
								{item.children}
							</div>
						))}
					</div>
				</div>

				{/* インジケーター */}
				{indicatorGroupVNode ? (
					<div class={classNames(styles.indicatorGroup, indicatorGroupVNode.attrs.class)} style={indicatorGroupVNode.attrs.style} data-part="indicator-group">
						{indicators.map(ind => (
							<button
								key={ind.attrs.index}
								type="button"
								class={classNames(styles.indicator, ind.attrs.class, {
									[styles.indicatorActive]: ind.attrs.index === current,
								})}
								style={ind.attrs.style}
								data-part="indicator"
								data-index={ind.attrs.index}
								data-current={ind.attrs.index === current ? "true" : undefined}
								aria-label={`スライド ${ind.attrs.index + 1}`}
								onclick={() => this.setPage(attrs, ind.attrs.index)}
							/>
						))}
					</div>
				) : null}
			</div>
		);
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
} as const;
