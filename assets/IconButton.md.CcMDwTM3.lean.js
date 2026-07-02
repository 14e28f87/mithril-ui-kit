import{m as t}from"./chunks/theme.DVqxVbXL.js";import{c as f}from"./chunks/Table.BP7XEx9l.js";import{s as o}from"./chunks/Button.module.DDCwNdEl.js";import{C as _,o as I,c as g,a4 as p,E as B,k as h}from"./chunks/framework.DuWTyC0X.js";function r(e){return e.charAt(0).toUpperCase()+e.slice(1)}class c{view(n){const{variant:a="solid",size:i="md",color:l,disabled:b,loading:d,rounded:s,class:m,...u}=n.attrs,q=b||d;return t("button",{...u,type:u.type||"button",disabled:q,"data-loading":d||void 0,class:f(o.button,o.iconButton,o[`variant${r(a)}`],o[`iconSize${r(i)}`],l&&o[`color${r(l)}`],s&&o[`rounded${r(s)}`],d&&o.loading,m)},d?t("span",{class:o.spinnerIcon}):n.children)}}function x(e){t.mount(e,{view(){return t("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"}},t(c,{"aria-label":"Search",variant:"outline"},t("i",{class:"bi bi-search"})),t(c,{"aria-label":"Settings",color:"primary"},t("i",{class:"bi bi-gear"})),t(c,{"aria-label":"Delete",variant:"subtle",color:"danger"},t("i",{class:"bi bi-trash"})))}})}const v=`/** @jsx m */\r
import m from "mithril";\r
import { IconButton } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>\r
					<IconButton aria-label="Search" variant="outline">\r
						<i class="bi bi-search" />\r
					</IconButton>\r
					<IconButton aria-label="Settings" color="primary">\r
						<i class="bi bi-gear" />\r
					</IconButton>\r
					<IconButton aria-label="Delete" variant="subtle" color="danger">\r
						<i class="bi bi-trash" />\r
					</IconButton>\r
				</div>\r
			);\r
		},\r
	});\r
}`,D=JSON.parse('{"title":"IconButton","description":"","frontmatter":{},"headers":[],"relativePath":"IconButton.md","filePath":"IconButton.md","lastUpdated":1781499621000}'),P={name:"IconButton.md"},A=Object.assign(P,{setup(e){return(n,a)=>{const i=_("MithrilDemo");return I(),g("div",null,[a[0]||(a[0]=p("",5)),B(i,{setup:h(x),code:h(v)},null,8,["setup","code"]),a[1]||(a[1]=p("",5))])}}});export{D as __pageData,A as default};
