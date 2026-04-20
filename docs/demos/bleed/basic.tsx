/** @jsx m */
import m from "mithril";
import { Bleed } from "mithriluikit";

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<div
					style={{
						padding: "20px",
						background: "#f8fafc",
						borderRadius: "16px",
						border: "1px solid #e2e8f0",
					}}
				>
					<div style={{ marginBottom: "10px", fontWeight: "600" }}>Container padding: 20px</div>
					<Bleed inline="20px">
						<div
							style={{
								padding: "14px 20px",
								background: "linear-gradient(90deg, #bfdbfe, #dbeafe)",
								color: "#1e3a8a",
								fontWeight: "600",
							}}
						>
							左右の padding をまたいで帯を広げます
						</div>
					</Bleed>
				</div>
			);
		},
	});
}