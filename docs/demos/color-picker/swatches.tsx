/** @jsx m */
import m from "mithril";
import { ColorPicker } from "mithril-ui-kit";

const swatches = ["#ef4444", "#f59e0b", "#10b981", "#3b82f6", "#8b5cf6"];

export function setup(el: HTMLElement): void {
  let value = swatches[3];

  m.mount(el, {
    view() {
      return (
        <div class="d-grid gap-2" style={{ maxWidth: "360px" }}>
          <ColorPicker.Root
            value={value}
            onValueChange={({ value: next }) => {
              value = next;
              m.redraw();
            }}
          >
            <ColorPicker.Label>プリセット色</ColorPicker.Label>
            <ColorPicker.Control>
              <ColorPicker.Input />
              <ColorPicker.Trigger>選択</ColorPicker.Trigger>
            </ColorPicker.Control>
            <ColorPicker.Positioner>
              <ColorPicker.Content>
                <ColorPicker.SwatchGroup>
                  {swatches.map((swatch) => (
                    <ColorPicker.SwatchTrigger key={swatch} value={swatch} />
                  ))}
                </ColorPicker.SwatchGroup>
              </ColorPicker.Content>
            </ColorPicker.Positioner>
          </ColorPicker.Root>

          <div class="small text-muted">{`現在値: ${value}`}</div>
        </div>
      );
    }
  });
}