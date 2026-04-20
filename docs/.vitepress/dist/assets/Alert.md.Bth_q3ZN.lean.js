import{m as t}from"./chunks/theme.D5gNcpBr.js";import{a as e}from"./chunks/Table.A5W0Ssaz.js";import{C as l,o as i,c,ai as d,E as s,k as a}from"./chunks/framework.Bm_aoSIc.js";function u(r){t.mount(r,{view(){return t(e.Root,{status:"success",variant:"subtle"},t(e.Indicator,null),t(e.Content,null,t(e.Title,null,"保存が完了しました"),t(e.Description,null,"新しいレシピが kiln-server に反映されています。")))}})}const h=`/** @jsx m */\r
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
}`,A=JSON.parse('{"title":"Alert","description":"","frontmatter":{},"headers":[],"relativePath":"Alert.md","filePath":"Alert.md"}'),m={name:"Alert.md"},f=Object.assign(m,{setup(r){return(p,o)=>{const n=l("MithrilDemo");return i(),c("div",null,[o[0]||(o[0]=d("",5)),s(n,{setup:a(u),code:a(h)},null,8,["setup","code"]),o[1]||(o[1]=d("",5))])}}});export{A as __pageData,f as default};
