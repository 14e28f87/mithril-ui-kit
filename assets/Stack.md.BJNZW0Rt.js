import{m as o}from"./chunks/theme.C32Rvu8V.js";import{c as A}from"./chunks/Table.MsshMnDN.js";import{C as W,o as z,c as N,a4 as C,E as S,k as d,j as a,a as i}from"./chunks/framework.DuWTyC0X.js";const L="_stack_1qzls_1",M="_stackSeparator_1qzls_6",I={stack:L,stackSeparator:M},O={sm:576,md:768,lg:992,xl:1200,xxl:1400};class y{view(t){const{_direction:r="column",class:n,style:c,...s}=t.attrs,l=r==="row"||r==="row-reverse",p=l?"vertical":"horizontal",q=typeof c=="string"?c:{...l?{alignSelf:"stretch",borderInlineStartWidth:"1px",borderInlineStartStyle:"solid"}:{width:"100%",borderTopWidth:"1px",borderTopStyle:"solid"},...c||{}};return o("hr",{...s,"aria-orientation":p,class:A(I.stackSeparator,n),style:q})}}function U(e){return e!=null&&typeof e=="object"&&e.tag===y}function G(e,t){return U(e)?o(y,{...e.attrs,_direction:t}):e}class h{constructor(){this.uid=`muk-stack-${Math.random().toString(36).slice(2,9)}`}syncResponsiveStyle(t){const r=`style-${this.uid}`;let n=document.getElementById(r);n||(n=document.createElement("style"),n.id=r,document.head.appendChild(n));const c=`[data-muk-stack-id="${this.uid}"]`,s=[];t.base&&s.push(`${c}{flex-direction:${t.base}}`);for(const[l,p]of Object.entries(O)){const b=t[l];b&&s.push(`@media(min-width:${p}px){${c}{flex-direction:${b}}}`)}n.textContent=s.join(`
`)}oncreate(t){typeof t.attrs.direction=="object"&&t.attrs.direction!==null&&this.syncResponsiveStyle(t.attrs.direction)}onupdate(t){typeof t.attrs.direction=="object"&&t.attrs.direction!==null&&this.syncResponsiveStyle(t.attrs.direction)}onremove(){var t;(t=document.getElementById(`style-${this.uid}`))==null||t.remove()}view(t){const{direction:r="column",gap:n,align:c,justify:s,wrap:l,separator:p,as:b="div",class:q,style:k,...D}=t.attrs,w=typeof r=="object"&&r!==null,V=w?r.base??"column":r,u={};w||(u.flexDirection=V),n!==void 0&&!p&&(u.gap=typeof n=="number"?`${n}px`:n),c&&(u.alignItems=c),s&&(u.justifyContent=s),l&&(u.flexWrap=l);const j=typeof k=="string"?`${Object.entries(u).map(([_,x])=>`${_.replace(/[A-Z]/g,f=>`-${f.toLowerCase()}`)}:${x}`).join(";")}${k?`;${k}`:""}`:{...u,...k||{}};let g=t.children;if(p&&Array.isArray(g)){const _=g.flat().filter(f=>f!=null&&f!==!1&&f!==""),x=[];_.forEach((f,E)=>{E>0&&x.push(G(p,V)),x.push(f)}),g=x}const H=w?{"data-muk-stack-id":this.uid}:{};return o(b,{...D,...H,class:A(I.stack,q),style:j},g)}}class ${view(t){return o(h,{...t.attrs,direction:"row"},t.children)}}class B{view(t){return o(h,{...t.attrs,direction:"column"},t.children)}}function P(e,t="#f1f5f9"){return o("div",{style:{padding:"10px 16px",background:t,borderRadius:"8px",fontWeight:"500"}},e)}function J(e){o.mount(e,{view(){return o(h,{gap:"12px"},P("Item 1","#dbeafe"),P("Item 2","#dcfce7"),P("Item 3","#fef3c7"))}})}const K=`/** @jsx m */\r
import m from "mithril";\r
import { Stack } from "mithril-ui-kit";\r
\r
function box(label: string, bg = "#f1f5f9"): m.Children {\r
	return (\r
		<div\r
			style={{\r
				padding: "10px 16px",\r
				background: bg,\r
				borderRadius: "8px",\r
				fontWeight: "500",\r
			}}\r
		>\r
			{label}\r
		</div>\r
	);\r
}\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<Stack gap="12px">\r
					{box("Item 1", "#dbeafe")}\r
					{box("Item 2", "#dcfce7")}\r
					{box("Item 3", "#fef3c7")}\r
				</Stack>\r
			);\r
		},\r
	});\r
}\r
`;function m(e,t="#f1f5f9"){return o("div",{style:{padding:"10px 16px",background:t,borderRadius:"8px",fontWeight:"500"}},e)}function Z(e){o.mount(e,{view(){return o(h,{gap:"32px"},o("div",null,o("p",{style:{marginBottom:"8px",fontSize:"13px",color:"#64748b"}},"VStack + StackSeparator（横線）"),o(B,{gap:"12px",separator:o(y,null)},m("Alpha","#dbeafe"),m("Beta","#dcfce7"),m("Gamma","#fef3c7"))),o("div",null,o("p",{style:{marginBottom:"8px",fontSize:"13px",color:"#64748b"}},"HStack + StackSeparator（縦線）"),o($,{gap:"12px",align:"center",separator:o(y,null)},m("Left","#ede9fe"),m("Center","#fce7f3"),m("Right","#d1fae5"))))}})}const F=`/** @jsx m */\r
import m from "mithril";\r
import { HStack, Stack, StackSeparator, VStack } from "mithril-ui-kit";\r
\r
function box(label: string, bg = "#f1f5f9"): m.Children {\r
	return (\r
		<div\r
			style={{\r
				padding: "10px 16px",\r
				background: bg,\r
				borderRadius: "8px",\r
				fontWeight: "500",\r
			}}\r
		>\r
			{label}\r
		</div>\r
	);\r
}\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<Stack gap="32px">\r
					{/* 縦方向 Stack に StackSeparator → 横線 */}\r
					<div>\r
						<p style={{ marginBottom: "8px", fontSize: "13px", color: "#64748b" }}>\r
							VStack + StackSeparator（横線）\r
						</p>\r
						<VStack gap="12px" separator={<StackSeparator />}>\r
							{box("Alpha", "#dbeafe")}\r
							{box("Beta", "#dcfce7")}\r
							{box("Gamma", "#fef3c7")}\r
						</VStack>\r
					</div>\r
\r
					{/* 横方向 Stack に StackSeparator → 縦線 */}\r
					<div>\r
						<p style={{ marginBottom: "8px", fontSize: "13px", color: "#64748b" }}>\r
							HStack + StackSeparator（縦線）\r
						</p>\r
						<HStack gap="12px" align="center" separator={<StackSeparator />}>\r
							{box("Left", "#ede9fe")}\r
							{box("Center", "#fce7f3")}\r
							{box("Right", "#d1fae5")}\r
						</HStack>\r
					</div>\r
				</Stack>\r
			);\r
		},\r
	});\r
}\r
`;function v(e,t,r="#1e293b"){return o("span",{style:{padding:"6px 14px",background:t,color:r,borderRadius:"999px",fontWeight:"600",fontSize:"14px"}},e)}function Q(e){o.mount(e,{view(){return o($,{gap:"12px",align:"center",wrap:"wrap"},v("Design","#dbeafe"),v("Build","#dcfce7"),v("Ship","#fef3c7"),v("Iterate","#ede9fe"))}})}const X=`/** @jsx m */\r
import m from "mithril";\r
import { HStack } from "mithril-ui-kit";\r
\r
function tag(label: string, bg: string, color = "#1e293b"): m.Children {\r
	return (\r
		<span\r
			style={{\r
				padding: "6px 14px",\r
				background: bg,\r
				color,\r
				borderRadius: "999px",\r
				fontWeight: "600",\r
				fontSize: "14px",\r
			}}\r
		>\r
			{label}\r
		</span>\r
	);\r
}\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<HStack gap="12px" align="center" wrap="wrap">\r
					{tag("Design", "#dbeafe")}\r
					{tag("Build", "#dcfce7")}\r
					{tag("Ship", "#fef3c7")}\r
					{tag("Iterate", "#ede9fe")}\r
				</HStack>\r
			);\r
		},\r
	});\r
}\r
`;function R(e,t){return o("div",{style:{padding:"12px 16px",background:"#f8fafc",border:"1px solid #e2e8f0",borderRadius:"10px"}},o("div",{style:{fontWeight:"600",marginBottom:"4px"}},e),o("div",{style:{fontSize:"13px",color:"#64748b"}},t))}function Y(e){o.mount(e,{view(){return o(B,{gap:"10px",align:"stretch",style:{maxWidth:"320px"}},R("ステップ 1","プロジェクトを作成します"),R("ステップ 2","コンポーネントを設定します"),R("ステップ 3","デプロイして完了です"))}})}const tt=`/** @jsx m */\r
import m from "mithril";\r
import { VStack } from "mithril-ui-kit";\r
\r
function card(title: string, desc: string): m.Children {\r
	return (\r
		<div\r
			style={{\r
				padding: "12px 16px",\r
				background: "#f8fafc",\r
				border: "1px solid #e2e8f0",\r
				borderRadius: "10px",\r
			}}\r
		>\r
			<div style={{ fontWeight: "600", marginBottom: "4px" }}>{title}</div>\r
			<div style={{ fontSize: "13px", color: "#64748b" }}>{desc}</div>\r
		</div>\r
	);\r
}\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<VStack gap="10px" align="stretch" style={{ maxWidth: "320px" }}>\r
					{card("ステップ 1", "プロジェクトを作成します")}\r
					{card("ステップ 2", "コンポーネントを設定します")}\r
					{card("ステップ 3", "デプロイして完了です")}\r
				</VStack>\r
			);\r
		},\r
	});\r
}\r
`;function T(e,t="#f1f5f9"){return o("div",{style:{padding:"12px 16px",background:t,borderRadius:"8px",fontWeight:"500",flex:"1"}},e)}function et(e){o.mount(e,{view(){return o(h,null,o("p",{style:{marginBottom:"12px",fontSize:"13px",color:"#64748b"}},"ウィンドウ幅を変えると方向が切り替わります（base: column / md ≥768px: row）"),o(h,{direction:{base:"column",md:"row"},gap:"12px"},T("Section A","#dbeafe"),T("Section B","#dcfce7"),T("Section C","#fef3c7")))}})}const rt=`/** @jsx m */\r
import m from "mithril";\r
import { Stack } from "mithril-ui-kit";\r
\r
function box(label: string, bg = "#f1f5f9"): m.Children {\r
	return (\r
		<div\r
			style={{\r
				padding: "12px 16px",\r
				background: bg,\r
				borderRadius: "8px",\r
				fontWeight: "500",\r
				flex: "1",\r
			}}\r
		>\r
			{label}\r
		</div>\r
	);\r
}\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<Stack>\r
					<p style={{ marginBottom: "12px", fontSize: "13px", color: "#64748b" }}>\r
						ウィンドウ幅を変えると方向が切り替わります（base: column / md ≥768px: row）\r
					</p>\r
					<Stack\r
						direction={{ base: "column", md: "row" }}\r
						gap="12px"\r
					>\r
						{box("Section A", "#dbeafe")}\r
						{box("Section B", "#dcfce7")}\r
						{box("Section C", "#fef3c7")}\r
					</Stack>\r
				</Stack>\r
			);\r
		},\r
	});\r
}\r
`,ct=JSON.parse('{"title":"Stack","description":"","frontmatter":{},"headers":[],"relativePath":"Stack.md","filePath":"Stack.md","lastUpdated":1777529825000}'),ot={name:"Stack.md"},it=Object.assign(ot,{setup(e){return(t,r)=>{const n=W("MithrilDemo");return z(),N("div",null,[r[0]||(r[0]=C('<h1 id="stack" tabindex="-1">Stack <a class="header-anchor" href="#stack" aria-label="Permalink to &quot;Stack&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>Stack</code> は子要素を縦方向または横方向に一列に並べるレイアウトコンポーネントです。<code>separator</code> prop に <code>StackSeparator</code> を渡すと、Stack の方向（縦/横）に合わせてセパレーターが自動的に向きを変えます。<code>direction</code> にオブジェクトを渡すとブレークポイントごとに方向を切り替えるレスポンシブ対応も可能です。</p><h2 id="usage-使用例" tabindex="-1">Usage 使用例 <a class="header-anchor" href="#usage-使用例" aria-label="Permalink to &quot;Usage 使用例&quot;">​</a></h2><h3 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h3><p>縦方向（<code>column</code>）に子要素を並べます。<code>gap</code> で要素間の余白を指定します。</p>',6)),S(n,{setup:d(J),code:d(K)},null,8,["setup","code"]),r[1]||(r[1]=a("h3",{id:"stackseparator",tabindex:"-1"},[i("StackSeparator "),a("a",{class:"header-anchor",href:"#stackseparator","aria-label":'Permalink to "StackSeparator"'},"​")],-1)),r[2]||(r[2]=a("p",null,[a("code",null,"separator"),i(" prop に "),a("code",null,"<StackSeparator />"),i(" を渡すと、Stack の方向に合わせてセパレーターの向きが自動で切り替わります。縦方向 Stack では横線、横方向 Stack では縦線が挿入されます。")],-1)),S(n,{setup:d(Z),code:d(F)},null,8,["setup","code"]),r[3]||(r[3]=a("h3",{id:"hstack",tabindex:"-1"},[i("HStack "),a("a",{class:"header-anchor",href:"#hstack","aria-label":'Permalink to "HStack"'},"​")],-1)),r[4]||(r[4]=a("p",null,[a("code",null,"HStack"),i(" は "),a("code",null,'direction="row"'),i(" を固定したショートカットです。子要素を横方向に並べます。")],-1)),S(n,{setup:d(Q),code:d(X)},null,8,["setup","code"]),r[5]||(r[5]=a("h3",{id:"vstack",tabindex:"-1"},[i("VStack "),a("a",{class:"header-anchor",href:"#vstack","aria-label":'Permalink to "VStack"'},"​")],-1)),r[6]||(r[6]=a("p",null,[a("code",null,"VStack"),i(" は "),a("code",null,'direction="column"'),i(" を固定したショートカットです。子要素を縦方向に並べます。")],-1)),S(n,{setup:d(Y),code:d(tt)},null,8,["setup","code"]),r[7]||(r[7]=C('<h3 id="responsive-direction" tabindex="-1">Responsive Direction <a class="header-anchor" href="#responsive-direction" aria-label="Permalink to &quot;Responsive Direction&quot;">​</a></h3><p><code>direction</code> にオブジェクトを渡すとブレークポイントごとに方向を切り替えられます。Bootstrap 5 互換のブレークポイント（<code>sm</code>/<code>md</code>/<code>lg</code>/<code>xl</code>/<code>xxl</code>）に対応しています。</p>',2)),S(n,{setup:d(et),code:d(rt)},null,8,["setup","code"]),r[8]||(r[8]=C('<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="stack-props" tabindex="-1">Stack Props <a class="header-anchor" href="#stack-props" aria-label="Permalink to &quot;Stack Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>direction</code></td><td><code>&quot;row&quot; | &quot;column&quot; | &quot;row-reverse&quot; | &quot;column-reverse&quot; | ResponsiveDirection</code></td><td><code>&quot;column&quot;</code></td><td>並び方向。オブジェクト指定でレスポンシブ対応</td></tr><tr><td><code>gap</code></td><td><code>string | number</code></td><td>—</td><td>子要素間の間隔</td></tr><tr><td><code>align</code></td><td><code>string</code></td><td>—</td><td><code>align-items</code> の値</td></tr><tr><td><code>justify</code></td><td><code>string</code></td><td>—</td><td><code>justify-content</code> の値</td></tr><tr><td><code>wrap</code></td><td><code>&quot;wrap&quot; | &quot;nowrap&quot; | &quot;wrap-reverse&quot;</code></td><td>—</td><td>折り返し挙動</td></tr><tr><td><code>separator</code></td><td><code>m.Children</code></td><td>—</td><td>子要素の間に挿入する区切り要素。<code>StackSeparator</code> を渡すと方向を自動注入</td></tr><tr><td><code>as</code></td><td><code>string</code></td><td><code>&quot;div&quot;</code></td><td>描画要素タグ</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>追加クラス</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt; | string</code></td><td>—</td><td>インラインスタイル</td></tr></tbody></table><h3 id="responsivedirection" tabindex="-1">ResponsiveDirection <a class="header-anchor" href="#responsivedirection" aria-label="Permalink to &quot;ResponsiveDirection&quot;">​</a></h3><p><code>direction</code> にオブジェクトを渡すときのブレークポイント指定。</p><table tabindex="0"><thead><tr><th>キー</th><th>適用幅</th><th>値</th></tr></thead><tbody><tr><td><code>base</code></td><td>全幅（モバイルファースト）</td><td><code>&quot;row&quot; | &quot;column&quot; | &quot;row-reverse&quot; | &quot;column-reverse&quot;</code></td></tr><tr><td><code>sm</code></td><td>≥576px</td><td>同上</td></tr><tr><td><code>md</code></td><td>≥768px</td><td>同上</td></tr><tr><td><code>lg</code></td><td>≥992px</td><td>同上</td></tr><tr><td><code>xl</code></td><td>≥1200px</td><td>同上</td></tr><tr><td><code>xxl</code></td><td>≥1400px</td><td>同上</td></tr></tbody></table><h3 id="stackseparator-props" tabindex="-1">StackSeparator Props <a class="header-anchor" href="#stackseparator-props" aria-label="Permalink to &quot;StackSeparator Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>_direction</code></td><td><code>&quot;row&quot; | &quot;column&quot; | &quot;row-reverse&quot; | &quot;column-reverse&quot;</code></td><td><code>&quot;column&quot;</code></td><td>Stack から自動注入される方向（手動指定も可）</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>追加クラス</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt; | string</code></td><td>—</td><td>インラインスタイル</td></tr></tbody></table><h3 id="aliases" tabindex="-1">Aliases <a class="header-anchor" href="#aliases" aria-label="Permalink to &quot;Aliases&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Component</th><th>Description</th></tr></thead><tbody><tr><td><code>Stack</code></td><td>任意方向を選べる基本コンポーネント</td></tr><tr><td><code>HStack</code></td><td><code>direction=&quot;row&quot;</code> を固定したショートカット</td></tr><tr><td><code>VStack</code></td><td><code>direction=&quot;column&quot;</code> を固定したショートカット</td></tr><tr><td><code>StackSeparator</code></td><td>Stack の方向に合わせて向きが自動変化するセパレーター</td></tr></tbody></table>',10))])}}});export{ct as __pageData,it as default};
