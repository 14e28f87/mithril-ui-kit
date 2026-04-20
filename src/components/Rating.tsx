/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Rating.module.scss";

/**
 * Rating サイズ
 */
export type RatingSize = "xs" | "sm" | "md" | "lg";

/* ─── Attrs ─── */
export interface RatingRootAttrs {
	/** サイズ */
	size?: RatingSize;
	/** カラーパレット */
	colorPalette?: string;
	/** アイテム数 */
	count?: number;
	/** 現在値 */
	value?: number;
	/** デフォルト値 */
	defaultValue?: number;
	/** 値変更コールバック */
	onValueChange?: (value: number) => void;
	/** 半分刻み許可 */
	allowHalf?: boolean;
	/** 読み取り専用 */
	readOnly?: boolean;
	/** 無効 */
	disabled?: boolean;
	/** 追加クラス */
	class?: string;
	[key: string]: any;
}

function capitalize(s: string): string {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

/**
 * Rating Root コンポーネント — 星評価
 *
 * @example
 * ```tsx
 * <Rating.Root value={rating} onValueChange={v => rating = v} count={5} />
 * <Rating.Root value={3.5} readOnly allowHalf />
 * ```
 */
class RatingRoot implements m.ClassComponent<RatingRootAttrs> {
	private internalValue = 0;
	private hoverValue = -1;

	oninit(vnode: m.Vnode<RatingRootAttrs>) {
		this.internalValue = vnode.attrs.defaultValue ?? 0;
	}

	view(vnode: m.Vnode<RatingRootAttrs>) {
		const {
			size = "md",
			colorPalette = "orange",
			count = 5,
			value,
			defaultValue,
			onValueChange,
			allowHalf,
			readOnly,
			disabled,
			class: className,
			...rest
		} = vnode.attrs;

		const currentValue = value !== undefined ? value : this.internalValue;
		const displayValue = this.hoverValue >= 0 ? this.hoverValue : currentValue;

		const items: m.Children[] = [];
		for (let i = 1; i <= count; i++) {
			if (allowHalf) {
				// 半分刻み: 左半分(i-0.5) 右半分(i)
				items.push(
					<span
						class={classNames(styles.item, { [styles.disabled]: disabled })}
						onmouseleave={readOnly || disabled ? undefined : () => { this.hoverValue = -1; m.redraw(); }}
					>
						<span
							class={classNames(styles.halfLeft, { [styles.filled]: displayValue >= i - 0.5 })}
							onmouseenter={readOnly || disabled ? undefined : () => { this.hoverValue = i - 0.5; m.redraw(); }}
							onclick={readOnly || disabled ? undefined : () => {
								this.internalValue = i - 0.5;
								onValueChange?.(i - 0.5);
							}}
						>
							★
						</span>
						<span
							class={classNames(styles.halfRight, { [styles.filled]: displayValue >= i })}
							onmouseenter={readOnly || disabled ? undefined : () => { this.hoverValue = i; m.redraw(); }}
							onclick={readOnly || disabled ? undefined : () => {
								this.internalValue = i;
								onValueChange?.(i);
							}}
						>
							★
						</span>
					</span>
				);
			} else {
				items.push(
					<span
						class={classNames(
							styles.item,
							{ [styles.filled]: displayValue >= i },
							{ [styles.disabled]: disabled }
						)}
						onmouseenter={readOnly || disabled ? undefined : () => { this.hoverValue = i; m.redraw(); }}
						onmouseleave={readOnly || disabled ? undefined : () => { this.hoverValue = -1; m.redraw(); }}
						onclick={readOnly || disabled ? undefined : () => {
							this.internalValue = i;
							onValueChange?.(i);
						}}
					>
						★
					</span>
				);
			}
		}

		return (
			<div
				{...rest}
				role="radiogroup"
				aria-label="Rating"
				class={classNames(
					styles.root,
					(styles as any)[`size${capitalize(size)}`],
					(styles as any)[`color${capitalize(colorPalette)}`],
					{ [styles.readOnly]: readOnly },
					className
				)}
			>
				{items}
			</div>
		);
	}
}

/**
 * Rating コンポーネント名前空間
 */
export const Rating = {
	Root: RatingRoot,
} as const;

export { RatingRoot };
