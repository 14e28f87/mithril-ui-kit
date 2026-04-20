/** @jsx m */
import m from "mithril";
/**
 * @typedef {Object} FieldState
 * @property {any} value - フィールド値
 * @property {string|null} error - エラーメッセージ
 */
type FieldState = {
    value: any;
    error: string | null;
};
/**
 * @typedef {Object} FormState
 * @property {Map<string, FieldState>} fields - フィールド状態マップ
 */
export type FormState = {
    fields: Map<string, FieldState>;
};
/**
 * @typedef {Object} FormAttrs
 * @property {(values: Record<string, any>) => void|Promise<void>} [onFinish] - 検証成功時のコールバック
 * @property {(errors: {name: string; error: string}[]) => void|Promise<void>} [onFinishFailed] - 検証失敗時のコールバック
 * @property {string} [layout] - レイアウト（"vertical" | "horizontal"）
 * @property {string} [class] - 追加 CSS クラス
 * @property {Record<string, any>} [initialValues] - 初期値のオブジェクト
 */
export type FormAttrs = {
    onFinish?: (values: Record<string, any>) => void | Promise<void>;
    onFinishFailed?: (errors: {
        name: string;
        error: string;
    }[]) => void | Promise<void>;
    layout?: "vertical" | "horizontal";
    class?: string;
    initialValues?: Record<string, any>;
};
/**
 * @class Form
 * @description
 * フォーム全体を管理するコンポーネント
 *
 * 機能:
 * - FormItem の登録・アンレジスト管理
 * - フィールド値の一元管理
 * - バリデーション実行
 * - onFinish / onFinishFailed コールバック
 *
 * 使用方法:
 * - formRef に Form インスタンスを保持
 * - FormItem と Input に formRef を渡す
 * - submit ボタンで validate → onFinish
 *
 * @example
 * const formRef = new Form();
 * return (
 *   <formRef.tag
 *     onFinish={(values) => console.log(values)}
 *   >
 *     <FormItem name="username" formRef={formRef}>
 *       <Input />
 *     </FormItem>
 *   </formRef.tag>
 * );
 */
export declare class Form implements m.Component<FormAttrs> {
    /** フィールド状態のマップ */
    state: FormState;
    /** 現在の仮想ノード */
    private vnode;
    /**
     * @method oninit
     * @description フォームの初期化
     * @param {m.Vnode<FormAttrs>} vnode - Mithril の仮想ノード
     */
    oninit(vnode: m.Vnode<FormAttrs>): void;
    /**
     * @method registerField
     * @description フィールドを登録または更新
     * @param {string} name - フィールド名
     * @param {any} initialValue - 初期値
     */
    registerField(name: string, initialValue?: any): void;
    /**
     * @function unregisterField
     * @description フィールドの登録を解除
     * @param {string} name - フィールド名
     */
    unregisterField(name: string): void;
    /**
     * @function setFieldValue
     * @description フィールド値を更新
     * @param {string} name - フィールド名
     * @param {any} value - 設定値
     */
    setFieldValue(name: string, value: any): void;
    /**
     * @function getFieldValue
     * @description フィールド値を取得
     * @param {string} name - フィールド名
     * @returns {any} フィールド値
     */
    getFieldValue(name: string): any;
    /**
     * @function setFieldError
     * @description フィールドのエラーを設定
     * @param {string} name - フィールド名
     * @param {string|null} error - エラーメッセージ
     */
    setFieldError(name: string, error: string | null): void;
    private runValidationRules;
    validateValue(name: string, value: any, rules: any[]): Promise<void>;
    /**
     * @async
     * @function validateField
     * @description フィールドに対してバリデーション実行
     * @param {string} name - フィールド名
     * @param {any[]} rules - バリデーションルール
     * @throws バリデーション失敗時
     */
    validateField(name: string, rules: any[]): Promise<void>;
    /**
     * @async
     * @function validate
     * @description 全フィールドのバリデーション実行
     * @returns {Promise<Record<string, any>>} 検証済みの値
     * @throws バリデーション失敗時
     */
    validate(): Promise<Record<string, any>>;
    /**
     * @async
     * @function submit
     * @description フォーム送信処理（バリデーション → onFinish/onFinishFailed）
     * @param {Event} e - フォームイベント
     */
    private submit;
    /**
     * @function view
     * @description フォームのレンダリング
     */
    view(vnode: m.Vnode<FormAttrs>): JSX.Element;
}
export {};
//# sourceMappingURL=Form.d.ts.map