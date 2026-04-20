import{m as e}from"./chunks/theme.XnzwSjk8.js";import{m as t}from"./chunks/Table.B_fZamCg.js";import{C as l,o as s,c as i,ai as d,E as n,k as a}from"./chunks/framework.Bm_aoSIc.js";function u(o){e.mount(o,{view(){return e("div",{style:{display:"flex",gap:"20px",alignItems:"center"}},e(t.Root,{value:82,size:"lg",colorPalette:"green"},e(t.Circle,null,e(t.Track,null),e(t.Range,null)),e(t.ValueText,null)),e("div",{style:{color:"#475569"}},"Cycle complete"))}})}const h=`/** @jsx m */\r
import m from "mithril";\r
import { ProgressCircle } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div style={{ display: "flex", gap: "20px", alignItems: "center" }}>\r
					<ProgressCircle.Root value={82} size="lg" colorPalette="green">\r
						<ProgressCircle.Circle>\r
							<ProgressCircle.Track />\r
							<ProgressCircle.Range />\r
						</ProgressCircle.Circle>\r
						<ProgressCircle.ValueText />\r
					</ProgressCircle.Root>\r
					<div style={{ color: "#475569" }}>Cycle complete</div>\r
				</div>\r
			);\r
		},\r
	});\r
}`,b=JSON.parse('{"title":"ProgressCircle","description":"","frontmatter":{},"headers":[],"relativePath":"ProgressCircle.md","filePath":"ProgressCircle.md"}'),m={name:"ProgressCircle.md"},_=Object.assign(m,{setup(o){return(p,r)=>{const c=l("MithrilDemo");return s(),i("div",null,[r[0]||(r[0]=d("",5)),n(c,{setup:a(u),code:a(h)},null,8,["setup","code"]),r[1]||(r[1]=d("",5))])}}});export{b as __pageData,_ as default};
