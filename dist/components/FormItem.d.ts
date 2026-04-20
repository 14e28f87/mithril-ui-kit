/** @jsx m */
import m from "mithril";
/**
 * @typedef {Object} Rule
 * @property {boolean} [required] - 必須入力フラグ
 * @property {number} [min] - 最小長（文字数 or 値）
 * @property {number} [max] - 最大長
 * @property {string} [message] - エラーメッセージ
 * @property {(value: any) => void|Promise<void>} [validator] - カスタムバリデータ
 */
export type Rule = {
    required?: boolean;
    min?: number;
    max?: number;
    message?: string;
    validator?: (value: any) => void | Promise<void>;
};
/**
 * @typedef {Object} FormItemAttrs
 * @property {string} [name] - フィールド名（フォーム連携に必須）
 * @property {string} [label] - ラベル文字列
 * @property {Rule[]} [rules] - バリデーションルール配列
 * @property {any} [initialValue] - 初期値
 * @property {any} formRef - Form コンポーネント参照
 * @property {string} [class] - 追加 CSS クラス
 */
export type FormItemAttrs = {
    name?: string;
    label?: string;
    rules?: Rule[];
    initialValue?: any;
    formRef?: any;
    class?: string;
};
/**
 * @class FormItem
 * @description
 * Form と子コンポーネント（Input など）を仲介するコンポーネント
 *
 * 機能:
 * - フィールドの登録・アンレジスト
 * - 子コンポーネントへの value / oninput / onblur 注入
 * - is-invalid クラスの自動付与
 * - エラーメッセージ表示
 *
 * 使用方法:
 * 1. Form インスタンスを formRef に渡す
 * 2. name を指定する
 * 3. 子要素に Input などを配置
 *
 * @example
 * <FormItem
 *   name="username"
 *   label="ユーザー名"
 *   rules={[{ required: true }]}
 *   formRef={formRef}
 * >
 *   <Input placeholder="入力..." />
 * </FormItem>
 */
export declare class FormItem implements m.Component<FormItemAttrs> {
    private vnode;
    /**
     * @function oninit
     * @description
     * FormItem の初期化
     * - Form に フィールドを登録
     */
    oninit(vnode: m.Vnode<FormItemAttrs>): void;
    /**
     * @function onremove
     * @description
     * FormItem の削除時
     * - Form から フィールド登録を解除
     */
    onremove(): void;
    /**
     * @async
     * @function validate
     * @description フィールドのバリデーション実行
     * @param {string} name - フィールド名
     * @param {Rule[]} rules - バリデーションルール
     * @param {any} formRef - Form 参照
     */
    private validate;
    /**
     * @function view
     * @description FormItem のレンダリング
     */
    view(vnode: m.Vnode<FormItemAttrs>): JSX.Element;
}
//# sourceMappingURL=FormItem.d.ts.map