/** @jsx m */
import m from "mithril";
import { Dropdown, type DropdownSelectDetails } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
  let lastAction = "なし";

  const itemStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: "0.375rem 0.75rem",
    background: "transparent",
    border: "none",
    borderRadius: "0",
    fontSize: "0.875rem",
    color: "var(--bs-body-color, #212529)",
    cursor: "pointer",
    textAlign: "left" as const,
    gap: "0.5rem",
  };

  m.mount(el, {
    view() {
      return (
        <div style="display:flex; gap:1rem; flex-wrap:wrap;">
          <Dropdown.Root
            onSelect={(d: DropdownSelectDetails) => { lastAction = d.value; m.redraw(); }}
          >
            <Dropdown.Trigger>File ▾</Dropdown.Trigger>
            <Dropdown.Positioner>
              <Dropdown.Content>
                <Dropdown.Item value="new">📄 新規作成</Dropdown.Item>
                <Dropdown.Item value="open">📂 開く</Dropdown.Item>
                <Dropdown.Separator />

                {/* サブメニュー: 右サイドに配置 */}
                <div style="position:relative">
                  <Dropdown.Root positioning="right" style={{ display: "block" }}
                    onSelect={(d: DropdownSelectDetails) => { lastAction = d.value; m.redraw(); }}
                  >
                    <Dropdown.Trigger style={itemStyle}>
                      <span>💾 エクスポート</span>
                      <span style="font-size:0.7rem">▶</span>
                    </Dropdown.Trigger>
                    <Dropdown.Positioner>
                      <Dropdown.Content>
                        <Dropdown.Item value="export-pdf">📕 PDF</Dropdown.Item>
                        <Dropdown.Item value="export-csv">📊 CSV</Dropdown.Item>
                        <Dropdown.Item value="export-json">📋 JSON</Dropdown.Item>
                      </Dropdown.Content>
                    </Dropdown.Positioner>
                  </Dropdown.Root>
                </div>

                <Dropdown.Separator />
                <Dropdown.Item value="close" destructive>✕ 閉じる</Dropdown.Item>
              </Dropdown.Content>
            </Dropdown.Positioner>
          </Dropdown.Root>

          <div class="w-100 mt-2 text-muted small">{`選択した操作: ${lastAction}`}</div>
        </div>
      );
    }
  });
}
