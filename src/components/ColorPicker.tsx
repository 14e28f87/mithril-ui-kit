/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./ColorPicker.module.scss";

// ===========================
// 型定義
// ===========================

/** HSVA カラーモデル */
export type HsvaColor = { h: number; s: number; v: number; a: number };

/** カラーフォーマット */
export type ColorFormat = "hex" | "hexa" | "rgb" | "rgba" | "hsl" | "hsla";

/** サイズ */
export type ColorPickerSize = "sm" | "md" | "lg";

/** 値変更詳細 */
export type ColorPickerValueChangeDetails = {
	value: string;
	valueAsColor: HsvaColor;
};

/**
 * ColorPicker.Root に渡せる属性
 */
export type ColorPickerRootAttrs = {
	/** カラー値（文字列: hex, rgb, hsl）— 制御モード */
	value?: string;
	/** 初期値（非制御モード） */
	defaultValue?: string;
	/** 値変更時のコールバック */
	onValueChange?: (details: ColorPickerValueChangeDetails) => void;
	/** 値コミット時のコールバック */
	onValueChangeEnd?: (details: ColorPickerValueChangeDetails) => void;
	/** 表示フォーマット */
	format?: ColorFormat;
	/** サイズ */
	size?: ColorPickerSize;
	/** 無効化 */
	disabled?: boolean;
	/** 読み取り専用 */
	readOnly?: boolean;
	/** フォーム送信用 name */
	name?: string;
	/** formRef */
	formRef?: any;
	/** 追加クラス */
	class?: string;
	/** スタイル */
	style?: Record<string, string>;
};

// マーカー属性
export type ColorPickerLabelAttrs = { class?: string; style?: Record<string, string> };
export type ColorPickerControlAttrs = { class?: string; style?: Record<string, string> };
export type ColorPickerInputAttrs = { class?: string; style?: Record<string, string> };
export type ColorPickerTriggerAttrs = { class?: string; style?: Record<string, string> };
export type ColorPickerContentAttrs = { class?: string; style?: Record<string, string> };
export type ColorPickerAreaAttrs = { class?: string; style?: Record<string, string> };
export type ColorPickerChannelSliderAttrs = { channel?: "hue" | "alpha"; class?: string; style?: Record<string, string> };
export type ColorPickerSwatchGroupAttrs = { class?: string; style?: Record<string, string> };
export type ColorPickerSwatchTriggerAttrs = { value: string; class?: string; style?: Record<string, string> };
export type ColorPickerSwatchAttrs = { value?: string; class?: string; style?: Record<string, string> };
export type ColorPickerEyeDropperAttrs = { class?: string; style?: Record<string, string> };

// ===========================
// ロール
// ===========================

type CPRole =
	| "label" | "control" | "input" | "trigger" | "positioner" | "content"
	| "area" | "channelSlider" | "swatchGroup" | "swatchTrigger" | "swatch" | "eyeDropper";

// ===========================
// マーカー
// ===========================

export class CPLabelMarker implements m.Component<ColorPickerLabelAttrs> {
	static __cpRole: CPRole = "label";
	view(vnode: m.Vnode<ColorPickerLabelAttrs>) { return <div>{vnode.children}</div>; }
}
export class CPControlMarker implements m.Component<ColorPickerControlAttrs> {
	static __cpRole: CPRole = "control";
	view(vnode: m.Vnode<ColorPickerControlAttrs>) { return <div>{vnode.children}</div>; }
}
export class CPInputMarker implements m.Component<ColorPickerInputAttrs> {
	static __cpRole: CPRole = "input";
	view(vnode: m.Vnode<ColorPickerInputAttrs>) { return <div>{vnode.children}</div>; }
}
export class CPTriggerMarker implements m.Component<ColorPickerTriggerAttrs> {
	static __cpRole: CPRole = "trigger";
	view(vnode: m.Vnode<ColorPickerTriggerAttrs>) { return <div>{vnode.children}</div>; }
}
export class CPContentMarker implements m.Component<ColorPickerContentAttrs> {
	static __cpRole: CPRole = "content";
	view(vnode: m.Vnode<ColorPickerContentAttrs>) { return <div>{vnode.children}</div>; }
}
export class CPAreaMarker implements m.Component<ColorPickerAreaAttrs> {
	static __cpRole: CPRole = "area";
	view(vnode: m.Vnode<ColorPickerAreaAttrs>) { return <div>{vnode.children}</div>; }
}
export class CPChannelSliderMarker implements m.Component<ColorPickerChannelSliderAttrs> {
	static __cpRole: CPRole = "channelSlider";
	view(vnode: m.Vnode<ColorPickerChannelSliderAttrs>) { return <div>{vnode.children}</div>; }
}
export class CPSwatchGroupMarker implements m.Component<ColorPickerSwatchGroupAttrs> {
	static __cpRole: CPRole = "swatchGroup";
	view(vnode: m.Vnode<ColorPickerSwatchGroupAttrs>) { return <div>{vnode.children}</div>; }
}
export class CPSwatchTriggerMarker implements m.Component<ColorPickerSwatchTriggerAttrs> {
	static __cpRole: CPRole = "swatchTrigger";
	view(vnode: m.Vnode<ColorPickerSwatchTriggerAttrs>) { return <div>{vnode.children}</div>; }
}
export class CPSwatchMarker implements m.Component<ColorPickerSwatchAttrs> {
	static __cpRole: CPRole = "swatch";
	view(vnode: m.Vnode<ColorPickerSwatchAttrs>) { return <div>{vnode.children}</div>; }
}
export class CPEyeDropperMarker implements m.Component<ColorPickerEyeDropperAttrs> {
	static __cpRole: CPRole = "eyeDropper";
	view(vnode: m.Vnode<ColorPickerEyeDropperAttrs>) { return <div>{vnode.children}</div>; }
}

// ===========================
// カラーユーティリティ
// ===========================

/** 16進数文字列を HSVA に変換 */
function hexToHsva(hex: string): HsvaColor {
	hex = hex.replace(/^#/, "");
	let a = 1;
	if (hex.length === 8) {
		a = parseInt(hex.slice(6, 8), 16) / 255;
		hex = hex.slice(0, 6);
	} else if (hex.length === 4) {
		a = parseInt(hex[3] + hex[3], 16) / 255;
		hex = hex.slice(0, 3);
	}
	if (hex.length === 3) hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	const r = parseInt(hex.slice(0, 2), 16) / 255;
	const g = parseInt(hex.slice(2, 4), 16) / 255;
	const b = parseInt(hex.slice(4, 6), 16) / 255;
	return rgbToHsva(r, g, b, a);
}

function rgbToHsva(r: number, g: number, b: number, a: number): HsvaColor {
	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	const d = max - min;
	let h = 0;
	if (d !== 0) {
		if (max === r) h = ((g - b) / d + 6) % 6;
		else if (max === g) h = (b - r) / d + 2;
		else h = (r - g) / d + 4;
		h *= 60;
	}
	const s = max === 0 ? 0 : d / max;
	return { h, s, v: max, a };
}

/** HSVA → hex */
function hsvaToHex(c: HsvaColor, includeAlpha = false): string {
	const { r, g, b } = hsvaToRgb(c);
	const hex = "#" + [r, g, b].map((x) => Math.round(x * 255).toString(16).padStart(2, "0")).join("");
	if (includeAlpha) {
		return hex + Math.round(c.a * 255).toString(16).padStart(2, "0");
	}
	return hex;
}

function hsvaToRgb(c: HsvaColor): { r: number; g: number; b: number } {
	const { h, s, v } = c;
	const i = Math.floor(h / 60) % 6;
	const f = h / 60 - Math.floor(h / 60);
	const p = v * (1 - s);
	const q = v * (1 - f * s);
	const t = v * (1 - (1 - f) * s);
	const map: [number, number, number][] = [
		[v, t, p], [q, v, p], [p, v, t], [p, q, v], [t, p, v], [v, p, q],
	];
	const [r, g, b] = map[i];
	return { r, g, b };
}

/** CSS カラー文字列 → HSVA（hex / rgb() / hsl() に対応） */
function parseColor(str: string): HsvaColor {
	str = str.trim().toLowerCase();
	// hex
	if (str.startsWith("#")) return hexToHsva(str);
	// rgb/rgba
	const rgbMatch = str.match(/rgba?\(\s*(\d+)[,\s]+(\d+)[,\s]+(\d+)(?:[,\s/]+([\d.]+))?\)/);
	if (rgbMatch) {
		return rgbToHsva(
			parseInt(rgbMatch[1]) / 255,
			parseInt(rgbMatch[2]) / 255,
			parseInt(rgbMatch[3]) / 255,
			rgbMatch[4] !== undefined ? parseFloat(rgbMatch[4]) : 1,
		);
	}
	// デフォルト黒
	return { h: 0, s: 0, v: 0, a: 1 };
}

/** HSVA → フォーマット文字列 */
function formatColor(c: HsvaColor, f: ColorFormat): string {
	switch (f) {
		case "hexa": return hsvaToHex(c, true);
		case "rgb": {
			const { r, g, b } = hsvaToRgb(c);
			return `rgb(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)})`;
		}
		case "rgba": {
			const { r, g, b } = hsvaToRgb(c);
			return `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, ${c.a.toFixed(2)})`;
		}
		case "hsl": {
			const [hl, sl, l] = hsvaToHsl(c);
			return `hsl(${Math.round(hl)}, ${Math.round(sl)}%, ${Math.round(l)}%)`;
		}
		case "hsla": {
			const [hl, sl, l] = hsvaToHsl(c);
			return `hsla(${Math.round(hl)}, ${Math.round(sl)}%, ${Math.round(l)}%, ${c.a.toFixed(2)})`;
		}
		default: return hsvaToHex(c);
	}
}

function hsvaToHsl(c: HsvaColor): [number, number, number] {
	const l = c.v * (1 - c.s / 2);
	const sl = l === 0 || l === 1 ? 0 : (c.v - l) / Math.min(l, 1 - l);
	return [c.h, sl * 100, l * 100];
}

function capitalize(s: string): string {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

// ===========================
// メインコンポーネント
// ===========================

function findAllMarkers(children: m.Children): m.Vnode<any>[] {
	const result: m.Vnode<any>[] = [];
	if (!children) return result;
	const arr = Array.isArray(children) ? children : [children];
	for (const child of arr) {
		if (child && typeof child === "object" && "tag" in child) {
			const tag = child.tag as any;
			if (tag && tag.__cpRole) {
				result.push(child);
			}
		}
	}
	return result;
}

/**
 * @class ColorPickerRoot
 * @description
 * Chakra UI 風のカラーピッカー compound component。
 *
 * 色相・彩度・明度の2Dエリア、Hue / Alpha スライダー、
 * SW atch プリセット、テキスト入力をサポートする。
 *
 * @example
 * <ColorPicker.Root defaultValue="#ff0000">
 *   <ColorPicker.Label>Color</ColorPicker.Label>
 *   <ColorPicker.Control>
 *     <ColorPicker.Input />
 *     <ColorPicker.Trigger />
 *   </ColorPicker.Control>
 *   <ColorPicker.Positioner>
 *     <ColorPicker.Content>
 *       <ColorPicker.Area />
 *       <ColorPicker.ChannelSlider channel="hue" />
 *       <ColorPicker.ChannelSlider channel="alpha" />
 *     </ColorPicker.Content>
 *   </ColorPicker.Positioner>
 * </ColorPicker.Root>
 */
export class ColorPickerRoot implements m.Component<ColorPickerRootAttrs> {
	private internalColor: HsvaColor = { h: 0, s: 1, v: 1, a: 1 };
	private isOpen = false;
	private areaEl: HTMLElement | null = null;
	private dragging = false;
	private rootEl: HTMLElement | null = null;
	private boundDocClick: ((e: MouseEvent) => void) | null = null;

	oninit(vnode: m.Vnode<ColorPickerRootAttrs>) {
		const val = vnode.attrs.defaultValue ?? vnode.attrs.value ?? "#ff0000";
		this.internalColor = parseColor(val);
	}

	oncreate(vnode: m.VnodeDOM<ColorPickerRootAttrs>) {
		this.rootEl = vnode.dom as HTMLElement;
		this.boundDocClick = (e: MouseEvent) => {
			if (!this.isOpen || !this.rootEl) return;
			// composedPath() で Shadow DOM 境界を超えた実際のパスを確認する
			const path = e.composedPath ? e.composedPath() : [];
			const isInside = path.length > 0
				? path.some(node => node === this.rootEl)
				: this.rootEl.contains(e.target as Node);
			if (!isInside) {
				this.isOpen = false;
				m.redraw();
			}
		};
		document.addEventListener("mousedown", this.boundDocClick);
	}

	onremove() {
		if (this.boundDocClick) {
			document.removeEventListener("mousedown", this.boundDocClick);
			this.boundDocClick = null;
		}
	}

	private isControlled(attrs: ColorPickerRootAttrs): boolean {
		return attrs.value !== undefined;
	}

	private getColor(attrs: ColorPickerRootAttrs): HsvaColor {
		if (this.isControlled(attrs)) {
			return parseColor(attrs.value!);
		}
		return this.internalColor;
	}

	private getFormat(attrs: ColorPickerRootAttrs): ColorFormat {
		return attrs.format ?? "hex";
	}

	private emitChange(attrs: ColorPickerRootAttrs, color: HsvaColor) {
		const fmt = this.getFormat(attrs);
		const value = formatColor(color, fmt);
		if (!this.isControlled(attrs)) {
			this.internalColor = color;
		}
		attrs.onValueChange?.({ value, valueAsColor: color });
		m.redraw();
	}

	private emitChangeEnd(attrs: ColorPickerRootAttrs, color: HsvaColor) {
		const fmt = this.getFormat(attrs);
		attrs.onValueChangeEnd?.({ value: formatColor(color, fmt), valueAsColor: color });
	}

	// --- Area ドラッグ ---
	private startAreaDrag(attrs: ColorPickerRootAttrs, e: MouseEvent | TouchEvent) {
		if (attrs.disabled || attrs.readOnly) return;
		this.dragging = true;
		this.updateAreaFromEvent(attrs, e);

		const onMove = (ev: MouseEvent | TouchEvent) => {
			ev.preventDefault();
			this.updateAreaFromEvent(attrs, ev);
		};
		const onUp = () => {
			this.dragging = false;
			this.emitChangeEnd(attrs, this.getColor(attrs));
			document.removeEventListener("mousemove", onMove);
			document.removeEventListener("mouseup", onUp);
			document.removeEventListener("touchmove", onMove);
			document.removeEventListener("touchend", onUp);
		};
		document.addEventListener("mousemove", onMove);
		document.addEventListener("mouseup", onUp);
		document.addEventListener("touchmove", onMove, { passive: false });
		document.addEventListener("touchend", onUp);
	}

	private updateAreaFromEvent(attrs: ColorPickerRootAttrs, e: MouseEvent | TouchEvent) {
		if (!this.areaEl) return;
		const rect = this.areaEl.getBoundingClientRect();
		const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
		const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
		const s = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
		const v = Math.max(0, Math.min(1, 1 - (clientY - rect.top) / rect.height));
		const color = { ...this.getColor(attrs), s, v };
		this.emitChange(attrs, color);
	}

	// --- スライダーハンドル ---
	private startSliderDrag(
		attrs: ColorPickerRootAttrs,
		channel: "hue" | "alpha",
		e: MouseEvent | TouchEvent,
		sliderEl: HTMLElement,
	) {
		if (attrs.disabled || attrs.readOnly) return;
		const update = (ev: MouseEvent | TouchEvent) => {
			const rect = sliderEl.getBoundingClientRect();
			const clientX = "touches" in ev ? ev.touches[0].clientX : ev.clientX;
			const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
			const color = { ...this.getColor(attrs) };
			if (channel === "hue") color.h = ratio * 360;
			else color.a = ratio;
			this.emitChange(attrs, color);
		};
		update(e);
		const onMove = (ev: MouseEvent | TouchEvent) => { ev.preventDefault(); update(ev); };
		const onUp = () => {
			this.emitChangeEnd(attrs, this.getColor(attrs));
			document.removeEventListener("mousemove", onMove);
			document.removeEventListener("mouseup", onUp);
			document.removeEventListener("touchmove", onMove);
			document.removeEventListener("touchend", onUp);
		};
		document.addEventListener("mousemove", onMove);
		document.addEventListener("mouseup", onUp);
		document.addEventListener("touchmove", onMove, { passive: false });
		document.addEventListener("touchend", onUp);
	}

	view(vnode: m.Vnode<ColorPickerRootAttrs>) {
		const attrs = vnode.attrs;
		const color = this.getColor(attrs);
		const size = attrs.size ?? "md";
		const fmt = this.getFormat(attrs);
		const colorStr = formatColor(color, fmt);
		const hexStr = hsvaToHex(color);

		const markers = findAllMarkers(vnode.children);

		return (
			<div
				class={classNames(
					styles.root,
					(styles as any)[`size${capitalize(size)}`],
					{ [styles.disabled]: attrs.disabled },
					attrs.class,
				)}
				style={attrs.style}
				data-scope="color-picker"
				data-part="root"
			>
				{this.renderChildren(vnode.children, attrs, color, colorStr, hexStr, fmt)}

				{/* 隠し input */}
				{attrs.name && <input type="hidden" name={attrs.name} value={colorStr} />}
			</div>
		);
	}

	private renderChildren(
		children: m.Children,
		attrs: ColorPickerRootAttrs,
		color: HsvaColor,
		colorStr: string,
		hexStr: string,
		fmt: ColorFormat,
	): m.Children {
		if (!children) return null;
		const arr = Array.isArray(children) ? children : [children];
		return arr.map((child) => {
			if (!child || typeof child !== "object" || !("tag" in child)) return child;
			const tag = child.tag as any;
			if (!tag || !tag.__cpRole) return child;

			const role: CPRole = tag.__cpRole;

			switch (role) {
				case "label":
					return (
						<span
							class={classNames(styles.label, child.attrs?.class)}
							style={child.attrs?.style}
							data-part="label"
						>
							{child.children}
						</span>
					);

				case "control":
					return (
						<div
							class={classNames(styles.control, child.attrs?.class)}
							style={child.attrs?.style}
							data-part="control"
						>
							{this.renderChildren(child.children, attrs, color, colorStr, hexStr, fmt)}
						</div>
					);

				case "input":
					return (
						<input
							class={classNames(styles.input, child.attrs?.class)}
							style={child.attrs?.style}
							type="text"
							value={colorStr}
							data-part="input"
							oninput={(e: Event) => {
								const v = (e.target as HTMLInputElement).value;
								try {
									const c = parseColor(v);
									this.emitChange(attrs, c);
								} catch { }
							}}
							onblur={(e: Event) => {
								const v = (e.target as HTMLInputElement).value;
								try {
									const c = parseColor(v);
									this.emitChangeEnd(attrs, c);
								} catch { }
							}}
						/>
					);

				case "trigger":
					return (
						<button
							type="button"
							class={classNames(styles.trigger, child.attrs?.class)}
							style={{ ...(child.attrs?.style ?? {}), "--cp-current-color": hexStr } as any}
							data-part="trigger"
							onclick={() => { this.isOpen = !this.isOpen; }}
						>
							{child.children}
						</button>
					);

				case "positioner":
					if (!this.isOpen) return null;
					return (
						<div
							class={classNames(styles.positioner, child.attrs?.class)}
							data-part="positioner"
						>
							{this.renderChildren(child.children, attrs, color, colorStr, hexStr, fmt)}
						</div>
					);

				case "content":
					return (
						<div
							class={classNames(styles.content, child.attrs?.class)}
							style={child.attrs?.style}
							data-part="content"
						>
							{this.renderChildren(child.children, attrs, color, colorStr, hexStr, fmt)}
						</div>
					);

				case "area":
					return (
						<div
							class={classNames(styles.area, child.attrs?.class)}
							style={{
								...(child.attrs?.style ?? {}),
								"--cp-hue-bg": `hsl(${color.h}, 100%, 50%)`,
							} as any}
							data-part="area"
							oncreate={(v: m.VnodeDOM) => { this.areaEl = v.dom as HTMLElement; }}
							onupdate={(v: m.VnodeDOM) => { this.areaEl = v.dom as HTMLElement; }}
							onmousedown={(e: MouseEvent) => this.startAreaDrag(attrs, e)}
							ontouchstart={(e: TouchEvent) => this.startAreaDrag(attrs, e)}
						>
							<div
								class={styles.areaThumb}
								style={{
									left: `${color.s * 100}%`,
									top: `${(1 - color.v) * 100}%`,
									backgroundColor: hexStr,
								}}
								data-part="area-thumb"
							/>
						</div>
					);

				case "channelSlider": {
					const channel = child.attrs?.channel ?? "hue";
					return (
						<div
							class={classNames(
								styles.channelSlider,
								channel === "hue" ? styles.hueSlider : styles.alphaSlider,
								child.attrs?.class,
							)}
							style={{
								...(child.attrs?.style ?? {}),
								...(channel === "alpha" ? { "--cp-alpha-end": hexStr } : {}),
							} as any}
							data-part={`channel-slider-${channel}`}
							onmousedown={(e: MouseEvent) => {
								this.startSliderDrag(attrs, channel, e, e.currentTarget as HTMLElement);
							}}
							ontouchstart={(e: TouchEvent) => {
								this.startSliderDrag(attrs, channel, e, e.currentTarget as HTMLElement);
							}}
						>
							<div
								class={styles.sliderThumb}
								style={{
									left: `${channel === "hue" ? (color.h / 360) * 100 : color.a * 100}%`,
									backgroundColor: channel === "hue"
										? `hsl(${color.h}, 100%, 50%)`
										: hexStr,
								}}
								data-part="slider-thumb"
							/>
						</div>
					);
				}

				case "swatchGroup":
					return (
						<div
							class={classNames(styles.swatchGroup, child.attrs?.class)}
							style={child.attrs?.style}
							data-part="swatch-group"
						>
							{this.renderChildren(child.children, attrs, color, colorStr, hexStr, fmt)}
						</div>
					);

				case "swatchTrigger": {
					const swatchValue = child.attrs?.value ?? "#000000";
					return (
						<button
							type="button"
							class={classNames(styles.swatchTrigger, child.attrs?.class)}
							style={child.attrs?.style}
							data-part="swatch-trigger"
							onclick={() => {
								const c = parseColor(swatchValue);
								this.emitChange(attrs, c);
								this.emitChangeEnd(attrs, c);
								this.isOpen = false;
							}}
						>
							{(Array.isArray(child.children) ? child.children.length > 0 : !!child.children) ? child.children : (
								<div
									class={styles.swatch}
									style={{ backgroundColor: swatchValue }}
									data-part="swatch"
								/>
							)}
						</button>
					);
				}

				case "swatch":
					return (
						<div
							class={classNames(styles.swatch, child.attrs?.class)}
							style={{ ...(child.attrs?.style ?? {}), backgroundColor: child.attrs?.value ?? hexStr }}
							data-part="swatch"
						/>
					);

				case "eyeDropper":
					return (
						<button
							type="button"
							class={classNames(styles.eyeDropper, child.attrs?.class)}
							style={child.attrs?.style}
							data-part="eye-dropper"
							onclick={async () => {
								if ("EyeDropper" in window) {
									try {
										const dropper = new (window as any).EyeDropper();
										const result = await dropper.open();
										const c = parseColor(result.sRGBHex);
										this.emitChange(attrs, c);
										this.emitChangeEnd(attrs, c);
									} catch { }
								}
							}}
						>
							{(Array.isArray(child.children) ? child.children.length > 0 : !!child.children) ? child.children : "🎨"}
						</button>
					);

				default:
					return child;
			}
		});
	}
}

// ===========================
// Positioner マーカー（Content を直接開閉と位置制御する）
// ===========================

/**
 * Positioner は Content のラッパー。
 * Root 内部で content マーカーの表示制御に使う。
 * 実際の描画は Root 側で行うため identity 通過させる。
 */
export class CPPositionerMarker implements m.Component<{ class?: string; style?: Record<string, string> }> {
	static __cpRole: CPRole = "positioner";
	view(vnode: m.Vnode) { return <div>{vnode.children}</div>; }
}

// ===========================
// バンドルエクスポート
// ===========================

/**
 * ColorPicker compound component
 *
 * @example
 * ```tsx
 * <ColorPicker.Root defaultValue="#3b82f6">
 *   <ColorPicker.Label>Color</ColorPicker.Label>
 *   <ColorPicker.Control>
 *     <ColorPicker.Input />
 *     <ColorPicker.Trigger />
 *   </ColorPicker.Control>
 *   <ColorPicker.Positioner>
 *     <ColorPicker.Content>
 *       <ColorPicker.Area />
 *       <ColorPicker.ChannelSlider channel="hue" />
 *     </ColorPicker.Content>
 *   </ColorPicker.Positioner>
 * </ColorPicker.Root>
 * ```
 */
export const ColorPicker = {
	Root: ColorPickerRoot,
	Label: CPLabelMarker,
	Control: CPControlMarker,
	Input: CPInputMarker,
	Trigger: CPTriggerMarker,
	Positioner: CPPositionerMarker,
	Content: CPContentMarker,
	Area: CPAreaMarker,
	ChannelSlider: CPChannelSliderMarker,
	SwatchGroup: CPSwatchGroupMarker,
	SwatchTrigger: CPSwatchTriggerMarker,
	Swatch: CPSwatchMarker,
	EyeDropper: CPEyeDropperMarker,
};
