import{m as t}from"./chunks/theme.MeAZuU5r.js";import{s as e}from"./chunks/Table.BlGpiJ_h.js";import{C as u,o as b,c as p,ai as c,E as l,k as n,j as o,a as i}from"./chunks/framework.DYURIDHw.js";function g(a){t.mount(a,{view(){return t(e.Root,{defaultValue:"overview",variant:"line",size:"md"},t(e.List,null,t(e.Trigger,{value:"overview"},"概要"),t(e.Trigger,{value:"recipe"},"レシピ"),t(e.Trigger,{value:"alarms"},"アラーム")),t(e.Content,{value:"overview"},t("div",{style:{display:"grid",gap:"10px"}},t("div",{style:{padding:"14px",borderRadius:"12px",background:"#eff6ff"}},"現在温度 812℃ / 目標温度 850℃"),t("div",{style:{padding:"14px",borderRadius:"12px",background:"#f8fafc"}},"ホールド開始まで 18 分"))),t(e.Content,{value:"recipe"},t("div",{style:{display:"grid",gap:"8px"}},t("div",null,"Stoneware A"),t("div",{style:{color:"#475569",fontSize:"0.9rem"}},"Ramp 2.0℃/min, Hold 45 min"))),t(e.Content,{value:"alarms"},t("div",{style:{padding:"14px",borderRadius:"12px",background:"#fff7ed",color:"#9a3412"}},"現在アクティブなアラームはありません。")))}})}function v(a){let r="trend";t.mount(a,{view(){return t("div",{style:{display:"grid",gap:"12px"}},t("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"}},t("button",{type:"button",class:"vp-button",onclick:()=>{r="trend",t.redraw()}},"Trend"),t("button",{type:"button",class:"vp-button",onclick:()=>{r="events",t.redraw()}},"Events"),t("button",{type:"button",class:"vp-button",onclick:()=>{r="notes",t.redraw()}},"Notes")),t(e.Root,{value:r,onValueChange:d=>{r=d.value,t.redraw()},activationMode:"manual",variant:"enclosed"},t(e.List,null,t(e.Trigger,{value:"trend"},"Trend"),t(e.Trigger,{value:"events"},"Events"),t(e.Trigger,{value:"notes"},"Notes")),t(e.Content,{value:"trend"},t("div",{style:{padding:"14px",borderRadius:"12px",background:"#eff6ff"}},"温度トレンドをここに表示します。")),t(e.Content,{value:"events"},t("div",{style:{padding:"14px",borderRadius:"12px",background:"#ecfeff"}},"イベントログ 12 件を表示中です。")),t(e.Content,{value:"notes"},t("div",{style:{padding:"14px",borderRadius:"12px",background:"#f5f3ff"}},"作業メモと引き継ぎ事項を確認できます。"))),t("div",{style:{color:"#475569",fontSize:"0.9rem"}},"現在のタブ: ",r))}})}function T(a){t.mount(a,{view(){return t(e.Root,{defaultValue:"power",orientation:"vertical",variant:"outline",size:"sm"},t(e.List,null,t(e.Trigger,{value:"power"},"電力"),t(e.Trigger,{value:"gas"},"ガス流量"),t(e.Trigger,{value:"air"},"送風")),t(e.Content,{value:"power"},t("div",{style:{padding:"14px",borderRadius:"12px",background:"#f8fafc"}},"消費電力 24.8kW、負荷率 71%")),t(e.Content,{value:"gas"},t("div",{style:{padding:"14px",borderRadius:"12px",background:"#f8fafc"}},"バーナー流量 4.2 Nm³/h")),t(e.Content,{value:"air"},t("div",{style:{padding:"14px",borderRadius:"12px",background:"#f8fafc"}},"ブロワー出力 62%、ダンパー開度 48%")))}})}const h=`/** @jsx m */\r
import m from "mithril";\r
import { Tabs } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <Tabs.Root defaultValue="overview" variant="line" size="md">\r
          <Tabs.List>\r
            <Tabs.Trigger value="overview">概要</Tabs.Trigger>\r
            <Tabs.Trigger value="recipe">レシピ</Tabs.Trigger>\r
            <Tabs.Trigger value="alarms">アラーム</Tabs.Trigger>\r
          </Tabs.List>\r
\r
          <Tabs.Content value="overview">\r
            <div style={{ display: "grid", gap: "10px" }}>\r
              <div style={{ padding: "14px", borderRadius: "12px", background: "#eff6ff" }}>\r
                現在温度 812℃ / 目標温度 850℃\r
              </div>\r
              <div style={{ padding: "14px", borderRadius: "12px", background: "#f8fafc" }}>\r
                ホールド開始まで 18 分\r
              </div>\r
            </div>\r
          </Tabs.Content>\r
\r
          <Tabs.Content value="recipe">\r
            <div style={{ display: "grid", gap: "8px" }}>\r
              <div>Stoneware A</div>\r
              <div style={{ color: "#475569", fontSize: "0.9rem" }}>Ramp 2.0℃/min, Hold 45 min</div>\r
            </div>\r
          </Tabs.Content>\r
\r
          <Tabs.Content value="alarms">\r
            <div style={{ padding: "14px", borderRadius: "12px", background: "#fff7ed", color: "#9a3412" }}>\r
              現在アクティブなアラームはありません。\r
            </div>\r
          </Tabs.Content>\r
        </Tabs.Root>\r
      );\r
    },\r
  });\r
}\r
`,f=`/** @jsx m */\r
import m from "mithril";\r
import { Tabs } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  let value = "trend";\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div style={{ display: "grid", gap: "12px" }}>\r
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>\r
            <button type="button" class="vp-button" onclick={() => { value = "trend"; m.redraw(); }}>Trend</button>\r
            <button type="button" class="vp-button" onclick={() => { value = "events"; m.redraw(); }}>Events</button>\r
            <button type="button" class="vp-button" onclick={() => { value = "notes"; m.redraw(); }}>Notes</button>\r
          </div>\r
\r
          <Tabs.Root\r
            value={value}\r
            onValueChange={(details) => { value = details.value; m.redraw(); }}\r
            activationMode="manual"\r
            variant="enclosed"\r
          >\r
            <Tabs.List>\r
              <Tabs.Trigger value="trend">Trend</Tabs.Trigger>\r
              <Tabs.Trigger value="events">Events</Tabs.Trigger>\r
              <Tabs.Trigger value="notes">Notes</Tabs.Trigger>\r
            </Tabs.List>\r
\r
            <Tabs.Content value="trend">\r
              <div style={{ padding: "14px", borderRadius: "12px", background: "#eff6ff" }}>温度トレンドをここに表示します。</div>\r
            </Tabs.Content>\r
            <Tabs.Content value="events">\r
              <div style={{ padding: "14px", borderRadius: "12px", background: "#ecfeff" }}>イベントログ 12 件を表示中です。</div>\r
            </Tabs.Content>\r
            <Tabs.Content value="notes">\r
              <div style={{ padding: "14px", borderRadius: "12px", background: "#f5f3ff" }}>作業メモと引き継ぎ事項を確認できます。</div>\r
            </Tabs.Content>\r
          </Tabs.Root>\r
\r
          <div style={{ color: "#475569", fontSize: "0.9rem" }}>現在のタブ: {value}</div>\r
        </div>\r
      );\r
    },\r
  });\r
}`,m=`/** @jsx m */\r
import m from "mithril";\r
import { Tabs } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <Tabs.Root defaultValue="power" orientation="vertical" variant="outline" size="sm">\r
          <Tabs.List>\r
            <Tabs.Trigger value="power">電力</Tabs.Trigger>\r
            <Tabs.Trigger value="gas">ガス流量</Tabs.Trigger>\r
            <Tabs.Trigger value="air">送風</Tabs.Trigger>\r
          </Tabs.List>\r
\r
          <Tabs.Content value="power">\r
            <div style={{ padding: "14px", borderRadius: "12px", background: "#f8fafc" }}>\r
              消費電力 24.8kW、負荷率 71%\r
            </div>\r
          </Tabs.Content>\r
          <Tabs.Content value="gas">\r
            <div style={{ padding: "14px", borderRadius: "12px", background: "#f8fafc" }}>\r
              バーナー流量 4.2 Nm³/h\r
            </div>\r
          </Tabs.Content>\r
          <Tabs.Content value="air">\r
            <div style={{ padding: "14px", borderRadius: "12px", background: "#f8fafc" }}>\r
              ブロワー出力 62%、ダンパー開度 48%\r
            </div>\r
          </Tabs.Content>\r
        </Tabs.Root>\r
      );\r
    },\r
  });\r
}`,C=JSON.parse('{"title":"Tabs","description":"","frontmatter":{},"headers":[],"relativePath":"Tabs.md","filePath":"Tabs.md"}'),x={name:"Tabs.md"},R=Object.assign(x,{setup(a){return(r,d)=>{const s=u("MithrilDemo");return b(),p("div",null,[d[0]||(d[0]=c('<h1 id="tabs" tabindex="-1">Tabs <a class="header-anchor" href="#tabs" aria-label="Permalink to &quot;Tabs&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>Tabs</code> は <code>Tabs.Root</code>, <code>Tabs.List</code>, <code>Tabs.Trigger</code>, <code>Tabs.Content</code> を組み合わせて使う compound component 型のタブです。表示中のパネル切り替えだけでなく、<code>activationMode</code> によるキーボード操作の制御、<code>lazyMount</code> / <code>unmountOnExit</code> による描画コスト調整、<code>orientation</code> による縦配置にも対応しています。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>旧タブ UI（<code>TabsClassic</code>）は <code>mithril-ui-kit-dev</code> パッケージに移動しました。</p></div><h2 id="usage-使用例" tabindex="-1">Usage 使用例 <a class="header-anchor" href="#usage-使用例" aria-label="Permalink to &quot;Usage 使用例&quot;">​</a></h2><h3 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h3><p>監視画面のように、複数の情報パネルをひとつの領域で切り替える基本パターンです。</p>',7)),l(s,{setup:n(g),code:n(h)},null,8,["setup","code"]),d[1]||(d[1]=o("h3",{id:"制御モード",tabindex:"-1"},[i("制御モード "),o("a",{class:"header-anchor",href:"#制御モード","aria-label":'Permalink to "制御モード"'},"​")],-1)),d[2]||(d[2]=o("p",null,[o("code",null,"value"),i(" と "),o("code",null,"onValueChange"),i(" を使うと、外部ボタンや URL 状態と同期したタブ制御ができます。")],-1)),l(s,{setup:n(v),code:n(f)},null,8,["setup","code"]),d[3]||(d[3]=o("h3",{id:"縦配置",tabindex:"-1"},[i("縦配置 "),o("a",{class:"header-anchor",href:"#縦配置","aria-label":'Permalink to "縦配置"'},"​")],-1)),d[4]||(d[4]=o("p",null,[o("code",null,'orientation="vertical"'),i(" を使うと、設定画面のサイドナビ風レイアウトにできます。")],-1)),l(s,{setup:n(T),code:n(m)},null,8,["setup","code"]),d[5]||(d[5]=c('<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="tabs-root-props" tabindex="-1">Tabs.Root Props <a class="header-anchor" href="#tabs-root-props" aria-label="Permalink to &quot;Tabs.Root Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>value</code></td><td><code>string</code></td><td>—</td><td>制御モード時の選択中タブです</td></tr><tr><td><code>defaultValue</code></td><td><code>string</code></td><td>—</td><td>非制御モード時の初期タブです</td></tr><tr><td><code>onValueChange</code></td><td><code>(details: { value: string }) =&gt; void</code></td><td>—</td><td>タブ変更時に呼ばれます</td></tr><tr><td><code>variant</code></td><td><code>&quot;line&quot; | &quot;subtle&quot; | &quot;enclosed&quot; | &quot;outline&quot; | &quot;plain&quot;</code></td><td><code>&quot;line&quot;</code></td><td>タブ見出しの見た目です</td></tr><tr><td><code>size</code></td><td><code>&quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;</code></td><td><code>&quot;md&quot;</code></td><td>タブの高さと文字サイズです</td></tr><tr><td><code>orientation</code></td><td><code>&quot;horizontal&quot; | &quot;vertical&quot;</code></td><td><code>&quot;horizontal&quot;</code></td><td>タブの並び方向です</td></tr><tr><td><code>activationMode</code></td><td><code>&quot;automatic&quot; | &quot;manual&quot;</code></td><td><code>&quot;automatic&quot;</code></td><td>フォーカス移動時に即選択するか、Enter / Space で確定するかを切り替えます</td></tr><tr><td><code>lazyMount</code></td><td><code>boolean</code></td><td><code>false</code></td><td>未表示パネルの初回描画を遅延します</td></tr><tr><td><code>unmountOnExit</code></td><td><code>boolean</code></td><td><code>false</code></td><td>非アクティブパネルを DOM から外します</td></tr><tr><td><code>loopFocus</code></td><td><code>boolean</code></td><td><code>true</code></td><td>キーボード移動で末尾から先頭、先頭から末尾へループさせます</td></tr><tr><td><code>fitted</code></td><td><code>boolean</code></td><td><code>false</code></td><td>タブを均等幅にします</td></tr><tr><td><code>id</code></td><td><code>string</code></td><td>自動生成</td><td>ARIA 連携に使うルート id です</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>追加クラスです</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt;</code></td><td>—</td><td>ルートのインラインスタイルです</td></tr></tbody></table><h3 id="tabs-list-props" tabindex="-1">Tabs.List Props <a class="header-anchor" href="#tabs-list-props" aria-label="Permalink to &quot;Tabs.List Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>タブリストに追加するクラスです</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt;</code></td><td>—</td><td>タブリストのインラインスタイルです</td></tr></tbody></table><h3 id="tabs-trigger-props" tabindex="-1">Tabs.Trigger Props <a class="header-anchor" href="#tabs-trigger-props" aria-label="Permalink to &quot;Tabs.Trigger Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>value</code></td><td><code>string</code></td><td>—</td><td>対応するタブ値です</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>個別に無効化します</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>トリガーに追加するクラスです</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt;</code></td><td>—</td><td>トリガーのインラインスタイルです</td></tr></tbody></table><h3 id="tabs-content-props" tabindex="-1">Tabs.Content Props <a class="header-anchor" href="#tabs-content-props" aria-label="Permalink to &quot;Tabs.Content Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>value</code></td><td><code>string</code></td><td>—</td><td>対応するタブ値です</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>コンテンツに追加するクラスです</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt;</code></td><td>—</td><td>コンテンツのインラインスタイルです</td></tr></tbody></table><h3 id="tabs-indicator-props" tabindex="-1">Tabs.Indicator Props <a class="header-anchor" href="#tabs-indicator-props" aria-label="Permalink to &quot;Tabs.Indicator Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>互換用の追加クラスです</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt;</code></td><td>—</td><td>互換用のインラインスタイルです</td></tr></tbody></table><h3 id="subcomponents" tabindex="-1">Subcomponents <a class="header-anchor" href="#subcomponents" aria-label="Permalink to &quot;Subcomponents&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Component</th><th>Description</th></tr></thead><tbody><tr><td><code>Tabs.Root</code></td><td>状態管理、ARIA 属性、キーボード操作を管理するルートです</td></tr><tr><td><code>Tabs.List</code></td><td>タブ見出しの並びを定義します</td></tr><tr><td><code>Tabs.Trigger</code></td><td>個々のタブ切り替えボタンです</td></tr><tr><td><code>Tabs.Content</code></td><td>対応するパネル本文です</td></tr><tr><td><code>Tabs.Indicator</code></td><td>API 互換用に export されているマーカーです</td></tr></tbody></table><h2 id="補足" tabindex="-1">補足 <a class="header-anchor" href="#補足" aria-label="Permalink to &quot;補足&quot;">​</a></h2><p><code>Tabs.Indicator</code> は export されていますが、現行実装では <code>line</code> や <code>enclosed</code> などの見た目を <code>Tabs.Root</code> / <code>Tabs.Trigger</code> 側で描画しているため、通常は明示的に配置する必要はありません。</p>',15))])}}});export{C as __pageData,R as default};
