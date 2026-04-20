/** @jsx m */
import m from "mithril";
import { Dropdown, type DropdownSelectDetails } from "mithriluikit";

export function setup(el: HTMLElement): void {
  let lastAction = "なし";
  let showPreview = true;
  let showLineNumbers = false;
  let theme = "dark";
  let indent = "2";

  m.mount(el, {
    view() {
      return (
        <div style="display:flex; gap:1rem; flex-wrap:wrap;">
          <Dropdown.Root
            onSelect={(d: DropdownSelectDetails) => { lastAction = d.value; m.redraw(); }}
          >
            <Dropdown.Trigger>⚙️ Editor Settings ▾</Dropdown.Trigger>
            <Dropdown.Positioner>
              <Dropdown.Content>
                {/* 表示設定グループ */}
                <Dropdown.ItemGroup label="表示">
                  <Dropdown.CheckboxItem value="preview" checked={showPreview}
                    onCheckedChange={(c: boolean) => { showPreview = c; m.redraw(); }}>
                    プレビュー表示
                  </Dropdown.CheckboxItem>
                  <Dropdown.CheckboxItem value="line-numbers" checked={showLineNumbers}
                    onCheckedChange={(c: boolean) => { showLineNumbers = c; m.redraw(); }}>
                    行番号を表示
                  </Dropdown.CheckboxItem>
                </Dropdown.ItemGroup>

                <Dropdown.Separator />

                {/* テーマ選択グループ */}
                <Dropdown.ItemGroup label="テーマ">
                  <Dropdown.RadioItemGroup value={theme}
                    onValueChange={(v: string) => { theme = v; m.redraw(); }}>
                    <Dropdown.RadioItem value="dark">🌙 Dark</Dropdown.RadioItem>
                    <Dropdown.RadioItem value="light">☀️ Light</Dropdown.RadioItem>
                    <Dropdown.RadioItem value="solarized">🎨 Solarized</Dropdown.RadioItem>
                  </Dropdown.RadioItemGroup>
                </Dropdown.ItemGroup>

                <Dropdown.Separator />

                {/* インデントグループ */}
                <Dropdown.ItemGroup label="インデント幅">
                  <Dropdown.RadioItemGroup value={indent}
                    onValueChange={(v: string) => { indent = v; m.redraw(); }}>
                    <Dropdown.RadioItem value="2">2 スペース</Dropdown.RadioItem>
                    <Dropdown.RadioItem value="4">4 スペース</Dropdown.RadioItem>
                    <Dropdown.RadioItem value="tab">タブ</Dropdown.RadioItem>
                  </Dropdown.RadioItemGroup>
                </Dropdown.ItemGroup>

                <Dropdown.Separator />

                {/* アクション */}
                <Dropdown.Item value="reset">↩️ 設定をリセット</Dropdown.Item>
                <Dropdown.Item value="save">💾 設定を保存</Dropdown.Item>
                <Dropdown.Separator />
                <Dropdown.Item value="uninstall" destructive>🗑️ 拡張機能を削除</Dropdown.Item>
              </Dropdown.Content>
            </Dropdown.Positioner>
          </Dropdown.Root>

          {/* 現在の設定表示 */}
          <div style="font-size:0.8rem; color:#6c757d; padding:0.5rem; background:#f8f9fa; border-radius:0.375rem; border:1px solid #dee2e6;">
            <div>Preview: {showPreview ? "ON" : "OFF"} | LineNums: {showLineNumbers ? "ON" : "OFF"}</div>
            <div>Theme: {theme} | Indent: {indent} spaces</div>
            <div>Last: {lastAction}</div>
          </div>
        </div>
      );
    }
  });
}
