import{m as t}from"./chunks/theme.4JftMPzn.js";import{C as e}from"./chunks/Table.BtqtxzWS.js";import{C as i,o as l,c,ai as o,E as s,k as a}from"./chunks/framework.Bm_aoSIc.js";function u(d){t.mount(d,{view(){return t(e.Root,{variant:"outline",size:"md"},t(e.Header,null,t(e.Title,null,"焼成バッチ #2416"),t(e.Description,null,"現在の進行状況と主要センサー値")),t(e.Body,null,t("div",{style:{display:"grid",gap:"8px"}},t("div",null,"Target: 850℃"),t("div",null,"Current: 812℃"),t("div",null,"Ramp: 2.0℃/min"))),t(e.Footer,null,t("div",{style:{color:"#475569"}},"Updated 10 sec ago")))}})}const h=`/** @jsx m */\r
import m from "mithril";\r
import { Card } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<Card.Root variant="outline" size="md">\r
					<Card.Header>\r
						<Card.Title>焼成バッチ #2416</Card.Title>\r
						<Card.Description>現在の進行状況と主要センサー値</Card.Description>\r
					</Card.Header>\r
					<Card.Body>\r
						<div style={{ display: "grid", gap: "8px" }}>\r
							<div>Target: 850℃</div>\r
							<div>Current: 812℃</div>\r
							<div>Ramp: 2.0℃/min</div>\r
						</div>\r
					</Card.Body>\r
					<Card.Footer>\r
						<div style={{ color: "#475569" }}>Updated 10 sec ago</div>\r
					</Card.Footer>\r
				</Card.Root>\r
			);\r
		},\r
	});\r
}`,q=JSON.parse('{"title":"Card","description":"","frontmatter":{},"headers":[],"relativePath":"Card.md","filePath":"Card.md"}'),p={name:"Card.md"},f=Object.assign(p,{setup(d){return(m,r)=>{const n=i("MithrilDemo");return l(),c("div",null,[r[0]||(r[0]=o("",5)),s(n,{setup:a(u),code:a(h)},null,8,["setup","code"]),r[1]||(r[1]=o("",5))])}}});export{q as __pageData,f as default};
