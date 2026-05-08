import{m as t}from"./chunks/theme.C32Rvu8V.js";import{t as e}from"./chunks/Table.MsshMnDN.js";import{C as u,o as b,c as p,a4 as c,E as l,k as n,j as r,a as i}from"./chunks/framework.DuWTyC0X.js";function g(a){t.mount(a,{view(){return t(e.Root,{defaultValue:"overview",variant:"line",size:"md"},t(e.List,null,t(e.Trigger,{value:"overview"},"概要"),t(e.Trigger,{value:"recipe"},"レシピ"),t(e.Trigger,{value:"alarms"},"アラーム")),t(e.Content,{value:"overview"},t("div",{style:{display:"grid",gap:"10px"}},t("div",{style:{padding:"14px",borderRadius:"12px",background:"#eff6ff"}},"現在温度 812℃ / 目標温度 850℃"),t("div",{style:{padding:"14px",borderRadius:"12px",background:"#f8fafc"}},"ホールド開始まで 18 分"))),t(e.Content,{value:"recipe"},t("div",{style:{display:"grid",gap:"8px"}},t("div",null,"Stoneware A"),t("div",{style:{color:"#475569",fontSize:"0.9rem"}},"Ramp 2.0℃/min, Hold 45 min"))),t(e.Content,{value:"alarms"},t("div",{style:{padding:"14px",borderRadius:"12px",background:"#fff7ed",color:"#9a3412"}},"現在アクティブなアラームはありません。")))}})}function v(a){let o="trend";t.mount(a,{view(){return t("div",{style:{display:"grid",gap:"12px"}},t("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"}},t("button",{type:"button",class:"vp-button",onclick:()=>{o="trend",t.redraw()}},"Trend"),t("button",{type:"button",class:"vp-button",onclick:()=>{o="events",t.redraw()}},"Events"),t("button",{type:"button",class:"vp-button",onclick:()=>{o="notes",t.redraw()}},"Notes")),t(e.Root,{value:o,onValueChange:d=>{o=d.value,t.redraw()},activationMode:"manual",variant:"enclosed"},t(e.List,null,t(e.Trigger,{value:"trend"},"Trend"),t(e.Trigger,{value:"events"},"Events"),t(e.Trigger,{value:"notes"},"Notes")),t(e.Content,{value:"trend"},t("div",{style:{padding:"14px",borderRadius:"12px",background:"#eff6ff"}},"温度トレンドをここに表示します。")),t(e.Content,{value:"events"},t("div",{style:{padding:"14px",borderRadius:"12px",background:"#ecfeff"}},"イベントログ 12 件を表示中です。")),t(e.Content,{value:"notes"},t("div",{style:{padding:"14px",borderRadius:"12px",background:"#f5f3ff"}},"作業メモと引き継ぎ事項を確認できます。"))),t("div",{style:{color:"#475569",fontSize:"0.9rem"}},"現在のタブ: ",o))}})}function T(a){t.mount(a,{view(){return t(e.Root,{defaultValue:"power",orientation:"vertical",variant:"outline",size:"sm"},t(e.List,null,t(e.Trigger,{value:"power"},"電力"),t(e.Trigger,{value:"gas"},"ガス流量"),t(e.Trigger,{value:"air"},"送風")),t(e.Content,{value:"power"},t("div",{style:{padding:"14px",borderRadius:"12px",background:"#f8fafc"}},"消費電力 24.8kW、負荷率 71%")),t(e.Content,{value:"gas"},t("div",{style:{padding:"14px",borderRadius:"12px",background:"#f8fafc"}},"バーナー流量 4.2 Nm³/h")),t(e.Content,{value:"air"},t("div",{style:{padding:"14px",borderRadius:"12px",background:"#f8fafc"}},"ブロワー出力 62%、ダンパー開度 48%")))}})}const h=`/** @jsx m */\r
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
}`,R=JSON.parse('{"title":"Tabs","description":"","frontmatter":{},"headers":[],"relativePath":"Tabs.md","filePath":"Tabs.md","lastUpdated":1777529825000}'),x={name:"Tabs.md"},C=Object.assign(x,{setup(a){return(o,d)=>{const s=u("MithrilDemo");return b(),p("div",null,[d[0]||(d[0]=c("",6)),l(s,{setup:n(g),code:n(h)},null,8,["setup","code"]),d[1]||(d[1]=r("h3",{id:"制御モード",tabindex:"-1"},[i("制御モード "),r("a",{class:"header-anchor",href:"#制御モード","aria-label":'Permalink to "制御モード"'},"​")],-1)),d[2]||(d[2]=r("p",null,[r("code",null,"value"),i(" と "),r("code",null,"onValueChange"),i(" を使うと、外部ボタンや URL 状態と同期したタブ制御ができます。")],-1)),l(s,{setup:n(v),code:n(f)},null,8,["setup","code"]),d[3]||(d[3]=r("h3",{id:"縦配置",tabindex:"-1"},[i("縦配置 "),r("a",{class:"header-anchor",href:"#縦配置","aria-label":'Permalink to "縦配置"'},"​")],-1)),d[4]||(d[4]=r("p",null,[r("code",null,'orientation="vertical"'),i(" を使うと、設定画面のサイドナビ風レイアウトにできます。")],-1)),l(s,{setup:n(T),code:n(m)},null,8,["setup","code"]),d[5]||(d[5]=c("",15))])}}});export{R as __pageData,C as default};
