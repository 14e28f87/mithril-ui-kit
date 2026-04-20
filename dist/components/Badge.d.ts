/** @jsx m */
import m from "mithril";
/**
 * Badge バリアント
 */
export type BadgeVariant = "solid" | "subtle" | "outline" | "surface" | "plain";
/**
 * Badge サイズ
 */
export type BadgeSize = "xs" | "sm" | "md" | "lg";
/**
 * Badge の属性
 */
export interface BadgeAttrs {
    /** バリアント */
    variant?: BadgeVariant;
    /** サイズ */
    size?: BadgeSize;
    /** カラーパレット */
    colorPalette?: string;
    /** 追加クラス */
    class?: string;
    [key: string]: any;
}
/**
 * Badge コンポーネント — ステータスやカテゴリのハイライト表示に使用
 *
 * @example
 * ```tsx
 * <Badge variant="solid" colorPalette="green">New</Badge>
 * <Badge variant="outline" size="lg">Status</Badge>
 * ```
 */
declare class BadgeComponent implements m.ClassComponent<BadgeAttrs> {
    view(vnode: m.Vnode<BadgeAttrs>): JSX.Element;
}
export { BadgeComponent as Badge };
//# sourceMappingURL=Badge.d.ts.map