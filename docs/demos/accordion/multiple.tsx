/** @jsx m */
import m from "mithril";
import { Accordion } from "mithriluikit";

export function setup(el: HTMLElement): void {
  m.mount(el, {
    view() {
      return (
        <Accordion.Root multiple defaultValue={["a", "c"]} variant="subtle" size="sm">
          <Accordion.Item value="a">
            <Accordion.ItemTrigger>
              セクション A
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>複数の項目を同時に展開できます。</Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>

          <Accordion.Item value="b">
            <Accordion.ItemTrigger>
              セクション B
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>defaultValue に配列を渡して初期状態を指定できます。</Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>

          <Accordion.Item value="c">
            <Accordion.ItemTrigger>
              セクション C
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>lazyMount や unmountOnExit と組み合わせることも可能です。</Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        </Accordion.Root>
      );
    },
  });
}
