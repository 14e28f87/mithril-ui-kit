import{m as o}from"./chunks/theme.DVqxVbXL.js";import{c as h}from"./chunks/Table.BP7XEx9l.js";import{C as w,o as C,c as S,a4 as _,E as x,k as c,j as u,a as y}from"./chunks/framework.DuWTyC0X.js";class k{constructor(){this.nameId=`radio-${Math.random().toString(36).slice(2,9)}`}isEqual(r,e){return r===e?!0:(typeof r=="number"||typeof r=="string")&&(typeof e=="number"||typeof e=="string")?String(r)===String(e):!1}view(r){const{value:e,oninput:n,options:p,disabled:a,orientation:b="vertical",class:P,name:R}=r.attrs,f=R??this.nameId,v=h(P,{"d-flex flex-column":b==="vertical","d-flex flex-row align-items-center gap-3":b==="horizontal"}),l=t=>{a||n==null||n(t)};if(p&&p.length)return o("div",{class:v,role:"radiogroup",tabindex:0},p.map(t=>o("label",{class:"form-check",style:{cursor:t.disabled?"not-allowed":"pointer"}},o("input",{class:h("form-check-input",{"is-invalid":!!t.error}),type:"radio",name:f,checked:this.isEqual(t.value,e),disabled:t.disabled||a,onclick:()=>{!t.disabled&&!a&&l(t.value)}}),o("span",{class:h("form-check-label",{"text-muted":t.disabled}),style:{marginLeft:"0.5rem"}},t.label))));const s=r.children,T=Array.isArray(s)?s:s?[s]:[];return o("div",{class:v,role:"radiogroup",tabindex:0},T.map((t,g)=>{if(t&&typeof t.tag=="function"){const m=(t.attrs&&t.attrs.value)??g,G=!!(t.attrs&&t.attrs.disabled)||!!a;return o(t.tag,{...t.attrs||{},value:m,checked:this.isEqual(m,e),disabled:G,oninput:d=>{d&&d.target&&d.target.value!==void 0?l(d.target.value):d!=null&&typeof d!="object"?l(d):l(m)}},t.children)}const q=g;return o("label",{class:"form-check",style:{cursor:a?"not-allowed":"pointer"}},o("input",{class:"form-check-input",type:"radio",name:f,checked:this.isEqual(q,e),disabled:a,onclick:()=>{a||l(q)}}),o("span",{class:"form-check-label",style:{marginLeft:"0.5rem"}},t))}))}}function A(i){let r="opt1";o.mount(i,{view(){return o("div",null,o(k,{value:r,orientation:"horizontal",options:[{label:"オプション1",value:"opt1"},{label:"オプション2",value:"opt2"},{label:"オプション3",value:"opt3",disabled:!0}],oninput:e=>{r=e,o.redraw()}}),o("div",{class:"mt-2 text-muted small"},`選択中: ${r}`))}})}function E(i){let r=1;o.mount(i,{view(){return o("div",null,o(k,{value:r,oninput:e=>{r=Number(e),o.redraw()}},"低","中","高"),o("div",{class:"mt-2 text-muted small"},`選択中インデックス: ${r}`))}})}const N=`/** @jsx m */\r
import m from "mithril";\r
import { RadioGroup } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  let selected = "opt1";\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div>\r
          <RadioGroup\r
            value={selected}\r
            orientation="horizontal"\r
            options={[\r
              { label: "オプション1", value: "opt1" },\r
              { label: "オプション2", value: "opt2" },\r
              { label: "オプション3", value: "opt3", disabled: true }\r
            ]}\r
            oninput={(v: string) => {\r
              selected = v;\r
              m.redraw();\r
            }}\r
          />\r
          <div class="mt-2 text-muted small">{\`選択中: \${selected}\`}</div>\r
        </div>\r
      );\r
    }\r
  });\r
}\r
`,V=`/** @jsx m */\r
import m from "mithril";\r
import { RadioGroup } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  let selected = 1;\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div>\r
          <RadioGroup\r
            value={selected}\r
            oninput={(v: number) => {\r
              selected = Number(v);\r
              m.redraw();\r
            }}\r
          >\r
            {"低"}\r
            {"中"}\r
            {"高"}\r
          </RadioGroup>\r
          <div class="mt-2 text-muted small">{\`選択中インデックス: \${selected}\`}</div>\r
        </div>\r
      );\r
    }\r
  });\r
}\r
`,M=JSON.parse('{"title":"RadioGroup","description":"","frontmatter":{},"headers":[],"relativePath":"RadioGroup.md","filePath":"RadioGroup.md","lastUpdated":1781657984000}'),D={name:"RadioGroup.md"},z=Object.assign(D,{setup(i){return(r,e)=>{const n=w("MithrilDemo");return C(),S("div",null,[e[0]||(e[0]=_('<h1 id="radiogroup" tabindex="-1">RadioGroup <a class="header-anchor" href="#radiogroup" aria-label="Permalink to &quot;RadioGroup&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>RadioGroup</code> は、単一選択のラジオ入力をまとめて管理するコンポーネントです。 <code>options</code> 配列での一括レンダリングと、子要素を並べる構成の両方をサポートします。 <code>orientation</code> による配置切替、グループ単位の <code>disabled</code> 制御、文字列と数値をまたいだ柔軟な値比較に対応しています。</p><h2 id="usage-使用例" tabindex="-1">Usage 使用例 <a class="header-anchor" href="#usage-使用例" aria-label="Permalink to &quot;Usage 使用例&quot;">​</a></h2><h3 id="options-配列で選択肢を構成" tabindex="-1">options 配列で選択肢を構成 <a class="header-anchor" href="#options-配列で選択肢を構成" aria-label="Permalink to &quot;options 配列で選択肢を構成&quot;">​</a></h3>',5)),x(n,{setup:c(A),code:c(N)},null,8,["setup","code"]),e[1]||(e[1]=u("h3",{id:"子要素を使ってシンプルに構成",tabindex:"-1"},[y("子要素を使ってシンプルに構成 "),u("a",{class:"header-anchor",href:"#子要素を使ってシンプルに構成","aria-label":'Permalink to "子要素を使ってシンプルに構成"'},"​")],-1)),e[2]||(e[2]=u("p",null,[u("code",null,"options"),y(" を使わず、子要素から選択肢を構成する例です。")],-1)),x(n,{setup:c(E),code:c(V)},null,8,["setup","code"]),e[3]||(e[3]=_('<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="radiogroup-props" tabindex="-1">RadioGroup Props <a class="header-anchor" href="#radiogroup-props" aria-label="Permalink to &quot;RadioGroup Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>value</code></td><td><code>any</code></td><td>—</td><td>現在の選択値です（制御モード）</td></tr><tr><td><code>oninput</code></td><td><code>(e: Event | any) =&gt; void</code></td><td>—</td><td>選択値が変わったときに呼ばれます</td></tr><tr><td><code>options</code></td><td><code>{ label: m.Children; value: any; disabled?: boolean; error?: boolean }[]</code></td><td>—</td><td>選択肢配列です。指定時は内部で radio input を一括描画します</td></tr><tr><td><code>name</code></td><td><code>string</code></td><td>自動生成</td><td>各 input の <code>name</code> 属性です</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>グループ全体を無効化します</td></tr><tr><td><code>orientation</code></td><td><code>&quot;horizontal&quot; | &quot;vertical&quot;</code></td><td><code>&quot;vertical&quot;</code></td><td>レイアウト方向を指定します</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>追加 CSS クラスです</td></tr></tbody></table><h3 id="options-要素型" tabindex="-1">options 要素型 <a class="header-anchor" href="#options-要素型" aria-label="Permalink to &quot;options 要素型&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Field</th><th>Type</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code>label</code></td><td><code>m.Children</code></td><td>yes</td><td>表示ラベルです</td></tr><tr><td><code>value</code></td><td><code>any</code></td><td>yes</td><td>選択値です</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td>no</td><td>個別に無効化します</td></tr><tr><td><code>error</code></td><td><code>boolean</code></td><td>no</td><td>エラー表示（<code>is-invalid</code>）を有効にします</td></tr></tbody></table><h2 id="補足" tabindex="-1">補足 <a class="header-anchor" href="#補足" aria-label="Permalink to &quot;補足&quot;">​</a></h2><ul><li>値比較は厳密一致に加えて、文字列と数値の相互比較（例: <code>1</code> と <code>&quot;1&quot;</code>）にも対応します。</li><li><code>options</code> 未指定時は子要素から選択肢を生成します。プレーンテキスト子要素の場合、内部値は 0 始まりのインデックスです。</li><li>ルート要素には <code>role=&quot;radiogroup&quot;</code> が付与されます。</li></ul>',7))])}}});export{M as __pageData,z as default};
