import{m as t}from"./chunks/theme.CfoDaTyb.js";import{o as s}from"./chunks/Table.DljJUTvN.js";import{B as l}from"./chunks/Button.CWETKnT1.js";import{C as h,o as k,c as g,a4 as d,E as p,k as r,j as e,a as o}from"./chunks/framework.DuWTyC0X.js";import"./chunks/Button.module.DCnvx4sK.js";function c(a){t.mount(a,{view(){return t(s.Root,{placement:"bottom",size:"sm"},t(s.Trigger,null,"詳細を開く"),t(s.Content,null,t(s.Arrow,null),t(s.Header,null,"Popover"),t(s.Body,null,"補足情報やアクションを含むポップオーバーです。"),t(s.Footer,null,t(s.CloseTrigger,null,"閉じる"))))}})}const E=`/** @jsx m */\r
import m from "mithril";\r
import { Popover } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <Popover.Root placement="bottom" size="sm">\r
          <Popover.Trigger>詳細を開く</Popover.Trigger>\r
          <Popover.Content>\r
            <Popover.Arrow />\r
            <Popover.Header>Popover</Popover.Header>\r
            <Popover.Body>補足情報やアクションを含むポップオーバーです。</Popover.Body>\r
            <Popover.Footer>\r
              <Popover.CloseTrigger>閉じる</Popover.CloseTrigger>\r
            </Popover.Footer>\r
          </Popover.Content>\r
        </Popover.Root>\r
      );\r
    },\r
  });\r
}\r
`;function u(a){t.mount(a,{view(){return t("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"}},t(s.Root,{placement:"bottom",size:"sm"},t(s.Trigger,{asChild:!0},t(l,{variant:"outline",size:"sm"},"詳細を開く")),t(s.Content,null,t(s.Arrow,null),t(s.Header,null,"asChild デモ"),t(s.Body,null,"Popover.Trigger に asChild を指定すると、Button などの カスタム要素をそのままトリガーとして利用できます。"),t(s.Footer,null,t(s.CloseTrigger,{asChild:!0},t(l,{variant:"subtle",size:"xs"},"閉じる"))))),t(s.Root,{placement:"bottom",size:"sm"},t(s.Trigger,null,"開く"),t(s.Content,null,t(s.Header,null,"CloseTrigger asChild"),t(s.Body,null,"CloseTrigger にも asChild が使えます。"),t(s.Footer,null,t(s.CloseTrigger,{asChild:!0},t("button",{style:{border:"none",background:"none",color:"var(--bs-danger, #dc3545)",cursor:"pointer",fontSize:"0.875rem"}},"✕ 閉じる"))))))}})}const C=`/** @jsx m */\r
import m from "mithril";\r
import { Button, Popover } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>\r
          {/* Trigger asChild: Button コンポーネントをトリガーとして使う */}\r
          <Popover.Root placement="bottom" size="sm">\r
            <Popover.Trigger asChild>\r
              <Button variant="outline" size="sm">詳細を開く</Button>\r
            </Popover.Trigger>\r
            <Popover.Content>\r
              <Popover.Arrow />\r
              <Popover.Header>asChild デモ</Popover.Header>\r
              <Popover.Body>\r
                Popover.Trigger に asChild を指定すると、Button などの\r
                カスタム要素をそのままトリガーとして利用できます。\r
              </Popover.Body>\r
              <Popover.Footer>\r
                <Popover.CloseTrigger asChild>\r
                  <Button variant="subtle" size="xs">閉じる</Button>\r
                </Popover.CloseTrigger>\r
              </Popover.Footer>\r
            </Popover.Content>\r
          </Popover.Root>\r
\r
          {/* CloseTrigger asChild のみ */}\r
          <Popover.Root placement="bottom" size="sm">\r
            <Popover.Trigger>開く</Popover.Trigger>\r
            <Popover.Content>\r
              <Popover.Header>CloseTrigger asChild</Popover.Header>\r
              <Popover.Body>\r
                CloseTrigger にも asChild が使えます。\r
              </Popover.Body>\r
              <Popover.Footer>\r
                <Popover.CloseTrigger asChild>\r
                  <button\r
                    style={{\r
                      border: "none",\r
                      background: "none",\r
                      color: "var(--bs-danger, #dc3545)",\r
                      cursor: "pointer",\r
                      fontSize: "0.875rem",\r
                    }}\r
                  >\r
                    ✕ 閉じる\r
                  </button>\r
                </Popover.CloseTrigger>\r
              </Popover.Footer>\r
            </Popover.Content>\r
          </Popover.Root>\r
        </div>\r
      );\r
    },\r
  });\r
}\r
`,q=JSON.parse('{"title":"Popover","description":"","frontmatter":{},"headers":[],"relativePath":"Popover.md","filePath":"Popover.md","lastUpdated":1780886590000}'),y={name:"Popover.md"},T=Object.assign(y,{setup(a){return(v,i)=>{const n=h("MithrilDemo");return k(),g("div",null,[i[0]||(i[0]=d('<h1 id="popover" tabindex="-1">Popover <a class="header-anchor" href="#popover" aria-label="Permalink to &quot;Popover&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>Popover</code> はクリックで開くリッチコンテンツ向けの compound component 型ポップオーバーです。タイトル・ボディ・フッター・閉じるボタンを組み合わせて構造化コンテンツを表示できます。<code>placement</code> で表示方向を指定でき、制御/非制御の両モードに対応しています。</p><h2 id="基本デモ" tabindex="-1">基本デモ <a class="header-anchor" href="#基本デモ" aria-label="Permalink to &quot;基本デモ&quot;">​</a></h2>',4)),p(n,{setup:r(c),code:r(E)},null,8,["setup","code"]),i[1]||(i[1]=e("h2",{id:"aschild-デモ",tabindex:"-1"},[o("asChild デモ "),e("a",{class:"header-anchor",href:"#aschild-デモ","aria-label":'Permalink to "asChild デモ"'},"​")],-1)),i[2]||(i[2]=e("p",null,[e("code",null,"asChild"),o(" を使うと "),e("code",null,"Popover.Trigger"),o(" や "),e("code",null,"Popover.CloseTrigger"),o(" の既定 "),e("code",null,"<button>"),o(" ラッパーを使わず、渡した子要素をそのままトリガーとして利用できます。")],-1)),p(n,{setup:r(u),code:r(C)},null,8,["setup","code"]),i[3]||(i[3]=d(`<h2 id="usage-使用例" tabindex="-1">Usage 使用例 <a class="header-anchor" href="#usage-使用例" aria-label="Permalink to &quot;Usage 使用例&quot;">​</a></h2><h3 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h3><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Popover.Root</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> placement</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bottom&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> size</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;md&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Popover.Trigger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;開く&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Popover.Trigger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Popover.Content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Popover.Arrow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Popover.Header</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;見出し&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Popover.Header</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Popover.Body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;本文&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Popover.Body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Popover.Footer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Popover.CloseTrigger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;閉じる&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Popover.CloseTrigger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Popover.Footer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Popover.Content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Popover.Root</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="aschild-—-カスタム要素をトリガーに使う" tabindex="-1">asChild — カスタム要素をトリガーに使う <a class="header-anchor" href="#aschild-—-カスタム要素をトリガーに使う" aria-label="Permalink to &quot;asChild — カスタム要素をトリガーに使う&quot;">​</a></h3><p><code>asChild</code> を指定すると、子要素に <code>onclick</code> と aria 属性がマージされます。子要素が持つ既存の <code>onclick</code> は保持されます。</p><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Button, Popover } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;mithril-ui-kit&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Trigger を Button コンポーネントに差し替える</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Popover.Root</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> placement</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bottom&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Popover.Trigger</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> asChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> variant</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;outline&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> size</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sm&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;詳細を開く&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Popover.Trigger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Popover.Content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Popover.Header</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;タイトル&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Popover.Header</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Popover.Body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;内容&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Popover.Body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Popover.Footer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Popover.CloseTrigger</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> asChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> variant</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;subtle&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> size</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;閉じる&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Popover.CloseTrigger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Popover.Footer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Popover.Content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Popover.Root</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="popover-root" tabindex="-1">Popover.Root <a class="header-anchor" href="#popover-root" aria-label="Permalink to &quot;Popover.Root&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Prop</th><th>型</th><th>デフォルト</th><th>説明</th></tr></thead><tbody><tr><td><code>open</code></td><td><code>boolean</code></td><td>—</td><td>制御モード: 開閉状態</td></tr><tr><td><code>defaultOpen</code></td><td><code>boolean</code></td><td><code>false</code></td><td>非制御モード: 初期開閉状態</td></tr><tr><td><code>onOpenChange</code></td><td><code>(details: { open: boolean }) =&gt; void</code></td><td>—</td><td>開閉コールバック</td></tr><tr><td><code>placement</code></td><td><code>&quot;top&quot; | &quot;bottom&quot; | &quot;left&quot; | &quot;right&quot;</code></td><td><code>&quot;bottom&quot;</code></td><td>表示方向</td></tr><tr><td><code>size</code></td><td><code>&quot;xs&quot; | &quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;</code></td><td><code>&quot;md&quot;</code></td><td>コンテンツサイズ</td></tr><tr><td><code>closeOnEscape</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Escape キーで閉じる</td></tr><tr><td><code>closeOnInteractOutside</code></td><td><code>boolean</code></td><td><code>true</code></td><td>外部クリックで閉じる</td></tr><tr><td><code>autoFocus</code></td><td><code>boolean</code></td><td>—</td><td>オートフォーカス有効</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>ルート要素の追加クラス</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt;</code></td><td>—</td><td>ルート要素のインラインスタイル</td></tr></tbody></table><h3 id="popover-trigger" tabindex="-1">Popover.Trigger <a class="header-anchor" href="#popover-trigger" aria-label="Permalink to &quot;Popover.Trigger&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Prop</th><th>型</th><th>デフォルト</th><th>説明</th></tr></thead><tbody><tr><td><code>asChild</code></td><td><code>boolean</code></td><td><code>false</code></td><td>子要素をそのままトリガーとして使う。<code>onclick</code>・aria 属性がマージされる</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>追加クラス（<code>asChild=false</code> 時のみ適用）</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt;</code></td><td>—</td><td>インラインスタイル（<code>asChild=false</code> 時のみ適用）</td></tr></tbody></table><h3 id="popover-content" tabindex="-1">Popover.Content <a class="header-anchor" href="#popover-content" aria-label="Permalink to &quot;Popover.Content&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Prop</th><th>型</th><th>デフォルト</th><th>説明</th></tr></thead><tbody><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>コンテンツ要素の追加クラス</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt;</code></td><td>—</td><td>インラインスタイル</td></tr></tbody></table><h3 id="popover-header-popover-body-popover-title-popover-footer" tabindex="-1">Popover.Header / Popover.Body / Popover.Title / Popover.Footer <a class="header-anchor" href="#popover-header-popover-body-popover-title-popover-footer" aria-label="Permalink to &quot;Popover.Header / Popover.Body / Popover.Title / Popover.Footer&quot;">​</a></h3><p>各パートは <code>class</code> と <code>style</code> を受け付けます。</p><h3 id="popover-closetrigger" tabindex="-1">Popover.CloseTrigger <a class="header-anchor" href="#popover-closetrigger" aria-label="Permalink to &quot;Popover.CloseTrigger&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Prop</th><th>型</th><th>デフォルト</th><th>説明</th></tr></thead><tbody><tr><td><code>asChild</code></td><td><code>boolean</code></td><td><code>false</code></td><td>子要素をそのままトリガーとして使う。<code>onclick</code> がマージされる</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>追加クラス（<code>asChild=false</code> 時のみ適用）</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt;</code></td><td>—</td><td>インラインスタイル（<code>asChild=false</code> 時のみ適用）</td></tr></tbody></table><h3 id="popover-arrow" tabindex="-1">Popover.Arrow <a class="header-anchor" href="#popover-arrow" aria-label="Permalink to &quot;Popover.Arrow&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Prop</th><th>型</th><th>デフォルト</th><th>説明</th></tr></thead><tbody><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>追加クラス</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt;</code></td><td>—</td><td>インラインスタイル</td></tr></tbody></table>`,19))])}}});export{q as __pageData,T as default};
