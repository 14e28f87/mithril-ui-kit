/** @jsx m */
import m from "mithril";
import { Overlay } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
  let overlayRef: Overlay | null = null;
  let status = "closed";

  const Content: m.Component<any> = {
    view(vnode: m.Vnode<any>) {
      return (
        <div class="card shadow-sm" style={{ width: "320px" }}>
          <div class="card-body">
            <h5 class="card-title">Overlay Content</h5>
            <p class="card-text">Overlay の基盤クラスのデモです。</p>
            <button class="btn btn-primary" onclick={() => vnode.attrs.hide()}>閉じる</button>
          </div>
        </div>
      );
    }
  };

  m.mount(el, {
    view() {
      return (
        <div>
          <button
            class="btn btn-primary"
            onclick={() => {
              overlayRef = new Overlay(Content, {
                closeOnEscapeKey: true,
                closeOnOutsideClick: true,
                hasBackdrop: true
              });
              overlayRef.show();
              status = "open";
              m.redraw();
            }}
          >
            Overlayを表示
          </button>
          <div class="mt-2 text-muted small">{`状態: ${status}`}</div>
        </div>
      );
    }
  });
}
