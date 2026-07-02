/** @jsx m */
import m from "mithril";
import { Combobox, type ComboboxItem } from "mithril-ui-kit";

const initialItems: ComboboxItem[] = [
	{ value: "react", label: "React" },
	{ value: "vue", label: "Vue" },
	{ value: "mithril", label: "Mithril" },
	{ value: "svelte", label: "Svelte" },
];

let items = [...initialItems];
let selected = "";

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<div style={{ display: "grid", gap: "10px", maxWidth: "360px" }}>
					<Combobox.Root
						items={items}
						value={selected}
						creatable={true}
						placeholder="フレームワークを入力または選択..."
						onValueChange={(v) => {
							selected = v as string;
							m.redraw();
						}}
						onCreateItem={(newValue) => {
							// 新規アイテムを追加してそのまま選択
							const newItem: ComboboxItem = { value: newValue.toLowerCase().replace(/\s+/g, "-"), label: newValue };
							items = [...items, newItem];
							selected = newItem.value;
							m.redraw();
						}}
					/>
					<div style={{ color: "#475569", fontSize: "0.9rem" }}>
						選択中: {selected || "（なし）"}
					</div>
					<div style={{ color: "#94a3b8", fontSize: "0.8rem" }}>
						リストにない値を入力すると「追加」オプションが表示されます
					</div>
				</div>
			);
		},
	});
}
