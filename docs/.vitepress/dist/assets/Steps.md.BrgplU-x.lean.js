import{m as t}from"./chunks/theme.CIfTaYq1.js";import{q as e}from"./chunks/Table.B255pMpr.js";import{C as c,o as u,c as g,ai as a,E as l,k as i,j as o,a as p}from"./chunks/framework.Bm_aoSIc.js";function S(s){let d=0;t.mount(s,{view(){return t("div",{style:{display:"grid",gap:"14px"}},t(e.Root,{count:4,step:d,onStepChange:r=>{d=r.step,t.redraw()},variant:"solid",size:"md"},t(e.List,null,t(e.Item,{index:0},t(e.Trigger,null,t(e.Indicator,null),t(e.Title,null,"条件入力"),t(e.Description,null,"レシピと目標値")),t(e.Separator,null)),t(e.Item,{index:1},t(e.Trigger,null,t(e.Indicator,null),t(e.Title,null,"安全確認"),t(e.Description,null,"警報と機器状態")),t(e.Separator,null)),t(e.Item,{index:2},t(e.Trigger,null,t(e.Indicator,null),t(e.Title,null,"開始承認"),t(e.Description,null,"実行前レビュー")),t(e.Separator,null)),t(e.Item,{index:3},t(e.Trigger,null,t(e.Indicator,null),t(e.Title,null,"監視開始"),t(e.Description,null,"バッチ実行")))),t(e.Content,{index:0},t("div",{style:{padding:"14px",borderRadius:"12px",background:"#eff6ff"}},"レシピ、目標温度、昇温勾配を入力します。")),t(e.Content,{index:1},t("div",{style:{padding:"14px",borderRadius:"12px",background:"#fefce8"}},"非常停止、扉スイッチ、センサー異常を確認します。")),t(e.Content,{index:2},t("div",{style:{padding:"14px",borderRadius:"12px",background:"#f5f3ff"}},"承認者が条件を確認し、バッチ開始を許可します。")),t(e.Content,{index:3},t("div",{style:{padding:"14px",borderRadius:"12px",background:"#ecfeff"}},"実行を開始し、グラフと状態表示を監視します。")),t(e.CompletedContent,null,t("div",{style:{padding:"14px",borderRadius:"12px",background:"#dcfce7",color:"#166534"}},"セットアップ手順が完了しました。")),t(e.PrevTrigger,null,"戻る"),t(e.NextTrigger,null,"次へ")),t("div",{style:{color:"#475569",fontSize:"0.9rem"}},d>=4?"現在状態: 完了":`現在の step: ${d+1} / 4`))}})}function m(s){let d=1,r=!1;t.mount(s,{view(){return t("div",{style:{display:"grid",gap:"14px"}},t("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"}},[0,1,2].map(n=>t("button",{type:"button",class:"vp-button",onclick:()=>{d=n,r=!1,t.redraw()}},"Step ",n+1)),t("button",{type:"button",class:"vp-button",onclick:()=>{d=0,r=!1,t.redraw()}},"Reset")),t(e.Root,{count:3,step:d,linear:!1,variant:"subtle",onStepChange:n=>{d=n.step,r=n.step>=3,t.redraw()},onStepComplete:()=>{r=!0,t.redraw()}},t(e.List,null,t(e.Item,{index:0},t(e.Trigger,null,t(e.Indicator,null),t(e.Title,null,"原料")),t(e.Separator,null)),t(e.Item,{index:1},t(e.Trigger,null,t(e.Indicator,null),t(e.Title,null,"配合")),t(e.Separator,null)),t(e.Item,{index:2},t(e.Trigger,null,t(e.Indicator,null),t(e.Title,null,"確認")))),t(e.Content,{index:0},t("div",{style:{padding:"12px",background:"#eff6ff",borderRadius:"12px"}},"原料ロットを確認します。")),t(e.Content,{index:1},t("div",{style:{padding:"12px",background:"#fef3c7",borderRadius:"12px"}},"配合値と投入量をレビューします。")),t(e.Content,{index:2},t("div",{style:{padding:"12px",background:"#ede9fe",borderRadius:"12px"}},"最終確認後に開始できます。")),t(e.CompletedContent,null,t("div",{style:{padding:"12px",background:"#dcfce7",borderRadius:"12px"}},"手順を完了しました。")),t(e.PrevTrigger,null,"Prev"),t(e.NextTrigger,null,"Next")),t("div",{style:{color:"#475569",fontSize:"0.9rem"}},r?"外部状態: completed":`外部状態: step=${d}`))}})}function x(s){t.mount(s,{view(){return t(e.Root,{count:3,defaultStep:1,orientation:"vertical",variant:"subtle",size:"sm"},t(e.List,null,t(e.Item,{index:0},t(e.Trigger,null,t(e.Indicator,null),t(e.Title,null,"計測開始"),t(e.Description,null,"センサー接続確認")),t(e.Separator,null)),t(e.Item,{index:1},t(e.Trigger,null,t(e.Indicator,null),t(e.Title,null,"予熱"),t(e.Description,null,"目標温度まで昇温")),t(e.Separator,null)),t(e.Item,{index:2},t(e.Trigger,null,t(e.Indicator,null),t(e.Title,null,"保持"),t(e.Description,null,"均熱時間の管理")))),t(e.Content,{index:0},t("div",{style:{padding:"12px",borderRadius:"12px",background:"#f8fafc"}},"すべてのセンサー値が取得できる状態です。")),t(e.Content,{index:1},t("div",{style:{padding:"12px",borderRadius:"12px",background:"#f8fafc"}},"現在は予熱中で、2.0℃/min で昇温しています。")),t(e.Content,{index:2},t("div",{style:{padding:"12px",borderRadius:"12px",background:"#f8fafc"}},"保持工程では温度安定性を監視します。")))}})}const b=`/** @jsx m */\r
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
}`,I=JSON.parse('{"title":"Steps","description":"","frontmatter":{},"headers":[],"relativePath":"Steps.md","filePath":"Steps.md"}'),T={name:"Steps.md"},R=Object.assign(T,{setup(s){return(d,r)=>{const n=c("MithrilDemo");return u(),g("div",null,[r[0]||(r[0]=a("",7)),l(n,{setup:i(S),code:i(b)},null,8,["setup","code"]),r[1]||(r[1]=o("h3",{id:"制御モード",tabindex:"-1"},[p("制御モード "),o("a",{class:"header-anchor",href:"#制御モード","aria-label":'Permalink to "制御モード"'},"​")],-1)),r[2]||(r[2]=o("p",null,[o("code",null,"step"),p(" と "),o("code",null,"onStepChange"),p(" を使うと、外部状態と同期したステップ管理やリセット処理を実装できます。")],-1)),l(n,{setup:i(m),code:i(f)},null,8,["setup","code"]),r[3]||(r[3]=o("h3",{id:"縦配置",tabindex:"-1"},[p("縦配置 "),o("a",{class:"header-anchor",href:"#縦配置","aria-label":'Permalink to "縦配置"'},"​")],-1)),r[4]||(r[4]=o("p",null,[o("code",null,'orientation="vertical"'),p(" は、設定ウィザードや作業手順のサイド表示に向いています。")],-1)),l(n,{setup:i(x),code:i(h)},null,8,["setup","code"]),r[5]||(r[5]=a("",11))])}}});export{I as __pageData,R as default};
