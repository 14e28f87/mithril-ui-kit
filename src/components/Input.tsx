/** @jsx m */
import m from "mithril";
import classNames from "classnames";

/**
 * @typedef {Object} InputAttrs
 * @property {string|null} [value] - 入力値
 * @property {(v: string|null) => void} [oninput] - 入力時のコールバック
 * @property {string} [placeholder] - プレースホルダー
 * @property {string} [class] - 追加 CSS クラス
 * @property {() => void} [onblur] - フォーカス喪失時のコールバック
 * @property {string} [type] - input タイプ（デフォルト: "text"）
 * @property {boolean} [disabled] - 無効化フラグ
 * @property {string} [id] - input 要素の ID
 */
export type InputAttrs = {
	value?: string | null;
	oninput?: (v: string | null) => void;
	placeholder?: string;
	class?: string;
	onblur?: () => void;
	type?: string;
	disabled?: boolean;
	id?: string;
};

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
export class Input implements m.Component<InputAttrs> {
  /** 内部のテキスト値（フォーカス中はリアルタイム更新） */
  private textValue = "";
  /** フォーカス状態 */
  private focused = false;

  /**
   * @method oninit
   * @description 初期化時に attrs.value をコンポーネント内部値に同期
   * @param {m.Vnode<InputAttrs>} vnode - Mithril の仮想ノード
   */
  oninit(vnode: m.Vnode<InputAttrs>) {
    const v = vnode.attrs.value;
    this.textValue = v == null ? "" : String(v);
  }

  /**
   * @method onbeforeupdate
   * @description フォーカス喪失時に外部から value が変更されたら同期（フォーカス中は内部値を優先）
   * @param {m.Vnode<InputAttrs>} vnode - Mithril の仮想ノード
   * @param {m.VnodeDOM<InputAttrs>} old - 前の仮想ノード
   */
  onbeforeupdate(vnode: m.Vnode<InputAttrs>, old: m.VnodeDOM<InputAttrs>) {
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
  private async commit(attrs: InputAttrs): Promise<void> {
    const trimmed = this.textValue.trim();
    attrs.oninput?.(trimmed === "" ? null : this.textValue);
  }

  /**
   * @method view
   * @description コンポーネントのレンダリング
   * @param {m.Vnode<InputAttrs>} vnode - Mithril の仮想ノード
   * @returns {m.Children} レンダリング結果
   */
  view(vnode: m.Vnode<InputAttrs>) {
		const attrs = vnode.attrs;

		const cls = classNames("form-control", attrs.class);

		return (
			<input
				type={attrs.type || "text"}
				class={cls}
				placeholder={attrs.placeholder}
				value={this.textValue}
				disabled={attrs.disabled}
				id={attrs.id}
				oninput={(e: any) => {
					this.textValue = e.target.value;
					attrs.oninput?.(this.textValue);
				}}
				onfocus={() => (this.focused = true)}
				onblur={async () => {
					this.focused = false;
					await this.commit(attrs);
					attrs.onblur?.();
				}}
				onkeydown={async (e: KeyboardEvent) => {
					if (e.key === "Enter") {
						await this.commit(attrs);
					}
				}}
			/>
		);
	}
}
