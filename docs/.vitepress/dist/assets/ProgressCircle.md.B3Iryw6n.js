import{m as e}from"./chunks/theme.D5gNcpBr.js";import{m as t}from"./chunks/Table.A5W0Ssaz.js";import{C as l,o as s,c as i,ai as d,E as n,k as a}from"./chunks/framework.Bm_aoSIc.js";function u(o){e.mount(o,{view(){return e("div",{style:{display:"flex",gap:"20px",alignItems:"center"}},e(t.Root,{value:82,size:"lg",colorPalette:"green"},e(t.Circle,null,e(t.Track,null),e(t.Range,null)),e(t.ValueText,null)),e("div",{style:{color:"#475569"}},"Cycle complete"))}})}const h=`/** @jsx m */\r
import m from "mithril";\r
import { ProgressCircle } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div style={{ display: "flex", gap: "20px", alignItems: "center" }}>\r
					<ProgressCircle.Root value={82} size="lg" colorPalette="green">\r
						<ProgressCircle.Circle>\r
							<ProgressCircle.Track />\r
							<ProgressCircle.Range />\r
						</ProgressCircle.Circle>\r
						<ProgressCircle.ValueText />\r
					</ProgressCircle.Root>\r
					<div style={{ color: "#475569" }}>Cycle complete</div>\r
				</div>\r
			);\r
		},\r
	});\r
}`,b=JSON.parse('{"title":"ProgressCircle","description":"","frontmatter":{},"headers":[],"relativePath":"ProgressCircle.md","filePath":"ProgressCircle.md"}'),m={name:"ProgressCircle.md"},_=Object.assign(m,{setup(o){return(p,r)=>{const c=l("MithrilDemo");return s(),i("div",null,[r[0]||(r[0]=d('<h1 id="progresscircle" tabindex="-1">ProgressCircle <a class="header-anchor" href="#progresscircle" aria-label="Permalink to &quot;ProgressCircle&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>ProgressCircle</code> は円形の進捗インジケーターです。限られたスペースで完了率を示したいカードや KPI 表示に向いています。</p><h2 id="usage-使用例" tabindex="-1">Usage 使用例 <a class="header-anchor" href="#usage-使用例" aria-label="Permalink to &quot;Usage 使用例&quot;">​</a></h2><h3 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h3>',5)),n(c,{setup:a(u),code:a(h)},null,8,["setup","code"]),r[1]||(r[1]=d('<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="progresscircle-root-props" tabindex="-1">ProgressCircle.Root Props <a class="header-anchor" href="#progresscircle-root-props" aria-label="Permalink to &quot;ProgressCircle.Root Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>value</code></td><td><code>number | null</code></td><td>—</td><td>現在値です。<code>null</code> で不確定状態になります</td></tr><tr><td><code>min</code></td><td><code>number</code></td><td><code>0</code></td><td>最小値です</td></tr><tr><td><code>max</code></td><td><code>number</code></td><td><code>100</code></td><td>最大値です</td></tr><tr><td><code>size</code></td><td><code>&quot;xs&quot; | &quot;sm&quot; | &quot;md&quot; | &quot;lg&quot; | &quot;xl&quot;</code></td><td><code>&quot;md&quot;</code></td><td>円のサイズです</td></tr><tr><td><code>colorPalette</code></td><td><code>string</code></td><td><code>&quot;blue&quot;</code></td><td>カラー CSS 変数へ反映する色です</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>追加クラスです</td></tr></tbody></table><h3 id="subcomponents" tabindex="-1">Subcomponents <a class="header-anchor" href="#subcomponents" aria-label="Permalink to &quot;Subcomponents&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Component</th><th>Description</th></tr></thead><tbody><tr><td><code>ProgressCircle.Circle</code></td><td>SVG 円全体のラッパーです</td></tr><tr><td><code>ProgressCircle.Track</code></td><td>背景トラックです</td></tr><tr><td><code>ProgressCircle.Range</code></td><td>進行部分の円弧です</td></tr><tr><td><code>ProgressCircle.ValueText</code></td><td>中央の値表示です</td></tr></tbody></table>',5))])}}});export{b as __pageData,_ as default};
