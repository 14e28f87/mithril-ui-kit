import{m as o}from"./chunks/theme.C32Rvu8V.js";import{c as A}from"./chunks/Table.MsshMnDN.js";import{C as W,o as z,c as N,a4 as C,E as S,k as d,j as a,a as i}from"./chunks/framework.DuWTyC0X.js";const L="_stack_1qzls_1",M="_stackSeparator_1qzls_6",I={stack:L,stackSeparator:M},O={sm:576,md:768,lg:992,xl:1200,xxl:1400};class y{view(t){const{_direction:r="column",class:n,style:c,...s}=t.attrs,l=r==="row"||r==="row-reverse",p=l?"vertical":"horizontal",q=typeof c=="string"?c:{...l?{alignSelf:"stretch",borderInlineStartWidth:"1px",borderInlineStartStyle:"solid"}:{width:"100%",borderTopWidth:"1px",borderTopStyle:"solid"},...c||{}};return o("hr",{...s,"aria-orientation":p,class:A(I.stackSeparator,n),style:q})}}function U(e){return e!=null&&typeof e=="object"&&e.tag===y}function G(e,t){return U(e)?o(y,{...e.attrs,_direction:t}):e}class h{constructor(){this.uid=`muk-stack-${Math.random().toString(36).slice(2,9)}`}syncResponsiveStyle(t){const r=`style-${this.uid}`;let n=document.getElementById(r);n||(n=document.createElement("style"),n.id=r,document.head.appendChild(n));const c=`[data-muk-stack-id="${this.uid}"]`,s=[];t.base&&s.push(`${c}{flex-direction:${t.base}}`);for(const[l,p]of Object.entries(O)){const b=t[l];b&&s.push(`@media(min-width:${p}px){${c}{flex-direction:${b}}}`)}n.textContent=s.join(`
`)}oncreate(t){typeof t.attrs.direction=="object"&&t.attrs.direction!==null&&this.syncResponsiveStyle(t.attrs.direction)}onupdate(t){typeof t.attrs.direction=="object"&&t.attrs.direction!==null&&this.syncResponsiveStyle(t.attrs.direction)}onremove(){var t;(t=document.getElementById(`style-${this.uid}`))==null||t.remove()}view(t){const{direction:r="column",gap:n,align:c,justify:s,wrap:l,separator:p,as:b="div",class:q,style:k,...D}=t.attrs,w=typeof r=="object"&&r!==null,V=w?r.base??"column":r,u={};w||(u.flexDirection=V),n!==void 0&&!p&&(u.gap=typeof n=="number"?`${n}px`:n),c&&(u.alignItems=c),s&&(u.justifyContent=s),l&&(u.flexWrap=l);const j=typeof k=="string"?`${Object.entries(u).map(([_,x])=>`${_.replace(/[A-Z]/g,f=>`-${f.toLowerCase()}`)}:${x}`).join(";")}${k?`;${k}`:""}`:{...u,...k||{}};let g=t.children;if(p&&Array.isArray(g)){const _=g.flat().filter(f=>f!=null&&f!==!1&&f!==""),x=[];_.forEach((f,E)=>{E>0&&x.push(G(p,V)),x.push(f)}),g=x}const H=w?{"data-muk-stack-id":this.uid}:{};return o(b,{...D,...H,class:A(I.stack,q),style:j},g)}}class ${view(t){return o(h,{...t.attrs,direction:"row"},t.children)}}class B{view(t){return o(h,{...t.attrs,direction:"column"},t.children)}}function P(e,t="#f1f5f9"){return o("div",{style:{padding:"10px 16px",background:t,borderRadius:"8px",fontWeight:"500"}},e)}function J(e){o.mount(e,{view(){return o(h,{gap:"12px"},P("Item 1","#dbeafe"),P("Item 2","#dcfce7"),P("Item 3","#fef3c7"))}})}const K=`/** @jsx m */\r
import m from "mithril";\r
import { Stack } from "mithril-ui-kit";\r
\r
function box(label: string, bg = "#f1f5f9"): m.Children {\r
	return (\r
		<div\r
			style={{\r
				padding: "10px 16px",\r
				background: bg,\r
				borderRadius: "8px",\r
				fontWeight: "500",\r
			}}\r
		>\r
			{label}\r
		</div>\r
	);\r
}\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<Stack gap="12px">\r
					{box("Item 1", "#dbeafe")}\r
					{box("Item 2", "#dcfce7")}\r
					{box("Item 3", "#fef3c7")}\r
				</Stack>\r
			);\r
		},\r
	});\r
}\r
`;function m(e,t="#f1f5f9"){return o("div",{style:{padding:"10px 16px",background:t,borderRadius:"8px",fontWeight:"500"}},e)}function Z(e){o.mount(e,{view(){return o(h,{gap:"32px"},o("div",null,o("p",{style:{marginBottom:"8px",fontSize:"13px",color:"#64748b"}},"VStack + StackSeparator（横線）"),o(B,{gap:"12px",separator:o(y,null)},m("Alpha","#dbeafe"),m("Beta","#dcfce7"),m("Gamma","#fef3c7"))),o("div",null,o("p",{style:{marginBottom:"8px",fontSize:"13px",color:"#64748b"}},"HStack + StackSeparator（縦線）"),o($,{gap:"12px",align:"center",separator:o(y,null)},m("Left","#ede9fe"),m("Center","#fce7f3"),m("Right","#d1fae5"))))}})}const F=`/** @jsx m */\r
import m from "mithril";\r
import { HStack, Stack, StackSeparator, VStack } from "mithril-ui-kit";\r
\r
function box(label: string, bg = "#f1f5f9"): m.Children {\r
	return (\r
		<div\r
			style={{\r
				padding: "10px 16px",\r
				background: bg,\r
				borderRadius: "8px",\r
				fontWeight: "500",\r
			}}\r
		>\r
			{label}\r
		</div>\r
	);\r
}\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<Stack gap="32px">\r
					{/* 縦方向 Stack に StackSeparator → 横線 */}\r
					<div>\r
						<p style={{ marginBottom: "8px", fontSize: "13px", color: "#64748b" }}>\r
							VStack + StackSeparator（横線）\r
						</p>\r
						<VStack gap="12px" separator={<StackSeparator />}>\r
							{box("Alpha", "#dbeafe")}\r
							{box("Beta", "#dcfce7")}\r
							{box("Gamma", "#fef3c7")}\r
						</VStack>\r
					</div>\r
\r
					{/* 横方向 Stack に StackSeparator → 縦線 */}\r
					<div>\r
						<p style={{ marginBottom: "8px", fontSize: "13px", color: "#64748b" }}>\r
							HStack + StackSeparator（縦線）\r
						</p>\r
						<HStack gap="12px" align="center" separator={<StackSeparator />}>\r
							{box("Left", "#ede9fe")}\r
							{box("Center", "#fce7f3")}\r
							{box("Right", "#d1fae5")}\r
						</HStack>\r
					</div>\r
				</Stack>\r
			);\r
		},\r
	});\r
}\r
`;function v(e,t,r="#1e293b"){return o("span",{style:{padding:"6px 14px",background:t,color:r,borderRadius:"999px",fontWeight:"600",fontSize:"14px"}},e)}function Q(e){o.mount(e,{view(){return o($,{gap:"12px",align:"center",wrap:"wrap"},v("Design","#dbeafe"),v("Build","#dcfce7"),v("Ship","#fef3c7"),v("Iterate","#ede9fe"))}})}const X=`/** @jsx m */\r
import m from "mithril";\r
import { HStack } from "mithril-ui-kit";\r
\r
function tag(label: string, bg: string, color = "#1e293b"): m.Children {\r
	return (\r
		<span\r
			style={{\r
				padding: "6px 14px",\r
				background: bg,\r
				color,\r
				borderRadius: "999px",\r
				fontWeight: "600",\r
				fontSize: "14px",\r
			}}\r
		>\r
			{label}\r
		</span>\r
	);\r
}\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<HStack gap="12px" align="center" wrap="wrap">\r
					{tag("Design", "#dbeafe")}\r
					{tag("Build", "#dcfce7")}\r
					{tag("Ship", "#fef3c7")}\r
					{tag("Iterate", "#ede9fe")}\r
				</HStack>\r
			);\r
		},\r
	});\r
}\r
`;function R(e,t){return o("div",{style:{padding:"12px 16px",background:"#f8fafc",border:"1px solid #e2e8f0",borderRadius:"10px"}},o("div",{style:{fontWeight:"600",marginBottom:"4px"}},e),o("div",{style:{fontSize:"13px",color:"#64748b"}},t))}function Y(e){o.mount(e,{view(){return o(B,{gap:"10px",align:"stretch",style:{maxWidth:"320px"}},R("ステップ 1","プロジェクトを作成します"),R("ステップ 2","コンポーネントを設定します"),R("ステップ 3","デプロイして完了です"))}})}const tt=`/** @jsx m */\r
import m from "mithril";\r
import { VStack } from "mithril-ui-kit";\r
\r
function card(title: string, desc: string): m.Children {\r
	return (\r
		<div\r
			style={{\r
				padding: "12px 16px",\r
				background: "#f8fafc",\r
				border: "1px solid #e2e8f0",\r
				borderRadius: "10px",\r
			}}\r
		>\r
			<div style={{ fontWeight: "600", marginBottom: "4px" }}>{title}</div>\r
			<div style={{ fontSize: "13px", color: "#64748b" }}>{desc}</div>\r
		</div>\r
	);\r
}\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<VStack gap="10px" align="stretch" style={{ maxWidth: "320px" }}>\r
					{card("ステップ 1", "プロジェクトを作成します")}\r
					{card("ステップ 2", "コンポーネントを設定します")}\r
					{card("ステップ 3", "デプロイして完了です")}\r
				</VStack>\r
			);\r
		},\r
	});\r
}\r
`;function T(e,t="#f1f5f9"){return o("div",{style:{padding:"12px 16px",background:t,borderRadius:"8px",fontWeight:"500",flex:"1"}},e)}function et(e){o.mount(e,{view(){return o(h,null,o("p",{style:{marginBottom:"12px",fontSize:"13px",color:"#64748b"}},"ウィンドウ幅を変えると方向が切り替わります（base: column / md ≥768px: row）"),o(h,{direction:{base:"column",md:"row"},gap:"12px"},T("Section A","#dbeafe"),T("Section B","#dcfce7"),T("Section C","#fef3c7")))}})}const rt=`/** @jsx m */\r
import m from "mithril";\r
import { Stack } from "mithril-ui-kit";\r
\r
function box(label: string, bg = "#f1f5f9"): m.Children {\r
	return (\r
		<div\r
			style={{\r
				padding: "12px 16px",\r
				background: bg,\r
				borderRadius: "8px",\r
				fontWeight: "500",\r
				flex: "1",\r
			}}\r
		>\r
			{label}\r
		</div>\r
	);\r
}\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<Stack>\r
					<p style={{ marginBottom: "12px", fontSize: "13px", color: "#64748b" }}>\r
						ウィンドウ幅を変えると方向が切り替わります（base: column / md ≥768px: row）\r
					</p>\r
					<Stack\r
						direction={{ base: "column", md: "row" }}\r
						gap="12px"\r
					>\r
						{box("Section A", "#dbeafe")}\r
						{box("Section B", "#dcfce7")}\r
						{box("Section C", "#fef3c7")}\r
					</Stack>\r
				</Stack>\r
			);\r
		},\r
	});\r
}\r
`,ct=JSON.parse('{"title":"Stack","description":"","frontmatter":{},"headers":[],"relativePath":"Stack.md","filePath":"Stack.md","lastUpdated":1777529825000}'),ot={name:"Stack.md"},it=Object.assign(ot,{setup(e){return(t,r)=>{const n=W("MithrilDemo");return z(),N("div",null,[r[0]||(r[0]=C("",6)),S(n,{setup:d(J),code:d(K)},null,8,["setup","code"]),r[1]||(r[1]=a("h3",{id:"stackseparator",tabindex:"-1"},[i("StackSeparator "),a("a",{class:"header-anchor",href:"#stackseparator","aria-label":'Permalink to "StackSeparator"'},"​")],-1)),r[2]||(r[2]=a("p",null,[a("code",null,"separator"),i(" prop に "),a("code",null,"<StackSeparator />"),i(" を渡すと、Stack の方向に合わせてセパレーターの向きが自動で切り替わります。縦方向 Stack では横線、横方向 Stack では縦線が挿入されます。")],-1)),S(n,{setup:d(Z),code:d(F)},null,8,["setup","code"]),r[3]||(r[3]=a("h3",{id:"hstack",tabindex:"-1"},[i("HStack "),a("a",{class:"header-anchor",href:"#hstack","aria-label":'Permalink to "HStack"'},"​")],-1)),r[4]||(r[4]=a("p",null,[a("code",null,"HStack"),i(" は "),a("code",null,'direction="row"'),i(" を固定したショートカットです。子要素を横方向に並べます。")],-1)),S(n,{setup:d(Q),code:d(X)},null,8,["setup","code"]),r[5]||(r[5]=a("h3",{id:"vstack",tabindex:"-1"},[i("VStack "),a("a",{class:"header-anchor",href:"#vstack","aria-label":'Permalink to "VStack"'},"​")],-1)),r[6]||(r[6]=a("p",null,[a("code",null,"VStack"),i(" は "),a("code",null,'direction="column"'),i(" を固定したショートカットです。子要素を縦方向に並べます。")],-1)),S(n,{setup:d(Y),code:d(tt)},null,8,["setup","code"]),r[7]||(r[7]=C("",2)),S(n,{setup:d(et),code:d(rt)},null,8,["setup","code"]),r[8]||(r[8]=C("",10))])}}});export{ct as __pageData,it as default};
