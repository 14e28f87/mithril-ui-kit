/** @jsx m */
import m from "mithril";
import { Tooltip } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
  let open = false;

  m.mount(el, {
    view() {
      return (
        <div style={{ display: "grid", gap: "12px", alignItems: "start" }}>
          <button type="button" class="vp-button" onclick={() => { open = !open; m.redraw(); }}>
            {open ? "固定表示を解除" : "固定表示する"}
          </button>

          <Tooltip.Root open={open} onOpenChange={(details) => { open = details.open; m.redraw(); }} placement="bottom" showArrow={true}>
            <Tooltip.Trigger>
              <span style={{ padding: "6px 10px", borderRadius: "8px", background: "#f1f5f9", cursor: "default" }}>
                Batch summary
              </span>
            </Tooltip.Trigger>
            <Tooltip.Content>
              <div style={{ display: "grid", gap: "4px" }}>
                <div>Recipe: Stoneware A</div>
                <div>Stage: Hold</div>
                <div>Target: 850℃</div>
              </div>
            </Tooltip.Content>
          </Tooltip.Root>

          <div style={{ color: "#475569", fontSize: "0.9rem" }}>open: {open ? "true" : "false"}</div>
        </div>
      );
    },
  });
}