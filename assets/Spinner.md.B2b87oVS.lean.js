import{m as e}from"./chunks/theme.BHMR1ScI.js";import{c as h}from"./chunks/Table.DpkFVNUa.js";import{C as u,o as m,c as q,a4 as a,E as P,k as i}from"./chunks/framework.DuWTyC0X.js";const z="_spinner_19hsq_2",f="_spin_19hsq_2",S="_sizeInherit_19hsq_22",g="_sizeXs_19hsq_28",b="_sizeSm_19hsq_34",y="_sizeMd_19hsq_40",x="_sizeLg_19hsq_46",T="_sizeXl_19hsq_52",k="_colorGray_19hsq_59",C="_colorRed_19hsq_63",I="_colorGreen_19hsq_67",v="_colorBlue_19hsq_71",A="_colorOrange_19hsq_75",O="_colorTeal_19hsq_79",D="_colorPurple_19hsq_83",N="_colorPink_19hsq_87",R="_colorCyan_19hsq_91",w="_colorYellow_19hsq_95",G="_srOnly_19hsq_100",n={spinner:z,spin:f,sizeInherit:S,sizeXs:g,sizeSm:b,sizeMd:y,sizeLg:x,sizeXl:T,colorGray:k,colorRed:C,colorGreen:I,colorBlue:v,colorOrange:A,colorTeal:O,colorPurple:D,colorPink:N,colorCyan:R,colorYellow:w,srOnly:G};function c(o){return o.charAt(0).toUpperCase()+o.slice(1)}class s{view(l){const{size:t="md",colorPalette:r,label:d="読み込み中",class:_,...p}=l.attrs;return e("span",{...p,role:"status",class:h(n.spinner,n[`size${c(t)}`],r&&n[`color${c(r)}`],_)},e("span",{class:n.srOnly},d))}}function M(o){e.mount(o,{view(){return e("div",{style:{display:"flex",alignItems:"center",gap:"16px"}},e(s,{size:"sm"}),e(s,{size:"md",colorPalette:"blue"}),e(s,{size:"lg",colorPalette:"green"}),e("span",{style:{color:"#475569"}},"処理状態のフィードバックに使います。"))}})}const V=`/** @jsx m */\r
import m from "mithril";\r
import { Spinner } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div style={{ display: "flex", alignItems: "center", gap: "16px" }}>\r
					<Spinner size="sm" />\r
					<Spinner size="md" colorPalette="blue" />\r
					<Spinner size="lg" colorPalette="green" />\r
					<span style={{ color: "#475569" }}>処理状態のフィードバックに使います。</span>\r
				</div>\r
			);\r
		},\r
	});\r
}`,U=JSON.parse('{"title":"Spinner","description":"","frontmatter":{},"headers":[],"relativePath":"Spinner.md","filePath":"Spinner.md","lastUpdated":1776646114000}'),X={name:"Spinner.md"},Y=Object.assign(X,{setup(o){return(l,t)=>{const r=u("MithrilDemo");return m(),q("div",null,[t[0]||(t[0]=a("",5)),P(r,{setup:i(M),code:i(V)},null,8,["setup","code"]),t[1]||(t[1]=a("",3))])}}});export{U as __pageData,Y as default};
