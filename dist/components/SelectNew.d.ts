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
export type SelectNewVariant = "outline" | "subtle" | "ghost";
/** Select サイズ */
export type SelectNewSize = "xs" | "sm" | "md" | "lg";
/** 値変更イベント詳細 */
export interface SelectNewValueChangeDetails {
    value: string[];
    items: SelectItem[];
}
/** 開閉変更イベント詳細 */
export interface SelectNewOpenChangeDetails {
    open: boolean;
}
/** Select.Root の属性 */
export interface SelectNewRootAttrs {
    /** 項目リスト */
    items: SelectItem[];
    /** 選択値（単一選択: string[], 複数選択: string[]） */
    value?: string[];
    /** デフォルト値 */
    defaultValue?: string[];
    /** 値変更コールバック */
    onValueChange?: (details: SelectNewValueChangeDetails) => void;
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
    variant?: SelectNewVariant;
    /** サイズ */
    size?: SelectNewSize;
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
    onOpenChange?: (details: SelectNewOpenChangeDetails) => void;
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
export interface SelectNewItemAttrs {
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
/**
 * Select Root コンポーネント — Chakra UI 風 compound component 型セレクト
 *
 * @example
 * ```tsx
 * const items = [
 *   { value: "react", label: "React" },
 *   { value: "vue", label: "Vue" },
 *   { value: "angular", label: "Angular" },
 * ];
 * <Select.Root items={items} value={["react"]} onValueChange={(d) => console.log(d.value)}>
 *   <Select.Label>フレームワーク</Select.Label>
 *   <Select.Control>
 *     <Select.Trigger>
 *       <Select.ValueText placeholder="選択してください" />
 *     </Select.Trigger>
 *     <Select.IndicatorGroup>
 *       <Select.ClearTrigger />
 *       <Select.Indicator />
 *     </Select.IndicatorGroup>
 *   </Select.Control>
 *   <Select.Positioner>
 *     <Select.Content>
 *       {items.map(item => <Select.Item key={item.value} item={item.value}>{item.label}</Select.Item>)}
 *     </Select.Content>
 *   </Select.Positioner>
 * </Select.Root>
 * ```
 */
declare class SelectNewRoot implements m.ClassComponent<SelectNewRootAttrs> {
    private internalOpen;
    private internalValue;
    private highlightIndex;
    private containerEl?;
    private handleDocClick;
    constructor();
    oninit(vnode: m.Vnode<SelectNewRootAttrs>): void;
    onbeforeupdate(vnode: m.Vnode<SelectNewRootAttrs>, old: m.VnodeDOM<SelectNewRootAttrs>): void;
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
    view(vnode: m.Vnode<SelectNewRootAttrs>): JSX.Element;
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
/**
 * Select compound component 名前空間
 *
 * Chakra UI 風のコンポジション API で利用する:
 * - `Select.Root` — ルートコンテナ
 * - `Select.HiddenSelect` — ネイティブ hidden select（フォーム送信用）
 * - `Select.Label` — ラベル
 * - `Select.Control` — コントロール（Trigger + IndicatorGroup のラッパ）
 * - `Select.Trigger` — 開閉トリガー
 * - `Select.ValueText` — 選択値テキスト
 * - `Select.IndicatorGroup` — インジケータグループ
 * - `Select.Indicator` — 開閉インジケータ矢印
 * - `Select.ClearTrigger` — クリアボタン
 * - `Select.Positioner` — ドロップダウン配置
 * - `Select.Content` — ドロップダウンコンテンツ
 * - `Select.Item` — 個別選択肢
 * - `Select.ItemGroup` — 選択肢グループ
 * - `Select.ItemGroupLabel` — グループラベル
 */
export declare const SelectNew: {
    readonly Root: typeof SelectNewRoot;
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
export { SelectNewRoot };
//# sourceMappingURL=SelectNew.d.ts.map