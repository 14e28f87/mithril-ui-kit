import{m as t}from"./chunks/theme.BXbJ2X8L.js";import{N as o}from"./chunks/Table.Dq6qlMER.js";import{C as c,o as u,c as s,ai as r,E as h,k as i}from"./chunks/framework.Bm_aoSIc.js";let a="auto";function p(n){t.mount(n,{view(){return t("div",{style:{display:"grid",gap:"10px",maxWidth:"280px"}},t(o.Root,null,t(o.Field,{value:a,onchange:d=>{a=d.target.value}},t("option",{value:"auto"},"Auto"),t("option",{value:"manual"},"Manual"),t("option",{value:"maintenance"},"Maintenance")),t(o.Indicator,null)),t("div",{style:{color:"#475569",fontSize:"0.9rem"}},"Current mode: ",a))}})}const m=`/** @jsx m */\r
import m from "mithril";\r
import { NativeSelect } from "mithril-ui-kit";\r
\r
let value = "auto";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div style={{ display: "grid", gap: "10px", maxWidth: "280px" }}>\r
					<NativeSelect.Root>\r
						<NativeSelect.Field value={value} onchange={(event: Event) => { value = (event.target as HTMLSelectElement).value; }}>\r
							<option value="auto">Auto</option>\r
							<option value="manual">Manual</option>\r
							<option value="maintenance">Maintenance</option>\r
						</NativeSelect.Field>\r
						<NativeSelect.Indicator />\r
					</NativeSelect.Root>\r
					<div style={{ color: "#475569", fontSize: "0.9rem" }}>Current mode: {value}</div>\r
				</div>\r
			);\r
		},\r
	});\r
}`,S=JSON.parse('{"title":"NativeSelect","description":"","frontmatter":{},"headers":[],"relativePath":"NativeSelect.md","filePath":"NativeSelect.md"}'),v={name:"NativeSelect.md"},f=Object.assign(v,{setup(n){return(d,e)=>{const l=c("MithrilDemo");return u(),s("div",null,[e[0]||(e[0]=r('<h1 id="nativeselect" tabindex="-1">NativeSelect <a class="header-anchor" href="#nativeselect" aria-label="Permalink to &quot;NativeSelect&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>NativeSelect</code> はブラウザ標準の <code>select</code> をラップして見た目を整える compound component です。アクセシビリティやフォーム互換を保ったまま、統一された外観を与えたい場面に向いています。</p><h2 id="usage-使用例" tabindex="-1">Usage 使用例 <a class="header-anchor" href="#usage-使用例" aria-label="Permalink to &quot;Usage 使用例&quot;">​</a></h2><h3 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h3>',5)),h(l,{setup:i(p),code:i(m)},null,8,["setup","code"]),e[1]||(e[1]=r('<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="nativeselect-root-props" tabindex="-1">NativeSelect.Root Props <a class="header-anchor" href="#nativeselect-root-props" aria-label="Permalink to &quot;NativeSelect.Root Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>variant</code></td><td><code>&quot;outline&quot; | &quot;subtle&quot; | &quot;plain&quot; | &quot;ghost&quot;</code></td><td><code>&quot;outline&quot;</code></td><td>見た目のバリエーションです</td></tr><tr><td><code>size</code></td><td><code>&quot;xs&quot; | &quot;sm&quot; | &quot;md&quot; | &quot;lg&quot; | &quot;xl&quot;</code></td><td><code>&quot;md&quot;</code></td><td>入力欄サイズです</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>無効化します</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>追加クラスです</td></tr></tbody></table><h3 id="subcomponents" tabindex="-1">Subcomponents <a class="header-anchor" href="#subcomponents" aria-label="Permalink to &quot;Subcomponents&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Component</th><th>Description</th></tr></thead><tbody><tr><td><code>NativeSelect.Field</code></td><td>実際の <code>select</code> 要素です</td></tr><tr><td><code>NativeSelect.Indicator</code></td><td>末尾の矢印表示です</td></tr></tbody></table>',5))])}}});export{S as __pageData,f as default};
