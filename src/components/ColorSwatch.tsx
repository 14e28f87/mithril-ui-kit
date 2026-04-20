/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./ColorSwatch.module.scss";

/**
 * ColorSwatch サイズ
 */
export type ColorSwatchSize = "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

/**
 * ColorSwatch の属性
 */
export interface ColorSwatchAttrs {
	/** 表示する色（CSS色値） */
	value: string;
	/** サイズ */
	size?: ColorSwatchSize;
	/** 角丸 */
	rounded?: boolean;
	/** 追加クラス */
	class?: string;
	[key: string]: any;
}

function capitalize(s: string): string {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

/** サイズクラス名を生成 */
function sizeClass(size: string): string {
	if (size.startsWith("2")) return "size2" + size.slice(1);
	return `size${capitalize(size)}`;
}

/**
 * ColorSwatch コンポーネント — 色の見本表示
 *
 * @example
 * ```tsx
 * <ColorSwatch value="#ff0000" size="md" />
 * <ColorSwatch value="rgba(0,0,255,0.5)" rounded />
 * ```
 */
class ColorSwatchComponent implements m.ClassComponent<ColorSwatchAttrs> {
	view(vnode: m.Vnode<ColorSwatchAttrs>) {
		const {
			value,
			size = "md",
			rounded,
			class: className,
			...rest
		} = vnode.attrs;

		return (
			<span
				{...rest}
				class={classNames(
					styles.swatch,
					(styles as any)[sizeClass(size)],
					{ [styles.rounded]: rounded },
					className
				)}
				style={{ "--swatch-color": value } as any}
			>
				{vnode.children}
			</span>
		);
	}
}

/**
 * ColorSwatchMix — 複数の色を混ぜて表示
 */
export interface ColorSwatchMixAttrs {
	/** 色の配列 */
	colors: string[];
	/** サイズ */
	size?: ColorSwatchSize;
	/** 追加クラス */
	class?: string;
	[key: string]: any;
}

class ColorSwatchMixComponent implements m.ClassComponent<ColorSwatchMixAttrs> {
	view(vnode: m.Vnode<ColorSwatchMixAttrs>) {
		const { colors, size = "md", class: className, ...rest } = vnode.attrs;
		const gradient = `linear-gradient(to right, ${colors.join(", ")})`;
		return (
			<span
				{...rest}
				class={classNames(
					styles.swatch,
					(styles as any)[sizeClass(size)],
					className
				)}
				style={{ "--swatch-color": gradient } as any}
			/>
		);
	}
}

export { ColorSwatchComponent as ColorSwatch, ColorSwatchMixComponent as ColorSwatchMix };
