/** @jsx m */
import m from "mithril";
import { Listbox } from "mithril-ui-kit";

const items = [
	{ value: "temp", label: "Temperature" },
	{ value: "pressure", label: "Pressure" },
	{ value: "power", label: "Power" },
	{ value: "flow", label: "Flow" },
];

let value = ["temp", "power"];

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<div style={{ display: "grid", gap: "10px", maxWidth: "280px" }}>
					<Listbox.Root
						items={items}
						selectionMode="multiple"
						value={value}
						onValueChange={(nextValue) => {
							value = Array.isArray(nextValue) ? nextValue : [nextValue];
							m.redraw();
						}}
					/>
					<div style={{ color: "#475569", fontSize: "0.9rem" }}>Selected: {value.join(", ")}</div>
				</div>
			);
		},
	});
}