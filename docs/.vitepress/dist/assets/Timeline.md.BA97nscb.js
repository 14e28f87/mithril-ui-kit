import{m as e}from"./chunks/theme.CIfTaYq1.js";import{v as t}from"./chunks/Table.B255pMpr.js";import{C as a,o as d,c as m,ai as o,E as c,k as r}from"./chunks/framework.Bm_aoSIc.js";function s(i){e.mount(i,{view(){return e(t.Root,{variant:"subtle"},e(t.Item,null,e(t.Separator,null,e(t.Indicator,null,"1"),e(t.Connector,null)),e(t.Content,null,e(t.Title,null,"Recipe loaded"),e(t.Description,null,"Batch parameters were synchronized."))),e(t.Item,null,e(t.Separator,null,e(t.Indicator,null,"2"),e(t.Connector,null)),e(t.Content,null,e(t.Title,null,"Ramp started"),e(t.Description,null,"Heating reached the scheduled gradient."))),e(t.Item,null,e(t.Separator,null,e(t.Indicator,null,"3")),e(t.Content,null,e(t.Title,null,"Hold phase"),e(t.Description,null,"Temperature is now stable at target."))))}})}const u=`/** @jsx m */\r
import m from "mithril";\r
import { Timeline } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<Timeline.Root variant="subtle">\r
					<Timeline.Item>\r
						<Timeline.Separator>\r
							<Timeline.Indicator>1</Timeline.Indicator>\r
							<Timeline.Connector />\r
						</Timeline.Separator>\r
						<Timeline.Content>\r
							<Timeline.Title>Recipe loaded</Timeline.Title>\r
							<Timeline.Description>Batch parameters were synchronized.</Timeline.Description>\r
						</Timeline.Content>\r
					</Timeline.Item>\r
					<Timeline.Item>\r
						<Timeline.Separator>\r
							<Timeline.Indicator>2</Timeline.Indicator>\r
							<Timeline.Connector />\r
						</Timeline.Separator>\r
						<Timeline.Content>\r
							<Timeline.Title>Ramp started</Timeline.Title>\r
							<Timeline.Description>Heating reached the scheduled gradient.</Timeline.Description>\r
						</Timeline.Content>\r
					</Timeline.Item>\r
					<Timeline.Item>\r
						<Timeline.Separator>\r
							<Timeline.Indicator>3</Timeline.Indicator>\r
						</Timeline.Separator>\r
						<Timeline.Content>\r
							<Timeline.Title>Hold phase</Timeline.Title>\r
							<Timeline.Description>Temperature is now stable at target.</Timeline.Description>\r
						</Timeline.Content>\r
					</Timeline.Item>\r
				</Timeline.Root>\r
			);\r
		},\r
	});\r
}`,_=JSON.parse('{"title":"Timeline","description":"","frontmatter":{},"headers":[],"relativePath":"Timeline.md","filePath":"Timeline.md"}'),T={name:"Timeline.md"},I=Object.assign(T,{setup(i){return(p,n)=>{const l=a("MithrilDemo");return d(),m("div",null,[n[0]||(n[0]=o('<h1 id="timeline" tabindex="-1">Timeline <a class="header-anchor" href="#timeline" aria-label="Permalink to &quot;Timeline&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>Timeline</code> はイベントやステップの流れを縦方向に可視化する compound component です。ジョブ履歴、処理段階、監査ログの可読性を高める用途に向いています。</p><h2 id="usage-使用例" tabindex="-1">Usage 使用例 <a class="header-anchor" href="#usage-使用例" aria-label="Permalink to &quot;Usage 使用例&quot;">​</a></h2><h3 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h3>',5)),c(l,{setup:r(s),code:r(u)},null,8,["setup","code"]),n[1]||(n[1]=o('<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="timeline-root-props" tabindex="-1">Timeline.Root Props <a class="header-anchor" href="#timeline-root-props" aria-label="Permalink to &quot;Timeline.Root Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>variant</code></td><td><code>&quot;subtle&quot; | &quot;solid&quot; | &quot;outline&quot; | &quot;plain&quot;</code></td><td><code>&quot;solid&quot;</code></td><td>見た目のバリエーションです</td></tr><tr><td><code>size</code></td><td><code>&quot;sm&quot; | &quot;md&quot; | &quot;lg&quot; | &quot;xl&quot;</code></td><td><code>&quot;md&quot;</code></td><td>タイムラインのサイズです</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>追加クラスです</td></tr></tbody></table><h3 id="subcomponents" tabindex="-1">Subcomponents <a class="header-anchor" href="#subcomponents" aria-label="Permalink to &quot;Subcomponents&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Component</th><th>Description</th></tr></thead><tbody><tr><td><code>Timeline.Item</code></td><td>1 件分のイベントです</td></tr><tr><td><code>Timeline.Separator</code></td><td>左側のインジケーター列です</td></tr><tr><td><code>Timeline.Indicator</code></td><td>各イベントの印です</td></tr><tr><td><code>Timeline.Connector</code></td><td>イベント同士を結ぶ線です</td></tr><tr><td><code>Timeline.Content</code></td><td>テキスト内容です</td></tr><tr><td><code>Timeline.Title</code></td><td>見出しです</td></tr><tr><td><code>Timeline.Description</code></td><td>補足文です</td></tr></tbody></table>',5))])}}});export{_ as __pageData,I as default};
