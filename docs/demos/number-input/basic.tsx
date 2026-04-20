/** @jsx m */
import m from "mithril";
import { NumberInput } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
  m.mount(el, {
    view() {
      return (
        <NumberInput.Root defaultValue={10} min={0} max={100}>
          <NumberInput.Input />
          <NumberInput.Control />
        </NumberInput.Root>
      );
    },
  });
}
