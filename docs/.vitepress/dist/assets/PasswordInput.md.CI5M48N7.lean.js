import{m as t}from"./chunks/theme.XnzwSjk8.js";import{j as e}from"./chunks/Table.B_fZamCg.js";import{C as c,o as h,c as b,ai as p,E as s,k as d,j as i,a as u}from"./chunks/framework.Bm_aoSIc.js";function m(o){t.mount(o,{view(){return t(e.Root,{width:"300px"},t(e.Input,{placeholder:"パスワードを入力"}),t(e.VisibilityTrigger,null))}})}function g(o){t.mount(o,{view(){return t(e.Root,{width:"300px",defaultVisible:!0},t(e.Label,null,"パスワード"),t(e.Input,{placeholder:"初期表示"}),t(e.VisibilityTrigger,null))}})}function w(o){let a=!1,n="";t.mount(o,{view(){return t("div",null,t(e.Root,{width:"300px",value:n,visible:a,onValueChange:r=>{n=r},onVisibleChange:r=>{a=r}},t(e.Input,{placeholder:"パスワード"}),t(e.VisibilityTrigger,null)),t("div",{style:"margin-top:0.5rem; font-size:0.875rem; color:#6c757d"},"visible: ",String(a),' / 値: "',n,'"'))}})}function f(o){let a=0;function n(r){if(r.length===0)return 0;let l=0;return r.length>=6&&l++,r.length>=10&&l++,/[A-Z]/.test(r)&&/[a-z]/.test(r)&&l++,/[0-9]/.test(r)&&/[^a-zA-Z0-9]/.test(r)&&l++,Math.min(4,l)}t.mount(o,{view(){return t(e.Root,{width:"300px",onValueChange:r=>{a=n(r)}},t(e.Label,null,"パスワード"),t(e.Input,{placeholder:"パスワードを入力"}),t(e.VisibilityTrigger,null),t(e.StrengthMeter,{value:a}))}})}function I(o){t.mount(o,{view(){return t("div",{style:"display:flex; flex-direction:column; gap:1rem"},t(e.Root,{width:"300px",variant:"filled",size:"lg"},t(e.Label,null,"filled / lg"),t(e.Input,{placeholder:"filled / lg"}),t(e.VisibilityTrigger,null)),t(e.Root,{width:"300px",variant:"flushed",size:"sm"},t(e.Label,null,"flushed / sm"),t(e.Input,{placeholder:"flushed / sm"}),t(e.VisibilityTrigger,null)),t(e.Root,{width:"300px",variant:"outline",size:"xs"},t(e.Label,null,"outline / xs"),t(e.Input,{placeholder:"outline / xs"}),t(e.VisibilityTrigger,null)))}})}const P=`/** @jsx m */\r
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
`,_=JSON.parse('{"title":"InputPassword","description":"","frontmatter":{},"headers":[],"relativePath":"PasswordInput.md","filePath":"PasswordInput.md"}'),y={name:"PasswordInput.md"},k=Object.assign(y,{setup(o){return(a,n)=>{const r=c("MithrilDemo");return h(),b("div",null,[n[0]||(n[0]=p("",7)),s(r,{setup:d(m),code:d(P)},null,8,["setup","code"]),n[1]||(n[1]=i("h3",{id:"label-defaultvisible",tabindex:"-1"},[u("Label + defaultVisible "),i("a",{class:"header-anchor",href:"#label-defaultvisible","aria-label":'Permalink to "Label + defaultVisible"'},"​")],-1)),s(r,{setup:d(g),code:d(v)},null,8,["setup","code"]),n[2]||(n[2]=i("h3",{id:"制御モード-controlled",tabindex:"-1"},[u("制御モード（controlled） "),i("a",{class:"header-anchor",href:"#制御モード-controlled","aria-label":'Permalink to "制御モード（controlled）"'},"​")],-1)),s(r,{setup:d(w),code:d(x)},null,8,["setup","code"]),n[3]||(n[3]=i("h3",{id:"strengthmeter-パスワード強度メーター",tabindex:"-1"},[u("StrengthMeter（パスワード強度メーター） "),i("a",{class:"header-anchor",href:"#strengthmeter-パスワード強度メーター","aria-label":'Permalink to "StrengthMeter（パスワード強度メーター）"'},"​")],-1)),s(r,{setup:d(f),code:d(q)},null,8,["setup","code"]),n[4]||(n[4]=i("h3",{id:"variant-size-バリエーション",tabindex:"-1"},[u("variant / size バリエーション "),i("a",{class:"header-anchor",href:"#variant-size-バリエーション","aria-label":'Permalink to "variant / size バリエーション"'},"​")],-1)),s(r,{setup:d(I),code:d(V)},null,8,["setup","code"]),n[5]||(n[5]=p("",15))])}}});export{_ as __pageData,k as default};
