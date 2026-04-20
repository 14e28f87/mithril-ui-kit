/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Listbox.module.scss";

/**
 * Listbox バリアント
 */
export type ListboxVariant = "subtle" | "solid" | "plain";

/**
 * Listbox 選択モード
 */
export type ListboxSelectionMode = "single" | "multiple";

/**
 * Listbox 項目
 */
export interface ListboxItem {
	value: string;
	label: string;
	disabled?: boolean;
	group?: string;
}

/* ─── Attrs ─── */
export interface ListboxRootAttrs {
	/** バリアント */
	variant?: ListboxVariant;
	/** 項目リスト */
	items: ListboxItem[];
	/** 選択値 */
	value?: string | string[];
	/** 値変更コールバック */
	onValueChange?: (value: string | string[]) => void;
	/** 選択モード */
	selectionMode?: ListboxSelectionMode;
	/** 追加クラス */
	class?: string;
	[key: string]: any;
}

function capitalize(s: string): string {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

/**
 * Listbox Root コンポーネント — リスト形式の選択
 *
 * @example
 * ```tsx
 * const items = [
 *   { value: "apple", label: "りんご" },
 *   { value: "banana", label: "バナナ" },
 * ];
 * <Listbox.Root items={items} value={selected} onValueChange={v => selected = v} />
 * ```
 */
class ListboxRoot implements m.ClassComponent<ListboxRootAttrs> {
	view(vnode: m.Vnode<ListboxRootAttrs>) {
		const {
			variant = "subtle",
			items,
			value,
			onValueChange,
			selectionMode = "single",
			class: className,
			...rest
		} = vnode.attrs;

		const multiple = selectionMode === "multiple";
		const selectedValues = multiple
			? (Array.isArray(value) ? value : [])
			: (value ? [value as string] : []);

		// グループ化
		const groups = new Map<string, ListboxItem[]>();
		const ungrouped: ListboxItem[] = [];
		for (const item of items) {
			if (item.group) {
				const g = groups.get(item.group) ?? [];
				g.push(item);
				groups.set(item.group, g);
			} else {
				ungrouped.push(item);
			}
		}

		return (
			<div
				{...rest}
				role="listbox"
				aria-multiselectable={multiple || undefined}
				class={classNames(
					styles.root,
					(styles as any)[`variant${capitalize(variant)}`],
					className
				)}
			>
				{ungrouped.map(item => this.renderItem(item, selectedValues, multiple, onValueChange))}
				{Array.from(groups.entries()).map(([groupLabel, groupItems]) => (
					<div class={styles.itemGroup} key={groupLabel}>
						<div class={styles.itemGroupLabel}>{groupLabel}</div>
						{groupItems.map(item => this.renderItem(item, selectedValues, multiple, onValueChange))}
					</div>
				))}
			</div>
		);
	}

	private renderItem(
		item: ListboxItem, selectedValues: string[],
		multiple: boolean, onValueChange?: (v: string | string[]) => void
	): m.Children {
		const selected = selectedValues.includes(item.value);
		return (
			<div
				key={item.value}
				role="option"
				aria-selected={selected}
				aria-disabled={item.disabled || undefined}
				class={classNames(
					styles.item,
					{ [styles.itemSelected]: selected },
					{ [styles.itemDisabled]: item.disabled }
				)}
				onclick={() => {
					if (item.disabled) return;
					if (multiple) {
						const newVal = selected
							? selectedValues.filter(v => v !== item.value)
							: [...selectedValues, item.value];
						onValueChange?.(newVal);
					} else {
						onValueChange?.(item.value);
					}
				}}
			>
				{multiple && (
					<span class={styles.itemIndicator}>
						{selected ? "✓" : ""}
					</span>
				)}
				<span class={styles.itemText}>{item.label}</span>
			</div>
		);
	}
}

/**
 * Listbox コンポーネント名前空間
 */
export const Listbox = {
	Root: ListboxRoot,
} as const;

export { ListboxRoot };
