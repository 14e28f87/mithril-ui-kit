import{m as r}from"./chunks/theme.LBbUWaEz.js";import{c as x}from"./chunks/Table.DnqMepI2.js";import{C as S,o as G,c as y,a4 as c,E as v,k as p}from"./chunks/framework.DuWTyC0X.js";const P="_simpleGrid_12us8_1",C={simpleGrid:P};class T{view(d){const{columns:t,minChildWidth:i,gap:o,rowGap:a,columnGap:n,as:m="div",class:h,style:s,...u}=d.attrs,e={};i?e.gridTemplateColumns=`repeat(auto-fit, minmax(${i}, 1fr))`:t&&(e.gridTemplateColumns=`repeat(${t}, 1fr)`),o!==void 0&&(e.gap=typeof o=="number"?`${o}px`:o),a!==void 0&&(e.rowGap=typeof a=="number"?`${a}px`:a),n!==void 0&&(e.columnGap=typeof n=="number"?`${n}px`:n);const f=typeof s=="string"?`${Object.entries(e).map(([g,_])=>`${g.replace(/[A-Z]/g,b=>`-${b.toLowerCase()}`)}:${_}`).join(";")}${s?`;${s}`:""}`:{...e,...s||{}};return r(m,{...u,class:x(C.simpleGrid,h),style:f},d.children)}}const k=["Kiln","Sensor","Recipe","Alarm","Batch","Report"];function q(l){r.mount(l,{view(){return r(T,{minChildWidth:"160px",gap:"12px"},k.map(d=>r("div",{key:d,style:{padding:"16px",borderRadius:"12px",border:"1px solid #d0d7de",background:"#ffffff"}},r("div",{style:{fontWeight:"600",marginBottom:"4px"}},d),r("div",{style:{color:"#475569",fontSize:"0.9rem"}},"自動で折り返すカードレイアウト"))))}})}const A=`/** @jsx m */\r
import m from "mithril";\r
import { SimpleGrid } from "mithril-ui-kit";\r
\r
const cards = ["Kiln", "Sensor", "Recipe", "Alarm", "Batch", "Report"];\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<SimpleGrid minChildWidth="160px" gap="12px">\r
					{cards.map((label) => (\r
						<div\r
							key={label}\r
							style={{\r
								padding: "16px",\r
								borderRadius: "12px",\r
								border: "1px solid #d0d7de",\r
								background: "#ffffff",\r
							}}\r
						>\r
							<div style={{ fontWeight: "600", marginBottom: "4px" }}>{label}</div>\r
							<div style={{ color: "#475569", fontSize: "0.9rem" }}>自動で折り返すカードレイアウト</div>\r
						</div>\r
					))}\r
				</SimpleGrid>\r
			);\r
		},\r
	});\r
}`,N=JSON.parse('{"title":"SimpleGrid","description":"","frontmatter":{},"headers":[],"relativePath":"SimpleGrid.md","filePath":"SimpleGrid.md","lastUpdated":1776646114000}'),R={name:"SimpleGrid.md"},W=Object.assign(R,{setup(l){return(d,t)=>{const i=S("MithrilDemo");return G(),y("div",null,[t[0]||(t[0]=c("",5)),v(i,{setup:p(q),code:p(A)},null,8,["setup","code"]),t[1]||(t[1]=c("",3))])}}});export{N as __pageData,W as default};
