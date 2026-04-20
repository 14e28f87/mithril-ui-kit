/** @jsx m */
import m from "mithril";
import { Tabs } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
  m.mount(el, {
    view() {
      return (
        <Tabs.Root defaultValue="overview" variant="line" size="md">
          <Tabs.List>
            <Tabs.Trigger value="overview">概要</Tabs.Trigger>
            <Tabs.Trigger value="recipe">レシピ</Tabs.Trigger>
            <Tabs.Trigger value="alarms">アラーム</Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="overview">
            <div style={{ display: "grid", gap: "10px" }}>
              <div style={{ padding: "14px", borderRadius: "12px", background: "#eff6ff" }}>
                現在温度 812℃ / 目標温度 850℃
              </div>
              <div style={{ padding: "14px", borderRadius: "12px", background: "#f8fafc" }}>
                ホールド開始まで 18 分
              </div>
            </div>
          </Tabs.Content>

          <Tabs.Content value="recipe">
            <div style={{ display: "grid", gap: "8px" }}>
              <div>Stoneware A</div>
              <div style={{ color: "#475569", fontSize: "0.9rem" }}>Ramp 2.0℃/min, Hold 45 min</div>
            </div>
          </Tabs.Content>

          <Tabs.Content value="alarms">
            <div style={{ padding: "14px", borderRadius: "12px", background: "#fff7ed", color: "#9a3412" }}>
              現在アクティブなアラームはありません。
            </div>
          </Tabs.Content>
        </Tabs.Root>
      );
    },
  });
}
