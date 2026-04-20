import{m as n}from"./chunks/theme.4JftMPzn.js";import{c as x}from"./chunks/Table.BtqtxzWS.js";import{C as y,o as P,c as T,ai as i,E as q,k as p}from"./chunks/framework.Bm_aoSIc.js";const k="_wrap_ns57k_1",w={wrap:k};class W{view(t){const{gap:e="8px",rowGap:a,columnGap:o,align:l,justify:s,as:u="div",class:m,style:d,...f}=t.attrs,r={};e!==void 0&&(r.gap=typeof e=="number"?`${e}px`:e),a!==void 0&&(r.rowGap=typeof a=="number"?`${a}px`:a),o!==void 0&&(r.columnGap=typeof o=="number"?`${o}px`:o),l&&(r.alignItems=l),s&&(r.justifyContent=s);const h=typeof d=="string"?`${Object.entries(r).map(([b,g])=>`${b.replace(/[A-Z]/g,_=>`-${_.toLowerCase()}`)}:${g}`).join(";")}${d?`;${d}`:""}`:{...r,...d||{}};return n(u,{...f,class:x(w.wrap,m),style:h},t.children)}}const A=[{label:"Temperature",color:"#dbeafe"},{label:"Pressure",color:"#dcfce7"},{label:"OPC UA",color:"#fef3c7"},{label:"Batch",color:"#ede9fe"},{label:"Alarm",color:"#fee2e2"},{label:"Trend",color:"#e0f2fe"}];function C(c){n.mount(c,{view(){return n(W,{gap:"10px"},A.map(t=>n("span",{key:t.label,style:{padding:"8px 12px",borderRadius:"999px",background:t.color,fontWeight:"600"}},t.label)))}})}const v=`/** @jsx m */\r
import m from "mithril";\r
import { Wrap } from "mithril-ui-kit";\r
\r
const tags = [\r
	{ label: "Temperature", color: "#dbeafe" },\r
	{ label: "Pressure", color: "#dcfce7" },\r
	{ label: "OPC UA", color: "#fef3c7" },\r
	{ label: "Batch", color: "#ede9fe" },\r
	{ label: "Alarm", color: "#fee2e2" },\r
	{ label: "Trend", color: "#e0f2fe" },\r
];\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<Wrap gap="10px">\r
					{tags.map((tag) => (\r
						<span\r
							key={tag.label}\r
							style={{\r
								padding: "8px 12px",\r
								borderRadius: "999px",\r
								background: tag.color,\r
								fontWeight: "600",\r
							}}\r
						>\r
							{tag.label}\r
						</span>\r
					))}\r
				</Wrap>\r
			);\r
		},\r
	});\r
}`,I=JSON.parse('{"title":"Wrap","description":"","frontmatter":{},"headers":[],"relativePath":"Wrap.md","filePath":"Wrap.md"}'),S={name:"Wrap.md"},N=Object.assign(S,{setup(c){return(t,e)=>{const a=y("MithrilDemo");return P(),T("div",null,[e[0]||(e[0]=i('<h1 id="wrap" tabindex="-1">Wrap <a class="header-anchor" href="#wrap" aria-label="Permalink to &quot;Wrap&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>Wrap</code> は要素を自動で折り返しながら並べるレイアウトコンポーネントです。タグ一覧やメタ情報の集合など、横並びと改行の両方が必要な場面で使います。</p><h2 id="usage-使用例" tabindex="-1">Usage 使用例 <a class="header-anchor" href="#usage-使用例" aria-label="Permalink to &quot;Usage 使用例&quot;">​</a></h2><h3 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h3>',5)),q(a,{setup:p(C),code:p(v)},null,8,["setup","code"]),e[1]||(e[1]=i('<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="wrap-props" tabindex="-1">Wrap Props <a class="header-anchor" href="#wrap-props" aria-label="Permalink to &quot;Wrap Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>gap</code></td><td><code>string | number</code></td><td><code>&quot;8px&quot;</code></td><td>行列共通の間隔です</td></tr><tr><td><code>rowGap</code></td><td><code>string | number</code></td><td>—</td><td>行間を指定します</td></tr><tr><td><code>columnGap</code></td><td><code>string | number</code></td><td>—</td><td>列間を指定します</td></tr><tr><td><code>align</code></td><td><code>string</code></td><td>—</td><td><code>align-items</code> を指定します</td></tr><tr><td><code>justify</code></td><td><code>string</code></td><td>—</td><td><code>justify-content</code> を指定します</td></tr><tr><td><code>as</code></td><td><code>string</code></td><td><code>&quot;div&quot;</code></td><td>描画要素を切り替えます</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>追加クラスです</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt; | string</code></td><td>—</td><td>インラインスタイルです</td></tr></tbody></table>',3))])}}});export{I as __pageData,N as default};
