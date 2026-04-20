/** @jsx m */
import m from "mithril";
import { Pagination2 } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
  let page = 2;

  m.mount(el, {
    view() {
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Pagination2.Root
            count={120}
            pageSize={10}
            page={page}
            siblingCount={1}
            variant="outline"
            onPageChange={(details: { page: number }) => {
              page = details.page;
              m.redraw();
            }}
          >
            <Pagination2.PrevTrigger>←</Pagination2.PrevTrigger>
            <Pagination2.Items />
            <Pagination2.PageText format="long" />
            <Pagination2.NextTrigger>→</Pagination2.NextTrigger>
          </Pagination2.Root>

          <div style={{ fontSize: "12px", color: "#666" }}>{`現在のページ: ${page}`}</div>
        </div>
      );
    },
  });
}
