/** @jsx m */
import m from "mithril";
import { Select } from "mithril-ui-kit";
import type { SelectItem } from "mithril-ui-kit";

const items: SelectItem[] = [
  { value: "react", label: "React", group: "Popular" },
  { value: "vue", label: "Vue", group: "Popular" },
  { value: "angular", label: "Angular", group: "Popular" },
  { value: "svelte", label: "Svelte", group: "Others" },
  { value: "mithril", label: "Mithril", group: "Others" },
  { value: "preact", label: "Preact", group: "Others" },
];

export function setup(el: HTMLElement): void {
  let value: string[] = [];

  m.mount(el, {
    view() {
      const groups = new Map<string, SelectItem[]>();
      for (const item of items) {
        if (item.group) {
          const g = groups.get(item.group) ?? [];
          g.push(item);
          groups.set(item.group, g);
        }
      }

      return (
        <div>
          <Select.Root
            items={items}
            value={value}
            onValueChange={(d) => { value = d.value; }}
            placeholder="グループから選択"
          >
            <Select.Label>フレームワーク（グループ）</Select.Label>
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText placeholder="グループから選択" />
                <Select.IndicatorGroup>
                  <Select.ClearTrigger />
                  <Select.Indicator />
                </Select.IndicatorGroup>
              </Select.Trigger>
            </Select.Control>
            <Select.Positioner>
              <Select.Content>
                {Array.from(groups.entries()).map(([label, groupItems]) => (
                  <Select.ItemGroup key={label}>
                    <Select.ItemGroupLabel>{label}</Select.ItemGroupLabel>
                    {groupItems.map(item => (
                      <Select.Item key={item.value} item={item.value}>
                        {item.label}
                      </Select.Item>
                    ))}
                  </Select.ItemGroup>
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
