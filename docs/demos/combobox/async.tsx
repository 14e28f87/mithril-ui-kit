/** @jsx m */
import m from "mithril";
import { Combobox, type ComboboxItem } from "mithril-ui-kit";

const allItems: ComboboxItem[] = [
	{ value: "react", label: "React" },
	{ value: "vue", label: "Vue" },
	{ value: "mithril", label: "Mithril" },
	{ value: "angular", label: "Angular" },
	{ value: "svelte", label: "Svelte" },
	{ value: "solid", label: "SolidJS" },
	{ value: "qwik", label: "Qwik" },
	{ value: "preact", label: "Preact" },
	{ value: "lit", label: "Lit" },
	{ value: "alpine", label: "Alpine.js" },
];

let displayItems: ComboboxItem[] = [];
let isLoading = false;
let selected = "";
let timerId: ReturnType<typeof setTimeout> | null = null;

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<div style={{ display: "grid", gap: "10px", maxWidth: "360px" }}>
					<Combobox.Root
						items={displayItems}
						value={selected}
						openOnClick={false}
						minChars={1}
						placeholder="1文字以上入力して検索..."
						onValueChange={(v) => {
							selected = v as string;
							m.redraw();
						}}
						oninput={(e: Event) => {
							const query = (e.target as HTMLInputElement).value;
							// 既存のタイマーをキャンセルして debounce
							if (timerId) clearTimeout(timerId);
							if (!query) {
								displayItems = [];
								isLoading = false;
								m.redraw();
								return;
							}
							isLoading = true;
							displayItems = [];
							m.redraw();
							timerId = setTimeout(() => {
								displayItems = allItems.filter(it =>
									it.label.toLowerCase().includes(query.toLowerCase())
								);
								isLoading = false;
								m.redraw();
							}, 600);
						}}
					/>
					{isLoading && (
						<div style={{ color: "#64748b", fontSize: "0.85rem" }}>
							🔍 検索中...
						</div>
					)}
					{selected && (
						<div style={{ color: "#475569", fontSize: "0.9rem" }}>
							選択中: {selected}
						</div>
					)}
					<div style={{ color: "#94a3b8", fontSize: "0.8rem" }}>
						600ms のデバウンスで絞り込みます（setTimeout によるシミュレート）
					</div>
				</div>
			);
		},
	});
}
