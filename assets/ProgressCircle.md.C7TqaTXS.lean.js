import{m as e}from"./chunks/theme.DVqxVbXL.js";import{d as t}from"./chunks/Table.BP7XEx9l.js";import{C as s,o as l,c as i,a4 as d,E as n,k as a}from"./chunks/framework.DuWTyC0X.js";function u(o){e.mount(o,{view(){return e("div",{style:{display:"flex",gap:"20px",alignItems:"center"}},e(t.Root,{value:82,size:"lg",color:"success"},e(t.Circle,null,e(t.Track,null),e(t.Range,null)),e(t.ValueText,null)),e("div",{style:{color:"#475569"}},"Cycle complete"))}})}const m=`/** @jsx m */\r
import m from "mithril";\r
import { ProgressCircle } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div style={{ display: "flex", gap: "20px", alignItems: "center" }}>\r
					<ProgressCircle.Root value={82} size="lg" color="success">\r
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
}`,C=JSON.parse('{"title":"ProgressCircle","description":"","frontmatter":{},"headers":[],"relativePath":"ProgressCircle.md","filePath":"ProgressCircle.md","lastUpdated":1781499621000}'),h={name:"ProgressCircle.md"},_=Object.assign(h,{setup(o){return(p,r)=>{const c=s("MithrilDemo");return l(),i("div",null,[r[0]||(r[0]=d("",5)),n(c,{setup:a(u),code:a(m)},null,8,["setup","code"]),r[1]||(r[1]=d("",5))])}}});export{C as __pageData,_ as default};
