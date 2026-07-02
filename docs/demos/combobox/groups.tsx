/** @jsx m */
import m from "mithril";
import { Combobox } from "mithril-ui-kit";

const items = [
	{ value: "js", label: "JavaScript", group: "フロントエンド" },
	{ value: "ts", label: "TypeScript", group: "フロントエンド" },
	{ value: "react", label: "React", group: "フロントエンド" },
	{ value: "vue", label: "Vue", group: "フロントエンド" },
	{ value: "mithril", label: "Mithril", group: "フロントエンド" },
	{ value: "node", label: "Node.js", group: "バックエンド" },
	{ value: "deno", label: "Deno", group: "バックエンド" },
	{ value: "bun", label: "Bun", group: "バックエンド" },
	{ value: "python", label: "Python", group: "バックエンド" },
];

let selected = "";

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<div style={{ display: "grid", gap: "10px", maxWidth: "360px" }}>
					<Combobox.Root
						items={items}
						value={selected}
						placeholder="技術スタックを選択..."
						onValueChange={(v) => {
							selected = v as string;
							m.redraw();
						}}
					/>
					<div style={{ color: "#475569", fontSize: "0.9rem" }}>
						選択中: {selected || "（なし）"}
					</div>
				</div>
			);
		},
	});
}
