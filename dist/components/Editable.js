/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Editable.module.scss";
// ===========================
// マーカーコンポーネント
// ===========================
/** Editable.Preview — 表示モードのマーカー */
export class EditablePreviewMarker {
    view(vnode) {
        return m("div", null, vnode.children);
    }
}
EditablePreviewMarker.__editableRole = "preview";
/** Editable.Input — 入力モード（input）のマーカー */
export class EditableInputMarker {
    view(vnode) {
        return m("div", null, vnode.children);
    }
}
EditableInputMarker.__editableRole = "input";
/** Editable.Textarea — 入力モード（textarea）のマーカー */
export class EditableTextareaMarker {
    view(vnode) {
        return m("div", null, vnode.children);
    }
}
EditableTextareaMarker.__editableRole = "textarea";
/** Editable.Label — ラベルのマーカー */
export class EditableLabelMarker {
    view(vnode) {
        return m("div", null, vnode.children);
    }
}
EditableLabelMarker.__editableRole = "label";
/** Editable.Area — エリアのマーカー */
export class EditableAreaMarker {
    view(vnode) {
        return m("div", null, vnode.children);
    }
}
EditableAreaMarker.__editableRole = "area";
/** Editable.Control — コントロールボタン群のマーカー */
export class EditableControlMarker {
    view(vnode) {
        return m("div", null, vnode.children);
    }
}
EditableControlMarker.__editableRole = "control";
/** Editable.EditTrigger — 編集開始トリガーのマーカー */
export class EditableEditTriggerMarker {
    view(vnode) {
        return m("div", null, vnode.children);
    }
}
EditableEditTriggerMarker.__editableRole = "editTrigger";
/** Editable.SubmitTrigger — 送信トリガーのマーカー */
export class EditableSubmitTriggerMarker {
    view(vnode) {
        return m("div", null, vnode.children);
    }
}
EditableSubmitTriggerMarker.__editableRole = "submitTrigger";
/** Editable.CancelTrigger — キャンセルトリガーのマーカー */
export class EditableCancelTriggerMarker {
    view(vnode) {
        return m("div", null, vnode.children);
    }
}
EditableCancelTriggerMarker.__editableRole = "cancelTrigger";
// ===========================
// ユーティリティ
// ===========================
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
/** VDOM の子要素からマーカーを検出する */
function findMarkers(children) {
    const map = new Map();
    if (!children)
        return map;
    const arr = Array.isArray(children) ? children : [children];
    for (const child of arr) {
        if (child && typeof child === "object" && "tag" in child) {
            const tag = child.tag;
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
export class EditableRoot {
    constructor() {
        this.internalValue = "";
        this.draftValue = "";
        this.internalEditing = false;
        this.committedValue = "";
        this.inputEl = null;
    }
    oninit(vnode) {
        this.internalValue = vnode.attrs.defaultValue ?? "";
        this.committedValue = this.internalValue;
        this.internalEditing = vnode.attrs.defaultEdit ?? false;
        if (this.internalEditing) {
            this.draftValue = this.getValue(vnode.attrs);
        }
    }
    isControlled(attrs) {
        return attrs.value !== undefined;
    }
    isEditControlled(attrs) {
        return attrs.edit !== undefined;
    }
    getValue(attrs) {
        return this.isControlled(attrs) ? (attrs.value ?? "") : this.internalValue;
    }
    getEditing(attrs) {
        return this.isEditControlled(attrs) ? !!attrs.edit : this.internalEditing;
    }
    getPlaceholder(attrs, mode) {
        if (!attrs.placeholder)
            return "";
        if (typeof attrs.placeholder === "string")
            return attrs.placeholder;
        return attrs.placeholder[mode] ?? "";
    }
    /** 編集モードに切り替える */
    startEdit(attrs) {
        if (attrs.disabled || attrs.readOnly)
            return;
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
    submit(attrs) {
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
    cancel(attrs) {
        this.draftValue = this.committedValue;
        attrs.onValueRevert?.({ value: this.committedValue });
        if (!this.isEditControlled(attrs)) {
            this.internalEditing = false;
        }
        attrs.onEditChange?.({ editing: false });
    }
    view(vnode) {
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
        const activationHandlers = {};
        if (activationMode === "click") {
            activationHandlers.onclick = () => this.startEdit(attrs);
        }
        else if (activationMode === "dblclick") {
            activationHandlers.ondblclick = () => this.startEdit(attrs);
        }
        else if (activationMode === "focus") {
            activationHandlers.onfocus = () => this.startEdit(attrs);
        }
        // キーハンドラ
        const handleKeyDown = (e) => {
            if (e.key === "Enter" && !e.shiftKey) {
                if (submitMode === "enter" || submitMode === "both") {
                    e.preventDefault();
                    this.submit(attrs);
                }
            }
            else if (e.key === "Escape") {
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
        return (m("div", { class: classNames(styles.root, styles[`size${capitalize(size)}`], {
                [styles.disabled]: attrs.disabled,
                [styles.invalid]: attrs.invalid,
            }, attrs.class), style: attrs.style, "data-scope": "editable", "data-part": "root" },
            labelVnode && (m("span", { class: classNames(styles.label, labelVnode.attrs.class), style: labelVnode.attrs.style, "data-part": "label" }, labelVnode.children)),
            m("div", { class: styles.area, "data-part": "area" }, editing ? (
            // 編集モード
            textareaVnode ? (m("textarea", { class: classNames(styles.textarea, textareaVnode.attrs.class), style: textareaVnode.attrs.style, value: this.draftValue, placeholder: this.getPlaceholder(attrs, "edit"), disabled: attrs.disabled, readonly: attrs.readOnly, maxlength: attrs.maxLength, name: attrs.name, "data-part": "textarea", oninput: (e) => {
                    this.draftValue = e.target.value;
                    attrs.onValueChange?.({ value: this.draftValue });
                }, onkeydown: (e) => {
                    if (e.key === "Escape") {
                        e.preventDefault();
                        this.cancel(attrs);
                    }
                }, onblur: handleBlur, oncreate: (v) => {
                    this.inputEl = v.dom;
                    this.inputEl.focus();
                    if (attrs.selectOnFocus !== false) {
                        this.inputEl.select();
                    }
                } })) : (m("input", { class: classNames(styles.input, inputVnode?.attrs.class), style: inputVnode?.attrs.style, type: "text", value: this.draftValue, placeholder: this.getPlaceholder(attrs, "edit"), disabled: attrs.disabled, readonly: attrs.readOnly, maxlength: attrs.maxLength, name: attrs.name, "data-part": "input", oninput: (e) => {
                    this.draftValue = e.target.value;
                    attrs.onValueChange?.({ value: this.draftValue });
                }, onkeydown: handleKeyDown, onblur: handleBlur, oncreate: (v) => {
                    this.inputEl = v.dom;
                    this.inputEl.focus();
                    if (attrs.selectOnFocus !== false) {
                        this.inputEl.select();
                    }
                } }))) : (
            // 表示モード
            m("span", { class: classNames(styles.preview, { [styles.placeholder]: !value }, previewVnode?.attrs.class), style: previewVnode?.attrs.style, tabindex: activationMode === "focus" ? 0 : undefined, "data-part": "preview", ...activationHandlers }, value || this.getPlaceholder(attrs, "preview") || "\u00a0"))),
            (controlVnode || editTriggerVnode || submitTriggerVnode || cancelTriggerVnode) && (m("div", { class: classNames(styles.control, controlVnode?.attrs.class), style: controlVnode?.attrs.style, "data-part": "control" }, editing ? (
            // 編集中: Submit / Cancel
            m("span", { "data-part": "control-buttons" },
                submitTriggerVnode && (m("button", { type: "button", class: classNames(styles.submitTrigger, submitTriggerVnode.attrs.class), style: submitTriggerVnode.attrs.style, "data-part": "submit-trigger", onclick: () => this.submit(attrs) }, submitTriggerVnode.children && submitTriggerVnode.children.length > 0
                    ? submitTriggerVnode.children
                    : "✓")),
                cancelTriggerVnode && (m("button", { type: "button", class: classNames(styles.cancelTrigger, cancelTriggerVnode.attrs.class), style: cancelTriggerVnode.attrs.style, "data-part": "cancel-trigger", onclick: () => this.cancel(attrs) }, cancelTriggerVnode.children && cancelTriggerVnode.children.length > 0
                    ? cancelTriggerVnode.children
                    : "✕")))) : (
            // 表示中: Edit trigger
            editTriggerVnode && (m("button", { type: "button", class: classNames(styles.editTrigger, editTriggerVnode.attrs.class), style: editTriggerVnode.attrs.style, "data-part": "edit-trigger", onclick: () => this.startEdit(attrs) }, editTriggerVnode.children && editTriggerVnode.children.length > 0
                ? editTriggerVnode.children
                : "✎"))))),
            attrs.name && (m("input", { type: "hidden", name: attrs.name, value: value }))));
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
