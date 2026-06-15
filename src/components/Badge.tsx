/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Badge.module.scss";
import type { ThemeColor } from "../types.js";

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
	/** カラー（Bootstrap テーマカラー） */
	color?: ThemeColor;
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
 * <Badge variant="solid" color="success">New</Badge>
 * <Badge variant="outline" size="lg">Status</Badge>
 * ```
 */
class BadgeComponent implements m.ClassComponent<BadgeAttrs> {
	view(vnode: m.Vnode<BadgeAttrs>) {
		const {
			variant = "subtle",
			size = "sm",
			color,
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
					color && (styles as any)[`color${capitalize(color)}`],
					className
				)}
			>
				{vnode.children}
			</span>
		);
	}
}

export { BadgeComponent as Badge };
