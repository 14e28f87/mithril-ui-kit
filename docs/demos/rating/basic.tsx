/** @jsx m */
import m from "mithril";
import { Rating } from "mithril-ui-kit";

let rating = 3.5;

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<div style={{ display: "grid", gap: "10px" }}>
					<Rating.Root value={rating} allowHalf={true} onValueChange={(next) => { rating = next; }} />
					<div style={{ color: "#475569", fontSize: "0.9rem" }}>Current value: {rating}</div>
				</div>
			);
		},
	});
}