import{m as e}from"./chunks/theme.BXbJ2X8L.js";import{c as q}from"./chunks/Table.Dq6qlMER.js";import{C as b,o as v,c as S,ai as c,E as g,k as p}from"./chunks/framework.Bm_aoSIc.js";const z="_separator_afk1f_2",k="_horizontal_afk1f_9",P="_vertical_afk1f_15",x="_sizeXs_afk1f_22",T="_sizeSm_afk1f_29",D="_sizeMd_afk1f_36",y="_sizeLg_afk1f_43",C="_variantSolid_afk1f_51",L="_variantDashed_afk1f_58",A="_variantDotted_afk1f_65",E="_hasLabel_afk1f_73",I="_label_afk1f_84",N="_labelStart_afk1f_91",V="_labelEnd_afk1f_95",t={separator:z,horizontal:k,vertical:P,sizeXs:x,sizeSm:T,sizeMd:D,sizeLg:y,variantSolid:C,variantDashed:L,variantDotted:A,hasLabel:E,label:I,labelStart:N,labelEnd:V};function d(a){return a.charAt(0).toUpperCase()+a.slice(1)}class _{view(i){const{variant:o="solid",size:n="sm",orientation:s="horizontal",label:r,labelPlacement:u="center",colorPalette:l,class:h,...f}=i.attrs,m=s==="vertical";return e("div",{...f,role:"separator","aria-orientation":s,class:q(t.separator,m?t.vertical:t.horizontal,t[`variant${d(o)}`],t[`size${d(n)}`],l&&t[`color${d(l)}`],r&&t.hasLabel,r&&t[`label${d(u)}`],h)},r&&e("span",{class:t.label},r))}}function M(a){e.mount(a,{view(){return e("div",{style:{display:"grid",gap:"18px"}},e(_,{label:"Section",labelPlacement:"center"}),e("div",{style:{display:"flex",alignItems:"center",gap:"14px",height:"36px"}},e("span",null,"Left"),e(_,{orientation:"vertical",size:"md"}),e("span",null,"Right")))}})}const R=`/** @jsx m */\r
import m from "mithril";\r
import { Separator } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div style={{ display: "grid", gap: "18px" }}>\r
					<Separator label="Section" labelPlacement="center" />\r
					<div style={{ display: "flex", alignItems: "center", gap: "14px", height: "36px" }}>\r
						<span>Left</span>\r
						<Separator orientation="vertical" size="md" />\r
						<span>Right</span>\r
					</div>\r
				</div>\r
			);\r
		},\r
	});\r
}`,j=JSON.parse('{"title":"Separator","description":"","frontmatter":{},"headers":[],"relativePath":"Separator.md","filePath":"Separator.md"}'),$={name:"Separator.md"},B=Object.assign($,{setup(a){return(i,o)=>{const n=b("MithrilDemo");return v(),S("div",null,[o[0]||(o[0]=c("",5)),g(n,{setup:p(M),code:p(R)},null,8,["setup","code"]),o[1]||(o[1]=c("",3))])}}});export{j as __pageData,B as default};
