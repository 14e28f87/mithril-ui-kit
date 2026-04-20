import{m as r}from"./chunks/theme.D5gNcpBr.js";import{B as e}from"./chunks/Table.A5W0Ssaz.js";import{C as m,o as c,c as s,ai as l,E as u,k as a,j as n,a as o}from"./chunks/framework.Bm_aoSIc.js";function b(d){r.mount(d,{view(){return r(e.Root,{variant:"underline",size:"md"},r(e.List,null,r(e.Item,null,r(e.Link,{href:"#"},"ホーム"),r(e.Separator,null)),r(e.Item,null,r(e.Link,{href:"#"},"ライブラリ"),r(e.Separator,null)),r(e.Item,null,r(e.CurrentLink,null,"Breadcrumb2"))))}})}function p(d){r.mount(d,{view(){return r(e.Root,{separator:"›"},r(e.List,null,r(e.Item,null,r(e.Link,{href:"#"},"ホーム"),r(e.Separator,null)),r(e.Item,null,r(e.Link,{href:"#"},"カテゴリ"),r(e.Separator,null)),r(e.Item,null,r(e.CurrentLink,null,"現在のページ"))))}})}function B(d){r.mount(d,{view(){return r(e.Root,null,r(e.List,null,r(e.Item,null,r(e.Link,{href:"#"},"ホーム"),r(e.Separator,null)),r(e.Item,null,r(e.Ellipsis,null),r(e.Separator,null)),r(e.Item,null,r(e.Link,{href:"#"},"カテゴリ"),r(e.Separator,null)),r(e.Item,null,r(e.CurrentLink,null,"詳細ページ"))))}})}function h(d){r.mount(d,{view(){return r("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},r("div",null,r("div",{style:{fontSize:"0.8rem",color:"#888",marginBottom:"4px"}},'size="sm"'),r(e.Root,{size:"sm"},r(e.List,null,r(e.Item,null,r(e.Link,{href:"#"},"Home"),r(e.Separator,null)),r(e.Item,null,r(e.CurrentLink,null,"Page"))))),r("div",null,r("div",{style:{fontSize:"0.8rem",color:"#888",marginBottom:"4px"}},'size="md"'),r(e.Root,{size:"md"},r(e.List,null,r(e.Item,null,r(e.Link,{href:"#"},"Home"),r(e.Separator,null)),r(e.Item,null,r(e.CurrentLink,null,"Page"))))),r("div",null,r("div",{style:{fontSize:"0.8rem",color:"#888",marginBottom:"4px"}},'size="lg"'),r(e.Root,{size:"lg"},r(e.List,null,r(e.Item,null,r(e.Link,{href:"#"},"Home"),r(e.Separator,null)),r(e.Item,null,r(e.CurrentLink,null,"Page"))))))}})}function L(d){r.mount(d,{view(){return r("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},r("div",null,r("div",{style:{fontSize:"0.8rem",color:"#888",marginBottom:"4px"}},'variant="underline"'),r(e.Root,{variant:"underline"},r(e.List,null,r(e.Item,null,r(e.Link,{href:"#"},"ホーム"),r(e.Separator,null)),r(e.Item,null,r(e.Link,{href:"#"},"製品"),r(e.Separator,null)),r(e.Item,null,r(e.CurrentLink,null,"詳細"))))),r("div",null,r("div",{style:{fontSize:"0.8rem",color:"#888",marginBottom:"4px"}},'variant="plain"'),r(e.Root,{variant:"plain"},r(e.List,null,r(e.Item,null,r(e.Link,{href:"#"},"ホーム"),r(e.Separator,null)),r(e.Item,null,r(e.Link,{href:"#"},"製品"),r(e.Separator,null)),r(e.Item,null,r(e.CurrentLink,null,"詳細"))))))}})}const f=`/** @jsx m */\r
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
`,R=JSON.parse('{"title":"Breadcrumb","description":"","frontmatter":{},"headers":[],"relativePath":"Breadcrumb.md","filePath":"Breadcrumb.md"}'),S={name:"Breadcrumb.md"},y=Object.assign(S,{setup(d){return(x,t)=>{const i=m("MithrilDemo");return c(),s("div",null,[t[0]||(t[0]=l('<h1 id="breadcrumb" tabindex="-1">Breadcrumb <a class="header-anchor" href="#breadcrumb" aria-label="Permalink to &quot;Breadcrumb&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>Breadcrumb</code> は、サイトの階層構造内におけるページの位置を表示するためのパンくずリスト compound component です。</p><p>以下のサブコンポーネントで構成されます:</p><ul><li><code>Breadcrumb.Root</code> — ルート <code>&lt;nav&gt;</code> 要素。variant / size / separator 設定を管理</li><li><code>Breadcrumb.List</code> — パンくずリストの <code>&lt;ol&gt;</code> コンテナ</li><li><code>Breadcrumb.Item</code> — 各パンくず項目の <code>&lt;li&gt;</code> 要素</li><li><code>Breadcrumb.Link</code> — ナビゲーションリンク</li><li><code>Breadcrumb.CurrentLink</code> — 現在のページ（<code>aria-current=&quot;page&quot;</code> 付き）</li><li><code>Breadcrumb.Separator</code> — 項目間の区切り文字</li><li><code>Breadcrumb.Ellipsis</code> — 省略記号（中間階層を省略する場合）</li></ul><h2 id="usage-使用例" tabindex="-1">Usage 使用例 <a class="header-anchor" href="#usage-使用例" aria-label="Permalink to &quot;Usage 使用例&quot;">​</a></h2><h3 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h3>',7)),u(i,{setup:a(b),code:a(f)},null,8,["setup","code"]),t[1]||(t[1]=n("h3",{id:"カスタムセパレーター",tabindex:"-1"},[o("カスタムセパレーター "),n("a",{class:"header-anchor",href:"#カスタムセパレーター","aria-label":'Permalink to "カスタムセパレーター"'},"​")],-1)),t[2]||(t[2]=n("p",null,[n("code",null,"separator"),o(" prop でデフォルトの区切り文字を変更できます。")],-1)),u(i,{setup:a(p),code:a(k)},null,8,["setup","code"]),t[3]||(t[3]=n("h3",{id:"省略記号付き",tabindex:"-1"},[o("省略記号付き "),n("a",{class:"header-anchor",href:"#省略記号付き","aria-label":'Permalink to "省略記号付き"'},"​")],-1)),t[4]||(t[4]=n("p",null,[o("中間階層が多い場合は "),n("code",null,"Breadcrumb.Ellipsis"),o(" で省略できます。")],-1)),u(i,{setup:a(B),code:a(v)},null,8,["setup","code"]),t[5]||(t[5]=n("h3",{id:"サイズバリエーション",tabindex:"-1"},[o("サイズバリエーション "),n("a",{class:"header-anchor",href:"#サイズバリエーション","aria-label":'Permalink to "サイズバリエーション"'},"​")],-1)),t[6]||(t[6]=n("p",null,[n("code",null,"size"),o(" prop で小さい / 標準 / 大きいサイズを選べます。")],-1)),u(i,{setup:a(h),code:a(I)},null,8,["setup","code"]),t[7]||(t[7]=n("h3",{id:"variant",tabindex:"-1"},[o("variant "),n("a",{class:"header-anchor",href:"#variant","aria-label":'Permalink to "variant"'},"​")],-1)),t[8]||(t[8]=n("p",null,[n("code",null,'variant="underline"'),o(" でリンクにアンダーライン装飾を付けます。")],-1)),u(i,{setup:a(L),code:a(g)},null,8,["setup","code"]),t[9]||(t[9]=l('<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="root-props" tabindex="-1">Root Props <a class="header-anchor" href="#root-props" aria-label="Permalink to &quot;Root Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>variant</code></td><td><code>&quot;underline&quot; | &quot;plain&quot;</code></td><td><code>&quot;plain&quot;</code></td><td>外観バリエーション。<code>underline</code> はリンクにホバー時アンダーラインを付けます。<code>plain</code> は装飾なしのシンプルな表示</td></tr><tr><td><code>size</code></td><td><code>&quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;</code></td><td><code>&quot;md&quot;</code></td><td>コンポーネントのサイズ。フォントサイズと余白が変わります</td></tr><tr><td><code>separator</code></td><td><code>string | m.Children</code></td><td><code>&quot;/&quot;</code></td><td>項目間に表示するセパレーター文字。文字列や Mithril vnode を指定できます</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>ルート <code>&lt;nav&gt;</code> 要素に付与する追加 CSS クラス</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt;</code></td><td>—</td><td>ルート <code>&lt;nav&gt;</code> 要素に付与するインラインスタイル</td></tr></tbody></table><h3 id="item-props" tabindex="-1">Item Props <a class="header-anchor" href="#item-props" aria-label="Permalink to &quot;Item Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td><code>&lt;li&gt;</code> 要素に付与する追加 CSS クラス</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt;</code></td><td>—</td><td><code>&lt;li&gt;</code> 要素に付与するインラインスタイル</td></tr></tbody></table><h3 id="link-props" tabindex="-1">Link Props <a class="header-anchor" href="#link-props" aria-label="Permalink to &quot;Link Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>href</code></td><td><code>string</code></td><td><code>&quot;#&quot;</code></td><td>遷移先 URL。<code>/</code> で始まるパスは <code>m.route.set()</code> によるクライアントサイドナビゲーションになります</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td><code>&lt;a&gt;</code> 要素に付与する追加 CSS クラス</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt;</code></td><td>—</td><td><code>&lt;a&gt;</code> 要素に付与するインラインスタイル</td></tr></tbody></table><h3 id="currentlink-props" tabindex="-1">CurrentLink Props <a class="header-anchor" href="#currentlink-props" aria-label="Permalink to &quot;CurrentLink Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td><code>&lt;span&gt;</code> 要素に付与する追加 CSS クラス</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt;</code></td><td>—</td><td><code>&lt;span&gt;</code> 要素に付与するインラインスタイル</td></tr></tbody></table><h2 id="アクセシビリティ" tabindex="-1">アクセシビリティ <a class="header-anchor" href="#アクセシビリティ" aria-label="Permalink to &quot;アクセシビリティ&quot;">​</a></h2><ul><li>ルート要素に <code>aria-label=&quot;Breadcrumb&quot;</code> を設定</li><li>現在のページ要素に <code>aria-current=&quot;page&quot;</code> を設定</li><li>セパレーターは <code>aria-hidden=&quot;true&quot;</code> でスクリーンリーダーから隠蔽</li></ul>',11))])}}});export{R as __pageData,y as default};
