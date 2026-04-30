/** @jsx m */
import m from "mithril";
import { HStack } from "mithril-ui-kit";

function tag(label: string, bg: string, color = "#1e293b"): m.Children {
	return (
		<span
			style={{
				padding: "6px 14px",
				background: bg,
				color,
				borderRadius: "999px",
				fontWeight: "600",
				fontSize: "14px",
			}}
		>
			{label}
		</span>
	);
}

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<HStack gap="12px" align="center" wrap="wrap">
					{tag("Design", "#dbeafe")}
					{tag("Build", "#dcfce7")}
					{tag("Ship", "#fef3c7")}
					{tag("Iterate", "#ede9fe")}
				</HStack>
			);
		},
	});
}
