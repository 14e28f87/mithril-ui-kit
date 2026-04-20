/** @jsx m */
import m from "mithril";
import { Center, Circle, Square } from "mithriluikit";

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
					<Center
						style={{
							width: "180px",
							height: "110px",
							borderRadius: "12px",
							background: "#eff6ff",
							fontWeight: "600",
						}}
					>
						Center
					</Center>
					<Square size={96} style={{ background: "#dcfce7", borderRadius: "16px", fontWeight: "600" }}>
						Square
					</Square>
					<Circle size={96} style={{ background: "#fde68a", fontWeight: "600" }}>
						Circle
					</Circle>
				</div>
			);
		},
	});
}