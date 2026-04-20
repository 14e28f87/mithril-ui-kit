/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Timeline.module.scss";

/**
 * Timeline バリアント
 */
export type TimelineVariant = "subtle" | "solid" | "outline" | "plain";

/**
 * Timeline サイズ
 */
export type TimelineSize = "sm" | "md" | "lg" | "xl";

/* ─── Role Types ─── */
type TimelineRole = "item" | "connector" | "separator" | "indicator" | "content" | "title" | "description";

/* ─── Attrs ─── */
export interface TimelineRootAttrs {
	/** バリアント */
	variant?: TimelineVariant;
	/** サイズ */
	size?: TimelineSize;
	/** 追加クラス */
	class?: string;
	[key: string]: any;
}

function capitalize(s: string): string {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

/* ─── マーカークラス ─── */
class TimelineItemMarker { static __tlRole: TimelineRole = "item"; view() { return null; } }
class TimelineConnectorMarker { static __tlRole: TimelineRole = "connector"; view() { return null; } }
class TimelineSeparatorMarker { static __tlRole: TimelineRole = "separator"; view() { return null; } }
class TimelineIndicatorMarker { static __tlRole: TimelineRole = "indicator"; view() { return null; } }
class TimelineContentMarker { static __tlRole: TimelineRole = "content"; view() { return null; } }
class TimelineTitleMarker { static __tlRole: TimelineRole = "title"; view() { return null; } }
class TimelineDescriptionMarker { static __tlRole: TimelineRole = "description"; view() { return null; } }

/**
 * Timeline Root コンポーネント — タイムライン表示
 *
 * @example
 * ```tsx
 * <Timeline.Root>
 *   <Timeline.Item>
 *     <Timeline.Separator>
 *       <Timeline.Indicator>🔵</Timeline.Indicator>
 *       <Timeline.Connector />
 *     </Timeline.Separator>
 *     <Timeline.Content>
 *       <Timeline.Title>ステップ 1</Timeline.Title>
 *       <Timeline.Description>説明テキスト</Timeline.Description>
 *     </Timeline.Content>
 *   </Timeline.Item>
 * </Timeline.Root>
 * ```
 */
class TimelineRoot implements m.ClassComponent<TimelineRootAttrs> {
	view(vnode: m.Vnode<TimelineRootAttrs>) {
		const {
			variant = "solid",
			size = "md",
			class: className,
			...rest
		} = vnode.attrs;

		return (
			<div
				{...rest}
				class={classNames(
					styles.root,
					(styles as any)[`variant${capitalize(variant)}`],
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
				if (tag?.__tlRole === "item") {
					rendered.push(
						<div class={classNames(styles.item, cv.attrs?.class)}>
							{this.renderChildren(cv.children)}
						</div>
					);
					continue;
				}
				if (tag?.__tlRole === "separator") {
					rendered.push(
						<div class={classNames(styles.separator, cv.attrs?.class)}>
							{this.renderChildren(cv.children)}
						</div>
					);
					continue;
				}
				if (tag?.__tlRole === "connector") {
					rendered.push(<div class={classNames(styles.connector, cv.attrs?.class)} />);
					continue;
				}
				if (tag?.__tlRole === "indicator") {
					rendered.push(
						<div class={classNames(styles.indicator, cv.attrs?.class)}>
							{cv.children}
						</div>
					);
					continue;
				}
				if (tag?.__tlRole === "content") {
					rendered.push(
						<div class={classNames(styles.content, cv.attrs?.class)}>
							{this.renderChildren(cv.children)}
						</div>
					);
					continue;
				}
				if (tag?.__tlRole === "title") {
					rendered.push(<div class={classNames(styles.title, cv.attrs?.class)}>{cv.children}</div>);
					continue;
				}
				if (tag?.__tlRole === "description") {
					rendered.push(<div class={classNames(styles.description, cv.attrs?.class)}>{cv.children}</div>);
					continue;
				}
			}
			rendered.push(child as m.Children);
		}
		return rendered;
	}
}

/**
 * Timeline コンポーネント名前空間
 */
export const Timeline = {
	Root: TimelineRoot,
	Item: TimelineItemMarker,
	Connector: TimelineConnectorMarker,
	Separator: TimelineSeparatorMarker,
	Indicator: TimelineIndicatorMarker,
	Content: TimelineContentMarker,
	Title: TimelineTitleMarker,
	Description: TimelineDescriptionMarker,
} as const;

export { TimelineRoot };
