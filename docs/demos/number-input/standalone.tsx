/** @jsx m */
import m from "mithril";
import { NumberInput } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
  m.mount(el, {
    view() {
      return (
        <NumberInput.Root defaultValue={50} min={0} max={100} step={5}>
          <NumberInput.DecrementTrigger />
          <NumberInput.Input />
          <NumberInput.IncrementTrigger />
        </NumberInput.Root>
      );
    },
  });
}
