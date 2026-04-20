import{m as e}from"./chunks/theme.MeAZuU5r.js";import{n as t}from"./chunks/Table.BlGpiJ_h.js";import{C as S,o as g,c as b,ai as m,E as s,k as a,j as d,a as c}from"./chunks/framework.DYURIDHw.js";const p=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"mithril",label:"Mithril"}];function f(n){let o=["react"];e.mount(n,{view(){return e("div",null,e(t.Root,{items:p,value:o,onValueChange:r=>{o=r.value},placeholder:"フレームワークを選択"},e(t.Label,null,"フレームワーク"),e(t.Control,null,e(t.Trigger,null,e(t.ValueText,{placeholder:"フレームワークを選択"}),e(t.IndicatorGroup,null,e(t.ClearTrigger,null),e(t.Indicator,null)))),e(t.Positioner,null,e(t.Content,null,p.map(r=>e(t.Item,{key:r.value,item:r.value},r.label))))),e("div",{class:"mt-2",style:"font-size:0.85rem;color:#6c757d"},"選択値: ",JSON.stringify(o)))}})}const I=`/** @jsx m */\r
import m from "mithril";\r
import { Select } from "mithril-ui-kit";\r
import type { SelectItem } from "mithril-ui-kit";\r
\r
const items: SelectItem[] = [\r
  { value: "react", label: "React" },\r
  { value: "vue", label: "Vue" },\r
  { value: "angular", label: "Angular" },\r
  { value: "svelte", label: "Svelte" },\r
  { value: "mithril", label: "Mithril" },\r
];\r
\r
export function setup(el: HTMLElement): void {\r
  let value: string[] = ["react"];\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div>\r
          <Select.Root\r
            items={items}\r
            value={value}\r
            onValueChange={(d) => { value = d.value; }}\r
            placeholder="フレームワークを選択"\r
          >\r
            <Select.Label>フレームワーク</Select.Label>\r
            <Select.Control>\r
              <Select.Trigger>\r
                <Select.ValueText placeholder="フレームワークを選択" />\r
                <Select.IndicatorGroup>\r
                  <Select.ClearTrigger />\r
                  <Select.Indicator />\r
                </Select.IndicatorGroup>\r
              </Select.Trigger>\r
            </Select.Control>\r
            <Select.Positioner>\r
              <Select.Content>\r
                {items.map(item => (\r
                  <Select.Item key={item.value} item={item.value}>\r
                    {item.label}\r
                  </Select.Item>\r
                ))}\r
              </Select.Content>\r
            </Select.Positioner>\r
          </Select.Root>\r
          <div class="mt-2" style="font-size:0.85rem;color:#6c757d">\r
            選択値: {JSON.stringify(value)}\r
          </div>\r
        </div>\r
      );\r
    },\r
  });\r
}\r
`,h=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"mithril",label:"Mithril"}];function C(n){let o=["react","vue"];e.mount(n,{view(){return e("div",null,e(t.Root,{items:h,value:o,onValueChange:r=>{o=r.value},multiple:!0,placeholder:"複数選択してください"},e(t.Label,null,"フレームワーク（複数選択）"),e(t.Control,null,e(t.Trigger,null,e(t.ValueText,{placeholder:"複数選択してください"}),e(t.IndicatorGroup,null,e(t.ClearTrigger,null),e(t.Indicator,null)))),e(t.Positioner,null,e(t.Content,null,h.map(r=>e(t.Item,{key:r.value,item:r.value},r.label))))),e("div",{class:"mt-2",style:"font-size:0.85rem;color:#6c757d"},"選択値: ",JSON.stringify(o)))}})}const q=`/** @jsx m */\r
import m from "mithril";\r
import { Select } from "mithril-ui-kit";\r
import type { SelectItem } from "mithril-ui-kit";\r
\r
const items: SelectItem[] = [\r
  { value: "react", label: "React" },\r
  { value: "vue", label: "Vue" },\r
  { value: "angular", label: "Angular" },\r
  { value: "svelte", label: "Svelte" },\r
  { value: "mithril", label: "Mithril" },\r
];\r
\r
export function setup(el: HTMLElement): void {\r
  let value: string[] = ["react", "vue"];\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div>\r
          <Select.Root\r
            items={items}\r
            value={value}\r
            onValueChange={(d) => { value = d.value; }}\r
            multiple={true}\r
            placeholder="複数選択してください"\r
          >\r
            <Select.Label>フレームワーク（複数選択）</Select.Label>\r
            <Select.Control>\r
              <Select.Trigger>\r
                <Select.ValueText placeholder="複数選択してください" />\r
                <Select.IndicatorGroup>\r
                  <Select.ClearTrigger />\r
                  <Select.Indicator />\r
                </Select.IndicatorGroup>\r
              </Select.Trigger>\r
            </Select.Control>\r
            <Select.Positioner>\r
              <Select.Content>\r
                {items.map(item => (\r
                  <Select.Item key={item.value} item={item.value}>\r
                    {item.label}\r
                  </Select.Item>\r
                ))}\r
              </Select.Content>\r
            </Select.Positioner>\r
          </Select.Root>\r
          <div class="mt-2" style="font-size:0.85rem;color:#6c757d">\r
            選択値: {JSON.stringify(value)}\r
          </div>\r
        </div>\r
      );\r
    },\r
  });\r
}\r
`,v=[{value:"react",label:"React",group:"Popular"},{value:"vue",label:"Vue",group:"Popular"},{value:"angular",label:"Angular",group:"Popular"},{value:"svelte",label:"Svelte",group:"Others"},{value:"mithril",label:"Mithril",group:"Others"},{value:"preact",label:"Preact",group:"Others"}];function T(n){let o=[];e.mount(n,{view(){const r=new Map;for(const l of v)if(l.group){const i=r.get(l.group)??[];i.push(l),r.set(l.group,i)}return e("div",null,e(t.Root,{items:v,value:o,onValueChange:l=>{o=l.value},placeholder:"グループから選択"},e(t.Label,null,"フレームワーク（グループ）"),e(t.Control,null,e(t.Trigger,null,e(t.ValueText,{placeholder:"グループから選択"}),e(t.IndicatorGroup,null,e(t.ClearTrigger,null),e(t.Indicator,null)))),e(t.Positioner,null,e(t.Content,null,Array.from(r.entries()).map(([l,i])=>e(t.ItemGroup,{key:l},e(t.ItemGroupLabel,null,l),i.map(u=>e(t.Item,{key:u.value,item:u.value},u.label))))))),e("div",{class:"mt-2",style:"font-size:0.85rem;color:#6c757d"},"選択値: ",JSON.stringify(o)))}})}const P=`/** @jsx m */\r
import m from "mithril";\r
import { Select } from "mithril-ui-kit";\r
import type { SelectItem } from "mithril-ui-kit";\r
\r
const items: SelectItem[] = [\r
  { value: "react", label: "React", group: "Popular" },\r
  { value: "vue", label: "Vue", group: "Popular" },\r
  { value: "angular", label: "Angular", group: "Popular" },\r
  { value: "svelte", label: "Svelte", group: "Others" },\r
  { value: "mithril", label: "Mithril", group: "Others" },\r
  { value: "preact", label: "Preact", group: "Others" },\r
];\r
\r
export function setup(el: HTMLElement): void {\r
  let value: string[] = [];\r
\r
  m.mount(el, {\r
    view() {\r
      const groups = new Map<string, SelectItem[]>();\r
      for (const item of items) {\r
        if (item.group) {\r
          const g = groups.get(item.group) ?? [];\r
          g.push(item);\r
          groups.set(item.group, g);\r
        }\r
      }\r
\r
      return (\r
        <div>\r
          <Select.Root\r
            items={items}\r
            value={value}\r
            onValueChange={(d) => { value = d.value; }}\r
            placeholder="グループから選択"\r
          >\r
            <Select.Label>フレームワーク（グループ）</Select.Label>\r
            <Select.Control>\r
              <Select.Trigger>\r
                <Select.ValueText placeholder="グループから選択" />\r
                <Select.IndicatorGroup>\r
                  <Select.ClearTrigger />\r
                  <Select.Indicator />\r
                </Select.IndicatorGroup>\r
              </Select.Trigger>\r
            </Select.Control>\r
            <Select.Positioner>\r
              <Select.Content>\r
                {Array.from(groups.entries()).map(([label, groupItems]) => (\r
                  <Select.ItemGroup key={label}>\r
                    <Select.ItemGroupLabel>{label}</Select.ItemGroupLabel>\r
                    {groupItems.map(item => (\r
                      <Select.Item key={item.value} item={item.value}>\r
                        {item.label}\r
                      </Select.Item>\r
                    ))}\r
                  </Select.ItemGroup>\r
                ))}\r
              </Select.Content>\r
            </Select.Positioner>\r
          </Select.Root>\r
          <div class="mt-2" style="font-size:0.85rem;color:#6c757d">\r
            選択値: {JSON.stringify(value)}\r
          </div>\r
        </div>\r
      );\r
    },\r
  });\r
}\r
`,_=JSON.parse('{"title":"Select","description":"","frontmatter":{},"headers":[],"relativePath":"Select.md","filePath":"Select.md"}'),y={name:"Select.md"},R=Object.assign(y,{setup(n){return(o,r)=>{const l=S("MithrilDemo");return g(),b("div",null,[r[0]||(r[0]=m("",6)),s(l,{setup:a(f),code:a(I)},null,8,["setup","code"]),r[1]||(r[1]=d("h3",{id:"複数選択",tabindex:"-1"},[c("複数選択 "),d("a",{class:"header-anchor",href:"#複数選択","aria-label":'Permalink to "複数選択"'},"​")],-1)),r[2]||(r[2]=d("p",null,[d("code",null,"multiple"),c(" prop で複数選択モードに切り替えます。")],-1)),s(l,{setup:a(C),code:a(q)},null,8,["setup","code"]),r[3]||(r[3]=d("h3",{id:"グループ",tabindex:"-1"},[c("グループ "),d("a",{class:"header-anchor",href:"#グループ","aria-label":'Permalink to "グループ"'},"​")],-1)),r[4]||(r[4]=d("p",null,[d("code",null,"Select.ItemGroup"),c(" と "),d("code",null,"Select.ItemGroupLabel"),c(" を使って項目をグループ化できます。")],-1)),s(l,{setup:a(T),code:a(P)},null,8,["setup","code"]),r[5]||(r[5]=m("",9))])}}});export{_ as __pageData,R as default};
