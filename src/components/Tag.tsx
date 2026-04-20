/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Tag.module.scss";

/**
 * Tag バリアント
 */
export type TagVariant = "subtle" | "solid" | "outline" | "surface";

/**
 * Tag サイズ
 */
export type TagSize = "sm" | "md" | "lg" | "xl";

/* ─── Role Types ─── */
type TagRole = "label" | "startElement" | "endElement" | "closeTrigger";

/* ─── Attrs ─── */
export interface TagRootAttrs {
	/** バリアント */
	variant?: TagVariant;
	/** サイズ */
	size?: TagSize;
	/** カラーパレット */
	colorPalette?: string;
	/** 閉じ可能 */
	closable?: boolean;
	/** 閉じるボタン押下時 */
	onClose?: () => void;
	/** 追加クラス */
	class?: string;
	[key: string]: any;
}

function capitalize(s: string): string {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

/* ─── マーカークラス ─── */
class TagLabelMarker { static __tagRole: TagRole = "label"; view() { return null; } }
class TagStartElementMarker { static __tagRole: TagRole = "startElement"; view() { return null; } }
class TagEndElementMarker { static __tagRole: TagRole = "endElement"; view() { return null; } }
class TagCloseTriggerMarker { static __tagRole: TagRole = "closeTrigger"; view() { return null; } }

/**
 * Tag Root コンポーネント — ラベルやカテゴリの表示
 *
 * @example
 * ```tsx
 * <Tag.Root variant="solid" colorPalette="blue">
 *   <Tag.Label>TypeScript</Tag.Label>
 * </Tag.Root>
 * <Tag.Root closable onClose={() => console.log("closed")}>
 *   <Tag.Label>削除可能</Tag.Label>
 * </Tag.Root>
 * ```
 */
class TagRoot implements m.ClassComponent<TagRootAttrs> {
	view(vnode: m.Vnode<TagRootAttrs>) {
		const {
			variant = "subtle",
			size = "md",
			colorPalette = "gray",
			closable,
			onClose,
			class: className,
			...rest
		} = vnode.attrs;

		const children = (Array.isArray(vnode.children) ? (vnode.children as any[]) : [vnode.children]).flat(Infinity);
		const rendered: m.Children[] = [];

		for (const child of children) {
			if (child && typeof child === "object" && "tag" in child) {
				const tag = (child as m.Vnode<any>).tag as any;
				const cv = child as m.Vnode<any>;
				if (tag?.__tagRole === "label") {
					rendered.push(<span class={classNames(styles.label, cv.attrs?.class)}>{cv.children}</span>);
					continue;
				}
				if (tag?.__tagRole === "startElement") {
					rendered.push(<span class={classNames(styles.startElement, cv.attrs?.class)}>{cv.children}</span>);
					continue;
				}
				if (tag?.__tagRole === "endElement") {
					rendered.push(<span class={classNames(styles.endElement, cv.attrs?.class)}>{cv.children}</span>);
					continue;
				}
				if (tag?.__tagRole === "closeTrigger") {
					rendered.push(
						<button
							type="button"
							class={classNames(styles.closeTrigger, cv.attrs?.class)}
							onclick={(e: Event) => {
								e.stopPropagation();
								onClose?.();
							}}
							aria-label="閉じる"
						>
							{cv.children && (cv.children as any[]).length > 0 ? cv.children : "✕"}
						</button>
					);
					continue;
				}
			}
			rendered.push(child as m.Children);
		}

		if (closable && !children.some(c =>
			c && typeof c === "object" && "tag" in c && (c as m.Vnode).tag &&
			((c as m.Vnode).tag as any)?.__tagRole === "closeTrigger"
		)) {
			rendered.push(
				<button
					type="button"
					class={styles.closeTrigger}
					onclick={(e: Event) => {
						e.stopPropagation();
						onClose?.();
					}}
					aria-label="閉じる"
				>
					✕
				</button>
			);
		}

		return (
			<span
				{...rest}
				class={classNames(
					styles.root,
					(styles as any)[`variant${capitalize(variant)}`],
					(styles as any)[`size${capitalize(size)}`],
					(styles as any)[`color${capitalize(colorPalette)}`],
					className
				)}
			>
				{rendered}
			</span>
		);
	}
}

/**
 * Tag コンポーネント名前空間
 */
export const Tag = {
	Root: TagRoot,
	Label: TagLabelMarker,
	StartElement: TagStartElementMarker,
	EndElement: TagEndElementMarker,
	CloseTrigger: TagCloseTriggerMarker,
} as const;

export { TagRoot };
