import{m as t}from"./chunks/theme.XnzwSjk8.js";import{d as e}from"./chunks/Table.B_fZamCg.js";import{C as h,o as u,c as s,ai as a,E as l,k as c,j as i,a as b}from"./chunks/framework.Bm_aoSIc.js";function k(r){let o=!0;t.mount(r,{view(){return t("div",{class:"d-grid gap-2"},t(e.Root,{checked:o,onCheckedChange:({checked:d})=>{o=d,t.redraw()}},t(e.HiddenInput,null),t(e.Control,null,t(e.Indicator,null)),t(e.Label,null,"利用規約に同意する")),t("div",{class:"small text-muted"},`状態: ${String(o)}`))}})}function C(r){let o=["opcua","ws"];t.mount(r,{view(){return t("div",{class:"d-grid gap-2"},t(e.Group,{value:o,orientation:"horizontal",onValueChange:d=>{o=d.value,t.redraw()}},t(e.Root,{value:"opcua"},t(e.HiddenInput,null),t(e.Control,null,t(e.Indicator,null)),t(e.Label,null,"OPC UA")),t(e.Root,{value:"ws"},t(e.HiddenInput,null),t(e.Control,null,t(e.Indicator,null)),t(e.Label,null,"WebSocket")),t(e.Root,{value:"rest"},t(e.HiddenInput,null),t(e.Control,null,t(e.Indicator,null)),t(e.Label,null,"REST"))),t("div",{class:"small text-muted"},`選択値: ${o.join(", ")||"(なし)"}`))}})}const x=`/** @jsx m */\r
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
/** @jsxRuntime classic */\r
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
}`,f=JSON.parse('{"title":"Checkbox","description":"","frontmatter":{},"headers":[],"relativePath":"Checkbox.md","filePath":"Checkbox.md"}'),m={name:"Checkbox.md"},_=Object.assign(m,{setup(r){return(o,d)=>{const n=h("MithrilDemo");return u(),s("div",null,[d[0]||(d[0]=a("",5)),l(n,{setup:c(k),code:c(x)},null,8,["setup","code"]),d[1]||(d[1]=i("h3",{id:"グループ管理",tabindex:"-1"},[b("グループ管理 "),i("a",{class:"header-anchor",href:"#グループ管理","aria-label":'Permalink to "グループ管理"'},"​")],-1)),l(n,{setup:c(C),code:c(p)},null,8,["setup","code"]),d[2]||(d[2]=a("",7))])}}});export{f as __pageData,_ as default};
