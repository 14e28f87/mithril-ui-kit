import{m as s}from"./chunks/theme.XnzwSjk8.js";import{k as i}from"./chunks/Table.B_fZamCg.js";import{C as r,o as l,c as p,ai as a,E as h,k as o}from"./chunks/framework.Bm_aoSIc.js";function k(t){s.mount(t,{view(){return s(i.Root,{placement:"bottom",size:"sm"},s(i.Trigger,null,"詳細を開く"),s(i.Content,null,s(i.Arrow,null),s(i.Header,null,"Popover2"),s(i.Body,null,"補足情報やアクションを含むポップオーバーです。"),s(i.Footer,null,s(i.CloseTrigger,null,"閉じる"))))}})}const d=`/** @jsx m */\r
import m from "mithril";\r
import { Popover2 } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <Popover2.Root placement="bottom" size="sm">\r
          <Popover2.Trigger>詳細を開く</Popover2.Trigger>\r
          <Popover2.Content>\r
            <Popover2.Arrow />\r
            <Popover2.Header>Popover2</Popover2.Header>\r
            <Popover2.Body>補足情報やアクションを含むポップオーバーです。</Popover2.Body>\r
            <Popover2.Footer>\r
              <Popover2.CloseTrigger>閉じる</Popover2.CloseTrigger>\r
            </Popover2.Footer>\r
          </Popover2.Content>\r
        </Popover2.Root>\r
      );\r
    },\r
  });\r
}\r
`,P=JSON.parse('{"title":"Popover","description":"","frontmatter":{},"headers":[],"relativePath":"Popover.md","filePath":"Popover.md"}'),E={name:"Popover.md"},m=Object.assign(E,{setup(t){return(g,e)=>{const n=r("MithrilDemo");return l(),p("div",null,[e[0]||(e[0]=a("",4)),h(n,{setup:o(k),code:o(d)},null,8,["setup","code"]),e[1]||(e[1]=a("",4))])}}});export{P as __pageData,m as default};
