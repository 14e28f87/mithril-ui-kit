/** @jsx m */
import m from "mithril";
import { Dropdown, type DropdownSelectDetails } from "mithriluikit";

export function setup(el: HTMLElement): void {
  let lastAction = "なし";
  let boldChecked = false;
  let fontSize = "medium";

  m.mount(el, {
    view() {
      return (
        <div style="display:flex; gap:1rem; flex-wrap:wrap;">
          {/* 基本メニュー */}
          <Dropdown.Root size="md" onSelect={(d: DropdownSelectDetails) => { lastAction = d.value; m.redraw(); }}>
            <Dropdown.Trigger>Actions ▾</Dropdown.Trigger>
            <Dropdown.Positioner>
              <Dropdown.Content>
                <Dropdown.Item value="edit">✏️ Edit</Dropdown.Item>
                <Dropdown.Item value="duplicate">📋 Duplicate</Dropdown.Item>
                <Dropdown.Separator />
                <Dropdown.Item value="archive">📦 Archive</Dropdown.Item>
                <Dropdown.Separator />
                <Dropdown.Item value="delete" destructive>🗑️ Delete</Dropdown.Item>
              </Dropdown.Content>
            </Dropdown.Positioner>
          </Dropdown.Root>

          {/* CheckboxItem */}
          <Dropdown.Root size="md">
            <Dropdown.Trigger>Format ▾</Dropdown.Trigger>
            <Dropdown.Positioner>
              <Dropdown.Content>
                <Dropdown.CheckboxItem value="bold" checked={boldChecked}
                  onCheckedChange={(c: boolean) => { boldChecked = c; m.redraw(); }}>
                  Bold
                </Dropdown.CheckboxItem>
              </Dropdown.Content>
            </Dropdown.Positioner>
          </Dropdown.Root>

          {/* RadioItem */}
          <Dropdown.Root size="md">
            <Dropdown.Trigger>Size: {fontSize} ▾</Dropdown.Trigger>
            <Dropdown.Positioner>
              <Dropdown.Content>
                <Dropdown.RadioItemGroup value={fontSize}
                  onValueChange={(v: string) => { fontSize = v; m.redraw(); }}>
                  <Dropdown.RadioItem value="small">Small</Dropdown.RadioItem>
                  <Dropdown.RadioItem value="medium">Medium</Dropdown.RadioItem>
                  <Dropdown.RadioItem value="large">Large</Dropdown.RadioItem>
                </Dropdown.RadioItemGroup>
              </Dropdown.Content>
            </Dropdown.Positioner>
          </Dropdown.Root>

          <div class="w-100 mt-2 text-muted small">{`最後に選択した操作: ${lastAction}`}</div>
        </div>
      );
    }
  });
}
