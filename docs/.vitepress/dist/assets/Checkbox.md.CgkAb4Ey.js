import{m as t}from"./chunks/theme.CIfTaYq1.js";import{d as e}from"./chunks/Table.B255pMpr.js";import{C as h,o as u,c as s,ai as a,E as l,k as c,j as i,a as b}from"./chunks/framework.Bm_aoSIc.js";function k(r){let o=!0;t.mount(r,{view(){return t("div",{class:"d-grid gap-2"},t(e.Root,{checked:o,onCheckedChange:({checked:d})=>{o=d,t.redraw()}},t(e.HiddenInput,null),t(e.Control,null,t(e.Indicator,null)),t(e.Label,null,"利用規約に同意する")),t("div",{class:"small text-muted"},`状態: ${String(o)}`))}})}function C(r){let o=["opcua","ws"];t.mount(r,{view(){return t("div",{class:"d-grid gap-2"},t(e.Group,{value:o,orientation:"horizontal",onValueChange:d=>{o=d.value,t.redraw()}},t(e.Root,{value:"opcua"},t(e.HiddenInput,null),t(e.Control,null,t(e.Indicator,null)),t(e.Label,null,"OPC UA")),t(e.Root,{value:"ws"},t(e.HiddenInput,null),t(e.Control,null,t(e.Indicator,null)),t(e.Label,null,"WebSocket")),t(e.Root,{value:"rest"},t(e.HiddenInput,null),t(e.Control,null,t(e.Indicator,null)),t(e.Label,null,"REST"))),t("div",{class:"small text-muted"},`選択値: ${o.join(", ")||"(なし)"}`))}})}const x=`/** @jsx m */\r
import m from "mithril";\r
import { Checkbox, type CheckedState } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  let checked: CheckedState = true;\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div class="d-grid gap-2">\r
          <Checkbox.Root\r
            checked={checked}\r
            onCheckedChange={({ checked: next }) => {\r
              checked = next;\r
              m.redraw();\r
            }}\r
          >\r
            <Checkbox.HiddenInput />\r
            <Checkbox.Control>\r
              <Checkbox.Indicator />\r
            </Checkbox.Control>\r
            <Checkbox.Label>利用規約に同意する</Checkbox.Label>\r
          </Checkbox.Root>\r
\r
          <div class="small text-muted">{\`状態: \${String(checked)}\`}</div>\r
        </div>\r
      );\r
    }\r
  });\r
}`,p=`/** @jsx m */\r
/** @jsxRuntime classic */\r
import m from "mithril";\r
import { Checkbox } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  let values = ["opcua", "ws"];\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div class="d-grid gap-2">\r
          <Checkbox.Group\r
            value={values}\r
            orientation="horizontal"\r
            onValueChange={(details: { value: string[] }) => {\r
              values = details.value;\r
              m.redraw();\r
            }}\r
          >\r
            <Checkbox.Root value="opcua">\r
              <Checkbox.HiddenInput />\r
              <Checkbox.Control>\r
                <Checkbox.Indicator />\r
              </Checkbox.Control>\r
              <Checkbox.Label>OPC UA</Checkbox.Label>\r
            </Checkbox.Root>\r
            <Checkbox.Root value="ws">\r
              <Checkbox.HiddenInput />\r
              <Checkbox.Control>\r
                <Checkbox.Indicator />\r
              </Checkbox.Control>\r
              <Checkbox.Label>WebSocket</Checkbox.Label>\r
            </Checkbox.Root>\r
            <Checkbox.Root value="rest">\r
              <Checkbox.HiddenInput />\r
              <Checkbox.Control>\r
                <Checkbox.Indicator />\r
              </Checkbox.Control>\r
              <Checkbox.Label>REST</Checkbox.Label>\r
            </Checkbox.Root>\r
          </Checkbox.Group>\r
\r
          <div class="small text-muted">{\`選択値: \${values.join(", ") || "(なし)"}\`}</div>\r
        </div>\r
      );\r
    }\r
  });\r
}`,f=JSON.parse('{"title":"Checkbox","description":"","frontmatter":{},"headers":[],"relativePath":"Checkbox.md","filePath":"Checkbox.md"}'),m={name:"Checkbox.md"},_=Object.assign(m,{setup(r){return(o,d)=>{const n=h("MithrilDemo");return u(),s("div",null,[d[0]||(d[0]=a('<h1 id="checkbox" tabindex="-1">Checkbox <a class="header-anchor" href="#checkbox" aria-label="Permalink to &quot;Checkbox&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>Checkbox</code> は compound component 版のチェックボックスです。<code>Checkbox.Root</code> 単体での利用に加えて、<code>Checkbox.Group</code> で複数選択をまとめて管理できます。</p><h2 id="usage-使用例" tabindex="-1">Usage 使用例 <a class="header-anchor" href="#usage-使用例" aria-label="Permalink to &quot;Usage 使用例&quot;">​</a></h2><h3 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h3>',5)),l(n,{setup:c(k),code:c(x)},null,8,["setup","code"]),d[1]||(d[1]=i("h3",{id:"グループ管理",tabindex:"-1"},[b("グループ管理 "),i("a",{class:"header-anchor",href:"#グループ管理","aria-label":'Permalink to "グループ管理"'},"​")],-1)),l(n,{setup:c(C),code:c(p)},null,8,["setup","code"]),d[2]||(d[2]=a('<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="checkbox-root-props" tabindex="-1">Checkbox.Root Props <a class="header-anchor" href="#checkbox-root-props" aria-label="Permalink to &quot;Checkbox.Root Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>checked</code></td><td><code>boolean | &quot;indeterminate&quot;</code></td><td>—</td><td>制御モード時のチェック状態です</td></tr><tr><td><code>defaultChecked</code></td><td><code>boolean | &quot;indeterminate&quot;</code></td><td><code>false</code></td><td>非制御モード時の初期状態です</td></tr><tr><td><code>onCheckedChange</code></td><td><code>(details) =&gt; void</code></td><td>—</td><td>状態変更時に呼ばれます</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>無効化します</td></tr><tr><td><code>invalid</code></td><td><code>boolean</code></td><td><code>false</code></td><td>エラー状態の見た目にします</td></tr><tr><td><code>readOnly</code></td><td><code>boolean</code></td><td><code>false</code></td><td>読み取り専用にします</td></tr><tr><td><code>value</code></td><td><code>string</code></td><td><code>&quot;on&quot;</code></td><td>フォーム送信用の値です</td></tr><tr><td><code>name</code></td><td><code>string</code></td><td>—</td><td>フォーム送信用の name 属性です</td></tr><tr><td><code>size</code></td><td><code>&quot;xs&quot; | &quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;</code></td><td><code>&quot;md&quot;</code></td><td>サイズを指定します</td></tr><tr><td><code>variant</code></td><td><code>&quot;solid&quot; | &quot;outline&quot; | &quot;subtle&quot;</code></td><td><code>&quot;solid&quot;</code></td><td>見た目のバリアントです</td></tr><tr><td><code>colorPalette</code></td><td><code>string</code></td><td>—</td><td>カラー CSS 変数へ反映する色です</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>ルート要素の追加クラスです</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt;</code></td><td>—</td><td>ルート要素のインラインスタイルです</td></tr></tbody></table><h3 id="checkbox-group-props" tabindex="-1">Checkbox.Group Props <a class="header-anchor" href="#checkbox-group-props" aria-label="Permalink to &quot;Checkbox.Group Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>value</code></td><td><code>string[]</code></td><td>—</td><td>制御モード時の選択値配列です</td></tr><tr><td><code>defaultValue</code></td><td><code>string[]</code></td><td><code>[]</code></td><td>非制御モード時の初期選択です</td></tr><tr><td><code>onValueChange</code></td><td><code>(details) =&gt; void</code></td><td>—</td><td>選択配列変更時に呼ばれます</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>子要素をまとめて無効化します</td></tr><tr><td><code>name</code></td><td><code>string</code></td><td>—</td><td>各項目へ引き継ぐ name 属性です</td></tr><tr><td><code>orientation</code></td><td><code>&quot;horizontal&quot; | &quot;vertical&quot;</code></td><td><code>&quot;vertical&quot;</code></td><td>配置方向です</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>追加クラスです</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt;</code></td><td>—</td><td>インラインスタイルです</td></tr></tbody></table><h3 id="subcomponents" tabindex="-1">Subcomponents <a class="header-anchor" href="#subcomponents" aria-label="Permalink to &quot;Subcomponents&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Component</th><th>Description</th></tr></thead><tbody><tr><td><code>Checkbox.Root</code></td><td>状態を管理するルートです</td></tr><tr><td><code>Checkbox.HiddenInput</code></td><td>フォーム連携用の hidden / checkbox input です</td></tr><tr><td><code>Checkbox.Control</code></td><td>チェック枠です</td></tr><tr><td><code>Checkbox.Indicator</code></td><td>チェックマークまたは indeterminate 記号です</td></tr><tr><td><code>Checkbox.Label</code></td><td>ラベル表示です</td></tr><tr><td><code>Checkbox.Group</code></td><td>複数 Checkbox を配列値で管理します</td></tr></tbody></table>',7))])}}});export{f as __pageData,_ as default};
