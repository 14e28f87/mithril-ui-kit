/** @jsx m */
/**
 * @fileoverview
 * TagsInput — Chakra UI Tags Input 風の compound component
 *
 * タグの追加・削除・編集・バリデーションをサポートする複合コンポーネント。
 *
 * @example
 * ```tsx
 * <TagsInput.Root defaultValue={["React", "Mithril"]} max={5}>
 *   <TagsInput.Label>タグ</TagsInput.Label>
 *   <TagsInput.Control>
 *     {tags.map((tag, i) => (
 *       <TagsInput.Item key={tag} index={i} value={tag}>
 *         <TagsInput.ItemPreview>
 *           <TagsInput.ItemText />
 *           <TagsInput.ItemDeleteTrigger />
 *         </TagsInput.ItemPreview>
 *         <TagsInput.ItemInput />
 *       </TagsInput.Item>
 *     ))}
 *     <TagsInput.Input placeholder="タグを追加" />
 *   </TagsInput.Control>
 * </TagsInput.Root>
 * ```
 *
 * @module TagsInput
 */
/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./TagsInput.module.scss";

// ===========================
// 型定義
// ===========================

/** タグ入力のサイズ */
export type TagsInputSize = "sm" | "md" | "lg";

/** タグ入力のバリアント */
export type TagsInputVariant = "outline" | "subtle";

/** 値変更イベントの詳細 */
export type TagsInputValueChangeDetails = {
	value: string[];
};

/** 入力値変更イベントの詳細 */
export type TagsInputInputValueChangeDetails = {
	inputValue: string;
};

/** ハイライト変更イベントの詳細 */
export type TagsInputHighlightChangeDetails = {
	highlightedValue: string | null;
};

/**
 * TagsInput.Root に渡せる属性
 */
export type TagsInputRootAttrs = {
	/** 制御モード: 現在のタグ値 */
	value?: string[];
	/** 非制御モード: 初期タグ値 */
	defaultValue?: string[];
	/** タグ値変更コールバック */
	onValueChange?: (details: TagsInputValueChangeDetails) => void;
	/** 入力値変更コールバック */
	onInputValueChange?: (details: TagsInputInputValueChangeDetails) => void;
	/** 最大タグ数（デフォルト: Infinity） */
	max?: number;
	/** 無効化 */
	disabled?: boolean;
	/** 読み取り専用 */
	readOnly?: boolean;
	/** 無効状態（バリデーションエラー） */
	invalid?: boolean;
	/** タグ追加のバリデーション関数 */
	validate?: (details: { value: string; inputValue: string }) => boolean;
	/** 区切り文字（デフォルト: ","） */
	delimiter?: string | RegExp;
	/** ペースト時にタグを追加するか（デフォルト: false） */
	addOnPaste?: boolean;
	/** blur 時の動作 */
	blurBehavior?: "clear" | "add";
	/** タグの編集を許可するか（デフォルト: false） */
	editable?: boolean;
	/** サイズ（デフォルト: "md"） */
	size?: TagsInputSize;
	/** バリアント（デフォルト: "outline"） */
	variant?: TagsInputVariant;
	/** name 属性（フォーム送信用） */
	name?: string;
	class?: string;
	style?: Record<string, string>;
};

/** TagsInput.Label に渡せる属性 */
export type TagsInputLabelAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** TagsInput.Control に渡せる属性 */
export type TagsInputControlAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** TagsInput.Item に渡せる属性 */
export type TagsInputItemAttrs = {
	/** タグのインデックス */
	index: number;
	/** タグの値 */
	value: string;
	/** 無効化 */
	disabled?: boolean;
	class?: string;
	style?: Record<string, string>;
};

/** TagsInput.ItemPreview に渡せる属性 */
export type TagsInputItemPreviewAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** TagsInput.ItemText に渡せる属性 */
export type TagsInputItemTextAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** TagsInput.ItemDeleteTrigger に渡せる属性 */
export type TagsInputItemDeleteTriggerAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** TagsInput.ItemInput に渡せる属性 */
export type TagsInputItemInputAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** TagsInput.Input に渡せる属性 */
export type TagsInputInputAttrs = {
	placeholder?: string;
	class?: string;
	style?: Record<string, string>;
};

/** TagsInput.ClearTrigger に渡せる属性 */
export type TagsInputClearTriggerAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** TagsInput.HiddenInput に渡せる属性 */
export type TagsInputHiddenInputAttrs = {
	class?: string;
};

// ===========================
// コンテキスト
// ===========================

interface TagsInputContext {
	getValue: () => string[];
	getInputValue: () => string;
	setInputValue: (v: string) => void;
	addTag: (tag: string) => boolean;
	removeTag: (index: number) => void;
	clearAll: () => void;
	disabled: boolean;
	readOnly: boolean;
	invalid: boolean;
	editable: boolean;
	size: TagsInputSize;
	variant: TagsInputVariant;
	highlightedIndex: number | null;
	setHighlightedIndex: (i: number | null) => void;
	editingIndex: number | null;
	setEditingIndex: (i: number | null) => void;
	editingValue: string;
	setEditingValue: (v: string) => void;
	commitEdit: () => void;
	cancelEdit: () => void;
	focusInput: () => void;
	inputRef: HTMLInputElement | null;
	setInputRef: (el: HTMLInputElement | null) => void;
	blurBehavior?: "clear" | "add";
	addOnPaste: boolean;
	delimiter: string | RegExp;
}

let _tagsInputCtx: TagsInputContext | null = null;

// ===========================
// Item コンテキスト
// ===========================

interface TagsInputItemContext {
	index: number;
	value: string;
	disabled: boolean;
}

let _tagsInputItemCtx: TagsInputItemContext | null = null;

// ===========================
// ロール
// ===========================

type TagsInputRole =
	| "label"
	| "control"
	| "item"
	| "item-preview"
	| "item-text"
	| "item-delete-trigger"
	| "item-input"
	| "input"
	| "clear-trigger"
	| "hidden-input";

// ===========================
// ユーティリティ
// ===========================

function capitalize(s: string): string {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

function injectItemContext(children: m.Children, itemCtx: TagsInputItemContext): void {
	if (children == null || typeof children === "boolean") return;
	if (Array.isArray(children)) {
		for (const child of children) {
			injectItemContext(child as m.Children, itemCtx);
		}
		return;
	}
	if (typeof children !== "object") return;

	const vnode = children as any;
	vnode.attrs = {
		...(vnode.attrs ?? {}),
		__tagsInputItemCtx: itemCtx,
	};
	if (vnode.children) {
		injectItemContext(vnode.children as m.Children, itemCtx);
	}
}

function resolveItemContext(vnode: m.Vnode<any>): TagsInputItemContext | null {
	return ((vnode.attrs as any).__tagsInputItemCtx as TagsInputItemContext | undefined) ?? _tagsInputItemCtx;
}

// ===========================
// マーカーコンポーネント
// ===========================

/** TagsInput.Label — ラベル */
export class TagsInputLabelMarker implements m.Component<TagsInputLabelAttrs> {
	static __tagsInputRole: TagsInputRole = "label";
	view(vnode: m.Vnode<TagsInputLabelAttrs>) {
		const ctx = _tagsInputCtx;
		return (
			<label
				class={classNames(styles.label, vnode.attrs.class)}
				style={vnode.attrs.style}
				data-scope="tags-input"
				data-part="label"
				data-disabled={ctx?.disabled ? "" : undefined}
			>
				{vnode.children}
			</label>
		);
	}
}

/** TagsInput.Control — タグとインプットのコンテナ */
export class TagsInputControlMarker implements m.Component<TagsInputControlAttrs> {
	static __tagsInputRole: TagsInputRole = "control";
	view(vnode: m.Vnode<TagsInputControlAttrs>) {
		const ctx = _tagsInputCtx;
		return (
			<div
				class={classNames(
					styles.control,
					ctx ? (styles as any)[`size${capitalize(ctx.size)}`] : null,
					ctx ? (styles as any)[`variant${capitalize(ctx.variant)}`] : null,
					{ [styles.disabled]: ctx?.disabled, [styles.invalid]: ctx?.invalid, [styles.readOnly]: ctx?.readOnly },
					vnode.attrs.class,
				)}
				style={vnode.attrs.style}
				data-scope="tags-input"
				data-part="control"
				data-disabled={ctx?.disabled ? "" : undefined}
				data-invalid={ctx?.invalid ? "" : undefined}
				data-readonly={ctx?.readOnly ? "" : undefined}
				onclick={() => ctx?.focusInput()}
			>
				{vnode.children}
			</div>
		);
	}
}

/** TagsInput.Item — 個別タグのラッパー */
export class TagsInputItemMarker implements m.Component<TagsInputItemAttrs> {
	static __tagsInputRole: TagsInputRole = "item";
	view(vnode: m.Vnode<TagsInputItemAttrs>) {
		const ctx = _tagsInputCtx;
		const isHighlighted = ctx?.highlightedIndex === vnode.attrs.index;
		const isEditing = ctx?.editingIndex === vnode.attrs.index;

		const itemCtx: TagsInputItemContext = {
			index: vnode.attrs.index,
			value: vnode.attrs.value,
			disabled: vnode.attrs.disabled ?? false,
		};

		// 子コンポーネントから現在の item 値と index を参照できるように注入する
		injectItemContext(vnode.children as m.Children, itemCtx);
		_tagsInputItemCtx = itemCtx;

		const result = (
			<span
				class={classNames(
					styles.item,
					{ [styles.itemHighlighted]: isHighlighted, [styles.itemEditing]: isEditing },
					vnode.attrs.class,
				)}
				style={vnode.attrs.style}
				data-scope="tags-input"
				data-part="item"
				data-value={vnode.attrs.value}
				data-disabled={vnode.attrs.disabled ? "" : undefined}
				onclick={() => {
					if (ctx && !ctx.disabled && !ctx.readOnly) {
						ctx.setHighlightedIndex(vnode.attrs.index);
					}
				}}
				ondblclick={() => {
					if (ctx && ctx.editable && !ctx.disabled && !ctx.readOnly) {
						ctx.setEditingIndex(vnode.attrs.index);
						ctx.setEditingValue(vnode.attrs.value);
					}
				}}
			>
				{vnode.children}
			</span>
		);

		return result;
	}
}

/** TagsInput.ItemPreview — タグのプレビュー表示部分 */
export class TagsInputItemPreviewMarker implements m.Component<TagsInputItemPreviewAttrs> {
	static __tagsInputRole: TagsInputRole = "item-preview";
	view(vnode: m.Vnode<TagsInputItemPreviewAttrs>) {
		const ctx = _tagsInputCtx;
		const itemCtx = resolveItemContext(vnode);
		const isEditing = ctx?.editingIndex === itemCtx?.index;

		return (
			<span
				class={classNames(styles.itemPreview, vnode.attrs.class)}
				style={{
					...vnode.attrs.style,
					...(isEditing ? { display: "none" } : {}),
				}}
				data-scope="tags-input"
				data-part="item-preview"
			>
				{vnode.children}
			</span>
		);
	}
}

/** TagsInput.ItemText — タグのテキスト */
export class TagsInputItemTextMarker implements m.Component<TagsInputItemTextAttrs> {
	static __tagsInputRole: TagsInputRole = "item-text";
	view(vnode: m.Vnode<TagsInputItemTextAttrs>) {
		const itemCtx = resolveItemContext(vnode);
		return (
			<span
				class={classNames(styles.itemText, vnode.attrs.class)}
				style={vnode.attrs.style}
				data-scope="tags-input"
				data-part="item-text"
			>
				{vnode.children && (vnode.children as any[]).length > 0 ? vnode.children : itemCtx?.value}
			</span>
		);
	}
}

/** TagsInput.ItemDeleteTrigger — タグ削除ボタン */
export class TagsInputItemDeleteTriggerMarker implements m.Component<TagsInputItemDeleteTriggerAttrs> {
	static __tagsInputRole: TagsInputRole = "item-delete-trigger";
	view(vnode: m.Vnode<TagsInputItemDeleteTriggerAttrs>) {
		const ctx = _tagsInputCtx;
		const itemCtx = resolveItemContext(vnode);
		if (ctx?.disabled || ctx?.readOnly) return null;

		return (
			<button
				type="button"
				class={classNames(styles.itemDeleteTrigger, vnode.attrs.class)}
				style={vnode.attrs.style}
				data-scope="tags-input"
				data-part="item-delete-trigger"
				aria-label="削除"
				tabindex={-1}
				onclick={(e: MouseEvent) => {
					e.stopPropagation();
					if (itemCtx && ctx) {
						ctx.removeTag(itemCtx.index);
					}
				}}
			>
				{vnode.children && (vnode.children as any[]).length > 0 ? vnode.children : "×"}
			</button>
		);
	}
}

/** TagsInput.ItemInput — タグ編集用インプット */
export class TagsInputItemInputMarker implements m.Component<TagsInputItemInputAttrs> {
	static __tagsInputRole: TagsInputRole = "item-input";
	view(vnode: m.Vnode<TagsInputItemInputAttrs>) {
		const ctx = _tagsInputCtx;
		const itemCtx = resolveItemContext(vnode);
		const isEditing = ctx?.editingIndex === itemCtx?.index;

		if (!isEditing) return null;

		return (
			<input
				type="text"
				class={classNames(styles.itemInput, vnode.attrs.class)}
				style={vnode.attrs.style}
				data-scope="tags-input"
				data-part="item-input"
				value={ctx?.editingValue ?? ""}
				oninput={(e: Event) => {
					ctx?.setEditingValue((e.target as HTMLInputElement).value);
				}}
				onkeydown={(e: KeyboardEvent) => {
					if (e.key === "Enter") {
						e.preventDefault();
						ctx?.commitEdit();
					} else if (e.key === "Escape") {
						e.preventDefault();
						ctx?.cancelEdit();
					}
				}}
				onblur={() => ctx?.commitEdit()}
				oncreate={(v) => {
					(v.dom as HTMLInputElement).focus();
					(v.dom as HTMLInputElement).select();
				}}
			/>
		);
	}
}

/** TagsInput.Input — メイン入力フィールド */
export class TagsInputInputMarker implements m.Component<TagsInputInputAttrs> {
	static __tagsInputRole: TagsInputRole = "input";
	view(vnode: m.Vnode<TagsInputInputAttrs>) {
		const ctx = _tagsInputCtx;

		return (
			<input
				type="text"
				class={classNames(styles.input, vnode.attrs.class)}
				style={vnode.attrs.style}
				data-scope="tags-input"
				data-part="input"
				placeholder={vnode.attrs.placeholder}
				value={ctx?.getInputValue() ?? ""}
				disabled={ctx?.disabled}
				readOnly={ctx?.readOnly}
				oninput={(e: Event) => {
					ctx?.setInputValue((e.target as HTMLInputElement).value);
				}}
				onkeydown={(e: KeyboardEvent) => {
					if (!ctx) return;
					if (e.key === "Enter") {
						e.preventDefault();
						const val = ctx.getInputValue().trim();
						if (val) {
							ctx.addTag(val);
							ctx.setInputValue("");
						}
					} else if (e.key === "Backspace" && ctx.getInputValue() === "") {
						const tags = ctx.getValue();
						if (tags.length > 0) {
							if (ctx.highlightedIndex !== null) {
								ctx.removeTag(ctx.highlightedIndex);
								ctx.setHighlightedIndex(null);
							} else {
								ctx.setHighlightedIndex(tags.length - 1);
							}
						}
					} else if (e.key === "ArrowLeft") {
						const tags = ctx.getValue();
						if (ctx.getInputValue() === "" && tags.length > 0) {
							if (ctx.highlightedIndex === null) {
								ctx.setHighlightedIndex(tags.length - 1);
							} else if (ctx.highlightedIndex > 0) {
								ctx.setHighlightedIndex(ctx.highlightedIndex - 1);
							}
							e.preventDefault();
						}
					} else if (e.key === "ArrowRight") {
						if (ctx.highlightedIndex !== null) {
							const tags = ctx.getValue();
							if (ctx.highlightedIndex < tags.length - 1) {
								ctx.setHighlightedIndex(ctx.highlightedIndex + 1);
							} else {
								ctx.setHighlightedIndex(null);
							}
							e.preventDefault();
						}
					} else if (e.key === "Delete" && ctx.highlightedIndex !== null) {
						ctx.removeTag(ctx.highlightedIndex);
						ctx.setHighlightedIndex(null);
					} else if (e.key === "Enter" && ctx.highlightedIndex !== null && ctx.editable) {
						ctx.setEditingIndex(ctx.highlightedIndex);
						ctx.setEditingValue(ctx.getValue()[ctx.highlightedIndex]);
						e.preventDefault();
					} else {
						if (ctx.highlightedIndex !== null) {
							ctx.setHighlightedIndex(null);
						}
					}
				}}
				onblur={() => {
					if (!ctx) return;
					ctx.setHighlightedIndex(null);
					const val = ctx.getInputValue().trim();
					if (ctx.blurBehavior === "add" && val) {
						ctx.addTag(val);
						ctx.setInputValue("");
					} else if (ctx.blurBehavior === "clear") {
						ctx.setInputValue("");
					}
				}}
				onpaste={(e: ClipboardEvent) => {
					if (!ctx || !ctx.addOnPaste) return;
					e.preventDefault();
					const text = e.clipboardData?.getData("text") ?? "";
					const delimiter = ctx.delimiter;
					let parts: string[];
					if (typeof delimiter === "string") {
						parts = text.split(delimiter);
					} else {
						parts = text.split(delimiter);
					}
					for (const part of parts) {
						const trimmed = part.trim();
						if (trimmed) ctx.addTag(trimmed);
					}
					ctx.setInputValue("");
				}}
				oncreate={(v) => {
					ctx?.setInputRef(v.dom as HTMLInputElement);
				}}
				onremove={() => {
					ctx?.setInputRef(null);
				}}
			/>
		);
	}
}

/** TagsInput.ClearTrigger — 全タグクリアボタン */
export class TagsInputClearTriggerMarker implements m.Component<TagsInputClearTriggerAttrs> {
	static __tagsInputRole: TagsInputRole = "clear-trigger";
	view(vnode: m.Vnode<TagsInputClearTriggerAttrs>) {
		const ctx = _tagsInputCtx;
		if (ctx?.disabled || ctx?.readOnly) return null;
		const tags = ctx?.getValue() ?? [];
		if (tags.length === 0) return null;

		return (
			<button
				type="button"
				class={classNames(styles.clearTrigger, vnode.attrs.class)}
				style={vnode.attrs.style}
				data-scope="tags-input"
				data-part="clear-trigger"
				aria-label="すべてクリア"
				onclick={(e: MouseEvent) => {
					e.stopPropagation();
					ctx?.clearAll();
				}}
			>
				{vnode.children && (vnode.children as any[]).length > 0 ? vnode.children : "×"}
			</button>
		);
	}
}

/** TagsInput.HiddenInput — フォーム送信用の隠しインプット */
export class TagsInputHiddenInputMarker implements m.Component<TagsInputHiddenInputAttrs> {
	static __tagsInputRole: TagsInputRole = "hidden-input";
	view() {
		return null;
	}
}

// ===========================
// Root コンポーネント
// ===========================

/**
 * TagsInput.Root — タグ入力のルートコンポーネント
 *
 * @description
 * Chakra UI Tags Input 風の compound component。
 * 制御モード（value）と非制御モード（defaultValue）の両方をサポート。
 */
export class TagsInputRoot implements m.Component<TagsInputRootAttrs> {
	private internalValue: string[] = [];
	private inputValue = "";
	private highlightedIndex: number | null = null;
	private editingIndex: number | null = null;
	private editingValue = "";
	private inputRef: HTMLInputElement | null = null;

	oninit(vnode: m.Vnode<TagsInputRootAttrs>) {
		this.internalValue = vnode.attrs.defaultValue ? [...vnode.attrs.defaultValue] : [];
	}

	private isControlled(attrs: TagsInputRootAttrs): boolean {
		return attrs.value !== undefined;
	}

	private getValue(attrs: TagsInputRootAttrs): string[] {
		return this.isControlled(attrs) ? attrs.value! : this.internalValue;
	}

	private setValue(attrs: TagsInputRootAttrs, newValue: string[]) {
		if (!this.isControlled(attrs)) {
			this.internalValue = newValue;
		}
		attrs.onValueChange?.({ value: newValue });
	}

	private addTag(attrs: TagsInputRootAttrs, tag: string): boolean {
		if (attrs.disabled || attrs.readOnly) return false;
		const current = this.getValue(attrs);
		const max = attrs.max ?? Infinity;
		if (current.length >= max) return false;

		if (attrs.validate) {
			if (!attrs.validate({ value: tag, inputValue: this.inputValue })) return false;
		}

		// 重複チェック
		if (current.includes(tag)) return false;

		this.setValue(attrs, [...current, tag]);
		return true;
	}

	private removeTag(attrs: TagsInputRootAttrs, index: number) {
		if (attrs.disabled || attrs.readOnly) return;
		const current = this.getValue(attrs);
		if (index < 0 || index >= current.length) return;
		const next = current.filter((_, i) => i !== index);
		this.setValue(attrs, next);

		if (this.highlightedIndex !== null) {
			if (this.highlightedIndex >= next.length) {
				this.highlightedIndex = next.length > 0 ? next.length - 1 : null;
			}
		}
	}

	private handleDelimiter(attrs: TagsInputRootAttrs, text: string) {
		const delimiter = attrs.delimiter ?? ",";
		if (typeof delimiter === "string") {
			if (text.includes(delimiter)) {
				const parts = text.split(delimiter);
				for (const part of parts) {
					const trimmed = part.trim();
					if (trimmed) this.addTag(attrs, trimmed);
				}
				this.inputValue = "";
				attrs.onInputValueChange?.({ inputValue: "" });
			}
		} else {
			const parts = text.split(delimiter);
			if (parts.length > 1) {
				for (const part of parts) {
					const trimmed = part.trim();
					if (trimmed) this.addTag(attrs, trimmed);
				}
				this.inputValue = "";
				attrs.onInputValueChange?.({ inputValue: "" });
			}
		}
	}

	private commitEdit(attrs: TagsInputRootAttrs) {
		if (this.editingIndex === null) return;
		const current = this.getValue(attrs);
		const trimmed = this.editingValue.trim();
		if (trimmed && trimmed !== current[this.editingIndex]) {
			if (attrs.validate && !attrs.validate({ value: trimmed, inputValue: this.inputValue })) {
				this.editingIndex = null;
				return;
			}
			if (!current.includes(trimmed) || current[this.editingIndex] === trimmed) {
				const next = [...current];
				next[this.editingIndex] = trimmed;
				this.setValue(attrs, next);
			}
		}
		this.editingIndex = null;
	}

	view(vnode: m.Vnode<TagsInputRootAttrs>) {
		const attrs = vnode.attrs;
		const currentValue = this.getValue(attrs);
		const size = attrs.size ?? "md";
		const variant = attrs.variant ?? "outline";

		_tagsInputCtx = {
			getValue: () => this.getValue(attrs),
			getInputValue: () => this.inputValue,
			setInputValue: (v: string) => {
				this.inputValue = v;
				attrs.onInputValueChange?.({ inputValue: v });
				this.handleDelimiter(attrs, v);
			},
			addTag: (tag: string) => {
				const result = this.addTag(attrs, tag);
				m.redraw();
				return result;
			},
			removeTag: (index: number) => {
				this.removeTag(attrs, index);
				m.redraw();
			},
			clearAll: () => {
				this.setValue(attrs, []);
				this.inputValue = "";
				attrs.onInputValueChange?.({ inputValue: "" });
				m.redraw();
			},
			disabled: attrs.disabled ?? false,
			readOnly: attrs.readOnly ?? false,
			invalid: attrs.invalid ?? false,
			editable: attrs.editable ?? false,
			size,
			variant,
			highlightedIndex: this.highlightedIndex,
			setHighlightedIndex: (i: number | null) => {
				this.highlightedIndex = i;
			},
			editingIndex: this.editingIndex,
			setEditingIndex: (i: number | null) => {
				this.editingIndex = i;
			},
			editingValue: this.editingValue,
			setEditingValue: (v: string) => {
				this.editingValue = v;
			},
			commitEdit: () => {
				this.commitEdit(attrs);
				m.redraw();
			},
			cancelEdit: () => {
				this.editingIndex = null;
				m.redraw();
			},
			focusInput: () => {
				this.inputRef?.focus();
			},
			inputRef: this.inputRef,
			setInputRef: (el: HTMLInputElement | null) => {
				this.inputRef = el;
			},
			blurBehavior: attrs.blurBehavior,
			addOnPaste: attrs.addOnPaste ?? false,
			delimiter: attrs.delimiter ?? ",",
		};

		const result = (
			<div
				class={classNames(styles.root, attrs.class)}
				style={attrs.style}
				data-scope="tags-input"
				data-part="root"
				data-disabled={attrs.disabled ? "" : undefined}
				data-invalid={attrs.invalid ? "" : undefined}
				data-readonly={attrs.readOnly ? "" : undefined}
			>
				{vnode.children}
				{attrs.name
					? currentValue.map((tag, i) => (
							<input type="hidden" name={attrs.name} value={tag} key={`hidden-${i}`} />
					  ))
					: null}
			</div>
		);

		return result;
	}
}

// ===========================
// バンドルエクスポート
// ===========================

/**
 * TagsInput — Chakra UI Tags Input 風の compound コンポーネント
 */
export const TagsInput = {
	Root: TagsInputRoot,
	Label: TagsInputLabelMarker,
	Control: TagsInputControlMarker,
	Item: TagsInputItemMarker,
	ItemPreview: TagsInputItemPreviewMarker,
	ItemText: TagsInputItemTextMarker,
	ItemDeleteTrigger: TagsInputItemDeleteTriggerMarker,
	ItemInput: TagsInputItemInputMarker,
	Input: TagsInputInputMarker,
	ClearTrigger: TagsInputClearTriggerMarker,
	HiddenInput: TagsInputHiddenInputMarker,
} as const;

