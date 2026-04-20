/** @jsx m */
import m from "mithril";
import { Wrap } from "mithriluikit";

const tags = [
	{ label: "Temperature", color: "#dbeafe" },
	{ label: "Pressure", color: "#dcfce7" },
	{ label: "OPC UA", color: "#fef3c7" },
	{ label: "Batch", color: "#ede9fe" },
	{ label: "Alarm", color: "#fee2e2" },
	{ label: "Trend", color: "#e0f2fe" },
];

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<Wrap gap="10px">
					{tags.map((tag) => (
						<span
							key={tag.label}
							style={{
								padding: "8px 12px",
								borderRadius: "999px",
								background: tag.color,
								fontWeight: "600",
							}}
						>
							{tag.label}
						</span>
					))}
				</Wrap>
			);
		},
	});
}