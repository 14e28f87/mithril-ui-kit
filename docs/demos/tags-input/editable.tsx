/** @jsx m */
import m from "mithril";
import { TagsInput, type TagsInputValueChangeDetails } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
  let tags = ["kiln", "sensor", "opcua"];

  m.mount(el, {
    view() {
      return (
        <div class="d-grid gap-2">
          <TagsInput.Root
            value={tags}
            editable
            blurBehavior="add"
            max={6}
            validate={(details: { value: string; inputValue: string }) => details.value.trim().length >= 2}
            onValueChange={(details: TagsInputValueChangeDetails) => {
              tags = details.value;
              m.redraw();
            }}
          >
            <TagsInput.Label>編集可能タグ</TagsInput.Label>
            <TagsInput.Control>
              {tags.map((tag, index) => (
                <TagsInput.Item key={`${tag}-${index}`} index={index} value={tag}>
                  <TagsInput.ItemPreview>
                    <TagsInput.ItemText />
                    <TagsInput.ItemDeleteTrigger />
                  </TagsInput.ItemPreview>
                  <TagsInput.ItemInput />
                </TagsInput.Item>
              ))}
              <TagsInput.Input placeholder="2 文字以上で追加" />
              <TagsInput.ClearTrigger />
            </TagsInput.Control>
          </TagsInput.Root>

          <div class="small text-muted">ダブルクリックで既存タグを編集できます。</div>
          <div class="small text-muted">{`現在タグ: ${tags.join(", ") || "(なし)"}`}</div>
        </div>
      );
    }
  });
}