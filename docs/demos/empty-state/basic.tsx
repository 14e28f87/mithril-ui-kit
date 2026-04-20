/** @jsx m */
import m from "mithril";
import { EmptyState } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<EmptyState.Root>
					<EmptyState.Content>
						<EmptyState.Indicator>📭</EmptyState.Indicator>
						<EmptyState.Title>データがありません</EmptyState.Title>
						<EmptyState.Description>
							検索条件に一致する項目がないため、フィルターを見直してください。
						</EmptyState.Description>
					</EmptyState.Content>
				</EmptyState.Root>
			);
		},
	});
}