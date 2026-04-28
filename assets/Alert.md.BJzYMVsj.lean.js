import{m as t}from"./chunks/theme.BHMR1ScI.js";import{A as e}from"./chunks/Table.DpkFVNUa.js";import{C as l,o as i,c,a4 as d,E as s,k as a}from"./chunks/framework.DuWTyC0X.js";function u(r){t.mount(r,{view(){return t(e.Root,{status:"success",variant:"subtle"},t(e.Indicator,null),t(e.Content,null,t(e.Title,null,"保存が完了しました"),t(e.Description,null,"新しいレシピが kiln-server に反映されています。")))}})}const h=`/** @jsx m */\r
import m from "mithril";\r
import { Alert } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<Alert.Root status="success" variant="subtle">\r
					<Alert.Indicator />\r
					<Alert.Content>\r
						<Alert.Title>保存が完了しました</Alert.Title>\r
						<Alert.Description>新しいレシピが kiln-server に反映されています。</Alert.Description>\r
					</Alert.Content>\r
				</Alert.Root>\r
			);\r
		},\r
	});\r
}`,_=JSON.parse('{"title":"Alert","description":"","frontmatter":{},"headers":[],"relativePath":"Alert.md","filePath":"Alert.md","lastUpdated":1776836643000}'),m={name:"Alert.md"},f=Object.assign(m,{setup(r){return(p,o)=>{const n=l("MithrilDemo");return i(),c("div",null,[o[0]||(o[0]=d("",5)),s(n,{setup:a(u),code:a(h)},null,8,["setup","code"]),o[1]||(o[1]=d("",5))])}}});export{_ as __pageData,f as default};
