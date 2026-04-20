/** @jsx m */
import m from "mithril";
/**
 * @typedef {Object} InlineEditControlRef
 * @property {() => void} [startEdit] - 外部から編集を開始する
 * @property {() => Promise<boolean>} [saveEdit] - 外部から編集内容を確定する
 * @property {() => void} [cancelEdit] - 外部から編集をキャンセルする
 * @property {() => boolean} [isEditing] - 現在の編集状態を取得する
 */
export type InlineEditControlRef = {
    startEdit?: () => void;
    saveEdit?: () => Promise<boolean>;
    cancelEdit?: () => void;
    isEditing?: () => boolean;
};
/**
 * @typedef {Object} InlineEditAttrs
 * @property {string|null} [value] - 表示中の値（外部制御）
 * @property {(v: string|null) => void|Promise<void>} [oninput] - 確定時に呼ばれるコールバック
 * @property {() => void} [onblur] - フォーカス喪失時に呼ばれるコールバック
 * @property {string} [placeholder] - 値が空のときに表示する文言
 * @property {string} [class] - 追加 CSS クラス
 * @property {boolean} [disabled] - 編集を無効化
 * @property {"doubleclick"|"click"} [editTrigger] - 編集開始トリガー
 * @property {boolean} [editing] - 編集状態の外部制御値
 * @property {(editing: boolean) => void} [onEditingChange] - 編集状態が変化したときの通知
 * @property {boolean} [saveOnBlur] - blur 時に保存するか
 * @property {string} [type] - 編集 input の type 属性
 * @property {number} [maxLength] - 編集 input の最大文字数
 * @property {string} [id] - 編集 input の ID
 * @property {() => void} [onEditStart] - 編集開始時に呼ばれるコールバック
 * @property {(value: string|null) => void} [onEditCancel] - 編集キャンセル時のコールバック
 * @property {(value: string|null) => void} [onEditEnd] - 編集確定時のコールバック
 * @property {InlineEditControlRef} [controlRef] - 外部ボタンから edit/save/cancel を呼ぶための参照
 */
export type InlineEditAttrs = {
    value?: string | null;
    oninput?: (v: string | null) => void | Promise<void>;
    onblur?: () => void;
    placeholder?: string;
    class?: string;
    disabled?: boolean;
    editTrigger?: "doubleclick" | "click";
    editing?: boolean;
    onEditingChange?: (editing: boolean) => void;
    saveOnBlur?: boolean;
    type?: string;
    maxLength?: number;
    id?: string;
    onEditStart?: () => void;
    onEditCancel?: (value: string | null) => void;
    onEditEnd?: (value: string | null) => void;
    controlRef?: InlineEditControlRef;
};
/**
 * @class InlineEdit
 * @description
 * テキスト表示部分をインラインで編集可能にするコンポーネント
 *
 * 挙動:
 * - 既定はダブルクリックで編集開始（`editTrigger` でクリック開始にも変更可）
 * - Enter で確定
 * - Escape でキャンセル
 * - blur 時は `saveOnBlur` に従って確定またはキャンセル
 *
 * Form / FormItem 連携:
 * - `value` / `oninput` 形式のため `FormItem` からの値注入と親和性があります
 */
export declare class InlineEdit implements m.Component<InlineEditAttrs> {
    /** 編集状態かどうか */
    private editing;
    /** 編集中の入力値 */
    private draftValue;
    /** 編集開始時点の値（キャンセル時に復元） */
    private originalValue;
    /** 編集 input 要素参照 */
    private inputElement;
    /** 直近の attrs 参照 */
    private latestAttrs;
    /**
     * @function oninit
     * @description 初期値を内部状態へ同期
     */
    oninit(vnode: m.Vnode<InlineEditAttrs>): void;
    /**
     * @function onbeforeupdate
     * @description 非編集中のみ、外部 value 変更を内部値へ反映
     */
    onbeforeupdate(vnode: m.Vnode<InlineEditAttrs>, old: m.VnodeDOM<InlineEditAttrs>): void;
    onremove(vnode: m.Vnode<InlineEditAttrs>): void;
    private bindControlRef;
    private unbindControlRef;
    /**
     * @function isControlledEditing
     * @description 編集状態が外部制御かどうかを返す
     */
    private isControlledEditing;
    /**
     * @function isEditing
     * @description 現在の編集状態（制御/非制御を吸収）を返す
     */
    private isEditing;
    /**
     * @function setEditing
     * @description 編集状態を更新（制御時は通知のみ、非制御時は内部状態を更新）
     */
    private setEditing;
    /**
     * @function toText
     * @description null / undefined を空文字へ正規化
     */
    private toText;
    /**
     * @function toNullable
     * @description 空文字（trim 後）を null へ正規化
     */
    private toNullable;
    /**
     * @function beginEdit
     * @description 編集を開始し、表示値をドラフトへ取り込む
     */
    private beginEdit;
    private restoreInputFocus;
    /**
     * @function confirmEdit
     * @description 現在のドラフト値を確定して通知
     */
    private confirmEdit;
    /**
     * @function cancelEdit
     * @description 編集を取り消し、開始時の値へ戻す
     */
    private cancelEdit;
    /**
     * @function handleDisplayClick
     * @description 表示モード時の click/doubleclick を処理
     */
    private handleDisplayClick;
    /**
     * @function handleInputBlur
     * @description blur 時の確定/キャンセル処理
     */
    private handleInputBlur;
    /**
     * @function view
     * @description コンポーネント描画
     */
    view(vnode: m.Vnode<InlineEditAttrs>): JSX.Element;
}
//# sourceMappingURL=InlineEdit.d.ts.map