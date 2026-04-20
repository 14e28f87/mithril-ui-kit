/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import "./InputNumberClassic.scss";
/**
 * InputNumberClassic コンポーネント
 *
 * 概要:
 * - 数値入力を提供するコンポーネント
 * - 表示用のフォーマット（桁区切り・精度）と内部値（数値）の変換を行う
 * - 増減ボタン、矢印キー、Enter/blur による確定をサポート
 *
 * 使用例:
 * <InputNumberClassic value={v} oninput={(val) => v = val} precision={2} thousand />
 */
export class InputNumberClassic {
    constructor() {
        this.textValue = "";
        this.focused = false;
    }
    /**
     * 初期化時に attrs.value を表示用文字列に変換して内部状態に設定します。
     */
    oninit(vnode) {
        const v = vnode.attrs.value;
        this.textValue = v == null ? "" : this.format(v, vnode.attrs);
    }
    /**
     * 更新前フック。フォーカス中は内部の編集中文字列を優先し、
     * フォーカスしていない場合のみ外部から来た value を同期します。
     */
    onbeforeupdate(vnode, old) {
        if (!this.focused && vnode.attrs.value !== old.attrs.value) {
            const v = vnode.attrs.value;
            this.textValue = v == null ? "" : this.format(v, vnode.attrs);
        }
    }
    /**
     * 表示用に数値をフォーマットします。
     * - null/空文字は空文字を返す
     * - `thousand` が true の場合は Intl.NumberFormat を利用して桁区切りを付与
     * - `precision` が指定されていれば固定小数点表記で整形
     *
     * @param num - フォーマット対象の値
     * @param attrs - コンポーネント属性
     * @returns 表示用の文字列
     */
    format(num, attrs) {
        if (num == null || num === "")
            return "";
        const n = Number(num);
        if (!Number.isFinite(n))
            return String(num);
        if (attrs.thousand) {
            const opt = {};
            if (typeof attrs.precision === "number") {
                opt.minimumFractionDigits = attrs.precision;
                opt.maximumFractionDigits = attrs.precision;
            }
            return new Intl.NumberFormat("en-US", opt).format(n);
        }
        if (typeof attrs.precision === "number")
            return n.toFixed(attrs.precision);
        return String(n);
    }
    /**
     * 入力文字列を数値に変換します。
     * - 空文字は null を返す
     * - カンマを削除して数値化し、`precision` が指定されていれば四捨五入して返します
     *
     * @param text - 入力文字列
     * @param attrs - コンポーネント属性
     * @returns 数値または null
     */
    parse(text, attrs) {
        const t = text.trim();
        if (t === "")
            return null;
        const cleaned = t.replace(/,/g, "");
        const n = Number(cleaned);
        if (!Number.isFinite(n))
            return null;
        if (typeof attrs.precision === "number") {
            const f = Math.pow(10, attrs.precision);
            return Math.round(n * f) / f;
        }
        return n;
    }
    /**
     * blur または Enter 押下時に確定処理を行います。
     * - 空文字の場合は null を通知
     * - 解析に失敗した場合は元の文字列を通知
     * - 正常に解析できた場合は数値を通知し、表示をフォーマット済みに更新
     */
    async commit(attrs) {
        const parsed = this.parse(this.textValue, attrs);
        if (this.textValue.trim() === "") {
            attrs.oninput?.(null);
        }
        else if (parsed == null) {
            attrs.oninput?.(this.textValue);
        }
        else {
            attrs.oninput?.(parsed);
            this.textValue = this.format(parsed, attrs);
        }
        m.redraw();
    }
    /**
     * 指定した delta 値に基づいて増減を行い、oninput を呼び出します。
     * - 現在値が数値でない場合は内部の parse 結果を基にする
     *
     * @param delta - 増減方向（1 または -1）
     * @param vnode - Mithril vnode
     */
    changeBy(delta, vnode) {
        const attrs = vnode.attrs;
        const base = typeof attrs.value === "number" ? attrs.value : this.parse(this.textValue, attrs);
        if (base == null)
            return;
        const step = attrs.step ?? 1;
        const next = base + delta * step;
        attrs.oninput?.(next);
        this.textValue = this.format(next, attrs);
        m.redraw();
    }
    /**
     * コンポーネントのレンダリング
     * - Bootstrap の input-group を使用して増減ボタン・prefix/suffix を配置
     */
    view(vnode) {
        const attrs = vnode.attrs;
        const inputClass = classNames("form-control", attrs.class);
        return (m("div", { class: classNames("input-group", "input-number") },
            attrs.prefix && m("span", { class: "input-group-text" }, attrs.prefix),
            m("input", { type: "text", class: inputClass, value: this.textValue, placeholder: attrs.placeholder, oninput: (e) => {
                    this.textValue = e.target.value;
                    attrs.oninput?.(this.textValue);
                }, onfocus: () => (this.focused = true), onblur: async () => {
                    this.focused = false;
                    await this.commit(attrs);
                }, onkeydown: async (e) => {
                    if (e.key === "ArrowUp") {
                        e.preventDefault();
                        this.changeBy(1, vnode);
                    }
                    if (e.key === "ArrowDown") {
                        e.preventDefault();
                        this.changeBy(-1, vnode);
                    }
                    if (e.key === "Enter")
                        await this.commit(attrs);
                }, inputmode: "decimal", style: { textAlign: "right" } }),
            attrs.suffix && m("span", { class: "input-group-text" }, attrs.suffix),
            m("div", { class: "input-number-controls" },
                m("button", { type: "button", class: "btn btn-outline-secondary btn-sm", onclick: () => this.changeBy(1, vnode), "aria-label": "\u5897\u52A0" },
                    m("span", { class: "arrow" }, "\u25B2")),
                m("button", { type: "button", class: "btn btn-outline-secondary btn-sm", onclick: () => this.changeBy(-1, vnode), "aria-label": "\u6E1B\u5C11" },
                    m("span", { class: "arrow" }, "\u25BC")))));
    }
}
export default InputNumberClassic;
