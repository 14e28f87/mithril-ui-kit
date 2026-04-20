/** @jsx m */
import m from "mithril";
import { NativeSelect } from "mithriluikit";

let value = "auto";

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<div style={{ display: "grid", gap: "10px", maxWidth: "280px" }}>
					<NativeSelect.Root>
						<NativeSelect.Field value={value} onchange={(event: Event) => { value = (event.target as HTMLSelectElement).value; }}>
							<option value="auto">Auto</option>
							<option value="manual">Manual</option>
							<option value="maintenance">Maintenance</option>
						</NativeSelect.Field>
						<NativeSelect.Indicator />
					</NativeSelect.Root>
					<div style={{ color: "#475569", fontSize: "0.9rem" }}>Current mode: {value}</div>
				</div>
			);
		},
	});
}