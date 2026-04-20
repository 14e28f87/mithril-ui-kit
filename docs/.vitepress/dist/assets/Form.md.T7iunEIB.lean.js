import{m as s}from"./chunks/theme.XnzwSjk8.js";import"./chunks/Table.B_fZamCg.js";import{I as t}from"./chunks/Input.BiqZ57At.js";import{F as r,a as n}from"./chunks/FormItem.BfllAa8a.js";import{C as E,o as d,c as g,ai as k,E as F,k as p}from"./chunks/framework.Bm_aoSIc.js";function o(l){class h{constructor(){this.formRef=new r,this.submitResult="未送信"}view(){const a=this.formRef;return s("div",null,s(a,{layout:"vertical",initialValues:{username:"太郎",email:"taro@example.com"},onFinish:async e=>{this.submitResult=JSON.stringify(e),s.redraw()},onFinishFailed:async()=>{this.submitResult="バリデーションエラー",s.redraw()}},s(n,{name:"username",label:"ユーザー名",rules:[{required:!0,message:"必須入力です"}],formRef:this.formRef},s(t,{placeholder:"ユーザー名を入力"})),s(n,{name:"email",label:"メールアドレス",rules:[{required:!0,message:"必須入力です"}],formRef:this.formRef},s(t,{type:"email",placeholder:"test@example.com"})),s(n,null,s("button",{class:"btn btn-primary",type:"submit"},"送信"))),s("div",{class:"mt-2 text-muted small"},`送信結果: ${this.submitResult}`))}}s.mount(l,new h)}const y=`/** @jsx m */\r
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
`,A=JSON.parse('{"title":"Form","description":"","frontmatter":{},"headers":[],"relativePath":"Form.md","filePath":"Form.md"}'),m={name:"Form.md"},D=Object.assign(m,{setup(l){return(h,i)=>{const a=E("MithrilDemo");return d(),g("div",null,[i[0]||(i[0]=k("",4)),F(a,{setup:p(o),code:p(y)},null,8,["setup","code"]),i[1]||(i[1]=k("",29))])}}});export{A as __pageData,D as default};
