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
let _tagsInputCtx = null;
let _tagsInputItemCtx = null;
// ===========================
// ユーティリティ
// ===========================
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
function injectItemContext(children, itemCtx) {
    if (children == null || typeof children === "boolean")
        return;
    if (Array.isArray(children)) {
        for (const child of children) {
            injectItemContext(child, itemCtx);
        }
        return;
    }
    if (typeof children !== "object")
        return;
    const vnode = children;
    vnode.attrs = {
        ...(vnode.attrs ?? {}),
        __tagsInputItemCtx: itemCtx,
    };
    if (vnode.children) {
        injectItemContext(vnode.children, itemCtx);
    }
}
function resolveItemContext(vnode) {
    return vnode.attrs.__tagsInputItemCtx ?? _tagsInputItemCtx;
}
// ===========================
// マーカーコンポーネント
// ===========================
/** TagsInput.Label — ラベル */
export class TagsInputLabelMarker {
    view(vnode) {
        const ctx = _tagsInputCtx;
        return (m("label", { class: classNames(styles.label, vnode.attrs.class), style: vnode.attrs.style, "data-scope": "tags-input", "data-part": "label", "data-disabled": ctx?.disabled ? "" : undefined }, vnode.children));
    }
}
TagsInputLabelMarker.__tagsInputRole = "label";
/** TagsInput.Control — タグとインプットのコンテナ */
export class TagsInputControlMarker {
    view(vnode) {
        const ctx = _tagsInputCtx;
        return (m("div", { class: classNames(styles.control, ctx ? styles[`size${capitalize(ctx.size)}`] : null, ctx ? styles[`variant${capitalize(ctx.variant)}`] : null, { [styles.disabled]: ctx?.disabled, [styles.invalid]: ctx?.invalid, [styles.readOnly]: ctx?.readOnly }, vnode.attrs.class), style: vnode.attrs.style, "data-scope": "tags-input", "data-part": "control", "data-disabled": ctx?.disabled ? "" : undefined, "data-invalid": ctx?.invalid ? "" : undefined, "data-readonly": ctx?.readOnly ? "" : undefined, onclick: () => ctx?.focusInput() }, vnode.children));
    }
}
TagsInputControlMarker.__tagsInputRole = "control";
/** TagsInput.Item — 個別タグのラッパー */
export class TagsInputItemMarker {
    view(vnode) {
        const ctx = _tagsInputCtx;
        const isHighlighted = ctx?.highlightedIndex === vnode.attrs.index;
        const isEditing = ctx?.editingIndex === vnode.attrs.index;
        const itemCtx = {
            index: vnode.attrs.index,
            value: vnode.attrs.value,
            disabled: vnode.attrs.disabled ?? false,
        };
        // 子コンポーネントから現在の item 値と index を参照できるように注入する
        injectItemContext(vnode.children, itemCtx);
        _tagsInputItemCtx = itemCtx;
        const result = (m("span", { class: classNames(styles.item, { [styles.itemHighlighted]: isHighlighted, [styles.itemEditing]: isEditing }, vnode.attrs.class), style: vnode.attrs.style, "data-scope": "tags-input", "data-part": "item", "data-value": vnode.attrs.value, "data-disabled": vnode.attrs.disabled ? "" : undefined, onclick: () => {
                if (ctx && !ctx.disabled && !ctx.readOnly) {
                    ctx.setHighlightedIndex(vnode.attrs.index);
                }
            }, ondblclick: () => {
                if (ctx && ctx.editable && !ctx.disabled && !ctx.readOnly) {
                    ctx.setEditingIndex(vnode.attrs.index);
                    ctx.setEditingValue(vnode.attrs.value);
                }
            } }, vnode.children));
        return result;
    }
}
TagsInputItemMarker.__tagsInputRole = "item";
/** TagsInput.ItemPreview — タグのプレビュー表示部分 */
export class TagsInputItemPreviewMarker {
    view(vnode) {
        const ctx = _tagsInputCtx;
        const itemCtx = resolveItemContext(vnode);
        const isEditing = ctx?.editingIndex === itemCtx?.index;
        return (m("span", { class: classNames(styles.itemPreview, vnode.attrs.class), style: {
                ...vnode.attrs.style,
                ...(isEditing ? { display: "none" } : {}),
            }, "data-scope": "tags-input", "data-part": "item-preview" }, vnode.children));
    }
}
TagsInputItemPreviewMarker.__tagsInputRole = "item-preview";
/** TagsInput.ItemText — タグのテキスト */
export class TagsInputItemTextMarker {
    view(vnode) {
        const itemCtx = resolveItemContext(vnode);
        return (m("span", { class: classNames(styles.itemText, vnode.attrs.class), style: vnode.attrs.style, "data-scope": "tags-input", "data-part": "item-text" }, vnode.children && vnode.children.length > 0 ? vnode.children : itemCtx?.value));
    }
}
TagsInputItemTextMarker.__tagsInputRole = "item-text";
/** TagsInput.ItemDeleteTrigger — タグ削除ボタン */
export class TagsInputItemDeleteTriggerMarker {
    view(vnode) {
        const ctx = _tagsInputCtx;
        const itemCtx = resolveItemContext(vnode);
        if (ctx?.disabled || ctx?.readOnly)
            return null;
        return (m("button", { type: "button", class: classNames(styles.itemDeleteTrigger, vnode.attrs.class), style: vnode.attrs.style, "data-scope": "tags-input", "data-part": "item-delete-trigger", "aria-label": "\u524A\u9664", tabindex: -1, onclick: (e) => {
                e.stopPropagation();
                if (itemCtx && ctx) {
                    ctx.removeTag(itemCtx.index);
                }
            } }, vnode.children && vnode.children.length > 0 ? vnode.children : "×"));
    }
}
TagsInputItemDeleteTriggerMarker.__tagsInputRole = "item-delete-trigger";
/** TagsInput.ItemInput — タグ編集用インプット */
export class TagsInputItemInputMarker {
    view(vnode) {
        const ctx = _tagsInputCtx;
        const itemCtx = resolveItemContext(vnode);
        const isEditing = ctx?.editingIndex === itemCtx?.index;
        if (!isEditing)
            return null;
        return (m("input", { type: "text", class: classNames(styles.itemInput, vnode.attrs.class), style: vnode.attrs.style, "data-scope": "tags-input", "data-part": "item-input", value: ctx?.editingValue ?? "", oninput: (e) => {
                ctx?.setEditingValue(e.target.value);
            }, onkeydown: (e) => {
                if (e.key === "Enter") {
                    e.preventDefault();
                    ctx?.commitEdit();
                }
                else if (e.key === "Escape") {
                    e.preventDefault();
                    ctx?.cancelEdit();
                }
            }, onblur: () => ctx?.commitEdit(), oncreate: (v) => {
                v.dom.focus();
                v.dom.select();
            } }));
    }
}
TagsInputItemInputMarker.__tagsInputRole = "item-input";
/** TagsInput.Input — メイン入力フィールド */
export class TagsInputInputMarker {
    view(vnode) {
        const ctx = _tagsInputCtx;
        return (m("input", { type: "text", class: classNames(styles.input, vnode.attrs.class), style: vnode.attrs.style, "data-scope": "tags-input", "data-part": "input", placeholder: vnode.attrs.placeholder, value: ctx?.getInputValue() ?? "", disabled: ctx?.disabled, readOnly: ctx?.readOnly, oninput: (e) => {
                ctx?.setInputValue(e.target.value);
            }, onkeydown: (e) => {
                if (!ctx)
                    return;
                if (e.key === "Enter") {
                    e.preventDefault();
                    const val = ctx.getInputValue().trim();
                    if (val) {
                        ctx.addTag(val);
                        ctx.setInputValue("");
                    }
                }
                else if (e.key === "Backspace" && ctx.getInputValue() === "") {
                    const tags = ctx.getValue();
                    if (tags.length > 0) {
                        if (ctx.highlightedIndex !== null) {
                            ctx.removeTag(ctx.highlightedIndex);
                            ctx.setHighlightedIndex(null);
                        }
                        else {
                            ctx.setHighlightedIndex(tags.length - 1);
                        }
                    }
                }
                else if (e.key === "ArrowLeft") {
                    const tags = ctx.getValue();
                    if (ctx.getInputValue() === "" && tags.length > 0) {
                        if (ctx.highlightedIndex === null) {
                            ctx.setHighlightedIndex(tags.length - 1);
                        }
                        else if (ctx.highlightedIndex > 0) {
                            ctx.setHighlightedIndex(ctx.highlightedIndex - 1);
                        }
                        e.preventDefault();
                    }
                }
                else if (e.key === "ArrowRight") {
                    if (ctx.highlightedIndex !== null) {
                        const tags = ctx.getValue();
                        if (ctx.highlightedIndex < tags.length - 1) {
                            ctx.setHighlightedIndex(ctx.highlightedIndex + 1);
                        }
                        else {
                            ctx.setHighlightedIndex(null);
                        }
                        e.preventDefault();
                    }
                }
                else if (e.key === "Delete" && ctx.highlightedIndex !== null) {
                    ctx.removeTag(ctx.highlightedIndex);
                    ctx.setHighlightedIndex(null);
                }
                else if (e.key === "Enter" && ctx.highlightedIndex !== null && ctx.editable) {
                    ctx.setEditingIndex(ctx.highlightedIndex);
                    ctx.setEditingValue(ctx.getValue()[ctx.highlightedIndex]);
                    e.preventDefault();
                }
                else {
                    if (ctx.highlightedIndex !== null) {
                        ctx.setHighlightedIndex(null);
                    }
                }
            }, onblur: () => {
                if (!ctx)
                    return;
                ctx.setHighlightedIndex(null);
                const val = ctx.getInputValue().trim();
                if (ctx.blurBehavior === "add" && val) {
                    ctx.addTag(val);
                    ctx.setInputValue("");
                }
                else if (ctx.blurBehavior === "clear") {
                    ctx.setInputValue("");
                }
            }, onpaste: (e) => {
                if (!ctx || !ctx.addOnPaste)
                    return;
                e.preventDefault();
                const text = e.clipboardData?.getData("text") ?? "";
                const delimiter = ctx.delimiter;
                let parts;
                if (typeof delimiter === "string") {
                    parts = text.split(delimiter);
                }
                else {
                    parts = text.split(delimiter);
                }
                for (const part of parts) {
                    const trimmed = part.trim();
                    if (trimmed)
                        ctx.addTag(trimmed);
                }
                ctx.setInputValue("");
            }, oncreate: (v) => {
                ctx?.setInputRef(v.dom);
            }, onremove: () => {
                ctx?.setInputRef(null);
            } }));
    }
}
TagsInputInputMarker.__tagsInputRole = "input";
/** TagsInput.ClearTrigger — 全タグクリアボタン */
export class TagsInputClearTriggerMarker {
    view(vnode) {
        const ctx = _tagsInputCtx;
        if (ctx?.disabled || ctx?.readOnly)
            return null;
        const tags = ctx?.getValue() ?? [];
        if (tags.length === 0)
            return null;
        return (m("button", { type: "button", class: classNames(styles.clearTrigger, vnode.attrs.class), style: vnode.attrs.style, "data-scope": "tags-input", "data-part": "clear-trigger", "aria-label": "\u3059\u3079\u3066\u30AF\u30EA\u30A2", onclick: (e) => {
                e.stopPropagation();
                ctx?.clearAll();
            } }, vnode.children && vnode.children.length > 0 ? vnode.children : "×"));
    }
}
TagsInputClearTriggerMarker.__tagsInputRole = "clear-trigger";
/** TagsInput.HiddenInput — フォーム送信用の隠しインプット */
export class TagsInputHiddenInputMarker {
    view() {
        return null;
    }
}
TagsInputHiddenInputMarker.__tagsInputRole = "hidden-input";
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
export class TagsInputRoot {
    constructor() {
        this.internalValue = [];
        this.inputValue = "";
        this.highlightedIndex = null;
        this.editingIndex = null;
        this.editingValue = "";
        this.inputRef = null;
    }
    oninit(vnode) {
        this.internalValue = vnode.attrs.defaultValue ? [...vnode.attrs.defaultValue] : [];
    }
    isControlled(attrs) {
        return attrs.value !== undefined;
    }
    getValue(attrs) {
        return this.isControlled(attrs) ? attrs.value : this.internalValue;
    }
    setValue(attrs, newValue) {
        if (!this.isControlled(attrs)) {
            this.internalValue = newValue;
        }
        attrs.onValueChange?.({ value: newValue });
    }
    addTag(attrs, tag) {
        if (attrs.disabled || attrs.readOnly)
            return false;
        const current = this.getValue(attrs);
        const max = attrs.max ?? Infinity;
        if (current.length >= max)
            return false;
        if (attrs.validate) {
            if (!attrs.validate({ value: tag, inputValue: this.inputValue }))
                return false;
        }
        // 重複チェック
        if (current.includes(tag))
            return false;
        this.setValue(attrs, [...current, tag]);
        return true;
    }
    removeTag(attrs, index) {
        if (attrs.disabled || attrs.readOnly)
            return;
        const current = this.getValue(attrs);
        if (index < 0 || index >= current.length)
            return;
        const next = current.filter((_, i) => i !== index);
        this.setValue(attrs, next);
        if (this.highlightedIndex !== null) {
            if (this.highlightedIndex >= next.length) {
                this.highlightedIndex = next.length > 0 ? next.length - 1 : null;
            }
        }
    }
    handleDelimiter(attrs, text) {
        const delimiter = attrs.delimiter ?? ",";
        if (typeof delimiter === "string") {
            if (text.includes(delimiter)) {
                const parts = text.split(delimiter);
                for (const part of parts) {
                    const trimmed = part.trim();
                    if (trimmed)
                        this.addTag(attrs, trimmed);
                }
                this.inputValue = "";
                attrs.onInputValueChange?.({ inputValue: "" });
            }
        }
        else {
            const parts = text.split(delimiter);
            if (parts.length > 1) {
                for (const part of parts) {
                    const trimmed = part.trim();
                    if (trimmed)
                        this.addTag(attrs, trimmed);
                }
                this.inputValue = "";
                attrs.onInputValueChange?.({ inputValue: "" });
            }
        }
    }
    commitEdit(attrs) {
        if (this.editingIndex === null)
            return;
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
    view(vnode) {
        const attrs = vnode.attrs;
        const currentValue = this.getValue(attrs);
        const size = attrs.size ?? "md";
        const variant = attrs.variant ?? "outline";
        _tagsInputCtx = {
            getValue: () => this.getValue(attrs),
            getInputValue: () => this.inputValue,
            setInputValue: (v) => {
                this.inputValue = v;
                attrs.onInputValueChange?.({ inputValue: v });
                this.handleDelimiter(attrs, v);
            },
            addTag: (tag) => {
                const result = this.addTag(attrs, tag);
                m.redraw();
                return result;
            },
            removeTag: (index) => {
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
            setHighlightedIndex: (i) => {
                this.highlightedIndex = i;
            },
            editingIndex: this.editingIndex,
            setEditingIndex: (i) => {
                this.editingIndex = i;
            },
            editingValue: this.editingValue,
            setEditingValue: (v) => {
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
            setInputRef: (el) => {
                this.inputRef = el;
            },
            blurBehavior: attrs.blurBehavior,
            addOnPaste: attrs.addOnPaste ?? false,
            delimiter: attrs.delimiter ?? ",",
        };
        const result = (m("div", { class: classNames(styles.root, attrs.class), style: attrs.style, "data-scope": "tags-input", "data-part": "root", "data-disabled": attrs.disabled ? "" : undefined, "data-invalid": attrs.invalid ? "" : undefined, "data-readonly": attrs.readOnly ? "" : undefined },
            vnode.children,
            attrs.name
                ? currentValue.map((tag, i) => (m("input", { type: "hidden", name: attrs.name, value: tag, key: `hidden-${i}` })))
                : null));
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
};
