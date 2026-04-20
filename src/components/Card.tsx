/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Card.module.scss";

/**
 * Card バリアント
 */
export type CardVariant = "elevated" | "outline" | "subtle";

/**
 * Card サイズ
 */
export type CardSize = "sm" | "md" | "lg";

/* ─── Role Types ─── */
type CardRole = "header" | "body" | "footer" | "title" | "description";

/* ─── Attrs ─── */
export interface CardRootAttrs {
	/** バリアント */
	variant?: CardVariant;
	/** サイズ */
	size?: CardSize;
	/** 追加クラス */
	class?: string;
	[key: string]: any;
}

export interface CardPartAttrs {
	class?: string;
	[key: string]: any;
}

function capitalize(s: string): string {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

/* ─── マーカークラス ─── */
class CardHeaderMarker { static __cardRole: CardRole = "header"; view() { return null; } }
class CardBodyMarker { static __cardRole: CardRole = "body"; view() { return null; } }
class CardFooterMarker { static __cardRole: CardRole = "footer"; view() { return null; } }
class CardTitleMarker { static __cardRole: CardRole = "title"; view() { return null; } }
class CardDescriptionMarker { static __cardRole: CardRole = "description"; view() { return null; } }

/**
 * Card Root コンポーネント — コンテンツのグルーピング表示
 *
 * @example
 * ```tsx
 * <Card.Root variant="outline">
 *   <Card.Header>
 *     <Card.Title>カードタイトル</Card.Title>
 *   </Card.Header>
 *   <Card.Body>本文テキスト</Card.Body>
 *   <Card.Footer>フッター</Card.Footer>
 * </Card.Root>
 * ```
 */
class CardRoot implements m.ClassComponent<CardRootAttrs> {
	view(vnode: m.Vnode<CardRootAttrs>) {
		const {
			variant = "outline",
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
				if (tag?.__cardRole === "header") {
					rendered.push(
						<div class={classNames(styles.header, cv.attrs?.class)}>
							{this.renderChildren(cv.children)}
						</div>
					);
					continue;
				}
				if (tag?.__cardRole === "body") {
					rendered.push(
						<div class={classNames(styles.body, cv.attrs?.class)}>
							{cv.children}
						</div>
					);
					continue;
				}
				if (tag?.__cardRole === "footer") {
					rendered.push(
						<div class={classNames(styles.footer, cv.attrs?.class)}>
							{cv.children}
						</div>
					);
					continue;
				}
				if (tag?.__cardRole === "title") {
					rendered.push(
						<h3 class={classNames(styles.title, cv.attrs?.class)}>
							{cv.children}
						</h3>
					);
					continue;
				}
				if (tag?.__cardRole === "description") {
					rendered.push(
						<p class={classNames(styles.description, cv.attrs?.class)}>
							{cv.children}
						</p>
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
 * Card コンポーネント名前空間
 */
export const Card = {
	Root: CardRoot,
	Header: CardHeaderMarker,
	Body: CardBodyMarker,
	Footer: CardFooterMarker,
	Title: CardTitleMarker,
	Description: CardDescriptionMarker,
} as const;

export { CardRoot };
