/** @jsx m */
import m from "mithril";
import classNames from "classnames";
/**
 * @class Input
 * @description
 * シンプルなテキスト入力コンポーネント
 *
 * 機能:
 * - Bootstrap5 の form-control クラスを自動付与
 * - リアルタイム入力値の同期
 * - blur または Enter キー時の確定処理
 * - FormItem から注入された is-invalid クラスをマージ
 *
 * @example
 * <Input
 *   value={state.username}
 *   oninput={(v) => state.username = v}
 *   placeholder="ユーザー名を入力"
 * />
 */
export class Input {
    constructor() {
        /** 内部のテキスト値（フォーカス中はリアルタイム更新） */
        this.textValue = "";
        /** フォーカス状態 */
        this.focused = false;
    }
    /**
     * @method oninit
     * @description 初期化時に attrs.value をコンポーネント内部値に同期
     * @param {m.Vnode<InputAttrs>} vnode - Mithril の仮想ノード
     */
    oninit(vnode) {
        const v = vnode.attrs.value;
        this.textValue = v == null ? "" : String(v);
    }
    /**
     * @method onbeforeupdate
     * @description フォーカス喪失時に外部から value が変更されたら同期（フォーカス中は内部値を優先）
     * @param {m.Vnode<InputAttrs>} vnode - Mithril の仮想ノード
     * @param {m.VnodeDOM<InputAttrs>} old - 前の仮想ノード
     */
    onbeforeupdate(vnode, old) {
        if (!this.focused && vnode.attrs.value !== old.attrs.value) {
            const v = vnode.attrs.value;
            this.textValue = v == null ? "" : String(v);
        }
    }
    /**
     * @method commit
     * @description blur または Enter キー時に入力値を確定
     * @param {InputAttrs} attrs - コンポーネント属性
     * @returns {Promise<void>}
     * @private
     */
    async commit(attrs) {
        const trimmed = this.textValue.trim();
        attrs.oninput?.(trimmed === "" ? null : this.textValue);
    }
    /**
     * @method view
     * @description コンポーネントのレンダリング
     * @param {m.Vnode<InputAttrs>} vnode - Mithril の仮想ノード
     * @returns {m.Children} レンダリング結果
     */
    view(vnode) {
        const attrs = vnode.attrs;
        const cls = classNames("form-control", attrs.class);
        return (m("input", { type: attrs.type || "text", class: cls, placeholder: attrs.placeholder, value: this.textValue, disabled: attrs.disabled, id: attrs.id, oninput: (e) => {
                this.textValue = e.target.value;
                attrs.oninput?.(this.textValue);
            }, onfocus: () => (this.focused = true), onblur: async () => {
                this.focused = false;
                await this.commit(attrs);
                attrs.onblur?.();
            }, onkeydown: async (e) => {
                if (e.key === "Enter") {
                    await this.commit(attrs);
                }
            } }));
    }
}
