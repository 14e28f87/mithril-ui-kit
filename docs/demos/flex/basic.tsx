/** @jsx m */
import m from "mithril";
import { Flex, Spacer } from "mithriluikit";

function panel(label: string, color: string): m.Children {
	return (
		<div
			style={{
				padding: "10px 14px",
				borderRadius: "10px",
				background: color,
				color: "#0f172a",
				fontWeight: "600",
			}}
		>
			{label}
		</div>
	);
}

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<Flex align="center" gap="12px" style={{ padding: "8px 0" }}>
					{panel("Start", "#dbeafe")}
					<Spacer />
					{panel("Center", "#fde68a")}
					{panel("End", "#dcfce7")}
				</Flex>
			);
		},
	});
}