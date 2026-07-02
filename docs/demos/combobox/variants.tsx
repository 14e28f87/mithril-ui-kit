/** @jsx m */
import m from "mithril";
import { Combobox } from "mithril-ui-kit";

const items = [
	{ value: "react", label: "React" },
	{ value: "vue", label: "Vue" },
	{ value: "mithril", label: "Mithril" },
	{ value: "svelte", label: "Svelte" },
	{ value: "solid", label: "SolidJS" },
];

const values: Record<string, string> = {
	outline: "",
	subtle: "",
	flushed: "",
};

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<div style={{ display: "grid", gap: "16px", maxWidth: "360px" }}>
					{(["outline", "subtle", "flushed"] as const).map((variant) => (
						<div key={variant}>
							<div style={{ fontSize: "0.8rem", color: "#64748b", marginBottom: "4px" }}>
								{variant}
							</div>
							<Combobox.Root
								items={items}
								value={values[variant]}
								variant={variant}
								placeholder={`${variant} スタイル`}
								onValueChange={(v) => {
									values[variant] = v as string;
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
