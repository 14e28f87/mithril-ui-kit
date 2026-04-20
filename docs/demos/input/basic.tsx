/** @jsx m */
import m from "mithril";
import { Input } from "mithriluikit";

export function setup(el: HTMLElement): void {
  let value: string | null = "mithril-user";

  m.mount(el, {
    view() {
      return (
        <div>
          <Input
            value={value}
            placeholder="ユーザー名を入力"
            oninput={(v: string | null) => {
              value = v;
              m.redraw();
            }}
          />
          <div class="mt-2 text-muted small">{`現在値: ${value ?? "(null)"}`}</div>
        </div>
      );
    }
  });
}
