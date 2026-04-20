/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./NativeSelect.module.scss";

/**
 * NativeSelect バリアント
 */
export type NativeSelectVariant = "outline" | "subtle" | "plain" | "ghost";

/**
 * NativeSelect サイズ
 */
export type NativeSelectSize = "xs" | "sm" | "md" | "lg" | "xl";

/* ─── Role Types ─── */
type NativeSelectRole = "field" | "indicator";

/* ─── Attrs ─── */
export interface NativeSelectRootAttrs {
	/** バリアント */
	variant?: NativeSelectVariant;
	/** サイズ */
	size?: NativeSelectSize;
	/** 無効状態 */
	disabled?: boolean;
	/** 追加クラス */
	class?: string;
	[key: string]: any;
}

export interface NativeSelectFieldAttrs {
	[key: string]: any;
}

function capitalize(s: string): string {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

/* ─── マーカークラス ─── */
class NativeSelectFieldMarker { static __nsRole: NativeSelectRole = "field"; view() { return null; } }
class NativeSelectIndicatorMarker { static __nsRole: NativeSelectRole = "indicator"; view() { return null; } }

/**
 * NativeSelect Root コンポーネント — ネイティブセレクトボックス
 *
 * @example
 * ```tsx
 * <NativeSelect.Root variant="outline" size="md">
 *   <NativeSelect.Field>
 *     <option value="">選択してください</option>
 *     <option value="a">オプションA</option>
 *     <option value="b">オプションB</option>
 *   </NativeSelect.Field>
 *   <NativeSelect.Indicator />
 * </NativeSelect.Root>
 * ```
 */
class NativeSelectRoot implements m.ClassComponent<NativeSelectRootAttrs> {
	view(vnode: m.Vnode<NativeSelectRootAttrs>) {
		const {
			variant = "outline",
			size = "md",
			disabled,
			class: className,
			...rest
		} = vnode.attrs;

		const children = (Array.isArray(vnode.children) ? (vnode.children as any[]) : [vnode.children]).flat(Infinity);
		const rendered: m.Children[] = [];
		let hasIndicator = false;

		for (const child of children) {
			if (child && typeof child === "object" && "tag" in child) {
				const tag = (child as m.Vnode<any>).tag as any;
				const cv = child as m.Vnode<any>;
				if (tag?.__nsRole === "field") {
					rendered.push(
						<select
							{...(cv.attrs || {})}
							disabled={disabled}
							class={classNames(styles.field, cv.attrs?.class)}
						>
							{cv.children}
						</select>
					);
					continue;
				}
				if (tag?.__nsRole === "indicator") {
					hasIndicator = true;
					rendered.push(
						<span class={classNames(styles.indicator, cv.attrs?.class)}>
							{cv.children && (cv.children as any[]).length > 0 ? cv.children : "▾"}
						</span>
					);
					continue;
				}
			}
			rendered.push(child as m.Children);
		}

		if (!hasIndicator) {
			rendered.push(<span class={styles.indicator}>▾</span>);
		}

		return (
			<div
				{...rest}
				class={classNames(
					styles.root,
					(styles as any)[`variant${capitalize(variant)}`],
					(styles as any)[`size${capitalize(size)}`],
					{ [styles.disabled]: disabled },
					className
				)}
			>
				{rendered}
			</div>
		);
	}
}

/**
 * NativeSelect コンポーネント名前空間
 */
export const NativeSelect = {
	Root: NativeSelectRoot,
	Field: NativeSelectFieldMarker,
	Indicator: NativeSelectIndicatorMarker,
} as const;

export { NativeSelectRoot };
