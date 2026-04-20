import{m as s}from"./chunks/theme.MeAZuU5r.js";import{O as a}from"./chunks/Table.BlGpiJ_h.js";import{C as h,o as p,c as k,ai as l,E as r,k as d}from"./chunks/framework.DYURIDHw.js";function o(e){let n="未実行";s.mount(e,{view(){return s("div",null,s("div",{class:"d-flex gap-2 flex-wrap mb-3"},s("button",{class:"btn btn-primary btn-sm",onclick:async()=>{n=await a.show({size:"md",placement:"end",content:{view(i){return s(a.Content,null,s(a.Header,null,s(a.Title,null,"メニュー"),s(a.CloseTrigger,null)),s(a.Body,null,s("p",null,"Offcanvas の内容です。"),s("ul",{class:"list-group"},s("li",{class:"list-group-item"},"項目A"),s("li",{class:"list-group-item"},"項目B"))),s(a.Footer,null,s("button",{class:"btn btn-secondary btn-sm",onclick:()=>i.attrs.hide()},"閉じる"),s("button",{class:"btn btn-primary btn-sm",onclick:()=>i.attrs.resolve(!0)},"OK")))}}})?"OK":"閉じた",s.redraw()}},"Offcanvas を開く")),s("div",{class:"d-flex gap-2 flex-wrap mb-3"},["start","end","top","bottom"].map(t=>s("button",{class:"btn btn-outline-secondary btn-sm",onclick:async()=>{await a.show({size:"md",placement:t,content:{view(i){return s(a.Content,null,s(a.Header,null,s(a.Title,null,"placement: ",t),s(a.CloseTrigger,null)),s(a.Body,null,s("p",null,"配置: ",t)))}}}),s.redraw()}},t))),s("div",{class:"mt-2 text-muted small"},`結果: ${n}`))}})}const c=`/** @jsx m */\r
import m from "mithril";\r
import { Offcanvas, type OffcanvasContentInjectedAttrs, type OffcanvasPlacement } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  let result = "未実行";\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div>\r
          {/* 命令的 API: 基本 */}\r
          <div class="d-flex gap-2 flex-wrap mb-3">\r
            <button\r
              class="btn btn-primary btn-sm"\r
              onclick={async () => {\r
                const ok = await Offcanvas.show<boolean>({\r
                  size: "md",\r
                  placement: "end",\r
                  content: {\r
                    view(vnode: m.Vnode<OffcanvasContentInjectedAttrs<boolean>>) {\r
                      return (\r
                        <Offcanvas.Content>\r
                          <Offcanvas.Header>\r
                            <Offcanvas.Title>メニュー</Offcanvas.Title>\r
                            <Offcanvas.CloseTrigger />\r
                          </Offcanvas.Header>\r
                          <Offcanvas.Body>\r
                            <p>Offcanvas の内容です。</p>\r
                            <ul class="list-group">\r
                              <li class="list-group-item">項目A</li>\r
                              <li class="list-group-item">項目B</li>\r
                            </ul>\r
                          </Offcanvas.Body>\r
                          <Offcanvas.Footer>\r
                            <button class="btn btn-secondary btn-sm" onclick={() => vnode.attrs.hide()}>閉じる</button>\r
                            <button class="btn btn-primary btn-sm" onclick={() => vnode.attrs.resolve(true)}>OK</button>\r
                          </Offcanvas.Footer>\r
                        </Offcanvas.Content>\r
                      );\r
                    },\r
                  },\r
                });\r
                result = ok ? "OK" : "閉じた";\r
                m.redraw();\r
              }}\r
            >\r
              Offcanvas を開く\r
            </button>\r
          </div>\r
\r
          {/* 配置バリエーション */}\r
          <div class="d-flex gap-2 flex-wrap mb-3">\r
            {(["start", "end", "top", "bottom"] as OffcanvasPlacement[]).map((p) => (\r
              <button\r
                class="btn btn-outline-secondary btn-sm"\r
                onclick={async () => {\r
                  await Offcanvas.show<boolean>({\r
                    size: "md",\r
                    placement: p,\r
                    content: {\r
                      view(vnode: m.Vnode<OffcanvasContentInjectedAttrs<boolean>>) {\r
                        return (\r
                          <Offcanvas.Content>\r
                            <Offcanvas.Header>\r
                              <Offcanvas.Title>placement: {p}</Offcanvas.Title>\r
                              <Offcanvas.CloseTrigger />\r
                            </Offcanvas.Header>\r
                            <Offcanvas.Body>\r
                              <p>配置: {p}</p>\r
                            </Offcanvas.Body>\r
                          </Offcanvas.Content>\r
                        );\r
                      },\r
                    },\r
                  });\r
                  m.redraw();\r
                }}\r
              >\r
                {p}\r
              </button>\r
            ))}\r
          </div>\r
\r
          <div class="mt-2 text-muted small">{\`結果: \${result}\`}</div>\r
        </div>\r
      );\r
    },\r
  });\r
}\r
`,v=JSON.parse('{"title":"Offcanvas","description":"","frontmatter":{},"headers":[],"relativePath":"Offcanvas.md","filePath":"Offcanvas.md"}'),E={name:"Offcanvas.md"},u=Object.assign(E,{setup(e){return(n,t)=>{const i=h("MithrilDemo");return p(),k("div",null,[t[0]||(t[0]=l('<h1 id="offcanvas" tabindex="-1">Offcanvas <a class="header-anchor" href="#offcanvas" aria-label="Permalink to &quot;Offcanvas&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p>Chakra UI Drawer 風の compound オフキャンバスコンポーネント。<strong>命令的 API</strong>（<code>Offcanvas.show()</code> / <code>Offcanvas2.show()</code>）と<strong>宣言的 API</strong>（JSX compound component）の 2 つの使い方をサポート。</p><blockquote><p><strong>Note:</strong> <code>Offcanvas</code> と <code>Offcanvas2</code> は同一コンポーネントです。<code>Offcanvas2</code> は後方互換のエイリアスとして引き続き使用可能です。<br> レガシーの Bootstrap 5 スタイルオフキャンバス（<code>OffcanvasClassic</code>）は <code>mithril-ui-kit-dev</code> パッケージに移動しました。</p></blockquote><table tabindex="0"><thead><tr><th>特徴</th><th>説明</th></tr></thead><tbody><tr><td>サイズ</td><td><code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>, <code>full</code> の 5 段階</td></tr><tr><td>配置</td><td><code>start</code>, <code>end</code>（デフォルト）, <code>top</code>, <code>bottom</code></td></tr><tr><td>アニメーション</td><td>配置に応じたスライド</td></tr><tr><td>キーボード</td><td>Escape キーで閉じる（デフォルト有効）</td></tr><tr><td>外側クリック</td><td>バックドロップクリックで閉じる（デフォルト有効）</td></tr></tbody></table><h2 id="デモ" tabindex="-1">デモ <a class="header-anchor" href="#デモ" aria-label="Permalink to &quot;デモ&quot;">​</a></h2>',6)),r(i,{setup:d(o),code:d(c)},null,8,["setup","code"]),t[1]||(t[1]=l(`<h2 id="使い方-—-命令的-api-offcanvas-show" tabindex="-1">使い方 — 命令的 API（Offcanvas.show） <a class="header-anchor" href="#使い方-—-命令的-api-offcanvas-show" aria-label="Permalink to &quot;使い方 — 命令的 API（Offcanvas.show）&quot;">​</a></h2><p><code>Offcanvas.show()</code> は Promise を返す。コンテンツコンポーネントには <code>resolve</code> と <code>hide</code> が attrs に注入される。</p><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Offcanvas } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;mithril-ui-kit&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Offcanvas.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">show</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  size: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;md&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  placement: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;end&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  content: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    view</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">vnode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Offcanvas.Content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Offcanvas.Header</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Offcanvas.Title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;メニュー&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Offcanvas.Title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Offcanvas.CloseTrigger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Offcanvas.Header</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Offcanvas.Body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Offcanvas の内容&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Offcanvas.Body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Offcanvas.Footer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onclick</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> vnode.attrs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hide</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()}&gt;閉じる&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onclick</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> vnode.attrs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)}&gt;OK&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Offcanvas.Footer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Offcanvas.Content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true or false</span></span></code></pre></div><h2 id="使い方-—-宣言的-api-jsx-compound-component" tabindex="-1">使い方 — 宣言的 API（JSX Compound Component） <a class="header-anchor" href="#使い方-—-宣言的-api-jsx-compound-component" aria-label="Permalink to &quot;使い方 — 宣言的 API（JSX Compound Component）&quot;">​</a></h2><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Offcanvas } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;mithril-ui-kit&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> open </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// view 内で</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Offcanvas.Root</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  open</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{open}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  onOpenChange</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { open </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> d.open; }}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  size</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;md&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  placement</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;end&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Offcanvas.Trigger</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> asChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;開く&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Offcanvas.Trigger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Offcanvas.Backdrop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Offcanvas.Positioner</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Offcanvas.Content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Offcanvas.Header</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Offcanvas.Title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;メニュー&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Offcanvas.Title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Offcanvas.CloseTrigger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Offcanvas.Header</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Offcanvas.Body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;コンテンツ&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Offcanvas.Body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Offcanvas.Footer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onclick</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { open </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; }}&gt;閉じる&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Offcanvas.Footer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Offcanvas.Content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Offcanvas.Positioner</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Offcanvas.Root</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><h3 id="offcanvasshowoptions" tabindex="-1">OffcanvasShowOptions <a class="header-anchor" href="#offcanvasshowoptions" aria-label="Permalink to &quot;OffcanvasShowOptions&quot;">​</a></h3><p>命令的 API <code>Offcanvas.show(options)</code> に渡すオプション。</p><table tabindex="0"><thead><tr><th>Prop</th><th>型</th><th>デフォルト</th><th>説明</th></tr></thead><tbody><tr><td><code>content</code></td><td><code>m.ComponentTypes</code></td><td><strong>必須</strong></td><td>Offcanvas に表示するコンポーネント</td></tr><tr><td><code>size</code></td><td><code>OffcanvasSize</code></td><td><code>&quot;md&quot;</code></td><td>Offcanvas のサイズ</td></tr><tr><td><code>placement</code></td><td><code>OffcanvasPlacement</code></td><td><code>&quot;end&quot;</code></td><td>表示位置</td></tr><tr><td><code>closeOnEscape</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Escape キーで閉じるか</td></tr><tr><td><code>closeOnInteractOutside</code></td><td><code>boolean</code></td><td><code>true</code></td><td>外側クリックで閉じるか</td></tr></tbody></table><h3 id="offcanvasrootattrs" tabindex="-1">OffcanvasRootAttrs <a class="header-anchor" href="#offcanvasrootattrs" aria-label="Permalink to &quot;OffcanvasRootAttrs&quot;">​</a></h3><p>宣言的 API <code>&lt;Offcanvas.Root&gt;</code> に渡す Props。</p><table tabindex="0"><thead><tr><th>Prop</th><th>型</th><th>デフォルト</th><th>説明</th></tr></thead><tbody><tr><td><code>open</code></td><td><code>boolean</code></td><td><strong>必須</strong></td><td>Offcanvas の開閉状態</td></tr><tr><td><code>onOpenChange</code></td><td><code>(details: OffcanvasOpenChangeDetails) =&gt; void</code></td><td>—</td><td>開閉状態変更コールバック</td></tr><tr><td><code>size</code></td><td><code>OffcanvasSize</code></td><td><code>&quot;md&quot;</code></td><td>サイズ</td></tr><tr><td><code>placement</code></td><td><code>OffcanvasPlacement</code></td><td><code>&quot;end&quot;</code></td><td>配置</td></tr><tr><td><code>closeOnEscape</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Escape キーで閉じるか</td></tr><tr><td><code>closeOnInteractOutside</code></td><td><code>boolean</code></td><td><code>true</code></td><td>外側クリックで閉じるか</td></tr></tbody></table><h2 id="サブコンポーネント" tabindex="-1">サブコンポーネント <a class="header-anchor" href="#サブコンポーネント" aria-label="Permalink to &quot;サブコンポーネント&quot;">​</a></h2><table tabindex="0"><thead><tr><th>コンポーネント</th><th>説明</th></tr></thead><tbody><tr><td><code>Offcanvas.Root</code></td><td>状態管理ルート（宣言的 API）</td></tr><tr><td><code>Offcanvas.Trigger</code></td><td>開くトリガーボタン</td></tr><tr><td><code>Offcanvas.Backdrop</code></td><td>半透明のバックドロップ</td></tr><tr><td><code>Offcanvas.Positioner</code></td><td>Content の配置制御</td></tr><tr><td><code>Offcanvas.Content</code></td><td>Offcanvas のメインコンテナ</td></tr><tr><td><code>Offcanvas.Header</code></td><td>ヘッダー</td></tr><tr><td><code>Offcanvas.Title</code></td><td>タイトル</td></tr><tr><td><code>Offcanvas.Body</code></td><td>ボディ（スクロール可能）</td></tr><tr><td><code>Offcanvas.Footer</code></td><td>フッター</td></tr><tr><td><code>Offcanvas.CloseTrigger</code></td><td>閉じるボタン</td></tr></tbody></table><h2 id="サイズ" tabindex="-1">サイズ <a class="header-anchor" href="#サイズ" aria-label="Permalink to &quot;サイズ&quot;">​</a></h2><table tabindex="0"><thead><tr><th>値</th><th>start/end</th><th>top/bottom</th></tr></thead><tbody><tr><td><code>sm</code></td><td>幅 280px</td><td>高さ 200px</td></tr><tr><td><code>md</code></td><td>幅 380px</td><td>高さ 300px</td></tr><tr><td><code>lg</code></td><td>幅 500px</td><td>高さ 400px</td></tr><tr><td><code>xl</code></td><td>幅 700px</td><td>高さ 500px</td></tr><tr><td><code>full</code></td><td>幅 100%</td><td>高さ 100%</td></tr></tbody></table><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><table tabindex="0"><thead><tr><th>値</th><th>説明</th><th>アニメーション</th></tr></thead><tbody><tr><td><code>start</code></td><td>左から表示</td><td>スライドイン（左）</td></tr><tr><td><code>end</code></td><td>右から表示（デフォルト）</td><td>スライドイン（右）</td></tr><tr><td><code>top</code></td><td>上から表示</td><td>スライドイン（上）</td></tr><tr><td><code>bottom</code></td><td>下から表示</td><td>スライドイン（下）</td></tr><tr><td><code>center</code></td><td>中央に表示</td><td>スケールイン</td></tr></tbody></table>`,18))])}}});export{v as __pageData,u as default};
