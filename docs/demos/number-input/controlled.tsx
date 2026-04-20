/** @jsx m */
import m from "mithril";
import { NumberInput } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
  let value: number | null = 42;

  m.mount(el, {
    view() {
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <NumberInput.Root
            value={value}
            min={0}
            max={100}
            onValueChange={(d) => { value = d.value; m.redraw(); }}
          >
            <NumberInput.Input />
            <NumberInput.Control />
          </NumberInput.Root>
          <div style={{ fontSize: "12px", color: "#666" }}>{`value: ${value}`}</div>
        </div>
      );
    },
  });
}
