import{m as t}from"./chunks/theme.CIfTaYq1.js";import{I as e}from"./chunks/Table.B255pMpr.js";import{C as m,o as s,c as p,ai as c,E as l,k as o,j as n,a as i}from"./chunks/framework.Bm_aoSIc.js";function b(d){t.mount(d,{view(){return t(e.Root,{defaultValue:10,min:0,max:100},t(e.Input,null),t(e.Control,null))}})}function h(d){t.mount(d,{view(){return t(e.Root,{defaultValue:50,min:0,max:100,step:5},t(e.DecrementTrigger,null),t(e.Input,null),t(e.IncrementTrigger,null))}})}function I(d){let a=42;t.mount(d,{view(){return t("div",{style:{display:"flex",flexDirection:"column",gap:"8px"}},t(e.Root,{value:a,min:0,max:100,onValueChange:r=>{a=r.value,t.redraw()}},t(e.Input,null),t(e.Control,null)),t("div",{style:{fontSize:"12px",color:"#666"}},`value: ${a}`))}})}function f(d){t.mount(d,{view(){return t(e.Root,{defaultValue:3.14,min:0,max:10,step:.01,precision:2},t(e.Label,null,"精度 (precision=2)"),t(e.Input,null),t(e.Control,null),t(e.ValueText,null))}})}function g(d){t.mount(d,{view(){return t("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},t("div",null,t("div",{style:{fontSize:"0.8rem",color:"#888",marginBottom:"4px"}},'variant="filled" size="lg"'),t(e.Root,{defaultValue:10,variant:"filled",size:"lg"},t(e.Input,null),t(e.Control,null))),t("div",null,t("div",{style:{fontSize:"0.8rem",color:"#888",marginBottom:"4px"}},'variant="flushed" size="sm"'),t(e.Root,{defaultValue:10,variant:"flushed",size:"sm"},t(e.Input,null),t(e.Control,null))),t("div",null,t("div",{style:{fontSize:"0.8rem",color:"#888",marginBottom:"4px"}},'variant="outline" size="xs"'),t(e.Root,{defaultValue:10,variant:"outline",size:"xs"},t(e.Input,null),t(e.Control,null))))}})}const v=`/** @jsx m */\r
import m from "mithril";\r
import { NumberInput } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <NumberInput.Root defaultValue={10} min={0} max={100}>\r
          <NumberInput.Input />\r
          <NumberInput.Control />\r
        </NumberInput.Root>\r
      );\r
    },\r
  });\r
}\r
`,x=`/** @jsx m */\r
import m from "mithril";\r
import { NumberInput } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <NumberInput.Root defaultValue={50} min={0} max={100} step={5}>\r
          <NumberInput.DecrementTrigger />\r
          <NumberInput.Input />\r
          <NumberInput.IncrementTrigger />\r
        </NumberInput.Root>\r
      );\r
    },\r
  });\r
}\r
`,N=`/** @jsx m */\r
import m from "mithril";\r
import { NumberInput } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  let value: number | null = 42;\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>\r
          <NumberInput.Root\r
            value={value}\r
            min={0}\r
            max={100}\r
            onValueChange={(d) => { value = d.value; m.redraw(); }}\r
          >\r
            <NumberInput.Input />\r
            <NumberInput.Control />\r
          </NumberInput.Root>\r
          <div style={{ fontSize: "12px", color: "#666" }}>{\`value: \${value}\`}</div>\r
        </div>\r
      );\r
    },\r
  });\r
}\r
`,q=`/** @jsx m */\r
import m from "mithril";\r
import { NumberInput } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <NumberInput.Root defaultValue={3.14} min={0} max={10} step={0.01} precision={2}>\r
          <NumberInput.Label>精度 (precision=2)</NumberInput.Label>\r
          <NumberInput.Input />\r
          <NumberInput.Control />\r
          <NumberInput.ValueText />\r
        </NumberInput.Root>\r
      );\r
    },\r
  });\r
}\r
`,T=`/** @jsx m */\r
import m from "mithril";\r
import { NumberInput } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>\r
          <div>\r
            <div style={{ fontSize: "0.8rem", color: "#888", marginBottom: "4px" }}>variant="filled" size="lg"</div>\r
            <NumberInput.Root defaultValue={10} variant="filled" size="lg">\r
              <NumberInput.Input />\r
              <NumberInput.Control />\r
            </NumberInput.Root>\r
          </div>\r
          <div>\r
            <div style={{ fontSize: "0.8rem", color: "#888", marginBottom: "4px" }}>variant="flushed" size="sm"</div>\r
            <NumberInput.Root defaultValue={10} variant="flushed" size="sm">\r
              <NumberInput.Input />\r
              <NumberInput.Control />\r
            </NumberInput.Root>\r
          </div>\r
          <div>\r
            <div style={{ fontSize: "0.8rem", color: "#888", marginBottom: "4px" }}>variant="outline" size="xs"</div>\r
            <NumberInput.Root defaultValue={10} variant="outline" size="xs">\r
              <NumberInput.Input />\r
              <NumberInput.Control />\r
            </NumberInput.Root>\r
          </div>\r
        </div>\r
      );\r
    },\r
  });\r
}\r
`,P=JSON.parse('{"title":"NumberInput","description":"","frontmatter":{},"headers":[],"relativePath":"NumberInput.md","filePath":"NumberInput.md"}'),y={name:"NumberInput.md"},_=Object.assign(y,{setup(d){return(a,r)=>{const u=m("MithrilDemo");return s(),p("div",null,[r[0]||(r[0]=c("",6)),l(u,{setup:o(b),code:o(v)},null,8,["setup","code"]),r[1]||(r[1]=n("h3",{id:"単独の増減ボタン",tabindex:"-1"},[i("単独の増減ボタン "),n("a",{class:"header-anchor",href:"#単独の増減ボタン","aria-label":'Permalink to "単独の増減ボタン"'},"​")],-1)),l(u,{setup:o(h),code:o(x)},null,8,["setup","code"]),r[2]||(r[2]=n("h3",{id:"制御モード-controlled",tabindex:"-1"},[i("制御モード（controlled） "),n("a",{class:"header-anchor",href:"#制御モード-controlled","aria-label":'Permalink to "制御モード（controlled）"'},"​")],-1)),l(u,{setup:o(I),code:o(N)},null,8,["setup","code"]),r[3]||(r[3]=n("h3",{id:"小数点精度-label-valuetext",tabindex:"-1"},[i("小数点精度 + Label + ValueText "),n("a",{class:"header-anchor",href:"#小数点精度-label-valuetext","aria-label":'Permalink to "小数点精度 + Label + ValueText"'},"​")],-1)),l(u,{setup:o(f),code:o(q)},null,8,["setup","code"]),r[4]||(r[4]=n("h3",{id:"variant-size-バリエーション",tabindex:"-1"},[i("variant / size バリエーション "),n("a",{class:"header-anchor",href:"#variant-size-バリエーション","aria-label":'Permalink to "variant / size バリエーション"'},"​")],-1)),l(u,{setup:o(g),code:o(T)},null,8,["setup","code"]),r[5]||(r[5]=c("",11))])}}});export{P as __pageData,_ as default};
