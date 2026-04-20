/** @jsx m */
import m from "mithril";
import { CheckboxCard } from "mithriluikit";

let checked = true;

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<div style={{ display: "grid", gap: "12px", maxWidth: "420px" }}>
					<CheckboxCard.Root checked={checked} onCheckedChange={(next) => { checked = next; }}>
						<CheckboxCard.Control>
							<CheckboxCard.Content>
								<CheckboxCard.Label>通知を有効にする</CheckboxCard.Label>
								<CheckboxCard.Description>WebSocket の状態変化をトーストで表示します。</CheckboxCard.Description>
							</CheckboxCard.Content>
							<CheckboxCard.Indicator />
						</CheckboxCard.Control>
					</CheckboxCard.Root>
					<div style={{ color: "#475569", fontSize: "0.9rem" }}>Checked: {checked ? "true" : "false"}</div>
				</div>
			);
		},
	});
}