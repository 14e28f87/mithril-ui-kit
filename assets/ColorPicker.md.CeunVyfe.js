import{m as t}from"./chunks/theme.BHMR1ScI.js";import{n as e}from"./chunks/Table.DpkFVNUa.js";import{C as u,o as h,c as C,a4 as a,E as c,k as n,j as i,a as P}from"./chunks/framework.DuWTyC0X.js";function m(d){let o="#3b82f6";t.mount(d,{view(){return t("div",{class:"d-grid gap-2",style:{maxWidth:"360px"}},t(e.Root,{value:o,format:"hexa",onValueChange:({value:r})=>{o=r,t.redraw()}},t(e.Label,null,"テーマカラー"),t(e.Control,null,t(e.Input,null),t(e.Trigger,null,"開く")),t(e.Positioner,null,t(e.Content,null,t(e.Area,null),t(e.ChannelSlider,{channel:"hue"}),t(e.ChannelSlider,{channel:"alpha"})))),t("div",{class:"small text-muted"},`現在値: ${o}`))}})}const s=["#ef4444","#f59e0b","#10b981","#3b82f6","#8b5cf6"];function p(d){let o=s[3];t.mount(d,{view(){return t("div",{class:"d-grid gap-2",style:{maxWidth:"360px"}},t(e.Root,{value:o,onValueChange:({value:r})=>{o=r,t.redraw()}},t(e.Label,null,"プリセット色"),t(e.Control,null,t(e.Input,null),t(e.Trigger,null,"選択")),t(e.Positioner,null,t(e.Content,null,t(e.SwatchGroup,null,s.map(r=>t(e.SwatchTrigger,{key:r,value:r})))))),t("div",{class:"small text-muted"},`現在値: ${o}`))}})}const k=`/** @jsx m */\r
import m from "mithril";\r
import { ColorPicker } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  let value = "#3b82f6";\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div class="d-grid gap-2" style={{ maxWidth: "360px" }}>\r
          <ColorPicker.Root\r
            value={value}\r
            format="hexa"\r
            onValueChange={({ value: next }) => {\r
              value = next;\r
              m.redraw();\r
            }}\r
          >\r
            <ColorPicker.Label>テーマカラー</ColorPicker.Label>\r
            <ColorPicker.Control>\r
              <ColorPicker.Input />\r
              <ColorPicker.Trigger>開く</ColorPicker.Trigger>\r
            </ColorPicker.Control>\r
            <ColorPicker.Positioner>\r
              <ColorPicker.Content>\r
                <ColorPicker.Area />\r
                <ColorPicker.ChannelSlider channel="hue" />\r
                <ColorPicker.ChannelSlider channel="alpha" />\r
              </ColorPicker.Content>\r
            </ColorPicker.Positioner>\r
          </ColorPicker.Root>\r
\r
          <div class="small text-muted">{\`現在値: \${value}\`}</div>\r
        </div>\r
      );\r
    }\r
  });\r
}`,b=`/** @jsx m */\r
import m from "mithril";\r
import { ColorPicker } from "mithril-ui-kit";\r
\r
const swatches = ["#ef4444", "#f59e0b", "#10b981", "#3b82f6", "#8b5cf6"];\r
\r
export function setup(el: HTMLElement): void {\r
  let value = swatches[3];\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div class="d-grid gap-2" style={{ maxWidth: "360px" }}>\r
          <ColorPicker.Root\r
            value={value}\r
            onValueChange={({ value: next }) => {\r
              value = next;\r
              m.redraw();\r
            }}\r
          >\r
            <ColorPicker.Label>プリセット色</ColorPicker.Label>\r
            <ColorPicker.Control>\r
              <ColorPicker.Input />\r
              <ColorPicker.Trigger>選択</ColorPicker.Trigger>\r
            </ColorPicker.Control>\r
            <ColorPicker.Positioner>\r
              <ColorPicker.Content>\r
                <ColorPicker.SwatchGroup>\r
                  {swatches.map((swatch) => (\r
                    <ColorPicker.SwatchTrigger key={swatch} value={swatch} />\r
                  ))}\r
                </ColorPicker.SwatchGroup>\r
              </ColorPicker.Content>\r
            </ColorPicker.Positioner>\r
          </ColorPicker.Root>\r
\r
          <div class="small text-muted">{\`現在値: \${value}\`}</div>\r
        </div>\r
      );\r
    }\r
  });\r
}`,x=JSON.parse('{"title":"ColorPicker","description":"","frontmatter":{},"headers":[],"relativePath":"ColorPicker.md","filePath":"ColorPicker.md","lastUpdated":1776646114000}'),g={name:"ColorPicker.md"},_=Object.assign(g,{setup(d){return(o,r)=>{const l=u("MithrilDemo");return h(),C("div",null,[r[0]||(r[0]=a('<h1 id="colorpicker" tabindex="-1">ColorPicker <a class="header-anchor" href="#colorpicker" aria-label="Permalink to &quot;ColorPicker&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>ColorPicker</code> は compound component 版のカラーピッカーです。入力欄、トリガー、色相・透明度スライダー、スウォッチ群を組み合わせて UI を構成できます。</p><h2 id="usage-使用例" tabindex="-1">Usage 使用例 <a class="header-anchor" href="#usage-使用例" aria-label="Permalink to &quot;Usage 使用例&quot;">​</a></h2><h3 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h3>',5)),c(l,{setup:n(m),code:n(k)},null,8,["setup","code"]),r[1]||(r[1]=i("h3",{id:"プリセット色",tabindex:"-1"},[P("プリセット色 "),i("a",{class:"header-anchor",href:"#プリセット色","aria-label":'Permalink to "プリセット色"'},"​")],-1)),c(l,{setup:n(p),code:n(b)},null,8,["setup","code"]),r[2]||(r[2]=a('<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="root-props" tabindex="-1">Root Props <a class="header-anchor" href="#root-props" aria-label="Permalink to &quot;Root Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>value</code></td><td><code>string</code></td><td>—</td><td>制御モード時のカラー文字列です</td></tr><tr><td><code>defaultValue</code></td><td><code>string</code></td><td><code>&quot;#ff0000&quot;</code></td><td>非制御モード時の初期値です</td></tr><tr><td><code>onValueChange</code></td><td><code>(details) =&gt; void</code></td><td>—</td><td>値変更中に呼ばれます</td></tr><tr><td><code>onValueChangeEnd</code></td><td><code>(details) =&gt; void</code></td><td>—</td><td>ドラッグや入力確定後に呼ばれます</td></tr><tr><td><code>format</code></td><td><code>&quot;hex&quot; | &quot;hexa&quot; | &quot;rgb&quot; | &quot;rgba&quot; | &quot;hsl&quot; | &quot;hsla&quot;</code></td><td><code>&quot;hex&quot;</code></td><td>入出力フォーマットです</td></tr><tr><td><code>size</code></td><td><code>&quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;</code></td><td><code>&quot;md&quot;</code></td><td>サイズを指定します</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>無効化します</td></tr><tr><td><code>readOnly</code></td><td><code>boolean</code></td><td><code>false</code></td><td>読み取り専用にします</td></tr><tr><td><code>name</code></td><td><code>string</code></td><td>—</td><td>フォーム送信用 name 属性です</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>追加クラスです</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt;</code></td><td>—</td><td>インラインスタイルです</td></tr></tbody></table><h3 id="subcomponents" tabindex="-1">Subcomponents <a class="header-anchor" href="#subcomponents" aria-label="Permalink to &quot;Subcomponents&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Component</th><th>Description</th></tr></thead><tbody><tr><td><code>ColorPicker.Root</code></td><td>状態を管理するルートです</td></tr><tr><td><code>ColorPicker.Label</code></td><td>ラベル表示です</td></tr><tr><td><code>ColorPicker.Control</code></td><td>入力欄とトリガーのコンテナです</td></tr><tr><td><code>ColorPicker.Input</code></td><td>カラー文字列の入力欄です</td></tr><tr><td><code>ColorPicker.Trigger</code></td><td>パネル開閉トリガーです</td></tr><tr><td><code>ColorPicker.Positioner</code></td><td>パネル配置要素です</td></tr><tr><td><code>ColorPicker.Content</code></td><td>パネル本体です</td></tr><tr><td><code>ColorPicker.Area</code></td><td>彩度・明度を変更する 2D エリアです</td></tr><tr><td><code>ColorPicker.ChannelSlider</code></td><td><code>hue</code> / <code>alpha</code> の横スライダーです</td></tr><tr><td><code>ColorPicker.SwatchGroup</code></td><td>スウォッチ一覧のコンテナです</td></tr><tr><td><code>ColorPicker.SwatchTrigger</code></td><td>選択用スウォッチボタンです</td></tr><tr><td><code>ColorPicker.Swatch</code></td><td>単体スウォッチ表示です</td></tr><tr><td><code>ColorPicker.EyeDropper</code></td><td>EyeDropper API 連携ボタンです</td></tr></tbody></table>',5))])}}});export{x as __pageData,_ as default};
