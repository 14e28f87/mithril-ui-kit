import{m as e}from"./chunks/theme.XnzwSjk8.js";import{c as i}from"./chunks/Table.B_fZamCg.js";import{C as c,o as l,c as h,ai as a,E as p,k as n}from"./chunks/framework.Bm_aoSIc.js";const f="_box_dlrng_1",m={box:f};class u{view(r){const{as:t="div",class:d,...s}=r.attrs;return e(t,{...s,class:i(m.box,d)},r.children)}}function x(o){e.mount(o,{view(){return e(u,{as:"section",style:{padding:"16px",border:"1px solid #d0d7de",borderRadius:"12px",background:"linear-gradient(135deg, #fff7ed, #ffffff)"}},e("div",{style:{fontWeight:"600",marginBottom:"8px"}},"Box"),e("div",null,"as、class、style を受け取り、任意の HTML 要素を薄くラップできます。"))}})}const _=`/** @jsx m */\r
import m from "mithril";\r
import { Box } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<Box\r
					as="section"\r
					style={{\r
						padding: "16px",\r
						border: "1px solid #d0d7de",\r
						borderRadius: "12px",\r
						background: "linear-gradient(135deg, #fff7ed, #ffffff)",\r
					}}\r
				>\r
					<div style={{ fontWeight: "600", marginBottom: "8px" }}>Box</div>\r
					<div>as、class、style を受け取り、任意の HTML 要素を薄くラップできます。</div>\r
				</Box>\r
			);\r
		},\r
	});\r
}`,P=JSON.parse('{"title":"Box","description":"","frontmatter":{},"headers":[],"relativePath":"Box.md","filePath":"Box.md"}'),b={name:"Box.md"},v=Object.assign(b,{setup(o){return(r,t)=>{const d=c("MithrilDemo");return l(),h("div",null,[t[0]||(t[0]=a("",5)),p(d,{setup:n(x),code:n(_)},null,8,["setup","code"]),t[1]||(t[1]=a("",3))])}}});export{P as __pageData,v as default};
