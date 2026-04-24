import{m as e}from"./chunks/theme.LBbUWaEz.js";import{c as i}from"./chunks/Table.DnqMepI2.js";import{C as q,o as V,c as z,a4 as f,E as T,k as p}from"./chunks/framework.DuWTyC0X.js";const k="_root_ssym7_2",x="_item_ssym7_10",S="_disabled_ssym7_18",w="_filled_ssym7_22",C="_readOnly_ssym7_31",O="_halfLeft_ssym7_39",A="_halfRight_ssym7_40",L="_sizeXs_ssym7_62",D="_sizeSm_ssym7_66",N="_sizeMd_ssym7_70",I="_sizeLg_ssym7_74",M="_colorOrange_ssym7_79",B="_colorRed_ssym7_83",E="_colorGreen_ssym7_87",H="_colorBlue_ssym7_91",U="_colorPurple_ssym7_95",G="_colorPink_ssym7_99",X="_colorTeal_ssym7_103",j="_colorCyan_ssym7_107",o={root:k,item:x,disabled:S,filled:w,readOnly:C,halfLeft:O,halfRight:A,sizeXs:L,sizeSm:D,sizeMd:N,sizeLg:I,colorOrange:M,colorRed:B,colorGreen:E,colorBlue:H,colorPurple:U,colorPink:G,colorTeal:X,colorCyan:j};function g(s){return s.charAt(0).toUpperCase()+s.slice(1)}class ${constructor(){this.internalValue=0,this.hoverValue=-1}oninit(l){this.internalValue=l.attrs.defaultValue??0}view(l){const{size:n="md",colorPalette:c="orange",count:v=5,value:h,defaultValue:W,onValueChange:a,allowHalf:y,readOnly:r,disabled:d,class:b,...R}=l.attrs,P=h!==void 0?h:this.internalValue,u=this.hoverValue>=0?this.hoverValue:P,_=[];for(let t=1;t<=v;t++)y?_.push(e("span",{class:i(o.item,{[o.disabled]:d}),onmouseleave:r||d?void 0:()=>{this.hoverValue=-1,e.redraw()}},e("span",{class:i(o.halfLeft,{[o.filled]:u>=t-.5}),onmouseenter:r||d?void 0:()=>{this.hoverValue=t-.5,e.redraw()},onclick:r||d?void 0:()=>{this.internalValue=t-.5,a==null||a(t-.5)}},"★"),e("span",{class:i(o.halfRight,{[o.filled]:u>=t}),onmouseenter:r||d?void 0:()=>{this.hoverValue=t,e.redraw()},onclick:r||d?void 0:()=>{this.internalValue=t,a==null||a(t)}},"★"))):_.push(e("span",{class:i(o.item,{[o.filled]:u>=t},{[o.disabled]:d}),onmouseenter:r||d?void 0:()=>{this.hoverValue=t,e.redraw()},onmouseleave:r||d?void 0:()=>{this.hoverValue=-1,e.redraw()},onclick:r||d?void 0:()=>{this.internalValue=t,a==null||a(t)}},"★"));return e("div",{...R,role:"radiogroup","aria-label":"Rating",class:i(o.root,o[`size${g(n)}`],o[`color${g(c)}`],{[o.readOnly]:r},b)},_)}}const J={Root:$};let m=3.5;function F(s){e.mount(s,{view(){return e("div",{style:{display:"grid",gap:"10px"}},e(J.Root,{value:m,allowHalf:!0,onValueChange:l=>{m=l}}),e("div",{style:{color:"#475569",fontSize:"0.9rem"}},"Current value: ",m))}})}const K=`/** @jsx m */\r
import m from "mithril";\r
import { Rating } from "mithril-ui-kit";\r
\r
let rating = 3.5;\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div style={{ display: "grid", gap: "10px" }}>\r
					<Rating.Root value={rating} allowHalf={true} onValueChange={(next) => { rating = next; }} />\r
					<div style={{ color: "#475569", fontSize: "0.9rem" }}>Current value: {rating}</div>\r
				</div>\r
			);\r
		},\r
	});\r
}`,et=JSON.parse('{"title":"Rating","description":"","frontmatter":{},"headers":[],"relativePath":"Rating.md","filePath":"Rating.md","lastUpdated":1776646114000}'),Q={name:"Rating.md"},ot=Object.assign(Q,{setup(s){return(l,n)=>{const c=q("MithrilDemo");return V(),z("div",null,[n[0]||(n[0]=f("",5)),T(c,{setup:p(F),code:p(K)},null,8,["setup","code"]),n[1]||(n[1]=f("",3))])}}});export{et as __pageData,ot as default};
