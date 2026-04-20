import{m as e}from"./chunks/theme.4JftMPzn.js";import{c as h}from"./chunks/Table.BtqtxzWS.js";import{C as m,o as u,c as f,ai as n,E as _,k as s}from"./chunks/framework.Bm_aoSIc.js";const g="_aspectRatio_fjwl5_1",R={aspectRatio:g};class b{view(r){const{ratio:t=4/3,as:o="div",class:d,style:i,...c}=r.attrs,l={aspectRatio:String(t)},p=typeof i=="string"?`aspect-ratio:${t};${i}`:{...l,...i||{}};return e(o,{...c,class:h(R.aspectRatio,d),style:p},r.children)}}function A(a){e.mount(a,{view(){return e(b,{ratio:16/9},e("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",borderRadius:"14px",background:"linear-gradient(135deg, #111827, #334155)",color:"#f8fafc",fontWeight:"700",letterSpacing:"0.04em"}},"16:9 preview area"))}})}const P=`/** @jsx m */\r
import m from "mithril";\r
import { AspectRatio } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<AspectRatio ratio={16 / 9}>\r
					<div\r
						style={{\r
							display: "flex",\r
							alignItems: "center",\r
							justifyContent: "center",\r
							width: "100%",\r
							height: "100%",\r
							borderRadius: "14px",\r
							background: "linear-gradient(135deg, #111827, #334155)",\r
							color: "#f8fafc",\r
							fontWeight: "700",\r
							letterSpacing: "0.04em",\r
						}}\r
					>\r
						16:9 preview area\r
					</div>\r
				</AspectRatio>\r
			);\r
		},\r
	});\r
}`,v=JSON.parse('{"title":"AspectRatio","description":"","frontmatter":{},"headers":[],"relativePath":"AspectRatio.md","filePath":"AspectRatio.md"}'),y={name:"AspectRatio.md"},S=Object.assign(y,{setup(a){return(r,t)=>{const o=m("MithrilDemo");return u(),f("div",null,[t[0]||(t[0]=n("",5)),_(o,{setup:s(A),code:s(P)},null,8,["setup","code"]),t[1]||(t[1]=n("",3))])}}});export{v as __pageData,S as default};
