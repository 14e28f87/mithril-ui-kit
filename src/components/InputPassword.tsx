/** @jsx m */
/**
 * @fileoverview
 * InputPassword — compound component 型のパスワード入力コンポーネント
 *
 * Chakra UI の password-input API を参考に、表示/非表示トグル機能を備えた
 * パスワード入力フィールドを提供する。
 *
 * @example
 * ```tsx
 * <InputPassword.Root>
 *   <InputPassword.Input placeholder="パスワード" />
 *   <InputPassword.VisibilityTrigger />
 * </InputPassword.Root>
 * ```
 *
 * @module InputPassword
 */
/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./InputPassword.module.scss";

// ─── 型定義 ───

/** InputPassword のサイズ */
export type InputPasswordSize = "xs" | "sm" | "md" | "lg";

/** InputPassword のバリエーション */
export type InputPasswordVariant = "outline" | "filled" | "flushed";

/**
 * InputPassword.Root に渡せる属性
 */
export type InputPasswordRootAttrs = {
	/** 制御モード: パスワードの現在値 */
	value?: string;
	/** 非制御モード: 初期値 */
	defaultValue?: string;
	/** 値変更コールバック */
	onValueChange?: (value: string) => void;
	/** Form 連携用の oninput（値を直接受け取る） */
	oninput?: (value: string) => void;
	/** Form 連携用の onblur */
	onblur?: () => void;
	/** 制御モード: パスワードの表示状態 */
	visible?: boolean;
	/** 非制御モード: 初期表示状態（デフォルト: false = 非表示） */
	defaultVisible?: boolean;
	/** 表示状態変更コールバック */
	onVisibleChange?: (visible: boolean) => void;
	/** 無効化 */
	disabled?: boolean;
	/** 読み取り専用 */
	readOnly?: boolean;
	/** フォーム用の name 属性 */
	name?: string;
	/** サイズ（デフォルト: "md"） */
	size?: InputPasswordSize;
	/** バリエーション（デフォルト: "outline"） */
	variant?: InputPasswordVariant;
	/** コンテナの幅 */
	width?: string;
	class?: string;
	style?: Record<string, string>;
};

/** InputPassword.Input に渡せる属性 */
export type InputPasswordInputAttrs = {
	/** プレースホルダー */
	placeholder?: string;
	class?: string;
	style?: Record<string, string>;
};

/** InputPassword.VisibilityTrigger に渡せる属性 */
export type InputPasswordVisibilityTriggerAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** InputPassword.Label に渡せる属性 */
export type InputPasswordLabelAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** InputPassword.StrengthMeter に渡せる属性 */
export type InputPasswordStrengthMeterAttrs = {
	/** 強度（0〜4） */
	value: number;
	class?: string;
	style?: Record<string, string>;
};

// ─── ロール ───
type InputPasswordRole = "input" | "visibility-trigger" | "label" | "strength-meter";

// ─── マーカークラス ───

/** @class InputPasswordInputMarker - 入力フィールドマーカー */
export class InputPasswordInputMarker implements m.Component<InputPasswordInputAttrs> {
	public static __inputPasswordRole: InputPasswordRole = "input";
	public view(vnode: m.Vnode<InputPasswordInputAttrs>) { return <span>{vnode.children}</span>; }
}

/** @class InputPasswordVisibilityTriggerMarker - 表示/非表示トグルボタンマーカー */
export class InputPasswordVisibilityTriggerMarker implements m.Component<InputPasswordVisibilityTriggerAttrs> {
	public static __inputPasswordRole: InputPasswordRole = "visibility-trigger";
	public view(vnode: m.Vnode<InputPasswordVisibilityTriggerAttrs>) { return <button type="button">{vnode.children}</button>; }
}

/** @class InputPasswordLabelMarker - ラベルマーカー */
export class InputPasswordLabelMarker implements m.Component<InputPasswordLabelAttrs> {
	public static __inputPasswordRole: InputPasswordRole = "label";
	public view(vnode: m.Vnode<InputPasswordLabelAttrs>) { return <label>{vnode.children}</label>; }
}

/** @class InputPasswordStrengthMeterMarker - パスワード強度メーターマーカー */
export class InputPasswordStrengthMeterMarker implements m.Component<InputPasswordStrengthMeterAttrs> {
	public static __inputPasswordRole: InputPasswordRole = "strength-meter";
	public view(vnode: m.Vnode<InputPasswordStrengthMeterAttrs>) { return <div>{vnode.children}</div>; }
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

function getRole(v: any): InputPasswordRole | undefined {
	if (!isVnodeLike(v)) return undefined;
	return (v.tag as any)?.__inputPasswordRole;
}

function capitalize(s: string): string {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

// ─── SVG アイコン ───

/**
 * 目アイコン（パスワード表示中）
 * Copyright (c) The Bootstrap Authors - MIT License
 */
function renderEyeIcon() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
			<path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
			<path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
		</svg>
	);
}

/**
 * 目スラッシュアイコン（パスワード非表示中）
 * Copyright (c) The Bootstrap Authors - MIT License
 */
function renderEyeSlashIcon() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
			<path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
			<path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
			<path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709z" />
			<path d="m10.707 12.828-7.07-7.071L4.344 5.05l7.07 7.071z" />
		</svg>
	);
}

// ─── 強度メーターの色とラベル ───
const STRENGTH_COLORS = ["#dc3545", "#fd7e14", "#ffc107", "#20c997", "#198754"];
const STRENGTH_LABELS = ["", "弱い", "やや弱い", "普通", "強い"];

// ─── ルートコンポーネント ───

/**
 * @class InputPasswordRoot
 * @description
 * パスワード入力のルートコンポーネント。
 * 子コンポーネントのマーカーを検出し、パスワード入力 UI を構築する。
 *
 * 主な機能:
 * - パスワード表示/非表示トグル（visible / defaultVisible / onVisibleChange）
 * - 制御/非制御 両対応（value / defaultValue）
 * - variant (outline / filled / flushed)
 * - size (xs / sm / md / lg)
 * - Form 連携（oninput / onblur / name）
 * - StrengthMeter（パスワード強度表示）
 */
export class InputPasswordRoot implements m.Component<InputPasswordRootAttrs> {
	private internalValue = "";
	private internalVisible = false;
	private focused = false;

	public oninit(vnode: m.Vnode<InputPasswordRootAttrs>) {
		this.internalValue = this.isValueControlled(vnode.attrs)
			? (vnode.attrs.value ?? "")
			: (vnode.attrs.defaultValue ?? "");
		this.internalVisible = this.isVisibleControlled(vnode.attrs)
			? (vnode.attrs.visible ?? false)
			: (vnode.attrs.defaultVisible ?? false);
	}

	private isValueControlled(attrs: InputPasswordRootAttrs): boolean {
		return attrs.value !== undefined;
	}

	private isVisibleControlled(attrs: InputPasswordRootAttrs): boolean {
		return attrs.visible !== undefined;
	}

	private resolveValue(attrs: InputPasswordRootAttrs): string {
		return this.isValueControlled(attrs) ? (attrs.value ?? "") : this.internalValue;
	}

	private resolveVisible(attrs: InputPasswordRootAttrs): boolean {
		return this.isVisibleControlled(attrs) ? (attrs.visible ?? false) : this.internalVisible;
	}

	private handleInput(attrs: InputPasswordRootAttrs, newValue: string) {
		if (!this.isValueControlled(attrs)) {
			this.internalValue = newValue;
		}
		attrs.onValueChange?.(newValue);
		attrs.oninput?.(newValue);
	}

	private handleBlur(attrs: InputPasswordRootAttrs) {
		this.focused = false;
		attrs.onblur?.();
	}

	private toggleVisibility(attrs: InputPasswordRootAttrs) {
		const newVal = !this.resolveVisible(attrs);
		if (!this.isVisibleControlled(attrs)) {
			this.internalVisible = newVal;
		}
		attrs.onVisibleChange?.(newVal);
	}

	public onbeforeupdate(vnode: m.Vnode<InputPasswordRootAttrs>, old: m.VnodeDOM<InputPasswordRootAttrs>) {
		if (this.isValueControlled(vnode.attrs) && vnode.attrs.value !== old.attrs.value) {
			this.internalValue = vnode.attrs.value ?? "";
		}
		if (this.isVisibleControlled(vnode.attrs) && vnode.attrs.visible !== old.attrs.visible) {
			this.internalVisible = vnode.attrs.visible ?? false;
		}
	}

	// ─── レンダリング ───

	private renderInput(attrs: InputPasswordRootAttrs, inputVNode?: m.Vnode<InputPasswordInputAttrs>) {
		const isVisible = this.resolveVisible(attrs);
		const currentValue = this.resolveValue(attrs);
		return (
			<input
				type={isVisible ? "text" : "password"}
				class={classNames(styles.input, inputVNode?.attrs?.class)}
				style={inputVNode?.attrs?.style}
				name={attrs.name}
				value={currentValue}
				placeholder={inputVNode?.attrs?.placeholder}
				disabled={attrs.disabled}
				readonly={attrs.readOnly}
				autocomplete="current-password"
				data-part="input"
				onfocus={() => { this.focused = true; }}
				oninput={(e: Event) => { this.handleInput(attrs, (e.target as HTMLInputElement).value); }}
				onblur={() => { this.handleBlur(attrs); }}
			/>
		);
	}

	private renderVisibilityTrigger(attrs: InputPasswordRootAttrs, triggerVNode?: m.Vnode<InputPasswordVisibilityTriggerAttrs>) {
		const isVisible = this.resolveVisible(attrs);
		const customChildren = triggerVNode?.children && toChildArray(triggerVNode.children).length > 0;
		return (
			<button
				type="button"
				tabindex={-1}
				aria-label={isVisible ? "パスワードを隠す" : "パスワードを表示する"}
				class={classNames(styles.visibilityTrigger, triggerVNode?.attrs?.class)}
				style={triggerVNode?.attrs?.style}
				data-part="visibility-trigger"
				disabled={attrs.disabled}
				onclick={() => { this.toggleVisibility(attrs); }}
			>
				{customChildren
					? triggerVNode!.children
					: (isVisible ? renderEyeIcon() : renderEyeSlashIcon())
				}
			</button>
		);
	}

	private renderStrengthMeter(strengthVNode: m.Vnode<InputPasswordStrengthMeterAttrs>) {
		const value = Math.max(0, Math.min(4, strengthVNode.attrs?.value ?? 0));
		const segments = [0, 1, 2, 3];
		return (
			<div class={classNames(styles.strengthMeter, strengthVNode.attrs?.class)} style={strengthVNode.attrs?.style} data-part="strength-meter">
				<div class={styles.strengthBar}>
					{segments.map(i => (
						<div
							key={i}
							class={classNames(styles.strengthSegment, { [styles.strengthSegmentActive]: i < value })}
							style={i < value ? { backgroundColor: STRENGTH_COLORS[value] } : {}}
						/>
					))}
				</div>
				{value > 0 ? <span class={styles.strengthLabel} style={{ color: STRENGTH_COLORS[value] }}>{STRENGTH_LABELS[value]}</span> : null}
			</div>
		);
	}

	public view(vnode: m.Vnode<InputPasswordRootAttrs>) {
		const attrs = vnode.attrs;
		const allChildren = toChildArray(vnode.children);
		const variant = attrs.variant ?? "outline";
		const size = attrs.size ?? "md";

		// マーカーを検出
		const inputVNode = allChildren.find(c => getRole(c) === "input") as m.Vnode<InputPasswordInputAttrs> | undefined;
		const triggerVNode = allChildren.find(c => getRole(c) === "visibility-trigger") as m.Vnode<InputPasswordVisibilityTriggerAttrs> | undefined;
		const labelVNode = allChildren.find(c => getRole(c) === "label") as m.Vnode<InputPasswordLabelAttrs> | undefined;
		const strengthVNode = allChildren.find(c => getRole(c) === "strength-meter") as m.Vnode<InputPasswordStrengthMeterAttrs> | undefined;

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
				data-scope="input-password2"
				data-part="root"
			>
				{/* ラベル */}
				{labelVNode ? (
					<label class={classNames(styles.label, labelVNode.attrs?.class)} style={labelVNode.attrs?.style} data-part="label">
						{labelVNode.children}
					</label>
				) : null}

				{/* メイン入力エリア */}
				<div class={styles.inputGroup} data-part="input-group">
					{/* 入力フィールド */}
					{inputVNode !== undefined ? this.renderInput(attrs, inputVNode) : null}

					{/* 表示/非表示トグルボタン */}
					{triggerVNode !== undefined ? this.renderVisibilityTrigger(attrs, triggerVNode) : null}
				</div>

				{/* 強度メーター */}
				{strengthVNode !== undefined ? this.renderStrengthMeter(strengthVNode) : null}
			</div>
		);
	}
}

/**
 * InputPassword compound component のバンドル。
 *
 * @example
 * ```tsx
 * <InputPassword.Root>
 *   <InputPassword.Input placeholder="パスワード" />
 *   <InputPassword.VisibilityTrigger />
 * </InputPassword.Root>
 * ```
 */
export const InputPassword = {
	Root: InputPasswordRoot,
	Input: InputPasswordInputMarker,
	VisibilityTrigger: InputPasswordVisibilityTriggerMarker,
	Label: InputPasswordLabelMarker,
	StrengthMeter: InputPasswordStrengthMeterMarker,
};
