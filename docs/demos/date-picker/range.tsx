/** @jsx m */
import m from "mithril";
import { DatePicker, type DatePickerValueChangeDetails } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
  let rangeValue: Date[] = [];

  m.mount(el, {
    view() {
      return (
        <div class="d-grid gap-2" style={{ maxWidth: "420px" }}>
          <DatePicker.Root
            selectionMode="range"
            value={rangeValue}
            numOfMonths={2}
            onValueChange={(details: DatePickerValueChangeDetails) => {
              rangeValue = details.value;
              m.redraw();
            }}
          >
            <DatePicker.Label>期間を選択</DatePicker.Label>
            <DatePicker.Control>
              <DatePicker.Input placeholder="期間を選択" />
              <DatePicker.IndicatorGroup>
                <DatePicker.ClearTrigger>×</DatePicker.ClearTrigger>
                <DatePicker.Trigger>📅</DatePicker.Trigger>
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
            {`範囲: ${rangeValue.length === 2 ? rangeValue.map((date) => date.toLocaleDateString("ja-JP")).join(" 〜 ") : "(未選択)"}`}
          </div>
        </div>
      );
    }
  });
}