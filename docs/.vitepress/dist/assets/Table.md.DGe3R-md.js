import{m as e}from"./chunks/theme.4JftMPzn.js";import{T as t}from"./chunks/Table.BtqtxzWS.js";import{C as c,o as s,c as u,ai as r,E as i,k as l}from"./chunks/framework.Bm_aoSIc.js";const m=[{name:"Kiln A",status:"Running",temp:"812℃"},{name:"Kiln B",status:"Idle",temp:"24℃"},{name:"Kiln C",status:"Alarm",temp:"920℃"}];function b(a){e.mount(a,{view(){return e(t.Root,{striped:!0,hoverable:!0},e(t.Header,null,e(t.Row,null,e(t.ColumnHeader,null,"Device"),e(t.ColumnHeader,null,"Status"),e(t.ColumnHeader,null,"Temperature"))),e(t.Body,null,m.map(o=>e(t.Row,{key:o.name},e(t.Cell,null,o.name),e(t.Cell,null,o.status),e(t.Cell,null,o.temp)))))}})}const h=`/** @jsx m */\r
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
}`,f=JSON.parse('{"title":"Table","description":"","frontmatter":{},"headers":[],"relativePath":"Table.md","filePath":"Table.md"}'),p={name:"Table.md"},q=Object.assign(p,{setup(a){return(o,d)=>{const n=c("MithrilDemo");return s(),u("div",null,[d[0]||(d[0]=r('<h1 id="table" tabindex="-1">Table <a class="header-anchor" href="#table" aria-label="Permalink to &quot;Table&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>Table</code> は表形式データを semantic な HTML 構造で組み立てる compound component です。<code>Header</code>、<code>Body</code>、<code>Row</code>、<code>Cell</code> を明示的に分けられるため、静的な管理表やサマリーテーブルを見通しよく書けます。</p><h2 id="usage-使用例" tabindex="-1">Usage 使用例 <a class="header-anchor" href="#usage-使用例" aria-label="Permalink to &quot;Usage 使用例&quot;">​</a></h2><h3 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h3>',5)),i(n,{setup:l(b),code:l(h)},null,8,["setup","code"]),d[1]||(d[1]=r('<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="table-root-props" tabindex="-1">Table.Root Props <a class="header-anchor" href="#table-root-props" aria-label="Permalink to &quot;Table.Root Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>variant</code></td><td><code>&quot;line&quot; | &quot;outline&quot;</code></td><td><code>&quot;line&quot;</code></td><td>テーブルの見た目です</td></tr><tr><td><code>size</code></td><td><code>&quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;</code></td><td><code>&quot;md&quot;</code></td><td>セル内の密度です</td></tr><tr><td><code>striped</code></td><td><code>boolean</code></td><td><code>false</code></td><td>行ごとのストライプを表示します</td></tr><tr><td><code>hoverable</code></td><td><code>boolean</code></td><td><code>false</code></td><td>ホバー行ハイライトを有効にします</td></tr><tr><td><code>stickyHeader</code></td><td><code>boolean</code></td><td><code>false</code></td><td>ヘッダーを sticky 表示にします</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>追加クラスです</td></tr></tbody></table><h3 id="subcomponents" tabindex="-1">Subcomponents <a class="header-anchor" href="#subcomponents" aria-label="Permalink to &quot;Subcomponents&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Component</th><th>Description</th></tr></thead><tbody><tr><td><code>Table.Header</code></td><td><code>thead</code> です</td></tr><tr><td><code>Table.Body</code></td><td><code>tbody</code> です</td></tr><tr><td><code>Table.Footer</code></td><td><code>tfoot</code> です</td></tr><tr><td><code>Table.Row</code></td><td><code>tr</code> です</td></tr><tr><td><code>Table.ColumnHeader</code></td><td><code>th</code> です</td></tr><tr><td><code>Table.Cell</code></td><td><code>td</code> です</td></tr><tr><td><code>Table.Caption</code></td><td><code>caption</code> です</td></tr></tbody></table>',5))])}}});export{f as __pageData,q as default};
