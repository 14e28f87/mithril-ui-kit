import{m as e}from"./chunks/theme.XnzwSjk8.js";import{v as t}from"./chunks/Table.B_fZamCg.js";import{C as a,o as d,c as m,ai as o,E as c,k as r}from"./chunks/framework.Bm_aoSIc.js";function s(i){e.mount(i,{view(){return e(t.Root,{variant:"subtle"},e(t.Item,null,e(t.Separator,null,e(t.Indicator,null,"1"),e(t.Connector,null)),e(t.Content,null,e(t.Title,null,"Recipe loaded"),e(t.Description,null,"Batch parameters were synchronized."))),e(t.Item,null,e(t.Separator,null,e(t.Indicator,null,"2"),e(t.Connector,null)),e(t.Content,null,e(t.Title,null,"Ramp started"),e(t.Description,null,"Heating reached the scheduled gradient."))),e(t.Item,null,e(t.Separator,null,e(t.Indicator,null,"3")),e(t.Content,null,e(t.Title,null,"Hold phase"),e(t.Description,null,"Temperature is now stable at target."))))}})}const u=`/** @jsx m */\r
import m from "mithril";\r
import { Timeline } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<Timeline.Root variant="subtle">\r
					<Timeline.Item>\r
						<Timeline.Separator>\r
							<Timeline.Indicator>1</Timeline.Indicator>\r
							<Timeline.Connector />\r
						</Timeline.Separator>\r
						<Timeline.Content>\r
							<Timeline.Title>Recipe loaded</Timeline.Title>\r
							<Timeline.Description>Batch parameters were synchronized.</Timeline.Description>\r
						</Timeline.Content>\r
					</Timeline.Item>\r
					<Timeline.Item>\r
						<Timeline.Separator>\r
							<Timeline.Indicator>2</Timeline.Indicator>\r
							<Timeline.Connector />\r
						</Timeline.Separator>\r
						<Timeline.Content>\r
							<Timeline.Title>Ramp started</Timeline.Title>\r
							<Timeline.Description>Heating reached the scheduled gradient.</Timeline.Description>\r
						</Timeline.Content>\r
					</Timeline.Item>\r
					<Timeline.Item>\r
						<Timeline.Separator>\r
							<Timeline.Indicator>3</Timeline.Indicator>\r
						</Timeline.Separator>\r
						<Timeline.Content>\r
							<Timeline.Title>Hold phase</Timeline.Title>\r
							<Timeline.Description>Temperature is now stable at target.</Timeline.Description>\r
						</Timeline.Content>\r
					</Timeline.Item>\r
				</Timeline.Root>\r
			);\r
		},\r
	});\r
}`,_=JSON.parse('{"title":"Timeline","description":"","frontmatter":{},"headers":[],"relativePath":"Timeline.md","filePath":"Timeline.md"}'),T={name:"Timeline.md"},I=Object.assign(T,{setup(i){return(p,n)=>{const l=a("MithrilDemo");return d(),m("div",null,[n[0]||(n[0]=o("",5)),c(l,{setup:r(s),code:r(u)},null,8,["setup","code"]),n[1]||(n[1]=o("",5))])}}});export{_ as __pageData,I as default};
