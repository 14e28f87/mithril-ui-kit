/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Splitter.module.scss";

/**
 * Splitter パネルデータ
 */
export interface SplitterPanelData {
	/** パネル ID */
	id: string;
	/** デフォルトサイズ（%） */
	defaultSize?: number;
	/** 現在のサイズ（%） */
	size?: number;
	/** 最小サイズ（%） */
	minSize?: number;
	/** 最大サイズ（%） */
	maxSize?: number;
	/** 折りたたみ可能 */
	collapsible?: boolean;
}

/**
 * Splitter.Root の属性
 */
export interface SplitterRootAttrs {
	/** パネルデータ */
	panels?: SplitterPanelData[];
	/** 方向 */
	orientation?: "horizontal" | "vertical";
	/** リサイズ時コールバック */
	onResize?: (sizes: number[]) => void;
	/** 追加クラス */
	class?: string;
	/** インラインスタイル */
	style?: Record<string, string> | string;
	[key: string]: any;
}

/**
 * SplitterPanel の属性
 */
export interface SplitterPanelAttrs {
	/** デフォルトサイズ（%） */
	defaultSize?: number;
	/** 最小サイズ（%） */
	minSize?: number;
	/** 最大サイズ（%） */
	maxSize?: number;
	/** 折りたたみ可能 */
	collapsible?: boolean;
	/** 追加クラス */
	class?: string;
	[key: string]: any;
}

/**
 * SplitterResizeTrigger の属性
 */
export interface SplitterResizeTriggerAttrs {
	/** 追加クラス */
	class?: string;
	/** 無効状態 */
	disabled?: boolean;
	[key: string]: any;
}

/**
 * @class SplitterRoot
 * @description
 * パネルを分割してリサイズ可能にするコンポーネント。
 * Chakra UI の Splitter に相当する。
 *
 * @example
 * <Splitter.Root orientation="horizontal">
 *   <Splitter.Panel defaultSize={50}>左パネル</Splitter.Panel>
 *   <Splitter.ResizeTrigger />
 *   <Splitter.Panel defaultSize={50}>右パネル</Splitter.Panel>
 * </Splitter.Root>
 */
class SplitterRoot implements m.ClassComponent<SplitterRootAttrs> {
	private sizes: number[] = [];
	private dragging = false;
	private dragIndex = -1;
	private dragStart = 0;
	private containerSize = 0;
	private containerEl: HTMLElement | null = null;
	private panelElements: HTMLElement[] = [];

	private get isVertical() { return false; }
	private orientation: "horizontal" | "vertical" = "horizontal";

	oninit(vnode: m.Vnode<SplitterRootAttrs>) {
		this.orientation = vnode.attrs.orientation || "horizontal";
		// 初回 view() より前に sizes を確定させることで、初回レンダリングから正しい幅が適用される
		this.initSizes(vnode);
	}

	oncreate(vnode: m.VnodeDOM<SplitterRootAttrs>) {
		// コンテナ要素を保持してドラッグ計算に使う
		this.containerEl = vnode.dom as HTMLElement;
	}

	onupdate(vnode: m.VnodeDOM<SplitterRootAttrs>) {
		this.orientation = vnode.attrs.orientation || "horizontal";
	}

	private initSizes(vnode: m.Vnode<SplitterRootAttrs>) {
		const children = vnode.children as any[];
		if (!children) return;
		const panels = (Array.isArray(children) ? children.flat() : [children])
			.filter((c: any) => c && c.tag === SplitterPanel);
		if (panels.length === 0) return;

		this.sizes = panels.map((p: any, i: number) => {
			return p.attrs?.defaultSize ?? (100 / panels.length);
		});
	}

	private handleMouseDown = (e: MouseEvent, triggerIndex: number) => {
		e.preventDefault();
		this.dragging = true;
		this.dragIndex = triggerIndex;
		this.dragStart = this.orientation === "horizontal" ? e.clientX : e.clientY;

		// e.target が .triggerBar span の場合でも containerEl（Root div）から正確なサイズを取得する
		if (this.containerEl) {
			this.containerSize = this.orientation === "horizontal"
				? this.containerEl.offsetWidth
				: this.containerEl.offsetHeight;
		}

		document.addEventListener("mousemove", this.handleMouseMove);
		document.addEventListener("mouseup", this.handleMouseUp);
	};

	private handleMouseMove = (e: MouseEvent) => {
		if (!this.dragging) return;
		const current = this.orientation === "horizontal" ? e.clientX : e.clientY;
		const delta = ((current - this.dragStart) / this.containerSize) * 100;
		this.dragStart = current;

		const leftIdx = this.dragIndex;
		const rightIdx = this.dragIndex + 1;

		if (leftIdx < 0 || rightIdx >= this.sizes.length) return;

		const newLeft = this.sizes[leftIdx] + delta;
		const newRight = this.sizes[rightIdx] - delta;

		if (newLeft >= 5 && newRight >= 5) {
			this.sizes[leftIdx] = newLeft;
			this.sizes[rightIdx] = newRight;
			m.redraw();
		}
	};

	private handleMouseUp = () => {
		this.dragging = false;
		document.removeEventListener("mousemove", this.handleMouseMove);
		document.removeEventListener("mouseup", this.handleMouseUp);
	};

	view(vnode: m.Vnode<SplitterRootAttrs>) {
		const { orientation = "horizontal", onResize, class: className, style, panels, ...rest } = vnode.attrs;
		this.orientation = orientation;

		const children = vnode.children as any[];
		const flatChildren = Array.isArray(children) ? children.flat() : children ? [children] : [];

		let panelIdx = 0;
		let triggerIdx = 0;

		const processedChildren = flatChildren.map((child: any) => {
			if (!child || typeof child !== "object") return child;

			if (child.tag === SplitterPanel) {
				const idx = panelIdx++;
				const size = this.sizes[idx];
				const sizeStyle = size !== undefined
					? (orientation === "horizontal"
						? { width: `${size}%`, minWidth: 0 }
						: { height: `${size}%`, minHeight: 0 })
					: {};
				return m(SplitterPanel, {
					...child.attrs,
					style: { ...sizeStyle, ...(child.attrs?.style || {}) },
				}, child.children);
			}

			if (child.tag === SplitterResizeTrigger) {
				const idx = triggerIdx++;
				return m(SplitterResizeTrigger, {
					...child.attrs,
					_orientation: orientation,
					_onMouseDown: (e: MouseEvent) => this.handleMouseDown(e, idx),
				}, child.children);
			}

			return child;
		});

		return (
			<div
				{...rest}
				class={classNames(
					styles.root,
					orientation === "vertical" ? styles.vertical : styles.horizontal,
					this.dragging && styles.dragging,
					className,
				)}
				style={style}
			>
				{processedChildren}
			</div>
		);
	}
}

/**
 * @class SplitterPanel
 * @description スプリッターの個別パネル
 */
class SplitterPanel implements m.ClassComponent<SplitterPanelAttrs> {
	view(vnode: m.Vnode<SplitterPanelAttrs>) {
		const { defaultSize, minSize, maxSize, collapsible, class: className, ...rest } = vnode.attrs;
		return (
			<div {...rest} class={classNames(styles.panel, className)}>
				{vnode.children}
			</div>
		);
	}
}

/**
 * @class SplitterResizeTrigger
 * @description ドラッグ可能なリサイズハンドル
 */
class SplitterResizeTrigger implements m.ClassComponent<SplitterResizeTriggerAttrs & { _orientation?: string; _onMouseDown?: (e: MouseEvent) => void }> {
	view(vnode: m.Vnode<SplitterResizeTriggerAttrs & { _orientation?: string; _onMouseDown?: (e: MouseEvent) => void }>) {
		const { disabled, class: className, _orientation, _onMouseDown, ...rest } = vnode.attrs;
		const isVertical = _orientation === "vertical";

		return (
			<div
				{...rest}
				role="separator"
				tabindex={0}
				class={classNames(
					styles.trigger,
					isVertical ? styles.triggerVertical : styles.triggerHorizontal,
					disabled && styles.triggerDisabled,
					className,
				)}
				onmousedown={disabled ? undefined : _onMouseDown}
			>
				<span class={styles.triggerBar} />
			</div>
		);
	}
}

/**
 * Splitter 複合コンポーネント namespace
 */
const Splitter = {
	Root: SplitterRoot,
	Panel: SplitterPanel,
	ResizeTrigger: SplitterResizeTrigger,
};

export { Splitter, SplitterRoot, SplitterPanel, SplitterResizeTrigger };
