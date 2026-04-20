/** @jsx m */
import m from "mithril";
import { Grid, GridItem } from "mithriluikit";

function cell(label: string, background: string): m.Children {
	return (
		<div
			style={{
				padding: "14px",
				borderRadius: "10px",
				background,
				textAlign: "center",
				fontWeight: "600",
			}}
		>
			{label}
		</div>
	);
}

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<Grid templateColumns="repeat(4, minmax(0, 1fr))" gap="12px">
					<GridItem>{cell("1", "#dbeafe")}</GridItem>
					<GridItem colSpan={2}>{cell("2-3", "#ede9fe")}</GridItem>
					<GridItem>{cell("4", "#fce7f3")}</GridItem>
					<GridItem rowSpan={2}>{cell("5", "#dcfce7")}</GridItem>
					<GridItem>{cell("6", "#fef3c7")}</GridItem>
					<GridItem>{cell("7", "#fee2e2")}</GridItem>
					<GridItem>{cell("8", "#e0f2fe")}</GridItem>
				</Grid>
			);
		},
	});
}