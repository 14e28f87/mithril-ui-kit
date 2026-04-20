import{m as i}from"./chunks/theme.MeAZuU5r.js";import{c as x}from"./chunks/Table.BlGpiJ_h.js";import{C as O,o as w,c as P,ai as z,E as T,k as q}from"./chunks/framework.DYURIDHw.js";const A="_root_1aizh_2",D="_disabled_1aizh_8",E="_control_1aizh_13",M="_input_1aizh_20",R="_tags_1aizh_33",L="_tag_1aizh_33",N="_tagClose_1aizh_49",F="_triggerIcon_1aizh_62",H="_clearTrigger_1aizh_68",U="_content_1aizh_81",X="_cbFadeIn_1aizh_1",j="_empty_1aizh_107",B="_item_1aizh_114",K="_itemHighlighted_1aizh_124",W="_itemSelected_1aizh_128",$="_itemDisabled_1aizh_133",J="_itemCheck_1aizh_138",G="_variantOutline_1aizh_146",Q="_variantSubtle_1aizh_156",Y="_variantFlushed_1aizh_166",Z="_sizeXs_1aizh_177",V="_sizeSm_1aizh_185",tt="_sizeMd_1aizh_193",et="_sizeLg_1aizh_201",o={root:A,disabled:D,control:E,input:M,tags:R,tag:L,tagClose:N,triggerIcon:F,clearTrigger:H,content:U,cbFadeIn:X,empty:j,item:B,itemHighlighted:K,itemSelected:W,itemDisabled:$,itemCheck:J,variantOutline:G,variantSubtle:Q,variantFlushed:Y,sizeXs:Z,sizeSm:V,sizeMd:tt,sizeLg:et};function y(c){return c.charAt(0).toUpperCase()+c.slice(1)}class ot{constructor(){this.isOpen=!1,this.query="",this.highlightIndex=-1,this.inputEl=null,this.containerEl=null,this.handleOutsideClick=a=>{this.containerEl&&!this.containerEl.contains(a.target)&&(this.isOpen=!1,i.redraw())}}onremove(){document.removeEventListener("mousedown",this.handleOutsideClick)}view(a){const{variant:n="outline",size:l="md",items:h,value:s,onValueChange:e,multiple:d,openOnClick:b=!0,placeholder:k="検索...",disabled:g,class:C,...I}=a.attrs,v=h.filter(t=>!this.query||t.label.toLowerCase().includes(this.query.toLowerCase())),r=d?Array.isArray(s)?s:[]:s?[s]:[],m=h.filter(t=>r.includes(t.value)).map(t=>t.label);return i("div",{...I,class:x(o.root,o[`variant${y(n)}`],o[`size${y(l)}`],{[o.disabled]:g},C),oncreate:t=>{this.containerEl=t.dom,document.addEventListener("mousedown",this.handleOutsideClick)}},i("div",{class:o.control},d&&m.length>0&&i("div",{class:o.tags},m.map(t=>i("span",{class:o.tag},t,i("button",{type:"button",class:o.tagClose,onclick:_=>{_.stopPropagation();const p=h.find(u=>u.label===t);if(p){const u=r.filter(S=>S!==p.value);e==null||e(u)}}},"✕")))),i("input",{type:"text",class:o.input,placeholder:!d&&m.length>0?m[0]:k,disabled:g,value:this.query,oninput:t=>{this.query=t.target.value,this.isOpen=!0,this.highlightIndex=0},onfocus:()=>{b&&(this.isOpen=!0)},onkeydown:t=>this.handleKeydown(t,v,r,d,e),oncreate:t=>{this.inputEl=t.dom}}),r.length>0&&!d&&i("button",{type:"button",class:o.clearTrigger,onclick:t=>{t.stopPropagation(),this.query="",e==null||e(d?[]:"")}},"✕"),i("span",{class:o.triggerIcon,onclick:()=>{g||(this.isOpen=!this.isOpen)}},"▾")),this.isOpen&&i("div",{class:o.content},v.length===0?i("div",{class:o.empty},"結果なし"):v.map((t,_)=>i("div",{key:t.value,class:x(o.item,{[o.itemHighlighted]:_===this.highlightIndex},{[o.itemSelected]:r.includes(t.value)},{[o.itemDisabled]:t.disabled}),onmouseenter:()=>{this.highlightIndex=_},onclick:()=>{if(!t.disabled)if(d){const p=r.includes(t.value)?r.filter(u=>u!==t.value):[...r,t.value];e==null||e(p)}else e==null||e(t.value),this.isOpen=!1,this.query=""}},d&&i("span",{class:o.itemCheck},r.includes(t.value)?"✓":""),t.label))))}handleKeydown(a,n,l,h,s){if(a.key==="ArrowDown")a.preventDefault(),this.highlightIndex=Math.min(this.highlightIndex+1,n.length-1);else if(a.key==="ArrowUp")a.preventDefault(),this.highlightIndex=Math.max(this.highlightIndex-1,0);else if(a.key==="Enter"){a.preventDefault();const e=n[this.highlightIndex];if(e&&!e.disabled)if(h){const d=l.includes(e.value)?l.filter(b=>b!==e.value):[...l,e.value];s==null||s(d)}else s==null||s(e.value),this.isOpen=!1,this.query=""}else a.key==="Escape"&&(this.isOpen=!1)}}const it={Root:ot},at=[{value:"manual",label:"Manual"},{value:"auto",label:"Auto"},{value:"maintenance",label:"Maintenance"}];let f="manual";function st(c){i.mount(c,{view(){return i("div",{style:{display:"grid",gap:"10px",maxWidth:"320px"}},i(it.Root,{items:at,value:f,onValueChange:a=>{typeof a=="string"&&(f=a),i.redraw()}}),i("div",{style:{color:"#475569",fontSize:"0.9rem"}},"Selected: ",f))}})}const dt=`/** @jsx m */\r
import m from "mithril";\r
import { Combobox } from "mithril-ui-kit";\r
\r
const items = [\r
	{ value: "manual", label: "Manual" },\r
	{ value: "auto", label: "Auto" },\r
	{ value: "maintenance", label: "Maintenance" },\r
];\r
\r
let value = "manual";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div style={{ display: "grid", gap: "10px", maxWidth: "320px" }}>\r
					<Combobox.Root\r
						items={items}\r
						value={value}\r
						onValueChange={(nextValue) => {\r
							if (typeof nextValue === "string") {\r
								value = nextValue;\r
							}\r
							m.redraw();\r
						}}\r
					/>\r
					<div style={{ color: "#475569", fontSize: "0.9rem" }}>Selected: {value}</div>\r
				</div>\r
			);\r
		},\r
	});\r
}`,ht=JSON.parse('{"title":"Combobox","description":"","frontmatter":{},"headers":[],"relativePath":"Combobox.md","filePath":"Combobox.md"}'),nt={name:"Combobox.md"},ut=Object.assign(nt,{setup(c){return(a,n)=>{const l=O("MithrilDemo");return w(),P("div",null,[n[0]||(n[0]=z("",5)),T(l,{setup:q(st),code:q(dt)},null,8,["setup","code"]),n[1]||(n[1]=z("",3))])}}});export{ht as __pageData,ut as default};
