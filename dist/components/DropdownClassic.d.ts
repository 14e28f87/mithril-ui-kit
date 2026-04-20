/** @jsx m */
import m from "mithril";
import { type Placement } from "@floating-ui/dom";
type DropdownTrigger = "click" | "contextMenu";
/**
 * @typedef {Object} DropdownClassicMenuItem
 * @property {string} key - アイテムの一意のキー
 * @property {string|m.Children} [label] - 表示ラベル
 * @property {() => void} [onClick] - クリック時のコールバック
 * @property {boolean} [disabled] - 無効化フラグ
 * @property {boolean} [divider] - 区切り線フラグ
 */
export type DropdownClassicMenuItem = {
    key: string;
    label?: string | m.Children;
    onClick?: () => void;
    disabled?: boolean;
    divider?: boolean;
};
export type DropdownClassicPopupRender = () => m.Children;
/**
 * @typedef {Object} DropdownClassicAttrs
 * @property {DropdownClassicMenuItem[]} [menu] - ドロップダウンメニューのアイテム配列（省略時は空メニュー）
 * @property {Placement} [placement] - ドロップダウンの配置位置
 * @property {boolean} [open] - ドロップダウンの開閉状態（制御）
 * @property {boolean} [defaultOpen] - 初期開閉状態（非制御）
 * @property {number} [offset] - トリガーからのオフセット
 * @property {DropdownTrigger|DropdownTrigger[]} [trigger] - 開閉トリガー
 * @property {boolean} [closeOnOutsideClick] - 外側クリックで閉じるか
 * @property {DropdownClassicPopupRender} [popupRender] - ポップアップ内容をカスタマイズするレンダラー
 * @property {string} [class] - 追加クラス
 * @property {(open: boolean) => void} [onOpenChange] - 開閉状態変更時のコールバック
 * @property {boolean} [disabled] - 無効化フラグ
 */
export type DropdownClassicAttrs = {
    menu?: DropdownClassicMenuItem[];
    placement?: Placement;
    open?: boolean;
    defaultOpen?: boolean;
    offset?: number;
    trigger?: DropdownTrigger | DropdownTrigger[];
    closeOnOutsideClick?: boolean;
    popupRender?: DropdownClassicPopupRender;
    class?: string;
    /** ラッパー最外 div に適用する追加クラス。inline-block を上書きしたい場合などに使用 */
    rootClass?: string;
    onOpenChange?: (open: boolean) => void;
    disabled?: boolean;
};
/**
 * @class Dropdown
 * @description
 * Ant Design の Dropdown をベースにした機能を持ち、Bootstrap 5 の見た目を採用したドロップダウンコンポーネント
 *
 * 機能面:
 * - クリックでメニューを開閉
 * - メニューアイテムのクリックでアクション実行
 * - 配置の自動調整（Floating UI 使用）
 *
 * デザイン:
 * - Bootstrap 5 のドロップダウンスタイルを採用
 */
export declare class DropdownClassic implements m.ClassComponent<DropdownClassicAttrs> {
    private open;
    private referenceEl?;
    private floatingEl?;
    private arrowEl?;
    private contextMenuPoint?;
    private portal?;
    private cleanupAutoUpdate?;
    private cleanupOutsideClose?;
    private uid;
    private static seed;
    /**
     * コンポーネント初期化時に非制御モード用の開閉状態を設定します。
     *
     * @param vnode Mithril の仮想ノード
     */
    oninit(vnode: m.Vnode<DropdownClassicAttrs>): void;
    /**
     * 初回描画後にポータルを準備し、必要に応じてポップアップを描画します。
     *
     * @param vnode Mithril の DOM 付き仮想ノード
     */
    oncreate(vnode: m.VnodeDOM<DropdownClassicAttrs>): void;
    /**
     * 更新時に現在の属性に合わせてポップアップ描画を再計算します。
     *
     * @param vnode Mithril の DOM 付き仮想ノード
     */
    onupdate(vnode: m.VnodeDOM<DropdownClassicAttrs>): void;
    /**
     * コンポーネント破棄時にイベント・監視・ポータルをクリーンアップします。
     */
    onremove(): void;
    /**
     * トリガー要素（ボタンまたは右クリック領域）を描画します。
     *
     * @param vnode Mithril の仮想ノード
     * @returns トリガー要素の仮想ノード
     */
    view(vnode: m.Vnode<DropdownClassicAttrs>): JSX.Element;
    /**
     * クリックトリガー時に開閉状態をトグルします。
     *
     * @param attrs Dropdown の属性
     */
    private handleToggle;
    /**
     * コンテキストメニュートリガー時に表示座標を記録して開きます。
     *
     * @param event マウスイベント
     * @param attrs Dropdown の属性
     */
    private handleContextMenu;
    /**
     * `trigger` 属性を正規化し、クリック/右クリックの有効状態を返します。
     *
     * @param trigger トリガー指定
     * @returns 正規化済みトリガー情報
     */
    private normalizeTriggers;
    /**
     * `open` 属性による制御モードかどうかを判定します。
     *
     * @param attrs Dropdown の属性
     * @returns 制御モードなら `true`
     */
    private isControlled;
    /**
     * 現在の開閉状態を取得します。
     * 制御モードでは `attrs.open`、非制御モードでは内部状態を返します。
     *
     * @param attrs Dropdown の属性
     * @returns 現在の開閉状態
     */
    private getOpenState;
    /**
     * 開閉状態を更新し、必要な副作用（コールバック・再描画・後始末）を実行します。
     *
     * @param next 次の開閉状態
     * @param attrs Dropdown の属性
     */
    private setOpen;
    /**
     * ポップアップ描画先となるポータル要素を `document.body` に作成します。
     */
    private ensurePortal;
    /**
     * ポータルを破棄し、Mithril 管理下のノードも明示的にアンマウントします。
     */
    private destroyPortal;
    /**
     * Floating UI の `autoUpdate` 監視を解除します。
     */
    private teardownAutoUpdate;
    /**
     * 外側クリック監視を解除します。
     */
    private teardownOutsideClose;
    /**
     * ポップアップ外クリックで閉じるためのイベント監視を設定します。
     *
     * @param attrs Dropdown の属性
     */
    private setupOutsideClose;
    /**
     * ポップアップ本体をポータルへ描画し、位置計算・追従更新を設定します。
     *
     * @param attrs Dropdown の属性
     */
    private renderFloating;
    /**
     * 標準メニュー部分の Mithril ノードを生成します。
     * `popupRender` が未指定の場合はこのノードがそのまま表示されます。
     *
     * @param attrs Dropdown の属性
     * @returns メニューの Mithril ノード
     */
    private renderMenu;
    /**
     * 右クリック表示用に、任意座標を参照要素として扱う仮想参照オブジェクトを作成します。
     *
     * @param point 表示基準となる画面座標
     * @returns Floating UI 互換の仮想参照
     */
    private createVirtualReference;
}
export {};
//# sourceMappingURL=DropdownClassic.d.ts.map