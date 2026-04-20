/** @jsx m */
import m from "mithril";
import { SegmentedControl } from "mithriluikit";

let value = "overview";

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<div style={{ display: "grid", gap: "10px" }}>
					<SegmentedControl.Root value={value} onValueChange={(next) => { value = next; }}>
						<SegmentedControl.Item value="overview">
							<SegmentedControl.ItemText>Overview</SegmentedControl.ItemText>
						</SegmentedControl.Item>
						<SegmentedControl.Item value="history">
							<SegmentedControl.ItemText>History</SegmentedControl.ItemText>
						</SegmentedControl.Item>
						<SegmentedControl.Item value="settings">
							<SegmentedControl.ItemText>Settings</SegmentedControl.ItemText>
						</SegmentedControl.Item>
					</SegmentedControl.Root>
					<div style={{ color: "#475569", fontSize: "0.9rem" }}>Current tab: {value}</div>
				</div>
			);
		},
	});
}