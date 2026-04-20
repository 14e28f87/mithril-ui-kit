import{m as n}from"./chunks/theme.XnzwSjk8.js";import{c as v}from"./chunks/Table.B_fZamCg.js";import{C as B,o as y,c as P,ai as m,E as S,k as b}from"./chunks/framework.Bm_aoSIc.js";const q="_bleed_x8v3i_1",T={bleed:q};function r(e){return typeof e=="number"?`-${e}px`:e.startsWith("-")?e:`-${e}`}class C{view(a){const{inline:d,block:o,inlineStart:l,inlineEnd:c,blockStart:s,blockEnd:p,as:u="div",class:f,style:i,...g}=a.attrs,t={};d!==void 0&&(t.marginInline=r(d)),o!==void 0&&(t.marginBlock=r(o)),l!==void 0&&(t.marginInlineStart=r(l)),c!==void 0&&(t.marginInlineEnd=r(c)),s!==void 0&&(t.marginBlockStart=r(s)),p!==void 0&&(t.marginBlockEnd=r(p));const h=typeof i=="string"?`${Object.entries(t).map(([_,x])=>`${_.replace(/[A-Z]/g,k=>`-${k.toLowerCase()}`)}:${x}`).join(";")}${i?`;${i}`:""}`:{...t,...i||{}};return n(u,{...g,class:v(T.bleed,f),style:h},a.children)}}function E(e){n.mount(e,{view(){return n("div",{style:{padding:"20px",background:"#f8fafc",borderRadius:"16px",border:"1px solid #e2e8f0"}},n("div",{style:{marginBottom:"10px",fontWeight:"600"}},"Container padding: 20px"),n(C,{inline:"20px"},n("div",{style:{padding:"14px 20px",background:"linear-gradient(90deg, #bfdbfe, #dbeafe)",color:"#1e3a8a",fontWeight:"600"}},"左右の padding をまたいで帯を広げます")))}})}const A=`/** @jsx m */\r
import m from "mithril";\r
import { Bleed } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div\r
					style={{\r
						padding: "20px",\r
						background: "#f8fafc",\r
						borderRadius: "16px",\r
						border: "1px solid #e2e8f0",\r
					}}\r
				>\r
					<div style={{ marginBottom: "10px", fontWeight: "600" }}>Container padding: 20px</div>\r
					<Bleed inline="20px">\r
						<div\r
							style={{\r
								padding: "14px 20px",\r
								background: "linear-gradient(90deg, #bfdbfe, #dbeafe)",\r
								color: "#1e3a8a",\r
								fontWeight: "600",\r
							}}\r
						>\r
							左右の padding をまたいで帯を広げます\r
						</div>\r
					</Bleed>\r
				</div>\r
			);\r
		},\r
	});\r
}`,R=JSON.parse('{"title":"Bleed","description":"","frontmatter":{},"headers":[],"relativePath":"Bleed.md","filePath":"Bleed.md"}'),I={name:"Bleed.md"},V=Object.assign(I,{setup(e){return(a,d)=>{const o=B("MithrilDemo");return y(),P("div",null,[d[0]||(d[0]=m('<h1 id="bleed" tabindex="-1">Bleed <a class="header-anchor" href="#bleed" aria-label="Permalink to &quot;Bleed&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>Bleed</code> は親コンテナの padding をまたいで要素を外側へ広げるためのユーティリティです。カード内のフルブリード画像やセクションの色帯を作るときに便利です。</p><h2 id="usage-使用例" tabindex="-1">Usage 使用例 <a class="header-anchor" href="#usage-使用例" aria-label="Permalink to &quot;Usage 使用例&quot;">​</a></h2><h3 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h3>',5)),S(o,{setup:b(E),code:b(A)},null,8,["setup","code"]),d[1]||(d[1]=m('<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="bleed-props" tabindex="-1">Bleed Props <a class="header-anchor" href="#bleed-props" aria-label="Permalink to &quot;Bleed Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>inline</code></td><td><code>string | number</code></td><td>—</td><td>左右方向の負マージンをまとめて指定します</td></tr><tr><td><code>block</code></td><td><code>string | number</code></td><td>—</td><td>上下方向の負マージンをまとめて指定します</td></tr><tr><td><code>inlineStart</code></td><td><code>string | number</code></td><td>—</td><td>左側だけ広げます</td></tr><tr><td><code>inlineEnd</code></td><td><code>string | number</code></td><td>—</td><td>右側だけ広げます</td></tr><tr><td><code>blockStart</code></td><td><code>string | number</code></td><td>—</td><td>上側だけ広げます</td></tr><tr><td><code>blockEnd</code></td><td><code>string | number</code></td><td>—</td><td>下側だけ広げます</td></tr><tr><td><code>as</code></td><td><code>string</code></td><td><code>&quot;div&quot;</code></td><td>描画要素を切り替えます</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>追加クラスです</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt; | string</code></td><td>—</td><td>インラインスタイルです</td></tr></tbody></table>',3))])}}});export{R as __pageData,V as default};
