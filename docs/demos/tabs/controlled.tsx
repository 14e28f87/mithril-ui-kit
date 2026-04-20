/** @jsx m */
import m from "mithril";
import { Tabs } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
  let value = "trend";

  m.mount(el, {
    view() {
      return (
        <div style={{ display: "grid", gap: "12px" }}>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <button type="button" class="vp-button" onclick={() => { value = "trend"; m.redraw(); }}>Trend</button>
            <button type="button" class="vp-button" onclick={() => { value = "events"; m.redraw(); }}>Events</button>
            <button type="button" class="vp-button" onclick={() => { value = "notes"; m.redraw(); }}>Notes</button>
          </div>

          <Tabs.Root
            value={value}
            onValueChange={(details) => { value = details.value; m.redraw(); }}
            activationMode="manual"
            variant="enclosed"
          >
            <Tabs.List>
              <Tabs.Trigger value="trend">Trend</Tabs.Trigger>
              <Tabs.Trigger value="events">Events</Tabs.Trigger>
              <Tabs.Trigger value="notes">Notes</Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content value="trend">
              <div style={{ padding: "14px", borderRadius: "12px", background: "#eff6ff" }}>温度トレンドをここに表示します。</div>
            </Tabs.Content>
            <Tabs.Content value="events">
              <div style={{ padding: "14px", borderRadius: "12px", background: "#ecfeff" }}>イベントログ 12 件を表示中です。</div>
            </Tabs.Content>
            <Tabs.Content value="notes">
              <div style={{ padding: "14px", borderRadius: "12px", background: "#f5f3ff" }}>作業メモと引き継ぎ事項を確認できます。</div>
            </Tabs.Content>
          </Tabs.Root>

          <div style={{ color: "#475569", fontSize: "0.9rem" }}>現在のタブ: {value}</div>
        </div>
      );
    },
  });
}