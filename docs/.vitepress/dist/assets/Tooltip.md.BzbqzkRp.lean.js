import{m as t}from"./chunks/theme.D5gNcpBr.js";import{y as e}from"./chunks/Table.A5W0Ssaz.js";import{C as s,o as u,c as h,ai as c,E as p,k as i,j as r,a}from"./chunks/framework.Bm_aoSIc.js";function m(n){t.mount(n,{view(){return t("div",{style:{display:"flex",gap:"16px",alignItems:"center",padding:"8px"}},t(e.Root,{placement:"top",showArrow:!0},t(e.Trigger,null,t("button",{class:"vp-button"},"Hover me")),t(e.Content,null,"上側に表示されるツールチップです。")),t(e.Root,{placement:"right",interactive:!0,showArrow:!0},t(e.Trigger,null,t("span",{style:{padding:"4px 8px",background:"#eee",borderRadius:"4px"}},"Info")),t(e.Content,null,"右側に表示されます。")))}})}function g(n){t.mount(n,{view(){return t(e.Root,{placement:"bottom",showArrow:!0,interactive:!0,openDelay:120,closeDelay:180},t(e.Trigger,null,t("span",{style:{display:"inline-flex",alignItems:"center",gap:"8px",padding:"8px 12px",borderRadius:"999px",background:"#eff6ff",color:"#1d4ed8",fontWeight:"600",cursor:"default"}},"Sensor T-12")),t(e.Content,null,t("div",{style:{display:"grid",gap:"6px",minWidth:"220px"}},t("div",{style:{fontWeight:"700"}},"Sensor T-12"),t("div",null,"最新温度: 812℃"),t("div",null,"更新周期: 1 sec"),t("div",{style:{color:"#94a3b8",fontSize:"0.85rem"}},"interactive=true のため内容上へポインタを移せます。"))))}})}function b(n){let d=!1;t.mount(n,{view(){return t("div",{style:{display:"grid",gap:"12px",alignItems:"start"}},t("button",{type:"button",class:"vp-button",onclick:()=>{d=!d,t.redraw()}},d?"固定表示を解除":"固定表示する"),t(e.Root,{open:d,onOpenChange:o=>{d=o.open,t.redraw()},placement:"bottom",showArrow:!0},t(e.Trigger,null,t("span",{style:{padding:"6px 10px",borderRadius:"8px",background:"#f1f5f9",cursor:"default"}},"Batch summary")),t(e.Content,null,t("div",{style:{display:"grid",gap:"4px"}},t("div",null,"Recipe: Stoneware A"),t("div",null,"Stage: Hold"),t("div",null,"Target: 850℃")))),t("div",{style:{color:"#475569",fontSize:"0.9rem"}},"open: ",d?"true":"false"))}})}const T=`/** @jsx m */\r
import m from "mithril";\r
import { Tooltip } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div style={{ display: "flex", gap: "16px", alignItems: "center", padding: "8px" }}>\r
          <Tooltip.Root placement="top" showArrow={true}>\r
            <Tooltip.Trigger>\r
              <button class="vp-button">Hover me</button>\r
            </Tooltip.Trigger>\r
            <Tooltip.Content>上側に表示されるツールチップです。</Tooltip.Content>\r
          </Tooltip.Root>\r
\r
          <Tooltip.Root placement="right" interactive={true} showArrow={true}>\r
            <Tooltip.Trigger>\r
              <span style={{ padding: "4px 8px", background: "#eee", borderRadius: "4px" }}>Info</span>\r
            </Tooltip.Trigger>\r
            <Tooltip.Content>右側に表示されます。</Tooltip.Content>\r
          </Tooltip.Root>\r
        </div>\r
      );\r
    },\r
  });\r
}\r
`,f=`/** @jsx m */\r
import m from "mithril";\r
import { Tooltip } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <Tooltip.Root placement="bottom" showArrow={true} interactive={true} openDelay={120} closeDelay={180}>\r
          <Tooltip.Trigger>\r
            <span\r
              style={{\r
                display: "inline-flex",\r
                alignItems: "center",\r
                gap: "8px",\r
                padding: "8px 12px",\r
                borderRadius: "999px",\r
                background: "#eff6ff",\r
                color: "#1d4ed8",\r
                fontWeight: "600",\r
                cursor: "default",\r
              }}\r
            >\r
              Sensor T-12\r
            </span>\r
          </Tooltip.Trigger>\r
          <Tooltip.Content>\r
            <div style={{ display: "grid", gap: "6px", minWidth: "220px" }}>\r
              <div style={{ fontWeight: "700" }}>Sensor T-12</div>\r
              <div>最新温度: 812℃</div>\r
              <div>更新周期: 1 sec</div>\r
              <div style={{ color: "#94a3b8", fontSize: "0.85rem" }}>interactive=true のため内容上へポインタを移せます。</div>\r
            </div>\r
          </Tooltip.Content>\r
        </Tooltip.Root>\r
      );\r
    },\r
  });\r
}`,v=`/** @jsx m */\r
import m from "mithril";\r
import { Tooltip } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  let open = false;\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div style={{ display: "grid", gap: "12px", alignItems: "start" }}>\r
          <button type="button" class="vp-button" onclick={() => { open = !open; m.redraw(); }}>\r
            {open ? "固定表示を解除" : "固定表示する"}\r
          </button>\r
\r
          <Tooltip.Root open={open} onOpenChange={(details) => { open = details.open; m.redraw(); }} placement="bottom" showArrow={true}>\r
            <Tooltip.Trigger>\r
              <span style={{ padding: "6px 10px", borderRadius: "8px", background: "#f1f5f9", cursor: "default" }}>\r
                Batch summary\r
              </span>\r
            </Tooltip.Trigger>\r
            <Tooltip.Content>\r
              <div style={{ display: "grid", gap: "4px" }}>\r
                <div>Recipe: Stoneware A</div>\r
                <div>Stage: Hold</div>\r
                <div>Target: 850℃</div>\r
              </div>\r
            </Tooltip.Content>\r
          </Tooltip.Root>\r
\r
          <div style={{ color: "#475569", fontSize: "0.9rem" }}>open: {open ? "true" : "false"}</div>\r
        </div>\r
      );\r
    },\r
  });\r
}`,q=JSON.parse('{"title":"Tooltip","description":"","frontmatter":{},"headers":[],"relativePath":"Tooltip.md","filePath":"Tooltip.md"}'),x={name:"Tooltip.md"},R=Object.assign(x,{setup(n){return(d,o)=>{const l=s("MithrilDemo");return u(),h("div",null,[o[0]||(o[0]=c("",7)),p(l,{setup:i(m),code:i(T)},null,8,["setup","code"]),o[1]||(o[1]=r("h3",{id:"interactive-コンテンツ",tabindex:"-1"},[a("interactive コンテンツ "),r("a",{class:"header-anchor",href:"#interactive-コンテンツ","aria-label":'Permalink to "interactive コンテンツ"'},"​")],-1)),o[2]||(o[2]=r("p",null,[r("code",null,"interactive"),a(" を有効にすると、ツールチップ本体へマウスを載せても閉じにくくなります。")],-1)),p(l,{setup:i(g),code:i(f)},null,8,["setup","code"]),o[3]||(o[3]=r("h3",{id:"制御モード",tabindex:"-1"},[a("制御モード "),r("a",{class:"header-anchor",href:"#制御モード","aria-label":'Permalink to "制御モード"'},"​")],-1)),o[4]||(o[4]=r("p",null,[r("code",null,"open"),a(" と "),r("code",null,"onOpenChange"),a(" を使うと、外部トグルやアプリ状態と同期できます。")],-1)),p(l,{setup:i(b),code:i(v)},null,8,["setup","code"]),o[5]||(o[5]=c("",13))])}}});export{q as __pageData,R as default};
