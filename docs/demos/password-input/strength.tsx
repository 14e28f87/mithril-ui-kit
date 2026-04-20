/** @jsx m */
import m from "mithril";
import { PasswordInput } from "mithril-ui-kit";

/** StrengthMeter 付きパスワード入力 */
export function setup(el: HTMLElement): void {
	let strength = 0;

	function calcStrength(pw: string): number {
		if (pw.length === 0) return 0;
		let s = 0;
		if (pw.length >= 6) s++;
		if (pw.length >= 10) s++;
		if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) s++;
		if (/[0-9]/.test(pw) && /[^a-zA-Z0-9]/.test(pw)) s++;
		return Math.min(4, s);
	}

	m.mount(el, {
		view() {
			return (
				<PasswordInput.Root
					width="300px"
					onValueChange={(v: string) => { strength = calcStrength(v); }}
				>
					<PasswordInput.Label>パスワード</PasswordInput.Label>
					<PasswordInput.Input placeholder="パスワードを入力" />
					<PasswordInput.VisibilityTrigger />
					<PasswordInput.StrengthMeter value={strength} />
				</PasswordInput.Root>
			);
		},
	});
}
