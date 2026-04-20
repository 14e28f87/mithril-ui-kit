import{m as e}from"./chunks/theme.D5gNcpBr.js";import{D as t}from"./chunks/Table.A5W0Ssaz.js";import{C as s,o as D,c as P,ai as u,E as l,k as n,j as o,a as c}from"./chunks/framework.Bm_aoSIc.js";function k(a){let r=[new Date];e.mount(a,{view(){return e("div",{class:"d-grid gap-2",style:{maxWidth:"360px"}},e(t.Root,{selectionMode:"single",value:r,onValueChange:d=>{r=d.value,e.redraw()}},e(t.Label,null,"日付を選択"),e(t.Control,null,e(t.Input,{placeholder:"日付を選択"}),e(t.IndicatorGroup,null,e(t.ClearTrigger,null,"Clear"),e(t.Trigger,null,"Open"))),e(t.Positioner,null,e(t.Content,null,e(t.View,{view:"day"},e(t.Header,null),e(t.DayTable,null)),e(t.View,{view:"month"},e(t.Header,null),e(t.MonthTable,null)),e(t.View,{view:"year"},e(t.Header,null),e(t.YearTable,null))))),e("div",{class:"small text-muted"},`選択値: ${r.length>0?r[0].toLocaleDateString("ja-JP"):"(なし)"}`))}})}function m(a){let r=[];e.mount(a,{view(){return e("div",{class:"d-grid gap-2",style:{maxWidth:"420px"}},e(t.Root,{selectionMode:"range",value:r,numOfMonths:2,onValueChange:d=>{r=d.value,e.redraw()}},e(t.Label,null,"期間を選択"),e(t.Control,null,e(t.Input,{placeholder:"期間を選択"}),e(t.IndicatorGroup,null,e(t.ClearTrigger,null,"×"),e(t.Trigger,null,"📅"))),e(t.Positioner,null,e(t.Content,null,e(t.View,{view:"day"},e(t.Header,null),e(t.DayTable,null)),e(t.View,{view:"month"},e(t.Header,null),e(t.MonthTable,null)),e(t.View,{view:"year"},e(t.Header,null),e(t.YearTable,null))))),e("div",{class:"small text-muted"},`範囲: ${r.length===2?r.map(d=>d.toLocaleDateString("ja-JP")).join(" 〜 "):"(未選択)"}`))}})}function h(a){let r=[new Date];e.mount(a,{view(){return e("div",{class:"d-grid gap-2"},e(t.Root,{inline:!0,selectionMode:"single",value:r,onValueChange:d=>{r=d.value,e.redraw()}},e(t.Content,null,e(t.View,{view:"day"},e(t.Header,null),e(t.DayTable,null)),e(t.View,{view:"month"},e(t.Header,null),e(t.MonthTable,null)),e(t.View,{view:"year"},e(t.Header,null),e(t.YearTable,null)))),e("div",{class:"small text-muted"},`選択値: ${r.length>0?r[0].toLocaleDateString("ja-JP"):"(なし)"}`))}})}const g=`/** @jsx m */
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
}`,T=JSON.parse('{"title":"DatePicker","description":"","frontmatter":{},"headers":[],"relativePath":"DatePicker.md","filePath":"DatePicker.md"}'),b={name:"DatePicker.md"},C=Object.assign(b,{setup(a){return(r,d)=>{const i=s("MithrilDemo");return D(),P("div",null,[d[0]||(d[0]=u("",7)),l(i,{setup:n(k),code:n(g)},null,8,["setup","code"]),d[1]||(d[1]=o("h3",{id:"範囲選択",tabindex:"-1"},[c("範囲選択 "),o("a",{class:"header-anchor",href:"#範囲選択","aria-label":'Permalink to "範囲選択"'},"​")],-1)),d[2]||(d[2]=o("p",null,[o("code",null,'selectionMode="range"'),c(" と "),o("code",null,"numOfMonths={2}"),c(" を組み合わせた例です。")],-1)),l(i,{setup:n(m),code:n(p)},null,8,["setup","code"]),d[3]||(d[3]=o("h3",{id:"インラインカレンダー",tabindex:"-1"},[c("インラインカレンダー "),o("a",{class:"header-anchor",href:"#インラインカレンダー","aria-label":'Permalink to "インラインカレンダー"'},"​")],-1)),d[4]||(d[4]=o("p",null,[o("code",null,"inline"),c(" を指定すると、入力トリガーなしでカレンダー本体だけを表示できます。")],-1)),l(i,{setup:n(h),code:n(v)},null,8,["setup","code"]),d[5]||(d[5]=u("",5))])}}});export{T as __pageData,C as default};
