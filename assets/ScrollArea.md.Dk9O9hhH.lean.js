import{m as d}from"./chunks/theme.BHMR1ScI.js";import{c as x}from"./chunks/Table.DpkFVNUa.js";import{C as A,o as q,c as S,a4 as n,E as v,k as i}from"./chunks/framework.DuWTyC0X.js";const P="_scrollArea_1yd6r_2",k="_typeScroll_1yd6r_7",T="_typeAuto_1yd6r_11",w="_typeHover_1yd6r_15",$="_typeAlways_1yd6r_22",C="_scrollbarSm_1yd6r_27",H="_scrollbarMd_1yd6r_32",R="_scrollbarLg_1yd6r_37",c={scrollArea:P,typeScroll:k,typeAuto:T,typeHover:w,typeAlways:$,scrollbarSm:C,scrollbarMd:H,scrollbarLg:R};function p(e){return e.charAt(0).toUpperCase()+e.slice(1)}class D{view(t){const{type:r="auto",maxHeight:o,maxWidth:a,scrollbarSize:u="md",as:m="div",class:_,style:l,...h}=t.attrs,s={};o!==void 0&&(s.maxHeight=typeof o=="number"?`${o}px`:o),a!==void 0&&(s.maxWidth=typeof a=="number"?`${a}px`:a);const y=typeof l=="string"?`${Object.entries(s).map(([b,g])=>`${b.replace(/[A-Z]/g,f=>`-${f.toLowerCase()}`)}:${g}`).join(";")}${l?`;${l}`:""}`:{...s,...l||{}};return d(m,{...h,class:x(c.scrollArea,c[`type${p(r)}`],c[`scrollbar${p(u)}`],_),style:y},t.children)}}const L=Array.from({length:18},(e,t)=>`Log line ${t+1}`);function N(e){d.mount(e,{view(){return d(D,{maxHeight:220,style:{border:"1px solid #d0d7de",borderRadius:"12px",padding:"12px"}},d("div",{style:{display:"grid",gap:"8px"}},L.map(t=>d("div",{key:t,style:{padding:"10px 12px",background:"#f8fafc",borderRadius:"8px"}},t))))}})}const I=`/** @jsx m */\r
import m from "mithril";\r
import { ScrollArea } from "mithril-ui-kit";\r
\r
const rows = Array.from({ length: 18 }, (_, index) => \`Log line \${index + 1}\`);\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<ScrollArea maxHeight={220} style={{ border: "1px solid #d0d7de", borderRadius: "12px", padding: "12px" }}>\r
					<div style={{ display: "grid", gap: "8px" }}>\r
						{rows.map((row) => (\r
							<div key={row} style={{ padding: "10px 12px", background: "#f8fafc", borderRadius: "8px" }}>\r
								{row}\r
							</div>\r
						))}\r
					</div>\r
				</ScrollArea>\r
			);\r
		},\r
	});\r
}`,U=JSON.parse('{"title":"ScrollArea","description":"","frontmatter":{},"headers":[],"relativePath":"ScrollArea.md","filePath":"ScrollArea.md","lastUpdated":1776646114000}'),M={name:"ScrollArea.md"},z=Object.assign(M,{setup(e){return(t,r)=>{const o=A("MithrilDemo");return q(),S("div",null,[r[0]||(r[0]=n("",5)),v(o,{setup:i(N),code:i(I)},null,8,["setup","code"]),r[1]||(r[1]=n("",3))])}}});export{U as __pageData,z as default};
