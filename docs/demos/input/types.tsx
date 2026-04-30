/** @jsx m */
import m from "mithril";
import { Input } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
  const state = { text: "", password: "" };

  m.mount(el, {
    view() {
      return (
        <div class="d-flex flex-column gap-3">
          <div>
            <label class="form-label">text（通常）</label>
            <Input
              value={state.text}
              placeholder="テキストを入力"
              oninput={(v) => {
                state.text = v ?? "";
                m.redraw();
              }}
            />
          </div>
          <div>
            <label class="form-label">password</label>
            <Input
              type="password"
              value={state.password}
              placeholder="パスワードを入力"
              oninput={(v) => {
                state.password = v ?? "";
                m.redraw();
              }}
            />
          </div>
          <div>
            <label class="form-label">disabled</label>
            <Input value="編集不可の固定値" disabled={true} />
          </div>
          <div class="text-muted small">
            {`text: "${state.text}" / password: "${state.password}"`}
          </div>
        </div>
      );
    },
  });
}
