/** @jsx m */
import m from "mithril";
import { Form, FormItem, Input } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
  class ValidationDemo implements m.Component {
    private formRef = new Form();
    private result = "";

    public view() {
      const Ref: any = this.formRef;
      return (
        <div>
          <Ref
            layout="vertical"
            onFinish={(values: Record<string, any>) => {
              this.result = "送信成功: " + JSON.stringify(values);
              m.redraw();
            }}
          >
            <FormItem
              name="username"
              label="ユーザー名"
              rules={[
                { required: true, message: "ユーザー名は必須です" },
                { min: 3, message: "3文字以上で入力してください" },
                { max: 20, message: "20文字以下で入力してください" },
              ]}
              formRef={this.formRef}
            >
              <Input placeholder="3〜20文字" />
            </FormItem>
            <FormItem
              name="email"
              label="メールアドレス"
              rules={[
                { required: true, message: "メールアドレスは必須です" },
                {
                  validator: (v: string) => {
                    if (v && !v.includes("@")) {
                      throw new Error("有効なメールアドレスを入力してください");
                    }
                  },
                },
              ]}
              formRef={this.formRef}
            >
              <Input type="email" placeholder="example@domain.com" />
            </FormItem>
            <FormItem>
              <button class="btn btn-primary" type="submit">
                バリデーション付き送信
              </button>
            </FormItem>
          </Ref>
          {this.result && (
            <div class="mt-2 alert alert-success small">{this.result}</div>
          )}
        </div>
      );
    }
  }

  m.mount(el, new ValidationDemo());
}
