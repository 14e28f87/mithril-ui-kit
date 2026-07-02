import{m as t}from"./chunks/theme.DVqxVbXL.js";import{o as s}from"./chunks/Table.BP7XEx9l.js";import{B as l}from"./chunks/Button.r_O5p8SK.js";import{C as h,o as k,c as g,a4 as d,E as p,k as r,j as e,a as o}from"./chunks/framework.DuWTyC0X.js";import"./chunks/Button.module.DDCwNdEl.js";function c(a){t.mount(a,{view(){return t(s.Root,{placement:"bottom",size:"sm"},t(s.Trigger,null,"詳細を開く"),t(s.Content,null,t(s.Arrow,null),t(s.Header,null,"Popover"),t(s.Body,null,"補足情報やアクションを含むポップオーバーです。"),t(s.Footer,null,t(s.CloseTrigger,null,"閉じる"))))}})}const E=`/** @jsx m */\r
import m from "mithril";\r
import { Popover } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <Popover.Root placement="bottom" size="sm">\r
          <Popover.Trigger>詳細を開く</Popover.Trigger>\r
          <Popover.Content>\r
            <Popover.Arrow />\r
            <Popover.Header>Popover</Popover.Header>\r
            <Popover.Body>補足情報やアクションを含むポップオーバーです。</Popover.Body>\r
            <Popover.Footer>\r
              <Popover.CloseTrigger>閉じる</Popover.CloseTrigger>\r
            </Popover.Footer>\r
          </Popover.Content>\r
        </Popover.Root>\r
      );\r
    },\r
  });\r
}\r
`;function u(a){t.mount(a,{view(){return t("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"}},t(s.Root,{placement:"bottom",size:"sm"},t(s.Trigger,{asChild:!0},t(l,{variant:"outline",size:"sm"},"詳細を開く")),t(s.Content,null,t(s.Arrow,null),t(s.Header,null,"asChild デモ"),t(s.Body,null,"Popover.Trigger に asChild を指定すると、Button などの カスタム要素をそのままトリガーとして利用できます。"),t(s.Footer,null,t(s.CloseTrigger,{asChild:!0},t(l,{variant:"subtle",size:"xs"},"閉じる"))))),t(s.Root,{placement:"bottom",size:"sm"},t(s.Trigger,null,"開く"),t(s.Content,null,t(s.Header,null,"CloseTrigger asChild"),t(s.Body,null,"CloseTrigger にも asChild が使えます。"),t(s.Footer,null,t(s.CloseTrigger,{asChild:!0},t("button",{style:{border:"none",background:"none",color:"var(--bs-danger, #dc3545)",cursor:"pointer",fontSize:"0.875rem"}},"✕ 閉じる"))))))}})}const C=`/** @jsx m */\r
import m from "mithril";\r
import { Button, Popover } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>\r
          {/* Trigger asChild: Button コンポーネントをトリガーとして使う */}\r
          <Popover.Root placement="bottom" size="sm">\r
            <Popover.Trigger asChild>\r
              <Button variant="outline" size="sm">詳細を開く</Button>\r
            </Popover.Trigger>\r
            <Popover.Content>\r
              <Popover.Arrow />\r
              <Popover.Header>asChild デモ</Popover.Header>\r
              <Popover.Body>\r
                Popover.Trigger に asChild を指定すると、Button などの\r
                カスタム要素をそのままトリガーとして利用できます。\r
              </Popover.Body>\r
              <Popover.Footer>\r
                <Popover.CloseTrigger asChild>\r
                  <Button variant="subtle" size="xs">閉じる</Button>\r
                </Popover.CloseTrigger>\r
              </Popover.Footer>\r
            </Popover.Content>\r
          </Popover.Root>\r
\r
          {/* CloseTrigger asChild のみ */}\r
          <Popover.Root placement="bottom" size="sm">\r
            <Popover.Trigger>開く</Popover.Trigger>\r
            <Popover.Content>\r
              <Popover.Header>CloseTrigger asChild</Popover.Header>\r
              <Popover.Body>\r
                CloseTrigger にも asChild が使えます。\r
              </Popover.Body>\r
              <Popover.Footer>\r
                <Popover.CloseTrigger asChild>\r
                  <button\r
                    style={{\r
                      border: "none",\r
                      background: "none",\r
                      color: "var(--bs-danger, #dc3545)",\r
                      cursor: "pointer",\r
                      fontSize: "0.875rem",\r
                    }}\r
                  >\r
                    ✕ 閉じる\r
                  </button>\r
                </Popover.CloseTrigger>\r
              </Popover.Footer>\r
            </Popover.Content>\r
          </Popover.Root>\r
        </div>\r
      );\r
    },\r
  });\r
}\r
`,q=JSON.parse('{"title":"Popover","description":"","frontmatter":{},"headers":[],"relativePath":"Popover.md","filePath":"Popover.md","lastUpdated":1780886590000}'),y={name:"Popover.md"},T=Object.assign(y,{setup(a){return(v,i)=>{const n=h("MithrilDemo");return k(),g("div",null,[i[0]||(i[0]=d("",4)),p(n,{setup:r(c),code:r(E)},null,8,["setup","code"]),i[1]||(i[1]=e("h2",{id:"aschild-デモ",tabindex:"-1"},[o("asChild デモ "),e("a",{class:"header-anchor",href:"#aschild-デモ","aria-label":'Permalink to "asChild デモ"'},"​")],-1)),i[2]||(i[2]=e("p",null,[e("code",null,"asChild"),o(" を使うと "),e("code",null,"Popover.Trigger"),o(" や "),e("code",null,"Popover.CloseTrigger"),o(" の既定 "),e("code",null,"<button>"),o(" ラッパーを使わず、渡した子要素をそのままトリガーとして利用できます。")],-1)),p(n,{setup:r(u),code:r(C)},null,8,["setup","code"]),i[3]||(i[3]=d("",19))])}}});export{q as __pageData,T as default};
