/** @jsx m */
import m from "mithril";
/**
 * ProgressCircle サイズ
 */
export type ProgressCircleSize = "xs" | "sm" | "md" | "lg" | "xl";
type ProgressCircleRole = "circle" | "track" | "range" | "valueText";
export interface ProgressCircleRootAttrs {
    /** 現在値（null で不確定） */
    value?: number | null;
    /** 最小値 */
    min?: number;
    /** 最大値 */
    max?: number;
    /** サイズ */
    size?: ProgressCircleSize;
    /** カラーパレット */
    colorPalette?: string;
    /** 追加クラス */
    class?: string;
    [key: string]: any;
}
declare class ProgressCircleCircleMarker {
    static __pcRole: ProgressCircleRole;
    view(): null;
}
declare class ProgressCircleTrackMarker {
    static __pcRole: ProgressCircleRole;
    view(): null;
}
declare class ProgressCircleRangeMarker {
    static __pcRole: ProgressCircleRole;
    view(): null;
}
declare class ProgressCircleValueTextMarker {
    static __pcRole: ProgressCircleRole;
    view(): null;
}
/**
 * ProgressCircle Root コンポーネント — 円形の進捗インジケーター
 *
 * @example
 * ```tsx
 * <ProgressCircle.Root value={75} size="lg" colorPalette="green">
 *   <ProgressCircle.Circle>
 *     <ProgressCircle.Track />
 *     <ProgressCircle.Range />
 *   </ProgressCircle.Circle>
 *   <ProgressCircle.ValueText />
 * </ProgressCircle.Root>
 * ```
 */
declare class ProgressCircleRoot implements m.ClassComponent<ProgressCircleRootAttrs> {
    view(vnode: m.Vnode<ProgressCircleRootAttrs>): JSX.Element;
    private renderValueText;
}
/**
 * ProgressCircle コンポーネント名前空間
 */
export declare const ProgressCircle: {
    readonly Root: typeof ProgressCircleRoot;
    readonly Circle: typeof ProgressCircleCircleMarker;
    readonly Track: typeof ProgressCircleTrackMarker;
    readonly Range: typeof ProgressCircleRangeMarker;
    readonly ValueText: typeof ProgressCircleValueTextMarker;
};
export { ProgressCircleRoot };
//# sourceMappingURL=ProgressCircle.d.ts.map