/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Button.module.scss";

/** Button のバリアント */
export type ButtonVariant = "solid" | "subtle" | "surface" | "outline" | "ghost" | "plain";
/** Button のサイズ */
export type ButtonSize = "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

/**
 * Button の属性
 */
export interface ButtonAttrs {
	/** バリアント */
	variant?: ButtonVariant;
	/** サイズ */
	size?: ButtonSize;
	/** カラーパレット */
	colorPalette?: string;
	/** 無効状態 */
	disabled?: boolean;
	/** ローディング状態 */
	loading?: boolean;
	/** ローディング中のテキスト */
	loadingText?: string;
	/** スピナーの表示位置 */
	spinnerPlacement?: "start" | "end";
	/** 角丸 */
	rounded?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
	/** レンダリングする要素タグ */
	as?: string;
	/** 追加クラス */
	class?: string;
	/** クリックイベント */
	onclick?: (e: Event) => void;
	[key: string]: any;
}

function capitalize(s: string): string {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

/**
 * @class Button
 * @description
 * アクションやイベントをトリガーするボタンコンポーネント。
 * Chakra UI の Button に相当する。
 *
 * @example
 * <Button variant="solid" colorPalette="blue">クリック</Button>
 * <Button variant="outline" size="lg" loading>保存中...</Button>
 */
class ButtonComponent implements m.ClassComponent<ButtonAttrs> {
	view(vnode: m.Vnode<ButtonAttrs>) {
		const {
			variant = "solid", size = "md", colorPalette, disabled,
			loading, loadingText, spinnerPlacement = "start", rounded,
			as: tag = "button", class: className,
			...rest
		} = vnode.attrs;

		const isDisabled = disabled || loading;

		return m(tag, {
			...rest,
			type: tag === "button" ? (rest.type || "button") : undefined,
			disabled: isDisabled,
			"data-loading": loading || undefined,
			class: classNames(
				styles.button,
				(styles as any)[`variant${capitalize(variant)}`],
				(styles as any)[`size${capitalize(size)}`],
				colorPalette && (styles as any)[`color${capitalize(colorPalette)}`],
				rounded && (styles as any)[`rounded${capitalize(rounded)}`],
				loading && styles.loading,
				className,
			),
		}, [
			loading && spinnerPlacement === "start" && (
				<span class={styles.spinner}>
					<span class={styles.spinnerIcon} />
				</span>
			),
			loading && loadingText ? loadingText : vnode.children,
			loading && spinnerPlacement === "end" && (
				<span class={styles.spinner}>
					<span class={styles.spinnerIcon} />
				</span>
			),
		]);
	}
}

/**
 * ButtonGroup の属性
 */
export interface ButtonGroupAttrs {
	/** 子要素を接着する */
	attached?: boolean;
	/** サイズ */
	size?: ButtonSize;
	/** バリアント */
	variant?: ButtonVariant;
	/** gap */
	gap?: string | number;
	/** 追加クラス */
	class?: string;
	[key: string]: any;
}

/**
 * @class ButtonGroup
 * @description ボタンのグループ化
 */
class ButtonGroupComponent implements m.ClassComponent<ButtonGroupAttrs> {
	view(vnode: m.Vnode<ButtonGroupAttrs>) {
		const {
			attached, gap, class: className,
			...rest
		} = vnode.attrs;

		const inlineStyle: Record<string, string> = {};
		if (gap !== undefined && !attached) inlineStyle.gap = typeof gap === "number" ? `${gap}px` : gap;

		return (
			<div
				{...rest}
				class={classNames(styles.buttonGroup, attached && styles.groupAttached, className)}
				style={inlineStyle}
				role="group"
			>
				{vnode.children}
			</div>
		);
	}
}

export { ButtonComponent as Button, ButtonGroupComponent as ButtonGroup };
