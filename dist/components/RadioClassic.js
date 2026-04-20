/** @jsx m */
import m from "mithril";
import classNames from "classnames";
/**
 * @class Radio
 * @description
 * 単体ラジオボタンコンポーネント
 *
 * 機能:
 * - Bootstrap5 の form-check スタイルを使用
 * - checked 状態の外部制御
 * - value を oninput に渡すか、DOM Event を渡す
 * - disabled 状態をサポート
 *
 * @example
 * <Radio
 *   value="option1"
 *   checked={selectedValue === "option1"}
 *   oninput={(val) => selectedValue = val}
 * >
 *   オプション1
 * </Radio>
 */
export class RadioClassic {
    view(vnode) {
        const attrs = vnode.attrs;
        const inputClass = classNames("form-check-input", attrs.class);
        return (m("div", { class: "form-check" },
            m("input", { class: inputClass, type: "radio", checked: !!attrs.checked, disabled: !!attrs.disabled, oninput: (e) => {
                    if (attrs.disabled)
                        return;
                    // DOM Event をそのまま渡すか、value を直接渡す
                    if (attrs.value !== undefined)
                        attrs.oninput?.(attrs.value);
                    else
                        attrs.oninput?.(e);
                } }),
            m("label", { class: classNames("form-check-label", { "text-muted": attrs.disabled }), onclick: () => !attrs.disabled && attrs.oninput?.(attrs.value) }, vnode.children)));
    }
}
