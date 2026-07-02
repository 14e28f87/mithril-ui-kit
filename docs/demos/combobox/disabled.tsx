/** @jsx m */
import m from "mithril";
import { Combobox } from "mithril-ui-kit";

const items = [
	{ value: "react", label: "React" },
	{ value: "vue", label: "Vue" },
	{ value: "mithril", label: "Mithril" },
	{ value: "next", label: "Next.js", disabled: true },
	{ value: "nuxt", label: "Nuxt", disabled: true },
	{ value: "svelte", label: "Svelte" },
];

let normalVal = "";
let invalidVal = "";

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<div style={{ display: "grid", gap: "20px", maxWidth: "360px" }}>
					<div>
						<div style={{ fontSize: "0.8rem", color: "#64748b", marginBottom: "4px" }}>
							disabled（コンポーネント全体）
						</div>
						<Combobox.Root
							items={items}
							value=""
							disabled={true}
							placeholder="無効化されています"
						/>
					</div>

					<div>
						<div style={{ fontSize: "0.8rem", color: "#64748b", marginBottom: "4px" }}>
							一部アイテムが disabled
						</div>
						<Combobox.Root
							items={items}
							value={normalVal}
							placeholder="選択してください（Next.js / Nuxt は無効）"
							onValueChange={(v) => {
								normalVal = v as string;
								m.redraw();
							}}
						/>
					</div>

					<div>
						<div style={{ fontSize: "0.8rem", color: "#64748b", marginBottom: "4px" }}>
							invalid（エラー状態）
						</div>
						<Combobox.Root
							items={items}
							value={invalidVal}
							invalid={true}
							placeholder="必須項目です"
							onValueChange={(v) => {
								invalidVal = v as string;
								m.redraw();
							}}
						/>
						{!invalidVal && (
							<div style={{ color: "#dc3545", fontSize: "0.8rem", marginTop: "4px" }}>
								フレームワークを選択してください
							</div>
						)}
					</div>
				</div>
			);
		},
	});
}
