import{m as t}from"./chunks/theme.D5gNcpBr.js";import{u as e}from"./chunks/Table.A5W0Ssaz.js";import{C as p,o as g,c as m,ai as i,E as c,k as l,j as o,a as u}from"./chunks/framework.Bm_aoSIc.js";function I(r){let n=["mithril","ui","docs"],d="";t.mount(r,{view(){return t("div",{class:"d-grid gap-2"},t(e.Root,{value:n,delimiter:/[;,]/,onValueChange:a=>{n=a.value,t.redraw()},onInputValueChange:a=>{d=a.inputValue,t.redraw()}},t(e.Label,null,"タグ"),t(e.Control,null,n.map((a,s)=>t(e.Item,{key:`${a}-${s}`,index:s,value:a},t(e.ItemPreview,null,t(e.ItemText,null),t(e.ItemDeleteTrigger,null)),t(e.ItemInput,null))),t(e.Input,{placeholder:"タグを入力"}),t(e.ClearTrigger,null))),t("div",{class:"small text-muted"},`現在タグ: ${n.join(", ")||"(なし)"}`),t("div",{class:"small text-muted"},`入力中: ${d||"(空)"}`))}})}function T(r){let n=["kiln","sensor","opcua"];t.mount(r,{view(){return t("div",{class:"d-grid gap-2"},t(e.Root,{value:n,editable:!0,blurBehavior:"add",max:6,validate:d=>d.value.trim().length>=2,onValueChange:d=>{n=d.value,t.redraw()}},t(e.Label,null,"編集可能タグ"),t(e.Control,null,n.map((d,a)=>t(e.Item,{key:`${d}-${a}`,index:a,value:d},t(e.ItemPreview,null,t(e.ItemText,null),t(e.ItemDeleteTrigger,null)),t(e.ItemInput,null))),t(e.Input,{placeholder:"2 文字以上で追加"}),t(e.ClearTrigger,null))),t("div",{class:"small text-muted"},"ダブルクリックで既存タグを編集できます。"),t("div",{class:"small text-muted"},`現在タグ: ${n.join(", ")||"(なし)"}`))}})}const h=`/** @jsx m */
import m from "mithril";
import { TagsInput, type TagsInputValueChangeDetails } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
  let tags = ["mithril", "ui", "docs"];
  let inputValue = "";

  m.mount(el, {
    view() {
      return (
        <div class="d-grid gap-2">
          <TagsInput.Root
            value={tags}
            delimiter={/[;,]/}
            onValueChange={(details: TagsInputValueChangeDetails) => {
              tags = details.value;
              m.redraw();
            }}
            onInputValueChange={(details) => {
              inputValue = details.inputValue;
              m.redraw();
            }}
          >
            <TagsInput.Label>タグ</TagsInput.Label>
            <TagsInput.Control>
              {tags.map((tag, index) => (
                <TagsInput.Item key={\`\${tag}-\${index}\`} index={index} value={tag}>
                  <TagsInput.ItemPreview>
                    <TagsInput.ItemText />
                    <TagsInput.ItemDeleteTrigger />
                  </TagsInput.ItemPreview>
                  <TagsInput.ItemInput />
                </TagsInput.Item>
              ))}
              <TagsInput.Input placeholder="タグを入力" />
              <TagsInput.ClearTrigger />
            </TagsInput.Control>
          </TagsInput.Root>

          <div class="small text-muted">
            {\`現在タグ: \${tags.join(", ") || "(なし)"}\`}
          </div>
          <div class="small text-muted">
            {\`入力中: \${inputValue || "(空)"}\`}
          </div>
        </div>
      );
    }
  });
}`,v=`/** @jsx m */\r
/** @jsxRuntime classic */\r
import m from "mithril";\r
import { TagsInput, type TagsInputValueChangeDetails } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  let tags = ["kiln", "sensor", "opcua"];\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div class="d-grid gap-2">\r
          <TagsInput.Root\r
            value={tags}\r
            editable\r
            blurBehavior="add"\r
            max={6}\r
            validate={(details: { value: string; inputValue: string }) => details.value.trim().length >= 2}\r
            onValueChange={(details: TagsInputValueChangeDetails) => {\r
              tags = details.value;\r
              m.redraw();\r
            }}\r
          >\r
            <TagsInput.Label>編集可能タグ</TagsInput.Label>\r
            <TagsInput.Control>\r
              {tags.map((tag, index) => (\r
                <TagsInput.Item key={\`\${tag}-\${index}\`} index={index} value={tag}>\r
                  <TagsInput.ItemPreview>\r
                    <TagsInput.ItemText />\r
                    <TagsInput.ItemDeleteTrigger />\r
                  </TagsInput.ItemPreview>\r
                  <TagsInput.ItemInput />\r
                </TagsInput.Item>\r
              ))}\r
              <TagsInput.Input placeholder="2 文字以上で追加" />\r
              <TagsInput.ClearTrigger />\r
            </TagsInput.Control>\r
          </TagsInput.Root>\r
\r
          <div class="small text-muted">ダブルクリックで既存タグを編集できます。</div>\r
          <div class="small text-muted">{\`現在タグ: \${tags.join(", ") || "(なし)"}\`}</div>\r
        </div>\r
      );\r
    }\r
  });\r
}`,q=JSON.parse('{"title":"TagsInput","description":"","frontmatter":{},"headers":[],"relativePath":"TagsInput.md","filePath":"TagsInput.md"}'),b={name:"TagsInput.md"},P=Object.assign(b,{setup(r){return(n,d)=>{const a=p("MithrilDemo");return g(),m("div",null,[d[0]||(d[0]=i('<h1 id="tagsinput" tabindex="-1">TagsInput <a class="header-anchor" href="#tagsinput" aria-label="Permalink to &quot;TagsInput&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>TagsInput</code> は Chakra UI 風の compound component です。タグの追加・削除・編集・クリアを、サブコンポーネントの組み合わせで構成できます。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>旧単体コンポーネント API（<code>TagsInputClassic</code>）はレガシー扱いです。このページでは current API を案内します。</p></div><h2 id="usage-使用例" tabindex="-1">Usage 使用例 <a class="header-anchor" href="#usage-使用例" aria-label="Permalink to &quot;Usage 使用例&quot;">​</a></h2><h3 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h3><p>Enter または区切り文字でタグを追加する最小構成です。</p>',7)),c(a,{setup:l(I),code:l(h)},null,8,["setup","code"]),d[1]||(d[1]=o("h3",{id:"編集可能タグ",tabindex:"-1"},[u("編集可能タグ "),o("a",{class:"header-anchor",href:"#編集可能タグ","aria-label":'Permalink to "編集可能タグ"'},"​")],-1)),d[2]||(d[2]=o("p",null,[o("code",null,"editable"),u(" と "),o("code",null,"validate"),u(" を使い、ダブルクリック編集と簡単な入力制約を付けた例です。")],-1)),c(a,{setup:l(T),code:l(v)},null,8,["setup","code"]),d[3]||(d[3]=i('<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="root-props" tabindex="-1">Root Props <a class="header-anchor" href="#root-props" aria-label="Permalink to &quot;Root Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>value</code></td><td><code>string[]</code></td><td>—</td><td>制御モード時のタグ配列です</td></tr><tr><td><code>defaultValue</code></td><td><code>string[]</code></td><td><code>[]</code></td><td>非制御モード時の初期タグです</td></tr><tr><td><code>onValueChange</code></td><td><code>(details) =&gt; void</code></td><td>—</td><td>タグ配列変更時に呼ばれます</td></tr><tr><td><code>onInputValueChange</code></td><td><code>(details) =&gt; void</code></td><td>—</td><td>入力欄の文字列変更時に呼ばれます</td></tr><tr><td><code>max</code></td><td><code>number</code></td><td><code>Infinity</code></td><td>登録可能な最大タグ数です</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>全体を無効化します</td></tr><tr><td><code>readOnly</code></td><td><code>boolean</code></td><td><code>false</code></td><td>タグ追加・削除を禁止します</td></tr><tr><td><code>invalid</code></td><td><code>boolean</code></td><td><code>false</code></td><td>無効状態の見た目を適用します</td></tr><tr><td><code>validate</code></td><td><code>({ value, inputValue }) =&gt; boolean</code></td><td>—</td><td>新規タグ追加時のバリデーションです</td></tr><tr><td><code>delimiter</code></td><td><code>string | RegExp</code></td><td><code>&quot;,&quot;</code></td><td>入力中にタグを分割する区切り文字です</td></tr><tr><td><code>addOnPaste</code></td><td><code>boolean</code></td><td><code>false</code></td><td>ペースト時に区切り文字で分割して追加します</td></tr><tr><td><code>blurBehavior</code></td><td><code>&quot;clear&quot; | &quot;add&quot;</code></td><td>—</td><td>blur 時の入力値の扱いを制御します</td></tr><tr><td><code>editable</code></td><td><code>boolean</code></td><td><code>false</code></td><td>既存タグのインライン編集を許可します</td></tr><tr><td><code>size</code></td><td><code>&quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;</code></td><td><code>&quot;md&quot;</code></td><td>サイズを指定します</td></tr><tr><td><code>variant</code></td><td><code>&quot;outline&quot; | &quot;subtle&quot;</code></td><td><code>&quot;outline&quot;</code></td><td>見た目のバリアントです</td></tr><tr><td><code>name</code></td><td><code>string</code></td><td>—</td><td>フォーム送信用の name 属性です</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>ルート要素の追加クラスです</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt;</code></td><td>—</td><td>ルート要素のインラインスタイルです</td></tr></tbody></table><h3 id="subcomponents" tabindex="-1">Subcomponents <a class="header-anchor" href="#subcomponents" aria-label="Permalink to &quot;Subcomponents&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Component</th><th>Description</th></tr></thead><tbody><tr><td><code>TagsInput.Root</code></td><td>状態管理を行うルートです</td></tr><tr><td><code>TagsInput.Label</code></td><td>ラベル表示です</td></tr><tr><td><code>TagsInput.Control</code></td><td>タグ群と入力欄のコンテナです</td></tr><tr><td><code>TagsInput.Item</code></td><td>個々のタグを表すラッパーです</td></tr><tr><td><code>TagsInput.ItemPreview</code></td><td>通常表示時のタグ領域です</td></tr><tr><td><code>TagsInput.ItemText</code></td><td>タグ文字列の表示です</td></tr><tr><td><code>TagsInput.ItemDeleteTrigger</code></td><td>個別タグ削除ボタンです</td></tr><tr><td><code>TagsInput.ItemInput</code></td><td>編集モード時の入力欄です</td></tr><tr><td><code>TagsInput.Input</code></td><td>新しいタグを追加する入力欄です</td></tr><tr><td><code>TagsInput.ClearTrigger</code></td><td>すべてのタグを一括クリアします</td></tr><tr><td><code>TagsInput.HiddenInput</code></td><td>フォーム送信用の hidden input です</td></tr></tbody></table>',5))])}}});export{q as __pageData,P as default};
