/** @jsx m */
import m from "mithril";
import { InlineEdit } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
  let title = "キルン温度プロファイル";

  m.mount(el, {
    view() {
      return (
        <div>
          <InlineEdit
            value={title}
            placeholder="ダブルクリックして編集"
            oninput={(v: string | null) => {
              title = v ?? "";
              m.redraw();
            }}
          />
          <div class="mt-2 text-muted small">ダブルクリックで編集できます</div>
        </div>
      );
    }
  });
}
