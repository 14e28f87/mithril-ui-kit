/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Combobox.module.scss";

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

	onremove() {
		document.removeEventListener("mousedown", this.handleOutsideClick);
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
							this.isOpen = true;
							this.highlightIndex = 0;
						}}
						onfocus={() => {
							if (openOnClick) this.isOpen = true;
						}}
						onkeydown={(e: KeyboardEvent) => this.handleKeydown(e, filtered, selectedValues, multiple, onValueChange)}
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
					<div class={styles.content}>
						{filtered.length === 0
							? <div class={styles.empty}>結果なし</div>
							: filtered.map((item, i) => (
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
							))
						}
					</div>
				)}
			</div>
		);
	}

	private handleKeydown(
		e: KeyboardEvent, filtered: ComboboxItem[],
		selectedValues: string[], multiple?: boolean,
		onValueChange?: (v: string | string[]) => void
	) {
		if (e.key === "ArrowDown") {
			e.preventDefault();
			this.highlightIndex = Math.min(this.highlightIndex + 1, filtered.length - 1);
		} else if (e.key === "ArrowUp") {
			e.preventDefault();
			this.highlightIndex = Math.max(this.highlightIndex - 1, 0);
		} else if (e.key === "Enter") {
			e.preventDefault();
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
