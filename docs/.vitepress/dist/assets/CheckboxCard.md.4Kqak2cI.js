import{m as t}from"./chunks/theme.CIfTaYq1.js";import{e}from"./chunks/Table.B255pMpr.js";import{C as i,o as l,c as s,ai as c,E as C,k as n}from"./chunks/framework.Bm_aoSIc.js";let d=!0;function b(r){t.mount(r,{view(){return t("div",{style:{display:"grid",gap:"12px",maxWidth:"420px"}},t(e.Root,{checked:d,onCheckedChange:a=>{d=a}},t(e.Control,null,t(e.Content,null,t(e.Label,null,"通知を有効にする"),t(e.Description,null,"WebSocket の状態変化をトーストで表示します。")),t(e.Indicator,null))),t("div",{style:{color:"#475569",fontSize:"0.9rem"}},"Checked: ",d?"true":"false"))}})}const u=`/** @jsx m */\r
import m from "mithril";\r
import { CheckboxCard } from "mithril-ui-kit";\r
\r
let checked = true;\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div style={{ display: "grid", gap: "12px", maxWidth: "420px" }}>\r
					<CheckboxCard.Root checked={checked} onCheckedChange={(next) => { checked = next; }}>\r
						<CheckboxCard.Control>\r
							<CheckboxCard.Content>\r
								<CheckboxCard.Label>通知を有効にする</CheckboxCard.Label>\r
								<CheckboxCard.Description>WebSocket の状態変化をトーストで表示します。</CheckboxCard.Description>\r
							</CheckboxCard.Content>\r
							<CheckboxCard.Indicator />\r
						</CheckboxCard.Control>\r
					</CheckboxCard.Root>\r
					<div style={{ color: "#475569", fontSize: "0.9rem" }}>Checked: {checked ? "true" : "false"}</div>\r
				</div>\r
			);\r
		},\r
	});\r
}`,_=JSON.parse('{"title":"CheckboxCard","description":"","frontmatter":{},"headers":[],"relativePath":"CheckboxCard.md","filePath":"CheckboxCard.md"}'),k={name:"CheckboxCard.md"},f=Object.assign(k,{setup(r){return(a,o)=>{const h=i("MithrilDemo");return l(),s("div",null,[o[0]||(o[0]=c('<h1 id="checkboxcard" tabindex="-1">CheckboxCard <a class="header-anchor" href="#checkboxcard" aria-label="Permalink to &quot;CheckboxCard&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>CheckboxCard</code> はカード全体をクリック可能な選択 UI にする compound component です。設定項目の有効化や比較的長い説明文を伴う選択肢に向いています。</p><h2 id="usage-使用例" tabindex="-1">Usage 使用例 <a class="header-anchor" href="#usage-使用例" aria-label="Permalink to &quot;Usage 使用例&quot;">​</a></h2><h3 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h3>',5)),C(h,{setup:n(b),code:n(u)},null,8,["setup","code"]),o[1]||(o[1]=c('<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="checkboxcard-root-props" tabindex="-1">CheckboxCard.Root Props <a class="header-anchor" href="#checkboxcard-root-props" aria-label="Permalink to &quot;CheckboxCard.Root Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>variant</code></td><td><code>&quot;surface&quot; | &quot;subtle&quot; | &quot;outline&quot; | &quot;solid&quot;</code></td><td><code>&quot;outline&quot;</code></td><td>カードの見た目です</td></tr><tr><td><code>size</code></td><td><code>&quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;</code></td><td><code>&quot;md&quot;</code></td><td>カードサイズです</td></tr><tr><td><code>checked</code></td><td><code>boolean</code></td><td>—</td><td>制御モード時の値です</td></tr><tr><td><code>defaultChecked</code></td><td><code>boolean</code></td><td><code>false</code></td><td>非制御モード時の初期値です</td></tr><tr><td><code>onCheckedChange</code></td><td><code>(checked: boolean) =&gt; void</code></td><td>—</td><td>値変更時に呼ばれます</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>無効化します</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>追加クラスです</td></tr></tbody></table><h3 id="subcomponents" tabindex="-1">Subcomponents <a class="header-anchor" href="#subcomponents" aria-label="Permalink to &quot;Subcomponents&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Component</th><th>Description</th></tr></thead><tbody><tr><td><code>CheckboxCard.Control</code></td><td>チェック状態を含む主要レイアウトです</td></tr><tr><td><code>CheckboxCard.Content</code></td><td>ラベル群のラッパーです</td></tr><tr><td><code>CheckboxCard.Label</code></td><td>項目名です</td></tr><tr><td><code>CheckboxCard.Description</code></td><td>補足文です</td></tr><tr><td><code>CheckboxCard.Indicator</code></td><td>チェックマーク表示です</td></tr><tr><td><code>CheckboxCard.Addon</code></td><td>追加情報や右端要素です</td></tr></tbody></table>',5))])}}});export{_ as __pageData,f as default};
