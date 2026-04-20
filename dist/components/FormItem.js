/** @jsx m */
import m from "mithril";
import classNames from "classnames";
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
export class FormItem {
    /**
     * @function oninit
     * @description
     * FormItem の初期化
     * - Form に フィールドを登録
     */
    oninit(vnode) {
        this.vnode = vnode;
        const { formRef, name, initialValue } = vnode.attrs;
        if (formRef && name) {
            formRef.registerField(name, initialValue);
            console.log(`FormItem oninit - registered ${name} with initialValue:`, initialValue);
        }
    }
    /**
     * @function onremove
     * @description
     * FormItem の削除時
     * - Form から フィールド登録を解除
     */
    onremove() {
        const { formRef, name } = this.vnode.attrs;
        if (formRef && name) {
            formRef.unregisterField(name);
        }
    }
    /**
     * @async
     * @function validate
     * @description フィールドのバリデーション実行
     * @param {string} name - フィールド名
     * @param {Rule[]} rules - バリデーションルール
     * @param {any} formRef - Form 参照
     */
    async validate(name, rules, formRef, options) {
        try {
            if (options?.useCandidateValue) {
                await formRef.validateValue(name, options.candidateValue, rules);
                return;
            }
            await formRef.validateField(name, rules);
        }
        catch (err) {
            if (options?.rethrow) {
                throw err;
            }
        }
    }
    /**
     * @function view
     * @description FormItem のレンダリング
     */
    view(vnode) {
        const { formRef, name, rules, label, class: customClass } = vnode.attrs;
        const field = name ? formRef?.state?.fields?.get(name) : undefined;
        const error = field?.error;
        const children = vnode.children;
        const child = children?.[0];
        let childNode = child;
        // 子要素が関数型コンポーネントの場合、attrs を注入
        if (name && formRef && child && typeof child.tag === "function") {
            const injectedOnInput = async (e) => {
                // Event オブジェクト（e.target が存在）か、値（v が null など）か判定
                if (e?.target) {
                    formRef.setFieldValue(name, e.target.value);
                    console.log(`FormItem injectedOnInput - setFieldValue ${name}:`, e.target.value);
                    return;
                }
                await this.validate(name, rules ?? [], formRef, {
                    candidateValue: e,
                    useCandidateValue: true,
                    rethrow: true,
                });
                formRef.setFieldValue(name, e);
                console.log(`FormItem injectedOnInput - setFieldValue ${name}:`, e);
            };
            const injectedOnBlur = async () => {
                await this.validate(name, rules ?? [], formRef);
            };
            childNode = m(child.tag, {
                ...(child.attrs || {}),
                value: formRef.getFieldValue(name),
                oninput: injectedOnInput,
                onblur: injectedOnBlur,
                class: classNames(child.attrs?.class, { "is-invalid": error }),
            });
        }
        return (m("div", { class: classNames("mb-3", customClass) },
            label && m("label", { class: "form-label" }, label),
            childNode,
            error && (m("div", { class: "invalid-feedback", style: { display: "block" } }, error))));
    }
}
