/** @jsx m */
import m from "mithril";
/** Switch のサイズ */
export type SwitchSize = "xs" | "sm" | "md" | "lg";
/** Switch の外観バリアント */
export type SwitchVariant = "solid" | "raised";
/** チェック状態変更時の詳細 */
export type SwitchCheckedChangeDetails = {
    checked: boolean;
};
/**
 * Switch.Root に渡せる属性
 */
export type SwitchRootAttrs = {
    /** チェック状態（制御モード） */
    checked?: boolean;
    /** 初期チェック状態（非制御モード） */
    defaultChecked?: boolean;
    /** チェック状態が変わったときのコールバック */
    onCheckedChange?: (details: SwitchCheckedChangeDetails) => void;
    /** 無効化 */
    disabled?: boolean;
    /** バリデーションエラー状態 */
    invalid?: boolean;
    /** 読み取り専用 */
    readOnly?: boolean;
    /** サイズ（デフォルト: "md"） */
    size?: SwitchSize;
    /** 外観（デフォルト: "solid"） */
    variant?: SwitchVariant;
    /** カラー（CSS変数 --switch-color で反映） */
    colorPalette?: string;
    /** フォーム送信用の値 */
    value?: string;
    /** フォーム送信用の名前 */
    name?: string;
    class?: string;
    style?: Record<string, string>;
};
/** Switch.Control に渡せる属性 */
export type SwitchControlAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Switch.Thumb に渡せる属性 */
export type SwitchThumbAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Switch.ThumbIndicator に渡せる属性 */
export type SwitchThumbIndicatorAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Switch.Label に渡せる属性 */
export type SwitchLabelAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Switch.Indicator に渡せる属性 */
export type SwitchIndicatorAttrs = {
    /** チェック時のみ表示するか（デフォルト true） */
    fallback?: m.Children;
    class?: string;
    style?: Record<string, string>;
};
/** Switch.HiddenInput に渡せる属性 */
export type SwitchHiddenInputAttrs = {
    class?: string;
};
type SwitchRole = "control" | "thumb" | "thumbIndicator" | "label" | "indicator" | "hiddenInput";
/**
 * Switch.Control — トラック部分のマーカー
 */
export declare class SwitchControlMarker implements m.Component<SwitchControlAttrs> {
    static __switchRole: SwitchRole;
    view(vnode: m.Vnode<SwitchControlAttrs>): JSX.Element;
}
/**
 * Switch.Thumb — つまみ部分のマーカー
 */
export declare class SwitchThumbMarker implements m.Component<SwitchThumbAttrs> {
    static __switchRole: SwitchRole;
    view(vnode: m.Vnode<SwitchThumbAttrs>): JSX.Element;
}
/**
 * Switch.ThumbIndicator — つまみ内アイコンのマーカー
 */
export declare class SwitchThumbIndicatorMarker implements m.Component<SwitchThumbIndicatorAttrs> {
    static __switchRole: SwitchRole;
    view(vnode: m.Vnode<SwitchThumbIndicatorAttrs>): JSX.Element;
}
/**
 * Switch.Label — ラベルのマーカー
 */
export declare class SwitchLabelMarker implements m.Component<SwitchLabelAttrs> {
    static __switchRole: SwitchRole;
    view(vnode: m.Vnode<SwitchLabelAttrs>): JSX.Element;
}
/**
 * Switch.Indicator — チェック状態インジケーターのマーカー
 */
export declare class SwitchIndicatorMarker implements m.Component<SwitchIndicatorAttrs> {
    static __switchRole: SwitchRole;
    view(vnode: m.Vnode<SwitchIndicatorAttrs>): JSX.Element;
}
/**
 * Switch.HiddenInput — 隠し input のマーカー
 */
export declare class SwitchHiddenInputMarker implements m.Component<SwitchHiddenInputAttrs> {
    static __switchRole: SwitchRole;
    view(vnode: m.Vnode<SwitchHiddenInputAttrs>): JSX.Element;
}
/**
 * Switch.Root — スイッチのルートコンポーネント
 *
 * @description
 * Chakra UI 風の Switch compound component。
 * 制御モード（checked）と非制御モード（defaultChecked）の両方をサポート。
 */
export declare class SwitchRoot implements m.Component<SwitchRootAttrs> {
    private internalChecked;
    private inputId;
    oninit(vnode: m.Vnode<SwitchRootAttrs>): void;
    private isControlled;
    private getChecked;
    private toggle;
    view(vnode: m.Vnode<SwitchRootAttrs>): JSX.Element;
}
/**
 * Switch compound component
 *
 * @example
 * ```tsx
 * <Switch.Root checked={isOn} onCheckedChange={({ checked }) => isOn = checked}>
 *   <Switch.Control>
 *     <Switch.Thumb />
 *   </Switch.Control>
 *   <Switch.Label>Wi-Fi</Switch.Label>
 * </Switch.Root>
 * ```
 */
export declare const Switch: {
    Root: typeof SwitchRoot;
    Control: typeof SwitchControlMarker;
    Thumb: typeof SwitchThumbMarker;
    ThumbIndicator: typeof SwitchThumbIndicatorMarker;
    Label: typeof SwitchLabelMarker;
    Indicator: typeof SwitchIndicatorMarker;
    HiddenInput: typeof SwitchHiddenInputMarker;
};
export {};
//# sourceMappingURL=Switch.d.ts.map