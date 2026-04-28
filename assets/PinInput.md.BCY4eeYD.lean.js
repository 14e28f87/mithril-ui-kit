import{m}from"./chunks/theme.BHMR1ScI.js";import{c as g}from"./chunks/Table.DpkFVNUa.js";import{C as R,o as k,c as S,a4 as b,E as A,k as z}from"./chunks/framework.DuWTyC0X.js";const T="_root_18yot_2",w="_input_18yot_7",x="_disabled_18yot_26",D="_sizeXs_18yot_32",N="_sizeSm_18yot_38",M="_sizeMd_18yot_44",j="_sizeLg_18yot_50",X="_sizeXl_18yot_56",P={root:T,input:w,disabled:x,sizeXs:D,sizeSm:N,sizeMd:M,sizeLg:j,sizeXl:X};function E(f){return f.charAt(0).toUpperCase()+f.slice(1)}class L{constructor(){this.values=[],this.inputRefs=[]}oninit(e){const t=e.attrs.count??4;this.values=e.attrs.value??new Array(t).fill(""),this.inputRefs=new Array(t).fill(null)}view(e){const{size:t="md",count:d=4,value:a,onValueChange:s,onComplete:n,mask:c,otp:l,placeholder:r="○",type:o="numeric",disabled:p,class:_,...v}=e.attrs,i=a??this.values;i.length!==d&&(this.values=new Array(d).fill(""));const y=[];for(let u=0;u<d;u++)y.push(m("input",{key:u,type:c?"password":"text",inputmode:o==="numeric"?"numeric":"text",autocomplete:l?"one-time-code":void 0,disabled:p,placeholder:r,value:i[u]||"",maxlength:1,class:P.input,oncreate:h=>{this.inputRefs[u]=h.dom},oninput:h=>this.handleInput(h,u,d,i,s,n,o),onkeydown:h=>this.handleKeydown(h,u,d,i,s,n),onpaste:h=>this.handlePaste(h,u,d,i,s,n,o)}));return m("div",{...v,class:g(P.root,P[`size${E(t)}`],{[P.disabled]:p},_)},y)}isValid(e,t){return t==="numeric"?/\d/.test(e):t==="alphabetic"?/[a-zA-Z]/.test(e):/[a-zA-Z0-9]/.test(e)}handleInput(e,t,d,a,s,n,c){var p;const l=e.target,r=l.value.slice(-1);if(r&&!this.isValid(r,c||"numeric")){l.value=a[t]||"";return}const o=[...a];o[t]=r,this.values=o,s==null||s(o),r&&t<d-1&&((p=this.inputRefs[t+1])==null||p.focus()),o.every(_=>_)&&(n==null||n(o.join("")))}handleKeydown(e,t,d,a,s,n){var c,l,r;if(e.key==="Backspace"){if(!a[t]&&t>0){const o=[...a];o[t-1]="",this.values=o,s==null||s(o),(c=this.inputRefs[t-1])==null||c.focus(),e.preventDefault()}}else e.key==="ArrowLeft"&&t>0?(l=this.inputRefs[t-1])==null||l.focus():e.key==="ArrowRight"&&t<d-1&&((r=this.inputRefs[t+1])==null||r.focus())}handlePaste(e,t,d,a,s,n,c){var _,v;e.preventDefault();const r=(((_=e.clipboardData)==null?void 0:_.getData("text"))||"").split("").filter(i=>this.isValid(i,c||"numeric")),o=[...a];for(let i=0;i<r.length&&t+i<d;i++)o[t+i]=r[i];this.values=o,s==null||s(o);const p=Math.min(t+r.length,d-1);(v=this.inputRefs[p])==null||v.focus(),o.every(i=>i)&&(n==null||n(o.join("")))}}const U={Root:L};let q=["1","2","",""],I="";function V(f){m.mount(f,{view(){return m("div",{style:{display:"grid",gap:"10px"}},m(U.Root,{count:4,value:q,onValueChange:e=>{q=e},onComplete:e=>{I=e}}),m("div",{style:{color:"#475569",fontSize:"0.9rem"}},"Current: ",q.join("")||"-"),m("div",{style:{color:"#475569",fontSize:"0.9rem"}},"Completed: ",I||"-"))}})}const O=`/** @jsx m */\r
import m from "mithril";\r
import { PinInput } from "mithril-ui-kit";\r
\r
let values = ["1", "2", "", ""];\r
let completed = "";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div style={{ display: "grid", gap: "10px" }}>\r
					<PinInput.Root\r
						count={4}\r
						value={values}\r
						onValueChange={(next) => { values = next; }}\r
						onComplete={(valueString) => { completed = valueString; }}\r
					/>\r
					<div style={{ color: "#475569", fontSize: "0.9rem" }}>Current: {values.join("") || "-"}</div>\r
					<div style={{ color: "#475569", fontSize: "0.9rem" }}>Completed: {completed || "-"}</div>\r
				</div>\r
			);\r
		},\r
	});\r
}`,H=JSON.parse('{"title":"PinInput","description":"","frontmatter":{},"headers":[],"relativePath":"PinInput.md","filePath":"PinInput.md","lastUpdated":1776646114000}'),B={name:"PinInput.md"},J=Object.assign(B,{setup(f){return(e,t)=>{const d=R("MithrilDemo");return k(),S("div",null,[t[0]||(t[0]=b("",5)),A(d,{setup:z(V),code:z(O)},null,8,["setup","code"]),t[1]||(t[1]=b("",3))])}}});export{H as __pageData,J as default};
