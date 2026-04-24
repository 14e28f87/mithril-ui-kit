import{m as o}from"./chunks/theme.LBbUWaEz.js";import{v as e}from"./chunks/Table.DnqMepI2.js";import{C as m,o as I,c as s,a4 as u,E as a,k as i,j as r,a as d}from"./chunks/framework.DuWTyC0X.js";function A(n){o.mount(n,{view(){return o(e.Root,{collapsible:!0,defaultValue:["overview"],variant:"enclosed"},o(e.Item,{value:"overview"},o(e.ItemTrigger,null,"概要",o(e.ItemIndicator,null)),o(e.ItemContent,null,o(e.ItemBody,null,"現行 Chakra UI 風の Accordion.Root / Item 系 API で利用できます。"))),o(e.Item,{value:"spec"},o(e.ItemTrigger,null,"仕様",o(e.ItemIndicator,null)),o(e.ItemContent,null,o(e.ItemBody,null,"collapsible や variant、size などを組み合わせて調整できます。"))))}})}function g(n){o.mount(n,{view(){return o(e.Root,{multiple:!0,defaultValue:["a","c"],variant:"subtle",size:"sm"},o(e.Item,{value:"a"},o(e.ItemTrigger,null,"セクション A",o(e.ItemIndicator,null)),o(e.ItemContent,null,o(e.ItemBody,null,"複数の項目を同時に展開できます。"))),o(e.Item,{value:"b"},o(e.ItemTrigger,null,"セクション B",o(e.ItemIndicator,null)),o(e.ItemContent,null,o(e.ItemBody,null,"defaultValue に配列を渡して初期状態を指定できます。"))),o(e.Item,{value:"c"},o(e.ItemTrigger,null,"セクション C",o(e.ItemIndicator,null)),o(e.ItemContent,null,o(e.ItemBody,null,"lazyMount や unmountOnExit と組み合わせることも可能です。"))))}})}function p(n){let l=["second"],t=1;o.mount(n,{view(){return o("div",null,o(e.Root,{value:l,collapsible:!0,onValueChange:c=>{l=c.value,o.redraw()},onChange:c=>{t=c,o.redraw()}},o(e.Item,{value:"first"},o(e.ItemTrigger,null,"First",o(e.ItemIndicator,null)),o(e.ItemContent,null,o(e.ItemBody,null,"制御モードで value を外から管理できます。"))),o(e.Item,{value:"second"},o(e.ItemTrigger,null,"Second",o(e.ItemIndicator,null)),o(e.ItemContent,null,o(e.ItemBody,null,"旧 API 互換の onChange(index) も併用できます。")))),o("div",{style:{marginTop:"12px",fontSize:"0.9rem",color:"#617082"}},`value: ${JSON.stringify(l)} / onChange: ${JSON.stringify(t)}`))}})}function h(n){o.mount(n,{view(){return o(e.Root,{collapsible:!0,orientation:"horizontal",variant:"enclosed"},o(e.Item,{value:"tab-1"},o(e.ItemTrigger,null,"タブ1",o(e.ItemIndicator,null)),o(e.ItemContent,null,o(e.ItemBody,null,"横方向ナビゲーションの内容1。ArrowLeft / ArrowRight で移動できます。"))),o(e.Item,{value:"tab-2"},o(e.ItemTrigger,null,"タブ2",o(e.ItemIndicator,null)),o(e.ItemContent,null,o(e.ItemBody,null,"横方向ナビゲーションの内容2"))))}})}const v=`/** @jsx m */\r
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
`,B=JSON.parse('{"title":"Accordion","description":"","frontmatter":{},"headers":[],"relativePath":"Accordion.md","filePath":"Accordion.md","lastUpdated":1776836643000}'),y={name:"Accordion.md"},w=Object.assign(y,{setup(n){return(l,t)=>{const c=m("MithrilDemo");return I(),s("div",null,[t[0]||(t[0]=u('<h1 id="accordion" tabindex="-1">Accordion <a class="header-anchor" href="#accordion" aria-label="Permalink to &quot;Accordion&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>Accordion</code> は、コンテンツを縦方向に積み重ねて表示するための、折りたたみ可能なコンポーネントです。</p><p>以下のサブコンポーネントで構成されます:</p><ul><li><code>Accordion.Root</code> — ルートコンテナ。展開状態管理・キーボードナビゲーションを担う</li><li><code>Accordion.Item</code> — 個々のアコーディオン項目</li><li><code>Accordion.ItemTrigger</code> — 開閉トリガーボタン</li><li><code>Accordion.ItemContent</code> — 開閉されるコンテンツ領域</li><li><code>Accordion.ItemBody</code> — コンテンツの本文</li><li><code>Accordion.ItemIndicator</code> — 開閉状態を示す矢印インジケーター</li></ul><p><code>multiple</code> / <code>collapsible</code> / <code>value</code> / <code>defaultValue</code> / <code>onValueChange</code> で柔軟な展開制御を行えます。</p><h2 id="usage-使用例" tabindex="-1">Usage 使用例 <a class="header-anchor" href="#usage-使用例" aria-label="Permalink to &quot;Usage 使用例&quot;">​</a></h2><h3 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h3>',8)),a(c,{setup:i(A),code:i(v)},null,8,["setup","code"]),t[1]||(t[1]=r("h3",{id:"複数展開",tabindex:"-1"},[d("複数展開 "),r("a",{class:"header-anchor",href:"#複数展開","aria-label":'Permalink to "複数展開"'},"​")],-1)),t[2]||(t[2]=r("p",null,[r("code",null,"multiple"),d(" を指定すると、複数の項目を同時に開くことができます。")],-1)),a(c,{setup:i(g),code:i(f)},null,8,["setup","code"]),t[3]||(t[3]=r("h3",{id:"制御モード",tabindex:"-1"},[d("制御モード "),r("a",{class:"header-anchor",href:"#制御モード","aria-label":'Permalink to "制御モード"'},"​")],-1)),t[4]||(t[4]=r("p",null,[r("code",null,"value"),d(" と "),r("code",null,"onValueChange"),d(" を使うと、外部から展開状態を完全に制御できます。")],-1)),a(c,{setup:i(p),code:i(b)},null,8,["setup","code"]),t[5]||(t[5]=r("h3",{id:"orientation-横スクロールキーボードナビゲーション",tabindex:"-1"},[d("orientation（横スクロールキーボードナビゲーション） "),r("a",{class:"header-anchor",href:"#orientation-横スクロールキーボードナビゲーション","aria-label":'Permalink to "orientation（横スクロールキーボードナビゲーション）"'},"​")],-1)),t[6]||(t[6]=r("p",null,[r("code",null,'orientation="horizontal"'),d(" を指定すると、キーボードナビゲーションが "),r("code",null,"ArrowLeft"),d(" / "),r("code",null,"ArrowRight"),d(" に変わります。")],-1)),a(c,{setup:i(h),code:i(C)},null,8,["setup","code"]),t[7]||(t[7]=u('<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="root-props" tabindex="-1">Root Props <a class="header-anchor" href="#root-props" aria-label="Permalink to &quot;Root Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>multiple</code></td><td><code>boolean</code></td><td><code>false</code></td><td>複数項目を同時に展開できるようにします。<code>false</code> の場合、一度に 1 つの項目しか開けません</td></tr><tr><td><code>collapsible</code></td><td><code>boolean</code></td><td><code>false</code></td><td>単一展開モード (<code>multiple=false</code>) で、開いている項目をクリックして閉じることを許可します。<code>false</code> の場合、常に 1 つは開いた状態を維持します</td></tr><tr><td><code>value</code></td><td><code>AccordionValue | AccordionValue[]</code></td><td>—</td><td>制御モードで使用します。現在展開中の項目の value を指定します。配列で複数指定可能（<code>multiple=true</code> 時）</td></tr><tr><td><code>defaultValue</code></td><td><code>AccordionValue | AccordionValue[]</code></td><td>—</td><td>非制御モードで使用します。初期表示時に展開する項目の value を指定します</td></tr><tr><td><code>onValueChange</code></td><td><code>(details: { value, indices }) =&gt; void</code></td><td>—</td><td>展開状態が変わったときに呼ばれるコールバック。<code>details.value</code> は展開中の value 配列、<code>details.indices</code> はインデックス配列</td></tr><tr><td><code>onFocusChange</code></td><td><code>(details: { value, index }) =&gt; void</code></td><td>—</td><td>トリガーにフォーカスが移動したとき呼ばれるコールバック</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>すべての項目を一括で無効化します。個別無効化は <code>Item</code> 側の <code>disabled</code> を使います</td></tr><tr><td><code>lazyMount</code></td><td><code>boolean</code></td><td><code>false</code></td><td><code>true</code> にすると、一度も展開されていない項目のコンテンツ DOM を生成しません。大量の項目がある場合のパフォーマンス最適化に有効です</td></tr><tr><td><code>unmountOnExit</code></td><td><code>boolean</code></td><td><code>false</code></td><td><code>true</code> にすると、閉じた項目のコンテンツ DOM を即座に破棄します。<code>lazyMount</code> と併用するとさらに効果的です</td></tr><tr><td><code>variant</code></td><td><code>&quot;outline&quot; | &quot;subtle&quot; | &quot;enclosed&quot; | &quot;plain&quot;</code></td><td><code>&quot;outline&quot;</code></td><td>見た目のバリエーション。<code>outline</code>: 枠線付き、<code>subtle</code>: 淡い背景色、<code>enclosed</code>: 強調枠線＋影、<code>plain</code>: 仕切り線のみ</td></tr><tr><td><code>size</code></td><td><code>&quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;</code></td><td><code>&quot;md&quot;</code></td><td>コンポーネントのサイズ。パディングとフォントサイズが変わります</td></tr><tr><td><code>orientation</code></td><td><code>&quot;vertical&quot; | &quot;horizontal&quot;</code></td><td><code>&quot;vertical&quot;</code></td><td>キーボードナビゲーションの方向。<code>vertical</code> は ArrowUp/Down、<code>horizontal</code> は ArrowLeft/Right で項目間を移動します</td></tr><tr><td><code>ids</code></td><td><code>Partial&lt;{ root, item, itemContent, itemTrigger }&gt;</code></td><td>—</td><td>ARIA 属性用のカスタム ID 生成関数。テスト時やポータル使用時に便利です</td></tr><tr><td><code>id</code></td><td><code>string</code></td><td>—</td><td>ルート要素の id 属性</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>ルート要素に付与する追加 CSS クラス</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt;</code></td><td>—</td><td>ルート要素に付与するインラインスタイル</td></tr></tbody></table><h3 id="item-props" tabindex="-1">Item Props <a class="header-anchor" href="#item-props" aria-label="Permalink to &quot;Item Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>value</code></td><td><code>string | number</code></td><td>(インデックス)</td><td>項目の識別値。値変更イベントの value 配列に含まれます。省略すると 0 始まりのインデックスが自動で割り当てられます</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>この項目を無効化します。トリガーがクリック不可になり、キーボードナビゲーションでもスキップされます</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>項目要素に対する追加 CSS クラス</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt;</code></td><td>—</td><td>項目要素に対するインラインスタイル</td></tr></tbody></table><h2 id="アクセシビリティ" tabindex="-1">アクセシビリティ <a class="header-anchor" href="#アクセシビリティ" aria-label="Permalink to &quot;アクセシビリティ&quot;">​</a></h2><ul><li><code>aria-expanded</code>, <code>aria-controls</code>, <code>aria-labelledby</code> を自動設定</li><li><code>ArrowUp</code> / <code>ArrowDown</code> (vertical) または <code>ArrowLeft</code> / <code>ArrowRight</code> (horizontal) で項目間移動</li><li><code>Home</code> / <code>End</code> で先頭・末尾へジャンプ</li><li><code>Enter</code> / <code>Space</code> で開閉</li><li><code>Accordion.ItemIndicator</code> は開閉状態に応じて 180° 回転します</li></ul>',7))])}}});export{B as __pageData,w as default};
