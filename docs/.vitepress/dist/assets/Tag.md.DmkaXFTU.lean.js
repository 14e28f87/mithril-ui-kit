import{m as t}from"./chunks/theme.D5gNcpBr.js";import{t as e}from"./chunks/Table.A5W0Ssaz.js";import{C as n,o as c,c as i,ai as d,E as s,k as r}from"./chunks/framework.Bm_aoSIc.js";function u(a){t.mount(a,{view(){return t("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"}},t(e.Root,{variant:"solid",colorPalette:"blue"},t(e.StartElement,null,"🏷️"),t(e.Label,null,"Recipe A")),t(e.Root,{variant:"subtle",colorPalette:"green",closable:!0},t(e.Label,null,"Completed")))}})}const h=`/** @jsx m */\r
import m from "mithril";\r
import { Tag } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>\r
					<Tag.Root variant="solid" colorPalette="blue">\r
						<Tag.StartElement>🏷️</Tag.StartElement>\r
						<Tag.Label>Recipe A</Tag.Label>\r
					</Tag.Root>\r
					<Tag.Root variant="subtle" colorPalette="green" closable={true}>\r
						<Tag.Label>Completed</Tag.Label>\r
					</Tag.Root>\r
				</div>\r
			);\r
		},\r
	});\r
}`,q=JSON.parse('{"title":"Tag","description":"","frontmatter":{},"headers":[],"relativePath":"Tag.md","filePath":"Tag.md"}'),p={name:"Tag.md"},_=Object.assign(p,{setup(a){return(m,o)=>{const l=n("MithrilDemo");return c(),i("div",null,[o[0]||(o[0]=d("",5)),s(l,{setup:r(u),code:r(h)},null,8,["setup","code"]),o[1]||(o[1]=d("",5))])}}});export{q as __pageData,_ as default};
