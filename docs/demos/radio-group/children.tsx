/** @jsx m */
import m from "mithril";
import { RadioGroup } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
  let selected = 1;

  m.mount(el, {
    view() {
      return (
        <div>
          <RadioGroup
            value={selected}
            oninput={(v: number) => {
              selected = Number(v);
              m.redraw();
            }}
          >
            {"低"}
            {"中"}
            {"高"}
          </RadioGroup>
          <div class="mt-2 text-muted small">{`選択中インデックス: ${selected}`}</div>
        </div>
      );
    }
  });
}
