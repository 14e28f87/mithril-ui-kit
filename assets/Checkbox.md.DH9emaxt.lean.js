import{m as t}from"./chunks/theme.DVqxVbXL.js";import{l as e}from"./chunks/Table.BP7XEx9l.js";import{C as u,o as h,c as s,a4 as a,E as l,k as c,j as i,a as b}from"./chunks/framework.DuWTyC0X.js";function k(r){let d=!0;t.mount(r,{view(){return t("div",{class:"d-grid gap-2"},t(e.Root,{checked:d,onCheckedChange:({checked:o})=>{d=o,t.redraw()}},t(e.HiddenInput,null),t(e.Control,null,t(e.Indicator,null)),t(e.Label,null,"利用規約に同意する")),t("div",{class:"small text-muted"},`状態: ${String(d)}`))}})}function C(r){let d=["opcua","ws"];t.mount(r,{view(){return t("div",{class:"d-grid gap-2"},t(e.Group,{value:d,orientation:"horizontal",onValueChange:o=>{d=o.value,t.redraw()}},t(e.Root,{value:"opcua"},t(e.HiddenInput,null),t(e.Control,null,t(e.Indicator,null)),t(e.Label,null,"OPC UA")),t(e.Root,{value:"ws"},t(e.HiddenInput,null),t(e.Control,null,t(e.Indicator,null)),t(e.Label,null,"WebSocket")),t(e.Root,{value:"rest"},t(e.HiddenInput,null),t(e.Control,null,t(e.Indicator,null)),t(e.Label,null,"REST"))),t("div",{class:"small text-muted"},`選択値: ${d.join(", ")||"(なし)"}`))}})}const x=`/** @jsx m */\r
import m from "mithril";\r
import { Checkbox, type CheckedState } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  let checked: CheckedState = true;\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div class="d-grid gap-2">\r
          <Checkbox.Root\r
            checked={checked}\r
            onCheckedChange={({ checked: next }) => {\r
              checked = next;\r
              m.redraw();\r
            }}\r
          >\r
            <Checkbox.HiddenInput />\r
            <Checkbox.Control>\r
              <Checkbox.Indicator />\r
            </Checkbox.Control>\r
            <Checkbox.Label>利用規約に同意する</Checkbox.Label>\r
          </Checkbox.Root>\r
\r
          <div class="small text-muted">{\`状態: \${String(checked)}\`}</div>\r
        </div>\r
      );\r
    }\r
  });\r
}`,p=`/** @jsx m */\r
import m from "mithril";\r
import { Checkbox } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  let values = ["opcua", "ws"];\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div class="d-grid gap-2">\r
          <Checkbox.Group\r
            value={values}\r
            orientation="horizontal"\r
            onValueChange={(details: { value: string[] }) => {\r
              values = details.value;\r
              m.redraw();\r
            }}\r
          >\r
            <Checkbox.Root value="opcua">\r
              <Checkbox.HiddenInput />\r
              <Checkbox.Control>\r
                <Checkbox.Indicator />\r
              </Checkbox.Control>\r
              <Checkbox.Label>OPC UA</Checkbox.Label>\r
            </Checkbox.Root>\r
            <Checkbox.Root value="ws">\r
              <Checkbox.HiddenInput />\r
              <Checkbox.Control>\r
                <Checkbox.Indicator />\r
              </Checkbox.Control>\r
              <Checkbox.Label>WebSocket</Checkbox.Label>\r
            </Checkbox.Root>\r
            <Checkbox.Root value="rest">\r
              <Checkbox.HiddenInput />\r
              <Checkbox.Control>\r
                <Checkbox.Indicator />\r
              </Checkbox.Control>\r
              <Checkbox.Label>REST</Checkbox.Label>\r
            </Checkbox.Root>\r
          </Checkbox.Group>\r
\r
          <div class="small text-muted">{\`選択値: \${values.join(", ") || "(なし)"}\`}</div>\r
        </div>\r
      );\r
    }\r
  });\r
}`,f=JSON.parse('{"title":"Checkbox","description":"","frontmatter":{},"headers":[],"relativePath":"Checkbox.md","filePath":"Checkbox.md","lastUpdated":1781499621000}'),m={name:"Checkbox.md"},_=Object.assign(m,{setup(r){return(d,o)=>{const n=u("MithrilDemo");return h(),s("div",null,[o[0]||(o[0]=a("",5)),l(n,{setup:c(k),code:c(x)},null,8,["setup","code"]),o[1]||(o[1]=i("h3",{id:"グループ管理",tabindex:"-1"},[b("グループ管理 "),i("a",{class:"header-anchor",href:"#グループ管理","aria-label":'Permalink to "グループ管理"'},"​")],-1)),l(n,{setup:c(C),code:c(p)},null,8,["setup","code"]),o[2]||(o[2]=a("",7))])}}});export{f as __pageData,_ as default};
