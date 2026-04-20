import{m as a}from"./chunks/theme.BkMwotUo.js";import{c as d}from"./chunks/Table.CoGcR3xC.js";import{C as _,o as q,c as A,a4 as m,E as B,k as F}from"./chunks/framework.DuWTyC0X.js";class D{constructor(){this.nameId=`radio-${Math.random().toString(36).slice(2,9)}`}isEqual(t,i){return t===i?!0:(typeof t=="number"||typeof t=="string")&&(typeof i=="number"||typeof i=="string")?String(t)===String(i):!1}view(t){const{value:i,oninput:e,options:o,disabled:n,orientation:u="vertical",class:v,name:b}=t.attrs,E=b??this.nameId,c=d(v,{"d-flex flex-column":u==="vertical","d-flex flex-row align-items-center gap-3":u==="horizontal"}),r=s=>{n||e==null||e(s)};if(o&&o.length)return a("div",{class:c,role:"radiogroup",tabindex:0},o.map(s=>a("label",{class:"form-check",style:{cursor:s.disabled?"not-allowed":"pointer"}},a("input",{class:d("form-check-input",{"is-invalid":!!s.error}),type:"radio",name:E,checked:this.isEqual(s.value,i),disabled:s.disabled||n,onclick:()=>{!s.disabled&&!n&&r(s.value)}}),a("span",{class:d("form-check-label",{"text-muted":s.disabled}),style:{marginLeft:"0.5rem"}},s.label))));const p=t.children,f=Array.isArray(p)?p:p?[p]:[];return a("div",{class:c,role:"radiogroup",tabindex:0},f.map((s,g)=>{if(s&&typeof s.tag=="function"){const k=(s.attrs&&s.attrs.value)??g,C=!!(s.attrs&&s.attrs.disabled)||!!n;return a(s.tag,{...s.attrs||{},value:k,checked:this.isEqual(k,i),disabled:C,oninput:l=>{l&&l.target&&l.target.value!==void 0?r(l.target.value):l!=null&&typeof l!="object"?r(l):r(k)}},s.children)}const y=g;return a("label",{class:"form-check",style:{cursor:n?"not-allowed":"pointer"}},a("input",{class:"form-check-input",type:"radio",name:E,checked:this.isEqual(y,i),disabled:n,onclick:()=>{n||r(y)}}),a("span",{class:"form-check-label",style:{marginLeft:"0.5rem"}},s))}))}}function x(h){let t="opt1";a.mount(h,{view(){return a("div",null,a(D,{value:t,orientation:"horizontal",options:[{label:"オプション1",value:"opt1"},{label:"オプション2",value:"opt2"},{label:"オプション3",value:"opt3",disabled:!0}],oninput:i=>{t=i,a.redraw()}}),a("div",{class:"mt-2 text-muted small"},`選択中: ${t}`))}})}const R=`/** @jsx m */\r
import m from "mithril";\r
import { RadioGroup } from "mithriluikit";\r
\r
export function setup(el: HTMLElement): void {\r
  let selected = "opt1";\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div>\r
          <RadioGroup\r
            value={selected}\r
            orientation="horizontal"\r
            options={[\r
              { label: "オプション1", value: "opt1" },\r
              { label: "オプション2", value: "opt2" },\r
              { label: "オプション3", value: "opt3", disabled: true }\r
            ]}\r
            oninput={(v: string) => {\r
              selected = v;\r
              m.redraw();\r
            }}\r
          />\r
          <div class="mt-2 text-muted small">{\`選択中: \${selected}\`}</div>\r
        </div>\r
      );\r
    }\r
  });\r
}\r
`,S=JSON.parse('{"title":"RadioGroup","description":"","frontmatter":{},"headers":[],"relativePath":"RadioGroup.md","filePath":"RadioGroup.md","lastUpdated":null}'),P={name:"RadioGroup.md"},w=Object.assign(P,{setup(h){return(t,i)=>{const e=_("MithrilDemo");return q(),A("div",null,[i[0]||(i[0]=m("",4)),B(e,{setup:F(x),code:F(R)},null,8,["setup","code"]),i[1]||(i[1]=m("",4))])}}});export{S as __pageData,w as default};
