import{m as o}from"./chunks/theme.4JftMPzn.js";import{c as k}from"./chunks/Table.BtqtxzWS.js";import{C as w,o as C,c as F,ai as m,E as T,k as x}from"./chunks/framework.Bm_aoSIc.js";const j="_flex_19qh9_1",A="_inline_19qh9_6",D="_spacer_19qh9_10",l={flex:j,inline:A,spacer:D};class E{view(r){const{direction:t,align:n,justify:s,wrap:p,basis:u,grow:f,shrink:h,gap:a,inline:g,as:b="div",class:_,style:c,...q}=r.attrs,e={};t&&(e.flexDirection=t),n&&(e.alignItems=n),s&&(e.justifyContent=s),p&&(e.flexWrap=p),u&&(e.flexBasis=u),f!==void 0&&(e.flexGrow=String(f)),h!==void 0&&(e.flexShrink=String(h)),a!==void 0&&(e.gap=typeof a=="number"?`${a}px`:a);const y=typeof c=="string"?`${Object.entries(e).map(([S,v])=>`${S.replace(/[A-Z]/g,P=>`-${P.toLowerCase()}`)}:${v}`).join(";")}${c?`;${c}`:""}`:{...e,...c||{}};return o(b,{...q,class:k(l.flex,g&&l.inline,_),style:y},r.children)}}class I{view(){return o("div",{class:l.spacer})}}function i(d,r){return o("div",{style:{padding:"10px 14px",borderRadius:"10px",background:r,color:"#0f172a",fontWeight:"600"}},d)}function N(d){o.mount(d,{view(){return o(E,{align:"center",gap:"12px",style:{padding:"8px 0"}},i("Start","#dbeafe"),o(I,null),i("Center","#fde68a"),i("End","#dcfce7"))}})}const R=`/** @jsx m */\r
import m from "mithril";\r
import { Flex, Spacer } from "mithril-ui-kit";\r
\r
function panel(label: string, color: string): m.Children {\r
	return (\r
		<div\r
			style={{\r
				padding: "10px 14px",\r
				borderRadius: "10px",\r
				background: color,\r
				color: "#0f172a",\r
				fontWeight: "600",\r
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
				<Flex align="center" gap="12px" style={{ padding: "8px 0" }}>\r
					{panel("Start", "#dbeafe")}\r
					<Spacer />\r
					{panel("Center", "#fde68a")}\r
					{panel("End", "#dcfce7")}\r
				</Flex>\r
			);\r
		},\r
	});\r
}`,O=JSON.parse('{"title":"Flex","description":"","frontmatter":{},"headers":[],"relativePath":"Flex.md","filePath":"Flex.md"}'),$={name:"Flex.md"},W=Object.assign($,{setup(d){return(r,t)=>{const n=w("MithrilDemo");return C(),F("div",null,[t[0]||(t[0]=m("",5)),T(n,{setup:x(N),code:x(R)},null,8,["setup","code"]),t[1]||(t[1]=m("",5))])}}});export{O as __pageData,W as default};
