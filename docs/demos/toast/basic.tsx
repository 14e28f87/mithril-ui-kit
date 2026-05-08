/** @jsx m */
import m from "mithril";
import { Toast, createToaster } from "mithril-ui-kit";

const toaster = createToaster({ placement: "top-end", duration: 3000, max: 5 });

export function setup(el: HTMLElement): void {
  m.mount(el, {
    view() {
      return (
        <div class="d-grid gap-3">
          <div class="d-flex flex-wrap gap-2">
            <button
              class="btn btn-outline-success"
              onclick={() => {
                toaster.success({
                  title: "保存完了",
                  description: "設定を保存しました。"
                });
              }}
            >
              Success
            </button>

            <button
              class="btn btn-outline-danger"
              onclick={() => {
                toaster.error({
                  title: "通信失敗",
                  description: "PLC との接続を確認してください。"
                });
              }}
            >
              Error
            </button>

            <button
              class="btn btn-outline-primary"
              onclick={() => {
                toaster.create({
                  type: "info",
                  title: "同期中",
                  description: "最新データを取得しています。",
                  action: {
                    label: "閉じる",
                    onClick: () => {}
                  }
                });
              }}
            >
              Action
            </button>
          </div>

          <div class="small text-muted">
            createToaster() で作成したトースターを Toast.Toaster に渡して表示します。
          </div>

          <Toast.Toaster toaster={toaster} />
        </div>
      );
    }
  });
}