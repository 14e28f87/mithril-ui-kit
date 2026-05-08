import{m as t}from"./chunks/theme.C32Rvu8V.js";import{d as e}from"./chunks/Table.MsshMnDN.js";import{C as n,o as c,c as l,a4 as d,E as i,k as a}from"./chunks/framework.DuWTyC0X.js";function u(r){t.mount(r,{view(){return t(e.Root,{value:68,colorPalette:"green",striped:!0},t(e.Label,null,"Firing progress"),t(e.ValueText,null),t(e.Track,null,t(e.Range,null)))}})}const h=`/** @jsx m */\r
import m from "mithril";\r
import { Progress } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<Progress.Root value={68} colorPalette="green" striped={true}>\r
					<Progress.Label>Firing progress</Progress.Label>\r
					<Progress.ValueText />\r
					<Progress.Track>\r
						<Progress.Range />\r
					</Progress.Track>\r
				</Progress.Root>\r
			);\r
		},\r
	});\r
}`,q=JSON.parse('{"title":"Progress","description":"","frontmatter":{},"headers":[],"relativePath":"Progress.md","filePath":"Progress.md","lastUpdated":1776836643000}'),m={name:"Progress.md"},_=Object.assign(m,{setup(r){return(p,o)=>{const s=n("MithrilDemo");return c(),l("div",null,[o[0]||(o[0]=d("",5)),i(s,{setup:a(u),code:a(h)},null,8,["setup","code"]),o[1]||(o[1]=d("",5))])}}});export{q as __pageData,_ as default};
