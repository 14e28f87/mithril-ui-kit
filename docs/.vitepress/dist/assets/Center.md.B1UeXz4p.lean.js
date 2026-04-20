import{m as r}from"./chunks/theme.D5gNcpBr.js";import{c as l}from"./chunks/Table.A5W0Ssaz.js";import{C as b,o as _,c as g,ai as h,E as C,k as u}from"./chunks/framework.Bm_aoSIc.js";const q="_center_1pdtc_1",x="_inline_1pdtc_8",y="_square_1pdtc_12",P="_circle_1pdtc_20",s={center:q,inline:x,square:y,circle:P};class S{view(t){const{inline:e,as:d="div",class:c,...o}=t.attrs;return r(d,{...o,class:l(s.center,e&&s.inline,c)},t.children)}}class p{view(t){const{size:e,as:d="div",class:c,style:o,...f}=t.attrs,n=typeof e=="number"?`${e}px`:e,i={};n&&(i.width=n,i.height=n);const m=typeof o=="string"?`width:${n};height:${n};${o}`:{...i,...o||{}};return r(d,{...f,class:l(s.square,c),style:m},t.children)}}class k{view(t){const{class:e,...d}=t.attrs;return r(p,{...d,class:l(s.circle,e)},t.children)}}function T(a){r.mount(a,{view(){return r("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"}},r(S,{style:{width:"180px",height:"110px",borderRadius:"12px",background:"#eff6ff",fontWeight:"600"}},"Center"),r(p,{size:96,style:{background:"#dcfce7",borderRadius:"16px",fontWeight:"600"}},"Square"),r(k,{size:96,style:{background:"#fde68a",fontWeight:"600"}},"Circle"))}})}const v=`/** @jsx m */\r
import m from "mithril";\r
import { Center, Circle, Square } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>\r
					<Center\r
						style={{\r
							width: "180px",\r
							height: "110px",\r
							borderRadius: "12px",\r
							background: "#eff6ff",\r
							fontWeight: "600",\r
						}}\r
					>\r
						Center\r
					</Center>\r
					<Square size={96} style={{ background: "#dcfce7", borderRadius: "16px", fontWeight: "600" }}>\r
						Square\r
					</Square>\r
					<Circle size={96} style={{ background: "#fde68a", fontWeight: "600" }}>\r
						Circle\r
					</Circle>\r
				</div>\r
			);\r
		},\r
	});\r
}`,N=JSON.parse('{"title":"Center","description":"","frontmatter":{},"headers":[],"relativePath":"Center.md","filePath":"Center.md"}'),w={name:"Center.md"},z=Object.assign(w,{setup(a){return(t,e)=>{const d=b("MithrilDemo");return _(),g("div",null,[e[0]||(e[0]=h("",5)),C(d,{setup:u(T),code:u(v)},null,8,["setup","code"]),e[1]||(e[1]=h("",7))])}}});export{N as __pageData,z as default};
