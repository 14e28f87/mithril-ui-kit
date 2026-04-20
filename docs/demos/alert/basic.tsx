/** @jsx m */
import m from "mithril";
import { Alert } from "mithriluikit";

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<Alert.Root status="success" variant="subtle">
					<Alert.Indicator />
					<Alert.Content>
						<Alert.Title>保存が完了しました</Alert.Title>
						<Alert.Description>新しいレシピが kiln-server に反映されています。</Alert.Description>
					</Alert.Content>
				</Alert.Root>
			);
		},
	});
}