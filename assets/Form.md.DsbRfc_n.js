import{m as e}from"./chunks/theme.C32Rvu8V.js";import"./chunks/Table.MsshMnDN.js";import{I as m}from"./chunks/Input.zu4cPY0S.js";import{F as h,a}from"./chunks/FormItem.BTTJe24p.js";import{C as p,o as f,c as F,a4 as c,E as u,k as d,j as o,a as l}from"./chunks/framework.DuWTyC0X.js";function g(i){class s{constructor(){this.formRef=new h,this.submitResult="未送信"}view(){const r=this.formRef;return e("div",null,e(r,{layout:"vertical",initialValues:{username:"太郎",email:"taro@example.com"},onFinish:async n=>{this.submitResult=JSON.stringify(n),e.redraw()},onFinishFailed:async()=>{this.submitResult="バリデーションエラー",e.redraw()}},e(a,{name:"username",label:"ユーザー名",rules:[{required:!0,message:"必須入力です"}],formRef:this.formRef},e(m,{placeholder:"ユーザー名を入力"})),e(a,{name:"email",label:"メールアドレス",rules:[{required:!0,message:"必須入力です"}],formRef:this.formRef},e(m,{type:"email",placeholder:"test@example.com"})),e(a,null,e("button",{class:"btn btn-primary",type:"submit"},"送信"))),e("div",{class:"mt-2 text-muted small"},`送信結果: ${this.submitResult}`))}}e.mount(i,new s)}function b(i){class s{constructor(){this.formRef=new h,this.result=""}view(){const r=this.formRef;return e("div",null,e(r,{layout:"vertical",onFinish:n=>{this.result="送信成功: "+JSON.stringify(n),e.redraw()}},e(a,{name:"username",label:"ユーザー名",rules:[{required:!0,message:"ユーザー名は必須です"},{min:3,message:"3文字以上で入力してください"},{max:20,message:"20文字以下で入力してください"}],formRef:this.formRef},e(m,{placeholder:"3〜20文字"})),e(a,{name:"email",label:"メールアドレス",rules:[{required:!0,message:"メールアドレスは必須です"},{validator:n=>{if(n&&!n.includes("@"))throw new Error("有効なメールアドレスを入力してください")}}],formRef:this.formRef},e(m,{type:"email",placeholder:"example@domain.com"})),e(a,null,e("button",{class:"btn btn-primary",type:"submit"},"バリデーション付き送信"))),this.result&&e("div",{class:"mt-2 alert alert-success small"},this.result))}}e.mount(i,new s)}const k=`/** @jsx m */\r
import m from "mithril";\r
import { Form, FormItem, Input } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  class FormDemo implements m.Component {\r
    private formRef = new Form();\r
    private submitResult = "未送信";\r
\r
    public view() {\r
      const ThisFormRef: any = this.formRef;\r
\r
      return (\r
        <div>\r
          <ThisFormRef\r
            layout="vertical"\r
            initialValues={{\r
              username: "太郎",\r
              email: "taro@example.com"\r
            }}\r
            onFinish={async (values: Record<string, any>) => {\r
              this.submitResult = JSON.stringify(values);\r
              m.redraw();\r
            }}\r
            onFinishFailed={async () => {\r
              this.submitResult = "バリデーションエラー";\r
              m.redraw();\r
            }}\r
          >\r
            <FormItem\r
              name="username"\r
              label="ユーザー名"\r
              rules={[{ required: true, message: "必須入力です" }]}\r
              formRef={this.formRef}\r
            >\r
              <Input placeholder="ユーザー名を入力" />\r
            </FormItem>\r
\r
            <FormItem\r
              name="email"\r
              label="メールアドレス"\r
              rules={[{ required: true, message: "必須入力です" }]}\r
              formRef={this.formRef}\r
            >\r
              <Input type="email" placeholder="test@example.com" />\r
            </FormItem>\r
\r
            <FormItem>\r
              <button class="btn btn-primary" type="submit">送信</button>\r
            </FormItem>\r
          </ThisFormRef>\r
\r
          <div class="mt-2 text-muted small">{\`送信結果: \${this.submitResult}\`}</div>\r
        </div>\r
      );\r
    }\r
  }\r
\r
  m.mount(el, new FormDemo());\r
}\r
`,v=`/** @jsx m */\r
import m from "mithril";\r
import { Form, FormItem, Input } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  class ValidationDemo implements m.Component {\r
    private formRef = new Form();\r
    private result = "";\r
\r
    public view() {\r
      const Ref: any = this.formRef;\r
      return (\r
        <div>\r
          <Ref\r
            layout="vertical"\r
            onFinish={(values: Record<string, any>) => {\r
              this.result = "送信成功: " + JSON.stringify(values);\r
              m.redraw();\r
            }}\r
          >\r
            <FormItem\r
              name="username"\r
              label="ユーザー名"\r
              rules={[\r
                { required: true, message: "ユーザー名は必須です" },\r
                { min: 3, message: "3文字以上で入力してください" },\r
                { max: 20, message: "20文字以下で入力してください" },\r
              ]}\r
              formRef={this.formRef}\r
            >\r
              <Input placeholder="3〜20文字" />\r
            </FormItem>\r
            <FormItem\r
              name="email"\r
              label="メールアドレス"\r
              rules={[\r
                { required: true, message: "メールアドレスは必須です" },\r
                {\r
                  validator: (v: string) => {\r
                    if (v && !v.includes("@")) {\r
                      throw new Error("有効なメールアドレスを入力してください");\r
                    }\r
                  },\r
                },\r
              ]}\r
              formRef={this.formRef}\r
            >\r
              <Input type="email" placeholder="example@domain.com" />\r
            </FormItem>\r
            <FormItem>\r
              <button class="btn btn-primary" type="submit">\r
                バリデーション付き送信\r
              </button>\r
            </FormItem>\r
          </Ref>\r
          {this.result && (\r
            <div class="mt-2 alert alert-success small">{this.result}</div>\r
          )}\r
        </div>\r
      );\r
    }\r
  }\r
\r
  m.mount(el, new ValidationDemo());\r
}\r
`,E=JSON.parse('{"title":"Form","description":"","frontmatter":{},"headers":[],"relativePath":"Form.md","filePath":"Form.md","lastUpdated":1777529825000}'),y={name:"Form.md"},P=Object.assign(y,{setup(i){return(s,t)=>{const r=p("MithrilDemo");return f(),F("div",null,[t[0]||(t[0]=c('<h1 id="form" tabindex="-1">Form <a class="header-anchor" href="#form" aria-label="Permalink to &quot;Form&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>Form</code> はフォーム全体の状態を一元管理するコンポーネントです。</p><p>フィールドの登録・解除、入力値の保持、バリデーション実行、送信処理（<code>onFinish</code> / <code>onFinishFailed</code>）を担当します。<code>FormItem</code> と組み合わせることで、宣言的にバリデーション付きフォームを構築できます。</p><div class="tip custom-block"><p class="custom-block-title">インスタンスベースの使い方</p><p><code>Form</code> クラスをインスタンスとして生成し、<code>formRef</code> として保持するのが基本パターンです。JSX 中で直接 <code>&lt;Form&gt;</code> と記述すると render ごとに新しいインスタンスが生成されて状態が失われるため、<strong>必ずコンポーネントのプロパティとして事前に生成</strong>してください。</p></div><h2 id="usage-使用例" tabindex="-1">Usage 使用例 <a class="header-anchor" href="#usage-使用例" aria-label="Permalink to &quot;Usage 使用例&quot;">​</a></h2><h3 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h3><p><code>new Form()</code> でインスタンスを作成し、<code>formRef</code> として <code>FormItem</code> に渡します。<code>onFinish</code> にフォーム値が渡されます。</p>',8)),u(r,{setup:d(g),code:d(k)},null,8,["setup","code"]),t[1]||(t[1]=o("h3",{id:"バリデーション付き",tabindex:"-1"},[l("バリデーション付き "),o("a",{class:"header-anchor",href:"#バリデーション付き","aria-label":'Permalink to "バリデーション付き"'},"​")],-1)),t[2]||(t[2]=o("p",null,[o("code",null,"FormItem"),l(" の "),o("code",null,"rules"),l(" で必須・文字数・カスタムバリデーションを設定できます。送信時にすべてのルールを評価し、エラーがあれば "),o("code",null,"is-invalid"),l(" スタイルとエラーメッセージを表示します。")],-1)),u(r,{setup:d(b),code:d(v)},null,8,["setup","code"]),t[3]||(t[3]=c(`<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="formattrs-props" tabindex="-1">FormAttrs（Props） <a class="header-anchor" href="#formattrs-props" aria-label="Permalink to &quot;FormAttrs（Props）&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>onFinish</code></td><td><code>(values: Record&lt;string, any&gt;) =&gt; void | Promise&lt;void&gt;</code></td><td>—</td><td>検証成功時に呼ばれるコールバック。収集されたフィールド値のオブジェクトを受け取ります</td></tr><tr><td><code>onFinishFailed</code></td><td><code>(errors: { name: string; error: string }[]) =&gt; void | Promise&lt;void&gt;</code></td><td>—</td><td>検証失敗時に呼ばれるコールバック。エラー情報の配列を受け取ります</td></tr><tr><td><code>layout</code></td><td><code>&quot;vertical&quot; | &quot;horizontal&quot;</code></td><td><code>&quot;vertical&quot;</code></td><td>フォームのレイアウト方向</td></tr><tr><td><code>initialValues</code></td><td><code>Record&lt;string, any&gt;</code></td><td>—</td><td>フォーム全体の初期値。キーはフィールド名（<code>FormItem</code> の <code>name</code>）に対応します</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>ルート <code>&lt;form&gt;</code> 要素に付与する追加 CSS クラス</td></tr></tbody></table><h3 id="form-メソッド-公開-api" tabindex="-1">Form メソッド（公開 API） <a class="header-anchor" href="#form-メソッド-公開-api" aria-label="Permalink to &quot;Form メソッド（公開 API）&quot;">​</a></h3><table tabindex="0"><thead><tr><th>メソッド</th><th>シグネチャ</th><th>Description</th></tr></thead><tbody><tr><td><code>registerField</code></td><td><code>(name: string, initialValue?: any) =&gt; void</code></td><td>フィールドを登録します。<code>initialValues</code> から自動的に呼ばれます</td></tr><tr><td><code>unregisterField</code></td><td><code>(name: string) =&gt; void</code></td><td>フィールドの登録を解除します。<code>FormItem</code> のアンマウント時に自動で呼ばれます</td></tr><tr><td><code>setFieldValue</code></td><td><code>(name: string, value: any) =&gt; void</code></td><td>フィールド値をプログラムから更新します</td></tr><tr><td><code>getFieldValue</code></td><td><code>(name: string) =&gt; any</code></td><td>フィールドの現在値を取得します</td></tr><tr><td><code>setFieldError</code></td><td><code>(name: string, error: string | null) =&gt; void</code></td><td>フィールドのエラーメッセージを設定します</td></tr><tr><td><code>validateField</code></td><td><code>(name: string, rules: Rule[]) =&gt; Promise&lt;void&gt;</code></td><td>指定フィールドのバリデーションを実行します</td></tr><tr><td><code>validate</code></td><td><code>() =&gt; Promise&lt;Record&lt;string, any&gt;&gt;</code></td><td>全フィールドのバリデーションを実行し、値を返します</td></tr></tbody></table><h3 id="formstate" tabindex="-1">FormState <a class="header-anchor" href="#formstate" aria-label="Permalink to &quot;FormState&quot;">​</a></h3><p><code>formRef.state.fields</code> は <code>Map&lt;string, FieldState&gt;</code> で、各フィールドの <code>value</code> と <code>error</code> を保持します。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> FieldState</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  error</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h2 id="アクセシビリティ" tabindex="-1">アクセシビリティ <a class="header-anchor" href="#アクセシビリティ" aria-label="Permalink to &quot;アクセシビリティ&quot;">​</a></h2><ul><li><code>&lt;form&gt;</code> 要素にレンダリングされるため、ネイティブの <code>submit</code> イベントが機能します</li><li><code>type=&quot;submit&quot;</code> ボタンを置くだけで送信できます</li><li><code>data-layout</code> 属性でレイアウト方向を管理します</li></ul>`,10))])}}});export{E as __pageData,P as default};
