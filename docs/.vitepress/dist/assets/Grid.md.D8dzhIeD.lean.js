import{m as d}from"./chunks/theme.CIfTaYq1.js";import{c as I}from"./chunks/Table.B255pMpr.js";import{C as R,o as T,c as $,ai as x,E as k,k as y}from"./chunks/framework.Bm_aoSIc.js";const E="_grid_1isvm_1",D="_inline_1isvm_6",C={grid:E,inline:D};class N{view(n){const{templateColumns:r,templateRows:i,templateAreas:u,autoFlow:g,autoRows:f,autoColumns:h,column:b,row:G,gap:l,rowGap:o,columnGap:m,inline:e,as:_="div",class:w,style:p,...S}=n.attrs,t={};r&&(t.gridTemplateColumns=r),i&&(t.gridTemplateRows=i),u&&(t.gridTemplateAreas=u),g&&(t.gridAutoFlow=g),f&&(t.gridAutoRows=f),h&&(t.gridAutoColumns=h),b&&(t.gridColumn=b),G&&(t.gridRow=G),l!==void 0&&(t.gap=typeof l=="number"?`${l}px`:l),o!==void 0&&(t.rowGap=typeof o=="number"?`${o}px`:o),m!==void 0&&(t.columnGap=typeof m=="number"?`${m}px`:m);const v=typeof p=="string"?`${Object.entries(t).map(([P,q])=>`${P.replace(/[A-Z]/g,A=>`-${A.toLowerCase()}`)}:${q}`).join(";")}${p?`;${p}`:""}`:{...t,...p||{}};return d(_,{...S,class:I(C.grid,e&&C.inline,w),style:v},n.children)}}class a{view(n){const{colSpan:r,rowSpan:i,colStart:u,colEnd:g,rowStart:f,rowEnd:h,area:b,as:G="div",class:l,style:o,...m}=n.attrs,e={};r!==void 0&&(e.gridColumn=`span ${r}`),i!==void 0&&(e.gridRow=`span ${i}`),u!==void 0&&(e.gridColumnStart=String(u)),g!==void 0&&(e.gridColumnEnd=String(g)),f!==void 0&&(e.gridRowStart=String(f)),h!==void 0&&(e.gridRowEnd=String(h)),b&&(e.gridArea=b);const _=typeof o=="string"?`${Object.entries(e).map(([w,p])=>`${w.replace(/[A-Z]/g,S=>`-${S.toLowerCase()}`)}:${p}`).join(";")}${o?`;${o}`:""}`:{...e,...o||{}};return d(G,{...m,class:I(l),style:_},n.children)}}function c(s,n){return d("div",{style:{padding:"14px",borderRadius:"10px",background:n,textAlign:"center",fontWeight:"600"}},s)}function j(s){d.mount(s,{view(){return d(N,{templateColumns:"repeat(4, minmax(0, 1fr))",gap:"12px"},d(a,null,c("1","#dbeafe")),d(a,{colSpan:2},c("2-3","#ede9fe")),d(a,null,c("4","#fce7f3")),d(a,{rowSpan:2},c("5","#dcfce7")),d(a,null,c("6","#fef3c7")),d(a,null,c("7","#fee2e2")),d(a,null,c("8","#e0f2fe")))}})}const V=`/** @jsx m */\r
import m from "mithril";\r
import { Grid, GridItem } from "mithril-ui-kit";\r
\r
function cell(label: string, background: string): m.Children {\r
	return (\r
		<div\r
			style={{\r
				padding: "14px",\r
				borderRadius: "10px",\r
				background,\r
				textAlign: "center",\r
				fontWeight: "600",\r
			}}\r
		>\r
			{label}\r
		</div>\r
	);\r
}\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<Grid templateColumns="repeat(4, minmax(0, 1fr))" gap="12px">\r
					<GridItem>{cell("1", "#dbeafe")}</GridItem>\r
					<GridItem colSpan={2}>{cell("2-3", "#ede9fe")}</GridItem>\r
					<GridItem>{cell("4", "#fce7f3")}</GridItem>\r
					<GridItem rowSpan={2}>{cell("5", "#dcfce7")}</GridItem>\r
					<GridItem>{cell("6", "#fef3c7")}</GridItem>\r
					<GridItem>{cell("7", "#fee2e2")}</GridItem>\r
					<GridItem>{cell("8", "#e0f2fe")}</GridItem>\r
				</Grid>\r
			);\r
		},\r
	});\r
}`,B=JSON.parse('{"title":"Grid","description":"","frontmatter":{},"headers":[],"relativePath":"Grid.md","filePath":"Grid.md"}'),O={name:"Grid.md"},U=Object.assign(O,{setup(s){return(n,r)=>{const i=R("MithrilDemo");return T(),$("div",null,[r[0]||(r[0]=x("",5)),k(i,{setup:y(j),code:y(V)},null,8,["setup","code"]),r[1]||(r[1]=x("",7))])}}});export{B as __pageData,U as default};
