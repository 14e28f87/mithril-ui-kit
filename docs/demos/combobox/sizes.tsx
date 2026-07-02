/** @jsx m */
import m from "mithril";
import { Combobox, type ComboboxSize } from "mithril-ui-kit";

const items = [
	{ value: "react", label: "React" },
	{ value: "vue", label: "Vue" },
	{ value: "mithril", label: "Mithril" },
	{ value: "svelte", label: "Svelte" },
];

const values: Record<string, string> = { xs: "", sm: "", md: "", lg: "" };

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<div style={{ display: "grid", gap: "12px", maxWidth: "360px" }}>
					{(["xs", "sm", "md", "lg"] as ComboboxSize[]).map((size) => (
						<div key={size} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
							<span style={{ width: "24px", fontSize: "0.75rem", color: "#64748b", flexShrink: "0" }}>
								{size}
							</span>
							<Combobox.Root
								items={items}
								value={values[size]}
								size={size}
								placeholder="フレームワークを選択"
								onValueChange={(v) => {
									values[size] = v as string;
									m.redraw();
								}}
							/>
						</div>
					))}
				</div>
			);
		},
	});
}
