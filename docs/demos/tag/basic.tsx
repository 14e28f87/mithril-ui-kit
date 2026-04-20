/** @jsx m */
import m from "mithril";
import { Tag } from "mithriluikit";

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
					<Tag.Root variant="solid" colorPalette="blue">
						<Tag.StartElement>🏷️</Tag.StartElement>
						<Tag.Label>Recipe A</Tag.Label>
					</Tag.Root>
					<Tag.Root variant="subtle" colorPalette="green" closable={true}>
						<Tag.Label>Completed</Tag.Label>
					</Tag.Root>
				</div>
			);
		},
	});
}