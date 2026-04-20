import{m as t}from"./chunks/theme.CIfTaYq1.js";import{H as o}from"./chunks/Table.B255pMpr.js";import{C as i,o as c,c as s,ai as d,E as l,k as a}from"./chunks/framework.Bm_aoSIc.js";function u(r){t.mount(r,{view(){return t(o.Root,{openDelay:150,closeDelay:120},t(o.Trigger,null,t("span",{style:{color:"#2563eb",fontWeight:"600",cursor:"default"}},"Hover sensor S-12")),t(o.Content,null,t("div",{style:{display:"grid",gap:"6px",minWidth:"220px"}},t("div",{style:{fontWeight:"700"}},"Sensor S-12"),t("div",null,"Temperature: 812℃"),t("div",null,"Last update: 1 sec ago"))))}})}const h=`/** @jsx m */\r
import m from "mithril";\r
import { HoverCard } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<HoverCard.Root openDelay={150} closeDelay={120}>\r
					<HoverCard.Trigger>\r
						<span style={{ color: "#2563eb", fontWeight: "600", cursor: "default" }}>Hover sensor S-12</span>\r
					</HoverCard.Trigger>\r
					<HoverCard.Content>\r
						<div style={{ display: "grid", gap: "6px", minWidth: "220px" }}>\r
							<div style={{ fontWeight: "700" }}>Sensor S-12</div>\r
							<div>Temperature: 812℃</div>\r
							<div>Last update: 1 sec ago</div>\r
						</div>\r
					</HoverCard.Content>\r
				</HoverCard.Root>\r
			);\r
		},\r
	});\r
}`,C=JSON.parse('{"title":"HoverCard","description":"","frontmatter":{},"headers":[],"relativePath":"HoverCard.md","filePath":"HoverCard.md"}'),p={name:"HoverCard.md"},_=Object.assign(p,{setup(r){return(m,e)=>{const n=i("MithrilDemo");return c(),s("div",null,[e[0]||(e[0]=d("",5)),l(n,{setup:a(u),code:a(h)},null,8,["setup","code"]),e[1]||(e[1]=d("",5))])}}});export{C as __pageData,_ as default};
