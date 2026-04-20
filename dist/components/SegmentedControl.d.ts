/** @jsx m */
import m from "mithril";
/**
 * SegmentedControl サイズ
 */
export type SegmentedControlSize = "xs" | "sm" | "md" | "lg";
type SCRole = "item" | "itemText" | "itemHiddenInput" | "indicator";
export interface SegmentedControlRootAttrs {
    /** サイズ */
    size?: SegmentedControlSize;
    /** 選択値 */
    value?: string;
    /** 値変更コールバック */
    onValueChange?: (value: string) => void;
    /** 方向 */
    orientation?: "horizontal" | "vertical";
    /** 追加クラス */
    class?: string;
    [key: string]: any;
}
export interface SegmentedControlItemAttrs {
    /** この項目の値 */
    value: string;
    /** 無効状態 */
    disabled?: boolean;
    /** 追加クラス */
    class?: string;
    [key: string]: any;
}
declare class SCItemMarker {
    static __scRole: SCRole;
    view(): null;
}
declare class SCItemTextMarker {
    static __scRole: SCRole;
    view(): null;
}
declare class SCItemHiddenInputMarker {
    static __scRole: SCRole;
    view(): null;
}
declare class SCIndicatorMarker {
    static __scRole: SCRole;
    view(): null;
}
/**
 * SegmentedControl Root コンポーネント — ボタン風の切替セレクタ
 *
 * @example
 * ```tsx
 * <SegmentedControl.Root value={selected} onValueChange={v => selected = v}>
 *   <SegmentedControl.Item value="list">
 *     <SegmentedControl.ItemText>リスト</SegmentedControl.ItemText>
 *   </SegmentedControl.Item>
 *   <SegmentedControl.Item value="grid">
 *     <SegmentedControl.ItemText>グリッド</SegmentedControl.ItemText>
 *   </SegmentedControl.Item>
 * </SegmentedControl.Root>
 * ```
 */
declare class SegmentedControlRoot implements m.ClassComponent<SegmentedControlRootAttrs> {
    view(vnode: m.Vnode<SegmentedControlRootAttrs>): JSX.Element;
    private renderItemContent;
}
/**
 * SegmentedControl コンポーネント名前空間
 */
export declare const SegmentedControl: {
    readonly Root: typeof SegmentedControlRoot;
    readonly Item: typeof SCItemMarker;
    readonly ItemText: typeof SCItemTextMarker;
    readonly ItemHiddenInput: typeof SCItemHiddenInputMarker;
    readonly Indicator: typeof SCIndicatorMarker;
};
export { SegmentedControlRoot };
//# sourceMappingURL=SegmentedControl.d.ts.map