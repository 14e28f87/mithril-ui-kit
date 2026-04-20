/** @jsx m */
import m from "mithril";
import { Badge } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
					<Badge variant="solid" colorPalette="green">Online</Badge>
					<Badge variant="subtle" colorPalette="blue">Draft</Badge>
					<Badge variant="outline" colorPalette="orange">Pending</Badge>
					<Badge variant="surface" colorPalette="red">Alarm</Badge>
				</div>
			);
		},
	});
}