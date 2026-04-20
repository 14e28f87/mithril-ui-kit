import{m as o}from"./chunks/theme.MeAZuU5r.js";import{c as q}from"./chunks/Table.BlGpiJ_h.js";import{C as y,o as C,c as P,ai as c,E as S,k as p}from"./chunks/framework.DYURIDHw.js";const T="_float_9vdqz_2",k="_topStart_9vdqz_12",E="_topCenter_9vdqz_18",F="_topEnd_9vdqz_24",z="_middleStart_9vdqz_31",A="_middleCenter_9vdqz_37",D="_middleEnd_9vdqz_43",R="_bottomStart_9vdqz_50",I="_bottomCenter_9vdqz_56",j="_bottomEnd_9vdqz_62",f={float:T,topStart:k,topCenter:E,topEnd:F,middleStart:z,middleCenter:A,middleEnd:D,bottomStart:R,bottomCenter:I,bottomEnd:j};function N(t){return t.charAt(0).toUpperCase()+t.slice(1)}function $(t){return t.split("-").map((d,e)=>e===0?d:N(d)).join("")}class V{view(d){const{placement:e="top-end",offsetX:s,offsetY:m,offset:l,as:h="div",class:_,style:r,...u}=d.attrs,b=f[$(e)]||"",n={},a=s??l,i=m??l;a!==void 0&&(n["--float-offset-x"]=typeof a=="number"?`${a}px`:a),i!==void 0&&(n["--float-offset-y"]=typeof i=="number"?`${i}px`:i);const g=typeof r=="string"?`${Object.entries(n).map(([x,v])=>`${x}:${v}`).join(";")}${r?`;${r}`:""}`:{...n,...r||{}};return o(h,{...u,class:q(f.float,b,_),style:g},d.children)}}function W(t){o.mount(t,{view(){return o("div",{style:{position:"relative",width:"220px",height:"120px",borderRadius:"14px",padding:"16px",background:"#eff6ff",border:"1px solid #bfdbfe"}},o("div",{style:{fontWeight:"600"}},"Device Card"),o("div",{style:{color:"#475569",marginTop:"6px"}},"Parent needs relative positioning."),o(V,{placement:"top-end",offset:8},o("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:"28px",height:"28px",padding:"0 8px",borderRadius:"999px",background:"#dc2626",color:"#ffffff",fontWeight:"700"}},"3")))}})}const w=`/** @jsx m */\r
import m from "mithril";\r
import { Float } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div\r
					style={{\r
						position: "relative",\r
						width: "220px",\r
						height: "120px",\r
						borderRadius: "14px",\r
						padding: "16px",\r
						background: "#eff6ff",\r
						border: "1px solid #bfdbfe",\r
					}}\r
				>\r
					<div style={{ fontWeight: "600" }}>Device Card</div>\r
					<div style={{ color: "#475569", marginTop: "6px" }}>Parent needs relative positioning.</div>\r
					<Float placement="top-end" offset={8}>\r
						<span\r
							style={{\r
								display: "inline-flex",\r
								alignItems: "center",\r
								justifyContent: "center",\r
								minWidth: "28px",\r
								height: "28px",\r
								padding: "0 8px",\r
								borderRadius: "999px",\r
								background: "#dc2626",\r
								color: "#ffffff",\r
								fontWeight: "700",\r
							}}\r
						>\r
							3\r
						</span>\r
					</Float>\r
				</div>\r
			);\r
		},\r
	});\r
}`,U=JSON.parse('{"title":"Float","description":"","frontmatter":{},"headers":[],"relativePath":"Float.md","filePath":"Float.md"}'),X={name:"Float.md"},B=Object.assign(X,{setup(t){return(d,e)=>{const s=y("MithrilDemo");return C(),P("div",null,[e[0]||(e[0]=c('<h1 id="float" tabindex="-1">Float <a class="header-anchor" href="#float" aria-label="Permalink to &quot;Float&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>Float</code> は親要素の四隅や中央辺へ小さな要素を重ねて配置するユーティリティです。通知バッジ、オンライン表示、補助ラベルなどを親コンテンツに重ねたいときに使います。</p><h2 id="usage-使用例" tabindex="-1">Usage 使用例 <a class="header-anchor" href="#usage-使用例" aria-label="Permalink to &quot;Usage 使用例&quot;">​</a></h2><h3 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h3>',5)),S(s,{setup:p(W),code:p(w)},null,8,["setup","code"]),e[1]||(e[1]=c('<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="float-props" tabindex="-1">Float Props <a class="header-anchor" href="#float-props" aria-label="Permalink to &quot;Float Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>placement</code></td><td><code>FloatPlacement</code></td><td><code>&quot;top-end&quot;</code></td><td>配置位置を指定します</td></tr><tr><td><code>offset</code></td><td><code>string | number</code></td><td>—</td><td>X/Y 共通のオフセットです</td></tr><tr><td><code>offsetX</code></td><td><code>string | number</code></td><td>—</td><td>水平方向だけ個別にずらします</td></tr><tr><td><code>offsetY</code></td><td><code>string | number</code></td><td>—</td><td>垂直方向だけ個別にずらします</td></tr><tr><td><code>as</code></td><td><code>string</code></td><td><code>&quot;div&quot;</code></td><td>描画要素を切り替えます</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>追加クラスです</td></tr><tr><td><code>style</code></td><td><code>Record&lt;string, string&gt; | string</code></td><td>—</td><td>インラインスタイルです</td></tr></tbody></table><h2 id="補足" tabindex="-1">補足 <a class="header-anchor" href="#補足" aria-label="Permalink to &quot;補足&quot;">​</a></h2><p>親要素側に <code>position: relative</code> を設定してください。</p>',5))])}}});export{U as __pageData,B as default};
