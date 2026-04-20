/** @jsx m */
import m from "mithril";
import { Steps } from "mithriluikit";

export function setup(el: HTMLElement): void {
  m.mount(el, {
    view() {
      return (
        <Steps.Root count={3} defaultStep={1} orientation="vertical" variant="subtle" size="sm">
          <Steps.List>
            <Steps.Item index={0}>
              <Steps.Trigger>
                <Steps.Indicator />
                <Steps.Title>計測開始</Steps.Title>
                <Steps.Description>センサー接続確認</Steps.Description>
              </Steps.Trigger>
              <Steps.Separator />
            </Steps.Item>
            <Steps.Item index={1}>
              <Steps.Trigger>
                <Steps.Indicator />
                <Steps.Title>予熱</Steps.Title>
                <Steps.Description>目標温度まで昇温</Steps.Description>
              </Steps.Trigger>
              <Steps.Separator />
            </Steps.Item>
            <Steps.Item index={2}>
              <Steps.Trigger>
                <Steps.Indicator />
                <Steps.Title>保持</Steps.Title>
                <Steps.Description>均熱時間の管理</Steps.Description>
              </Steps.Trigger>
            </Steps.Item>
          </Steps.List>

          <Steps.Content index={0}><div style={{ padding: "12px", borderRadius: "12px", background: "#f8fafc" }}>すべてのセンサー値が取得できる状態です。</div></Steps.Content>
          <Steps.Content index={1}><div style={{ padding: "12px", borderRadius: "12px", background: "#f8fafc" }}>現在は予熱中で、2.0℃/min で昇温しています。</div></Steps.Content>
          <Steps.Content index={2}><div style={{ padding: "12px", borderRadius: "12px", background: "#f8fafc" }}>保持工程では温度安定性を監視します。</div></Steps.Content>
        </Steps.Root>
      );
    },
  });
}