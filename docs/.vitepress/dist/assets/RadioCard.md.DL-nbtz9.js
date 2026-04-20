import{m as t}from"./chunks/theme.4JftMPzn.js";import{R as d}from"./chunks/Table.BtqtxzWS.js";import{C as m,o as u,c as s,ai as i,E as l,k as r,j as c,a as C}from"./chunks/framework.Bm_aoSIc.js";function h(o){let a="manual";t.mount(o,{view(){return t("div",{class:"d-grid gap-2",style:{maxWidth:"420px"}},t(d.Root,{value:a,onValueChange:e=>{a=e,t.redraw()}},t(d.Item,{value:"manual"},t(d.ItemControl,null,t(d.ItemIndicator,null)),t(d.ItemText,null,"手動運転")),t(d.Item,{value:"auto"},t(d.ItemControl,null,t(d.ItemIndicator,null)),t(d.ItemText,null,"自動運転")),t(d.Item,{value:"maintenance"},t(d.ItemControl,null,t(d.ItemIndicator,null)),t(d.ItemText,null,"保守モード"))),t("div",{class:"small text-muted"},`選択値: ${a}`))}})}function I(o){let a="line-a";t.mount(o,{view(){return t("div",{class:"d-grid gap-2"},t(d.Root,{value:a,orientation:"horizontal",onValueChange:e=>{a=e,t.redraw()}},t(d.Item,{value:"line-a"},t(d.ItemControl,null,t(d.ItemIndicator,null)),t(d.ItemText,null,"ライン A")),t(d.Item,{value:"line-b"},t(d.ItemControl,null,t(d.ItemIndicator,null)),t(d.ItemText,null,"ライン B"))),t("div",{class:"small text-muted"},`選択値: ${a}`))}})}const R=`/** @jsx m */\r
/** @jsxRuntime classic */\r
import m from "mithril";\r
import { RadioCard } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  let value = "manual";\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div class="d-grid gap-2" style={{ maxWidth: "420px" }}>\r
          <RadioCard.Root\r
            value={value}\r
            onValueChange={(nextValue: string) => {\r
              value = nextValue;\r
              m.redraw();\r
            }}\r
          >\r
            <RadioCard.Item value="manual">\r
              <RadioCard.ItemControl>\r
                <RadioCard.ItemIndicator />\r
              </RadioCard.ItemControl>\r
              <RadioCard.ItemText>手動運転</RadioCard.ItemText>\r
            </RadioCard.Item>\r
            <RadioCard.Item value="auto">\r
              <RadioCard.ItemControl>\r
                <RadioCard.ItemIndicator />\r
              </RadioCard.ItemControl>\r
              <RadioCard.ItemText>自動運転</RadioCard.ItemText>\r
            </RadioCard.Item>\r
            <RadioCard.Item value="maintenance">\r
              <RadioCard.ItemControl>\r
                <RadioCard.ItemIndicator />\r
              </RadioCard.ItemControl>\r
              <RadioCard.ItemText>保守モード</RadioCard.ItemText>\r
            </RadioCard.Item>\r
          </RadioCard.Root>\r
\r
          <div class="small text-muted">{\`選択値: \${value}\`}</div>\r
        </div>\r
      );\r
    }\r
  });\r
}`,p=`/** @jsx m */\r
import m from "mithril";\r
import { RadioCard } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  let value = "line-a";\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div class="d-grid gap-2">\r
          <RadioCard.Root\r
            value={value}\r
            orientation="horizontal"\r
            onValueChange={(nextValue: string) => {\r
              value = nextValue;\r
              m.redraw();\r
            }}\r
          >\r
            <RadioCard.Item value="line-a">\r
              <RadioCard.ItemControl>\r
                <RadioCard.ItemIndicator />\r
              </RadioCard.ItemControl>\r
              <RadioCard.ItemText>ライン A</RadioCard.ItemText>\r
            </RadioCard.Item>\r
            <RadioCard.Item value="line-b">\r
              <RadioCard.ItemControl>\r
                <RadioCard.ItemIndicator />\r
              </RadioCard.ItemControl>\r
              <RadioCard.ItemText>ライン B</RadioCard.ItemText>\r
            </RadioCard.Item>\r
          </RadioCard.Root>\r
\r
          <div class="small text-muted">{\`選択値: \${value}\`}</div>\r
        </div>\r
      );\r
    }\r
  });\r
}`,f=JSON.parse('{"title":"RadioCard","description":"","frontmatter":{},"headers":[],"relativePath":"RadioCard.md","filePath":"RadioCard.md"}'),v={name:"RadioCard.md"},T=Object.assign(v,{setup(o){return(a,e)=>{const n=m("MithrilDemo");return u(),s("div",null,[e[0]||(e[0]=i('<h1 id="radiocard" tabindex="-1">RadioCard <a class="header-anchor" href="#radiocard" aria-label="Permalink to &quot;RadioCard&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>RadioCard</code> はカード単位で単一選択を行う compound component です。モード選択やプラン比較のように、選択肢ごとに説明を持たせたい場面に向いています。</p><h2 id="usage-使用例" tabindex="-1">Usage 使用例 <a class="header-anchor" href="#usage-使用例" aria-label="Permalink to &quot;Usage 使用例&quot;">​</a></h2><h3 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h3>',5)),l(n,{setup:r(h),code:r(R)},null,8,["setup","code"]),e[1]||(e[1]=c("h3",{id:"横並び",tabindex:"-1"},[C("横並び "),c("a",{class:"header-anchor",href:"#横並び","aria-label":'Permalink to "横並び"'},"​")],-1)),l(n,{setup:r(I),code:r(p)},null,8,["setup","code"]),e[2]||(e[2]=i('<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="radiocard-root-props" tabindex="-1">RadioCard.Root Props <a class="header-anchor" href="#radiocard-root-props" aria-label="Permalink to &quot;RadioCard.Root Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>variant</code></td><td><code>&quot;surface&quot; | &quot;subtle&quot; | &quot;outline&quot; | &quot;solid&quot;</code></td><td><code>&quot;outline&quot;</code></td><td>カードの見た目です</td></tr><tr><td><code>size</code></td><td><code>&quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;</code></td><td><code>&quot;md&quot;</code></td><td>カードサイズです</td></tr><tr><td><code>value</code></td><td><code>string</code></td><td>—</td><td>現在の選択値です</td></tr><tr><td><code>onValueChange</code></td><td><code>(value: string) =&gt; void</code></td><td>—</td><td>値変更時に呼ばれます</td></tr><tr><td><code>name</code></td><td><code>string</code></td><td>—</td><td>ラジオ入力の name 属性です</td></tr><tr><td><code>orientation</code></td><td><code>&quot;horizontal&quot; | &quot;vertical&quot;</code></td><td><code>&quot;vertical&quot;</code></td><td>配置方向です</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>追加クラスです</td></tr></tbody></table><h3 id="radiocard-item-props" tabindex="-1">RadioCard.Item Props <a class="header-anchor" href="#radiocard-item-props" aria-label="Permalink to &quot;RadioCard.Item Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>value</code></td><td><code>string</code></td><td>—</td><td>項目の識別値です</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>無効化します</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>追加クラスです</td></tr></tbody></table><h3 id="subcomponents" tabindex="-1">Subcomponents <a class="header-anchor" href="#subcomponents" aria-label="Permalink to &quot;Subcomponents&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Component</th><th>Description</th></tr></thead><tbody><tr><td><code>RadioCard.Label</code></td><td>グループ見出しです</td></tr><tr><td><code>RadioCard.Item</code></td><td>1 件の選択カードです</td></tr><tr><td><code>RadioCard.ItemControl</code></td><td>左右レイアウトの主要領域です</td></tr><tr><td><code>RadioCard.ItemContent</code></td><td>本文ラッパーです</td></tr><tr><td><code>RadioCard.ItemText</code></td><td>項目名です</td></tr><tr><td><code>RadioCard.ItemDescription</code></td><td>補足文です</td></tr><tr><td><code>RadioCard.ItemIndicator</code></td><td>選択状態の丸表示です</td></tr><tr><td><code>RadioCard.ItemAddon</code></td><td>追加表示領域です</td></tr></tbody></table>',7))])}}});export{f as __pageData,T as default};
