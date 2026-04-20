/** @jsx m */
import m from "mithril";
import "./TagsInputClassic.scss";
/**
 * TagsInputClassic コンポーネントの属性定義
 */
export type TagsInputClassicAttrs = {
    /** 現在のタグ配列（制御コンポーネント） */
    value?: string[];
    /** タグ配列が変更された時のコールバック */
    oninput?: (tags: string[]) => void;
    /** プレースホルダー */
    placeholder?: string;
    /** 無効化フラグ */
    disabled?: boolean;
    /** 追加の CSS クラス */
    class?: string;
    /** 入力欄に付与する CSS クラス */
    inputClass?: string;
    /** タグ要素に付与する CSS クラス */
    tagClass?: string;
    /** クリアボタンを表示するか */
    allowClear?: boolean;
    /** セパレータ文字（入力中に区切ってタグ化） */
    separators?: string[];
    /** 最大タグ数 */
    maxTags?: number;
    /** 重複タグを許可するか */
    allowDuplicates?: boolean;
    /** blur 時に入力値をタグ化するか */
    addOnBlur?: boolean;
    /** 大文字/小文字を区別するか（重複判定に使用） */
    caseSensitive?: boolean;
    /** タグ表示をカスタマイズ */
    tagRender?: (tag: string, index: number, remove: () => void) => m.Children;
    /** タグ追加時のコールバック */
    onTagAdd?: (tag: string) => void;
    /** タグ削除時のコールバック */
    onTagRemove?: (tag: string, index: number) => void;
    /** タグのバリデーション関数（false で追加を拒否） */
    validateTag?: (tag: string) => boolean;
};
/**
 * TagsInputClassic コンポーネント（レガシー）
 * - Enter / セパレータ入力でタグ化
 * - Backspace で最後のタグを削除
 * - クリックで入力欄にフォーカス
 */
export declare class TagsInputClassic implements m.Component<TagsInputClassicAttrs> {
    private inputValue;
    private inputRef?;
    private containerRef?;
    private focused;
    private getTags;
    private normalizeTag;
    private isDuplicate;
    private addTags;
    private removeTag;
    private splitBySeparators;
    private handleInput;
    private handleKeyDown;
    view(vnode: m.Vnode<TagsInputClassicAttrs>): JSX.Element;
}
export default TagsInputClassic;
//# sourceMappingURL=TagsInputClassic.d.ts.map