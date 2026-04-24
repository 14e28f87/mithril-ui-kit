import{m as s}from"./chunks/theme.LBbUWaEz.js";import{M as t}from"./chunks/Table.DnqMepI2.js";import{C as h,o,c as r,a4 as l,E as k,k as e}from"./chunks/framework.DuWTyC0X.js";function p(d){let n="未実行";s.mount(d,{view(){return s("div",null,s("div",{class:"d-flex flex-wrap gap-2 mb-2"},s("button",{class:"btn btn-primary btn-sm",onclick:async()=>{n=await t.show({size:"md",placement:"top",content:{view(a){return s(t.Content,null,s(t.Header,null,s(t.Title,null,"確認ダイアログ"),s(t.CloseTrigger,null)),s(t.Body,null,s("p",null,"このデータを削除しますか？")),s(t.Footer,null,s("button",{class:"btn btn-secondary btn-sm",onclick:()=>a.attrs.hide()},"キャンセル"),s("button",{class:"btn btn-danger btn-sm",onclick:()=>a.attrs.resolve(!0)},"削除")))}}})?"削除":"キャンセル",s.redraw()}},"基本ダイアログ"),s("button",{class:"btn btn-info btn-sm",onclick:async()=>{await t.show({size:"lg",placement:"center",content:{view(i){return s(t.Content,null,s(t.Header,null,s(t.Title,null,"センター配置 (lg)"),s(t.CloseTrigger,null)),s(t.Body,null,s("p",null,'placement="center", size="lg" のモーダル')),s(t.Footer,null,s("button",{class:"btn btn-primary btn-sm",onclick:()=>i.attrs.resolve(!0)},"OK")))}}}),s.redraw()}},"center / lg")),s("div",{class:"text-muted small"},`結果: ${n}`))}})}const E=`/** @jsx m */\r
import m from "mithril";\r
import { Modal } from "mithril-ui-kit";\r
\r
/**\r
 * Modal 命令的 API のデモ\r
 */\r
export function setup(el: HTMLElement): void {\r
	let result = "未実行";\r
\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div>\r
					<div class="d-flex flex-wrap gap-2 mb-2">\r
						<button\r
							class="btn btn-primary btn-sm"\r
							onclick={async () => {\r
								const ok = await Modal.show<boolean>({\r
									size: "md",\r
									placement: "top",\r
									content: {\r
										view(vnode: m.Vnode<any>) {\r
											return (\r
												<Modal.Content>\r
													<Modal.Header>\r
														<Modal.Title>確認ダイアログ</Modal.Title>\r
														<Modal.CloseTrigger />\r
													</Modal.Header>\r
													<Modal.Body>\r
														<p>このデータを削除しますか？</p>\r
													</Modal.Body>\r
													<Modal.Footer>\r
														<button class="btn btn-secondary btn-sm" onclick={() => vnode.attrs.hide()}>キャンセル</button>\r
														<button class="btn btn-danger btn-sm" onclick={() => vnode.attrs.resolve(true)}>削除</button>\r
													</Modal.Footer>\r
												</Modal.Content>\r
											);\r
										},\r
									},\r
								});\r
								result = ok ? "削除" : "キャンセル";\r
								m.redraw();\r
							}}\r
						>\r
							基本ダイアログ\r
						</button>\r
\r
						<button\r
							class="btn btn-info btn-sm"\r
							onclick={async () => {\r
								await Modal.show({\r
									size: "lg",\r
									placement: "center",\r
									content: {\r
										view(vnode: m.Vnode<any>) {\r
											return (\r
												<Modal.Content>\r
													<Modal.Header>\r
														<Modal.Title>センター配置 (lg)</Modal.Title>\r
														<Modal.CloseTrigger />\r
													</Modal.Header>\r
													<Modal.Body>\r
														<p>placement="center", size="lg" のモーダル</p>\r
													</Modal.Body>\r
													<Modal.Footer>\r
														<button class="btn btn-primary btn-sm" onclick={() => vnode.attrs.resolve(true)}>OK</button>\r
													</Modal.Footer>\r
												</Modal.Content>\r
											);\r
										},\r
									},\r
								});\r
								m.redraw();\r
							}}\r
						>\r
							center / lg\r
						</button>\r
					</div>\r
					<div class="text-muted small">{\`結果: \${result}\`}</div>\r
				</div>\r
			);\r
		},\r
	});\r
}\r
`,F=JSON.parse('{"title":"Modal","description":"","frontmatter":{},"headers":[],"relativePath":"Modal.md","filePath":"Modal.md","lastUpdated":1776909368000}'),c={name:"Modal.md"},b=Object.assign(c,{setup(d){return(n,i)=>{const a=h("MithrilDemo");return o(),r("div",null,[i[0]||(i[0]=l('<h1 id="modal" tabindex="-1">Modal <a class="header-anchor" href="#modal" aria-label="Permalink to &quot;Modal&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p>モーダルコンポーネント。<strong>命令的 API</strong>（<code>Modal.show()</code>）と<strong>宣言的 API</strong>（JSX component）の 2 つの使い方をサポート。</p><blockquote><p>レガシーの Bootstrap 5 スタイルモーダル（<code>ModalClassic</code>）は旧 API です。このページでは current API を案内します。</p></blockquote><table tabindex="0"><thead><tr><th>特徴</th><th>説明</th></tr></thead><tbody><tr><td>サイズ</td><td><code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>, <code>cover</code>, <code>full</code> の 7 段階</td></tr><tr><td>配置</td><td><code>top</code>（デフォルト）, <code>center</code>, <code>bottom</code></td></tr><tr><td>スクロール</td><td><code>outside</code>（デフォルト）, <code>inside</code></td></tr><tr><td>アニメーション</td><td><code>scale</code>（デフォルト）, <code>none</code></td></tr><tr><td>キーボード</td><td>Escape キーで閉じる（デフォルト有効）</td></tr><tr><td>外側クリック</td><td>バックドロップクリックで閉じる（デフォルト有効）</td></tr></tbody></table><h2 id="デモ" tabindex="-1">デモ <a class="header-anchor" href="#デモ" aria-label="Permalink to &quot;デモ&quot;">​</a></h2>',6)),k(a,{setup:e(p),code:e(E)},null,8,["setup","code"]),i[1]||(i[1]=l(`<h2 id="使い方-—-命令的-api-modal-show" tabindex="-1">使い方 — 命令的 API（Modal.show） <a class="header-anchor" href="#使い方-—-命令的-api-modal-show" aria-label="Permalink to &quot;使い方 — 命令的 API（Modal.show）&quot;">​</a></h2><p><code>Modal.show()</code> は Promise を返す。コンテンツコンポーネントには <code>resolve</code> と <code>hide</code> が attrs に注入される。</p><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Modal } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;mithril-ui-kit&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Modal.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">show</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  size: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;md&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  placement: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;center&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  content: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    view</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">vnode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Modal.Header</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Modal.Title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;確認&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Modal.Title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Modal.CloseTrigger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Modal.Header</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Modal.Body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;削除しますか？&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Modal.Body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Modal.Footer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onclick</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> vnode.attrs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hide</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()}&gt;キャンセル&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onclick</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> vnode.attrs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)}&gt;OK&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Modal.Footer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true or false</span></span></code></pre></div><h2 id="使い方-—-宣言的-api-jsx-component" tabindex="-1">使い方 — 宣言的 API（JSX Component） <a class="header-anchor" href="#使い方-—-宣言的-api-jsx-component" aria-label="Permalink to &quot;使い方 — 宣言的 API（JSX Component）&quot;">​</a></h2><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Modal, Portal } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;mithril-ui-kit&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> open </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// view 内で</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Modal.Root</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  open</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{open}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  onOpenChange</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { open </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> d.open; }}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  size</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;md&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  placement</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;center&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Modal.Trigger</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> asChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;開く&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Modal.Trigger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Portal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Modal.Backdrop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Modal.Positioner</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Modal.Content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Modal.Header</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Modal.Title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;タイトル&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Modal.Title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Modal.CloseTrigger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Modal.Header</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Modal.Body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;コンテンツ&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Modal.Body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Modal.Footer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onclick</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { open </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; }}&gt;閉じる&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Modal.Footer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Modal.Content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Modal.Positioner</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Portal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Modal.Root</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><h3 id="modalshowoptions-命令的-api" tabindex="-1">ModalShowOptions（命令的 API） <a class="header-anchor" href="#modalshowoptions-命令的-api" aria-label="Permalink to &quot;ModalShowOptions（命令的 API）&quot;">​</a></h3><table tabindex="0"><thead><tr><th>プロパティ</th><th>型</th><th>デフォルト</th><th>説明</th></tr></thead><tbody><tr><td><code>content</code></td><td><code>m.ComponentTypes&lt;any&gt;</code></td><td><strong>必須</strong></td><td>モーダル内に表示するコンポーネント</td></tr><tr><td><code>attrs</code></td><td><code>Record&lt;string, any&gt;</code></td><td><code>{}</code></td><td>content に渡す追加の attrs</td></tr><tr><td><code>size</code></td><td><code>ModalSize</code></td><td><code>&quot;md&quot;</code></td><td>サイズ</td></tr><tr><td><code>placement</code></td><td><code>ModalPlacement</code></td><td><code>&quot;top&quot;</code></td><td>配置</td></tr><tr><td><code>scrollBehavior</code></td><td><code>ModalScrollBehavior</code></td><td><code>&quot;outside&quot;</code></td><td>スクロール動作</td></tr><tr><td><code>motionPreset</code></td><td><code>ModalMotionPreset</code></td><td><code>&quot;scale&quot;</code></td><td>アニメーション</td></tr><tr><td><code>closeOnEscape</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Escape キーで閉じるか</td></tr><tr><td><code>closeOnInteractOutside</code></td><td><code>boolean</code></td><td><code>true</code></td><td>外側クリックで閉じるか</td></tr><tr><td><code>role</code></td><td><code>&quot;dialog&quot; | &quot;alertdialog&quot;</code></td><td><code>&quot;dialog&quot;</code></td><td>ARIA role</td></tr></tbody></table><h3 id="modalrootattrs-宣言的-api" tabindex="-1">ModalRootAttrs（宣言的 API） <a class="header-anchor" href="#modalrootattrs-宣言的-api" aria-label="Permalink to &quot;ModalRootAttrs（宣言的 API）&quot;">​</a></h3><table tabindex="0"><thead><tr><th>プロパティ</th><th>型</th><th>デフォルト</th><th>説明</th></tr></thead><tbody><tr><td><code>open</code></td><td><code>boolean</code></td><td>-</td><td>開閉状態（制御モード）</td></tr><tr><td><code>defaultOpen</code></td><td><code>boolean</code></td><td><code>false</code></td><td>初期表示状態（非制御モード）</td></tr><tr><td><code>onOpenChange</code></td><td><code>(details) =&gt; void</code></td><td>-</td><td>開閉状態変更コールバック</td></tr><tr><td><code>size</code></td><td><code>ModalSize</code></td><td><code>&quot;md&quot;</code></td><td>サイズ</td></tr><tr><td><code>placement</code></td><td><code>ModalPlacement</code></td><td><code>&quot;top&quot;</code></td><td>配置</td></tr><tr><td><code>scrollBehavior</code></td><td><code>ModalScrollBehavior</code></td><td><code>&quot;outside&quot;</code></td><td>スクロール動作</td></tr><tr><td><code>motionPreset</code></td><td><code>ModalMotionPreset</code></td><td><code>&quot;scale&quot;</code></td><td>アニメーション</td></tr><tr><td><code>closeOnEscape</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Escape キーで閉じるか</td></tr><tr><td><code>closeOnInteractOutside</code></td><td><code>boolean</code></td><td><code>true</code></td><td>外側クリックで閉じるか</td></tr><tr><td><code>role</code></td><td><code>&quot;dialog&quot; | &quot;alertdialog&quot;</code></td><td><code>&quot;dialog&quot;</code></td><td>ARIA role</td></tr><tr><td><code>preventScroll</code></td><td><code>boolean</code></td><td><code>true</code></td><td>背後のスクロール防止</td></tr></tbody></table><h3 id="modalcontentinjectedattrs-show-でコンテンツに注入される属性" tabindex="-1">ModalContentInjectedAttrs（show() でコンテンツに注入される属性） <a class="header-anchor" href="#modalcontentinjectedattrs-show-でコンテンツに注入される属性" aria-label="Permalink to &quot;ModalContentInjectedAttrs（show() でコンテンツに注入される属性）&quot;">​</a></h3><table tabindex="0"><thead><tr><th>プロパティ</th><th>型</th><th>説明</th></tr></thead><tbody><tr><td><code>resolve(value)</code></td><td><code>(value: T) =&gt; void</code></td><td>値を返してモーダルを閉じる</td></tr><tr><td><code>hide()</code></td><td><code>() =&gt; void</code></td><td>モーダルを閉じる（false を返す）</td></tr></tbody></table><h2 id="サブコンポーネント一覧" tabindex="-1">サブコンポーネント一覧 <a class="header-anchor" href="#サブコンポーネント一覧" aria-label="Permalink to &quot;サブコンポーネント一覧&quot;">​</a></h2><table tabindex="0"><thead><tr><th>コンポーネント</th><th>説明</th></tr></thead><tbody><tr><td><code>Modal.Root</code></td><td>ルートコンポーネント（宣言的 API 用）</td></tr><tr><td><code>Modal.Trigger</code></td><td>モーダルを開くトリガー</td></tr><tr><td><code>Modal.Backdrop</code></td><td>バックドロップ（半透明背景）</td></tr><tr><td><code>Modal.Positioner</code></td><td>ポジショニングコンテナ</td></tr><tr><td><code>Modal.Content</code></td><td>モーダル本体</td></tr><tr><td><code>Modal.Header</code></td><td>ヘッダー</td></tr><tr><td><code>Modal.Title</code></td><td>タイトル（h2）</td></tr><tr><td><code>Modal.Description</code></td><td>説明文（p）</td></tr><tr><td><code>Modal.Body</code></td><td>ボディ</td></tr><tr><td><code>Modal.Footer</code></td><td>フッター</td></tr><tr><td><code>Modal.CloseTrigger</code></td><td>閉じるボタン（×）</td></tr><tr><td><code>Modal.ActionTrigger</code></td><td>アクション＋閉じるトリガー</td></tr></tbody></table><h2 id="サイズ一覧" tabindex="-1">サイズ一覧 <a class="header-anchor" href="#サイズ一覧" aria-label="Permalink to &quot;サイズ一覧&quot;">​</a></h2><table tabindex="0"><thead><tr><th>サイズ</th><th>幅</th></tr></thead><tbody><tr><td><code>xs</code></td><td>320px</td></tr><tr><td><code>sm</code></td><td>400px</td></tr><tr><td><code>md</code></td><td>500px</td></tr><tr><td><code>lg</code></td><td>700px</td></tr><tr><td><code>xl</code></td><td>900px</td></tr><tr><td><code>cover</code></td><td>100vw - 2rem</td></tr><tr><td><code>full</code></td><td>100vw（全画面）</td></tr></tbody></table>`,16))])}}});export{F as __pageData,b as default};
