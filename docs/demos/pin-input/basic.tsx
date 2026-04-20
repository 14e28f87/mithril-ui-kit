/** @jsx m */
import m from "mithril";
import { PinInput } from "mithriluikit";

let values = ["1", "2", "", ""];
let completed = "";

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<div style={{ display: "grid", gap: "10px" }}>
					<PinInput.Root
						count={4}
						value={values}
						onValueChange={(next) => { values = next; }}
						onComplete={(valueString) => { completed = valueString; }}
					/>
					<div style={{ color: "#475569", fontSize: "0.9rem" }}>Current: {values.join("") || "-"}</div>
					<div style={{ color: "#475569", fontSize: "0.9rem" }}>Completed: {completed || "-"}</div>
				</div>
			);
		},
	});
}