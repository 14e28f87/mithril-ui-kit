/** @jsx m */
import m from "mithril";
import { Combobox } from "mithriluikit";

const items = [
	{ value: "manual", label: "Manual" },
	{ value: "auto", label: "Auto" },
	{ value: "maintenance", label: "Maintenance" },
];

let value = "manual";

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<div style={{ display: "grid", gap: "10px", maxWidth: "320px" }}>
					<Combobox.Root
						items={items}
						value={value}
						onValueChange={(nextValue) => {
							if (typeof nextValue === "string") {
								value = nextValue;
							}
							m.redraw();
						}}
					/>
					<div style={{ color: "#475569", fontSize: "0.9rem" }}>Selected: {value}</div>
				</div>
			);
		},
	});
}