/** @jsx m */
import m from "mithril";
/** Radio のバリアント（Checkbox と統一） */
export type RadioVariant = "solid" | "outline" | "subtle";
/** Radio のサイズ（Checkbox と統一） */
export type RadioSize = "xs" | "sm" | "md" | "lg";
/** 値変更時の詳細 */
export type RadioValueChangeDetails = {
    value: string;
};
/**
 * Radio.Root に渡せる属性
 */
export interface RadioRootAttrs {
    /** バリアント（デフォルト: "outline"） */
    variant?: RadioVariant;
    /** サイズ（デフォルト: "md"） */
    size?: RadioSize;
    /** カラー（CSS変数 --radio-color で反映） */
    colorPalette?: string;
    /** 選択中の値（制御モード） */
    value?: string;
    /** 初期値（非制御モード） */
    defaultValue?: string;
    /** 値変更時のコールバック */
    onValueChange?: (detail: RadioValueChangeDetails) => void;
    /** フォーム送信用のグループ名 */
    name?: string;
    /** 無効状態 */
    disabled?: boolean;
    /** 読み取り専用 */
    readOnly?: boolean;
    /** 向き（デフォルト: "vertical"） */
    orientation?: "horizontal" | "vertical";
    /** 追加クラス */
    class?: string;
    /** スタイル */
    style?: Record<string, string>;
}
/**
 * Radio.Item に渡せる属性
 */
export interface RadioItemAttrs {
    /** 値 */
    value: string;
    /** 無効状態 */
    disabled?: boolean;
    /** バリデーションエラー */
    invalid?: boolean;
    /** 追加クラス */
    class?: string;
    /** スタイル */
    style?: Record<string, string>;
}
/**
 * @class RadioRoot
 * @description
 * Chakra UI 風ラジオグループコンポーネント。
 * Checkbox / Switch と統一された複合コンポーネントパターン。
 *
 * インジケーターは丸型で、variant は Checkbox と同様に
 * インジケーターのスタイルに反映される。
 *
 * @example
 * <Radio.Root value={val} onValueChange={(d) => val = d.value}>
 *   <Radio.Item value="a">
 *     <Radio.ItemIndicator />
 *     <Radio.ItemText>オプション A</Radio.ItemText>
 *     <Radio.ItemHiddenInput />
 *   </Radio.Item>
 * </Radio.Root>
 */
declare class RadioRoot implements m.ClassComponent<RadioRootAttrs> {
    private internalValue;
    private groupName;
    oninit(vnode: m.Vnode<RadioRootAttrs>): void;
    view(vnode: m.Vnode<RadioRootAttrs>): JSX.Element;
    private isControlled;
    private processChildren;
}
/**
 * @class RadioItem
 * @description
 * ラジオグループの個別アイテム。
 * Checkbox.Root の `<label>` と同じ構造で、variant/size クラスを持つ。
 */
declare class RadioItem implements m.ClassComponent<RadioItemAttrs & {
    _ctx?: any;
}> {
    view(vnode: m.Vnode<RadioItemAttrs & {
        _ctx?: any;
    }>): JSX.Element;
    private processChildren;
}
/**
 * @class RadioItemIndicator
 * @description
 * ラジオボタンのインジケーター（丸い選択マーク）。
 * Checkbox.Control + Checkbox.Indicator に相当。
 * data-state で "checked" / "unchecked" を切り替え。
 */
declare class RadioItemIndicator implements m.ClassComponent<{
    _ctx?: any;
    class?: string;
    style?: Record<string, string>;
}> {
    view(vnode: m.Vnode<{
        _ctx?: any;
        class?: string;
        style?: Record<string, string>;
    }>): JSX.Element;
}
/**
 * @class RadioItemText
 * @description ラジオボタンのテキストラベル
 */
declare class RadioItemText implements m.ClassComponent<{
    _ctx?: any;
    class?: string;
    style?: Record<string, string>;
}> {
    view(vnode: m.Vnode<{
        _ctx?: any;
        class?: string;
        style?: Record<string, string>;
    }>): JSX.Element;
}
/**
 * @class RadioItemHiddenInput
 * @description hidden input（フォーム送信用・アクセシビリティ）
 */
declare class RadioItemHiddenInput implements m.ClassComponent<{
    _ctx?: any;
}> {
    view(vnode: m.Vnode<{
        _ctx?: any;
    }>): JSX.Element;
}
/**
 * Radio 複合コンポーネント namespace
 */
declare const Radio: {
    Root: typeof RadioRoot;
    Item: typeof RadioItem;
    ItemIndicator: typeof RadioItemIndicator;
    ItemText: typeof RadioItemText;
    ItemHiddenInput: typeof RadioItemHiddenInput;
};
export { Radio, RadioRoot, RadioItem, RadioItemIndicator, RadioItemText, RadioItemHiddenInput };
//# sourceMappingURL=Radio.d.ts.map