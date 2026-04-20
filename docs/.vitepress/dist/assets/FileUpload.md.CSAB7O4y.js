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
}`,_=JSON.parse('{"title":"FileUpload","description":"","frontmatter":{},"headers":[],"relativePath":"FileUpload.md","filePath":"FileUpload.md"}'),f={name:"FileUpload.md"},g=Object.assign(f,{setup(d){return(r,o)=>{const n=c("MithrilDemo");return p(),s("div",null,[o[0]||(o[0]=l('<h1 id="fileupload" tabindex="-1">FileUpload <a class="header-anchor" href="#fileupload" aria-label="Permalink to &quot;FileUpload&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p><code>FileUpload</code> はクリック選択とドラッグアンドドロップの両方を扱える compound component です。選択済みファイル一覧も同じコンポーネント内で描画でき、添付 UI を 1 つのパターンにまとめられます。</p><h2 id="usage-使用例" tabindex="-1">Usage 使用例 <a class="header-anchor" href="#usage-使用例" aria-label="Permalink to &quot;Usage 使用例&quot;">​</a></h2><h3 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h3>',5)),u(n,{setup:a(h),code:a(m)},null,8,["setup","code"]),o[1]||(o[1]=l('<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="fileupload-root-props" tabindex="-1">FileUpload.Root Props <a class="header-anchor" href="#fileupload-root-props" aria-label="Permalink to &quot;FileUpload.Root Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>multiple</code></td><td><code>boolean</code></td><td><code>false</code></td><td>複数ファイル選択を許可します</td></tr><tr><td><code>accept</code></td><td><code>string</code></td><td>—</td><td><code>input[type=file]</code> の <code>accept</code> 属性です</td></tr><tr><td><code>maxFileSize</code></td><td><code>number</code></td><td>—</td><td>許可する最大ファイルサイズです</td></tr><tr><td><code>maxFiles</code></td><td><code>number</code></td><td>—</td><td>許可する最大ファイル数です</td></tr><tr><td><code>files</code></td><td><code>File[]</code></td><td>—</td><td>制御モード時のファイル配列です</td></tr><tr><td><code>onFilesChange</code></td><td><code>(files: File[]) =&gt; void</code></td><td>—</td><td>ファイル配列変更時に呼ばれます</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>無効化します</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>追加クラスです</td></tr></tbody></table><h3 id="subcomponents" tabindex="-1">Subcomponents <a class="header-anchor" href="#subcomponents" aria-label="Permalink to &quot;Subcomponents&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Component</th><th>Description</th></tr></thead><tbody><tr><td><code>FileUpload.Label</code></td><td>ラベル表示です</td></tr><tr><td><code>FileUpload.Dropzone</code></td><td>ドラッグアンドドロップ領域です</td></tr><tr><td><code>FileUpload.DropzoneContent</code></td><td>ドロップ領域内の説明です</td></tr><tr><td><code>FileUpload.Trigger</code></td><td>ファイル選択ボタンです</td></tr><tr><td><code>FileUpload.ItemGroup</code></td><td>選択済ファイル一覧の描画位置です</td></tr><tr><td><code>FileUpload.ItemName</code></td><td>ファイル名表示 slot です</td></tr><tr><td><code>FileUpload.ItemSizeText</code></td><td>ファイルサイズ表示 slot です</td></tr><tr><td><code>FileUpload.ItemDeleteTrigger</code></td><td>削除ボタン slot です</td></tr></tbody></table>',5))])}}});export{_ as __pageData,g as default};
