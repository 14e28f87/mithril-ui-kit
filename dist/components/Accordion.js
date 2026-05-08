/** @jsx m */
/**
 * @fileoverview
 * Accordion — Chakra UI 現行 API 準拠の compound component 型アコーディオン
 *
 * Chakra UI の `Accordion.Root` / `Accordion.Item` 系の命名規則に合わせた
 * Mithril.js 用アコーディオンコンポーネント。
 *
 * 使い方:
 * ```tsx
 * <Accordion.Root collapsible variant="enclosed">
 *   <Accordion.Item value="item-1">
 *     <Accordion.ItemTrigger>
 *       見出し
 *       <Accordion.ItemIndicator />
 *     </Accordion.ItemTrigger>
 *     <Accordion.ItemContent>
 *       <Accordion.ItemBody>本文</Accordion.ItemBody>
 *     </Accordion.ItemContent>
 *   </Accordion.Item>
 * </Accordion.Root>
 * ```
 *
 * @module Accordion
 */
/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Accordion.module.scss";
/** vnode.children を平坦な配列に展開する（null/undefined/boolean を除去） */
function toChildArray(children) {
    if (Array.isArray(children)) {
        return children.flatMap((child) => toChildArray(child));
    }
    if (children === null || children === undefined || typeof children === "boolean") {
        return [];
    }
    return [children];
}
/** 値が vnode 的な構造かどうかを判定する */
function isVnodeLike(value) {
    return !!value && typeof value === "object" && "tag" in value;
}
/** vnode の tag から Accordion サブコンポーネントのロールを取得する */
function getAccordionRole(value) {
    if (!isVnodeLike(value)) {
        return undefined;
    }
    const tag = value.tag;
    return tag?.__accordionRole;
}
/** value を ID 安全な文字列に変換する（英数字・ハイフン・アンダースコア以外を除去） */
function sanitizeValue(value) {
    return String(value).replace(/[^a-zA-Z0-9_-]+/g, "-");
}
/** 先頭を大文字にする（CSS クラス名の生成用） */
function capitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}
/**
 * @class AccordionItem
 * @description
 * アコーディオンの各項目を表すマーカーコンポーネント。
 * 実際の描画は `AccordionRoot.view()` が担うため、このクラスの view はフォールバック用。
 * `__accordionRole = "item"` で役割を識別させている。
 */
export class AccordionItem {
    view(vnode) {
        return m("div", { class: vnode.attrs.class, style: vnode.attrs.style }, vnode.children);
    }
}
AccordionItem.__accordionRole = "item";
/**
 * @class AccordionItemTrigger
 * @description 開閉トリガーボタンのマーカー。実際の描画は Root が担う。
 */
export class AccordionItemTrigger {
    view(vnode) {
        return m("button", { type: "button", class: vnode.attrs.class, style: vnode.attrs.style }, vnode.children);
    }
}
AccordionItemTrigger.__accordionRole = "item-trigger";
/**
 * @class AccordionItemContent
 * @description コンテンツ領域のマーカー。lazyMount / unmountOnExit の制御は Root が行う。
 */
export class AccordionItemContent {
    view(vnode) {
        return m("div", { class: vnode.attrs.class, style: vnode.attrs.style }, vnode.children);
    }
}
AccordionItemContent.__accordionRole = "item-content";
/**
 * @class AccordionItemBody
 * @description コンテンツ内の本文領域マーカー。省略しても Root 側で自動ラップされる。
 */
export class AccordionItemBody {
    view(vnode) {
        return m("div", { class: vnode.attrs.class, style: vnode.attrs.style }, vnode.children);
    }
}
AccordionItemBody.__accordionRole = "item-body";
/**
 * @class AccordionItemIndicator
 * @description 開閉状態を示すインジケーターのマーカー。デフォルトはシェブロン SVG。
 */
export class AccordionItemIndicator {
    view(vnode) {
        return m("span", { class: vnode.attrs.class, style: vnode.attrs.style }, vnode.children);
    }
}
AccordionItemIndicator.__accordionRole = "item-indicator";
/**
 * @class AccordionRoot
 * @description
 * Accordion のルートコンポーネント。
 * 子の `Accordion.Item` を収集・解析し、展開状態管理・キーボードナビゲーション・
 * ARIA 属性付与など主要ロジックを担う。
 *
 * 主な機能:
 * - 単一/複数展開モード (`multiple`)
 * - 全閉じ許可 (`collapsible`)
 * - 制御/非制御両対応 (`value` vs `defaultValue`)
 * - バリアント・サイズ・方向のカスタマイズ
 * - lazyMount / unmountOnExit によるパフォーマンス最適化
 * - ArrowUp/Down, Home/End, Enter/Space によるキーボード操作
 *
 * @example
 * <Accordion.Root collapsible variant="enclosed" size="md">
 *   <Accordion.Item value="section-1">
 *     <Accordion.ItemTrigger>
 *       セクション 1
 *       <Accordion.ItemIndicator />
 *     </Accordion.ItemTrigger>
 *     <Accordion.ItemContent>
 *       <Accordion.ItemBody>本文をここに書く</Accordion.ItemBody>
 *     </Accordion.ItemContent>
 *   </Accordion.Item>
 * </Accordion.Root>
 */
export class AccordionRoot {
    constructor() {
        this.openValues = new Set();
        this.mountedValues = new Set();
        this.buttonRefs = new Map();
        this.uid = `muk-accordion-${AccordionRoot.seed++}`;
    }
    oninit(vnode) {
        const initial = this.resolveOpenValues(vnode.attrs, true);
        this.openValues = initial;
        this.syncMounted(initial);
    }
    onbeforeupdate(vnode) {
        const next = this.resolveOpenValues(vnode.attrs, false);
        this.syncMounted(next);
        return true;
    }
    onremove() {
        this.buttonRefs.clear();
    }
    isMultiple(attrs) {
        return attrs.multiple ?? false;
    }
    isCollapsible(attrs) {
        return attrs.collapsible ?? false;
    }
    isControlled(attrs) {
        return attrs.value !== undefined;
    }
    normalizeValues(raw, multiple) {
        const list = Array.isArray(raw) ? raw : raw === null || raw === undefined ? [] : [raw];
        const normalized = Array.from(new Set(list.filter((value) => value !== null && value !== undefined)));
        return multiple ? normalized : normalized.slice(0, 1);
    }
    resolveOpenValues(attrs, preferDefault) {
        const multiple = this.isMultiple(attrs);
        if (this.isControlled(attrs)) {
            return new Set(this.normalizeValues(attrs.value, multiple));
        }
        if (preferDefault) {
            return new Set(this.normalizeValues(attrs.defaultValue, multiple));
        }
        return new Set(this.openValues);
    }
    syncMounted(values) {
        values.forEach((value) => this.mountedValues.add(value));
    }
    getRootId(attrs) {
        return attrs.ids?.root ?? attrs.id ?? this.uid;
    }
    getTriggerId(attrs, value) {
        return attrs.ids?.itemTrigger?.(value) ?? `${this.getRootId(attrs)}-trigger-${sanitizeValue(value)}`;
    }
    getContentId(attrs, value) {
        return attrs.ids?.itemContent?.(value) ?? `${this.getRootId(attrs)}-content-${sanitizeValue(value)}`;
    }
    getItemId(attrs, value) {
        return attrs.ids?.item?.(value) ?? `${this.getRootId(attrs)}-item-${sanitizeValue(value)}`;
    }
    collectItems(vnode) {
        const rootDisabled = !!vnode.attrs.disabled;
        return toChildArray(vnode.children)
            .filter((child) => getAccordionRole(child) === "item")
            .map((child, index) => {
            const itemVNode = child;
            const value = itemVNode.attrs.value ?? index;
            const nestedChildren = toChildArray(itemVNode.children);
            const triggerVNode = nestedChildren.find((node) => getAccordionRole(node) === "item-trigger");
            const contentVNode = nestedChildren.find((node) => getAccordionRole(node) === "item-content");
            return {
                index,
                value,
                disabled: rootDisabled || !!itemVNode.attrs.disabled,
                className: itemVNode.attrs.class,
                style: itemVNode.attrs.style,
                triggerVNode,
                contentVNode,
            };
        });
    }
    emitChanges(attrs, items, next) {
        const values = Array.from(next);
        const indices = items.filter((item) => next.has(item.value)).map((item) => item.index);
        attrs.onValueChange?.({ value: values, indices });
    }
    toggle(vnode, items, target) {
        if (target.disabled) {
            return;
        }
        const attrs = vnode.attrs;
        const current = this.resolveOpenValues(attrs, false);
        const next = new Set(current);
        const multiple = this.isMultiple(attrs);
        const collapsible = this.isCollapsible(attrs);
        if (multiple) {
            if (next.has(target.value)) {
                next.delete(target.value);
            }
            else {
                next.add(target.value);
            }
        }
        else if (next.has(target.value)) {
            if (!collapsible) {
                return;
            }
            next.clear();
        }
        else {
            next.clear();
            next.add(target.value);
        }
        this.syncMounted(next);
        if (!this.isControlled(attrs)) {
            this.openValues = next;
        }
        this.emitChanges(attrs, items, next);
        if (!this.isControlled(attrs)) {
            m.redraw();
        }
    }
    moveFocus(items, current, delta) {
        const enabledItems = items.filter((item) => !item.disabled);
        if (enabledItems.length === 0) {
            return;
        }
        const currentIndex = Math.max(0, enabledItems.findIndex((item) => item.value === current.value));
        const nextIndex = (currentIndex + delta + enabledItems.length) % enabledItems.length;
        this.buttonRefs.get(enabledItems[nextIndex].value)?.focus();
    }
    focusEdge(items, position) {
        const enabledItems = items.filter((item) => !item.disabled);
        if (enabledItems.length === 0) {
            return;
        }
        const target = position === "first" ? enabledItems[0] : enabledItems[enabledItems.length - 1];
        this.buttonRefs.get(target.value)?.focus();
    }
    handleTriggerKeydown(vnode, items, item, event) {
        const orientation = vnode.attrs.orientation ?? "vertical";
        if (event.key === "Home") {
            event.preventDefault();
            this.focusEdge(items, "first");
            return;
        }
        if (event.key === "End") {
            event.preventDefault();
            this.focusEdge(items, "last");
            return;
        }
        if ((orientation === "vertical" && event.key === "ArrowDown") || (orientation === "horizontal" && event.key === "ArrowRight")) {
            event.preventDefault();
            this.moveFocus(items, item, 1);
            return;
        }
        if ((orientation === "vertical" && event.key === "ArrowUp") || (orientation === "horizontal" && event.key === "ArrowLeft")) {
            event.preventDefault();
            this.moveFocus(items, item, -1);
            return;
        }
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            this.toggle(vnode, items, item);
        }
    }
    shouldRenderContent(attrs, open, value) {
        if (open) {
            this.mountedValues.add(value);
            return true;
        }
        if (attrs.unmountOnExit) {
            return false;
        }
        if (attrs.lazyMount) {
            return this.mountedValues.has(value);
        }
        return true;
    }
    renderIndicator(indicatorVNode, open) {
        const customChildren = indicatorVNode ? toChildArray(indicatorVNode.children) : [];
        return (m("span", { class: classNames(styles.itemIndicator, indicatorVNode?.attrs.class, {
                [styles.itemIndicatorOpen]: open,
            }), style: indicatorVNode?.attrs.style, "data-part": "item-indicator", "aria-hidden": "true" }, customChildren.length ? (customChildren) : (m("svg", { viewBox: "0 0 20 20", fill: "currentColor", focusable: "false", "aria-hidden": "true" },
            m("path", { d: "M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.12l3.71-3.89a.75.75 0 1 1 1.08 1.04l-4.25 4.46a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06Z" })))));
    }
    renderContentBody(contentVNode) {
        if (!contentVNode) {
            return null;
        }
        const children = toChildArray(contentVNode.children);
        const hasBodyNode = children.some((child) => getAccordionRole(child) === "item-body");
        if (!hasBodyNode) {
            return m("div", { class: styles.itemBody }, contentVNode.children);
        }
        return children.map((child, index) => {
            if (getAccordionRole(child) !== "item-body") {
                return isVnodeLike(child) ? { ...child, key: `${index}` } : child;
            }
            const bodyVNode = child;
            return (m("div", { key: `${index}`, class: classNames(styles.itemBody, bodyVNode.attrs.class), style: bodyVNode.attrs.style, "data-part": "item-body" }, bodyVNode.children));
        });
    }
    view(vnode) {
        const attrs = vnode.attrs;
        const items = this.collectItems(vnode);
        const openValues = this.resolveOpenValues(attrs, false);
        const variant = attrs.variant ?? "outline";
        const size = attrs.size ?? "md";
        const orientation = attrs.orientation ?? "vertical";
        return (m("div", { id: this.getRootId(attrs), class: classNames(styles.root, styles[`variant${capitalize(variant)}`], styles[`size${capitalize(size)}`], {
                [styles.orientationHorizontal]: orientation === "horizontal",
            }, attrs.class), style: attrs.style, "data-scope": "accordion", "data-part": "root", "data-orientation": orientation }, items.map((item) => {
            const open = openValues.has(item.value);
            const contentId = this.getContentId(attrs, item.value);
            const triggerId = this.getTriggerId(attrs, item.value);
            const triggerChildren = toChildArray(item.triggerVNode?.children);
            const indicatorVNode = triggerChildren.find((child) => getAccordionRole(child) === "item-indicator");
            const labelChildren = triggerChildren.filter((child) => getAccordionRole(child) !== "item-indicator");
            const shouldRenderContent = this.shouldRenderContent(attrs, open, item.value);
            return (m("div", { key: String(item.value), id: this.getItemId(attrs, item.value), class: classNames(styles.item, item.className, {
                    [styles.itemOpen]: open,
                    [styles.itemDisabled]: item.disabled,
                }), style: item.style, "data-part": "item", "data-state": open ? "open" : "closed" },
                m("h3", { class: styles.itemHeading },
                    m("button", { id: triggerId, type: "button", class: classNames(styles.itemTrigger, item.triggerVNode?.attrs.class), style: item.triggerVNode?.attrs.style, "data-part": "item-trigger", "data-state": open ? "open" : "closed", "aria-expanded": open ? "true" : "false", "aria-controls": contentId, disabled: item.disabled, onclick: () => this.toggle(vnode, items, item), onkeydown: (event) => this.handleTriggerKeydown(vnode, items, item, event), onfocus: () => attrs.onFocusChange?.({ value: item.value, index: item.index }), oncreate: ({ dom }) => {
                            this.buttonRefs.set(item.value, dom);
                        }, onupdate: ({ dom }) => {
                            this.buttonRefs.set(item.value, dom);
                        }, onremove: () => {
                            this.buttonRefs.delete(item.value);
                        } },
                        m("span", { class: styles.itemTriggerLabel }, labelChildren.length ? labelChildren : `Item ${item.index + 1}`),
                        this.renderIndicator(indicatorVNode, open))),
                shouldRenderContent ? (m("div", { id: contentId, class: classNames(styles.itemContent, item.contentVNode?.attrs.class, {
                        [styles.itemContentClosed]: !open,
                    }), style: item.contentVNode?.attrs.style, "data-part": "item-content", "data-state": open ? "open" : "closed", "aria-labelledby": triggerId, "aria-hidden": open ? "false" : "true" },
                    m("div", { class: styles.itemContentInner }, this.renderContentBody(item.contentVNode)))) : null));
        })));
    }
}
AccordionRoot.seed = 1;
/**
 * Accordion compound component のバンドル。
 * `Accordion.Root`, `Accordion.Item` などの形式で使う。
 *
 * @example
 * import { Accordion } from "mithril-ui-kit";
 *
 * <Accordion.Root collapsible>
 *   <Accordion.Item value="a">
 *     <Accordion.ItemTrigger>見出し<Accordion.ItemIndicator /></Accordion.ItemTrigger>
 *     <Accordion.ItemContent><Accordion.ItemBody>本文</Accordion.ItemBody></Accordion.ItemContent>
 *   </Accordion.Item>
 * </Accordion.Root>
 */
export const Accordion = {
    Root: AccordionRoot,
    Item: AccordionItem,
    ItemTrigger: AccordionItemTrigger,
    ItemContent: AccordionItemContent,
    ItemBody: AccordionItemBody,
    ItemIndicator: AccordionItemIndicator,
};
