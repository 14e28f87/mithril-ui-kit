/** @jsx m */
import m from "mithril";
import { Offcanvas, type OffcanvasContentInjectedAttrs, type OffcanvasPlacement } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
  let result = "未実行";

  m.mount(el, {
    view() {
      return (
        <div>
          {/* 命令的 API: 基本 */}
          <div class="d-flex gap-2 flex-wrap mb-3">
            <button
              class="btn btn-primary btn-sm"
              onclick={async () => {
                const ok = await Offcanvas.show<boolean>({
                  size: "md",
                  placement: "end",
                  content: {
                    view(vnode: m.Vnode<OffcanvasContentInjectedAttrs<boolean>>) {
                      return (
                        <Offcanvas.Content>
                          <Offcanvas.Header>
                            <Offcanvas.Title>メニュー</Offcanvas.Title>
                            <Offcanvas.CloseTrigger />
                          </Offcanvas.Header>
                          <Offcanvas.Body>
                            <p>Offcanvas の内容です。</p>
                            <ul class="list-group">
                              <li class="list-group-item">項目A</li>
                              <li class="list-group-item">項目B</li>
                            </ul>
                          </Offcanvas.Body>
                          <Offcanvas.Footer>
                            <button class="btn btn-secondary btn-sm" onclick={() => vnode.attrs.hide()}>閉じる</button>
                            <button class="btn btn-primary btn-sm" onclick={() => vnode.attrs.resolve(true)}>OK</button>
                          </Offcanvas.Footer>
                        </Offcanvas.Content>
                      );
                    },
                  },
                });
                result = ok ? "OK" : "閉じた";
                m.redraw();
              }}
            >
              Offcanvas を開く
            </button>
          </div>

          {/* 配置バリエーション */}
          <div class="d-flex gap-2 flex-wrap mb-3">
            {(["start", "end", "top", "bottom"] as OffcanvasPlacement[]).map((p) => (
              <button
                class="btn btn-outline-secondary btn-sm"
                onclick={async () => {
                  await Offcanvas.show<boolean>({
                    size: "md",
                    placement: p,
                    content: {
                      view(vnode: m.Vnode<OffcanvasContentInjectedAttrs<boolean>>) {
                        return (
                          <Offcanvas.Content>
                            <Offcanvas.Header>
                              <Offcanvas.Title>placement: {p}</Offcanvas.Title>
                              <Offcanvas.CloseTrigger />
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                              <p>配置: {p}</p>
                            </Offcanvas.Body>
                          </Offcanvas.Content>
                        );
                      },
                    },
                  });
                  m.redraw();
                }}
              >
                {p}
              </button>
            ))}
          </div>

          <div class="mt-2 text-muted small">{`結果: ${result}`}</div>
        </div>
      );
    },
  });
}
