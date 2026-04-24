import{m as n}from"./chunks/theme.LBbUWaEz.js";import{c as x}from"./chunks/Table.DnqMepI2.js";import{C as y,o as P,c as T,a4 as i,E as q,k as p}from"./chunks/framework.DuWTyC0X.js";const k="_wrap_ns57k_1",w={wrap:k};class W{view(t){const{gap:e="8px",rowGap:a,columnGap:o,align:l,justify:s,as:u="div",class:m,style:d,...f}=t.attrs,r={};e!==void 0&&(r.gap=typeof e=="number"?`${e}px`:e),a!==void 0&&(r.rowGap=typeof a=="number"?`${a}px`:a),o!==void 0&&(r.columnGap=typeof o=="number"?`${o}px`:o),l&&(r.alignItems=l),s&&(r.justifyContent=s);const h=typeof d=="string"?`${Object.entries(r).map(([b,g])=>`${b.replace(/[A-Z]/g,_=>`-${_.toLowerCase()}`)}:${g}`).join(";")}${d?`;${d}`:""}`:{...r,...d||{}};return n(u,{...f,class:x(w.wrap,m),style:h},t.children)}}const A=[{label:"Temperature",color:"#dbeafe"},{label:"Pressure",color:"#dcfce7"},{label:"OPC UA",color:"#fef3c7"},{label:"Batch",color:"#ede9fe"},{label:"Alarm",color:"#fee2e2"},{label:"Trend",color:"#e0f2fe"}];function C(c){n.mount(c,{view(){return n(W,{gap:"10px"},A.map(t=>n("span",{key:t.label,style:{padding:"8px 12px",borderRadius:"999px",background:t.color,fontWeight:"600"}},t.label)))}})}const v=`/** @jsx m */\r
import m from "mithril";\r
import { Wrap } from "mithril-ui-kit";\r
\r
const tags = [\r
	{ label: "Temperature", color: "#dbeafe" },\r
	{ label: "Pressure", color: "#dcfce7" },\r
	{ label: "OPC UA", color: "#fef3c7" },\r
	{ label: "Batch", color: "#ede9fe" },\r
	{ label: "Alarm", color: "#fee2e2" },\r
	{ label: "Trend", color: "#e0f2fe" },\r
];\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<Wrap gap="10px">\r
					{tags.map((tag) => (\r
						<span\r
							key={tag.label}\r
							style={{\r
								padding: "8px 12px",\r
								borderRadius: "999px",\r
								background: tag.color,\r
								fontWeight: "600",\r
							}}\r
						>\r
							{tag.label}\r
						</span>\r
					))}\r
				</Wrap>\r
			);\r
		},\r
	});\r
}`,I=JSON.parse('{"title":"Wrap","description":"","frontmatter":{},"headers":[],"relativePath":"Wrap.md","filePath":"Wrap.md","lastUpdated":1776646114000}'),S={name:"Wrap.md"},N=Object.assign(S,{setup(c){return(t,e)=>{const a=y("MithrilDemo");return P(),T("div",null,[e[0]||(e[0]=i("",5)),q(a,{setup:p(C),code:p(v)},null,8,["setup","code"]),e[1]||(e[1]=i("",3))])}}});export{I as __pageData,N as default};
