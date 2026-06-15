/** @jsx m */
import m from "mithril";
import { Badge } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
					<Badge variant="solid" color="success">Online</Badge>
					<Badge variant="subtle" color="primary">Draft</Badge>
					<Badge variant="outline" color="warning">Pending</Badge>
					<Badge variant="surface" color="danger">Alarm</Badge>
				</div>
			);
		},
	});
}