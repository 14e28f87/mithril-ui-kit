import{m as t}from"./chunks/theme.BHMR1ScI.js";import{c as h}from"./chunks/Table.DpkFVNUa.js";import{C as u,o as b,c as p,a4 as d,E as f,k as i}from"./chunks/framework.DuWTyC0X.js";const _="_absoluteCenter_8hng0_1",m="_horizontal_8hng0_9",g="_vertical_8hng0_14",x="_both_8hng0_19",r={absoluteCenter:_,horizontal:m,vertical:g,both:x};class v{view(a){const{axis:e="both",as:n="div",class:s,...l}=a.attrs,c=e==="horizontal"?r.horizontal:e==="vertical"?r.vertical:r.both;return t(n,{...l,class:h(r.absoluteCenter,c,s)},a.children)}}function C(o){t.mount(o,{view(){return t("div",{style:{position:"relative",height:"160px",borderRadius:"14px",background:"linear-gradient(135deg, #dbeafe, #eff6ff)",border:"1px solid #bfdbfe"}},t("div",{style:{padding:"16px",color:"#1e3a8a",fontWeight:"600"}},"Relative parent"),t(v,null,t("div",{style:{padding:"10px 14px",borderRadius:"999px",background:"#ffffff",boxShadow:"0 8px 24px rgba(15, 23, 42, 0.12)",fontWeight:"600"}},"Centered overlay")))}})}const q=`/** @jsx m */\r
import m from "mithril";\r
import { AbsoluteCenter } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div\r
					style={{\r
						position: "relative",\r
						height: "160px",\r
						borderRadius: "14px",\r
						background: "linear-gradient(135deg, #dbeafe, #eff6ff)",\r
						border: "1px solid #bfdbfe",\r
					}}\r
				>\r
					<div style={{ padding: "16px", color: "#1e3a8a", fontWeight: "600" }}>Relative parent</div>\r
					<AbsoluteCenter>\r
						<div\r
							style={{\r
								padding: "10px 14px",\r
								borderRadius: "999px",\r
								background: "#ffffff",\r
								boxShadow: "0 8px 24px rgba(15, 23, 42, 0.12)",\r
								fontWeight: "600",\r
							}}\r
						>\r
							Centered overlay\r
						</div>\r
					</AbsoluteCenter>\r
				</div>\r
			);\r
		},\r
	});\r
}`,y=JSON.parse('{"title":"AbsoluteCenter","description":"","frontmatter":{},"headers":[],"relativePath":"AbsoluteCenter.md","filePath":"AbsoluteCenter.md","lastUpdated":1776646114000}'),A={name:"AbsoluteCenter.md"},R=Object.assign(A,{setup(o){return(a,e)=>{const n=u("MithrilDemo");return b(),p("div",null,[e[0]||(e[0]=d('<h1 id="absolutecenter" tabindex="-1">AbsoluteCenter <a class="header-anchor" href="#absolutecenter" aria-label="Permalink to &quot;AbsoluteCenter&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>AbsoluteCenter</code> は親要素に対して絶対配置で中央寄せするユーティリティです。モーダル内のローディング表示やカード上のオーバーレイラベルなど、通常フローから独立した中央配置に向いています。</p><h2 id="usage-使用例" tabindex="-1">Usage 使用例 <a class="header-anchor" href="#usage-使用例" aria-label="Permalink to &quot;Usage 使用例&quot;">​</a></h2><h3 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h3>',5)),f(n,{setup:i(C),code:i(q)},null,8,["setup","code"]),e[1]||(e[1]=d('<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="absolutecenter-props" tabindex="-1">AbsoluteCenter Props <a class="header-anchor" href="#absolutecenter-props" aria-label="Permalink to &quot;AbsoluteCenter Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>axis</code></td><td><code>&quot;horizontal&quot; | &quot;vertical&quot; | &quot;both&quot;</code></td><td><code>&quot;both&quot;</code></td><td>中央寄せする軸を指定します</td></tr><tr><td><code>as</code></td><td><code>string</code></td><td><code>&quot;div&quot;</code></td><td>描画要素を切り替えます</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>追加クラスです</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt; | string</code></td><td>—</td><td>インラインスタイルです</td></tr></tbody></table><h2 id="補足" tabindex="-1">補足 <a class="header-anchor" href="#補足" aria-label="Permalink to &quot;補足&quot;">​</a></h2><p>親要素側に <code>position: relative</code> などの位置基準が必要です。</p>',5))])}}});export{y as __pageData,R as default};
