/** @jsx m */
import m from "mithril";
import { Tooltip } from "mithriluikit";

export function setup(el: HTMLElement): void {
  m.mount(el, {
    view() {
      return (
        <div style={{ display: "flex", gap: "16px", alignItems: "center", padding: "8px" }}>
          <Tooltip.Root placement="top" showArrow={true}>
            <Tooltip.Trigger>
              <button class="vp-button">Hover me</button>
            </Tooltip.Trigger>
            <Tooltip.Content>上側に表示されるツールチップです。</Tooltip.Content>
          </Tooltip.Root>

          <Tooltip.Root placement="right" interactive={true} showArrow={true}>
            <Tooltip.Trigger>
              <span style={{ padding: "4px 8px", background: "#eee", borderRadius: "4px" }}>Info</span>
            </Tooltip.Trigger>
            <Tooltip.Content>右側に表示されます。</Tooltip.Content>
          </Tooltip.Root>
        </div>
      );
    },
  });
}
