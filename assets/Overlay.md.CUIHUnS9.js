import{m as s}from"./chunks/theme.C32Rvu8V.js";import{b as o}from"./chunks/Table.MsshMnDN.js";import{C as p,o as d,c as h,a4 as t,E as c,k as r}from"./chunks/framework.DuWTyC0X.js";function k(i){let e=null,a="closed";const n={view(l){return s("div",{class:"card shadow-sm",style:{width:"320px"}},s("div",{class:"card-body"},s("h5",{class:"card-title"},"Overlay Content"),s("p",{class:"card-text"},"Overlay の基盤クラスのデモです。"),s("button",{class:"btn btn-primary",onclick:()=>l.attrs.hide()},"閉じる")))}};s.mount(i,{view(){return s("div",null,s("button",{class:"btn btn-primary",onclick:()=>{e=new o(n,{closeOnEscapeKey:!0,closeOnOutsideClick:!0,hasBackdrop:!0}),e.show(),a="open",s.redraw()}},"Overlayを表示"),s("div",{class:"mt-2 text-muted small"},`状態: ${a}`))}})}const u=`/** @jsx m */\r
import m from "mithril";\r
import { Overlay } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  let overlayRef: Overlay | null = null;\r
  let status = "closed";\r
\r
  const Content: m.Component<any> = {\r
    view(vnode: m.Vnode<any>) {\r
      return (\r
        <div class="card shadow-sm" style={{ width: "320px" }}>\r
          <div class="card-body">\r
            <h5 class="card-title">Overlay Content</h5>\r
            <p class="card-text">Overlay の基盤クラスのデモです。</p>\r
            <button class="btn btn-primary" onclick={() => vnode.attrs.hide()}>閉じる</button>\r
          </div>\r
        </div>\r
      );\r
    }\r
  };\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div>\r
          <button\r
            class="btn btn-primary"\r
            onclick={() => {\r
              overlayRef = new Overlay(Content, {\r
                closeOnEscapeKey: true,\r
                closeOnOutsideClick: true,\r
                hasBackdrop: true\r
              });\r
              overlayRef.show();\r
              status = "open";\r
              m.redraw();\r
            }}\r
          >\r
            Overlayを表示\r
          </button>\r
          <div class="mt-2 text-muted small">{\`状態: \${status}\`}</div>\r
        </div>\r
      );\r
    }\r
  });\r
}\r
`,b=JSON.parse('{"title":"Overlay","description":"","frontmatter":{},"headers":[],"relativePath":"Overlay.md","filePath":"Overlay.md","lastUpdated":1776664372000}'),y={name:"Overlay.md"},O=Object.assign(y,{setup(i){return(e,a)=>{const n=p("MithrilDemo");return d(),h("div",null,[a[0]||(a[0]=t('<h1 id="overlay" tabindex="-1">Overlay <a class="header-anchor" href="#overlay" aria-label="Permalink to &quot;Overlay&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p>オーバーレイコンポーネントの基盤クラス。Modal、Drawer、Toast など、画面上にオーバーレイ表示されるコンポーネントの共通基盤として機能。Mithril コンポーネントをオーバーレイとして表示し、表示・非表示の制御、イベント処理、ライフサイクル管理を行う。</p><h2 id="デモ" tabindex="-1">デモ <a class="header-anchor" href="#デモ" aria-label="Permalink to &quot;デモ&quot;">​</a></h2>',4)),c(n,{setup:r(k),code:r(u)},null,8,["setup","code"]),a[1]||(a[1]=t(`<h2 id="props-overlayoptions" tabindex="-1">Props (OverlayOptions) <a class="header-anchor" href="#props-overlayoptions" aria-label="Permalink to &quot;Props (OverlayOptions)&quot;">​</a></h2><ul><li><code>closeOnEscapeKey?: boolean</code> - Escape キー押下時にオーバーレイを閉じるかどうか（デフォルト: true）</li><li><code>closeOnOutsideClick?: boolean</code> - オーバーレイ外クリック時に閉じるかどうか（デフォルト: false）</li><li><code>hasBackdrop?: boolean</code> - 背景にバックドロップ（半透明の黒い背景）を表示するかどうか（デフォルト: true）</li><li><code>inline?: boolean</code> - インライン表示（document.body に追加せず、返り値として使用）（デフォルト: false）</li></ul><h2 id="使用例" tabindex="-1">使用例 <a class="header-anchor" href="#使用例" aria-label="Permalink to &quot;使用例&quot;">​</a></h2><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Overlay } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;mithril-ui-kit&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> overlay</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Overlay</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ModalComponent, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  closeOnEscapeKey: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  closeOnOutsideClick: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">overlay.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">show</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div>`,4))])}}});export{b as __pageData,O as default};
