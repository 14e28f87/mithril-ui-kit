import{m as s}from"./chunks/theme.XnzwSjk8.js";import{O as a}from"./chunks/Table.B_fZamCg.js";import{C as h,o as p,c as k,ai as l,E as r,k as d}from"./chunks/framework.Bm_aoSIc.js";function o(e){let n="未実行";s.mount(e,{view(){return s("div",null,s("div",{class:"d-flex gap-2 flex-wrap mb-3"},s("button",{class:"btn btn-primary btn-sm",onclick:async()=>{n=await a.show({size:"md",placement:"end",content:{view(i){return s(a.Content,null,s(a.Header,null,s(a.Title,null,"メニュー"),s(a.CloseTrigger,null)),s(a.Body,null,s("p",null,"Offcanvas の内容です。"),s("ul",{class:"list-group"},s("li",{class:"list-group-item"},"項目A"),s("li",{class:"list-group-item"},"項目B"))),s(a.Footer,null,s("button",{class:"btn btn-secondary btn-sm",onclick:()=>i.attrs.hide()},"閉じる"),s("button",{class:"btn btn-primary btn-sm",onclick:()=>i.attrs.resolve(!0)},"OK")))}}})?"OK":"閉じた",s.redraw()}},"Offcanvas を開く")),s("div",{class:"d-flex gap-2 flex-wrap mb-3"},["start","end","top","bottom"].map(t=>s("button",{class:"btn btn-outline-secondary btn-sm",onclick:async()=>{await a.show({size:"md",placement:t,content:{view(i){return s(a.Content,null,s(a.Header,null,s(a.Title,null,"placement: ",t),s(a.CloseTrigger,null)),s(a.Body,null,s("p",null,"配置: ",t)))}}}),s.redraw()}},t))),s("div",{class:"mt-2 text-muted small"},`結果: ${n}`))}})}const c=`/** @jsx m */\r
import m from "mithril";\r
import { Offcanvas, type OffcanvasContentInjectedAttrs, type OffcanvasPlacement } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  let result = "未実行";\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div>\r
          {/* 命令的 API: 基本 */}\r
          <div class="d-flex gap-2 flex-wrap mb-3">\r
            <button\r
              class="btn btn-primary btn-sm"\r
              onclick={async () => {\r
                const ok = await Offcanvas.show<boolean>({\r
                  size: "md",\r
                  placement: "end",\r
                  content: {\r
                    view(vnode: m.Vnode<OffcanvasContentInjectedAttrs<boolean>>) {\r
                      return (\r
                        <Offcanvas.Content>\r
                          <Offcanvas.Header>\r
                            <Offcanvas.Title>メニュー</Offcanvas.Title>\r
                            <Offcanvas.CloseTrigger />\r
                          </Offcanvas.Header>\r
                          <Offcanvas.Body>\r
                            <p>Offcanvas の内容です。</p>\r
                            <ul class="list-group">\r
                              <li class="list-group-item">項目A</li>\r
                              <li class="list-group-item">項目B</li>\r
                            </ul>\r
                          </Offcanvas.Body>\r
                          <Offcanvas.Footer>\r
                            <button class="btn btn-secondary btn-sm" onclick={() => vnode.attrs.hide()}>閉じる</button>\r
                            <button class="btn btn-primary btn-sm" onclick={() => vnode.attrs.resolve(true)}>OK</button>\r
                          </Offcanvas.Footer>\r
                        </Offcanvas.Content>\r
                      );\r
                    },\r
                  },\r
                });\r
                result = ok ? "OK" : "閉じた";\r
                m.redraw();\r
              }}\r
            >\r
              Offcanvas を開く\r
            </button>\r
          </div>\r
\r
          {/* 配置バリエーション */}\r
          <div class="d-flex gap-2 flex-wrap mb-3">\r
            {(["start", "end", "top", "bottom"] as OffcanvasPlacement[]).map((p) => (\r
              <button\r
                class="btn btn-outline-secondary btn-sm"\r
                onclick={async () => {\r
                  await Offcanvas.show<boolean>({\r
                    size: "md",\r
                    placement: p,\r
                    content: {\r
                      view(vnode: m.Vnode<OffcanvasContentInjectedAttrs<boolean>>) {\r
                        return (\r
                          <Offcanvas.Content>\r
                            <Offcanvas.Header>\r
                              <Offcanvas.Title>placement: {p}</Offcanvas.Title>\r
                              <Offcanvas.CloseTrigger />\r
                            </Offcanvas.Header>\r
                            <Offcanvas.Body>\r
                              <p>配置: {p}</p>\r
                            </Offcanvas.Body>\r
                          </Offcanvas.Content>\r
                        );\r
                      },\r
                    },\r
                  });\r
                  m.redraw();\r
                }}\r
              >\r
                {p}\r
              </button>\r
            ))}\r
          </div>\r
\r
          <div class="mt-2 text-muted small">{\`結果: \${result}\`}</div>\r
        </div>\r
      );\r
    },\r
  });\r
}\r
`,v=JSON.parse('{"title":"Offcanvas","description":"","frontmatter":{},"headers":[],"relativePath":"Offcanvas.md","filePath":"Offcanvas.md"}'),E={name:"Offcanvas.md"},u=Object.assign(E,{setup(e){return(n,t)=>{const i=h("MithrilDemo");return p(),k("div",null,[t[0]||(t[0]=l("",6)),r(i,{setup:d(o),code:d(c)},null,8,["setup","code"]),t[1]||(t[1]=l("",18))])}}});export{v as __pageData,u as default};
