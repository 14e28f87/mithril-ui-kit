/** @jsx m */
import m from "mithril";
import { Tabs } from "mithriluikit";

export function setup(el: HTMLElement): void {
  m.mount(el, {
    view() {
      return (
        <Tabs.Root defaultValue="power" orientation="vertical" variant="outline" size="sm">
          <Tabs.List>
            <Tabs.Trigger value="power">電力</Tabs.Trigger>
            <Tabs.Trigger value="gas">ガス流量</Tabs.Trigger>
            <Tabs.Trigger value="air">送風</Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="power">
            <div style={{ padding: "14px", borderRadius: "12px", background: "#f8fafc" }}>
              消費電力 24.8kW、負荷率 71%
            </div>
          </Tabs.Content>
          <Tabs.Content value="gas">
            <div style={{ padding: "14px", borderRadius: "12px", background: "#f8fafc" }}>
              バーナー流量 4.2 Nm³/h
            </div>
          </Tabs.Content>
          <Tabs.Content value="air">
            <div style={{ padding: "14px", borderRadius: "12px", background: "#f8fafc" }}>
              ブロワー出力 62%、ダンパー開度 48%
            </div>
          </Tabs.Content>
        </Tabs.Root>
      );
    },
  });
}