/** @jsx m */
import m from "mithril";
import { SelectClassic as Select } from "mithriluikit-dev";

export function setup(el: HTMLElement): void {
  let value: string | null = "opt2";

  m.mount(el, {
    view() {
      return (
        <div>
          <Select
            value={value}
            options={[
              { label: "オプション1", value: "opt1" },
              { label: "オプション2", value: "opt2" },
              { label: "オプション3", value: "opt3" }
            ]}
            showSearch={true}
            allowClear={true}
            placeholder="選択してください"
            oninput={(v: any) => {
              value = (v as string | null) ?? null;
              m.redraw();
            }}
          />
          <div class="mt-2 text-muted small">{`現在値: ${value ?? "(null)"}`}</div>
        </div>
      );
    }
  });
}
