/** @jsx m */
import m from "mithril";
import { Breadcrumb2 } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
  m.mount(el, {
    view() {
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <div style={{ fontSize: "0.8rem", color: "#888", marginBottom: "4px" }}>variant="underline"</div>
            <Breadcrumb2.Root variant="underline">
              <Breadcrumb2.List>
                <Breadcrumb2.Item><Breadcrumb2.Link href="#">ホーム</Breadcrumb2.Link><Breadcrumb2.Separator /></Breadcrumb2.Item>
                <Breadcrumb2.Item><Breadcrumb2.Link href="#">製品</Breadcrumb2.Link><Breadcrumb2.Separator /></Breadcrumb2.Item>
                <Breadcrumb2.Item><Breadcrumb2.CurrentLink>詳細</Breadcrumb2.CurrentLink></Breadcrumb2.Item>
              </Breadcrumb2.List>
            </Breadcrumb2.Root>
          </div>
          <div>
            <div style={{ fontSize: "0.8rem", color: "#888", marginBottom: "4px" }}>variant="plain"</div>
            <Breadcrumb2.Root variant="plain">
              <Breadcrumb2.List>
                <Breadcrumb2.Item><Breadcrumb2.Link href="#">ホーム</Breadcrumb2.Link><Breadcrumb2.Separator /></Breadcrumb2.Item>
                <Breadcrumb2.Item><Breadcrumb2.Link href="#">製品</Breadcrumb2.Link><Breadcrumb2.Separator /></Breadcrumb2.Item>
                <Breadcrumb2.Item><Breadcrumb2.CurrentLink>詳細</Breadcrumb2.CurrentLink></Breadcrumb2.Item>
              </Breadcrumb2.List>
            </Breadcrumb2.Root>
          </div>
        </div>
      );
    },
  });
}
