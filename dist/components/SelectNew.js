/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./SelectNew.module.scss";
/* ─── ユーティリティ ─── */
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
/** グローバル context 保持（Mithril にはReactのcontextがないため） */
let currentCtx = null;
/* ─── マーカークラス群 ─── */
class HiddenSelectMarker {
    view() { return null; }
}
HiddenSelectMarker.__selRole = "hidden-select";
class LabelMarker {
    view() { return null; }
}
LabelMarker.__selRole = "label";
class ControlMarker {
    view() { return null; }
}
ControlMarker.__selRole = "control";
class TriggerMarker {
    view() { return null; }
}
TriggerMarker.__selRole = "trigger";
class ValueTextMarker {
    view() { return null; }
}
ValueTextMarker.__selRole = "value-text";
class IndicatorGroupMarker {
    view() { return null; }
}
IndicatorGroupMarker.__selRole = "indicator-group";
class IndicatorMarker {
    view() { return null; }
}
IndicatorMarker.__selRole = "indicator";
class ClearTriggerMarker {
    view() { return null; }
}
ClearTriggerMarker.__selRole = "clear-trigger";
class PositionerMarker {
    view() { return null; }
}
PositionerMarker.__selRole = "positioner";
class ContentMarker {
    view() { return null; }
}
ContentMarker.__selRole = "content";
class ItemMarker {
    view() { return null; }
}
ItemMarker.__selRole = "item";
class ItemGroupMarker {
    view() { return null; }
}
ItemGroupMarker.__selRole = "item-group";
class ItemGroupLabelMarker {
    view() { return null; }
}
ItemGroupLabelMarker.__selRole = "item-group-label";
/* ─── Root コンポーネント ─── */
/**
 * Select Root コンポーネント — Chakra UI 風 compound component 型セレクト
 *
 * @example
 * ```tsx
 * const items = [
 *   { value: "react", label: "React" },
 *   { value: "vue", label: "Vue" },
 *   { value: "angular", label: "Angular" },
 * ];
 * <Select.Root items={items} value={["react"]} onValueChange={(d) => console.log(d.value)}>
 *   <Select.Label>フレームワーク</Select.Label>
 *   <Select.Control>
 *     <Select.Trigger>
 *       <Select.ValueText placeholder="選択してください" />
 *     </Select.Trigger>
 *     <Select.IndicatorGroup>
 *       <Select.ClearTrigger />
 *       <Select.Indicator />
 *     </Select.IndicatorGroup>
 *   </Select.Control>
 *   <Select.Positioner>
 *     <Select.Content>
 *       {items.map(item => <Select.Item key={item.value} item={item.value}>{item.label}</Select.Item>)}
 *     </Select.Content>
 *   </Select.Positioner>
 * </Select.Root>
 * ```
 */
class SelectNewRoot {
    constructor() {
        this.internalOpen = false;
        this.internalValue = [];
        this.highlightIndex = -1;
        this.handleDocClick = (e) => {
            const t = e.target;
            if (this.containerEl && t && this.containerEl.contains(t))
                return;
            if (this.internalOpen) {
                this.internalOpen = false;
                m.redraw();
            }
        };
    }
    oninit(vnode) {
        this.internalValue = vnode.attrs.value ?? vnode.attrs.defaultValue ?? [];
    }
    onbeforeupdate(vnode, old) {
        if (vnode.attrs.value !== undefined && vnode.attrs.value !== old.attrs.value) {
            this.internalValue = vnode.attrs.value;
        }
    }
    get isControlled() {
        return false; // open は常に内部管理（外部制御は onOpenChange で通知）
    }
    getOpen(attrs) {
        return attrs.open !== undefined ? attrs.open : this.internalOpen;
    }
    setOpen(attrs, open) {
        this.internalOpen = open;
        this.highlightIndex = open ? 0 : -1;
        attrs.onOpenChange?.({ open });
    }
    toggle(attrs) {
        if (attrs.disabled || attrs.readOnly)
            return;
        this.setOpen(attrs, !this.getOpen(attrs));
    }
    selectItem(attrs, val) {
        if (attrs.disabled || attrs.readOnly)
            return;
        const item = attrs.items.find(i => i.value === val);
        if (item?.disabled)
            return;
        let newVal;
        if (attrs.multiple) {
            const cur = [...this.internalValue];
            const idx = cur.indexOf(val);
            if (idx === -1) {
                cur.push(val);
            }
            else {
                cur.splice(idx, 1);
            }
            newVal = cur;
        }
        else {
            if (attrs.deselectable && this.internalValue.includes(val)) {
                newVal = [];
            }
            else {
                newVal = [val];
            }
            const shouldClose = attrs.closeOnSelect !== undefined ? attrs.closeOnSelect : true;
            if (shouldClose) {
                this.setOpen(attrs, false);
            }
        }
        if (attrs.value === undefined) {
            this.internalValue = newVal;
        }
        const selectedItems = newVal.map(v => attrs.items.find(i => i.value === v)).filter(Boolean);
        attrs.onValueChange?.({ value: newVal, items: selectedItems });
    }
    clearAll(attrs) {
        if (attrs.disabled || attrs.readOnly)
            return;
        const newVal = [];
        if (attrs.value === undefined) {
            this.internalValue = newVal;
        }
        attrs.onValueChange?.({ value: newVal, items: [] });
    }
    removeTag(attrs, val) {
        if (attrs.disabled || attrs.readOnly)
            return;
        const newVal = this.internalValue.filter(v => v !== val);
        if (attrs.value === undefined) {
            this.internalValue = newVal;
        }
        const selectedItems = newVal.map(v => attrs.items.find(i => i.value === v)).filter(Boolean);
        attrs.onValueChange?.({ value: newVal, items: selectedItems });
    }
    onKeyDown(attrs, e) {
        const isOpen = this.getOpen(attrs);
        if (!isOpen) {
            if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                this.setOpen(attrs, true);
            }
            return;
        }
        const visibleItems = this.getVisibleItems(attrs);
        const len = visibleItems.length;
        if (len === 0)
            return;
        if (e.key === "ArrowDown") {
            e.preventDefault();
            if (attrs.loopFocus) {
                this.highlightIndex = (this.highlightIndex + 1) % len;
            }
            else {
                this.highlightIndex = Math.min(this.highlightIndex + 1, len - 1);
            }
            // 無効項目をスキップ
            this.skipDisabled(visibleItems, 1, attrs.loopFocus);
        }
        else if (e.key === "ArrowUp") {
            e.preventDefault();
            if (attrs.loopFocus) {
                this.highlightIndex = (this.highlightIndex - 1 + len) % len;
            }
            else {
                this.highlightIndex = Math.max(this.highlightIndex - 1, 0);
            }
            this.skipDisabled(visibleItems, -1, attrs.loopFocus);
        }
        else if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            if (this.highlightIndex >= 0 && this.highlightIndex < len) {
                const item = visibleItems[this.highlightIndex];
                if (!item.disabled)
                    this.selectItem(attrs, item.value);
            }
        }
        else if (e.key === "Escape") {
            e.preventDefault();
            this.setOpen(attrs, false);
        }
        else if (e.key === "Home") {
            e.preventDefault();
            this.highlightIndex = 0;
            this.skipDisabled(visibleItems, 1, false);
        }
        else if (e.key === "End") {
            e.preventDefault();
            this.highlightIndex = len - 1;
            this.skipDisabled(visibleItems, -1, false);
        }
    }
    skipDisabled(items, dir, loop) {
        const len = items.length;
        let tries = 0;
        while (tries < len && items[this.highlightIndex]?.disabled) {
            if (loop) {
                this.highlightIndex = (this.highlightIndex + dir + len) % len;
            }
            else {
                this.highlightIndex = Math.max(0, Math.min(this.highlightIndex + dir, len - 1));
            }
            tries++;
        }
    }
    getVisibleItems(attrs) {
        return attrs.items;
    }
    /* ─── ツリー描画 ─── */
    view(vnode) {
        const attrs = vnode.attrs;
        const { items, variant = "outline", size = "md", disabled = false, readOnly = false, invalid = false, multiple = false, placeholder = "選択してください", name, class: className, positioning = "bottom", ...rest } = attrs;
        const isOpen = this.getOpen(attrs);
        const value = this.internalValue;
        // context をグローバルに設定（子コンポーネント描画中に参照される）
        const ctx = {
            items,
            value,
            multiple,
            disabled,
            readOnly,
            invalid,
            placeholder,
            isOpen,
            highlightIndex: this.highlightIndex,
            variant,
            size,
            toggle: () => this.toggle(attrs),
            selectItem: (val) => this.selectItem(attrs, val),
            clearAll: () => this.clearAll(attrs),
            removeTag: (val) => this.removeTag(attrs, val),
            setHighlight: (idx) => { this.highlightIndex = idx; },
            getSelectedItems: () => value.map(v => items.find(i => i.value === v)).filter(Boolean),
            getVisibleItems: () => this.getVisibleItems(attrs),
        };
        currentCtx = ctx;
        const children = vnode.children;
        const rendered = this.renderChildren(children, ctx, attrs);
        return (m("div", { ...filterDomAttrs(rest), class: classNames(styles.root, styles[`variant${capitalize(variant)}`], styles[`size${capitalize(size)}`], { [styles.disabled]: disabled }, { [styles.invalid]: invalid }, className), "data-select-root": "", onkeydown: (e) => this.onKeyDown(attrs, e), oncreate: (dom) => {
                this.containerEl = dom.dom;
                document.addEventListener("click", this.handleDocClick);
            }, onremove: () => {
                document.removeEventListener("click", this.handleDocClick);
                this.containerEl = undefined;
                currentCtx = null;
            } }, rendered));
    }
    renderChildren(children, ctx, attrs) {
        if (!children)
            return null;
        const arr = Array.isArray(children) ? children.flat(Infinity) : [children];
        const result = [];
        for (const child of arr) {
            if (!child || typeof child !== "object" || !("tag" in child)) {
                result.push(child);
                continue;
            }
            const cv = child;
            const tag = cv.tag;
            const role = tag?.__selRole;
            if (!role) {
                result.push(child);
                continue;
            }
            switch (role) {
                case "hidden-select":
                    result.push(this.renderHiddenSelect(cv, ctx, attrs));
                    break;
                case "label":
                    result.push(this.renderLabel(cv, ctx));
                    break;
                case "control":
                    result.push(this.renderControl(cv, ctx, attrs));
                    break;
                case "positioner":
                    result.push(this.renderPositioner(cv, ctx, attrs));
                    break;
                default:
                    result.push(child);
            }
        }
        return result;
    }
    renderHiddenSelect(_cv, ctx, attrs) {
        return (m("select", { name: attrs.name, multiple: ctx.multiple || undefined, required: attrs.required || undefined, disabled: ctx.disabled || undefined, style: "position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);border:0;padding:0", tabindex: -1, "aria-hidden": "true" },
            ctx.value.length === 0 && m("option", { value: "" }),
            ctx.value.map(v => m("option", { key: v, value: v, selected: true }, v))));
    }
    renderLabel(cv, ctx) {
        return (m("label", { ...(cv.attrs || {}), class: classNames(styles.label, cv.attrs?.class) }, cv.children));
    }
    renderControl(cv, ctx, attrs) {
        const controlChildren = cv.children;
        const rendered = this.renderControlChildren(controlChildren, ctx, attrs);
        return (m("div", { ...(cv.attrs || {}), class: classNames(styles.control, cv.attrs?.class) }, rendered));
    }
    renderControlChildren(children, ctx, attrs) {
        if (!children)
            return null;
        const arr = Array.isArray(children) ? children.flat(Infinity) : [children];
        const result = [];
        for (const child of arr) {
            if (!child || typeof child !== "object" || !("tag" in child)) {
                result.push(child);
                continue;
            }
            const cv = child;
            const tag = cv.tag;
            const role = tag?.__selRole;
            if (!role) {
                result.push(child);
                continue;
            }
            switch (role) {
                case "trigger":
                    result.push(this.renderTrigger(cv, ctx, attrs));
                    break;
                case "indicator-group":
                    result.push(this.renderIndicatorGroup(cv, ctx, attrs));
                    break;
                default:
                    result.push(child);
            }
        }
        return result;
    }
    renderTrigger(cv, ctx, attrs) {
        const triggerChildren = cv.children;
        const rendered = this.renderTriggerChildren(triggerChildren, ctx);
        const isMulti = ctx.multiple;
        const selectedItems = ctx.getSelectedItems();
        return (m("button", { type: "button", ...(cv.attrs || {}), class: classNames(styles.trigger, { [styles.triggerMultiple]: isMulti && selectedItems.length > 0 }, cv.attrs?.class), role: "combobox", "aria-haspopup": "listbox", "aria-expanded": ctx.isOpen, "aria-disabled": ctx.disabled || undefined, disabled: ctx.disabled || undefined, onclick: () => ctx.toggle() }, isMulti && selectedItems.length > 0 ? (m.fragment({}, [
            ...selectedItems.map(item => (m("span", { class: styles.tag, key: item.value },
                m("span", null, item.label),
                m("button", { type: "button", class: styles.tagClose, onclick: (e) => {
                        e.stopPropagation();
                        ctx.removeTag(item.value);
                    }, "aria-label": `${item.label} を削除` }, "\u00D7")))),
        ])) : (rendered)));
    }
    renderTriggerChildren(children, ctx) {
        if (!children)
            return null;
        const arr = Array.isArray(children) ? children.flat(Infinity) : [children];
        const result = [];
        for (const child of arr) {
            if (!child || typeof child !== "object" || !("tag" in child)) {
                result.push(child);
                continue;
            }
            const cv = child;
            const tag = cv.tag;
            if (tag?.__selRole === "value-text") {
                result.push(this.renderValueText(cv, ctx));
            }
            else if (tag?.__selRole === "indicator-group") {
                // IndicatorGroup inside trigger — render it too
                result.push(this.renderIndicatorGroupInline(cv, ctx));
            }
            else {
                result.push(child);
            }
        }
        return result;
    }
    renderValueText(cv, ctx) {
        const selectedItems = ctx.getSelectedItems();
        const phText = cv.attrs?.placeholder ?? ctx.placeholder;
        let displayText;
        if (selectedItems.length === 0) {
            displayText = phText;
        }
        else if (ctx.multiple) {
            displayText = selectedItems.map(i => i.label).join(", ");
        }
        else {
            displayText = selectedItems[0]?.label ?? phText;
        }
        const isEmpty = selectedItems.length === 0;
        return (m("span", { ...(cv.attrs || {}), class: classNames(styles.valueText, { [styles.placeholder]: isEmpty }, cv.attrs?.class) }, cv.children && cv.children.length > 0 ? cv.children : displayText));
    }
    renderIndicatorGroup(cv, ctx, attrs) {
        const igChildren = cv.children;
        const rendered = this.renderIndicatorGroupChildren(igChildren, ctx, attrs);
        return (m("div", { ...(cv.attrs || {}), class: classNames(styles.indicatorGroup, cv.attrs?.class) }, rendered));
    }
    renderIndicatorGroupInline(cv, ctx) {
        const igChildren = cv.children;
        const arr = Array.isArray(igChildren) ? igChildren.flat(Infinity) : [igChildren];
        const result = [];
        for (const child of arr) {
            if (!child || typeof child !== "object" || !("tag" in child)) {
                result.push(child);
                continue;
            }
            const childVnode = child;
            const tag = childVnode.tag;
            if (tag?.__selRole === "indicator") {
                result.push(this.renderIndicator(childVnode, ctx));
            }
            else if (tag?.__selRole === "clear-trigger") {
                result.push(this.renderClearTrigger(childVnode, ctx));
            }
            else {
                result.push(child);
            }
        }
        return (m("div", { class: styles.indicatorGroup }, result));
    }
    renderIndicatorGroupChildren(children, ctx, _attrs) {
        if (!children)
            return null;
        const arr = Array.isArray(children) ? children.flat(Infinity) : [children];
        const result = [];
        for (const child of arr) {
            if (!child || typeof child !== "object" || !("tag" in child)) {
                result.push(child);
                continue;
            }
            const cv = child;
            const tag = cv.tag;
            if (tag?.__selRole === "indicator") {
                result.push(this.renderIndicator(cv, ctx));
            }
            else if (tag?.__selRole === "clear-trigger") {
                result.push(this.renderClearTrigger(cv, ctx));
            }
            else {
                result.push(child);
            }
        }
        return result;
    }
    renderIndicator(cv, ctx) {
        return (m("span", { ...(cv.attrs || {}), class: classNames(styles.indicator, { [styles.indicatorOpen]: ctx.isOpen }, cv.attrs?.class), "aria-hidden": "true" }, cv.children && cv.children.length > 0 ? cv.children : (m("svg", { viewBox: "0 0 16 16", fill: "currentColor" },
            m("path", { d: "M4.47 5.47a.75.75 0 0 1 1.06 0L8 7.94l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 0-1.06z" })))));
    }
    renderClearTrigger(cv, ctx) {
        if (ctx.value.length === 0 || ctx.disabled || ctx.readOnly)
            return null;
        return (m("button", { type: "button", ...(cv.attrs || {}), class: classNames(styles.clearTrigger, cv.attrs?.class), onclick: (e) => {
                e.stopPropagation();
                ctx.clearAll();
            }, "aria-label": "\u9078\u629E\u3092\u30AF\u30EA\u30A2" }, cv.children && cv.children.length > 0 ? cv.children : "×"));
    }
    renderPositioner(cv, ctx, attrs) {
        if (!ctx.isOpen)
            return null;
        const pos = attrs.positioning ?? "bottom";
        const posChildren = cv.children;
        const rendered = this.renderPositionerChildren(posChildren, ctx, attrs);
        return (m("div", { ...(cv.attrs || {}), class: classNames(styles.positioner, pos === "top" ? styles.positionerTop : styles.positionerBottom, cv.attrs?.class) }, rendered));
    }
    renderPositionerChildren(children, ctx, attrs) {
        if (!children)
            return null;
        const arr = Array.isArray(children) ? children.flat(Infinity) : [children];
        const result = [];
        for (const child of arr) {
            if (!child || typeof child !== "object" || !("tag" in child)) {
                result.push(child);
                continue;
            }
            const cv = child;
            const tag = cv.tag;
            if (tag?.__selRole === "content") {
                result.push(this.renderContent(cv, ctx, attrs));
            }
            else {
                result.push(child);
            }
        }
        return result;
    }
    renderContent(cv, ctx, attrs) {
        const contentChildren = cv.children;
        const rendered = this.renderContentChildren(contentChildren, ctx, attrs);
        return (m("div", { ...(cv.attrs || {}), role: "listbox", "aria-multiselectable": ctx.multiple || undefined, class: classNames(styles.content, cv.attrs?.class) }, rendered));
    }
    renderContentChildren(children, ctx, attrs) {
        if (!children)
            return null;
        const arr = Array.isArray(children) ? children.flat(Infinity) : [children];
        const result = [];
        for (const child of arr) {
            if (!child || typeof child !== "object" || !("tag" in child)) {
                result.push(child);
                continue;
            }
            const cv = child;
            const tag = cv.tag;
            if (tag?.__selRole === "item") {
                result.push(this.renderItem(cv, ctx));
            }
            else if (tag?.__selRole === "item-group") {
                result.push(this.renderItemGroup(cv, ctx));
            }
            else {
                result.push(child);
            }
        }
        if (result.length === 0) {
            result.push(m("div", { class: styles.noItems }, "\u8A72\u5F53\u3059\u308B\u9805\u76EE\u304C\u3042\u308A\u307E\u305B\u3093"));
        }
        return result;
    }
    renderItem(cv, ctx) {
        const itemVal = cv.attrs?.item;
        if (!itemVal)
            return null;
        const itemObj = ctx.items.find(i => i.value === itemVal);
        const isSelected = ctx.value.includes(itemVal);
        const isDisabled = cv.attrs?.disabled || itemObj?.disabled;
        const visibleItems = ctx.getVisibleItems();
        const flatIdx = visibleItems.findIndex(i => i.value === itemVal);
        const isHighlighted = flatIdx === ctx.highlightIndex;
        return (m("div", { ...filterDomAttrs(cv.attrs || {}), role: "option", "aria-selected": isSelected, "aria-disabled": isDisabled || undefined, "data-value": itemVal, class: classNames(styles.item, { [styles.itemSelected]: isSelected }, { [styles.itemHighlighted]: isHighlighted }, { [styles.itemDisabled]: isDisabled }, cv.attrs?.class), onclick: () => {
                if (!isDisabled)
                    ctx.selectItem(itemVal);
            }, onmousemove: () => {
                if (!isDisabled)
                    ctx.setHighlight(flatIdx);
            } },
            ctx.multiple && (m("span", { class: styles.itemIndicator }, isSelected ? "✓" : "")),
            m("span", { class: styles.itemText }, cv.children && cv.children.length > 0 ? cv.children : itemObj?.label ?? itemVal),
            !ctx.multiple && isSelected && (m("span", { class: styles.itemIndicator }, "\u2713"))));
    }
    renderItemGroup(cv, ctx) {
        const groupChildren = cv.children;
        const rendered = this.renderItemGroupChildren(groupChildren, ctx);
        return (m("div", { ...(cv.attrs || {}), class: classNames(styles.itemGroup, cv.attrs?.class), role: "group" }, rendered));
    }
    renderItemGroupChildren(children, ctx) {
        if (!children)
            return null;
        const arr = Array.isArray(children) ? children.flat(Infinity) : [children];
        const result = [];
        for (const child of arr) {
            if (!child || typeof child !== "object" || !("tag" in child)) {
                result.push(child);
                continue;
            }
            const cv = child;
            const tag = cv.tag;
            if (tag?.__selRole === "item") {
                result.push(this.renderItem(cv, ctx));
            }
            else if (tag?.__selRole === "item-group-label") {
                result.push(m("div", { class: classNames(styles.itemGroupLabel, cv.attrs?.class) }, cv.children));
            }
            else {
                result.push(child);
            }
        }
        return result;
    }
}
/* ─── DOM attrs フィルタ ─── */
function filterDomAttrs(attrs) {
    const skip = new Set([
        "items", "value", "defaultValue", "onValueChange", "multiple",
        "disabled", "readOnly", "required", "invalid", "variant", "size",
        "placeholder", "closeOnSelect", "deselectable", "loopFocus",
        "open", "onOpenChange", "name", "positioning", "item",
    ]);
    const out = {};
    for (const k of Object.keys(attrs)) {
        if (!skip.has(k))
            out[k] = attrs[k];
    }
    return out;
}
/* ─── 名前空間エクスポート ─── */
/**
 * Select compound component 名前空間
 *
 * Chakra UI 風のコンポジション API で利用する:
 * - `Select.Root` — ルートコンテナ
 * - `Select.HiddenSelect` — ネイティブ hidden select（フォーム送信用）
 * - `Select.Label` — ラベル
 * - `Select.Control` — コントロール（Trigger + IndicatorGroup のラッパ）
 * - `Select.Trigger` — 開閉トリガー
 * - `Select.ValueText` — 選択値テキスト
 * - `Select.IndicatorGroup` — インジケータグループ
 * - `Select.Indicator` — 開閉インジケータ矢印
 * - `Select.ClearTrigger` — クリアボタン
 * - `Select.Positioner` — ドロップダウン配置
 * - `Select.Content` — ドロップダウンコンテンツ
 * - `Select.Item` — 個別選択肢
 * - `Select.ItemGroup` — 選択肢グループ
 * - `Select.ItemGroupLabel` — グループラベル
 */
export const SelectNew = {
    Root: SelectNewRoot,
    HiddenSelect: HiddenSelectMarker,
    Label: LabelMarker,
    Control: ControlMarker,
    Trigger: TriggerMarker,
    ValueText: ValueTextMarker,
    IndicatorGroup: IndicatorGroupMarker,
    Indicator: IndicatorMarker,
    ClearTrigger: ClearTriggerMarker,
    Positioner: PositionerMarker,
    Content: ContentMarker,
    Item: ItemMarker,
    ItemGroup: ItemGroupMarker,
    ItemGroupLabel: ItemGroupLabelMarker,
};
export { SelectNewRoot };
