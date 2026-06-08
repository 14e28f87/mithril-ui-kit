/** @jsx m */
import m from "mithril";
import { Pagination } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
  m.mount(el, {
    view() {
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <Pagination.Root count={300} pageSize={15} defaultPage={5}>
            <Pagination.PrevTrigger>←</Pagination.PrevTrigger>
            <Pagination.Items />
            <Pagination.PageText format="short" />
            <Pagination.NextTrigger>→</Pagination.NextTrigger>
          </Pagination.Root>
          <div style={{ fontSize: "0.8rem", color: "#888" }}>format="short" → "5 / 20"</div>

          <Pagination.Root count={300} pageSize={15} defaultPage={5}>
            <Pagination.PrevTrigger>←</Pagination.PrevTrigger>
            <Pagination.Items />
            <Pagination.PageText format="long" />
            <Pagination.NextTrigger>→</Pagination.NextTrigger>
          </Pagination.Root>
          <div style={{ fontSize: "0.8rem", color: "#888" }}>format="long" → "5 / 20 ページ (300件)"</div>
        </div>
      );
    },
  });
}
