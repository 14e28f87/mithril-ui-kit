/** @jsx m */
import m from "mithril";
import { PasswordInput } from "mithril-ui-kit";

/** 基本: Input + VisibilityTrigger */
export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<PasswordInput.Root width="300px">
					<PasswordInput.Input placeholder="パスワードを入力" />
					<PasswordInput.VisibilityTrigger />
				</PasswordInput.Root>
			);
		},
	});
}
