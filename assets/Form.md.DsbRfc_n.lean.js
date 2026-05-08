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
`,E=JSON.parse('{"title":"Form","description":"","frontmatter":{},"headers":[],"relativePath":"Form.md","filePath":"Form.md","lastUpdated":1777529825000}'),y={name:"Form.md"},P=Object.assign(y,{setup(i){return(s,t)=>{const r=p("MithrilDemo");return f(),F("div",null,[t[0]||(t[0]=c("",8)),u(r,{setup:d(g),code:d(k)},null,8,["setup","code"]),t[1]||(t[1]=o("h3",{id:"バリデーション付き",tabindex:"-1"},[l("バリデーション付き "),o("a",{class:"header-anchor",href:"#バリデーション付き","aria-label":'Permalink to "バリデーション付き"'},"​")],-1)),t[2]||(t[2]=o("p",null,[o("code",null,"FormItem"),l(" の "),o("code",null,"rules"),l(" で必須・文字数・カスタムバリデーションを設定できます。送信時にすべてのルールを評価し、エラーがあれば "),o("code",null,"is-invalid"),l(" スタイルとエラーメッセージを表示します。")],-1)),u(r,{setup:d(b),code:d(v)},null,8,["setup","code"]),t[3]||(t[3]=c("",10))])}}});export{E as __pageData,P as default};
