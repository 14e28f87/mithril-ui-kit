/** @jsx m */
import m from "mithril";
import { ColorPicker } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
  let value = "#3b82f6";

  m.mount(el, {
    view() {
      return (
        <div class="d-grid gap-2" style={{ maxWidth: "360px" }}>
          <ColorPicker.Root
            value={value}
            format="hexa"
            onValueChange={({ value: next }) => {
              value = next;
              m.redraw();
            }}
          >
            <ColorPicker.Label>テーマカラー</ColorPicker.Label>
            <ColorPicker.Control>
              <ColorPicker.Input />
              <ColorPicker.Trigger>開く</ColorPicker.Trigger>
            </ColorPicker.Control>
            <ColorPicker.Positioner>
              <ColorPicker.Content>
                <ColorPicker.Area />
                <ColorPicker.ChannelSlider channel="hue" />
                <ColorPicker.ChannelSlider channel="alpha" />
              </ColorPicker.Content>
            </ColorPicker.Positioner>
          </ColorPicker.Root>

          <div class="small text-muted">{`現在値: ${value}`}</div>
        </div>
      );
    }
  });
}