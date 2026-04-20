import{m as r}from"./chunks/theme.CIfTaYq1.js";import{c as l}from"./chunks/Table.B255pMpr.js";import{C as b,o as _,c as g,ai as h,E as C,k as u}from"./chunks/framework.Bm_aoSIc.js";const q="_center_1pdtc_1",x="_inline_1pdtc_8",y="_square_1pdtc_12",P="_circle_1pdtc_20",s={center:q,inline:x,square:y,circle:P};class S{view(t){const{inline:e,as:d="div",class:c,...o}=t.attrs;return r(d,{...o,class:l(s.center,e&&s.inline,c)},t.children)}}class p{view(t){const{size:e,as:d="div",class:c,style:o,...f}=t.attrs,n=typeof e=="number"?`${e}px`:e,i={};n&&(i.width=n,i.height=n);const m=typeof o=="string"?`width:${n};height:${n};${o}`:{...i,...o||{}};return r(d,{...f,class:l(s.square,c),style:m},t.children)}}class k{view(t){const{class:e,...d}=t.attrs;return r(p,{...d,class:l(s.circle,e)},t.children)}}function T(a){r.mount(a,{view(){return r("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"}},r(S,{style:{width:"180px",height:"110px",borderRadius:"12px",background:"#eff6ff",fontWeight:"600"}},"Center"),r(p,{size:96,style:{background:"#dcfce7",borderRadius:"16px",fontWeight:"600"}},"Square"),r(k,{size:96,style:{background:"#fde68a",fontWeight:"600"}},"Circle"))}})}const v=`/** @jsx m */\r
import m from "mithril";\r
import { Center, Circle, Square } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>\r
					<Center\r
						style={{\r
							width: "180px",\r
							height: "110px",\r
							borderRadius: "12px",\r
							background: "#eff6ff",\r
							fontWeight: "600",\r
						}}\r
					>\r
						Center\r
					</Center>\r
					<Square size={96} style={{ background: "#dcfce7", borderRadius: "16px", fontWeight: "600" }}>\r
						Square\r
					</Square>\r
					<Circle size={96} style={{ background: "#fde68a", fontWeight: "600" }}>\r
						Circle\r
					</Circle>\r
				</div>\r
			);\r
		},\r
	});\r
}`,N=JSON.parse('{"title":"Center","description":"","frontmatter":{},"headers":[],"relativePath":"Center.md","filePath":"Center.md"}'),w={name:"Center.md"},z=Object.assign(w,{setup(a){return(t,e)=>{const d=b("MithrilDemo");return _(),g("div",null,[e[0]||(e[0]=h('<h1 id="center" tabindex="-1">Center <a class="header-anchor" href="#center" aria-label="Permalink to &quot;Center&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>Center</code> は子要素を水平・垂直の両方向で中央に配置します。<code>Square</code> は正方形コンテナ、<code>Circle</code> は円形コンテナのショートカットで、アイコンや数値バッジの土台に向いています。</p><h2 id="usage-使用例" tabindex="-1">Usage 使用例 <a class="header-anchor" href="#usage-使用例" aria-label="Permalink to &quot;Usage 使用例&quot;">​</a></h2><h3 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h3>',5)),C(d,{setup:u(T),code:u(v)},null,8,["setup","code"]),e[1]||(e[1]=h('<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="center-props" tabindex="-1">Center Props <a class="header-anchor" href="#center-props" aria-label="Permalink to &quot;Center Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>inline</code></td><td><code>boolean</code></td><td><code>false</code></td><td><code>inline-flex</code> として描画します</td></tr><tr><td><code>as</code></td><td><code>string</code></td><td><code>&quot;div&quot;</code></td><td>描画要素を切り替えます</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>追加クラスです</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt; | string</code></td><td>—</td><td>インラインスタイルです</td></tr></tbody></table><h3 id="square-circle-props" tabindex="-1">Square / Circle Props <a class="header-anchor" href="#square-circle-props" aria-label="Permalink to &quot;Square / Circle Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>size</code></td><td><code>string | number</code></td><td>—</td><td>幅と高さに同じ値を適用します</td></tr><tr><td><code>as</code></td><td><code>string</code></td><td><code>&quot;div&quot;</code></td><td>描画要素を切り替えます</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>追加クラスです</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt; | string</code></td><td>—</td><td>インラインスタイルです</td></tr></tbody></table><h3 id="aliases" tabindex="-1">Aliases <a class="header-anchor" href="#aliases" aria-label="Permalink to &quot;Aliases&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Component</th><th>Description</th></tr></thead><tbody><tr><td><code>Center</code></td><td>自由サイズの中央配置コンテナです</td></tr><tr><td><code>Square</code></td><td>正方形の中央配置コンテナです</td></tr><tr><td><code>Circle</code></td><td>円形の中央配置コンテナです</td></tr></tbody></table>',7))])}}});export{N as __pageData,z as default};
