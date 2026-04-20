/** @jsx m */
import m from "mithril";
import { Switch } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			let checked = false;
			return (
				<div style="display: flex; flex-direction: column; gap: 1.5rem;">
					{/* 基本 */}
					<Switch.Root
						defaultChecked={false}
						onCheckedChange={({ checked: c }) => { checked = c; }}
					>
						<Switch.Control>
							<Switch.Thumb />
						</Switch.Control>
						<Switch.Label>Wi-Fi</Switch.Label>
					</Switch.Root>

					{/* サイズ */}
					<div style="display: flex; align-items: center; gap: 1rem;">
						{(["xs", "sm", "md", "lg"] as const).map(sz => (
							<Switch.Root key={sz} defaultChecked={true} size={sz}>
								<Switch.Control>
									<Switch.Thumb />
								</Switch.Control>
								<Switch.Label>{sz}</Switch.Label>
							</Switch.Root>
						))}
					</div>

					{/* バリアント */}
					<div style="display: flex; align-items: center; gap: 1rem;">
						<Switch.Root defaultChecked={true} variant="solid">
							<Switch.Control><Switch.Thumb /></Switch.Control>
							<Switch.Label>solid</Switch.Label>
						</Switch.Root>
						<Switch.Root defaultChecked={true} variant="raised">
							<Switch.Control><Switch.Thumb /></Switch.Control>
							<Switch.Label>raised</Switch.Label>
						</Switch.Root>
					</div>

					{/* disabled / readOnly */}
					<div style="display: flex; align-items: center; gap: 1rem;">
						<Switch.Root defaultChecked={true} disabled>
							<Switch.Control><Switch.Thumb /></Switch.Control>
							<Switch.Label>disabled</Switch.Label>
						</Switch.Root>
						<Switch.Root defaultChecked={true} readOnly>
							<Switch.Control><Switch.Thumb /></Switch.Control>
							<Switch.Label>readOnly</Switch.Label>
						</Switch.Root>
					</div>
				</div>
			);
		},
	});
}
