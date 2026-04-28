import{m as t}from"./chunks/theme.BHMR1ScI.js";import{R as d}from"./chunks/Table.DpkFVNUa.js";import{C as m,o as u,c as s,a4 as i,E as l,k as o,j as c,a as C}from"./chunks/framework.DuWTyC0X.js";function h(r){let a="manual";t.mount(r,{view(){return t("div",{class:"d-grid gap-2",style:{maxWidth:"420px"}},t(d.Root,{value:a,onValueChange:e=>{a=e,t.redraw()}},t(d.Item,{value:"manual"},t(d.ItemControl,null,t(d.ItemIndicator,null)),t(d.ItemText,null,"手動運転")),t(d.Item,{value:"auto"},t(d.ItemControl,null,t(d.ItemIndicator,null)),t(d.ItemText,null,"自動運転")),t(d.Item,{value:"maintenance"},t(d.ItemControl,null,t(d.ItemIndicator,null)),t(d.ItemText,null,"保守モード"))),t("div",{class:"small text-muted"},`選択値: ${a}`))}})}function I(r){let a="line-a";t.mount(r,{view(){return t("div",{class:"d-grid gap-2"},t(d.Root,{value:a,orientation:"horizontal",onValueChange:e=>{a=e,t.redraw()}},t(d.Item,{value:"line-a"},t(d.ItemControl,null,t(d.ItemIndicator,null)),t(d.ItemText,null,"ライン A")),t(d.Item,{value:"line-b"},t(d.ItemControl,null,t(d.ItemIndicator,null)),t(d.ItemText,null,"ライン B"))),t("div",{class:"small text-muted"},`選択値: ${a}`))}})}const R=`/** @jsx m */\r
/** @jsxRuntime classic */\r
import m from "mithril";\r
import { RadioCard } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  let value = "manual";\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div class="d-grid gap-2" style={{ maxWidth: "420px" }}>\r
          <RadioCard.Root\r
            value={value}\r
            onValueChange={(nextValue: string) => {\r
              value = nextValue;\r
              m.redraw();\r
            }}\r
          >\r
            <RadioCard.Item value="manual">\r
              <RadioCard.ItemControl>\r
                <RadioCard.ItemIndicator />\r
              </RadioCard.ItemControl>\r
              <RadioCard.ItemText>手動運転</RadioCard.ItemText>\r
            </RadioCard.Item>\r
            <RadioCard.Item value="auto">\r
              <RadioCard.ItemControl>\r
                <RadioCard.ItemIndicator />\r
              </RadioCard.ItemControl>\r
              <RadioCard.ItemText>自動運転</RadioCard.ItemText>\r
            </RadioCard.Item>\r
            <RadioCard.Item value="maintenance">\r
              <RadioCard.ItemControl>\r
                <RadioCard.ItemIndicator />\r
              </RadioCard.ItemControl>\r
              <RadioCard.ItemText>保守モード</RadioCard.ItemText>\r
            </RadioCard.Item>\r
          </RadioCard.Root>\r
\r
          <div class="small text-muted">{\`選択値: \${value}\`}</div>\r
        </div>\r
      );\r
    }\r
  });\r
}`,p=`/** @jsx m */\r
import m from "mithril";\r
import { RadioCard } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  let value = "line-a";\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div class="d-grid gap-2">\r
          <RadioCard.Root\r
            value={value}\r
            orientation="horizontal"\r
            onValueChange={(nextValue: string) => {\r
              value = nextValue;\r
              m.redraw();\r
            }}\r
          >\r
            <RadioCard.Item value="line-a">\r
              <RadioCard.ItemControl>\r
                <RadioCard.ItemIndicator />\r
              </RadioCard.ItemControl>\r
              <RadioCard.ItemText>ライン A</RadioCard.ItemText>\r
            </RadioCard.Item>\r
            <RadioCard.Item value="line-b">\r
              <RadioCard.ItemControl>\r
                <RadioCard.ItemIndicator />\r
              </RadioCard.ItemControl>\r
              <RadioCard.ItemText>ライン B</RadioCard.ItemText>\r
            </RadioCard.Item>\r
          </RadioCard.Root>\r
\r
          <div class="small text-muted">{\`選択値: \${value}\`}</div>\r
        </div>\r
      );\r
    }\r
  });\r
}`,f=JSON.parse('{"title":"RadioCard","description":"","frontmatter":{},"headers":[],"relativePath":"RadioCard.md","filePath":"RadioCard.md","lastUpdated":1776836643000}'),v={name:"RadioCard.md"},T=Object.assign(v,{setup(r){return(a,e)=>{const n=m("MithrilDemo");return u(),s("div",null,[e[0]||(e[0]=i("",5)),l(n,{setup:o(h),code:o(R)},null,8,["setup","code"]),e[1]||(e[1]=c("h3",{id:"横並び",tabindex:"-1"},[C("横並び "),c("a",{class:"header-anchor",href:"#横並び","aria-label":'Permalink to "横並び"'},"​")],-1)),l(n,{setup:o(I),code:o(p)},null,8,["setup","code"]),e[2]||(e[2]=i("",7))])}}});export{f as __pageData,T as default};
