/** @jsx m */
import m from "mithril";
import { Editable } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
  let value = "窯焼成プラン A";

  m.mount(el, {
    view() {
      return (
        <div class="d-grid gap-2" style={{ maxWidth: "420px" }}>
          <Editable.Root
            value={value}
            activationMode="dblclick"
            submitMode="none"
            onValueChange={({ value: next }) => {
              value = next;
              m.redraw();
            }}
          >
            <Editable.Label>プラン名</Editable.Label>
            <Editable.Preview />
            <Editable.Input />
            <Editable.Control>
              <Editable.EditTrigger>編集</Editable.EditTrigger>
              <Editable.SubmitTrigger>保存</Editable.SubmitTrigger>
              <Editable.CancelTrigger>取消</Editable.CancelTrigger>
            </Editable.Control>
          </Editable.Root>

          <div class="small text-muted">ダブルクリックで編集を開始します。</div>
          <div class="small text-muted">{`現在値: ${value}`}</div>
        </div>
      );
    }
  });
}