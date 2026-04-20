/** @jsx m */
import m from "mithril";
import { TextArea } from "mithriluikit";

let value = "初期値\n2 行目";

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<div style={{ display: "grid", gap: "12px" }}>
					<TextArea
						value={value}
						autoresize={true}
						placeholder="コメントを入力してください"
						oninput={(event: Event) => {
							value = (event.target as HTMLTextAreaElement).value;
						}}
					/>
					<div style={{ color: "#475569", fontSize: "0.9rem" }}>現在の文字数: {value.length}</div>
				</div>
			);
		},
	});
}