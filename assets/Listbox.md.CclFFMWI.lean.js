import{m as o}from"./chunks/theme.BHMR1ScI.js";import{c as v}from"./chunks/Table.DpkFVNUa.js";import{C as P,o as S,c as g,a4 as x,E as T,k as f}from"./chunks/framework.DuWTyC0X.js";const y="_root_1lhmk_2",L="_item_1lhmk_12",w="_itemDisabled_1lhmk_22",A="_itemSelected_1lhmk_26",I="_itemIndicator_1lhmk_35",D="_itemText_1lhmk_43",R="_itemGroup_1lhmk_47",G="_itemGroupLabel_1lhmk_51",M="_variantSubtle_1lhmk_61",N="_variantSolid_1lhmk_65",E="_variantPlain_1lhmk_73",i={root:y,item:L,itemDisabled:w,itemSelected:A,itemIndicator:I,itemText:D,itemGroup:R,itemGroupLabel:G,variantSubtle:M,variantSolid:N,variantPlain:E};function j(s){return s.charAt(0).toUpperCase()+s.slice(1)}class U{view(t){const{variant:r="subtle",items:d,value:e,onValueChange:l,selectionMode:u="single",class:m,...q}=t.attrs,n=u==="multiple",b=n?Array.isArray(e)?e:[]:e?[e]:[],p=new Map,h=[];for(const a of d)if(a.group){const c=p.get(a.group)??[];c.push(a),p.set(a.group,c)}else h.push(a);return o("div",{...q,role:"listbox","aria-multiselectable":n||void 0,class:v(i.root,i[`variant${j(r)}`],m)},h.map(a=>this.renderItem(a,b,n,l)),Array.from(p.entries()).map(([a,c])=>o("div",{class:i.itemGroup,key:a},o("div",{class:i.itemGroupLabel},a),c.map(k=>this.renderItem(k,b,n,l)))))}renderItem(t,r,d,e){const l=r.includes(t.value);return o("div",{key:t.value,role:"option","aria-selected":l,"aria-disabled":t.disabled||void 0,class:v(i.item,{[i.itemSelected]:l},{[i.itemDisabled]:t.disabled}),onclick:()=>{if(!t.disabled)if(d){const u=l?r.filter(m=>m!==t.value):[...r,t.value];e==null||e(u)}else e==null||e(t.value)}},d&&o("span",{class:i.itemIndicator},l?"✓":""),o("span",{class:i.itemText},t.label))}}const z={Root:U},C=[{value:"temp",label:"Temperature"},{value:"pressure",label:"Pressure"},{value:"power",label:"Power"},{value:"flow",label:"Flow"}];let _=["temp","power"];function V(s){o.mount(s,{view(){return o("div",{style:{display:"grid",gap:"10px",maxWidth:"280px"}},o(z.Root,{items:C,selectionMode:"multiple",value:_,onValueChange:t=>{_=Array.isArray(t)?t:[t],o.redraw()}}),o("div",{style:{color:"#475569",fontSize:"0.9rem"}},"Selected: ",_.join(", ")))}})}const B=`/** @jsx m */\r
import m from "mithril";\r
import { Listbox } from "mithril-ui-kit";\r
\r
const items = [\r
	{ value: "temp", label: "Temperature" },\r
	{ value: "pressure", label: "Pressure" },\r
	{ value: "power", label: "Power" },\r
	{ value: "flow", label: "Flow" },\r
];\r
\r
let value = ["temp", "power"];\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div style={{ display: "grid", gap: "10px", maxWidth: "280px" }}>\r
					<Listbox.Root\r
						items={items}\r
						selectionMode="multiple"\r
						value={value}\r
						onValueChange={(nextValue) => {\r
							value = Array.isArray(nextValue) ? nextValue : [nextValue];\r
							m.redraw();\r
						}}\r
					/>\r
					<div style={{ color: "#475569", fontSize: "0.9rem" }}>Selected: {value.join(", ")}</div>\r
				</div>\r
			);\r
		},\r
	});\r
}`,J=JSON.parse('{"title":"Listbox","description":"","frontmatter":{},"headers":[],"relativePath":"Listbox.md","filePath":"Listbox.md","lastUpdated":1776646114000}'),F={name:"Listbox.md"},$=Object.assign(F,{setup(s){return(t,r)=>{const d=P("MithrilDemo");return S(),g("div",null,[r[0]||(r[0]=x("",5)),T(d,{setup:f(V),code:f(B)},null,8,["setup","code"]),r[1]||(r[1]=x("",3))])}}});export{J as __pageData,$ as default};
