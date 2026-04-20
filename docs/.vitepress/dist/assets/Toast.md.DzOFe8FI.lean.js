import{m as t}from"./chunks/theme.IYrj4rtN.js";import{w as s,x as c}from"./chunks/Table.BA6US4RP.js";import{C as i,o as l,c as u,ai as a,E as p,k as r}from"./chunks/framework.Bm_aoSIc.js";const o=s({placement:"top-end",duration:3e3,max:5});function h(d){t.mount(d,{view(){return t("div",{class:"d-grid gap-3"},t("div",{class:"d-flex flex-wrap gap-2"},t("button",{class:"btn btn-outline-success",onclick:()=>{o.success({title:"保存完了",description:"設定を保存しました。"})}},"Success"),t("button",{class:"btn btn-outline-danger",onclick:()=>{o.error({title:"通信失敗",description:"PLC との接続を確認してください。"})}},"Error"),t("button",{class:"btn btn-outline-primary",onclick:()=>{o.create({type:"info",title:"同期中",description:"最新データを取得しています。",action:{label:"閉じる",onClick:()=>{}}})}},"Action")),t("div",{class:"small text-muted"},"createToaster() で作成したトースターを Toast.Toaster に渡して表示します。"),t(c.Toaster,{toaster:o}))}})}const m=`/** @jsx m */
/** @jsxRuntime classic */
import m from "mithril";
import { Toast, createToaster } from "mithril-ui-kit";

const toaster = createToaster({ placement: "top-end", duration: 3000, max: 5 });

export function setup(el: HTMLElement): void {
  m.mount(el, {
    view() {
      return (
        <div class="d-grid gap-3">
          <div class="d-flex flex-wrap gap-2">
            <button
              class="btn btn-outline-success"
              onclick={() => {
                toaster.success({
                  title: "保存完了",
                  description: "設定を保存しました。"
                });
              }}
            >
              Success
            </button>

            <button
              class="btn btn-outline-danger"
              onclick={() => {
                toaster.error({
                  title: "通信失敗",
                  description: "PLC との接続を確認してください。"
                });
              }}
            >
              Error
            </button>

            <button
              class="btn btn-outline-primary"
              onclick={() => {
                toaster.create({
                  type: "info",
                  title: "同期中",
                  description: "最新データを取得しています。",
                  action: {
                    label: "閉じる",
                    onClick: () => {}
                  }
                });
              }}
            >
              Action
            </button>
          </div>

          <div class="small text-muted">
            createToaster() で作成したトースターを Toast.Toaster に渡して表示します。
          </div>

          <Toast.Toaster toaster={toaster} />
        </div>
      );
    }
  });
}`,x=JSON.parse('{"title":"Toast","description":"","frontmatter":{},"headers":[],"relativePath":"Toast.md","filePath":"Toast.md"}'),b={name:"Toast.md"},P=Object.assign(b,{setup(d){return(T,e)=>{const n=i("MithrilDemo");return l(),u("div",null,[e[0]||(e[0]=a("",7)),p(n,{setup:r(h),code:r(m)},null,8,["setup","code"]),e[1]||(e[1]=a("",7))])}}});export{x as __pageData,P as default};
