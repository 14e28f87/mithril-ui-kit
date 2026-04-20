/** @jsx m */
import m from "mithril";
import { Dropdown, type DropdownSelectDetails } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
  let lastAction = "なし";

  m.mount(el, {
    view() {
      return (
        <div>
          <Dropdown.Root
            onSelect={(d: DropdownSelectDetails) => { lastAction = d.value; m.redraw(); }}
          >
            <Dropdown.ContextTrigger>
              <div style="border: 2px dashed #dee2e6; border-radius: 0.5rem; padding: 2rem; text-align: center; color: #6c757d; background: #f8f9fa; user-select: none;">
                <div style="font-size: 0.875rem; margin-bottom: 0.5rem;">🖱️ この領域を右クリックしてください</div>
                <div style="font-size: 0.75rem; opacity: 0.7;">Right-click to open context menu</div>
              </div>
            </Dropdown.ContextTrigger>
            <Dropdown.Positioner>
              <Dropdown.Content>
                <Dropdown.Item value="copy">📋 コピー</Dropdown.Item>
                <Dropdown.Item value="paste">📌 貼り付け</Dropdown.Item>
                <Dropdown.Item value="cut">✂️ 切り取り</Dropdown.Item>
                <Dropdown.Separator />
                <Dropdown.Item value="select-all">☑️ すべて選択</Dropdown.Item>
                <Dropdown.Separator />
                <Dropdown.Item value="delete" destructive>🗑️ 削除</Dropdown.Item>
              </Dropdown.Content>
            </Dropdown.Positioner>
          </Dropdown.Root>
          <div class="mt-2 text-muted small">{`選択した操作: ${lastAction}`}</div>
        </div>
      );
    }
  });
}
