/** @jsx m */
import m from "mithril";
/**
 * Select アイテム
 */
export interface SelectItem {
    /** 値（一意識別子） */
    value: string;
    /** 表示ラベル */
    label: string;
    /** 無効状態 */
    disabled?: boolean;
    /** 説明文 */
    description?: string;
    /** グループ名 */
    group?: string;
}
/** Select バリアント */
export type SelectVariant = "outline" | "subtle" | "ghost";
/** Select サイズ */
export type SelectSize = "xs" | "sm" | "md" | "lg";
/** 値変更イベント詳細 */
export interface SelectValueChangeDetails {
    value: string[];
    items: SelectItem[];
}
/** 開閉変更イベント詳細 */
export interface SelectOpenChangeDetails {
    open: boolean;
}
/** Select.Root の属性 */
export interface SelectRootAttrs {
    /** 項目リスト */
    items: SelectItem[];
    /** 選択値（単一選択: string[], 複数選択: string[]） */
    value?: string[];
    /** デフォルト値 */
    defaultValue?: string[];
    /** 値変更コールバック */
    onValueChange?: (details: SelectValueChangeDetails) => void;
    /** 複数選択 */
    multiple?: boolean;
    /** 無効状態 */
    disabled?: boolean;
    /** 読み取り専用 */
    readOnly?: boolean;
    /** 必須 */
    required?: boolean;
    /** 不正状態 */
    invalid?: boolean;
    /** バリアント */
    variant?: SelectVariant;
    /** サイズ */
    size?: SelectSize;
    /** プレースホルダ */
    placeholder?: string;
    /** アイテム選択後に閉じるか（単一選択のデフォルト: true） */
    closeOnSelect?: boolean;
    /** 選択解除を許可するか（単一選択で再クリックで解除） */
    deselectable?: boolean;
    /** キーボードナビゲーションをループするか */
    loopFocus?: boolean;
    /** 開閉の制御 */
    open?: boolean;
    /** 開閉変更コールバック */
    onOpenChange?: (details: SelectOpenChangeDetails) => void;
    /** name 属性（hidden select 用） */
    name?: string;
    /** 追加クラス */
    class?: string;
    /** ドロップダウンの配置 */
    positioning?: "bottom" | "top";
    [key: string]: any;
}
type SelectRole = "hidden-select" | "label" | "control" | "trigger" | "value-text" | "indicator-group" | "indicator" | "clear-trigger" | "positioner" | "content" | "item" | "item-group" | "item-group-label";
declare class HiddenSelectMarker {
    static __selRole: SelectRole;
    view(): null;
}
declare class LabelMarker {
    static __selRole: SelectRole;
    view(): null;
}
declare class ControlMarker {
    static __selRole: SelectRole;
    view(): null;
}
declare class TriggerMarker {
    static __selRole: SelectRole;
    view(): null;
}
declare class ValueTextMarker {
    static __selRole: SelectRole;
    view(): null;
}
declare class IndicatorGroupMarker {
    static __selRole: SelectRole;
    view(): null;
}
declare class IndicatorMarker {
    static __selRole: SelectRole;
    view(): null;
}
declare class ClearTriggerMarker {
    static __selRole: SelectRole;
    view(): null;
}
declare class PositionerMarker {
    static __selRole: SelectRole;
    view(): null;
}
declare class ContentMarker {
    static __selRole: SelectRole;
    view(): null;
}
/** Select.Item の属性 */
export interface SelectItemAttrs {
    /** 項目の値 */
    item: string;
    /** 無効状態 */
    disabled?: boolean;
    /** 追加クラス */
    class?: string;
    [key: string]: any;
}
declare class ItemMarker {
    static __selRole: SelectRole;
    view(): null;
}
declare class ItemGroupMarker {
    static __selRole: SelectRole;
    view(): null;
}
declare class ItemGroupLabelMarker {
    static __selRole: SelectRole;
    view(): null;
}
declare class SelectRoot implements m.ClassComponent<SelectRootAttrs> {
    private internalOpen;
    private internalValue;
    private highlightIndex;
    private containerEl?;
    private handleDocClick;
    constructor();
    oninit(vnode: m.Vnode<SelectRootAttrs>): void;
    onbeforeupdate(vnode: m.Vnode<SelectRootAttrs>, old: m.VnodeDOM<SelectRootAttrs>): void;
    private get isControlled();
    private getOpen;
    private setOpen;
    private toggle;
    private selectItem;
    private clearAll;
    private removeTag;
    private onKeyDown;
    private skipDisabled;
    private getVisibleItems;
    view(vnode: m.Vnode<SelectRootAttrs>): JSX.Element;
    private renderChildren;
    private renderHiddenSelect;
    private renderLabel;
    private renderControl;
    private renderControlChildren;
    private renderTrigger;
    private renderTriggerChildren;
    private renderValueText;
    private renderIndicatorGroup;
    private renderIndicatorGroupInline;
    private renderIndicatorGroupChildren;
    private renderIndicator;
    private renderClearTrigger;
    private renderPositioner;
    private renderPositionerChildren;
    private renderContent;
    private renderContentChildren;
    private renderItem;
    private renderItemGroup;
    private renderItemGroupChildren;
}
export declare const Select: {
    readonly Root: typeof SelectRoot;
    readonly HiddenSelect: typeof HiddenSelectMarker;
    readonly Label: typeof LabelMarker;
    readonly Control: typeof ControlMarker;
    readonly Trigger: typeof TriggerMarker;
    readonly ValueText: typeof ValueTextMarker;
    readonly IndicatorGroup: typeof IndicatorGroupMarker;
    readonly Indicator: typeof IndicatorMarker;
    readonly ClearTrigger: typeof ClearTriggerMarker;
    readonly Positioner: typeof PositionerMarker;
    readonly Content: typeof ContentMarker;
    readonly Item: typeof ItemMarker;
    readonly ItemGroup: typeof ItemGroupMarker;
    readonly ItemGroupLabel: typeof ItemGroupLabelMarker;
};
export { SelectRoot };
//# sourceMappingURL=Select.d.ts.map