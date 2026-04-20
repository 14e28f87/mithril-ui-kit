import{m as t}from"./chunks/theme.XnzwSjk8.js";import{P as e}from"./chunks/Table.B_fZamCg.js";import{C as c,o as u,c as p,ai as s,E as l,k as i,j as a,a as g}from"./chunks/framework.Bm_aoSIc.js";function m(o){let n=2;t.mount(o,{view(){return t("div",{style:{display:"flex",flexDirection:"column",gap:"8px"}},t(e.Root,{count:120,pageSize:10,page:n,siblingCount:1,variant:"outline",onPageChange:r=>{n=r.page,t.redraw()}},t(e.PrevTrigger,null,"←"),t(e.Items,null),t(e.PageText,{format:"long"}),t(e.NextTrigger,null,"→")),t("div",{style:{fontSize:"12px",color:"#666"}},`現在のページ: ${n}`))}})}function P(o){let n=5;t.mount(o,{view(){return t("div",{style:{display:"flex",flexDirection:"column",gap:"8px"}},t(e.Root,{count:500,pageSize:10,page:n,siblingCount:2,variant:"outline",onPageChange:r=>{n=r.page,t.redraw()}},t(e.PrevTrigger,null,"←"),t(e.Items,null),t(e.NextTrigger,null,"→")),t("div",{style:{fontSize:"12px",color:"#666"}},`siblingCount=2, 現在のページ: ${n}`))}})}function h(o){t.mount(o,{view(){return t("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},t("div",null,t("div",{style:{fontSize:"0.8rem",color:"#888",marginBottom:"4px"}},'variant="solid" size="lg"'),t(e.Root,{count:100,pageSize:10,variant:"solid",size:"lg",defaultPage:3},t(e.PrevTrigger,null,"←"),t(e.Items,null),t(e.NextTrigger,null,"→"))),t("div",null,t("div",{style:{fontSize:"0.8rem",color:"#888",marginBottom:"4px"}},'variant="subtle" size="sm"'),t(e.Root,{count:100,pageSize:10,variant:"subtle",size:"sm",defaultPage:3},t(e.PrevTrigger,null,"←"),t(e.Items,null),t(e.NextTrigger,null,"→"))))}})}function x(o){t.mount(o,{view(){return t("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},t(e.Root,{count:300,pageSize:15,defaultPage:5},t(e.PrevTrigger,null,"←"),t(e.Items,null),t(e.PageText,{format:"short"}),t(e.NextTrigger,null,"→")),t("div",{style:{fontSize:"0.8rem",color:"#888"}},'format="short" → "5 / 20"'),t(e.Root,{count:300,pageSize:15,defaultPage:5},t(e.PrevTrigger,null,"←"),t(e.Items,null),t(e.PageText,{format:"long"}),t(e.NextTrigger,null,"→")),t("div",{style:{fontSize:"0.8rem",color:"#888"}},'format="long" → "5 / 20 ページ (300件)"'))}})}const f=`/** @jsx m */\r
import m from "mithril";\r
import { Pagination2 } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  let page = 2;\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>\r
          <Pagination2.Root\r
            count={120}\r
            pageSize={10}\r
            page={page}\r
            siblingCount={1}\r
            variant="outline"\r
            onPageChange={(details: { page: number }) => {\r
              page = details.page;\r
              m.redraw();\r
            }}\r
          >\r
            <Pagination2.PrevTrigger>←</Pagination2.PrevTrigger>\r
            <Pagination2.Items />\r
            <Pagination2.PageText format="long" />\r
            <Pagination2.NextTrigger>→</Pagination2.NextTrigger>\r
          </Pagination2.Root>\r
\r
          <div style={{ fontSize: "12px", color: "#666" }}>{\`現在のページ: \${page}\`}</div>\r
        </div>\r
      );\r
    },\r
  });\r
}\r
`,v=`/** @jsx m */\r
import m from "mithril";\r
import { Pagination2 } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  let page = 5;\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>\r
          <Pagination2.Root\r
            count={500}\r
            pageSize={10}\r
            page={page}\r
            siblingCount={2}\r
            variant="outline"\r
            onPageChange={(details: { page: number }) => {\r
              page = details.page;\r
              m.redraw();\r
            }}\r
          >\r
            <Pagination2.PrevTrigger>←</Pagination2.PrevTrigger>\r
            <Pagination2.Items />\r
            <Pagination2.NextTrigger>→</Pagination2.NextTrigger>\r
          </Pagination2.Root>\r
          <div style={{ fontSize: "12px", color: "#666" }}>{\`siblingCount=2, 現在のページ: \${page}\`}</div>\r
        </div>\r
      );\r
    },\r
  });\r
}\r
`,b=`/** @jsx m */\r
import m from "mithril";\r
import { Pagination2 } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>\r
          <div>\r
            <div style={{ fontSize: "0.8rem", color: "#888", marginBottom: "4px" }}>variant="solid" size="lg"</div>\r
            <Pagination2.Root count={100} pageSize={10} variant="solid" size="lg" defaultPage={3}>\r
              <Pagination2.PrevTrigger>←</Pagination2.PrevTrigger>\r
              <Pagination2.Items />\r
              <Pagination2.NextTrigger>→</Pagination2.NextTrigger>\r
            </Pagination2.Root>\r
          </div>\r
          <div>\r
            <div style={{ fontSize: "0.8rem", color: "#888", marginBottom: "4px" }}>variant="subtle" size="sm"</div>\r
            <Pagination2.Root count={100} pageSize={10} variant="subtle" size="sm" defaultPage={3}>\r
              <Pagination2.PrevTrigger>←</Pagination2.PrevTrigger>\r
              <Pagination2.Items />\r
              <Pagination2.NextTrigger>→</Pagination2.NextTrigger>\r
            </Pagination2.Root>\r
          </div>\r
        </div>\r
      );\r
    },\r
  });\r
}\r
`,T=`/** @jsx m */\r
import m from "mithril";\r
import { Pagination2 } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>\r
          <Pagination2.Root count={300} pageSize={15} defaultPage={5}>\r
            <Pagination2.PrevTrigger>←</Pagination2.PrevTrigger>\r
            <Pagination2.Items />\r
            <Pagination2.PageText format="short" />\r
            <Pagination2.NextTrigger>→</Pagination2.NextTrigger>\r
          </Pagination2.Root>\r
          <div style={{ fontSize: "0.8rem", color: "#888" }}>format="short" → "5 / 20"</div>\r
\r
          <Pagination2.Root count={300} pageSize={15} defaultPage={5}>\r
            <Pagination2.PrevTrigger>←</Pagination2.PrevTrigger>\r
            <Pagination2.Items />\r
            <Pagination2.PageText format="long" />\r
            <Pagination2.NextTrigger>→</Pagination2.NextTrigger>\r
          </Pagination2.Root>\r
          <div style={{ fontSize: "0.8rem", color: "#888" }}>format="long" → "5 / 20 ページ (300件)"</div>\r
        </div>\r
      );\r
    },\r
  });\r
}\r
`,N=JSON.parse('{"title":"Pagination","description":"","frontmatter":{},"headers":[],"relativePath":"Pagination.md","filePath":"Pagination.md"}'),q={name:"Pagination.md"},R=Object.assign(q,{setup(o){return(n,r)=>{const d=c("MithrilDemo");return u(),p("div",null,[r[0]||(r[0]=s("",6)),l(d,{setup:i(m),code:i(f)},null,8,["setup","code"]),r[1]||(r[1]=a("h3",{id:"siblingcount-で省略幅を変更",tabindex:"-1"},[g("siblingCount で省略幅を変更 "),a("a",{class:"header-anchor",href:"#siblingcount-で省略幅を変更","aria-label":'Permalink to "siblingCount で省略幅を変更"'},"​")],-1)),l(d,{setup:i(P),code:i(v)},null,8,["setup","code"]),r[2]||(r[2]=a("h3",{id:"variant-size-バリエーション",tabindex:"-1"},[g("variant / size バリエーション "),a("a",{class:"header-anchor",href:"#variant-size-バリエーション","aria-label":'Permalink to "variant / size バリエーション"'},"​")],-1)),l(d,{setup:i(h),code:i(b)},null,8,["setup","code"]),r[3]||(r[3]=a("h3",{id:"pagetext-フォーマット",tabindex:"-1"},[g("PageText フォーマット "),a("a",{class:"header-anchor",href:"#pagetext-フォーマット","aria-label":'Permalink to "PageText フォーマット"'},"​")],-1)),l(d,{setup:i(x),code:i(T)},null,8,["setup","code"]),r[4]||(r[4]=s("",11))])}}});export{N as __pageData,R as default};
