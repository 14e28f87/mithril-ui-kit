import{m as d}from"./chunks/theme.C32Rvu8V.js";import{c as x}from"./chunks/Table.MsshMnDN.js";import{C as A,o as q,c as S,a4 as n,E as v,k as i}from"./chunks/framework.DuWTyC0X.js";const P="_scrollArea_1yd6r_2",k="_typeScroll_1yd6r_7",T="_typeAuto_1yd6r_11",w="_typeHover_1yd6r_15",$="_typeAlways_1yd6r_22",C="_scrollbarSm_1yd6r_27",H="_scrollbarMd_1yd6r_32",R="_scrollbarLg_1yd6r_37",c={scrollArea:P,typeScroll:k,typeAuto:T,typeHover:w,typeAlways:$,scrollbarSm:C,scrollbarMd:H,scrollbarLg:R};function p(e){return e.charAt(0).toUpperCase()+e.slice(1)}class D{view(t){const{type:r="auto",maxHeight:o,maxWidth:a,scrollbarSize:u="md",as:m="div",class:_,style:l,...h}=t.attrs,s={};o!==void 0&&(s.maxHeight=typeof o=="number"?`${o}px`:o),a!==void 0&&(s.maxWidth=typeof a=="number"?`${a}px`:a);const y=typeof l=="string"?`${Object.entries(s).map(([b,g])=>`${b.replace(/[A-Z]/g,f=>`-${f.toLowerCase()}`)}:${g}`).join(";")}${l?`;${l}`:""}`:{...s,...l||{}};return d(m,{...h,class:x(c.scrollArea,c[`type${p(r)}`],c[`scrollbar${p(u)}`],_),style:y},t.children)}}const L=Array.from({length:18},(e,t)=>`Log line ${t+1}`);function N(e){d.mount(e,{view(){return d(D,{maxHeight:220,style:{border:"1px solid #d0d7de",borderRadius:"12px",padding:"12px"}},d("div",{style:{display:"grid",gap:"8px"}},L.map(t=>d("div",{key:t,style:{padding:"10px 12px",background:"#f8fafc",borderRadius:"8px"}},t))))}})}const I=`/** @jsx m */\r
import m from "mithril";\r
import { ScrollArea } from "mithril-ui-kit";\r
\r
const rows = Array.from({ length: 18 }, (_, index) => \`Log line \${index + 1}\`);\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<ScrollArea maxHeight={220} style={{ border: "1px solid #d0d7de", borderRadius: "12px", padding: "12px" }}>\r
					<div style={{ display: "grid", gap: "8px" }}>\r
						{rows.map((row) => (\r
							<div key={row} style={{ padding: "10px 12px", background: "#f8fafc", borderRadius: "8px" }}>\r
								{row}\r
							</div>\r
						))}\r
					</div>\r
				</ScrollArea>\r
			);\r
		},\r
	});\r
}`,U=JSON.parse('{"title":"ScrollArea","description":"","frontmatter":{},"headers":[],"relativePath":"ScrollArea.md","filePath":"ScrollArea.md","lastUpdated":1776646114000}'),M={name:"ScrollArea.md"},z=Object.assign(M,{setup(e){return(t,r)=>{const o=A("MithrilDemo");return q(),S("div",null,[r[0]||(r[0]=n('<h1 id="scrollarea" tabindex="-1">ScrollArea <a class="header-anchor" href="#scrollarea" aria-label="Permalink to &quot;ScrollArea&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>ScrollArea</code> は一定サイズの領域にスクロール可能なコンテンツを収めるためのコンポーネントです。ログ一覧、履歴、長い設定パネルなどの収まりを整える用途に向いています。</p><h2 id="usage-使用例" tabindex="-1">Usage 使用例 <a class="header-anchor" href="#usage-使用例" aria-label="Permalink to &quot;Usage 使用例&quot;">​</a></h2><h3 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h3>',5)),v(o,{setup:i(N),code:i(I)},null,8,["setup","code"]),r[1]||(r[1]=n('<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="scrollarea-props" tabindex="-1">ScrollArea Props <a class="header-anchor" href="#scrollarea-props" aria-label="Permalink to &quot;ScrollArea Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>type</code></td><td><code>&quot;scroll&quot; | &quot;auto&quot; | &quot;hover&quot; | &quot;always&quot;</code></td><td><code>&quot;auto&quot;</code></td><td>スクロールバーの表示方針です</td></tr><tr><td><code>maxHeight</code></td><td><code>string | number</code></td><td>—</td><td>最大高さです</td></tr><tr><td><code>maxWidth</code></td><td><code>string | number</code></td><td>—</td><td>最大幅です</td></tr><tr><td><code>scrollbarSize</code></td><td><code>&quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;</code></td><td><code>&quot;md&quot;</code></td><td>スクロールバーの太さです</td></tr><tr><td><code>as</code></td><td><code>string</code></td><td><code>&quot;div&quot;</code></td><td>描画要素を切り替えます</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>追加クラスです</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt; | string</code></td><td>—</td><td>インラインスタイルです</td></tr></tbody></table>',3))])}}});export{U as __pageData,z as default};
