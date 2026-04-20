/** @jsx m */
import m from "mithril";
import styles from "./BreadcrumbClassic.module.scss";

/**
 * @interface BreadcrumbClassicItem
 * @description BreadcrumbClassic コンポーネントの各アイテムの定義
 */
export interface BreadcrumbClassicItem {
    /** アイテムのタイトル（テキストまたは仮想DOMノード） */
    title: string | m.Vnode;
    /** クリック時の遷移先URL（オプション） */
    href?: string;
    /** クリック時のコールバック関数（オプション） */
    onClick?: (event: Event) => void;
}

/**
 * @interface BreadcrumbClassicAttrs
 * @description BreadcrumbClassic コンポーネントの属性定義
 */
export interface BreadcrumbClassicAttrs {
    /** BreadcrumbClassic のアイテム配列 */
    items: BreadcrumbClassicItem[];
    /** アイテム間の区切り文字（デフォルト: "/"） */
    separator?: string | m.Vnode;
    /** 追加のCSSクラス */
    class?: string;
    /** 追加のスタイル */
    style?: Record<string, string>;
}

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
export class BreadcrumbClassic implements m.Component<BreadcrumbClassicAttrs> {
    /**
     * @method view
     * @description コンポーネントのレンダリング
     * @param vnode 仮想DOMノード
     * @returns 仮想DOM
     */
    public view(vnode: m.Vnode<BreadcrumbClassicAttrs>) {
        const { items, separator = "/", class: className = "", style = {} } = vnode.attrs;

        return (
            <nav
                class={`${styles.breadcrumb} ${className}`}
                style={style}
                aria-label="パンくずリスト"
            >
                <ol class={styles.breadcrumbList}>
                    {items.map((item, index) => {
                        const isLast = index === items.length - 1;
                        const key = `breadcrumb-item-${index}`;

                        return (
                            <li key={key} class={styles.breadcrumbItem}>
                                {isLast ? (
                                    <span class={styles.breadcrumbCurrent} aria-current="page">
                                        {item.title}
                                    </span>
                                ) : item.href ? (
                                    <a
                                        href={item.href}
                                        class={styles.breadcrumbLink}
                                        onclick={item.onClick}
                                    >
                                        {item.title}
                                    </a>
                                ) : (
                                    <span
                                        class={styles.breadcrumbLink}
                                        onclick={item.onClick}
                                        style={{ cursor: item.onClick ? "pointer" : "default" }}
                                    >
                                        {item.title}
                                    </span>
                                )}
                                {!isLast && (
                                    <span class={styles.breadcrumbSeparator} aria-hidden="true">
                                        {separator}
                                    </span>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </nav>
        );
    }
}