/** @jsx m */
import m from "mithril";
import { PasswordInput } from "mithriluikit";

/** 制御モード — visible / onVisibleChange */
export function setup(el: HTMLElement): void {
	let visible = false;
	let value = "";

	m.mount(el, {
		view() {
			return (
				<div>
					<PasswordInput.Root
						width="300px"
						value={value}
						visible={visible}
						onValueChange={(v: string) => { value = v; }}
						onVisibleChange={(v: boolean) => { visible = v; }}
					>
						<PasswordInput.Input placeholder="パスワード" />
						<PasswordInput.VisibilityTrigger />
					</PasswordInput.Root>
					<div style="margin-top:0.5rem; font-size:0.875rem; color:#6c757d">
						visible: {String(visible)} / 値: "{value}"
					</div>
				</div>
			);
		},
	});
}
