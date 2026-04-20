/** @jsx m */
import m from "mithril";
import styles from "./BreadcrumbClassic.module.scss";
/**
 * @class BreadcrumbClassic
 * @description
 * Ant Design の BreadcrumbClassic コンポーネントを Mithril に移植したパンくずリストコンポーネント
 *
 * 特徴:
 * - ナビゲーションのパンくず表示
 * - リンクまたはクリック可能なアイテム
 * - カスタマイズ可能な区切り文字
 * - アクセシビリティ対応（ARIA属性）
 *
 * 使用例:
 * ```tsx
 * <BreadcrumbClassic
 *   items={[
 *     { title: "ホーム", href: "/" },
 *     { title: "製品", href: "/products" },
 *     { title: "詳細" }
 *   ]}
 * />
 * ```
 */
export class BreadcrumbClassic {
    /**
     * @method view
     * @description コンポーネントのレンダリング
     * @param vnode 仮想DOMノード
     * @returns 仮想DOM
     */
    view(vnode) {
        const { items, separator = "/", class: className = "", style = {} } = vnode.attrs;
        return (m("nav", { class: `${styles.breadcrumb} ${className}`, style: style, "aria-label": "\u30D1\u30F3\u304F\u305A\u30EA\u30B9\u30C8" },
            m("ol", { class: styles.breadcrumbList }, items.map((item, index) => {
                const isLast = index === items.length - 1;
                const key = `breadcrumb-item-${index}`;
                return (m("li", { key: key, class: styles.breadcrumbItem },
                    isLast ? (m("span", { class: styles.breadcrumbCurrent, "aria-current": "page" }, item.title)) : item.href ? (m("a", { href: item.href, class: styles.breadcrumbLink, onclick: item.onClick }, item.title)) : (m("span", { class: styles.breadcrumbLink, onclick: item.onClick, style: { cursor: item.onClick ? "pointer" : "default" } }, item.title)),
                    !isLast && (m("span", { class: styles.breadcrumbSeparator, "aria-hidden": "true" }, separator))));
            }))));
    }
}
