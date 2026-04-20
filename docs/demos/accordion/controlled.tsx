/** @jsx m */
import m from "mithril";
import { Accordion } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
  let value: Array<string | number> = ["second"];
  let legacyIndex: number | number[] = 1;

  m.mount(el, {
    view() {
      return (
        <div>
          <Accordion.Root
            value={value}
            collapsible
            onValueChange={(details) => {
              value = details.value;
              m.redraw();
            }}
            onChange={(index) => {
              legacyIndex = index;
              m.redraw();
            }}
          >
            <Accordion.Item value="first">
              <Accordion.ItemTrigger>
                First
                <Accordion.ItemIndicator />
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <Accordion.ItemBody>制御モードで value を外から管理できます。</Accordion.ItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>

            <Accordion.Item value="second">
              <Accordion.ItemTrigger>
                Second
                <Accordion.ItemIndicator />
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <Accordion.ItemBody>旧 API 互換の onChange(index) も併用できます。</Accordion.ItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
          </Accordion.Root>

          <div style={{ marginTop: "12px", fontSize: "0.9rem", color: "#617082" }}>
            {`value: ${JSON.stringify(value)} / onChange: ${JSON.stringify(legacyIndex)}`}
          </div>
        </div>
      );
    },
  });
}
