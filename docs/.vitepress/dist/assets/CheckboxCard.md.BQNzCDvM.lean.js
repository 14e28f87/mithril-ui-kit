import{m as t}from"./chunks/theme.XnzwSjk8.js";import{e}from"./chunks/Table.B_fZamCg.js";import{C as i,o as l,c as s,ai as c,E as C,k as n}from"./chunks/framework.Bm_aoSIc.js";let d=!0;function b(r){t.mount(r,{view(){return t("div",{style:{display:"grid",gap:"12px",maxWidth:"420px"}},t(e.Root,{checked:d,onCheckedChange:a=>{d=a}},t(e.Control,null,t(e.Content,null,t(e.Label,null,"通知を有効にする"),t(e.Description,null,"WebSocket の状態変化をトーストで表示します。")),t(e.Indicator,null))),t("div",{style:{color:"#475569",fontSize:"0.9rem"}},"Checked: ",d?"true":"false"))}})}const u=`/** @jsx m */\r
import m from "mithril";\r
import { CheckboxCard } from "mithril-ui-kit";\r
\r
let checked = true;\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div style={{ display: "grid", gap: "12px", maxWidth: "420px" }}>\r
					<CheckboxCard.Root checked={checked} onCheckedChange={(next) => { checked = next; }}>\r
						<CheckboxCard.Control>\r
							<CheckboxCard.Content>\r
								<CheckboxCard.Label>通知を有効にする</CheckboxCard.Label>\r
								<CheckboxCard.Description>WebSocket の状態変化をトーストで表示します。</CheckboxCard.Description>\r
							</CheckboxCard.Content>\r
							<CheckboxCard.Indicator />\r
						</CheckboxCard.Control>\r
					</CheckboxCard.Root>\r
					<div style={{ color: "#475569", fontSize: "0.9rem" }}>Checked: {checked ? "true" : "false"}</div>\r
				</div>\r
			);\r
		},\r
	});\r
}`,_=JSON.parse('{"title":"CheckboxCard","description":"","frontmatter":{},"headers":[],"relativePath":"CheckboxCard.md","filePath":"CheckboxCard.md"}'),k={name:"CheckboxCard.md"},f=Object.assign(k,{setup(r){return(a,o)=>{const h=i("MithrilDemo");return l(),s("div",null,[o[0]||(o[0]=c("",5)),C(h,{setup:n(b),code:n(u)},null,8,["setup","code"]),o[1]||(o[1]=c("",5))])}}});export{_ as __pageData,f as default};
