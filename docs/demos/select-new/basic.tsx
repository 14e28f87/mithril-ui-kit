/** @jsx m */
import m from "mithril";
import { Select } from "mithril-ui-kit";
import type { SelectItem } from "mithril-ui-kit";

const items: SelectItem[] = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
  { value: "svelte", label: "Svelte" },
  { value: "mithril", label: "Mithril" },
];

export function setup(el: HTMLElement): void {
  let value: string[] = ["react"];

  m.mount(el, {
    view() {
      return (
        <div>
          <Select.Root
            items={items}
            value={value}
            onValueChange={(d) => { value = d.value; }}
            placeholder="フレームワークを選択"
          >
            <Select.Label>フレームワーク</Select.Label>
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText placeholder="フレームワークを選択" />
                <Select.IndicatorGroup>
                  <Select.ClearTrigger />
                  <Select.Indicator />
                </Select.IndicatorGroup>
              </Select.Trigger>
            </Select.Control>
            <Select.Positioner>
              <Select.Content>
                {items.map(item => (
                  <Select.Item key={item.value} item={item.value}>
                    {item.label}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Positioner>
          </Select.Root>
          <div class="mt-2" style="font-size:0.85rem;color:#6c757d">
            選択値: {JSON.stringify(value)}
          </div>
        </div>
      );
    },
  });
}
