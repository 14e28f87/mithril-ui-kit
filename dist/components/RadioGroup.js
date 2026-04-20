/** @jsx m */
import m from "mithril";
import classNames from "classnames";
/**
 * @class RadioGroup
 * @description
 * ラジオボタングループコンポーネント
 *
 * 機能:
 * - options 配列による一括レンダリング
 * - 子要素としての Radio コンポーネント配置もサポート
 * - horizontal / vertical レイアウト切替
 * - disabled 状態の一括制御
 * - 値の等価比較（文字列・数値の柔軟な比較）
 *
 * @example
 * // options 配列を使う場合
 * <RadioGroup
 *   value={selectedValue}
 *   oninput={(val) => selectedValue = val}
 *   options={[
 *     { label: "オプション1", value: "opt1" },
 *     { label: "オプション2", value: "opt2" }
 *   ]}
 * />
 *
 * @example
 * // 子要素として Radio を配置する場合
 * <RadioGroup value={selectedValue} oninput={(val) => selectedValue = val}>
 *   <Radio value="opt1">オプション1</Radio>
 *   <Radio value="opt2">オプション2</Radio>
 * </RadioGroup>
 */
export class RadioGroup {
    constructor() {
        this.nameId = `radio-${Math.random().toString(36).slice(2, 9)}`;
    }
    /**
     * @function isEqual
     * @description 値の等価比較（柔軟な文字列・数値比較）
     */
    isEqual(a, b) {
        if (a === b)
            return true;
        if ((typeof a === "number" || typeof a === "string") && (typeof b === "number" || typeof b === "string")) {
            return String(a) === String(b);
        }
        return false;
    }
    view(vnode) {
        const { value, oninput, options, disabled, orientation = "vertical", class: cls, name } = vnode.attrs;
        const groupName = name ?? this.nameId;
        const layoutClass = classNames(cls, {
            "d-flex flex-column": orientation === "vertical",
            "d-flex flex-row align-items-center gap-3": orientation === "horizontal",
        });
        const handleChange = (val) => {
            if (!disabled)
                oninput?.(val);
        };
        // options 配列が指定されている場合
        if (options && options.length) {
            return (m("div", { class: layoutClass, role: "radiogroup", tabindex: 0 }, options.map((opt) => (m("label", { class: "form-check", style: { cursor: opt.disabled ? "not-allowed" : "pointer" } },
                m("input", { class: classNames("form-check-input", { "is-invalid": !!opt.error }), type: "radio", name: groupName, checked: this.isEqual(opt.value, value), disabled: opt.disabled || disabled, onclick: () => {
                        if (!opt.disabled && !disabled)
                            handleChange(opt.value);
                    } }),
                m("span", { class: classNames("form-check-label", { "text-muted": opt.disabled }), style: { marginLeft: "0.5rem" } }, opt.label))))));
        }
        // 子要素として Radio コンポーネントが渡された場合
        const children = vnode.children;
        const childArray = Array.isArray(children) ? children : children ? [children] : [];
        return (m("div", { class: layoutClass, role: "radiogroup", tabindex: 0 }, childArray.map((ch, idx) => {
            // Radio コンポーネントの場合
            if (ch && typeof ch.tag === "function") {
                const childValue = (ch.attrs && ch.attrs.value) ?? idx;
                const childDisabled = !!(ch.attrs && ch.attrs.disabled) || !!disabled;
                return m(ch.tag, {
                    ...(ch.attrs || {}),
                    value: childValue,
                    checked: this.isEqual(childValue, value),
                    disabled: childDisabled,
                    oninput: (e) => {
                        if (e && e.target && e.target.value !== undefined) {
                            handleChange(e.target.value);
                        }
                        else if (e !== undefined && e !== null && typeof e !== "object") {
                            handleChange(e);
                        }
                        else {
                            handleChange(childValue);
                        }
                    },
                }, ch.children);
            }
            // プレーンテキストの場合
            const rawValue = idx;
            return (m("label", { class: "form-check", style: { cursor: disabled ? "not-allowed" : "pointer" } },
                m("input", { class: "form-check-input", type: "radio", name: groupName, checked: this.isEqual(rawValue, value), disabled: disabled, onclick: () => {
                        if (!disabled)
                            handleChange(rawValue);
                    } }),
                m("span", { class: "form-check-label", style: { marginLeft: "0.5rem" } }, ch)));
        })));
    }
}
