/** @jsx m */
import m from "mithril";
import { Group } from "mithriluikit";

function button(label: string): m.Children {
	return (
		<button
			type="button"
			style={{
				padding: "10px 14px",
				border: "1px solid #cbd5e1",
				background: "#ffffff",
				fontWeight: "600",
			}}
		>
			{label}
		</button>
	);
}

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<div style={{ display: "grid", gap: "16px" }}>
					<Group gap="10px">{button("Preview")}{button("Run")}{button("Export")}</Group>
					<Group attached>{button("Day")}{button("Week")}{button("Month")}</Group>
				</div>
			);
		},
	});
}