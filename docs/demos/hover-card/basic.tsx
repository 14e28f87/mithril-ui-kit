/** @jsx m */
import m from "mithril";
import { HoverCard } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<HoverCard.Root openDelay={150} closeDelay={120}>
					<HoverCard.Trigger>
						<span style={{ color: "#2563eb", fontWeight: "600", cursor: "default" }}>Hover sensor S-12</span>
					</HoverCard.Trigger>
					<HoverCard.Content>
						<div style={{ display: "grid", gap: "6px", minWidth: "220px" }}>
							<div style={{ fontWeight: "700" }}>Sensor S-12</div>
							<div>Temperature: 812℃</div>
							<div>Last update: 1 sec ago</div>
						</div>
					</HoverCard.Content>
				</HoverCard.Root>
			);
		},
	});
}