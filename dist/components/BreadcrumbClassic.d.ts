/** @jsx m */
import m from "mithril";
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
export declare class BreadcrumbClassic implements m.Component<BreadcrumbClassicAttrs> {
    /**
     * @method view
     * @description コンポーネントのレンダリング
     * @param vnode 仮想DOMノード
     * @returns 仮想DOM
     */
    view(vnode: m.Vnode<BreadcrumbClassicAttrs>): JSX.Element;
}
//# sourceMappingURL=BreadcrumbClassic.d.ts.map