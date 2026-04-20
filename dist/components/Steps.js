/** @jsx m */
/**
 * @fileoverview
 * Steps — Chakra UI 現行 API 準拠の compound component 型ステッパー
 *
 * @example
 * ```tsx
 * <Steps.Root step={1} count={3}>
 *   <Steps.List>
 *     <Steps.Item index={0}><Steps.Trigger><Steps.Indicator />ステップ 1</Steps.Trigger><Steps.Separator /></Steps.Item>
 *     <Steps.Item index={1}><Steps.Trigger><Steps.Indicator />ステップ 2</Steps.Trigger><Steps.Separator /></Steps.Item>
 *     <Steps.Item index={2}><Steps.Trigger><Steps.Indicator />ステップ 3</Steps.Trigger></Steps.Item>
 *   </Steps.List>
 *   <Steps.Content index={0}>ステップ 1 の内容</Steps.Content>
 *   <Steps.Content index={1}>ステップ 2 の内容</Steps.Content>
 *   <Steps.Content index={2}>ステップ 3 の内容</Steps.Content>
 *   <Steps.CompletedContent>完了！</Steps.CompletedContent>
 * </Steps.Root>
 * ```
 *
 * @module Steps
 */
/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Steps.module.scss";
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
// --- マーカークラス ---
/** @class StepsList */
export class StepsList {
    view(vnode) { return m("div", null, vnode.children); }
}
StepsList.__stepsRole = "list";
/** @class StepsItem */
export class StepsItemMarker {
    view(vnode) { return m("div", null, vnode.children); }
}
StepsItemMarker.__stepsRole = "item";
/** @class StepsTrigger */
export class StepsTriggerMarker {
    view(vnode) { return m("button", { type: "button" }, vnode.children); }
}
StepsTriggerMarker.__stepsRole = "trigger";
/** @class StepsIndicator */
export class StepsIndicatorMarker {
    view(vnode) { return m("div", null, vnode.children); }
}
StepsIndicatorMarker.__stepsRole = "indicator";
/** @class StepsSeparator */
export class StepsSeparatorMarker {
    view(vnode) { return m("div", null); }
}
StepsSeparatorMarker.__stepsRole = "separator";
/** @class StepsContentMarker */
export class StepsContentMarker {
    view(vnode) { return m("div", null, vnode.children); }
}
StepsContentMarker.__stepsRole = "content";
/** @class StepsCompletedContentMarker */
export class StepsCompletedContentMarker {
    view(vnode) { return m("div", null, vnode.children); }
}
StepsCompletedContentMarker.__stepsRole = "completed-content";
/** @class StepsTitleMarker */
export class StepsTitleMarker {
    view(vnode) { return m("span", null, vnode.children); }
}
StepsTitleMarker.__stepsRole = "title";
/** @class StepsDescriptionMarker */
export class StepsDescriptionMarker {
    view(vnode) { return m("span", null, vnode.children); }
}
StepsDescriptionMarker.__stepsRole = "description";
/** @class StepsPrevTriggerMarker */
export class StepsPrevTriggerMarker {
    view(vnode) { return m("button", { type: "button" }, vnode.children); }
}
StepsPrevTriggerMarker.__stepsRole = "prev-trigger";
/** @class StepsNextTriggerMarker */
export class StepsNextTriggerMarker {
    view(vnode) { return m("button", { type: "button" }, vnode.children); }
}
StepsNextTriggerMarker.__stepsRole = "next-trigger";
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
function getRole(v) {
    if (!isVnodeLike(v))
        return undefined;
    return v.tag?.__stepsRole;
}
/**
 * @class StepsRoot
 * @description
 * ステッパーのルートコンポーネント。
 * ステップのリスト表示、現在ステップのコンテンツ切り替え、
 * 前へ/次へナビゲーションを管理する。
 *
 * 主な機能:
 * - variant (solid / subtle)
 * - size (xs / sm / md / lg)
 * - orientation (horizontal / vertical)
 * - 制御/非制御両対応 (step / defaultStep)
 * - リニアモード
 * - PrevTrigger / NextTrigger
 *
 * @example
 * <Steps.Root count={3} defaultStep={0} variant="solid">
 *   <Steps.List>
 *     <Steps.Item index={0}><Steps.Trigger><Steps.Indicator />手順 1</Steps.Trigger><Steps.Separator /></Steps.Item>
 *     <Steps.Item index={1}><Steps.Trigger><Steps.Indicator />手順 2</Steps.Trigger></Steps.Item>
 *   </Steps.List>
 *   <Steps.Content index={0}>内容 1</Steps.Content>
 *   <Steps.Content index={1}>内容 2</Steps.Content>
 *   <Steps.CompletedContent>完了！</Steps.CompletedContent>
 *   <Steps.PrevTrigger>戻る</Steps.PrevTrigger>
 *   <Steps.NextTrigger>次へ</Steps.NextTrigger>
 * </Steps.Root>
 */
export class StepsRoot {
    constructor() {
        this.currentStep = 0;
    }
    oninit(vnode) {
        this.currentStep = this.resolveStep(vnode.attrs, true);
    }
    isControlled(attrs) {
        return attrs.step !== undefined;
    }
    resolveStep(attrs, preferDefault) {
        if (this.isControlled(attrs))
            return attrs.step;
        if (preferDefault && attrs.defaultStep !== undefined)
            return attrs.defaultStep;
        return this.currentStep;
    }
    setStep(attrs, next) {
        const clamped = Math.max(0, Math.min(next, attrs.count));
        if (!this.isControlled(attrs)) {
            this.currentStep = clamped;
        }
        attrs.onStepChange?.({ step: clamped });
        if (clamped >= attrs.count) {
            attrs.onStepComplete?.();
        }
        if (!this.isControlled(attrs))
            m.redraw();
    }
    collectItems(listVNode) {
        if (!listVNode)
            return [];
        return toChildArray(listVNode.children)
            .filter(c => getRole(c) === "item")
            .map(c => {
            const v = c;
            const children = toChildArray(v.children);
            return {
                index: v.attrs.index,
                className: v.attrs.class,
                style: v.attrs.style,
                triggerVNode: children.find(ch => getRole(ch) === "trigger"),
                separatorVNode: children.find(ch => getRole(ch) === "separator"),
            };
        });
    }
    renderTriggerContent(triggerVNode, stepIndex, current) {
        if (!triggerVNode)
            return m("span", { class: styles.indicator }, stepIndex + 1);
        const children = toChildArray(triggerVNode.children);
        return children.map((child) => {
            const role = getRole(child);
            if (role === "indicator") {
                const v = child;
                const state = stepIndex < current ? "complete" : stepIndex === current ? "current" : "incomplete";
                return (m("span", { class: classNames(styles.indicator, v.attrs.class, styles[`indicator${capitalize(state)}`]), style: v.attrs.style, "data-part": "indicator", "data-state": state }, state === "complete" ? (m("svg", { viewBox: "0 0 20 20", fill: "currentColor", width: "1em", height: "1em" },
                    m("path", { "fill-rule": "evenodd", d: "M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" }))) : (stepIndex + 1)));
            }
            if (role === "title") {
                const v = child;
                return m("span", { class: classNames(styles.title, v.attrs.class), style: v.attrs.style, "data-part": "title" }, v.children);
            }
            if (role === "description") {
                const v = child;
                return m("span", { class: classNames(styles.description, v.attrs.class), style: v.attrs.style, "data-part": "description" }, v.children);
            }
            return child;
        });
    }
    view(vnode) {
        const attrs = vnode.attrs;
        const allChildren = toChildArray(vnode.children);
        const listVNode = allChildren.find(c => getRole(c) === "list");
        const contents = allChildren.filter(c => getRole(c) === "content");
        const completedContent = allChildren.find(c => getRole(c) === "completed-content");
        const prevTrigger = allChildren.find(c => getRole(c) === "prev-trigger");
        const nextTrigger = allChildren.find(c => getRole(c) === "next-trigger");
        const items = this.collectItems(listVNode);
        const current = this.resolveStep(attrs, false);
        const variant = attrs.variant ?? "solid";
        const size = attrs.size ?? "md";
        const orientation = attrs.orientation ?? "horizontal";
        const isComplete = current >= attrs.count;
        const activeContent = contents.find(c => c.attrs.index === current);
        return (m("div", { class: classNames(styles.root, styles[`variant${capitalize(variant)}`], styles[`size${capitalize(size)}`], { [styles.orientationVertical]: orientation === "vertical" }, attrs.class), style: attrs.style, "data-scope": "steps", "data-part": "root", "data-orientation": orientation },
            m("div", { class: classNames(styles.list, listVNode?.attrs.class), style: listVNode?.attrs.style, "data-part": "list" }, items.map(item => {
                const state = item.index < current ? "complete" : item.index === current ? "current" : "incomplete";
                return (m("div", { key: item.index, class: classNames(styles.item, item.className, styles[`item${capitalize(state)}`]), style: item.style, "data-part": "item", "data-state": state },
                    m("button", { type: "button", class: classNames(styles.trigger, item.triggerVNode?.attrs.class), style: item.triggerVNode?.attrs.style, "data-part": "trigger", "data-state": state, disabled: attrs.linear && item.index > current, onclick: () => {
                            if (!attrs.linear || item.index <= current) {
                                this.setStep(attrs, item.index);
                            }
                        } }, this.renderTriggerContent(item.triggerVNode, item.index, current)),
                    item.separatorVNode ? (m("div", { class: classNames(styles.separator, item.separatorVNode.attrs.class, {
                            [styles.separatorComplete]: item.index < current,
                        }), style: item.separatorVNode.attrs.style, "data-part": "separator", "data-state": item.index < current ? "complete" : "incomplete" })) : null));
            })),
            isComplete && completedContent ? (m("div", { class: classNames(styles.content, completedContent.attrs.class), style: completedContent.attrs.style, "data-part": "completed-content" }, completedContent.children)) : activeContent ? (m("div", { class: classNames(styles.content, activeContent.attrs.class), style: activeContent.attrs.style, "data-part": "content" }, activeContent.children)) : null,
            (prevTrigger || nextTrigger) ? (m("div", { class: styles.navigation, "data-part": "navigation" },
                prevTrigger ? (m("button", { type: "button", class: classNames(styles.prevTrigger, prevTrigger.attrs.class), style: prevTrigger.attrs.style, "data-part": "prev-trigger", disabled: current <= 0, onclick: () => this.setStep(attrs, current - 1) }, prevTrigger.children)) : null,
                nextTrigger ? (m("button", { type: "button", class: classNames(styles.nextTrigger, nextTrigger.attrs.class), style: nextTrigger.attrs.style, "data-part": "next-trigger", disabled: isComplete, onclick: () => this.setStep(attrs, current + 1) }, nextTrigger.children)) : null)) : null));
    }
}
/**
 * Steps compound component のバンドル。
 */
export const Steps = {
    Root: StepsRoot,
    List: StepsList,
    Item: StepsItemMarker,
    Trigger: StepsTriggerMarker,
    Indicator: StepsIndicatorMarker,
    Separator: StepsSeparatorMarker,
    Content: StepsContentMarker,
    CompletedContent: StepsCompletedContentMarker,
    Title: StepsTitleMarker,
    Description: StepsDescriptionMarker,
    PrevTrigger: StepsPrevTriggerMarker,
    NextTrigger: StepsNextTriggerMarker,
};
