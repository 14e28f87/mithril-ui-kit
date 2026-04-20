import{m as e}from"./chunks/theme.BXbJ2X8L.js";import{F as t}from"./chunks/Table.Dq6qlMER.js";import{C as c,o as p,c as s,ai as l,E as u,k as a}from"./chunks/framework.Bm_aoSIc.js";let i=[];function h(d){e.mount(d,{view(){return e(t.Root,{multiple:!0,accept:".json,.csv",files:i,onFilesChange:r=>{i=r,e.redraw()}},e(t.Label,null,"Upload recipe files"),e(t.Dropzone,null,e(t.DropzoneContent,null,"Drag and drop files here, or click to browse.")),e(t.Trigger,null,"Select files"),e(t.ItemGroup,null))}})}const m=`/** @jsx m */\r
import m from "mithril";\r
import { FileUpload } from "mithril-ui-kit";\r
\r
let files: File[] = [];\r
\r
export function setup(el: HTMLElement): void {\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<FileUpload.Root\r
					multiple={true}\r
					accept=".json,.csv"\r
					files={files}\r
					onFilesChange={(nextFiles) => {\r
						files = nextFiles;\r
						m.redraw();\r
					}}\r
				>\r
					<FileUpload.Label>Upload recipe files</FileUpload.Label>\r
					<FileUpload.Dropzone>\r
						<FileUpload.DropzoneContent>\r
							Drag and drop files here, or click to browse.\r
						</FileUpload.DropzoneContent>\r
					</FileUpload.Dropzone>\r
					<FileUpload.Trigger>Select files</FileUpload.Trigger>\r
					<FileUpload.ItemGroup />\r
				</FileUpload.Root>\r
			);\r
		},\r
	});\r
}`,_=JSON.parse('{"title":"FileUpload","description":"","frontmatter":{},"headers":[],"relativePath":"FileUpload.md","filePath":"FileUpload.md"}'),f={name:"FileUpload.md"},g=Object.assign(f,{setup(d){return(r,o)=>{const n=c("MithrilDemo");return p(),s("div",null,[o[0]||(o[0]=l("",5)),u(n,{setup:a(h),code:a(m)},null,8,["setup","code"]),o[1]||(o[1]=l("",5))])}}});export{_ as __pageData,g as default};
