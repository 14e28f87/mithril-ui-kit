import{m as e}from"./chunks/theme.BHMR1ScI.js";import{F as t}from"./chunks/Table.DpkFVNUa.js";import{C as c,o as p,c as s,a4 as l,E as h,k as a}from"./chunks/framework.DuWTyC0X.js";let i=[];function u(o){e.mount(o,{view(){return e(t.Root,{multiple:!0,accept:".json,.csv",files:i,onFilesChange:r=>{i=r,e.redraw()}},e(t.Label,null,"Upload recipe files"),e(t.Dropzone,null,e(t.DropzoneContent,null,"Drag and drop files here, or click to browse.")),e(t.Trigger,null,"Select files"),e(t.ItemGroup,null))}})}const m=`/** @jsx m */\r
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
}`,_=JSON.parse('{"title":"FileUpload","description":"","frontmatter":{},"headers":[],"relativePath":"FileUpload.md","filePath":"FileUpload.md","lastUpdated":1776836643000}'),f={name:"FileUpload.md"},g=Object.assign(f,{setup(o){return(r,d)=>{const n=c("MithrilDemo");return p(),s("div",null,[d[0]||(d[0]=l("",5)),h(n,{setup:a(u),code:a(m)},null,8,["setup","code"]),d[1]||(d[1]=l("",5))])}}});export{_ as __pageData,g as default};
