import{m as t}from"./chunks/theme.BHMR1ScI.js";import{c as h}from"./chunks/Table.DpkFVNUa.js";import{C as u,o as b,c as p,a4 as d,E as f,k as i}from"./chunks/framework.DuWTyC0X.js";const _="_absoluteCenter_8hng0_1",m="_horizontal_8hng0_9",g="_vertical_8hng0_14",x="_both_8hng0_19",r={absoluteCenter:_,horizontal:m,vertical:g,both:x};class v{view(a){const{axis:e="both",as:n="div",class:s,...l}=a.attrs,c=e==="horizontal"?r.horizontal:e==="vertical"?r.vertical:r.both;return t(n,{...l,class:h(r.absoluteCenter,c,s)},a.children)}}function C(o){t.mount(o,{view(){return t("div",{style:{position:"relative",height:"160px",borderRadius:"14px",background:"linear-gradient(135deg, #dbeafe, #eff6ff)",border:"1px solid #bfdbfe"}},t("div",{style:{padding:"16px",color:"#1e3a8a",fontWeight:"600"}},"Relative parent"),t(v,null,t("div",{style:{padding:"10px 14px",borderRadius:"999px",background:"#ffffff",boxShadow:"0 8px 24px rgba(15, 23, 42, 0.12)",fontWeight:"600"}},"Centered overlay")))}})}const q=`/** @jsx m */\r
import m from "mithril";\r
import { AbsoluteCenter } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div\r
					style={{\r
						position: "relative",\r
						height: "160px",\r
						borderRadius: "14px",\r
						background: "linear-gradient(135deg, #dbeafe, #eff6ff)",\r
						border: "1px solid #bfdbfe",\r
					}}\r
				>\r
					<div style={{ padding: "16px", color: "#1e3a8a", fontWeight: "600" }}>Relative parent</div>\r
					<AbsoluteCenter>\r
						<div\r
							style={{\r
								padding: "10px 14px",\r
								borderRadius: "999px",\r
								background: "#ffffff",\r
								boxShadow: "0 8px 24px rgba(15, 23, 42, 0.12)",\r
								fontWeight: "600",\r
							}}\r
						>\r
							Centered overlay\r
						</div>\r
					</AbsoluteCenter>\r
				</div>\r
			);\r
		},\r
	});\r
}`,y=JSON.parse('{"title":"AbsoluteCenter","description":"","frontmatter":{},"headers":[],"relativePath":"AbsoluteCenter.md","filePath":"AbsoluteCenter.md","lastUpdated":1776646114000}'),A={name:"AbsoluteCenter.md"},R=Object.assign(A,{setup(o){return(a,e)=>{const n=u("MithrilDemo");return b(),p("div",null,[e[0]||(e[0]=d("",5)),f(n,{setup:i(C),code:i(q)},null,8,["setup","code"]),e[1]||(e[1]=d("",5))])}}});export{y as __pageData,R as default};
