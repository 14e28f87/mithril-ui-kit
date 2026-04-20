/** @jsx m */
import m from "mithril";
import { HStack, Stack, VStack } from "mithriluikit";

function chip(label: string, color: string): m.Children {
	return (
		<div
			style={{
				padding: "8px 12px",
				borderRadius: "999px",
				background: color,
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
				<Stack gap="16px">
					<Stack gap="10px" separator={<span style={{ color: "#94a3b8" }}>/</span>}>
						{chip("Design", "#dbeafe")}
						{chip("Build", "#dcfce7")}
						{chip("Ship", "#fef3c7")}
					</Stack>
					<HStack gap="10px">
						{chip("HStack", "#ede9fe")}
						{chip("Row", "#fce7f3")}
					</HStack>
					<VStack gap="8px" align="stretch">
						<div style={{ padding: "10px 12px", background: "#f8fafc", borderRadius: "10px" }}>VStack</div>
						<div style={{ padding: "10px 12px", background: "#f1f5f9", borderRadius: "10px" }}>Column alias</div>
					</VStack>
				</Stack>
			);
		},
	});
}