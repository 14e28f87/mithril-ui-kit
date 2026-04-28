import{m as s}from"./chunks/theme.BHMR1ScI.js";import{P as i}from"./chunks/Table.DpkFVNUa.js";import{C as r,o as l,c as p,a4 as a,E as h,k as o}from"./chunks/framework.DuWTyC0X.js";function k(t){s.mount(t,{view(){return s(i.Root,{placement:"bottom",size:"sm"},s(i.Trigger,null,"詳細を開く"),s(i.Content,null,s(i.Arrow,null),s(i.Header,null,"Popover2"),s(i.Body,null,"補足情報やアクションを含むポップオーバーです。"),s(i.Footer,null,s(i.CloseTrigger,null,"閉じる"))))}})}const d=`/** @jsx m */\r
import m from "mithril";\r
import { Popover2 } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <Popover2.Root placement="bottom" size="sm">\r
          <Popover2.Trigger>詳細を開く</Popover2.Trigger>\r
          <Popover2.Content>\r
            <Popover2.Arrow />\r
            <Popover2.Header>Popover2</Popover2.Header>\r
            <Popover2.Body>補足情報やアクションを含むポップオーバーです。</Popover2.Body>\r
            <Popover2.Footer>\r
              <Popover2.CloseTrigger>閉じる</Popover2.CloseTrigger>\r
            </Popover2.Footer>\r
          </Popover2.Content>\r
        </Popover2.Root>\r
      );\r
    },\r
  });\r
}\r
`,v=JSON.parse('{"title":"Popover","description":"","frontmatter":{},"headers":[],"relativePath":"Popover.md","filePath":"Popover.md","lastUpdated":1776836643000}'),E={name:"Popover.md"},C=Object.assign(E,{setup(t){return(g,e)=>{const n=r("MithrilDemo");return l(),p("div",null,[e[0]||(e[0]=a('<h1 id="popover" tabindex="-1">Popover <a class="header-anchor" href="#popover" aria-label="Permalink to &quot;Popover&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>Popover</code> はクリックで開くリッチコンテンツ向けのポップオーバーです。</p><h2 id="デモ" tabindex="-1">デモ <a class="header-anchor" href="#デモ" aria-label="Permalink to &quot;デモ&quot;">​</a></h2>',4)),h(n,{setup:o(k),code:o(d)},null,8,["setup","code"]),e[1]||(e[1]=a(`<h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><ul><li><code>open?</code> / <code>defaultOpen?</code> - 制御 / 非制御の開閉状態</li><li><code>onOpenChange?</code> - 開閉コールバック</li><li><code>placement?: &quot;top&quot; | &quot;bottom&quot; | &quot;left&quot; | &quot;right&quot;</code></li><li><code>size?: &quot;xs&quot; | &quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;</code></li><li><code>closeOnEscape?</code>, <code>closeOnInteractOutside?</code>, <code>autoFocus?</code></li></ul><h2 id="使用例" tabindex="-1">使用例 <a class="header-anchor" href="#使用例" aria-label="Permalink to &quot;使用例&quot;">​</a></h2><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Popover.Root</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> placement</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bottom&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Popover.Trigger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;開く&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Popover.Trigger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Popover.Content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Popover.Header</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;見出し&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Popover.Header</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Popover.Body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;本文&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Popover.Body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Popover.Footer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Popover.CloseTrigger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;閉じる&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Popover.CloseTrigger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Popover.Footer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Popover.Content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Popover.Root</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,4))])}}});export{v as __pageData,C as default};
