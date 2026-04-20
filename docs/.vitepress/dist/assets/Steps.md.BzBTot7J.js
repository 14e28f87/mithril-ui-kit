import{m as t}from"./chunks/theme.D5gNcpBr.js";import{q as e}from"./chunks/Table.A5W0Ssaz.js";import{C as c,o as u,c as g,ai as a,E as l,k as i,j as o,a as p}from"./chunks/framework.Bm_aoSIc.js";function S(s){let d=0;t.mount(s,{view(){return t("div",{style:{display:"grid",gap:"14px"}},t(e.Root,{count:4,step:d,onStepChange:r=>{d=r.step,t.redraw()},variant:"solid",size:"md"},t(e.List,null,t(e.Item,{index:0},t(e.Trigger,null,t(e.Indicator,null),t(e.Title,null,"条件入力"),t(e.Description,null,"レシピと目標値")),t(e.Separator,null)),t(e.Item,{index:1},t(e.Trigger,null,t(e.Indicator,null),t(e.Title,null,"安全確認"),t(e.Description,null,"警報と機器状態")),t(e.Separator,null)),t(e.Item,{index:2},t(e.Trigger,null,t(e.Indicator,null),t(e.Title,null,"開始承認"),t(e.Description,null,"実行前レビュー")),t(e.Separator,null)),t(e.Item,{index:3},t(e.Trigger,null,t(e.Indicator,null),t(e.Title,null,"監視開始"),t(e.Description,null,"バッチ実行")))),t(e.Content,{index:0},t("div",{style:{padding:"14px",borderRadius:"12px",background:"#eff6ff"}},"レシピ、目標温度、昇温勾配を入力します。")),t(e.Content,{index:1},t("div",{style:{padding:"14px",borderRadius:"12px",background:"#fefce8"}},"非常停止、扉スイッチ、センサー異常を確認します。")),t(e.Content,{index:2},t("div",{style:{padding:"14px",borderRadius:"12px",background:"#f5f3ff"}},"承認者が条件を確認し、バッチ開始を許可します。")),t(e.Content,{index:3},t("div",{style:{padding:"14px",borderRadius:"12px",background:"#ecfeff"}},"実行を開始し、グラフと状態表示を監視します。")),t(e.CompletedContent,null,t("div",{style:{padding:"14px",borderRadius:"12px",background:"#dcfce7",color:"#166534"}},"セットアップ手順が完了しました。")),t(e.PrevTrigger,null,"戻る"),t(e.NextTrigger,null,"次へ")),t("div",{style:{color:"#475569",fontSize:"0.9rem"}},d>=4?"現在状態: 完了":`現在の step: ${d+1} / 4`))}})}function m(s){let d=1,r=!1;t.mount(s,{view(){return t("div",{style:{display:"grid",gap:"14px"}},t("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"}},[0,1,2].map(n=>t("button",{type:"button",class:"vp-button",onclick:()=>{d=n,r=!1,t.redraw()}},"Step ",n+1)),t("button",{type:"button",class:"vp-button",onclick:()=>{d=0,r=!1,t.redraw()}},"Reset")),t(e.Root,{count:3,step:d,linear:!1,variant:"subtle",onStepChange:n=>{d=n.step,r=n.step>=3,t.redraw()},onStepComplete:()=>{r=!0,t.redraw()}},t(e.List,null,t(e.Item,{index:0},t(e.Trigger,null,t(e.Indicator,null),t(e.Title,null,"原料")),t(e.Separator,null)),t(e.Item,{index:1},t(e.Trigger,null,t(e.Indicator,null),t(e.Title,null,"配合")),t(e.Separator,null)),t(e.Item,{index:2},t(e.Trigger,null,t(e.Indicator,null),t(e.Title,null,"確認")))),t(e.Content,{index:0},t("div",{style:{padding:"12px",background:"#eff6ff",borderRadius:"12px"}},"原料ロットを確認します。")),t(e.Content,{index:1},t("div",{style:{padding:"12px",background:"#fef3c7",borderRadius:"12px"}},"配合値と投入量をレビューします。")),t(e.Content,{index:2},t("div",{style:{padding:"12px",background:"#ede9fe",borderRadius:"12px"}},"最終確認後に開始できます。")),t(e.CompletedContent,null,t("div",{style:{padding:"12px",background:"#dcfce7",borderRadius:"12px"}},"手順を完了しました。")),t(e.PrevTrigger,null,"Prev"),t(e.NextTrigger,null,"Next")),t("div",{style:{color:"#475569",fontSize:"0.9rem"}},r?"外部状態: completed":`外部状態: step=${d}`))}})}function x(s){t.mount(s,{view(){return t(e.Root,{count:3,defaultStep:1,orientation:"vertical",variant:"subtle",size:"sm"},t(e.List,null,t(e.Item,{index:0},t(e.Trigger,null,t(e.Indicator,null),t(e.Title,null,"計測開始"),t(e.Description,null,"センサー接続確認")),t(e.Separator,null)),t(e.Item,{index:1},t(e.Trigger,null,t(e.Indicator,null),t(e.Title,null,"予熱"),t(e.Description,null,"目標温度まで昇温")),t(e.Separator,null)),t(e.Item,{index:2},t(e.Trigger,null,t(e.Indicator,null),t(e.Title,null,"保持"),t(e.Description,null,"均熱時間の管理")))),t(e.Content,{index:0},t("div",{style:{padding:"12px",borderRadius:"12px",background:"#f8fafc"}},"すべてのセンサー値が取得できる状態です。")),t(e.Content,{index:1},t("div",{style:{padding:"12px",borderRadius:"12px",background:"#f8fafc"}},"現在は予熱中で、2.0℃/min で昇温しています。")),t(e.Content,{index:2},t("div",{style:{padding:"12px",borderRadius:"12px",background:"#f8fafc"}},"保持工程では温度安定性を監視します。")))}})}const b=`/** @jsx m */\r
import m from "mithril";\r
import { Steps } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  let step = 0;\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div style={{ display: "grid", gap: "14px" }}>\r
          <Steps.Root count={4} step={step} onStepChange={(details) => { step = details.step; m.redraw(); }} variant="solid" size="md">\r
            <Steps.List>\r
              <Steps.Item index={0}>\r
                <Steps.Trigger>\r
                  <Steps.Indicator />\r
                  <Steps.Title>条件入力</Steps.Title>\r
                  <Steps.Description>レシピと目標値</Steps.Description>\r
                </Steps.Trigger>\r
                <Steps.Separator />\r
              </Steps.Item>\r
              <Steps.Item index={1}>\r
                <Steps.Trigger>\r
                  <Steps.Indicator />\r
                  <Steps.Title>安全確認</Steps.Title>\r
                  <Steps.Description>警報と機器状態</Steps.Description>\r
                </Steps.Trigger>\r
                <Steps.Separator />\r
              </Steps.Item>\r
              <Steps.Item index={2}>\r
                <Steps.Trigger>\r
                  <Steps.Indicator />\r
                  <Steps.Title>開始承認</Steps.Title>\r
                  <Steps.Description>実行前レビュー</Steps.Description>\r
                </Steps.Trigger>\r
                <Steps.Separator />\r
              </Steps.Item>\r
              <Steps.Item index={3}>\r
                <Steps.Trigger>\r
                  <Steps.Indicator />\r
                  <Steps.Title>監視開始</Steps.Title>\r
                  <Steps.Description>バッチ実行</Steps.Description>\r
                </Steps.Trigger>\r
              </Steps.Item>\r
            </Steps.List>\r
\r
            <Steps.Content index={0}>\r
              <div style={{ padding: "14px", borderRadius: "12px", background: "#eff6ff" }}>レシピ、目標温度、昇温勾配を入力します。</div>\r
            </Steps.Content>\r
            <Steps.Content index={1}>\r
              <div style={{ padding: "14px", borderRadius: "12px", background: "#fefce8" }}>非常停止、扉スイッチ、センサー異常を確認します。</div>\r
            </Steps.Content>\r
            <Steps.Content index={2}>\r
              <div style={{ padding: "14px", borderRadius: "12px", background: "#f5f3ff" }}>承認者が条件を確認し、バッチ開始を許可します。</div>\r
            </Steps.Content>\r
            <Steps.Content index={3}>\r
              <div style={{ padding: "14px", borderRadius: "12px", background: "#ecfeff" }}>実行を開始し、グラフと状態表示を監視します。</div>\r
            </Steps.Content>\r
            <Steps.CompletedContent>\r
              <div style={{ padding: "14px", borderRadius: "12px", background: "#dcfce7", color: "#166534" }}>セットアップ手順が完了しました。</div>\r
            </Steps.CompletedContent>\r
\r
            <Steps.PrevTrigger>戻る</Steps.PrevTrigger>\r
            <Steps.NextTrigger>次へ</Steps.NextTrigger>\r
          </Steps.Root>\r
\r
          <div style={{ color: "#475569", fontSize: "0.9rem" }}>\r
            {step >= 4 ? "現在状態: 完了" : \`現在の step: \${step + 1} / 4\`}\r
          </div>\r
        </div>\r
      );\r
    },\r
  });\r
}\r
`,f=`/** @jsx m */\r
import m from "mithril";\r
import { Steps } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  let step = 1;\r
  let completed = false;\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div style={{ display: "grid", gap: "14px" }}>\r
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>\r
            {[0, 1, 2].map((index) => (\r
              <button type="button" class="vp-button" onclick={() => { step = index; completed = false; m.redraw(); }}>\r
                Step {index + 1}\r
              </button>\r
            ))}\r
            <button type="button" class="vp-button" onclick={() => { step = 0; completed = false; m.redraw(); }}>Reset</button>\r
          </div>\r
\r
          <Steps.Root\r
            count={3}\r
            step={step}\r
            linear={false}\r
            variant="subtle"\r
            onStepChange={(details) => {\r
              step = details.step;\r
              completed = details.step >= 3;\r
              m.redraw();\r
            }}\r
            onStepComplete={() => {\r
              completed = true;\r
              m.redraw();\r
            }}\r
          >\r
            <Steps.List>\r
              <Steps.Item index={0}>\r
                <Steps.Trigger>\r
                  <Steps.Indicator />\r
                  <Steps.Title>原料</Steps.Title>\r
                </Steps.Trigger>\r
                <Steps.Separator />\r
              </Steps.Item>\r
              <Steps.Item index={1}>\r
                <Steps.Trigger>\r
                  <Steps.Indicator />\r
                  <Steps.Title>配合</Steps.Title>\r
                </Steps.Trigger>\r
                <Steps.Separator />\r
              </Steps.Item>\r
              <Steps.Item index={2}>\r
                <Steps.Trigger>\r
                  <Steps.Indicator />\r
                  <Steps.Title>確認</Steps.Title>\r
                </Steps.Trigger>\r
              </Steps.Item>\r
            </Steps.List>\r
\r
            <Steps.Content index={0}><div style={{ padding: "12px", background: "#eff6ff", borderRadius: "12px" }}>原料ロットを確認します。</div></Steps.Content>\r
            <Steps.Content index={1}><div style={{ padding: "12px", background: "#fef3c7", borderRadius: "12px" }}>配合値と投入量をレビューします。</div></Steps.Content>\r
            <Steps.Content index={2}><div style={{ padding: "12px", background: "#ede9fe", borderRadius: "12px" }}>最終確認後に開始できます。</div></Steps.Content>\r
            <Steps.CompletedContent><div style={{ padding: "12px", background: "#dcfce7", borderRadius: "12px" }}>手順を完了しました。</div></Steps.CompletedContent>\r
\r
            <Steps.PrevTrigger>Prev</Steps.PrevTrigger>\r
            <Steps.NextTrigger>Next</Steps.NextTrigger>\r
          </Steps.Root>\r
\r
          <div style={{ color: "#475569", fontSize: "0.9rem" }}>\r
            {completed ? "外部状態: completed" : \`外部状態: step=\${step}\`}\r
          </div>\r
        </div>\r
      );\r
    },\r
  });\r
}`,h=`/** @jsx m */\r
import m from "mithril";\r
import { Steps } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <Steps.Root count={3} defaultStep={1} orientation="vertical" variant="subtle" size="sm">\r
          <Steps.List>\r
            <Steps.Item index={0}>\r
              <Steps.Trigger>\r
                <Steps.Indicator />\r
                <Steps.Title>計測開始</Steps.Title>\r
                <Steps.Description>センサー接続確認</Steps.Description>\r
              </Steps.Trigger>\r
              <Steps.Separator />\r
            </Steps.Item>\r
            <Steps.Item index={1}>\r
              <Steps.Trigger>\r
                <Steps.Indicator />\r
                <Steps.Title>予熱</Steps.Title>\r
                <Steps.Description>目標温度まで昇温</Steps.Description>\r
              </Steps.Trigger>\r
              <Steps.Separator />\r
            </Steps.Item>\r
            <Steps.Item index={2}>\r
              <Steps.Trigger>\r
                <Steps.Indicator />\r
                <Steps.Title>保持</Steps.Title>\r
                <Steps.Description>均熱時間の管理</Steps.Description>\r
              </Steps.Trigger>\r
            </Steps.Item>\r
          </Steps.List>\r
\r
          <Steps.Content index={0}><div style={{ padding: "12px", borderRadius: "12px", background: "#f8fafc" }}>すべてのセンサー値が取得できる状態です。</div></Steps.Content>\r
          <Steps.Content index={1}><div style={{ padding: "12px", borderRadius: "12px", background: "#f8fafc" }}>現在は予熱中で、2.0℃/min で昇温しています。</div></Steps.Content>\r
          <Steps.Content index={2}><div style={{ padding: "12px", borderRadius: "12px", background: "#f8fafc" }}>保持工程では温度安定性を監視します。</div></Steps.Content>\r
        </Steps.Root>\r
      );\r
    },\r
  });\r
}`,I=JSON.parse('{"title":"Steps","description":"","frontmatter":{},"headers":[],"relativePath":"Steps.md","filePath":"Steps.md"}'),T={name:"Steps.md"},R=Object.assign(T,{setup(s){return(d,r)=>{const n=c("MithrilDemo");return u(),g("div",null,[r[0]||(r[0]=a('<h1 id="steps" tabindex="-1">Steps <a class="header-anchor" href="#steps" aria-label="Permalink to &quot;Steps&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>Steps</code> は <code>Steps.List</code>, <code>Steps.Item</code>, <code>Steps.Trigger</code>, <code>Steps.Content</code> を組み合わせて進行状況を表す compound component です。現在ステップの表示だけでなく、完了済み状態の可視化、<code>PrevTrigger</code> / <code>NextTrigger</code> による前後移動、<code>linear</code> による順序制約、<code>orientation</code> による縦配置に対応しています。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>旧ステッパー（<code>StepsClassic</code>）はレガシー扱いです。このページでは current API を案内します。</p></div><h2 id="usage-使用例" tabindex="-1">Usage 使用例 <a class="header-anchor" href="#usage-使用例" aria-label="Permalink to &quot;Usage 使用例&quot;">​</a></h2><h3 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h3><p>手順の流れと、現在の本文を同じ画面で見せる基本パターンです。</p>',7)),l(n,{setup:i(S),code:i(b)},null,8,["setup","code"]),r[1]||(r[1]=o("h3",{id:"制御モード",tabindex:"-1"},[p("制御モード "),o("a",{class:"header-anchor",href:"#制御モード","aria-label":'Permalink to "制御モード"'},"​")],-1)),r[2]||(r[2]=o("p",null,[o("code",null,"step"),p(" と "),o("code",null,"onStepChange"),p(" を使うと、外部状態と同期したステップ管理やリセット処理を実装できます。")],-1)),l(n,{setup:i(m),code:i(f)},null,8,["setup","code"]),r[3]||(r[3]=o("h3",{id:"縦配置",tabindex:"-1"},[p("縦配置 "),o("a",{class:"header-anchor",href:"#縦配置","aria-label":'Permalink to "縦配置"'},"​")],-1)),r[4]||(r[4]=o("p",null,[o("code",null,'orientation="vertical"'),p(" は、設定ウィザードや作業手順のサイド表示に向いています。")],-1)),l(n,{setup:i(x),code:i(h)},null,8,["setup","code"]),r[5]||(r[5]=a('<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="steps-root-props" tabindex="-1">Steps.Root Props <a class="header-anchor" href="#steps-root-props" aria-label="Permalink to &quot;Steps.Root Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>count</code></td><td><code>number</code></td><td>—</td><td>ステップ総数です</td></tr><tr><td><code>step</code></td><td><code>number</code></td><td>—</td><td>制御モード時の現在ステップです。0 始まりです</td></tr><tr><td><code>defaultStep</code></td><td><code>number</code></td><td><code>0</code></td><td>非制御モード時の初期ステップです</td></tr><tr><td><code>onStepChange</code></td><td><code>(details: { step: number }) =&gt; void</code></td><td>—</td><td>ステップ変更時に呼ばれます</td></tr><tr><td><code>onStepComplete</code></td><td><code>() =&gt; void</code></td><td>—</td><td>完了状態に入ったときに呼ばれます</td></tr><tr><td><code>linear</code></td><td><code>boolean</code></td><td><code>false</code></td><td>未来のステップへの直接移動を禁止します</td></tr><tr><td><code>variant</code></td><td><code>&quot;solid&quot; | &quot;subtle&quot;</code></td><td><code>&quot;solid&quot;</code></td><td>ステッパーの見た目です</td></tr><tr><td><code>size</code></td><td><code>&quot;xs&quot; | &quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;</code></td><td><code>&quot;md&quot;</code></td><td>インジケーターと文字サイズです</td></tr><tr><td><code>orientation</code></td><td><code>&quot;horizontal&quot; | &quot;vertical&quot;</code></td><td><code>&quot;horizontal&quot;</code></td><td>ステップの並び方向です</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>追加クラスです</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt;</code></td><td>—</td><td>ルートのインラインスタイルです</td></tr></tbody></table><h3 id="steps-item-props" tabindex="-1">Steps.Item Props <a class="header-anchor" href="#steps-item-props" aria-label="Permalink to &quot;Steps.Item Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>index</code></td><td><code>number</code></td><td>—</td><td>対応するステップ番号です。0 始まりです</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>項目に追加するクラスです</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt;</code></td><td>—</td><td>項目のインラインスタイルです</td></tr></tbody></table><h3 id="steps-content-props" tabindex="-1">Steps.Content Props <a class="header-anchor" href="#steps-content-props" aria-label="Permalink to &quot;Steps.Content Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>index</code></td><td><code>number</code></td><td>—</td><td>対応するステップ番号です</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>コンテンツに追加するクラスです</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt;</code></td><td>—</td><td>コンテンツのインラインスタイルです</td></tr></tbody></table><h3 id="ナビゲーション系-props" tabindex="-1">ナビゲーション系 Props <a class="header-anchor" href="#ナビゲーション系-props" aria-label="Permalink to &quot;ナビゲーション系 Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Component</th><th>Props</th></tr></thead><tbody><tr><td><code>Steps.List</code></td><td><code>class?: string</code>, <code>style?: Record&lt;string, string&gt;</code></td></tr><tr><td><code>Steps.Trigger</code></td><td><code>class?: string</code>, <code>style?: Record&lt;string, string&gt;</code></td></tr><tr><td><code>Steps.Indicator</code></td><td><code>class?: string</code>, <code>style?: Record&lt;string, string&gt;</code></td></tr><tr><td><code>Steps.Separator</code></td><td><code>class?: string</code>, <code>style?: Record&lt;string, string&gt;</code></td></tr><tr><td><code>Steps.CompletedContent</code></td><td><code>class?: string</code>, <code>style?: Record&lt;string, string&gt;</code></td></tr><tr><td><code>Steps.Title</code></td><td><code>class?: string</code>, <code>style?: Record&lt;string, string&gt;</code></td></tr><tr><td><code>Steps.Description</code></td><td><code>class?: string</code>, <code>style?: Record&lt;string, string&gt;</code></td></tr><tr><td><code>Steps.PrevTrigger</code></td><td><code>class?: string</code>, <code>style?: Record&lt;string, string&gt;</code></td></tr><tr><td><code>Steps.NextTrigger</code></td><td><code>class?: string</code>, <code>style?: Record&lt;string, string&gt;</code></td></tr></tbody></table><h3 id="subcomponents" tabindex="-1">Subcomponents <a class="header-anchor" href="#subcomponents" aria-label="Permalink to &quot;Subcomponents&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Component</th><th>Description</th></tr></thead><tbody><tr><td><code>Steps.Root</code></td><td>現在位置と完了状態を管理するルートです</td></tr><tr><td><code>Steps.List</code></td><td>ステップ一覧全体です</td></tr><tr><td><code>Steps.Item</code></td><td>1 件ぶんのステップ項目です</td></tr><tr><td><code>Steps.Trigger</code></td><td>ステップ選択ボタンです</td></tr><tr><td><code>Steps.Indicator</code></td><td>番号や完了状態を示す丸インジケーターです</td></tr><tr><td><code>Steps.Separator</code></td><td>項目間の接続線です</td></tr><tr><td><code>Steps.Content</code></td><td>現在ステップに対応する本文です</td></tr><tr><td><code>Steps.CompletedContent</code></td><td>完了時に表示する本文です</td></tr><tr><td><code>Steps.Title</code></td><td>ステップ名です</td></tr><tr><td><code>Steps.Description</code></td><td>補足説明です</td></tr><tr><td><code>Steps.PrevTrigger</code></td><td>前のステップへ戻るボタンです</td></tr><tr><td><code>Steps.NextTrigger</code></td><td>次のステップへ進むボタンです</td></tr></tbody></table>',11))])}}});export{I as __pageData,R as default};
