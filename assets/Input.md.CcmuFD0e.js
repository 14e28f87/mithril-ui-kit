import{m as a}from"./chunks/theme.LBbUWaEz.js";import"./chunks/Table.DnqMepI2.js";import{I as r}from"./chunks/Input.Cgne-MGS.js";import{C as o,o as p,c as h,a4 as t,E as d,k as n}from"./chunks/framework.DuWTyC0X.js";function u(e){let s="mithril-user";a.mount(e,{view(){return a("div",null,a(r,{value:s,placeholder:"ユーザー名を入力",oninput:i=>{s=i,a.redraw()}}),a("div",{class:"mt-2 text-muted small"},`現在値: ${s??"(null)"}`))}})}const c=`/** @jsx m */\r
import m from "mithril";\r
import { Input } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  let value: string | null = "mithril-user";\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div>\r
          <Input\r
            value={value}\r
            placeholder="ユーザー名を入力"\r
            oninput={(v: string | null) => {\r
              value = v;\r
              m.redraw();\r
            }}\r
          />\r
          <div class="mt-2 text-muted small">{\`現在値: \${value ?? "(null)"}\`}</div>\r
        </div>\r
      );\r
    }\r
  });\r
}\r
`,v=JSON.parse('{"title":"Input","description":"","frontmatter":{},"headers":[],"relativePath":"Input.md","filePath":"Input.md","lastUpdated":1776646114000}'),k={name:"Input.md"},f=Object.assign(k,{setup(e){return(s,i)=>{const l=o("MithrilDemo");return p(),h("div",null,[i[0]||(i[0]=t('<h1 id="input" tabindex="-1">Input <a class="header-anchor" href="#input" aria-label="Permalink to &quot;Input&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p>シンプルなテキスト入力コンポーネント。Bootstrap5 の form-control クラスを自動付与。リアルタイム入力値の同期、blur または Enter キー時の確定処理。</p><h2 id="usage-使用例" tabindex="-1">Usage 使用例 <a class="header-anchor" href="#usage-使用例" aria-label="Permalink to &quot;Usage 使用例&quot;">​</a></h2>',4)),d(l,{setup:n(u),code:n(c)},null,8,["setup","code"]),i[1]||(i[1]=t(`<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><ul><li><code>value?: string | null</code> - 入力値</li><li><code>oninput?: (v: string | null) =&gt; void</code> - 入力時のコールバック</li><li><code>placeholder?: string</code> - プレースホルダー</li><li><code>class?: string</code> - 追加 CSS クラス</li><li><code>onblur?: () =&gt; void</code> - フォーカス喪失時のコールバック</li><li><code>type?: string</code> - input タイプ（デフォルト: &quot;text&quot;）</li><li><code>disabled?: boolean</code> - 無効化フラグ</li><li><code>id?: string</code> - input 要素の ID</li></ul><h2 id="使用例" tabindex="-1">使用例 <a class="header-anchor" href="#使用例" aria-label="Permalink to &quot;使用例&quot;">​</a></h2><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Input</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{state.username}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  oninput</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">v</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> state.username </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> v}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  placeholder</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ユーザー名を入力&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div>`,5))])}}});export{v as __pageData,f as default};
