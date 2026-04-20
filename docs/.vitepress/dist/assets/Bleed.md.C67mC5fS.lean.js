import{m as n}from"./chunks/theme.D5gNcpBr.js";import{c as v}from"./chunks/Table.A5W0Ssaz.js";import{C as B,o as y,c as P,ai as m,E as S,k as b}from"./chunks/framework.Bm_aoSIc.js";const q="_bleed_x8v3i_1",T={bleed:q};function r(e){return typeof e=="number"?`-${e}px`:e.startsWith("-")?e:`-${e}`}class C{view(a){const{inline:d,block:o,inlineStart:l,inlineEnd:c,blockStart:s,blockEnd:p,as:u="div",class:f,style:i,...g}=a.attrs,t={};d!==void 0&&(t.marginInline=r(d)),o!==void 0&&(t.marginBlock=r(o)),l!==void 0&&(t.marginInlineStart=r(l)),c!==void 0&&(t.marginInlineEnd=r(c)),s!==void 0&&(t.marginBlockStart=r(s)),p!==void 0&&(t.marginBlockEnd=r(p));const h=typeof i=="string"?`${Object.entries(t).map(([_,x])=>`${_.replace(/[A-Z]/g,k=>`-${k.toLowerCase()}`)}:${x}`).join(";")}${i?`;${i}`:""}`:{...t,...i||{}};return n(u,{...g,class:v(T.bleed,f),style:h},a.children)}}function E(e){n.mount(e,{view(){return n("div",{style:{padding:"20px",background:"#f8fafc",borderRadius:"16px",border:"1px solid #e2e8f0"}},n("div",{style:{marginBottom:"10px",fontWeight:"600"}},"Container padding: 20px"),n(C,{inline:"20px"},n("div",{style:{padding:"14px 20px",background:"linear-gradient(90deg, #bfdbfe, #dbeafe)",color:"#1e3a8a",fontWeight:"600"}},"左右の padding をまたいで帯を広げます")))}})}const A=`/** @jsx m */\r
import m from "mithril";\r
import { Bleed } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div\r
					style={{\r
						padding: "20px",\r
						background: "#f8fafc",\r
						borderRadius: "16px",\r
						border: "1px solid #e2e8f0",\r
					}}\r
				>\r
					<div style={{ marginBottom: "10px", fontWeight: "600" }}>Container padding: 20px</div>\r
					<Bleed inline="20px">\r
						<div\r
							style={{\r
								padding: "14px 20px",\r
								background: "linear-gradient(90deg, #bfdbfe, #dbeafe)",\r
								color: "#1e3a8a",\r
								fontWeight: "600",\r
							}}\r
						>\r
							左右の padding をまたいで帯を広げます\r
						</div>\r
					</Bleed>\r
				</div>\r
			);\r
		},\r
	});\r
}`,R=JSON.parse('{"title":"Bleed","description":"","frontmatter":{},"headers":[],"relativePath":"Bleed.md","filePath":"Bleed.md"}'),I={name:"Bleed.md"},V=Object.assign(I,{setup(e){return(a,d)=>{const o=B("MithrilDemo");return y(),P("div",null,[d[0]||(d[0]=m("",5)),S(o,{setup:b(E),code:b(A)},null,8,["setup","code"]),d[1]||(d[1]=m("",3))])}}});export{R as __pageData,V as default};
