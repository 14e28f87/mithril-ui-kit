/** @jsx m */
import m from "mithril";
import EventEmitter from "eventemitter3";
/**
 * @typedef {Object} OverlayOptions
 * @property {boolean} [closeOnEscapeKey=true] - Escape キー押下時にオーバーレイを閉じるかどうか
 * @property {boolean} [closeOnOutsideClick=false] - オーバーレイ外クリック時に閉じるかどうか
 * @property {boolean} [hasBackdrop=true] - 背景にバックドロップ（半透明の黒い背景）を表示するかどうか
 * @property {boolean} [inline=false] - インライン表示（document.body に追加せず、返り値として使用）
 */
export type OverlayOptions = {
    closeOnEscapeKey?: boolean;
    closeOnOutsideClick?: boolean;
    hasBackdrop?: boolean;
    inline?: boolean;
};
/**
 * @class Overlay
 * @extends EventEmitter
 * @description
 * オーバーレイコンポーネントの基盤クラス
 *
 * このクラスは Modal、Drawer、Toast など、画面上にオーバーレイ表示されるコンポーネントの
 * 共通基盤として機能します。Mithril コンポーネントをオーバーレイとして表示し、
 * 表示・非表示の制御、イベント処理、ライフサイクル管理を行います。
 *
 * 主な機能:
 * - コンポーネントを DOM に動的にマウント/アンマウント
 * - バックドロップ（半透明背景）の表示
 * - Escape キーでの閉じる処理
 * - オーバーレイ外クリックでの閉じる処理
 * - イベント通知（ContentMount / ContentUnmount）
 *
 * 実装の詳細:
 * 1. show() を呼ぶと、新しい div 要素（overlay-root）を作成し、document.body に追加
 * 2. その div に Mithril コンポーネントをマウント
 * 3. バックドロップとコンポーネントを含むコンテナを描画
 * 4. hide() を呼ぶと、コンポーネントをアンマウントし、div を DOM から削除
 *
 * なぜこのような実装が必要か:
 * - Modal などは既存の DOM 階層とは独立して表示される必要がある
 * - z-index や position の影響を受けないよう、body 直下に配置
 * - 複数のオーバーレイを同時に管理できるよう、独立した root を持つ
 *
 * @example
 * // Modal コンポーネントでの使用例
 * const overlay = new Overlay(ModalComponent, {
 *   closeOnEscapeKey: true,
 *   closeOnOutsideClick: true,
 *   hasBackdrop: true
 * });
 * overlay.show();
 *
 * @example
 * // イベントリスナーの使用
 * overlay.on('ContentMount', () => console.log('マウントされました'));
 * overlay.on('ContentUnmount', () => console.log('アンマウントされました'));
 */
export default class Overlay extends EventEmitter {
    /**
     * オーバーレイのスタック（同時に表示されているオーバーレイを管理）
     * 複数のオーバーレイが同時に表示される場合、後に追加されたものがトップになります。
     */
    private static stack;
    /**
     * 基準となる z-index。各オーバーレイはこの値に対してオフセットされる。
     */
    private static baseZIndex;
    private static top;
    /**
     * 表示するコンポーネント
     * @private
     */
    private component;
    /**
     * オーバーレイのオプション設定
     * @private
     */
    private options;
    /**
     * オーバーレイが表示されているかどうか
     * @private
     */
    private isShown;
    /**
     * オーバーレイのルート DOM 要素
     * Mithril がマウントされる div 要素
     * @private
     */
    private root;
    private childVnode;
    private _animationPromise;
    /**
     * @constructor
     * @param {m.ComponentTypes<any>} component - オーバーレイとして表示する Mithril コンポーネント
     * @param {OverlayOptions} options - オーバーレイの動作オプション
     *
     * @description
     * Overlay インスタンスを作成します。
     * この時点ではまだ DOM には何も追加されません。
     * show() を呼ぶことで初めて DOM に表示されます。
     */
    constructor(component: m.ComponentTypes<any>, options?: OverlayOptions);
    /**
     * @function show
     * @description
     * オーバーレイを表示します
     *
     * 処理の流れ:
     * 1. 既に表示されている場合は何もしない（多重表示防止）
     * 2. overlay-root という div 要素を作成
     * 3. inline オプションが false の場合、document.body に追加
     * 4. その div に Mithril コンポーネントをマウント
     * 5. Escape キーイベントリスナーを登録（closeOnEscapeKey が true の場合）
     *
     * マウントされるコンポーネント構造:
     * ```
     * <div class="overlay-root">
     *   <div class="overlay-container">
     *     <div class="overlay-backdrop" /> (hasBackdrop が true の場合)
     *     <YourComponent hide={this.hide} />
     *   </div>
     * </div>
     * ```
     *
     * 注意:
     * - コンポーネントには hide() メソッドが attrs として渡される
     * - コンポーネント内で hide() を呼ぶことでオーバーレイを閉じられる
     */
    show(): void;
    /**
     * @function hide
     * @description
     * オーバーレイを非表示にします
     *
     * 処理の流れ:
     * 1. 既に非表示の場合は何もしない
     * 2. Mithril コンポーネントをアンマウント（m.mount(root, null)）
     * 3. root 要素を DOM から削除
     * 4. Escape キーイベントリスナーを解除
     *
     * 注意:
     * - アンマウント時、コンポーネントの onbeforeremove / onremove が呼ばれる
     * - これによりフェードアウトアニメーションなどを実装できる
     */
    hide(): Promise<void>;
    /**
     * @function handleKeyDown
     * @private
     * @description
     * キーボードイベントハンドラ
     *
     * Escape キーが押された場合、オーバーレイを閉じます。
     * アロー関数として定義することで、this のバインドを保持しています。
     *
     * @param {KeyboardEvent} e - キーボードイベント
     */
    private handleKeyDown;
}
//# sourceMappingURL=Overlay.d.ts.map