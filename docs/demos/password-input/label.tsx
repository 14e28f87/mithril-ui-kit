/** @jsx m */
import m from "mithril";
import { PasswordInput } from "mithriluikit";

/** Label + defaultVisible */
export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<PasswordInput.Root width="300px" defaultVisible={true}>
					<PasswordInput.Label>パスワード</PasswordInput.Label>
					<PasswordInput.Input placeholder="初期表示" />
					<PasswordInput.VisibilityTrigger />
				</PasswordInput.Root>
			);
		},
	});
}
