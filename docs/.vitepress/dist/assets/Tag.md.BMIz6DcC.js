import{m as t}from"./chunks/theme.MeAZuU5r.js";import{t as e}from"./chunks/Table.BlGpiJ_h.js";import{C as n,o as c,c as i,ai as d,E as s,k as r}from"./chunks/framework.DYURIDHw.js";function u(a){t.mount(a,{view(){return t("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"}},t(e.Root,{variant:"solid",colorPalette:"blue"},t(e.StartElement,null,"🏷️"),t(e.Label,null,"Recipe A")),t(e.Root,{variant:"subtle",colorPalette:"green",closable:!0},t(e.Label,null,"Completed")))}})}const h=`/** @jsx m */\r
import m from "mithril";\r
import { Tag } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>\r
					<Tag.Root variant="solid" colorPalette="blue">\r
						<Tag.StartElement>🏷️</Tag.StartElement>\r
						<Tag.Label>Recipe A</Tag.Label>\r
					</Tag.Root>\r
					<Tag.Root variant="subtle" colorPalette="green" closable={true}>\r
						<Tag.Label>Completed</Tag.Label>\r
					</Tag.Root>\r
				</div>\r
			);\r
		},\r
	});\r
}`,q=JSON.parse('{"title":"Tag","description":"","frontmatter":{},"headers":[],"relativePath":"Tag.md","filePath":"Tag.md"}'),p={name:"Tag.md"},_=Object.assign(p,{setup(a){return(m,o)=>{const l=n("MithrilDemo");return c(),i("div",null,[o[0]||(o[0]=d('<h1 id="tag" tabindex="-1">Tag <a class="header-anchor" href="#tag" aria-label="Permalink to &quot;Tag&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>Tag</code> はカテゴリ名や状態ラベルをコンパクトに表示する compound component です。開始アイコン、終了アイコン、閉じるトリガーを組み合わせることで、単なるラベル以上の情報を持たせられます。</p><h2 id="usage-使用例" tabindex="-1">Usage 使用例 <a class="header-anchor" href="#usage-使用例" aria-label="Permalink to &quot;Usage 使用例&quot;">​</a></h2><h3 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h3>',5)),s(l,{setup:r(u),code:r(h)},null,8,["setup","code"]),o[1]||(o[1]=d('<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="tag-root-props" tabindex="-1">Tag.Root Props <a class="header-anchor" href="#tag-root-props" aria-label="Permalink to &quot;Tag.Root Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>variant</code></td><td><code>&quot;subtle&quot; | &quot;solid&quot; | &quot;outline&quot; | &quot;surface&quot;</code></td><td><code>&quot;subtle&quot;</code></td><td>見た目のバリエーションです</td></tr><tr><td><code>size</code></td><td><code>&quot;sm&quot; | &quot;md&quot; | &quot;lg&quot; | &quot;xl&quot;</code></td><td><code>&quot;md&quot;</code></td><td>タグのサイズです</td></tr><tr><td><code>colorPalette</code></td><td><code>string</code></td><td><code>&quot;gray&quot;</code></td><td>カラー CSS 変数へ反映する色です</td></tr><tr><td><code>closable</code></td><td><code>boolean</code></td><td><code>false</code></td><td>既定の閉じるトリガーを自動表示します</td></tr><tr><td><code>onClose</code></td><td><code>() =&gt; void</code></td><td>—</td><td>閉じる操作時に呼ばれます</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>追加クラスです</td></tr></tbody></table><h3 id="subcomponents" tabindex="-1">Subcomponents <a class="header-anchor" href="#subcomponents" aria-label="Permalink to &quot;Subcomponents&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Component</th><th>Description</th></tr></thead><tbody><tr><td><code>Tag.Label</code></td><td>ラベル本文です</td></tr><tr><td><code>Tag.StartElement</code></td><td>先頭アイコンや絵文字です</td></tr><tr><td><code>Tag.EndElement</code></td><td>末尾要素です</td></tr><tr><td><code>Tag.CloseTrigger</code></td><td>明示的な閉じるボタンです</td></tr></tbody></table>',5))])}}});export{q as __pageData,_ as default};
