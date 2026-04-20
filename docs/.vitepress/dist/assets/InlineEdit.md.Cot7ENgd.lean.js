import{m as n}from"./chunks/theme.MeAZuU5r.js";import{c as E}from"./chunks/Table.BlGpiJ_h.js";import{C as g,o,c as y,ai as d,E as F,k as r}from"./chunks/framework.DYURIDHw.js";class c{constructor(){this.editing=!1,this.draftValue="",this.originalValue="",this.inputElement=null,this.latestAttrs=null}oninit(s){this.latestAttrs=s.attrs,this.bindControlRef(s.attrs),this.draftValue=this.toText(s.attrs.value)}onbeforeupdate(s,i){var e,k;this.latestAttrs=s.attrs,this.bindControlRef(s.attrs);const a=this.isEditing(i.attrs),t=this.isEditing(s.attrs);t&&!a&&(this.originalValue=this.toText(s.attrs.value),this.draftValue=this.originalValue,this.inputElement=null,(k=(e=s.attrs).onEditStart)==null||k.call(e)),!t&&a&&(this.inputElement=null),!this.isEditing(s.attrs)&&s.attrs.value!==i.attrs.value&&(this.draftValue=this.toText(s.attrs.value))}onremove(s){this.unbindControlRef(s.attrs)}bindControlRef(s){s.controlRef&&(s.controlRef.startEdit=()=>{const i=this.latestAttrs??s;this.beginEdit(i),n.redraw()},s.controlRef.saveEdit=async()=>{const i=this.latestAttrs??s;return this.confirmEdit(i)},s.controlRef.cancelEdit=()=>{const i=this.latestAttrs??s;this.cancelEdit(i)},s.controlRef.isEditing=()=>{const i=this.latestAttrs??s;return this.isEditing(i)})}unbindControlRef(s){s.controlRef&&(delete s.controlRef.startEdit,delete s.controlRef.saveEdit,delete s.controlRef.cancelEdit,delete s.controlRef.isEditing)}isControlledEditing(s){return typeof s.editing=="boolean"}isEditing(s){return this.isControlledEditing(s)?!!s.editing:this.editing}setEditing(s,i){var a;this.isControlledEditing(s)||(this.editing=i),(a=s.onEditingChange)==null||a.call(s,i)}toText(s){return s==null?"":String(s)}toNullable(s){return s.trim()===""?null:s}beginEdit(s){var i;s.disabled||this.isEditing(s)||(this.setEditing(s,!0),this.originalValue=this.toText(s.value),this.draftValue=this.originalValue,(i=s.onEditStart)==null||i.call(s),this.inputElement=null)}restoreInputFocus(){window.setTimeout(()=>{var s,i;(s=this.inputElement)==null||s.focus(),(i=this.inputElement)==null||i.select()},0)}async confirmEdit(s){var a,t;if(!this.isEditing(s))return!0;const i=this.toNullable(this.draftValue);try{await Promise.resolve((a=s.oninput)==null?void 0:a.call(s,i))}catch{return this.restoreInputFocus(),n.redraw(),!1}return this.setEditing(s,!1),(t=s.onEditEnd)==null||t.call(s,i),this.inputElement=null,n.redraw(),!0}cancelEdit(s){var i;this.isEditing(s)&&(this.setEditing(s,!1),this.draftValue=this.originalValue,(i=s.onEditCancel)==null||i.call(s,this.toNullable(this.originalValue)),this.inputElement=null,n.redraw())}handleDisplayClick(s,i){(s.editTrigger??"doubleclick")===i&&(this.beginEdit(s),n.redraw())}async handleInputBlur(s){var a,t;if(!this.isEditing(s)){(a=s.onblur)==null||a.call(s);return}let i=!1;s.saveOnBlur===!1?(this.cancelEdit(s),i=!0):i=await this.confirmEdit(s),i&&((t=s.onblur)==null||t.call(s))}view(s){const i=s.attrs;this.latestAttrs=i,this.bindControlRef(i);const a=this.toText(i.value),t=a.trim()==="";if(this.isEditing(i)){const h=E("form-control",i.class);return n("input",{type:i.type??"text",id:i.id,maxlength:i.maxLength,class:h,value:this.draftValue,disabled:i.disabled,oncreate:l=>{this.inputElement=l.dom,this.inputElement.focus(),this.inputElement.select()},oninput:l=>{this.draftValue=l.target.value},onblur:()=>{this.handleInputBlur(i)},onkeydown:l=>{if(l.key==="Enter"){l.preventDefault(),this.confirmEdit(i);return}l.key==="Escape"&&(l.preventDefault(),this.cancelEdit(i))}})}const k=E("form-control-plaintext","px-2","rounded",{"text-muted":t},i.class);return n("div",{class:k,tabindex:i.disabled?void 0:0,role:i.disabled?void 0:"button",style:{cursor:i.disabled?"default":"text",minHeight:"calc(1.5em + 0.75rem + 2px)"},onclick:()=>this.handleDisplayClick(i,"click"),ondblclick:()=>this.handleDisplayClick(i,"doubleclick"),onkeydown:h=>{i.disabled||(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),this.beginEdit(i),n.redraw())}},t?i.placeholder??"ダブルクリックして編集":a)}}function u(p){let s="キルン温度プロファイル";n.mount(p,{view(){return n("div",null,n(c,{value:s,placeholder:"ダブルクリックして編集",oninput:i=>{s=i??"",n.redraw()}}),n("div",{class:"mt-2 text-muted small"},"ダブルクリックで編集できます"))}})}const C=`/** @jsx m */\r
import m from "mithril";\r
import { InlineEdit } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  let title = "キルン温度プロファイル";\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div>\r
          <InlineEdit\r
            value={title}\r
            placeholder="ダブルクリックして編集"\r
            oninput={(v: string | null) => {\r
              title = v ?? "";\r
              m.redraw();\r
            }}\r
          />\r
          <div class="mt-2 text-muted small">ダブルクリックで編集できます</div>\r
        </div>\r
      );\r
    }\r
  });\r
}\r
`,b=JSON.parse('{"title":"InlineEdit","description":"","frontmatter":{},"headers":[],"relativePath":"InlineEdit.md","filePath":"InlineEdit.md"}'),A={name:"InlineEdit.md"},f=Object.assign(A,{setup(p){return(s,i)=>{const a=g("MithrilDemo");return o(),y("div",null,[i[0]||(i[0]=d("",5)),F(a,{setup:r(u),code:r(C)},null,8,["setup","code"]),i[1]||(i[1]=d("",15))])}}});export{b as __pageData,f as default};
