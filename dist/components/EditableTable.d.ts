/** @jsx m */
import m from "mithril";
/** Handler 型エイリアス */
export type CreateHandler<TRow> = (newRow: TRow) => void | boolean | TRow | Promise<void | boolean | TRow>;
export type UpdateHandler<TRow> = (oldRow: TRow, newRow: TRow) => void | boolean | TRow | Promise<void | boolean | TRow>;
export type DeleteHandler<TRow> = (row: TRow) => void | boolean | Promise<void | boolean>;
/**
 * 列定義（ジェネリック）
 *
 * @property {string} title - 列の表示タイトル
 * @property {keyof TRow | string} dataIndex - データソースのキー
 * @property {string} [key] - 列の一意キー（省略時は dataIndex が使用される）
 * @property {function} [render] - カスタムレンダリング関数
 * @property {boolean} [editable] - 編集可能かどうか
 * @property {"text" | "number" | "select"} [inputType] - 入力タイプ
 * @property {Array<{label: string, value: any}>} [options] - selectタイプの選択肢
 * @property {string} [class] - 列のCSSクラス
 * @property {function} [validator] - バリデーション関数
 * @property {function} [visible] - 行表示の判定関数（レコードを受けて true/false を返す）
 */
export type EditableColumn<TRow = any> = {
    title: string;
    dataIndex: keyof TRow | string;
    key?: string;
    render?: (value: any, record: TRow, index: number) => m.Children;
    editable?: boolean;
    inputType?: "text" | "number" | "select";
    options?: {
        label: string;
        value: any;
    }[];
    class?: string;
    validator?: (v: any, record?: TRow) => boolean | string | Promise<boolean | string>;
    visible?: (record: TRow) => boolean;
};
/**
 * EditableTable コンポーネント属性（ジェネリック）
 *
 * @property {TRow[]} dataSource - テーブルに表示するデータ配列
 * @property {EditableColumn<TRow>[]} columns - 列定義の配列
 * @property {keyof TRow | string} [rowKey] - 行の一意キー（デフォルト: "key"）
 * @property {string} [class] - テーブルのCSSクラス
 * @property {Record<string, string>} [style] - テーブルのスタイル
 * @property {function} [onChange] - データ変更時のコールバック
 * @property {function} [newRowFactory] - 新規行作成用のファクトリ関数
 * @property {"top" | "bottom"} [newRowPosition] - 新規行の挿入位置（デフォルト: "top"）
 * @property {CreateHandler<TRow>} [onCreate] - 新規作成時のハンドラ
 * @property {UpdateHandler<TRow>} [onUpdate] - 更新時のハンドラ
 * @property {DeleteHandler<TRow>} [onDelete] - 削除時のハンドラ
 * @property {boolean} [preserveDraftsOnExternalChange] - 外部からのデータ変更時にドラフトを保持するか（デフォルト: true）
 */
export type EditableTableAttrs<TRow = any> = {
    dataSource: TRow[];
    columns: EditableColumn<TRow>[];
    rowKey?: keyof TRow | string;
    class?: string;
    style?: Record<string, string>;
    onChange?: (newData: TRow[]) => void;
    newRowFactory?: () => TRow;
    newRowPosition?: "top" | "bottom";
    onCreate?: CreateHandler<TRow>;
    onUpdate?: UpdateHandler<TRow>;
    onDelete?: DeleteHandler<TRow>;
    preserveDraftsOnExternalChange?: boolean;
};
/**
 * EditableTable
 *
 * 概要:
 * - インラインで編集可能なテーブルコンポーネント
 * - ドラフト段階で必ずユニーク key を生成
 * - Save/Delete/Edit は key ベースで管理
 * - 親 dataSource 更新時はドラフトを保持（オプション）
 * - 行の移動は FLIP アニメーション
 * - Delete は height 0px + opacity 0 で消える
 *
 * 使用例:
 * ```tsx
 * <EditableTable<User>
 *   dataSource={users}
 *   columns={columns}
 *   rowKey="id"
 *   onCreate={async (row) => await api.create(row)}
 *   onUpdate={async (old, new) => await api.update(new)}
 *   onDelete={async (row) => await api.delete(row)}
 *   onChange={(data) => users = data}
 * />
 * ```
 *
 * @template TRow - テーブルの行データ型
 */
export declare class EditableTable<TRow = any> implements m.Component<EditableTableAttrs<TRow>> {
    /** ドラフト状態（編集中の行データ） */
    private drafts;
    /** ドラフトの順序 */
    private draftOrder;
    /** 編集中のキーセット */
    private editingKeys;
    /** エラー状態 */
    private errors;
    /** ローカルデータソース */
    private localData;
    /** FLIP 用：直前の行位置 */
    private lastPositions;
    /** 削除アニメーション中のキー */
    private leavingKeys;
    /**
     * 初期化時にデータソースをコピーし、キーを生成
     * @param vnode Mithril 仮想ノード
     */
    oninit(vnode: m.Vnode<EditableTableAttrs<TRow>>): void;
    /**
     * 更新前に現在の行位置を記録（FLIP: First）
     */
    onbeforeupdate(vnode: m.Vnode<EditableTableAttrs<TRow>>, old: m.VnodeDOM<any>): void;
    /**
     * 更新後に FLIP アニメーションを再生（FLIP: Last → Invert → Play）
     */
    onupdate(): void;
    private getRowKeyName;
    private getRowKeyFromRow;
    /**
     * 現在の行位置を記録（テーブル全体）
     */
    private capturePositions;
    /**
     * FLIP アニメーションを再生
     */
    private playFLIP;
    /**
     * Add: 新規ドラフトを追加（ユニーク key 割り当て）
     */
    private addRow;
    /**
     * 既存行の編集開始
     */
    private startEditExisting;
    /**
     * 編集をキャンセル
     */
    private cancelEdit;
    /**
     * バリデータを実行
     */
    private runValidator;
    /**
     * 行全体をバリデート
     */
    private validateRow;
    /**
     * セル単位でバリデート
     */
    private validateCell;
    /**
     * saveEdit: Create / Update
     */
    private saveEdit;
    /**
     * 内部用：実際の削除ロジック（データ更新だけ）
     */
    private performDelete;
    /**
     * deleteRow: アニメーションしてから削除
     */
    private deleteRow;
    /**
     * セルのレンダリング（編集モード切り替え）
     */
    private renderCell;
    /**
     * view: テーブルの描画
     */
    view(vnode: m.Vnode<EditableTableAttrs<TRow>>): JSX.Element;
}
//# sourceMappingURL=EditableTable.d.ts.map