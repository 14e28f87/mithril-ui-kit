import{m as t}from"./chunks/theme.BXbJ2X8L.js";import{N as o}from"./chunks/Table.Dq6qlMER.js";import{C as c,o as u,c as s,ai as r,E as h,k as i}from"./chunks/framework.Bm_aoSIc.js";let a="auto";function p(n){t.mount(n,{view(){return t("div",{style:{display:"grid",gap:"10px",maxWidth:"280px"}},t(o.Root,null,t(o.Field,{value:a,onchange:d=>{a=d.target.value}},t("option",{value:"auto"},"Auto"),t("option",{value:"manual"},"Manual"),t("option",{value:"maintenance"},"Maintenance")),t(o.Indicator,null)),t("div",{style:{color:"#475569",fontSize:"0.9rem"}},"Current mode: ",a))}})}const m=`/** @jsx m */\r
import m from "mithril";\r
import { NativeSelect } from "mithril-ui-kit";\r
\r
let value = "auto";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div style={{ display: "grid", gap: "10px", maxWidth: "280px" }}>\r
					<NativeSelect.Root>\r
						<NativeSelect.Field value={value} onchange={(event: Event) => { value = (event.target as HTMLSelectElement).value; }}>\r
							<option value="auto">Auto</option>\r
							<option value="manual">Manual</option>\r
							<option value="maintenance">Maintenance</option>\r
						</NativeSelect.Field>\r
						<NativeSelect.Indicator />\r
					</NativeSelect.Root>\r
					<div style={{ color: "#475569", fontSize: "0.9rem" }}>Current mode: {value}</div>\r
				</div>\r
			);\r
		},\r
	});\r
}`,S=JSON.parse('{"title":"NativeSelect","description":"","frontmatter":{},"headers":[],"relativePath":"NativeSelect.md","filePath":"NativeSelect.md"}'),v={name:"NativeSelect.md"},f=Object.assign(v,{setup(n){return(d,e)=>{const l=c("MithrilDemo");return u(),s("div",null,[e[0]||(e[0]=r("",5)),h(l,{setup:i(p),code:i(m)},null,8,["setup","code"]),e[1]||(e[1]=r("",5))])}}});export{S as __pageData,f as default};
