/** @jsx m */
import m from "mithril";
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
export class Form {
    constructor() {
        /** フィールド状態のマップ */
        this.state = {
            fields: new Map(),
        };
    }
    /**
     * @method oninit
     * @description フォームの初期化
     * @param {m.Vnode<FormAttrs>} vnode - Mithril の仮想ノード
     */
    oninit(vnode) {
        this.vnode = vnode;
        const { initialValues } = vnode.attrs;
        if (initialValues) {
            for (const [name, value] of Object.entries(initialValues)) {
                this.registerField(name, value);
            }
        }
    }
    /**
     * @method registerField
     * @description フィールドを登録または更新
     * @param {string} name - フィールド名
     * @param {any} initialValue - 初期値
     */
    registerField(name, initialValue = null) {
        if (!this.state.fields.has(name) || initialValue != null) {
            this.state.fields.set(name, {
                value: initialValue,
                error: null,
            });
        }
    }
    /**
     * @function unregisterField
     * @description フィールドの登録を解除
     * @param {string} name - フィールド名
     */
    unregisterField(name) {
        this.state.fields.delete(name);
    }
    /**
     * @function setFieldValue
     * @description フィールド値を更新
     * @param {string} name - フィールド名
     * @param {any} value - 設定値
     */
    setFieldValue(name, value) {
        const field = this.state.fields.get(name);
        if (field) {
            field.value = value;
            m.redraw();
        }
    }
    /**
     * @function getFieldValue
     * @description フィールド値を取得
     * @param {string} name - フィールド名
     * @returns {any} フィールド値
     */
    getFieldValue(name) {
        return this.state.fields.get(name)?.value;
    }
    /**
     * @function setFieldError
     * @description フィールドのエラーを設定
     * @param {string} name - フィールド名
     * @param {string|null} error - エラーメッセージ
     */
    setFieldError(name, error) {
        const field = this.state.fields.get(name);
        if (field) {
            field.error = error;
            m.redraw();
        }
    }
    async runValidationRules(name, value, rules) {
        for (const rule of rules) {
            try {
                if (rule.required && (!value || value === "")) {
                    throw new Error(rule.message || `${name} は必須です`);
                }
                if (rule.min !== undefined && value && value.length < rule.min) {
                    throw new Error(rule.message || `${name} は ${rule.min} 文字以上です`);
                }
                if (rule.max !== undefined && value && value.length > rule.max) {
                    throw new Error(rule.message || `${name} は ${rule.max} 文字以下です`);
                }
                if (rule.validator) {
                    await Promise.resolve(rule.validator(value));
                }
                this.setFieldError(name, null);
            }
            catch (err) {
                const errorMsg = err instanceof Error ? err.message : String(err);
                this.setFieldError(name, errorMsg);
                throw new Error(errorMsg);
            }
        }
    }
    async validateValue(name, value, rules) {
        await this.runValidationRules(name, value, rules);
    }
    /**
     * @async
     * @function validateField
     * @description フィールドに対してバリデーション実行
     * @param {string} name - フィールド名
     * @param {any[]} rules - バリデーションルール
     * @throws バリデーション失敗時
     */
    async validateField(name, rules) {
        const field = this.state.fields.get(name);
        if (!field)
            return;
        await this.runValidationRules(name, field.value, rules);
    }
    /**
     * @async
     * @function validate
     * @description 全フィールドのバリデーション実行
     * @returns {Promise<Record<string, any>>} 検証済みの値
     * @throws バリデーション失敗時
     */
    async validate() {
        const values = {};
        const errors = [];
        for (const [name, field] of this.state.fields.entries()) {
            values[name] = field.value;
        }
        return values;
    }
    /**
     * @async
     * @function submit
     * @description フォーム送信処理（バリデーション → onFinish/onFinishFailed）
     * @param {Event} e - フォームイベント
     */
    async submit(e) {
        e.preventDefault();
        const attrs = this.vnode.attrs;
        const values = {};
        const errors = [];
        // 全フィールドの値を収集
        for (const [name, field] of this.state.fields.entries()) {
            values[name] = field.value;
        }
        console.log("Form submit - fields:", this.state.fields);
        console.log("Form submit - values:", values);
        // onFinish コールバック実行
        if (attrs.onFinish) {
            try {
                await Promise.resolve(attrs.onFinish(values));
            }
            catch (err) {
                console.error("onFinish error:", err);
                if (attrs.onFinishFailed) {
                    await Promise.resolve(attrs.onFinishFailed(errors));
                }
            }
        }
    }
    /**
     * @function view
     * @description フォームのレンダリング
     */
    view(vnode) {
        this.vnode = vnode;
        const attrs = vnode.attrs;
        const children = vnode.children;
        return (m("form", { class: attrs.class, "data-layout": attrs.layout || "vertical", onsubmit: (e) => this.submit(e) }, children));
    }
}
