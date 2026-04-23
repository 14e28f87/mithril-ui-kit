/** @jsx m */
import m from "mithril";
import styles from "./Dropdown.module.scss";
class MnTriggerMarker {
    view(vnode) { return m("span", null, vnode.children); }
}
MnTriggerMarker.__mnRole = "trigger";
class MnPositionerMarker {
    view(vnode) { return m("span", null, vnode.children); }
}
MnPositionerMarker.__mnRole = "positioner";
class MnContentMarker {
    view(vnode) { return m("span", null, vnode.children); }
}
MnContentMarker.__mnRole = "content";
class MnArrowMarker {
    view() { return m("span", null); }
}
MnArrowMarker.__mnRole = "arrow";
class MnItemMarker {
    view(vnode) { return m("span", null, vnode.children); }
}
MnItemMarker.__mnRole = "item";
class MnItemGroupMarker {
    view(vnode) { return m("span", null, vnode.children); }
}
MnItemGroupMarker.__mnRole = "itemGroup";
class MnSeparatorMarker {
    view() { return m("span", null); }
}
MnSeparatorMarker.__mnRole = "separator";
class MnCheckboxItemMarker {
    view(vnode) { return m("span", null, vnode.children); }
}
MnCheckboxItemMarker.__mnRole = "checkboxItem";
class MnRadioItemGroupMarker {
    view(vnode) { return m("span", null, vnode.children); }
}
MnRadioItemGroupMarker.__mnRole = "radioItemGroup";
class MnRadioItemMarker {
    view(vnode) { return m("span", null, vnode.children); }
}
MnRadioItemMarker.__mnRole = "radioItem";
class MnContextTriggerMarker {
    view(vnode) { return m("span", null, vnode.children); }
}
MnContextTriggerMarker.__mnRole = "contextTrigger";
// ============================================================
// DropdownRoot
// ============================================================
/**
 * DropdownRoot — Chakra UI 風 Menu のルートコンポーネント。
 *
 * 責務:
 * 1. 開閉状態管理
 * 2. アイテム選択のコールバック
 * 3. 子マーカーの再帰的描画
 */
export class DropdownRoot {
    constructor() {
        this.isOpen = false;
        this.rootEl = null;
        /** RadioItemGroup 内の現在値マップ (一時管理) */
        this.radioValues = new Map();
        /** コンテキストメニュー用カーソル座標 */
        this.contextX = 0;
        this.contextY = 0;
        /** コンテキストメニューモード（右クリックで開いた） */
        this.isContextMenu = false;
        this.handleOutsideClick = (e) => {
            if (!this.isOpen || !this.rootEl)
                return;
            // Shadow DOM 内クリック時は e.target がリターゲティングされるため composedPath() で判定
            if (!e.composedPath().includes(this.rootEl)) {
                this.setOpen(false);
            }
        };
    }
    oninit(vnode) {
        this.isOpen = vnode.attrs.open ?? vnode.attrs.defaultOpen ?? false;
    }
    onbeforeupdate(vnode, old) {
        if (vnode.attrs.open !== undefined && vnode.attrs.open !== old.attrs.open) {
            this.isOpen = vnode.attrs.open;
        }
    }
    oncreate(vnode) {
        this.rootEl = vnode.dom;
        document.addEventListener("mousedown", this.handleOutsideClick);
    }
    onremove() {
        document.removeEventListener("mousedown", this.handleOutsideClick);
        this.rootEl = null;
    }
    setOpen(open, attrs) {
        if (this.isOpen === open)
            return;
        this.isOpen = open;
        if (!open)
            this.isContextMenu = false;
        (attrs ?? {}).onOpenChange?.({ open });
        m.redraw();
    }
    toggleOpen(attrs) {
        this.setOpen(!this.isOpen, attrs);
    }
    selectItem(value, attrs, closeOnSelect) {
        if (value) {
            attrs.onSelect?.({ value });
        }
        if (closeOnSelect) {
            this.setOpen(false, attrs);
        }
    }
    // --- 再帰描画 ---
    renderChildren(children, attrs) {
        if (!Array.isArray(children)) {
            if (children && typeof children === "object" && "tag" in children) {
                return this.renderChild(children, attrs);
            }
            return children;
        }
        return children.map(child => {
            if (!child || typeof child !== "object" || !("tag" in child))
                return child;
            return this.renderChild(child, attrs);
        });
    }
    renderChild(child, attrs) {
        const tag = child.tag;
        if (!tag || !tag.__mnRole) {
            // HTMLタグ（string）の場合のみ子要素を再帰処理する
            // コンポーネント（class/function）の場合は内部マーカーを処理しないよう そのまま返す
            if (typeof tag === "string" && child.children) {
                return {
                    ...child,
                    children: this.renderChildren(child.children, attrs),
                };
            }
            return child;
        }
        const role = tag.__mnRole;
        const ca = (child.attrs ?? {});
        const cc = child.children;
        switch (role) {
            case "trigger":
                return (m("button", { type: "button", class: `${styles.trigger} ${ca.class ?? ""}`, style: ca.style, "data-part": "trigger", onclick: () => this.toggleOpen(attrs), "aria-expanded": this.isOpen, "aria-haspopup": "menu" }, cc));
            case "positioner": {
                if (!this.isOpen)
                    return null;
                const isEnd = !this.isContextMenu && attrs.positioning === "end";
                const isRight = !this.isContextMenu && attrs.positioning === "right";
                const posStyle = this.isContextMenu
                    ? { position: "fixed", top: `${this.contextY}px`, left: `${this.contextX}px`, paddingTop: "0" }
                    : undefined;
                return (m("div", { class: [
                        styles.positioner,
                        isEnd ? styles.positionerEnd : "",
                        isRight ? styles.positionerRight : "",
                        ca.class ?? "",
                    ].filter(Boolean).join(" "), style: posStyle, "data-part": "positioner" }, this.renderChildren(cc, attrs)));
            }
            case "content":
                return (m("div", { class: `${styles.content} ${ca.class ?? ""}`, "data-part": "content", role: "menu" }, this.renderChildren(cc, attrs)));
            case "arrow":
                return m("div", { class: `${styles.arrow} ${ca.class ?? ""}`, "data-part": "arrow" });
            case "item": {
                const disabled = ca.disabled ?? false;
                const destructive = ca.destructive ?? false;
                const closeOnSel = ca.closeOnSelect !== false;
                const cls = [
                    styles.item,
                    destructive ? styles.itemDestructive : "",
                    disabled ? styles.itemDisabled : "",
                    ca.class ?? "",
                ].filter(Boolean).join(" ");
                return (m("button", { type: "button", class: cls, "data-part": "item", "data-value": ca.value, role: "menuitem", disabled: disabled, onclick: () => { if (!disabled)
                        this.selectItem(ca.value, attrs, closeOnSel); } }, cc));
            }
            case "itemGroup": {
                const label = ca.label;
                return (m("div", { class: `${styles.itemGroup} ${ca.class ?? ""}`, "data-part": "item-group", role: "group" },
                    label && m("div", { class: styles.itemGroupLabel }, label),
                    this.renderChildren(cc, attrs)));
            }
            case "separator":
                return m("div", { class: `${styles.separator} ${ca.class ?? ""}`, "data-part": "separator", role: "separator" });
            case "checkboxItem": {
                const checked = ca.checked ?? false;
                const disabled = ca.disabled ?? false;
                const cls = [
                    styles.checkboxItem,
                    disabled ? styles.itemDisabled : "",
                    ca.class ?? "",
                ].filter(Boolean).join(" ");
                return (m("button", { type: "button", class: cls, "data-part": "checkbox-item", role: "menuitemcheckbox", "aria-checked": checked, disabled: disabled, onclick: () => {
                        if (!disabled) {
                            ca.onCheckedChange?.(!checked);
                        }
                    } },
                    checked && m("span", { class: styles.itemIndicator }, "\u2713"),
                    cc));
            }
            case "radioItemGroup": {
                // RadioItemGroup: 子の RadioItem に現在値を渡す
                const groupId = ca.value ?? "";
                return (m("div", { class: `${styles.itemGroup} ${ca.class ?? ""}`, "data-part": "radio-item-group", role: "radiogroup" }, this.renderRadioItems(cc, attrs, ca)));
            }
            case "radioItem": {
                // ここには直接到達しない (radioItemGroup 内で処理)
                return child;
            }
            case "contextTrigger":
                return (m("div", { class: `${styles.contextTrigger} ${ca.class ?? ""}`, style: ca.style, "data-part": "context-trigger", oncontextmenu: (e) => {
                        e.preventDefault();
                        this.contextX = e.clientX;
                        this.contextY = e.clientY;
                        this.isContextMenu = true;
                        if (!this.isOpen) {
                            this.setOpen(true, attrs);
                        }
                    } }, cc));
            default:
                return child;
        }
    }
    /** RadioItemGroup 内の RadioItem を描画 */
    renderRadioItems(children, attrs, groupAttrs) {
        if (!Array.isArray(children))
            return children;
        return children.map(child => {
            if (!child || typeof child !== "object" || !("tag" in child))
                return child;
            const tag = child.tag;
            if (tag?.__mnRole === "radioItem") {
                const ca = (child.attrs ?? {});
                const cc = child.children;
                const checked = groupAttrs.value === ca.value;
                const disabled = ca.disabled ?? false;
                const cls = [
                    styles.radioItem,
                    disabled ? styles.itemDisabled : "",
                    ca.class ?? "",
                ].filter(Boolean).join(" ");
                return (m("button", { type: "button", class: cls, "data-part": "radio-item", role: "menuitemradio", "aria-checked": checked, disabled: disabled, onclick: () => {
                        if (!disabled) {
                            groupAttrs.onValueChange?.(ca.value);
                            this.setOpen(false, attrs);
                        }
                    } },
                    checked && m("span", { class: styles.itemIndicator }, "\u25CF"),
                    cc));
            }
            return child;
        });
    }
    // --- view() ---
    view(vnode) {
        const attrs = vnode.attrs;
        const size = attrs.size ?? "md";
        const sizeClass = size === "sm" ? styles.sizeSm : size === "lg" ? styles.sizeLg : "";
        const rootClass = [styles.root, sizeClass, attrs.class ?? ""].filter(Boolean).join(" ");
        return (m("div", { class: rootClass, "data-part": "root", style: attrs.style }, this.renderChildren(vnode.children, attrs)));
    }
}
// ============================================================
// namespace export
// ============================================================
/**
 * Menu — Chakra UI 風の compound component Menu。
 *
 * @example
 * ```tsx
 * <Menu.Root onSelect={(d) => console.log(d.value)}>
 *   <Menu.Trigger>Actions ▾</Menu.Trigger>
 *   <Menu.Positioner>
 *     <Menu.Content>
 *       <Menu.Item value="edit">Edit</Menu.Item>
 *       <Menu.Item value="delete" destructive>Delete</Menu.Item>
 *     </Menu.Content>
 *   </Menu.Positioner>
 * </Menu.Root>
 * ```
 */
export const Dropdown = {
    Root: DropdownRoot,
    Trigger: MnTriggerMarker,
    Positioner: MnPositionerMarker,
    Content: MnContentMarker,
    Arrow: MnArrowMarker,
    Item: MnItemMarker,
    ItemGroup: MnItemGroupMarker,
    Separator: MnSeparatorMarker,
    CheckboxItem: MnCheckboxItemMarker,
    RadioItemGroup: MnRadioItemGroupMarker,
    RadioItem: MnRadioItemMarker,
    ContextTrigger: MnContextTriggerMarker,
};
