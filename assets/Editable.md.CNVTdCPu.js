import{m as t}from"./chunks/theme.C32Rvu8V.js";import{o as d}from"./chunks/Table.MsshMnDN.js";import{C as u,o as s,c as b,a4 as n,E as i,k as a,j as c,a as m}from"./chunks/framework.DuWTyC0X.js";function g(r){let o="窯焼成プラン A";t.mount(r,{view(){return t("div",{class:"d-grid gap-2",style:{maxWidth:"420px"}},t(d.Root,{value:o,activationMode:"dblclick",submitMode:"none",onValueChange:({value:e})=>{o=e,t.redraw()}},t(d.Label,null,"プラン名"),t(d.Preview,null),t(d.Input,null),t(d.Control,null,t(d.EditTrigger,null,"編集"),t(d.SubmitTrigger,null,"保存"),t(d.CancelTrigger,null,"取消"))),t("div",{class:"small text-muted"},"ダブルクリックで編集を開始します。"),t("div",{class:"small text-muted"},`現在値: ${o}`))}})}function h(r){let o="原料投入後に 15 分保持し、その後 10 度ずつ昇温します。";t.mount(r,{view(){return t("div",{class:"d-grid gap-2",style:{maxWidth:"480px"}},t(d.Root,{value:o,activationMode:"click",submitMode:"none",onValueChange:({value:e})=>{o=e,t.redraw()}},t(d.Label,null,"メモ"),t(d.Preview,null),t(d.Textarea,null),t(d.Control,null,t(d.EditTrigger,null,"編集"),t(d.SubmitTrigger,null,"保存"),t(d.CancelTrigger,null,"取消"))),t("div",{class:"small text-muted"},"クリックで複数行メモを編集できます。"))}})}const p=`/** @jsx m */\r
import m from "mithril";\r
import { Editable } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  let value = "窯焼成プラン A";\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div class="d-grid gap-2" style={{ maxWidth: "420px" }}>\r
          <Editable.Root\r
            value={value}\r
            activationMode="dblclick"\r
            submitMode="none"\r
            onValueChange={({ value: next }) => {\r
              value = next;\r
              m.redraw();\r
            }}\r
          >\r
            <Editable.Label>プラン名</Editable.Label>\r
            <Editable.Preview />\r
            <Editable.Input />\r
            <Editable.Control>\r
              <Editable.EditTrigger>編集</Editable.EditTrigger>\r
              <Editable.SubmitTrigger>保存</Editable.SubmitTrigger>\r
              <Editable.CancelTrigger>取消</Editable.CancelTrigger>\r
            </Editable.Control>\r
          </Editable.Root>\r
\r
          <div class="small text-muted">ダブルクリックで編集を開始します。</div>\r
          <div class="small text-muted">{\`現在値: \${value}\`}</div>\r
        </div>\r
      );\r
    }\r
  });\r
}`,E=`/** @jsx m */\r
import m from "mithril";\r
import { Editable } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  let notes = "原料投入後に 15 分保持し、その後 10 度ずつ昇温します。";\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div class="d-grid gap-2" style={{ maxWidth: "480px" }}>\r
          <Editable.Root\r
            value={notes}\r
            activationMode="click"\r
            submitMode="none"\r
            onValueChange={({ value }) => {\r
              notes = value;\r
              m.redraw();\r
            }}\r
          >\r
            <Editable.Label>メモ</Editable.Label>\r
            <Editable.Preview />\r
            <Editable.Textarea />\r
            <Editable.Control>\r
              <Editable.EditTrigger>編集</Editable.EditTrigger>\r
              <Editable.SubmitTrigger>保存</Editable.SubmitTrigger>\r
              <Editable.CancelTrigger>取消</Editable.CancelTrigger>\r
            </Editable.Control>\r
          </Editable.Root>\r
\r
          <div class="small text-muted">クリックで複数行メモを編集できます。</div>\r
        </div>\r
      );\r
    }\r
  });\r
}`,f=JSON.parse('{"title":"Editable","description":"","frontmatter":{},"headers":[],"relativePath":"Editable.md","filePath":"Editable.md","lastUpdated":1776836643000}'),v={name:"Editable.md"},_=Object.assign(v,{setup(r){return(o,e)=>{const l=u("MithrilDemo");return s(),b("div",null,[e[0]||(e[0]=n('<h1 id="editable" tabindex="-1">Editable <a class="header-anchor" href="#editable" aria-label="Permalink to &quot;Editable&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>Editable</code> はインライン編集用なコンポーネントです。表示モードと編集モードを切り替えながら、input または textarea ベースの編集体験を組み立てられます。</p><h2 id="usage-使用例" tabindex="-1">Usage 使用例 <a class="header-anchor" href="#usage-使用例" aria-label="Permalink to &quot;Usage 使用例&quot;">​</a></h2><h3 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h3>',5)),i(l,{setup:a(g),code:a(p)},null,8,["setup","code"]),e[1]||(e[1]=c("h3",{id:"複数行編集",tabindex:"-1"},[m("複数行編集 "),c("a",{class:"header-anchor",href:"#複数行編集","aria-label":'Permalink to "複数行編集"'},"​")],-1)),i(l,{setup:a(h),code:a(E)},null,8,["setup","code"]),e[2]||(e[2]=n('<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="root-props" tabindex="-1">Root Props <a class="header-anchor" href="#root-props" aria-label="Permalink to &quot;Root Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>value</code></td><td><code>string</code></td><td>—</td><td>制御モード時の値です</td></tr><tr><td><code>defaultValue</code></td><td><code>string</code></td><td><code>&quot;&quot;</code></td><td>非制御モード時の初期値です</td></tr><tr><td><code>placeholder</code></td><td><code>string | { edit: string; preview: string }</code></td><td>—</td><td>表示・編集時のプレースホルダーです</td></tr><tr><td><code>activationMode</code></td><td><code>&quot;focus&quot; | &quot;dblclick&quot; | &quot;click&quot; | &quot;none&quot;</code></td><td><code>&quot;focus&quot;</code></td><td>編集開始トリガーです</td></tr><tr><td><code>submitMode</code></td><td><code>&quot;enter&quot; | &quot;blur&quot; | &quot;none&quot; | &quot;both&quot;</code></td><td><code>&quot;both&quot;</code></td><td>値コミット方法です</td></tr><tr><td><code>onValueChange</code></td><td><code>(details) =&gt; void</code></td><td>—</td><td>入力中に呼ばれます</td></tr><tr><td><code>onValueCommit</code></td><td><code>(details) =&gt; void</code></td><td>—</td><td>コミット時に呼ばれます</td></tr><tr><td><code>onValueRevert</code></td><td><code>(details) =&gt; void</code></td><td>—</td><td>キャンセル時に呼ばれます</td></tr><tr><td><code>onEditChange</code></td><td><code>(details) =&gt; void</code></td><td>—</td><td>編集状態変更時に呼ばれます</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>無効化します</td></tr><tr><td><code>readOnly</code></td><td><code>boolean</code></td><td><code>false</code></td><td>読み取り専用にします</td></tr><tr><td><code>invalid</code></td><td><code>boolean</code></td><td><code>false</code></td><td>エラー状態の見た目にします</td></tr><tr><td><code>selectOnFocus</code></td><td><code>boolean</code></td><td><code>true</code></td><td>編集開始時に全選択します</td></tr><tr><td><code>size</code></td><td><code>&quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;</code></td><td><code>&quot;md&quot;</code></td><td>サイズを指定します</td></tr><tr><td><code>maxLength</code></td><td><code>number</code></td><td>—</td><td>最大文字数です</td></tr><tr><td><code>name</code></td><td><code>string</code></td><td>—</td><td>hidden input 用の name 属性です</td></tr><tr><td><code>edit</code></td><td><code>boolean</code></td><td>—</td><td>制御モード時の編集状態です</td></tr><tr><td><code>defaultEdit</code></td><td><code>boolean</code></td><td><code>false</code></td><td>非制御モード時の初期編集状態です</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>追加クラスです</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt;</code></td><td>—</td><td>インラインスタイルです</td></tr></tbody></table><h3 id="subcomponents" tabindex="-1">Subcomponents <a class="header-anchor" href="#subcomponents" aria-label="Permalink to &quot;Subcomponents&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Component</th><th>Description</th></tr></thead><tbody><tr><td><code>Editable.Root</code></td><td>状態を管理するルートです</td></tr><tr><td><code>Editable.Preview</code></td><td>表示モードのプレビューです</td></tr><tr><td><code>Editable.Input</code></td><td>単一行 input です</td></tr><tr><td><code>Editable.Textarea</code></td><td>複数行 textarea です</td></tr><tr><td><code>Editable.Label</code></td><td>ラベル表示です</td></tr><tr><td><code>Editable.Area</code></td><td>編集領域のマーカーです</td></tr><tr><td><code>Editable.Control</code></td><td>編集ボタン群のコンテナです</td></tr><tr><td><code>Editable.EditTrigger</code></td><td>編集開始ボタンです</td></tr><tr><td><code>Editable.SubmitTrigger</code></td><td>保存ボタンです</td></tr><tr><td><code>Editable.CancelTrigger</code></td><td>キャンセルボタンです</td></tr></tbody></table>',5))])}}});export{f as __pageData,_ as default};
