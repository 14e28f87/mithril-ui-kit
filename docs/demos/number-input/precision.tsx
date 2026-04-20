/** @jsx m */
import m from "mithril";
import { NumberInput } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
  m.mount(el, {
    view() {
      return (
        <NumberInput.Root defaultValue={3.14} min={0} max={10} step={0.01} precision={2}>
          <NumberInput.Label>精度 (precision=2)</NumberInput.Label>
          <NumberInput.Input />
          <NumberInput.Control />
          <NumberInput.ValueText />
        </NumberInput.Root>
      );
    },
  });
}
