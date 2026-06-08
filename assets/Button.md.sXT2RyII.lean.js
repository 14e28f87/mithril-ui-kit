import{m as t}from"./chunks/theme.CfoDaTyb.js";import"./chunks/Table.DljJUTvN.js";import{B as o,a as u}from"./chunks/Button.CWETKnT1.js";import{C as c,o as i,c as l,a4 as r,E as s,k as a}from"./chunks/framework.DuWTyC0X.js";import"./chunks/Button.module.DCnvx4sK.js";function p(e){t.mount(e,{view(){return t("div",{style:{display:"grid",gap:"16px"}},t("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap"}},t(o,{variant:"solid",colorPalette:"blue"},"Save"),t(o,{variant:"outline"},"Preview"),t(o,{variant:"subtle",colorPalette:"green"},"Run"),t(o,{loading:!0,loadingText:"Sending"},"Submit")),t(u,{attached:!0},t(o,{variant:"outline"},"Day"),t(o,{variant:"outline"},"Week"),t(o,{variant:"outline"},"Month")))}})}const h=`/** @jsx m */\r
import m from "mithril";\r
import { Button, ButtonGroup } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div style={{ display: "grid", gap: "16px" }}>\r
					<div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>\r
						<Button variant="solid" colorPalette="blue">Save</Button>\r
						<Button variant="outline">Preview</Button>\r
						<Button variant="subtle" colorPalette="green">Run</Button>\r
						<Button loading={true} loadingText="Sending">Submit</Button>\r
					</div>\r
					<ButtonGroup attached={true}>\r
						<Button variant="outline">Day</Button>\r
						<Button variant="outline">Week</Button>\r
						<Button variant="outline">Month</Button>\r
					</ButtonGroup>\r
				</div>\r
			);\r
		},\r
	});\r
}`,v=JSON.parse('{"title":"Button","description":"","frontmatter":{},"headers":[],"relativePath":"Button.md","filePath":"Button.md","lastUpdated":1776646114000}'),q={name:"Button.md"},x=Object.assign(q,{setup(e){return(m,d)=>{const n=c("MithrilDemo");return i(),l("div",null,[d[0]||(d[0]=r("",5)),s(n,{setup:a(p),code:a(h)},null,8,["setup","code"]),d[1]||(d[1]=r("",5))])}}});export{v as __pageData,x as default};
