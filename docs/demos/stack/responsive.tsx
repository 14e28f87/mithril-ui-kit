/** @jsx m */
import m from "mithril";
import { Stack } from "mithril-ui-kit";

function box(label: string, bg = "#f1f5f9"): m.Children {
	return (
		<div
			style={{
				padding: "12px 16px",
				background: bg,
				borderRadius: "8px",
				fontWeight: "500",
				flex: "1",
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
				<Stack>
					<p style={{ marginBottom: "12px", fontSize: "13px", color: "#64748b" }}>
						ウィンドウ幅を変えると方向が切り替わります（base: column / md ≥768px: row）
					</p>
					<Stack
						direction={{ base: "column", md: "row" }}
						gap="12px"
					>
						{box("Section A", "#dbeafe")}
						{box("Section B", "#dcfce7")}
						{box("Section C", "#fef3c7")}
					</Stack>
				</Stack>
			);
		},
	});
}
