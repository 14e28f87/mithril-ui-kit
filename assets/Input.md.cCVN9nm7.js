import{m as t}from"./chunks/theme.C32Rvu8V.js";import"./chunks/Table.MsshMnDN.js";import{I as l}from"./chunks/Input.zu4cPY0S.js";import{C as u,o as p,c as m,a4 as i,E as c,k as a,j as r,a as n}from"./chunks/framework.DuWTyC0X.js";function h(o){let d="mithril-user";t.mount(o,{view(){return t("div",null,t(l,{value:d,placeholder:"ユーザー名を入力",oninput:e=>{d=e,t.redraw()}}),t("div",{class:"mt-2 text-muted small"},`現在値: ${d??"(null)"}`))}})}function v(o){const d={text:"",password:""};t.mount(o,{view(){return t("div",{class:"d-flex flex-column gap-3"},t("div",null,t("label",{class:"form-label"},"text（通常）"),t(l,{value:d.text,placeholder:"テキストを入力",oninput:e=>{d.text=e??"",t.redraw()}})),t("div",null,t("label",{class:"form-label"},"password"),t(l,{type:"password",value:d.password,placeholder:"パスワードを入力",oninput:e=>{d.password=e??"",t.redraw()}})),t("div",null,t("label",{class:"form-label"},"disabled"),t(l,{value:"編集不可の固定値",disabled:!0})),t("div",{class:"text-muted small"},`text: "${d.text}" / password: "${d.password}"`))}})}const b=`/** @jsx m */\r
import m from "mithril";\r
import { Input } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  let value: string | null = "mithril-user";\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div>\r
          <Input\r
            value={value}\r
            placeholder="ユーザー名を入力"\r
            oninput={(v: string | null) => {\r
              value = v;\r
              m.redraw();\r
            }}\r
          />\r
          <div class="mt-2 text-muted small">{\`現在値: \${value ?? "(null)"}\`}</div>\r
        </div>\r
      );\r
    }\r
  });\r
}\r
`,f=`/** @jsx m */\r
import m from "mithril";\r
import { Input } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  const state = { text: "", password: "" };\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div class="d-flex flex-column gap-3">\r
          <div>\r
            <label class="form-label">text（通常）</label>\r
            <Input\r
              value={state.text}\r
              placeholder="テキストを入力"\r
              oninput={(v) => {\r
                state.text = v ?? "";\r
                m.redraw();\r
              }}\r
            />\r
          </div>\r
          <div>\r
            <label class="form-label">password</label>\r
            <Input\r
              type="password"\r
              value={state.password}\r
              placeholder="パスワードを入力"\r
              oninput={(v) => {\r
                state.password = v ?? "";\r
                m.redraw();\r
              }}\r
            />\r
          </div>\r
          <div>\r
            <label class="form-label">disabled</label>\r
            <Input value="編集不可の固定値" disabled={true} />\r
          </div>\r
          <div class="text-muted small">\r
            {\`text: "\${state.text}" / password: "\${state.password}"\`}\r
          </div>\r
        </div>\r
      );\r
    },\r
  });\r
}\r
`,P=JSON.parse('{"title":"Input","description":"","frontmatter":{},"headers":[],"relativePath":"Input.md","filePath":"Input.md","lastUpdated":1777529825000}'),x={name:"Input.md"},g=Object.assign(x,{setup(o){return(d,e)=>{const s=u("MithrilDemo");return p(),m("div",null,[e[0]||(e[0]=i('<h1 id="input" tabindex="-1">Input <a class="header-anchor" href="#input" aria-label="Permalink to &quot;Input&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>Input</code> はシンプルなテキスト入力コンポーネントです。</p><p>Bootstrap 5 の <code>form-control</code> クラスを自動付与します。リアルタイムの入力値同期と、<code>blur</code> または <code>Enter</code> キー時の値確定処理を内蔵しています。<code>FormItem</code> と組み合わせると <code>value</code> / <code>oninput</code> / <code>onblur</code> が自動注入され、バリデーション連携が機能します。</p><h2 id="usage-使用例" tabindex="-1">Usage 使用例 <a class="header-anchor" href="#usage-使用例" aria-label="Permalink to &quot;Usage 使用例&quot;">​</a></h2><h3 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h3>',6)),c(s,{setup:a(h),code:a(b)},null,8,["setup","code"]),e[1]||(e[1]=r("h3",{id:"タイプ-状態",tabindex:"-1"},[n("タイプ / 状態 "),r("a",{class:"header-anchor",href:"#タイプ-状態","aria-label":'Permalink to "タイプ / 状態"'},"​")],-1)),e[2]||(e[2]=r("p",null,[r("code",null,"type"),n(" で "),r("code",null,"password"),n(" など HTML 標準の input type を指定できます。"),r("code",null,"disabled"),n(" で無効化できます。")],-1)),c(s,{setup:a(v),code:a(f)},null,8,["setup","code"]),e[3]||(e[3]=i('<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="inputattrs-props" tabindex="-1">InputAttrs（Props） <a class="header-anchor" href="#inputattrs-props" aria-label="Permalink to &quot;InputAttrs（Props）&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>value</code></td><td><code>string | null</code></td><td>—</td><td>入力値。<code>null</code> を渡すと空文字として扱います</td></tr><tr><td><code>oninput</code></td><td><code>(v: string | null) =&gt; void</code></td><td>—</td><td>入力時のコールバック。空文字のときは <code>null</code> を渡します</td></tr><tr><td><code>placeholder</code></td><td><code>string</code></td><td>—</td><td>プレースホルダーテキスト</td></tr><tr><td><code>type</code></td><td><code>string</code></td><td><code>&quot;text&quot;</code></td><td>HTML input の type 属性（<code>&quot;text&quot;</code>, <code>&quot;password&quot;</code>, <code>&quot;email&quot;</code> など）</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>入力を無効化します</td></tr><tr><td><code>id</code></td><td><code>string</code></td><td>—</td><td>input 要素の <code>id</code> 属性。<code>FormItem</code> の <code>label</code> と関連付けるときに使います</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>追加 CSS クラス。<code>FormItem</code> から <code>is-invalid</code> が自動付与されます</td></tr><tr><td><code>onblur</code></td><td><code>() =&gt; void</code></td><td>—</td><td>フォーカスが外れたときのコールバック</td></tr></tbody></table><h2 id="アクセシビリティ" tabindex="-1">アクセシビリティ <a class="header-anchor" href="#アクセシビリティ" aria-label="Permalink to &quot;アクセシビリティ&quot;">​</a></h2><ul><li><code>Enter</code> キーで入力値が確定されます（<code>oninput</code> コールバックが呼ばれます）</li><li><code>blur</code> 時にも末尾の空白をトリムして値を確定します</li><li><code>FormItem</code> と組み合わせると <code>is-invalid</code> クラスが自動付与され、Bootstrap のエラースタイルが適用されます</li></ul>',5))])}}});export{P as __pageData,g as default};
