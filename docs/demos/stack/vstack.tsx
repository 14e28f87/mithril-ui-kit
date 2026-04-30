/** @jsx m */
import m from "mithril";
import { VStack } from "mithril-ui-kit";

function card(title: string, desc: string): m.Children {
	return (
		<div
			style={{
				padding: "12px 16px",
				background: "#f8fafc",
				border: "1px solid #e2e8f0",
				borderRadius: "10px",
			}}
		>
			<div style={{ fontWeight: "600", marginBottom: "4px" }}>{title}</div>
			<div style={{ fontSize: "13px", color: "#64748b" }}>{desc}</div>
		</div>
	);
}

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<VStack gap="10px" align="stretch" style={{ maxWidth: "320px" }}>
					{card("ステップ 1", "プロジェクトを作成します")}
					{card("ステップ 2", "コンポーネントを設定します")}
					{card("ステップ 3", "デプロイして完了です")}
				</VStack>
			);
		},
	});
}
