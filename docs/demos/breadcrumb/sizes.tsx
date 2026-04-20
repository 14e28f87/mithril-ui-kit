/** @jsx m */
import m from "mithril";
import { Breadcrumb2 } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
  m.mount(el, {
    view() {
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <div style={{ fontSize: "0.8rem", color: "#888", marginBottom: "4px" }}>size="sm"</div>
            <Breadcrumb2.Root size="sm">
              <Breadcrumb2.List>
                <Breadcrumb2.Item><Breadcrumb2.Link href="#">Home</Breadcrumb2.Link><Breadcrumb2.Separator /></Breadcrumb2.Item>
                <Breadcrumb2.Item><Breadcrumb2.CurrentLink>Page</Breadcrumb2.CurrentLink></Breadcrumb2.Item>
              </Breadcrumb2.List>
            </Breadcrumb2.Root>
          </div>
          <div>
            <div style={{ fontSize: "0.8rem", color: "#888", marginBottom: "4px" }}>size="md"</div>
            <Breadcrumb2.Root size="md">
              <Breadcrumb2.List>
                <Breadcrumb2.Item><Breadcrumb2.Link href="#">Home</Breadcrumb2.Link><Breadcrumb2.Separator /></Breadcrumb2.Item>
                <Breadcrumb2.Item><Breadcrumb2.CurrentLink>Page</Breadcrumb2.CurrentLink></Breadcrumb2.Item>
              </Breadcrumb2.List>
            </Breadcrumb2.Root>
          </div>
          <div>
            <div style={{ fontSize: "0.8rem", color: "#888", marginBottom: "4px" }}>size="lg"</div>
            <Breadcrumb2.Root size="lg">
              <Breadcrumb2.List>
                <Breadcrumb2.Item><Breadcrumb2.Link href="#">Home</Breadcrumb2.Link><Breadcrumb2.Separator /></Breadcrumb2.Item>
                <Breadcrumb2.Item><Breadcrumb2.CurrentLink>Page</Breadcrumb2.CurrentLink></Breadcrumb2.Item>
              </Breadcrumb2.List>
            </Breadcrumb2.Root>
          </div>
        </div>
      );
    },
  });
}
