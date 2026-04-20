/** @jsx m */
/**
 * @fileoverview
 * Tabs — Chakra UI 現行 API 準拠の compound component 型タブ
 *
 * `Tabs.Root` / `Tabs.List` / `Tabs.Trigger` / `Tabs.Content` の形式で使う。
 *
 * @example
 * ```tsx
 * <Tabs.Root defaultValue="members" variant="line">
 *   <Tabs.List>
 *     <Tabs.Trigger value="members">メンバー</Tabs.Trigger>
 *     <Tabs.Trigger value="projects">プロジェクト</Tabs.Trigger>
 *   </Tabs.List>
 *   <Tabs.Content value="members">メンバー一覧</Tabs.Content>
 *   <Tabs.Content value="projects">プロジェクト一覧</Tabs.Content>
 * </Tabs.Root>
 * ```
 *
 * @module Tabs
 */
/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Tabs.module.scss";
/**
 * @class TabsList
 * @description タブリスト領域のマーカー。実際の描画は Root が担う。
 */
export class TabsList {
    view(vnode) {
        return m("div", null, vnode.children);
    }
}
TabsList.__tabsRole = "list";
/**
 * @class TabsTrigger
 * @description 個々のタブボタンのマーカー。
 */
export class TabsTrigger {
    view(vnode) {
        return m("button", { type: "button" }, vnode.children);
    }
}
TabsTrigger.__tabsRole = "trigger";
/**
 * @class TabsContent
 * @description タブ本文のマーカー。
 */
export class TabsContent {
    view(vnode) {
        return m("div", null, vnode.children);
    }
}
TabsContent.__tabsRole = "content";
/**
 * @class TabsIndicator
 * @description アクティブタブのインジケーター線のマーカー。
 */
export class TabsIndicator {
    view(vnode) {
        return m("div", null);
    }
}
TabsIndicator.__tabsRole = "indicator";
// --- ユーティリティ ---
function toChildArray(children) {
    if (Array.isArray(children))
        return children.flatMap(c => toChildArray(c));
    if (children === null || children === undefined || typeof children === "boolean")
        return [];
    return [children];
}
function isVnodeLike(v) {
    return !!v && typeof v === "object" && "tag" in v;
}
function getTabsRole(v) {
    if (!isVnodeLike(v))
        return undefined;
    return v.tag?.__tabsRole;
}
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
/**
 * @class TabsRoot
 * @description
 * Tabs のルートコンポーネント。
 * 子の Tabs.List / Tabs.Trigger / Tabs.Content を収集・解析し、
 * タブ切り替え・キーボードナビゲーション・ARIA 属性を管理する。
 *
 * 主な機能:
 * - variant (line / subtle / enclosed / outline / plain)
 * - size (sm / md / lg)
 * - 制御/非制御両対応
 * - lazyMount / unmountOnExit
 * - ArrowLeft/Right (horizontal) / ArrowUp/Down (vertical) + Home/End
 * - fitted（均等幅）
 *
 * @example
 * <Tabs.Root defaultValue="tab1" variant="enclosed" size="md">
 *   <Tabs.List>
 *     <Tabs.Trigger value="tab1">タブ 1</Tabs.Trigger>
 *     <Tabs.Trigger value="tab2">タブ 2</Tabs.Trigger>
 *   </Tabs.List>
 *   <Tabs.Content value="tab1">コンテンツ 1</Tabs.Content>
 *   <Tabs.Content value="tab2">コンテンツ 2</Tabs.Content>
 * </Tabs.Root>
 */
export class TabsRoot {
    constructor() {
        this.selectedValue = "";
        this.mountedValues = new Set();
        this.triggerRefs = new Map();
        this.uid = `muk-tabs-${TabsRoot.seed++}`;
    }
    oninit(vnode) {
        this.selectedValue = this.resolveValue(vnode.attrs, true);
    }
    onbeforeupdate(vnode) {
        const next = this.resolveValue(vnode.attrs, false);
        if (next)
            this.mountedValues.add(next);
        return true;
    }
    onremove() {
        this.triggerRefs.clear();
    }
    isControlled(attrs) {
        return attrs.value !== undefined;
    }
    resolveValue(attrs, preferDefault) {
        if (this.isControlled(attrs))
            return attrs.value;
        if (preferDefault && attrs.defaultValue !== undefined)
            return attrs.defaultValue;
        return this.selectedValue;
    }
    getRootId(attrs) {
        return attrs.id ?? this.uid;
    }
    collectTriggers(listVNode) {
        if (!listVNode)
            return [];
        return toChildArray(listVNode.children)
            .filter(c => getTabsRole(c) === "trigger")
            .map(c => {
            const v = c;
            return {
                value: v.attrs.value,
                disabled: !!v.attrs.disabled,
                className: v.attrs.class,
                style: v.attrs.style,
                children: v.children,
            };
        });
    }
    collectContents(children) {
        return children
            .filter(c => getTabsRole(c) === "content")
            .map(c => {
            const v = c;
            return {
                value: v.attrs.value,
                className: v.attrs.class,
                style: v.attrs.style,
                children: v.children,
            };
        });
    }
    select(attrs, value) {
        if (!this.isControlled(attrs)) {
            this.selectedValue = value;
        }
        this.mountedValues.add(value);
        attrs.onValueChange?.({ value });
        if (!this.isControlled(attrs))
            m.redraw();
    }
    moveFocus(triggers, current, delta, loop) {
        const enabled = triggers.filter(t => !t.disabled);
        if (!enabled.length)
            return;
        const idx = enabled.findIndex(t => t.value === current);
        let next = idx + delta;
        if (loop) {
            next = (next + enabled.length) % enabled.length;
        }
        else {
            next = Math.max(0, Math.min(next, enabled.length - 1));
        }
        const target = enabled[next];
        this.triggerRefs.get(target.value)?.focus();
    }
    focusEdge(triggers, position) {
        const enabled = triggers.filter(t => !t.disabled);
        if (!enabled.length)
            return;
        const target = position === "first" ? enabled[0] : enabled[enabled.length - 1];
        this.triggerRefs.get(target.value)?.focus();
    }
    handleKeydown(attrs, triggers, currentValue, event) {
        const orientation = attrs.orientation ?? "horizontal";
        const loop = attrs.loopFocus !== false;
        const mode = attrs.activationMode ?? "automatic";
        if (event.key === "Home") {
            event.preventDefault();
            this.focusEdge(triggers, "first");
            return;
        }
        if (event.key === "End") {
            event.preventDefault();
            this.focusEdge(triggers, "last");
            return;
        }
        const isNext = (orientation === "horizontal" && event.key === "ArrowRight") || (orientation === "vertical" && event.key === "ArrowDown");
        const isPrev = (orientation === "horizontal" && event.key === "ArrowLeft") || (orientation === "vertical" && event.key === "ArrowUp");
        if (isNext || isPrev) {
            event.preventDefault();
            this.moveFocus(triggers, currentValue, isNext ? 1 : -1, loop);
            return;
        }
        if (mode === "manual" && (event.key === "Enter" || event.key === " ")) {
            event.preventDefault();
            this.select(attrs, currentValue);
        }
    }
    shouldRender(attrs, active, value) {
        if (active) {
            this.mountedValues.add(value);
            return true;
        }
        if (attrs.unmountOnExit)
            return false;
        if (attrs.lazyMount)
            return this.mountedValues.has(value);
        return true;
    }
    view(vnode) {
        const attrs = vnode.attrs;
        const allChildren = toChildArray(vnode.children);
        const listVNode = allChildren.find(c => getTabsRole(c) === "list");
        const triggers = this.collectTriggers(listVNode);
        const contents = this.collectContents(allChildren);
        const selectedValue = this.resolveValue(attrs, false);
        const variant = attrs.variant ?? "line";
        const size = attrs.size ?? "md";
        const orientation = attrs.orientation ?? "horizontal";
        const mode = attrs.activationMode ?? "automatic";
        const rootId = this.getRootId(attrs);
        // 初期値が無い場合、最初の有効なトリガーを選択
        if (!selectedValue && triggers.length) {
            const first = triggers.find(t => !t.disabled);
            if (first) {
                this.selectedValue = first.value;
                this.mountedValues.add(first.value);
            }
        }
        const activeValue = this.resolveValue(attrs, false);
        return (m("div", { id: rootId, class: classNames(styles.root, styles[`variant${capitalize(variant)}`], styles[`size${capitalize(size)}`], { [styles.orientationVertical]: orientation === "vertical", [styles.fitted]: !!attrs.fitted }, attrs.class), style: attrs.style, "data-scope": "tabs", "data-part": "root", "data-orientation": orientation },
            m("div", { class: classNames(styles.list, listVNode?.attrs.class), style: listVNode?.attrs.style, role: "tablist", "aria-orientation": orientation, "data-part": "list" }, triggers.map(trigger => {
                const active = trigger.value === activeValue;
                return (m("button", { key: trigger.value, id: `${rootId}-trigger-${trigger.value}`, type: "button", role: "tab", class: classNames(styles.trigger, trigger.className, {
                        [styles.triggerActive]: active,
                        [styles.triggerDisabled]: trigger.disabled,
                    }), style: trigger.style, "data-part": "trigger", "data-state": active ? "active" : "inactive", "aria-selected": active ? "true" : "false", "aria-controls": `${rootId}-content-${trigger.value}`, tabindex: active ? 0 : -1, disabled: trigger.disabled, onclick: () => { if (!trigger.disabled)
                        this.select(attrs, trigger.value); }, onfocus: () => {
                        // automatic モードではフォーカスで即選択
                        if (mode === "automatic" && !trigger.disabled)
                            this.select(attrs, trigger.value);
                    }, onkeydown: (e) => this.handleKeydown(attrs, triggers, trigger.value, e), oncreate: ({ dom }) => { this.triggerRefs.set(trigger.value, dom); }, onupdate: ({ dom }) => { this.triggerRefs.set(trigger.value, dom); }, onremove: () => { this.triggerRefs.delete(trigger.value); } }, trigger.children));
            })),
            contents.map(content => {
                const active = content.value === activeValue;
                if (!this.shouldRender(attrs, active, content.value))
                    return null;
                return (m("div", { key: content.value, id: `${rootId}-content-${content.value}`, class: classNames(styles.content, content.className, {
                        [styles.contentHidden]: !active,
                    }), style: content.style, role: "tabpanel", "data-part": "content", "data-state": active ? "active" : "inactive", "aria-labelledby": `${rootId}-trigger-${content.value}`, hidden: !active }, content.children));
            })));
    }
}
TabsRoot.seed = 1;
/**
 * Tabs compound component のバンドル。
 * `Tabs.Root`, `Tabs.List`, `Tabs.Trigger`, `Tabs.Content`, `Tabs.Indicator` の形式で使う。
 */
export const Tabs = {
    Root: TabsRoot,
    List: TabsList,
    Trigger: TabsTrigger,
    Content: TabsContent,
    Indicator: TabsIndicator,
};
