/** @jsx m */
import m from "mithril";
import { Skeleton, SkeletonCircle, SkeletonText } from "mithriluikit";

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<div style={{ display: "grid", gap: "16px" }}>
					<div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
						<SkeletonCircle size="56px" />
						<div style={{ flex: 1 }}>
							<SkeletonText noOfLines={3} />
						</div>
					</div>
					<Skeleton height="120px" borderRadius="16px" variant="shine" />
				</div>
			);
		},
	});
}