/** @jsx m */
import m from "mithril";
import { Accordion } from "mithriluikit";

export function setup(el: HTMLElement): void {
  m.mount(el, {
    view() {
      return (
        <Accordion.Root collapsible orientation="horizontal" variant="enclosed">
          <Accordion.Item value="tab-1">
            <Accordion.ItemTrigger>
              タブ1
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>横方向ナビゲーションの内容1。ArrowLeft / ArrowRight で移動できます。</Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
          <Accordion.Item value="tab-2">
            <Accordion.ItemTrigger>
              タブ2
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>横方向ナビゲーションの内容2</Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        </Accordion.Root>
      );
    },
  });
}
