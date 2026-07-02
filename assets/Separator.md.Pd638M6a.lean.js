import{m as e}from"./chunks/theme.DVqxVbXL.js";import{c as v}from"./chunks/Table.BP7XEx9l.js";import{C as g,o as b,c as S,a4 as i,E as f,k as u}from"./chunks/framework.DuWTyC0X.js";const z="_separator_g6vdu_2",P="_horizontal_g6vdu_9",x="_vertical_g6vdu_15",y="_sizeXs_g6vdu_22",D="_sizeSm_g6vdu_29",T="_sizeMd_g6vdu_36",I="_sizeLg_g6vdu_43",k="_variantSolid_g6vdu_51",L="_variantDashed_g6vdu_58",A="_variantDotted_g6vdu_65",C="_hasLabel_g6vdu_73",E="_label_g6vdu_84",N="_labelStart_g6vdu_91",V="_labelEnd_g6vdu_95",M="_colorPrimary_g6vdu_101",R="_colorSecondary_g6vdu_105",w="_colorSuccess_g6vdu_109",U="_colorWarning_g6vdu_113",$="_colorDanger_g6vdu_117",B="_colorInfo_g6vdu_121",t={separator:z,horizontal:P,vertical:x,sizeXs:y,sizeSm:D,sizeMd:T,sizeLg:I,variantSolid:k,variantDashed:L,variantDotted:A,hasLabel:C,label:E,labelStart:N,labelEnd:V,colorPrimary:M,colorSecondary:R,colorSuccess:w,colorWarning:U,colorDanger:$,colorInfo:B};function d(o){return o.charAt(0).toUpperCase()+o.slice(1)}class _{view(s){const{variant:a="solid",size:n="sm",orientation:l="horizontal",label:r,labelPlacement:p="center",color:c,class:h,...m}=s.attrs,q=l==="vertical";return e("div",{...m,role:"separator","aria-orientation":l,class:v(t.separator,q?t.vertical:t.horizontal,t[`variant${d(a)}`],t[`size${d(n)}`],c&&t[`color${d(c)}`],r&&t.hasLabel,r&&t[`label${d(p)}`],h)},r&&e("span",{class:t.label},r))}}function W(o){e.mount(o,{view(){return e("div",{style:{display:"grid",gap:"18px"}},e(_,{label:"Section",labelPlacement:"center"}),e("div",{style:{display:"flex",alignItems:"center",gap:"14px",height:"36px"}},e("span",null,"Left"),e(_,{orientation:"vertical",size:"md"}),e("span",null,"Right")))}})}const X=`/** @jsx m */\r
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
}`,F=JSON.parse('{"title":"Separator","description":"","frontmatter":{},"headers":[],"relativePath":"Separator.md","filePath":"Separator.md","lastUpdated":1781499621000}'),j={name:"Separator.md"},G=Object.assign(j,{setup(o){return(s,a)=>{const n=g("MithrilDemo");return b(),S("div",null,[a[0]||(a[0]=i("",5)),f(n,{setup:u(W),code:u(X)},null,8,["setup","code"]),a[1]||(a[1]=i("",3))])}}});export{F as __pageData,G as default};
