import{m as s}from"./chunks/theme.IYrj4rtN.js";import{i as o}from"./chunks/Table.BA6US4RP.js";import{C as p,o as d,c as h,ai as t,E as c,k as r}from"./chunks/framework.Bm_aoSIc.js";function k(i){let e=null,a="closed";const n={view(l){return s("div",{class:"card shadow-sm",style:{width:"320px"}},s("div",{class:"card-body"},s("h5",{class:"card-title"},"Overlay Content"),s("p",{class:"card-text"},"Overlay の基盤クラスのデモです。"),s("button",{class:"btn btn-primary",onclick:()=>l.attrs.hide()},"閉じる")))}};s.mount(i,{view(){return s("div",null,s("button",{class:"btn btn-primary",onclick:()=>{e=new o(n,{closeOnEscapeKey:!0,closeOnOutsideClick:!0,hasBackdrop:!0}),e.show(),a="open",s.redraw()}},"Overlayを表示"),s("div",{class:"mt-2 text-muted small"},`状態: ${a}`))}})}const u=`/** @jsx m */\r
import m from "mithril";\r
import { Overlay } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  let overlayRef: Overlay | null = null;\r
  let status = "closed";\r
\r
  const Content: m.Component<any> = {\r
    view(vnode: m.Vnode<any>) {\r
      return (\r
        <div class="card shadow-sm" style={{ width: "320px" }}>\r
          <div class="card-body">\r
            <h5 class="card-title">Overlay Content</h5>\r
            <p class="card-text">Overlay の基盤クラスのデモです。</p>\r
            <button class="btn btn-primary" onclick={() => vnode.attrs.hide()}>閉じる</button>\r
          </div>\r
        </div>\r
      );\r
    }\r
  };\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div>\r
          <button\r
            class="btn btn-primary"\r
            onclick={() => {\r
              overlayRef = new Overlay(Content, {\r
                closeOnEscapeKey: true,\r
                closeOnOutsideClick: true,\r
                hasBackdrop: true\r
              });\r
              overlayRef.show();\r
              status = "open";\r
              m.redraw();\r
            }}\r
          >\r
            Overlayを表示\r
          </button>\r
          <div class="mt-2 text-muted small">{\`状態: \${status}\`}</div>\r
        </div>\r
      );\r
    }\r
  });\r
}\r
`,b=JSON.parse('{"title":"Overlay","description":"","frontmatter":{},"headers":[],"relativePath":"Overlay.md","filePath":"Overlay.md"}'),y={name:"Overlay.md"},O=Object.assign(y,{setup(i){return(e,a)=>{const n=p("MithrilDemo");return d(),h("div",null,[a[0]||(a[0]=t("",4)),c(n,{setup:r(k),code:r(u)},null,8,["setup","code"]),a[1]||(a[1]=t("",4))])}}});export{b as __pageData,O as default};
