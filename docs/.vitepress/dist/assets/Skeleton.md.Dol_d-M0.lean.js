import{m as e}from"./chunks/theme.D5gNcpBr.js";import{c as _}from"./chunks/Table.A5W0Ssaz.js";import{C as k,o as f,c as x,ai as u,E as g,k as m}from"./chunks/framework.Bm_aoSIc.js";const b="_skeleton_3pogj_2",S="_variantPulse_3pogj_9",v="_pulse_3pogj_1",q="_variantShine_3pogj_13",C="_shimmer_3pogj_1",P="_variantNone_3pogj_26",y="_textContainer_3pogj_44",T="_textLine_3pogj_51",c={skeleton:b,variantPulse:S,pulse:v,variantShine:q,shimmer:C,variantNone:P,textContainer:y,textLine:T};function N(o){return o.charAt(0).toUpperCase()+o.slice(1)}class h{view(n){const{variant:t="pulse",loading:r=!0,height:a,width:d,borderRadius:i,class:p,...s}=n.attrs;if(!r)return e(e.fragment,null,n.children);const l={};return a&&(l.height=a),d&&(l.width=d),i&&(l.borderRadius=i),e("div",{...s,class:_(c.skeleton,c[`variant${N(t)}`],p),style:l,"aria-busy":"true","aria-live":"polite"})}}class j{view(n){const{size:t="2.5rem",class:r,...a}=n.attrs;return e(h,{...a,height:t,width:t,borderRadius:"50%",class:r})}}class w{view(n){const{noOfLines:t=3,class:r,loading:a=!0,...d}=n.attrs;if(!a)return e(e.fragment,null,n.children);const i=Array.from({length:t},(p,s)=>e(h,{key:s,...d,height:"0.75rem",width:s===t-1?"80%":"100%",class:c.textLine}));return e("div",{class:_(c.textContainer,r)},i)}}function A(o){e.mount(o,{view(){return e("div",{style:{display:"grid",gap:"16px"}},e("div",{style:{display:"flex",alignItems:"center",gap:"12px"}},e(j,{size:"56px"}),e("div",{style:{flex:1}},e(w,{noOfLines:3}))),e(h,{height:"120px",borderRadius:"16px",variant:"shine"}))}})}const R=`/** @jsx m */\r
import m from "mithril";\r
import { Skeleton, SkeletonCircle, SkeletonText } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div style={{ display: "grid", gap: "16px" }}>\r
					<div style={{ display: "flex", alignItems: "center", gap: "12px" }}>\r
						<SkeletonCircle size="56px" />\r
						<div style={{ flex: 1 }}>\r
							<SkeletonText noOfLines={3} />\r
						</div>\r
					</div>\r
					<Skeleton height="120px" borderRadius="16px" variant="shine" />\r
				</div>\r
			);\r
		},\r
	});\r
}`,E=JSON.parse('{"title":"Skeleton","description":"","frontmatter":{},"headers":[],"relativePath":"Skeleton.md","filePath":"Skeleton.md"}'),D={name:"Skeleton.md"},O=Object.assign(D,{setup(o){return(n,t)=>{const r=k("MithrilDemo");return f(),x("div",null,[t[0]||(t[0]=u("",5)),g(r,{setup:m(A),code:m(R)},null,8,["setup","code"]),t[1]||(t[1]=u("",5))])}}});export{E as __pageData,O as default};
