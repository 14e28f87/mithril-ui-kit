/** @jsx m */
import m from "mithril";
import { ScrollArea } from "mithril-ui-kit";

const rows = Array.from({ length: 18 }, (_, index) => `Log line ${index + 1}`);

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<ScrollArea maxHeight={220} style={{ border: "1px solid #d0d7de", borderRadius: "12px", padding: "12px" }}>
					<div style={{ display: "grid", gap: "8px" }}>
						{rows.map((row) => (
							<div key={row} style={{ padding: "10px 12px", background: "#f8fafc", borderRadius: "8px" }}>
								{row}
							</div>
						))}
					</div>
				</ScrollArea>
			);
		},
	});
}