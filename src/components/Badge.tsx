/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Badge.module.scss";

/**
 * Badge バリアント
 */
export type BadgeVariant = "solid" | "subtle" | "outline" | "surface" | "plain";

/**
 * Badge サイズ
 */
export type BadgeSize = "xs" | "sm" | "md" | "lg";

/**
 * Badge の属性
 */
export interface BadgeAttrs {
	/** バリアント */
	variant?: BadgeVariant;
	/** サイズ */
	size?: BadgeSize;
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
 * Badge コンポーネント — ステータスやカテゴリのハイライト表示に使用
 *
 * @example
 * ```tsx
 * <Badge variant="solid" colorPalette="green">New</Badge>
 * <Badge variant="outline" size="lg">Status</Badge>
 * ```
 */
class BadgeComponent implements m.ClassComponent<BadgeAttrs> {
	view(vnode: m.Vnode<BadgeAttrs>) {
		const {
			variant = "subtle",
			size = "sm",
			colorPalette,
			class: className,
			...rest
		} = vnode.attrs;

		return (
			<span
				{...rest}
				class={classNames(
					styles.badge,
					(styles as any)[`variant${capitalize(variant)}`],
					(styles as any)[`size${capitalize(size)}`],
					colorPalette && (styles as any)[`color${capitalize(colorPalette)}`],
					className
				)}
			>
				{vnode.children}
			</span>
		);
	}
}

export { BadgeComponent as Badge };
