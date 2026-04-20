import{m as i}from"./chunks/theme.BkMwotUo.js";import{f as s}from"./chunks/Table.CoGcR3xC.js";import{C as d,o as h,c as r,a4 as l,E as k,k as e}from"./chunks/framework.DuWTyC0X.js";function p(t){i.mount(t,{view(){return i("div",{style:"display: flex; flex-direction: column; gap: 2rem; padding: 1rem 0;"},i(s.Root,{min:0,max:100,defaultValue:[50]},i(s.Label,null,"音量"),i(s.ValueText,null),i(s.Control,null,i(s.Track,null,i(s.Range,null)),i(s.Thumb,{index:0}))),i(s.Root,{min:0,max:100,defaultValue:[25,75]},i(s.Label,null,"範囲"),i(s.ValueText,null),i(s.Control,null,i(s.Track,null,i(s.Range,null)),i(s.Thumb,{index:0}),i(s.Thumb,{index:1}))),i(s.Root,{min:0,max:100,step:25,defaultValue:[50]},i(s.Label,null,"設定"),i(s.ValueText,null),i(s.Control,null,i(s.Track,null,i(s.Range,null)),i(s.Thumb,{index:0})),i(s.MarkerGroup,null,i(s.Marker,{value:0},"0%"),i(s.Marker,{value:25},"25%"),i(s.Marker,{value:50},"50%"),i(s.Marker,{value:75},"75%"),i(s.Marker,{value:100},"100%"))),i(s.Root,{min:0,max:100,defaultValue:[60],variant:"solid"},i(s.Label,null,"solid バリアント"),i(s.Control,null,i(s.Track,null,i(s.Range,null)),i(s.Thumb,{index:0}))))}})}const E=`/** @jsx m */\r
import m from "mithril";\r
import { Slider } from "mithriluikit";\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div style="display: flex; flex-direction: column; gap: 2rem; padding: 1rem 0;">\r
					{/* シングルサム */}\r
					<Slider.Root min={0} max={100} defaultValue={[50]}>\r
						<Slider.Label>音量</Slider.Label>\r
						<Slider.ValueText />\r
						<Slider.Control>\r
							<Slider.Track>\r
								<Slider.Range />\r
							</Slider.Track>\r
							<Slider.Thumb index={0} />\r
						</Slider.Control>\r
					</Slider.Root>\r
\r
					{/* レンジ */}\r
					<Slider.Root min={0} max={100} defaultValue={[25, 75]}>\r
						<Slider.Label>範囲</Slider.Label>\r
						<Slider.ValueText />\r
						<Slider.Control>\r
							<Slider.Track>\r
								<Slider.Range />\r
							</Slider.Track>\r
							<Slider.Thumb index={0} />\r
							<Slider.Thumb index={1} />\r
						</Slider.Control>\r
					</Slider.Root>\r
\r
					{/* マーカー付き */}\r
					<Slider.Root min={0} max={100} step={25} defaultValue={[50]}>\r
						<Slider.Label>設定</Slider.Label>\r
						<Slider.ValueText />\r
						<Slider.Control>\r
							<Slider.Track>\r
								<Slider.Range />\r
							</Slider.Track>\r
							<Slider.Thumb index={0} />\r
						</Slider.Control>\r
						<Slider.MarkerGroup>\r
							<Slider.Marker value={0}>0%</Slider.Marker>\r
							<Slider.Marker value={25}>25%</Slider.Marker>\r
							<Slider.Marker value={50}>50%</Slider.Marker>\r
							<Slider.Marker value={75}>75%</Slider.Marker>\r
							<Slider.Marker value={100}>100%</Slider.Marker>\r
						</Slider.MarkerGroup>\r
					</Slider.Root>\r
\r
					{/* solid バリアント */}\r
					<Slider.Root min={0} max={100} defaultValue={[60]} variant="solid">\r
						<Slider.Label>solid バリアント</Slider.Label>\r
						<Slider.Control>\r
							<Slider.Track>\r
								<Slider.Range />\r
							</Slider.Track>\r
							<Slider.Thumb index={0} />\r
						</Slider.Control>\r
					</Slider.Root>\r
				</div>\r
			);\r
		},\r
	});\r
}\r
`,F=JSON.parse('{"title":"Slider","description":"","frontmatter":{},"headers":[],"relativePath":"Slider.md","filePath":"Slider.md","lastUpdated":null}'),o={name:"Slider.md"},C=Object.assign(o,{setup(t){return(g,a)=>{const n=d("MithrilDemo");return h(),r("div",null,[a[0]||(a[0]=l("",4)),k(n,{setup:e(p),code:e(E)},null,8,["setup","code"]),a[1]||(a[1]=l("",17))])}}});export{F as __pageData,C as default};
