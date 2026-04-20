/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Checkbox.module.scss";

// ===========================
// 型定義
// ===========================

/** チェック状態: true | false | "indeterminate" */
export type CheckedState = boolean | "indeterminate";

/** サイズ */
export type CheckboxSize = "xs" | "sm" | "md" | "lg";

/** バリアント */
export type CheckboxVariant = "solid" | "outline" | "subtle";

/** チェック状態変更時の詳細 */
export type CheckboxCheckedChangeDetails = { checked: CheckedState };

/**
 * Checkbox.Root に渡せる属性
 */
export type CheckboxRootAttrs = {
	/** チェック状態（制御モード） */
	checked?: CheckedState;
	/** 初期チェック状態（非制御モード） */
	defaultChecked?: CheckedState;
	/** チェック状態変更時のコールバック */
	onCheckedChange?: (details: CheckboxCheckedChangeDetails) => void;
	/** 無効化 */
	disabled?: boolean;
	/** バリデーションエラー */
	invalid?: boolean;
	/** 読み取り専用 */
	readOnly?: boolean;
	/** フォーム送信用の値 */
	value?: string;
	/** フォーム送信用の名前 */
	name?: string;
	/** サイズ（デフォルト: "md"） */
	size?: CheckboxSize;
	/** バリアント（デフォルト: "solid"） */
	variant?: CheckboxVariant;
	/** カラー（CSS変数 --checkbox-color で反映） */
	colorPalette?: string;
	/** formRef（Mithril UI Kit の Form 連携） */
	formRef?: any;
	/** 追加クラス */
	class?: string;
	/** スタイル */
	style?: Record<string, string>;
};

/** Checkbox.HiddenInput に渡せる属性 */
export type CheckboxHiddenInputAttrs = {
	class?: string;
};

/** Checkbox.Control に渡せる属性 */
export type CheckboxControlAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Checkbox.Indicator に渡せる属性 */
export type CheckboxIndicatorAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Checkbox.Label に渡せる属性 */
export type CheckboxLabelAttrs = {
	class?: string;
	style?: Record<string, string>;
};

// ===========================
// 内部ロール定義
// ===========================

type CheckboxRole = "hiddenInput" | "control" | "indicator" | "label";

// ===========================
// マーカーコンポーネント
// ===========================

/** Checkbox.HiddenInput — 隠し input のマーカー */
export class CheckboxHiddenInputMarker implements m.Component<CheckboxHiddenInputAttrs> {
	static __checkboxRole: CheckboxRole = "hiddenInput";
	view(vnode: m.Vnode<CheckboxHiddenInputAttrs>) {
		return <div>{vnode.children}</div>;
	}
}

/** Checkbox.Control — コントロール枠のマーカー */
export class CheckboxControlMarker implements m.Component<CheckboxControlAttrs> {
	static __checkboxRole: CheckboxRole = "control";
	view(vnode: m.Vnode<CheckboxControlAttrs>) {
		return <div>{vnode.children}</div>;
	}
}

/** Checkbox.Indicator — チェックアイコンのマーカー */
export class CheckboxIndicatorMarker implements m.Component<CheckboxIndicatorAttrs> {
	static __checkboxRole: CheckboxRole = "indicator";
	view(vnode: m.Vnode<CheckboxIndicatorAttrs>) {
		return <div>{vnode.children}</div>;
	}
}

/** Checkbox.Label — ラベルのマーカー */
export class CheckboxLabelMarker implements m.Component<CheckboxLabelAttrs> {
	static __checkboxRole: CheckboxRole = "label";
	view(vnode: m.Vnode<CheckboxLabelAttrs>) {
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
function findMarkers(children: m.Children): Map<CheckboxRole, m.Vnode<any>> {
	const map = new Map<CheckboxRole, m.Vnode<any>>();
	if (!children) return map;
	const arr = Array.isArray(children) ? children : [children];
	for (const child of arr) {
		if (child && typeof child === "object" && "tag" in child) {
			const tag = child.tag as any;
			if (tag && tag.__checkboxRole) {
				map.set(tag.__checkboxRole, child);
			}
		}
	}
	return map;
}

// ===========================
// デフォルトアイコン
// ===========================

/** チェックマーク SVG */
function CheckIcon() {
	return (
		<svg viewBox="0 0 12 10" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
			<polyline points="1.5 6 4.5 9 10.5 1" />
		</svg>
	);
}

/** インデターミネートマーク SVG */
function IndeterminateIcon() {
	return (
		<svg viewBox="0 0 12 12" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
			<line x1="2.5" y1="6" x2="9.5" y2="6" />
		</svg>
	);
}

// ===========================
// メインコンポーネント
// ===========================

/**
 * @class CheckboxRoot
 * @description
 * Chakra UI 風の Checkbox compound component。
 *
 * 制御モード（checked）と非制御モード（defaultChecked）の両方をサポート。
 * indeterminate 状態もサポート。
 *
 * 主な機能:
 * - solid / outline / subtle バリアント
 * - xs / sm / md / lg サイズ
 * - colorPalette によるカスタムカラー
 * - formRef による Mithril UI Kit Form 連携
 * - indeterminate 状態
 *
 * @example
 * <Checkbox.Root onCheckedChange={({ checked }) => { ... }}>
 *   <Checkbox.HiddenInput />
 *   <Checkbox.Control>
 *     <Checkbox.Indicator />
 *   </Checkbox.Control>
 *   <Checkbox.Label>同意する</Checkbox.Label>
 * </Checkbox.Root>
 */
export class CheckboxRoot implements m.Component<CheckboxRootAttrs> {
	private internalChecked: CheckedState = false;
	private inputId = `checkbox-${Math.random().toString(36).substr(2, 9)}`;

	oninit(vnode: m.Vnode<CheckboxRootAttrs>) {
		this.internalChecked = vnode.attrs.defaultChecked ?? false;
	}

	private isControlled(attrs: CheckboxRootAttrs): boolean {
		return attrs.checked !== undefined;
	}

	private getChecked(attrs: CheckboxRootAttrs): CheckedState {
		return this.isControlled(attrs) ? attrs.checked! : this.internalChecked;
	}

	private toggle(attrs: CheckboxRootAttrs) {
		if (attrs.disabled || attrs.readOnly) return;
		const current = this.getChecked(attrs);
		// indeterminate → true, true → false, false → true
		const next: CheckedState = current === "indeterminate" ? true : !current;
		if (!this.isControlled(attrs)) {
			this.internalChecked = next;
		}
		attrs.onCheckedChange?.({ checked: next });
	}

	view(vnode: m.Vnode<CheckboxRootAttrs>) {
		const attrs = vnode.attrs;
		const checked = this.getChecked(attrs);
		const size = attrs.size ?? "md";
		const variant = attrs.variant ?? "solid";
		const state = checked === "indeterminate" ? "indeterminate" : checked ? "checked" : "unchecked";
		const isCheckedOrIndeterminate = checked === true || checked === "indeterminate";

		const markers = findMarkers(vnode.children);
		const controlVnode = markers.get("control");
		const indicatorVnode = markers.get("indicator");
		const labelVnode = markers.get("label");

		// カラーパレット
		const rootStyle: Record<string, string> = { ...(attrs.style ?? {}) };
		if (attrs.colorPalette) {
			rootStyle["--checkbox-color"] = attrs.colorPalette;
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
				data-scope="checkbox"
				data-part="root"
				data-state={state}
			>
				{/* 隠し input */}
				<input
					class={styles.hiddenInput}
					type="checkbox"
					id={this.inputId}
					checked={checked === true}
					disabled={attrs.disabled}
					readonly={attrs.readOnly}
					name={attrs.name}
					value={attrs.value ?? "on"}
					onchange={() => this.toggle(attrs)}
					aria-checked={checked === "indeterminate" ? "mixed" : !!checked}
					data-part="hidden-input"
				/>

				{/* コントロール */}
				<span
					class={classNames(styles.control, controlVnode?.attrs.class)}
					style={controlVnode?.attrs.style}
					data-scope="checkbox"
					data-part="control"
					data-state={state}
				>
					{/* インジケーター */}
					{isCheckedOrIndeterminate && (
						<span
							class={classNames(styles.indicator, indicatorVnode?.attrs.class)}
							style={indicatorVnode?.attrs.style}
							data-part="indicator"
							data-state={state}
						>
							{indicatorVnode?.children && (indicatorVnode.children as any[]).length > 0
								? indicatorVnode.children
								: checked === "indeterminate"
									? IndeterminateIcon()
									: CheckIcon()
							}
						</span>
					)}
				</span>

				{/* ラベル */}
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
// CheckboxGroup
// ===========================

/** CheckboxGroup の値変更詳細 */
export type CheckboxGroupValueChangeDetails = { value: string[] };

/** CheckboxGroup に渡せる属性 */
export type CheckboxGroupAttrs = {
	/** チェックされた値の配列 */
	value?: string[];
	/** 初期値 */
	defaultValue?: string[];
	/** 値変更時のコールバック */
	onValueChange?: (details: CheckboxGroupValueChangeDetails) => void;
	/** 無効化 */
	disabled?: boolean;
	/** フォーム送信用の名前 */
	name?: string;
	/** レイアウト方向 */
	orientation?: "horizontal" | "vertical";
	/** 追加クラス */
	class?: string;
	/** スタイル */
	style?: Record<string, string>;
};

/**
 * @class CheckboxGroup
 * @description
 * 複数の Checkbox を管理するグループコンポーネント。
 * value 配列で選択状態を管理し、onValueChange で配列を返す。
 *
 * @example
 * <CheckboxGroup
 *   value={selectedValues}
 *   onValueChange={({ value }) => selectedValues = value}
 * >
 *   <Checkbox.Root value="a">
 *     <Checkbox.Control><Checkbox.Indicator /></Checkbox.Control>
 *     <Checkbox.Label>A</Checkbox.Label>
 *   </Checkbox.Root>
 * </CheckboxGroup>
 */
export class CheckboxGroup implements m.Component<CheckboxGroupAttrs> {
	private internalValue: string[] = [];

	oninit(vnode: m.Vnode<CheckboxGroupAttrs>) {
		this.internalValue = vnode.attrs.defaultValue ?? [];
	}

	private isControlled(attrs: CheckboxGroupAttrs): boolean {
		return attrs.value !== undefined;
	}

	private getValue(attrs: CheckboxGroupAttrs): string[] {
		return this.isControlled(attrs) ? (attrs.value ?? []) : this.internalValue;
	}

	view(vnode: m.Vnode<CheckboxGroupAttrs>) {
		const attrs = vnode.attrs;
		const currentValue = this.getValue(attrs);
		const orientation = attrs.orientation ?? "vertical";

		return (
			<div
				class={classNames(attrs.class)}
				style={{
					display: "flex",
					flexDirection: orientation === "horizontal" ? "row" : "column",
					gap: orientation === "horizontal" ? "1rem" : "0.5rem",
					...(attrs.style ?? {}),
				}}
				role="group"
				data-scope="checkbox-group"
				data-part="root"
			>
				{this.processChildren(vnode.children, attrs, currentValue)}
			</div>
		);
	}

	/** 子 CheckboxRoot に checked / onCheckedChange を注入 */
	private processChildren(children: m.Children, attrs: CheckboxGroupAttrs, currentValue: string[]): m.Children {
		if (!children) return null;
		const arr = Array.isArray(children) ? children : [children];
		return arr.map((child) => {
			if (child && typeof child === "object" && "tag" in child) {
				const tag = child.tag as any;
				if (tag === CheckboxRoot || tag === Checkbox.Root) {
					const itemValue = child.attrs?.value ?? "";
					const isChecked = currentValue.includes(itemValue);
					return m(tag, {
						...child.attrs,
						checked: isChecked,
						disabled: child.attrs?.disabled || attrs.disabled,
						name: child.attrs?.name ?? attrs.name,
						onCheckedChange: (details: CheckboxCheckedChangeDetails) => {
							let next: string[];
							if (details.checked === true) {
								next = [...currentValue, itemValue];
							} else {
								next = currentValue.filter((v) => v !== itemValue);
							}
							if (!this.isControlled(attrs)) {
								this.internalValue = next;
							}
							attrs.onValueChange?.({ value: next });
							child.attrs?.onCheckedChange?.(details);
						},
					}, ...(Array.isArray(child.children) ? child.children : child.children ? [child.children] : []));
				}
			}
			return child;
		});
	}
}

// ===========================
// バンドルエクスポート
// ===========================

/**
 * Checkbox compound component
 *
 * @example
 * ```tsx
 * <Checkbox.Root onCheckedChange={({ checked }) => { ... }}>
 *   <Checkbox.HiddenInput />
 *   <Checkbox.Control>
 *     <Checkbox.Indicator />
 *   </Checkbox.Control>
 *   <Checkbox.Label>同意する</Checkbox.Label>
 * </Checkbox.Root>
 * ```
 */
export const Checkbox = {
	Root: CheckboxRoot,
	HiddenInput: CheckboxHiddenInputMarker,
	Control: CheckboxControlMarker,
	Indicator: CheckboxIndicatorMarker,
	Label: CheckboxLabelMarker,
	Group: CheckboxGroup,
};
