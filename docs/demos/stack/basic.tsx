/** @jsx m */
import m from "mithril";
import { Stack } from "mithril-ui-kit";

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
				<Stack gap="12px">
					{box("Item 1", "#dbeafe")}
					{box("Item 2", "#dcfce7")}
					{box("Item 3", "#fef3c7")}
				</Stack>
			);
		},
	});
}
