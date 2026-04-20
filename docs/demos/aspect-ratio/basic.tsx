/** @jsx m */
import m from "mithril";
import { AspectRatio } from "mithriluikit";

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<AspectRatio ratio={16 / 9}>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							width: "100%",
							height: "100%",
							borderRadius: "14px",
							background: "linear-gradient(135deg, #111827, #334155)",
							color: "#f8fafc",
							fontWeight: "700",
							letterSpacing: "0.04em",
						}}
					>
						16:9 preview area
					</div>
				</AspectRatio>
			);
		},
	});
}