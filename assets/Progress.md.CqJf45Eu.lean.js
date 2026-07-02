import{m as t}from"./chunks/theme.DVqxVbXL.js";import{P as e}from"./chunks/Table.BP7XEx9l.js";import{C as c,o as n,c as u,a4 as d,E as l,k as a}from"./chunks/framework.DuWTyC0X.js";function i(r){t.mount(r,{view(){return t(e.Root,{value:68,color:"success",striped:!0},t(e.Label,null,"Firing progress"),t(e.ValueText,null),t(e.Track,null,t(e.Range,null)))}})}const h=`/** @jsx m */\r
import m from "mithril";\r
import { Progress } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<Progress.Root value={68} color="success" striped={true}>\r
					<Progress.Label>Firing progress</Progress.Label>\r
					<Progress.ValueText />\r
					<Progress.Track>\r
						<Progress.Range />\r
					</Progress.Track>\r
				</Progress.Root>\r
			);\r
		},\r
	});\r
}`,b=JSON.parse('{"title":"Progress","description":"","frontmatter":{},"headers":[],"relativePath":"Progress.md","filePath":"Progress.md","lastUpdated":1781499621000}'),m={name:"Progress.md"},_=Object.assign(m,{setup(r){return(p,o)=>{const s=c("MithrilDemo");return n(),u("div",null,[o[0]||(o[0]=d("",5)),l(s,{setup:a(i),code:a(h)},null,8,["setup","code"]),o[1]||(o[1]=d("",5))])}}});export{b as __pageData,_ as default};
