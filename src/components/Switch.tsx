/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Switch.module.scss";

// ===========================
// 型定義
// ===========================

/** Switch のサイズ */
export type SwitchSize = "xs" | "sm" | "md" | "lg";

/** Switch の外観バリアント */
export type SwitchVariant = "solid" | "raised";

/** チェック状態変更時の詳細 */
export type SwitchCheckedChangeDetails = {
	checked: boolean;
};

/**
 * Switch.Root に渡せる属性
 */
export type SwitchRootAttrs = {
	/** チェック状態（制御モード） */
	checked?: boolean;
	/** 初期チェック状態（非制御モード） */
	defaultChecked?: boolean;
	/** チェック状態が変わったときのコールバック */
	onCheckedChange?: (details: SwitchCheckedChangeDetails) => void;
	/** 無効化 */
	disabled?: boolean;
	/** バリデーションエラー状態 */
	invalid?: boolean;
	/** 読み取り専用 */
	readOnly?: boolean;
	/** サイズ（デフォルト: "md"） */
	size?: SwitchSize;
	/** 外観（デフォルト: "solid"） */
	variant?: SwitchVariant;
	/** カラー（CSS変数 --switch-color で反映） */
	colorPalette?: string;
	/** フォーム送信用の値 */
	value?: string;
	/** フォーム送信用の名前 */
	name?: string;
	class?: string;
	style?: Record<string, string>;
};

/** Switch.Control に渡せる属性 */
export type SwitchControlAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Switch.Thumb に渡せる属性 */
export type SwitchThumbAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Switch.ThumbIndicator に渡せる属性 */
export type SwitchThumbIndicatorAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Switch.Label に渡せる属性 */
export type SwitchLabelAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Switch.Indicator に渡せる属性 */
export type SwitchIndicatorAttrs = {
	/** チェック時のみ表示するか（デフォルト true） */
	fallback?: m.Children;
	class?: string;
	style?: Record<string, string>;
};

/** Switch.HiddenInput に渡せる属性 */
export type SwitchHiddenInputAttrs = {
	class?: string;
};

// ===========================
// 内部ロール定義
// ===========================

type SwitchRole =
	| "control"
	| "thumb"
	| "thumbIndicator"
	| "label"
	| "indicator"
	| "hiddenInput";

// ===========================
// マーカーコンポーネント
// ===========================

/**
 * Switch.Control — トラック部分のマーカー
 */
export class SwitchControlMarker implements m.Component<SwitchControlAttrs> {
	static __switchRole: SwitchRole = "control";
	view(vnode: m.Vnode<SwitchControlAttrs>) {
		return <div>{vnode.children}</div>;
	}
}

/**
 * Switch.Thumb — つまみ部分のマーカー
 */
export class SwitchThumbMarker implements m.Component<SwitchThumbAttrs> {
	static __switchRole: SwitchRole = "thumb";
	view(vnode: m.Vnode<SwitchThumbAttrs>) {
		return <div>{vnode.children}</div>;
	}
}

/**
 * Switch.ThumbIndicator — つまみ内アイコンのマーカー
 */
export class SwitchThumbIndicatorMarker implements m.Component<SwitchThumbIndicatorAttrs> {
	static __switchRole: SwitchRole = "thumbIndicator";
	view(vnode: m.Vnode<SwitchThumbIndicatorAttrs>) {
		return <div>{vnode.children}</div>;
	}
}

/**
 * Switch.Label — ラベルのマーカー
 */
export class SwitchLabelMarker implements m.Component<SwitchLabelAttrs> {
	static __switchRole: SwitchRole = "label";
	view(vnode: m.Vnode<SwitchLabelAttrs>) {
		return <div>{vnode.children}</div>;
	}
}

/**
 * Switch.Indicator — チェック状態インジケーターのマーカー
 */
export class SwitchIndicatorMarker implements m.Component<SwitchIndicatorAttrs> {
	static __switchRole: SwitchRole = "indicator";
	view(vnode: m.Vnode<SwitchIndicatorAttrs>) {
		return <div>{vnode.children}</div>;
	}
}

/**
 * Switch.HiddenInput — 隠し input のマーカー
 */
export class SwitchHiddenInputMarker implements m.Component<SwitchHiddenInputAttrs> {
	static __switchRole: SwitchRole = "hiddenInput";
	view(vnode: m.Vnode<SwitchHiddenInputAttrs>) {
		return <div>{vnode.children}</div>;
	}
}

// ===========================
// ユーティリティ
// ===========================

function capitalize(s: string): string {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

/** VDOM の子要素からマーカーを検出する */
function findMarkers(children: m.Children): Map<SwitchRole, m.Vnode<any>> {
	const map = new Map<SwitchRole, m.Vnode<any>>();
	if (!children) return map;
	const arr = Array.isArray(children) ? children : [children];
	for (const child of arr) {
		if (child && typeof child === "object" && "tag" in child) {
			const tag = child.tag as any;
			if (tag && tag.__switchRole) {
				map.set(tag.__switchRole, child);
			}
		}
	}
	return map;
}

// ===========================
// メインコンポーネント
// ===========================

/**
 * Switch.Root — スイッチのルートコンポーネント
 *
 * @description
 * Chakra UI 風の Switch compound component。
 * 制御モード（checked）と非制御モード（defaultChecked）の両方をサポート。
 */
export class SwitchRoot implements m.Component<SwitchRootAttrs> {
	private internalChecked = false;
	private inputId: string = `switch-${Math.random().toString(36).substr(2, 9)}`;

	oninit(vnode: m.Vnode<SwitchRootAttrs>) {
		this.internalChecked = vnode.attrs.defaultChecked ?? false;
	}

	private isControlled(attrs: SwitchRootAttrs): boolean {
		return attrs.checked !== undefined;
	}

	private getChecked(attrs: SwitchRootAttrs): boolean {
		return this.isControlled(attrs) ? attrs.checked! : this.internalChecked;
	}

	private toggle(attrs: SwitchRootAttrs) {
		if (attrs.disabled || attrs.readOnly) return;
		const next = !this.getChecked(attrs);
		if (!this.isControlled(attrs)) {
			this.internalChecked = next;
		}
		attrs.onCheckedChange?.({ checked: next });
	}

	view(vnode: m.Vnode<SwitchRootAttrs>) {
		const attrs = vnode.attrs;
		const checked = this.getChecked(attrs);
		const size = attrs.size ?? "md";
		const variant = attrs.variant ?? "solid";
		const state = checked ? "checked" : "unchecked";

		const markers = findMarkers(vnode.children);

		// ラベル
		const labelVnode = markers.get("label");

		// コントロール
		const controlVnode = markers.get("control");
		const thumbVnode = markers.get("thumb");
		const thumbIndicatorVnode = markers.get("thumbIndicator");
		const indicatorVnode = markers.get("indicator");

		// カラーパレット
		const rootStyle: Record<string, string> = { ...(attrs.style ?? {}) };
		if (attrs.colorPalette) {
			rootStyle["--switch-color"] = attrs.colorPalette;
		}

		return (
			<label
				class={classNames(
					styles.root,
					(styles as any)[`size${capitalize(size)}`],
					(styles as any)[`variant${capitalize(variant)}`],
					{
						[styles.disabled]: attrs.disabled,
						[styles.readOnly]: attrs.readOnly,
						[styles.invalid]: attrs.invalid,
					},
					attrs.class,
				)}
				style={rootStyle}
				data-scope="switch"
				data-part="root"
				data-state={state}
			>
				<input
					class={styles.hiddenInput}
					type="checkbox"
					id={this.inputId}
					checked={checked}
					disabled={attrs.disabled}
					readonly={attrs.readOnly}
					name={attrs.name}
					value={attrs.value ?? "on"}
					onchange={() => this.toggle(attrs)}
					aria-checked={checked}
					role="switch"
				/>
				<span
					class={classNames(styles.control, controlVnode?.attrs.class)}
					style={controlVnode?.attrs.style}
					data-scope="switch"
					data-part="control"
					data-state={state}
					tabindex={0}
					onkeydown={(e: KeyboardEvent) => {
						if (e.key === " " || e.key === "Enter") {
							e.preventDefault();
							this.toggle(attrs);
						}
					}}
				>
					{indicatorVnode && (
						<span
							class={classNames(styles.indicator, indicatorVnode.attrs.class)}
							style={indicatorVnode.attrs.style}
							data-part="indicator"
							data-state={state}
						>
							{checked
								? indicatorVnode.children
								: indicatorVnode.attrs.fallback ?? null}
						</span>
					)}
					<span
						class={classNames(styles.thumb, thumbVnode?.attrs.class)}
						style={thumbVnode?.attrs.style}
						data-part="thumb"
						data-state={state}
					>
						{thumbIndicatorVnode && (
							<span
								class={classNames(styles.thumbIndicator, thumbIndicatorVnode.attrs.class)}
								style={thumbIndicatorVnode.attrs.style}
								data-part="thumb-indicator"
								data-state={state}
							>
								{thumbIndicatorVnode.children}
							</span>
						)}
					</span>
				</span>
				{labelVnode && (
					<span
						class={classNames(styles.label, labelVnode.attrs.class)}
						style={labelVnode.attrs.style}
						data-part="label"
						data-state={state}
					>
						{labelVnode.children}
					</span>
				)}
			</label>
		);
	}
}

// ===========================
// バンドルエクスポート
// ===========================

/**
 * Switch compound component
 *
 * @example
 * ```tsx
 * <Switch.Root checked={isOn} onCheckedChange={({ checked }) => isOn = checked}>
 *   <Switch.Control>
 *     <Switch.Thumb />
 *   </Switch.Control>
 *   <Switch.Label>Wi-Fi</Switch.Label>
 * </Switch.Root>
 * ```
 */
export const Switch = {
	Root: SwitchRoot,
	Control: SwitchControlMarker,
	Thumb: SwitchThumbMarker,
	ThumbIndicator: SwitchThumbIndicatorMarker,
	Label: SwitchLabelMarker,
	Indicator: SwitchIndicatorMarker,
	HiddenInput: SwitchHiddenInputMarker,
};
