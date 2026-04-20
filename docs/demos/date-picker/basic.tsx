/** @jsx m */
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
            {`選択値: ${value.length > 0 ? value[0].toLocaleDateString("ja-JP") : "(なし)"}`}
          </div>
        </div>
      );
    }
  });
}