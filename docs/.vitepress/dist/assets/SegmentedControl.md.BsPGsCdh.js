import{m as t}from"./chunks/theme.MeAZuU5r.js";import{S as e}from"./chunks/Table.BlGpiJ_h.js";import{C as m,o as s,c,ai as a,E as u,k as l}from"./chunks/framework.DYURIDHw.js";let d="overview";function h(r){t.mount(r,{view(){return t("div",{style:{display:"grid",gap:"10px"}},t(e.Root,{value:d,onValueChange:n=>{d=n}},t(e.Item,{value:"overview"},t(e.ItemText,null,"Overview")),t(e.Item,{value:"history"},t(e.ItemText,null,"History")),t(e.Item,{value:"settings"},t(e.ItemText,null,"Settings"))),t("div",{style:{color:"#475569",fontSize:"0.9rem"}},"Current tab: ",d))}})}const g=`/** @jsx m */\r
import m from "mithril";\r
import { SegmentedControl } from "mithril-ui-kit";\r
\r
let value = "overview";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div style={{ display: "grid", gap: "10px" }}>\r
					<SegmentedControl.Root value={value} onValueChange={(next) => { value = next; }}>\r
						<SegmentedControl.Item value="overview">\r
							<SegmentedControl.ItemText>Overview</SegmentedControl.ItemText>\r
						</SegmentedControl.Item>\r
						<SegmentedControl.Item value="history">\r
							<SegmentedControl.ItemText>History</SegmentedControl.ItemText>\r
						</SegmentedControl.Item>\r
						<SegmentedControl.Item value="settings">\r
							<SegmentedControl.ItemText>Settings</SegmentedControl.ItemText>\r
						</SegmentedControl.Item>\r
					</SegmentedControl.Root>\r
					<div style={{ color: "#475569", fontSize: "0.9rem" }}>Current tab: {value}</div>\r
				</div>\r
			);\r
		},\r
	});\r
}`,v=JSON.parse('{"title":"SegmentedControl","description":"","frontmatter":{},"headers":[],"relativePath":"SegmentedControl.md","filePath":"SegmentedControl.md"}'),p={name:"SegmentedControl.md"},_=Object.assign(p,{setup(r){return(n,o)=>{const i=m("MithrilDemo");return s(),c("div",null,[o[0]||(o[0]=a('<h1 id="segmentedcontrol" tabindex="-1">SegmentedControl <a class="header-anchor" href="#segmentedcontrol" aria-label="Permalink to &quot;SegmentedControl&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>SegmentedControl</code> は複数の選択肢をボタン状に並べる単一選択コンポーネントです。ビュー切り替えやフィルター切り替えのように、即時反映されるモード選択に向いています。</p><h2 id="usage-使用例" tabindex="-1">Usage 使用例 <a class="header-anchor" href="#usage-使用例" aria-label="Permalink to &quot;Usage 使用例&quot;">​</a></h2><h3 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h3>',5)),u(i,{setup:l(h),code:l(g)},null,8,["setup","code"]),o[1]||(o[1]=a('<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="segmentedcontrol-root-props" tabindex="-1">SegmentedControl.Root Props <a class="header-anchor" href="#segmentedcontrol-root-props" aria-label="Permalink to &quot;SegmentedControl.Root Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>size</code></td><td><code>&quot;xs&quot; | &quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;</code></td><td><code>&quot;md&quot;</code></td><td>コントロールサイズです</td></tr><tr><td><code>value</code></td><td><code>string</code></td><td>—</td><td>現在の選択値です</td></tr><tr><td><code>onValueChange</code></td><td><code>(value: string) =&gt; void</code></td><td>—</td><td>値変更時に呼ばれます</td></tr><tr><td><code>orientation</code></td><td><code>&quot;horizontal&quot; | &quot;vertical&quot;</code></td><td><code>&quot;horizontal&quot;</code></td><td>配置方向です</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>追加クラスです</td></tr></tbody></table><h3 id="segmentedcontrol-item-props" tabindex="-1">SegmentedControl.Item Props <a class="header-anchor" href="#segmentedcontrol-item-props" aria-label="Permalink to &quot;SegmentedControl.Item Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>value</code></td><td><code>string</code></td><td>—</td><td>項目の識別値です</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>無効化します</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>追加クラスです</td></tr></tbody></table><h3 id="subcomponents" tabindex="-1">Subcomponents <a class="header-anchor" href="#subcomponents" aria-label="Permalink to &quot;Subcomponents&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Component</th><th>Description</th></tr></thead><tbody><tr><td><code>SegmentedControl.Item</code></td><td>1 件の選択肢です</td></tr><tr><td><code>SegmentedControl.ItemText</code></td><td>項目ラベルです</td></tr><tr><td><code>SegmentedControl.ItemHiddenInput</code></td><td>hidden input 用の slot です</td></tr><tr><td><code>SegmentedControl.Indicator</code></td><td>将来の indicator 用 slot です</td></tr></tbody></table>',7))])}}});export{v as __pageData,_ as default};
