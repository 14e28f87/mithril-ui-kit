/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./SegmentedControl.module.scss";

/**
 * SegmentedControl サイズ
 */
export type SegmentedControlSize = "xs" | "sm" | "md" | "lg";

/* ─── Role Types ─── */
type SCRole = "item" | "itemText" | "itemHiddenInput" | "indicator";

/* ─── Attrs ─── */
export interface SegmentedControlRootAttrs {
	/** サイズ */
	size?: SegmentedControlSize;
	/** 選択値 */
	value?: string;
	/** 値変更コールバック */
	onValueChange?: (value: string) => void;
	/** 方向 */
	orientation?: "horizontal" | "vertical";
	/** 追加クラス */
	class?: string;
	[key: string]: any;
}

export interface SegmentedControlItemAttrs {
	/** この項目の値 */
	value: string;
	/** 無効状態 */
	disabled?: boolean;
	/** 追加クラス */
	class?: string;
	[key: string]: any;
}

function capitalize(s: string): string {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

/* ─── マーカークラス ─── */
class SCItemMarker { static __scRole: SCRole = "item"; view() { return null; } }
class SCItemTextMarker { static __scRole: SCRole = "itemText"; view() { return null; } }
class SCItemHiddenInputMarker { static __scRole: SCRole = "itemHiddenInput"; view() { return null; } }
class SCIndicatorMarker { static __scRole: SCRole = "indicator"; view() { return null; } }

/**
 * SegmentedControl Root コンポーネント — ボタン風の切替セレクタ
 *
 * @example
 * ```tsx
 * <SegmentedControl.Root value={selected} onValueChange={v => selected = v}>
 *   <SegmentedControl.Item value="list">
 *     <SegmentedControl.ItemText>リスト</SegmentedControl.ItemText>
 *   </SegmentedControl.Item>
 *   <SegmentedControl.Item value="grid">
 *     <SegmentedControl.ItemText>グリッド</SegmentedControl.ItemText>
 *   </SegmentedControl.Item>
 * </SegmentedControl.Root>
 * ```
 */
class SegmentedControlRoot implements m.ClassComponent<SegmentedControlRootAttrs> {
	view(vnode: m.Vnode<SegmentedControlRootAttrs>) {
		const {
			size = "md",
			value,
			onValueChange,
			orientation = "horizontal",
			class: className,
			...rest
		} = vnode.attrs;

		const children = (Array.isArray(vnode.children) ? (vnode.children as any[]) : [vnode.children]).flat(Infinity);
		const items: m.Children[] = [];

		for (const child of children) {
			if (child && typeof child === "object" && "tag" in child) {
				const tag = (child as m.Vnode<any>).tag as any;
				const cv = child as m.Vnode<any>;
				if (tag?.__scRole === "item") {
					const itemValue = cv.attrs?.value;
					const checked = value === itemValue;
					const disabled = cv.attrs?.disabled;

					items.push(
						<button
							type="button"
							class={classNames(
								styles.item,
								{ [styles.itemSelected]: checked },
								{ [styles.disabled]: disabled },
								cv.attrs?.class
							)}
							disabled={disabled}
							onclick={() => { if (!disabled) onValueChange?.(itemValue); }}
						>
							{this.renderItemContent(cv.children)}
						</button>
					);
					continue;
				}
			}
			items.push(child as m.Children);
		}

		return (
			<div
				{...rest}
				role="radiogroup"
				class={classNames(
					styles.root,
					(styles as any)[`size${capitalize(size)}`],
					styles[orientation],
					className
				)}
			>
				{items}
			</div>
		);
	}

	private renderItemContent(children: m.Children): m.Children[] {
		const arr = (Array.isArray(children) ? (children as any[]) : [children]).flat(Infinity);
		const rendered: m.Children[] = [];
		for (const child of arr) {
			if (child && typeof child === "object" && "tag" in child) {
				const tag = (child as m.Vnode<any>).tag as any;
				const cv = child as m.Vnode<any>;
				if (tag?.__scRole === "itemText") {
					rendered.push(<span class={cv.attrs?.class}>{cv.children}</span>);
					continue;
				}
				if (tag?.__scRole === "itemHiddenInput") continue;
			}
			rendered.push(child as m.Children);
		}
		return rendered;
	}
}

/**
 * SegmentedControl コンポーネント名前空間
 */
export const SegmentedControl = {
	Root: SegmentedControlRoot,
	Item: SCItemMarker,
	ItemText: SCItemTextMarker,
	ItemHiddenInput: SCItemHiddenInputMarker,
	Indicator: SCIndicatorMarker,
} as const;

export { SegmentedControlRoot };
