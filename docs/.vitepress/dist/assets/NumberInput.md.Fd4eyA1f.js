import{m as t}from"./chunks/theme.CIfTaYq1.js";import{I as e}from"./chunks/Table.B255pMpr.js";import{C as m,o as s,c as p,ai as c,E as l,k as o,j as n,a as i}from"./chunks/framework.Bm_aoSIc.js";function b(d){t.mount(d,{view(){return t(e.Root,{defaultValue:10,min:0,max:100},t(e.Input,null),t(e.Control,null))}})}function h(d){t.mount(d,{view(){return t(e.Root,{defaultValue:50,min:0,max:100,step:5},t(e.DecrementTrigger,null),t(e.Input,null),t(e.IncrementTrigger,null))}})}function I(d){let a=42;t.mount(d,{view(){return t("div",{style:{display:"flex",flexDirection:"column",gap:"8px"}},t(e.Root,{value:a,min:0,max:100,onValueChange:r=>{a=r.value,t.redraw()}},t(e.Input,null),t(e.Control,null)),t("div",{style:{fontSize:"12px",color:"#666"}},`value: ${a}`))}})}function f(d){t.mount(d,{view(){return t(e.Root,{defaultValue:3.14,min:0,max:10,step:.01,precision:2},t(e.Label,null,"精度 (precision=2)"),t(e.Input,null),t(e.Control,null),t(e.ValueText,null))}})}function g(d){t.mount(d,{view(){return t("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},t("div",null,t("div",{style:{fontSize:"0.8rem",color:"#888",marginBottom:"4px"}},'variant="filled" size="lg"'),t(e.Root,{defaultValue:10,variant:"filled",size:"lg"},t(e.Input,null),t(e.Control,null))),t("div",null,t("div",{style:{fontSize:"0.8rem",color:"#888",marginBottom:"4px"}},'variant="flushed" size="sm"'),t(e.Root,{defaultValue:10,variant:"flushed",size:"sm"},t(e.Input,null),t(e.Control,null))),t("div",null,t("div",{style:{fontSize:"0.8rem",color:"#888",marginBottom:"4px"}},'variant="outline" size="xs"'),t(e.Root,{defaultValue:10,variant:"outline",size:"xs"},t(e.Input,null),t(e.Control,null))))}})}const v=`/** @jsx m */\r
import m from "mithril";\r
import { NumberInput } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <NumberInput.Root defaultValue={10} min={0} max={100}>\r
          <NumberInput.Input />\r
          <NumberInput.Control />\r
        </NumberInput.Root>\r
      );\r
    },\r
  });\r
}\r
`,x=`/** @jsx m */\r
import m from "mithril";\r
import { NumberInput } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <NumberInput.Root defaultValue={50} min={0} max={100} step={5}>\r
          <NumberInput.DecrementTrigger />\r
          <NumberInput.Input />\r
          <NumberInput.IncrementTrigger />\r
        </NumberInput.Root>\r
      );\r
    },\r
  });\r
}\r
`,N=`/** @jsx m */\r
import m from "mithril";\r
import { NumberInput } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  let value: number | null = 42;\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>\r
          <NumberInput.Root\r
            value={value}\r
            min={0}\r
            max={100}\r
            onValueChange={(d) => { value = d.value; m.redraw(); }}\r
          >\r
            <NumberInput.Input />\r
            <NumberInput.Control />\r
          </NumberInput.Root>\r
          <div style={{ fontSize: "12px", color: "#666" }}>{\`value: \${value}\`}</div>\r
        </div>\r
      );\r
    },\r
  });\r
}\r
`,q=`/** @jsx m */\r
import m from "mithril";\r
import { NumberInput } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <NumberInput.Root defaultValue={3.14} min={0} max={10} step={0.01} precision={2}>\r
          <NumberInput.Label>精度 (precision=2)</NumberInput.Label>\r
          <NumberInput.Input />\r
          <NumberInput.Control />\r
          <NumberInput.ValueText />\r
        </NumberInput.Root>\r
      );\r
    },\r
  });\r
}\r
`,T=`/** @jsx m */\r
import m from "mithril";\r
import { NumberInput } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>\r
          <div>\r
            <div style={{ fontSize: "0.8rem", color: "#888", marginBottom: "4px" }}>variant="filled" size="lg"</div>\r
            <NumberInput.Root defaultValue={10} variant="filled" size="lg">\r
              <NumberInput.Input />\r
              <NumberInput.Control />\r
            </NumberInput.Root>\r
          </div>\r
          <div>\r
            <div style={{ fontSize: "0.8rem", color: "#888", marginBottom: "4px" }}>variant="flushed" size="sm"</div>\r
            <NumberInput.Root defaultValue={10} variant="flushed" size="sm">\r
              <NumberInput.Input />\r
              <NumberInput.Control />\r
            </NumberInput.Root>\r
          </div>\r
          <div>\r
            <div style={{ fontSize: "0.8rem", color: "#888", marginBottom: "4px" }}>variant="outline" size="xs"</div>\r
            <NumberInput.Root defaultValue={10} variant="outline" size="xs">\r
              <NumberInput.Input />\r
              <NumberInput.Control />\r
            </NumberInput.Root>\r
          </div>\r
        </div>\r
      );\r
    },\r
  });\r
}\r
`,P=JSON.parse('{"title":"NumberInput","description":"","frontmatter":{},"headers":[],"relativePath":"NumberInput.md","filePath":"NumberInput.md"}'),y={name:"NumberInput.md"},_=Object.assign(y,{setup(d){return(a,r)=>{const u=m("MithrilDemo");return s(),p("div",null,[r[0]||(r[0]=c('<h1 id="numberinput" tabindex="-1">NumberInput <a class="header-anchor" href="#numberinput" aria-label="Permalink to &quot;NumberInput&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>NumberInput</code> は source 上 <code>InputNumber</code> として実装されている compound component 型の数値入力コンポーネントです。増減ボタン、キーボード操作、マウスホイール操作、<code>precision</code> による小数制御に対応し、<code>Form</code> / <code>FormItem</code> と統合して使用できます。</p><p>サブコンポーネント: <code>Root</code> / <code>Input</code> / <code>Control</code> / <code>IncrementTrigger</code> / <code>DecrementTrigger</code> / <code>Label</code> / <code>ValueText</code></p><h2 id="usage-使用例" tabindex="-1">Usage 使用例 <a class="header-anchor" href="#usage-使用例" aria-label="Permalink to &quot;Usage 使用例&quot;">​</a></h2><h3 id="基本-control-input" tabindex="-1">基本（Control + Input） <a class="header-anchor" href="#基本-control-input" aria-label="Permalink to &quot;基本（Control + Input）&quot;">​</a></h3>',6)),l(u,{setup:o(b),code:o(v)},null,8,["setup","code"]),r[1]||(r[1]=n("h3",{id:"単独の増減ボタン",tabindex:"-1"},[i("単独の増減ボタン "),n("a",{class:"header-anchor",href:"#単独の増減ボタン","aria-label":'Permalink to "単独の増減ボタン"'},"​")],-1)),l(u,{setup:o(h),code:o(x)},null,8,["setup","code"]),r[2]||(r[2]=n("h3",{id:"制御モード-controlled",tabindex:"-1"},[i("制御モード（controlled） "),n("a",{class:"header-anchor",href:"#制御モード-controlled","aria-label":'Permalink to "制御モード（controlled）"'},"​")],-1)),l(u,{setup:o(I),code:o(N)},null,8,["setup","code"]),r[3]||(r[3]=n("h3",{id:"小数点精度-label-valuetext",tabindex:"-1"},[i("小数点精度 + Label + ValueText "),n("a",{class:"header-anchor",href:"#小数点精度-label-valuetext","aria-label":'Permalink to "小数点精度 + Label + ValueText"'},"​")],-1)),l(u,{setup:o(f),code:o(q)},null,8,["setup","code"]),r[4]||(r[4]=n("h3",{id:"variant-size-バリエーション",tabindex:"-1"},[i("variant / size バリエーション "),n("a",{class:"header-anchor",href:"#variant-size-バリエーション","aria-label":'Permalink to "variant / size バリエーション"'},"​")],-1)),l(u,{setup:o(g),code:o(T)},null,8,["setup","code"]),r[5]||(r[5]=c('<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="numberinput-root-props" tabindex="-1">NumberInput.Root Props <a class="header-anchor" href="#numberinput-root-props" aria-label="Permalink to &quot;NumberInput.Root Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>min</code></td><td><code>number</code></td><td>—</td><td>最小値です</td></tr><tr><td><code>max</code></td><td><code>number</code></td><td>—</td><td>最大値です</td></tr><tr><td><code>step</code></td><td><code>number</code></td><td><code>1</code></td><td>増減時の刻み幅です</td></tr><tr><td><code>value</code></td><td><code>number | null</code></td><td>—</td><td>制御モード時の現在値です</td></tr><tr><td><code>defaultValue</code></td><td><code>number | null</code></td><td><code>null</code></td><td>非制御モード時の初期値です</td></tr><tr><td><code>onValueChange</code></td><td><code>(details: NumberInputValueChangeDetails) =&gt; void</code></td><td>—</td><td>値変更時に呼ばれます</td></tr><tr><td><code>oninput</code></td><td><code>(value: number | null) =&gt; void</code></td><td>—</td><td>Form 互換用の簡易入力コールバックです</td></tr><tr><td><code>onblur</code></td><td><code>() =&gt; void</code></td><td>—</td><td>blur 時に呼ばれます</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>無効化します</td></tr><tr><td><code>readOnly</code></td><td><code>boolean</code></td><td><code>false</code></td><td>読み取り専用にします</td></tr><tr><td><code>name</code></td><td><code>string</code></td><td>—</td><td>input 要素の <code>name</code> 属性です</td></tr><tr><td><code>size</code></td><td><code>&quot;xs&quot; | &quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;</code></td><td><code>&quot;md&quot;</code></td><td>入力欄サイズです</td></tr><tr><td><code>variant</code></td><td><code>&quot;outline&quot; | &quot;filled&quot; | &quot;flushed&quot;</code></td><td><code>&quot;outline&quot;</code></td><td>見た目のバリエーションです</td></tr><tr><td><code>precision</code></td><td><code>number</code></td><td>—</td><td>小数点以下の桁数です</td></tr><tr><td><code>clampValueOnBlur</code></td><td><code>boolean</code></td><td><code>true</code></td><td>blur 時に min / max へ収めます</td></tr><tr><td><code>allowMouseWheel</code></td><td><code>boolean</code></td><td><code>false</code></td><td>フォーカス中にマウスホイールで増減できるようにします</td></tr><tr><td><code>width</code></td><td><code>string</code></td><td>—</td><td>コンポーネント全体の幅です</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>追加クラスです</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt;</code></td><td>—</td><td>ルートのインラインスタイルです</td></tr></tbody></table><h3 id="numberinputvaluechangedetails" tabindex="-1">NumberInputValueChangeDetails <a class="header-anchor" href="#numberinputvaluechangedetails" aria-label="Permalink to &quot;NumberInputValueChangeDetails&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>value</code></td><td><code>number | null</code></td><td>正規化後の数値です</td></tr><tr><td><code>valueAsString</code></td><td><code>string</code></td><td>表示用に整形された文字列です</td></tr></tbody></table><h3 id="numberinput-input-props" tabindex="-1">NumberInput.Input Props <a class="header-anchor" href="#numberinput-input-props" aria-label="Permalink to &quot;NumberInput.Input Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>placeholder</code></td><td><code>string</code></td><td>—</td><td>プレースホルダーです</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>入力欄に追加するクラスです</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt;</code></td><td>—</td><td>入力欄のインラインスタイルです</td></tr></tbody></table><h3 id="補助-subcomponents-の-props" tabindex="-1">補助 subcomponents の Props <a class="header-anchor" href="#補助-subcomponents-の-props" aria-label="Permalink to &quot;補助 subcomponents の Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Component</th><th>Props</th></tr></thead><tbody><tr><td><code>NumberInput.Control</code></td><td><code>class?: string</code>, <code>style?: Record&lt;string, string&gt;</code></td></tr><tr><td><code>NumberInput.IncrementTrigger</code></td><td><code>class?: string</code>, <code>style?: Record&lt;string, string&gt;</code></td></tr><tr><td><code>NumberInput.DecrementTrigger</code></td><td><code>class?: string</code>, <code>style?: Record&lt;string, string&gt;</code></td></tr><tr><td><code>NumberInput.Label</code></td><td><code>class?: string</code>, <code>style?: Record&lt;string, string&gt;</code></td></tr><tr><td><code>NumberInput.ValueText</code></td><td><code>class?: string</code>, <code>style?: Record&lt;string, string&gt;</code></td></tr></tbody></table><h3 id="subcomponents" tabindex="-1">Subcomponents <a class="header-anchor" href="#subcomponents" aria-label="Permalink to &quot;Subcomponents&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Component</th><th>Description</th></tr></thead><tbody><tr><td><code>NumberInput.Root</code></td><td>値管理、バリデーション、キーボード操作を管理するルートです</td></tr><tr><td><code>NumberInput.Input</code></td><td>テキスト入力フィールドです</td></tr><tr><td><code>NumberInput.Control</code></td><td>増減ボタンを縦にまとめるラッパーです</td></tr><tr><td><code>NumberInput.IncrementTrigger</code></td><td>値を増やすボタンです</td></tr><tr><td><code>NumberInput.DecrementTrigger</code></td><td>値を減らすボタンです</td></tr><tr><td><code>NumberInput.Label</code></td><td>ラベル表示です</td></tr><tr><td><code>NumberInput.ValueText</code></td><td>現在値の表示専用テキストです</td></tr></tbody></table>',11))])}}});export{P as __pageData,_ as default};
