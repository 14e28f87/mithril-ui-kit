import{m as r}from"./chunks/theme.BXbJ2X8L.js";import{c as y}from"./chunks/Table.Dq6qlMER.js";import{C as P,o as q,c as G,ai as p,E as k,k as u}from"./chunks/framework.Bm_aoSIc.js";const v="_group_uqxoe_1",T="_attached_uqxoe_8",w="_grow_uqxoe_26",i={group:v,attached:T,grow:w};class l{view(n){const{attached:t,grow:c,gap:d,as:h="div",class:g,style:a,...b}=n.attrs,s={};d!==void 0&&!t&&(s.gap=typeof d=="number"?`${d}px`:d);const f=typeof a=="string"?`${Object.entries(s).map(([m,_])=>`${m.replace(/[A-Z]/g,x=>`-${x.toLowerCase()}`)}:${_}`).join(";")}${a?`;${a}`:""}`:{...s,...a||{}};return r(h,{...b,class:y(i.group,t&&i.attached,c&&i.grow,g),style:f},n.children)}}function e(o){return r("button",{type:"button",style:{padding:"10px 14px",border:"1px solid #cbd5e1",background:"#ffffff",fontWeight:"600"}},o)}function C(o){r.mount(o,{view(){return r("div",{style:{display:"grid",gap:"16px"}},r(l,{gap:"10px"},e("Preview"),e("Run"),e("Export")),r(l,{attached:!0},e("Day"),e("Week"),e("Month")))}})}const S=`/** @jsx m */\r
import m from "mithril";\r
import { Group } from "mithril-ui-kit";\r
\r
function button(label: string): m.Children {\r
	return (\r
		<button\r
			type="button"\r
			style={{\r
				padding: "10px 14px",\r
				border: "1px solid #cbd5e1",\r
				background: "#ffffff",\r
				fontWeight: "600",\r
			}}\r
		>\r
			{label}\r
		</button>\r
	);\r
}\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div style={{ display: "grid", gap: "16px" }}>\r
					<Group gap="10px">{button("Preview")}{button("Run")}{button("Export")}</Group>\r
					<Group attached>{button("Day")}{button("Week")}{button("Month")}</Group>\r
				</div>\r
			);\r
		},\r
	});\r
}`,R=JSON.parse('{"title":"Group","description":"","frontmatter":{},"headers":[],"relativePath":"Group.md","filePath":"Group.md"}'),A={name:"Group.md"},$=Object.assign(A,{setup(o){return(n,t)=>{const c=P("MithrilDemo");return q(),G("div",null,[t[0]||(t[0]=p("",5)),k(c,{setup:u(C),code:u(S)},null,8,["setup","code"]),t[1]||(t[1]=p("",3))])}}});export{R as __pageData,$ as default};
