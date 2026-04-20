/** @jsx m */
import m from "mithril";
import { Checkbox, type CheckedState } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
  let checked: CheckedState = true;

  m.mount(el, {
    view() {
      return (
        <div class="d-grid gap-2">
          <Checkbox.Root
            checked={checked}
            onCheckedChange={({ checked: next }) => {
              checked = next;
              m.redraw();
            }}
          >
            <Checkbox.HiddenInput />
            <Checkbox.Control>
              <Checkbox.Indicator />
            </Checkbox.Control>
            <Checkbox.Label>利用規約に同意する</Checkbox.Label>
          </Checkbox.Root>

          <div class="small text-muted">{`状態: ${String(checked)}`}</div>
        </div>
      );
    }
  });
}