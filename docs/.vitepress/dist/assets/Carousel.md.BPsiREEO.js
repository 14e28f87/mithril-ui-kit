import{m as t}from"./chunks/theme.BXbJ2X8L.js";import{b as r}from"./chunks/Table.Dq6qlMER.js";import{C as p,o as g,c as m,ai as u,E as c,k as i,j as n,a as s}from"./chunks/framework.Bm_aoSIc.js";function h(a){const d=[{title:"Kiln A",text:"現在温度 812℃",bg:"#dbeafe"},{title:"Kiln B",text:"現在温度 624℃",bg:"#dcfce7"},{title:"Kiln C",text:"保持工程 12 min",bg:"#fef3c7"}];t.mount(a,{view(){return t("div",{style:{maxWidth:"520px"}},t(r.Root,{slideCount:d.length,loop:!0,autoplay:3200},t(r.Control,null,t(r.PrevTrigger,null,"◀"),t(r.NextTrigger,null,"▶")),t(r.ItemGroup,null,d.map((e,o)=>t(r.Item,{index:o,key:e.title},t("div",{style:{background:e.bg,padding:"24px",borderRadius:"14px",minHeight:"150px",display:"grid",alignContent:"start",gap:"8px"}},t("strong",null,e.title),t("div",null,e.text),t("div",{style:{color:"#475569",fontSize:"0.9rem"}},"バッチ監視カードの切り替え例です。"))))),t(r.IndicatorGroup,null,d.map((e,o)=>t(r.Indicator,{index:o,key:o})))))}})}function C(a){const d=["Temperature","Pressure","Power","Gas"];t.mount(a,{view(){return t("div",{style:{maxWidth:"620px"}},t(r.Root,{slideCount:d.length,slidesPerPage:2},t(r.Control,null,t(r.PrevTrigger,null,"Prev"),t(r.NextTrigger,null,"Next")),t(r.ItemGroup,null,d.map((e,o)=>t(r.Item,{index:o,key:e},t("div",{style:{marginRight:"12px",padding:"18px",borderRadius:"14px",border:"1px solid #d0d7de",background:"#ffffff",minHeight:"120px"}},t("div",{style:{fontWeight:"700",marginBottom:"6px"}},e),t("div",{style:{color:"#475569",fontSize:"0.9rem"}},"2 枚ずつ表示するギャラリー例です。"))))),t(r.IndicatorGroup,null,t(r.Indicator,{index:0}),t(r.Indicator,{index:1}))))}})}function x(a){let d=0;const e=["Overview","Trend","Alarm"];t.mount(a,{view(){return t("div",{style:{display:"grid",gap:"12px",maxWidth:"520px"}},t("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"}},e.map((o,l)=>t("button",{type:"button",class:"vp-button",onclick:()=>{d=l,t.redraw()}},o))),t(r.Root,{page:d,onPageChange:o=>{d=o.page,t.redraw()},slideCount:e.length},t(r.Control,null,t(r.PrevTrigger,null,"◀"),t(r.NextTrigger,null,"▶")),t(r.ItemGroup,null,e.map((o,l)=>t(r.Item,{index:l,key:o},t("div",{style:{padding:"24px",borderRadius:"14px",background:"#f8fafc",minHeight:"140px"}},t("div",{style:{fontWeight:"700",marginBottom:"8px"}},o),t("div",{style:{color:"#475569"}},"外部状態で page を制御しているデモです。"))))),t(r.IndicatorGroup,null,e.map((o,l)=>t(r.Indicator,{index:l,key:l})))),t("div",{style:{color:"#475569",fontSize:"0.9rem"}},"current page: ",d))}})}const b=`/** @jsx m */\r
import m from "mithril";\r
import { Carousel } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  const slides = [\r
    { title: "Kiln A", text: "現在温度 812℃", bg: "#dbeafe" },\r
    { title: "Kiln B", text: "現在温度 624℃", bg: "#dcfce7" },\r
    { title: "Kiln C", text: "保持工程 12 min", bg: "#fef3c7" },\r
  ];\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div style={{ maxWidth: "520px" }}>\r
          <Carousel.Root slideCount={slides.length} loop={true} autoplay={3200}>\r
            <Carousel.Control>\r
              <Carousel.PrevTrigger>◀</Carousel.PrevTrigger>\r
              <Carousel.NextTrigger>▶</Carousel.NextTrigger>\r
            </Carousel.Control>\r
\r
            <Carousel.ItemGroup>\r
              {slides.map((slide, index) => (\r
                <Carousel.Item index={index} key={slide.title}>\r
                  <div\r
                    style={{\r
                      background: slide.bg,\r
                      padding: "24px",\r
                      borderRadius: "14px",\r
                      minHeight: "150px",\r
                      display: "grid",\r
                      alignContent: "start",\r
                      gap: "8px",\r
                    }}\r
                  >\r
                    <strong>{slide.title}</strong>\r
                    <div>{slide.text}</div>\r
                    <div style={{ color: "#475569", fontSize: "0.9rem" }}>バッチ監視カードの切り替え例です。</div>\r
                  </div>\r
                </Carousel.Item>\r
              ))}\r
            </Carousel.ItemGroup>\r
\r
            <Carousel.IndicatorGroup>\r
              {slides.map((_, index) => <Carousel.Indicator index={index} key={index} />)}\r
            </Carousel.IndicatorGroup>\r
          </Carousel.Root>\r
        </div>\r
      );\r
    },\r
  });\r
}\r
`,f=`/** @jsx m */\r
import m from "mithril";\r
import { Carousel } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  const cards = [\r
    "Temperature",\r
    "Pressure",\r
    "Power",\r
    "Gas",\r
  ];\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div style={{ maxWidth: "620px" }}>\r
          <Carousel.Root slideCount={cards.length} slidesPerPage={2}>\r
            <Carousel.Control>\r
              <Carousel.PrevTrigger>Prev</Carousel.PrevTrigger>\r
              <Carousel.NextTrigger>Next</Carousel.NextTrigger>\r
            </Carousel.Control>\r
\r
            <Carousel.ItemGroup>\r
              {cards.map((card, index) => (\r
                <Carousel.Item index={index} key={card}>\r
                  <div\r
                    style={{\r
                      marginRight: "12px",\r
                      padding: "18px",\r
                      borderRadius: "14px",\r
                      border: "1px solid #d0d7de",\r
                      background: "#ffffff",\r
                      minHeight: "120px",\r
                    }}\r
                  >\r
                    <div style={{ fontWeight: "700", marginBottom: "6px" }}>{card}</div>\r
                    <div style={{ color: "#475569", fontSize: "0.9rem" }}>2 枚ずつ表示するギャラリー例です。</div>\r
                  </div>\r
                </Carousel.Item>\r
              ))}\r
            </Carousel.ItemGroup>\r
\r
            <Carousel.IndicatorGroup>\r
              <Carousel.Indicator index={0} />\r
              <Carousel.Indicator index={1} />\r
            </Carousel.IndicatorGroup>\r
          </Carousel.Root>\r
        </div>\r
      );\r
    },\r
  });\r
}`,v=`/** @jsx m */\r
import m from "mithril";\r
import { Carousel } from "mithril-ui-kit";\r
import type { CarouselPageChangeDetails } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  let page = 0;\r
  const slides = ["Overview", "Trend", "Alarm"];\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div style={{ display: "grid", gap: "12px", maxWidth: "520px" }}>\r
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>\r
            {slides.map((label, index) => (\r
              <button type="button" class="vp-button" onclick={() => { page = index; m.redraw(); }}>\r
                {label}\r
              </button>\r
            ))}\r
          </div>\r
\r
          <Carousel.Root page={page} onPageChange={(details: CarouselPageChangeDetails) => { page = details.page; m.redraw(); }} slideCount={slides.length}>\r
            <Carousel.Control>\r
              <Carousel.PrevTrigger>◀</Carousel.PrevTrigger>\r
              <Carousel.NextTrigger>▶</Carousel.NextTrigger>\r
            </Carousel.Control>\r
\r
            <Carousel.ItemGroup>\r
              {slides.map((label, index) => (\r
                <Carousel.Item index={index} key={label}>\r
                  <div style={{ padding: "24px", borderRadius: "14px", background: "#f8fafc", minHeight: "140px" }}>\r
                    <div style={{ fontWeight: "700", marginBottom: "8px" }}>{label}</div>\r
                    <div style={{ color: "#475569" }}>外部状態で page を制御しているデモです。</div>\r
                  </div>\r
                </Carousel.Item>\r
              ))}\r
            </Carousel.ItemGroup>\r
\r
            <Carousel.IndicatorGroup>\r
              {slides.map((_, index) => <Carousel.Indicator index={index} key={index} />)}\r
            </Carousel.IndicatorGroup>\r
          </Carousel.Root>\r
\r
          <div style={{ color: "#475569", fontSize: "0.9rem" }}>current page: {page}</div>\r
        </div>\r
      );\r
    },\r
  });\r
}`,k=JSON.parse('{"title":"Carousel","description":"","frontmatter":{},"headers":[],"relativePath":"Carousel.md","filePath":"Carousel.md"}'),y={name:"Carousel.md"},R=Object.assign(y,{setup(a){return(d,e)=>{const o=p("MithrilDemo");return g(),m("div",null,[e[0]||(e[0]=u('<h1 id="carousel" tabindex="-1">Carousel <a class="header-anchor" href="#carousel" aria-label="Permalink to &quot;Carousel&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>Carousel</code> は <code>Carousel.Root</code>, <code>Carousel.ItemGroup</code>, <code>Carousel.Item</code>, <code>Carousel.Control</code>, <code>Carousel.IndicatorGroup</code> で構成する compound component 型カルーセルです。ページ単位の前後移動、インジケーター、自動再生、縦横レイアウトの切り替えに対応しており、ダッシュボードのカード切り替えやチュートリアル表示に向いています。</p><h2 id="usage-使用例" tabindex="-1">Usage 使用例 <a class="header-anchor" href="#usage-使用例" aria-label="Permalink to &quot;Usage 使用例&quot;">​</a></h2><h3 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h3><p>前後ボタンとインジケーターを備えた、もっとも一般的なカルーセル構成です。</p>',6)),c(o,{setup:i(h),code:i(b)},null,8,["setup","code"]),e[1]||(e[1]=n("h3",{id:"_1ページに複数枚表示",tabindex:"-1"},[s("1ページに複数枚表示 "),n("a",{class:"header-anchor",href:"#_1ページに複数枚表示","aria-label":'Permalink to "1ページに複数枚表示"'},"​")],-1)),e[2]||(e[2]=n("p",null,[n("code",null,"slidesPerPage"),s(" を使うと、カードギャラリーのように 1 ビューへ複数スライドを並べられます。")],-1)),c(o,{setup:i(C),code:i(f)},null,8,["setup","code"]),e[3]||(e[3]=n("h3",{id:"制御モード",tabindex:"-1"},[s("制御モード "),n("a",{class:"header-anchor",href:"#制御モード","aria-label":'Permalink to "制御モード"'},"​")],-1)),e[4]||(e[4]=n("p",null,[n("code",null,"page"),s(" と "),n("code",null,"onPageChange"),s(" を使うと、外部ボタンや別 UI と同期したページ制御ができます。")],-1)),c(o,{setup:i(x),code:i(v)},null,8,["setup","code"]),e[5]||(e[5]=u('<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="carousel-root-props" tabindex="-1">Carousel.Root Props <a class="header-anchor" href="#carousel-root-props" aria-label="Permalink to &quot;Carousel.Root Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>slideCount</code></td><td><code>number</code></td><td>—</td><td>スライド総数です</td></tr><tr><td><code>page</code></td><td><code>number</code></td><td>—</td><td>制御モード時の現在ページです。0 始まりです</td></tr><tr><td><code>defaultPage</code></td><td><code>number</code></td><td><code>0</code></td><td>非制御モード時の初期ページです</td></tr><tr><td><code>onPageChange</code></td><td><code>(details: { page: number }) =&gt; void</code></td><td>—</td><td>ページ変更時に呼ばれます</td></tr><tr><td><code>slidesPerPage</code></td><td><code>number</code></td><td><code>1</code></td><td>1 画面に表示するスライド数です</td></tr><tr><td><code>slidesPerMove</code></td><td><code>number</code></td><td><code>1</code></td><td>公開 API 上の移動幅指定です。現行実装ではページ単位移動として扱われます</td></tr><tr><td><code>orientation</code></td><td><code>&quot;horizontal&quot; | &quot;vertical&quot;</code></td><td><code>&quot;horizontal&quot;</code></td><td>スライド方向です</td></tr><tr><td><code>loop</code></td><td><code>boolean</code></td><td><code>false</code></td><td>末尾から先頭、先頭から末尾へループします</td></tr><tr><td><code>autoplay</code></td><td><code>number | false</code></td><td><code>false</code></td><td>ミリ秒指定で自動再生します</td></tr><tr><td><code>allowMouseDrag</code></td><td><code>boolean</code></td><td><code>false</code></td><td>将来拡張用の公開 props です。現行実装ではドラッグ移動は未対応です</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>追加クラスです</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt;</code></td><td>—</td><td>ルートのインラインスタイルです</td></tr></tbody></table><h3 id="carousel-item-props" tabindex="-1">Carousel.Item Props <a class="header-anchor" href="#carousel-item-props" aria-label="Permalink to &quot;Carousel.Item Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>index</code></td><td><code>number</code></td><td>—</td><td>スライドのインデックスです</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>スライド要素の追加クラスです</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt;</code></td><td>—</td><td>スライド要素のインラインスタイルです</td></tr></tbody></table><h3 id="carousel-indicator-props" tabindex="-1">Carousel.Indicator Props <a class="header-anchor" href="#carousel-indicator-props" aria-label="Permalink to &quot;Carousel.Indicator Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>index</code></td><td><code>number</code></td><td>—</td><td>対応するページ番号です</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>インジケーターの追加クラスです</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt;</code></td><td>—</td><td>インジケーターのインラインスタイルです</td></tr></tbody></table><h3 id="補助コンポーネント-props" tabindex="-1">補助コンポーネント Props <a class="header-anchor" href="#補助コンポーネント-props" aria-label="Permalink to &quot;補助コンポーネント Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Component</th><th>Props</th></tr></thead><tbody><tr><td><code>Carousel.ItemGroup</code></td><td><code>class?: string</code>, <code>style?: Record&lt;string, string&gt;</code></td></tr><tr><td><code>Carousel.Control</code></td><td><code>class?: string</code>, <code>style?: Record&lt;string, string&gt;</code></td></tr><tr><td><code>Carousel.PrevTrigger</code></td><td><code>class?: string</code>, <code>style?: Record&lt;string, string&gt;</code></td></tr><tr><td><code>Carousel.NextTrigger</code></td><td><code>class?: string</code>, <code>style?: Record&lt;string, string&gt;</code></td></tr><tr><td><code>Carousel.IndicatorGroup</code></td><td><code>class?: string</code>, <code>style?: Record&lt;string, string&gt;</code></td></tr></tbody></table><h3 id="subcomponents" tabindex="-1">Subcomponents <a class="header-anchor" href="#subcomponents" aria-label="Permalink to &quot;Subcomponents&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Component</th><th>Description</th></tr></thead><tbody><tr><td><code>Carousel.Root</code></td><td>ページ状態と自動再生を管理するルートです</td></tr><tr><td><code>Carousel.Control</code></td><td>前後移動ボタンのラッパーです</td></tr><tr><td><code>Carousel.PrevTrigger</code></td><td>前ページへ戻るボタンです</td></tr><tr><td><code>Carousel.NextTrigger</code></td><td>次ページへ進むボタンです</td></tr><tr><td><code>Carousel.ItemGroup</code></td><td>スライド列全体のコンテナです</td></tr><tr><td><code>Carousel.Item</code></td><td>個々のスライドです</td></tr><tr><td><code>Carousel.IndicatorGroup</code></td><td>インジケーター列です</td></tr><tr><td><code>Carousel.Indicator</code></td><td>特定ページへ移動するボタンです</td></tr></tbody></table>',11))])}}});export{k as __pageData,R as default};
