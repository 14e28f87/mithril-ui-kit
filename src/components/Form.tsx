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
	onFinishFailed?: (errors: { name: string; error: string }[]) => void | Promise<void>;
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
export class Form implements m.Component<FormAttrs> {
  /** フィールド状態のマップ */
  public state: FormState = {
    fields: new Map(),
  };

  /** 現在の仮想ノード */
  private vnode!: m.VnodeDOM<FormAttrs>;

  /**
   * @method oninit
   * @description フォームの初期化
   * @param {m.Vnode<FormAttrs>} vnode - Mithril の仮想ノード
   */
  oninit(vnode: m.Vnode<FormAttrs>) {
    this.vnode = vnode as any;
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
  public registerField(name: string, initialValue: any = null): void {
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
	public unregisterField(name: string): void {
		this.state.fields.delete(name);
	}

	/**
	 * @function setFieldValue
	 * @description フィールド値を更新
	 * @param {string} name - フィールド名
	 * @param {any} value - 設定値
	 */
	public setFieldValue(name: string, value: any): void {
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
	public getFieldValue(name: string): any {
		return this.state.fields.get(name)?.value;
	}

	/**
	 * @function setFieldError
	 * @description フィールドのエラーを設定
	 * @param {string} name - フィールド名
	 * @param {string|null} error - エラーメッセージ
	 */
	public setFieldError(name: string, error: string | null): void {
		const field = this.state.fields.get(name);
		if (field) {
			field.error = error;
			m.redraw();
		}
	}

	private async runValidationRules(name: string, value: any, rules: any[]): Promise<void> {
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
			} catch (err: any) {
				const errorMsg = err instanceof Error ? err.message : String(err);
				this.setFieldError(name, errorMsg);
				throw new Error(errorMsg);
			}
		}
	}

	public async validateValue(name: string, value: any, rules: any[]): Promise<void> {
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
	public async validateField(name: string, rules: any[]): Promise<void> {
		const field = this.state.fields.get(name);
		if (!field) return;

		await this.runValidationRules(name, field.value, rules);
	}

	/**
	 * @async
	 * @function validate
	 * @description 全フィールドのバリデーション実行
	 * @returns {Promise<Record<string, any>>} 検証済みの値
	 * @throws バリデーション失敗時
	 */
	public async validate(): Promise<Record<string, any>> {
		const values: Record<string, any> = {};
		const errors: { name: string; error: string }[] = [];

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
	private async submit(e: Event): Promise<void> {
		e.preventDefault();
		const attrs = this.vnode.attrs;

		const values: Record<string, any> = {};
		const errors: { name: string; error: string }[] = [];

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
			} catch (err: any) {
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
	view(vnode: m.Vnode<FormAttrs>) {
		this.vnode = vnode as any;
		const attrs = vnode.attrs;
		const children = vnode.children;

		return (
			<form
				class={attrs.class}
				data-layout={attrs.layout || "vertical"}
				onsubmit={(e: Event) => this.submit(e)}
			>
				{children}
			</form>
		);
	}
}
