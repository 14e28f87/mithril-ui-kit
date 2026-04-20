/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./PinInput.module.scss";
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
/**
 * PinInput Root コンポーネント — PIN / OTP 入力フィールド
 *
 * @example
 * ```tsx
 * <PinInput.Root count={4} onComplete={v => console.log("完了:", v)} />
 * <PinInput.Root count={6} otp mask />
 * ```
 */
class PinInputRoot {
    constructor() {
        this.values = [];
        this.inputRefs = [];
    }
    oninit(vnode) {
        const count = vnode.attrs.count ?? 4;
        this.values = vnode.attrs.value ?? new Array(count).fill("");
        this.inputRefs = new Array(count).fill(null);
    }
    view(vnode) {
        const { size = "md", count = 4, value, onValueChange, onComplete, mask, otp, placeholder = "○", type = "numeric", disabled, class: className, ...rest } = vnode.attrs;
        const currentValues = value ?? this.values;
        if (currentValues.length !== count) {
            this.values = new Array(count).fill("");
        }
        const inputs = [];
        for (let i = 0; i < count; i++) {
            inputs.push(m("input", { key: i, type: mask ? "password" : "text", inputmode: type === "numeric" ? "numeric" : "text", autocomplete: otp ? "one-time-code" : undefined, disabled: disabled, placeholder: placeholder, value: currentValues[i] || "", maxlength: 1, class: styles.input, oncreate: (vn) => { this.inputRefs[i] = vn.dom; }, oninput: (e) => this.handleInput(e, i, count, currentValues, onValueChange, onComplete, type), onkeydown: (e) => this.handleKeydown(e, i, count, currentValues, onValueChange, onComplete), onpaste: (e) => this.handlePaste(e, i, count, currentValues, onValueChange, onComplete, type) }));
        }
        return (m("div", { ...rest, class: classNames(styles.root, styles[`size${capitalize(size)}`], { [styles.disabled]: disabled }, className) }, inputs));
    }
    isValid(char, type) {
        if (type === "numeric")
            return /\d/.test(char);
        if (type === "alphabetic")
            return /[a-zA-Z]/.test(char);
        return /[a-zA-Z0-9]/.test(char);
    }
    handleInput(e, index, count, values, onValueChange, onComplete, type) {
        const input = e.target;
        const char = input.value.slice(-1);
        if (char && !this.isValid(char, type || "numeric")) {
            input.value = values[index] || "";
            return;
        }
        const newValues = [...values];
        newValues[index] = char;
        this.values = newValues;
        onValueChange?.(newValues);
        if (char && index < count - 1) {
            this.inputRefs[index + 1]?.focus();
        }
        if (newValues.every(v => v)) {
            onComplete?.(newValues.join(""));
        }
    }
    handleKeydown(e, index, count, values, onValueChange, onComplete) {
        if (e.key === "Backspace") {
            if (!values[index] && index > 0) {
                const newValues = [...values];
                newValues[index - 1] = "";
                this.values = newValues;
                onValueChange?.(newValues);
                this.inputRefs[index - 1]?.focus();
                e.preventDefault();
            }
        }
        else if (e.key === "ArrowLeft" && index > 0) {
            this.inputRefs[index - 1]?.focus();
        }
        else if (e.key === "ArrowRight" && index < count - 1) {
            this.inputRefs[index + 1]?.focus();
        }
    }
    handlePaste(e, index, count, values, onValueChange, onComplete, type) {
        e.preventDefault();
        const paste = e.clipboardData?.getData("text") || "";
        const chars = paste.split("").filter(c => this.isValid(c, type || "numeric"));
        const newValues = [...values];
        for (let i = 0; i < chars.length && index + i < count; i++) {
            newValues[index + i] = chars[i];
        }
        this.values = newValues;
        onValueChange?.(newValues);
        const nextIndex = Math.min(index + chars.length, count - 1);
        this.inputRefs[nextIndex]?.focus();
        if (newValues.every(v => v)) {
            onComplete?.(newValues.join(""));
        }
    }
}
/**
 * PinInput コンポーネント名前空間
 */
export const PinInput = {
    Root: PinInputRoot,
};
export { PinInputRoot };
