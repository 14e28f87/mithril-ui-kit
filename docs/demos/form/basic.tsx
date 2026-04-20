/** @jsx m */
import m from "mithril";
import { Form, FormItem, Input } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
  class FormDemo implements m.Component {
    private formRef = new Form();
    private submitResult = "未送信";

    public view() {
      const ThisFormRef: any = this.formRef;

      return (
        <div>
          <ThisFormRef
            layout="vertical"
            initialValues={{
              username: "太郎",
              email: "taro@example.com"
            }}
            onFinish={async (values: Record<string, any>) => {
              this.submitResult = JSON.stringify(values);
              m.redraw();
            }}
            onFinishFailed={async () => {
              this.submitResult = "バリデーションエラー";
              m.redraw();
            }}
          >
            <FormItem
              name="username"
              label="ユーザー名"
              rules={[{ required: true, message: "必須入力です" }]}
              formRef={this.formRef}
            >
              <Input placeholder="ユーザー名を入力" />
            </FormItem>

            <FormItem
              name="email"
              label="メールアドレス"
              rules={[{ required: true, message: "必須入力です" }]}
              formRef={this.formRef}
            >
              <Input type="email" placeholder="test@example.com" />
            </FormItem>

            <FormItem>
              <button class="btn btn-primary" type="submit">送信</button>
            </FormItem>
          </ThisFormRef>

          <div class="mt-2 text-muted small">{`送信結果: ${this.submitResult}`}</div>
        </div>
      );
    }
  }

  m.mount(el, new FormDemo());
}
