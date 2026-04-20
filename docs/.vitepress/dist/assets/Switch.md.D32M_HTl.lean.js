import{m as t}from"./chunks/theme.IYrj4rtN.js";import{r as i}from"./chunks/Table.BA6US4RP.js";import{C as h,o,c as r,ai as d,E as c,k as n}from"./chunks/framework.Bm_aoSIc.js";function k(s){t.mount(s,{view(){return t("div",{style:"display: flex; flex-direction: column; gap: 1.5rem;"},t(i.Root,{defaultChecked:!1,onCheckedChange:({checked:e})=>{}},t(i.Control,null,t(i.Thumb,null)),t(i.Label,null,"Wi-Fi")),t("div",{style:"display: flex; align-items: center; gap: 1rem;"},["xs","sm","md","lg"].map(e=>t(i.Root,{key:e,defaultChecked:!0,size:e},t(i.Control,null,t(i.Thumb,null)),t(i.Label,null,e)))),t("div",{style:"display: flex; align-items: center; gap: 1rem;"},t(i.Root,{defaultChecked:!0,variant:"solid"},t(i.Control,null,t(i.Thumb,null)),t(i.Label,null,"solid")),t(i.Root,{defaultChecked:!0,variant:"raised"},t(i.Control,null,t(i.Thumb,null)),t(i.Label,null,"raised"))),t("div",{style:"display: flex; align-items: center; gap: 1rem;"},t(i.Root,{defaultChecked:!0,disabled:!0},t(i.Control,null,t(i.Thumb,null)),t(i.Label,null,"disabled")),t(i.Root,{defaultChecked:!0,readOnly:!0},t(i.Control,null,t(i.Thumb,null)),t(i.Label,null,"readOnly"))))}})}const p=`/** @jsx m */\r
import m from "mithril";\r
import { Switch } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			let checked = false;\r
			return (\r
				<div style="display: flex; flex-direction: column; gap: 1.5rem;">\r
					{/* 基本 */}\r
					<Switch.Root\r
						defaultChecked={false}\r
						onCheckedChange={({ checked: c }) => { checked = c; }}\r
					>\r
						<Switch.Control>\r
							<Switch.Thumb />\r
						</Switch.Control>\r
						<Switch.Label>Wi-Fi</Switch.Label>\r
					</Switch.Root>\r
\r
					{/* サイズ */}\r
					<div style="display: flex; align-items: center; gap: 1rem;">\r
						{(["xs", "sm", "md", "lg"] as const).map(sz => (\r
							<Switch.Root key={sz} defaultChecked={true} size={sz}>\r
								<Switch.Control>\r
									<Switch.Thumb />\r
								</Switch.Control>\r
								<Switch.Label>{sz}</Switch.Label>\r
							</Switch.Root>\r
						))}\r
					</div>\r
\r
					{/* バリアント */}\r
					<div style="display: flex; align-items: center; gap: 1rem;">\r
						<Switch.Root defaultChecked={true} variant="solid">\r
							<Switch.Control><Switch.Thumb /></Switch.Control>\r
							<Switch.Label>solid</Switch.Label>\r
						</Switch.Root>\r
						<Switch.Root defaultChecked={true} variant="raised">\r
							<Switch.Control><Switch.Thumb /></Switch.Control>\r
							<Switch.Label>raised</Switch.Label>\r
						</Switch.Root>\r
					</div>\r
\r
					{/* disabled / readOnly */}\r
					<div style="display: flex; align-items: center; gap: 1rem;">\r
						<Switch.Root defaultChecked={true} disabled>\r
							<Switch.Control><Switch.Thumb /></Switch.Control>\r
							<Switch.Label>disabled</Switch.Label>\r
						</Switch.Root>\r
						<Switch.Root defaultChecked={true} readOnly>\r
							<Switch.Control><Switch.Thumb /></Switch.Control>\r
							<Switch.Label>readOnly</Switch.Label>\r
						</Switch.Root>\r
					</div>\r
				</div>\r
			);\r
		},\r
	});\r
}\r
`,C=JSON.parse('{"title":"Switch","description":"","frontmatter":{},"headers":[],"relativePath":"Switch.md","filePath":"Switch.md"}'),u={name:"Switch.md"},y=Object.assign(u,{setup(s){return(e,a)=>{const l=h("MithrilDemo");return o(),r("div",null,[a[0]||(a[0]=d("",4)),c(l,{setup:n(k),code:n(p)},null,8,["setup","code"]),a[1]||(a[1]=d("",11))])}}});export{C as __pageData,y as default};
