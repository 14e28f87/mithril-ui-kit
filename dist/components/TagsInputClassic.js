/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import "./TagsInputClassic.scss";
/**
 * TagsInputClassic コンポーネント（レガシー）
 * - Enter / セパレータ入力でタグ化
 * - Backspace で最後のタグを削除
 * - クリックで入力欄にフォーカス
 */
export class TagsInputClassic {
    constructor() {
        this.inputValue = "";
        this.focused = false;
    }
    getTags(attrs) {
        return Array.isArray(attrs.value) ? attrs.value : [];
    }
    normalizeTag(raw) {
        const t = raw.trim();
        return t === "" ? null : t;
    }
    isDuplicate(tags, tag, attrs) {
        if (attrs.allowDuplicates)
            return false;
        const norm = (s) => (attrs.caseSensitive ? s : s.toLowerCase());
        const target = norm(tag);
        return tags.some((t) => norm(t) === target);
    }
    addTags(vnode, rawTags, clearInput = true) {
        const attrs = vnode.attrs;
        if (attrs.disabled)
            return;
        const current = this.getTags(attrs);
        let next = [...current];
        let added = false;
        for (const raw of rawTags) {
            const tag = this.normalizeTag(raw);
            if (!tag)
                continue;
            if (attrs.maxTags != null && next.length >= attrs.maxTags)
                break;
            if (this.isDuplicate(next, tag, attrs))
                continue;
            if (attrs.validateTag && !attrs.validateTag(tag))
                continue;
            next.push(tag);
            added = true;
            attrs.onTagAdd?.(tag);
        }
        if (added) {
            attrs.oninput?.(next);
            if (clearInput)
                this.inputValue = "";
        }
        m.redraw();
    }
    removeTag(vnode, index) {
        const attrs = vnode.attrs;
        if (attrs.disabled)
            return;
        const current = this.getTags(attrs);
        if (index < 0 || index >= current.length)
            return;
        const removed = current[index];
        const next = current.slice(0, index).concat(current.slice(index + 1));
        attrs.oninput?.(next);
        attrs.onTagRemove?.(removed, index);
        m.redraw();
    }
    splitBySeparators(text, separators) {
        if (!separators || separators.length === 0)
            return [text];
        const escaped = separators.map((s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
        const reg = new RegExp(`(?:${escaped})+`);
        return text.split(reg);
    }
    handleInput(vnode, text) {
        const attrs = vnode.attrs;
        const seps = attrs.separators ?? [","];
        this.inputValue = text;
        if (seps.length === 0)
            return;
        if (!seps.some((s) => text.includes(s)))
            return;
        const parts = this.splitBySeparators(text, seps);
        const endsWithSep = seps.some((s) => text.endsWith(s));
        if (endsWithSep) {
            this.addTags(vnode, parts, true);
        }
        else if (parts.length > 1) {
            this.addTags(vnode, parts.slice(0, -1), false);
            this.inputValue = parts[parts.length - 1] ?? "";
        }
    }
    handleKeyDown(vnode, e) {
        const attrs = vnode.attrs;
        if (attrs.disabled)
            return;
        const seps = attrs.separators ?? [","];
        if (e.key === "Enter" || seps.includes(e.key)) {
            e.preventDefault();
            this.addTags(vnode, [this.inputValue], true);
            return;
        }
        if (e.key === "Backspace" && this.inputValue === "") {
            const tags = this.getTags(attrs);
            if (tags.length > 0) {
                e.preventDefault();
                this.removeTag(vnode, tags.length - 1);
            }
        }
    }
    view(vnode) {
        const attrs = vnode.attrs;
        const tags = this.getTags(attrs);
        const isInvalid = !!(attrs.class && String(attrs.class).split(/\s+/).includes("is-invalid"));
        const containerClass = classNames("tags-input-classic", "form-control", "d-flex", "flex-wrap", "gap-1", "align-items-center", attrs.class, { "is-invalid": isInvalid, disabled: attrs.disabled });
        return (m("div", { class: containerClass, onclick: () => {
                if (attrs.disabled)
                    return;
                this.inputRef?.focus();
            }, oncreate: (v) => {
                this.containerRef = v.dom;
            }, onremove: () => {
                this.containerRef = undefined;
            } },
            tags.map((tag, idx) => {
                const remove = () => this.removeTag(vnode, idx);
                if (attrs.tagRender)
                    return attrs.tagRender(tag, idx, remove);
                return (m("span", { class: classNames("badge", "bg-secondary", "tag-badge", attrs.tagClass), key: `${tag}-${idx}` },
                    m("span", { class: "tag-label" }, tag),
                    m("button", { type: "button", class: "tag-remove", onclick: (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            remove();
                        }, "aria-label": "remove", title: "remove" }, "\u00D7")));
            }),
            m("input", { class: classNames("tags-input-classic-field", attrs.inputClass), placeholder: tags.length === 0 ? attrs.placeholder : "", value: this.inputValue, disabled: attrs.disabled, oninput: (e) => {
                    const t = e.target;
                    this.handleInput(vnode, t.value);
                }, onkeydown: (e) => this.handleKeyDown(vnode, e), onfocus: () => (this.focused = true), onblur: () => {
                    this.focused = false;
                    if (attrs.addOnBlur !== false) {
                        this.addTags(vnode, [this.inputValue], true);
                    }
                }, oncreate: (v) => {
                    this.inputRef = v.dom;
                } }),
            attrs.allowClear && tags.length > 0 && !attrs.disabled && (m("button", { type: "button", class: "tags-input-classic-clear", onclick: (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    attrs.oninput?.([]);
                    this.inputValue = "";
                    m.redraw();
                }, "aria-label": "clear", title: "Clear" }, "\u00D7"))));
    }
}
export default TagsInputClassic;
