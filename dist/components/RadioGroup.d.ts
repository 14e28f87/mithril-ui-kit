/** @jsx m */
import m from "mithril";
/**
 * @typedef {Object} RadioGroupAttrs
 * @property {any} [value] - 選択中の値（外部制御）
 * @property {(value: any) => void} [oninput] - 値変更時のコールバック
 * @property {Array<{label: m.Children, value: any, disabled?: boolean, error?: boolean}>} [options] - 選択肢配列
 * @property {string} [name] - input の name 属性
 * @property {boolean} [disabled] - グループ全体を無効化
 * @property {"horizontal" | "vertical"} [orientation] - レイアウト方向（デフォルト: "vertical"）
 * @property {string} [class] - 追加クラス
 */
export type RadioGroupAttrs = {
    value?: any;
    oninput?: (e: Event | any) => void;
    options?: {
        label: m.Children;
        value: any;
        disabled?: boolean;
        error?: boolean;
    }[];
    name?: string;
    disabled?: boolean;
    orientation?: "horizontal" | "vertical";
    class?: string;
};
/**
 * @class RadioGroup
 * @description
 * ラジオボタングループコンポーネント
 *
 * 機能:
 * - options 配列による一括レンダリング
 * - 子要素としての Radio コンポーネント配置もサポート
 * - horizontal / vertical レイアウト切替
 * - disabled 状態の一括制御
 * - 値の等価比較（文字列・数値の柔軟な比較）
 *
 * @example
 * // options 配列を使う場合
 * <RadioGroup
 *   value={selectedValue}
 *   oninput={(val) => selectedValue = val}
 *   options={[
 *     { label: "オプション1", value: "opt1" },
 *     { label: "オプション2", value: "opt2" }
 *   ]}
 * />
 *
 * @example
 * // 子要素として Radio を配置する場合
 * <RadioGroup value={selectedValue} oninput={(val) => selectedValue = val}>
 *   <Radio value="opt1">オプション1</Radio>
 *   <Radio value="opt2">オプション2</Radio>
 * </RadioGroup>
 */
export declare class RadioGroup implements m.Component<RadioGroupAttrs> {
    private nameId;
    /**
     * @function isEqual
     * @description 値の等価比較（柔軟な文字列・数値比較）
     */
    private isEqual;
    view(vnode: m.Vnode<RadioGroupAttrs>): JSX.Element;
}
//# sourceMappingURL=RadioGroup.d.ts.map