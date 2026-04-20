/** @jsx m */
import m from "mithril";
import { PasswordInput } from "mithril-ui-kit";

/** variant / size バリエーション比較 */
export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<div style="display:flex; flex-direction:column; gap:1rem">
					{/* filled + lg */}
					<PasswordInput.Root width="300px" variant="filled" size="lg">
						<PasswordInput.Label>filled / lg</PasswordInput.Label>
						<PasswordInput.Input placeholder="filled / lg" />
						<PasswordInput.VisibilityTrigger />
					</PasswordInput.Root>

					{/* flushed + sm */}
					<PasswordInput.Root width="300px" variant="flushed" size="sm">
						<PasswordInput.Label>flushed / sm</PasswordInput.Label>
						<PasswordInput.Input placeholder="flushed / sm" />
						<PasswordInput.VisibilityTrigger />
					</PasswordInput.Root>

					{/* outline + xs */}
					<PasswordInput.Root width="300px" variant="outline" size="xs">
						<PasswordInput.Label>outline / xs</PasswordInput.Label>
						<PasswordInput.Input placeholder="outline / xs" />
						<PasswordInput.VisibilityTrigger />
					</PasswordInput.Root>
				</div>
			);
		},
	});
}
