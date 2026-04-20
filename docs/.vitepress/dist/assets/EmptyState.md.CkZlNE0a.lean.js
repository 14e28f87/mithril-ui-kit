import{m as t}from"./chunks/theme.4JftMPzn.js";import{h as e}from"./chunks/Table.BtqtxzWS.js";import{C as i,o as m,c as p,ai as r,E as s,k as n}from"./chunks/framework.Bm_aoSIc.js";function c(a){t.mount(a,{view(){return t(e.Root,null,t(e.Content,null,t(e.Indicator,null,"📭"),t(e.Title,null,"データがありません"),t(e.Description,null,"検索条件に一致する項目がないため、フィルターを見直してください。")))}})}const l=`/** @jsx m */\r
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
}`,b=JSON.parse('{"title":"EmptyState","description":"","frontmatter":{},"headers":[],"relativePath":"EmptyState.md","filePath":"EmptyState.md"}'),h={name:"EmptyState.md"},E=Object.assign(h,{setup(a){return(u,o)=>{const d=i("MithrilDemo");return m(),p("div",null,[o[0]||(o[0]=r("",5)),s(d,{setup:n(c),code:n(l)},null,8,["setup","code"]),o[1]||(o[1]=r("",5))])}}});export{b as __pageData,E as default};
