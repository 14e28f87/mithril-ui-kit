/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./EmptyState.module.scss";

/**
 * EmptyState サイズ
 */
export type EmptyStateSize = "sm" | "md" | "lg";

/* ─── Role Types ─── */
type EmptyStateRole = "content" | "indicator" | "title" | "description";

/* ─── Attrs ─── */
export interface EmptyStateRootAttrs {
	/** サイズ */
	size?: EmptyStateSize;
	/** 追加クラス */
	class?: string;
	[key: string]: any;
}

function capitalize(s: string): string {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

/* ─── マーカークラス ─── */
class EmptyStateContentMarker { static __esRole: EmptyStateRole = "content"; view() { return null; } }
class EmptyStateIndicatorMarker { static __esRole: EmptyStateRole = "indicator"; view() { return null; } }
class EmptyStateTitleMarker { static __esRole: EmptyStateRole = "title"; view() { return null; } }
class EmptyStateDescriptionMarker { static __esRole: EmptyStateRole = "description"; view() { return null; } }

/**
 * EmptyState Root コンポーネント — データが空の時の表示
 *
 * @example
 * ```tsx
 * <EmptyState.Root>
 *   <EmptyState.Content>
 *     <EmptyState.Indicator>📭</EmptyState.Indicator>
 *     <EmptyState.Title>データがありません</EmptyState.Title>
 *     <EmptyState.Description>新しいアイテムを追加してください。</EmptyState.Description>
 *   </EmptyState.Content>
 * </EmptyState.Root>
 * ```
 */
class EmptyStateRoot implements m.ClassComponent<EmptyStateRootAttrs> {
	view(vnode: m.Vnode<EmptyStateRootAttrs>) {
		const {
			size = "md",
			class: className,
			...rest
		} = vnode.attrs;

		return (
			<div
				{...rest}
				class={classNames(
					styles.root,
					(styles as any)[`size${capitalize(size)}`],
					className
				)}
			>
				{this.renderChildren(vnode.children)}
			</div>
		);
	}

	private renderChildren(children: m.Children): m.Children[] {
		const arr = (Array.isArray(children) ? (children as any[]) : [children]).flat(Infinity);
		const rendered: m.Children[] = [];

		for (const child of arr) {
			if (child && typeof child === "object" && "tag" in child) {
				const tag = (child as m.Vnode<any>).tag as any;
				const cv = child as m.Vnode<any>;
				if (tag?.__esRole === "content") {
					rendered.push(
						<div class={classNames(styles.content, cv.attrs?.class)}>
							{this.renderChildren(cv.children)}
						</div>
					);
					continue;
				}
				if (tag?.__esRole === "indicator") {
					rendered.push(
						<div class={classNames(styles.indicator, cv.attrs?.class)}>
							{cv.children}
						</div>
					);
					continue;
				}
				if (tag?.__esRole === "title") {
					rendered.push(
						<div class={classNames(styles.title, cv.attrs?.class)}>
							{cv.children}
						</div>
					);
					continue;
				}
				if (tag?.__esRole === "description") {
					rendered.push(
						<div class={classNames(styles.description, cv.attrs?.class)}>
							{cv.children}
						</div>
					);
					continue;
				}
			}
			rendered.push(child as m.Children);
		}
		return rendered;
	}
}

/**
 * EmptyState コンポーネント名前空間
 */
export const EmptyState = {
	Root: EmptyStateRoot,
	Content: EmptyStateContentMarker,
	Indicator: EmptyStateIndicatorMarker,
	Title: EmptyStateTitleMarker,
	Description: EmptyStateDescriptionMarker,
} as const;

export { EmptyStateRoot };
