/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Slider.module.scss";

// ===========================
// 型定義
// ===========================

/** Slider のサイズ */
export type SliderSize = "sm" | "md" | "lg";

/** Slider の外観バリアント */
export type SliderVariant = "outline" | "solid";

/** Slider の方向 */
export type SliderOrientation = "horizontal" | "vertical";

/** 値変更時の詳細 */
export type SliderValueChangeDetails = {
	value: number[];
};

/**
 * Slider.Root に渡せる属性
 */
export type SliderRootAttrs = {
	/** 最小値 */
	min?: number;
	/** 最大値 */
	max?: number;
	/** ステップ */
	step?: number;
	/** 現在の値（制御モード、配列でマルチサム対応） */
	value?: number[];
	/** 初期値（非制御モード） */
	defaultValue?: number[];
	/** 値変更コールバック（ドラッグ中も発火） */
	onValueChange?: (details: SliderValueChangeDetails) => void;
	/** 値変更完了コールバック（ドラッグ終了時のみ） */
	onValueChangeEnd?: (details: SliderValueChangeDetails) => void;
	/** 方向 */
	orientation?: SliderOrientation;
	/** サイズ */
	size?: SliderSize;
	/** 外観 */
	variant?: SliderVariant;
	/** 無効化 */
	disabled?: boolean;
	/** 読み取り専用 */
	readOnly?: boolean;
	/** origin: 範囲の起点（デフォルト: "start"） */
	origin?: "start" | "center";
	/** マルチサム時の最小ステップ間隔 */
	minStepsBetweenThumbs?: number;
	class?: string;
	style?: Record<string, string>;
};

/** Slider.Label に渡せる属性 */
export type SliderLabelAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Slider.ValueText に渡せる属性 */
export type SliderValueTextAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Slider.Control に渡せる属性 */
export type SliderControlAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Slider.Track に渡せる属性 */
export type SliderTrackAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Slider.Range に渡せる属性 */
export type SliderRangeAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Slider.Thumb に渡せる属性 */
export type SliderThumbAttrs = {
	/** サムのインデックス */
	index?: number;
	class?: string;
	style?: Record<string, string>;
};

/** Slider.DraggingIndicator に渡せる属性 */
export type SliderDraggingIndicatorAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Slider.HiddenInput に渡せる属性 */
export type SliderHiddenInputAttrs = {
	class?: string;
};

/** Slider.MarkerGroup に渡せる属性 */
export type SliderMarkerGroupAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Slider.Marker に渡せる属性 */
export type SliderMarkerAttrs = {
	/** マーカーの値 */
	value: number;
	class?: string;
	style?: Record<string, string>;
};

// ===========================
// 内部ロール定義
// ===========================

type SliderRole =
	| "label"
	| "valueText"
	| "control"
	| "track"
	| "range"
	| "thumb"
	| "draggingIndicator"
	| "hiddenInput"
	| "markerGroup"
	| "marker";

// ===========================
// マーカーコンポーネント
// ===========================

/** Slider.Label マーカー */
export class SliderLabelMarker implements m.Component<SliderLabelAttrs> {
	static __sliderRole: SliderRole = "label";
	view(vnode: m.Vnode<SliderLabelAttrs>) { return <div>{vnode.children}</div>; }
}

/** Slider.ValueText マーカー */
export class SliderValueTextMarker implements m.Component<SliderValueTextAttrs> {
	static __sliderRole: SliderRole = "valueText";
	view(vnode: m.Vnode<SliderValueTextAttrs>) { return <div>{vnode.children}</div>; }
}

/** Slider.Control マーカー */
export class SliderControlMarker implements m.Component<SliderControlAttrs> {
	static __sliderRole: SliderRole = "control";
	view(vnode: m.Vnode<SliderControlAttrs>) { return <div>{vnode.children}</div>; }
}

/** Slider.Track マーカー */
export class SliderTrackMarker implements m.Component<SliderTrackAttrs> {
	static __sliderRole: SliderRole = "track";
	view(vnode: m.Vnode<SliderTrackAttrs>) { return <div>{vnode.children}</div>; }
}

/** Slider.Range マーカー */
export class SliderRangeMarker implements m.Component<SliderRangeAttrs> {
	static __sliderRole: SliderRole = "range";
	view(vnode: m.Vnode<SliderRangeAttrs>) { return <div>{vnode.children}</div>; }
}

/** Slider.Thumb マーカー */
export class SliderThumbMarker implements m.Component<SliderThumbAttrs> {
	static __sliderRole: SliderRole = "thumb";
	view(vnode: m.Vnode<SliderThumbAttrs>) { return <div>{vnode.children}</div>; }
}

/** Slider.DraggingIndicator マーカー */
export class SliderDraggingIndicatorMarker implements m.Component<SliderDraggingIndicatorAttrs> {
	static __sliderRole: SliderRole = "draggingIndicator";
	view(vnode: m.Vnode<SliderDraggingIndicatorAttrs>) { return <div>{vnode.children}</div>; }
}

/** Slider.HiddenInput マーカー */
export class SliderHiddenInputMarker implements m.Component<SliderHiddenInputAttrs> {
	static __sliderRole: SliderRole = "hiddenInput";
	view(vnode: m.Vnode<SliderHiddenInputAttrs>) { return <div>{vnode.children}</div>; }
}

/** Slider.MarkerGroup マーカー */
export class SliderMarkerGroupMarker implements m.Component<SliderMarkerGroupAttrs> {
	static __sliderRole: SliderRole = "markerGroup";
	view(vnode: m.Vnode<SliderMarkerGroupAttrs>) { return <div>{vnode.children}</div>; }
}

/** Slider.Marker マーカー */
export class SliderMarkerMarker implements m.Component<SliderMarkerAttrs> {
	static __sliderRole: SliderRole = "marker";
	view(vnode: m.Vnode<SliderMarkerAttrs>) { return <div>{vnode.children}</div>; }
}

// ===========================
// ユーティリティ
// ===========================

function capitalize(s: string): string {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

function clamp(val: number, min: number, max: number): number {
	return Math.min(Math.max(val, min), max);
}

function roundToStep(val: number, step: number, min: number): number {
	const steps = Math.round((val - min) / step);
	return min + steps * step;
}

function percentOf(val: number, min: number, max: number): number {
	if (max === min) return 0;
	return ((val - min) / (max - min)) * 100;
}

/** VDOM の子要素からマーカー群を検出する */
function collectChildren(children: m.Children): { role: SliderRole; vnode: m.Vnode<any> }[] {
	const result: { role: SliderRole; vnode: m.Vnode<any> }[] = [];
	if (!children) return result;
	const arr = Array.isArray(children) ? children : [children];
	for (const child of arr) {
		if (child && typeof child === "object" && "tag" in child) {
			const tag = child.tag as any;
			if (tag && tag.__sliderRole) {
				result.push({ role: tag.__sliderRole, vnode: child });
			}
		}
	}
	return result;
}

/** Track の子を検出 */
function collectTrackChildren(vnode: m.Vnode<any>): {
	rangeVnode: m.Vnode<any> | null;
	thumbVnodes: m.Vnode<any>[];
} {
	const rangeVnode: m.Vnode<any> | null = null;
	const thumbVnodes: m.Vnode<any>[] = [];
	if (!vnode.children) return { rangeVnode, thumbVnodes };
	const arr = Array.isArray(vnode.children) ? vnode.children : [vnode.children];
	let foundRange: m.Vnode<any> | null = null;
	for (const child of arr) {
		if (child && typeof child === "object" && "tag" in child) {
			const tag = child.tag as any;
			if (tag?.__sliderRole === "range") foundRange = child;
			if (tag?.__sliderRole === "thumb") thumbVnodes.push(child);
		}
	}
	return { rangeVnode: foundRange, thumbVnodes };
}

// ===========================
// メインコンポーネント
// ===========================

/**
 * Slider.Root — スライダーのルートコンポーネント
 *
 * @description
 * Chakra UI 風の Slider compound component。
 * 単一サム・マルチサム・range スライダーに対応。
 * ドラッグ、キーボード操作、マーカー表示をサポート。
 */
export class SliderRoot implements m.Component<SliderRootAttrs> {
	private internalValue: number[] = [0];
	private draggingIndex: number = -1;
	private controlEl: HTMLElement | null = null;

	oninit(vnode: m.Vnode<SliderRootAttrs>) {
		const defaultVal = vnode.attrs.defaultValue ?? [vnode.attrs.min ?? 0];
		this.internalValue = [...defaultVal];
	}

	private isControlled(attrs: SliderRootAttrs): boolean {
		return attrs.value !== undefined;
	}

	private getValue(attrs: SliderRootAttrs): number[] {
		return this.isControlled(attrs) ? attrs.value! : this.internalValue;
	}

	private setValue(attrs: SliderRootAttrs, newValue: number[]) {
		if (!this.isControlled(attrs)) {
			this.internalValue = newValue;
		}
		attrs.onValueChange?.({ value: newValue });
	}

	private setValueAtIndex(attrs: SliderRootAttrs, index: number, rawVal: number) {
		const min = attrs.min ?? 0;
		const max = attrs.max ?? 100;
		const step = attrs.step ?? 1;
		const minSteps = attrs.minStepsBetweenThumbs ?? 0;

		let val = roundToStep(clamp(rawVal, min, max), step, min);
		// 小数精度を丸める
		val = parseFloat(val.toFixed(10));

		const current = [...this.getValue(attrs)];

		// マルチサム制約
		if (minSteps > 0 && current.length > 1) {
			const minGap = minSteps * step;
			if (index > 0 && val < current[index - 1] + minGap) {
				val = current[index - 1] + minGap;
			}
			if (index < current.length - 1 && val > current[index + 1] - minGap) {
				val = current[index + 1] - minGap;
			}
		}

		current[index] = val;
		this.setValue(attrs, current);
	}

	private getPercentFromPointer(e: PointerEvent, attrs: SliderRootAttrs): number {
		if (!this.controlEl) return 0;
		const rect = this.controlEl.getBoundingClientRect();
		const orientation = attrs.orientation ?? "horizontal";
		const min = attrs.min ?? 0;
		const max = attrs.max ?? 100;

		let ratio: number;
		if (orientation === "horizontal") {
			ratio = clamp((e.clientX - rect.left) / rect.width, 0, 1);
		} else {
			ratio = clamp(1 - (e.clientY - rect.top) / rect.height, 0, 1);
		}
		return min + ratio * (max - min);
	}

	private findClosestThumb(val: number, attrs: SliderRootAttrs): number {
		const values = this.getValue(attrs);
		let closest = 0;
		let minDist = Infinity;
		for (let i = 0; i < values.length; i++) {
			const dist = Math.abs(values[i] - val);
			if (dist < minDist) {
				minDist = dist;
				closest = i;
			}
		}
		return closest;
	}

	private handlePointerDown = (e: PointerEvent, attrs: SliderRootAttrs) => {
		if (attrs.disabled || attrs.readOnly) return;
		e.preventDefault();
		const val = this.getPercentFromPointer(e, attrs);
		const idx = this.findClosestThumb(val, attrs);
		this.draggingIndex = idx;
		this.setValueAtIndex(attrs, idx, val);

		const onMove = (ev: PointerEvent) => {
			const newVal = this.getPercentFromPointer(ev, attrs);
			this.setValueAtIndex(attrs, this.draggingIndex, newVal);
			m.redraw();
		};
		const onUp = (ev: PointerEvent) => {
			document.removeEventListener("pointermove", onMove);
			document.removeEventListener("pointerup", onUp);
			attrs.onValueChangeEnd?.({ value: this.getValue(attrs) });
			this.draggingIndex = -1;
			m.redraw();
		};
		document.addEventListener("pointermove", onMove);
		document.addEventListener("pointerup", onUp);
	};

	private handleKeyDown(e: KeyboardEvent, attrs: SliderRootAttrs, index: number) {
		if (attrs.disabled || attrs.readOnly) return;
		const step = attrs.step ?? 1;
		const min = attrs.min ?? 0;
		const max = attrs.max ?? 100;
		const bigStep = (max - min) / 10;
		const current = this.getValue(attrs)[index];
		let newVal: number | null = null;

		switch (e.key) {
			case "ArrowRight":
			case "ArrowUp":
				newVal = current + step;
				break;
			case "ArrowLeft":
			case "ArrowDown":
				newVal = current - step;
				break;
			case "PageUp":
				newVal = current + bigStep;
				break;
			case "PageDown":
				newVal = current - bigStep;
				break;
			case "Home":
				newVal = min;
				break;
			case "End":
				newVal = max;
				break;
		}

		if (newVal !== null) {
			e.preventDefault();
			this.setValueAtIndex(attrs, index, newVal);
			attrs.onValueChangeEnd?.({ value: this.getValue(attrs) });
		}
	}

	view(vnode: m.Vnode<SliderRootAttrs>) {
		const attrs = vnode.attrs;
		const min = attrs.min ?? 0;
		const max = attrs.max ?? 100;
		const size = attrs.size ?? "md";
		const variant = attrs.variant ?? "outline";
		const orientation = attrs.orientation ?? "horizontal";
		const origin = attrs.origin ?? "start";
		const values = this.getValue(attrs);
		const isDragging = this.draggingIndex >= 0;

		const markers = collectChildren(vnode.children);

		// ラベル・ValueText
		const labelVnode = markers.find(m => m.role === "label")?.vnode;
		const valueTextVnode = markers.find(m => m.role === "valueText")?.vnode;
		const controlVnode = markers.find(m => m.role === "control")?.vnode;
		const markerGroupVnode = markers.find(m => m.role === "markerGroup")?.vnode;

		// Track/Range/Thumb はコントロール内で探索
		let trackVnode: m.Vnode<any> | null = null;
		let rangeVnode: m.Vnode<any> | null = null;
		let thumbVnodes: m.Vnode<any>[] = [];

		if (controlVnode?.children) {
			const controlChildren = Array.isArray(controlVnode.children) ? controlVnode.children : [controlVnode.children];
			for (const child of controlChildren) {
				if (child && typeof child === "object" && "tag" in child) {
					const tag = child.tag as any;
					if (tag?.__sliderRole === "track") {
						trackVnode = child;
						const trackChildren = collectTrackChildren(child);
						rangeVnode = trackChildren.rangeVnode;
						thumbVnodes = trackChildren.thumbVnodes;
					}
					if (tag?.__sliderRole === "thumb") {
						thumbVnodes.push(child);
					}
				}
			}
		}

		// range スタイル計算
		const rangeStyle: Record<string, string> = {};
		if (values.length === 1) {
			const pct = percentOf(values[0], min, max);
			if (origin === "center") {
				const centerPct = 50;
				if (orientation === "horizontal") {
					rangeStyle.left = `${Math.min(centerPct, pct)}%`;
					rangeStyle.width = `${Math.abs(pct - centerPct)}%`;
				} else {
					rangeStyle.bottom = `${Math.min(centerPct, pct)}%`;
					rangeStyle.height = `${Math.abs(pct - centerPct)}%`;
				}
			} else {
				if (orientation === "horizontal") {
					rangeStyle.left = "0%";
					rangeStyle.width = `${pct}%`;
				} else {
					rangeStyle.bottom = "0%";
					rangeStyle.height = `${pct}%`;
				}
			}
		} else if (values.length >= 2) {
			const minPct = percentOf(Math.min(...values), min, max);
			const maxPct = percentOf(Math.max(...values), min, max);
			if (orientation === "horizontal") {
				rangeStyle.left = `${minPct}%`;
				rangeStyle.width = `${maxPct - minPct}%`;
			} else {
				rangeStyle.bottom = `${minPct}%`;
				rangeStyle.height = `${maxPct - minPct}%`;
			}
		}

		// マーカー
		let markerVnodes: m.Vnode<any>[] = [];
		if (markerGroupVnode?.children) {
			const arr = Array.isArray(markerGroupVnode.children) ? markerGroupVnode.children : [markerGroupVnode.children];
			for (const child of arr) {
				if (child && typeof child === "object" && "tag" in child) {
					const tag = child.tag as any;
					if (tag?.__sliderRole === "marker") markerVnodes.push(child);
				}
			}
		}

		return (
			<div
				class={classNames(
					styles.root,
					(styles as any)[`size${capitalize(size)}`],
					(styles as any)[`variant${capitalize(variant)}`],
					(styles as any)[`orientation${capitalize(orientation)}`],
					{
						[styles.disabled]: attrs.disabled,
						[styles.readOnly]: attrs.readOnly,
					},
					attrs.class,
				)}
				style={attrs.style}
				data-scope="slider"
				data-part="root"
				data-dragging={isDragging ? "true" : "false"}
				data-orientation={orientation}
			>
				{/* ヘッダー行（ラベル + ValueText） */}
				{(labelVnode || valueTextVnode) && (
					<div class={styles.headerRow}>
						{labelVnode && (
							<span
								class={classNames(styles.label, labelVnode.attrs.class)}
								style={labelVnode.attrs.style}
								data-part="label"
							>
								{labelVnode.children}
							</span>
						)}
						{valueTextVnode && (
							<span
								class={classNames(styles.valueText, valueTextVnode.attrs.class)}
								style={valueTextVnode.attrs.style}
								data-part="value-text"
							>
								{valueTextVnode.children ?? values.join(", ")}
							</span>
						)}
					</div>
				)}

				{/* コントロール */}
				<div
					class={classNames(styles.control, controlVnode?.attrs.class)}
					style={controlVnode?.attrs.style}
					data-part="control"
					data-orientation={orientation}
					oncreate={(v: m.VnodeDOM) => { this.controlEl = v.dom as HTMLElement; }}
					onupdate={(v: m.VnodeDOM) => { this.controlEl = v.dom as HTMLElement; }}
					onpointerdown={(e: PointerEvent) => this.handlePointerDown(e, attrs)}
				>
					{/* トラック */}
					<div
						class={classNames(styles.track, trackVnode?.attrs.class)}
						style={trackVnode?.attrs.style}
						data-part="track"
					>
						{/* レンジ */}
						<div
							class={classNames(styles.range, rangeVnode?.attrs.class)}
							style={{ ...rangeStyle, ...(rangeVnode?.attrs.style ?? {}) }}
							data-part="range"
						/>
					</div>

					{/* サムたち */}
					{values.map((val, i) => {
						const pct = percentOf(val, min, max);
						const thumbAttrs = thumbVnodes[i]?.attrs ?? thumbVnodes[0]?.attrs ?? {};
						const thumbStyle: Record<string, string> = { ...(thumbAttrs.style ?? {}) };
						if (orientation === "horizontal") {
							thumbStyle.left = `${pct}%`;
							thumbStyle.transform = "translateX(-50%)";
						} else {
							thumbStyle.bottom = `${pct}%`;
							thumbStyle.transform = "translateY(50%)";
						}

						return (
							<div
								key={i}
								class={classNames(styles.thumb, thumbAttrs.class)}
								style={thumbStyle}
								data-part="thumb"
								data-index={i}
								tabindex={attrs.disabled ? -1 : 0}
								role="slider"
								aria-valuemin={min}
								aria-valuemax={max}
								aria-valuenow={val}
								aria-orientation={orientation}
								aria-disabled={attrs.disabled}
								onkeydown={(e: KeyboardEvent) => this.handleKeyDown(e, attrs, i)}
							>
								{thumbVnodes[i]?.children}
							</div>
						);
					})}
				</div>

				{/* マーカーグループ */}
				{markerGroupVnode && markerVnodes.length > 0 && (
					<div
						class={classNames(styles.markerGroup, markerGroupVnode.attrs.class)}
						style={markerGroupVnode.attrs.style}
						data-part="marker-group"
					>
						{markerVnodes.map(mv => {
							const markerVal = mv.attrs.value as number;
							const pct = percentOf(markerVal, min, max);
							const markerStyle: Record<string, string> = { ...(mv.attrs.style ?? {}) };
							if (orientation === "horizontal") {
								markerStyle.left = `${pct}%`;
							} else {
								markerStyle.bottom = `${pct}%`;
							}
							return (
								<span
									key={markerVal}
									class={classNames(styles.marker, mv.attrs.class)}
									style={markerStyle}
									data-part="marker"
									data-value={markerVal}
								>
									{mv.children ?? markerVal}
								</span>
							);
						})}
					</div>
				)}
			</div>
		);
	}
}

// ===========================
// バンドルエクスポート
// ===========================

/**
 * Slider compound component
 *
 * @example
 * ```tsx
 * <Slider.Root min={0} max={100} defaultValue={[50]}>
 *   <Slider.Label>音量</Slider.Label>
 *   <Slider.ValueText />
 *   <Slider.Control>
 *     <Slider.Track>
 *       <Slider.Range />
 *     </Slider.Track>
 *     <Slider.Thumb index={0} />
 *   </Slider.Control>
 * </Slider.Root>
 * ```
 */
export const Slider = {
	Root: SliderRoot,
	Label: SliderLabelMarker,
	ValueText: SliderValueTextMarker,
	Control: SliderControlMarker,
	Track: SliderTrackMarker,
	Range: SliderRangeMarker,
	Thumb: SliderThumbMarker,
	DraggingIndicator: SliderDraggingIndicatorMarker,
	HiddenInput: SliderHiddenInputMarker,
	MarkerGroup: SliderMarkerGroupMarker,
	Marker: SliderMarkerMarker,
};
