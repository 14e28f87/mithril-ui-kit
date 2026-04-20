import{m as t}from"./chunks/theme.BkMwotUo.js";import{g as r}from"./chunks/Table.CoGcR3xC.js";import{C as l,o as u,c as i,a4 as n,E as c,k as d}from"./chunks/framework.DuWTyC0X.js";const p=[{value:"info",label:"Waiting"},{value:"warning",label:"Warning"},{value:"success",label:"Running"},{value:"error",label:"Stopped"}];function h(o){t.mount(o,{view(){return t("div",{style:{display:"grid",gap:"10px"}},p.map(e=>t(r.Root,{key:e.label,value:e.value},t(r.Indicator,null),t("span",{style:{marginLeft:"8px"}},e.label))))}})}const m=`/** @jsx m */\r
import m from "mithril";\r
import { Status } from "mithriluikit";\r
\r
const rows = [\r
	{ value: "info", label: "Waiting" },\r
	{ value: "warning", label: "Warning" },\r
	{ value: "success", label: "Running" },\r
	{ value: "error", label: "Stopped" },\r
] as const;\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div style={{ display: "grid", gap: "10px" }}>\r
					{rows.map((row) => (\r
						<Status.Root key={row.label} value={row.value}>\r
							<Status.Indicator />\r
							<span style={{ marginLeft: "8px" }}>{row.label}</span>\r
						</Status.Root>\r
					))}\r
				</div>\r
			);\r
		},\r
	});\r
}`,S=JSON.parse('{"title":"Status","description":"","frontmatter":{},"headers":[],"relativePath":"Status.md","filePath":"Status.md","lastUpdated":null}'),b={name:"Status.md"},g=Object.assign(b,{setup(o){return(e,a)=>{const s=l("MithrilDemo");return u(),i("div",null,[a[0]||(a[0]=n('<h1 id="status" tabindex="-1">Status <a class="header-anchor" href="#status" aria-label="Permalink to &quot;Status&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>Status</code> は小さなインジケーターとテキストで状態を表すコンポーネントです。機器の接続状態、ジョブ進行、警告表示などの軽量なステータス表現に向いています。</p><h2 id="usage-使用例" tabindex="-1">Usage 使用例 <a class="header-anchor" href="#usage-使用例" aria-label="Permalink to &quot;Usage 使用例&quot;">​</a></h2><h3 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h3>',5)),c(s,{setup:d(h),code:d(m)},null,8,["setup","code"]),a[1]||(a[1]=n('<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="status-root-props" tabindex="-1">Status.Root Props <a class="header-anchor" href="#status-root-props" aria-label="Permalink to &quot;Status.Root Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>value</code></td><td><code>&quot;info&quot; | &quot;warning&quot; | &quot;success&quot; | &quot;error&quot;</code></td><td><code>&quot;info&quot;</code></td><td>状態値です</td></tr><tr><td><code>size</code></td><td><code>&quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;</code></td><td><code>&quot;md&quot;</code></td><td>表示サイズです</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>追加クラスです</td></tr></tbody></table><h3 id="subcomponents" tabindex="-1">Subcomponents <a class="header-anchor" href="#subcomponents" aria-label="Permalink to &quot;Subcomponents&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Component</th><th>Description</th></tr></thead><tbody><tr><td><code>Status.Root</code></td><td>状態値とテキストをまとめるルートです</td></tr><tr><td><code>Status.Indicator</code></td><td>色付きの丸インジケーターです</td></tr></tbody></table>',5))])}}});export{S as __pageData,g as default};
