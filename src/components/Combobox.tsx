/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Combobox.module.scss";
import { startFloating } from "../utils/floating";

/**
 * Combobox バリアント
 */
export type ComboboxVariant = "outline" | "subtle" | "flushed";

/**
 * Combobox サイズ
 */
export type ComboboxSize = "xs" | "sm" | "md" | "lg";

/**
 * Combobox 項目
 */
export interface ComboboxItem {
	value: string;
	label: string;
	disabled?: boolean;
	group?: string;
}

/* ─── Attrs ─── */
export interface ComboboxRootAttrs {
	/** バリアント */
	variant?: ComboboxVariant;
	/** サイズ */
	size?: ComboboxSize;
	/** 項目リスト */
	items: ComboboxItem[];
	/** 選択値（単一） */
	value?: string | string[];
	/** 値変更コールバック */
	onValueChange?: (value: string | string[]) => void;
	/** 複数選択 */
	multiple?: boolean;
	/** クリック時に開く */
	openOnClick?: boolean;
	/** プレースホルダー */
	placeholder?: string;
	/** 無効状態 */
	disabled?: boolean;
	/** エラー状態 */
	invalid?: boolean;
	/** 新規値の作成を許可 */
	creatable?: boolean;
	/** 新規値作成時コールバック */
	onCreateItem?: (value: string) => void;
	/** ドロップダウンを開く最小入力文字数（0 = 制限なし） */
	minChars?: number;
	/** 追加クラス */
	class?: string;
	[key: string]: any;
}

function capitalize(s: string): string {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

/**
 * Combobox Root コンポーネント — 検索可能なセレクトボックス
 *
 * @example
 * ```tsx
 * const items = [
 *   { value: "react", label: "React" },
 *   { value: "vue", label: "Vue" },
 *   { value: "mithril", label: "Mithril" },
 * ];
 * <Combobox.Root items={items} value={selected} onValueChange={v => selected = v} />
 * ```
 */
class ComboboxRoot implements m.ClassComponent<ComboboxRootAttrs> {
	private isOpen = false;
	private query = "";
	private highlightIndex = -1;
	private inputEl: HTMLInputElement | null = null;
	private containerEl: HTMLElement | null = null;
	private cleanupAutoUpdate: (() => void) | null = null;

	onremove() {
		document.removeEventListener("mousedown", this.handleOutsideClick);
		this.cleanupAutoUpdate?.();
		this.cleanupAutoUpdate = null;
	}

	private handleOutsideClick = (e: MouseEvent) => {
		// Shadow DOM 内クリック時は e.target がリターゲティングされるため composedPath() で判定
		if (this.containerEl && !e.composedPath().includes(this.containerEl)) {
			this.isOpen = false;
			m.redraw();
		}
	};

	view(vnode: m.Vnode<ComboboxRootAttrs>) {
		const {
			variant = "outline",
			size = "md",
			items,
			value,
			onValueChange,
			multiple,
			openOnClick = true,
			placeholder = "検索...",
			disabled,
			invalid,
			creatable,
			onCreateItem,
			minChars = 0,
			class: className,
			...rest
		} = vnode.attrs;

		const filtered = items.filter(item =>
			!this.query || item.label.toLowerCase().includes(this.query.toLowerCase())
		);

		const selectedValues = multiple
			? (Array.isArray(value) ? value : [])
			: (value ? [value as string] : []);

		const selectedLabels = items
			.filter(it => selectedValues.includes(it.value))
			.map(it => it.label);

		const creatableActive = !!(creatable && this.query);

		return (
			<div
				{...rest}
				class={classNames(
					styles.root,
					(styles as any)[`variant${capitalize(variant)}`],
					(styles as any)[`size${capitalize(size)}`],
					{ [styles.disabled]: disabled },
					{ [styles.invalid]: invalid },
					className
				)}
				oncreate={(vn: m.VnodeDOM) => {
					this.containerEl = vn.dom as HTMLElement;
					document.addEventListener("mousedown", this.handleOutsideClick);
				}}
			>
				<div class={styles.control}>
					{multiple && selectedLabels.length > 0 && (
						<div class={styles.tags}>
							{selectedLabels.map(label => (
								<span class={styles.tag}>
									{label}
									<button
										type="button"
										class={styles.tagClose}
										onclick={(e: Event) => {
											e.stopPropagation();
											const item = items.find(it => it.label === label);
											if (item) {
												const newVal = selectedValues.filter(v => v !== item.value);
												onValueChange?.(newVal);
											}
										}}
									>✕</button>
								</span>
							))}
						</div>
					)}
					<input
						type="text"
						class={styles.input}
						placeholder={!multiple && selectedLabels.length > 0 ? selectedLabels[0] : placeholder}
						disabled={disabled}
						value={this.query}
						oninput={(e: Event) => {
							this.query = (e.target as HTMLInputElement).value;
							this.isOpen = !minChars || this.query.length >= minChars;
							this.highlightIndex = 0;
						}}
						onfocus={() => {
							if (openOnClick && (!minChars || this.query.length >= minChars)) this.isOpen = true;
						}}
						onkeydown={(e: KeyboardEvent) =>
							this.handleKeydown(e, filtered, selectedValues, multiple, onValueChange, creatableActive, onCreateItem)
						}
						oncreate={(vn: m.VnodeDOM) => { this.inputEl = vn.dom as HTMLInputElement; }}
					/>
					{selectedValues.length > 0 && !multiple && (
						<button
							type="button"
							class={styles.clearTrigger}
							onclick={(e: Event) => {
								e.stopPropagation();
								this.query = "";
								onValueChange?.(multiple ? [] : "");
							}}
						>✕</button>
					)}
					<span class={styles.triggerIcon} onclick={() => { if (!disabled) this.isOpen = !this.isOpen; }}>▾</span>
				</div>
				{this.isOpen && (
					<div
						class={styles.content}
						oncreate={(vn: m.VnodeDOM) => {
							this.cleanupAutoUpdate?.();
							if (this.containerEl) {
								this.cleanupAutoUpdate = startFloating(
									this.containerEl,
									vn.dom as HTMLElement,
									{ placement: "bottom-start", matchWidth: true, offsetValue: 4 },
								);
							}
						}}
						onremove={() => {
							this.cleanupAutoUpdate?.();
							this.cleanupAutoUpdate = null;
						}}
					>
						{this.renderContent(filtered, selectedValues, multiple, onValueChange, creatableActive, onCreateItem)}
					</div>
				)}
			</div>
		);
	}

	private renderContent(
		filtered: ComboboxItem[],
		selectedValues: string[],
		multiple: boolean | undefined,
		onValueChange: ((v: string | string[]) => void) | undefined,
		creatableActive: boolean,
		onCreateItem: ((v: string) => void) | undefined,
	): m.Children {
		const renderItem = (item: ComboboxItem, i: number): m.Vnode => (
			<div
				key={item.value}
				class={classNames(
					styles.item,
					{ [styles.itemHighlighted]: i === this.highlightIndex },
					{ [styles.itemSelected]: selectedValues.includes(item.value) },
					{ [styles.itemDisabled]: item.disabled }
				)}
				onmouseenter={() => { this.highlightIndex = i; }}
				onclick={() => {
					if (item.disabled) return;
					if (multiple) {
						const newVal = selectedValues.includes(item.value)
							? selectedValues.filter(v => v !== item.value)
							: [...selectedValues, item.value];
						onValueChange?.(newVal);
					} else {
						onValueChange?.(item.value);
						this.isOpen = false;
						this.query = "";
					}
				}}
			>
				{multiple && (
					<span class={styles.itemCheck}>
						{selectedValues.includes(item.value) ? "✓" : ""}
					</span>
				)}
				{item.label}
			</div>
		);

		if (filtered.length === 0 && !creatableActive) {
			return <div class={styles.empty}>結果なし</div>;
		}

		const nodes: m.Vnode[] = [];
		const hasGroups = filtered.some(item => item.group);

		if (hasGroups) {
			// グループごとにまとめて表示
			const groups = new Map<string, { item: ComboboxItem; idx: number }[]>();
			filtered.forEach((item, idx) => {
				const g = item.group ?? "";
				if (!groups.has(g)) groups.set(g, []);
				groups.get(g)!.push({ item, idx });
			});
			// グループなしのアイテムを先頭に
			if (groups.has("")) {
				for (const { item, idx } of groups.get("")!) {
					nodes.push(renderItem(item, idx));
				}
			}
			// グループありのアイテム
			for (const [groupName, groupItems] of groups) {
				if (groupName === "") continue;
				nodes.push(
					<div key={`grp-${groupName}`} class={styles.itemGroupLabel}>{groupName}</div>
				);
				for (const { item, idx } of groupItems) {
					nodes.push(renderItem(item, idx));
				}
			}
		} else {
			filtered.forEach((item, i) => nodes.push(renderItem(item, i)));
		}

		// Creatable オプション（候補にない新規値の追加）
		if (creatableActive) {
			const ci = filtered.length;
			nodes.push(
				<div
					key="__creatable__"
					class={classNames(styles.item, styles.creatableItem, {
						[styles.itemHighlighted]: this.highlightIndex === ci,
					})}
					onmouseenter={() => { this.highlightIndex = ci; }}
					onclick={() => {
						onCreateItem?.(this.query);
						this.isOpen = false;
						this.query = "";
					}}
				>
					<span class={styles.creatableIcon}>＋</span>
					「{this.query}」を追加
				</div>
			);
		}

		return nodes as m.Children;
	}

	private handleKeydown(
		e: KeyboardEvent,
		filtered: ComboboxItem[],
		selectedValues: string[],
		multiple?: boolean,
		onValueChange?: (v: string | string[]) => void,
		creatableActive?: boolean,
		onCreateItem?: (v: string) => void,
	) {
		const maxIndex = creatableActive ? filtered.length : filtered.length - 1;
		if (e.key === "ArrowDown") {
			e.preventDefault();
			this.highlightIndex = Math.min(this.highlightIndex + 1, maxIndex);
		} else if (e.key === "ArrowUp") {
			e.preventDefault();
			this.highlightIndex = Math.max(this.highlightIndex - 1, 0);
		} else if (e.key === "Enter") {
			e.preventDefault();
			if (creatableActive && this.highlightIndex === filtered.length) {
				onCreateItem?.(this.query);
				this.isOpen = false;
				this.query = "";
				return;
			}
			const item = filtered[this.highlightIndex];
			if (item && !item.disabled) {
				if (multiple) {
					const newVal = selectedValues.includes(item.value)
						? selectedValues.filter(v => v !== item.value)
						: [...selectedValues, item.value];
					onValueChange?.(newVal);
				} else {
					onValueChange?.(item.value);
					this.isOpen = false;
					this.query = "";
				}
			}
		} else if (e.key === "Escape") {
			this.isOpen = false;
		}
	}
}

/**
 * Combobox コンポーネント名前空間
 */
export const Combobox = {
	Root: ComboboxRoot,
} as const;

export { ComboboxRoot };
