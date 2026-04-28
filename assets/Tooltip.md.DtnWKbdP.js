import{m as t}from"./chunks/theme.BHMR1ScI.js";import{u as o}from"./chunks/Table.DpkFVNUa.js";import{C as s,o as u,c as h,a4 as c,E as p,k as i,j as r,a}from"./chunks/framework.DuWTyC0X.js";function m(n){t.mount(n,{view(){return t("div",{style:{display:"flex",gap:"16px",alignItems:"center",padding:"8px"}},t(o.Root,{placement:"top",showArrow:!0},t(o.Trigger,null,t("button",{class:"vp-button"},"Hover me")),t(o.Content,null,"上側に表示されるツールチップです。")),t(o.Root,{placement:"right",interactive:!0,showArrow:!0},t(o.Trigger,null,t("span",{style:{padding:"4px 8px",background:"#eee",borderRadius:"4px"}},"Info")),t(o.Content,null,"右側に表示されます。")))}})}function g(n){t.mount(n,{view(){return t(o.Root,{placement:"bottom",showArrow:!0,interactive:!0,openDelay:120,closeDelay:180},t(o.Trigger,null,t("span",{style:{display:"inline-flex",alignItems:"center",gap:"8px",padding:"8px 12px",borderRadius:"999px",background:"#eff6ff",color:"#1d4ed8",fontWeight:"600",cursor:"default"}},"Sensor T-12")),t(o.Content,null,t("div",{style:{display:"grid",gap:"6px",minWidth:"220px"}},t("div",{style:{fontWeight:"700"}},"Sensor T-12"),t("div",null,"最新温度: 812℃"),t("div",null,"更新周期: 1 sec"),t("div",{style:{color:"#94a3b8",fontSize:"0.85rem"}},"interactive=true のため内容上へポインタを移せます。"))))}})}function b(n){let d=!1;t.mount(n,{view(){return t("div",{style:{display:"grid",gap:"12px",alignItems:"start"}},t("button",{type:"button",class:"vp-button",onclick:()=>{d=!d,t.redraw()}},d?"固定表示を解除":"固定表示する"),t(o.Root,{open:d,onOpenChange:e=>{d=e.open,t.redraw()},placement:"bottom",showArrow:!0},t(o.Trigger,null,t("span",{style:{padding:"6px 10px",borderRadius:"8px",background:"#f1f5f9",cursor:"default"}},"Batch summary")),t(o.Content,null,t("div",{style:{display:"grid",gap:"4px"}},t("div",null,"Recipe: Stoneware A"),t("div",null,"Stage: Hold"),t("div",null,"Target: 850℃")))),t("div",{style:{color:"#475569",fontSize:"0.9rem"}},"open: ",d?"true":"false"))}})}const T=`/** @jsx m */\r
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
}`,q=JSON.parse('{"title":"Tooltip","description":"","frontmatter":{},"headers":[],"relativePath":"Tooltip.md","filePath":"Tooltip.md","lastUpdated":1776836643000}'),x={name:"Tooltip.md"},R=Object.assign(x,{setup(n){return(d,e)=>{const l=s("MithrilDemo");return u(),h("div",null,[e[0]||(e[0]=c('<h1 id="tooltip" tabindex="-1">Tooltip <a class="header-anchor" href="#tooltip" aria-label="Permalink to &quot;Tooltip&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>Tooltip</code> はホバーまたはフォーカス時に補足情報を浮かせて表示するコンポーネントです。<code>placement</code> による表示方向、<code>openDelay</code> / <code>closeDelay</code> による遅延調整、<code>interactive</code> によるコンテンツ内ホバー保持に対応しており、ラベルだけでは説明しきれない UI の補助表示に向いています。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>旧ツールチップ（<code>TooltipClassic</code>）はレガシー扱いです。このページでは current API を案内します。</p></div><h2 id="usage-使用例" tabindex="-1">Usage 使用例 <a class="header-anchor" href="#usage-使用例" aria-label="Permalink to &quot;Usage 使用例&quot;">​</a></h2><h3 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h3><p>ボタンやラベルに短い補足情報を付ける基本パターンです。</p>',7)),p(l,{setup:i(m),code:i(T)},null,8,["setup","code"]),e[1]||(e[1]=r("h3",{id:"interactive-コンテンツ",tabindex:"-1"},[a("interactive コンテンツ "),r("a",{class:"header-anchor",href:"#interactive-コンテンツ","aria-label":'Permalink to "interactive コンテンツ"'},"​")],-1)),e[2]||(e[2]=r("p",null,[r("code",null,"interactive"),a(" を有効にすると、ツールチップ本体へマウスを載せても閉じにくくなります。")],-1)),p(l,{setup:i(g),code:i(f)},null,8,["setup","code"]),e[3]||(e[3]=r("h3",{id:"制御モード",tabindex:"-1"},[a("制御モード "),r("a",{class:"header-anchor",href:"#制御モード","aria-label":'Permalink to "制御モード"'},"​")],-1)),e[4]||(e[4]=r("p",null,[r("code",null,"open"),a(" と "),r("code",null,"onOpenChange"),a(" を使うと、外部トグルやアプリ状態と同期できます。")],-1)),p(l,{setup:i(b),code:i(v)},null,8,["setup","code"]),e[5]||(e[5]=c('<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="tooltip-root-props" tabindex="-1">Tooltip.Root Props <a class="header-anchor" href="#tooltip-root-props" aria-label="Permalink to &quot;Tooltip.Root Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>open</code></td><td><code>boolean</code></td><td>—</td><td>制御モード時の開閉状態です</td></tr><tr><td><code>defaultOpen</code></td><td><code>boolean</code></td><td><code>false</code></td><td>非制御モード時の初期状態です</td></tr><tr><td><code>onOpenChange</code></td><td><code>(details: { open: boolean }) =&gt; void</code></td><td>—</td><td>開閉状態変更時に呼ばれます</td></tr><tr><td><code>openDelay</code></td><td><code>number</code></td><td><code>400</code></td><td>表示までの遅延ミリ秒です</td></tr><tr><td><code>closeDelay</code></td><td><code>number</code></td><td><code>150</code></td><td>非表示までの遅延ミリ秒です</td></tr><tr><td><code>placement</code></td><td><code>&quot;top&quot; | &quot;bottom&quot; | &quot;left&quot; | &quot;right&quot;</code></td><td><code>&quot;top&quot;</code></td><td>表示位置です</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>ツールチップを無効化します</td></tr><tr><td><code>interactive</code></td><td><code>boolean</code></td><td><code>false</code></td><td>コンテンツ上のホバー中は閉じにくくします</td></tr><tr><td><code>showArrow</code></td><td><code>boolean</code></td><td><code>false</code></td><td>既定の矢印を表示します</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>追加クラスです</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt;</code></td><td>—</td><td>ルートのインラインスタイルです</td></tr></tbody></table><h3 id="tooltip-trigger-props" tabindex="-1">Tooltip.Trigger Props <a class="header-anchor" href="#tooltip-trigger-props" aria-label="Permalink to &quot;Tooltip.Trigger Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>トリガー要素に追加するクラスです</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt;</code></td><td>—</td><td>トリガー要素のインラインスタイルです</td></tr></tbody></table><h3 id="tooltip-content-props" tabindex="-1">Tooltip.Content Props <a class="header-anchor" href="#tooltip-content-props" aria-label="Permalink to &quot;Tooltip.Content Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>コンテンツに追加するクラスです</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt;</code></td><td>—</td><td>コンテンツのインラインスタイルです</td></tr></tbody></table><h3 id="tooltip-arrow-props" tabindex="-1">Tooltip.Arrow Props <a class="header-anchor" href="#tooltip-arrow-props" aria-label="Permalink to &quot;Tooltip.Arrow Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>互換用の追加クラスです</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt;</code></td><td>—</td><td>互換用のインラインスタイルです</td></tr></tbody></table><h3 id="subcomponents" tabindex="-1">Subcomponents <a class="header-anchor" href="#subcomponents" aria-label="Permalink to &quot;Subcomponents&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Component</th><th>Description</th></tr></thead><tbody><tr><td><code>Tooltip.Root</code></td><td>開閉状態と遅延を管理するルートです</td></tr><tr><td><code>Tooltip.Trigger</code></td><td>ホバー / フォーカス起点になる要素です</td></tr><tr><td><code>Tooltip.Content</code></td><td>表示される本文です</td></tr><tr><td><code>Tooltip.Arrow</code></td><td>API 互換用のマーカーです</td></tr></tbody></table><h2 id="補足" tabindex="-1">補足 <a class="header-anchor" href="#補足" aria-label="Permalink to &quot;補足&quot;">​</a></h2><p>現行実装では、矢印の表示は <code>showArrow</code> prop で制御されます。<code>Tooltip.Arrow</code> は export されていますが、通常は明示的に children へ配置する必要はありません。</p>',13))])}}});export{q as __pageData,R as default};
