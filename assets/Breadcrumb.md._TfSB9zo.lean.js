import{m as r}from"./chunks/theme.BHMR1ScI.js";import{B as e}from"./chunks/Table.DpkFVNUa.js";import{C as m,o as c,c as s,a4 as l,E as u,k as a,j as n,a as o}from"./chunks/framework.DuWTyC0X.js";function b(d){r.mount(d,{view(){return r(e.Root,{variant:"underline",size:"md"},r(e.List,null,r(e.Item,null,r(e.Link,{href:"#"},"ホーム"),r(e.Separator,null)),r(e.Item,null,r(e.Link,{href:"#"},"ライブラリ"),r(e.Separator,null)),r(e.Item,null,r(e.CurrentLink,null,"Breadcrumb2"))))}})}function p(d){r.mount(d,{view(){return r(e.Root,{separator:"›"},r(e.List,null,r(e.Item,null,r(e.Link,{href:"#"},"ホーム"),r(e.Separator,null)),r(e.Item,null,r(e.Link,{href:"#"},"カテゴリ"),r(e.Separator,null)),r(e.Item,null,r(e.CurrentLink,null,"現在のページ"))))}})}function B(d){r.mount(d,{view(){return r(e.Root,null,r(e.List,null,r(e.Item,null,r(e.Link,{href:"#"},"ホーム"),r(e.Separator,null)),r(e.Item,null,r(e.Ellipsis,null),r(e.Separator,null)),r(e.Item,null,r(e.Link,{href:"#"},"カテゴリ"),r(e.Separator,null)),r(e.Item,null,r(e.CurrentLink,null,"詳細ページ"))))}})}function h(d){r.mount(d,{view(){return r("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},r("div",null,r("div",{style:{fontSize:"0.8rem",color:"#888",marginBottom:"4px"}},'size="sm"'),r(e.Root,{size:"sm"},r(e.List,null,r(e.Item,null,r(e.Link,{href:"#"},"Home"),r(e.Separator,null)),r(e.Item,null,r(e.CurrentLink,null,"Page"))))),r("div",null,r("div",{style:{fontSize:"0.8rem",color:"#888",marginBottom:"4px"}},'size="md"'),r(e.Root,{size:"md"},r(e.List,null,r(e.Item,null,r(e.Link,{href:"#"},"Home"),r(e.Separator,null)),r(e.Item,null,r(e.CurrentLink,null,"Page"))))),r("div",null,r("div",{style:{fontSize:"0.8rem",color:"#888",marginBottom:"4px"}},'size="lg"'),r(e.Root,{size:"lg"},r(e.List,null,r(e.Item,null,r(e.Link,{href:"#"},"Home"),r(e.Separator,null)),r(e.Item,null,r(e.CurrentLink,null,"Page"))))))}})}function L(d){r.mount(d,{view(){return r("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},r("div",null,r("div",{style:{fontSize:"0.8rem",color:"#888",marginBottom:"4px"}},'variant="underline"'),r(e.Root,{variant:"underline"},r(e.List,null,r(e.Item,null,r(e.Link,{href:"#"},"ホーム"),r(e.Separator,null)),r(e.Item,null,r(e.Link,{href:"#"},"製品"),r(e.Separator,null)),r(e.Item,null,r(e.CurrentLink,null,"詳細"))))),r("div",null,r("div",{style:{fontSize:"0.8rem",color:"#888",marginBottom:"4px"}},'variant="plain"'),r(e.Root,{variant:"plain"},r(e.List,null,r(e.Item,null,r(e.Link,{href:"#"},"ホーム"),r(e.Separator,null)),r(e.Item,null,r(e.Link,{href:"#"},"製品"),r(e.Separator,null)),r(e.Item,null,r(e.CurrentLink,null,"詳細"))))))}})}const f=`/** @jsx m */\r
import m from "mithril";\r
import { Breadcrumb2 } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <Breadcrumb2.Root variant="underline" size="md">\r
          <Breadcrumb2.List>\r
            <Breadcrumb2.Item>\r
              <Breadcrumb2.Link href="#">ホーム</Breadcrumb2.Link>\r
              <Breadcrumb2.Separator />\r
            </Breadcrumb2.Item>\r
            <Breadcrumb2.Item>\r
              <Breadcrumb2.Link href="#">ライブラリ</Breadcrumb2.Link>\r
              <Breadcrumb2.Separator />\r
            </Breadcrumb2.Item>\r
            <Breadcrumb2.Item>\r
              <Breadcrumb2.CurrentLink>Breadcrumb2</Breadcrumb2.CurrentLink>\r
            </Breadcrumb2.Item>\r
          </Breadcrumb2.List>\r
        </Breadcrumb2.Root>\r
      );\r
    },\r
  });\r
}\r
`,k=`/** @jsx m */\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
import m from "mithril";\r
import { Breadcrumb2 } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <Breadcrumb2.Root separator="›">\r
          <Breadcrumb2.List>\r
            <Breadcrumb2.Item>\r
              <Breadcrumb2.Link href="#">ホーム</Breadcrumb2.Link>\r
              <Breadcrumb2.Separator />\r
            </Breadcrumb2.Item>\r
            <Breadcrumb2.Item>\r
              <Breadcrumb2.Link href="#">カテゴリ</Breadcrumb2.Link>\r
              <Breadcrumb2.Separator />\r
            </Breadcrumb2.Item>\r
            <Breadcrumb2.Item>\r
              <Breadcrumb2.CurrentLink>現在のページ</Breadcrumb2.CurrentLink>\r
            </Breadcrumb2.Item>\r
          </Breadcrumb2.List>\r
        </Breadcrumb2.Root>\r
      );\r
    },\r
  });\r
}\r
`,v=`/** @jsx m */\r
import m from "mithril";\r
import { Breadcrumb2 } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <Breadcrumb2.Root>\r
          <Breadcrumb2.List>\r
            <Breadcrumb2.Item>\r
              <Breadcrumb2.Link href="#">ホーム</Breadcrumb2.Link>\r
              <Breadcrumb2.Separator />\r
            </Breadcrumb2.Item>\r
            <Breadcrumb2.Item>\r
              <Breadcrumb2.Ellipsis />\r
              <Breadcrumb2.Separator />\r
            </Breadcrumb2.Item>\r
            <Breadcrumb2.Item>\r
              <Breadcrumb2.Link href="#">カテゴリ</Breadcrumb2.Link>\r
              <Breadcrumb2.Separator />\r
            </Breadcrumb2.Item>\r
            <Breadcrumb2.Item>\r
              <Breadcrumb2.CurrentLink>詳細ページ</Breadcrumb2.CurrentLink>\r
            </Breadcrumb2.Item>\r
          </Breadcrumb2.List>\r
        </Breadcrumb2.Root>\r
      );\r
    },\r
  });\r
}\r
`,I=`/** @jsx m */\r
import m from "mithril";\r
import { Breadcrumb2 } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>\r
          <div>\r
            <div style={{ fontSize: "0.8rem", color: "#888", marginBottom: "4px" }}>size="sm"</div>\r
            <Breadcrumb2.Root size="sm">\r
              <Breadcrumb2.List>\r
                <Breadcrumb2.Item><Breadcrumb2.Link href="#">Home</Breadcrumb2.Link><Breadcrumb2.Separator /></Breadcrumb2.Item>\r
                <Breadcrumb2.Item><Breadcrumb2.CurrentLink>Page</Breadcrumb2.CurrentLink></Breadcrumb2.Item>\r
              </Breadcrumb2.List>\r
            </Breadcrumb2.Root>\r
          </div>\r
          <div>\r
            <div style={{ fontSize: "0.8rem", color: "#888", marginBottom: "4px" }}>size="md"</div>\r
            <Breadcrumb2.Root size="md">\r
              <Breadcrumb2.List>\r
                <Breadcrumb2.Item><Breadcrumb2.Link href="#">Home</Breadcrumb2.Link><Breadcrumb2.Separator /></Breadcrumb2.Item>\r
                <Breadcrumb2.Item><Breadcrumb2.CurrentLink>Page</Breadcrumb2.CurrentLink></Breadcrumb2.Item>\r
              </Breadcrumb2.List>\r
            </Breadcrumb2.Root>\r
          </div>\r
          <div>\r
            <div style={{ fontSize: "0.8rem", color: "#888", marginBottom: "4px" }}>size="lg"</div>\r
            <Breadcrumb2.Root size="lg">\r
              <Breadcrumb2.List>\r
                <Breadcrumb2.Item><Breadcrumb2.Link href="#">Home</Breadcrumb2.Link><Breadcrumb2.Separator /></Breadcrumb2.Item>\r
                <Breadcrumb2.Item><Breadcrumb2.CurrentLink>Page</Breadcrumb2.CurrentLink></Breadcrumb2.Item>\r
              </Breadcrumb2.List>\r
            </Breadcrumb2.Root>\r
          </div>\r
        </div>\r
      );\r
    },\r
  });\r
}\r
`,g=`/** @jsx m */\r
import m from "mithril";\r
import { Breadcrumb2 } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>\r
          <div>\r
            <div style={{ fontSize: "0.8rem", color: "#888", marginBottom: "4px" }}>variant="underline"</div>\r
            <Breadcrumb2.Root variant="underline">\r
              <Breadcrumb2.List>\r
                <Breadcrumb2.Item><Breadcrumb2.Link href="#">ホーム</Breadcrumb2.Link><Breadcrumb2.Separator /></Breadcrumb2.Item>\r
                <Breadcrumb2.Item><Breadcrumb2.Link href="#">製品</Breadcrumb2.Link><Breadcrumb2.Separator /></Breadcrumb2.Item>\r
                <Breadcrumb2.Item><Breadcrumb2.CurrentLink>詳細</Breadcrumb2.CurrentLink></Breadcrumb2.Item>\r
              </Breadcrumb2.List>\r
            </Breadcrumb2.Root>\r
          </div>\r
          <div>\r
            <div style={{ fontSize: "0.8rem", color: "#888", marginBottom: "4px" }}>variant="plain"</div>\r
            <Breadcrumb2.Root variant="plain">\r
              <Breadcrumb2.List>\r
                <Breadcrumb2.Item><Breadcrumb2.Link href="#">ホーム</Breadcrumb2.Link><Breadcrumb2.Separator /></Breadcrumb2.Item>\r
                <Breadcrumb2.Item><Breadcrumb2.Link href="#">製品</Breadcrumb2.Link><Breadcrumb2.Separator /></Breadcrumb2.Item>\r
                <Breadcrumb2.Item><Breadcrumb2.CurrentLink>詳細</Breadcrumb2.CurrentLink></Breadcrumb2.Item>\r
              </Breadcrumb2.List>\r
            </Breadcrumb2.Root>\r
          </div>\r
        </div>\r
      );\r
    },\r
  });\r
}\r
`,R=JSON.parse('{"title":"Breadcrumb","description":"","frontmatter":{},"headers":[],"relativePath":"Breadcrumb.md","filePath":"Breadcrumb.md","lastUpdated":1776836643000}'),S={name:"Breadcrumb.md"},y=Object.assign(S,{setup(d){return(x,t)=>{const i=m("MithrilDemo");return c(),s("div",null,[t[0]||(t[0]=l("",7)),u(i,{setup:a(b),code:a(f)},null,8,["setup","code"]),t[1]||(t[1]=n("h3",{id:"カスタムセパレーター",tabindex:"-1"},[o("カスタムセパレーター "),n("a",{class:"header-anchor",href:"#カスタムセパレーター","aria-label":'Permalink to "カスタムセパレーター"'},"​")],-1)),t[2]||(t[2]=n("p",null,[n("code",null,"separator"),o(" prop でデフォルトの区切り文字を変更できます。")],-1)),u(i,{setup:a(p),code:a(k)},null,8,["setup","code"]),t[3]||(t[3]=n("h3",{id:"省略記号付き",tabindex:"-1"},[o("省略記号付き "),n("a",{class:"header-anchor",href:"#省略記号付き","aria-label":'Permalink to "省略記号付き"'},"​")],-1)),t[4]||(t[4]=n("p",null,[o("中間階層が多い場合は "),n("code",null,"Breadcrumb.Ellipsis"),o(" で省略できます。")],-1)),u(i,{setup:a(B),code:a(v)},null,8,["setup","code"]),t[5]||(t[5]=n("h3",{id:"サイズバリエーション",tabindex:"-1"},[o("サイズバリエーション "),n("a",{class:"header-anchor",href:"#サイズバリエーション","aria-label":'Permalink to "サイズバリエーション"'},"​")],-1)),t[6]||(t[6]=n("p",null,[n("code",null,"size"),o(" prop で小さい / 標準 / 大きいサイズを選べます。")],-1)),u(i,{setup:a(h),code:a(I)},null,8,["setup","code"]),t[7]||(t[7]=n("h3",{id:"variant",tabindex:"-1"},[o("variant "),n("a",{class:"header-anchor",href:"#variant","aria-label":'Permalink to "variant"'},"​")],-1)),t[8]||(t[8]=n("p",null,[n("code",null,'variant="underline"'),o(" でリンクにアンダーライン装飾を付けます。")],-1)),u(i,{setup:a(L),code:a(g)},null,8,["setup","code"]),t[9]||(t[9]=l("",11))])}}});export{R as __pageData,y as default};
