/** @jsx m */
import m from "mithril";
import { RadioGroup } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
  let selected = "opt1";

  m.mount(el, {
    view() {
      return (
        <div>
          <RadioGroup
            value={selected}
            orientation="horizontal"
            options={[
              { label: "オプション1", value: "opt1" },
              { label: "オプション2", value: "opt2" },
              { label: "オプション3", value: "opt3", disabled: true }
            ]}
            oninput={(v: string) => {
              selected = v;
              m.redraw();
            }}
          />
          <div class="mt-2 text-muted small">{`選択中: ${selected}`}</div>
        </div>
      );
    }
  });
}
