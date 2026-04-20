/** @jsx m */
import m from "mithril";
import { Float } from "mithriluikit";

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<div
					style={{
						position: "relative",
						width: "220px",
						height: "120px",
						borderRadius: "14px",
						padding: "16px",
						background: "#eff6ff",
						border: "1px solid #bfdbfe",
					}}
				>
					<div style={{ fontWeight: "600" }}>Device Card</div>
					<div style={{ color: "#475569", marginTop: "6px" }}>Parent needs relative positioning.</div>
					<Float placement="top-end" offset={8}>
						<span
							style={{
								display: "inline-flex",
								alignItems: "center",
								justifyContent: "center",
								minWidth: "28px",
								height: "28px",
								padding: "0 8px",
								borderRadius: "999px",
								background: "#dc2626",
								color: "#ffffff",
								fontWeight: "700",
							}}
						>
							3
						</span>
					</Float>
				</div>
			);
		},
	});
}