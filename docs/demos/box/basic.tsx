/** @jsx m */
import m from "mithril";
import { Box } from "mithriluikit";

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<Box
					as="section"
					style={{
						padding: "16px",
						border: "1px solid #d0d7de",
						borderRadius: "12px",
						background: "linear-gradient(135deg, #fff7ed, #ffffff)",
					}}
				>
					<div style={{ fontWeight: "600", marginBottom: "8px" }}>Box</div>
					<div>as、class、style を受け取り、任意の HTML 要素を薄くラップできます。</div>
				</Box>
			);
		},
	});
}