/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./RadioCard.module.scss";

/**
 * RadioCard バリアント
 */
export type RadioCardVariant = "surface" | "subtle" | "outline" | "solid";

/**
 * RadioCard サイズ
 */
export type RadioCardSize = "sm" | "md" | "lg";

/* ─── Role Types ─── */
type RadioCardRole = "label" | "item" | "itemHiddenInput" | "itemControl" | "itemContent"
	| "itemText" | "itemDescription" | "itemIndicator" | "itemAddon";

/* ─── Attrs ─── */
export interface RadioCardRootAttrs {
	/** バリアント */
	variant?: RadioCardVariant;
	/** サイズ */
	size?: RadioCardSize;
	/** 選択値 */
	value?: string;
	/** 値変更コールバック */
	onValueChange?: (value: string) => void;
	/** ラジオ名 (name属性) */
	name?: string;
	/** 方向 */
	orientation?: "horizontal" | "vertical";
	/** 追加クラス */
	class?: string;
	[key: string]: any;
}

export interface RadioCardItemAttrs {
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
class RCLabelMarker { static __rcRole: RadioCardRole = "label"; view() { return null; } }
class RCItemMarker { static __rcRole: RadioCardRole = "item"; view() { return null; } }
class RCItemHiddenInputMarker { static __rcRole: RadioCardRole = "itemHiddenInput"; view() { return null; } }
class RCItemControlMarker { static __rcRole: RadioCardRole = "itemControl"; view() { return null; } }
class RCItemContentMarker { static __rcRole: RadioCardRole = "itemContent"; view() { return null; } }
class RCItemTextMarker { static __rcRole: RadioCardRole = "itemText"; view() { return null; } }
class RCItemDescriptionMarker { static __rcRole: RadioCardRole = "itemDescription"; view() { return null; } }
class RCItemIndicatorMarker { static __rcRole: RadioCardRole = "itemIndicator"; view() { return null; } }
class RCItemAddonMarker { static __rcRole: RadioCardRole = "itemAddon"; view() { return null; } }

/**
 * RadioCard Root コンポーネント — カード形式のラジオ選択
 *
 * @example
 * ```tsx
 * <RadioCard.Root value={selected} onValueChange={v => selected = v}>
 *   <RadioCard.Item value="a">
 *     <RadioCard.ItemControl>
 *       <RadioCard.ItemText>オプションA</RadioCard.ItemText>
 *       <RadioCard.ItemDescription>説明A</RadioCard.ItemDescription>
 *     </RadioCard.ItemControl>
 *     <RadioCard.ItemIndicator />
 *   </RadioCard.Item>
 * </RadioCard.Root>
 * ```
 */
class RadioCardRoot implements m.ClassComponent<RadioCardRootAttrs> {
	view(vnode: m.Vnode<RadioCardRootAttrs>) {
		const {
			variant = "outline",
			size = "md",
			value,
			onValueChange,
			name,
			orientation = "vertical",
			class: className,
			...rest
		} = vnode.attrs;

		return (
			<div
				{...rest}
				role="radiogroup"
				class={classNames(
					styles.root,
					(styles as any)[`variant${capitalize(variant)}`],
					(styles as any)[`size${capitalize(size)}`],
					styles[orientation],
					className
				)}
			>
				{this.renderItems(vnode.children, { value, onValueChange, name, variant })}
			</div>
		);
	}

	private renderItems(
		children: m.Children,
		ctx: { value?: string; onValueChange?: (v: string) => void; name?: string; variant?: string }
	): m.Children[] {
		const arr = (Array.isArray(children) ? (children as any[]) : [children]).flat(Infinity);
		const rendered: m.Children[] = [];

		for (const child of arr) {
			if (child && typeof child === "object" && "tag" in child) {
				const tag = (child as m.Vnode<any>).tag as any;
				const cv = child as m.Vnode<any>;
				if (tag?.__rcRole === "label") {
					rendered.push(<div class={classNames(styles.label, cv.attrs?.class)}>{cv.children}</div>);
					continue;
				}
				if (tag?.__rcRole === "item") {
					const itemValue = cv.attrs?.value;
					const checked = ctx.value === itemValue;
					const disabled = cv.attrs?.disabled;

					rendered.push(
						<label
							class={classNames(
								styles.item,
								{ [styles.checked]: checked },
								{ [styles.disabled]: disabled },
								cv.attrs?.class
							)}
						>
							<input
								type="radio"
								name={ctx.name}
								value={itemValue}
								checked={checked}
								disabled={disabled}
								class={styles.hiddenInput}
								onchange={() => { if (!disabled) ctx.onValueChange?.(itemValue); }}
							/>
							{this.renderItemContent(cv.children, checked)}
						</label>
					);
					continue;
				}
			}
			rendered.push(child as m.Children);
		}
		return rendered;
	}

	private renderItemContent(children: m.Children, checked: boolean): m.Children[] {
		const arr = (Array.isArray(children) ? (children as any[]) : [children]).flat(Infinity);
		const rendered: m.Children[] = [];

		for (const child of arr) {
			if (child && typeof child === "object" && "tag" in child) {
				const tag = (child as m.Vnode<any>).tag as any;
				const cv = child as m.Vnode<any>;
				if (tag?.__rcRole === "itemHiddenInput") continue;
				if (tag?.__rcRole === "itemControl") {
					rendered.push(<div class={classNames(styles.itemControl, cv.attrs?.class)}>{this.renderItemContent(cv.children, checked)}</div>);
					continue;
				}
				if (tag?.__rcRole === "itemContent") {
					rendered.push(<div class={classNames(styles.itemContent, cv.attrs?.class)}>{this.renderItemContent(cv.children, checked)}</div>);
					continue;
				}
				if (tag?.__rcRole === "itemText") {
					rendered.push(<div class={classNames(styles.itemText, cv.attrs?.class)}>{cv.children}</div>);
					continue;
				}
				if (tag?.__rcRole === "itemDescription") {
					rendered.push(<div class={classNames(styles.itemDescription, cv.attrs?.class)}>{cv.children}</div>);
					continue;
				}
				if (tag?.__rcRole === "itemIndicator") {
					rendered.push(
						<span class={classNames(styles.itemIndicator, cv.attrs?.class)}>
							<span class={classNames(styles.indicatorDot, { [styles.indicatorDotChecked]: checked })} />
						</span>
					);
					continue;
				}
				if (tag?.__rcRole === "itemAddon") {
					rendered.push(<div class={classNames(styles.itemAddon, cv.attrs?.class)}>{cv.children}</div>);
					continue;
				}
			}
			rendered.push(child as m.Children);
		}
		return rendered;
	}
}

/**
 * RadioCard コンポーネント名前空間
 */
export const RadioCard = {
	Root: RadioCardRoot,
	Label: RCLabelMarker,
	Item: RCItemMarker,
	ItemHiddenInput: RCItemHiddenInputMarker,
	ItemControl: RCItemControlMarker,
	ItemContent: RCItemContentMarker,
	ItemText: RCItemTextMarker,
	ItemDescription: RCItemDescriptionMarker,
	ItemIndicator: RCItemIndicatorMarker,
	ItemAddon: RCItemAddonMarker,
} as const;

export { RadioCardRoot };
