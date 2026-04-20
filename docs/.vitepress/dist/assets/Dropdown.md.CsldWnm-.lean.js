import{m as i}from"./chunks/theme.IYrj4rtN.js";import{g as t}from"./chunks/Table.BA6US4RP.js";import{C as g,o as c,c as u,ai as E,E as h,k as p,j as n,a as o}from"./chunks/framework.Bm_aoSIc.js";function m(d){let a="なし",s=!1,e="medium";i.mount(d,{view(){return i("div",{style:"display:flex; gap:1rem; flex-wrap:wrap;"},i(t.Root,{size:"md",onSelect:r=>{a=r.value,i.redraw()}},i(t.Trigger,null,"Actions ▾"),i(t.Positioner,null,i(t.Content,null,i(t.Item,{value:"edit"},"✏️ Edit"),i(t.Item,{value:"duplicate"},"📋 Duplicate"),i(t.Separator,null),i(t.Item,{value:"archive"},"📦 Archive"),i(t.Separator,null),i(t.Item,{value:"delete",destructive:!0},"🗑️ Delete")))),i(t.Root,{size:"md"},i(t.Trigger,null,"Format ▾"),i(t.Positioner,null,i(t.Content,null,i(t.CheckboxItem,{value:"bold",checked:s,onCheckedChange:r=>{s=r,i.redraw()}},"Bold")))),i(t.Root,{size:"md"},i(t.Trigger,null,"Size: ",e," ▾"),i(t.Positioner,null,i(t.Content,null,i(t.RadioItemGroup,{value:e,onValueChange:r=>{e=r,i.redraw()}},i(t.RadioItem,{value:"small"},"Small"),i(t.RadioItem,{value:"medium"},"Medium"),i(t.RadioItem,{value:"large"},"Large"))))),i("div",{class:"w-100 mt-2 text-muted small"},`最後に選択した操作: ${a}`))}})}const w=`/** @jsx m */\r
import m from "mithril";\r
import { Dropdown, type DropdownSelectDetails } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  let lastAction = "なし";\r
  let boldChecked = false;\r
  let fontSize = "medium";\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div style="display:flex; gap:1rem; flex-wrap:wrap;">\r
          {/* 基本メニュー */}\r
          <Dropdown.Root size="md" onSelect={(d: DropdownSelectDetails) => { lastAction = d.value; m.redraw(); }}>\r
            <Dropdown.Trigger>Actions ▾</Dropdown.Trigger>\r
            <Dropdown.Positioner>\r
              <Dropdown.Content>\r
                <Dropdown.Item value="edit">✏️ Edit</Dropdown.Item>\r
                <Dropdown.Item value="duplicate">📋 Duplicate</Dropdown.Item>\r
                <Dropdown.Separator />\r
                <Dropdown.Item value="archive">📦 Archive</Dropdown.Item>\r
                <Dropdown.Separator />\r
                <Dropdown.Item value="delete" destructive>🗑️ Delete</Dropdown.Item>\r
              </Dropdown.Content>\r
            </Dropdown.Positioner>\r
          </Dropdown.Root>\r
\r
          {/* CheckboxItem */}\r
          <Dropdown.Root size="md">\r
            <Dropdown.Trigger>Format ▾</Dropdown.Trigger>\r
            <Dropdown.Positioner>\r
              <Dropdown.Content>\r
                <Dropdown.CheckboxItem value="bold" checked={boldChecked}\r
                  onCheckedChange={(c: boolean) => { boldChecked = c; m.redraw(); }}>\r
                  Bold\r
                </Dropdown.CheckboxItem>\r
              </Dropdown.Content>\r
            </Dropdown.Positioner>\r
          </Dropdown.Root>\r
\r
          {/* RadioItem */}\r
          <Dropdown.Root size="md">\r
            <Dropdown.Trigger>Size: {fontSize} ▾</Dropdown.Trigger>\r
            <Dropdown.Positioner>\r
              <Dropdown.Content>\r
                <Dropdown.RadioItemGroup value={fontSize}\r
                  onValueChange={(v: string) => { fontSize = v; m.redraw(); }}>\r
                  <Dropdown.RadioItem value="small">Small</Dropdown.RadioItem>\r
                  <Dropdown.RadioItem value="medium">Medium</Dropdown.RadioItem>\r
                  <Dropdown.RadioItem value="large">Large</Dropdown.RadioItem>\r
                </Dropdown.RadioItemGroup>\r
              </Dropdown.Content>\r
            </Dropdown.Positioner>\r
          </Dropdown.Root>\r
\r
          <div class="w-100 mt-2 text-muted small">{\`最後に選択した操作: \${lastAction}\`}</div>\r
        </div>\r
      );\r
    }\r
  });\r
}\r
`;function y(d){let a="なし";i.mount(d,{view(){return i("div",null,i(t.Root,{onSelect:s=>{a=s.value,i.redraw()}},i(t.ContextTrigger,null,i("div",{style:"border: 2px dashed #dee2e6; border-radius: 0.5rem; padding: 2rem; text-align: center; color: #6c757d; background: #f8f9fa; user-select: none;"},i("div",{style:"font-size: 0.875rem; margin-bottom: 0.5rem;"},"🖱️ この領域を右クリックしてください"),i("div",{style:"font-size: 0.75rem; opacity: 0.7;"},"Right-click to open context menu"))),i(t.Positioner,null,i(t.Content,null,i(t.Item,{value:"copy"},"📋 コピー"),i(t.Item,{value:"paste"},"📌 貼り付け"),i(t.Item,{value:"cut"},"✂️ 切り取り"),i(t.Separator,null),i(t.Item,{value:"select-all"},"☑️ すべて選択"),i(t.Separator,null),i(t.Item,{value:"delete",destructive:!0},"🗑️ 削除")))),i("div",{class:"mt-2 text-muted small"},`選択した操作: ${a}`))}})}const D=`/** @jsx m */\r
import m from "mithril";\r
import { Dropdown, type DropdownSelectDetails } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  let lastAction = "なし";\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div>\r
          <Dropdown.Root\r
            onSelect={(d: DropdownSelectDetails) => { lastAction = d.value; m.redraw(); }}\r
          >\r
            <Dropdown.ContextTrigger>\r
              <div style="border: 2px dashed #dee2e6; border-radius: 0.5rem; padding: 2rem; text-align: center; color: #6c757d; background: #f8f9fa; user-select: none;">\r
                <div style="font-size: 0.875rem; margin-bottom: 0.5rem;">🖱️ この領域を右クリックしてください</div>\r
                <div style="font-size: 0.75rem; opacity: 0.7;">Right-click to open context menu</div>\r
              </div>\r
            </Dropdown.ContextTrigger>\r
            <Dropdown.Positioner>\r
              <Dropdown.Content>\r
                <Dropdown.Item value="copy">📋 コピー</Dropdown.Item>\r
                <Dropdown.Item value="paste">📌 貼り付け</Dropdown.Item>\r
                <Dropdown.Item value="cut">✂️ 切り取り</Dropdown.Item>\r
                <Dropdown.Separator />\r
                <Dropdown.Item value="select-all">☑️ すべて選択</Dropdown.Item>\r
                <Dropdown.Separator />\r
                <Dropdown.Item value="delete" destructive>🗑️ 削除</Dropdown.Item>\r
              </Dropdown.Content>\r
            </Dropdown.Positioner>\r
          </Dropdown.Root>\r
          <div class="mt-2 text-muted small">{\`選択した操作: \${lastAction}\`}</div>\r
        </div>\r
      );\r
    }\r
  });\r
}\r
`;function C(d){let a="なし";const s={display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",padding:"0.375rem 0.75rem",background:"transparent",border:"none",borderRadius:"0",fontSize:"0.875rem",color:"var(--bs-body-color, #212529)",cursor:"pointer",textAlign:"left",gap:"0.5rem"};i.mount(d,{view(){return i("div",{style:"display:flex; gap:1rem; flex-wrap:wrap;"},i(t.Root,{onSelect:e=>{a=e.value,i.redraw()}},i(t.Trigger,null,"File ▾"),i(t.Positioner,null,i(t.Content,null,i(t.Item,{value:"new"},"📄 新規作成"),i(t.Item,{value:"open"},"📂 開く"),i(t.Separator,null),i("div",{style:"position:relative"},i(t.Root,{positioning:"right",style:{display:"block"},onSelect:e=>{a=e.value,i.redraw()}},i(t.Trigger,{style:s},i("span",null,"💾 エクスポート"),i("span",{style:"font-size:0.7rem"},"▶")),i(t.Positioner,null,i(t.Content,null,i(t.Item,{value:"export-pdf"},"📕 PDF"),i(t.Item,{value:"export-csv"},"📊 CSV"),i(t.Item,{value:"export-json"},"📋 JSON"))))),i(t.Separator,null),i(t.Item,{value:"close",destructive:!0},"✕ 閉じる")))),i("div",{class:"w-100 mt-2 text-muted small"},`選択した操作: ${a}`))}})}const F=`/** @jsx m */\r
import m from "mithril";\r
import { Dropdown, type DropdownSelectDetails } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  let lastAction = "なし";\r
\r
  const itemStyle = {\r
    display: "flex",\r
    alignItems: "center",\r
    justifyContent: "space-between",\r
    width: "100%",\r
    padding: "0.375rem 0.75rem",\r
    background: "transparent",\r
    border: "none",\r
    borderRadius: "0",\r
    fontSize: "0.875rem",\r
    color: "var(--bs-body-color, #212529)",\r
    cursor: "pointer",\r
    textAlign: "left" as const,\r
    gap: "0.5rem",\r
  };\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div style="display:flex; gap:1rem; flex-wrap:wrap;">\r
          <Dropdown.Root\r
            onSelect={(d: DropdownSelectDetails) => { lastAction = d.value; m.redraw(); }}\r
          >\r
            <Dropdown.Trigger>File ▾</Dropdown.Trigger>\r
            <Dropdown.Positioner>\r
              <Dropdown.Content>\r
                <Dropdown.Item value="new">📄 新規作成</Dropdown.Item>\r
                <Dropdown.Item value="open">📂 開く</Dropdown.Item>\r
                <Dropdown.Separator />\r
\r
                {/* サブメニュー: 右サイドに配置 */}\r
                <div style="position:relative">\r
                  <Dropdown.Root positioning="right" style={{ display: "block" }}\r
                    onSelect={(d: DropdownSelectDetails) => { lastAction = d.value; m.redraw(); }}\r
                  >\r
                    <Dropdown.Trigger style={itemStyle}>\r
                      <span>💾 エクスポート</span>\r
                      <span style="font-size:0.7rem">▶</span>\r
                    </Dropdown.Trigger>\r
                    <Dropdown.Positioner>\r
                      <Dropdown.Content>\r
                        <Dropdown.Item value="export-pdf">📕 PDF</Dropdown.Item>\r
                        <Dropdown.Item value="export-csv">📊 CSV</Dropdown.Item>\r
                        <Dropdown.Item value="export-json">📋 JSON</Dropdown.Item>\r
                      </Dropdown.Content>\r
                    </Dropdown.Positioner>\r
                  </Dropdown.Root>\r
                </div>\r
\r
                <Dropdown.Separator />\r
                <Dropdown.Item value="close" destructive>✕ 閉じる</Dropdown.Item>\r
              </Dropdown.Content>\r
            </Dropdown.Positioner>\r
          </Dropdown.Root>\r
\r
          <div class="w-100 mt-2 text-muted small">{\`選択した操作: \${lastAction}\`}</div>\r
        </div>\r
      );\r
    }\r
  });\r
}\r
`;function v(d){let a="なし",s=!0,e=!1,r="dark",k="2";i.mount(d,{view(){return i("div",{style:"display:flex; gap:1rem; flex-wrap:wrap;"},i(t.Root,{onSelect:l=>{a=l.value,i.redraw()}},i(t.Trigger,null,"⚙️ Editor Settings ▾"),i(t.Positioner,null,i(t.Content,null,i(t.ItemGroup,{label:"表示"},i(t.CheckboxItem,{value:"preview",checked:s,onCheckedChange:l=>{s=l,i.redraw()}},"プレビュー表示"),i(t.CheckboxItem,{value:"line-numbers",checked:e,onCheckedChange:l=>{e=l,i.redraw()}},"行番号を表示")),i(t.Separator,null),i(t.ItemGroup,{label:"テーマ"},i(t.RadioItemGroup,{value:r,onValueChange:l=>{r=l,i.redraw()}},i(t.RadioItem,{value:"dark"},"🌙 Dark"),i(t.RadioItem,{value:"light"},"☀️ Light"),i(t.RadioItem,{value:"solarized"},"🎨 Solarized"))),i(t.Separator,null),i(t.ItemGroup,{label:"インデント幅"},i(t.RadioItemGroup,{value:k,onValueChange:l=>{k=l,i.redraw()}},i(t.RadioItem,{value:"2"},"2 スペース"),i(t.RadioItem,{value:"4"},"4 スペース"),i(t.RadioItem,{value:"tab"},"タブ"))),i(t.Separator,null),i(t.Item,{value:"reset"},"↩️ 設定をリセット"),i(t.Item,{value:"save"},"💾 設定を保存"),i(t.Separator,null),i(t.Item,{value:"uninstall",destructive:!0},"🗑️ 拡張機能を削除")))),i("div",{style:"font-size:0.8rem; color:#6c757d; padding:0.5rem; background:#f8f9fa; border-radius:0.375rem; border:1px solid #dee2e6;"},i("div",null,"Preview: ",s?"ON":"OFF"," | LineNums: ",e?"ON":"OFF"),i("div",null,"Theme: ",r," | Indent: ",k," spaces"),i("div",null,"Last: ",a)))}})}const b=`/** @jsx m */\r
import m from "mithril";\r
import { Dropdown, type DropdownSelectDetails } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  let lastAction = "なし";\r
  let showPreview = true;\r
  let showLineNumbers = false;\r
  let theme = "dark";\r
  let indent = "2";\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div style="display:flex; gap:1rem; flex-wrap:wrap;">\r
          <Dropdown.Root\r
            onSelect={(d: DropdownSelectDetails) => { lastAction = d.value; m.redraw(); }}\r
          >\r
            <Dropdown.Trigger>⚙️ Editor Settings ▾</Dropdown.Trigger>\r
            <Dropdown.Positioner>\r
              <Dropdown.Content>\r
                {/* 表示設定グループ */}\r
                <Dropdown.ItemGroup label="表示">\r
                  <Dropdown.CheckboxItem value="preview" checked={showPreview}\r
                    onCheckedChange={(c: boolean) => { showPreview = c; m.redraw(); }}>\r
                    プレビュー表示\r
                  </Dropdown.CheckboxItem>\r
                  <Dropdown.CheckboxItem value="line-numbers" checked={showLineNumbers}\r
                    onCheckedChange={(c: boolean) => { showLineNumbers = c; m.redraw(); }}>\r
                    行番号を表示\r
                  </Dropdown.CheckboxItem>\r
                </Dropdown.ItemGroup>\r
\r
                <Dropdown.Separator />\r
\r
                {/* テーマ選択グループ */}\r
                <Dropdown.ItemGroup label="テーマ">\r
                  <Dropdown.RadioItemGroup value={theme}\r
                    onValueChange={(v: string) => { theme = v; m.redraw(); }}>\r
                    <Dropdown.RadioItem value="dark">🌙 Dark</Dropdown.RadioItem>\r
                    <Dropdown.RadioItem value="light">☀️ Light</Dropdown.RadioItem>\r
                    <Dropdown.RadioItem value="solarized">🎨 Solarized</Dropdown.RadioItem>\r
                  </Dropdown.RadioItemGroup>\r
                </Dropdown.ItemGroup>\r
\r
                <Dropdown.Separator />\r
\r
                {/* インデントグループ */}\r
                <Dropdown.ItemGroup label="インデント幅">\r
                  <Dropdown.RadioItemGroup value={indent}\r
                    onValueChange={(v: string) => { indent = v; m.redraw(); }}>\r
                    <Dropdown.RadioItem value="2">2 スペース</Dropdown.RadioItem>\r
                    <Dropdown.RadioItem value="4">4 スペース</Dropdown.RadioItem>\r
                    <Dropdown.RadioItem value="tab">タブ</Dropdown.RadioItem>\r
                  </Dropdown.RadioItemGroup>\r
                </Dropdown.ItemGroup>\r
\r
                <Dropdown.Separator />\r
\r
                {/* アクション */}\r
                <Dropdown.Item value="reset">↩️ 設定をリセット</Dropdown.Item>\r
                <Dropdown.Item value="save">💾 設定を保存</Dropdown.Item>\r
                <Dropdown.Separator />\r
                <Dropdown.Item value="uninstall" destructive>🗑️ 拡張機能を削除</Dropdown.Item>\r
              </Dropdown.Content>\r
            </Dropdown.Positioner>\r
          </Dropdown.Root>\r
\r
          {/* 現在の設定表示 */}\r
          <div style="font-size:0.8rem; color:#6c757d; padding:0.5rem; background:#f8f9fa; border-radius:0.375rem; border:1px solid #dee2e6;">\r
            <div>Preview: {showPreview ? "ON" : "OFF"} | LineNums: {showLineNumbers ? "ON" : "OFF"}</div>\r
            <div>Theme: {theme} | Indent: {indent} spaces</div>\r
            <div>Last: {lastAction}</div>\r
          </div>\r
        </div>\r
      );\r
    }\r
  });\r
}\r
`,f=JSON.parse('{"title":"Dropdown","description":"","frontmatter":{},"headers":[],"relativePath":"Dropdown.md","filePath":"Dropdown.md"}'),I={name:"Dropdown.md"},S=Object.assign(I,{setup(d){return(a,s)=>{const e=g("MithrilDemo");return c(),u("div",null,[s[0]||(s[0]=E("",5)),h(e,{setup:p(m),code:p(w)},null,8,["setup","code"]),s[1]||(s[1]=n("h2",{id:"context-menu-右クリックメニュー",tabindex:"-1"},[o("Context Menu（右クリックメニュー） "),n("a",{class:"header-anchor",href:"#context-menu-右クリックメニュー","aria-label":'Permalink to "Context Menu（右クリックメニュー）"'},"​")],-1)),s[2]||(s[2]=n("p",null,[n("code",null,"Dropdown.ContextTrigger"),o(" でラップした領域を右クリックすると、カーソル位置にメニューが表示されます。"),n("br"),o(" ブラウザのデフォルトコンテキストメニューは抑制されます。")],-1)),h(e,{setup:p(y),code:p(D)},null,8,["setup","code"]),s[3]||(s[3]=n("h2",{id:"submenu-サブメニュー",tabindex:"-1"},[o("Submenu（サブメニュー） "),n("a",{class:"header-anchor",href:"#submenu-サブメニュー","aria-label":'Permalink to "Submenu（サブメニュー）"'},"​")],-1)),s[4]||(s[4]=n("p",null,[n("code",null,'positioning="right"'),o(" を指定した内側の "),n("code",null,"Dropdown.Root"),o(" をメニューアイテムとして配置することで、サブメニューを実現できます。")],-1)),h(e,{setup:p(C),code:p(F)},null,8,["setup","code"]),s[5]||(s[5]=n("h2",{id:"mixed-layout-複合レイアウト",tabindex:"-1"},[o("Mixed Layout（複合レイアウト） "),n("a",{class:"header-anchor",href:"#mixed-layout-複合レイアウト","aria-label":'Permalink to "Mixed Layout（複合レイアウト）"'},"​")],-1)),s[6]||(s[6]=n("p",null,[n("code",null,"ItemGroup"),o("、"),n("code",null,"CheckboxItem"),o("、"),n("code",null,"RadioItemGroup"),o("、"),n("code",null,"Separator"),o(" を組み合わせた複合レイアウトのデモです。")],-1)),h(e,{setup:p(v),code:p(b)},null,8,["setup","code"]),s[7]||(s[7]=E("",22))])}}});export{f as __pageData,S as default};
