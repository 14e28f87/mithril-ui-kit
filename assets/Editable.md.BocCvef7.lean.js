import{m as t}from"./chunks/theme.BHMR1ScI.js";import{o as d}from"./chunks/Table.DpkFVNUa.js";import{C as u,o as s,c as b,a4 as n,E as i,k as a,j as c,a as m}from"./chunks/framework.DuWTyC0X.js";function g(r){let o="窯焼成プラン A";t.mount(r,{view(){return t("div",{class:"d-grid gap-2",style:{maxWidth:"420px"}},t(d.Root,{value:o,activationMode:"dblclick",submitMode:"none",onValueChange:({value:e})=>{o=e,t.redraw()}},t(d.Label,null,"プラン名"),t(d.Preview,null),t(d.Input,null),t(d.Control,null,t(d.EditTrigger,null,"編集"),t(d.SubmitTrigger,null,"保存"),t(d.CancelTrigger,null,"取消"))),t("div",{class:"small text-muted"},"ダブルクリックで編集を開始します。"),t("div",{class:"small text-muted"},`現在値: ${o}`))}})}function h(r){let o="原料投入後に 15 分保持し、その後 10 度ずつ昇温します。";t.mount(r,{view(){return t("div",{class:"d-grid gap-2",style:{maxWidth:"480px"}},t(d.Root,{value:o,activationMode:"click",submitMode:"none",onValueChange:({value:e})=>{o=e,t.redraw()}},t(d.Label,null,"メモ"),t(d.Preview,null),t(d.Textarea,null),t(d.Control,null,t(d.EditTrigger,null,"編集"),t(d.SubmitTrigger,null,"保存"),t(d.CancelTrigger,null,"取消"))),t("div",{class:"small text-muted"},"クリックで複数行メモを編集できます。"))}})}const p=`/** @jsx m */\r
import m from "mithril";\r
import { Editable } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  let value = "窯焼成プラン A";\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div class="d-grid gap-2" style={{ maxWidth: "420px" }}>\r
          <Editable.Root\r
            value={value}\r
            activationMode="dblclick"\r
            submitMode="none"\r
            onValueChange={({ value: next }) => {\r
              value = next;\r
              m.redraw();\r
            }}\r
          >\r
            <Editable.Label>プラン名</Editable.Label>\r
            <Editable.Preview />\r
            <Editable.Input />\r
            <Editable.Control>\r
              <Editable.EditTrigger>編集</Editable.EditTrigger>\r
              <Editable.SubmitTrigger>保存</Editable.SubmitTrigger>\r
              <Editable.CancelTrigger>取消</Editable.CancelTrigger>\r
            </Editable.Control>\r
          </Editable.Root>\r
\r
          <div class="small text-muted">ダブルクリックで編集を開始します。</div>\r
          <div class="small text-muted">{\`現在値: \${value}\`}</div>\r
        </div>\r
      );\r
    }\r
  });\r
}`,E=`/** @jsx m */\r
import m from "mithril";\r
import { Editable } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  let notes = "原料投入後に 15 分保持し、その後 10 度ずつ昇温します。";\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div class="d-grid gap-2" style={{ maxWidth: "480px" }}>\r
          <Editable.Root\r
            value={notes}\r
            activationMode="click"\r
            submitMode="none"\r
            onValueChange={({ value }) => {\r
              notes = value;\r
              m.redraw();\r
            }}\r
          >\r
            <Editable.Label>メモ</Editable.Label>\r
            <Editable.Preview />\r
            <Editable.Textarea />\r
            <Editable.Control>\r
              <Editable.EditTrigger>編集</Editable.EditTrigger>\r
              <Editable.SubmitTrigger>保存</Editable.SubmitTrigger>\r
              <Editable.CancelTrigger>取消</Editable.CancelTrigger>\r
            </Editable.Control>\r
          </Editable.Root>\r
\r
          <div class="small text-muted">クリックで複数行メモを編集できます。</div>\r
        </div>\r
      );\r
    }\r
  });\r
}`,f=JSON.parse('{"title":"Editable","description":"","frontmatter":{},"headers":[],"relativePath":"Editable.md","filePath":"Editable.md","lastUpdated":1776836643000}'),v={name:"Editable.md"},_=Object.assign(v,{setup(r){return(o,e)=>{const l=u("MithrilDemo");return s(),b("div",null,[e[0]||(e[0]=n("",5)),i(l,{setup:a(g),code:a(p)},null,8,["setup","code"]),e[1]||(e[1]=c("h3",{id:"複数行編集",tabindex:"-1"},[m("複数行編集 "),c("a",{class:"header-anchor",href:"#複数行編集","aria-label":'Permalink to "複数行編集"'},"​")],-1)),i(l,{setup:a(h),code:a(E)},null,8,["setup","code"]),e[2]||(e[2]=n("",5))])}}});export{f as __pageData,_ as default};
