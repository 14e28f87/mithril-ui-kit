import{m as e}from"./chunks/theme.DVqxVbXL.js";import{c as s}from"./chunks/Table.BP7XEx9l.js";import{C as V,o as P,c as S,a4 as f,E as z,k as v}from"./chunks/framework.DuWTyC0X.js";const x="_root_1beov_2",w="_item_1beov_10",T="_disabled_1beov_18",k="_filled_1beov_22",D="_readOnly_1beov_31",A="_halfLeft_1beov_39",I="_halfRight_1beov_40",C="_sizeXs_1beov_62",L="_sizeSm_1beov_66",O="_sizeMd_1beov_70",N="_sizeLg_1beov_74",M="_colorPrimary_1beov_80",E="_colorSecondary_1beov_84",H="_colorSuccess_1beov_88",U="_colorWarning_1beov_92",B="_colorDanger_1beov_96",W="_colorInfo_1beov_100",o={root:x,item:w,disabled:T,filled:k,readOnly:D,halfLeft:A,halfRight:I,sizeXs:C,sizeSm:L,sizeMd:O,sizeLg:N,colorPrimary:M,colorSecondary:E,colorSuccess:H,colorWarning:U,colorDanger:B,colorInfo:W};function p(n){return n.charAt(0).toUpperCase()+n.slice(1)}class X{constructor(){this.internalValue=0,this.hoverValue=-1}oninit(i){this.internalValue=i.attrs.defaultValue??0}view(i){const{size:l="md",color:c="warning",count:g=5,value:m,defaultValue:G,onValueChange:r,allowHalf:b,readOnly:d,disabled:a,class:q,...R}=i.attrs,y=m!==void 0?m:this.internalValue,u=this.hoverValue>=0?this.hoverValue:y,_=[];for(let t=1;t<=g;t++)b?_.push(e("span",{class:s(o.item,{[o.disabled]:a}),onmouseleave:d||a?void 0:()=>{this.hoverValue=-1,e.redraw()}},e("span",{class:s(o.halfLeft,{[o.filled]:u>=t-.5}),onmouseenter:d||a?void 0:()=>{this.hoverValue=t-.5,e.redraw()},onclick:d||a?void 0:()=>{this.internalValue=t-.5,r==null||r(t-.5)}},"★"),e("span",{class:s(o.halfRight,{[o.filled]:u>=t}),onmouseenter:d||a?void 0:()=>{this.hoverValue=t,e.redraw()},onclick:d||a?void 0:()=>{this.internalValue=t,r==null||r(t)}},"★"))):_.push(e("span",{class:s(o.item,{[o.filled]:u>=t},{[o.disabled]:a}),onmouseenter:d||a?void 0:()=>{this.hoverValue=t,e.redraw()},onmouseleave:d||a?void 0:()=>{this.hoverValue=-1,e.redraw()},onclick:d||a?void 0:()=>{this.internalValue=t,r==null||r(t)}},"★"));return e("div",{...R,role:"radiogroup","aria-label":"Rating",class:s(o.root,o[`size${p(l)}`],o[`color${p(c)}`],{[o.readOnly]:d},q)},_)}}const j={Root:X};let h=3.5;function $(n){e.mount(n,{view(){return e("div",{style:{display:"grid",gap:"10px"}},e(j.Root,{value:h,allowHalf:!0,onValueChange:i=>{h=i}}),e("div",{style:{color:"#475569",fontSize:"0.9rem"}},"Current value: ",h))}})}const J=`/** @jsx m */\r
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
}`,Z=JSON.parse('{"title":"Rating","description":"","frontmatter":{},"headers":[],"relativePath":"Rating.md","filePath":"Rating.md","lastUpdated":1781499621000}'),F={name:"Rating.md"},tt=Object.assign(F,{setup(n){return(i,l)=>{const c=V("MithrilDemo");return P(),S("div",null,[l[0]||(l[0]=f("",5)),z(c,{setup:v($),code:v(J)},null,8,["setup","code"]),l[1]||(l[1]=f("",3))])}}});export{Z as __pageData,tt as default};
