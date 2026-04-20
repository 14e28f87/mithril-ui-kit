/** @jsx m */
import m from "mithril";
/** Slider のサイズ */
export type SliderSize = "sm" | "md" | "lg";
/** Slider の外観バリアント */
export type SliderVariant = "outline" | "solid";
/** Slider の方向 */
export type SliderOrientation = "horizontal" | "vertical";
/** 値変更時の詳細 */
export type SliderValueChangeDetails = {
    value: number[];
};
/**
 * Slider.Root に渡せる属性
 */
export type SliderRootAttrs = {
    /** 最小値 */
    min?: number;
    /** 最大値 */
    max?: number;
    /** ステップ */
    step?: number;
    /** 現在の値（制御モード、配列でマルチサム対応） */
    value?: number[];
    /** 初期値（非制御モード） */
    defaultValue?: number[];
    /** 値変更コールバック（ドラッグ中も発火） */
    onValueChange?: (details: SliderValueChangeDetails) => void;
    /** 値変更完了コールバック（ドラッグ終了時のみ） */
    onValueChangeEnd?: (details: SliderValueChangeDetails) => void;
    /** 方向 */
    orientation?: SliderOrientation;
    /** サイズ */
    size?: SliderSize;
    /** 外観 */
    variant?: SliderVariant;
    /** 無効化 */
    disabled?: boolean;
    /** 読み取り専用 */
    readOnly?: boolean;
    /** origin: 範囲の起点（デフォルト: "start"） */
    origin?: "start" | "center";
    /** マルチサム時の最小ステップ間隔 */
    minStepsBetweenThumbs?: number;
    class?: string;
    style?: Record<string, string>;
};
/** Slider.Label に渡せる属性 */
export type SliderLabelAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Slider.ValueText に渡せる属性 */
export type SliderValueTextAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Slider.Control に渡せる属性 */
export type SliderControlAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Slider.Track に渡せる属性 */
export type SliderTrackAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Slider.Range に渡せる属性 */
export type SliderRangeAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Slider.Thumb に渡せる属性 */
export type SliderThumbAttrs = {
    /** サムのインデックス */
    index?: number;
    class?: string;
    style?: Record<string, string>;
};
/** Slider.DraggingIndicator に渡せる属性 */
export type SliderDraggingIndicatorAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Slider.HiddenInput に渡せる属性 */
export type SliderHiddenInputAttrs = {
    class?: string;
};
/** Slider.MarkerGroup に渡せる属性 */
export type SliderMarkerGroupAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Slider.Marker に渡せる属性 */
export type SliderMarkerAttrs = {
    /** マーカーの値 */
    value: number;
    class?: string;
    style?: Record<string, string>;
};
type SliderRole = "label" | "valueText" | "control" | "track" | "range" | "thumb" | "draggingIndicator" | "hiddenInput" | "markerGroup" | "marker";
/** Slider.Label マーカー */
export declare class SliderLabelMarker implements m.Component<SliderLabelAttrs> {
    static __sliderRole: SliderRole;
    view(vnode: m.Vnode<SliderLabelAttrs>): JSX.Element;
}
/** Slider.ValueText マーカー */
export declare class SliderValueTextMarker implements m.Component<SliderValueTextAttrs> {
    static __sliderRole: SliderRole;
    view(vnode: m.Vnode<SliderValueTextAttrs>): JSX.Element;
}
/** Slider.Control マーカー */
export declare class SliderControlMarker implements m.Component<SliderControlAttrs> {
    static __sliderRole: SliderRole;
    view(vnode: m.Vnode<SliderControlAttrs>): JSX.Element;
}
/** Slider.Track マーカー */
export declare class SliderTrackMarker implements m.Component<SliderTrackAttrs> {
    static __sliderRole: SliderRole;
    view(vnode: m.Vnode<SliderTrackAttrs>): JSX.Element;
}
/** Slider.Range マーカー */
export declare class SliderRangeMarker implements m.Component<SliderRangeAttrs> {
    static __sliderRole: SliderRole;
    view(vnode: m.Vnode<SliderRangeAttrs>): JSX.Element;
}
/** Slider.Thumb マーカー */
export declare class SliderThumbMarker implements m.Component<SliderThumbAttrs> {
    static __sliderRole: SliderRole;
    view(vnode: m.Vnode<SliderThumbAttrs>): JSX.Element;
}
/** Slider.DraggingIndicator マーカー */
export declare class SliderDraggingIndicatorMarker implements m.Component<SliderDraggingIndicatorAttrs> {
    static __sliderRole: SliderRole;
    view(vnode: m.Vnode<SliderDraggingIndicatorAttrs>): JSX.Element;
}
/** Slider.HiddenInput マーカー */
export declare class SliderHiddenInputMarker implements m.Component<SliderHiddenInputAttrs> {
    static __sliderRole: SliderRole;
    view(vnode: m.Vnode<SliderHiddenInputAttrs>): JSX.Element;
}
/** Slider.MarkerGroup マーカー */
export declare class SliderMarkerGroupMarker implements m.Component<SliderMarkerGroupAttrs> {
    static __sliderRole: SliderRole;
    view(vnode: m.Vnode<SliderMarkerGroupAttrs>): JSX.Element;
}
/** Slider.Marker マーカー */
export declare class SliderMarkerMarker implements m.Component<SliderMarkerAttrs> {
    static __sliderRole: SliderRole;
    view(vnode: m.Vnode<SliderMarkerAttrs>): JSX.Element;
}
/**
 * Slider.Root — スライダーのルートコンポーネント
 *
 * @description
 * Chakra UI 風の Slider compound component。
 * 単一サム・マルチサム・range スライダーに対応。
 * ドラッグ、キーボード操作、マーカー表示をサポート。
 */
export declare class SliderRoot implements m.Component<SliderRootAttrs> {
    private internalValue;
    private draggingIndex;
    private controlEl;
    oninit(vnode: m.Vnode<SliderRootAttrs>): void;
    private isControlled;
    private getValue;
    private setValue;
    private setValueAtIndex;
    private getPercentFromPointer;
    private findClosestThumb;
    private handlePointerDown;
    private handleKeyDown;
    view(vnode: m.Vnode<SliderRootAttrs>): JSX.Element;
}
/**
 * Slider compound component
 *
 * @example
 * ```tsx
 * <Slider.Root min={0} max={100} defaultValue={[50]}>
 *   <Slider.Label>音量</Slider.Label>
 *   <Slider.ValueText />
 *   <Slider.Control>
 *     <Slider.Track>
 *       <Slider.Range />
 *     </Slider.Track>
 *     <Slider.Thumb index={0} />
 *   </Slider.Control>
 * </Slider.Root>
 * ```
 */
export declare const Slider: {
    Root: typeof SliderRoot;
    Label: typeof SliderLabelMarker;
    ValueText: typeof SliderValueTextMarker;
    Control: typeof SliderControlMarker;
    Track: typeof SliderTrackMarker;
    Range: typeof SliderRangeMarker;
    Thumb: typeof SliderThumbMarker;
    DraggingIndicator: typeof SliderDraggingIndicatorMarker;
    HiddenInput: typeof SliderHiddenInputMarker;
    MarkerGroup: typeof SliderMarkerGroupMarker;
    Marker: typeof SliderMarkerMarker;
};
export {};
//# sourceMappingURL=Slider.d.ts.map