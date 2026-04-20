/** @jsx m */
import m from "mithril";
/**
 * EmptyState サイズ
 */
export type EmptyStateSize = "sm" | "md" | "lg";
type EmptyStateRole = "content" | "indicator" | "title" | "description";
export interface EmptyStateRootAttrs {
    /** サイズ */
    size?: EmptyStateSize;
    /** 追加クラス */
    class?: string;
    [key: string]: any;
}
declare class EmptyStateContentMarker {
    static __esRole: EmptyStateRole;
    view(): null;
}
declare class EmptyStateIndicatorMarker {
    static __esRole: EmptyStateRole;
    view(): null;
}
declare class EmptyStateTitleMarker {
    static __esRole: EmptyStateRole;
    view(): null;
}
declare class EmptyStateDescriptionMarker {
    static __esRole: EmptyStateRole;
    view(): null;
}
/**
 * EmptyState Root コンポーネント — データが空の時の表示
 *
 * @example
 * ```tsx
 * <EmptyState.Root>
 *   <EmptyState.Content>
 *     <EmptyState.Indicator>📭</EmptyState.Indicator>
 *     <EmptyState.Title>データがありません</EmptyState.Title>
 *     <EmptyState.Description>新しいアイテムを追加してください。</EmptyState.Description>
 *   </EmptyState.Content>
 * </EmptyState.Root>
 * ```
 */
declare class EmptyStateRoot implements m.ClassComponent<EmptyStateRootAttrs> {
    view(vnode: m.Vnode<EmptyStateRootAttrs>): JSX.Element;
    private renderChildren;
}
/**
 * EmptyState コンポーネント名前空間
 */
export declare const EmptyState: {
    readonly Root: typeof EmptyStateRoot;
    readonly Content: typeof EmptyStateContentMarker;
    readonly Indicator: typeof EmptyStateIndicatorMarker;
    readonly Title: typeof EmptyStateTitleMarker;
    readonly Description: typeof EmptyStateDescriptionMarker;
};
export { EmptyStateRoot };
//# sourceMappingURL=EmptyState.d.ts.map