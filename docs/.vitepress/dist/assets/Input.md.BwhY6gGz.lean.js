import{m as a}from"./chunks/theme.BkMwotUo.js";import"./chunks/Table.CoGcR3xC.js";import{I as r}from"./chunks/Input.BqTrA32Z.js";import{C as o,o as p,c as h,a4 as t,E as d,k as n}from"./chunks/framework.DuWTyC0X.js";function u(e){let s="mithril-user";a.mount(e,{view(){return a("div",null,a(r,{value:s,placeholder:"ユーザー名を入力",oninput:i=>{s=i,a.redraw()}}),a("div",{class:"mt-2 text-muted small"},`現在値: ${s??"(null)"}`))}})}const c=`/** @jsx m */\r
import m from "mithril";\r
import { Input } from "mithriluikit";\r
\r
export function setup(el: HTMLElement): void {\r
  let value: string | null = "mithril-user";\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div>\r
          <Input\r
            value={value}\r
            placeholder="ユーザー名を入力"\r
            oninput={(v: string | null) => {\r
              value = v;\r
              m.redraw();\r
            }}\r
          />\r
          <div class="mt-2 text-muted small">{\`現在値: \${value ?? "(null)"}\`}</div>\r
        </div>\r
      );\r
    }\r
  });\r
}\r
`,v=JSON.parse('{"title":"Input","description":"","frontmatter":{},"headers":[],"relativePath":"Input.md","filePath":"Input.md","lastUpdated":null}'),k={name:"Input.md"},f=Object.assign(k,{setup(e){return(s,i)=>{const l=o("MithrilDemo");return p(),h("div",null,[i[0]||(i[0]=t("",4)),d(l,{setup:n(u),code:n(c)},null,8,["setup","code"]),i[1]||(i[1]=t("",5))])}}});export{v as __pageData,f as default};
