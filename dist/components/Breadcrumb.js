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
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
/**
 * @class BreadcrumbListMarker
 * @description パンくずリスト ol 要素のマーカー
 */
export class BreadcrumbListMarker {
    view(vnode) { return m("ol", null, vnode.children); }
}
BreadcrumbListMarker.__breadcrumbRole = "list";
/**
 * @class BreadcrumbItemMarker
 * @description パンくずリスト項目のマーカー
 */
export class BreadcrumbItemMarker {
    view(vnode) { return m("li", null, vnode.children); }
}
BreadcrumbItemMarker.__breadcrumbRole = "item";
/**
 * @class BreadcrumbLinkMarker
 * @description リンクのマーカー
 */
export class BreadcrumbLinkMarker {
    view(vnode) { return m("a", { href: vnode.attrs.href }, vnode.children); }
}
BreadcrumbLinkMarker.__breadcrumbRole = "link";
/**
 * @class BreadcrumbCurrentLinkMarker
 * @description 現在のページリンクのマーカー (aria-current="page")
 */
export class BreadcrumbCurrentLinkMarker {
    view(vnode) { return m("span", null, vnode.children); }
}
BreadcrumbCurrentLinkMarker.__breadcrumbRole = "current-link";
/**
 * @class BreadcrumbSeparatorMarker
 * @description セパレーターのマーカー
 */
export class BreadcrumbSeparatorMarker {
    view(vnode) { return m("span", null, vnode.children); }
}
BreadcrumbSeparatorMarker.__breadcrumbRole = "separator";
/**
 * @class BreadcrumbEllipsisMarker
 * @description 省略記号のマーカー
 */
export class BreadcrumbEllipsisMarker {
    view(vnode) { return m("span", null, "\u2026"); }
}
BreadcrumbEllipsisMarker.__breadcrumbRole = "ellipsis";
// --- ユーティリティ ---
function toChildArray(children) {
    if (Array.isArray(children))
        return children.flatMap(c => toChildArray(c));
    if (children === null || children === undefined || typeof children === "boolean")
        return [];
    return [children];
}
function isVnodeLike(v) {
    return !!v && typeof v === "object" && "tag" in v;
}
function getRole(v) {
    if (!isVnodeLike(v))
        return undefined;
    return v.tag?.__breadcrumbRole;
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
export class BreadcrumbRoot {
    view(vnode) {
        const attrs = vnode.attrs;
        const variant = attrs.variant ?? "plain";
        const size = attrs.size ?? "md";
        const defaultSeparator = attrs.separator ?? "/";
        const allChildren = toChildArray(vnode.children);
        // List ノードを探す
        const listVNode = allChildren.find(c => getRole(c) === "list");
        const listChildren = listVNode ? toChildArray(listVNode.children) : allChildren;
        return (m("nav", { class: classNames(styles.root, styles[`variant${capitalize(variant)}`], styles[`size${capitalize(size)}`], attrs.class), style: attrs.style, "aria-label": "Breadcrumb", "data-scope": "breadcrumb", "data-part": "root" },
            m("ol", { class: classNames(styles.list, listVNode?.attrs.class), style: listVNode?.attrs.style, "data-part": "list" }, listChildren.map((child, index) => {
                const role = getRole(child);
                if (role === "separator") {
                    const sepVNode = child;
                    const sepChildren = toChildArray(sepVNode.children);
                    return (m("li", { key: `sep-${index}`, class: classNames(styles.separator, sepVNode.attrs.class), style: sepVNode.attrs.style, "aria-hidden": "true", "data-part": "separator" }, sepChildren.length ? sepChildren : defaultSeparator));
                }
                if (role === "item") {
                    const itemVNode = child;
                    const itemChildren = toChildArray(itemVNode.children);
                    return (m("li", { key: `item-${index}`, class: classNames(styles.item, itemVNode.attrs.class), style: itemVNode.attrs.style, "data-part": "item" }, itemChildren.map((ic) => {
                        const icRole = getRole(ic);
                        if (icRole === "link") {
                            const linkVNode = ic;
                            return (m("a", { href: linkVNode.attrs.href ?? "#", class: classNames(styles.link, linkVNode.attrs.class), style: linkVNode.attrs.style, "data-part": "link", onclick: (e) => {
                                    // Mithril ルーティングを使う場合は m.route.set を呼ぶ
                                    if (linkVNode.attrs.href && linkVNode.attrs.href.startsWith("/")) {
                                        e.preventDefault();
                                        m.route.set(linkVNode.attrs.href);
                                    }
                                } }, linkVNode.children));
                        }
                        if (icRole === "current-link") {
                            const curVNode = ic;
                            return (m("span", { class: classNames(styles.currentLink, curVNode.attrs.class), style: curVNode.attrs.style, "data-part": "current-link", "aria-current": "page" }, curVNode.children));
                        }
                        if (icRole === "ellipsis") {
                            const ellVNode = ic;
                            return (m("span", { class: classNames(styles.ellipsis, ellVNode.attrs.class), style: ellVNode.attrs.style, "data-part": "ellipsis", role: "presentation" }, "\u2026"));
                        }
                        if (icRole === "separator") {
                            const sepVNode = ic;
                            const sepChildren = toChildArray(sepVNode.children);
                            return (m("span", { class: classNames(styles.separator, sepVNode.attrs.class), style: sepVNode.attrs.style, "aria-hidden": "true", "data-part": "separator" }, sepChildren.length ? sepChildren : defaultSeparator));
                        }
                        return ic;
                    })));
                }
                // それ以外はそのまま描画
                return child;
            }))));
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
};
