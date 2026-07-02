import{m as t}from"./chunks/theme.DVqxVbXL.js";import{c as g}from"./chunks/Table.BP7XEx9l.js";import{C as m,o as p,c as h,a4 as l,E as q,k as c}from"./chunks/framework.DuWTyC0X.js";const f="_badge_14tkl_2",b="_sizeXs_14tkl_19",v="_sizeSm_14tkl_25",k="_sizeMd_14tkl_31",S="_sizeLg_14tkl_37",P="_variantSolid_14tkl_44",B="_variantSubtle_14tkl_49",x="_variantOutline_14tkl_54",y="_variantSurface_14tkl_60",z="_variantPlain_14tkl_66",T="_colorPrimary_14tkl_73",D="_colorSecondary_14tkl_80",A="_colorSuccess_14tkl_87",C="_colorWarning_14tkl_94",I="_colorDanger_14tkl_101",w="_colorInfo_14tkl_108",o={badge:f,sizeXs:b,sizeSm:v,sizeMd:k,sizeLg:S,variantSolid:P,variantSubtle:B,variantOutline:x,variantSurface:y,variantPlain:z,colorPrimary:T,colorSecondary:D,colorSuccess:A,colorWarning:C,colorDanger:I,colorInfo:w};function d(a){return a.charAt(0).toUpperCase()+a.slice(1)}class r{view(n){const{variant:e="subtle",size:i="sm",color:s,class:u,..._}=n.attrs;return t("span",{..._,class:g(o.badge,o[`variant${d(e)}`],o[`size${d(i)}`],s&&o[`color${d(s)}`],u)},n.children)}}function N(a){t.mount(a,{view(){return t("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap"}},t(r,{variant:"solid",color:"success"},"Online"),t(r,{variant:"subtle",color:"primary"},"Draft"),t(r,{variant:"outline",color:"warning"},"Pending"),t(r,{variant:"surface",color:"danger"},"Alarm"))}})}const O=`/** @jsx m */\r
import m from "mithril";\r
import { Badge } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>\r
					<Badge variant="solid" color="success">Online</Badge>\r
					<Badge variant="subtle" color="primary">Draft</Badge>\r
					<Badge variant="outline" color="warning">Pending</Badge>\r
					<Badge variant="surface" color="danger">Alarm</Badge>\r
				</div>\r
			);\r
		},\r
	});\r
}`,L=JSON.parse('{"title":"Badge","description":"","frontmatter":{},"headers":[],"relativePath":"Badge.md","filePath":"Badge.md","lastUpdated":1781499621000}'),M={name:"Badge.md"},R=Object.assign(M,{setup(a){return(n,e)=>{const i=m("MithrilDemo");return p(),h("div",null,[e[0]||(e[0]=l("",5)),q(i,{setup:c(N),code:c(O)},null,8,["setup","code"]),e[1]||(e[1]=l("",3))])}}});export{L as __pageData,R as default};
