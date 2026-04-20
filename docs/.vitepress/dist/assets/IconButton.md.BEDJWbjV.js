import{m as t}from"./chunks/theme.MeAZuU5r.js";import{c as _}from"./chunks/Table.BlGpiJ_h.js";import{s as e}from"./chunks/Button.module.DCnvx4sK.js";import{C as q,o as I,c as P,ai as b,E as B,k as h}from"./chunks/framework.DYURIDHw.js";function r(o){return o.charAt(0).toUpperCase()+o.slice(1)}class c{view(n){const{variant:a="solid",size:i="md",colorPalette:l,disabled:p,loading:d,rounded:s,class:m,...u}=n.attrs,f=p||d;return t("button",{...u,type:u.type||"button",disabled:f,"data-loading":d||void 0,class:_(e.button,e.iconButton,e[`variant${r(a)}`],e[`iconSize${r(i)}`],l&&e[`color${r(l)}`],s&&e[`rounded${r(s)}`],d&&e.loading,m)},d?t("span",{class:e.spinnerIcon}):n.children)}}function g(o){t.mount(o,{view(){return t("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"}},t(c,{"aria-label":"Search",variant:"outline"},t("i",{class:"bi bi-search"})),t(c,{"aria-label":"Settings",colorPalette:"blue"},t("i",{class:"bi bi-gear"})),t(c,{"aria-label":"Delete",variant:"subtle",colorPalette:"red"},t("i",{class:"bi bi-trash"})))}})}const x=`/** @jsx m */\r
import m from "mithril";\r
import { IconButton } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>\r
					<IconButton aria-label="Search" variant="outline">\r
						<i class="bi bi-search" />\r
					</IconButton>\r
					<IconButton aria-label="Settings" colorPalette="blue">\r
						<i class="bi bi-gear" />\r
					</IconButton>\r
					<IconButton aria-label="Delete" variant="subtle" colorPalette="red">\r
						<i class="bi bi-trash" />\r
					</IconButton>\r
				</div>\r
			);\r
		},\r
	});\r
}`,C=JSON.parse('{"title":"IconButton","description":"","frontmatter":{},"headers":[],"relativePath":"IconButton.md","filePath":"IconButton.md"}'),v={name:"IconButton.md"},D=Object.assign(v,{setup(o){return(n,a)=>{const i=q("MithrilDemo");return I(),P("div",null,[a[0]||(a[0]=b('<h1 id="iconbutton" tabindex="-1">IconButton <a class="header-anchor" href="#iconbutton" aria-label="Permalink to &quot;IconButton&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>IconButton</code> はアイコンのみを表示する正方形ボタンです。ツールバーやカード右上の小さな操作トリガーなど、短いラベルを持たない UI に向いています。</p><h2 id="usage-使用例" tabindex="-1">Usage 使用例 <a class="header-anchor" href="#usage-使用例" aria-label="Permalink to &quot;Usage 使用例&quot;">​</a></h2><h3 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h3>',5)),B(i,{setup:h(g),code:h(x)},null,8,["setup","code"]),a[1]||(a[1]=b('<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="iconbutton-props" tabindex="-1">IconButton Props <a class="header-anchor" href="#iconbutton-props" aria-label="Permalink to &quot;IconButton Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>variant</code></td><td><code>ButtonVariant</code></td><td><code>&quot;solid&quot;</code></td><td>ボタンの見た目です</td></tr><tr><td><code>size</code></td><td><code>ButtonSize</code></td><td><code>&quot;md&quot;</code></td><td>ボタンサイズです</td></tr><tr><td><code>colorPalette</code></td><td><code>string</code></td><td>—</td><td>カラー CSS 変数へ反映する色です</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>無効化します</td></tr><tr><td><code>loading</code></td><td><code>boolean</code></td><td><code>false</code></td><td>ローディング状態にします</td></tr><tr><td><code>rounded</code></td><td><code>&quot;sm&quot; | &quot;md&quot; | &quot;lg&quot; | &quot;xl&quot; | &quot;2xl&quot; | &quot;full&quot;</code></td><td>—</td><td>角丸を上書きします</td></tr><tr><td><code>aria-label</code></td><td><code>string</code></td><td>—</td><td>アクセシビリティ用の必須ラベルです</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>追加クラスです</td></tr><tr><td><code>onclick</code></td><td><code>(e: Event) =&gt; void</code></td><td>—</td><td>クリック時に呼ばれます</td></tr></tbody></table><h2 id="補足" tabindex="-1">補足 <a class="header-anchor" href="#補足" aria-label="Permalink to &quot;補足&quot;">​</a></h2><p>可視ラベルが無いので、<code>aria-label</code> の指定を推奨します。</p>',5))])}}});export{C as __pageData,D as default};
