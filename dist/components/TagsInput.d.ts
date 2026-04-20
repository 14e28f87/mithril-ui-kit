/** @jsx m */
/**
 * @fileoverview
 * TagsInput — Chakra UI Tags Input 風の compound component
 *
 * タグの追加・削除・編集・バリデーションをサポートする複合コンポーネント。
 *
 * @example
 * ```tsx
 * <TagsInput.Root defaultValue={["React", "Mithril"]} max={5}>
 *   <TagsInput.Label>タグ</TagsInput.Label>
 *   <TagsInput.Control>
 *     {tags.map((tag, i) => (
 *       <TagsInput.Item key={tag} index={i} value={tag}>
 *         <TagsInput.ItemPreview>
 *           <TagsInput.ItemText />
 *           <TagsInput.ItemDeleteTrigger />
 *         </TagsInput.ItemPreview>
 *         <TagsInput.ItemInput />
 *       </TagsInput.Item>
 *     ))}
 *     <TagsInput.Input placeholder="タグを追加" />
 *   </TagsInput.Control>
 * </TagsInput.Root>
 * ```
 *
 * @module TagsInput
 */
/** @jsx m */
import m from "mithril";
/** タグ入力のサイズ */
export type TagsInputSize = "sm" | "md" | "lg";
/** タグ入力のバリアント */
export type TagsInputVariant = "outline" | "subtle";
/** 値変更イベントの詳細 */
export type TagsInputValueChangeDetails = {
    value: string[];
};
/** 入力値変更イベントの詳細 */
export type TagsInputInputValueChangeDetails = {
    inputValue: string;
};
/** ハイライト変更イベントの詳細 */
export type TagsInputHighlightChangeDetails = {
    highlightedValue: string | null;
};
/**
 * TagsInput.Root に渡せる属性
 */
export type TagsInputRootAttrs = {
    /** 制御モード: 現在のタグ値 */
    value?: string[];
    /** 非制御モード: 初期タグ値 */
    defaultValue?: string[];
    /** タグ値変更コールバック */
    onValueChange?: (details: TagsInputValueChangeDetails) => void;
    /** 入力値変更コールバック */
    onInputValueChange?: (details: TagsInputInputValueChangeDetails) => void;
    /** 最大タグ数（デフォルト: Infinity） */
    max?: number;
    /** 無効化 */
    disabled?: boolean;
    /** 読み取り専用 */
    readOnly?: boolean;
    /** 無効状態（バリデーションエラー） */
    invalid?: boolean;
    /** タグ追加のバリデーション関数 */
    validate?: (details: {
        value: string;
        inputValue: string;
    }) => boolean;
    /** 区切り文字（デフォルト: ","） */
    delimiter?: string | RegExp;
    /** ペースト時にタグを追加するか（デフォルト: false） */
    addOnPaste?: boolean;
    /** blur 時の動作 */
    blurBehavior?: "clear" | "add";
    /** タグの編集を許可するか（デフォルト: false） */
    editable?: boolean;
    /** サイズ（デフォルト: "md"） */
    size?: TagsInputSize;
    /** バリアント（デフォルト: "outline"） */
    variant?: TagsInputVariant;
    /** name 属性（フォーム送信用） */
    name?: string;
    class?: string;
    style?: Record<string, string>;
};
/** TagsInput.Label に渡せる属性 */
export type TagsInputLabelAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** TagsInput.Control に渡せる属性 */
export type TagsInputControlAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** TagsInput.Item に渡せる属性 */
export type TagsInputItemAttrs = {
    /** タグのインデックス */
    index: number;
    /** タグの値 */
    value: string;
    /** 無効化 */
    disabled?: boolean;
    class?: string;
    style?: Record<string, string>;
};
/** TagsInput.ItemPreview に渡せる属性 */
export type TagsInputItemPreviewAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** TagsInput.ItemText に渡せる属性 */
export type TagsInputItemTextAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** TagsInput.ItemDeleteTrigger に渡せる属性 */
export type TagsInputItemDeleteTriggerAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** TagsInput.ItemInput に渡せる属性 */
export type TagsInputItemInputAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** TagsInput.Input に渡せる属性 */
export type TagsInputInputAttrs = {
    placeholder?: string;
    class?: string;
    style?: Record<string, string>;
};
/** TagsInput.ClearTrigger に渡せる属性 */
export type TagsInputClearTriggerAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** TagsInput.HiddenInput に渡せる属性 */
export type TagsInputHiddenInputAttrs = {
    class?: string;
};
type TagsInputRole = "label" | "control" | "item" | "item-preview" | "item-text" | "item-delete-trigger" | "item-input" | "input" | "clear-trigger" | "hidden-input";
/** TagsInput.Label — ラベル */
export declare class TagsInputLabelMarker implements m.Component<TagsInputLabelAttrs> {
    static __tagsInputRole: TagsInputRole;
    view(vnode: m.Vnode<TagsInputLabelAttrs>): JSX.Element;
}
/** TagsInput.Control — タグとインプットのコンテナ */
export declare class TagsInputControlMarker implements m.Component<TagsInputControlAttrs> {
    static __tagsInputRole: TagsInputRole;
    view(vnode: m.Vnode<TagsInputControlAttrs>): JSX.Element;
}
/** TagsInput.Item — 個別タグのラッパー */
export declare class TagsInputItemMarker implements m.Component<TagsInputItemAttrs> {
    static __tagsInputRole: TagsInputRole;
    view(vnode: m.Vnode<TagsInputItemAttrs>): JSX.Element;
}
/** TagsInput.ItemPreview — タグのプレビュー表示部分 */
export declare class TagsInputItemPreviewMarker implements m.Component<TagsInputItemPreviewAttrs> {
    static __tagsInputRole: TagsInputRole;
    view(vnode: m.Vnode<TagsInputItemPreviewAttrs>): JSX.Element;
}
/** TagsInput.ItemText — タグのテキスト */
export declare class TagsInputItemTextMarker implements m.Component<TagsInputItemTextAttrs> {
    static __tagsInputRole: TagsInputRole;
    view(vnode: m.Vnode<TagsInputItemTextAttrs>): JSX.Element;
}
/** TagsInput.ItemDeleteTrigger — タグ削除ボタン */
export declare class TagsInputItemDeleteTriggerMarker implements m.Component<TagsInputItemDeleteTriggerAttrs> {
    static __tagsInputRole: TagsInputRole;
    view(vnode: m.Vnode<TagsInputItemDeleteTriggerAttrs>): JSX.Element | null;
}
/** TagsInput.ItemInput — タグ編集用インプット */
export declare class TagsInputItemInputMarker implements m.Component<TagsInputItemInputAttrs> {
    static __tagsInputRole: TagsInputRole;
    view(vnode: m.Vnode<TagsInputItemInputAttrs>): JSX.Element | null;
}
/** TagsInput.Input — メイン入力フィールド */
export declare class TagsInputInputMarker implements m.Component<TagsInputInputAttrs> {
    static __tagsInputRole: TagsInputRole;
    view(vnode: m.Vnode<TagsInputInputAttrs>): JSX.Element;
}
/** TagsInput.ClearTrigger — 全タグクリアボタン */
export declare class TagsInputClearTriggerMarker implements m.Component<TagsInputClearTriggerAttrs> {
    static __tagsInputRole: TagsInputRole;
    view(vnode: m.Vnode<TagsInputClearTriggerAttrs>): JSX.Element | null;
}
/** TagsInput.HiddenInput — フォーム送信用の隠しインプット */
export declare class TagsInputHiddenInputMarker implements m.Component<TagsInputHiddenInputAttrs> {
    static __tagsInputRole: TagsInputRole;
    view(): null;
}
/**
 * TagsInput.Root — タグ入力のルートコンポーネント
 *
 * @description
 * Chakra UI Tags Input 風の compound component。
 * 制御モード（value）と非制御モード（defaultValue）の両方をサポート。
 */
export declare class TagsInputRoot implements m.Component<TagsInputRootAttrs> {
    private internalValue;
    private inputValue;
    private highlightedIndex;
    private editingIndex;
    private editingValue;
    private inputRef;
    oninit(vnode: m.Vnode<TagsInputRootAttrs>): void;
    private isControlled;
    private getValue;
    private setValue;
    private addTag;
    private removeTag;
    private handleDelimiter;
    private commitEdit;
    view(vnode: m.Vnode<TagsInputRootAttrs>): JSX.Element;
}
/**
 * TagsInput — Chakra UI Tags Input 風の compound コンポーネント
 */
export declare const TagsInput: {
    readonly Root: typeof TagsInputRoot;
    readonly Label: typeof TagsInputLabelMarker;
    readonly Control: typeof TagsInputControlMarker;
    readonly Item: typeof TagsInputItemMarker;
    readonly ItemPreview: typeof TagsInputItemPreviewMarker;
    readonly ItemText: typeof TagsInputItemTextMarker;
    readonly ItemDeleteTrigger: typeof TagsInputItemDeleteTriggerMarker;
    readonly ItemInput: typeof TagsInputItemInputMarker;
    readonly Input: typeof TagsInputInputMarker;
    readonly ClearTrigger: typeof TagsInputClearTriggerMarker;
    readonly HiddenInput: typeof TagsInputHiddenInputMarker;
};
export {};
//# sourceMappingURL=TagsInput.d.ts.map