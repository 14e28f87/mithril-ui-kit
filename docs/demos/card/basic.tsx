/** @jsx m */
import m from "mithril";
import { Card } from "mithriluikit";

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<Card.Root variant="outline" size="md">
					<Card.Header>
						<Card.Title>焼成バッチ #2416</Card.Title>
						<Card.Description>現在の進行状況と主要センサー値</Card.Description>
					</Card.Header>
					<Card.Body>
						<div style={{ display: "grid", gap: "8px" }}>
							<div>Target: 850℃</div>
							<div>Current: 812℃</div>
							<div>Ramp: 2.0℃/min</div>
						</div>
					</Card.Body>
					<Card.Footer>
						<div style={{ color: "#475569" }}>Updated 10 sec ago</div>
					</Card.Footer>
				</Card.Root>
			);
		},
	});
}