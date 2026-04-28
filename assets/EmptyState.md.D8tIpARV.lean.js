import{m as t}from"./chunks/theme.BHMR1ScI.js";import{E as e}from"./chunks/Table.DpkFVNUa.js";import{C as i,o as m,c as p,a4 as r,E as s,k as n}from"./chunks/framework.DuWTyC0X.js";function l(o){t.mount(o,{view(){return t(e.Root,null,t(e.Content,null,t(e.Indicator,null,"📭"),t(e.Title,null,"データがありません"),t(e.Description,null,"検索条件に一致する項目がないため、フィルターを見直してください。")))}})}const c=`/** @jsx m */\r
import m from "mithril";\r
import { EmptyState } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<EmptyState.Root>\r
					<EmptyState.Content>\r
						<EmptyState.Indicator>📭</EmptyState.Indicator>\r
						<EmptyState.Title>データがありません</EmptyState.Title>\r
						<EmptyState.Description>\r
							検索条件に一致する項目がないため、フィルターを見直してください。\r
						</EmptyState.Description>\r
					</EmptyState.Content>\r
				</EmptyState.Root>\r
			);\r
		},\r
	});\r
}`,E=JSON.parse('{"title":"EmptyState","description":"","frontmatter":{},"headers":[],"relativePath":"EmptyState.md","filePath":"EmptyState.md","lastUpdated":1776836643000}'),h={name:"EmptyState.md"},b=Object.assign(h,{setup(o){return(u,a)=>{const d=i("MithrilDemo");return m(),p("div",null,[a[0]||(a[0]=r("",5)),s(d,{setup:n(l),code:n(c)},null,8,["setup","code"]),a[1]||(a[1]=r("",5))])}}});export{E as __pageData,b as default};
