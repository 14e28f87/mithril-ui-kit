/** @jsx m */
import m from "mithril";
import { Separator } from "mithriluikit";

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<div style={{ display: "grid", gap: "18px" }}>
					<Separator label="Section" labelPlacement="center" />
					<div style={{ display: "flex", alignItems: "center", gap: "14px", height: "36px" }}>
						<span>Left</span>
						<Separator orientation="vertical" size="md" />
						<span>Right</span>
					</div>
				</div>
			);
		},
	});
}