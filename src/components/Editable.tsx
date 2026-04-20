/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Editable.module.scss";

// ===========================
// 型定義
// ===========================

/** アクティベーションモード */
export type EditableActivationMode = "focus" | "dblclick" | "click" | "none";

/** サブミットモード */
export type EditableSubmitMode = "enter" | "blur" | "none" | "both";

/** サイズ */
export type EditableSize = "sm" | "md" | "lg";

/** 値変更時の詳細 */
export type EditableValueChangeDetails = { value: string };

/** 編集状態変更時の詳細 */
export type EditableEditChangeDetails = { editing: boolean };

/**
 * Editable.Root に渡せる属性
 */
export type EditableRootAttrs = {
	/** 制御モードの値 */
	value?: string;
	/** 初期値（非制御モード） */
	defaultValue?: string;
	/** プレースホルダー */
	placeholder?: string | { edit: string; preview: string };
	/** アクティベーションモード（デフォルト: "focus"） */
	activationMode?: EditableActivationMode;
	/** サブミットモード（デフォルト: "both"） */
	submitMode?: EditableSubmitMode;
	/** 値変更時のコールバック */
	onValueChange?: (details: EditableValueChangeDetails) => void;
	/** 値コミット時のコールバック */
	onValueCommit?: (details: EditableValueChangeDetails) => void;
	/** 値リバート時のコールバック */
	onValueRevert?: (details: EditableValueChangeDetails) => void;
	/** 編集状態変更時のコールバック */
	onEditChange?: (details: EditableEditChangeDetails) => void;
	/** 無効化 */
	disabled?: boolean;
	/** 読み取り専用 */
	readOnly?: boolean;
	/** バリデーションエラー */
	invalid?: boolean;
	/** フォーカス時にテキスト全選択するか（デフォルト: true） */
	selectOnFocus?: boolean;
	/** サイズ（デフォルト: "md"） */
	size?: EditableSize;
	/** 最大文字数 */
	maxLength?: number;
	/** フォーム送信用 name */
	name?: string;
	/** 制御モードの編集状態 */
	edit?: boolean;
	/** 初期編集状態 */
	defaultEdit?: boolean;
	/** 自動リサイズ */
	autoResize?: boolean;
	/** 追加クラス */
	class?: string;
	/** スタイル */
	style?: Record<string, string>;
};

/** Editable.Preview に渡せる属性 */
export type EditablePreviewAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Editable.Input に渡せる属性 */
export type EditableInputAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Editable.Textarea に渡せる属性 */
export type EditableTextareaAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Editable.Label に渡せる属性 */
export type EditableLabelAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Editable.Area に渡せる属性 */
export type EditableAreaAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Editable.Control に渡せる属性 */
export type EditableControlAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Editable.EditTrigger に渡せる属性 */
export type EditableEditTriggerAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Editable.SubmitTrigger に渡せる属性 */
export type EditableSubmitTriggerAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Editable.CancelTrigger に渡せる属性 */
export type EditableCancelTriggerAttrs = {
	class?: string;
	style?: Record<string, string>;
};

// ===========================
// 内部ロール定義
// ===========================

type EditableRole =
	| "preview"
	| "input"
	| "textarea"
	| "label"
	| "area"
	| "control"
	| "editTrigger"
	| "submitTrigger"
	| "cancelTrigger";

// ===========================
// マーカーコンポーネント
// ===========================

/** Editable.Preview — 表示モードのマーカー */
export class EditablePreviewMarker implements m.Component<EditablePreviewAttrs> {
	static __editableRole: EditableRole = "preview";
	view(vnode: m.Vnode<EditablePreviewAttrs>) {
		return <div>{vnode.children}</div>;
	}
}

/** Editable.Input — 入力モード（input）のマーカー */
export class EditableInputMarker implements m.Component<EditableInputAttrs> {
	static __editableRole: EditableRole = "input";
	view(vnode: m.Vnode<EditableInputAttrs>) {
		return <div>{vnode.children}</div>;
	}
}

/** Editable.Textarea — 入力モード（textarea）のマーカー */
export class EditableTextareaMarker implements m.Component<EditableTextareaAttrs> {
	static __editableRole: EditableRole = "textarea";
	view(vnode: m.Vnode<EditableTextareaAttrs>) {
		return <div>{vnode.children}</div>;
	}
}

/** Editable.Label — ラベルのマーカー */
export class EditableLabelMarker implements m.Component<EditableLabelAttrs> {
	static __editableRole: EditableRole = "label";
	view(vnode: m.Vnode<EditableLabelAttrs>) {
		return <div>{vnode.children}</div>;
	}
}

/** Editable.Area — エリアのマーカー */
export class EditableAreaMarker implements m.Component<EditableAreaAttrs> {
	static __editableRole: EditableRole = "area";
	view(vnode: m.Vnode<EditableAreaAttrs>) {
		return <div>{vnode.children}</div>;
	}
}

/** Editable.Control — コントロールボタン群のマーカー */
export class EditableControlMarker implements m.Component<EditableControlAttrs> {
	static __editableRole: EditableRole = "control";
	view(vnode: m.Vnode<EditableControlAttrs>) {
		return <div>{vnode.children}</div>;
	}
}

/** Editable.EditTrigger — 編集開始トリガーのマーカー */
export class EditableEditTriggerMarker implements m.Component<EditableEditTriggerAttrs> {
	static __editableRole: EditableRole = "editTrigger";
	view(vnode: m.Vnode<EditableEditTriggerAttrs>) {
		return <div>{vnode.children}</div>;
	}
}

/** Editable.SubmitTrigger — 送信トリガーのマーカー */
export class EditableSubmitTriggerMarker implements m.Component<EditableSubmitTriggerAttrs> {
	static __editableRole: EditableRole = "submitTrigger";
	view(vnode: m.Vnode<EditableSubmitTriggerAttrs>) {
		return <div>{vnode.children}</div>;
	}
}

/** Editable.CancelTrigger — キャンセルトリガーのマーカー */
export class EditableCancelTriggerMarker implements m.Component<EditableCancelTriggerAttrs> {
	static __editableRole: EditableRole = "cancelTrigger";
	view(vnode: m.Vnode<EditableCancelTriggerAttrs>) {
		return <div>{vnode.children}</div>;
	}
}

// ===========================
// ユーティリティ
// ===========================

function capitalize(s: string): string {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

/** VDOM の子要素からマーカーを検出する */
function findMarkers(children: m.Children): Map<EditableRole, m.Vnode<any>> {
	const map = new Map<EditableRole, m.Vnode<any>>();
	if (!children) return map;
	const arr = Array.isArray(children) ? children : [children];
	for (const child of arr) {
		if (child && typeof child === "object" && "tag" in child) {
			const tag = child.tag as any;
			if (tag && tag.__editableRole) {
				map.set(tag.__editableRole, child);
			}
		}
	}
	return map;
}

// ===========================
// メインコンポーネント
// ===========================

/**
 * @class EditableRoot
 * @description
 * Chakra UI 風のインライン編集 compound component。
 *
 * テキストをクリック/ダブルクリック/フォーカスで編集モードに切り替え、
 * Enter/Blur で値をコミットする。
 *
 * 主な機能:
 * - 制御モード（value + onValueChange）と非制御モード（defaultValue）
 * - activationMode: "focus" | "dblclick" | "click" | "none"
 * - submitMode: "enter" | "blur" | "none" | "both"
 * - Textarea サポート
 * - EditTrigger / SubmitTrigger / CancelTrigger によるコントロール
 *
 * @example
 * <Editable.Root defaultValue="Click to edit" activationMode="dblclick">
 *   <Editable.Preview />
 *   <Editable.Input />
 * </Editable.Root>
 */
export class EditableRoot implements m.Component<EditableRootAttrs> {
	private internalValue = "";
	private draftValue = "";
	private internalEditing = false;
	private committedValue = "";
	private inputEl: HTMLInputElement | HTMLTextAreaElement | null = null;

	oninit(vnode: m.Vnode<EditableRootAttrs>) {
		this.internalValue = vnode.attrs.defaultValue ?? "";
		this.committedValue = this.internalValue;
		this.internalEditing = vnode.attrs.defaultEdit ?? false;
		if (this.internalEditing) {
			this.draftValue = this.getValue(vnode.attrs);
		}
	}

	private isControlled(attrs: EditableRootAttrs): boolean {
		return attrs.value !== undefined;
	}

	private isEditControlled(attrs: EditableRootAttrs): boolean {
		return attrs.edit !== undefined;
	}

	private getValue(attrs: EditableRootAttrs): string {
		return this.isControlled(attrs) ? (attrs.value ?? "") : this.internalValue;
	}

	private getEditing(attrs: EditableRootAttrs): boolean {
		return this.isEditControlled(attrs) ? !!attrs.edit : this.internalEditing;
	}

	private getPlaceholder(attrs: EditableRootAttrs, mode: "edit" | "preview"): string {
		if (!attrs.placeholder) return "";
		if (typeof attrs.placeholder === "string") return attrs.placeholder;
		return attrs.placeholder[mode] ?? "";
	}

	/** 編集モードに切り替える */
	private startEdit(attrs: EditableRootAttrs) {
		if (attrs.disabled || attrs.readOnly) return;
		this.draftValue = this.getValue(attrs);
		if (!this.isEditControlled(attrs)) {
			this.internalEditing = true;
		}
		attrs.onEditChange?.({ editing: true });
		// 次フレームで input にフォーカス＆全選択
		requestAnimationFrame(() => {
			if (this.inputEl) {
				this.inputEl.focus();
				if (attrs.selectOnFocus !== false) {
					this.inputEl.select();
				}
			}
		});
	}

	/** 値をコミットして編集モード終了 */
	private submit(attrs: EditableRootAttrs) {
		const val = this.draftValue;
		if (!this.isControlled(attrs)) {
			this.internalValue = val;
		}
		this.committedValue = val;
		attrs.onValueChange?.({ value: val });
		attrs.onValueCommit?.({ value: val });
		if (!this.isEditControlled(attrs)) {
			this.internalEditing = false;
		}
		attrs.onEditChange?.({ editing: false });
	}

	/** 値をリバートして編集モード終了 */
	private cancel(attrs: EditableRootAttrs) {
		this.draftValue = this.committedValue;
		attrs.onValueRevert?.({ value: this.committedValue });
		if (!this.isEditControlled(attrs)) {
			this.internalEditing = false;
		}
		attrs.onEditChange?.({ editing: false });
	}

	view(vnode: m.Vnode<EditableRootAttrs>) {
		const attrs = vnode.attrs;
		const editing = this.getEditing(attrs);
		const value = this.getValue(attrs);
		const size = attrs.size ?? "md";
		const activationMode = attrs.activationMode ?? "focus";
		const submitMode = attrs.submitMode ?? "both";

		const markers = findMarkers(vnode.children);
		const previewVnode = markers.get("preview");
		const inputVnode = markers.get("input");
		const textareaVnode = markers.get("textarea");
		const labelVnode = markers.get("label");
		const controlVnode = markers.get("control");
		const editTriggerVnode = markers.get("editTrigger");
		const submitTriggerVnode = markers.get("submitTrigger");
		const cancelTriggerVnode = markers.get("cancelTrigger");

		// アクティベーションイベント
		const activationHandlers: Record<string, () => void> = {};
		if (activationMode === "click") {
			activationHandlers.onclick = () => this.startEdit(attrs);
		} else if (activationMode === "dblclick") {
			activationHandlers.ondblclick = () => this.startEdit(attrs);
		} else if (activationMode === "focus") {
			activationHandlers.onfocus = () => this.startEdit(attrs);
		}

		// キーハンドラ
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Enter" && !e.shiftKey) {
				if (submitMode === "enter" || submitMode === "both") {
					e.preventDefault();
					this.submit(attrs);
				}
			} else if (e.key === "Escape") {
				e.preventDefault();
				this.cancel(attrs);
			}
		};

		// Blur ハンドラ
		const handleBlur = () => {
			if (submitMode === "blur" || submitMode === "both") {
				this.submit(attrs);
			}
		};

		return (
			<div
				class={classNames(
					styles.root,
					(styles as any)[`size${capitalize(size)}`],
					{
						[styles.disabled]: attrs.disabled,
						[styles.invalid]: attrs.invalid,
					},
					attrs.class,
				)}
				style={attrs.style}
				data-scope="editable"
				data-part="root"
			>
				{/* ラベル */}
				{labelVnode && (
					<span
						class={classNames(styles.label, labelVnode.attrs.class)}
						style={labelVnode.attrs.style}
						data-part="label"
					>
						{labelVnode.children}
					</span>
				)}

				{/* エリア */}
				<div class={styles.area} data-part="area">
					{editing ? (
						// 編集モード
						textareaVnode ? (
							<textarea
								class={classNames(styles.textarea, textareaVnode.attrs.class)}
								style={textareaVnode.attrs.style}
								value={this.draftValue}
								placeholder={this.getPlaceholder(attrs, "edit")}
								disabled={attrs.disabled}
								readonly={attrs.readOnly}
								maxlength={attrs.maxLength}
								name={attrs.name}
								data-part="textarea"
								oninput={(e: Event) => {
									this.draftValue = (e.target as HTMLTextAreaElement).value;
									attrs.onValueChange?.({ value: this.draftValue });
								}}
								onkeydown={(e: KeyboardEvent) => {
									if (e.key === "Escape") {
										e.preventDefault();
										this.cancel(attrs);
									}
								}}
								onblur={handleBlur}
								oncreate={(v: m.VnodeDOM) => {
									this.inputEl = v.dom as HTMLTextAreaElement;
									this.inputEl.focus();
									if (attrs.selectOnFocus !== false) {
										this.inputEl.select();
									}
								}}
							/>
						) : (
							<input
								class={classNames(styles.input, inputVnode?.attrs.class)}
								style={inputVnode?.attrs.style}
								type="text"
								value={this.draftValue}
								placeholder={this.getPlaceholder(attrs, "edit")}
								disabled={attrs.disabled}
								readonly={attrs.readOnly}
								maxlength={attrs.maxLength}
								name={attrs.name}
								data-part="input"
								oninput={(e: Event) => {
									this.draftValue = (e.target as HTMLInputElement).value;
									attrs.onValueChange?.({ value: this.draftValue });
								}}
								onkeydown={handleKeyDown}
								onblur={handleBlur}
								oncreate={(v: m.VnodeDOM) => {
									this.inputEl = v.dom as HTMLInputElement;
									this.inputEl.focus();
									if (attrs.selectOnFocus !== false) {
										this.inputEl.select();
									}
								}}
							/>
						)
					) : (
						// 表示モード
						<span
							class={classNames(
								styles.preview,
								{ [styles.placeholder]: !value },
								previewVnode?.attrs.class,
							)}
							style={previewVnode?.attrs.style}
							tabindex={activationMode === "focus" ? 0 : undefined}
							data-part="preview"
							{...activationHandlers}
						>
							{value || this.getPlaceholder(attrs, "preview") || "\u00a0"}
						</span>
					)}
				</div>

				{/* コントロールボタン群 */}
				{(controlVnode || editTriggerVnode || submitTriggerVnode || cancelTriggerVnode) && (
					<div
						class={classNames(styles.control, controlVnode?.attrs.class)}
						style={controlVnode?.attrs.style}
						data-part="control"
					>
						{editing ? (
							// 編集中: Submit / Cancel
							<span data-part="control-buttons">
								{submitTriggerVnode && (
									<button
										type="button"
										class={classNames(styles.submitTrigger, submitTriggerVnode.attrs.class)}
										style={submitTriggerVnode.attrs.style}
										data-part="submit-trigger"
										onclick={() => this.submit(attrs)}
									>
										{submitTriggerVnode.children && (submitTriggerVnode.children as any[]).length > 0
											? submitTriggerVnode.children
											: "✓"}
									</button>
								)}
								{cancelTriggerVnode && (
									<button
										type="button"
										class={classNames(styles.cancelTrigger, cancelTriggerVnode.attrs.class)}
										style={cancelTriggerVnode.attrs.style}
										data-part="cancel-trigger"
										onclick={() => this.cancel(attrs)}
									>
										{cancelTriggerVnode.children && (cancelTriggerVnode.children as any[]).length > 0
											? cancelTriggerVnode.children
											: "✕"}
									</button>
								)}
							</span>
						) : (
							// 表示中: Edit trigger
							editTriggerVnode && (
								<button
									type="button"
									class={classNames(styles.editTrigger, editTriggerVnode.attrs.class)}
									style={editTriggerVnode.attrs.style}
									data-part="edit-trigger"
									onclick={() => this.startEdit(attrs)}
								>
									{editTriggerVnode.children && (editTriggerVnode.children as any[]).length > 0
										? editTriggerVnode.children
										: "✎"}
								</button>
							)
						)}
					</div>
				)}

				{/* 隠し input (フォーム送信用) */}
				{attrs.name && (
					<input type="hidden" name={attrs.name} value={value} />
				)}
			</div>
		);
	}
}

// ===========================
// バンドルエクスポート
// ===========================

/**
 * Editable compound component
 *
 * @example
 * ```tsx
 * <Editable.Root defaultValue="Click to edit">
 *   <Editable.Preview />
 *   <Editable.Input />
 * </Editable.Root>
 * ```
 */
export const Editable = {
	Root: EditableRoot,
	Preview: EditablePreviewMarker,
	Input: EditableInputMarker,
	Textarea: EditableTextareaMarker,
	Label: EditableLabelMarker,
	Area: EditableAreaMarker,
	Control: EditableControlMarker,
	EditTrigger: EditableEditTriggerMarker,
	SubmitTrigger: EditableSubmitTriggerMarker,
	CancelTrigger: EditableCancelTriggerMarker,
};
