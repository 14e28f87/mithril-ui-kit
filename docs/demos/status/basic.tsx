/** @jsx m */
import m from "mithril";
import { Status } from "mithriluikit";

const rows = [
	{ value: "info", label: "Waiting" },
	{ value: "warning", label: "Warning" },
	{ value: "success", label: "Running" },
	{ value: "error", label: "Stopped" },
] as const;

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<div style={{ display: "grid", gap: "10px" }}>
					{rows.map((row) => (
						<Status.Root key={row.label} value={row.value}>
							<Status.Indicator />
							<span style={{ marginLeft: "8px" }}>{row.label}</span>
						</Status.Root>
					))}
				</div>
			);
		},
	});
}