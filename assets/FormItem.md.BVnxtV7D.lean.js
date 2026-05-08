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
`,y=JSON.parse('{"title":"FormItem","description":"","frontmatter":{},"headers":[],"relativePath":"FormItem.md","filePath":"FormItem.md","lastUpdated":1777529825000}'),b={name:"FormItem.md"},g=Object.assign(b,{setup(r){return(d,e)=>{const o=m("MithrilDemo");return l(),u("div",null,[e[0]||(e[0]=n("",9)),h(o,{setup:i(p),code:i(f)},null,8,["setup","code"]),e[1]||(e[1]=n("",7))])}}});export{y as __pageData,g as default};
