import{m as t}from"./chunks/theme.C32Rvu8V.js";import"./chunks/Table.MsshMnDN.js";import{I as s}from"./chunks/Input.zu4cPY0S.js";import{F as c,a}from"./chunks/FormItem.BTTJe24p.js";import{C as m,o as l,c as u,a4 as n,E as h,k as i}from"./chunks/framework.DuWTyC0X.js";function p(r){class d{constructor(){this.formRef=new c,this.status="未検証"}view(){const o=this.formRef;return t("div",null,t(o,{layout:"vertical",initialValues:{password:""},onFinish:async()=>{this.status="検証OK",t.redraw()},onFinishFailed:async()=>{this.status="検証NG",t.redraw()}},t(a,{name:"password",label:"パスワード",rules:[{required:!0,message:"パスワードは必須です"},{min:8,message:"8文字以上で入力してください"}],formRef:this.formRef},t(s,{type:"password",placeholder:"8文字以上"})),t(a,null,t("button",{class:"btn btn-primary",type:"submit"},"検証する"))),t("div",{class:"mt-2 text-muted small"},`状態: ${this.status}`))}}t.mount(r,new d)}const f=`/** @jsx m */\r
import m from "mithril";\r
import { Form, FormItem, Input } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  class FormItemDemo implements m.Component {\r
    private formRef = new Form();\r
    private status = "未検証";\r
\r
    public view() {\r
      const ThisFormRef: any = this.formRef;\r
\r
      return (\r
        <div>\r
          <ThisFormRef\r
            layout="vertical"\r
            initialValues={{\r
              password: ""\r
            }}\r
            onFinish={async () => {\r
              this.status = "検証OK";\r
              m.redraw();\r
            }}\r
            onFinishFailed={async () => {\r
              this.status = "検証NG";\r
              m.redraw();\r
            }}\r
          >\r
            <FormItem\r
              name="password"\r
              label="パスワード"\r
              rules={[\r
                { required: true, message: "パスワードは必須です" },\r
                { min: 8, message: "8文字以上で入力してください" }\r
              ]}\r
              formRef={this.formRef}\r
            >\r
              <Input type="password" placeholder="8文字以上" />\r
            </FormItem>\r
\r
            <FormItem>\r
              <button class="btn btn-primary" type="submit">検証する</button>\r
            </FormItem>\r
          </ThisFormRef>\r
\r
          <div class="mt-2 text-muted small">{\`状態: \${this.status}\`}</div>\r
        </div>\r
      );\r
    }\r
  }\r
\r
  m.mount(el, new FormItemDemo());\r
}\r
`,y=JSON.parse('{"title":"FormItem","description":"","frontmatter":{},"headers":[],"relativePath":"FormItem.md","filePath":"FormItem.md","lastUpdated":1777529825000}'),b={name:"FormItem.md"},g=Object.assign(b,{setup(r){return(d,e)=>{const o=m("MithrilDemo");return l(),u("div",null,[e[0]||(e[0]=n('<h1 id="formitem" tabindex="-1">FormItem <a class="header-anchor" href="#formitem" aria-label="Permalink to &quot;FormItem&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>FormItem</code> は <code>Form</code> と子コンポーネント（<code>Input</code> など）を仲介するコンポーネントです。</p><p>フィールドの登録・解除、子コンポーネントへの <code>value</code> / <code>oninput</code> / <code>onblur</code> の自動注入、<code>is-invalid</code> クラスの付与、エラーメッセージの表示を担当します。<code>rules</code> を設定することでインライン・バリデーションが機能します。</p><p>サブコンポーネントは以下で構成されます:</p><ul><li><code>FormItem</code> — ラベル・エラーメッセージを含む <code>&lt;div class=&quot;mb-3&quot;&gt;</code> のラッパー</li></ul><h2 id="usage-使用例" tabindex="-1">Usage 使用例 <a class="header-anchor" href="#usage-使用例" aria-label="Permalink to &quot;Usage 使用例&quot;">​</a></h2><h3 id="バリデーション" tabindex="-1">バリデーション <a class="header-anchor" href="#バリデーション" aria-label="Permalink to &quot;バリデーション&quot;">​</a></h3><p><code>rules</code> に <code>required</code> / <code>min</code> / <code>max</code> / <code>validator</code> を組み合わせてバリデーションを定義できます。</p>',9)),h(o,{setup:i(p),code:i(f)},null,8,["setup","code"]),e[1]||(e[1]=n('<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="formitemattrs-props" tabindex="-1">FormItemAttrs（Props） <a class="header-anchor" href="#formitemattrs-props" aria-label="Permalink to &quot;FormItemAttrs（Props）&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>name</code></td><td><code>string</code></td><td>—</td><td>フィールド名。<code>Form</code> へのフィールド登録キーです。フォーム連携には必須です</td></tr><tr><td><code>label</code></td><td><code>string</code></td><td>—</td><td>ラベル文字列。<code>&lt;label class=&quot;form-label&quot;&gt;</code> として描画されます</td></tr><tr><td><code>rules</code></td><td><code>Rule[]</code></td><td>—</td><td>バリデーションルールの配列。<code>oninput</code> / <code>onblur</code> / フォーム送信時に評価されます</td></tr><tr><td><code>initialValue</code></td><td><code>any</code></td><td>—</td><td>このフィールドの初期値。<code>Form</code> の <code>initialValues</code> で一括指定するほうを推奨します</td></tr><tr><td><code>formRef</code></td><td><code>Form</code></td><td>—</td><td>親の <code>Form</code> インスタンスへの参照。フォーム連携には必須です</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>ラッパー要素に付与する追加 CSS クラス</td></tr></tbody></table><h3 id="rule" tabindex="-1">Rule <a class="header-anchor" href="#rule" aria-label="Permalink to &quot;Rule&quot;">​</a></h3><table tabindex="0"><thead><tr><th>プロパティ</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>required</code></td><td><code>boolean</code></td><td>必須入力。値が空の場合にエラーを出します</td></tr><tr><td><code>min</code></td><td><code>number</code></td><td>最小文字数（または最小値）。入力が <code>min</code> 未満のときエラーを出します</td></tr><tr><td><code>max</code></td><td><code>number</code></td><td>最大文字数（または最大値）。入力が <code>max</code> を超えるときエラーを出します</td></tr><tr><td><code>message</code></td><td><code>string</code></td><td>エラー発生時に表示するカスタムメッセージ</td></tr><tr><td><code>validator</code></td><td><code>(value: any) =&gt; void | Promise&lt;void&gt;</code></td><td>カスタムバリデータ関数。エラーにするときは例外をスローします</td></tr></tbody></table><h2 id="アクセシビリティ" tabindex="-1">アクセシビリティ <a class="header-anchor" href="#アクセシビリティ" aria-label="Permalink to &quot;アクセシビリティ&quot;">​</a></h2><ul><li>エラーメッセージは <code>&lt;div class=&quot;invalid-feedback&quot;&gt;</code> に <code>display: block</code> で表示されます</li><li><code>is-invalid</code> クラスが子コンポーネントに自動付与されます（Bootstrap の赤枠スタイルが適用されます）</li><li>ラベルと入力要素の関連付けは <code>Input</code> 側の <code>id</code> を手動で指定することで行えます</li></ul>',7))])}}});export{y as __pageData,g as default};
