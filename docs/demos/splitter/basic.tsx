/** @jsx m */
import m from "mithril";
import { Splitter } from "mithriluikit";

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<div style={{ height: "220px" }}>
					<Splitter.Root orientation="horizontal" style={{ height: "100%", border: "1px solid #d0d7de", borderRadius: "12px", overflow: "hidden" }}>
						<Splitter.Panel defaultSize={45}>
							<div style={{ height: "100%", padding: "16px", background: "#eff6ff" }}>Navigation</div>
						</Splitter.Panel>
						<Splitter.ResizeTrigger />
						<Splitter.Panel defaultSize={55}>
							<div style={{ height: "100%", padding: "16px", background: "#ffffff" }}>Details</div>
						</Splitter.Panel>
					</Splitter.Root>
				</div>
			);
		},
	});
}