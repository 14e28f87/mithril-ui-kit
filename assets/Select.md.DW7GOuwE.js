import{m as e}from"./chunks/theme.BHMR1ScI.js";import{r as t}from"./chunks/Table.DpkFVNUa.js";import{C as S,o as g,c as b,a4 as m,E as s,k as a,j as d,a as c}from"./chunks/framework.DuWTyC0X.js";const p=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"mithril",label:"Mithril"}];function f(n){let o=["react"];e.mount(n,{view(){return e("div",null,e(t.Root,{items:p,value:o,onValueChange:r=>{o=r.value},placeholder:"フレームワークを選択"},e(t.Label,null,"フレームワーク"),e(t.Control,null,e(t.Trigger,null,e(t.ValueText,{placeholder:"フレームワークを選択"}),e(t.IndicatorGroup,null,e(t.ClearTrigger,null),e(t.Indicator,null)))),e(t.Positioner,null,e(t.Content,null,p.map(r=>e(t.Item,{key:r.value,item:r.value},r.label))))),e("div",{class:"mt-2",style:"font-size:0.85rem;color:#6c757d"},"選択値: ",JSON.stringify(o)))}})}const I=`/** @jsx m */\r
import m from "mithril";\r
import { Select } from "mithril-ui-kit";\r
import type { SelectItem } from "mithril-ui-kit";\r
\r
const items: SelectItem[] = [\r
  { value: "react", label: "React" },\r
  { value: "vue", label: "Vue" },\r
  { value: "angular", label: "Angular" },\r
  { value: "svelte", label: "Svelte" },\r
  { value: "mithril", label: "Mithril" },\r
];\r
\r
export function setup(el: HTMLElement): void {\r
  let value: string[] = ["react"];\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div>\r
          <Select.Root\r
            items={items}\r
            value={value}\r
            onValueChange={(d) => { value = d.value; }}\r
            placeholder="フレームワークを選択"\r
          >\r
            <Select.Label>フレームワーク</Select.Label>\r
            <Select.Control>\r
              <Select.Trigger>\r
                <Select.ValueText placeholder="フレームワークを選択" />\r
                <Select.IndicatorGroup>\r
                  <Select.ClearTrigger />\r
                  <Select.Indicator />\r
                </Select.IndicatorGroup>\r
              </Select.Trigger>\r
            </Select.Control>\r
            <Select.Positioner>\r
              <Select.Content>\r
                {items.map(item => (\r
                  <Select.Item key={item.value} item={item.value}>\r
                    {item.label}\r
                  </Select.Item>\r
                ))}\r
              </Select.Content>\r
            </Select.Positioner>\r
          </Select.Root>\r
          <div class="mt-2" style="font-size:0.85rem;color:#6c757d">\r
            選択値: {JSON.stringify(value)}\r
          </div>\r
        </div>\r
      );\r
    },\r
  });\r
}\r
`,h=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"mithril",label:"Mithril"}];function C(n){let o=["react","vue"];e.mount(n,{view(){return e("div",null,e(t.Root,{items:h,value:o,onValueChange:r=>{o=r.value},multiple:!0,placeholder:"複数選択してください"},e(t.Label,null,"フレームワーク（複数選択）"),e(t.Control,null,e(t.Trigger,null,e(t.ValueText,{placeholder:"複数選択してください"}),e(t.IndicatorGroup,null,e(t.ClearTrigger,null),e(t.Indicator,null)))),e(t.Positioner,null,e(t.Content,null,h.map(r=>e(t.Item,{key:r.value,item:r.value},r.label))))),e("div",{class:"mt-2",style:"font-size:0.85rem;color:#6c757d"},"選択値: ",JSON.stringify(o)))}})}const q=`/** @jsx m */\r
import m from "mithril";\r
import { Select } from "mithril-ui-kit";\r
import type { SelectItem } from "mithril-ui-kit";\r
\r
const items: SelectItem[] = [\r
  { value: "react", label: "React" },\r
  { value: "vue", label: "Vue" },\r
  { value: "angular", label: "Angular" },\r
  { value: "svelte", label: "Svelte" },\r
  { value: "mithril", label: "Mithril" },\r
];\r
\r
export function setup(el: HTMLElement): void {\r
  let value: string[] = ["react", "vue"];\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div>\r
          <Select.Root\r
            items={items}\r
            value={value}\r
            onValueChange={(d) => { value = d.value; }}\r
            multiple={true}\r
            placeholder="複数選択してください"\r
          >\r
            <Select.Label>フレームワーク（複数選択）</Select.Label>\r
            <Select.Control>\r
              <Select.Trigger>\r
                <Select.ValueText placeholder="複数選択してください" />\r
                <Select.IndicatorGroup>\r
                  <Select.ClearTrigger />\r
                  <Select.Indicator />\r
                </Select.IndicatorGroup>\r
              </Select.Trigger>\r
            </Select.Control>\r
            <Select.Positioner>\r
              <Select.Content>\r
                {items.map(item => (\r
                  <Select.Item key={item.value} item={item.value}>\r
                    {item.label}\r
                  </Select.Item>\r
                ))}\r
              </Select.Content>\r
            </Select.Positioner>\r
          </Select.Root>\r
          <div class="mt-2" style="font-size:0.85rem;color:#6c757d">\r
            選択値: {JSON.stringify(value)}\r
          </div>\r
        </div>\r
      );\r
    },\r
  });\r
}\r
`,v=[{value:"react",label:"React",group:"Popular"},{value:"vue",label:"Vue",group:"Popular"},{value:"angular",label:"Angular",group:"Popular"},{value:"svelte",label:"Svelte",group:"Others"},{value:"mithril",label:"Mithril",group:"Others"},{value:"preact",label:"Preact",group:"Others"}];function P(n){let o=[];e.mount(n,{view(){const r=new Map;for(const l of v)if(l.group){const i=r.get(l.group)??[];i.push(l),r.set(l.group,i)}return e("div",null,e(t.Root,{items:v,value:o,onValueChange:l=>{o=l.value},placeholder:"グループから選択"},e(t.Label,null,"フレームワーク（グループ）"),e(t.Control,null,e(t.Trigger,null,e(t.ValueText,{placeholder:"グループから選択"}),e(t.IndicatorGroup,null,e(t.ClearTrigger,null),e(t.Indicator,null)))),e(t.Positioner,null,e(t.Content,null,Array.from(r.entries()).map(([l,i])=>e(t.ItemGroup,{key:l},e(t.ItemGroupLabel,null,l),i.map(u=>e(t.Item,{key:u.value,item:u.value},u.label))))))),e("div",{class:"mt-2",style:"font-size:0.85rem;color:#6c757d"},"選択値: ",JSON.stringify(o)))}})}const T=`/** @jsx m */\r
import m from "mithril";\r
import { Select } from "mithril-ui-kit";\r
import type { SelectItem } from "mithril-ui-kit";\r
\r
const items: SelectItem[] = [\r
  { value: "react", label: "React", group: "Popular" },\r
  { value: "vue", label: "Vue", group: "Popular" },\r
  { value: "angular", label: "Angular", group: "Popular" },\r
  { value: "svelte", label: "Svelte", group: "Others" },\r
  { value: "mithril", label: "Mithril", group: "Others" },\r
  { value: "preact", label: "Preact", group: "Others" },\r
];\r
\r
export function setup(el: HTMLElement): void {\r
  let value: string[] = [];\r
\r
  m.mount(el, {\r
    view() {\r
      const groups = new Map<string, SelectItem[]>();\r
      for (const item of items) {\r
        if (item.group) {\r
          const g = groups.get(item.group) ?? [];\r
          g.push(item);\r
          groups.set(item.group, g);\r
        }\r
      }\r
\r
      return (\r
        <div>\r
          <Select.Root\r
            items={items}\r
            value={value}\r
            onValueChange={(d) => { value = d.value; }}\r
            placeholder="グループから選択"\r
          >\r
            <Select.Label>フレームワーク（グループ）</Select.Label>\r
            <Select.Control>\r
              <Select.Trigger>\r
                <Select.ValueText placeholder="グループから選択" />\r
                <Select.IndicatorGroup>\r
                  <Select.ClearTrigger />\r
                  <Select.Indicator />\r
                </Select.IndicatorGroup>\r
              </Select.Trigger>\r
            </Select.Control>\r
            <Select.Positioner>\r
              <Select.Content>\r
                {Array.from(groups.entries()).map(([label, groupItems]) => (\r
                  <Select.ItemGroup key={label}>\r
                    <Select.ItemGroupLabel>{label}</Select.ItemGroupLabel>\r
                    {groupItems.map(item => (\r
                      <Select.Item key={item.value} item={item.value}>\r
                        {item.label}\r
                      </Select.Item>\r
                    ))}\r
                  </Select.ItemGroup>\r
                ))}\r
              </Select.Content>\r
            </Select.Positioner>\r
          </Select.Root>\r
          <div class="mt-2" style="font-size:0.85rem;color:#6c757d">\r
            選択値: {JSON.stringify(value)}\r
          </div>\r
        </div>\r
      );\r
    },\r
  });\r
}\r
`,_=JSON.parse('{"title":"Select","description":"","frontmatter":{},"headers":[],"relativePath":"Select.md","filePath":"Select.md","lastUpdated":1776836643000}'),y={name:"Select.md"},R=Object.assign(y,{setup(n){return(o,r)=>{const l=S("MithrilDemo");return g(),b("div",null,[r[0]||(r[0]=m('<h1 id="select" tabindex="-1">Select <a class="header-anchor" href="#select" aria-label="Permalink to &quot;Select&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p>セレクトです。<code>Select.Root</code>, <code>Select.Trigger</code>, <code>Select.Content</code>, <code>Select.Item</code> などのサブコンポーネントを組み合わせて柔軟にカスタマイズできます。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>従来の <code>&lt;select&gt;</code> ベースのセレクト（<code>SelectClassic</code>）はレガシー扱いです。このページでは current API を案内します。</p></div><h2 id="usage-使用例" tabindex="-1">Usage 使用例 <a class="header-anchor" href="#usage-使用例" aria-label="Permalink to &quot;Usage 使用例&quot;">​</a></h2><h3 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h3>',6)),s(l,{setup:a(f),code:a(I)},null,8,["setup","code"]),r[1]||(r[1]=d("h3",{id:"複数選択",tabindex:"-1"},[c("複数選択 "),d("a",{class:"header-anchor",href:"#複数選択","aria-label":'Permalink to "複数選択"'},"​")],-1)),r[2]||(r[2]=d("p",null,[d("code",null,"multiple"),c(" prop で複数選択モードに切り替えます。")],-1)),s(l,{setup:a(C),code:a(q)},null,8,["setup","code"]),r[3]||(r[3]=d("h3",{id:"グループ",tabindex:"-1"},[c("グループ "),d("a",{class:"header-anchor",href:"#グループ","aria-label":'Permalink to "グループ"'},"​")],-1)),r[4]||(r[4]=d("p",null,[d("code",null,"Select.ItemGroup"),c(" と "),d("code",null,"Select.ItemGroupLabel"),c(" を使って項目をグループ化できます。")],-1)),s(l,{setup:a(P),code:a(T)},null,8,["setup","code"]),r[5]||(r[5]=m('<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="select-root-props" tabindex="-1">Select.Root Props <a class="header-anchor" href="#select-root-props" aria-label="Permalink to &quot;Select.Root Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Prop</th><th>型</th><th>デフォルト</th><th>説明</th></tr></thead><tbody><tr><td><code>items</code></td><td><code>SelectItem[]</code></td><td><code>[]</code></td><td>選択肢の配列</td></tr><tr><td><code>value</code></td><td><code>string[]</code></td><td><code>[]</code></td><td>選択値の配列</td></tr><tr><td><code>onValueChange</code></td><td><code>(details: SelectValueChangeDetails) =&gt; void</code></td><td>—</td><td>値変更時のコールバック</td></tr><tr><td><code>variant</code></td><td><code>&quot;outline&quot; | &quot;subtle&quot; | &quot;ghost&quot;</code></td><td><code>&quot;outline&quot;</code></td><td>スタイルバリアント</td></tr><tr><td><code>size</code></td><td><code>&quot;xs&quot; | &quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;</code></td><td><code>&quot;md&quot;</code></td><td>サイズ</td></tr><tr><td><code>multiple</code></td><td><code>boolean</code></td><td><code>false</code></td><td>複数選択を有効にする</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>無効状態</td></tr><tr><td><code>readOnly</code></td><td><code>boolean</code></td><td><code>false</code></td><td>読み取り専用</td></tr><tr><td><code>invalid</code></td><td><code>boolean</code></td><td><code>false</code></td><td>エラー状態</td></tr><tr><td><code>deselectable</code></td><td><code>boolean</code></td><td><code>false</code></td><td>選択済み項目のクリックで解除可能にする</td></tr><tr><td><code>loopFocus</code></td><td><code>boolean</code></td><td><code>false</code></td><td>キーボードフォーカスをループさせる</td></tr><tr><td><code>positioning</code></td><td><code>&quot;top&quot; | &quot;bottom&quot;</code></td><td><code>&quot;bottom&quot;</code></td><td>ドロップダウンの表示位置</td></tr><tr><td><code>placeholder</code></td><td><code>string</code></td><td>—</td><td>プレースホルダーテキスト</td></tr></tbody></table><h3 id="selectitem-型" tabindex="-1">SelectItem 型 <a class="header-anchor" href="#selectitem-型" aria-label="Permalink to &quot;SelectItem 型&quot;">​</a></h3><table tabindex="0"><thead><tr><th>フィールド</th><th>型</th><th>説明</th></tr></thead><tbody><tr><td><code>value</code></td><td><code>string</code></td><td>一意な値</td></tr><tr><td><code>label</code></td><td><code>string</code></td><td>表示テキスト</td></tr><tr><td><code>disabled?</code></td><td><code>boolean</code></td><td>無効にする</td></tr><tr><td><code>group?</code></td><td><code>string</code></td><td>グループ名</td></tr></tbody></table><h3 id="selectvaluechangedetails-型" tabindex="-1">SelectValueChangeDetails 型 <a class="header-anchor" href="#selectvaluechangedetails-型" aria-label="Permalink to &quot;SelectValueChangeDetails 型&quot;">​</a></h3><table tabindex="0"><thead><tr><th>フィールド</th><th>型</th><th>説明</th></tr></thead><tbody><tr><td><code>value</code></td><td><code>string[]</code></td><td>選択された値の配列</td></tr><tr><td><code>items</code></td><td><code>SelectItem[]</code></td><td>選択されたアイテムの配列</td></tr></tbody></table><h3 id="サブコンポーネント一覧" tabindex="-1">サブコンポーネント一覧 <a class="header-anchor" href="#サブコンポーネント一覧" aria-label="Permalink to &quot;サブコンポーネント一覧&quot;">​</a></h3><table tabindex="0"><thead><tr><th>コンポーネント</th><th>説明</th></tr></thead><tbody><tr><td><code>Select.Root</code></td><td>ルートコンテナ。状態管理と items/value を保持</td></tr><tr><td><code>Select.HiddenSelect</code></td><td>フォーム送信用の hidden <code>&lt;select&gt;</code></td></tr><tr><td><code>Select.Label</code></td><td>ラベルテキスト</td></tr><tr><td><code>Select.Control</code></td><td>トリガーを包むコンテナ</td></tr><tr><td><code>Select.Trigger</code></td><td>クリックでドロップダウンを開閉するボタン</td></tr><tr><td><code>Select.ValueText</code></td><td>選択値の表示テキスト</td></tr><tr><td><code>Select.IndicatorGroup</code></td><td>インジケーター群のコンテナ</td></tr><tr><td><code>Select.Indicator</code></td><td>開閉矢印アイコン</td></tr><tr><td><code>Select.ClearTrigger</code></td><td>選択値をクリアするボタン</td></tr><tr><td><code>Select.Positioner</code></td><td>ドロップダウンの位置決めコンテナ</td></tr><tr><td><code>Select.Content</code></td><td>ドロップダウンの内容コンテナ</td></tr><tr><td><code>Select.Item</code></td><td>選択肢アイテム。<code>item</code> prop に value 文字列を指定</td></tr><tr><td><code>Select.ItemGroup</code></td><td>アイテムのグループコンテナ</td></tr><tr><td><code>Select.ItemGroupLabel</code></td><td>グループのラベル</td></tr></tbody></table>',9))])}}});export{_ as __pageData,R as default};
