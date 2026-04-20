import{m as t}from"./chunks/theme.IYrj4rtN.js";import{c as _}from"./chunks/Table.BA6US4RP.js";import{s as e}from"./chunks/Button.module.DCnvx4sK.js";import{C as q,o as I,c as P,ai as b,E as B,k as h}from"./chunks/framework.Bm_aoSIc.js";function r(o){return o.charAt(0).toUpperCase()+o.slice(1)}class c{view(n){const{variant:a="solid",size:i="md",colorPalette:l,disabled:p,loading:d,rounded:s,class:m,...u}=n.attrs,f=p||d;return t("button",{...u,type:u.type||"button",disabled:f,"data-loading":d||void 0,class:_(e.button,e.iconButton,e[`variant${r(a)}`],e[`iconSize${r(i)}`],l&&e[`color${r(l)}`],s&&e[`rounded${r(s)}`],d&&e.loading,m)},d?t("span",{class:e.spinnerIcon}):n.children)}}function g(o){t.mount(o,{view(){return t("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"}},t(c,{"aria-label":"Search",variant:"outline"},t("i",{class:"bi bi-search"})),t(c,{"aria-label":"Settings",colorPalette:"blue"},t("i",{class:"bi bi-gear"})),t(c,{"aria-label":"Delete",variant:"subtle",colorPalette:"red"},t("i",{class:"bi bi-trash"})))}})}const x=`/** @jsx m */\r
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
					<IconButton aria-label="Settings" colorPalette="blue">\r
						<i class="bi bi-gear" />\r
					</IconButton>\r
					<IconButton aria-label="Delete" variant="subtle" colorPalette="red">\r
						<i class="bi bi-trash" />\r
					</IconButton>\r
				</div>\r
			);\r
		},\r
	});\r
}`,C=JSON.parse('{"title":"IconButton","description":"","frontmatter":{},"headers":[],"relativePath":"IconButton.md","filePath":"IconButton.md"}'),v={name:"IconButton.md"},D=Object.assign(v,{setup(o){return(n,a)=>{const i=q("MithrilDemo");return I(),P("div",null,[a[0]||(a[0]=b("",5)),B(i,{setup:h(g),code:h(x)},null,8,["setup","code"]),a[1]||(a[1]=b("",5))])}}});export{C as __pageData,D as default};
