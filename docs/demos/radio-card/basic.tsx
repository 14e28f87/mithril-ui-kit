/** @jsx m */
/** @jsxRuntime classic */
import m from "mithril";
import { RadioCard } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
  let value = "manual";

  m.mount(el, {
    view() {
      return (
        <div class="d-grid gap-2" style={{ maxWidth: "420px" }}>
          <RadioCard.Root
            value={value}
            onValueChange={(nextValue: string) => {
              value = nextValue;
              m.redraw();
            }}
          >
            <RadioCard.Item value="manual">
              <RadioCard.ItemControl>
                <RadioCard.ItemIndicator />
              </RadioCard.ItemControl>
              <RadioCard.ItemText>手動運転</RadioCard.ItemText>
            </RadioCard.Item>
            <RadioCard.Item value="auto">
              <RadioCard.ItemControl>
                <RadioCard.ItemIndicator />
              </RadioCard.ItemControl>
              <RadioCard.ItemText>自動運転</RadioCard.ItemText>
            </RadioCard.Item>
            <RadioCard.Item value="maintenance">
              <RadioCard.ItemControl>
                <RadioCard.ItemIndicator />
              </RadioCard.ItemControl>
              <RadioCard.ItemText>保守モード</RadioCard.ItemText>
            </RadioCard.Item>
          </RadioCard.Root>

          <div class="small text-muted">{`選択値: ${value}`}</div>
        </div>
      );
    }
  });
}