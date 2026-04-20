/** @jsx m */
import m from "mithril";
import { NumberInput } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
  m.mount(el, {
    view() {
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <div style={{ fontSize: "0.8rem", color: "#888", marginBottom: "4px" }}>variant="filled" size="lg"</div>
            <NumberInput.Root defaultValue={10} variant="filled" size="lg">
              <NumberInput.Input />
              <NumberInput.Control />
            </NumberInput.Root>
          </div>
          <div>
            <div style={{ fontSize: "0.8rem", color: "#888", marginBottom: "4px" }}>variant="flushed" size="sm"</div>
            <NumberInput.Root defaultValue={10} variant="flushed" size="sm">
              <NumberInput.Input />
              <NumberInput.Control />
            </NumberInput.Root>
          </div>
          <div>
            <div style={{ fontSize: "0.8rem", color: "#888", marginBottom: "4px" }}>variant="outline" size="xs"</div>
            <NumberInput.Root defaultValue={10} variant="outline" size="xs">
              <NumberInput.Input />
              <NumberInput.Control />
            </NumberInput.Root>
          </div>
        </div>
      );
    },
  });
}
