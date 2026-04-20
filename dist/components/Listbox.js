/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Listbox.module.scss";
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
/**
 * Listbox Root コンポーネント — リスト形式の選択
 *
 * @example
 * ```tsx
 * const items = [
 *   { value: "apple", label: "りんご" },
 *   { value: "banana", label: "バナナ" },
 * ];
 * <Listbox.Root items={items} value={selected} onValueChange={v => selected = v} />
 * ```
 */
class ListboxRoot {
    view(vnode) {
        const { variant = "subtle", items, value, onValueChange, selectionMode = "single", class: className, ...rest } = vnode.attrs;
        const multiple = selectionMode === "multiple";
        const selectedValues = multiple
            ? (Array.isArray(value) ? value : [])
            : (value ? [value] : []);
        // グループ化
        const groups = new Map();
        const ungrouped = [];
        for (const item of items) {
            if (item.group) {
                const g = groups.get(item.group) ?? [];
                g.push(item);
                groups.set(item.group, g);
            }
            else {
                ungrouped.push(item);
            }
        }
        return (m("div", { ...rest, role: "listbox", "aria-multiselectable": multiple || undefined, class: classNames(styles.root, styles[`variant${capitalize(variant)}`], className) },
            ungrouped.map(item => this.renderItem(item, selectedValues, multiple, onValueChange)),
            Array.from(groups.entries()).map(([groupLabel, groupItems]) => (m("div", { class: styles.itemGroup, key: groupLabel },
                m("div", { class: styles.itemGroupLabel }, groupLabel),
                groupItems.map(item => this.renderItem(item, selectedValues, multiple, onValueChange)))))));
    }
    renderItem(item, selectedValues, multiple, onValueChange) {
        const selected = selectedValues.includes(item.value);
        return (m("div", { key: item.value, role: "option", "aria-selected": selected, "aria-disabled": item.disabled || undefined, class: classNames(styles.item, { [styles.itemSelected]: selected }, { [styles.itemDisabled]: item.disabled }), onclick: () => {
                if (item.disabled)
                    return;
                if (multiple) {
                    const newVal = selected
                        ? selectedValues.filter(v => v !== item.value)
                        : [...selectedValues, item.value];
                    onValueChange?.(newVal);
                }
                else {
                    onValueChange?.(item.value);
                }
            } },
            multiple && (m("span", { class: styles.itemIndicator }, selected ? "✓" : "")),
            m("span", { class: styles.itemText }, item.label)));
    }
}
/**
 * Listbox コンポーネント名前空間
 */
export const Listbox = {
    Root: ListboxRoot,
};
export { ListboxRoot };
