import{m as o}from"./chunks/theme.BXbJ2X8L.js";import{c as q}from"./chunks/Table.Dq6qlMER.js";import{C as b,o as f,c as z,ai as h,E as T,k as x}from"./chunks/framework.Bm_aoSIc.js";const g="_textarea_1x1wx_2",A="_variantOutline_1x1wx_21",P="_variantSubtle_1x1wx_27",S="_variantFlushed_1x1wx_34",w="_sizeXs_1x1wx_46",y="_sizeSm_1x1wx_51",k="_sizeMd_1x1wx_56",C="_sizeLg_1x1wx_60",D="_sizeXl_1x1wx_65",E="_disabled_1x1wx_71",M="_invalid_1x1wx_76",a={textarea:g,variantOutline:A,variantSubtle:P,variantFlushed:S,sizeXs:w,sizeSm:y,sizeMd:k,sizeLg:C,sizeXl:D,disabled:E,invalid:M};function p(t){return t.charAt(0).toUpperCase()+t.slice(1)}class N{view(r){const{variant:e="outline",size:i="md",autoresize:l,resize:m="vertical",disabled:c,invalid:u,class:v,...d}=r.attrs;return o("textarea",{...d,disabled:c,"aria-invalid":u||void 0,class:q(a.textarea,a[`variant${p(e)}`],a[`size${p(i)}`],{[a.disabled]:c},{[a.invalid]:u},v),style:{resize:l?"none":m},oninput:l?_=>{const n=_.target;n.style.height="auto",n.style.height=n.scrollHeight+"px",d.oninput&&d.oninput(_)}:d.oninput})}}let s=`初期値
2 行目`;function I(t){o.mount(t,{view(){return o("div",{style:{display:"grid",gap:"12px"}},o(N,{value:s,autoresize:!0,placeholder:"コメントを入力してください",oninput:r=>{s=r.target.value}}),o("div",{style:{color:"#475569",fontSize:"0.9rem"}},"現在の文字数: ",s.length))}})}const V=`/** @jsx m */\r
import m from "mithril";\r
import { TextArea } from "mithril-ui-kit";\r
\r
let value = "初期値\\n2 行目";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div style={{ display: "grid", gap: "12px" }}>\r
					<TextArea\r
						value={value}\r
						autoresize={true}\r
						placeholder="コメントを入力してください"\r
						oninput={(event: Event) => {\r
							value = (event.target as HTMLTextAreaElement).value;\r
						}}\r
					/>\r
					<div style={{ color: "#475569", fontSize: "0.9rem" }}>現在の文字数: {value.length}</div>\r
				</div>\r
			);\r
		},\r
	});\r
}`,F=JSON.parse('{"title":"TextArea","description":"","frontmatter":{},"headers":[],"relativePath":"TextArea.md","filePath":"TextArea.md"}'),X={name:"TextArea.md"},H=Object.assign(X,{setup(t){return(r,e)=>{const i=b("MithrilDemo");return f(),z("div",null,[e[0]||(e[0]=h('<h1 id="textarea" tabindex="-1">TextArea <a class="header-anchor" href="#textarea" aria-label="Permalink to &quot;TextArea&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>TextArea</code> は複数行テキストを入力するためのコンポーネントです。<code>autoresize</code> を有効にすると、入力内容に応じて高さを自動で伸縮させられます。</p><h2 id="usage-使用例" tabindex="-1">Usage 使用例 <a class="header-anchor" href="#usage-使用例" aria-label="Permalink to &quot;Usage 使用例&quot;">​</a></h2><h3 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h3>',5)),T(i,{setup:x(I),code:x(V)},null,8,["setup","code"]),e[1]||(e[1]=h('<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="textarea-props" tabindex="-1">TextArea Props <a class="header-anchor" href="#textarea-props" aria-label="Permalink to &quot;TextArea Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>variant</code></td><td><code>&quot;outline&quot; | &quot;subtle&quot; | &quot;flushed&quot;</code></td><td><code>&quot;outline&quot;</code></td><td>見た目のバリエーションです</td></tr><tr><td><code>size</code></td><td><code>&quot;xs&quot; | &quot;sm&quot; | &quot;md&quot; | &quot;lg&quot; | &quot;xl&quot;</code></td><td><code>&quot;md&quot;</code></td><td>入力欄サイズです</td></tr><tr><td><code>autoresize</code></td><td><code>boolean</code></td><td><code>false</code></td><td>入力内容に応じて高さを自動調整します</td></tr><tr><td><code>resize</code></td><td><code>&quot;none&quot; | &quot;vertical&quot; | &quot;horizontal&quot; | &quot;both&quot;</code></td><td><code>&quot;vertical&quot;</code></td><td>手動リサイズ方向です</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>無効化します</td></tr><tr><td><code>invalid</code></td><td><code>boolean</code></td><td><code>false</code></td><td>エラー状態の見た目にします</td></tr><tr><td><code>placeholder</code></td><td><code>string</code></td><td>—</td><td>プレースホルダーです</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>追加クラスです</td></tr></tbody></table>',3))])}}});export{F as __pageData,H as default};
