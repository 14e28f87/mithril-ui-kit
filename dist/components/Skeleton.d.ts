/** @jsx m */
import m from "mithril";
/**
 * Skeleton バリアント
 */
export type SkeletonVariant = "pulse" | "shine" | "none";
/**
 * Skeleton の属性
 */
export interface SkeletonAttrs {
    /** バリアント（アニメーション種別） */
    variant?: SkeletonVariant;
    /** ローディング状態。false の場合は children を表示 */
    loading?: boolean;
    /** 高さ */
    height?: string;
    /** 幅 */
    width?: string;
    /** 角丸（border-radius） */
    borderRadius?: string;
    /** 追加クラス */
    class?: string;
    [key: string]: any;
}
/**
 * Skeleton コンポーネント — コンテンツ読み込み中のプレースホルダー表示
 *
 * @example
 * ```tsx
 * <Skeleton height="20px" width="200px" />
 * <Skeleton loading={isLoading}><p>実際のコンテンツ</p></Skeleton>
 * ```
 */
declare class SkeletonComponent implements m.ClassComponent<SkeletonAttrs> {
    view(vnode: m.Vnode<SkeletonAttrs>): JSX.Element;
}
/**
 * SkeletonCircle — 丸型の Skeleton
 */
declare class SkeletonCircleComponent implements m.ClassComponent<SkeletonAttrs> {
    view(vnode: m.Vnode<SkeletonAttrs>): JSX.Element;
}
/**
 * SkeletonText — テキスト行の Skeleton
 */
export interface SkeletonTextAttrs extends SkeletonAttrs {
    /** 行数 */
    noOfLines?: number;
}
declare class SkeletonTextComponent implements m.ClassComponent<SkeletonTextAttrs> {
    view(vnode: m.Vnode<SkeletonTextAttrs>): JSX.Element;
}
export { SkeletonComponent as Skeleton, SkeletonCircleComponent as SkeletonCircle, SkeletonTextComponent as SkeletonText };
//# sourceMappingURL=Skeleton.d.ts.map