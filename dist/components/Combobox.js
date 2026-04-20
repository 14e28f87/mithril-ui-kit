/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Combobox.module.scss";
function capitalize(s) {
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
class ComboboxRoot {
    constructor() {
        this.isOpen = false;
        this.query = "";
        this.highlightIndex = -1;
        this.inputEl = null;
        this.containerEl = null;
        this.handleOutsideClick = (e) => {
            if (this.containerEl && !this.containerEl.contains(e.target)) {
                this.isOpen = false;
                m.redraw();
            }
        };
    }
    onremove() {
        document.removeEventListener("mousedown", this.handleOutsideClick);
    }
    view(vnode) {
        const { variant = "outline", size = "md", items, value, onValueChange, multiple, openOnClick = true, placeholder = "検索...", disabled, class: className, ...rest } = vnode.attrs;
        const filtered = items.filter(item => !this.query || item.label.toLowerCase().includes(this.query.toLowerCase()));
        const selectedValues = multiple
            ? (Array.isArray(value) ? value : [])
            : (value ? [value] : []);
        const selectedLabels = items
            .filter(it => selectedValues.includes(it.value))
            .map(it => it.label);
        return (m("div", { ...rest, class: classNames(styles.root, styles[`variant${capitalize(variant)}`], styles[`size${capitalize(size)}`], { [styles.disabled]: disabled }, className), oncreate: (vn) => {
                this.containerEl = vn.dom;
                document.addEventListener("mousedown", this.handleOutsideClick);
            } },
            m("div", { class: styles.control },
                multiple && selectedLabels.length > 0 && (m("div", { class: styles.tags }, selectedLabels.map(label => (m("span", { class: styles.tag },
                    label,
                    m("button", { type: "button", class: styles.tagClose, onclick: (e) => {
                            e.stopPropagation();
                            const item = items.find(it => it.label === label);
                            if (item) {
                                const newVal = selectedValues.filter(v => v !== item.value);
                                onValueChange?.(newVal);
                            }
                        } }, "\u2715")))))),
                m("input", { type: "text", class: styles.input, placeholder: !multiple && selectedLabels.length > 0 ? selectedLabels[0] : placeholder, disabled: disabled, value: this.query, oninput: (e) => {
                        this.query = e.target.value;
                        this.isOpen = true;
                        this.highlightIndex = 0;
                    }, onfocus: () => {
                        if (openOnClick)
                            this.isOpen = true;
                    }, onkeydown: (e) => this.handleKeydown(e, filtered, selectedValues, multiple, onValueChange), oncreate: (vn) => { this.inputEl = vn.dom; } }),
                selectedValues.length > 0 && !multiple && (m("button", { type: "button", class: styles.clearTrigger, onclick: (e) => {
                        e.stopPropagation();
                        this.query = "";
                        onValueChange?.(multiple ? [] : "");
                    } }, "\u2715")),
                m("span", { class: styles.triggerIcon, onclick: () => { if (!disabled)
                        this.isOpen = !this.isOpen; } }, "\u25BE")),
            this.isOpen && (m("div", { class: styles.content }, filtered.length === 0
                ? m("div", { class: styles.empty }, "\u7D50\u679C\u306A\u3057")
                : filtered.map((item, i) => (m("div", { key: item.value, class: classNames(styles.item, { [styles.itemHighlighted]: i === this.highlightIndex }, { [styles.itemSelected]: selectedValues.includes(item.value) }, { [styles.itemDisabled]: item.disabled }), onmouseenter: () => { this.highlightIndex = i; }, onclick: () => {
                        if (item.disabled)
                            return;
                        if (multiple) {
                            const newVal = selectedValues.includes(item.value)
                                ? selectedValues.filter(v => v !== item.value)
                                : [...selectedValues, item.value];
                            onValueChange?.(newVal);
                        }
                        else {
                            onValueChange?.(item.value);
                            this.isOpen = false;
                            this.query = "";
                        }
                    } },
                    multiple && (m("span", { class: styles.itemCheck }, selectedValues.includes(item.value) ? "✓" : "")),
                    item.label)))))));
    }
    handleKeydown(e, filtered, selectedValues, multiple, onValueChange) {
        if (e.key === "ArrowDown") {
            e.preventDefault();
            this.highlightIndex = Math.min(this.highlightIndex + 1, filtered.length - 1);
        }
        else if (e.key === "ArrowUp") {
            e.preventDefault();
            this.highlightIndex = Math.max(this.highlightIndex - 1, 0);
        }
        else if (e.key === "Enter") {
            e.preventDefault();
            const item = filtered[this.highlightIndex];
            if (item && !item.disabled) {
                if (multiple) {
                    const newVal = selectedValues.includes(item.value)
                        ? selectedValues.filter(v => v !== item.value)
                        : [...selectedValues, item.value];
                    onValueChange?.(newVal);
                }
                else {
                    onValueChange?.(item.value);
                    this.isOpen = false;
                    this.query = "";
                }
            }
        }
        else if (e.key === "Escape") {
            this.isOpen = false;
        }
    }
}
/**
 * Combobox コンポーネント名前空間
 */
export const Combobox = {
    Root: ComboboxRoot,
};
export { ComboboxRoot };
