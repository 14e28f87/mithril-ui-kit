import{m as o}from"./chunks/theme.IYrj4rtN.js";import{A as e}from"./chunks/Table.BA6US4RP.js";import{C as m,o as I,c as s,ai as u,E as a,k as i,j as r,a as d}from"./chunks/framework.Bm_aoSIc.js";function A(n){o.mount(n,{view(){return o(e.Root,{collapsible:!0,defaultValue:["overview"],variant:"enclosed"},o(e.Item,{value:"overview"},o(e.ItemTrigger,null,"概要",o(e.ItemIndicator,null)),o(e.ItemContent,null,o(e.ItemBody,null,"現行 Chakra UI 風の Accordion.Root / Item 系 API で利用できます。"))),o(e.Item,{value:"spec"},o(e.ItemTrigger,null,"仕様",o(e.ItemIndicator,null)),o(e.ItemContent,null,o(e.ItemBody,null,"collapsible や variant、size などを組み合わせて調整できます。"))))}})}function g(n){o.mount(n,{view(){return o(e.Root,{multiple:!0,defaultValue:["a","c"],variant:"subtle",size:"sm"},o(e.Item,{value:"a"},o(e.ItemTrigger,null,"セクション A",o(e.ItemIndicator,null)),o(e.ItemContent,null,o(e.ItemBody,null,"複数の項目を同時に展開できます。"))),o(e.Item,{value:"b"},o(e.ItemTrigger,null,"セクション B",o(e.ItemIndicator,null)),o(e.ItemContent,null,o(e.ItemBody,null,"defaultValue に配列を渡して初期状態を指定できます。"))),o(e.Item,{value:"c"},o(e.ItemTrigger,null,"セクション C",o(e.ItemIndicator,null)),o(e.ItemContent,null,o(e.ItemBody,null,"lazyMount や unmountOnExit と組み合わせることも可能です。"))))}})}function p(n){let l=["second"],t=1;o.mount(n,{view(){return o("div",null,o(e.Root,{value:l,collapsible:!0,onValueChange:c=>{l=c.value,o.redraw()},onChange:c=>{t=c,o.redraw()}},o(e.Item,{value:"first"},o(e.ItemTrigger,null,"First",o(e.ItemIndicator,null)),o(e.ItemContent,null,o(e.ItemBody,null,"制御モードで value を外から管理できます。"))),o(e.Item,{value:"second"},o(e.ItemTrigger,null,"Second",o(e.ItemIndicator,null)),o(e.ItemContent,null,o(e.ItemBody,null,"旧 API 互換の onChange(index) も併用できます。")))),o("div",{style:{marginTop:"12px",fontSize:"0.9rem",color:"#617082"}},`value: ${JSON.stringify(l)} / onChange: ${JSON.stringify(t)}`))}})}function h(n){o.mount(n,{view(){return o(e.Root,{collapsible:!0,orientation:"horizontal",variant:"enclosed"},o(e.Item,{value:"tab-1"},o(e.ItemTrigger,null,"タブ1",o(e.ItemIndicator,null)),o(e.ItemContent,null,o(e.ItemBody,null,"横方向ナビゲーションの内容1。ArrowLeft / ArrowRight で移動できます。"))),o(e.Item,{value:"tab-2"},o(e.ItemTrigger,null,"タブ2",o(e.ItemIndicator,null)),o(e.ItemContent,null,o(e.ItemBody,null,"横方向ナビゲーションの内容2"))))}})}const v=`/** @jsx m */\r
import m from "mithril";\r
import { Accordion } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <Accordion.Root collapsible defaultValue={["overview"]} variant="enclosed">\r
          <Accordion.Item value="overview">\r
            <Accordion.ItemTrigger>\r
              概要\r
              <Accordion.ItemIndicator />\r
            </Accordion.ItemTrigger>\r
            <Accordion.ItemContent>\r
              <Accordion.ItemBody>現行 Chakra UI 風の Accordion.Root / Item 系 API で利用できます。</Accordion.ItemBody>\r
            </Accordion.ItemContent>\r
          </Accordion.Item>\r
\r
          <Accordion.Item value="spec">\r
            <Accordion.ItemTrigger>\r
              仕様\r
              <Accordion.ItemIndicator />\r
            </Accordion.ItemTrigger>\r
            <Accordion.ItemContent>\r
              <Accordion.ItemBody>collapsible や variant、size などを組み合わせて調整できます。</Accordion.ItemBody>\r
            </Accordion.ItemContent>\r
          </Accordion.Item>\r
        </Accordion.Root>\r
      );\r
    },\r
  });\r
}\r
`,f=`/** @jsx m */\r
import m from "mithril";\r
import { Accordion } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <Accordion.Root multiple defaultValue={["a", "c"]} variant="subtle" size="sm">\r
          <Accordion.Item value="a">\r
            <Accordion.ItemTrigger>\r
              セクション A\r
              <Accordion.ItemIndicator />\r
            </Accordion.ItemTrigger>\r
            <Accordion.ItemContent>\r
              <Accordion.ItemBody>複数の項目を同時に展開できます。</Accordion.ItemBody>\r
            </Accordion.ItemContent>\r
          </Accordion.Item>\r
\r
          <Accordion.Item value="b">\r
            <Accordion.ItemTrigger>\r
              セクション B\r
              <Accordion.ItemIndicator />\r
            </Accordion.ItemTrigger>\r
            <Accordion.ItemContent>\r
              <Accordion.ItemBody>defaultValue に配列を渡して初期状態を指定できます。</Accordion.ItemBody>\r
            </Accordion.ItemContent>\r
          </Accordion.Item>\r
\r
          <Accordion.Item value="c">\r
            <Accordion.ItemTrigger>\r
              セクション C\r
              <Accordion.ItemIndicator />\r
            </Accordion.ItemTrigger>\r
            <Accordion.ItemContent>\r
              <Accordion.ItemBody>lazyMount や unmountOnExit と組み合わせることも可能です。</Accordion.ItemBody>\r
            </Accordion.ItemContent>\r
          </Accordion.Item>\r
        </Accordion.Root>\r
      );\r
    },\r
  });\r
}\r
`,b=`/** @jsx m */\r
import m from "mithril";\r
import { Accordion } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  let value: Array<string | number> = ["second"];\r
  let legacyIndex: number | number[] = 1;\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div>\r
          <Accordion.Root\r
            value={value}\r
            collapsible\r
            onValueChange={(details) => {\r
              value = details.value;\r
              m.redraw();\r
            }}\r
            onChange={(index) => {\r
              legacyIndex = index;\r
              m.redraw();\r
            }}\r
          >\r
            <Accordion.Item value="first">\r
              <Accordion.ItemTrigger>\r
                First\r
                <Accordion.ItemIndicator />\r
              </Accordion.ItemTrigger>\r
              <Accordion.ItemContent>\r
                <Accordion.ItemBody>制御モードで value を外から管理できます。</Accordion.ItemBody>\r
              </Accordion.ItemContent>\r
            </Accordion.Item>\r
\r
            <Accordion.Item value="second">\r
              <Accordion.ItemTrigger>\r
                Second\r
                <Accordion.ItemIndicator />\r
              </Accordion.ItemTrigger>\r
              <Accordion.ItemContent>\r
                <Accordion.ItemBody>旧 API 互換の onChange(index) も併用できます。</Accordion.ItemBody>\r
              </Accordion.ItemContent>\r
            </Accordion.Item>\r
          </Accordion.Root>\r
\r
          <div style={{ marginTop: "12px", fontSize: "0.9rem", color: "#617082" }}>\r
            {\`value: \${JSON.stringify(value)} / onChange: \${JSON.stringify(legacyIndex)}\`}\r
          </div>\r
        </div>\r
      );\r
    },\r
  });\r
}\r
`,C=`/** @jsx m */\r
import m from "mithril";\r
import { Accordion } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <Accordion.Root collapsible orientation="horizontal" variant="enclosed">\r
          <Accordion.Item value="tab-1">\r
            <Accordion.ItemTrigger>\r
              タブ1\r
              <Accordion.ItemIndicator />\r
            </Accordion.ItemTrigger>\r
            <Accordion.ItemContent>\r
              <Accordion.ItemBody>横方向ナビゲーションの内容1。ArrowLeft / ArrowRight で移動できます。</Accordion.ItemBody>\r
            </Accordion.ItemContent>\r
          </Accordion.Item>\r
          <Accordion.Item value="tab-2">\r
            <Accordion.ItemTrigger>\r
              タブ2\r
              <Accordion.ItemIndicator />\r
            </Accordion.ItemTrigger>\r
            <Accordion.ItemContent>\r
              <Accordion.ItemBody>横方向ナビゲーションの内容2</Accordion.ItemBody>\r
            </Accordion.ItemContent>\r
          </Accordion.Item>\r
        </Accordion.Root>\r
      );\r
    },\r
  });\r
}\r
`,B=JSON.parse('{"title":"Accordion","description":"","frontmatter":{},"headers":[],"relativePath":"Accordion.md","filePath":"Accordion.md"}'),y={name:"Accordion.md"},w=Object.assign(y,{setup(n){return(l,t)=>{const c=m("MithrilDemo");return I(),s("div",null,[t[0]||(t[0]=u("",8)),a(c,{setup:i(A),code:i(v)},null,8,["setup","code"]),t[1]||(t[1]=r("h3",{id:"複数展開",tabindex:"-1"},[d("複数展開 "),r("a",{class:"header-anchor",href:"#複数展開","aria-label":'Permalink to "複数展開"'},"​")],-1)),t[2]||(t[2]=r("p",null,[r("code",null,"multiple"),d(" を指定すると、複数の項目を同時に開くことができます。")],-1)),a(c,{setup:i(g),code:i(f)},null,8,["setup","code"]),t[3]||(t[3]=r("h3",{id:"制御モード",tabindex:"-1"},[d("制御モード "),r("a",{class:"header-anchor",href:"#制御モード","aria-label":'Permalink to "制御モード"'},"​")],-1)),t[4]||(t[4]=r("p",null,[r("code",null,"value"),d(" と "),r("code",null,"onValueChange"),d(" を使うと、外部から展開状態を完全に制御できます。")],-1)),a(c,{setup:i(p),code:i(b)},null,8,["setup","code"]),t[5]||(t[5]=r("h3",{id:"orientation-横スクロールキーボードナビゲーション",tabindex:"-1"},[d("orientation（横スクロールキーボードナビゲーション） "),r("a",{class:"header-anchor",href:"#orientation-横スクロールキーボードナビゲーション","aria-label":'Permalink to "orientation（横スクロールキーボードナビゲーション）"'},"​")],-1)),t[6]||(t[6]=r("p",null,[r("code",null,'orientation="horizontal"'),d(" を指定すると、キーボードナビゲーションが "),r("code",null,"ArrowLeft"),d(" / "),r("code",null,"ArrowRight"),d(" に変わります。")],-1)),a(c,{setup:i(h),code:i(C)},null,8,["setup","code"]),t[7]||(t[7]=u("",7))])}}});export{B as __pageData,w as default};
