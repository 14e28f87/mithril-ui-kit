import{m as i}from"./chunks/theme.DVqxVbXL.js";import{c as m}from"./chunks/Table.BP7XEx9l.js";import{C as S,o as D,c as z,a4 as f,E as B,k as q}from"./chunks/framework.DuWTyC0X.js";const P="_root_14a2o_2",A="_vertical_14a2o_7",V="_horizontal_14a2o_11",N="_item_14a2o_16",O="_disabled_14a2o_25",H="_readOnly_14a2o_29",w="_hiddenInput_14a2o_33",M="_control_14a2o_45",$="_invalid_14a2o_61",W="_indicator_14a2o_69",j="_indicatorDot_14a2o_77",L="_variantSolid_14a2o_85",U="_variantOutline_14a2o_96",X="_variantSubtle_14a2o_106",J="_label_14a2o_117",G="_sizeXs_14a2o_123",K="_sizeSm_14a2o_131",Q="_sizeMd_14a2o_139",Y="_sizeLg_14a2o_147",Z="_colorPrimary_14a2o_157",tt="_colorSecondary_14a2o_161",at="_colorSuccess_14a2o_165",et="_colorWarning_14a2o_169",it="_colorDanger_14a2o_173",st="_colorInfo_14a2o_177",s={root:P,vertical:A,horizontal:V,item:N,disabled:O,readOnly:H,hiddenInput:w,control:M,invalid:$,indicator:W,indicatorDot:j,variantSolid:L,variantOutline:U,variantSubtle:X,label:J,sizeXs:G,sizeSm:K,sizeMd:Q,sizeLg:Y,colorPrimary:Z,colorSecondary:tt,colorSuccess:at,colorWarning:et,colorDanger:it,colorInfo:st};function _(n){return n.charAt(0).toUpperCase()+n.slice(1)}class dt{constructor(){this.internalValue="",this.groupName=""}oninit(a){this.internalValue=a.attrs.defaultValue??"",this.groupName=a.attrs.name||`radio-${Math.random().toString(36).slice(2,9)}`}view(a){const{variant:e="outline",size:t="md",color:r,value:l,defaultValue:b,onValueChange:h,name:o,disabled:c,readOnly:p,orientation:u="vertical",class:g,style:E}=a.attrs,k=l!==void 0?l:this.internalValue,F=C=>{c||p||(this.isControlled(a.attrs)||(this.internalValue=C),h==null||h({value:C}))},x={...E??{}},T=this.processChildren(a.children,{variant:e,size:t,currentValue:k,groupName:this.groupName,disabled:c,readOnly:p,handleChange:F});return i("div",{role:"radiogroup","aria-orientation":u,class:m(s.root,u==="horizontal"?s.horizontal:s.vertical,r&&s[`color${_(r)}`],g),style:x,"data-scope":"radio-group","data-part":"root"},T)}isControlled(a){return a.value!==void 0}processChildren(a,e){return!a||!Array.isArray(a)?a:a.map(t=>!t||typeof t!="object"||!t.tag?t:t.tag===y?i(y,{...t.attrs,_ctx:e},t.children):t)}}class y{view(a){const{value:e,disabled:t,invalid:r,class:l,style:b,_ctx:h}=a.attrs,o=h||{},c=t||o.disabled,p=o.currentValue===e,u=p?"checked":"unchecked",g=()=>{var k;!c&&!o.readOnly&&((k=o.handleChange)==null||k.call(o,e))},E=this.processChildren(a.children,{...o,value:e,isChecked:p,isDisabled:c,state:u,handleClick:g});return i("label",{class:m(s.item,s[`variant${_(o.variant||"outline")}`],s[`size${_(o.size||"md")}`],{[s.disabled]:c,[s.readOnly]:o.readOnly,[s.invalid]:r},l),style:b,"data-scope":"radio-group","data-part":"item","data-state":u},E)}processChildren(a,e){return!a||!Array.isArray(a)?a:a.map(t=>!t||typeof t!="object"||!t.tag?t:t.tag===I?i(I,{...t.attrs,_ctx:e},t.children):t.tag===R?i(R,{...t.attrs,_ctx:e},t.children):t.tag===v?i(v,{...t.attrs,_ctx:e},t.children):t)}}class I{view(a){const{_ctx:e,class:t,style:r}=a.attrs,l=e||{};return i("span",{class:m(s.control,t),style:r,"data-scope":"radio-group","data-part":"item-control","data-state":l.state||"unchecked"},i("span",{class:s.indicator,"data-part":"item-indicator","data-state":l.state||"unchecked"},i("span",{class:s.indicatorDot})))}}class R{view(a){const{class:e,style:t,_ctx:r}=a.attrs;return i("span",{class:m(s.label,e),style:t,"data-scope":"radio-group","data-part":"item-text","data-state":(r==null?void 0:r.state)||"unchecked"},a.children)}}class v{view(a){const e=a.attrs._ctx||{};return i("input",{type:"radio",name:e.groupName,value:e.value,checked:e.isChecked,disabled:e.isDisabled,class:s.hiddenInput,onchange:()=>{var t;return(t=e.handleClick)==null?void 0:t.call(e)},role:"radio","aria-checked":e.isChecked,"data-scope":"radio-group","data-part":"item-hidden-input"})}}const d={Root:dt,Item:y,ItemIndicator:I,ItemText:R,ItemHiddenInput:v};function ot(n){let a="manual";i.mount(n,{view(){return i("div",{style:{display:"grid",gap:"12px",maxWidth:"360px"}},i(d.Root,{value:a,orientation:"vertical",onValueChange:e=>{a=e.value,i.redraw()}},i(d.Item,{value:"manual"},i(d.ItemHiddenInput,null),i(d.ItemIndicator,null),i(d.ItemText,null,"手動運転")),i(d.Item,{value:"auto"},i(d.ItemHiddenInput,null),i(d.ItemIndicator,null),i(d.ItemText,null,"自動運転")),i(d.Item,{value:"maintenance"},i(d.ItemHiddenInput,null),i(d.ItemIndicator,null),i(d.ItemText,null,"保守モード"))),i("div",{style:{color:"#475569",fontSize:"0.875rem"}},`選択中: ${a}`))}})}const nt=`/** @jsx m */\r
import m from "mithril";\r
import { Radio } from "mithril-ui-kit";\r
\r
export function setup(el: HTMLElement): void {\r
  let selected = "manual";\r
\r
  m.mount(el, {\r
    view() {\r
      return (\r
        <div style={{ display: "grid", gap: "12px", maxWidth: "360px" }}>\r
          <Radio.Root\r
            value={selected}\r
            orientation="vertical"\r
            onValueChange={(details) => {\r
              selected = details.value;\r
              m.redraw();\r
            }}\r
          >\r
            <Radio.Item value="manual">\r
              <Radio.ItemHiddenInput />\r
              <Radio.ItemIndicator />\r
              <Radio.ItemText>手動運転</Radio.ItemText>\r
            </Radio.Item>\r
            <Radio.Item value="auto">\r
              <Radio.ItemHiddenInput />\r
              <Radio.ItemIndicator />\r
              <Radio.ItemText>自動運転</Radio.ItemText>\r
            </Radio.Item>\r
            <Radio.Item value="maintenance">\r
              <Radio.ItemHiddenInput />\r
              <Radio.ItemIndicator />\r
              <Radio.ItemText>保守モード</Radio.ItemText>\r
            </Radio.Item>\r
          </Radio.Root>\r
          <div style={{ color: "#475569", fontSize: "0.875rem" }}>{\`選択中: \${selected}\`}</div>\r
        </div>\r
      );\r
    }\r
  });\r
}\r
`,pt=JSON.parse('{"title":"Radio","description":"","frontmatter":{},"headers":[],"relativePath":"Radio.md","filePath":"Radio.md","lastUpdated":1781499621000}'),rt={name:"Radio.md"},ut=Object.assign(rt,{setup(n){return(a,e)=>{const t=S("MithrilDemo");return D(),z("div",null,[e[0]||(e[0]=f("",4)),B(t,{setup:q(ot),code:q(nt)},null,8,["setup","code"]),e[1]||(e[1]=f("",9))])}}});export{pt as __pageData,ut as default};
