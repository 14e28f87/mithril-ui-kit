import{m as r}from"./chunks/theme.LBbUWaEz.js";import{c as y}from"./chunks/Table.DnqMepI2.js";import{C as P,o as q,c as G,a4 as p,E as k,k as u}from"./chunks/framework.DuWTyC0X.js";const v="_group_uqxoe_1",T="_attached_uqxoe_8",w="_grow_uqxoe_26",i={group:v,attached:T,grow:w};class l{view(n){const{attached:t,grow:c,gap:d,as:h="div",class:g,style:a,...b}=n.attrs,s={};d!==void 0&&!t&&(s.gap=typeof d=="number"?`${d}px`:d);const f=typeof a=="string"?`${Object.entries(s).map(([m,_])=>`${m.replace(/[A-Z]/g,x=>`-${x.toLowerCase()}`)}:${_}`).join(";")}${a?`;${a}`:""}`:{...s,...a||{}};return r(h,{...b,class:y(i.group,t&&i.attached,c&&i.grow,g),style:f},n.children)}}function e(o){return r("button",{type:"button",style:{padding:"10px 14px",border:"1px solid #cbd5e1",background:"#ffffff",fontWeight:"600"}},o)}function C(o){r.mount(o,{view(){return r("div",{style:{display:"grid",gap:"16px"}},r(l,{gap:"10px"},e("Preview"),e("Run"),e("Export")),r(l,{attached:!0},e("Day"),e("Week"),e("Month")))}})}const S=`/** @jsx m */\r
import m from "mithril";\r
import { Group } from "mithril-ui-kit";\r
\r
function button(label: string): m.Children {\r
	return (\r
		<button\r
			type="button"\r
			style={{\r
				padding: "10px 14px",\r
				border: "1px solid #cbd5e1",\r
				background: "#ffffff",\r
				fontWeight: "600",\r
			}}\r
		>\r
			{label}\r
		</button>\r
	);\r
}\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div style={{ display: "grid", gap: "16px" }}>\r
					<Group gap="10px">{button("Preview")}{button("Run")}{button("Export")}</Group>\r
					<Group attached>{button("Day")}{button("Week")}{button("Month")}</Group>\r
				</div>\r
			);\r
		},\r
	});\r
}`,R=JSON.parse('{"title":"Group","description":"","frontmatter":{},"headers":[],"relativePath":"Group.md","filePath":"Group.md","lastUpdated":1776646114000}'),A={name:"Group.md"},$=Object.assign(A,{setup(o){return(n,t)=>{const c=P("MithrilDemo");return q(),G("div",null,[t[0]||(t[0]=p('<h1 id="group" tabindex="-1">Group <a class="header-anchor" href="#group" aria-label="Permalink to &quot;Group&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>Group</code> は関連する操作要素をひとまとまりで並べるためのレイアウトコンポーネントです。<code>attached</code> を使うとボタン群を接着したように表示でき、ツールバーや segmented action の土台に向いています。</p><h2 id="usage-使用例" tabindex="-1">Usage 使用例 <a class="header-anchor" href="#usage-使用例" aria-label="Permalink to &quot;Usage 使用例&quot;">​</a></h2><h3 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h3>',5)),k(c,{setup:u(C),code:u(S)},null,8,["setup","code"]),t[1]||(t[1]=p('<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="group-props" tabindex="-1">Group Props <a class="header-anchor" href="#group-props" aria-label="Permalink to &quot;Group Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>attached</code></td><td><code>boolean</code></td><td><code>false</code></td><td>子要素を隙間なく接着して表示します</td></tr><tr><td><code>grow</code></td><td><code>boolean</code></td><td><code>false</code></td><td>子要素を均等幅で広げます</td></tr><tr><td><code>gap</code></td><td><code>string | number</code></td><td>—</td><td>非接着時の子要素間隔です</td></tr><tr><td><code>as</code></td><td><code>string</code></td><td><code>&quot;div&quot;</code></td><td>描画要素を切り替えます</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>追加クラスです</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt; | string</code></td><td>—</td><td>インラインスタイルです</td></tr></tbody></table>',3))])}}});export{R as __pageData,$ as default};
