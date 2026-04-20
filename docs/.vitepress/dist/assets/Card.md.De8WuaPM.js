import{m as t}from"./chunks/theme.BXbJ2X8L.js";import{C as e}from"./chunks/Table.Dq6qlMER.js";import{C as i,o as l,c,ai as o,E as s,k as a}from"./chunks/framework.Bm_aoSIc.js";function u(d){t.mount(d,{view(){return t(e.Root,{variant:"outline",size:"md"},t(e.Header,null,t(e.Title,null,"焼成バッチ #2416"),t(e.Description,null,"現在の進行状況と主要センサー値")),t(e.Body,null,t("div",{style:{display:"grid",gap:"8px"}},t("div",null,"Target: 850℃"),t("div",null,"Current: 812℃"),t("div",null,"Ramp: 2.0℃/min"))),t(e.Footer,null,t("div",{style:{color:"#475569"}},"Updated 10 sec ago")))}})}const h=`/** @jsx m */\r
import m from "mithril";\r
import { Card } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<Card.Root variant="outline" size="md">\r
					<Card.Header>\r
						<Card.Title>焼成バッチ #2416</Card.Title>\r
						<Card.Description>現在の進行状況と主要センサー値</Card.Description>\r
					</Card.Header>\r
					<Card.Body>\r
						<div style={{ display: "grid", gap: "8px" }}>\r
							<div>Target: 850℃</div>\r
							<div>Current: 812℃</div>\r
							<div>Ramp: 2.0℃/min</div>\r
						</div>\r
					</Card.Body>\r
					<Card.Footer>\r
						<div style={{ color: "#475569" }}>Updated 10 sec ago</div>\r
					</Card.Footer>\r
				</Card.Root>\r
			);\r
		},\r
	});\r
}`,q=JSON.parse('{"title":"Card","description":"","frontmatter":{},"headers":[],"relativePath":"Card.md","filePath":"Card.md"}'),p={name:"Card.md"},f=Object.assign(p,{setup(d){return(m,r)=>{const n=i("MithrilDemo");return l(),c("div",null,[r[0]||(r[0]=o('<h1 id="card" tabindex="-1">Card <a class="header-anchor" href="#card" aria-label="Permalink to &quot;Card&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>Card</code> は情報のまとまりを視覚的にグルーピングする compound component です。ヘッダー、本文、フッターを意味的に分けられるので、ダッシュボードカードや設定パネルの土台として使いやすくなっています。</p><h2 id="usage-使用例" tabindex="-1">Usage 使用例 <a class="header-anchor" href="#usage-使用例" aria-label="Permalink to &quot;Usage 使用例&quot;">​</a></h2><h3 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h3>',5)),s(n,{setup:a(u),code:a(h)},null,8,["setup","code"]),r[1]||(r[1]=o('<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="card-root-props" tabindex="-1">Card.Root Props <a class="header-anchor" href="#card-root-props" aria-label="Permalink to &quot;Card.Root Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>variant</code></td><td><code>&quot;elevated&quot; | &quot;outline&quot; | &quot;subtle&quot;</code></td><td><code>&quot;outline&quot;</code></td><td>カードの見た目です</td></tr><tr><td><code>size</code></td><td><code>&quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;</code></td><td><code>&quot;md&quot;</code></td><td>内側余白と文字サイズの基準です</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>追加クラスです</td></tr></tbody></table><h3 id="subcomponents" tabindex="-1">Subcomponents <a class="header-anchor" href="#subcomponents" aria-label="Permalink to &quot;Subcomponents&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Component</th><th>Description</th></tr></thead><tbody><tr><td><code>Card.Header</code></td><td>ヘッダー領域です</td></tr><tr><td><code>Card.Body</code></td><td>本文領域です</td></tr><tr><td><code>Card.Footer</code></td><td>フッター領域です</td></tr><tr><td><code>Card.Title</code></td><td>タイトルです</td></tr><tr><td><code>Card.Description</code></td><td>補足説明です</td></tr></tbody></table>',5))])}}});export{q as __pageData,f as default};
