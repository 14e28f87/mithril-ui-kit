/** @jsx m */
import m from "mithril";
/** アクティベーションモード */
export type EditableActivationMode = "focus" | "dblclick" | "click" | "none";
/** サブミットモード */
export type EditableSubmitMode = "enter" | "blur" | "none" | "both";
/** サイズ */
export type EditableSize = "sm" | "md" | "lg";
/** 値変更時の詳細 */
export type EditableValueChangeDetails = {
    value: string;
};
/** 編集状態変更時の詳細 */
export type EditableEditChangeDetails = {
    editing: boolean;
};
/**
 * Editable.Root に渡せる属性
 */
export type EditableRootAttrs = {
    /** 制御モードの値 */
    value?: string;
    /** 初期値（非制御モード） */
    defaultValue?: string;
    /** プレースホルダー */
    placeholder?: string | {
        edit: string;
        preview: string;
    };
    /** アクティベーションモード（デフォルト: "focus"） */
    activationMode?: EditableActivationMode;
    /** サブミットモード（デフォルト: "both"） */
    submitMode?: EditableSubmitMode;
    /** 値変更時のコールバック */
    onValueChange?: (details: EditableValueChangeDetails) => void;
    /** 値コミット時のコールバック */
    onValueCommit?: (details: EditableValueChangeDetails) => void;
    /** 値リバート時のコールバック */
    onValueRevert?: (details: EditableValueChangeDetails) => void;
    /** 編集状態変更時のコールバック */
    onEditChange?: (details: EditableEditChangeDetails) => void;
    /** 無効化 */
    disabled?: boolean;
    /** 読み取り専用 */
    readOnly?: boolean;
    /** バリデーションエラー */
    invalid?: boolean;
    /** フォーカス時にテキスト全選択するか（デフォルト: true） */
    selectOnFocus?: boolean;
    /** サイズ（デフォルト: "md"） */
    size?: EditableSize;
    /** 最大文字数 */
    maxLength?: number;
    /** フォーム送信用 name */
    name?: string;
    /** 制御モードの編集状態 */
    edit?: boolean;
    /** 初期編集状態 */
    defaultEdit?: boolean;
    /** 自動リサイズ */
    autoResize?: boolean;
    /** 追加クラス */
    class?: string;
    /** スタイル */
    style?: Record<string, string>;
};
/** Editable.Preview に渡せる属性 */
export type EditablePreviewAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Editable.Input に渡せる属性 */
export type EditableInputAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Editable.Textarea に渡せる属性 */
export type EditableTextareaAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Editable.Label に渡せる属性 */
export type EditableLabelAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Editable.Area に渡せる属性 */
export type EditableAreaAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Editable.Control に渡せる属性 */
export type EditableControlAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Editable.EditTrigger に渡せる属性 */
export type EditableEditTriggerAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Editable.SubmitTrigger に渡せる属性 */
export type EditableSubmitTriggerAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Editable.CancelTrigger に渡せる属性 */
export type EditableCancelTriggerAttrs = {
    class?: string;
    style?: Record<string, string>;
};
type EditableRole = "preview" | "input" | "textarea" | "label" | "area" | "control" | "editTrigger" | "submitTrigger" | "cancelTrigger";
/** Editable.Preview — 表示モードのマーカー */
export declare class EditablePreviewMarker implements m.Component<EditablePreviewAttrs> {
    static __editableRole: EditableRole;
    view(vnode: m.Vnode<EditablePreviewAttrs>): JSX.Element;
}
/** Editable.Input — 入力モード（input）のマーカー */
export declare class EditableInputMarker implements m.Component<EditableInputAttrs> {
    static __editableRole: EditableRole;
    view(vnode: m.Vnode<EditableInputAttrs>): JSX.Element;
}
/** Editable.Textarea — 入力モード（textarea）のマーカー */
export declare class EditableTextareaMarker implements m.Component<EditableTextareaAttrs> {
    static __editableRole: EditableRole;
    view(vnode: m.Vnode<EditableTextareaAttrs>): JSX.Element;
}
/** Editable.Label — ラベルのマーカー */
export declare class EditableLabelMarker implements m.Component<EditableLabelAttrs> {
    static __editableRole: EditableRole;
    view(vnode: m.Vnode<EditableLabelAttrs>): JSX.Element;
}
/** Editable.Area — エリアのマーカー */
export declare class EditableAreaMarker implements m.Component<EditableAreaAttrs> {
    static __editableRole: EditableRole;
    view(vnode: m.Vnode<EditableAreaAttrs>): JSX.Element;
}
/** Editable.Control — コントロールボタン群のマーカー */
export declare class EditableControlMarker implements m.Component<EditableControlAttrs> {
    static __editableRole: EditableRole;
    view(vnode: m.Vnode<EditableControlAttrs>): JSX.Element;
}
/** Editable.EditTrigger — 編集開始トリガーのマーカー */
export declare class EditableEditTriggerMarker implements m.Component<EditableEditTriggerAttrs> {
    static __editableRole: EditableRole;
    view(vnode: m.Vnode<EditableEditTriggerAttrs>): JSX.Element;
}
/** Editable.SubmitTrigger — 送信トリガーのマーカー */
export declare class EditableSubmitTriggerMarker implements m.Component<EditableSubmitTriggerAttrs> {
    static __editableRole: EditableRole;
    view(vnode: m.Vnode<EditableSubmitTriggerAttrs>): JSX.Element;
}
/** Editable.CancelTrigger — キャンセルトリガーのマーカー */
export declare class EditableCancelTriggerMarker implements m.Component<EditableCancelTriggerAttrs> {
    static __editableRole: EditableRole;
    view(vnode: m.Vnode<EditableCancelTriggerAttrs>): JSX.Element;
}
/**
 * @class EditableRoot
 * @description
 * Chakra UI 風のインライン編集 compound component。
 *
 * テキストをクリック/ダブルクリック/フォーカスで編集モードに切り替え、
 * Enter/Blur で値をコミットする。
 *
 * 主な機能:
 * - 制御モード（value + onValueChange）と非制御モード（defaultValue）
 * - activationMode: "focus" | "dblclick" | "click" | "none"
 * - submitMode: "enter" | "blur" | "none" | "both"
 * - Textarea サポート
 * - EditTrigger / SubmitTrigger / CancelTrigger によるコントロール
 *
 * @example
 * <Editable.Root defaultValue="Click to edit" activationMode="dblclick">
 *   <Editable.Preview />
 *   <Editable.Input />
 * </Editable.Root>
 */
export declare class EditableRoot implements m.Component<EditableRootAttrs> {
    private internalValue;
    private draftValue;
    private internalEditing;
    private committedValue;
    private inputEl;
    oninit(vnode: m.Vnode<EditableRootAttrs>): void;
    private isControlled;
    private isEditControlled;
    private getValue;
    private getEditing;
    private getPlaceholder;
    /** 編集モードに切り替える */
    private startEdit;
    /** 値をコミットして編集モード終了 */
    private submit;
    /** 値をリバートして編集モード終了 */
    private cancel;
    view(vnode: m.Vnode<EditableRootAttrs>): JSX.Element;
}
/**
 * Editable compound component
 *
 * @example
 * ```tsx
 * <Editable.Root defaultValue="Click to edit">
 *   <Editable.Preview />
 *   <Editable.Input />
 * </Editable.Root>
 * ```
 */
export declare const Editable: {
    Root: typeof EditableRoot;
    Preview: typeof EditablePreviewMarker;
    Input: typeof EditableInputMarker;
    Textarea: typeof EditableTextareaMarker;
    Label: typeof EditableLabelMarker;
    Area: typeof EditableAreaMarker;
    Control: typeof EditableControlMarker;
    EditTrigger: typeof EditableEditTriggerMarker;
    SubmitTrigger: typeof EditableSubmitTriggerMarker;
    CancelTrigger: typeof EditableCancelTriggerMarker;
};
export {};
//# sourceMappingURL=Editable.d.ts.map