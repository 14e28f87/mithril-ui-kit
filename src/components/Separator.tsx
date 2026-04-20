/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Separator.module.scss";

/** Separator のバリアント */
export type SeparatorVariant = "solid" | "dashed" | "dotted";
/** Separator のサイズ */
export type SeparatorSize = "xs" | "sm" | "md" | "lg";

/**
 * Separator の属性
 */
export interface SeparatorAttrs {
	/** バリアント */
	variant?: SeparatorVariant;
	/** サイズ (太さ) */
	size?: SeparatorSize;
	/** 方向 */
	orientation?: "horizontal" | "vertical";
	/** ラベル */
	label?: string;
	/** ラベル位置 */
	labelPlacement?: "start" | "center" | "end";
	/** カラーパレット */
	colorPalette?: string;
	/** 追加クラス */
	class?: string;
	[key: string]: any;
}

function capitalize(s: string): string {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

/**
 * @class Separator
 * @description
 * コンテンツを視覚的に分離するセパレーターコンポーネント。
 * Chakra UI の Separator に相当する。
 *
 * @example
 * <Separator />
 * <Separator orientation="vertical" variant="dashed" />
 * <Separator label="セクション" />
 */
class SeparatorComponent implements m.ClassComponent<SeparatorAttrs> {
	view(vnode: m.Vnode<SeparatorAttrs>) {
		const {
			variant = "solid", size = "sm", orientation = "horizontal",
			label, labelPlacement = "center", colorPalette,
			class: className, ...rest
		} = vnode.attrs;

		const isVertical = orientation === "vertical";

		return (
			<div
				{...rest}
				role="separator"
				aria-orientation={orientation}
				class={classNames(
					styles.separator,
					isVertical ? styles.vertical : styles.horizontal,
					(styles as any)[`variant${capitalize(variant)}`],
					(styles as any)[`size${capitalize(size)}`],
					colorPalette && (styles as any)[`color${capitalize(colorPalette)}`],
					label && styles.hasLabel,
					label && (styles as any)[`label${capitalize(labelPlacement)}`],
					className,
				)}
			>
				{label && <span class={styles.label}>{label}</span>}
			</div>
		);
	}
}

export { SeparatorComponent as Separator };
