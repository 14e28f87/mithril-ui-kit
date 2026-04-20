/** @jsx m */
import m from "mithril";
import { Steps } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
  let step = 0;

  m.mount(el, {
    view() {
      return (
        <div style={{ display: "grid", gap: "14px" }}>
          <Steps.Root count={4} step={step} onStepChange={(details) => { step = details.step; m.redraw(); }} variant="solid" size="md">
            <Steps.List>
              <Steps.Item index={0}>
                <Steps.Trigger>
                  <Steps.Indicator />
                  <Steps.Title>条件入力</Steps.Title>
                  <Steps.Description>レシピと目標値</Steps.Description>
                </Steps.Trigger>
                <Steps.Separator />
              </Steps.Item>
              <Steps.Item index={1}>
                <Steps.Trigger>
                  <Steps.Indicator />
                  <Steps.Title>安全確認</Steps.Title>
                  <Steps.Description>警報と機器状態</Steps.Description>
                </Steps.Trigger>
                <Steps.Separator />
              </Steps.Item>
              <Steps.Item index={2}>
                <Steps.Trigger>
                  <Steps.Indicator />
                  <Steps.Title>開始承認</Steps.Title>
                  <Steps.Description>実行前レビュー</Steps.Description>
                </Steps.Trigger>
                <Steps.Separator />
              </Steps.Item>
              <Steps.Item index={3}>
                <Steps.Trigger>
                  <Steps.Indicator />
                  <Steps.Title>監視開始</Steps.Title>
                  <Steps.Description>バッチ実行</Steps.Description>
                </Steps.Trigger>
              </Steps.Item>
            </Steps.List>

            <Steps.Content index={0}>
              <div style={{ padding: "14px", borderRadius: "12px", background: "#eff6ff" }}>レシピ、目標温度、昇温勾配を入力します。</div>
            </Steps.Content>
            <Steps.Content index={1}>
              <div style={{ padding: "14px", borderRadius: "12px", background: "#fefce8" }}>非常停止、扉スイッチ、センサー異常を確認します。</div>
            </Steps.Content>
            <Steps.Content index={2}>
              <div style={{ padding: "14px", borderRadius: "12px", background: "#f5f3ff" }}>承認者が条件を確認し、バッチ開始を許可します。</div>
            </Steps.Content>
            <Steps.Content index={3}>
              <div style={{ padding: "14px", borderRadius: "12px", background: "#ecfeff" }}>実行を開始し、グラフと状態表示を監視します。</div>
            </Steps.Content>
            <Steps.CompletedContent>
              <div style={{ padding: "14px", borderRadius: "12px", background: "#dcfce7", color: "#166534" }}>セットアップ手順が完了しました。</div>
            </Steps.CompletedContent>

            <Steps.PrevTrigger>戻る</Steps.PrevTrigger>
            <Steps.NextTrigger>次へ</Steps.NextTrigger>
          </Steps.Root>

          <div style={{ color: "#475569", fontSize: "0.9rem" }}>
            {step >= 4 ? "現在状態: 完了" : `現在の step: ${step + 1} / 4`}
          </div>
        </div>
      );
    },
  });
}
