import{m as e}from"./chunks/theme.DVqxVbXL.js";import{c as M,z as K}from"./chunks/Table.BP7XEx9l.js";import{C as Q,o as Y,c as Z,a4 as W,E as _,k as c,j as r,a as s}from"./chunks/framework.DuWTyC0X.js";const ee="_root_19h3s_2",te="_disabled_19h3s_8",le="_control_19h3s_13",re="_input_19h3s_20",ne="_tags_19h3s_33",oe="_tag_19h3s_33",ae="_tagClose_19h3s_49",ie="_triggerIcon_19h3s_62",se="_clearTrigger_19h3s_68",de="_content_19h3s_81",ue="_cbFadeIn_19h3s_1",ce="_empty_19h3s_102",me="_item_19h3s_109",ve="_itemHighlighted_19h3s_119",pe="_itemSelected_19h3s_123",be="_itemDisabled_19h3s_128",he="_itemCheck_19h3s_133",ge="_variantOutline_19h3s_141",xe="_variantSubtle_19h3s_151",fe="_variantFlushed_19h3s_161",ye="_sizeXs_19h3s_172",_e="_sizeSm_19h3s_180",Ce="_sizeMd_19h3s_188",Se="_sizeLg_19h3s_196",we="_invalid_19h3s_205",Ie="_itemGroupLabel_19h3s_228",ke="_creatableItem_19h3s_244",qe="_creatableIcon_19h3s_248",o={root:ee,disabled:te,control:le,input:re,tags:ne,tag:oe,tagClose:ae,triggerIcon:ie,clearTrigger:se,content:de,cbFadeIn:ue,empty:ce,item:me,itemHighlighted:ve,itemSelected:pe,itemDisabled:be,itemCheck:he,variantOutline:ge,variantSubtle:xe,variantFlushed:fe,sizeXs:ye,sizeSm:_e,sizeMd:Ce,sizeLg:Se,invalid:we,itemGroupLabel:Ie,creatableItem:ke,creatableIcon:qe};function H(i){return i.charAt(0).toUpperCase()+i.slice(1)}class ze{constructor(){this.isOpen=!1,this.query="",this.highlightIndex=-1,this.inputEl=null,this.containerEl=null,this.cleanupAutoUpdate=null,this.handleOutsideClick=l=>{this.containerEl&&!l.composedPath().includes(this.containerEl)&&(this.isOpen=!1,e.redraw())}}onremove(){var l;document.removeEventListener("mousedown",this.handleOutsideClick),(l=this.cleanupAutoUpdate)==null||l.call(this),this.cleanupAutoUpdate=null}view(l){const{variant:t="outline",size:d="md",items:b,value:p,onValueChange:m,multiple:v,openOnClick:h=!0,placeholder:f="検索...",disabled:n,invalid:u,creatable:y,onCreateItem:g,minChars:C=0,class:F,...G}=l.attrs,$=b.filter(a=>!this.query||a.label.toLowerCase().includes(this.query.toLowerCase())),S=v?Array.isArray(p)?p:[]:p?[p]:[],w=b.filter(a=>S.includes(a.value)).map(a=>a.label),N=!!(y&&this.query);return e("div",{...G,class:M(o.root,o[`variant${H(t)}`],o[`size${H(d)}`],{[o.disabled]:n},{[o.invalid]:u},F),oncreate:a=>{this.containerEl=a.dom,document.addEventListener("mousedown",this.handleOutsideClick)}},e("div",{class:o.control},v&&w.length>0&&e("div",{class:o.tags},w.map(a=>e("span",{class:o.tag},a,e("button",{type:"button",class:o.tagClose,onclick:I=>{I.stopPropagation();const D=b.find(L=>L.label===a);if(D){const L=S.filter(X=>X!==D.value);m==null||m(L)}}},"✕")))),e("input",{type:"text",class:o.input,placeholder:!v&&w.length>0?w[0]:f,disabled:n,value:this.query,oninput:a=>{this.query=a.target.value,this.isOpen=!C||this.query.length>=C,this.highlightIndex=0},onfocus:()=>{h&&(!C||this.query.length>=C)&&(this.isOpen=!0)},onkeydown:a=>this.handleKeydown(a,$,S,v,m,N,g),oncreate:a=>{this.inputEl=a.dom}}),S.length>0&&!v&&e("button",{type:"button",class:o.clearTrigger,onclick:a=>{a.stopPropagation(),this.query="",m==null||m(v?[]:"")}},"✕"),e("span",{class:o.triggerIcon,onclick:()=>{n||(this.isOpen=!this.isOpen)}},"▾")),this.isOpen&&e("div",{class:o.content,oncreate:a=>{var I;(I=this.cleanupAutoUpdate)==null||I.call(this),this.containerEl&&(this.cleanupAutoUpdate=K(this.containerEl,a.dom,{placement:"bottom-start",matchWidth:!0,offsetValue:4}))},onremove:()=>{var a;(a=this.cleanupAutoUpdate)==null||a.call(this),this.cleanupAutoUpdate=null}},this.renderContent($,S,v,m,N,g)))}renderContent(l,t,d,b,p,m){const v=(n,u)=>e("div",{key:n.value,class:M(o.item,{[o.itemHighlighted]:u===this.highlightIndex},{[o.itemSelected]:t.includes(n.value)},{[o.itemDisabled]:n.disabled}),onmouseenter:()=>{this.highlightIndex=u},onclick:()=>{if(!n.disabled)if(d){const y=t.includes(n.value)?t.filter(g=>g!==n.value):[...t,n.value];b==null||b(y)}else b==null||b(n.value),this.isOpen=!1,this.query=""}},d&&e("span",{class:o.itemCheck},t.includes(n.value)?"✓":""),n.label);if(l.length===0&&!p)return e("div",{class:o.empty},"結果なし");const h=[];if(l.some(n=>n.group)){const n=new Map;if(l.forEach((u,y)=>{const g=u.group??"";n.has(g)||n.set(g,[]),n.get(g).push({item:u,idx:y})}),n.has(""))for(const{item:u,idx:y}of n.get(""))h.push(v(u,y));for(const[u,y]of n)if(u!==""){h.push(e("div",{key:`grp-${u}`,class:o.itemGroupLabel},u));for(const{item:g,idx:C}of y)h.push(v(g,C))}}else l.forEach((n,u)=>h.push(v(n,u)));if(p){const n=l.length;h.push(e("div",{key:"__creatable__",class:M(o.item,o.creatableItem,{[o.itemHighlighted]:this.highlightIndex===n}),onmouseenter:()=>{this.highlightIndex=n},onclick:()=>{m==null||m(this.query),this.isOpen=!1,this.query=""}},e("span",{class:o.creatableIcon},"＋"),"「",this.query,"」を追加"))}return h}handleKeydown(l,t,d,b,p,m,v){const h=m?t.length:t.length-1;if(l.key==="ArrowDown")l.preventDefault(),this.highlightIndex=Math.min(this.highlightIndex+1,h);else if(l.key==="ArrowUp")l.preventDefault(),this.highlightIndex=Math.max(this.highlightIndex-1,0);else if(l.key==="Enter"){if(l.preventDefault(),m&&this.highlightIndex===t.length){v==null||v(this.query),this.isOpen=!1,this.query="";return}const f=t[this.highlightIndex];if(f&&!f.disabled)if(b){const n=d.includes(f.value)?d.filter(u=>u!==f.value):[...d,f.value];p==null||p(n)}else p==null||p(f.value),this.isOpen=!1,this.query=""}else l.key==="Escape"&&(this.isOpen=!1)}}const x={Root:ze},Re=[{value:"manual",label:"Manual"},{value:"auto",label:"Auto"},{value:"maintenance",label:"Maintenance"}];let P="manual";function Te(i){e.mount(i,{view(){return e("div",{style:{display:"grid",gap:"10px",maxWidth:"320px"}},e(x.Root,{items:Re,value:P,onValueChange:l=>{typeof l=="string"&&(P=l),e.redraw()}}),e("div",{style:{color:"#475569",fontSize:"0.9rem"}},"Selected: ",P))}})}const Le=`/** @jsx m */\r
import m from "mithril";\r
import { Combobox } from "mithril-ui-kit";\r
\r
const items = [\r
	{ value: "manual", label: "Manual" },\r
	{ value: "auto", label: "Auto" },\r
	{ value: "maintenance", label: "Maintenance" },\r
];\r
\r
let value = "manual";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div style={{ display: "grid", gap: "10px", maxWidth: "320px" }}>\r
					<Combobox.Root\r
						items={items}\r
						value={value}\r
						onValueChange={(nextValue) => {\r
							if (typeof nextValue === "string") {\r
								value = nextValue;\r
							}\r
							m.redraw();\r
						}}\r
					/>\r
					<div style={{ color: "#475569", fontSize: "0.9rem" }}>Selected: {value}</div>\r
				</div>\r
			);\r
		},\r
	});\r
}`,Me=[{value:"ts",label:"TypeScript"},{value:"js",label:"JavaScript"},{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"mithril",label:"Mithril"},{value:"svelte",label:"Svelte"},{value:"angular",label:"Angular"},{value:"solid",label:"SolidJS"}];let k=[];function Pe(i){e.mount(i,{view(){return e("div",{style:{display:"grid",gap:"10px",maxWidth:"360px"}},e(x.Root,{items:Me,value:k,multiple:!0,placeholder:"スキルを選択...",onValueChange:l=>{k=l,e.redraw()}}),e("div",{style:{color:"#475569",fontSize:"0.9rem"}},"選択中: ",k.length>0?k.join(", "):"（なし）"))}})}const Ve=`/** @jsx m */\r
import m from "mithril";\r
import { Combobox } from "mithril-ui-kit";\r
\r
const skills = [\r
	{ value: "ts", label: "TypeScript" },\r
	{ value: "js", label: "JavaScript" },\r
	{ value: "react", label: "React" },\r
	{ value: "vue", label: "Vue" },\r
	{ value: "mithril", label: "Mithril" },\r
	{ value: "svelte", label: "Svelte" },\r
	{ value: "angular", label: "Angular" },\r
	{ value: "solid", label: "SolidJS" },\r
];\r
\r
let selected: string[] = [];\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div style={{ display: "grid", gap: "10px", maxWidth: "360px" }}>\r
					<Combobox.Root\r
						items={skills}\r
						value={selected}\r
						multiple={true}\r
						placeholder="スキルを選択..."\r
						onValueChange={(v) => {\r
							selected = v as string[];\r
							m.redraw();\r
						}}\r
					/>\r
					<div style={{ color: "#475569", fontSize: "0.9rem" }}>\r
						選択中: {selected.length > 0 ? selected.join(", ") : "（なし）"}\r
					</div>\r
				</div>\r
			);\r
		},\r
	});\r
}\r
`,Ae=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"mithril",label:"Mithril"},{value:"svelte",label:"Svelte"},{value:"solid",label:"SolidJS"}],U={outline:"",subtle:"",flushed:""};function Ee(i){e.mount(i,{view(){return e("div",{style:{display:"grid",gap:"16px",maxWidth:"360px"}},["outline","subtle","flushed"].map(l=>e("div",{key:l},e("div",{style:{fontSize:"0.8rem",color:"#64748b",marginBottom:"4px"}},l),e(x.Root,{items:Ae,value:U[l],variant:l,placeholder:`${l} スタイル`,onValueChange:t=>{U[l]=t,e.redraw()}}))))}})}const je=`/** @jsx m */\r
import m from "mithril";\r
import { Combobox } from "mithril-ui-kit";\r
\r
const items = [\r
	{ value: "react", label: "React" },\r
	{ value: "vue", label: "Vue" },\r
	{ value: "mithril", label: "Mithril" },\r
	{ value: "svelte", label: "Svelte" },\r
	{ value: "solid", label: "SolidJS" },\r
];\r
\r
const values: Record<string, string> = {\r
	outline: "",\r
	subtle: "",\r
	flushed: "",\r
};\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div style={{ display: "grid", gap: "16px", maxWidth: "360px" }}>\r
					{(["outline", "subtle", "flushed"] as const).map((variant) => (\r
						<div key={variant}>\r
							<div style={{ fontSize: "0.8rem", color: "#64748b", marginBottom: "4px" }}>\r
								{variant}\r
							</div>\r
							<Combobox.Root\r
								items={items}\r
								value={values[variant]}\r
								variant={variant}\r
								placeholder={\`\${variant} スタイル\`}\r
								onValueChange={(v) => {\r
									values[variant] = v as string;\r
									m.redraw();\r
								}}\r
							/>\r
						</div>\r
					))}\r
				</div>\r
			);\r
		},\r
	});\r
}\r
`,Oe=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"mithril",label:"Mithril"},{value:"svelte",label:"Svelte"}],B={xs:"",sm:"",md:"",lg:""};function $e(i){e.mount(i,{view(){return e("div",{style:{display:"grid",gap:"12px",maxWidth:"360px"}},["xs","sm","md","lg"].map(l=>e("div",{key:l,style:{display:"flex",alignItems:"center",gap:"8px"}},e("span",{style:{width:"24px",fontSize:"0.75rem",color:"#64748b",flexShrink:"0"}},l),e(x.Root,{items:Oe,value:B[l],size:l,placeholder:"フレームワークを選択",onValueChange:t=>{B[l]=t,e.redraw()}}))))}})}const Ne=`/** @jsx m */\r
import m from "mithril";\r
import { Combobox, type ComboboxSize } from "mithril-ui-kit";\r
\r
const items = [\r
	{ value: "react", label: "React" },\r
	{ value: "vue", label: "Vue" },\r
	{ value: "mithril", label: "Mithril" },\r
	{ value: "svelte", label: "Svelte" },\r
];\r
\r
const values: Record<string, string> = { xs: "", sm: "", md: "", lg: "" };\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div style={{ display: "grid", gap: "12px", maxWidth: "360px" }}>\r
					{(["xs", "sm", "md", "lg"] as ComboboxSize[]).map((size) => (\r
						<div key={size} style={{ display: "flex", alignItems: "center", gap: "8px" }}>\r
							<span style={{ width: "24px", fontSize: "0.75rem", color: "#64748b", flexShrink: "0" }}>\r
								{size}\r
							</span>\r
							<Combobox.Root\r
								items={items}\r
								value={values[size]}\r
								size={size}\r
								placeholder="フレームワークを選択"\r
								onValueChange={(v) => {\r
									values[size] = v as string;\r
									m.redraw();\r
								}}\r
							/>\r
						</div>\r
					))}\r
				</div>\r
			);\r
		},\r
	});\r
}\r
`,De=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"mithril",label:"Mithril"},{value:"svelte",label:"Svelte"}];let V=[...De],q="";function We(i){e.mount(i,{view(){return e("div",{style:{display:"grid",gap:"10px",maxWidth:"360px"}},e(x.Root,{items:V,value:q,creatable:!0,placeholder:"フレームワークを入力または選択...",onValueChange:l=>{q=l,e.redraw()},onCreateItem:l=>{const t={value:l.toLowerCase().replace(/\s+/g,"-"),label:l};V=[...V,t],q=t.value,e.redraw()}}),e("div",{style:{color:"#475569",fontSize:"0.9rem"}},"選択中: ",q||"（なし）"),e("div",{style:{color:"#94a3b8",fontSize:"0.8rem"}},"リストにない値を入力すると「追加」オプションが表示されます"))}})}const He=`/** @jsx m */\r
import m from "mithril";\r
import { Combobox, type ComboboxItem } from "mithril-ui-kit";\r
\r
const initialItems: ComboboxItem[] = [\r
	{ value: "react", label: "React" },\r
	{ value: "vue", label: "Vue" },\r
	{ value: "mithril", label: "Mithril" },\r
	{ value: "svelte", label: "Svelte" },\r
];\r
\r
let items = [...initialItems];\r
let selected = "";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div style={{ display: "grid", gap: "10px", maxWidth: "360px" }}>\r
					<Combobox.Root\r
						items={items}\r
						value={selected}\r
						creatable={true}\r
						placeholder="フレームワークを入力または選択..."\r
						onValueChange={(v) => {\r
							selected = v as string;\r
							m.redraw();\r
						}}\r
						onCreateItem={(newValue) => {\r
							// 新規アイテムを追加してそのまま選択\r
							const newItem: ComboboxItem = { value: newValue.toLowerCase().replace(/\\s+/g, "-"), label: newValue };\r
							items = [...items, newItem];\r
							selected = newItem.value;\r
							m.redraw();\r
						}}\r
					/>\r
					<div style={{ color: "#475569", fontSize: "0.9rem" }}>\r
						選択中: {selected || "（なし）"}\r
					</div>\r
					<div style={{ color: "#94a3b8", fontSize: "0.8rem" }}>\r
						リストにない値を入力すると「追加」オプションが表示されます\r
					</div>\r
				</div>\r
			);\r
		},\r
	});\r
}\r
`,Ue=[{value:"js",label:"JavaScript",group:"フロントエンド"},{value:"ts",label:"TypeScript",group:"フロントエンド"},{value:"react",label:"React",group:"フロントエンド"},{value:"vue",label:"Vue",group:"フロントエンド"},{value:"mithril",label:"Mithril",group:"フロントエンド"},{value:"node",label:"Node.js",group:"バックエンド"},{value:"deno",label:"Deno",group:"バックエンド"},{value:"bun",label:"Bun",group:"バックエンド"},{value:"python",label:"Python",group:"バックエンド"}];let A="";function Be(i){e.mount(i,{view(){return e("div",{style:{display:"grid",gap:"10px",maxWidth:"360px"}},e(x.Root,{items:Ue,value:A,placeholder:"技術スタックを選択...",onValueChange:l=>{A=l,e.redraw()}}),e("div",{style:{color:"#475569",fontSize:"0.9rem"}},"選択中: ",A||"（なし）"))}})}const Je=`/** @jsx m */\r
import m from "mithril";\r
import { Combobox } from "mithril-ui-kit";\r
\r
const items = [\r
	{ value: "js", label: "JavaScript", group: "フロントエンド" },\r
	{ value: "ts", label: "TypeScript", group: "フロントエンド" },\r
	{ value: "react", label: "React", group: "フロントエンド" },\r
	{ value: "vue", label: "Vue", group: "フロントエンド" },\r
	{ value: "mithril", label: "Mithril", group: "フロントエンド" },\r
	{ value: "node", label: "Node.js", group: "バックエンド" },\r
	{ value: "deno", label: "Deno", group: "バックエンド" },\r
	{ value: "bun", label: "Bun", group: "バックエンド" },\r
	{ value: "python", label: "Python", group: "バックエンド" },\r
];\r
\r
let selected = "";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div style={{ display: "grid", gap: "10px", maxWidth: "360px" }}>\r
					<Combobox.Root\r
						items={items}\r
						value={selected}\r
						placeholder="技術スタックを選択..."\r
						onValueChange={(v) => {\r
							selected = v as string;\r
							m.redraw();\r
						}}\r
					/>\r
					<div style={{ color: "#475569", fontSize: "0.9rem" }}>\r
						選択中: {selected || "（なし）"}\r
					</div>\r
				</div>\r
			);\r
		},\r
	});\r
}\r
`,E=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"mithril",label:"Mithril"},{value:"next",label:"Next.js",disabled:!0},{value:"nuxt",label:"Nuxt",disabled:!0},{value:"svelte",label:"Svelte"}];let J="",j="";function Fe(i){e.mount(i,{view(){return e("div",{style:{display:"grid",gap:"20px",maxWidth:"360px"}},e("div",null,e("div",{style:{fontSize:"0.8rem",color:"#64748b",marginBottom:"4px"}},"disabled（コンポーネント全体）"),e(x.Root,{items:E,value:"",disabled:!0,placeholder:"無効化されています"})),e("div",null,e("div",{style:{fontSize:"0.8rem",color:"#64748b",marginBottom:"4px"}},"一部アイテムが disabled"),e(x.Root,{items:E,value:J,placeholder:"選択してください（Next.js / Nuxt は無効）",onValueChange:l=>{J=l,e.redraw()}})),e("div",null,e("div",{style:{fontSize:"0.8rem",color:"#64748b",marginBottom:"4px"}},"invalid（エラー状態）"),e(x.Root,{items:E,value:j,invalid:!0,placeholder:"必須項目です",onValueChange:l=>{j=l,e.redraw()}}),!j&&e("div",{style:{color:"#dc3545",fontSize:"0.8rem",marginTop:"4px"}},"フレームワークを選択してください")))}})}const Ge=`/** @jsx m */\r
import m from "mithril";\r
import { Combobox } from "mithril-ui-kit";\r
\r
const items = [\r
	{ value: "react", label: "React" },\r
	{ value: "vue", label: "Vue" },\r
	{ value: "mithril", label: "Mithril" },\r
	{ value: "next", label: "Next.js", disabled: true },\r
	{ value: "nuxt", label: "Nuxt", disabled: true },\r
	{ value: "svelte", label: "Svelte" },\r
];\r
\r
let normalVal = "";\r
let invalidVal = "";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div style={{ display: "grid", gap: "20px", maxWidth: "360px" }}>\r
					<div>\r
						<div style={{ fontSize: "0.8rem", color: "#64748b", marginBottom: "4px" }}>\r
							disabled（コンポーネント全体）\r
						</div>\r
						<Combobox.Root\r
							items={items}\r
							value=""\r
							disabled={true}\r
							placeholder="無効化されています"\r
						/>\r
					</div>\r
\r
					<div>\r
						<div style={{ fontSize: "0.8rem", color: "#64748b", marginBottom: "4px" }}>\r
							一部アイテムが disabled\r
						</div>\r
						<Combobox.Root\r
							items={items}\r
							value={normalVal}\r
							placeholder="選択してください（Next.js / Nuxt は無効）"\r
							onValueChange={(v) => {\r
								normalVal = v as string;\r
								m.redraw();\r
							}}\r
						/>\r
					</div>\r
\r
					<div>\r
						<div style={{ fontSize: "0.8rem", color: "#64748b", marginBottom: "4px" }}>\r
							invalid（エラー状態）\r
						</div>\r
						<Combobox.Root\r
							items={items}\r
							value={invalidVal}\r
							invalid={true}\r
							placeholder="必須項目です"\r
							onValueChange={(v) => {\r
								invalidVal = v as string;\r
								m.redraw();\r
							}}\r
						/>\r
						{!invalidVal && (\r
							<div style={{ color: "#dc3545", fontSize: "0.8rem", marginTop: "4px" }}>\r
								フレームワークを選択してください\r
							</div>\r
						)}\r
					</div>\r
				</div>\r
			);\r
		},\r
	});\r
}\r
`,Xe=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"mithril",label:"Mithril"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"SolidJS"},{value:"qwik",label:"Qwik"},{value:"preact",label:"Preact"},{value:"lit",label:"Lit"},{value:"alpine",label:"Alpine.js"}];let z=[],R=!1,T="",O=null;function Ke(i){e.mount(i,{view(){return e("div",{style:{display:"grid",gap:"10px",maxWidth:"360px"}},e(x.Root,{items:z,value:T,openOnClick:!1,minChars:1,placeholder:"1文字以上入力して検索...",onValueChange:l=>{T=l,e.redraw()},oninput:l=>{const t=l.target.value;if(O&&clearTimeout(O),!t){z=[],R=!1,e.redraw();return}R=!0,z=[],e.redraw(),O=setTimeout(()=>{z=Xe.filter(d=>d.label.toLowerCase().includes(t.toLowerCase())),R=!1,e.redraw()},600)}}),R&&e("div",{style:{color:"#64748b",fontSize:"0.85rem"}},"🔍 検索中..."),T&&e("div",{style:{color:"#475569",fontSize:"0.9rem"}},"選択中: ",T),e("div",{style:{color:"#94a3b8",fontSize:"0.8rem"}},"600ms のデバウンスで絞り込みます（setTimeout によるシミュレート）"))}})}const Qe=`/** @jsx m */\r
import m from "mithril";\r
import { Combobox, type ComboboxItem } from "mithril-ui-kit";\r
\r
const allItems: ComboboxItem[] = [\r
	{ value: "react", label: "React" },\r
	{ value: "vue", label: "Vue" },\r
	{ value: "mithril", label: "Mithril" },\r
	{ value: "angular", label: "Angular" },\r
	{ value: "svelte", label: "Svelte" },\r
	{ value: "solid", label: "SolidJS" },\r
	{ value: "qwik", label: "Qwik" },\r
	{ value: "preact", label: "Preact" },\r
	{ value: "lit", label: "Lit" },\r
	{ value: "alpine", label: "Alpine.js" },\r
];\r
\r
let displayItems: ComboboxItem[] = [];\r
let isLoading = false;\r
let selected = "";\r
let timerId: ReturnType<typeof setTimeout> | null = null;\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div style={{ display: "grid", gap: "10px", maxWidth: "360px" }}>\r
					<Combobox.Root\r
						items={displayItems}\r
						value={selected}\r
						openOnClick={false}\r
						minChars={1}\r
						placeholder="1文字以上入力して検索..."\r
						onValueChange={(v) => {\r
							selected = v as string;\r
							m.redraw();\r
						}}\r
						oninput={(e: Event) => {\r
							const query = (e.target as HTMLInputElement).value;\r
							// 既存のタイマーをキャンセルして debounce\r
							if (timerId) clearTimeout(timerId);\r
							if (!query) {\r
								displayItems = [];\r
								isLoading = false;\r
								m.redraw();\r
								return;\r
							}\r
							isLoading = true;\r
							displayItems = [];\r
							m.redraw();\r
							timerId = setTimeout(() => {\r
								displayItems = allItems.filter(it =>\r
									it.label.toLowerCase().includes(query.toLowerCase())\r
								);\r
								isLoading = false;\r
								m.redraw();\r
							}, 600);\r
						}}\r
					/>\r
					{isLoading && (\r
						<div style={{ color: "#64748b", fontSize: "0.85rem" }}>\r
							🔍 検索中...\r
						</div>\r
					)}\r
					{selected && (\r
						<div style={{ color: "#475569", fontSize: "0.9rem" }}>\r
							選択中: {selected}\r
						</div>\r
					)}\r
					<div style={{ color: "#94a3b8", fontSize: "0.8rem" }}>\r
						600ms のデバウンスで絞り込みます（setTimeout によるシミュレート）\r
					</div>\r
				</div>\r
			);\r
		},\r
	});\r
}\r
`,lt=JSON.parse('{"title":"Combobox","description":"","frontmatter":{},"headers":[],"relativePath":"Combobox.md","filePath":"Combobox.md","lastUpdated":1782952469000}'),Ye={name:"Combobox.md"},rt=Object.assign(Ye,{setup(i){return(l,t)=>{const d=Q("MithrilDemo");return Y(),Z("div",null,[t[0]||(t[0]=W("",5)),_(d,{setup:c(Te),code:c(Le)},null,8,["setup","code"]),t[1]||(t[1]=r("h3",{id:"複数選択",tabindex:"-1"},[s("複数選択 "),r("a",{class:"header-anchor",href:"#複数選択","aria-label":'Permalink to "複数選択"'},"​")],-1)),t[2]||(t[2]=r("p",null,[r("code",null,"multiple"),s(" を指定すると複数のアイテムをタグ形式で選択できます。")],-1)),_(d,{setup:c(Pe),code:c(Ve)},null,8,["setup","code"]),t[3]||(t[3]=r("h3",{id:"バリアント",tabindex:"-1"},[s("バリアント "),r("a",{class:"header-anchor",href:"#バリアント","aria-label":'Permalink to "バリアント"'},"​")],-1)),t[4]||(t[4]=r("p",null,[r("code",null,"variant"),s(" で外観を切り替えます。")],-1)),_(d,{setup:c(Ee),code:c(je)},null,8,["setup","code"]),t[5]||(t[5]=r("h3",{id:"サイズ",tabindex:"-1"},[s("サイズ "),r("a",{class:"header-anchor",href:"#サイズ","aria-label":'Permalink to "サイズ"'},"​")],-1)),t[6]||(t[6]=r("p",null,[r("code",null,"size"),s(" で入力欄のサイズを変更します。")],-1)),_(d,{setup:c($e),code:c(Ne)},null,8,["setup","code"]),t[7]||(t[7]=r("h3",{id:"creatable-新規値の作成",tabindex:"-1"},[s("Creatable（新規値の作成） "),r("a",{class:"header-anchor",href:"#creatable-新規値の作成","aria-label":'Permalink to "Creatable（新規値の作成）"'},"​")],-1)),t[8]||(t[8]=r("p",null,[r("code",null,"creatable"),s(" を指定すると、リストにない値を入力して追加できます。"),r("code",null,"onCreateItem"),s(" コールバックで受け取り、"),r("code",null,"items"),s(" に追加します。")],-1)),_(d,{setup:c(We),code:c(He)},null,8,["setup","code"]),t[9]||(t[9]=r("h3",{id:"グループ表示",tabindex:"-1"},[s("グループ表示 "),r("a",{class:"header-anchor",href:"#グループ表示","aria-label":'Permalink to "グループ表示"'},"​")],-1)),t[10]||(t[10]=r("p",null,[r("code",null,"ComboboxItem"),s(" の "),r("code",null,"group"),s(" フィールドを指定すると、アイテムがグループラベルつきで表示されます。")],-1)),_(d,{setup:c(Be),code:c(Je)},null,8,["setup","code"]),t[11]||(t[11]=r("h3",{id:"無効状態・エラー状態",tabindex:"-1"},[s("無効状態・エラー状態 "),r("a",{class:"header-anchor",href:"#無効状態・エラー状態","aria-label":'Permalink to "無効状態・エラー状態"'},"​")],-1)),t[12]||(t[12]=r("p",null,[r("code",null,"disabled"),s(" でコンポーネント全体を無効化します。"),r("code",null,"invalid"),s(" でエラー状態の赤いボーダーを表示します。個別アイテムの "),r("code",null,"disabled"),s(" も指定できます。")],-1)),_(d,{setup:c(Fe),code:c(Ge)},null,8,["setup","code"]),t[13]||(t[13]=r("h3",{id:"非同期ロード",tabindex:"-1"},[s("非同期ロード "),r("a",{class:"header-anchor",href:"#非同期ロード","aria-label":'Permalink to "非同期ロード"'},"​")],-1)),t[14]||(t[14]=r("p",null,[r("code",null,"minChars"),s(" で最小入力文字数を設定し、入力イベントで "),r("code",null,"items"),s(" を非同期更新することでAPIドリブンな検索UIを実現できます。")],-1)),_(d,{setup:c(Ke),code:c(Qe)},null,8,["setup","code"]),t[15]||(t[15]=W("",5))])}}});export{lt as __pageData,rt as default};
