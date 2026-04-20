import{m as e}from"./chunks/theme.MeAZuU5r.js";import{c as C}from"./chunks/Table.BlGpiJ_h.js";import{C as b,o as x,c as y,ai as s,E as v,k as l}from"./chunks/framework.DYURIDHw.js";const P="_container_1ifog_1",k="_fluid_1ifog_9",q="_centerContent_1ifog_13",i={container:P,fluid:k,centerContent:q};class T{view(r){const{maxWidth:t,centerContent:d,fluid:c,as:f="div",class:p,style:n,...u}=r.attrs,a={};t&&!c&&(a.maxWidth=t);const h=typeof n=="string"?`${Object.entries(a).map(([m,_])=>`${m.replace(/[A-Z]/g,g=>`-${g.toLowerCase()}`)}:${_}`).join(";")}${n?`;${n}`:""}`:{...a,...n||{}};return e(f,{...u,class:C(i.container,c&&i.fluid,d&&i.centerContent,p),style:h},r.children)}}function S(o){e.mount(o,{view(){return e("div",{style:{background:"#f8fafc",padding:"16px",borderRadius:"16px"}},e(T,{maxWidth:"520px",style:{background:"#ffffff",borderRadius:"14px",padding:"16px"}},e("div",{style:{fontWeight:"700",marginBottom:"8px"}},"Constrained content"),e("div",{style:{color:"#475569"}},"Container は本文やフォームなどの最大幅を一定に保ち、広い画面でも読みやすさを維持します。")))}})}const A=`/** @jsx m */\r
import m from "mithril";\r
import { Container } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div style={{ background: "#f8fafc", padding: "16px", borderRadius: "16px" }}>\r
					<Container maxWidth="520px" style={{ background: "#ffffff", borderRadius: "14px", padding: "16px" }}>\r
						<div style={{ fontWeight: "700", marginBottom: "8px" }}>Constrained content</div>\r
						<div style={{ color: "#475569" }}>\r
							Container は本文やフォームなどの最大幅を一定に保ち、広い画面でも読みやすさを維持します。\r
						</div>\r
					</Container>\r
				</div>\r
			);\r
		},\r
	});\r
}`,I=JSON.parse('{"title":"Container","description":"","frontmatter":{},"headers":[],"relativePath":"Container.md","filePath":"Container.md"}'),R={name:"Container.md"},V=Object.assign(R,{setup(o){return(r,t)=>{const d=b("MithrilDemo");return x(),y("div",null,[t[0]||(t[0]=s("",5)),v(d,{setup:l(S),code:l(A)},null,8,["setup","code"]),t[1]||(t[1]=s("",3))])}}});export{I as __pageData,V as default};
