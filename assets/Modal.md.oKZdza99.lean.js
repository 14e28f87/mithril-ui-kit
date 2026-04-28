import{m as s}from"./chunks/theme.BHMR1ScI.js";import{M as t}from"./chunks/Table.DpkFVNUa.js";import{C as h,o,c as r,a4 as l,E as k,k as e}from"./chunks/framework.DuWTyC0X.js";function p(d){let n="未実行";s.mount(d,{view(){return s("div",null,s("div",{class:"d-flex flex-wrap gap-2 mb-2"},s("button",{class:"btn btn-primary btn-sm",onclick:async()=>{n=await t.show({size:"md",placement:"top",content:{view(a){return s(t.Content,null,s(t.Header,null,s(t.Title,null,"確認ダイアログ"),s(t.CloseTrigger,null)),s(t.Body,null,s("p",null,"このデータを削除しますか？")),s(t.Footer,null,s("button",{class:"btn btn-secondary btn-sm",onclick:()=>a.attrs.hide()},"キャンセル"),s("button",{class:"btn btn-danger btn-sm",onclick:()=>a.attrs.resolve(!0)},"削除")))}}})?"削除":"キャンセル",s.redraw()}},"基本ダイアログ"),s("button",{class:"btn btn-info btn-sm",onclick:async()=>{await t.show({size:"lg",placement:"center",content:{view(i){return s(t.Content,null,s(t.Header,null,s(t.Title,null,"センター配置 (lg)"),s(t.CloseTrigger,null)),s(t.Body,null,s("p",null,'placement="center", size="lg" のモーダル')),s(t.Footer,null,s("button",{class:"btn btn-primary btn-sm",onclick:()=>i.attrs.resolve(!0)},"OK")))}}}),s.redraw()}},"center / lg")),s("div",{class:"text-muted small"},`結果: ${n}`))}})}const E=`/** @jsx m */\r
import m from "mithril";\r
import { Modal } from "mithril-ui-kit";\r
\r
/**\r
 * Modal 命令的 API のデモ\r
 */\r
export function setup(el: HTMLElement): void {\r
	let result = "未実行";\r
\r
	m.mount(el, {\r
		view() {\r
			return (\r
				<div>\r
					<div class="d-flex flex-wrap gap-2 mb-2">\r
						<button\r
							class="btn btn-primary btn-sm"\r
							onclick={async () => {\r
								const ok = await Modal.show<boolean>({\r
									size: "md",\r
									placement: "top",\r
									content: {\r
										view(vnode: m.Vnode<any>) {\r
											return (\r
												<Modal.Content>\r
													<Modal.Header>\r
														<Modal.Title>確認ダイアログ</Modal.Title>\r
														<Modal.CloseTrigger />\r
													</Modal.Header>\r
													<Modal.Body>\r
														<p>このデータを削除しますか？</p>\r
													</Modal.Body>\r
													<Modal.Footer>\r
														<button class="btn btn-secondary btn-sm" onclick={() => vnode.attrs.hide()}>キャンセル</button>\r
														<button class="btn btn-danger btn-sm" onclick={() => vnode.attrs.resolve(true)}>削除</button>\r
													</Modal.Footer>\r
												</Modal.Content>\r
											);\r
										},\r
									},\r
								});\r
								result = ok ? "削除" : "キャンセル";\r
								m.redraw();\r
							}}\r
						>\r
							基本ダイアログ\r
						</button>\r
\r
						<button\r
							class="btn btn-info btn-sm"\r
							onclick={async () => {\r
								await Modal.show({\r
									size: "lg",\r
									placement: "center",\r
									content: {\r
										view(vnode: m.Vnode<any>) {\r
											return (\r
												<Modal.Content>\r
													<Modal.Header>\r
														<Modal.Title>センター配置 (lg)</Modal.Title>\r
														<Modal.CloseTrigger />\r
													</Modal.Header>\r
													<Modal.Body>\r
														<p>placement="center", size="lg" のモーダル</p>\r
													</Modal.Body>\r
													<Modal.Footer>\r
														<button class="btn btn-primary btn-sm" onclick={() => vnode.attrs.resolve(true)}>OK</button>\r
													</Modal.Footer>\r
												</Modal.Content>\r
											);\r
										},\r
									},\r
								});\r
								m.redraw();\r
							}}\r
						>\r
							center / lg\r
						</button>\r
					</div>\r
					<div class="text-muted small">{\`結果: \${result}\`}</div>\r
				</div>\r
			);\r
		},\r
	});\r
}\r
`,F=JSON.parse('{"title":"Modal","description":"","frontmatter":{},"headers":[],"relativePath":"Modal.md","filePath":"Modal.md","lastUpdated":1776909368000}'),c={name:"Modal.md"},b=Object.assign(c,{setup(d){return(n,i)=>{const a=h("MithrilDemo");return o(),r("div",null,[i[0]||(i[0]=l("",6)),k(a,{setup:e(p),code:e(E)},null,8,["setup","code"]),i[1]||(i[1]=l("",16))])}}});export{F as __pageData,b as default};
