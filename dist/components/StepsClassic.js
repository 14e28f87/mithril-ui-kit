/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import "./StepsClassic.scss";
export class StepsClassic {
    resolveStatus(attrs, item, index) {
        if (item.status)
            return item.status;
        const initial = attrs.initial ?? 0;
        const current = attrs.current ?? initial;
        if (index + initial < current)
            return "finish";
        if (index + initial === current)
            return attrs.status ?? "process";
        return "wait";
    }
    renderDefaultIcon(index, status) {
        if (status === "finish") {
            return m("span", { class: "mku-steps-check" }, "\u2713");
        }
        if (status === "error") {
            return m("span", { class: "mku-steps-error" }, "\u2715");
        }
        return m("span", null, index + 1);
    }
    renderIcon(attrs, item, index, status) {
        if (attrs.progressDot) {
            const dot = m("span", { class: "mku-steps-dot" });
            if (typeof attrs.progressDot === "function") {
                return attrs.progressDot(dot, {
                    index,
                    status,
                    title: item.title,
                    description: item.description,
                });
            }
            return dot;
        }
        if (item.icon != null) {
            return item.icon;
        }
        return this.renderDefaultIcon(index, status);
    }
    handleStepClick(attrs, item, index) {
        if (item.disabled)
            return;
        item.onClick?.(index);
        attrs.onChange?.(index + (attrs.initial ?? 0));
    }
    view(vnode) {
        const attrs = vnode.attrs;
        const items = attrs.items ?? [];
        const direction = attrs.direction ?? "horizontal";
        const size = attrs.size ?? "default";
        const labelPlacement = attrs.labelPlacement ?? "horizontal";
        return (m("div", { class: classNames("mku-steps", `mku-steps-${direction}`, `mku-steps-${size}`, { "mku-steps-label-vertical": labelPlacement === "vertical" }, attrs.class), style: attrs.style }, items.map((item, index) => {
            const status = this.resolveStatus(attrs, item, index);
            const clickable = !item.disabled && (!!attrs.onChange || !!item.onClick);
            const isLast = index === items.length - 1;
            return (m("div", { class: classNames("mku-steps-item", `mku-steps-item-${status}`, item.class, {
                    "mku-steps-item-active": status === "process",
                    "mku-steps-item-disabled": !!item.disabled,
                    "mku-steps-item-clickable": clickable,
                    "mku-steps-item-last": isLast,
                }), key: `step-${index}` },
                m("div", { class: "mku-steps-item-container", onclick: () => this.handleStepClick(attrs, item, index) },
                    m("div", { class: "mku-steps-item-tail" },
                        m("i", null)),
                    m("div", { class: "mku-steps-item-icon" },
                        m("div", { class: "mku-steps-icon-inner" }, this.renderIcon(attrs, item, index, status))),
                    m("div", { class: "mku-steps-item-content" },
                        m("div", { class: "mku-steps-item-title" },
                            item.title,
                            item.subTitle ? (m("span", { class: "mku-steps-item-subtitle" }, item.subTitle)) : null),
                        item.description != null ? (m("div", { class: "mku-steps-item-description" }, item.description)) : null))));
        })));
    }
}
