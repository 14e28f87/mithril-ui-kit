/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./CheckboxCard.module.scss";

/**
 * CheckboxCard バリアント
 */
export type CheckboxCardVariant = "surface" | "subtle" | "outline" | "solid";

/**
 * CheckboxCard サイズ
 */
export type CheckboxCardSize = "sm" | "md" | "lg";

/* ─── Role Types ─── */
type CheckboxCardRole = "hiddenInput" | "control" | "content" | "label" | "description" | "indicator" | "addon";

/* ─── Attrs ─── */
export interface CheckboxCardRootAttrs {
	/** バリアント */
	variant?: CheckboxCardVariant;
	/** サイズ */
	size?: CheckboxCardSize;
	/** チェック状態 */
	checked?: boolean;
	/** デフォルトチェック */
	defaultChecked?: boolean;
	/** 変更コールバック */
	onCheckedChange?: (checked: boolean) => void;
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
class CCHiddenInputMarker { static __ccRole: CheckboxCardRole = "hiddenInput"; view() { return null; } }
class CCControlMarker { static __ccRole: CheckboxCardRole = "control"; view() { return null; } }
class CCContentMarker { static __ccRole: CheckboxCardRole = "content"; view() { return null; } }
class CCLabelMarker { static __ccRole: CheckboxCardRole = "label"; view() { return null; } }
class CCDescriptionMarker { static __ccRole: CheckboxCardRole = "description"; view() { return null; } }
class CCIndicatorMarker { static __ccRole: CheckboxCardRole = "indicator"; view() { return null; } }
class CCAddonMarker { static __ccRole: CheckboxCardRole = "addon"; view() { return null; } }

/**
 * CheckboxCard Root コンポーネント — カード形式のチェックボックス
 *
 * @example
 * ```tsx
 * <CheckboxCard.Root checked={isChecked} onCheckedChange={v => isChecked = v}>
 *   <CheckboxCard.Control>
 *     <CheckboxCard.Content>
 *       <CheckboxCard.Label>ラベル</CheckboxCard.Label>
 *       <CheckboxCard.Description>説明</CheckboxCard.Description>
 *     </CheckboxCard.Content>
 *     <CheckboxCard.Indicator />
 *   </CheckboxCard.Control>
 * </CheckboxCard.Root>
 * ```
 */
class CheckboxCardRoot implements m.ClassComponent<CheckboxCardRootAttrs> {
	private internalChecked = false;

	oninit(vnode: m.Vnode<CheckboxCardRootAttrs>) {
		this.internalChecked = vnode.attrs.defaultChecked || false;
	}

	view(vnode: m.Vnode<CheckboxCardRootAttrs>) {
		const {
			variant = "outline",
			size = "md",
			checked,
			defaultChecked,
			onCheckedChange,
			disabled,
			class: className,
			...rest
		} = vnode.attrs;

		const isChecked = checked !== undefined ? checked : this.internalChecked;

		return (
			<label
				{...rest}
				class={classNames(
					styles.root,
					(styles as any)[`variant${capitalize(variant)}`],
					(styles as any)[`size${capitalize(size)}`],
					{ [styles.checked]: isChecked },
					{ [styles.disabled]: disabled },
					className
				)}
			>
				<input
					type="checkbox"
					checked={isChecked}
					disabled={disabled}
					class={styles.hiddenInput}
					onchange={() => {
						if (disabled) return;
						const next = !isChecked;
						this.internalChecked = next;
						onCheckedChange?.(next);
					}}
				/>
				{this.renderChildren(vnode.children, isChecked)}
			</label>
		);
	}

	private renderChildren(children: m.Children, checked: boolean): m.Children[] {
		const arr = (Array.isArray(children) ? (children as any[]) : [children]).flat(Infinity);
		const rendered: m.Children[] = [];

		for (const child of arr) {
			if (child && typeof child === "object" && "tag" in child) {
				const tag = (child as m.Vnode<any>).tag as any;
				const cv = child as m.Vnode<any>;
				if (tag?.__ccRole === "hiddenInput") continue;
				if (tag?.__ccRole === "control") {
					rendered.push(<div class={classNames(styles.control, cv.attrs?.class)}>{this.renderChildren(cv.children, checked)}</div>);
					continue;
				}
				if (tag?.__ccRole === "content") {
					rendered.push(<div class={classNames(styles.content, cv.attrs?.class)}>{this.renderChildren(cv.children, checked)}</div>);
					continue;
				}
				if (tag?.__ccRole === "label") {
					rendered.push(<div class={classNames(styles.label, cv.attrs?.class)}>{cv.children}</div>);
					continue;
				}
				if (tag?.__ccRole === "description") {
					rendered.push(<div class={classNames(styles.description, cv.attrs?.class)}>{cv.children}</div>);
					continue;
				}
				if (tag?.__ccRole === "indicator") {
					rendered.push(
						<span class={classNames(styles.indicator, { [styles.indicatorChecked]: checked }, cv.attrs?.class)}>
							{checked ? "✓" : ""}
						</span>
					);
					continue;
				}
				if (tag?.__ccRole === "addon") {
					rendered.push(<div class={classNames(styles.addon, cv.attrs?.class)}>{cv.children}</div>);
					continue;
				}
			}
			rendered.push(child as m.Children);
		}
		return rendered;
	}
}

/**
 * CheckboxCard コンポーネント名前空間
 */
export const CheckboxCard = {
	Root: CheckboxCardRoot,
	HiddenInput: CCHiddenInputMarker,
	Control: CCControlMarker,
	Content: CCContentMarker,
	Label: CCLabelMarker,
	Description: CCDescriptionMarker,
	Indicator: CCIndicatorMarker,
	Addon: CCAddonMarker,
} as const;

export { CheckboxCardRoot };
