/** @jsx m */
import m from "mithril";
import { Combobox } from "mithril-ui-kit";

const skills = [
	{ value: "ts", label: "TypeScript" },
	{ value: "js", label: "JavaScript" },
	{ value: "react", label: "React" },
	{ value: "vue", label: "Vue" },
	{ value: "mithril", label: "Mithril" },
	{ value: "svelte", label: "Svelte" },
	{ value: "angular", label: "Angular" },
	{ value: "solid", label: "SolidJS" },
];

let selected: string[] = [];

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<div style={{ display: "grid", gap: "10px", maxWidth: "360px" }}>
					<Combobox.Root
						items={skills}
						value={selected}
						multiple={true}
						placeholder="スキルを選択..."
						onValueChange={(v) => {
							selected = v as string[];
							m.redraw();
						}}
					/>
					<div style={{ color: "#475569", fontSize: "0.9rem" }}>
						選択中: {selected.length > 0 ? selected.join(", ") : "（なし）"}
					</div>
				</div>
			);
		},
	});
}
