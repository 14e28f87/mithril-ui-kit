import{m as t}from"./chunks/theme.CIfTaYq1.js";import{p as r}from"./chunks/Table.B255pMpr.js";import{C as l,o as u,c as i,ai as n,E as c,k as d}from"./chunks/framework.Bm_aoSIc.js";const p=[{value:"info",label:"Waiting"},{value:"warning",label:"Warning"},{value:"success",label:"Running"},{value:"error",label:"Stopped"}];function h(o){t.mount(o,{view(){return t("div",{style:{display:"grid",gap:"10px"}},p.map(e=>t(r.Root,{key:e.label,value:e.value},t(r.Indicator,null),t("span",{style:{marginLeft:"8px"}},e.label))))}})}const m=`/** @jsx m */\r
import m from "mithril";\r
import { Status } from "mithril-ui-kit";\r
\r
const rows = [\r
	{ value: "info", label: "Waiting" },\r
	{ value: "warning", label: "Warning" },\r
	{ value: "success", label: "Running" },\r
	{ value: "error", label: "Stopped" },\r
] as const;\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div style={{ display: "grid", gap: "10px" }}>\r
					{rows.map((row) => (\r
						<Status.Root key={row.label} value={row.value}>\r
							<Status.Indicator />\r
							<span style={{ marginLeft: "8px" }}>{row.label}</span>\r
						</Status.Root>\r
					))}\r
				</div>\r
			);\r
		},\r
	});\r
}`,S=JSON.parse('{"title":"Status","description":"","frontmatter":{},"headers":[],"relativePath":"Status.md","filePath":"Status.md"}'),b={name:"Status.md"},g=Object.assign(b,{setup(o){return(e,a)=>{const s=l("MithrilDemo");return u(),i("div",null,[a[0]||(a[0]=n("",5)),c(s,{setup:d(h),code:d(m)},null,8,["setup","code"]),a[1]||(a[1]=n("",5))])}}});export{S as __pageData,g as default};
