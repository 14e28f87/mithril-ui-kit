/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Radio.module.scss";

// ===========================
// 型定義
// ===========================

/** Radio のバリアント（Checkbox と統一） */
export type RadioVariant = "solid" | "outline" | "subtle";

/** Radio のサイズ（Checkbox と統一） */
export type RadioSize = "xs" | "sm" | "md" | "lg";

/** 値変更時の詳細 */
export type RadioValueChangeDetails = { value: string };

/**
 * Radio.Root に渡せる属性
 */
export interface RadioRootAttrs {
	/** バリアント（デフォルト: "outline"） */
	variant?: RadioVariant;
	/** サイズ（デフォルト: "md"） */
	size?: RadioSize;
	/** カラー（CSS変数 --radio-color で反映） */
	colorPalette?: string;
	/** 選択中の値（制御モード） */
	value?: string;
	/** 初期値（非制御モード） */
	defaultValue?: string;
	/** 値変更時のコールバック */
	onValueChange?: (detail: RadioValueChangeDetails) => void;
	/** フォーム送信用のグループ名 */
	name?: string;
	/** 無効状態 */
	disabled?: boolean;
	/** 読み取り専用 */
	readOnly?: boolean;
	/** 向き（デフォルト: "vertical"） */
	orientation?: "horizontal" | "vertical";
	/** 追加クラス */
	class?: string;
	/** スタイル */
	style?: Record<string, string>;
}

/**
 * Radio.Item に渡せる属性
 */
export interface RadioItemAttrs {
	/** 値 */
	value: string;
	/** 無効状態 */
	disabled?: boolean;
	/** バリデーションエラー */
	invalid?: boolean;
	/** 追加クラス */
	class?: string;
	/** スタイル */
	style?: Record<string, string>;
}

// ===========================
// ユーティリティ
// ===========================

function capitalize(s: string): string {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

// ===========================
// メインコンポーネント
// ===========================

/**
 * @class RadioRoot
 * @description
 * Chakra UI 風ラジオグループコンポーネント。
 * Checkbox / Switch と統一された複合コンポーネントパターン。
 *
 * インジケーターは丸型で、variant は Checkbox と同様に
 * インジケーターのスタイルに反映される。
 *
 * @example
 * <Radio.Root value={val} onValueChange={(d) => val = d.value}>
 *   <Radio.Item value="a">
 *     <Radio.ItemIndicator />
 *     <Radio.ItemText>オプション A</Radio.ItemText>
 *     <Radio.ItemHiddenInput />
 *   </Radio.Item>
 * </Radio.Root>
 */
class RadioRoot implements m.ClassComponent<RadioRootAttrs> {
	private internalValue: string = "";
	private groupName: string = "";

	oninit(vnode: m.Vnode<RadioRootAttrs>) {
		this.internalValue = vnode.attrs.defaultValue ?? "";
		this.groupName = vnode.attrs.name || `radio-${Math.random().toString(36).slice(2, 9)}`;
	}

	view(vnode: m.Vnode<RadioRootAttrs>) {
		const {
			variant = "outline", size = "md", colorPalette,
			value, defaultValue, onValueChange, name, disabled, readOnly,
			orientation = "vertical", class: className, style,
		} = vnode.attrs;

		const currentValue = value !== undefined ? value : this.internalValue;

		const handleChange = (val: string) => {
			if (disabled || readOnly) return;
			if (!this.isControlled(vnode.attrs)) {
				this.internalValue = val;
			}
			onValueChange?.({ value: val });
		};

		// カラーパレット → CSS 変数
		const rootStyle: Record<string, string> = { ...(style ?? {}) };
		if (colorPalette) {
			rootStyle["--radio-color"] = colorPalette;
		}

		const children = this.processChildren(vnode.children, {
			variant, size, currentValue, groupName: this.groupName,
			disabled, readOnly, handleChange,
		});

		return (
			<div
				role="radiogroup"
				aria-orientation={orientation}
				class={classNames(
					styles.root,
					orientation === "horizontal" ? styles.horizontal : styles.vertical,
					className,
				)}
				style={rootStyle}
				data-scope="radio-group"
				data-part="root"
			>
				{children}
			</div>
		);
	}

	private isControlled(attrs: RadioRootAttrs): boolean {
		return attrs.value !== undefined;
	}

	private processChildren(children: m.Children, ctx: any): m.Children {
		if (!children) return children;
		if (!Array.isArray(children)) return children;
		return (children as any[]).map((child: any) => {
			if (!child || typeof child !== "object" || !child.tag) return child;
			if (child.tag === RadioItem) {
				return m(RadioItem, {
					...child.attrs,
					_ctx: ctx,
				}, child.children);
			}
			return child;
		});
	}
}

/**
 * @class RadioItem
 * @description
 * ラジオグループの個別アイテム。
 * Checkbox.Root の `<label>` と同じ構造で、variant/size クラスを持つ。
 */
class RadioItem implements m.ClassComponent<RadioItemAttrs & { _ctx?: any }> {
	view(vnode: m.Vnode<RadioItemAttrs & { _ctx?: any }>) {
		const { value, disabled: itemDisabled, invalid, class: className, style, _ctx } = vnode.attrs;
		const ctx = _ctx || {};
		const isDisabled = itemDisabled || ctx.disabled;
		const isChecked = ctx.currentValue === value;
		const state = isChecked ? "checked" : "unchecked";

		const handleClick = () => {
			if (!isDisabled && !ctx.readOnly) ctx.handleChange?.(value);
		};

		const children = this.processChildren(vnode.children, {
			...ctx, value, isChecked, isDisabled, state, handleClick,
		});

		return (
			<label
				class={classNames(
					styles.item,
					(styles as any)[`variant${capitalize(ctx.variant || "outline")}`],
					(styles as any)[`size${capitalize(ctx.size || "md")}`],
					{
						[styles.disabled]: isDisabled,
						[styles.readOnly]: ctx.readOnly,
						[styles.invalid]: invalid,
					},
					className,
				)}
				style={style}
				data-scope="radio-group"
				data-part="item"
				data-state={state}
			>
				{children}
			</label>
		);
	}

	private processChildren(children: m.Children, ctx: any): m.Children {
		if (!children) return children;
		if (!Array.isArray(children)) return children;
		return (children as any[]).map((child: any) => {
			if (!child || typeof child !== "object" || !child.tag) return child;
			if (child.tag === RadioItemIndicator) {
				return m(RadioItemIndicator, { ...child.attrs, _ctx: ctx }, child.children);
			}
			if (child.tag === RadioItemText) {
				return m(RadioItemText, { ...child.attrs, _ctx: ctx }, child.children);
			}
			if (child.tag === RadioItemHiddenInput) {
				return m(RadioItemHiddenInput, { ...child.attrs, _ctx: ctx }, child.children);
			}
			return child;
		});
	}
}

/**
 * @class RadioItemIndicator
 * @description
 * ラジオボタンのインジケーター（丸い選択マーク）。
 * Checkbox.Control + Checkbox.Indicator に相当。
 * data-state で "checked" / "unchecked" を切り替え。
 */
class RadioItemIndicator implements m.ClassComponent<{ _ctx?: any; class?: string; style?: Record<string, string> }> {
	view(vnode: m.Vnode<{ _ctx?: any; class?: string; style?: Record<string, string> }>) {
		const { _ctx, class: className, style } = vnode.attrs;
		const ctx = _ctx || {};

		return (
			<span
				class={classNames(styles.control, className)}
				style={style}
				data-scope="radio-group"
				data-part="item-control"
				data-state={ctx.state || "unchecked"}
			>
				<span class={styles.indicator} data-part="item-indicator" data-state={ctx.state || "unchecked"}>
					<span class={styles.indicatorDot} />
				</span>
			</span>
		);
	}
}

/**
 * @class RadioItemText
 * @description ラジオボタンのテキストラベル
 */
class RadioItemText implements m.ClassComponent<{ _ctx?: any; class?: string; style?: Record<string, string> }> {
	view(vnode: m.Vnode<{ _ctx?: any; class?: string; style?: Record<string, string> }>) {
		const { class: className, style, _ctx } = vnode.attrs;
		return (
			<span
				class={classNames(styles.label, className)}
				style={style}
				data-scope="radio-group"
				data-part="item-text"
				data-state={_ctx?.state || "unchecked"}
			>
				{vnode.children}
			</span>
		);
	}
}

/**
 * @class RadioItemHiddenInput
 * @description hidden input（フォーム送信用・アクセシビリティ）
 */
class RadioItemHiddenInput implements m.ClassComponent<{ _ctx?: any }> {
	view(vnode: m.Vnode<{ _ctx?: any }>) {
		const ctx = vnode.attrs._ctx || {};
		return (
			<input
				type="radio"
				name={ctx.groupName}
				value={ctx.value}
				checked={ctx.isChecked}
				disabled={ctx.isDisabled}
				class={styles.hiddenInput}
				onchange={() => ctx.handleClick?.()}
				role="radio"
				aria-checked={ctx.isChecked}
				data-scope="radio-group"
				data-part="item-hidden-input"
			/>
		);
	}
}

/**
 * Radio 複合コンポーネント namespace
 */
const Radio = {
	Root: RadioRoot,
	Item: RadioItem,
	ItemIndicator: RadioItemIndicator,
	ItemText: RadioItemText,
	ItemHiddenInput: RadioItemHiddenInput,
};

export { Radio, RadioRoot, RadioItem, RadioItemIndicator, RadioItemText, RadioItemHiddenInput };
