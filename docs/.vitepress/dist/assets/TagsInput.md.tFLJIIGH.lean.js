import{m as t}from"./chunks/theme.IYrj4rtN.js";import{u as e}from"./chunks/Table.BA6US4RP.js";import{C as p,o as g,c as m,ai as i,E as c,k as l,j as o,a as u}from"./chunks/framework.Bm_aoSIc.js";function I(r){let n=["mithril","ui","docs"],d="";t.mount(r,{view(){return t("div",{class:"d-grid gap-2"},t(e.Root,{value:n,delimiter:/[;,]/,onValueChange:a=>{n=a.value,t.redraw()},onInputValueChange:a=>{d=a.inputValue,t.redraw()}},t(e.Label,null,"タグ"),t(e.Control,null,n.map((a,s)=>t(e.Item,{key:`${a}-${s}`,index:s,value:a},t(e.ItemPreview,null,t(e.ItemText,null),t(e.ItemDeleteTrigger,null)),t(e.ItemInput,null))),t(e.Input,{placeholder:"タグを入力"}),t(e.ClearTrigger,null))),t("div",{class:"small text-muted"},`現在タグ: ${n.join(", ")||"(なし)"}`),t("div",{class:"small text-muted"},`入力中: ${d||"(空)"}`))}})}function T(r){let n=["kiln","sensor","opcua"];t.mount(r,{view(){return t("div",{class:"d-grid gap-2"},t(e.Root,{value:n,editable:!0,blurBehavior:"add",max:6,validate:d=>d.value.trim().length>=2,onValueChange:d=>{n=d.value,t.redraw()}},t(e.Label,null,"編集可能タグ"),t(e.Control,null,n.map((d,a)=>t(e.Item,{key:`${d}-${a}`,index:a,value:d},t(e.ItemPreview,null,t(e.ItemText,null),t(e.ItemDeleteTrigger,null)),t(e.ItemInput,null))),t(e.Input,{placeholder:"2 文字以上で追加"}),t(e.ClearTrigger,null))),t("div",{class:"small text-muted"},"ダブルクリックで既存タグを編集できます。"),t("div",{class:"small text-muted"},`現在タグ: ${n.join(", ")||"(なし)"}`))}})}const h=`/** @jsx m */
import m from "mithril";
import { TagsInput, type TagsInputValueChangeDetails } from "mithril-ui-kit";

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
                <TagsInput.Item key={\`\${tag}-\${index}\`} index={index} value={tag}>
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
            {\`現在タグ: \${tags.join(", ") || "(なし)"}\`}
          </div>
          <div class="small text-muted">
            {\`入力中: \${inputValue || "(空)"}\`}
          </div>
        </div>
      );
    }
  });
}`,v=`/** @jsx m */\r
/** @jsxRuntime classic */\r
import m from "mithril";\r
import { TagsInput, type TagsInputValueChangeDetails } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  let tags = ["kiln", "sensor", "opcua"];\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div class="d-grid gap-2">\r
          <TagsInput.Root\r
            value={tags}\r
            editable\r
            blurBehavior="add"\r
            max={6}\r
            validate={(details: { value: string; inputValue: string }) => details.value.trim().length >= 2}\r
            onValueChange={(details: TagsInputValueChangeDetails) => {\r
              tags = details.value;\r
              m.redraw();\r
            }}\r
          >\r
            <TagsInput.Label>編集可能タグ</TagsInput.Label>\r
            <TagsInput.Control>\r
              {tags.map((tag, index) => (\r
                <TagsInput.Item key={\`\${tag}-\${index}\`} index={index} value={tag}>\r
                  <TagsInput.ItemPreview>\r
                    <TagsInput.ItemText />\r
                    <TagsInput.ItemDeleteTrigger />\r
                  </TagsInput.ItemPreview>\r
                  <TagsInput.ItemInput />\r
                </TagsInput.Item>\r
              ))}\r
              <TagsInput.Input placeholder="2 文字以上で追加" />\r
              <TagsInput.ClearTrigger />\r
            </TagsInput.Control>\r
          </TagsInput.Root>\r
\r
          <div class="small text-muted">ダブルクリックで既存タグを編集できます。</div>\r
          <div class="small text-muted">{\`現在タグ: \${tags.join(", ") || "(なし)"}\`}</div>\r
        </div>\r
      );\r
    }\r
  });\r
}`,q=JSON.parse('{"title":"TagsInput","description":"","frontmatter":{},"headers":[],"relativePath":"TagsInput.md","filePath":"TagsInput.md"}'),b={name:"TagsInput.md"},P=Object.assign(b,{setup(r){return(n,d)=>{const a=p("MithrilDemo");return g(),m("div",null,[d[0]||(d[0]=i("",7)),c(a,{setup:l(I),code:l(h)},null,8,["setup","code"]),d[1]||(d[1]=o("h3",{id:"編集可能タグ",tabindex:"-1"},[u("編集可能タグ "),o("a",{class:"header-anchor",href:"#編集可能タグ","aria-label":'Permalink to "編集可能タグ"'},"​")],-1)),d[2]||(d[2]=o("p",null,[o("code",null,"editable"),u(" と "),o("code",null,"validate"),u(" を使い、ダブルクリック編集と簡単な入力制約を付けた例です。")],-1)),c(a,{setup:l(T),code:l(v)},null,8,["setup","code"]),d[3]||(d[3]=i("",5))])}}});export{q as __pageData,P as default};
