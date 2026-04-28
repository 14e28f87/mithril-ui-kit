import{m as r}from"./chunks/theme.BHMR1ScI.js";import{c as u}from"./chunks/Table.DpkFVNUa.js";import{C as _,o as m,c as z,a4 as i,E as q,k as n}from"./chunks/framework.DuWTyC0X.js";const x="_swatch_1v7zz_2",f="_rounded_1v7zz_22",w="_size2xs_1v7zz_27",S="_sizeXs_1v7zz_32",C="_sizeSm_1v7zz_37",b="_sizeMd_1v7zz_42",g="_sizeLg_1v7zz_47",v="_sizeXl_1v7zz_52",P="_size2xl_1v7zz_57",s={swatch:x,rounded:f,size2xs:w,sizeXs:S,sizeSm:C,sizeMd:b,sizeLg:g,sizeXl:v,size2xl:P};function y(t){return t.charAt(0).toUpperCase()+t.slice(1)}function p(t){return t.startsWith("2")?"size2"+t.slice(1):`size${y(t)}`}class T{view(e){const{value:o,size:a="md",rounded:d,class:c,...l}=e.attrs;return r("span",{...l,class:u(s.swatch,s[p(a)],{[s.rounded]:d},c),style:{"--swatch-color":o}},e.children)}}class k{view(e){const{colors:o,size:a="md",class:d,...c}=e.attrs,l=`linear-gradient(to right, ${o.join(", ")})`;return r("span",{...c,class:u(s.swatch,s[p(a)],d),style:{"--swatch-color":l}})}}const h=["#0ea5e9","#22c55e","#f59e0b","#ef4444"];function M(t){r.mount(t,{view(){return r("div",{style:{display:"flex",alignItems:"center",gap:"12px",flexWrap:"wrap"}},h.map(e=>r(T,{key:e,value:e,size:"lg",rounded:!0})),r(k,{colors:h,size:"xl"}))}})}const A=`/** @jsx m */\r
import m from "mithril";\r
import { ColorSwatch, ColorSwatchMix } from "mithril-ui-kit";\r
\r
const colors = ["#0ea5e9", "#22c55e", "#f59e0b", "#ef4444"];\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>\r
					{colors.map((color) => (\r
						<ColorSwatch key={color} value={color} size="lg" rounded={true} />\r
					))}\r
					<ColorSwatchMix colors={colors} size="xl" />\r
				</div>\r
			);\r
		},\r
	});\r
}`,X=JSON.parse('{"title":"ColorSwatch","description":"","frontmatter":{},"headers":[],"relativePath":"ColorSwatch.md","filePath":"ColorSwatch.md","lastUpdated":1776646114000}'),D={name:"ColorSwatch.md"},E=Object.assign(D,{setup(t){return(e,o)=>{const a=_("MithrilDemo");return m(),z("div",null,[o[0]||(o[0]=i("",5)),q(a,{setup:n(M),code:n(A)},null,8,["setup","code"]),o[1]||(o[1]=i("",5))])}}});export{X as __pageData,E as default};
