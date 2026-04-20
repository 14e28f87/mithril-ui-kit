import{m as t}from"./chunks/theme.4JftMPzn.js";import{c as f}from"./chunks/Table.BtqtxzWS.js";import{s as o}from"./chunks/Button.module.DCnvx4sK.js";import{C as _,o as x,c as P,ai as b,E as y,k as g}from"./chunks/framework.Bm_aoSIc.js";function c(r){return r.charAt(0).toUpperCase()+r.slice(1)}class n{view(u){const{variant:e="solid",size:a="md",colorPalette:i,disabled:s,loading:d,loadingText:l,spinnerPlacement:p="start",rounded:h,as:q="button",class:v,...m}=u.attrs,B=s||d;return t(q,{...m,type:q==="button"?m.type||"button":void 0,disabled:B,"data-loading":d||void 0,class:f(o.button,o[`variant${c(e)}`],o[`size${c(a)}`],i&&o[`color${c(i)}`],h&&o[`rounded${c(h)}`],d&&o.loading,v)},[d&&p==="start"&&t("span",{class:o.spinner},t("span",{class:o.spinnerIcon})),d&&l?l:u.children,d&&p==="end"&&t("span",{class:o.spinner},t("span",{class:o.spinnerIcon}))])}}class T{view(u){const{attached:e,gap:a,class:i,...s}=u.attrs,d={};return a!==void 0&&!e&&(d.gap=typeof a=="number"?`${a}px`:a),t("div",{...s,class:f(o.buttonGroup,e&&o.groupAttached,i),style:d,role:"group"},u.children)}}function S(r){t.mount(r,{view(){return t("div",{style:{display:"grid",gap:"16px"}},t("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap"}},t(n,{variant:"solid",colorPalette:"blue"},"Save"),t(n,{variant:"outline"},"Preview"),t(n,{variant:"subtle",colorPalette:"green"},"Run"),t(n,{loading:!0,loadingText:"Sending"},"Submit")),t(T,{attached:!0},t(n,{variant:"outline"},"Day"),t(n,{variant:"outline"},"Week"),t(n,{variant:"outline"},"Month")))}})}const k=`/** @jsx m */\r
import m from "mithril";\r
import { Button, ButtonGroup } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div style={{ display: "grid", gap: "16px" }}>\r
					<div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>\r
						<Button variant="solid" colorPalette="blue">Save</Button>\r
						<Button variant="outline">Preview</Button>\r
						<Button variant="subtle" colorPalette="green">Run</Button>\r
						<Button loading={true} loadingText="Sending">Submit</Button>\r
					</div>\r
					<ButtonGroup attached={true}>\r
						<Button variant="outline">Day</Button>\r
						<Button variant="outline">Week</Button>\r
						<Button variant="outline">Month</Button>\r
					</ButtonGroup>\r
				</div>\r
			);\r
		},\r
	});\r
}`,I=JSON.parse('{"title":"Button","description":"","frontmatter":{},"headers":[],"relativePath":"Button.md","filePath":"Button.md"}'),D={name:"Button.md"},N=Object.assign(D,{setup(r){return(u,e)=>{const a=_("MithrilDemo");return x(),P("div",null,[e[0]||(e[0]=b("",5)),y(a,{setup:g(S),code:g(k)},null,8,["setup","code"]),e[1]||(e[1]=b("",5))])}}});export{I as __pageData,N as default};
