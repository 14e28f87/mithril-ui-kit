/** @jsx m */
import m from "mithril";
import { ColorSwatch, ColorSwatchMix } from "mithriluikit";

const colors = ["#0ea5e9", "#22c55e", "#f59e0b", "#ef4444"];

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
					{colors.map((color) => (
						<ColorSwatch key={color} value={color} size="lg" rounded={true} />
					))}
					<ColorSwatchMix colors={colors} size="xl" />
				</div>
			);
		},
	});
}