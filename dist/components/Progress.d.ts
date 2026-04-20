/** @jsx m */
import m from "mithril";
/**
 * Progress バリアント
 */
export type ProgressVariant = "outline" | "subtle";
/**
 * Progress サイズ
 */
export type ProgressSize = "xs" | "sm" | "md" | "lg" | "xl";
type ProgressRole = "track" | "range" | "label" | "valueText";
export interface ProgressRootAttrs {
    /** 現在値（null で不確定） */
    value?: number | null;
    /** 最小値 */
    min?: number;
    /** 最大値 */
    max?: number;
    /** バリアント */
    variant?: ProgressVariant;
    /** サイズ */
    size?: ProgressSize;
    /** カラーパレット */
    colorPalette?: string;
    /** ストライプ */
    striped?: boolean;
    /** アニメーション (ストライプが動く) */
    animated?: boolean;
    /** 追加クラス */
    class?: string;
    [key: string]: any;
}
declare class ProgressTrackMarker {
    static __progressRole: ProgressRole;
    view(): null;
}
declare class ProgressRangeMarker {
    static __progressRole: ProgressRole;
    view(): null;
}
declare class ProgressLabelMarker {
    static __progressRole: ProgressRole;
    view(): null;
}
declare class ProgressValueTextMarker {
    static __progressRole: ProgressRole;
    view(): null;
}
/**
 * Progress Root コンポーネント — 進捗バー
 *
 * @example
 * ```tsx
 * <Progress.Root value={60} size="md" colorPalette="green">
 *   <Progress.Label>アップロード中</Progress.Label>
 *   <Progress.ValueText />
 *   <Progress.Track>
 *     <Progress.Range />
 *   </Progress.Track>
 * </Progress.Root>
 * ```
 */
declare class ProgressRoot implements m.ClassComponent<ProgressRootAttrs> {
    view(vnode: m.Vnode<ProgressRootAttrs>): JSX.Element;
}
/**
 * Progress コンポーネント名前空間
 */
export declare const Progress: {
    readonly Root: typeof ProgressRoot;
    readonly Track: typeof ProgressTrackMarker;
    readonly Range: typeof ProgressRangeMarker;
    readonly Label: typeof ProgressLabelMarker;
    readonly ValueText: typeof ProgressValueTextMarker;
};
export { ProgressRoot };
//# sourceMappingURL=Progress.d.ts.map