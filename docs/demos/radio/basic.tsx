/** @jsx m */
import m from "mithril";
import { Radio } from "mithriluikit";

export function setup(el: HTMLElement): void {
  let selected = "manual";

  m.mount(el, {
    view() {
      return (
        <div style={{ display: "grid", gap: "12px", maxWidth: "360px" }}>
          <Radio.Root
            value={selected}
            orientation="vertical"
            onValueChange={(details) => {
              selected = details.value;
              m.redraw();
            }}
          >
            <Radio.Item value="manual">
              <Radio.ItemHiddenInput />
              <Radio.ItemIndicator />
              <Radio.ItemText>手動運転</Radio.ItemText>
            </Radio.Item>
            <Radio.Item value="auto">
              <Radio.ItemHiddenInput />
              <Radio.ItemIndicator />
              <Radio.ItemText>自動運転</Radio.ItemText>
            </Radio.Item>
            <Radio.Item value="maintenance">
              <Radio.ItemHiddenInput />
              <Radio.ItemIndicator />
              <Radio.ItemText>保守モード</Radio.ItemText>
            </Radio.Item>
          </Radio.Root>
          <div style={{ color: "#475569", fontSize: "0.875rem" }}>{`選択中: ${selected}`}</div>
        </div>
      );
    }
  });
}
