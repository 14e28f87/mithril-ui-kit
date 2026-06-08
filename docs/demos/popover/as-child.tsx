/** @jsx m */
import m from "mithril";
import { Button, Popover } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
  m.mount(el, {
    view() {
      return (
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {/* Trigger asChild: Button コンポーネントをトリガーとして使う */}
          <Popover.Root placement="bottom" size="sm">
            <Popover.Trigger asChild>
              <Button variant="outline" size="sm">詳細を開く</Button>
            </Popover.Trigger>
            <Popover.Content>
              <Popover.Arrow />
              <Popover.Header>asChild デモ</Popover.Header>
              <Popover.Body>
                Popover.Trigger に asChild を指定すると、Button などの
                カスタム要素をそのままトリガーとして利用できます。
              </Popover.Body>
              <Popover.Footer>
                <Popover.CloseTrigger asChild>
                  <Button variant="subtle" size="xs">閉じる</Button>
                </Popover.CloseTrigger>
              </Popover.Footer>
            </Popover.Content>
          </Popover.Root>

          {/* CloseTrigger asChild のみ */}
          <Popover.Root placement="bottom" size="sm">
            <Popover.Trigger>開く</Popover.Trigger>
            <Popover.Content>
              <Popover.Header>CloseTrigger asChild</Popover.Header>
              <Popover.Body>
                CloseTrigger にも asChild が使えます。
              </Popover.Body>
              <Popover.Footer>
                <Popover.CloseTrigger asChild>
                  <button
                    style={{
                      border: "none",
                      background: "none",
                      color: "var(--bs-danger, #dc3545)",
                      cursor: "pointer",
                      fontSize: "0.875rem",
                    }}
                  >
                    ✕ 閉じる
                  </button>
                </Popover.CloseTrigger>
              </Popover.Footer>
            </Popover.Content>
          </Popover.Root>
        </div>
      );
    },
  });
}
