/** @jsx m */
import m from "mithril";
import { Editable } from "mithriluikit";

export function setup(el: HTMLElement): void {
  let notes = "原料投入後に 15 分保持し、その後 10 度ずつ昇温します。";

  m.mount(el, {
    view() {
      return (
        <div class="d-grid gap-2" style={{ maxWidth: "480px" }}>
          <Editable.Root
            value={notes}
            activationMode="click"
            submitMode="none"
            onValueChange={({ value }) => {
              notes = value;
              m.redraw();
            }}
          >
            <Editable.Label>メモ</Editable.Label>
            <Editable.Preview />
            <Editable.Textarea />
            <Editable.Control>
              <Editable.EditTrigger>編集</Editable.EditTrigger>
              <Editable.SubmitTrigger>保存</Editable.SubmitTrigger>
              <Editable.CancelTrigger>取消</Editable.CancelTrigger>
            </Editable.Control>
          </Editable.Root>

          <div class="small text-muted">クリックで複数行メモを編集できます。</div>
        </div>
      );
    }
  });
}