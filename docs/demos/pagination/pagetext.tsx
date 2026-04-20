/** @jsx m */
import m from "mithril";
import { Pagination2 } from "mithriluikit";

export function setup(el: HTMLElement): void {
  m.mount(el, {
    view() {
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <Pagination2.Root count={300} pageSize={15} defaultPage={5}>
            <Pagination2.PrevTrigger>←</Pagination2.PrevTrigger>
            <Pagination2.Items />
            <Pagination2.PageText format="short" />
            <Pagination2.NextTrigger>→</Pagination2.NextTrigger>
          </Pagination2.Root>
          <div style={{ fontSize: "0.8rem", color: "#888" }}>format="short" → "5 / 20"</div>

          <Pagination2.Root count={300} pageSize={15} defaultPage={5}>
            <Pagination2.PrevTrigger>←</Pagination2.PrevTrigger>
            <Pagination2.Items />
            <Pagination2.PageText format="long" />
            <Pagination2.NextTrigger>→</Pagination2.NextTrigger>
          </Pagination2.Root>
          <div style={{ fontSize: "0.8rem", color: "#888" }}>format="long" → "5 / 20 ページ (300件)"</div>
        </div>
      );
    },
  });
}
