import{m as o}from"./chunks/theme.DVqxVbXL.js";import{c as h}from"./chunks/Table.BP7XEx9l.js";import{C as w,o as C,c as S,a4 as _,E as x,k as c,j as u,a as y}from"./chunks/framework.DuWTyC0X.js";class k{constructor(){this.nameId=`radio-${Math.random().toString(36).slice(2,9)}`}isEqual(r,e){return r===e?!0:(typeof r=="number"||typeof r=="string")&&(typeof e=="number"||typeof e=="string")?String(r)===String(e):!1}view(r){const{value:e,oninput:n,options:p,disabled:a,orientation:b="vertical",class:P,name:R}=r.attrs,f=R??this.nameId,v=h(P,{"d-flex flex-column":b==="vertical","d-flex flex-row align-items-center gap-3":b==="horizontal"}),l=t=>{a||n==null||n(t)};if(p&&p.length)return o("div",{class:v,role:"radiogroup",tabindex:0},p.map(t=>o("label",{class:"form-check",style:{cursor:t.disabled?"not-allowed":"pointer"}},o("input",{class:h("form-check-input",{"is-invalid":!!t.error}),type:"radio",name:f,checked:this.isEqual(t.value,e),disabled:t.disabled||a,onclick:()=>{!t.disabled&&!a&&l(t.value)}}),o("span",{class:h("form-check-label",{"text-muted":t.disabled}),style:{marginLeft:"0.5rem"}},t.label))));const s=r.children,T=Array.isArray(s)?s:s?[s]:[];return o("div",{class:v,role:"radiogroup",tabindex:0},T.map((t,g)=>{if(t&&typeof t.tag=="function"){const m=(t.attrs&&t.attrs.value)??g,G=!!(t.attrs&&t.attrs.disabled)||!!a;return o(t.tag,{...t.attrs||{},value:m,checked:this.isEqual(m,e),disabled:G,oninput:d=>{d&&d.target&&d.target.value!==void 0?l(d.target.value):d!=null&&typeof d!="object"?l(d):l(m)}},t.children)}const q=g;return o("label",{class:"form-check",style:{cursor:a?"not-allowed":"pointer"}},o("input",{class:"form-check-input",type:"radio",name:f,checked:this.isEqual(q,e),disabled:a,onclick:()=>{a||l(q)}}),o("span",{class:"form-check-label",style:{marginLeft:"0.5rem"}},t))}))}}function A(i){let r="opt1";o.mount(i,{view(){return o("div",null,o(k,{value:r,orientation:"horizontal",options:[{label:"オプション1",value:"opt1"},{label:"オプション2",value:"opt2"},{label:"オプション3",value:"opt3",disabled:!0}],oninput:e=>{r=e,o.redraw()}}),o("div",{class:"mt-2 text-muted small"},`選択中: ${r}`))}})}function E(i){let r=1;o.mount(i,{view(){return o("div",null,o(k,{value:r,oninput:e=>{r=Number(e),o.redraw()}},"低","中","高"),o("div",{class:"mt-2 text-muted small"},`選択中インデックス: ${r}`))}})}const N=`/** @jsx m */\r
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
`,V=`/** @jsx m */\r
import m from "mithril";\r
import { RadioGroup } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  let selected = 1;\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div>\r
          <RadioGroup\r
            value={selected}\r
            oninput={(v: number) => {\r
              selected = Number(v);\r
              m.redraw();\r
            }}\r
          >\r
            {"低"}\r
            {"中"}\r
            {"高"}\r
          </RadioGroup>\r
          <div class="mt-2 text-muted small">{\`選択中インデックス: \${selected}\`}</div>\r
        </div>\r
      );\r
    }\r
  });\r
}\r
`,M=JSON.parse('{"title":"RadioGroup","description":"","frontmatter":{},"headers":[],"relativePath":"RadioGroup.md","filePath":"RadioGroup.md","lastUpdated":1781657984000}'),D={name:"RadioGroup.md"},z=Object.assign(D,{setup(i){return(r,e)=>{const n=w("MithrilDemo");return C(),S("div",null,[e[0]||(e[0]=_("",5)),x(n,{setup:c(A),code:c(N)},null,8,["setup","code"]),e[1]||(e[1]=u("h3",{id:"子要素を使ってシンプルに構成",tabindex:"-1"},[y("子要素を使ってシンプルに構成 "),u("a",{class:"header-anchor",href:"#子要素を使ってシンプルに構成","aria-label":'Permalink to "子要素を使ってシンプルに構成"'},"​")],-1)),e[2]||(e[2]=u("p",null,[u("code",null,"options"),y(" を使わず、子要素から選択肢を構成する例です。")],-1)),x(n,{setup:c(E),code:c(V)},null,8,["setup","code"]),e[3]||(e[3]=_("",7))])}}});export{M as __pageData,z as default};
