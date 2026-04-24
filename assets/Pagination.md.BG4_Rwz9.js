import{m as t}from"./chunks/theme.LBbUWaEz.js";import{x as e}from"./chunks/Table.DnqMepI2.js";import{C as c,o as u,c as p,a4 as s,E as l,k as i,j as a,a as g}from"./chunks/framework.DuWTyC0X.js";function m(o){let n=2;t.mount(o,{view(){return t("div",{style:{display:"flex",flexDirection:"column",gap:"8px"}},t(e.Root,{count:120,pageSize:10,page:n,siblingCount:1,variant:"outline",onPageChange:r=>{n=r.page,t.redraw()}},t(e.PrevTrigger,null,"←"),t(e.Items,null),t(e.PageText,{format:"long"}),t(e.NextTrigger,null,"→")),t("div",{style:{fontSize:"12px",color:"#666"}},`現在のページ: ${n}`))}})}function P(o){let n=5;t.mount(o,{view(){return t("div",{style:{display:"flex",flexDirection:"column",gap:"8px"}},t(e.Root,{count:500,pageSize:10,page:n,siblingCount:2,variant:"outline",onPageChange:r=>{n=r.page,t.redraw()}},t(e.PrevTrigger,null,"←"),t(e.Items,null),t(e.NextTrigger,null,"→")),t("div",{style:{fontSize:"12px",color:"#666"}},`siblingCount=2, 現在のページ: ${n}`))}})}function h(o){t.mount(o,{view(){return t("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},t("div",null,t("div",{style:{fontSize:"0.8rem",color:"#888",marginBottom:"4px"}},'variant="solid" size="lg"'),t(e.Root,{count:100,pageSize:10,variant:"solid",size:"lg",defaultPage:3},t(e.PrevTrigger,null,"←"),t(e.Items,null),t(e.NextTrigger,null,"→"))),t("div",null,t("div",{style:{fontSize:"0.8rem",color:"#888",marginBottom:"4px"}},'variant="subtle" size="sm"'),t(e.Root,{count:100,pageSize:10,variant:"subtle",size:"sm",defaultPage:3},t(e.PrevTrigger,null,"←"),t(e.Items,null),t(e.NextTrigger,null,"→"))))}})}function x(o){t.mount(o,{view(){return t("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},t(e.Root,{count:300,pageSize:15,defaultPage:5},t(e.PrevTrigger,null,"←"),t(e.Items,null),t(e.PageText,{format:"short"}),t(e.NextTrigger,null,"→")),t("div",{style:{fontSize:"0.8rem",color:"#888"}},'format="short" → "5 / 20"'),t(e.Root,{count:300,pageSize:15,defaultPage:5},t(e.PrevTrigger,null,"←"),t(e.Items,null),t(e.PageText,{format:"long"}),t(e.NextTrigger,null,"→")),t("div",{style:{fontSize:"0.8rem",color:"#888"}},'format="long" → "5 / 20 ページ (300件)"'))}})}const f=`/** @jsx m */\r
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
`,N=JSON.parse('{"title":"Pagination","description":"","frontmatter":{},"headers":[],"relativePath":"Pagination.md","filePath":"Pagination.md","lastUpdated":1776836643000}'),q={name:"Pagination.md"},R=Object.assign(q,{setup(o){return(n,r)=>{const d=c("MithrilDemo");return u(),p("div",null,[r[0]||(r[0]=s('<h1 id="pagination" tabindex="-1">Pagination <a class="header-anchor" href="#pagination" aria-label="Permalink to &quot;Pagination&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>Pagination</code> は省略記号付きのページ番号リストを自動生成するページネーションのコンポーネントです。</p><p>サブコンポーネント: <code>Root</code> / <code>PrevTrigger</code> / <code>NextTrigger</code> / <code>Items</code> / <code>PageText</code></p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><h3 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h3>',6)),l(d,{setup:i(m),code:i(f)},null,8,["setup","code"]),r[1]||(r[1]=a("h3",{id:"siblingcount-で省略幅を変更",tabindex:"-1"},[g("siblingCount で省略幅を変更 "),a("a",{class:"header-anchor",href:"#siblingcount-で省略幅を変更","aria-label":'Permalink to "siblingCount で省略幅を変更"'},"​")],-1)),l(d,{setup:i(P),code:i(v)},null,8,["setup","code"]),r[2]||(r[2]=a("h3",{id:"variant-size-バリエーション",tabindex:"-1"},[g("variant / size バリエーション "),a("a",{class:"header-anchor",href:"#variant-size-バリエーション","aria-label":'Permalink to "variant / size バリエーション"'},"​")],-1)),l(d,{setup:i(h),code:i(b)},null,8,["setup","code"]),r[3]||(r[3]=a("h3",{id:"pagetext-フォーマット",tabindex:"-1"},[g("PageText フォーマット "),a("a",{class:"header-anchor",href:"#pagetext-フォーマット","aria-label":'Permalink to "PageText フォーマット"'},"​")],-1)),l(d,{setup:i(x),code:i(T)},null,8,["setup","code"]),r[4]||(r[4]=s('<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="root-props" tabindex="-1">Root Props <a class="header-anchor" href="#root-props" aria-label="Permalink to &quot;Root Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>count</code></td><td><code>number</code></td><td>—</td><td>総アイテム数（必須）</td></tr><tr><td><code>pageSize</code></td><td><code>number</code></td><td><code>10</code></td><td>1ページあたりの表示数</td></tr><tr><td><code>page</code></td><td><code>number</code></td><td>—</td><td>制御モード: 現在のページ（1始まり）</td></tr><tr><td><code>defaultPage</code></td><td><code>number</code></td><td><code>1</code></td><td>非制御モード: 初期ページ</td></tr><tr><td><code>onPageChange</code></td><td><code>(details: { page: number }) =&gt; void</code></td><td>—</td><td>ページ変更コールバック</td></tr><tr><td><code>siblingCount</code></td><td><code>number</code></td><td><code>1</code></td><td>省略表示する前後のページ数</td></tr><tr><td><code>size</code></td><td><code>&quot;xs&quot; | &quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;</code></td><td><code>&quot;md&quot;</code></td><td>サイズ</td></tr><tr><td><code>variant</code></td><td><code>&quot;solid&quot; | &quot;outline&quot; | &quot;subtle&quot;</code></td><td><code>&quot;outline&quot;</code></td><td>バリエーション</td></tr></tbody></table><h3 id="prevtrigger-nexttrigger-props" tabindex="-1">PrevTrigger / NextTrigger Props <a class="header-anchor" href="#prevtrigger-nexttrigger-props" aria-label="Permalink to &quot;PrevTrigger / NextTrigger Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>追加 CSS クラス</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt;</code></td><td>—</td><td>インラインスタイル</td></tr></tbody></table><h3 id="items-props" tabindex="-1">Items Props <a class="header-anchor" href="#items-props" aria-label="Permalink to &quot;Items Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>追加 CSS クラス</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt;</code></td><td>—</td><td>インラインスタイル</td></tr></tbody></table><h3 id="pagetext-props" tabindex="-1">PageText Props <a class="header-anchor" href="#pagetext-props" aria-label="Permalink to &quot;PageText Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>format</code></td><td><code>&quot;short&quot; | &quot;compact&quot; | &quot;long&quot;</code></td><td><code>&quot;short&quot;</code></td><td>表示フォーマット</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>追加 CSS クラス</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt;</code></td><td>—</td><td>インラインスタイル</td></tr></tbody></table><h2 id="アクセシビリティ" tabindex="-1">アクセシビリティ <a class="header-anchor" href="#アクセシビリティ" aria-label="Permalink to &quot;アクセシビリティ&quot;">​</a></h2><ul><li>ルート要素は <code>&lt;nav aria-label=&quot;pagination&quot;&gt;</code> としてレンダリングされる</li><li>現在のページは <code>aria-current=&quot;page&quot;</code> でマークされる</li><li>先頭/末尾ページでは前/次ボタンが <code>disabled</code> になる</li></ul>',11))])}}});export{N as __pageData,R as default};
