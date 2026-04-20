import{m as e}from"./chunks/theme.MeAZuU5r.js";import{c as h}from"./chunks/Table.BlGpiJ_h.js";import{C as m,o as u,c as f,ai as n,E as _,k as s}from"./chunks/framework.DYURIDHw.js";const g="_aspectRatio_fjwl5_1",R={aspectRatio:g};class b{view(r){const{ratio:t=4/3,as:o="div",class:d,style:i,...c}=r.attrs,l={aspectRatio:String(t)},p=typeof i=="string"?`aspect-ratio:${t};${i}`:{...l,...i||{}};return e(o,{...c,class:h(R.aspectRatio,d),style:p},r.children)}}function A(a){e.mount(a,{view(){return e(b,{ratio:16/9},e("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",borderRadius:"14px",background:"linear-gradient(135deg, #111827, #334155)",color:"#f8fafc",fontWeight:"700",letterSpacing:"0.04em"}},"16:9 preview area"))}})}const P=`/** @jsx m */\r
import m from "mithril";\r
import { AspectRatio } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<AspectRatio ratio={16 / 9}>\r
					<div\r
						style={{\r
							display: "flex",\r
							alignItems: "center",\r
							justifyContent: "center",\r
							width: "100%",\r
							height: "100%",\r
							borderRadius: "14px",\r
							background: "linear-gradient(135deg, #111827, #334155)",\r
							color: "#f8fafc",\r
							fontWeight: "700",\r
							letterSpacing: "0.04em",\r
						}}\r
					>\r
						16:9 preview area\r
					</div>\r
				</AspectRatio>\r
			);\r
		},\r
	});\r
}`,v=JSON.parse('{"title":"AspectRatio","description":"","frontmatter":{},"headers":[],"relativePath":"AspectRatio.md","filePath":"AspectRatio.md"}'),y={name:"AspectRatio.md"},S=Object.assign(y,{setup(a){return(r,t)=>{const o=m("MithrilDemo");return u(),f("div",null,[t[0]||(t[0]=n('<h1 id="aspectratio" tabindex="-1">AspectRatio <a class="header-anchor" href="#aspectratio" aria-label="Permalink to &quot;AspectRatio&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>AspectRatio</code> は子要素の表示領域に一定の縦横比を維持させるコンポーネントです。サムネイル、動画、チャート領域のプレースホルダーを安定した比率で描画したいときに使います。</p><h2 id="usage-使用例" tabindex="-1">Usage 使用例 <a class="header-anchor" href="#usage-使用例" aria-label="Permalink to &quot;Usage 使用例&quot;">​</a></h2><h3 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h3>',5)),_(o,{setup:s(A),code:s(P)},null,8,["setup","code"]),t[1]||(t[1]=n('<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="aspectratio-props" tabindex="-1">AspectRatio Props <a class="header-anchor" href="#aspectratio-props" aria-label="Permalink to &quot;AspectRatio Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>ratio</code></td><td><code>number</code></td><td><code>4 / 3</code></td><td>維持するアスペクト比です。<code>16 / 9</code> のように数値で渡します</td></tr><tr><td><code>as</code></td><td><code>string</code></td><td><code>&quot;div&quot;</code></td><td>描画要素を切り替えます</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>追加クラスです</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt; | string</code></td><td>—</td><td>インラインスタイルです</td></tr></tbody></table>',3))])}}});export{v as __pageData,S as default};
