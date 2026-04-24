import{m as t}from"./chunks/theme.LBbUWaEz.js";import{k as s,l as c}from"./chunks/Table.DnqMepI2.js";import{C as i,o as l,c as u,a4 as a,E as p,k as r}from"./chunks/framework.DuWTyC0X.js";const o=s({placement:"top-end",duration:3e3,max:5});function h(d){t.mount(d,{view(){return t("div",{class:"d-grid gap-3"},t("div",{class:"d-flex flex-wrap gap-2"},t("button",{class:"btn btn-outline-success",onclick:()=>{o.success({title:"保存完了",description:"設定を保存しました。"})}},"Success"),t("button",{class:"btn btn-outline-danger",onclick:()=>{o.error({title:"通信失敗",description:"PLC との接続を確認してください。"})}},"Error"),t("button",{class:"btn btn-outline-primary",onclick:()=>{o.create({type:"info",title:"同期中",description:"最新データを取得しています。",action:{label:"閉じる",onClick:()=>{}}})}},"Action")),t("div",{class:"small text-muted"},"createToaster() で作成したトースターを Toast.Toaster に渡して表示します。"),t(c.Toaster,{toaster:o}))}})}const m=`/** @jsx m */
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
}`,x=JSON.parse('{"title":"Toast","description":"","frontmatter":{},"headers":[],"relativePath":"Toast.md","filePath":"Toast.md","lastUpdated":1776664372000}'),b={name:"Toast.md"},P=Object.assign(b,{setup(d){return(T,e)=>{const n=i("MithrilDemo");return l(),u("div",null,[e[0]||(e[0]=a('<h1 id="toast" tabindex="-1">Toast <a class="header-anchor" href="#toast" aria-label="Permalink to &quot;Toast&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>Toast</code> は <code>createToaster()</code> で管理オブジェクトを作成し、<code>Toast.Toaster</code> で描画する命令的トースト通知システムです。現在の API は <code>Toast.show()</code> ではなく、<code>toaster.success()</code> や <code>toaster.create()</code> を使います。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>旧 Promise ベース API（<code>ToastClassic</code>）はレガシー扱いです。このページでは current API を案内します。</p></div><h2 id="usage-使用例" tabindex="-1">Usage 使用例 <a class="header-anchor" href="#usage-使用例" aria-label="Permalink to &quot;Usage 使用例&quot;">​</a></h2><h3 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h3><p><code>createToaster()</code> でトースターを作成し、<code>Toast.Toaster</code> を 1 つ配置して使います。</p>',7)),p(n,{setup:r(h),code:r(m)},null,8,["setup","code"]),e[1]||(e[1]=a('<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="createtoaster-options" tabindex="-1">createToaster Options <a class="header-anchor" href="#createtoaster-options" aria-label="Permalink to &quot;createToaster Options&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>placement</code></td><td><code>&quot;top&quot; | &quot;top-start&quot; | &quot;top-end&quot; | &quot;bottom&quot; | &quot;bottom-start&quot; | &quot;bottom-end&quot;</code></td><td><code>&quot;bottom-end&quot;</code></td><td>表示位置です</td></tr><tr><td><code>duration</code></td><td><code>number</code></td><td><code>5000</code></td><td>自動消去までのミリ秒です。<code>0</code> で無期限表示します</td></tr><tr><td><code>max</code></td><td><code>number</code></td><td><code>24</code></td><td>同時表示の最大件数です</td></tr><tr><td><code>removeDelay</code></td><td><code>number</code></td><td><code>200</code></td><td>閉じアニメーション後に DOM から除去するまでの猶予です</td></tr><tr><td><code>pauseOnHover</code></td><td><code>boolean</code></td><td><code>true</code></td><td>ホバー中にタイマーを一時停止します</td></tr></tbody></table><h3 id="toaster-methods" tabindex="-1">Toaster Methods <a class="header-anchor" href="#toaster-methods" aria-label="Permalink to &quot;Toaster Methods&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody><tr><td><code>create(options)</code></td><td>任意タイプのトーストを作成します</td></tr><tr><td><code>success(options)</code></td><td>成功トーストを作成します</td></tr><tr><td><code>error(options)</code></td><td>エラートーストを作成します</td></tr><tr><td><code>warning(options)</code></td><td>警告トーストを作成します</td></tr><tr><td><code>info(options)</code></td><td>情報トーストを作成します</td></tr><tr><td><code>loading(options)</code></td><td>ローディングトーストを作成します</td></tr><tr><td><code>dismiss(id)</code></td><td>指定 ID のトーストを閉じます</td></tr><tr><td><code>dismissAll()</code></td><td>すべてのトーストを閉じます</td></tr><tr><td><code>update(id, options)</code></td><td>既存トーストの内容を更新します</td></tr></tbody></table><h3 id="toast-subcomponents" tabindex="-1">Toast Subcomponents <a class="header-anchor" href="#toast-subcomponents" aria-label="Permalink to &quot;Toast Subcomponents&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Component</th><th>Description</th></tr></thead><tbody><tr><td><code>Toast.Root</code></td><td>単一トーストのルートです</td></tr><tr><td><code>Toast.Indicator</code></td><td>タイプアイコンです</td></tr><tr><td><code>Toast.Title</code></td><td>タイトル表示です</td></tr><tr><td><code>Toast.Description</code></td><td>本文表示です</td></tr><tr><td><code>Toast.ActionTrigger</code></td><td>アクションボタンです</td></tr><tr><td><code>Toast.CloseTrigger</code></td><td>閉じるボタンです</td></tr><tr><td><code>Toast.Toaster</code></td><td>createToaster の状態を描画する固定位置コンテナです</td></tr></tbody></table>',7))])}}});export{x as __pageData,P as default};
