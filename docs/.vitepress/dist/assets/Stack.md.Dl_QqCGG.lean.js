import{m as t}from"./chunks/theme.MeAZuU5r.js";import{c as v}from"./chunks/Table.BlGpiJ_h.js";import{C as w,o as P,c as C,ai as g,E as T,k as b}from"./chunks/framework.DYURIDHw.js";const V="_stack_thl4h_1",A={stack:V};class p{view(e){const{direction:o="column",gap:c,align:f,justify:m,wrap:k,separator:u,as:S="div",class:x,style:s,..._}=e.attrs,r={};r.flexDirection=o,c!==void 0&&!u&&(r.gap=typeof c=="number"?`${c}px`:c),f&&(r.alignItems=f),m&&(r.justifyContent=m),k&&(r.flexWrap=k);const q=typeof s=="string"?`${Object.entries(r).map(([h,n])=>`${h.replace(/[A-Z]/g,a=>`-${a.toLowerCase()}`)}:${n}`).join(";")}${s?`;${s}`:""}`:{...r,...s||{}};let l=e.children;if(u&&Array.isArray(l)){const h=l.flat().filter(a=>a!=null&&a!==!1&&a!==""),n=[];h.forEach((a,y)=>{y>0&&n.push(u),n.push(a)}),l=n}return t(S,{..._,class:v(A.stack,x),style:q},l)}}class R{view(e){return t(p,{...e.attrs,direction:"row"},e.children)}}class D{view(e){return t(p,{...e.attrs,direction:"column"},e.children)}}function i(d,e){return t("div",{style:{padding:"8px 12px",borderRadius:"999px",background:e,fontWeight:"600"}},d)}function H(d){t.mount(d,{view(){return t(p,{gap:"16px"},t(p,{gap:"10px",separator:t("span",{style:{color:"#94a3b8"}},"/")},i("Design","#dbeafe"),i("Build","#dcfce7"),i("Ship","#fef3c7")),t(R,{gap:"10px"},i("HStack","#ede9fe"),i("Row","#fce7f3")),t(D,{gap:"8px",align:"stretch"},t("div",{style:{padding:"10px 12px",background:"#f8fafc",borderRadius:"10px"}},"VStack"),t("div",{style:{padding:"10px 12px",background:"#f1f5f9",borderRadius:"10px"}},"Column alias")))}})}const j=`/** @jsx m */\r
import m from "mithril";\r
import { HStack, Stack, VStack } from "mithril-ui-kit";\r
\r
function chip(label: string, color: string): m.Children {\r
	return (\r
		<div\r
			style={{\r
				padding: "8px 12px",\r
				borderRadius: "999px",\r
				background: color,\r
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
				<Stack gap="16px">\r
					<Stack gap="10px" separator={<span style={{ color: "#94a3b8" }}>/</span>}>\r
						{chip("Design", "#dbeafe")}\r
						{chip("Build", "#dcfce7")}\r
						{chip("Ship", "#fef3c7")}\r
					</Stack>\r
					<HStack gap="10px">\r
						{chip("HStack", "#ede9fe")}\r
						{chip("Row", "#fce7f3")}\r
					</HStack>\r
					<VStack gap="8px" align="stretch">\r
						<div style={{ padding: "10px 12px", background: "#f8fafc", borderRadius: "10px" }}>VStack</div>\r
						<div style={{ padding: "10px 12px", background: "#f1f5f9", borderRadius: "10px" }}>Column alias</div>\r
					</VStack>\r
				</Stack>\r
			);\r
		},\r
	});\r
}`,B=JSON.parse('{"title":"Stack","description":"","frontmatter":{},"headers":[],"relativePath":"Stack.md","filePath":"Stack.md"}'),I={name:"Stack.md"},M=Object.assign(I,{setup(d){return(e,o)=>{const c=w("MithrilDemo");return P(),C("div",null,[o[0]||(o[0]=g("",5)),T(c,{setup:b(H),code:b(j)},null,8,["setup","code"]),o[1]||(o[1]=g("",5))])}}});export{B as __pageData,M as default};
