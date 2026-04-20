/** @jsx m */
/**
 * @fileoverview
 * InputNumber — compound component 型の数値入力コンポーネント
 *
 * @example
 * ```tsx
 * <InputNumber.Root defaultValue={10} min={0} max={100}>
 *   <InputNumber.Control />
 *   <InputNumber.Input />
 * </InputNumber.Root>
 * ```
 *
 * @module InputNumber
 */
/** @jsx m */
import m from "mithril";
/** InputNumber のサイズ */
export type InputNumberSize = "xs" | "sm" | "md" | "lg";
/** InputNumber のバリエーション */
export type InputNumberVariant = "outline" | "filled" | "flushed";
/** 値変更イベントの詳細 */
export type InputNumberValueChangeDetails = {
    value: number | null;
    valueAsString: string;
};
/**
 * InputNumber.Root に渡せる属性
 */
export type InputNumberRootAttrs = {
    /** 最小値 */
    min?: number;
    /** 最大値 */
    max?: number;
    /** ステップ値（デフォルト: 1） */
    step?: number;
    /** 制御モード: 現在の値 */
    value?: number | null;
    /** 非制御モード: 初期値 */
    defaultValue?: number | null;
    /** 値変更コールバック */
    onValueChange?: (details: InputNumberValueChangeDetails) => void;
    /** Form 連携用の oninput（値を直接受け取る） */
    oninput?: (value: number | null) => void;
    /** Form 連携用の onblur */
    onblur?: () => void;
    /** 無効化 */
    disabled?: boolean;
    /** 読み取り専用 */
    readOnly?: boolean;
    /** フォーム用の name 属性 */
    name?: string;
    /** サイズ（デフォルト: "md"） */
    size?: InputNumberSize;
    /** バリエーション（デフォルト: "outline"） */
    variant?: InputNumberVariant;
    /** 小数点以下の桁数 */
    precision?: number;
    /** blur 時に min/max 範囲にクランプするか（デフォルト: true） */
    clampValueOnBlur?: boolean;
    /** マウスホイールで値を変更可能にするか */
    allowMouseWheel?: boolean;
    /** コンテナの幅 */
    width?: string;
    class?: string;
    style?: Record<string, string>;
};
/** InputNumber.Input に渡せる属性 */
export type InputNumberInputAttrs = {
    /** プレースホルダー */
    placeholder?: string;
    class?: string;
    style?: Record<string, string>;
};
/** InputNumber.Control に渡せる属性 */
export type InputNumberControlAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** InputNumber.IncrementTrigger に渡せる属性 */
export type InputNumberIncrementTriggerAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** InputNumber.DecrementTrigger に渡せる属性 */
export type InputNumberDecrementTriggerAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** InputNumber.Label に渡せる属性 */
export type InputNumberLabelAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** InputNumber.ValueText に渡せる属性 */
export type InputNumberValueTextAttrs = {
    class?: string;
    style?: Record<string, string>;
};
type InputNumberRole = "input" | "control" | "increment-trigger" | "decrement-trigger" | "label" | "value-text";
/** @class InputNumberInputMarker - InputNumber の入力フィールドマーカー */
export declare class InputNumberInputMarker implements m.Component<InputNumberInputAttrs> {
    static __inputNumberRole: InputNumberRole;
    view(vnode: m.Vnode<InputNumberInputAttrs>): JSX.Element;
}
/** @class InputNumberControlMarker - InputNumber のコントロール（増減ボタン）マーカー */
export declare class InputNumberControlMarker implements m.Component<InputNumberControlAttrs> {
    static __inputNumberRole: InputNumberRole;
    view(vnode: m.Vnode<InputNumberControlAttrs>): JSX.Element;
}
/** @class InputNumberIncrementTriggerMarker - 増加ボタンマーカー */
export declare class InputNumberIncrementTriggerMarker implements m.Component<InputNumberIncrementTriggerAttrs> {
    static __inputNumberRole: InputNumberRole;
    view(vnode: m.Vnode<InputNumberIncrementTriggerAttrs>): JSX.Element;
}
/** @class InputNumberDecrementTriggerMarker - 減少ボタンマーカー */
export declare class InputNumberDecrementTriggerMarker implements m.Component<InputNumberDecrementTriggerAttrs> {
    static __inputNumberRole: InputNumberRole;
    view(vnode: m.Vnode<InputNumberDecrementTriggerAttrs>): JSX.Element;
}
/** @class InputNumberLabelMarker - ラベルマーカー */
export declare class InputNumberLabelMarker implements m.Component<InputNumberLabelAttrs> {
    static __inputNumberRole: InputNumberRole;
    view(vnode: m.Vnode<InputNumberLabelAttrs>): JSX.Element;
}
/** @class InputNumberValueTextMarker - 値テキスト表示マーカー */
export declare class InputNumberValueTextMarker implements m.Component<InputNumberValueTextAttrs> {
    static __inputNumberRole: InputNumberRole;
    view(vnode: m.Vnode<InputNumberValueTextAttrs>): JSX.Element;
}
/**
 * @class InputNumberRoot
 * @description
 * 数値入力のルートコンポーネント。
 * 子コンポーネントのマーカーを検出し、完全な数値入力 UI を構築する。
 *
 * 主な機能:
 * - min / max / step によるバリデーション
 * - precision で小数桁数を制御
 * - clampValueOnBlur で blur 時にクランプ
 * - allowMouseWheel でマウスホイール操作
 * - variant (outline / filled / flushed)
 * - size (xs / sm / md / lg)
 * - 制御/非制御両対応
 * - Form 連携（oninput / onblur / name）
 */
export declare class InputNumberRoot implements m.Component<InputNumberRootAttrs> {
    private internalValue;
    private textValue;
    private focused;
    oninit(vnode: m.Vnode<InputNumberRootAttrs>): void;
    private isControlled;
    private resolveValue;
    private setValue;
    private increment;
    private decrement;
    private canIncrement;
    private canDecrement;
    private handleInputChange;
    private handleBlur;
    private handleKeyDown;
    private handleWheel;
    onbeforeupdate(vnode: m.Vnode<InputNumberRootAttrs>, old: m.VnodeDOM<InputNumberRootAttrs>): void;
    private renderInput;
    private renderIncrementButton;
    private renderDecrementButton;
    view(vnode: m.Vnode<InputNumberRootAttrs>): JSX.Element;
}
/**
 * InputNumber compound component のバンドル。
 *
 * @example
 * ```tsx
 * <InputNumber.Root defaultValue={10} min={0} max={100}>
 *   <InputNumber.Control />
 *   <InputNumber.Input />
 * </InputNumber.Root>
 * ```
 */
export declare const InputNumber: {
    readonly Root: typeof InputNumberRoot;
    readonly Input: typeof InputNumberInputMarker;
    readonly Control: typeof InputNumberControlMarker;
    readonly IncrementTrigger: typeof InputNumberIncrementTriggerMarker;
    readonly DecrementTrigger: typeof InputNumberDecrementTriggerMarker;
    readonly Label: typeof InputNumberLabelMarker;
    readonly ValueText: typeof InputNumberValueTextMarker;
};
export {};
//# sourceMappingURL=InputNumber.d.ts.map