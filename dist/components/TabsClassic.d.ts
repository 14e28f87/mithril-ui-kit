/** @jsx m */
import m from "mithril";
import "./TabsClassic.scss";
export type TabsClassicType = "line" | "card" | "editable-card";
export type TabsClassicPosition = "top" | "right" | "bottom" | "left";
export type TabsClassicSize = "small" | "middle" | "large";
export type TabsClassicOnEditAction = "add" | "remove";
/**
 * @typedef {Object} TabsClassicItem
 * @property {string} key タブの一意キー
 * @property {m.Children} label タブ見出し
 * @property {m.Children} [children] タブ内容
 * @property {boolean} [disabled] 無効化フラグ
 * @property {boolean} [closable] editable-card 時の閉じるボタン表示可否
 * @property {boolean} [forceRender] 非アクティブ時も初回から描画するか
 * @property {string} [class] ペイン側へ付与する追加クラス
 */
export type TabsClassicItem = {
    key: string;
    label: m.Children;
    children?: m.Children;
    disabled?: boolean;
    closable?: boolean;
    forceRender?: boolean;
    class?: string;
};
/**
 * @typedef {Object} TabsClassicAttrs
 * @property {TabsClassicItem[]} items タブ項目配列
 * @property {string} [activeKey] 制御モード時のアクティブキー
 * @property {string} [defaultActiveKey] 非制御モード時の初期アクティブキー
 * @property {(activeKey: string) => void} [onChange] アクティブタブ変更時のコールバック
 * @property {(key: string, event: MouseEvent) => void} [onTabClick] タブクリック時のコールバック
 * @property {(targetKey: string | MouseEvent, action: TabsClassicOnEditAction) => void} [onEdit] editable-card の追加・削除コールバック
 * @property {TabsClassicType} [type] 表示タイプ
 * @property {TabsClassicPosition} [tabPosition] タブ見出しの配置位置
 * @property {TabsClassicSize} [size] 見出しサイズ
 * @property {boolean} [centered] 上下配置時にタブを中央寄せするか
 * @property {number} [tabBarGutter] タブ見出し間の余白
 * @property {Record<string, string>} [tabBarStyle] タブバーに付与する追加スタイル
 * @property {boolean} [hideAdd] editable-card の追加ボタンを非表示にするか
 * @property {m.Children} [addIcon] 追加ボタンの表示内容
 * @property {boolean} [destroyInactiveTabPane] 非アクティブペインを破棄するか
 * @property {boolean} [animated] ペイン切替アニメーション有無
 * @property {string} [class] 追加クラス
 * @property {Record<string, string>} [style] 追加スタイル
 */
export type TabsClassicAttrs = {
    items: TabsClassicItem[];
    activeKey?: string;
    defaultActiveKey?: string;
    onChange?: (activeKey: string) => void;
    onTabClick?: (key: string, event: MouseEvent) => void;
    onEdit?: (targetKey: string | MouseEvent, action: TabsClassicOnEditAction) => void;
    type?: TabsClassicType;
    tabPosition?: TabsClassicPosition;
    size?: TabsClassicSize;
    centered?: boolean;
    tabBarGutter?: number;
    tabBarStyle?: Record<string, string>;
    hideAdd?: boolean;
    addIcon?: m.Children;
    destroyInactiveTabPane?: boolean;
    animated?: boolean;
    class?: string;
    style?: Record<string, string>;
};
/**
 * @class TabsClassic
 * @description
 * Ant Design TabsClassic と Ark UI TabsClassic の操作感を参考にしたタブコンポーネントです。
 * line / card / editable-card をサポートし、制御モードと非制御モードの両方に対応します。
 */
export declare class TabsClassic implements m.Component<TabsClassicAttrs> {
    /** 非制御モード時の内部アクティブキー */
    private internalActiveKey;
    /** 一度でも描画したペインのキーを保持し lazy 描画に利用する */
    private renderedKeys;
    /** キーボードナビゲーション用のタブボタン参照 */
    private tabRefs;
    /** ARIA 関連 ID の接頭辞 */
    private readonly uid;
    /** インスタンスごとの ID 採番用カウンタ */
    private static seed;
    /**
     * @method oninit
     * @description 初回表示時に妥当なアクティブキーを決定します。
     * @param {m.Vnode<TabsClassicAttrs>} vnode Mithril 仮想ノード
     */
    oninit(vnode: m.Vnode<TabsClassicAttrs>): void;
    /**
     * @method onbeforeupdate
     * @description 属性更新時にアクティブキーと描画済みペインを同期します。
     * @param {m.Vnode<TabsClassicAttrs>} vnode Mithril 仮想ノード
     * @returns {boolean} 常に true
     */
    onbeforeupdate(vnode: m.Vnode<TabsClassicAttrs>): boolean;
    /**
     * @method onremove
     * @description コンポーネント破棄時に参照を開放します。
     */
    onremove(): void;
    /**
     * @method getCurrentActiveKey
     * @description 現在有効なアクティブキーを返します。
     * @param {TabsClassicAttrs} attrs コンポーネント属性
     * @returns {string} 現在のアクティブキー
     */
    private getCurrentActiveKey;
    /**
     * @method resolveActiveKey
     * @description 利用可能なタブ一覧から妥当なアクティブキーを解決します。
     * @param {TabsClassicAttrs} attrs コンポーネント属性
     * @returns {string} 解決されたアクティブキー
     */
    private resolveActiveKey;
    /**
     * @method isTabAvailable
     * @description 指定キーのタブが存在し、かつ選択可能か判定します。
     * @param {TabsClassicItem[]} items タブ一覧
     * @param {string} key 判定対象キー
     * @returns {boolean} 選択可能なら true
     */
    private isTabAvailable;
    /**
     * @method selectTab
     * @description 指定キーのタブをアクティブ化し、必要なイベントを通知します。
     * @param {TabsClassicAttrs} attrs コンポーネント属性
     * @param {string} key アクティブ化するキー
     */
    private selectTab;
    /**
     * @method handleTabClick
     * @description クリック起点のタブ切り替えを処理します。
     * @param {TabsClassicAttrs} attrs コンポーネント属性
     * @param {string} key 対象キー
     * @param {MouseEvent} event 元イベント
     */
    private handleTabClick;
    /**
     * @method handleAdd
     * @description editable-card の追加ボタン押下を通知します。
     * @param {TabsClassicAttrs} attrs コンポーネント属性
     * @param {MouseEvent} event 元イベント
     */
    private handleAdd;
    /**
     * @method handleRemove
     * @description editable-card の削除操作を通知します。
     * @param {TabsClassicAttrs} attrs コンポーネント属性
     * @param {string} key 対象タブキー
     * @param {MouseEvent} event 元イベント
     */
    private handleRemove;
    /**
     * @method moveFocus
     * @description キーボード操作でフォーカス対象タブを移動します。
     * @param {TabsClassicAttrs} attrs コンポーネント属性
     * @param {string} currentKey 現在フォーカス中のキー
     * @param {number} delta 相対移動量
     */
    private moveFocus;
    /**
     * @method focusEdge
     * @description 先頭または末尾の有効タブへフォーカスします。
     * @param {TabsClassicAttrs} attrs コンポーネント属性
     * @param {"first" | "last"} position 移動先
     */
    private focusEdge;
    /**
     * @method handleKeydown
     * @description WAI-ARIA TabsClassic に沿ったキーボード操作を処理します。
     * @param {TabsClassicAttrs} attrs コンポーネント属性
     * @param {TabsClassicItem} item 対象タブ
     * @param {KeyboardEvent} event キーボードイベント
     */
    private handleKeydown;
    /**
     * @method getTabButtonStyle
     * @description タブ間余白のスタイルを向きに応じて返します。
     * @param {TabsClassicAttrs} attrs コンポーネント属性
     * @param {number} index 現在のインデックス
     * @returns {Record<string, string> | undefined} 追加スタイル
     */
    private getTabButtonStyle;
    /**
     * @method renderTabNav
     * @description タブ見出し領域を描画します。
     * @param {m.Vnode<TabsClassicAttrs>} vnode Mithril 仮想ノード
     * @param {string} activeKey 現在のアクティブキー
     * @returns {m.Children} タブナビゲーション
     */
    private renderTabNav;
    /**
     * @method resolveOrientation
     * @description 配置位置から ARIA 用の orientation を返します。
     * @param {TabsClassicPosition} [tabPosition] タブ配置
     * @returns {"horizontal" | "vertical"} 向き
     */
    private resolveOrientation;
    /**
     * @method renderTabContent
     * @description タブ本文領域を描画します。
     * @param {m.Vnode<TabsClassicAttrs>} vnode Mithril 仮想ノード
     * @param {string} activeKey 現在のアクティブキー
     * @returns {m.Children} タブ本文
     */
    private renderTabContent;
    /**
     * @method view
     * @description TabsClassic 全体を描画します。
     * @param {m.Vnode<TabsClassicAttrs>} vnode Mithril 仮想ノード
     * @returns {m.Children} レンダリング結果
     */
    view(vnode: m.Vnode<TabsClassicAttrs>): JSX.Element;
}
//# sourceMappingURL=TabsClassic.d.ts.map