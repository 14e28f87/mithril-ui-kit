import{m as n}from"./chunks/theme.C32Rvu8V.js";import{c as o}from"./chunks/Table.MsshMnDN.js";import{C as x,o as I,c as b,a4 as m,E as g,k as p}from"./chunks/framework.DuWTyC0X.js";const f="_root_1m0z2_2",T="_branch_1m0z2_9",S="_branchControl_1m0z2_13",w="_branchContent_1m0z2_26",z="_branchIndicator_1m0z2_30",v="_expanded_1m0z2_41",q="_branchText_1m0z2_45",C="_item_1m0z2_49",P="_disabled_1m0z2_58",V="_itemText_1m0z2_62",y="_icon_1m0z2_66",k="_selected_1m0z2_72",A="_sizeSm_1m0z2_83",R="_sizeMd_1m0z2_91",D="_sizeLg_1m0z2_99",E="_variantPlain_1m0z2_108",N="_variantSubtle_1m0z2_112",d={root:f,branch:T,branchControl:S,branchContent:w,branchIndicator:z,expanded:v,branchText:q,item:C,disabled:P,itemText:V,icon:y,selected:k,sizeSm:A,sizeMd:R,sizeLg:D,variantPlain:E,variantSubtle:N};function _(a){return a.charAt(0).toUpperCase()+a.slice(1)}class L{constructor(){this.expandedIds=new Set,this.selectedIds=new Set}oninit(e){e.attrs.expandedIds&&(this.expandedIds=new Set(e.attrs.expandedIds)),e.attrs.selectedIds&&(this.selectedIds=new Set(e.attrs.selectedIds))}onupdate(e){e.attrs.expandedIds&&(this.expandedIds=new Set(e.attrs.expandedIds)),e.attrs.selectedIds&&(this.selectedIds=new Set(e.attrs.selectedIds))}toggleExpand(e,t){var r;this.expandedIds.has(e)?this.expandedIds.delete(e):this.expandedIds.add(e),(r=t.onExpandChange)==null||r.call(t,Array.from(this.expandedIds))}toggleSelect(e,t){var r;this.selectedIds.has(e)?this.selectedIds.delete(e):this.selectedIds.add(e),(r=t.onSelectionChange)==null||r.call(t,Array.from(this.selectedIds))}view(e){const{size:t="md",variant:r="plain",data:c=[],class:s,...i}=e.attrs;return n("div",{...i,role:"tree",class:o(d.root,d[`size${_(t)}`],d[`variant${_(r)}`],s)},c.map(l=>this.renderNode(l,0,e.attrs)))}renderNode(e,t,r){const c=e.children&&e.children.length>0,s=this.expandedIds.has(e.id),i=this.selectedIds.has(e.id);return c?n("div",{class:d.branch,key:e.id},n("div",{class:o(d.branchControl,{[d.selected]:i}),style:{paddingLeft:`${t*1.25}rem`},onclick:()=>{this.toggleExpand(e.id,r),this.toggleSelect(e.id,r)},role:"treeitem","aria-expanded":s},n("span",{class:o(d.branchIndicator,{[d.expanded]:s})},"▶"),e.icon&&n("span",{class:d.icon},e.icon),n("span",{class:d.branchText},e.name)),s&&n("div",{class:d.branchContent,role:"group"},e.children.map(l=>this.renderNode(l,t+1,r)))):n("div",{key:e.id,class:o(d.item,{[d.selected]:i},{[d.disabled]:e.disabled}),style:{paddingLeft:`${t*1.25+1.25}rem`},onclick:()=>{e.disabled||this.toggleSelect(e.id,r)},role:"treeitem"},e.icon&&n("span",{class:d.icon},e.icon),n("span",{class:d.itemText},e.name))}}const M={Root:L},B=[{id:"recipes",name:"Recipes",children:[{id:"r1",name:"Stoneware"},{id:"r2",name:"Porcelain"}]},{id:"devices",name:"Devices",children:[{id:"d1",name:"Kiln A"},{id:"d2",name:"Kiln B"}]}];let h=["r1"],u=["recipes"];function j(a){n.mount(a,{view(){return n("div",{style:{display:"grid",gap:"10px",maxWidth:"320px"}},n(M.Root,{data:B,selectedIds:h,expandedIds:u,onSelectionChange:e=>{h=e,n.redraw()},onExpandChange:e=>{u=e,n.redraw()}}),n("div",{style:{color:"#475569",fontSize:"0.9rem"}},"Selected: ",h.join(", ")))}})}const K=`/** @jsx m */\r
import m from "mithril";\r
import { TreeView } from "mithril-ui-kit";\r
\r
const data = [\r
	{\r
		id: "recipes",\r
		name: "Recipes",\r
		children: [\r
			{ id: "r1", name: "Stoneware" },\r
			{ id: "r2", name: "Porcelain" },\r
		],\r
	},\r
	{\r
		id: "devices",\r
		name: "Devices",\r
		children: [\r
			{ id: "d1", name: "Kiln A" },\r
			{ id: "d2", name: "Kiln B" },\r
		],\r
	},\r
];\r
\r
let selectedIds = ["r1"];\r
let expandedIds = ["recipes"];\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div style={{ display: "grid", gap: "10px", maxWidth: "320px" }}>\r
					<TreeView.Root\r
						data={data}\r
						selectedIds={selectedIds}\r
						expandedIds={expandedIds}\r
						onSelectionChange={(nextIds) => {\r
							selectedIds = nextIds;\r
							m.redraw();\r
						}}\r
						onExpandChange={(nextIds) => {\r
							expandedIds = nextIds;\r
							m.redraw();\r
						}}\r
					/>\r
					<div style={{ color: "#475569", fontSize: "0.9rem" }}>Selected: {selectedIds.join(", ")}</div>\r
				</div>\r
			);\r
		},\r
	});\r
}`,H=JSON.parse('{"title":"TreeView","description":"","frontmatter":{},"headers":[],"relativePath":"TreeView.md","filePath":"TreeView.md","lastUpdated":1776646114000}'),U={name:"TreeView.md"},J=Object.assign(U,{setup(a){return(e,t)=>{const r=x("MithrilDemo");return I(),b("div",null,[t[0]||(t[0]=m("",5)),g(r,{setup:p(j),code:p(K)},null,8,["setup","code"]),t[1]||(t[1]=m("",3))])}}});export{H as __pageData,J as default};
