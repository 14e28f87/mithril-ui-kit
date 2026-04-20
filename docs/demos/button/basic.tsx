/** @jsx m */
import m from "mithril";
import { Button, ButtonGroup } from "mithriluikit";

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<div style={{ display: "grid", gap: "16px" }}>
					<div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
						<Button variant="solid" colorPalette="blue">Save</Button>
						<Button variant="outline">Preview</Button>
						<Button variant="subtle" colorPalette="green">Run</Button>
						<Button loading={true} loadingText="Sending">Submit</Button>
					</div>
					<ButtonGroup attached={true}>
						<Button variant="outline">Day</Button>
						<Button variant="outline">Week</Button>
						<Button variant="outline">Month</Button>
					</ButtonGroup>
				</div>
			);
		},
	});
}