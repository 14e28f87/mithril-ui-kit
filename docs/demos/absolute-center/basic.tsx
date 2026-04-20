/** @jsx m */
import m from "mithril";
import { AbsoluteCenter } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<div
					style={{
						position: "relative",
						height: "160px",
						borderRadius: "14px",
						background: "linear-gradient(135deg, #dbeafe, #eff6ff)",
						border: "1px solid #bfdbfe",
					}}
				>
					<div style={{ padding: "16px", color: "#1e3a8a", fontWeight: "600" }}>Relative parent</div>
					<AbsoluteCenter>
						<div
							style={{
								padding: "10px 14px",
								borderRadius: "999px",
								background: "#ffffff",
								boxShadow: "0 8px 24px rgba(15, 23, 42, 0.12)",
								fontWeight: "600",
							}}
						>
							Centered overlay
						</div>
					</AbsoluteCenter>
				</div>
			);
		},
	});
}