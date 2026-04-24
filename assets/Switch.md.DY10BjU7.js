import{m as t}from"./chunks/theme.LBbUWaEz.js";import{h as i}from"./chunks/Table.DnqMepI2.js";import{C as h,o,c as r,a4 as d,E as c,k as l}from"./chunks/framework.DuWTyC0X.js";function k(s){t.mount(s,{view(){return t("div",{style:"display: flex; flex-direction: column; gap: 1.5rem;"},t(i.Root,{defaultChecked:!1,onCheckedChange:({checked:e})=>{}},t(i.Control,null,t(i.Thumb,null)),t(i.Label,null,"Wi-Fi")),t("div",{style:"display: flex; align-items: center; gap: 1rem;"},["xs","sm","md","lg"].map(e=>t(i.Root,{key:e,defaultChecked:!0,size:e},t(i.Control,null,t(i.Thumb,null)),t(i.Label,null,e)))),t("div",{style:"display: flex; align-items: center; gap: 1rem;"},t(i.Root,{defaultChecked:!0,variant:"solid"},t(i.Control,null,t(i.Thumb,null)),t(i.Label,null,"solid")),t(i.Root,{defaultChecked:!0,variant:"raised"},t(i.Control,null,t(i.Thumb,null)),t(i.Label,null,"raised"))),t("div",{style:"display: flex; align-items: center; gap: 1rem;"},t(i.Root,{defaultChecked:!0,disabled:!0},t(i.Control,null,t(i.Thumb,null)),t(i.Label,null,"disabled")),t(i.Root,{defaultChecked:!0,readOnly:!0},t(i.Control,null,t(i.Thumb,null)),t(i.Label,null,"readOnly"))))}})}const p=`/** @jsx m */\r
import m from "mithril";\r
import { Switch } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			let checked = false;\r
			return (\r
				<div style="display: flex; flex-direction: column; gap: 1.5rem;">\r
					{/* 基本 */}\r
					<Switch.Root\r
						defaultChecked={false}\r
						onCheckedChange={({ checked: c }) => { checked = c; }}\r
					>\r
						<Switch.Control>\r
							<Switch.Thumb />\r
						</Switch.Control>\r
						<Switch.Label>Wi-Fi</Switch.Label>\r
					</Switch.Root>\r
\r
					{/* サイズ */}\r
					<div style="display: flex; align-items: center; gap: 1rem;">\r
						{(["xs", "sm", "md", "lg"] as const).map(sz => (\r
							<Switch.Root key={sz} defaultChecked={true} size={sz}>\r
								<Switch.Control>\r
									<Switch.Thumb />\r
								</Switch.Control>\r
								<Switch.Label>{sz}</Switch.Label>\r
							</Switch.Root>\r
						))}\r
					</div>\r
\r
					{/* バリアント */}\r
					<div style="display: flex; align-items: center; gap: 1rem;">\r
						<Switch.Root defaultChecked={true} variant="solid">\r
							<Switch.Control><Switch.Thumb /></Switch.Control>\r
							<Switch.Label>solid</Switch.Label>\r
						</Switch.Root>\r
						<Switch.Root defaultChecked={true} variant="raised">\r
							<Switch.Control><Switch.Thumb /></Switch.Control>\r
							<Switch.Label>raised</Switch.Label>\r
						</Switch.Root>\r
					</div>\r
\r
					{/* disabled / readOnly */}\r
					<div style="display: flex; align-items: center; gap: 1rem;">\r
						<Switch.Root defaultChecked={true} disabled>\r
							<Switch.Control><Switch.Thumb /></Switch.Control>\r
							<Switch.Label>disabled</Switch.Label>\r
						</Switch.Root>\r
						<Switch.Root defaultChecked={true} readOnly>\r
							<Switch.Control><Switch.Thumb /></Switch.Control>\r
							<Switch.Label>readOnly</Switch.Label>\r
						</Switch.Root>\r
					</div>\r
				</div>\r
			);\r
		},\r
	});\r
}\r
`,C=JSON.parse('{"title":"Switch","description":"","frontmatter":{},"headers":[],"relativePath":"Switch.md","filePath":"Switch.md","lastUpdated":1776836643000}'),u={name:"Switch.md"},y=Object.assign(u,{setup(s){return(e,a)=>{const n=h("MithrilDemo");return o(),r("div",null,[a[0]||(a[0]=d('<h1 id="switch" tabindex="-1">Switch <a class="header-anchor" href="#switch" aria-label="Permalink to &quot;Switch&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p>スイッチ コンポーネント。制御モード（<code>checked</code>）と非制御モード（<code>defaultChecked</code>）の両方をサポート。</p><h2 id="デモ" tabindex="-1">デモ <a class="header-anchor" href="#デモ" aria-label="Permalink to &quot;デモ&quot;">​</a></h2>',4)),c(n,{setup:l(k),code:l(p)},null,8,["setup","code"]),a[1]||(a[1]=d(`<h2 id="基本的な使い方" tabindex="-1">基本的な使い方 <a class="header-anchor" href="#基本的な使い方" aria-label="Permalink to &quot;基本的な使い方&quot;">​</a></h2><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Switch.Root</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  checked</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{isOn}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  onCheckedChange</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{({ </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">checked</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> isOn </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> checked}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Switch.Control</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Switch.Thumb</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Switch.Control</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Switch.Label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Wi-Fi&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Switch.Label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Switch.Root</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="コンポーネント構成" tabindex="-1">コンポーネント構成 <a class="header-anchor" href="#コンポーネント構成" aria-label="Permalink to &quot;コンポーネント構成&quot;">​</a></h2><table tabindex="0"><thead><tr><th>パーツ</th><th>説明</th></tr></thead><tbody><tr><td><code>Switch.Root</code></td><td>ルートコンポーネント。状態管理とスタイルを提供</td></tr><tr><td><code>Switch.Control</code></td><td>トラック（レール）部分</td></tr><tr><td><code>Switch.Thumb</code></td><td>つまみ</td></tr><tr><td><code>Switch.ThumbIndicator</code></td><td>つまみ内に表示するアイコン等</td></tr><tr><td><code>Switch.Label</code></td><td>ラベル</td></tr><tr><td><code>Switch.Indicator</code></td><td>チェック状態を示すインジケーター</td></tr><tr><td><code>Switch.HiddenInput</code></td><td>フォーム送信用の隠し input</td></tr></tbody></table><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><h3 id="switch-root" tabindex="-1">Switch.Root <a class="header-anchor" href="#switch-root" aria-label="Permalink to &quot;Switch.Root&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Prop</th><th>型</th><th>デフォルト</th><th>説明</th></tr></thead><tbody><tr><td><code>checked</code></td><td><code>boolean</code></td><td>—</td><td>チェック状態（制御モード）</td></tr><tr><td><code>defaultChecked</code></td><td><code>boolean</code></td><td><code>false</code></td><td>初期チェック状態（非制御モード）</td></tr><tr><td><code>onCheckedChange</code></td><td><code>(details: { checked: boolean }) =&gt; void</code></td><td>—</td><td>状態変更コールバック</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>無効化</td></tr><tr><td><code>readOnly</code></td><td><code>boolean</code></td><td><code>false</code></td><td>読み取り専用</td></tr><tr><td><code>invalid</code></td><td><code>boolean</code></td><td><code>false</code></td><td>バリデーションエラー状態</td></tr><tr><td><code>size</code></td><td><code>&quot;xs&quot; | &quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;</code></td><td><code>&quot;md&quot;</code></td><td>サイズ</td></tr><tr><td><code>variant</code></td><td><code>&quot;solid&quot; | &quot;raised&quot;</code></td><td><code>&quot;solid&quot;</code></td><td>外観バリアント</td></tr><tr><td><code>colorPalette</code></td><td><code>string</code></td><td>—</td><td>カスタムカラー（CSS カラー値）</td></tr><tr><td><code>name</code></td><td><code>string</code></td><td>—</td><td>フォーム送信用の名前</td></tr><tr><td><code>value</code></td><td><code>string</code></td><td><code>&quot;on&quot;</code></td><td>フォーム送信用の値</td></tr></tbody></table><h3 id="switch-indicator" tabindex="-1">Switch.Indicator <a class="header-anchor" href="#switch-indicator" aria-label="Permalink to &quot;Switch.Indicator&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Prop</th><th>型</th><th>説明</th></tr></thead><tbody><tr><td><code>fallback</code></td><td><code>m.Children</code></td><td>未チェック時に表示する内容</td></tr></tbody></table><h2 id="カスタムカラー" tabindex="-1">カスタムカラー <a class="header-anchor" href="#カスタムカラー" aria-label="Permalink to &quot;カスタムカラー&quot;">​</a></h2><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Switch.Root</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defaultChecked</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">colorPalette</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#10b981&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Switch.Control</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Switch.Thumb</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Switch.Control</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Switch.Root</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,11))])}}});export{C as __pageData,y as default};
