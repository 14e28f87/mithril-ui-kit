import{m as s}from"./chunks/theme.IYrj4rtN.js";import"./chunks/Table.BA6US4RP.js";import{I as p}from"./chunks/Input.B4sP6t8G.js";import{F as e,a as t}from"./chunks/FormItem.pkj8UJen.js";import{C as r,o as E,c as d,ai as h,E as o,k}from"./chunks/framework.Bm_aoSIc.js";const F="/mithril-ui-kit/assets/formitem-overview.drawio.C81WaAxb.svg";function g(n){class l{constructor(){this.formRef=new e,this.status="未検証"}view(){const a=this.formRef;return s("div",null,s(a,{layout:"vertical",initialValues:{password:""},onFinish:async()=>{this.status="検証OK",s.redraw()},onFinishFailed:async()=>{this.status="検証NG",s.redraw()}},s(t,{name:"password",label:"パスワード",rules:[{required:!0,message:"パスワードは必須です"},{min:8,message:"8文字以上で入力してください"}],formRef:this.formRef},s(p,{type:"password",placeholder:"8文字以上"})),s(t,null,s("button",{class:"btn btn-primary",type:"submit"},"検証する"))),s("div",{class:"mt-2 text-muted small"},`状態: ${this.status}`))}}s.mount(n,new l)}const y=`/** @jsx m */\r
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
`,q=JSON.parse('{"title":"FormItem","description":"","frontmatter":{},"headers":[],"relativePath":"FormItem.md","filePath":"FormItem.md"}'),m={name:"FormItem.md"},b=Object.assign(m,{setup(n){return(l,i)=>{const a=r("MithrilDemo");return E(),d("div",null,[i[0]||(i[0]=h("",5)),o(a,{setup:k(g),code:k(y)},null,8,["setup","code"]),i[1]||(i[1]=h("",25))])}}});export{q as __pageData,b as default};
