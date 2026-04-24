import{m as t}from"./chunks/theme.LBbUWaEz.js";import{E as e}from"./chunks/Table.DnqMepI2.js";import{C as i,o as m,c as p,a4 as r,E as s,k as n}from"./chunks/framework.DuWTyC0X.js";function l(o){t.mount(o,{view(){return t(e.Root,null,t(e.Content,null,t(e.Indicator,null,"📭"),t(e.Title,null,"データがありません"),t(e.Description,null,"検索条件に一致する項目がないため、フィルターを見直してください。")))}})}const c=`/** @jsx m */\r
import m from "mithril";\r
import { EmptyState } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<EmptyState.Root>\r
					<EmptyState.Content>\r
						<EmptyState.Indicator>📭</EmptyState.Indicator>\r
						<EmptyState.Title>データがありません</EmptyState.Title>\r
						<EmptyState.Description>\r
							検索条件に一致する項目がないため、フィルターを見直してください。\r
						</EmptyState.Description>\r
					</EmptyState.Content>\r
				</EmptyState.Root>\r
			);\r
		},\r
	});\r
}`,E=JSON.parse('{"title":"EmptyState","description":"","frontmatter":{},"headers":[],"relativePath":"EmptyState.md","filePath":"EmptyState.md","lastUpdated":1776836643000}'),h={name:"EmptyState.md"},b=Object.assign(h,{setup(o){return(u,a)=>{const d=i("MithrilDemo");return m(),p("div",null,[a[0]||(a[0]=r('<h1 id="emptystate" tabindex="-1">EmptyState <a class="header-anchor" href="#emptystate" aria-label="Permalink to &quot;EmptyState&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>EmptyState</code> はデータが存在しない状態を説明付きで表示するためのコンポーネントです。アイコン、タイトル、説明文を縦に積み、一覧や検索結果の空状態を明確に伝えます。</p><h2 id="usage-使用例" tabindex="-1">Usage 使用例 <a class="header-anchor" href="#usage-使用例" aria-label="Permalink to &quot;Usage 使用例&quot;">​</a></h2><h3 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h3>',5)),s(d,{setup:n(l),code:n(c)},null,8,["setup","code"]),a[1]||(a[1]=r('<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="emptystate-root-props" tabindex="-1">EmptyState.Root Props <a class="header-anchor" href="#emptystate-root-props" aria-label="Permalink to &quot;EmptyState.Root Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>size</code></td><td><code>&quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;</code></td><td><code>&quot;md&quot;</code></td><td>表示サイズです</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>追加クラスです</td></tr></tbody></table><h3 id="subcomponents" tabindex="-1">Subcomponents <a class="header-anchor" href="#subcomponents" aria-label="Permalink to &quot;Subcomponents&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Component</th><th>Description</th></tr></thead><tbody><tr><td><code>EmptyState.Content</code></td><td>中央揃えされた内容ラッパーです</td></tr><tr><td><code>EmptyState.Indicator</code></td><td>アイコンやイラストの領域です</td></tr><tr><td><code>EmptyState.Title</code></td><td>見出しです</td></tr><tr><td><code>EmptyState.Description</code></td><td>補足文です</td></tr></tbody></table>',5))])}}});export{E as __pageData,b as default};
