/** @jsx m */
import m from "mithril";
import { Table } from "mithril-ui-kit";

const rows = [
	{ name: "Kiln A", status: "Running", temp: "812℃" },
	{ name: "Kiln B", status: "Idle", temp: "24℃" },
	{ name: "Kiln C", status: "Alarm", temp: "920℃" },
];

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<Table.Root striped={true} hoverable={true}>
					<Table.Header>
						<Table.Row>
							<Table.ColumnHeader>Device</Table.ColumnHeader>
							<Table.ColumnHeader>Status</Table.ColumnHeader>
							<Table.ColumnHeader>Temperature</Table.ColumnHeader>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{rows.map((row) => (
							<Table.Row key={row.name}>
								<Table.Cell>{row.name}</Table.Cell>
								<Table.Cell>{row.status}</Table.Cell>
								<Table.Cell>{row.temp}</Table.Cell>
							</Table.Row>
						))}
					</Table.Body>
				</Table.Root>
			);
		},
	});
}