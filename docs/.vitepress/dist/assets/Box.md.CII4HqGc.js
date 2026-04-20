import{m as e}from"./chunks/theme.BkMwotUo.js";import{c as i}from"./chunks/Table.CoGcR3xC.js";import{C as c,o as l,c as h,a4 as a,E as p,k as n}from"./chunks/framework.DuWTyC0X.js";const f="_box_dlrng_1",m={box:f};class u{view(r){const{as:t="div",class:d,...s}=r.attrs;return e(t,{...s,class:i(m.box,d)},r.children)}}function x(o){e.mount(o,{view(){return e(u,{as:"section",style:{padding:"16px",border:"1px solid #d0d7de",borderRadius:"12px",background:"linear-gradient(135deg, #fff7ed, #ffffff)"}},e("div",{style:{fontWeight:"600",marginBottom:"8px"}},"Box"),e("div",null,"as、class、style を受け取り、任意の HTML 要素を薄くラップできます。"))}})}const _=`/** @jsx m */\r
import m from "mithril";\r
import { Box } from "mithriluikit";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<Box\r
					as="section"\r
					style={{\r
						padding: "16px",\r
						border: "1px solid #d0d7de",\r
						borderRadius: "12px",\r
						background: "linear-gradient(135deg, #fff7ed, #ffffff)",\r
					}}\r
				>\r
					<div style={{ fontWeight: "600", marginBottom: "8px" }}>Box</div>\r
					<div>as、class、style を受け取り、任意の HTML 要素を薄くラップできます。</div>\r
				</Box>\r
			);\r
		},\r
	});\r
}`,P=JSON.parse('{"title":"Box","description":"","frontmatter":{},"headers":[],"relativePath":"Box.md","filePath":"Box.md","lastUpdated":null}'),b={name:"Box.md"},v=Object.assign(b,{setup(o){return(r,t)=>{const d=c("MithrilDemo");return l(),h("div",null,[t[0]||(t[0]=a('<h1 id="box" tabindex="-1">Box <a class="header-anchor" href="#box" aria-label="Permalink to &quot;Box&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>Box</code> は最小のレイアウトラッパーです。既定では <code>div</code> を描画し、<code>as</code> prop で任意の HTML 要素に切り替えられます。余白、背景、境界線などを持つコンテナを組み立てる基点として使います。</p><h2 id="usage-使用例" tabindex="-1">Usage 使用例 <a class="header-anchor" href="#usage-使用例" aria-label="Permalink to &quot;Usage 使用例&quot;">​</a></h2><h3 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h3>',5)),p(d,{setup:n(x),code:n(_)},null,8,["setup","code"]),t[1]||(t[1]=a('<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="box-props" tabindex="-1">Box Props <a class="header-anchor" href="#box-props" aria-label="Permalink to &quot;Box Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>as</code></td><td><code>string</code></td><td><code>&quot;div&quot;</code></td><td>描画する HTML 要素を切り替えます</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>追加の CSS クラスです</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt; | string</code></td><td>—</td><td>インラインスタイルです</td></tr><tr><td><code>...rest</code></td><td><code>Record&lt;string, any&gt;</code></td><td>—</td><td>そのほかの HTML 属性をそのまま渡します</td></tr></tbody></table>',3))])}}});export{P as __pageData,v as default};
