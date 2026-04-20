/** @jsx m */
import m from "mithril";
/**
 * セレクトで表示する個々のオプションを表す型
 * - `label`: 表示用の内容（テキストや Mithril の子要素）
 * - `value`: 内部で扱う値
 * - `disabled`: 選択不可にするか
 * - `title`: ツールチップ等に使える文字列
 */
export type SelectOption = {
    label: m.Children;
    value: any;
    disabled?: boolean;
    title?: string;
    [key: string]: any;
};
/**
 * `Select` コンポーネントの属性
 */
export type SelectAttrs = {
    /** 単一選択では value、複数選択では配列 */
    value?: any | any[];
    /** 選択変更時や配列変更時に呼ばれるコールバック */
    oninput?: (v: any | any[] | Event) => void;
    options?: SelectOption[];
    multiple?: boolean;
    placeholder?: string;
    disabled?: boolean;
    showSearch?: boolean;
    allowClear?: boolean;
    class?: string;
    style?: Record<string, string>;
    dropdownStyle?: Record<string, string>;
    dropdownClass?: string;
    /** フィルタ関数（同期または Promise を返す非同期） */
    filter?: ((input: string, option: SelectOption) => boolean | Promise<boolean>) | null;
    /** 外部から開閉を制御する場合に使用 */
    open?: boolean;
    onDropdownVisibleChange?: (open: boolean) => void;
    renderOption?: (opt: SelectOption) => m.Children;
    maxVisibleOptions?: number;
};
/** `Option` コンポーネントに渡す属性 */
export type OptionAttrs = {
    value: any;
    label?: m.Children;
    disabled?: boolean;
    title?: string;
    class?: string;
};
/** `OptGroup` コンポーネントに渡す属性 */
export type OptGroupAttrs = {
    label: m.Children;
    children?: m.Children;
    class?: string;
};
export declare class SelectClassic implements m.Component<SelectAttrs> {
    /** ドロップダウンが開いているか */
    private isOpen;
    /** 検索入力のテキスト */
    private searchText;
    /** 現在フォーカスされているオプションの index */
    private focusedIndex;
    /** フィルタ処理後に表示するオプション */
    private filteredOptions;
    /** コンポーネントのルート要素 */
    private container?;
    /** ドロップダウン要素 */
    private dropdownRef?;
    /** view に渡された直近の vnode を保持（イベントハンドラから参照するため） */
    private lastVnode?;
    /** ドキュメントクリックを処理するハンドラ（外部クリックでドロップダウンを閉じる） */
    private handleDocumentClick;
    private debouncedRedraw;
    constructor();
    private collectOptions;
    private filterOptions;
    /**
     * ドロップダウンを開く
     * @param vnode vnode
     */
    private open;
    private close;
    private isEqual;
    private isSelected;
    private selectValue;
    private clearSelection;
    private onKeyDown;
    /**
     * コンポーネントの描画
     * - vnode を this.lastVnode に保持して、ドキュメントクリックハンドラから参照できるようにする
     */
    view(vnode: m.Vnode<SelectAttrs>): JSX.Element;
}
/**
 * 単一のオプションを静的に定義するためのダミーコンポーネント
 * 実体は `Select` が子要素として解釈して利用するため、レンダリングは行わない
 */
export declare class OptionClassic implements m.Component<OptionAttrs> {
    view(_vnode: m.Vnode<OptionAttrs>): JSX.Element;
}
/**
 * オプションのグループを定義するためのダミーコンポーネント
 * `Select` が子要素として解釈してグルーピングを行う
 */
export declare class OptGroupClassic implements m.Component<OptGroupAttrs> {
    view(_vnode: m.Vnode<OptGroupAttrs>): JSX.Element;
}
//# sourceMappingURL=SelectClassic.d.ts.map