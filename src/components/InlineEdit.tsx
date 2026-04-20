/** @jsx m */
import m from "mithril";
import classNames from "classnames";

/**
 * @typedef {Object} InlineEditControlRef
 * @property {() => void} [startEdit] - 外部から編集を開始する
 * @property {() => Promise<boolean>} [saveEdit] - 外部から編集内容を確定する
 * @property {() => void} [cancelEdit] - 外部から編集をキャンセルする
 * @property {() => boolean} [isEditing] - 現在の編集状態を取得する
 */
export type InlineEditControlRef = {
	startEdit?: () => void;
	saveEdit?: () => Promise<boolean>;
	cancelEdit?: () => void;
	isEditing?: () => boolean;
};

/**
 * @typedef {Object} InlineEditAttrs
 * @property {string|null} [value] - 表示中の値（外部制御）
 * @property {(v: string|null) => void|Promise<void>} [oninput] - 確定時に呼ばれるコールバック
 * @property {() => void} [onblur] - フォーカス喪失時に呼ばれるコールバック
 * @property {string} [placeholder] - 値が空のときに表示する文言
 * @property {string} [class] - 追加 CSS クラス
 * @property {boolean} [disabled] - 編集を無効化
 * @property {"doubleclick"|"click"} [editTrigger] - 編集開始トリガー
 * @property {boolean} [editing] - 編集状態の外部制御値
 * @property {(editing: boolean) => void} [onEditingChange] - 編集状態が変化したときの通知
 * @property {boolean} [saveOnBlur] - blur 時に保存するか
 * @property {string} [type] - 編集 input の type 属性
 * @property {number} [maxLength] - 編集 input の最大文字数
 * @property {string} [id] - 編集 input の ID
 * @property {() => void} [onEditStart] - 編集開始時に呼ばれるコールバック
 * @property {(value: string|null) => void} [onEditCancel] - 編集キャンセル時のコールバック
 * @property {(value: string|null) => void} [onEditEnd] - 編集確定時のコールバック
 * @property {InlineEditControlRef} [controlRef] - 外部ボタンから edit/save/cancel を呼ぶための参照
 */
export type InlineEditAttrs = {
	value?: string | null;
	oninput?: (v: string | null) => void | Promise<void>;
	onblur?: () => void;
	placeholder?: string;
	class?: string;
	disabled?: boolean;
	editTrigger?: "doubleclick" | "click";
	editing?: boolean;
	onEditingChange?: (editing: boolean) => void;
	saveOnBlur?: boolean;
	type?: string;
	maxLength?: number;
	id?: string;
	onEditStart?: () => void;
	onEditCancel?: (value: string | null) => void;
	onEditEnd?: (value: string | null) => void;
	controlRef?: InlineEditControlRef;
};

/**
 * @class InlineEdit
 * @description
 * テキスト表示部分をインラインで編集可能にするコンポーネント
 *
 * 挙動:
 * - 既定はダブルクリックで編集開始（`editTrigger` でクリック開始にも変更可）
 * - Enter で確定
 * - Escape でキャンセル
 * - blur 時は `saveOnBlur` に従って確定またはキャンセル
 *
 * Form / FormItem 連携:
 * - `value` / `oninput` 形式のため `FormItem` からの値注入と親和性があります
 */
export class InlineEdit implements m.Component<InlineEditAttrs> {
	/** 編集状態かどうか */
	private editing = false;
	/** 編集中の入力値 */
	private draftValue = "";
	/** 編集開始時点の値（キャンセル時に復元） */
	private originalValue = "";
	/** 編集 input 要素参照 */
	private inputElement: HTMLInputElement | null = null;
	/** 直近の attrs 参照 */
	private latestAttrs: InlineEditAttrs | null = null;

	/**
	 * @function oninit
	 * @description 初期値を内部状態へ同期
	 */
	public oninit(vnode: m.Vnode<InlineEditAttrs>) {
		this.latestAttrs = vnode.attrs;
		this.bindControlRef(vnode.attrs);
		this.draftValue = this.toText(vnode.attrs.value);
	}

	/**
	 * @function onbeforeupdate
	 * @description 非編集中のみ、外部 value 変更を内部値へ反映
	 */
	public onbeforeupdate(vnode: m.Vnode<InlineEditAttrs>, old: m.VnodeDOM<InlineEditAttrs>) {
		this.latestAttrs = vnode.attrs;
		this.bindControlRef(vnode.attrs);
		const wasEditing = this.isEditing(old.attrs);
		const nowEditing = this.isEditing(vnode.attrs);

		if (nowEditing && !wasEditing) {
			this.originalValue = this.toText(vnode.attrs.value);
			this.draftValue = this.originalValue;
			this.inputElement = null;
			vnode.attrs.onEditStart?.();
		}

		if (!nowEditing && wasEditing) {
			this.inputElement = null;
		}

		if (!this.isEditing(vnode.attrs) && vnode.attrs.value !== old.attrs.value) {
			this.draftValue = this.toText(vnode.attrs.value);
		}
	}

	public onremove(vnode: m.Vnode<InlineEditAttrs>) {
		this.unbindControlRef(vnode.attrs);
	}

	private bindControlRef(attrs: InlineEditAttrs) {
		if (!attrs.controlRef) {
			return;
		}

		attrs.controlRef.startEdit = () => {
			const activeAttrs = this.latestAttrs ?? attrs;
			this.beginEdit(activeAttrs);
			m.redraw();
		};

		attrs.controlRef.saveEdit = async () => {
			const activeAttrs = this.latestAttrs ?? attrs;
			return this.confirmEdit(activeAttrs);
		};

		attrs.controlRef.cancelEdit = () => {
			const activeAttrs = this.latestAttrs ?? attrs;
			this.cancelEdit(activeAttrs);
		};

		attrs.controlRef.isEditing = () => {
			const activeAttrs = this.latestAttrs ?? attrs;
			return this.isEditing(activeAttrs);
		};
	}

	private unbindControlRef(attrs: InlineEditAttrs) {
		if (!attrs.controlRef) {
			return;
		}

		delete attrs.controlRef.startEdit;
		delete attrs.controlRef.saveEdit;
		delete attrs.controlRef.cancelEdit;
		delete attrs.controlRef.isEditing;
	}

	/**
	 * @function isControlledEditing
	 * @description 編集状態が外部制御かどうかを返す
	 */
	private isControlledEditing(attrs: InlineEditAttrs) {
		return typeof attrs.editing === "boolean";
	}

	/**
	 * @function isEditing
	 * @description 現在の編集状態（制御/非制御を吸収）を返す
	 */
	private isEditing(attrs: InlineEditAttrs) {
		return this.isControlledEditing(attrs) ? !!attrs.editing : this.editing;
	}

	/**
	 * @function setEditing
	 * @description 編集状態を更新（制御時は通知のみ、非制御時は内部状態を更新）
	 */
	private setEditing(attrs: InlineEditAttrs, nextEditing: boolean) {
		if (!this.isControlledEditing(attrs)) {
			this.editing = nextEditing;
		}
		attrs.onEditingChange?.(nextEditing);
	}

	/**
	 * @function toText
	 * @description null / undefined を空文字へ正規化
	 */
	private toText(value: string | null | undefined) {
		return value == null ? "" : String(value);
	}

	/**
	 * @function toNullable
	 * @description 空文字（trim 後）を null へ正規化
	 */
	private toNullable(value: string): string | null {
		return value.trim() === "" ? null : value;
	}

	/**
	 * @function beginEdit
	 * @description 編集を開始し、表示値をドラフトへ取り込む
	 */
	private beginEdit(attrs: InlineEditAttrs) {
		if (attrs.disabled || this.isEditing(attrs)) {
			return;
		}

		this.setEditing(attrs, true);
		this.originalValue = this.toText(attrs.value);
		this.draftValue = this.originalValue;
		attrs.onEditStart?.();
		this.inputElement = null;
	}

	private restoreInputFocus() {
		window.setTimeout(() => {
			this.inputElement?.focus();
			this.inputElement?.select();
		}, 0);
	}

	/**
	 * @function confirmEdit
	 * @description 現在のドラフト値を確定して通知
	 */
	private async confirmEdit(attrs: InlineEditAttrs): Promise<boolean> {
		if (!this.isEditing(attrs)) {
			return true;
		}

		const nextValue = this.toNullable(this.draftValue);

		try {
			await Promise.resolve(attrs.oninput?.(nextValue));
		} catch {
			this.restoreInputFocus();
			m.redraw();
			return false;
		}

		this.setEditing(attrs, false);
		attrs.onEditEnd?.(nextValue);
		this.inputElement = null;
		m.redraw();
		return true;
	}

	/**
	 * @function cancelEdit
	 * @description 編集を取り消し、開始時の値へ戻す
	 */
	private cancelEdit(attrs: InlineEditAttrs) {
		if (!this.isEditing(attrs)) {
			return;
		}

		this.setEditing(attrs, false);
		this.draftValue = this.originalValue;
		attrs.onEditCancel?.(this.toNullable(this.originalValue));
		this.inputElement = null;
		m.redraw();
	}

	/**
	 * @function handleDisplayClick
	 * @description 表示モード時の click/doubleclick を処理
	 */
	private handleDisplayClick(attrs: InlineEditAttrs, trigger: "click" | "doubleclick") {
		if ((attrs.editTrigger ?? "doubleclick") === trigger) {
			this.beginEdit(attrs);
			m.redraw();
		}
	}

	/**
	 * @function handleInputBlur
	 * @description blur 時の確定/キャンセル処理
	 */
	private async handleInputBlur(attrs: InlineEditAttrs) {
		if (!this.isEditing(attrs)) {
			attrs.onblur?.();
			return;
		}

		let shouldNotifyBlur = false;

		if (attrs.saveOnBlur === false) {
			this.cancelEdit(attrs);
			shouldNotifyBlur = true;
		} else {
			shouldNotifyBlur = await this.confirmEdit(attrs);
		}

		if (shouldNotifyBlur) {
			attrs.onblur?.();
		}
	}

	/**
	 * @function view
	 * @description コンポーネント描画
	 */
	public view(vnode: m.Vnode<InlineEditAttrs>) {
		const attrs = vnode.attrs;
		this.latestAttrs = attrs;
		this.bindControlRef(attrs);
		const valueText = this.toText(attrs.value);
		const isEmpty = valueText.trim() === "";
		const editing = this.isEditing(attrs);

		if (editing) {
			const inputClass = classNames("form-control", attrs.class);
			return (
				<input
					type={attrs.type ?? "text"}
					id={attrs.id}
					maxlength={attrs.maxLength}
					class={inputClass}
					value={this.draftValue}
					disabled={attrs.disabled}
					oncreate={(v: m.VnodeDOM) => {
						this.inputElement = v.dom as HTMLInputElement;
						this.inputElement.focus();
						this.inputElement.select();
					}}
					oninput={(event: Event) => {
						this.draftValue = (event.target as HTMLInputElement).value;
					}}
					onblur={() => {
						void this.handleInputBlur(attrs);
					}}
					onkeydown={(event: KeyboardEvent) => {
						if (event.key === "Enter") {
							event.preventDefault();
							void this.confirmEdit(attrs);
							return;
						}

						if (event.key === "Escape") {
							event.preventDefault();
							this.cancelEdit(attrs);
						}
					}}
				/>
			);
		}

		const displayClass = classNames(
			"form-control-plaintext",
			"px-2",
			"rounded",
			{ "text-muted": isEmpty },
			attrs.class
		);

		return (
			<div
				class={displayClass}
				tabindex={attrs.disabled ? undefined : 0}
				role={attrs.disabled ? undefined : "button"}
				style={{
					cursor: attrs.disabled ? "default" : "text",
					minHeight: "calc(1.5em + 0.75rem + 2px)",
				}}
				onclick={() => this.handleDisplayClick(attrs, "click")}
				ondblclick={() => this.handleDisplayClick(attrs, "doubleclick")}
				onkeydown={(event: KeyboardEvent) => {
					if (attrs.disabled) {
						return;
					}

					if (event.key === "Enter" || event.key === " ") {
						event.preventDefault();
						this.beginEdit(attrs);
						m.redraw();
					}
				}}
			>
				{isEmpty ? attrs.placeholder ?? "ダブルクリックして編集" : valueText}
			</div>
		);
	}
}
