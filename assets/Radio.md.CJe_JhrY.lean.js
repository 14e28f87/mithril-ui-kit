import{m as i}from"./chunks/theme.BHMR1ScI.js";import{c as m}from"./chunks/Table.DpkFVNUa.js";import{C as P,o as z,c as S,a4 as f,E as B,k as F}from"./chunks/framework.DuWTyC0X.js";const j="_root_1sjnh_1",A="_vertical_1sjnh_6",D="_horizontal_1sjnh_10",V="_item_1sjnh_15",N="_disabled_1sjnh_24",O="_readOnly_1sjnh_28",H="_hiddenInput_1sjnh_32",w="_control_1sjnh_44",M="_invalid_1sjnh_60",$="_indicator_1sjnh_68",L="_indicatorDot_1sjnh_76",U="_variantSolid_1sjnh_84",X="_variantOutline_1sjnh_95",W="_variantSubtle_1sjnh_105",J="_label_1sjnh_116",G="_sizeXs_1sjnh_122",K="_sizeSm_1sjnh_130",Q="_sizeMd_1sjnh_138",Y="_sizeLg_1sjnh_146",s={root:j,vertical:A,horizontal:D,item:V,disabled:N,readOnly:O,hiddenInput:H,control:w,invalid:M,indicator:$,indicatorDot:L,variantSolid:U,variantOutline:X,variantSubtle:W,label:J,sizeXs:G,sizeSm:K,sizeMd:Q,sizeLg:Y};function x(o){return o.charAt(0).toUpperCase()+o.slice(1)}class Z{constructor(){this.internalValue="",this.groupName=""}oninit(a){this.internalValue=a.attrs.defaultValue??"",this.groupName=a.attrs.name||`radio-${Math.random().toString(36).slice(2,9)}`}view(a){const{variant:e="outline",size:t="md",colorPalette:r,value:l,defaultValue:v,onValueChange:h,name:n,disabled:c,readOnly:p,orientation:u="vertical",class:g,style:E}=a.attrs,k=l!==void 0?l:this.internalValue,q=C=>{c||p||(this.isControlled(a.attrs)||(this.internalValue=C),h==null||h({value:C}))},b={...E??{}};r&&(b["--radio-color"]=r);const T=this.processChildren(a.children,{variant:e,size:t,currentValue:k,groupName:this.groupName,disabled:c,readOnly:p,handleChange:q});return i("div",{role:"radiogroup","aria-orientation":u,class:m(s.root,u==="horizontal"?s.horizontal:s.vertical,g),style:b,"data-scope":"radio-group","data-part":"root"},T)}isControlled(a){return a.value!==void 0}processChildren(a,e){return!a||!Array.isArray(a)?a:a.map(t=>!t||typeof t!="object"||!t.tag?t:t.tag===y?i(y,{...t.attrs,_ctx:e},t.children):t)}}class y{view(a){const{value:e,disabled:t,invalid:r,class:l,style:v,_ctx:h}=a.attrs,n=h||{},c=t||n.disabled,p=n.currentValue===e,u=p?"checked":"unchecked",g=()=>{var k;!c&&!n.readOnly&&((k=n.handleChange)==null||k.call(n,e))},E=this.processChildren(a.children,{...n,value:e,isChecked:p,isDisabled:c,state:u,handleClick:g});return i("label",{class:m(s.item,s[`variant${x(n.variant||"outline")}`],s[`size${x(n.size||"md")}`],{[s.disabled]:c,[s.readOnly]:n.readOnly,[s.invalid]:r},l),style:v,"data-scope":"radio-group","data-part":"item","data-state":u},E)}processChildren(a,e){return!a||!Array.isArray(a)?a:a.map(t=>!t||typeof t!="object"||!t.tag?t:t.tag===_?i(_,{...t.attrs,_ctx:e},t.children):t.tag===I?i(I,{...t.attrs,_ctx:e},t.children):t.tag===R?i(R,{...t.attrs,_ctx:e},t.children):t)}}class _{view(a){const{_ctx:e,class:t,style:r}=a.attrs,l=e||{};return i("span",{class:m(s.control,t),style:r,"data-scope":"radio-group","data-part":"item-control","data-state":l.state||"unchecked"},i("span",{class:s.indicator,"data-part":"item-indicator","data-state":l.state||"unchecked"},i("span",{class:s.indicatorDot})))}}class I{view(a){const{class:e,style:t,_ctx:r}=a.attrs;return i("span",{class:m(s.label,e),style:t,"data-scope":"radio-group","data-part":"item-text","data-state":(r==null?void 0:r.state)||"unchecked"},a.children)}}class R{view(a){const e=a.attrs._ctx||{};return i("input",{type:"radio",name:e.groupName,value:e.value,checked:e.isChecked,disabled:e.isDisabled,class:s.hiddenInput,onchange:()=>{var t;return(t=e.handleClick)==null?void 0:t.call(e)},role:"radio","aria-checked":e.isChecked,"data-scope":"radio-group","data-part":"item-hidden-input"})}}const d={Root:Z,Item:y,ItemIndicator:_,ItemText:I,ItemHiddenInput:R};function tt(o){let a="manual";i.mount(o,{view(){return i("div",{style:{display:"grid",gap:"12px",maxWidth:"360px"}},i(d.Root,{value:a,orientation:"vertical",onValueChange:e=>{a=e.value,i.redraw()}},i(d.Item,{value:"manual"},i(d.ItemHiddenInput,null),i(d.ItemIndicator,null),i(d.ItemText,null,"手動運転")),i(d.Item,{value:"auto"},i(d.ItemHiddenInput,null),i(d.ItemIndicator,null),i(d.ItemText,null,"自動運転")),i(d.Item,{value:"maintenance"},i(d.ItemHiddenInput,null),i(d.ItemIndicator,null),i(d.ItemText,null,"保守モード"))),i("div",{style:{color:"#475569",fontSize:"0.875rem"}},`選択中: ${a}`))}})}const at=`/** @jsx m */\r
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
`,nt=JSON.parse('{"title":"Radio","description":"","frontmatter":{},"headers":[],"relativePath":"Radio.md","filePath":"Radio.md","lastUpdated":1776836643000}'),et={name:"Radio.md"},ot=Object.assign(et,{setup(o){return(a,e)=>{const t=P("MithrilDemo");return z(),S("div",null,[e[0]||(e[0]=f("",5)),B(t,{setup:F(tt),code:F(at)},null,8,["setup","code"]),e[1]||(e[1]=f("",9))])}}});export{nt as __pageData,ot as default};
