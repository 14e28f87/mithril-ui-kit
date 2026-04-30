/** @jsx m */
import m from "mithril";
import { HStack, Stack, StackSeparator, VStack } from "mithril-ui-kit";

function box(label: string, bg = "#f1f5f9"): m.Children {
	return (
		<div
			style={{
				padding: "10px 16px",
				background: bg,
				borderRadius: "8px",
				fontWeight: "500",
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
				<Stack gap="32px">
					{/* 縦方向 Stack に StackSeparator → 横線 */}
					<div>
						<p style={{ marginBottom: "8px", fontSize: "13px", color: "#64748b" }}>
							VStack + StackSeparator（横線）
						</p>
						<VStack gap="12px" separator={<StackSeparator />}>
							{box("Alpha", "#dbeafe")}
							{box("Beta", "#dcfce7")}
							{box("Gamma", "#fef3c7")}
						</VStack>
					</div>

					{/* 横方向 Stack に StackSeparator → 縦線 */}
					<div>
						<p style={{ marginBottom: "8px", fontSize: "13px", color: "#64748b" }}>
							HStack + StackSeparator（縦線）
						</p>
						<HStack gap="12px" align="center" separator={<StackSeparator />}>
							{box("Left", "#ede9fe")}
							{box("Center", "#fce7f3")}
							{box("Right", "#d1fae5")}
						</HStack>
					</div>
				</Stack>
			);
		},
	});
}
