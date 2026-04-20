/** @jsx m */
/**
 * @fileoverview
 * InputPassword — compound component 型のパスワード入力コンポーネント
 *
 * Chakra UI の password-input API を参考に、表示/非表示トグル機能を備えた
 * パスワード入力フィールドを提供する。
 *
 * @example
 * ```tsx
 * <InputPassword.Root>
 *   <InputPassword.Input placeholder="パスワード" />
 *   <InputPassword.VisibilityTrigger />
 * </InputPassword.Root>
 * ```
 *
 * @module InputPassword
 */
/** @jsx m */
import m from "mithril";
/** InputPassword のサイズ */
export type InputPasswordSize = "xs" | "sm" | "md" | "lg";
/** InputPassword のバリエーション */
export type InputPasswordVariant = "outline" | "filled" | "flushed";
/**
 * InputPassword.Root に渡せる属性
 */
export type InputPasswordRootAttrs = {
    /** 制御モード: パスワードの現在値 */
    value?: string;
    /** 非制御モード: 初期値 */
    defaultValue?: string;
    /** 値変更コールバック */
    onValueChange?: (value: string) => void;
    /** Form 連携用の oninput（値を直接受け取る） */
    oninput?: (value: string) => void;
    /** Form 連携用の onblur */
    onblur?: () => void;
    /** 制御モード: パスワードの表示状態 */
    visible?: boolean;
    /** 非制御モード: 初期表示状態（デフォルト: false = 非表示） */
    defaultVisible?: boolean;
    /** 表示状態変更コールバック */
    onVisibleChange?: (visible: boolean) => void;
    /** 無効化 */
    disabled?: boolean;
    /** 読み取り専用 */
    readOnly?: boolean;
    /** フォーム用の name 属性 */
    name?: string;
    /** サイズ（デフォルト: "md"） */
    size?: InputPasswordSize;
    /** バリエーション（デフォルト: "outline"） */
    variant?: InputPasswordVariant;
    /** コンテナの幅 */
    width?: string;
    class?: string;
    style?: Record<string, string>;
};
/** InputPassword.Input に渡せる属性 */
export type InputPasswordInputAttrs = {
    /** プレースホルダー */
    placeholder?: string;
    class?: string;
    style?: Record<string, string>;
};
/** InputPassword.VisibilityTrigger に渡せる属性 */
export type InputPasswordVisibilityTriggerAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** InputPassword.Label に渡せる属性 */
export type InputPasswordLabelAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** InputPassword.StrengthMeter に渡せる属性 */
export type InputPasswordStrengthMeterAttrs = {
    /** 強度（0〜4） */
    value: number;
    class?: string;
    style?: Record<string, string>;
};
type InputPasswordRole = "input" | "visibility-trigger" | "label" | "strength-meter";
/** @class InputPasswordInputMarker - 入力フィールドマーカー */
export declare class InputPasswordInputMarker implements m.Component<InputPasswordInputAttrs> {
    static __inputPasswordRole: InputPasswordRole;
    view(vnode: m.Vnode<InputPasswordInputAttrs>): JSX.Element;
}
/** @class InputPasswordVisibilityTriggerMarker - 表示/非表示トグルボタンマーカー */
export declare class InputPasswordVisibilityTriggerMarker implements m.Component<InputPasswordVisibilityTriggerAttrs> {
    static __inputPasswordRole: InputPasswordRole;
    view(vnode: m.Vnode<InputPasswordVisibilityTriggerAttrs>): JSX.Element;
}
/** @class InputPasswordLabelMarker - ラベルマーカー */
export declare class InputPasswordLabelMarker implements m.Component<InputPasswordLabelAttrs> {
    static __inputPasswordRole: InputPasswordRole;
    view(vnode: m.Vnode<InputPasswordLabelAttrs>): JSX.Element;
}
/** @class InputPasswordStrengthMeterMarker - パスワード強度メーターマーカー */
export declare class InputPasswordStrengthMeterMarker implements m.Component<InputPasswordStrengthMeterAttrs> {
    static __inputPasswordRole: InputPasswordRole;
    view(vnode: m.Vnode<InputPasswordStrengthMeterAttrs>): JSX.Element;
}
/**
 * @class InputPasswordRoot
 * @description
 * パスワード入力のルートコンポーネント。
 * 子コンポーネントのマーカーを検出し、パスワード入力 UI を構築する。
 *
 * 主な機能:
 * - パスワード表示/非表示トグル（visible / defaultVisible / onVisibleChange）
 * - 制御/非制御 両対応（value / defaultValue）
 * - variant (outline / filled / flushed)
 * - size (xs / sm / md / lg)
 * - Form 連携（oninput / onblur / name）
 * - StrengthMeter（パスワード強度表示）
 */
export declare class InputPasswordRoot implements m.Component<InputPasswordRootAttrs> {
    private internalValue;
    private internalVisible;
    private focused;
    oninit(vnode: m.Vnode<InputPasswordRootAttrs>): void;
    private isValueControlled;
    private isVisibleControlled;
    private resolveValue;
    private resolveVisible;
    private handleInput;
    private handleBlur;
    private toggleVisibility;
    onbeforeupdate(vnode: m.Vnode<InputPasswordRootAttrs>, old: m.VnodeDOM<InputPasswordRootAttrs>): void;
    private renderInput;
    private renderVisibilityTrigger;
    private renderStrengthMeter;
    view(vnode: m.Vnode<InputPasswordRootAttrs>): JSX.Element;
}
/**
 * InputPassword compound component のバンドル。
 *
 * @example
 * ```tsx
 * <InputPassword.Root>
 *   <InputPassword.Input placeholder="パスワード" />
 *   <InputPassword.VisibilityTrigger />
 * </InputPassword.Root>
 * ```
 */
export declare const InputPassword: {
    Root: typeof InputPasswordRoot;
    Input: typeof InputPasswordInputMarker;
    VisibilityTrigger: typeof InputPasswordVisibilityTriggerMarker;
    Label: typeof InputPasswordLabelMarker;
    StrengthMeter: typeof InputPasswordStrengthMeterMarker;
};
export {};
//# sourceMappingURL=InputPassword.d.ts.map