/** @jsx m */
import m from "mithril";
import { ProgressCircle } from "mithriluikit";

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
					<ProgressCircle.Root value={82} size="lg" colorPalette="green">
						<ProgressCircle.Circle>
							<ProgressCircle.Track />
							<ProgressCircle.Range />
						</ProgressCircle.Circle>
						<ProgressCircle.ValueText />
					</ProgressCircle.Root>
					<div style={{ color: "#475569" }}>Cycle complete</div>
				</div>
			);
		},
	});
}