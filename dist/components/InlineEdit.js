/** @jsx m */
import m from "mithril";
import classNames from "classnames";
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
export class InlineEdit {
    constructor() {
        /** 編集状態かどうか */
        this.editing = false;
        /** 編集中の入力値 */
        this.draftValue = "";
        /** 編集開始時点の値（キャンセル時に復元） */
        this.originalValue = "";
        /** 編集 input 要素参照 */
        this.inputElement = null;
        /** 直近の attrs 参照 */
        this.latestAttrs = null;
    }
    /**
     * @function oninit
     * @description 初期値を内部状態へ同期
     */
    oninit(vnode) {
        this.latestAttrs = vnode.attrs;
        this.bindControlRef(vnode.attrs);
        this.draftValue = this.toText(vnode.attrs.value);
    }
    /**
     * @function onbeforeupdate
     * @description 非編集中のみ、外部 value 変更を内部値へ反映
     */
    onbeforeupdate(vnode, old) {
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
    onremove(vnode) {
        this.unbindControlRef(vnode.attrs);
    }
    bindControlRef(attrs) {
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
    unbindControlRef(attrs) {
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
    isControlledEditing(attrs) {
        return typeof attrs.editing === "boolean";
    }
    /**
     * @function isEditing
     * @description 現在の編集状態（制御/非制御を吸収）を返す
     */
    isEditing(attrs) {
        return this.isControlledEditing(attrs) ? !!attrs.editing : this.editing;
    }
    /**
     * @function setEditing
     * @description 編集状態を更新（制御時は通知のみ、非制御時は内部状態を更新）
     */
    setEditing(attrs, nextEditing) {
        if (!this.isControlledEditing(attrs)) {
            this.editing = nextEditing;
        }
        attrs.onEditingChange?.(nextEditing);
    }
    /**
     * @function toText
     * @description null / undefined を空文字へ正規化
     */
    toText(value) {
        return value == null ? "" : String(value);
    }
    /**
     * @function toNullable
     * @description 空文字（trim 後）を null へ正規化
     */
    toNullable(value) {
        return value.trim() === "" ? null : value;
    }
    /**
     * @function beginEdit
     * @description 編集を開始し、表示値をドラフトへ取り込む
     */
    beginEdit(attrs) {
        if (attrs.disabled || this.isEditing(attrs)) {
            return;
        }
        this.setEditing(attrs, true);
        this.originalValue = this.toText(attrs.value);
        this.draftValue = this.originalValue;
        attrs.onEditStart?.();
        this.inputElement = null;
    }
    restoreInputFocus() {
        window.setTimeout(() => {
            this.inputElement?.focus();
            this.inputElement?.select();
        }, 0);
    }
    /**
     * @function confirmEdit
     * @description 現在のドラフト値を確定して通知
     */
    async confirmEdit(attrs) {
        if (!this.isEditing(attrs)) {
            return true;
        }
        const nextValue = this.toNullable(this.draftValue);
        try {
            await Promise.resolve(attrs.oninput?.(nextValue));
        }
        catch {
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
    cancelEdit(attrs) {
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
    handleDisplayClick(attrs, trigger) {
        if ((attrs.editTrigger ?? "doubleclick") === trigger) {
            this.beginEdit(attrs);
            m.redraw();
        }
    }
    /**
     * @function handleInputBlur
     * @description blur 時の確定/キャンセル処理
     */
    async handleInputBlur(attrs) {
        if (!this.isEditing(attrs)) {
            attrs.onblur?.();
            return;
        }
        let shouldNotifyBlur = false;
        if (attrs.saveOnBlur === false) {
            this.cancelEdit(attrs);
            shouldNotifyBlur = true;
        }
        else {
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
    view(vnode) {
        const attrs = vnode.attrs;
        this.latestAttrs = attrs;
        this.bindControlRef(attrs);
        const valueText = this.toText(attrs.value);
        const isEmpty = valueText.trim() === "";
        const editing = this.isEditing(attrs);
        if (editing) {
            const inputClass = classNames("form-control", attrs.class);
            return (m("input", { type: attrs.type ?? "text", id: attrs.id, maxlength: attrs.maxLength, class: inputClass, value: this.draftValue, disabled: attrs.disabled, oncreate: (v) => {
                    this.inputElement = v.dom;
                    this.inputElement.focus();
                    this.inputElement.select();
                }, oninput: (event) => {
                    this.draftValue = event.target.value;
                }, onblur: () => {
                    void this.handleInputBlur(attrs);
                }, onkeydown: (event) => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        void this.confirmEdit(attrs);
                        return;
                    }
                    if (event.key === "Escape") {
                        event.preventDefault();
                        this.cancelEdit(attrs);
                    }
                } }));
        }
        const displayClass = classNames("form-control-plaintext", "px-2", "rounded", { "text-muted": isEmpty }, attrs.class);
        return (m("div", { class: displayClass, tabindex: attrs.disabled ? undefined : 0, role: attrs.disabled ? undefined : "button", style: {
                cursor: attrs.disabled ? "default" : "text",
                minHeight: "calc(1.5em + 0.75rem + 2px)",
            }, onclick: () => this.handleDisplayClick(attrs, "click"), ondblclick: () => this.handleDisplayClick(attrs, "doubleclick"), onkeydown: (event) => {
                if (attrs.disabled) {
                    return;
                }
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    this.beginEdit(attrs);
                    m.redraw();
                }
            } }, isEmpty ? attrs.placeholder ?? "ダブルクリックして編集" : valueText));
    }
}
