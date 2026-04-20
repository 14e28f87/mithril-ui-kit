import{m as a}from"./chunks/theme.XnzwSjk8.js";import{c as d}from"./chunks/Table.B_fZamCg.js";import{C as _,o as q,c as A,ai as m,E as B,k as F}from"./chunks/framework.Bm_aoSIc.js";class D{constructor(){this.nameId=`radio-${Math.random().toString(36).slice(2,9)}`}isEqual(t,s){return t===s?!0:(typeof t=="number"||typeof t=="string")&&(typeof s=="number"||typeof s=="string")?String(t)===String(s):!1}view(t){const{value:s,oninput:e,options:o,disabled:n,orientation:u="vertical",class:v,name:b}=t.attrs,E=b??this.nameId,c=d(v,{"d-flex flex-column":u==="vertical","d-flex flex-row align-items-center gap-3":u==="horizontal"}),r=i=>{n||e==null||e(i)};if(o&&o.length)return a("div",{class:c,role:"radiogroup",tabindex:0},o.map(i=>a("label",{class:"form-check",style:{cursor:i.disabled?"not-allowed":"pointer"}},a("input",{class:d("form-check-input",{"is-invalid":!!i.error}),type:"radio",name:E,checked:this.isEqual(i.value,s),disabled:i.disabled||n,onclick:()=>{!i.disabled&&!n&&r(i.value)}}),a("span",{class:d("form-check-label",{"text-muted":i.disabled}),style:{marginLeft:"0.5rem"}},i.label))));const h=t.children,f=Array.isArray(h)?h:h?[h]:[];return a("div",{class:c,role:"radiogroup",tabindex:0},f.map((i,g)=>{if(i&&typeof i.tag=="function"){const k=(i.attrs&&i.attrs.value)??g,C=!!(i.attrs&&i.attrs.disabled)||!!n;return a(i.tag,{...i.attrs||{},value:k,checked:this.isEqual(k,s),disabled:C,oninput:l=>{l&&l.target&&l.target.value!==void 0?r(l.target.value):l!=null&&typeof l!="object"?r(l):r(k)}},i.children)}const y=g;return a("label",{class:"form-check",style:{cursor:n?"not-allowed":"pointer"}},a("input",{class:"form-check-input",type:"radio",name:E,checked:this.isEqual(y,s),disabled:n,onclick:()=>{n||r(y)}}),a("span",{class:"form-check-label",style:{marginLeft:"0.5rem"}},i))}))}}function x(p){let t="opt1";a.mount(p,{view(){return a("div",null,a(D,{value:t,orientation:"horizontal",options:[{label:"オプション1",value:"opt1"},{label:"オプション2",value:"opt2"},{label:"オプション3",value:"opt3",disabled:!0}],oninput:s=>{t=s,a.redraw()}}),a("div",{class:"mt-2 text-muted small"},`選択中: ${t}`))}})}const R=`/** @jsx m */\r
import m from "mithril";\r
import { RadioGroup } from "mithril-ui-kit";\r
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
`,S=JSON.parse('{"title":"RadioGroup","description":"","frontmatter":{},"headers":[],"relativePath":"RadioGroup.md","filePath":"RadioGroup.md"}'),P={name:"RadioGroup.md"},w=Object.assign(P,{setup(p){return(t,s)=>{const e=_("MithrilDemo");return q(),A("div",null,[s[0]||(s[0]=m("",4)),B(e,{setup:F(x),code:F(R)},null,8,["setup","code"]),s[1]||(s[1]=m("",4))])}}});export{S as __pageData,w as default};
