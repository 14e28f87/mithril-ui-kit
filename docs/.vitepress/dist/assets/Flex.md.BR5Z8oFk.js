import{m as o}from"./chunks/theme.IYrj4rtN.js";import{c as k}from"./chunks/Table.BA6US4RP.js";import{C as w,o as C,c as F,ai as m,E as T,k as x}from"./chunks/framework.Bm_aoSIc.js";const j="_flex_19qh9_1",A="_inline_19qh9_6",D="_spacer_19qh9_10",l={flex:j,inline:A,spacer:D};class E{view(r){const{direction:t,align:n,justify:s,wrap:p,basis:u,grow:f,shrink:h,gap:a,inline:g,as:b="div",class:_,style:c,...q}=r.attrs,e={};t&&(e.flexDirection=t),n&&(e.alignItems=n),s&&(e.justifyContent=s),p&&(e.flexWrap=p),u&&(e.flexBasis=u),f!==void 0&&(e.flexGrow=String(f)),h!==void 0&&(e.flexShrink=String(h)),a!==void 0&&(e.gap=typeof a=="number"?`${a}px`:a);const y=typeof c=="string"?`${Object.entries(e).map(([S,v])=>`${S.replace(/[A-Z]/g,P=>`-${P.toLowerCase()}`)}:${v}`).join(";")}${c?`;${c}`:""}`:{...e,...c||{}};return o(b,{...q,class:k(l.flex,g&&l.inline,_),style:y},r.children)}}class I{view(){return o("div",{class:l.spacer})}}function i(d,r){return o("div",{style:{padding:"10px 14px",borderRadius:"10px",background:r,color:"#0f172a",fontWeight:"600"}},d)}function N(d){o.mount(d,{view(){return o(E,{align:"center",gap:"12px",style:{padding:"8px 0"}},i("Start","#dbeafe"),o(I,null),i("Center","#fde68a"),i("End","#dcfce7"))}})}const R=`/** @jsx m */\r
import m from "mithril";\r
import { Flex, Spacer } from "mithril-ui-kit";\r
\r
function panel(label: string, color: string): m.Children {\r
	return (\r
		<div\r
			style={{\r
				padding: "10px 14px",\r
				borderRadius: "10px",\r
				background: color,\r
				color: "#0f172a",\r
				fontWeight: "600",\r
			}}\r
		>\r
			{label}\r
		</div>\r
	);\r
}\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<Flex align="center" gap="12px" style={{ padding: "8px 0" }}>\r
					{panel("Start", "#dbeafe")}\r
					<Spacer />\r
					{panel("Center", "#fde68a")}\r
					{panel("End", "#dcfce7")}\r
				</Flex>\r
			);\r
		},\r
	});\r
}`,O=JSON.parse('{"title":"Flex","description":"","frontmatter":{},"headers":[],"relativePath":"Flex.md","filePath":"Flex.md"}'),$={name:"Flex.md"},W=Object.assign($,{setup(d){return(r,t)=>{const n=w("MithrilDemo");return C(),F("div",null,[t[0]||(t[0]=m('<h1 id="flex" tabindex="-1">Flex <a class="header-anchor" href="#flex" aria-label="Permalink to &quot;Flex&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>Flex</code> は Flexbox ベースのレイアウトコンポーネントです。<code>direction</code>、<code>align</code>、<code>justify</code>、<code>gap</code> を declarative に指定でき、<code>Spacer</code> を使うと空き領域の押し出しも簡単に行えます。</p><h2 id="usage-使用例" tabindex="-1">Usage 使用例 <a class="header-anchor" href="#usage-使用例" aria-label="Permalink to &quot;Usage 使用例&quot;">​</a></h2><h3 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h3>',5)),T(n,{setup:x(N),code:x(R)},null,8,["setup","code"]),t[1]||(t[1]=m('<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="flex-props" tabindex="-1">Flex Props <a class="header-anchor" href="#flex-props" aria-label="Permalink to &quot;Flex Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>direction</code></td><td><code>&quot;row&quot; | &quot;row-reverse&quot; | &quot;column&quot; | &quot;column-reverse&quot;</code></td><td>—</td><td>フレックス方向です</td></tr><tr><td><code>align</code></td><td><code>string</code></td><td>—</td><td><code>align-items</code> を指定します</td></tr><tr><td><code>justify</code></td><td><code>string</code></td><td>—</td><td><code>justify-content</code> を指定します</td></tr><tr><td><code>wrap</code></td><td><code>&quot;wrap&quot; | &quot;nowrap&quot; | &quot;wrap-reverse&quot;</code></td><td>—</td><td>折り返し挙動です</td></tr><tr><td><code>basis</code></td><td><code>string</code></td><td>—</td><td><code>flex-basis</code> を指定します</td></tr><tr><td><code>grow</code></td><td><code>number | string</code></td><td>—</td><td><code>flex-grow</code> を指定します</td></tr><tr><td><code>shrink</code></td><td><code>number | string</code></td><td>—</td><td><code>flex-shrink</code> を指定します</td></tr><tr><td><code>gap</code></td><td><code>string | number</code></td><td>—</td><td>子要素間の間隔です</td></tr><tr><td><code>inline</code></td><td><code>boolean</code></td><td><code>false</code></td><td><code>inline-flex</code> として描画します</td></tr><tr><td><code>as</code></td><td><code>string</code></td><td><code>&quot;div&quot;</code></td><td>描画要素を切り替えます</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>追加クラスです</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt; | string</code></td><td>—</td><td>インラインスタイルです</td></tr></tbody></table><h3 id="subcomponents" tabindex="-1">Subcomponents <a class="header-anchor" href="#subcomponents" aria-label="Permalink to &quot;Subcomponents&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Component</th><th>Description</th></tr></thead><tbody><tr><td><code>Spacer</code></td><td>残りの空き領域を埋めて、後続要素を端へ押し出します</td></tr></tbody></table>',5))])}}});export{O as __pageData,W as default};
