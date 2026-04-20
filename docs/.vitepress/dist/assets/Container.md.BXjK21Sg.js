import{m as e}from"./chunks/theme.IYrj4rtN.js";import{c as C}from"./chunks/Table.BA6US4RP.js";import{C as b,o as x,c as y,ai as s,E as v,k as l}from"./chunks/framework.Bm_aoSIc.js";const P="_container_1ifog_1",k="_fluid_1ifog_9",q="_centerContent_1ifog_13",i={container:P,fluid:k,centerContent:q};class T{view(r){const{maxWidth:t,centerContent:d,fluid:c,as:f="div",class:p,style:n,...u}=r.attrs,a={};t&&!c&&(a.maxWidth=t);const h=typeof n=="string"?`${Object.entries(a).map(([m,_])=>`${m.replace(/[A-Z]/g,g=>`-${g.toLowerCase()}`)}:${_}`).join(";")}${n?`;${n}`:""}`:{...a,...n||{}};return e(f,{...u,class:C(i.container,c&&i.fluid,d&&i.centerContent,p),style:h},r.children)}}function S(o){e.mount(o,{view(){return e("div",{style:{background:"#f8fafc",padding:"16px",borderRadius:"16px"}},e(T,{maxWidth:"520px",style:{background:"#ffffff",borderRadius:"14px",padding:"16px"}},e("div",{style:{fontWeight:"700",marginBottom:"8px"}},"Constrained content"),e("div",{style:{color:"#475569"}},"Container は本文やフォームなどの最大幅を一定に保ち、広い画面でも読みやすさを維持します。")))}})}const A=`/** @jsx m */\r
import m from "mithril";\r
import { Container } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div style={{ background: "#f8fafc", padding: "16px", borderRadius: "16px" }}>\r
					<Container maxWidth="520px" style={{ background: "#ffffff", borderRadius: "14px", padding: "16px" }}>\r
						<div style={{ fontWeight: "700", marginBottom: "8px" }}>Constrained content</div>\r
						<div style={{ color: "#475569" }}>\r
							Container は本文やフォームなどの最大幅を一定に保ち、広い画面でも読みやすさを維持します。\r
						</div>\r
					</Container>\r
				</div>\r
			);\r
		},\r
	});\r
}`,I=JSON.parse('{"title":"Container","description":"","frontmatter":{},"headers":[],"relativePath":"Container.md","filePath":"Container.md"}'),R={name:"Container.md"},V=Object.assign(R,{setup(o){return(r,t)=>{const d=b("MithrilDemo");return x(),y("div",null,[t[0]||(t[0]=s('<h1 id="container" tabindex="-1">Container <a class="header-anchor" href="#container" aria-label="Permalink to &quot;Container&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>Container</code> は本文やフォームの最大幅を制御するためのコンポーネントです。横に広い画面でも読みやすさを維持しつつ、必要に応じて <code>fluid</code> で全幅レイアウトにも切り替えられます。</p><h2 id="usage-使用例" tabindex="-1">Usage 使用例 <a class="header-anchor" href="#usage-使用例" aria-label="Permalink to &quot;Usage 使用例&quot;">​</a></h2><h3 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h3>',5)),v(d,{setup:l(S),code:l(A)},null,8,["setup","code"]),t[1]||(t[1]=s('<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="container-props" tabindex="-1">Container Props <a class="header-anchor" href="#container-props" aria-label="Permalink to &quot;Container Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>maxWidth</code></td><td><code>string</code></td><td>—</td><td>非 fluid 時の最大幅です</td></tr><tr><td><code>centerContent</code></td><td><code>boolean</code></td><td><code>false</code></td><td>子要素を中央寄せにします</td></tr><tr><td><code>fluid</code></td><td><code>boolean</code></td><td><code>false</code></td><td>最大幅を解除して全幅に広げます</td></tr><tr><td><code>as</code></td><td><code>string</code></td><td><code>&quot;div&quot;</code></td><td>描画要素を切り替えます</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>追加クラスです</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt; | string</code></td><td>—</td><td>インラインスタイルです</td></tr></tbody></table>',3))])}}});export{I as __pageData,V as default};
