import{m as t}from"./chunks/theme.C32Rvu8V.js";import"./chunks/Table.MsshMnDN.js";import{I as l}from"./chunks/Input.zu4cPY0S.js";import{C as u,o as p,c as m,a4 as i,E as c,k as a,j as r,a as n}from"./chunks/framework.DuWTyC0X.js";function h(o){let d="mithril-user";t.mount(o,{view(){return t("div",null,t(l,{value:d,placeholder:"ユーザー名を入力",oninput:e=>{d=e,t.redraw()}}),t("div",{class:"mt-2 text-muted small"},`現在値: ${d??"(null)"}`))}})}function v(o){const d={text:"",password:""};t.mount(o,{view(){return t("div",{class:"d-flex flex-column gap-3"},t("div",null,t("label",{class:"form-label"},"text（通常）"),t(l,{value:d.text,placeholder:"テキストを入力",oninput:e=>{d.text=e??"",t.redraw()}})),t("div",null,t("label",{class:"form-label"},"password"),t(l,{type:"password",value:d.password,placeholder:"パスワードを入力",oninput:e=>{d.password=e??"",t.redraw()}})),t("div",null,t("label",{class:"form-label"},"disabled"),t(l,{value:"編集不可の固定値",disabled:!0})),t("div",{class:"text-muted small"},`text: "${d.text}" / password: "${d.password}"`))}})}const b=`/** @jsx m */\r
import m from "mithril";\r
import { Input } from "mithril-ui-kit";\r
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
`,f=`/** @jsx m */\r
import m from "mithril";\r
import { Input } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  const state = { text: "", password: "" };\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div class="d-flex flex-column gap-3">\r
          <div>\r
            <label class="form-label">text（通常）</label>\r
            <Input\r
              value={state.text}\r
              placeholder="テキストを入力"\r
              oninput={(v) => {\r
                state.text = v ?? "";\r
                m.redraw();\r
              }}\r
            />\r
          </div>\r
          <div>\r
            <label class="form-label">password</label>\r
            <Input\r
              type="password"\r
              value={state.password}\r
              placeholder="パスワードを入力"\r
              oninput={(v) => {\r
                state.password = v ?? "";\r
                m.redraw();\r
              }}\r
            />\r
          </div>\r
          <div>\r
            <label class="form-label">disabled</label>\r
            <Input value="編集不可の固定値" disabled={true} />\r
          </div>\r
          <div class="text-muted small">\r
            {\`text: "\${state.text}" / password: "\${state.password}"\`}\r
          </div>\r
        </div>\r
      );\r
    },\r
  });\r
}\r
`,P=JSON.parse('{"title":"Input","description":"","frontmatter":{},"headers":[],"relativePath":"Input.md","filePath":"Input.md","lastUpdated":1777529825000}'),x={name:"Input.md"},g=Object.assign(x,{setup(o){return(d,e)=>{const s=u("MithrilDemo");return p(),m("div",null,[e[0]||(e[0]=i("",6)),c(s,{setup:a(h),code:a(b)},null,8,["setup","code"]),e[1]||(e[1]=r("h3",{id:"タイプ-状態",tabindex:"-1"},[n("タイプ / 状態 "),r("a",{class:"header-anchor",href:"#タイプ-状態","aria-label":'Permalink to "タイプ / 状態"'},"​")],-1)),e[2]||(e[2]=r("p",null,[r("code",null,"type"),n(" で "),r("code",null,"password"),n(" など HTML 標準の input type を指定できます。"),r("code",null,"disabled"),n(" で無効化できます。")],-1)),c(s,{setup:a(v),code:a(f)},null,8,["setup","code"]),e[3]||(e[3]=i("",5))])}}});export{P as __pageData,g as default};
