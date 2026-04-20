import{m as t}from"./chunks/theme.MeAZuU5r.js";import{a as e}from"./chunks/Table.BlGpiJ_h.js";import{C as l,o as i,c,ai as d,E as s,k as a}from"./chunks/framework.DYURIDHw.js";function u(r){t.mount(r,{view(){return t(e.Root,{status:"success",variant:"subtle"},t(e.Indicator,null),t(e.Content,null,t(e.Title,null,"保存が完了しました"),t(e.Description,null,"新しいレシピが kiln-server に反映されています。")))}})}const h=`/** @jsx m */\r
import m from "mithril";\r
import { Alert } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<Alert.Root status="success" variant="subtle">\r
					<Alert.Indicator />\r
					<Alert.Content>\r
						<Alert.Title>保存が完了しました</Alert.Title>\r
						<Alert.Description>新しいレシピが kiln-server に反映されています。</Alert.Description>\r
					</Alert.Content>\r
				</Alert.Root>\r
			);\r
		},\r
	});\r
}`,A=JSON.parse('{"title":"Alert","description":"","frontmatter":{},"headers":[],"relativePath":"Alert.md","filePath":"Alert.md"}'),m={name:"Alert.md"},f=Object.assign(m,{setup(r){return(p,o)=>{const n=l("MithrilDemo");return i(),c("div",null,[o[0]||(o[0]=d('<h1 id="alert" tabindex="-1">Alert <a class="header-anchor" href="#alert" aria-label="Permalink to &quot;Alert&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>Alert</code> は成功・警告・エラーなどのフィードバックをまとまったブロックで表示する compound component です。<code>Alert.Content</code> の中で <code>Title</code> と <code>Description</code> を組み合わせると、情報密度を保った通知を作れます。</p><h2 id="usage-使用例" tabindex="-1">Usage 使用例 <a class="header-anchor" href="#usage-使用例" aria-label="Permalink to &quot;Usage 使用例&quot;">​</a></h2><h3 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h3>',5)),s(n,{setup:a(u),code:a(h)},null,8,["setup","code"]),o[1]||(o[1]=d('<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="alert-root-props" tabindex="-1">Alert.Root Props <a class="header-anchor" href="#alert-root-props" aria-label="Permalink to &quot;Alert.Root Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>status</code></td><td><code>&quot;info&quot; | &quot;warning&quot; | &quot;success&quot; | &quot;error&quot; | &quot;neutral&quot;</code></td><td><code>&quot;info&quot;</code></td><td>通知の意味づけです</td></tr><tr><td><code>variant</code></td><td><code>&quot;subtle&quot; | &quot;surface&quot; | &quot;outline&quot; | &quot;solid&quot;</code></td><td><code>&quot;subtle&quot;</code></td><td>見た目のバリエーションです</td></tr><tr><td><code>size</code></td><td><code>&quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;</code></td><td><code>&quot;md&quot;</code></td><td>コンポーネントサイズです</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>追加クラスです</td></tr></tbody></table><h3 id="subcomponents" tabindex="-1">Subcomponents <a class="header-anchor" href="#subcomponents" aria-label="Permalink to &quot;Subcomponents&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Component</th><th>Description</th></tr></thead><tbody><tr><td><code>Alert.Indicator</code></td><td>ステータスアイコン領域です</td></tr><tr><td><code>Alert.Content</code></td><td>テキスト内容のラッパーです</td></tr><tr><td><code>Alert.Title</code></td><td>見出しです</td></tr><tr><td><code>Alert.Description</code></td><td>補足文です</td></tr></tbody></table>',5))])}}});export{A as __pageData,f as default};
