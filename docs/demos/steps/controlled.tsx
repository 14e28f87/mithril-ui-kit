/** @jsx m */
import m from "mithril";
import { Steps } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
  let step = 1;
  let completed = false;

  m.mount(el, {
    view() {
      return (
        <div style={{ display: "grid", gap: "14px" }}>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {[0, 1, 2].map((index) => (
              <button type="button" class="vp-button" onclick={() => { step = index; completed = false; m.redraw(); }}>
                Step {index + 1}
              </button>
            ))}
            <button type="button" class="vp-button" onclick={() => { step = 0; completed = false; m.redraw(); }}>Reset</button>
          </div>

          <Steps.Root
            count={3}
            step={step}
            linear={false}
            variant="subtle"
            onStepChange={(details) => {
              step = details.step;
              completed = details.step >= 3;
              m.redraw();
            }}
            onStepComplete={() => {
              completed = true;
              m.redraw();
            }}
          >
            <Steps.List>
              <Steps.Item index={0}>
                <Steps.Trigger>
                  <Steps.Indicator />
                  <Steps.Title>原料</Steps.Title>
                </Steps.Trigger>
                <Steps.Separator />
              </Steps.Item>
              <Steps.Item index={1}>
                <Steps.Trigger>
                  <Steps.Indicator />
                  <Steps.Title>配合</Steps.Title>
                </Steps.Trigger>
                <Steps.Separator />
              </Steps.Item>
              <Steps.Item index={2}>
                <Steps.Trigger>
                  <Steps.Indicator />
                  <Steps.Title>確認</Steps.Title>
                </Steps.Trigger>
              </Steps.Item>
            </Steps.List>

            <Steps.Content index={0}><div style={{ padding: "12px", background: "#eff6ff", borderRadius: "12px" }}>原料ロットを確認します。</div></Steps.Content>
            <Steps.Content index={1}><div style={{ padding: "12px", background: "#fef3c7", borderRadius: "12px" }}>配合値と投入量をレビューします。</div></Steps.Content>
            <Steps.Content index={2}><div style={{ padding: "12px", background: "#ede9fe", borderRadius: "12px" }}>最終確認後に開始できます。</div></Steps.Content>
            <Steps.CompletedContent><div style={{ padding: "12px", background: "#dcfce7", borderRadius: "12px" }}>手順を完了しました。</div></Steps.CompletedContent>

            <Steps.PrevTrigger>Prev</Steps.PrevTrigger>
            <Steps.NextTrigger>Next</Steps.NextTrigger>
          </Steps.Root>

          <div style={{ color: "#475569", fontSize: "0.9rem" }}>
            {completed ? "外部状態: completed" : `外部状態: step=${step}`}
          </div>
        </div>
      );
    },
  });
}