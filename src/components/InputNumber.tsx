/** @jsx m */
/**
 * @fileoverview
 * InputNumber — compound component 型の数値入力コンポーネント
 *
 * @example
 * ```tsx
 * <InputNumber.Root defaultValue={10} min={0} max={100}>
 *   <InputNumber.Control />
 *   <InputNumber.Input />
 * </InputNumber.Root>
 * ```
 *
 * @module InputNumber
 */
/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./InputNumber.module.scss";

// ─── 型定義 ───

/** InputNumber のサイズ */
export type InputNumberSize = "xs" | "sm" | "md" | "lg";

/** InputNumber のバリエーション */
export type InputNumberVariant = "outline" | "filled" | "flushed";

/** 値変更イベントの詳細 */
export type InputNumberValueChangeDetails = {
	value: number | null;
	valueAsString: string;
};

/**
 * InputNumber.Root に渡せる属性
 */
export type InputNumberRootAttrs = {
	/** 最小値 */
	min?: number;
	/** 最大値 */
	max?: number;
	/** ステップ値（デフォルト: 1） */
	step?: number;
	/** 制御モード: 現在の値 */
	value?: number | null;
	/** 非制御モード: 初期値 */
	defaultValue?: number | null;
	/** 値変更コールバック */
	onValueChange?: (details: InputNumberValueChangeDetails) => void;
	/** Form 連携用の oninput（値を直接受け取る） */
	oninput?: (value: number | null) => void;
	/** Form 連携用の onblur */
	onblur?: () => void;
	/** 無効化 */
	disabled?: boolean;
	/** 読み取り専用 */
	readOnly?: boolean;
	/** フォーム用の name 属性 */
	name?: string;
	/** サイズ（デフォルト: "md"） */
	size?: InputNumberSize;
	/** バリエーション（デフォルト: "outline"） */
	variant?: InputNumberVariant;
	/** 小数点以下の桁数 */
	precision?: number;
	/** blur 時に min/max 範囲にクランプするか（デフォルト: true） */
	clampValueOnBlur?: boolean;
	/** マウスホイールで値を変更可能にするか */
	allowMouseWheel?: boolean;
	/** コンテナの幅 */
	width?: string;
	class?: string;
	style?: Record<string, string>;
};

/** InputNumber.Input に渡せる属性 */
export type InputNumberInputAttrs = {
	/** プレースホルダー */
	placeholder?: string;
	class?: string;
	style?: Record<string, string>;
};

/** InputNumber.Control に渡せる属性 */
export type InputNumberControlAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** InputNumber.IncrementTrigger に渡せる属性 */
export type InputNumberIncrementTriggerAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** InputNumber.DecrementTrigger に渡せる属性 */
export type InputNumberDecrementTriggerAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** InputNumber.Label に渡せる属性 */
export type InputNumberLabelAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** InputNumber.ValueText に渡せる属性 */
export type InputNumberValueTextAttrs = {
	class?: string;
	style?: Record<string, string>;
};

// ─── ロール ───
type InputNumberRole = "input" | "control" | "increment-trigger" | "decrement-trigger" | "label" | "value-text";

// ─── マーカークラス ───

/** @class InputNumberInputMarker - InputNumber の入力フィールドマーカー */
export class InputNumberInputMarker implements m.Component<InputNumberInputAttrs> {
	public static __inputNumberRole: InputNumberRole = "input";
	public view(vnode: m.Vnode<InputNumberInputAttrs>) { return <span>{vnode.children}</span>; }
}

/** @class InputNumberControlMarker - InputNumber のコントロール（増減ボタン）マーカー */
export class InputNumberControlMarker implements m.Component<InputNumberControlAttrs> {
	public static __inputNumberRole: InputNumberRole = "control";
	public view(vnode: m.Vnode<InputNumberControlAttrs>) { return <span>{vnode.children}</span>; }
}

/** @class InputNumberIncrementTriggerMarker - 増加ボタンマーカー */
export class InputNumberIncrementTriggerMarker implements m.Component<InputNumberIncrementTriggerAttrs> {
	public static __inputNumberRole: InputNumberRole = "increment-trigger";
	public view(vnode: m.Vnode<InputNumberIncrementTriggerAttrs>) { return <button type="button">{vnode.children}</button>; }
}

/** @class InputNumberDecrementTriggerMarker - 減少ボタンマーカー */
export class InputNumberDecrementTriggerMarker implements m.Component<InputNumberDecrementTriggerAttrs> {
	public static __inputNumberRole: InputNumberRole = "decrement-trigger";
	public view(vnode: m.Vnode<InputNumberDecrementTriggerAttrs>) { return <button type="button">{vnode.children}</button>; }
}

/** @class InputNumberLabelMarker - ラベルマーカー */
export class InputNumberLabelMarker implements m.Component<InputNumberLabelAttrs> {
	public static __inputNumberRole: InputNumberRole = "label";
	public view(vnode: m.Vnode<InputNumberLabelAttrs>) { return <label>{vnode.children}</label>; }
}

/** @class InputNumberValueTextMarker - 値テキスト表示マーカー */
export class InputNumberValueTextMarker implements m.Component<InputNumberValueTextAttrs> {
	public static __inputNumberRole: InputNumberRole = "value-text";
	public view(vnode: m.Vnode<InputNumberValueTextAttrs>) { return <span>{vnode.children}</span>; }
}

// ─── ユーティリティ ───

function toChildArray(children: m.Children): any[] {
	if (Array.isArray(children)) return children.flatMap(c => toChildArray(c));
	if (children === null || children === undefined || typeof children === "boolean") return [];
	return [children];
}

function isVnodeLike(v: any): v is m.Vnode<any> {
	return !!v && typeof v === "object" && "tag" in v;
}

function getRole(v: any): InputNumberRole | undefined {
	if (!isVnodeLike(v)) return undefined;
	return (v.tag as any)?.__inputNumberRole;
}

function capitalize(s: string): string {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

/** 値を precision に丸める */
function roundToPrecision(value: number, precision?: number): number {
	if (precision === undefined) return value;
	const factor = Math.pow(10, precision);
	return Math.round(value * factor) / factor;
}

/** 値を文字列に変換 */
function formatValue(value: number | null, precision?: number): string {
	if (value === null || value === undefined || isNaN(value)) return "";
	if (precision !== undefined) return value.toFixed(precision);
	return String(value);
}

/** 文字列を数値にパース */
function parseValue(str: string): number | null {
	if (str === "" || str === "-") return null;
	const n = Number(str);
	return isNaN(n) ? null : n;
}

/** min/max にクランプ */
function clamp(value: number, min?: number, max?: number): number {
	let v = value;
	if (min !== undefined && v < min) v = min;
	if (max !== undefined && v > max) v = max;
	return v;
}

// ─── Bootstrap Icons SVG ───

/**
 * 上向き三角アイコン
 * Copyright (c) The Bootstrap Authors - MIT License
 */
function renderChevronUp() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
			<path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
		</svg>
	);
}

/**
 * 下向き三角アイコン
 * Copyright (c) The Bootstrap Authors - MIT License
 */
function renderChevronDown() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
			<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
		</svg>
	);
}

// ─── ルートコンポーネント ───

/**
 * @class InputNumberRoot
 * @description
 * 数値入力のルートコンポーネント。
 * 子コンポーネントのマーカーを検出し、完全な数値入力 UI を構築する。
 *
 * 主な機能:
 * - min / max / step によるバリデーション
 * - precision で小数桁数を制御
 * - clampValueOnBlur で blur 時にクランプ
 * - allowMouseWheel でマウスホイール操作
 * - variant (outline / filled / flushed)
 * - size (xs / sm / md / lg)
 * - 制御/非制御両対応
 * - Form 連携（oninput / onblur / name）
 */
export class InputNumberRoot implements m.Component<InputNumberRootAttrs> {
	private internalValue: number | null = null;
	private textValue = "";
	private focused = false;

	public oninit(vnode: m.Vnode<InputNumberRootAttrs>) {
		const initial = this.isControlled(vnode.attrs)
			? vnode.attrs.value ?? null
			: vnode.attrs.defaultValue ?? null;
		this.internalValue = initial !== null ? roundToPrecision(initial, vnode.attrs.precision) : null;
		this.textValue = formatValue(this.internalValue, vnode.attrs.precision);
	}

	private isControlled(attrs: InputNumberRootAttrs): boolean {
		return attrs.value !== undefined;
	}

	private resolveValue(attrs: InputNumberRootAttrs): number | null {
		return this.isControlled(attrs) ? (attrs.value ?? null) : this.internalValue;
	}

	private setValue(attrs: InputNumberRootAttrs, newValue: number | null) {
		const rounded = newValue !== null ? roundToPrecision(newValue, attrs.precision) : null;
		if (!this.isControlled(attrs)) {
			this.internalValue = rounded;
		}
		this.textValue = formatValue(rounded, attrs.precision);
		const details: InputNumberValueChangeDetails = {
			value: rounded,
			valueAsString: this.textValue,
		};
		attrs.onValueChange?.(details);
		attrs.oninput?.(rounded);
	}

	private increment(attrs: InputNumberRootAttrs) {
		const current = this.resolveValue(attrs) ?? 0;
		const step = attrs.step ?? 1;
		const newVal = clamp(current + step, attrs.min, attrs.max);
		this.setValue(attrs, roundToPrecision(newVal, attrs.precision));
	}

	private decrement(attrs: InputNumberRootAttrs) {
		const current = this.resolveValue(attrs) ?? 0;
		const step = attrs.step ?? 1;
		const newVal = clamp(current - step, attrs.min, attrs.max);
		this.setValue(attrs, roundToPrecision(newVal, attrs.precision));
	}

	private canIncrement(attrs: InputNumberRootAttrs): boolean {
		if (attrs.disabled || attrs.readOnly) return false;
		const current = this.resolveValue(attrs);
		if (current === null) return true;
		if (attrs.max !== undefined) return current < attrs.max;
		return true;
	}

	private canDecrement(attrs: InputNumberRootAttrs): boolean {
		if (attrs.disabled || attrs.readOnly) return false;
		const current = this.resolveValue(attrs);
		if (current === null) return true;
		if (attrs.min !== undefined) return current > attrs.min;
		return true;
	}

	private handleInputChange(attrs: InputNumberRootAttrs, rawText: string) {
		this.textValue = rawText;
	}

	private handleBlur(attrs: InputNumberRootAttrs) {
		this.focused = false;
		const parsed = parseValue(this.textValue);
		const shouldClamp = attrs.clampValueOnBlur !== false;
		const final = parsed !== null && shouldClamp
			? clamp(roundToPrecision(parsed, attrs.precision), attrs.min, attrs.max)
			: (parsed !== null ? roundToPrecision(parsed, attrs.precision) : null);
		this.setValue(attrs, final);
		attrs.onblur?.();
	}

	private handleKeyDown(attrs: InputNumberRootAttrs, e: KeyboardEvent) {
		if (attrs.disabled || attrs.readOnly) return;
		if (e.key === "ArrowUp") {
			e.preventDefault();
			this.increment(attrs);
		} else if (e.key === "ArrowDown") {
			e.preventDefault();
			this.decrement(attrs);
		} else if (e.key === "Enter") {
			this.handleBlur(attrs);
		}
	}

	private handleWheel(attrs: InputNumberRootAttrs, e: WheelEvent) {
		if (!attrs.allowMouseWheel || attrs.disabled || attrs.readOnly) return;
		if (!this.focused) return;
		e.preventDefault();
		if (e.deltaY < 0) {
			this.increment(attrs);
		} else if (e.deltaY > 0) {
			this.decrement(attrs);
		}
	}

	public onbeforeupdate(vnode: m.Vnode<InputNumberRootAttrs>, old: m.VnodeDOM<InputNumberRootAttrs>) {
		if (this.isControlled(vnode.attrs) && !this.focused) {
			const newVal = vnode.attrs.value ?? null;
			if (newVal !== (old.attrs.value ?? null)) {
				this.internalValue = newVal;
				this.textValue = formatValue(newVal, vnode.attrs.precision);
			}
		}
	}

	// ─── レンダリング ───

	private renderInput(attrs: InputNumberRootAttrs, inputVNode?: m.Vnode<InputNumberInputAttrs>) {
		const displayValue = this.focused ? this.textValue : formatValue(this.resolveValue(attrs), attrs.precision);
		return (
			<input
				type="text"
				inputmode="decimal"
				role="spinbutton"
				aria-valuemin={attrs.min}
				aria-valuemax={attrs.max}
				aria-valuenow={this.resolveValue(attrs) ?? undefined}
				aria-valuetext={displayValue || undefined}
				class={classNames(styles.input, inputVNode?.attrs?.class)}
				style={inputVNode?.attrs?.style}
				name={attrs.name}
				value={displayValue}
				placeholder={inputVNode?.attrs?.placeholder}
				disabled={attrs.disabled}
				readonly={attrs.readOnly}
				data-part="input"
				onfocus={() => { this.focused = true; this.textValue = formatValue(this.resolveValue(attrs), attrs.precision); }}
				oninput={(e: Event) => { this.handleInputChange(attrs, (e.target as HTMLInputElement).value); }}
				onblur={() => { this.handleBlur(attrs); }}
				onkeydown={(e: KeyboardEvent) => { this.handleKeyDown(attrs, e); }}
			/>
		);
	}

	private renderIncrementButton(attrs: InputNumberRootAttrs, triggerVNode?: m.Vnode<InputNumberIncrementTriggerAttrs>) {
		return (
			<button
				type="button"
				tabindex={-1}
				aria-label="値を増やす"
				class={classNames(styles.incrementTrigger, triggerVNode?.attrs?.class)}
				style={triggerVNode?.attrs?.style}
				data-part="increment-trigger"
				disabled={!this.canIncrement(attrs)}
				onclick={() => { this.increment(attrs); }}
			>
				{triggerVNode?.children && toChildArray(triggerVNode.children).length > 0
					? triggerVNode.children
					: renderChevronUp()
				}
			</button>
		);
	}

	private renderDecrementButton(attrs: InputNumberRootAttrs, triggerVNode?: m.Vnode<InputNumberDecrementTriggerAttrs>) {
		return (
			<button
				type="button"
				tabindex={-1}
				aria-label="値を減らす"
				class={classNames(styles.decrementTrigger, triggerVNode?.attrs?.class)}
				style={triggerVNode?.attrs?.style}
				data-part="decrement-trigger"
				disabled={!this.canDecrement(attrs)}
				onclick={() => { this.decrement(attrs); }}
			>
				{triggerVNode?.children && toChildArray(triggerVNode.children).length > 0
					? triggerVNode.children
					: renderChevronDown()
				}
			</button>
		);
	}

	public view(vnode: m.Vnode<InputNumberRootAttrs>) {
		const attrs = vnode.attrs;
		const allChildren = toChildArray(vnode.children);
		const variant = attrs.variant ?? "outline";
		const size = attrs.size ?? "md";

		// マーカーを検出
		const inputVNode = allChildren.find(c => getRole(c) === "input") as m.Vnode<InputNumberInputAttrs> | undefined;
		const controlVNode = allChildren.find(c => getRole(c) === "control") as m.Vnode<InputNumberControlAttrs> | undefined;
		const incVNode = allChildren.find(c => getRole(c) === "increment-trigger") as m.Vnode<InputNumberIncrementTriggerAttrs> | undefined;
		const decVNode = allChildren.find(c => getRole(c) === "decrement-trigger") as m.Vnode<InputNumberDecrementTriggerAttrs> | undefined;
		const labelVNode = allChildren.find(c => getRole(c) === "label") as m.Vnode<InputNumberLabelAttrs> | undefined;
		const valueTextVNode = allChildren.find(c => getRole(c) === "value-text") as m.Vnode<InputNumberValueTextAttrs> | undefined;

		// Control マーカーがある場合はインクリメント・デクリメントを両方レンダリング
		const hasControl = !!controlVNode;
		const hasStandaloneInc = !!incVNode;
		const hasStandaloneDec = !!decVNode;

		const rootStyle: Record<string, string> = { ...(attrs.style ?? {}) };
		if (attrs.width) rootStyle.width = attrs.width;

		return (
			<div
				class={classNames(
					styles.root,
					styles[`variant${capitalize(variant)}`],
					styles[`size${capitalize(size)}`],
					{ [styles.disabled]: attrs.disabled },
					{ [styles.focused]: this.focused },
					attrs.class
				)}
				style={rootStyle}
				data-scope="input-number2"
				data-part="root"
				onwheel={(e: WheelEvent) => { this.handleWheel(attrs, e); }}
			>
				{/* ラベル */}
				{labelVNode ? (
					<label class={classNames(styles.label, labelVNode.attrs?.class)} style={labelVNode.attrs?.style} data-part="label">
						{labelVNode.children}
					</label>
				) : null}

				{/* 値テキスト */}
				{valueTextVNode ? (
					<span class={classNames(styles.valueText, valueTextVNode.attrs?.class)} style={valueTextVNode.attrs?.style} data-part="value-text">
						{formatValue(this.resolveValue(attrs), attrs.precision) || "—"}
					</span>
				) : null}

				{/* メイン入力エリア */}
				<div class={styles.inputGroup} data-part="input-group">
					{/* 単独 DecrementTrigger（Control 外） */}
					{hasStandaloneDec && !hasControl ? this.renderDecrementButton(attrs, decVNode) : null}

					{/* 入力フィールド */}
					{inputVNode !== undefined ? this.renderInput(attrs, inputVNode) : null}

					{/* Control グループ（増減ボタンを縦並び） */}
					{hasControl ? (
						<div class={classNames(styles.control, controlVNode!.attrs?.class)} style={controlVNode!.attrs?.style} data-part="control">
							{this.renderIncrementButton(attrs, incVNode)}
							{this.renderDecrementButton(attrs, decVNode)}
						</div>
					) : null}

					{/* 単独 IncrementTrigger（Control 外） */}
					{hasStandaloneInc && !hasControl ? this.renderIncrementButton(attrs, incVNode) : null}
				</div>
			</div>
		);
	}
}

/**
 * InputNumber compound component のバンドル。
 *
 * @example
 * ```tsx
 * <InputNumber.Root defaultValue={10} min={0} max={100}>
 *   <InputNumber.Control />
 *   <InputNumber.Input />
 * </InputNumber.Root>
 * ```
 */
export const InputNumber = {
	Root: InputNumberRoot,
	Input: InputNumberInputMarker,
	Control: InputNumberControlMarker,
	IncrementTrigger: InputNumberIncrementTriggerMarker,
	DecrementTrigger: InputNumberDecrementTriggerMarker,
	Label: InputNumberLabelMarker,
	ValueText: InputNumberValueTextMarker,
} as const;
