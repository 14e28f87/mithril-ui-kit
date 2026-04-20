/** @jsx m */
import m from "mithril";
import { IconButton } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
					<IconButton aria-label="Search" variant="outline">
						<i class="bi bi-search" />
					</IconButton>
					<IconButton aria-label="Settings" colorPalette="blue">
						<i class="bi bi-gear" />
					</IconButton>
					<IconButton aria-label="Delete" variant="subtle" colorPalette="red">
						<i class="bi bi-trash" />
					</IconButton>
				</div>
			);
		},
	});
}