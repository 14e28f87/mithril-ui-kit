/** @jsx m */
import m from "mithril";
import { RadioCard } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
  let value = "line-a";

  m.mount(el, {
    view() {
      return (
        <div class="d-grid gap-2">
          <RadioCard.Root
            value={value}
            orientation="horizontal"
            onValueChange={(nextValue: string) => {
              value = nextValue;
              m.redraw();
            }}
          >
            <RadioCard.Item value="line-a">
              <RadioCard.ItemControl>
                <RadioCard.ItemIndicator />
              </RadioCard.ItemControl>
              <RadioCard.ItemText>ライン A</RadioCard.ItemText>
            </RadioCard.Item>
            <RadioCard.Item value="line-b">
              <RadioCard.ItemControl>
                <RadioCard.ItemIndicator />
              </RadioCard.ItemControl>
              <RadioCard.ItemText>ライン B</RadioCard.ItemText>
            </RadioCard.Item>
          </RadioCard.Root>

          <div class="small text-muted">{`選択値: ${value}`}</div>
        </div>
      );
    }
  });
}