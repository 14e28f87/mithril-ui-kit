import{m as t}from"./chunks/theme.4JftMPzn.js";import{H as o}from"./chunks/Table.BtqtxzWS.js";import{C as i,o as c,c as s,ai as d,E as l,k as a}from"./chunks/framework.Bm_aoSIc.js";function u(r){t.mount(r,{view(){return t(o.Root,{openDelay:150,closeDelay:120},t(o.Trigger,null,t("span",{style:{color:"#2563eb",fontWeight:"600",cursor:"default"}},"Hover sensor S-12")),t(o.Content,null,t("div",{style:{display:"grid",gap:"6px",minWidth:"220px"}},t("div",{style:{fontWeight:"700"}},"Sensor S-12"),t("div",null,"Temperature: 812℃"),t("div",null,"Last update: 1 sec ago"))))}})}const h=`/** @jsx m */\r
import m from "mithril";\r
import { HoverCard } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<HoverCard.Root openDelay={150} closeDelay={120}>\r
					<HoverCard.Trigger>\r
						<span style={{ color: "#2563eb", fontWeight: "600", cursor: "default" }}>Hover sensor S-12</span>\r
					</HoverCard.Trigger>\r
					<HoverCard.Content>\r
						<div style={{ display: "grid", gap: "6px", minWidth: "220px" }}>\r
							<div style={{ fontWeight: "700" }}>Sensor S-12</div>\r
							<div>Temperature: 812℃</div>\r
							<div>Last update: 1 sec ago</div>\r
						</div>\r
					</HoverCard.Content>\r
				</HoverCard.Root>\r
			);\r
		},\r
	});\r
}`,C=JSON.parse('{"title":"HoverCard","description":"","frontmatter":{},"headers":[],"relativePath":"HoverCard.md","filePath":"HoverCard.md"}'),p={name:"HoverCard.md"},_=Object.assign(p,{setup(r){return(m,e)=>{const n=i("MithrilDemo");return c(),s("div",null,[e[0]||(e[0]=d('<h1 id="hovercard" tabindex="-1">HoverCard <a class="header-anchor" href="#hovercard" aria-label="Permalink to &quot;HoverCard&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>HoverCard</code> はホバー中だけ詳細情報を表示する軽量な compound component です。ツールチップより情報量を増やしたいが、クリック操作までは不要な場面に向いています。</p><h2 id="usage-使用例" tabindex="-1">Usage 使用例 <a class="header-anchor" href="#usage-使用例" aria-label="Permalink to &quot;Usage 使用例&quot;">​</a></h2><h3 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h3>',5)),l(n,{setup:a(u),code:a(h)},null,8,["setup","code"]),e[1]||(e[1]=d('<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="hovercard-root-props" tabindex="-1">HoverCard.Root Props <a class="header-anchor" href="#hovercard-root-props" aria-label="Permalink to &quot;HoverCard.Root Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>openDelay</code></td><td><code>number</code></td><td><code>600</code></td><td>表示までの遅延ミリ秒です</td></tr><tr><td><code>closeDelay</code></td><td><code>number</code></td><td><code>300</code></td><td>非表示までの遅延ミリ秒です</td></tr><tr><td><code>size</code></td><td><code>&quot;xs&quot; | &quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;</code></td><td><code>&quot;md&quot;</code></td><td>カードサイズです</td></tr><tr><td><code>placement</code></td><td><code>&quot;top&quot; | &quot;bottom&quot; | &quot;left&quot; | &quot;right&quot;</code></td><td><code>&quot;bottom&quot;</code></td><td>表示位置です</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>追加クラスです</td></tr></tbody></table><h3 id="subcomponents" tabindex="-1">Subcomponents <a class="header-anchor" href="#subcomponents" aria-label="Permalink to &quot;Subcomponents&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Component</th><th>Description</th></tr></thead><tbody><tr><td><code>HoverCard.Trigger</code></td><td>ホバー起点になる要素です</td></tr><tr><td><code>HoverCard.Positioner</code></td><td>位置決めのためのラッパーです</td></tr><tr><td><code>HoverCard.Content</code></td><td>表示される内容です</td></tr><tr><td><code>HoverCard.Arrow</code></td><td>矢印 slot です</td></tr><tr><td><code>HoverCard.ArrowTip</code></td><td>矢印先端 slot です</td></tr></tbody></table>',5))])}}});export{C as __pageData,_ as default};
