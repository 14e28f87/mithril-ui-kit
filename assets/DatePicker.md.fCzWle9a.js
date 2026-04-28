import{m as e}from"./chunks/theme.BHMR1ScI.js";import{D as t}from"./chunks/Table.DpkFVNUa.js";import{C as s,o as D,c as P,a4 as u,E as l,k as n,j as o,a as c}from"./chunks/framework.DuWTyC0X.js";function k(a){let r=[new Date];e.mount(a,{view(){return e("div",{class:"d-grid gap-2",style:{maxWidth:"360px"}},e(t.Root,{selectionMode:"single",value:r,onValueChange:d=>{r=d.value,e.redraw()}},e(t.Label,null,"日付を選択"),e(t.Control,null,e(t.Input,{placeholder:"日付を選択"}),e(t.IndicatorGroup,null,e(t.ClearTrigger,null,"Clear"),e(t.Trigger,null,"Open"))),e(t.Positioner,null,e(t.Content,null,e(t.View,{view:"day"},e(t.Header,null),e(t.DayTable,null)),e(t.View,{view:"month"},e(t.Header,null),e(t.MonthTable,null)),e(t.View,{view:"year"},e(t.Header,null),e(t.YearTable,null))))),e("div",{class:"small text-muted"},`選択値: ${r.length>0?r[0].toLocaleDateString("ja-JP"):"(なし)"}`))}})}function m(a){let r=[];e.mount(a,{view(){return e("div",{class:"d-grid gap-2",style:{maxWidth:"420px"}},e(t.Root,{selectionMode:"range",value:r,numOfMonths:2,onValueChange:d=>{r=d.value,e.redraw()}},e(t.Label,null,"期間を選択"),e(t.Control,null,e(t.Input,{placeholder:"期間を選択"}),e(t.IndicatorGroup,null,e(t.ClearTrigger,null,"×"),e(t.Trigger,null,"📅"))),e(t.Positioner,null,e(t.Content,null,e(t.View,{view:"day"},e(t.Header,null),e(t.DayTable,null)),e(t.View,{view:"month"},e(t.Header,null),e(t.MonthTable,null)),e(t.View,{view:"year"},e(t.Header,null),e(t.YearTable,null))))),e("div",{class:"small text-muted"},`範囲: ${r.length===2?r.map(d=>d.toLocaleDateString("ja-JP")).join(" 〜 "):"(未選択)"}`))}})}function h(a){let r=[new Date];e.mount(a,{view(){return e("div",{class:"d-grid gap-2"},e(t.Root,{inline:!0,selectionMode:"single",value:r,onValueChange:d=>{r=d.value,e.redraw()}},e(t.Content,null,e(t.View,{view:"day"},e(t.Header,null),e(t.DayTable,null)),e(t.View,{view:"month"},e(t.Header,null),e(t.MonthTable,null)),e(t.View,{view:"year"},e(t.Header,null),e(t.YearTable,null)))),e("div",{class:"small text-muted"},`選択値: ${r.length>0?r[0].toLocaleDateString("ja-JP"):"(なし)"}`))}})}const g=`/** @jsx m */
import m from "mithril";
import { DatePicker, type DatePickerValueChangeDetails } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
  let value: Date[] = [new Date()];

  m.mount(el, {
    view() {
      return (
        <div class="d-grid gap-2" style={{ maxWidth: "360px" }}>
          <DatePicker.Root
            selectionMode="single"
            value={value}
            onValueChange={(details: DatePickerValueChangeDetails) => {
              value = details.value;
              m.redraw();
            }}
          >
            <DatePicker.Label>日付を選択</DatePicker.Label>
            <DatePicker.Control>
              <DatePicker.Input placeholder="日付を選択" />
              <DatePicker.IndicatorGroup>
                <DatePicker.ClearTrigger>Clear</DatePicker.ClearTrigger>
                <DatePicker.Trigger>Open</DatePicker.Trigger>
              </DatePicker.IndicatorGroup>
            </DatePicker.Control>
            <DatePicker.Positioner>
              <DatePicker.Content>
                <DatePicker.View view="day">
                  <DatePicker.Header />
                  <DatePicker.DayTable />
                </DatePicker.View>
                <DatePicker.View view="month">
                  <DatePicker.Header />
                  <DatePicker.MonthTable />
                </DatePicker.View>
                <DatePicker.View view="year">
                  <DatePicker.Header />
                  <DatePicker.YearTable />
                </DatePicker.View>
              </DatePicker.Content>
            </DatePicker.Positioner>
          </DatePicker.Root>

          <div class="small text-muted">
            {\`選択値: \${value.length > 0 ? value[0].toLocaleDateString("ja-JP") : "(なし)"}\`}
          </div>
        </div>
      );
    }
  });
}`,p=`/** @jsx m */\r
import m from "mithril";\r
import { DatePicker, type DatePickerValueChangeDetails } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  let rangeValue: Date[] = [];\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div class="d-grid gap-2" style={{ maxWidth: "420px" }}>\r
          <DatePicker.Root\r
            selectionMode="range"\r
            value={rangeValue}\r
            numOfMonths={2}\r
            onValueChange={(details: DatePickerValueChangeDetails) => {\r
              rangeValue = details.value;\r
              m.redraw();\r
            }}\r
          >\r
            <DatePicker.Label>期間を選択</DatePicker.Label>\r
            <DatePicker.Control>\r
              <DatePicker.Input placeholder="期間を選択" />\r
              <DatePicker.IndicatorGroup>\r
                <DatePicker.ClearTrigger>×</DatePicker.ClearTrigger>\r
                <DatePicker.Trigger>📅</DatePicker.Trigger>\r
              </DatePicker.IndicatorGroup>\r
            </DatePicker.Control>\r
            <DatePicker.Positioner>\r
              <DatePicker.Content>\r
                <DatePicker.View view="day">\r
                  <DatePicker.Header />\r
                  <DatePicker.DayTable />\r
                </DatePicker.View>\r
                <DatePicker.View view="month">\r
                  <DatePicker.Header />\r
                  <DatePicker.MonthTable />\r
                </DatePicker.View>\r
                <DatePicker.View view="year">\r
                  <DatePicker.Header />\r
                  <DatePicker.YearTable />\r
                </DatePicker.View>\r
              </DatePicker.Content>\r
            </DatePicker.Positioner>\r
          </DatePicker.Root>\r
\r
          <div class="small text-muted">\r
            {\`範囲: \${rangeValue.length === 2 ? rangeValue.map((date) => date.toLocaleDateString("ja-JP")).join(" 〜 ") : "(未選択)"}\`}\r
          </div>\r
        </div>\r
      );\r
    }\r
  });\r
}`,v=`/** @jsx m */\r
import m from "mithril";\r
import { DatePicker, type DatePickerValueChangeDetails } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  let value: Date[] = [new Date()];\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div class="d-grid gap-2">\r
          <DatePicker.Root\r
            inline\r
            selectionMode="single"\r
            value={value}\r
            onValueChange={(details: DatePickerValueChangeDetails) => {\r
              value = details.value;\r
              m.redraw();\r
            }}\r
          >\r
            <DatePicker.Content>\r
              <DatePicker.View view="day">\r
                <DatePicker.Header />\r
                <DatePicker.DayTable />\r
              </DatePicker.View>\r
              <DatePicker.View view="month">\r
                <DatePicker.Header />\r
                <DatePicker.MonthTable />\r
              </DatePicker.View>\r
              <DatePicker.View view="year">\r
                <DatePicker.Header />\r
                <DatePicker.YearTable />\r
              </DatePicker.View>\r
            </DatePicker.Content>\r
          </DatePicker.Root>\r
\r
          <div class="small text-muted">\r
            {\`選択値: \${value.length > 0 ? value[0].toLocaleDateString("ja-JP") : "(なし)"}\`}\r
          </div>\r
        </div>\r
      );\r
    }\r
  });\r
}`,T=JSON.parse('{"title":"DatePicker","description":"","frontmatter":{},"headers":[],"relativePath":"DatePicker.md","filePath":"DatePicker.md","lastUpdated":1776836643000}'),b={name:"DatePicker.md"},f=Object.assign(b,{setup(a){return(r,d)=>{const i=s("MithrilDemo");return D(),P("div",null,[d[0]||(d[0]=u('<h1 id="datepicker" tabindex="-1">DatePicker <a class="header-anchor" href="#datepicker" aria-label="Permalink to &quot;DatePicker&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>DatePicker</code> は 日付を選択できるコンポーネントです。 単一選択・複数選択・範囲選択、ポップオーバー表示とインライン表示、<code>day</code> / <code>month</code> / <code>year</code> ビュー切り替えをサポートします。</p><h2 id="usage-使用例" tabindex="-1">Usage 使用例 <a class="header-anchor" href="#usage-使用例" aria-label="Permalink to &quot;Usage 使用例&quot;">​</a></h2><h3 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h3><p>単一選択のもっとも基本的な構成です。</p>',6)),l(i,{setup:n(k),code:n(g)},null,8,["setup","code"]),d[1]||(d[1]=o("h3",{id:"範囲選択",tabindex:"-1"},[c("範囲選択 "),o("a",{class:"header-anchor",href:"#範囲選択","aria-label":'Permalink to "範囲選択"'},"​")],-1)),d[2]||(d[2]=o("p",null,[o("code",null,'selectionMode="range"'),c(" と "),o("code",null,"numOfMonths={2}"),c(" を組み合わせた例です。")],-1)),l(i,{setup:n(m),code:n(p)},null,8,["setup","code"]),d[3]||(d[3]=o("h3",{id:"インラインカレンダー",tabindex:"-1"},[c("インラインカレンダー "),o("a",{class:"header-anchor",href:"#インラインカレンダー","aria-label":'Permalink to "インラインカレンダー"'},"​")],-1)),d[4]||(d[4]=o("p",null,[o("code",null,"inline"),c(" を指定すると、入力トリガーなしでカレンダー本体だけを表示できます。")],-1)),l(i,{setup:n(h),code:n(v)},null,8,["setup","code"]),d[5]||(d[5]=u('<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="root-props" tabindex="-1">Root Props <a class="header-anchor" href="#root-props" aria-label="Permalink to &quot;Root Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>selectionMode</code></td><td><code>&quot;single&quot; | &quot;multiple&quot; | &quot;range&quot;</code></td><td><code>&quot;single&quot;</code></td><td>選択モードを指定します</td></tr><tr><td><code>value</code></td><td><code>Date[]</code></td><td>—</td><td>制御モード時の選択値です</td></tr><tr><td><code>defaultValue</code></td><td><code>Date[]</code></td><td>—</td><td>非制御モード時の初期値です</td></tr><tr><td><code>onValueChange</code></td><td><code>(details) =&gt; void</code></td><td>—</td><td>値変更時に呼ばれます</td></tr><tr><td><code>defaultView</code></td><td><code>&quot;day&quot; | &quot;month&quot; | &quot;year&quot;</code></td><td><code>&quot;day&quot;</code></td><td>初期ビューを指定します</td></tr><tr><td><code>minView</code></td><td><code>&quot;day&quot; | &quot;month&quot; | &quot;year&quot;</code></td><td>—</td><td>これ以上ドリルダウンしない最小ビューです</td></tr><tr><td><code>maxView</code></td><td><code>&quot;day&quot; | &quot;month&quot; | &quot;year&quot;</code></td><td>—</td><td>これ以上ドリルアップしない最大ビューです</td></tr><tr><td><code>view</code></td><td><code>&quot;day&quot; | &quot;month&quot; | &quot;year&quot;</code></td><td>—</td><td>制御モード時のビューです</td></tr><tr><td><code>onViewChange</code></td><td><code>(details) =&gt; void</code></td><td>—</td><td>ビュー変更時に呼ばれます</td></tr><tr><td><code>inline</code></td><td><code>boolean</code></td><td><code>false</code></td><td>カレンダー本体を常時表示します</td></tr><tr><td><code>open</code></td><td><code>boolean</code></td><td>—</td><td>制御モード時の開閉状態です</td></tr><tr><td><code>defaultOpen</code></td><td><code>boolean</code></td><td><code>false</code></td><td>非制御モード時の初期開閉状態です</td></tr><tr><td><code>onOpenChange</code></td><td><code>(details) =&gt; void</code></td><td>—</td><td>開閉状態変更時に呼ばれます</td></tr><tr><td><code>closeOnSelect</code></td><td><code>boolean</code></td><td><code>true</code></td><td>選択後に自動で閉じるかを指定します</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>全体を無効化します</td></tr><tr><td><code>readOnly</code></td><td><code>boolean</code></td><td><code>false</code></td><td>入力を読み取り専用にします</td></tr><tr><td><code>min</code></td><td><code>Date</code></td><td>—</td><td>選択可能な最小日付です</td></tr><tr><td><code>max</code></td><td><code>Date</code></td><td>—</td><td>選択可能な最大日付です</td></tr><tr><td><code>isDateUnavailable</code></td><td><code>(date: Date) =&gt; boolean</code></td><td>—</td><td>個別日付の利用可否を判定します</td></tr><tr><td><code>hideOutsideDays</code></td><td><code>boolean</code></td><td><code>false</code></td><td>月外の日付セルを隠します</td></tr><tr><td><code>fixedWeeks</code></td><td><code>boolean</code></td><td><code>false</code></td><td>常に 6 週表示にします</td></tr><tr><td><code>numOfMonths</code></td><td><code>number</code></td><td><code>1</code></td><td>同時表示する月数です</td></tr><tr><td><code>startOfWeek</code></td><td><code>number</code></td><td><code>0</code></td><td>週の開始曜日です</td></tr><tr><td><code>locale</code></td><td><code>string</code></td><td><code>&quot;ja-JP&quot;</code></td><td>表示ロケールです</td></tr><tr><td><code>size</code></td><td><code>&quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;</code></td><td><code>&quot;md&quot;</code></td><td>入力やカレンダーのサイズを指定します</td></tr><tr><td><code>format</code></td><td><code>(date: Date) =&gt; string</code></td><td>—</td><td>入力欄へ表示するフォーマッターです</td></tr><tr><td><code>parse</code></td><td><code>(text: string) =&gt; Date | undefined</code></td><td>—</td><td>入力文字列のパーサーです</td></tr><tr><td><code>placeholder</code></td><td><code>string</code></td><td>—</td><td>入力のプレースホルダーです</td></tr><tr><td><code>name</code></td><td><code>string</code></td><td>—</td><td>フォーム送信用 name 属性です</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>ルート要素の追加クラスです</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt;</code></td><td>—</td><td>ルート要素のインラインスタイルです</td></tr></tbody></table><h3 id="subcomponents" tabindex="-1">Subcomponents <a class="header-anchor" href="#subcomponents" aria-label="Permalink to &quot;Subcomponents&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Component</th><th>Description</th></tr></thead><tbody><tr><td><code>DatePicker.Root</code></td><td>状態管理を行うルートです</td></tr><tr><td><code>DatePicker.Label</code></td><td>ラベル表示です</td></tr><tr><td><code>DatePicker.Control</code></td><td>入力欄とトリガー群のコンテナです</td></tr><tr><td><code>DatePicker.Input</code></td><td>入力欄です。<code>range</code> 時は 1 つの <code>Input</code> から開始日と終了日の 2 入力を描画します</td></tr><tr><td><code>DatePicker.IndicatorGroup</code></td><td>トリガーとクリアボタンのラッパーです</td></tr><tr><td><code>DatePicker.Trigger</code></td><td>カレンダー開閉トリガーです</td></tr><tr><td><code>DatePicker.ClearTrigger</code></td><td>値クリアボタンです</td></tr><tr><td><code>DatePicker.Positioner</code></td><td>ポップオーバー配置要素です</td></tr><tr><td><code>DatePicker.Content</code></td><td>カレンダー本体です</td></tr><tr><td><code>DatePicker.View</code></td><td><code>day</code> / <code>month</code> / <code>year</code> のビュー切り替え単位です</td></tr><tr><td><code>DatePicker.Header</code></td><td>前後移動とタイトル表示を行うヘッダーです</td></tr><tr><td><code>DatePicker.DayTable</code></td><td>日ビューです</td></tr><tr><td><code>DatePicker.MonthTable</code></td><td>月ビューです</td></tr><tr><td><code>DatePicker.YearTable</code></td><td>年ビューです</td></tr><tr><td><code>DatePicker.PresetTrigger</code></td><td>プリセット値を即時適用するボタンです</td></tr></tbody></table>',5))])}}});export{T as __pageData,f as default};
