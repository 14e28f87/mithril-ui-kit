/** @jsx m */
import m from "mithril";
import { Spinner } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
					<Spinner size="sm" />
					<Spinner size="md" colorPalette="blue" />
					<Spinner size="lg" colorPalette="green" />
					<span style={{ color: "#475569" }}>処理状態のフィードバックに使います。</span>
				</div>
			);
		},
	});
}