/** @jsx m */
import m from "mithril";
import { TagsInput, type TagsInputValueChangeDetails } from "mithriluikit";

export function setup(el: HTMLElement): void {
  let tags = ["mithril", "ui", "docs"];
  let inputValue = "";

  m.mount(el, {
    view() {
      return (
        <div class="d-grid gap-2">
          <TagsInput.Root
            value={tags}
            delimiter={/[;,]/}
            onValueChange={(details: TagsInputValueChangeDetails) => {
              tags = details.value;
              m.redraw();
            }}
            onInputValueChange={(details) => {
              inputValue = details.inputValue;
              m.redraw();
            }}
          >
            <TagsInput.Label>タグ</TagsInput.Label>
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
              <TagsInput.Input placeholder="タグを入力" />
              <TagsInput.ClearTrigger />
            </TagsInput.Control>
          </TagsInput.Root>

          <div class="small text-muted">
            {`現在タグ: ${tags.join(", ") || "(なし)"}`}
          </div>
          <div class="small text-muted">
            {`入力中: ${inputValue || "(空)"}`}
          </div>
        </div>
      );
    }
  });
}