import{m as e}from"./chunks/theme.BHMR1ScI.js";import{T as t}from"./chunks/Table.DpkFVNUa.js";import{C as c,o as s,c as u,a4 as r,E as i,k as l}from"./chunks/framework.DuWTyC0X.js";const b=[{name:"Kiln A",status:"Running",temp:"812℃"},{name:"Kiln B",status:"Idle",temp:"24℃"},{name:"Kiln C",status:"Alarm",temp:"920℃"}];function m(a){e.mount(a,{view(){return e(t.Root,{striped:!0,hoverable:!0},e(t.Header,null,e(t.Row,null,e(t.ColumnHeader,null,"Device"),e(t.ColumnHeader,null,"Status"),e(t.ColumnHeader,null,"Temperature"))),e(t.Body,null,b.map(o=>e(t.Row,{key:o.name},e(t.Cell,null,o.name),e(t.Cell,null,o.status),e(t.Cell,null,o.temp)))))}})}const h=`/** @jsx m */\r
import m from "mithril";\r
import { Table } from "mithril-ui-kit";\r
\r
const rows = [\r
	{ name: "Kiln A", status: "Running", temp: "812℃" },\r
	{ name: "Kiln B", status: "Idle", temp: "24℃" },\r
	{ name: "Kiln C", status: "Alarm", temp: "920℃" },\r
];\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<Table.Root striped={true} hoverable={true}>\r
					<Table.Header>\r
						<Table.Row>\r
							<Table.ColumnHeader>Device</Table.ColumnHeader>\r
							<Table.ColumnHeader>Status</Table.ColumnHeader>\r
							<Table.ColumnHeader>Temperature</Table.ColumnHeader>\r
						</Table.Row>\r
					</Table.Header>\r
					<Table.Body>\r
						{rows.map((row) => (\r
							<Table.Row key={row.name}>\r
								<Table.Cell>{row.name}</Table.Cell>\r
								<Table.Cell>{row.status}</Table.Cell>\r
								<Table.Cell>{row.temp}</Table.Cell>\r
							</Table.Row>\r
						))}\r
					</Table.Body>\r
				</Table.Root>\r
			);\r
		},\r
	});\r
}`,f=JSON.parse('{"title":"Table","description":"","frontmatter":{},"headers":[],"relativePath":"Table.md","filePath":"Table.md","lastUpdated":1776836643000}'),T={name:"Table.md"},q=Object.assign(T,{setup(a){return(o,d)=>{const n=c("MithrilDemo");return s(),u("div",null,[d[0]||(d[0]=r("",5)),i(n,{setup:l(m),code:l(h)},null,8,["setup","code"]),d[1]||(d[1]=r("",5))])}}});export{f as __pageData,q as default};
