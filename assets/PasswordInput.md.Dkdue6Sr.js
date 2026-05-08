import{m as t}from"./chunks/theme.C32Rvu8V.js";import{y as e}from"./chunks/Table.MsshMnDN.js";import{C as c,o as h,c as b,a4 as p,E as s,k as d,j as i,a as u}from"./chunks/framework.DuWTyC0X.js";function m(o){t.mount(o,{view(){return t(e.Root,{width:"300px"},t(e.Input,{placeholder:"パスワードを入力"}),t(e.VisibilityTrigger,null))}})}function g(o){t.mount(o,{view(){return t(e.Root,{width:"300px",defaultVisible:!0},t(e.Label,null,"パスワード"),t(e.Input,{placeholder:"初期表示"}),t(e.VisibilityTrigger,null))}})}function w(o){let a=!1,n="";t.mount(o,{view(){return t("div",null,t(e.Root,{width:"300px",value:n,visible:a,onValueChange:r=>{n=r},onVisibleChange:r=>{a=r}},t(e.Input,{placeholder:"パスワード"}),t(e.VisibilityTrigger,null)),t("div",{style:"margin-top:0.5rem; font-size:0.875rem; color:#6c757d"},"visible: ",String(a),' / 値: "',n,'"'))}})}function f(o){let a=0;function n(r){if(r.length===0)return 0;let l=0;return r.length>=6&&l++,r.length>=10&&l++,/[A-Z]/.test(r)&&/[a-z]/.test(r)&&l++,/[0-9]/.test(r)&&/[^a-zA-Z0-9]/.test(r)&&l++,Math.min(4,l)}t.mount(o,{view(){return t(e.Root,{width:"300px",onValueChange:r=>{a=n(r)}},t(e.Label,null,"パスワード"),t(e.Input,{placeholder:"パスワードを入力"}),t(e.VisibilityTrigger,null),t(e.StrengthMeter,{value:a}))}})}function I(o){t.mount(o,{view(){return t("div",{style:"display:flex; flex-direction:column; gap:1rem"},t(e.Root,{width:"300px",variant:"filled",size:"lg"},t(e.Label,null,"filled / lg"),t(e.Input,{placeholder:"filled / lg"}),t(e.VisibilityTrigger,null)),t(e.Root,{width:"300px",variant:"flushed",size:"sm"},t(e.Label,null,"flushed / sm"),t(e.Input,{placeholder:"flushed / sm"}),t(e.VisibilityTrigger,null)),t(e.Root,{width:"300px",variant:"outline",size:"xs"},t(e.Label,null,"outline / xs"),t(e.Input,{placeholder:"outline / xs"}),t(e.VisibilityTrigger,null)))}})}const P=`/** @jsx m */\r
import m from "mithril";\r
import { PasswordInput } from "mithril-ui-kit";\r
\r
/** 基本: Input + VisibilityTrigger */\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<PasswordInput.Root width="300px">\r
					<PasswordInput.Input placeholder="パスワードを入力" />\r
					<PasswordInput.VisibilityTrigger />\r
				</PasswordInput.Root>\r
			);\r
		},\r
	});\r
}\r
`,v=`/** @jsx m */\r
import m from "mithril";\r
import { PasswordInput } from "mithril-ui-kit";\r
\r
/** Label + defaultVisible */\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<PasswordInput.Root width="300px" defaultVisible={true}>\r
					<PasswordInput.Label>パスワード</PasswordInput.Label>\r
					<PasswordInput.Input placeholder="初期表示" />\r
					<PasswordInput.VisibilityTrigger />\r
				</PasswordInput.Root>\r
			);\r
		},\r
	});\r
}\r
`,x=`/** @jsx m */\r
import m from "mithril";\r
import { PasswordInput } from "mithril-ui-kit";\r
\r
/** 制御モード — visible / onVisibleChange */\r
export function setup(el: HTMLElement): void {\r
	let visible = false;\r
	let value = "";\r
\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div>\r
					<PasswordInput.Root\r
						width="300px"\r
						value={value}\r
						visible={visible}\r
						onValueChange={(v: string) => { value = v; }}\r
						onVisibleChange={(v: boolean) => { visible = v; }}\r
					>\r
						<PasswordInput.Input placeholder="パスワード" />\r
						<PasswordInput.VisibilityTrigger />\r
					</PasswordInput.Root>\r
					<div style="margin-top:0.5rem; font-size:0.875rem; color:#6c757d">\r
						visible: {String(visible)} / 値: "{value}"\r
					</div>\r
				</div>\r
			);\r
		},\r
	});\r
}\r
`,q=`/** @jsx m */\r
import m from "mithril";\r
import { PasswordInput } from "mithril-ui-kit";\r
\r
/** StrengthMeter 付きパスワード入力 */\r
export function setup(el: HTMLElement): void {\r
	let strength = 0;\r
\r
	function calcStrength(pw: string): number {\r
		if (pw.length === 0) return 0;\r
		let s = 0;\r
		if (pw.length >= 6) s++;\r
		if (pw.length >= 10) s++;\r
		if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) s++;\r
		if (/[0-9]/.test(pw) && /[^a-zA-Z0-9]/.test(pw)) s++;\r
		return Math.min(4, s);\r
	}\r
\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<PasswordInput.Root\r
					width="300px"\r
					onValueChange={(v: string) => { strength = calcStrength(v); }}\r
				>\r
					<PasswordInput.Label>パスワード</PasswordInput.Label>\r
					<PasswordInput.Input placeholder="パスワードを入力" />\r
					<PasswordInput.VisibilityTrigger />\r
					<PasswordInput.StrengthMeter value={strength} />\r
				</PasswordInput.Root>\r
			);\r
		},\r
	});\r
}\r
`,V=`/** @jsx m */\r
import m from "mithril";\r
import { PasswordInput } from "mithril-ui-kit";\r
\r
/** variant / size バリエーション比較 */\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div style="display:flex; flex-direction:column; gap:1rem">\r
					{/* filled + lg */}\r
					<PasswordInput.Root width="300px" variant="filled" size="lg">\r
						<PasswordInput.Label>filled / lg</PasswordInput.Label>\r
						<PasswordInput.Input placeholder="filled / lg" />\r
						<PasswordInput.VisibilityTrigger />\r
					</PasswordInput.Root>\r
\r
					{/* flushed + sm */}\r
					<PasswordInput.Root width="300px" variant="flushed" size="sm">\r
						<PasswordInput.Label>flushed / sm</PasswordInput.Label>\r
						<PasswordInput.Input placeholder="flushed / sm" />\r
						<PasswordInput.VisibilityTrigger />\r
					</PasswordInput.Root>\r
\r
					{/* outline + xs */}\r
					<PasswordInput.Root width="300px" variant="outline" size="xs">\r
						<PasswordInput.Label>outline / xs</PasswordInput.Label>\r
						<PasswordInput.Input placeholder="outline / xs" />\r
						<PasswordInput.VisibilityTrigger />\r
					</PasswordInput.Root>\r
				</div>\r
			);\r
		},\r
	});\r
}\r
`,_=JSON.parse('{"title":"InputPassword","description":"","frontmatter":{},"headers":[],"relativePath":"PasswordInput.md","filePath":"PasswordInput.md","lastUpdated":1776836643000}'),y={name:"PasswordInput.md"},k=Object.assign(y,{setup(o){return(a,n)=>{const r=c("MithrilDemo");return h(),b("div",null,[n[0]||(n[0]=p('<h1 id="inputpassword" tabindex="-1">InputPassword <a class="header-anchor" href="#inputpassword" aria-label="Permalink to &quot;InputPassword&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>PasswordInput</code> は compound component 型のパスワード入力コンポーネントです。パスワードの表示/非表示トグル、強度メーター、制御/非制御モードに対応しています。</p><p>サブコンポーネント: <code>Root</code> / <code>Input</code> / <code>VisibilityTrigger</code> / <code>Label</code> / <code>StrengthMeter</code></p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><h3 id="基本-input-visibilitytrigger" tabindex="-1">基本（Input + VisibilityTrigger） <a class="header-anchor" href="#基本-input-visibilitytrigger" aria-label="Permalink to &quot;基本（Input + VisibilityTrigger）&quot;">​</a></h3>',6)),s(r,{setup:d(m),code:d(P)},null,8,["setup","code"]),n[1]||(n[1]=i("h3",{id:"label-defaultvisible",tabindex:"-1"},[u("Label + defaultVisible "),i("a",{class:"header-anchor",href:"#label-defaultvisible","aria-label":'Permalink to "Label + defaultVisible"'},"​")],-1)),s(r,{setup:d(g),code:d(v)},null,8,["setup","code"]),n[2]||(n[2]=i("h3",{id:"制御モード-controlled",tabindex:"-1"},[u("制御モード（controlled） "),i("a",{class:"header-anchor",href:"#制御モード-controlled","aria-label":'Permalink to "制御モード（controlled）"'},"​")],-1)),s(r,{setup:d(w),code:d(x)},null,8,["setup","code"]),n[3]||(n[3]=i("h3",{id:"strengthmeter-パスワード強度メーター",tabindex:"-1"},[u("StrengthMeter（パスワード強度メーター） "),i("a",{class:"header-anchor",href:"#strengthmeter-パスワード強度メーター","aria-label":'Permalink to "StrengthMeter（パスワード強度メーター）"'},"​")],-1)),s(r,{setup:d(f),code:d(q)},null,8,["setup","code"]),n[4]||(n[4]=i("h3",{id:"variant-size-バリエーション",tabindex:"-1"},[u("variant / size バリエーション "),i("a",{class:"header-anchor",href:"#variant-size-バリエーション","aria-label":'Permalink to "variant / size バリエーション"'},"​")],-1)),s(r,{setup:d(I),code:d(V)},null,8,["setup","code"]),n[5]||(n[5]=p('<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="passwordinput-root" tabindex="-1">PasswordInput.Root <a class="header-anchor" href="#passwordinput-root" aria-label="Permalink to &quot;PasswordInput.Root&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Prop</th><th>型</th><th>デフォルト</th><th>説明</th></tr></thead><tbody><tr><td><code>value</code></td><td><code>string</code></td><td>—</td><td>制御モード: パスワードの現在値</td></tr><tr><td><code>defaultValue</code></td><td><code>string</code></td><td><code>&quot;&quot;</code></td><td>非制御モード: 初期値</td></tr><tr><td><code>onValueChange</code></td><td><code>(value: string) =&gt; void</code></td><td>—</td><td>値変更コールバック</td></tr><tr><td><code>oninput</code></td><td><code>(value: string) =&gt; void</code></td><td>—</td><td>Form 連携用の入力イベント</td></tr><tr><td><code>onblur</code></td><td><code>() =&gt; void</code></td><td>—</td><td>Form 連携用のブラーイベント</td></tr><tr><td><code>visible</code></td><td><code>boolean</code></td><td>—</td><td>制御モード: パスワードの表示状態</td></tr><tr><td><code>defaultVisible</code></td><td><code>boolean</code></td><td><code>false</code></td><td>非制御モード: 初期表示状態</td></tr><tr><td><code>onVisibleChange</code></td><td><code>(visible: boolean) =&gt; void</code></td><td>—</td><td>表示状態変更コールバック</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>無効化</td></tr><tr><td><code>readOnly</code></td><td><code>boolean</code></td><td><code>false</code></td><td>読み取り専用</td></tr><tr><td><code>name</code></td><td><code>string</code></td><td>—</td><td>フォーム用の name 属性</td></tr><tr><td><code>size</code></td><td><code>&quot;xs&quot; | &quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;</code></td><td><code>&quot;md&quot;</code></td><td>サイズ</td></tr><tr><td><code>variant</code></td><td><code>&quot;outline&quot; | &quot;filled&quot; | &quot;flushed&quot;</code></td><td><code>&quot;outline&quot;</code></td><td>外観バリエーション</td></tr><tr><td><code>width</code></td><td><code>string</code></td><td>—</td><td>コンテナの幅（CSS値）</td></tr></tbody></table><h3 id="passwordinput-input" tabindex="-1">PasswordInput.Input <a class="header-anchor" href="#passwordinput-input" aria-label="Permalink to &quot;PasswordInput.Input&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Prop</th><th>型</th><th>説明</th></tr></thead><tbody><tr><td><code>placeholder</code></td><td><code>string</code></td><td>プレースホルダーテキスト</td></tr></tbody></table><h3 id="passwordinput-visibilitytrigger" tabindex="-1">PasswordInput.VisibilityTrigger <a class="header-anchor" href="#passwordinput-visibilitytrigger" aria-label="Permalink to &quot;PasswordInput.VisibilityTrigger&quot;">​</a></h3><p>表示/非表示を切り替えるトグルボタン。children を渡すとカスタムアイコンに置き換え可能。</p><h3 id="passwordinput-label" tabindex="-1">PasswordInput.Label <a class="header-anchor" href="#passwordinput-label" aria-label="Permalink to &quot;PasswordInput.Label&quot;">​</a></h3><p>入力フィールドのラベル。</p><h3 id="passwordinput-strengthmeter" tabindex="-1">PasswordInput.StrengthMeter <a class="header-anchor" href="#passwordinput-strengthmeter" aria-label="Permalink to &quot;PasswordInput.StrengthMeter&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Prop</th><th>型</th><th>説明</th></tr></thead><tbody><tr><td><code>value</code></td><td><code>number</code></td><td>パスワード強度（0〜4）。0=空、1=弱い、2=やや弱い、3=普通、4=強い</td></tr></tbody></table><h2 id="キーボード操作" tabindex="-1">キーボード操作 <a class="header-anchor" href="#キーボード操作" aria-label="Permalink to &quot;キーボード操作&quot;">​</a></h2><p>なし（標準のテキスト入力操作に準ずる）。</p><h2 id="アクセシビリティ" tabindex="-1">アクセシビリティ <a class="header-anchor" href="#アクセシビリティ" aria-label="Permalink to &quot;アクセシビリティ&quot;">​</a></h2><ul><li>VisibilityTrigger は <code>aria-label</code> でパスワードの表示/非表示状態を通知</li><li>Input は <code>autocomplete=&quot;current-password&quot;</code> を設定</li><li>disabled / readOnly 状態が正しく伝達される</li></ul>',15))])}}});export{_ as __pageData,k as default};
