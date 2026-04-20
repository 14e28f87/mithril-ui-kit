/** @jsx m */
import m from "mithril";
import { Pagination2 } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
  m.mount(el, {
    view() {
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <div style={{ fontSize: "0.8rem", color: "#888", marginBottom: "4px" }}>variant="solid" size="lg"</div>
            <Pagination2.Root count={100} pageSize={10} variant="solid" size="lg" defaultPage={3}>
              <Pagination2.PrevTrigger>←</Pagination2.PrevTrigger>
              <Pagination2.Items />
              <Pagination2.NextTrigger>→</Pagination2.NextTrigger>
            </Pagination2.Root>
          </div>
          <div>
            <div style={{ fontSize: "0.8rem", color: "#888", marginBottom: "4px" }}>variant="subtle" size="sm"</div>
            <Pagination2.Root count={100} pageSize={10} variant="subtle" size="sm" defaultPage={3}>
              <Pagination2.PrevTrigger>←</Pagination2.PrevTrigger>
              <Pagination2.Items />
              <Pagination2.NextTrigger>→</Pagination2.NextTrigger>
            </Pagination2.Root>
          </div>
        </div>
      );
    },
  });
}
