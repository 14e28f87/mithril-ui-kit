/** @jsx m */
import m from "mithril";
import { Tooltip } from "mithriluikit";

export function setup(el: HTMLElement): void {
  m.mount(el, {
    view() {
      return (
        <Tooltip.Root placement="bottom" showArrow={true} interactive={true} openDelay={120} closeDelay={180}>
          <Tooltip.Trigger>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 12px",
                borderRadius: "999px",
                background: "#eff6ff",
                color: "#1d4ed8",
                fontWeight: "600",
                cursor: "default",
              }}
            >
              Sensor T-12
            </span>
          </Tooltip.Trigger>
          <Tooltip.Content>
            <div style={{ display: "grid", gap: "6px", minWidth: "220px" }}>
              <div style={{ fontWeight: "700" }}>Sensor T-12</div>
              <div>最新温度: 812℃</div>
              <div>更新周期: 1 sec</div>
              <div style={{ color: "#94a3b8", fontSize: "0.85rem" }}>interactive=true のため内容上へポインタを移せます。</div>
            </div>
          </Tooltip.Content>
        </Tooltip.Root>
      );
    },
  });
}