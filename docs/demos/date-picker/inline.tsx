/** @jsx m */
import m from "mithril";
import { DatePicker, type DatePickerValueChangeDetails } from "mithriluikit";

export function setup(el: HTMLElement): void {
  let value: Date[] = [new Date()];

  m.mount(el, {
    view() {
      return (
        <div class="d-grid gap-2">
          <DatePicker.Root
            inline
            selectionMode="single"
            value={value}
            onValueChange={(details: DatePickerValueChangeDetails) => {
              value = details.value;
              m.redraw();
            }}
          >
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
          </DatePicker.Root>

          <div class="small text-muted">
            {`選択値: ${value.length > 0 ? value[0].toLocaleDateString("ja-JP") : "(なし)"}`}
          </div>
        </div>
      );
    }
  });
}