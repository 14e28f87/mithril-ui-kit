/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Button.module.scss";
import type { ButtonVariant, ButtonSize } from "./Button.js";

/**
 * IconButton の属性
 */
export interface IconButtonAttrs {
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
	/** 角丸 */
	rounded?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
	/** アクセシビリティラベル */
	"aria-label"?: string;
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
 * @class IconButton
 * @description
 * アイコンのみを表示する正方形のボタンコンポーネント。
 * Chakra UI の IconButton に相当する。
 *
 * @example
 * <IconButton aria-label="検索" variant="outline">
 *   <i class="bi bi-search" />
 * </IconButton>
 */
class IconButtonComponent implements m.ClassComponent<IconButtonAttrs> {
	view(vnode: m.Vnode<IconButtonAttrs>) {
		const {
			variant = "solid", size = "md", colorPalette, disabled,
			loading, rounded, class: className,
			...rest
		} = vnode.attrs;

		const isDisabled = disabled || loading;

		return (
			<button
				{...rest}
				type={rest.type || "button"}
				disabled={isDisabled}
				data-loading={loading || undefined}
				class={classNames(
					styles.button,
					styles.iconButton,
					(styles as any)[`variant${capitalize(variant)}`],
					(styles as any)[`iconSize${capitalize(size)}`],
					colorPalette && (styles as any)[`color${capitalize(colorPalette)}`],
					rounded && (styles as any)[`rounded${capitalize(rounded)}`],
					loading && styles.loading,
					className,
				)}
			>
				{loading
					? <span class={styles.spinnerIcon} />
					: vnode.children
				}
			</button>
		);
	}
}

export { IconButtonComponent as IconButton };
