import{m as t}from"./chunks/theme.DVqxVbXL.js";import{h as e}from"./chunks/Table.BP7XEx9l.js";import{C as l,o as c,c as s,a4 as d,E as i,k as r}from"./chunks/framework.DuWTyC0X.js";function u(a){t.mount(a,{view(){return t("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"}},t(e.Root,{variant:"solid",color:"primary"},t(e.StartElement,null,"🏷️"),t(e.Label,null,"Recipe A")),t(e.Root,{variant:"subtle",color:"success",closable:!0},t(e.Label,null,"Completed")))}})}const p=`/** @jsx m */\r
import m from "mithril";\r
import { Tag } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>\r
					<Tag.Root variant="solid" color="primary">\r
						<Tag.StartElement>🏷️</Tag.StartElement>\r
						<Tag.Label>Recipe A</Tag.Label>\r
					</Tag.Root>\r
					<Tag.Root variant="subtle" color="success" closable={true}>\r
						<Tag.Label>Completed</Tag.Label>\r
					</Tag.Root>\r
				</div>\r
			);\r
		},\r
	});\r
}`,T=JSON.parse('{"title":"Tag","description":"","frontmatter":{},"headers":[],"relativePath":"Tag.md","filePath":"Tag.md","lastUpdated":1781499621000}'),h={name:"Tag.md"},_=Object.assign(h,{setup(a){return(m,o)=>{const n=l("MithrilDemo");return c(),s("div",null,[o[0]||(o[0]=d("",5)),i(n,{setup:r(u),code:r(p)},null,8,["setup","code"]),o[1]||(o[1]=d("",5))])}}});export{T as __pageData,_ as default};
