/** @jsx m */
import m from "mithril";
/**
 * @typedef {Object} RadioClassicAttrs
 * @property {any} [value] - このラジオの値
 * @property {boolean} [checked] - 選択状態（外部制御）
 * @property {(e: Event | any) => void} [oninput] - Event | any を受け取るコールバック（FormItem 互換）
 * @property {boolean} [disabled] - 無効化
 * @property {string} [class] - 追加クラス（FormItem が is-invalid を注入する想定）
 */
export type RadioClassicAttrs = {
    value?: any;
    checked?: boolean;
    oninput?: (e: Event | any) => void;
    disabled?: boolean;
    class?: string;
};
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
export declare class RadioClassic implements m.Component<RadioClassicAttrs> {
    view(vnode: m.Vnode<RadioClassicAttrs>): JSX.Element;
}
//# sourceMappingURL=RadioClassic.d.ts.map