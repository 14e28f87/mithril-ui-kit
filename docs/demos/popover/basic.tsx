/** @jsx m */
import m from "mithril";
import { Popover } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
  m.mount(el, {
    view() {
      return (
        <Popover.Root placement="bottom" size="sm">
          <Popover.Trigger>詳細を開く</Popover.Trigger>
          <Popover.Content>
            <Popover.Arrow />
            <Popover.Header>Popover</Popover.Header>
            <Popover.Body>補足情報やアクションを含むポップオーバーです。</Popover.Body>
            <Popover.Footer>
              <Popover.CloseTrigger>閉じる</Popover.CloseTrigger>
            </Popover.Footer>
          </Popover.Content>
        </Popover.Root>
      );
    },
  });
}
