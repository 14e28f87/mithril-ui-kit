/** @jsx m */
import m from "mithril";
/**
 * Combobox バリアント
 */
export type ComboboxVariant = "outline" | "subtle" | "flushed";
/**
 * Combobox サイズ
 */
export type ComboboxSize = "xs" | "sm" | "md" | "lg";
/**
 * Combobox 項目
 */
export interface ComboboxItem {
    value: string;
    label: string;
    disabled?: boolean;
    group?: string;
}
export interface ComboboxRootAttrs {
    /** バリアント */
    variant?: ComboboxVariant;
    /** サイズ */
    size?: ComboboxSize;
    /** 項目リスト */
    items: ComboboxItem[];
    /** 選択値（単一） */
    value?: string | string[];
    /** 値変更コールバック */
    onValueChange?: (value: string | string[]) => void;
    /** 複数選択 */
    multiple?: boolean;
    /** クリック時に開く */
    openOnClick?: boolean;
    /** プレースホルダー */
    placeholder?: string;
    /** 無効状態 */
    disabled?: boolean;
    /** 追加クラス */
    class?: string;
    [key: string]: any;
}
/**
 * Combobox Root コンポーネント — 検索可能なセレクトボックス
 *
 * @example
 * ```tsx
 * const items = [
 *   { value: "react", label: "React" },
 *   { value: "vue", label: "Vue" },
 *   { value: "mithril", label: "Mithril" },
 * ];
 * <Combobox.Root items={items} value={selected} onValueChange={v => selected = v} />
 * ```
 */
declare class ComboboxRoot implements m.ClassComponent<ComboboxRootAttrs> {
    private isOpen;
    private query;
    private highlightIndex;
    private inputEl;
    private containerEl;
    onremove(): void;
    private handleOutsideClick;
    view(vnode: m.Vnode<ComboboxRootAttrs>): JSX.Element;
    private handleKeydown;
}
/**
 * Combobox コンポーネント名前空間
 */
export declare const Combobox: {
    readonly Root: typeof ComboboxRoot;
};
export { ComboboxRoot };
//# sourceMappingURL=Combobox.d.ts.map