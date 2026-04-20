/** @jsx m */
import m from "mithril";
/**
 * RadioCard バリアント
 */
export type RadioCardVariant = "surface" | "subtle" | "outline" | "solid";
/**
 * RadioCard サイズ
 */
export type RadioCardSize = "sm" | "md" | "lg";
type RadioCardRole = "label" | "item" | "itemHiddenInput" | "itemControl" | "itemContent" | "itemText" | "itemDescription" | "itemIndicator" | "itemAddon";
export interface RadioCardRootAttrs {
    /** バリアント */
    variant?: RadioCardVariant;
    /** サイズ */
    size?: RadioCardSize;
    /** 選択値 */
    value?: string;
    /** 値変更コールバック */
    onValueChange?: (value: string) => void;
    /** ラジオ名 (name属性) */
    name?: string;
    /** 方向 */
    orientation?: "horizontal" | "vertical";
    /** 追加クラス */
    class?: string;
    [key: string]: any;
}
export interface RadioCardItemAttrs {
    /** この項目の値 */
    value: string;
    /** 無効状態 */
    disabled?: boolean;
    /** 追加クラス */
    class?: string;
    [key: string]: any;
}
declare class RCLabelMarker {
    static __rcRole: RadioCardRole;
    view(): null;
}
declare class RCItemMarker {
    static __rcRole: RadioCardRole;
    view(): null;
}
declare class RCItemHiddenInputMarker {
    static __rcRole: RadioCardRole;
    view(): null;
}
declare class RCItemControlMarker {
    static __rcRole: RadioCardRole;
    view(): null;
}
declare class RCItemContentMarker {
    static __rcRole: RadioCardRole;
    view(): null;
}
declare class RCItemTextMarker {
    static __rcRole: RadioCardRole;
    view(): null;
}
declare class RCItemDescriptionMarker {
    static __rcRole: RadioCardRole;
    view(): null;
}
declare class RCItemIndicatorMarker {
    static __rcRole: RadioCardRole;
    view(): null;
}
declare class RCItemAddonMarker {
    static __rcRole: RadioCardRole;
    view(): null;
}
/**
 * RadioCard Root コンポーネント — カード形式のラジオ選択
 *
 * @example
 * ```tsx
 * <RadioCard.Root value={selected} onValueChange={v => selected = v}>
 *   <RadioCard.Item value="a">
 *     <RadioCard.ItemControl>
 *       <RadioCard.ItemText>オプションA</RadioCard.ItemText>
 *       <RadioCard.ItemDescription>説明A</RadioCard.ItemDescription>
 *     </RadioCard.ItemControl>
 *     <RadioCard.ItemIndicator />
 *   </RadioCard.Item>
 * </RadioCard.Root>
 * ```
 */
declare class RadioCardRoot implements m.ClassComponent<RadioCardRootAttrs> {
    view(vnode: m.Vnode<RadioCardRootAttrs>): JSX.Element;
    private renderItems;
    private renderItemContent;
}
/**
 * RadioCard コンポーネント名前空間
 */
export declare const RadioCard: {
    readonly Root: typeof RadioCardRoot;
    readonly Label: typeof RCLabelMarker;
    readonly Item: typeof RCItemMarker;
    readonly ItemHiddenInput: typeof RCItemHiddenInputMarker;
    readonly ItemControl: typeof RCItemControlMarker;
    readonly ItemContent: typeof RCItemContentMarker;
    readonly ItemText: typeof RCItemTextMarker;
    readonly ItemDescription: typeof RCItemDescriptionMarker;
    readonly ItemIndicator: typeof RCItemIndicatorMarker;
    readonly ItemAddon: typeof RCItemAddonMarker;
};
export { RadioCardRoot };
//# sourceMappingURL=RadioCard.d.ts.map