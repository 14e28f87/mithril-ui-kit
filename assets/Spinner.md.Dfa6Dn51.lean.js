import{m as e}from"./chunks/theme.DVqxVbXL.js";import{c as u}from"./chunks/Table.BP7XEx9l.js";import{C as m,o as h,c as q,a4 as i,E as f,k as c}from"./chunks/framework.DuWTyC0X.js";const S="_spinner_12162_2",z="_spin_12162_2",g="_sizeInherit_12162_22",y="_sizeXs_12162_28",b="_sizeSm_12162_34",P="_sizeMd_12162_40",x="_sizeLg_12162_46",I="_sizeXl_12162_52",T="_colorPrimary_12162_60",k="_colorSecondary_12162_64",v="_colorSuccess_12162_68",D="_colorWarning_12162_72",A="_colorDanger_12162_76",C="_colorInfo_12162_80",N="_srOnly_12162_85",n={spinner:S,spin:z,sizeInherit:g,sizeXs:y,sizeSm:b,sizeMd:P,sizeLg:x,sizeXl:I,colorPrimary:T,colorSecondary:k,colorSuccess:v,colorWarning:D,colorDanger:A,colorInfo:C,srOnly:N};function d(t){return t.charAt(0).toUpperCase()+t.slice(1)}class s{view(a){const{size:o="md",color:r,label:l="読み込み中",class:_,...p}=a.attrs;return e("span",{...p,role:"status",class:u(n.spinner,n[`size${d(o)}`],r&&n[`color${d(r)}`],_)},e("span",{class:n.srOnly},l))}}function M(t){e.mount(t,{view(){return e("div",{style:{display:"flex",alignItems:"center",gap:"16px"}},e(s,{size:"sm"}),e(s,{size:"md",color:"primary"}),e(s,{size:"lg",color:"success"}),e("span",{style:{color:"#475569"}},"処理状態のフィードバックに使います。"))}})}const O=`/** @jsx m */\r
import m from "mithril";\r
import { Spinner } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div style={{ display: "flex", alignItems: "center", gap: "16px" }}>\r
					<Spinner size="sm" />\r
					<Spinner size="md" color="primary" />\r
					<Spinner size="lg" color="success" />\r
					<span style={{ color: "#475569" }}>処理状態のフィードバックに使います。</span>\r
				</div>\r
			);\r
		},\r
	});\r
}`,L=JSON.parse('{"title":"Spinner","description":"","frontmatter":{},"headers":[],"relativePath":"Spinner.md","filePath":"Spinner.md","lastUpdated":1781499621000}'),V={name:"Spinner.md"},R=Object.assign(V,{setup(t){return(a,o)=>{const r=m("MithrilDemo");return h(),q("div",null,[o[0]||(o[0]=i("",5)),f(r,{setup:c(M),code:c(O)},null,8,["setup","code"]),o[1]||(o[1]=i("",3))])}}});export{L as __pageData,R as default};
