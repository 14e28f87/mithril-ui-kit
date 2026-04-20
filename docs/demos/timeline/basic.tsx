/** @jsx m */
import m from "mithril";
import { Timeline } from "mithriluikit";

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<Timeline.Root variant="subtle">
					<Timeline.Item>
						<Timeline.Separator>
							<Timeline.Indicator>1</Timeline.Indicator>
							<Timeline.Connector />
						</Timeline.Separator>
						<Timeline.Content>
							<Timeline.Title>Recipe loaded</Timeline.Title>
							<Timeline.Description>Batch parameters were synchronized.</Timeline.Description>
						</Timeline.Content>
					</Timeline.Item>
					<Timeline.Item>
						<Timeline.Separator>
							<Timeline.Indicator>2</Timeline.Indicator>
							<Timeline.Connector />
						</Timeline.Separator>
						<Timeline.Content>
							<Timeline.Title>Ramp started</Timeline.Title>
							<Timeline.Description>Heating reached the scheduled gradient.</Timeline.Description>
						</Timeline.Content>
					</Timeline.Item>
					<Timeline.Item>
						<Timeline.Separator>
							<Timeline.Indicator>3</Timeline.Indicator>
						</Timeline.Separator>
						<Timeline.Content>
							<Timeline.Title>Hold phase</Timeline.Title>
							<Timeline.Description>Temperature is now stable at target.</Timeline.Description>
						</Timeline.Content>
					</Timeline.Item>
				</Timeline.Root>
			);
		},
	});
}