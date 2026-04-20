/** @jsx m */
import m from "mithril";
import { Progress } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<Progress.Root value={68} colorPalette="green" striped={true}>
					<Progress.Label>Firing progress</Progress.Label>
					<Progress.ValueText />
					<Progress.Track>
						<Progress.Range />
					</Progress.Track>
				</Progress.Root>
			);
		},
	});
}