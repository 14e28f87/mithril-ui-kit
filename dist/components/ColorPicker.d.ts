/** @jsx m */
import m from "mithril";
/** HSVA カラーモデル */
export type HsvaColor = {
    h: number;
    s: number;
    v: number;
    a: number;
};
/** カラーフォーマット */
export type ColorFormat = "hex" | "hexa" | "rgb" | "rgba" | "hsl" | "hsla";
/** サイズ */
export type ColorPickerSize = "sm" | "md" | "lg";
/** 値変更詳細 */
export type ColorPickerValueChangeDetails = {
    value: string;
    valueAsColor: HsvaColor;
};
/**
 * ColorPicker.Root に渡せる属性
 */
export type ColorPickerRootAttrs = {
    /** カラー値（文字列: hex, rgb, hsl）— 制御モード */
    value?: string;
    /** 初期値（非制御モード） */
    defaultValue?: string;
    /** 値変更時のコールバック */
    onValueChange?: (details: ColorPickerValueChangeDetails) => void;
    /** 値コミット時のコールバック */
    onValueChangeEnd?: (details: ColorPickerValueChangeDetails) => void;
    /** 表示フォーマット */
    format?: ColorFormat;
    /** サイズ */
    size?: ColorPickerSize;
    /** 無効化 */
    disabled?: boolean;
    /** 読み取り専用 */
    readOnly?: boolean;
    /** フォーム送信用 name */
    name?: string;
    /** formRef */
    formRef?: any;
    /** 追加クラス */
    class?: string;
    /** スタイル */
    style?: Record<string, string>;
};
export type ColorPickerLabelAttrs = {
    class?: string;
    style?: Record<string, string>;
};
export type ColorPickerControlAttrs = {
    class?: string;
    style?: Record<string, string>;
};
export type ColorPickerInputAttrs = {
    class?: string;
    style?: Record<string, string>;
};
export type ColorPickerTriggerAttrs = {
    class?: string;
    style?: Record<string, string>;
};
export type ColorPickerContentAttrs = {
    class?: string;
    style?: Record<string, string>;
};
export type ColorPickerAreaAttrs = {
    class?: string;
    style?: Record<string, string>;
};
export type ColorPickerChannelSliderAttrs = {
    channel?: "hue" | "alpha";
    class?: string;
    style?: Record<string, string>;
};
export type ColorPickerSwatchGroupAttrs = {
    class?: string;
    style?: Record<string, string>;
};
export type ColorPickerSwatchTriggerAttrs = {
    value: string;
    class?: string;
    style?: Record<string, string>;
};
export type ColorPickerSwatchAttrs = {
    value?: string;
    class?: string;
    style?: Record<string, string>;
};
export type ColorPickerEyeDropperAttrs = {
    class?: string;
    style?: Record<string, string>;
};
type CPRole = "label" | "control" | "input" | "trigger" | "positioner" | "content" | "area" | "channelSlider" | "swatchGroup" | "swatchTrigger" | "swatch" | "eyeDropper";
export declare class CPLabelMarker implements m.Component<ColorPickerLabelAttrs> {
    static __cpRole: CPRole;
    view(vnode: m.Vnode<ColorPickerLabelAttrs>): JSX.Element;
}
export declare class CPControlMarker implements m.Component<ColorPickerControlAttrs> {
    static __cpRole: CPRole;
    view(vnode: m.Vnode<ColorPickerControlAttrs>): JSX.Element;
}
export declare class CPInputMarker implements m.Component<ColorPickerInputAttrs> {
    static __cpRole: CPRole;
    view(vnode: m.Vnode<ColorPickerInputAttrs>): JSX.Element;
}
export declare class CPTriggerMarker implements m.Component<ColorPickerTriggerAttrs> {
    static __cpRole: CPRole;
    view(vnode: m.Vnode<ColorPickerTriggerAttrs>): JSX.Element;
}
export declare class CPContentMarker implements m.Component<ColorPickerContentAttrs> {
    static __cpRole: CPRole;
    view(vnode: m.Vnode<ColorPickerContentAttrs>): JSX.Element;
}
export declare class CPAreaMarker implements m.Component<ColorPickerAreaAttrs> {
    static __cpRole: CPRole;
    view(vnode: m.Vnode<ColorPickerAreaAttrs>): JSX.Element;
}
export declare class CPChannelSliderMarker implements m.Component<ColorPickerChannelSliderAttrs> {
    static __cpRole: CPRole;
    view(vnode: m.Vnode<ColorPickerChannelSliderAttrs>): JSX.Element;
}
export declare class CPSwatchGroupMarker implements m.Component<ColorPickerSwatchGroupAttrs> {
    static __cpRole: CPRole;
    view(vnode: m.Vnode<ColorPickerSwatchGroupAttrs>): JSX.Element;
}
export declare class CPSwatchTriggerMarker implements m.Component<ColorPickerSwatchTriggerAttrs> {
    static __cpRole: CPRole;
    view(vnode: m.Vnode<ColorPickerSwatchTriggerAttrs>): JSX.Element;
}
export declare class CPSwatchMarker implements m.Component<ColorPickerSwatchAttrs> {
    static __cpRole: CPRole;
    view(vnode: m.Vnode<ColorPickerSwatchAttrs>): JSX.Element;
}
export declare class CPEyeDropperMarker implements m.Component<ColorPickerEyeDropperAttrs> {
    static __cpRole: CPRole;
    view(vnode: m.Vnode<ColorPickerEyeDropperAttrs>): JSX.Element;
}
/**
 * @class ColorPickerRoot
 * @description
 * Chakra UI 風のカラーピッカー compound component。
 *
 * 色相・彩度・明度の2Dエリア、Hue / Alpha スライダー、
 * SW atch プリセット、テキスト入力をサポートする。
 *
 * @example
 * <ColorPicker.Root defaultValue="#ff0000">
 *   <ColorPicker.Label>Color</ColorPicker.Label>
 *   <ColorPicker.Control>
 *     <ColorPicker.Input />
 *     <ColorPicker.Trigger />
 *   </ColorPicker.Control>
 *   <ColorPicker.Positioner>
 *     <ColorPicker.Content>
 *       <ColorPicker.Area />
 *       <ColorPicker.ChannelSlider channel="hue" />
 *       <ColorPicker.ChannelSlider channel="alpha" />
 *     </ColorPicker.Content>
 *   </ColorPicker.Positioner>
 * </ColorPicker.Root>
 */
export declare class ColorPickerRoot implements m.Component<ColorPickerRootAttrs> {
    private internalColor;
    private isOpen;
    private areaEl;
    private dragging;
    private rootEl;
    private boundDocClick;
    oninit(vnode: m.Vnode<ColorPickerRootAttrs>): void;
    oncreate(vnode: m.VnodeDOM<ColorPickerRootAttrs>): void;
    onremove(): void;
    private isControlled;
    private getColor;
    private getFormat;
    private emitChange;
    private emitChangeEnd;
    private startAreaDrag;
    private updateAreaFromEvent;
    private startSliderDrag;
    view(vnode: m.Vnode<ColorPickerRootAttrs>): JSX.Element;
    private renderChildren;
}
/**
 * Positioner は Content のラッパー。
 * Root 内部で content マーカーの表示制御に使う。
 * 実際の描画は Root 側で行うため identity 通過させる。
 */
export declare class CPPositionerMarker implements m.Component<{
    class?: string;
    style?: Record<string, string>;
}> {
    static __cpRole: CPRole;
    view(vnode: m.Vnode): JSX.Element;
}
/**
 * ColorPicker compound component
 *
 * @example
 * ```tsx
 * <ColorPicker.Root defaultValue="#3b82f6">
 *   <ColorPicker.Label>Color</ColorPicker.Label>
 *   <ColorPicker.Control>
 *     <ColorPicker.Input />
 *     <ColorPicker.Trigger />
 *   </ColorPicker.Control>
 *   <ColorPicker.Positioner>
 *     <ColorPicker.Content>
 *       <ColorPicker.Area />
 *       <ColorPicker.ChannelSlider channel="hue" />
 *     </ColorPicker.Content>
 *   </ColorPicker.Positioner>
 * </ColorPicker.Root>
 * ```
 */
export declare const ColorPicker: {
    Root: typeof ColorPickerRoot;
    Label: typeof CPLabelMarker;
    Control: typeof CPControlMarker;
    Input: typeof CPInputMarker;
    Trigger: typeof CPTriggerMarker;
    Positioner: typeof CPPositionerMarker;
    Content: typeof CPContentMarker;
    Area: typeof CPAreaMarker;
    ChannelSlider: typeof CPChannelSliderMarker;
    SwatchGroup: typeof CPSwatchGroupMarker;
    SwatchTrigger: typeof CPSwatchTriggerMarker;
    Swatch: typeof CPSwatchMarker;
    EyeDropper: typeof CPEyeDropperMarker;
};
export {};
//# sourceMappingURL=ColorPicker.d.ts.map