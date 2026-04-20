/** @jsx m */
import m from "mithril";
/** Menu のサイズ */
export type DropdownSize = "sm" | "md" | "lg";
/** Menu 開閉イベント詳細 */
export type DropdownOpenChangeDetails = {
    open: boolean;
};
/** Menu アイテム選択イベント詳細 */
export type DropdownSelectDetails = {
    value: string;
};
/**
 * DropdownRoot の属性定義
 */
export type DropdownRootAttrs = {
    /** 制御開閉 */
    open?: boolean;
    /** デフォルト開閉 */
    defaultOpen?: boolean;
    /** 開閉コールバック */
    onOpenChange?: (details: DropdownOpenChangeDetails) => void;
    /** 選択コールバック */
    onSelect?: (details: DropdownSelectDetails) => void;
    /** サイズ */
    size?: DropdownSize;
    /** 配置 (start | end | right) */
    positioning?: "start" | "end" | "right";
    /** class */
    class?: string;
    /** style */
    style?: Record<string, string>;
};
export type DropdownTriggerAttrs = {
    class?: string;
    style?: Record<string, string>;
};
export type DropdownPositionerAttrs = {
    class?: string;
};
export type DropdownContentAttrs = {
    class?: string;
};
export type DropdownArrowAttrs = {
    class?: string;
};
export type DropdownContextTriggerAttrs = {
    class?: string;
    style?: Record<string, string>;
};
export type DropdownItemAttrs = {
    value?: string;
    disabled?: boolean;
    destructive?: boolean;
    closeOnSelect?: boolean;
    class?: string;
};
export type DropdownItemGroupAttrs = {
    label?: string;
    class?: string;
};
export type DropdownSeparatorAttrs = {
    class?: string;
};
export type DropdownCheckboxItemAttrs = {
    value: string;
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    disabled?: boolean;
    class?: string;
};
export type DropdownRadioItemGroupAttrs = {
    value?: string;
    onValueChange?: (value: string) => void;
    class?: string;
};
export type DropdownRadioItemAttrs = {
    value: string;
    disabled?: boolean;
    class?: string;
};
type MnRole = "trigger" | "positioner" | "content" | "arrow" | "item" | "itemGroup" | "separator" | "checkboxItem" | "radioItemGroup" | "radioItem" | "contextTrigger";
declare class MnTriggerMarker implements m.Component<DropdownTriggerAttrs> {
    static __mnRole: MnRole;
    view(vnode: m.Vnode<DropdownTriggerAttrs>): JSX.Element;
}
declare class MnPositionerMarker implements m.Component<DropdownPositionerAttrs> {
    static __mnRole: MnRole;
    view(vnode: m.Vnode<DropdownPositionerAttrs>): JSX.Element;
}
declare class MnContentMarker implements m.Component<DropdownContentAttrs> {
    static __mnRole: MnRole;
    view(vnode: m.Vnode<DropdownContentAttrs>): JSX.Element;
}
declare class MnArrowMarker implements m.Component<DropdownArrowAttrs> {
    static __mnRole: MnRole;
    view(): JSX.Element;
}
declare class MnItemMarker implements m.Component<DropdownItemAttrs> {
    static __mnRole: MnRole;
    view(vnode: m.Vnode<DropdownItemAttrs>): JSX.Element;
}
declare class MnItemGroupMarker implements m.Component<DropdownItemGroupAttrs> {
    static __mnRole: MnRole;
    view(vnode: m.Vnode<DropdownItemGroupAttrs>): JSX.Element;
}
declare class MnSeparatorMarker implements m.Component<DropdownSeparatorAttrs> {
    static __mnRole: MnRole;
    view(): JSX.Element;
}
declare class MnCheckboxItemMarker implements m.Component<DropdownCheckboxItemAttrs> {
    static __mnRole: MnRole;
    view(vnode: m.Vnode<DropdownCheckboxItemAttrs>): JSX.Element;
}
declare class MnRadioItemGroupMarker implements m.Component<DropdownRadioItemGroupAttrs> {
    static __mnRole: MnRole;
    view(vnode: m.Vnode<DropdownRadioItemGroupAttrs>): JSX.Element;
}
declare class MnRadioItemMarker implements m.Component<DropdownRadioItemAttrs> {
    static __mnRole: MnRole;
    view(vnode: m.Vnode<DropdownRadioItemAttrs>): JSX.Element;
}
declare class MnContextTriggerMarker implements m.Component<DropdownContextTriggerAttrs> {
    static __mnRole: MnRole;
    view(vnode: m.Vnode<DropdownContextTriggerAttrs>): JSX.Element;
}
/**
 * DropdownRoot — Chakra UI 風 Menu のルートコンポーネント。
 *
 * 責務:
 * 1. 開閉状態管理
 * 2. アイテム選択のコールバック
 * 3. 子マーカーの再帰的描画
 */
export declare class DropdownRoot implements m.Component<DropdownRootAttrs> {
    private isOpen;
    private rootEl;
    /** RadioItemGroup 内の現在値マップ (一時管理) */
    private radioValues;
    /** コンテキストメニュー用カーソル座標 */
    private contextX;
    private contextY;
    /** コンテキストメニューモード（右クリックで開いた） */
    private isContextMenu;
    oninit(vnode: m.Vnode<DropdownRootAttrs>): void;
    onbeforeupdate(vnode: m.Vnode<DropdownRootAttrs>, old: m.VnodeDOM<DropdownRootAttrs>): void;
    oncreate(vnode: m.VnodeDOM<DropdownRootAttrs>): void;
    onremove(): void;
    private handleOutsideClick;
    private setOpen;
    private toggleOpen;
    private selectItem;
    private renderChildren;
    private renderChild;
    /** RadioItemGroup 内の RadioItem を描画 */
    private renderRadioItems;
    view(vnode: m.Vnode<DropdownRootAttrs>): JSX.Element;
}
/**
 * Menu — Chakra UI 風の compound component Menu。
 *
 * @example
 * ```tsx
 * <Menu.Root onSelect={(d) => console.log(d.value)}>
 *   <Menu.Trigger>Actions ▾</Menu.Trigger>
 *   <Menu.Positioner>
 *     <Menu.Content>
 *       <Menu.Item value="edit">Edit</Menu.Item>
 *       <Menu.Item value="delete" destructive>Delete</Menu.Item>
 *     </Menu.Content>
 *   </Menu.Positioner>
 * </Menu.Root>
 * ```
 */
export declare const Dropdown: {
    Root: typeof DropdownRoot;
    Trigger: typeof MnTriggerMarker;
    Positioner: typeof MnPositionerMarker;
    Content: typeof MnContentMarker;
    Arrow: typeof MnArrowMarker;
    Item: typeof MnItemMarker;
    ItemGroup: typeof MnItemGroupMarker;
    Separator: typeof MnSeparatorMarker;
    CheckboxItem: typeof MnCheckboxItemMarker;
    RadioItemGroup: typeof MnRadioItemGroupMarker;
    RadioItem: typeof MnRadioItemMarker;
    ContextTrigger: typeof MnContextTriggerMarker;
};
export {};
//# sourceMappingURL=Dropdown.d.ts.map