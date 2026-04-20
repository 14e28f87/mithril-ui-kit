import{m as t}from"./chunks/theme.XnzwSjk8.js";import{S as e}from"./chunks/Table.B_fZamCg.js";import{C as m,o as s,c,ai as a,E as u,k as l}from"./chunks/framework.Bm_aoSIc.js";let d="overview";function h(r){t.mount(r,{view(){return t("div",{style:{display:"grid",gap:"10px"}},t(e.Root,{value:d,onValueChange:n=>{d=n}},t(e.Item,{value:"overview"},t(e.ItemText,null,"Overview")),t(e.Item,{value:"history"},t(e.ItemText,null,"History")),t(e.Item,{value:"settings"},t(e.ItemText,null,"Settings"))),t("div",{style:{color:"#475569",fontSize:"0.9rem"}},"Current tab: ",d))}})}const g=`/** @jsx m */\r
import m from "mithril";\r
import { SegmentedControl } from "mithril-ui-kit";\r
\r
let value = "overview";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div style={{ display: "grid", gap: "10px" }}>\r
					<SegmentedControl.Root value={value} onValueChange={(next) => { value = next; }}>\r
						<SegmentedControl.Item value="overview">\r
							<SegmentedControl.ItemText>Overview</SegmentedControl.ItemText>\r
						</SegmentedControl.Item>\r
						<SegmentedControl.Item value="history">\r
							<SegmentedControl.ItemText>History</SegmentedControl.ItemText>\r
						</SegmentedControl.Item>\r
						<SegmentedControl.Item value="settings">\r
							<SegmentedControl.ItemText>Settings</SegmentedControl.ItemText>\r
						</SegmentedControl.Item>\r
					</SegmentedControl.Root>\r
					<div style={{ color: "#475569", fontSize: "0.9rem" }}>Current tab: {value}</div>\r
				</div>\r
			);\r
		},\r
	});\r
}`,v=JSON.parse('{"title":"SegmentedControl","description":"","frontmatter":{},"headers":[],"relativePath":"SegmentedControl.md","filePath":"SegmentedControl.md"}'),p={name:"SegmentedControl.md"},_=Object.assign(p,{setup(r){return(n,o)=>{const i=m("MithrilDemo");return s(),c("div",null,[o[0]||(o[0]=a("",5)),u(i,{setup:l(h),code:l(g)},null,8,["setup","code"]),o[1]||(o[1]=a("",7))])}}});export{v as __pageData,_ as default};
