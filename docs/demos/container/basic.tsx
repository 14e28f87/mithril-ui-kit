/** @jsx m */
import m from "mithril";
import { Container } from "mithriluikit";

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<div style={{ background: "#f8fafc", padding: "16px", borderRadius: "16px" }}>
					<Container maxWidth="520px" style={{ background: "#ffffff", borderRadius: "14px", padding: "16px" }}>
						<div style={{ fontWeight: "700", marginBottom: "8px" }}>Constrained content</div>
						<div style={{ color: "#475569" }}>
							Container は本文やフォームなどの最大幅を一定に保ち、広い画面でも読みやすさを維持します。
						</div>
					</Container>
				</div>
			);
		},
	});
}