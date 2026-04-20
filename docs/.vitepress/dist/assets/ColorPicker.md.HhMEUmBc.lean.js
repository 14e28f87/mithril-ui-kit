import{m as t}from"./chunks/theme.MeAZuU5r.js";import{f as e}from"./chunks/Table.BlGpiJ_h.js";import{C as s,o as h,c as C,ai as a,E as c,k as n,j as i,a as P}from"./chunks/framework.DYURIDHw.js";function m(d){let o="#3b82f6";t.mount(d,{view(){return t("div",{class:"d-grid gap-2",style:{maxWidth:"360px"}},t(e.Root,{value:o,format:"hexa",onValueChange:({value:r})=>{o=r,t.redraw()}},t(e.Label,null,"テーマカラー"),t(e.Control,null,t(e.Input,null),t(e.Trigger,null,"開く")),t(e.Positioner,null,t(e.Content,null,t(e.Area,null),t(e.ChannelSlider,{channel:"hue"}),t(e.ChannelSlider,{channel:"alpha"})))),t("div",{class:"small text-muted"},`現在値: ${o}`))}})}const u=["#ef4444","#f59e0b","#10b981","#3b82f6","#8b5cf6"];function p(d){let o=u[3];t.mount(d,{view(){return t("div",{class:"d-grid gap-2",style:{maxWidth:"360px"}},t(e.Root,{value:o,onValueChange:({value:r})=>{o=r,t.redraw()}},t(e.Label,null,"プリセット色"),t(e.Control,null,t(e.Input,null),t(e.Trigger,null,"選択")),t(e.Positioner,null,t(e.Content,null,t(e.SwatchGroup,null,u.map(r=>t(e.SwatchTrigger,{key:r,value:r})))))),t("div",{class:"small text-muted"},`現在値: ${o}`))}})}const k=`/** @jsx m */\r
import m from "mithril";\r
import { ColorPicker } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  let value = "#3b82f6";\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div class="d-grid gap-2" style={{ maxWidth: "360px" }}>\r
          <ColorPicker.Root\r
            value={value}\r
            format="hexa"\r
            onValueChange={({ value: next }) => {\r
              value = next;\r
              m.redraw();\r
            }}\r
          >\r
            <ColorPicker.Label>テーマカラー</ColorPicker.Label>\r
            <ColorPicker.Control>\r
              <ColorPicker.Input />\r
              <ColorPicker.Trigger>開く</ColorPicker.Trigger>\r
            </ColorPicker.Control>\r
            <ColorPicker.Positioner>\r
              <ColorPicker.Content>\r
                <ColorPicker.Area />\r
                <ColorPicker.ChannelSlider channel="hue" />\r
                <ColorPicker.ChannelSlider channel="alpha" />\r
              </ColorPicker.Content>\r
            </ColorPicker.Positioner>\r
          </ColorPicker.Root>\r
\r
          <div class="small text-muted">{\`現在値: \${value}\`}</div>\r
        </div>\r
      );\r
    }\r
  });\r
}`,b=`/** @jsx m */\r
import m from "mithril";\r
import { ColorPicker } from "mithril-ui-kit";\r
\r
const swatches = ["#ef4444", "#f59e0b", "#10b981", "#3b82f6", "#8b5cf6"];\r
\r
export function setup(el: HTMLElement): void {\r
  let value = swatches[3];\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div class="d-grid gap-2" style={{ maxWidth: "360px" }}>\r
          <ColorPicker.Root\r
            value={value}\r
            onValueChange={({ value: next }) => {\r
              value = next;\r
              m.redraw();\r
            }}\r
          >\r
            <ColorPicker.Label>プリセット色</ColorPicker.Label>\r
            <ColorPicker.Control>\r
              <ColorPicker.Input />\r
              <ColorPicker.Trigger>選択</ColorPicker.Trigger>\r
            </ColorPicker.Control>\r
            <ColorPicker.Positioner>\r
              <ColorPicker.Content>\r
                <ColorPicker.SwatchGroup>\r
                  {swatches.map((swatch) => (\r
                    <ColorPicker.SwatchTrigger key={swatch} value={swatch} />\r
                  ))}\r
                </ColorPicker.SwatchGroup>\r
              </ColorPicker.Content>\r
            </ColorPicker.Positioner>\r
          </ColorPicker.Root>\r
\r
          <div class="small text-muted">{\`現在値: \${value}\`}</div>\r
        </div>\r
      );\r
    }\r
  });\r
}`,x=JSON.parse('{"title":"ColorPicker","description":"","frontmatter":{},"headers":[],"relativePath":"ColorPicker.md","filePath":"ColorPicker.md"}'),g={name:"ColorPicker.md"},_=Object.assign(g,{setup(d){return(o,r)=>{const l=s("MithrilDemo");return h(),C("div",null,[r[0]||(r[0]=a("",5)),c(l,{setup:n(m),code:n(k)},null,8,["setup","code"]),r[1]||(r[1]=i("h3",{id:"プリセット色",tabindex:"-1"},[P("プリセット色 "),i("a",{class:"header-anchor",href:"#プリセット色","aria-label":'Permalink to "プリセット色"'},"​")],-1)),c(l,{setup:n(p),code:n(b)},null,8,["setup","code"]),r[2]||(r[2]=a("",5))])}}});export{x as __pageData,_ as default};
