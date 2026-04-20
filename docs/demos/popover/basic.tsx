/** @jsx m */
import m from "mithril";
import { Popover2 } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
  m.mount(el, {
    view() {
      return (
        <Popover2.Root placement="bottom" size="sm">
          <Popover2.Trigger>詳細を開く</Popover2.Trigger>
          <Popover2.Content>
            <Popover2.Arrow />
            <Popover2.Header>Popover2</Popover2.Header>
            <Popover2.Body>補足情報やアクションを含むポップオーバーです。</Popover2.Body>
            <Popover2.Footer>
              <Popover2.CloseTrigger>閉じる</Popover2.CloseTrigger>
            </Popover2.Footer>
          </Popover2.Content>
        </Popover2.Root>
      );
    },
  });
}
