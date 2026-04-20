/** @jsx m */
import m from "mithril";
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
export declare class SwitchClassic implements m.Component<SwitchClassicAttrs> {
    private inputId;
    private shouldRenderLabel;
    view(vnode: m.Vnode<SwitchClassicAttrs>): JSX.Element;
}
//# sourceMappingURL=SwitchClassic.d.ts.map