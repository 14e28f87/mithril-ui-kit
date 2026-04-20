/** @jsx m */
import m from "mithril";
import { TreeView } from "mithriluikit";

const data = [
	{
		id: "recipes",
		name: "Recipes",
		children: [
			{ id: "r1", name: "Stoneware" },
			{ id: "r2", name: "Porcelain" },
		],
	},
	{
		id: "devices",
		name: "Devices",
		children: [
			{ id: "d1", name: "Kiln A" },
			{ id: "d2", name: "Kiln B" },
		],
	},
];

let selectedIds = ["r1"];
let expandedIds = ["recipes"];

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<div style={{ display: "grid", gap: "10px", maxWidth: "320px" }}>
					<TreeView.Root
						data={data}
						selectedIds={selectedIds}
						expandedIds={expandedIds}
						onSelectionChange={(nextIds) => {
							selectedIds = nextIds;
							m.redraw();
						}}
						onExpandChange={(nextIds) => {
							expandedIds = nextIds;
							m.redraw();
						}}
					/>
					<div style={{ color: "#475569", fontSize: "0.9rem" }}>Selected: {selectedIds.join(", ")}</div>
				</div>
			);
		},
	});
}