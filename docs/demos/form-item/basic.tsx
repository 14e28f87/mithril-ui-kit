/** @jsx m */
import m from "mithril";
import { Form, FormItem, Input } from "mithriluikit";

export function setup(el: HTMLElement): void {
  class FormItemDemo implements m.Component {
    private formRef = new Form();
    private status = "未検証";

    public view() {
      const ThisFormRef: any = this.formRef;

      return (
        <div>
          <ThisFormRef
            layout="vertical"
            initialValues={{
              password: ""
            }}
            onFinish={async () => {
              this.status = "検証OK";
              m.redraw();
            }}
            onFinishFailed={async () => {
              this.status = "検証NG";
              m.redraw();
            }}
          >
            <FormItem
              name="password"
              label="パスワード"
              rules={[
                { required: true, message: "パスワードは必須です" },
                { min: 8, message: "8文字以上で入力してください" }
              ]}
              formRef={this.formRef}
            >
              <Input type="password" placeholder="8文字以上" />
            </FormItem>

            <FormItem>
              <button class="btn btn-primary" type="submit">検証する</button>
            </FormItem>
          </ThisFormRef>

          <div class="mt-2 text-muted small">{`状態: ${this.status}`}</div>
        </div>
      );
    }
  }

  m.mount(el, new FormItemDemo());
}
