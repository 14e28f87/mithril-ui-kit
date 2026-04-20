/** @jsx m */
import m from "mithril";
/** チェック状態: true | false | "indeterminate" */
export type CheckedState = boolean | "indeterminate";
/** サイズ */
export type CheckboxSize = "xs" | "sm" | "md" | "lg";
/** バリアント */
export type CheckboxVariant = "solid" | "outline" | "subtle";
/** チェック状態変更時の詳細 */
export type CheckboxCheckedChangeDetails = {
    checked: CheckedState;
};
/**
 * Checkbox.Root に渡せる属性
 */
export type CheckboxRootAttrs = {
    /** チェック状態（制御モード） */
    checked?: CheckedState;
    /** 初期チェック状態（非制御モード） */
    defaultChecked?: CheckedState;
    /** チェック状態変更時のコールバック */
    onCheckedChange?: (details: CheckboxCheckedChangeDetails) => void;
    /** 無効化 */
    disabled?: boolean;
    /** バリデーションエラー */
    invalid?: boolean;
    /** 読み取り専用 */
    readOnly?: boolean;
    /** フォーム送信用の値 */
    value?: string;
    /** フォーム送信用の名前 */
    name?: string;
    /** サイズ（デフォルト: "md"） */
    size?: CheckboxSize;
    /** バリアント（デフォルト: "solid"） */
    variant?: CheckboxVariant;
    /** カラー（CSS変数 --checkbox-color で反映） */
    colorPalette?: string;
    /** formRef（Mithril UI Kit の Form 連携） */
    formRef?: any;
    /** 追加クラス */
    class?: string;
    /** スタイル */
    style?: Record<string, string>;
};
/** Checkbox.HiddenInput に渡せる属性 */
export type CheckboxHiddenInputAttrs = {
    class?: string;
};
/** Checkbox.Control に渡せる属性 */
export type CheckboxControlAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Checkbox.Indicator に渡せる属性 */
export type CheckboxIndicatorAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Checkbox.Label に渡せる属性 */
export type CheckboxLabelAttrs = {
    class?: string;
    style?: Record<string, string>;
};
type CheckboxRole = "hiddenInput" | "control" | "indicator" | "label";
/** Checkbox.HiddenInput — 隠し input のマーカー */
export declare class CheckboxHiddenInputMarker implements m.Component<CheckboxHiddenInputAttrs> {
    static __checkboxRole: CheckboxRole;
    view(vnode: m.Vnode<CheckboxHiddenInputAttrs>): JSX.Element;
}
/** Checkbox.Control — コントロール枠のマーカー */
export declare class CheckboxControlMarker implements m.Component<CheckboxControlAttrs> {
    static __checkboxRole: CheckboxRole;
    view(vnode: m.Vnode<CheckboxControlAttrs>): JSX.Element;
}
/** Checkbox.Indicator — チェックアイコンのマーカー */
export declare class CheckboxIndicatorMarker implements m.Component<CheckboxIndicatorAttrs> {
    static __checkboxRole: CheckboxRole;
    view(vnode: m.Vnode<CheckboxIndicatorAttrs>): JSX.Element;
}
/** Checkbox.Label — ラベルのマーカー */
export declare class CheckboxLabelMarker implements m.Component<CheckboxLabelAttrs> {
    static __checkboxRole: CheckboxRole;
    view(vnode: m.Vnode<CheckboxLabelAttrs>): JSX.Element;
}
/**
 * @class CheckboxRoot
 * @description
 * Chakra UI 風の Checkbox compound component。
 *
 * 制御モード（checked）と非制御モード（defaultChecked）の両方をサポート。
 * indeterminate 状態もサポート。
 *
 * 主な機能:
 * - solid / outline / subtle バリアント
 * - xs / sm / md / lg サイズ
 * - colorPalette によるカスタムカラー
 * - formRef による Mithril UI Kit Form 連携
 * - indeterminate 状態
 *
 * @example
 * <Checkbox.Root onCheckedChange={({ checked }) => { ... }}>
 *   <Checkbox.HiddenInput />
 *   <Checkbox.Control>
 *     <Checkbox.Indicator />
 *   </Checkbox.Control>
 *   <Checkbox.Label>同意する</Checkbox.Label>
 * </Checkbox.Root>
 */
export declare class CheckboxRoot implements m.Component<CheckboxRootAttrs> {
    private internalChecked;
    private inputId;
    oninit(vnode: m.Vnode<CheckboxRootAttrs>): void;
    private isControlled;
    private getChecked;
    private toggle;
    view(vnode: m.Vnode<CheckboxRootAttrs>): JSX.Element;
}
/** CheckboxGroup の値変更詳細 */
export type CheckboxGroupValueChangeDetails = {
    value: string[];
};
/** CheckboxGroup に渡せる属性 */
export type CheckboxGroupAttrs = {
    /** チェックされた値の配列 */
    value?: string[];
    /** 初期値 */
    defaultValue?: string[];
    /** 値変更時のコールバック */
    onValueChange?: (details: CheckboxGroupValueChangeDetails) => void;
    /** 無効化 */
    disabled?: boolean;
    /** フォーム送信用の名前 */
    name?: string;
    /** レイアウト方向 */
    orientation?: "horizontal" | "vertical";
    /** 追加クラス */
    class?: string;
    /** スタイル */
    style?: Record<string, string>;
};
/**
 * @class CheckboxGroup
 * @description
 * 複数の Checkbox を管理するグループコンポーネント。
 * value 配列で選択状態を管理し、onValueChange で配列を返す。
 *
 * @example
 * <CheckboxGroup
 *   value={selectedValues}
 *   onValueChange={({ value }) => selectedValues = value}
 * >
 *   <Checkbox.Root value="a">
 *     <Checkbox.Control><Checkbox.Indicator /></Checkbox.Control>
 *     <Checkbox.Label>A</Checkbox.Label>
 *   </Checkbox.Root>
 * </CheckboxGroup>
 */
export declare class CheckboxGroup implements m.Component<CheckboxGroupAttrs> {
    private internalValue;
    oninit(vnode: m.Vnode<CheckboxGroupAttrs>): void;
    private isControlled;
    private getValue;
    view(vnode: m.Vnode<CheckboxGroupAttrs>): JSX.Element;
    /** 子 CheckboxRoot に checked / onCheckedChange を注入 */
    private processChildren;
}
/**
 * Checkbox compound component
 *
 * @example
 * ```tsx
 * <Checkbox.Root onCheckedChange={({ checked }) => { ... }}>
 *   <Checkbox.HiddenInput />
 *   <Checkbox.Control>
 *     <Checkbox.Indicator />
 *   </Checkbox.Control>
 *   <Checkbox.Label>同意する</Checkbox.Label>
 * </Checkbox.Root>
 * ```
 */
export declare const Checkbox: {
    Root: typeof CheckboxRoot;
    HiddenInput: typeof CheckboxHiddenInputMarker;
    Control: typeof CheckboxControlMarker;
    Indicator: typeof CheckboxIndicatorMarker;
    Label: typeof CheckboxLabelMarker;
    Group: typeof CheckboxGroup;
};
export {};
//# sourceMappingURL=Checkbox.d.ts.map