/** @jsx m */
import m from "mithril";
import { Breadcrumb2 } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
  m.mount(el, {
    view() {
      return (
        <Breadcrumb2.Root>
          <Breadcrumb2.List>
            <Breadcrumb2.Item>
              <Breadcrumb2.Link href="#">ホーム</Breadcrumb2.Link>
              <Breadcrumb2.Separator />
            </Breadcrumb2.Item>
            <Breadcrumb2.Item>
              <Breadcrumb2.Ellipsis />
              <Breadcrumb2.Separator />
            </Breadcrumb2.Item>
            <Breadcrumb2.Item>
              <Breadcrumb2.Link href="#">カテゴリ</Breadcrumb2.Link>
              <Breadcrumb2.Separator />
            </Breadcrumb2.Item>
            <Breadcrumb2.Item>
              <Breadcrumb2.CurrentLink>詳細ページ</Breadcrumb2.CurrentLink>
            </Breadcrumb2.Item>
          </Breadcrumb2.List>
        </Breadcrumb2.Root>
      );
    },
  });
}
