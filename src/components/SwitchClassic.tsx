/** @jsx m */
import m from "mithril";
import classNames from "classnames";

/**
 * @typedef {Object} SwitchClassicAttrs
 * @property {boolean} [checked] - 選択状態（外部制御）
 * @property {(checked: boolean) => void} [oninput] - 状態変更時のコールバック
 * @property {boolean} [disabled] - 無効化
 * @property {string} [class] - 追加クラス
 */
export type SwitchClassicAttrs = {
    checked?: boolean;
    oninput?: (checked: boolean) => void;
    disabled?: boolean;
    class?: string;
};

/**
 * @class SwitchClassic
 * @description
 * Bootstrap5 をベースにしたスイッチコンポーネント（レガシー）
 */
export class SwitchClassic implements m.Component<SwitchClassicAttrs> {
    private inputId: string = `switch-${Math.random().toString(36).substr(2, 9)}`;

    private shouldRenderLabel(vnode: m.Vnode<SwitchClassicAttrs>): boolean {
        if (!vnode.children) return false;
        if (Array.isArray(vnode.children)) return vnode.children.length > 0;
        return true;
    }

    view(vnode: m.Vnode<SwitchClassicAttrs>) {
        const attrs = vnode.attrs;
        const inputClass = classNames("form-check-input", attrs.class);

        return (
            <div class="form-check form-switch">
                <input
                    class={inputClass}
                    type="checkbox"
                    id={this.inputId}
                    checked={attrs.checked ?? false}
                    disabled={attrs.disabled ?? false}
                    onchange={(e: Event) => {
                        const checked = (e.target as HTMLInputElement).checked;
                        attrs.oninput?.(checked);
                    }}
                />
                {this.shouldRenderLabel(vnode) && (
                    <label class="form-check-label" for={this.inputId}>
                        {vnode.children}
                    </label>
                )}
            </div>
        );
    }
}
