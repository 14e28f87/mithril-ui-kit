/** @jsx m */
import m from "mithril";
/**
 * Listbox バリアント
 */
export type ListboxVariant = "subtle" | "solid" | "plain";
/**
 * Listbox 選択モード
 */
export type ListboxSelectionMode = "single" | "multiple";
/**
 * Listbox 項目
 */
export interface ListboxItem {
    value: string;
    label: string;
    disabled?: boolean;
    group?: string;
}
export interface ListboxRootAttrs {
    /** バリアント */
    variant?: ListboxVariant;
    /** 項目リスト */
    items: ListboxItem[];
    /** 選択値 */
    value?: string | string[];
    /** 値変更コールバック */
    onValueChange?: (value: string | string[]) => void;
    /** 選択モード */
    selectionMode?: ListboxSelectionMode;
    /** 追加クラス */
    class?: string;
    [key: string]: any;
}
/**
 * Listbox Root コンポーネント — リスト形式の選択
 *
 * @example
 * ```tsx
 * const items = [
 *   { value: "apple", label: "りんご" },
 *   { value: "banana", label: "バナナ" },
 * ];
 * <Listbox.Root items={items} value={selected} onValueChange={v => selected = v} />
 * ```
 */
declare class ListboxRoot implements m.ClassComponent<ListboxRootAttrs> {
    view(vnode: m.Vnode<ListboxRootAttrs>): JSX.Element;
    private renderItem;
}
/**
 * Listbox コンポーネント名前空間
 */
export declare const Listbox: {
    readonly Root: typeof ListboxRoot;
};
export { ListboxRoot };
//# sourceMappingURL=Listbox.d.ts.map