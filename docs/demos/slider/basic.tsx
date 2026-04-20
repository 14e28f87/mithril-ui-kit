/** @jsx m */
import m from "mithril";
import { Slider } from "mithriluikit";

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<div style="display: flex; flex-direction: column; gap: 2rem; padding: 1rem 0;">
					{/* シングルサム */}
					<Slider.Root min={0} max={100} defaultValue={[50]}>
						<Slider.Label>音量</Slider.Label>
						<Slider.ValueText />
						<Slider.Control>
							<Slider.Track>
								<Slider.Range />
							</Slider.Track>
							<Slider.Thumb index={0} />
						</Slider.Control>
					</Slider.Root>

					{/* レンジ */}
					<Slider.Root min={0} max={100} defaultValue={[25, 75]}>
						<Slider.Label>範囲</Slider.Label>
						<Slider.ValueText />
						<Slider.Control>
							<Slider.Track>
								<Slider.Range />
							</Slider.Track>
							<Slider.Thumb index={0} />
							<Slider.Thumb index={1} />
						</Slider.Control>
					</Slider.Root>

					{/* マーカー付き */}
					<Slider.Root min={0} max={100} step={25} defaultValue={[50]}>
						<Slider.Label>設定</Slider.Label>
						<Slider.ValueText />
						<Slider.Control>
							<Slider.Track>
								<Slider.Range />
							</Slider.Track>
							<Slider.Thumb index={0} />
						</Slider.Control>
						<Slider.MarkerGroup>
							<Slider.Marker value={0}>0%</Slider.Marker>
							<Slider.Marker value={25}>25%</Slider.Marker>
							<Slider.Marker value={50}>50%</Slider.Marker>
							<Slider.Marker value={75}>75%</Slider.Marker>
							<Slider.Marker value={100}>100%</Slider.Marker>
						</Slider.MarkerGroup>
					</Slider.Root>

					{/* solid バリアント */}
					<Slider.Root min={0} max={100} defaultValue={[60]} variant="solid">
						<Slider.Label>solid バリアント</Slider.Label>
						<Slider.Control>
							<Slider.Track>
								<Slider.Range />
							</Slider.Track>
							<Slider.Thumb index={0} />
						</Slider.Control>
					</Slider.Root>
				</div>
			);
		},
	});
}
