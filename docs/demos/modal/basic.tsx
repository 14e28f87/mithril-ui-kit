/** @jsx m */
import m from "mithril";
import { Modal } from "mithriluikit";

/**
 * Modal 命令的 API のデモ
 */
export function setup(el: HTMLElement): void {
	let result = "未実行";

	m.mount(el, {
		view() {
			return (
				<div>
					<div class="d-flex flex-wrap gap-2 mb-2">
						<button
							class="btn btn-primary btn-sm"
							onclick={async () => {
								const ok = await Modal.show<boolean>({
									size: "md",
									placement: "top",
									content: {
										view(vnode: m.Vnode<any>) {
											return (
												<Modal.Content>
													<Modal.Header>
														<Modal.Title>確認ダイアログ</Modal.Title>
														<Modal.CloseTrigger />
													</Modal.Header>
													<Modal.Body>
														<p>このデータを削除しますか？</p>
													</Modal.Body>
													<Modal.Footer>
														<button class="btn btn-secondary btn-sm" onclick={() => vnode.attrs.hide()}>キャンセル</button>
														<button class="btn btn-danger btn-sm" onclick={() => vnode.attrs.resolve(true)}>削除</button>
													</Modal.Footer>
												</Modal.Content>
											);
										},
									},
								});
								result = ok ? "削除" : "キャンセル";
								m.redraw();
							}}
						>
							基本ダイアログ
						</button>

						<button
							class="btn btn-info btn-sm"
							onclick={async () => {
								await Modal.show({
									size: "lg",
									placement: "center",
									content: {
										view(vnode: m.Vnode<any>) {
											return (
												<Modal.Content>
													<Modal.Header>
														<Modal.Title>センター配置 (lg)</Modal.Title>
														<Modal.CloseTrigger />
													</Modal.Header>
													<Modal.Body>
														<p>placement="center", size="lg" のモーダル</p>
													</Modal.Body>
													<Modal.Footer>
														<button class="btn btn-primary btn-sm" onclick={() => vnode.attrs.resolve(true)}>OK</button>
													</Modal.Footer>
												</Modal.Content>
											);
										},
									},
								});
								m.redraw();
							}}
						>
							center / lg
						</button>
					</div>
					<div class="text-muted small">{`結果: ${result}`}</div>
				</div>
			);
		},
	});
}
