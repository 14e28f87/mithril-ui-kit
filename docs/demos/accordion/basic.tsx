/** @jsx m */
import m from "mithril";
import { Accordion } from "mithriluikit";

export function setup(el: HTMLElement): void {
  m.mount(el, {
    view() {
      return (
        <Accordion.Root collapsible defaultValue={["overview"]} variant="enclosed">
          <Accordion.Item value="overview">
            <Accordion.ItemTrigger>
              概要
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>現行 Chakra UI 風の Accordion.Root / Item 系 API で利用できます。</Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>

          <Accordion.Item value="spec">
            <Accordion.ItemTrigger>
              仕様
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>collapsible や variant、size などを組み合わせて調整できます。</Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        </Accordion.Root>
      );
    },
  });
}
