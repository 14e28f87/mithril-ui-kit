/** @jsx m */
import m from "mithril";
import { SimpleGrid } from "mithril-ui-kit";

const cards = ["Kiln", "Sensor", "Recipe", "Alarm", "Batch", "Report"];

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<SimpleGrid minChildWidth="160px" gap="12px">
					{cards.map((label) => (
						<div
							key={label}
							style={{
								padding: "16px",
								borderRadius: "12px",
								border: "1px solid #d0d7de",
								background: "#ffffff",
							}}
						>
							<div style={{ fontWeight: "600", marginBottom: "4px" }}>{label}</div>
							<div style={{ color: "#475569", fontSize: "0.9rem" }}>自動で折り返すカードレイアウト</div>
						</div>
					))}
				</SimpleGrid>
			);
		},
	});
}