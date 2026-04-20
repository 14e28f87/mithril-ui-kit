/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./TreeView.module.scss";
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
/**
 * TreeView Root コンポーネント — ツリー構造の表示
 *
 * @example
 * ```tsx
 * const data = [
 *   { id: "1", name: "フォルダA", children: [
 *     { id: "1-1", name: "ファイル1" },
 *   ]},
 * ];
 * <TreeView.Root data={data} size="md" />
 * ```
 */
class TreeViewRoot {
    constructor() {
        this.expandedIds = new Set();
        this.selectedIds = new Set();
    }
    oninit(vnode) {
        if (vnode.attrs.expandedIds) {
            this.expandedIds = new Set(vnode.attrs.expandedIds);
        }
        if (vnode.attrs.selectedIds) {
            this.selectedIds = new Set(vnode.attrs.selectedIds);
        }
    }
    onupdate(vnode) {
        if (vnode.attrs.expandedIds) {
            this.expandedIds = new Set(vnode.attrs.expandedIds);
        }
        if (vnode.attrs.selectedIds) {
            this.selectedIds = new Set(vnode.attrs.selectedIds);
        }
    }
    toggleExpand(id, attrs) {
        if (this.expandedIds.has(id)) {
            this.expandedIds.delete(id);
        }
        else {
            this.expandedIds.add(id);
        }
        attrs.onExpandChange?.(Array.from(this.expandedIds));
    }
    toggleSelect(id, attrs) {
        if (this.selectedIds.has(id)) {
            this.selectedIds.delete(id);
        }
        else {
            this.selectedIds.add(id);
        }
        attrs.onSelectionChange?.(Array.from(this.selectedIds));
    }
    view(vnode) {
        const { size = "md", variant = "plain", data = [], class: className, ...rest } = vnode.attrs;
        return (m("div", { ...rest, role: "tree", class: classNames(styles.root, styles[`size${capitalize(size)}`], styles[`variant${capitalize(variant)}`], className) }, data.map(node => this.renderNode(node, 0, vnode.attrs))));
    }
    renderNode(node, depth, attrs) {
        const hasBranch = node.children && node.children.length > 0;
        const expanded = this.expandedIds.has(node.id);
        const selected = this.selectedIds.has(node.id);
        if (hasBranch) {
            return (m("div", { class: styles.branch, key: node.id },
                m("div", { class: classNames(styles.branchControl, { [styles.selected]: selected }), style: { paddingLeft: `${depth * 1.25}rem` }, onclick: () => {
                        this.toggleExpand(node.id, attrs);
                        this.toggleSelect(node.id, attrs);
                    }, role: "treeitem", "aria-expanded": expanded },
                    m("span", { class: classNames(styles.branchIndicator, { [styles.expanded]: expanded }) }, "\u25B6"),
                    node.icon && m("span", { class: styles.icon }, node.icon),
                    m("span", { class: styles.branchText }, node.name)),
                expanded && (m("div", { class: styles.branchContent, role: "group" }, node.children.map(child => this.renderNode(child, depth + 1, attrs))))));
        }
        return (m("div", { key: node.id, class: classNames(styles.item, { [styles.selected]: selected }, { [styles.disabled]: node.disabled }), style: { paddingLeft: `${depth * 1.25 + 1.25}rem` }, onclick: () => { if (!node.disabled)
                this.toggleSelect(node.id, attrs); }, role: "treeitem" },
            node.icon && m("span", { class: styles.icon }, node.icon),
            m("span", { class: styles.itemText }, node.name)));
    }
}
/**
 * TreeView コンポーネント名前空間
 */
export const TreeView = {
    Root: TreeViewRoot,
};
export { TreeViewRoot };
