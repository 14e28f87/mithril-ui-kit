/** @jsx m */
/** @jsxRuntime classic */
import m from "mithril";
import { Checkbox } from "mithriluikit";

export function setup(el: HTMLElement): void {
  let values = ["opcua", "ws"];

  m.mount(el, {
    view() {
      return (
        <div class="d-grid gap-2">
          <Checkbox.Group
            value={values}
            orientation="horizontal"
            onValueChange={(details: { value: string[] }) => {
              values = details.value;
              m.redraw();
            }}
          >
            <Checkbox.Root value="opcua">
              <Checkbox.HiddenInput />
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              <Checkbox.Label>OPC UA</Checkbox.Label>
            </Checkbox.Root>
            <Checkbox.Root value="ws">
              <Checkbox.HiddenInput />
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              <Checkbox.Label>WebSocket</Checkbox.Label>
            </Checkbox.Root>
            <Checkbox.Root value="rest">
              <Checkbox.HiddenInput />
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              <Checkbox.Label>REST</Checkbox.Label>
            </Checkbox.Root>
          </Checkbox.Group>

          <div class="small text-muted">{`選択値: ${values.join(", ") || "(なし)"}`}</div>
        </div>
      );
    }
  });
}