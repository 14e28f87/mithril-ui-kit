import{m as e}from"./chunks/theme.MeAZuU5r.js";import{c as p}from"./chunks/Table.BlGpiJ_h.js";import{C as q,o as g,c as m,ai as c,E as h,k as s}from"./chunks/framework.DYURIDHw.js";const P="_badge_eydpq_2",b="_sizeXs_eydpq_19",f="_sizeSm_eydpq_25",v="_sizeMd_eydpq_31",y="_sizeLg_eydpq_37",B="_variantSolid_eydpq_44",S="_variantSubtle_eydpq_49",x="_variantOutline_eydpq_54",T="_variantSurface_eydpq_60",z="_variantPlain_eydpq_66",k="_colorGray_eydpq_72",C="_colorRed_eydpq_79",A="_colorGreen_eydpq_86",O="_colorBlue_eydpq_93",D="_colorOrange_eydpq_100",w="_colorTeal_eydpq_107",N="_colorPurple_eydpq_114",R="_colorPink_eydpq_121",G="_colorCyan_eydpq_128",I="_colorYellow_eydpq_135",a={badge:P,sizeXs:b,sizeSm:f,sizeMd:v,sizeLg:y,variantSolid:B,variantSubtle:S,variantOutline:x,variantSurface:T,variantPlain:z,colorGray:k,colorRed:C,colorGreen:A,colorBlue:O,colorOrange:D,colorTeal:w,colorPurple:N,colorPink:R,colorCyan:G,colorYellow:I};function d(t){return t.charAt(0).toUpperCase()+t.slice(1)}class r{view(l){const{variant:o="subtle",size:n="sm",colorPalette:i,class:_,...u}=l.attrs;return e("span",{...u,class:p(a.badge,a[`variant${d(o)}`],a[`size${d(n)}`],i&&a[`color${d(i)}`],_)},l.children)}}function M(t){e.mount(t,{view(){return e("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap"}},e(r,{variant:"solid",colorPalette:"green"},"Online"),e(r,{variant:"subtle",colorPalette:"blue"},"Draft"),e(r,{variant:"outline",colorPalette:"orange"},"Pending"),e(r,{variant:"surface",colorPalette:"red"},"Alarm"))}})}const V=`/** @jsx m */\r
import m from "mithril";\r
import { Badge } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>\r
					<Badge variant="solid" colorPalette="green">Online</Badge>\r
					<Badge variant="subtle" colorPalette="blue">Draft</Badge>\r
					<Badge variant="outline" colorPalette="orange">Pending</Badge>\r
					<Badge variant="surface" colorPalette="red">Alarm</Badge>\r
				</div>\r
			);\r
		},\r
	});\r
}`,Y=JSON.parse('{"title":"Badge","description":"","frontmatter":{},"headers":[],"relativePath":"Badge.md","filePath":"Badge.md"}'),E={name:"Badge.md"},$=Object.assign(E,{setup(t){return(l,o)=>{const n=q("MithrilDemo");return g(),m("div",null,[o[0]||(o[0]=c("",5)),h(n,{setup:s(M),code:s(V)},null,8,["setup","code"]),o[1]||(o[1]=c("",3))])}}});export{Y as __pageData,$ as default};
