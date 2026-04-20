import{m as t}from"./chunks/theme.4JftMPzn.js";import{c as v}from"./chunks/Table.BtqtxzWS.js";import{C as w,o as P,c as C,ai as g,E as T,k as b}from"./chunks/framework.Bm_aoSIc.js";const V="_stack_thl4h_1",A={stack:V};class p{view(e){const{direction:o="column",gap:c,align:f,justify:m,wrap:k,separator:u,as:S="div",class:x,style:s,..._}=e.attrs,r={};r.flexDirection=o,c!==void 0&&!u&&(r.gap=typeof c=="number"?`${c}px`:c),f&&(r.alignItems=f),m&&(r.justifyContent=m),k&&(r.flexWrap=k);const q=typeof s=="string"?`${Object.entries(r).map(([h,n])=>`${h.replace(/[A-Z]/g,a=>`-${a.toLowerCase()}`)}:${n}`).join(";")}${s?`;${s}`:""}`:{...r,...s||{}};let l=e.children;if(u&&Array.isArray(l)){const h=l.flat().filter(a=>a!=null&&a!==!1&&a!==""),n=[];h.forEach((a,y)=>{y>0&&n.push(u),n.push(a)}),l=n}return t(S,{..._,class:v(A.stack,x),style:q},l)}}class R{view(e){return t(p,{...e.attrs,direction:"row"},e.children)}}class D{view(e){return t(p,{...e.attrs,direction:"column"},e.children)}}function i(d,e){return t("div",{style:{padding:"8px 12px",borderRadius:"999px",background:e,fontWeight:"600"}},d)}function H(d){t.mount(d,{view(){return t(p,{gap:"16px"},t(p,{gap:"10px",separator:t("span",{style:{color:"#94a3b8"}},"/")},i("Design","#dbeafe"),i("Build","#dcfce7"),i("Ship","#fef3c7")),t(R,{gap:"10px"},i("HStack","#ede9fe"),i("Row","#fce7f3")),t(D,{gap:"8px",align:"stretch"},t("div",{style:{padding:"10px 12px",background:"#f8fafc",borderRadius:"10px"}},"VStack"),t("div",{style:{padding:"10px 12px",background:"#f1f5f9",borderRadius:"10px"}},"Column alias")))}})}const j=`/** @jsx m */\r
import m from "mithril";\r
import { HStack, Stack, VStack } from "mithril-ui-kit";\r
\r
function chip(label: string, color: string): m.Children {\r
	return (\r
		<div\r
			style={{\r
				padding: "8px 12px",\r
				borderRadius: "999px",\r
				background: color,\r
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
				<Stack gap="16px">\r
					<Stack gap="10px" separator={<span style={{ color: "#94a3b8" }}>/</span>}>\r
						{chip("Design", "#dbeafe")}\r
						{chip("Build", "#dcfce7")}\r
						{chip("Ship", "#fef3c7")}\r
					</Stack>\r
					<HStack gap="10px">\r
						{chip("HStack", "#ede9fe")}\r
						{chip("Row", "#fce7f3")}\r
					</HStack>\r
					<VStack gap="8px" align="stretch">\r
						<div style={{ padding: "10px 12px", background: "#f8fafc", borderRadius: "10px" }}>VStack</div>\r
						<div style={{ padding: "10px 12px", background: "#f1f5f9", borderRadius: "10px" }}>Column alias</div>\r
					</VStack>\r
				</Stack>\r
			);\r
		},\r
	});\r
}`,B=JSON.parse('{"title":"Stack","description":"","frontmatter":{},"headers":[],"relativePath":"Stack.md","filePath":"Stack.md"}'),I={name:"Stack.md"},M=Object.assign(I,{setup(d){return(e,o)=>{const c=w("MithrilDemo");return P(),C("div",null,[o[0]||(o[0]=g('<h1 id="stack" tabindex="-1">Stack <a class="header-anchor" href="#stack" aria-label="Permalink to &quot;Stack&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>Stack</code> は子要素を一列に並べるためのレイアウトコンポーネントです。<code>separator</code> を使うと要素間に区切りを挿入でき、<code>HStack</code> と <code>VStack</code> は <code>direction</code> を固定したショートカットとして使えます。</p><h2 id="usage-使用例" tabindex="-1">Usage 使用例 <a class="header-anchor" href="#usage-使用例" aria-label="Permalink to &quot;Usage 使用例&quot;">​</a></h2><h3 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h3>',5)),T(c,{setup:b(H),code:b(j)},null,8,["setup","code"]),o[1]||(o[1]=g('<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="stack-props" tabindex="-1">Stack Props <a class="header-anchor" href="#stack-props" aria-label="Permalink to &quot;Stack Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>direction</code></td><td><code>&quot;row&quot; | &quot;column&quot; | &quot;row-reverse&quot; | &quot;column-reverse&quot;</code></td><td><code>&quot;column&quot;</code></td><td>並び方向です</td></tr><tr><td><code>gap</code></td><td><code>string | number</code></td><td>—</td><td>子要素間の間隔です</td></tr><tr><td><code>align</code></td><td><code>string</code></td><td>—</td><td><code>align-items</code> を指定します</td></tr><tr><td><code>justify</code></td><td><code>string</code></td><td>—</td><td><code>justify-content</code> を指定します</td></tr><tr><td><code>wrap</code></td><td><code>&quot;wrap&quot; | &quot;nowrap&quot; | &quot;wrap-reverse&quot;</code></td><td>—</td><td>折り返し挙動です</td></tr><tr><td><code>separator</code></td><td><code>m.Children</code></td><td>—</td><td>子要素の間に挿入する区切り要素です</td></tr><tr><td><code>as</code></td><td><code>string</code></td><td><code>&quot;div&quot;</code></td><td>描画要素を切り替えます</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>追加クラスです</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt; | string</code></td><td>—</td><td>インラインスタイルです</td></tr></tbody></table><h3 id="aliases" tabindex="-1">Aliases <a class="header-anchor" href="#aliases" aria-label="Permalink to &quot;Aliases&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Component</th><th>Description</th></tr></thead><tbody><tr><td><code>Stack</code></td><td>任意方向を選べる基本コンポーネントです</td></tr><tr><td><code>HStack</code></td><td><code>direction=&quot;row&quot;</code> を固定したショートカットです</td></tr><tr><td><code>VStack</code></td><td><code>direction=&quot;column&quot;</code> を固定したショートカットです</td></tr></tbody></table>',5))])}}});export{B as __pageData,M as default};
