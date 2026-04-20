/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Rating.module.scss";
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
/**
 * Rating Root コンポーネント — 星評価
 *
 * @example
 * ```tsx
 * <Rating.Root value={rating} onValueChange={v => rating = v} count={5} />
 * <Rating.Root value={3.5} readOnly allowHalf />
 * ```
 */
class RatingRoot {
    constructor() {
        this.internalValue = 0;
        this.hoverValue = -1;
    }
    oninit(vnode) {
        this.internalValue = vnode.attrs.defaultValue ?? 0;
    }
    view(vnode) {
        const { size = "md", colorPalette = "orange", count = 5, value, defaultValue, onValueChange, allowHalf, readOnly, disabled, class: className, ...rest } = vnode.attrs;
        const currentValue = value !== undefined ? value : this.internalValue;
        const displayValue = this.hoverValue >= 0 ? this.hoverValue : currentValue;
        const items = [];
        for (let i = 1; i <= count; i++) {
            if (allowHalf) {
                // 半分刻み: 左半分(i-0.5) 右半分(i)
                items.push(m("span", { class: classNames(styles.item, { [styles.disabled]: disabled }), onmouseleave: readOnly || disabled ? undefined : () => { this.hoverValue = -1; m.redraw(); } },
                    m("span", { class: classNames(styles.halfLeft, { [styles.filled]: displayValue >= i - 0.5 }), onmouseenter: readOnly || disabled ? undefined : () => { this.hoverValue = i - 0.5; m.redraw(); }, onclick: readOnly || disabled ? undefined : () => {
                            this.internalValue = i - 0.5;
                            onValueChange?.(i - 0.5);
                        } }, "\u2605"),
                    m("span", { class: classNames(styles.halfRight, { [styles.filled]: displayValue >= i }), onmouseenter: readOnly || disabled ? undefined : () => { this.hoverValue = i; m.redraw(); }, onclick: readOnly || disabled ? undefined : () => {
                            this.internalValue = i;
                            onValueChange?.(i);
                        } }, "\u2605")));
            }
            else {
                items.push(m("span", { class: classNames(styles.item, { [styles.filled]: displayValue >= i }, { [styles.disabled]: disabled }), onmouseenter: readOnly || disabled ? undefined : () => { this.hoverValue = i; m.redraw(); }, onmouseleave: readOnly || disabled ? undefined : () => { this.hoverValue = -1; m.redraw(); }, onclick: readOnly || disabled ? undefined : () => {
                        this.internalValue = i;
                        onValueChange?.(i);
                    } }, "\u2605"));
            }
        }
        return (m("div", { ...rest, role: "radiogroup", "aria-label": "Rating", class: classNames(styles.root, styles[`size${capitalize(size)}`], styles[`color${capitalize(colorPalette)}`], { [styles.readOnly]: readOnly }, className) }, items));
    }
}
/**
 * Rating コンポーネント名前空間
 */
export const Rating = {
    Root: RatingRoot,
};
export { RatingRoot };
