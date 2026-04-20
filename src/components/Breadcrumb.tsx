/** @jsx m */
/**
 * @fileoverview
 * Breadcrumb — Chakra UI 現行 API 準拠の compound component 型パンくずリスト
 *
 * @example
 * ```tsx
 * <Breadcrumb.Root>
 *   <Breadcrumb.List>
 *     <Breadcrumb.Item>
 *       <Breadcrumb.Link href="/">ホーム</Breadcrumb.Link>
 *     </Breadcrumb.Item>
 *     <Breadcrumb.Separator />
 *     <Breadcrumb.Item>
 *       <Breadcrumb.CurrentLink>現在のページ</Breadcrumb.CurrentLink>
 *     </Breadcrumb.Item>
 *   </Breadcrumb.List>
 * </Breadcrumb.Root>
 * ```
 *
 * @module Breadcrumb
 */
/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Breadcrumb.module.scss";

/** パンくずリストの外観バリエーション */
export type BreadcrumbVariant = "underline" | "plain";

/** パンくずリストのサイズ */
export type BreadcrumbSize = "sm" | "md" | "lg";

/**
 * Breadcrumb.Root に渡せる属性
 */
export type BreadcrumbRootAttrs = {
	/** 外観（デフォルト: "plain"） */
	variant?: BreadcrumbVariant;
	/** サイズ（デフォルト: "md"） */
	size?: BreadcrumbSize;
	/** セパレーター文字（デフォルト: "/"） */
	separator?: string | m.Children;
	class?: string;
	style?: Record<string, string>;
};

/** Breadcrumb.List に渡せる属性 */
export type BreadcrumbListAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Breadcrumb.Item に渡せる属性 */
export type BreadcrumbItemAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Breadcrumb.Link に渡せる属性 */
export type BreadcrumbLinkAttrs = {
	/** 遷移先 URL */
	href?: string;
	class?: string;
	style?: Record<string, string>;
};

/** Breadcrumb.CurrentLink に渡せる属性 */
export type BreadcrumbCurrentLinkAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Breadcrumb.Separator に渡せる属性 */
export type BreadcrumbSeparatorAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Breadcrumb.Ellipsis に渡せる属性 */
export type BreadcrumbEllipsisAttrs = {
	class?: string;
	style?: Record<string, string>;
};

type BreadcrumbRole = "list" | "item" | "link" | "current-link" | "separator" | "ellipsis";

function capitalize(s: string): string {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

/**
 * @class BreadcrumbListMarker
 * @description パンくずリスト ol 要素のマーカー
 */
export class BreadcrumbListMarker implements m.Component<BreadcrumbListAttrs> {
	public static __breadcrumbRole: BreadcrumbRole = "list";
	public view(vnode: m.Vnode<BreadcrumbListAttrs>) { return <ol>{vnode.children}</ol>; }
}

/**
 * @class BreadcrumbItemMarker
 * @description パンくずリスト項目のマーカー
 */
export class BreadcrumbItemMarker implements m.Component<BreadcrumbItemAttrs> {
	public static __breadcrumbRole: BreadcrumbRole = "item";
	public view(vnode: m.Vnode<BreadcrumbItemAttrs>) { return <li>{vnode.children}</li>; }
}

/**
 * @class BreadcrumbLinkMarker
 * @description リンクのマーカー
 */
export class BreadcrumbLinkMarker implements m.Component<BreadcrumbLinkAttrs> {
	public static __breadcrumbRole: BreadcrumbRole = "link";
	public view(vnode: m.Vnode<BreadcrumbLinkAttrs>) { return <a href={vnode.attrs.href}>{vnode.children}</a>; }
}

/**
 * @class BreadcrumbCurrentLinkMarker
 * @description 現在のページリンクのマーカー (aria-current="page")
 */
export class BreadcrumbCurrentLinkMarker implements m.Component<BreadcrumbCurrentLinkAttrs> {
	public static __breadcrumbRole: BreadcrumbRole = "current-link";
	public view(vnode: m.Vnode<BreadcrumbCurrentLinkAttrs>) { return <span>{vnode.children}</span>; }
}

/**
 * @class BreadcrumbSeparatorMarker
 * @description セパレーターのマーカー
 */
export class BreadcrumbSeparatorMarker implements m.Component<BreadcrumbSeparatorAttrs> {
	public static __breadcrumbRole: BreadcrumbRole = "separator";
	public view(vnode: m.Vnode<BreadcrumbSeparatorAttrs>) { return <span>{vnode.children}</span>; }
}

/**
 * @class BreadcrumbEllipsisMarker
 * @description 省略記号のマーカー
 */
export class BreadcrumbEllipsisMarker implements m.Component<BreadcrumbEllipsisAttrs> {
	public static __breadcrumbRole: BreadcrumbRole = "ellipsis";
	public view(vnode: m.Vnode<BreadcrumbEllipsisAttrs>) { return <span>…</span>; }
}

// --- ユーティリティ ---
function toChildArray(children: m.Children): any[] {
	if (Array.isArray(children)) return children.flatMap(c => toChildArray(c));
	if (children === null || children === undefined || typeof children === "boolean") return [];
	return [children];
}

function isVnodeLike(v: any): v is m.Vnode<any> {
	return !!v && typeof v === "object" && "tag" in v;
}

function getRole(v: any): BreadcrumbRole | undefined {
	if (!isVnodeLike(v)) return undefined;
	return (v.tag as any)?.__breadcrumbRole;
}

/**
 * @class BreadcrumbRoot
 * @description
 * パンくずリストのルートコンポーネント。
 * nav 要素として描画し、子の List/Item/Link/Separator を収集して ARIA 対応のリストを生成する。
 *
 * 主な機能:
 * - variant (underline / plain)
 * - size (sm / md / lg)
 * - カスタムセパレーター
 * - Ellipsis（省略記号）対応
 * - CurrentLink（aria-current="page"）
 *
 * @example
 * <Breadcrumb.Root separator="›" size="sm">
 *   <Breadcrumb.List>
 *     <Breadcrumb.Item><Breadcrumb.Link href="/">ホーム</Breadcrumb.Link></Breadcrumb.Item>
 *     <Breadcrumb.Separator />
 *     <Breadcrumb.Item><Breadcrumb.CurrentLink>現在ページ</Breadcrumb.CurrentLink></Breadcrumb.Item>
 *   </Breadcrumb.List>
 * </Breadcrumb.Root>
 */
export class BreadcrumbRoot implements m.Component<BreadcrumbRootAttrs> {
	public view(vnode: m.Vnode<BreadcrumbRootAttrs>) {
		const attrs = vnode.attrs;
		const variant = attrs.variant ?? "plain";
		const size = attrs.size ?? "md";
		const defaultSeparator = attrs.separator ?? "/";
		const allChildren = toChildArray(vnode.children);

		// List ノードを探す
		const listVNode = allChildren.find(c => getRole(c) === "list") as m.Vnode<BreadcrumbListAttrs> | undefined;
		const listChildren = listVNode ? toChildArray(listVNode.children) : allChildren;

		return (
			<nav
				class={classNames(
					styles.root,
					styles[`variant${capitalize(variant)}`],
					styles[`size${capitalize(size)}`],
					attrs.class
				)}
				style={attrs.style}
				aria-label="Breadcrumb"
				data-scope="breadcrumb"
				data-part="root"
			>
				<ol class={classNames(styles.list, listVNode?.attrs.class)} style={listVNode?.attrs.style} data-part="list">
					{listChildren.map((child, index) => {
						const role = getRole(child);

						if (role === "separator") {
							const sepVNode = child as m.Vnode<BreadcrumbSeparatorAttrs>;
							const sepChildren = toChildArray(sepVNode.children);
							return (
								<li key={`sep-${index}`} class={classNames(styles.separator, sepVNode.attrs.class)} style={sepVNode.attrs.style} aria-hidden="true" data-part="separator">
									{sepChildren.length ? sepChildren : defaultSeparator}
								</li>
							);
						}

						if (role === "item") {
							const itemVNode = child as m.Vnode<BreadcrumbItemAttrs>;
							const itemChildren = toChildArray(itemVNode.children);

							return (
								<li key={`item-${index}`} class={classNames(styles.item, itemVNode.attrs.class)} style={itemVNode.attrs.style} data-part="item">
									{itemChildren.map((ic) => {
										const icRole = getRole(ic);
										if (icRole === "link") {
											const linkVNode = ic as m.Vnode<BreadcrumbLinkAttrs>;
											return (
												<a

													href={linkVNode.attrs.href ?? "#"}
													class={classNames(styles.link, linkVNode.attrs.class)}
													style={linkVNode.attrs.style}
													data-part="link"
													onclick={(e: Event) => {
														// Mithril ルーティングを使う場合は m.route.set を呼ぶ
														if (linkVNode.attrs.href && linkVNode.attrs.href.startsWith("/")) {
															e.preventDefault();
															m.route.set(linkVNode.attrs.href);
														}
													}}
												>
													{linkVNode.children}
												</a>
											);
										}
										if (icRole === "current-link") {
											const curVNode = ic as m.Vnode<BreadcrumbCurrentLinkAttrs>;
											return (
												<span

													class={classNames(styles.currentLink, curVNode.attrs.class)}
													style={curVNode.attrs.style}
													data-part="current-link"
													aria-current="page"
												>
													{curVNode.children}
												</span>
											);
										}
										if (icRole === "ellipsis") {
											const ellVNode = ic as m.Vnode<BreadcrumbEllipsisAttrs>;
											return (
												<span class={classNames(styles.ellipsis, ellVNode.attrs.class)} style={ellVNode.attrs.style} data-part="ellipsis" role="presentation">
													…
												</span>
											);
										}
										if (icRole === "separator") {
											const sepVNode = ic as m.Vnode<BreadcrumbSeparatorAttrs>;
											const sepChildren = toChildArray(sepVNode.children);
											return (
												<span class={classNames(styles.separator, sepVNode.attrs.class)} style={sepVNode.attrs.style} aria-hidden="true" data-part="separator">
													{sepChildren.length ? sepChildren : defaultSeparator}
												</span>
											);
										}
										return ic;
									})}
								</li>
							);
						}

						// それ以外はそのまま描画
						return child;
					})}
				</ol>
			</nav>
		);
	}
}

/**
 * Breadcrumb compound component のバンドル。
 */
export const Breadcrumb = {
	Root: BreadcrumbRoot,
	List: BreadcrumbListMarker,
	Item: BreadcrumbItemMarker,
	Link: BreadcrumbLinkMarker,
	CurrentLink: BreadcrumbCurrentLinkMarker,
	Separator: BreadcrumbSeparatorMarker,
	Ellipsis: BreadcrumbEllipsisMarker,
} as const;
