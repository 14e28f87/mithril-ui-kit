/** @jsx m */
import m from "mithril";
import classNames from "classnames";
/**
 * @class SwitchClassic
 * @description
 * Bootstrap5 をベースにしたスイッチコンポーネント（レガシー）
 */
export class SwitchClassic {
    constructor() {
        this.inputId = `switch-${Math.random().toString(36).substr(2, 9)}`;
    }
    shouldRenderLabel(vnode) {
        if (!vnode.children)
            return false;
        if (Array.isArray(vnode.children))
            return vnode.children.length > 0;
        return true;
    }
    view(vnode) {
        const attrs = vnode.attrs;
        const inputClass = classNames("form-check-input", attrs.class);
        return (m("div", { class: "form-check form-switch" },
            m("input", { class: inputClass, type: "checkbox", id: this.inputId, checked: attrs.checked ?? false, disabled: attrs.disabled ?? false, onchange: (e) => {
                    const checked = e.target.checked;
                    attrs.oninput?.(checked);
                } }),
            this.shouldRenderLabel(vnode) && (m("label", { class: "form-check-label", for: this.inputId }, vnode.children))));
    }
}
