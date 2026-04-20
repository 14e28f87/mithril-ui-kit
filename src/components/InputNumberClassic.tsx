/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import "./InputNumberClassic.scss";

/**
 * InputNumberClassic コンポーネントの属性定義
 *
 * @property {number|string|null} [value] - 現在の値（制御コンポーネント）
 * @property {(v: number|string|null) => void} [oninput] - 入力値が確定または変更された際のコールバック
 * @property {number} [precision] - 小数点以下の桁数（指定すると四捨五入して返します）
 * @property {boolean} [thousand] - true の場合、表示に桁区切り（カンマ）を付与します（内部の値は数値）
 * @property {number} [step] - 増減ボタンや矢印キーでの増減幅（デフォルト: 1）
 * @property {string} [class] - input に付与する追加クラス
 * @property {string} [placeholder] - プレースホルダー文字列
 * @property {m.Children} [prefix] - 入力の前に表示する要素（input-group の先頭）
 * @property {m.Children} [suffix] - 入力の後に表示する要素（input-group の末尾）
 */
export type InputNumberClassicAttrs = {
    value?: number | string | null;
    oninput?: (v: number | string | null) => void;
    precision?: number;
    thousand?: boolean;
    step?: number;
    class?: string;
    placeholder?: string;
    prefix?: m.Children;
    suffix?: m.Children;
};

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
export class InputNumberClassic implements m.Component<InputNumberClassicAttrs> {
    private textValue = "";
    private focused = false;

    /**
     * 初期化時に attrs.value を表示用文字列に変換して内部状態に設定します。
     */
    oninit(vnode: m.Vnode<InputNumberClassicAttrs>) {
        const v = vnode.attrs.value;
        this.textValue = v == null ? "" : this.format(v, vnode.attrs);
    }

    /**
     * 更新前フック。フォーカス中は内部の編集中文字列を優先し、
     * フォーカスしていない場合のみ外部から来た value を同期します。
     */
    onbeforeupdate(vnode: m.Vnode<InputNumberClassicAttrs>, old: m.VnodeDOM<InputNumberClassicAttrs>) {
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
    private format(num: any, attrs: InputNumberClassicAttrs) {
        if (num == null || num === "") return "";
        const n = Number(num);
        if (!Number.isFinite(n)) return String(num);

        if (attrs.thousand) {
            const opt: Intl.NumberFormatOptions = {};
            if (typeof attrs.precision === "number") {
                opt.minimumFractionDigits = attrs.precision;
                opt.maximumFractionDigits = attrs.precision;
            }
            return new Intl.NumberFormat("en-US", opt).format(n);
        }

        if (typeof attrs.precision === "number") return n.toFixed(attrs.precision);
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
    private parse(text: string, attrs: InputNumberClassicAttrs): number | null {
        const t = text.trim();
        if (t === "") return null;
        const cleaned = t.replace(/,/g, "");
        const n = Number(cleaned);
        if (!Number.isFinite(n)) return null;

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
    private async commit(attrs: InputNumberClassicAttrs) {
        const parsed = this.parse(this.textValue, attrs);
        if (this.textValue.trim() === "") {
            attrs.oninput?.(null);
        } else if (parsed == null) {
            attrs.oninput?.(this.textValue);
        } else {
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
    private changeBy(delta: number, vnode: m.Vnode<InputNumberClassicAttrs>) {
        const attrs = vnode.attrs;
        const base = typeof attrs.value === "number" ? attrs.value : this.parse(this.textValue, attrs);
        if (base == null) return;

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
    view(vnode: m.Vnode<InputNumberClassicAttrs>) {
        const attrs = vnode.attrs;

        const inputClass = classNames("form-control", attrs.class);

        return (
            <div class={classNames("input-group", "input-number")}>
                {attrs.prefix && <span class="input-group-text">{attrs.prefix}</span>}

                <input
                    type="text"
                    class={inputClass}
                    value={this.textValue}
                    placeholder={attrs.placeholder}
                    oninput={(e: any) => {
                        this.textValue = e.target.value;
                        attrs.oninput?.(this.textValue);
                    }}
                    onfocus={() => (this.focused = true)}
                    onblur={async () => {
                        this.focused = false;
                        await this.commit(attrs);
                    }}
                    onkeydown={async (e: KeyboardEvent) => {
                        if (e.key === "ArrowUp") {
                            e.preventDefault();
                            this.changeBy(1, vnode);
                        }
                        if (e.key === "ArrowDown") {
                            e.preventDefault();
                            this.changeBy(-1, vnode);
                        }
                        if (e.key === "Enter") await this.commit(attrs);
                    }}
                    inputmode="decimal"
                    style={{ textAlign: "right" }}
                />

                {attrs.suffix && <span class="input-group-text">{attrs.suffix}</span>}

                <div class="input-number-controls">
                    <button
                        type="button"
                        class="btn btn-outline-secondary btn-sm"
                        onclick={() => this.changeBy(1, vnode)}
                        aria-label="増加"
                    >
                        <span class="arrow">▲</span>
                    </button>
                    <button
                        type="button"
                        class="btn btn-outline-secondary btn-sm"
                        onclick={() => this.changeBy(-1, vnode)}
                        aria-label="減少"
                    >
                        <span class="arrow">▼</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default InputNumberClassic;
