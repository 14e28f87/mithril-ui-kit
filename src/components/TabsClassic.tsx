/** @jsx m */
import m from "mithril";
import classNames from "classnames";
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
export class TabsClassic implements m.Component<TabsClassicAttrs> {
    /** 非制御モード時の内部アクティブキー */
    private internalActiveKey = "";

    /** 一度でも描画したペインのキーを保持し lazy 描画に利用する */
    private renderedKeys = new Set<string>();

    /** キーボードナビゲーション用のタブボタン参照 */
    private tabRefs = new Map<string, HTMLButtonElement>();

    /** ARIA 関連 ID の接頭辞 */
    private readonly uid = `mku-tabs-${TabsClassic.seed++}`;

    /** インスタンスごとの ID 採番用カウンタ */
    private static seed = 1;

    /**
     * @method oninit
     * @description 初回表示時に妥当なアクティブキーを決定します。
     * @param {m.Vnode<TabsClassicAttrs>} vnode Mithril 仮想ノード
     */
    public oninit(vnode: m.Vnode<TabsClassicAttrs>) {
        this.internalActiveKey = this.resolveActiveKey(vnode.attrs);
        if (this.internalActiveKey) {
            this.renderedKeys.add(this.internalActiveKey);
        }
    }

    /**
     * @method onbeforeupdate
     * @description 属性更新時にアクティブキーと描画済みペインを同期します。
     * @param {m.Vnode<TabsClassicAttrs>} vnode Mithril 仮想ノード
     * @returns {boolean} 常に true
     */
    public onbeforeupdate(vnode: m.Vnode<TabsClassicAttrs>) {
        const nextActiveKey = this.resolveActiveKey(vnode.attrs);

        if (nextActiveKey !== this.getCurrentActiveKey(vnode.attrs)) {
            this.internalActiveKey = nextActiveKey;
        }

        if (nextActiveKey) {
            this.renderedKeys.add(nextActiveKey);
        }

        return true;
    }

    /**
     * @method onremove
     * @description コンポーネント破棄時に参照を開放します。
     */
    public onremove() {
        this.tabRefs.clear();
    }

    /**
     * @method getCurrentActiveKey
     * @description 現在有効なアクティブキーを返します。
     * @param {TabsClassicAttrs} attrs コンポーネント属性
     * @returns {string} 現在のアクティブキー
     */
    private getCurrentActiveKey(attrs: TabsClassicAttrs): string {
        const activeKey = attrs.activeKey ?? this.internalActiveKey;

        if (this.isTabAvailable(attrs.items, activeKey)) {
            return activeKey;
        }

        return this.resolveActiveKey(attrs);
    }

    /**
     * @method resolveActiveKey
     * @description 利用可能なタブ一覧から妥当なアクティブキーを解決します。
     * @param {TabsClassicAttrs} attrs コンポーネント属性
     * @returns {string} 解決されたアクティブキー
     */
    private resolveActiveKey(attrs: TabsClassicAttrs): string {
        const items = attrs.items ?? [];

        if (items.length === 0) {
            return "";
        }

        const candidates = [attrs.activeKey, this.internalActiveKey, attrs.defaultActiveKey].filter(
            (value): value is string => !!value
        );

        for (const candidate of candidates) {
            if (this.isTabAvailable(items, candidate)) {
                return candidate;
            }
        }

        const firstEnabled = items.find((item) => !item.disabled);
        if (firstEnabled) {
            return firstEnabled.key;
        }

        return items[0].key;
    }

    /**
     * @method isTabAvailable
     * @description 指定キーのタブが存在し、かつ選択可能か判定します。
     * @param {TabsClassicItem[]} items タブ一覧
     * @param {string} key 判定対象キー
     * @returns {boolean} 選択可能なら true
     */
    private isTabAvailable(items: TabsClassicItem[], key?: string): key is string {
        if (!key) {
            return false;
        }

        return items.some((item) => item.key === key && !item.disabled);
    }

    /**
     * @method selectTab
     * @description 指定キーのタブをアクティブ化し、必要なイベントを通知します。
     * @param {TabsClassicAttrs} attrs コンポーネント属性
     * @param {string} key アクティブ化するキー
     */
    private selectTab(attrs: TabsClassicAttrs, key: string) {
        if (!this.isTabAvailable(attrs.items, key)) {
            return;
        }

        const current = this.getCurrentActiveKey(attrs);
        if (current === key) {
            return;
        }

        if (attrs.activeKey == null) {
            this.internalActiveKey = key;
        }

        this.renderedKeys.add(key);
        attrs.onChange?.(key);
    }

    /**
     * @method handleTabClick
     * @description クリック起点のタブ切り替えを処理します。
     * @param {TabsClassicAttrs} attrs コンポーネント属性
     * @param {string} key 対象キー
     * @param {MouseEvent} event 元イベント
     */
    private handleTabClick(attrs: TabsClassicAttrs, key: string, event: MouseEvent) {
        if (!this.isTabAvailable(attrs.items, key)) {
            return;
        }

        attrs.onTabClick?.(key, event);
        this.selectTab(attrs, key);
    }

    /**
     * @method handleAdd
     * @description editable-card の追加ボタン押下を通知します。
     * @param {TabsClassicAttrs} attrs コンポーネント属性
     * @param {MouseEvent} event 元イベント
     */
    private handleAdd(attrs: TabsClassicAttrs, event: MouseEvent) {
        attrs.onEdit?.(event, "add");
    }

    /**
     * @method handleRemove
     * @description editable-card の削除操作を通知します。
     * @param {TabsClassicAttrs} attrs コンポーネント属性
     * @param {string} key 対象タブキー
     * @param {MouseEvent} event 元イベント
     */
    private handleRemove(attrs: TabsClassicAttrs, key: string, event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();
        attrs.onEdit?.(key, "remove");
    }

    /**
     * @method moveFocus
     * @description キーボード操作でフォーカス対象タブを移動します。
     * @param {TabsClassicAttrs} attrs コンポーネント属性
     * @param {string} currentKey 現在フォーカス中のキー
     * @param {number} delta 相対移動量
     */
    private moveFocus(attrs: TabsClassicAttrs, currentKey: string, delta: number) {
        const enabledItems = (attrs.items ?? []).filter((item) => !item.disabled);
        if (enabledItems.length === 0) {
            return;
        }

        const currentIndex = Math.max(0, enabledItems.findIndex((item) => item.key === currentKey));
        const nextIndex = (currentIndex + delta + enabledItems.length) % enabledItems.length;
        const nextKey = enabledItems[nextIndex]?.key;

        if (!nextKey) {
            return;
        }

        this.tabRefs.get(nextKey)?.focus();
    }

    /**
     * @method focusEdge
     * @description 先頭または末尾の有効タブへフォーカスします。
     * @param {TabsClassicAttrs} attrs コンポーネント属性
     * @param {"first" | "last"} position 移動先
     */
    private focusEdge(attrs: TabsClassicAttrs, position: "first" | "last") {
        const enabledItems = (attrs.items ?? []).filter((item) => !item.disabled);
        if (enabledItems.length === 0) {
            return;
        }

        const target = position === "first" ? enabledItems[0] : enabledItems[enabledItems.length - 1];
        this.tabRefs.get(target.key)?.focus();
    }

    /**
     * @method handleKeydown
     * @description WAI-ARIA TabsClassic に沿ったキーボード操作を処理します。
     * @param {TabsClassicAttrs} attrs コンポーネント属性
     * @param {TabsClassicItem} item 対象タブ
     * @param {KeyboardEvent} event キーボードイベント
     */
    private handleKeydown(attrs: TabsClassicAttrs, item: TabsClassicItem, event: KeyboardEvent) {
        const isVertical = this.resolveOrientation(attrs.tabPosition) === "vertical";

        if (event.key === "Home") {
            event.preventDefault();
            this.focusEdge(attrs, "first");
            return;
        }

        if (event.key === "End") {
            event.preventDefault();
            this.focusEdge(attrs, "last");
            return;
        }

        if ((!isVertical && event.key === "ArrowRight") || (isVertical && event.key === "ArrowDown")) {
            event.preventDefault();
            this.moveFocus(attrs, item.key, 1);
            return;
        }

        if ((!isVertical && event.key === "ArrowLeft") || (isVertical && event.key === "ArrowUp")) {
            event.preventDefault();
            this.moveFocus(attrs, item.key, -1);
            return;
        }

        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            this.selectTab(attrs, item.key);
        }
    }

    /**
     * @method getTabButtonStyle
     * @description タブ間余白のスタイルを向きに応じて返します。
     * @param {TabsClassicAttrs} attrs コンポーネント属性
     * @param {number} index 現在のインデックス
     * @returns {Record<string, string> | undefined} 追加スタイル
     */
    private getTabButtonStyle(attrs: TabsClassicAttrs, index: number): Record<string, string> | undefined {
        if (attrs.tabBarGutter == null || index >= attrs.items.length - 1) {
            return undefined;
        }

        const orientation = this.resolveOrientation(attrs.tabPosition);
        if (orientation === "vertical") {
            return { marginBottom: `${attrs.tabBarGutter}px` };
        }

        return { marginRight: `${attrs.tabBarGutter}px` };
    }

    /**
     * @method renderTabNav
     * @description タブ見出し領域を描画します。
     * @param {m.Vnode<TabsClassicAttrs>} vnode Mithril 仮想ノード
     * @param {string} activeKey 現在のアクティブキー
     * @returns {m.Children} タブナビゲーション
     */
    private renderTabNav(vnode: m.Vnode<TabsClassicAttrs>, activeKey: string): m.Children {
        const attrs = vnode.attrs;
        const type = attrs.type ?? "line";
        const showAdd = type === "editable-card" && !attrs.hideAdd;

        return (
            <div
                class={classNames("mku-tabs-nav", {
                    "mku-tabs-nav-centered": !!attrs.centered,
                })}
                style={attrs.tabBarStyle}
            >
                <div class="mku-tabs-nav-wrap">
                    <div
                        class="mku-tabs-nav-list"
                        role="tablist"
                        aria-orientation={this.resolveOrientation(attrs.tabPosition)}
                    >
                        {attrs.items.map((item, index) => {
                            const isActive = item.key === activeKey;
                            const closable = type === "editable-card" && (item.closable ?? true) && !item.disabled;
                            const tabId = `${this.uid}-tab-${item.key}`;
                            const panelId = `${this.uid}-panel-${item.key}`;

                            return (
                                <button
                                    type="button"
                                    key={item.key}
                                    id={tabId}
                                    class={classNames("mku-tabs-tab", {
                                        "mku-tabs-tab-active": isActive,
                                        "mku-tabs-tab-disabled": !!item.disabled,
                                    })}
                                    style={this.getTabButtonStyle(attrs, index)}
                                    role="tab"
                                    aria-selected={isActive}
                                    aria-controls={panelId}
                                    aria-disabled={item.disabled ? "true" : "false"}
                                    tabindex={isActive ? 0 : -1}
                                    onclick={(event: MouseEvent) => this.handleTabClick(attrs, item.key, event)}
                                    onkeydown={(event: KeyboardEvent) => this.handleKeydown(attrs, item, event)}
                                    oncreate={(ref) => this.tabRefs.set(item.key, ref.dom as HTMLButtonElement)}
                                    onupdate={(ref) => this.tabRefs.set(item.key, ref.dom as HTMLButtonElement)}
                                    onremove={() => this.tabRefs.delete(item.key)}
                                >
                                    <span class="mku-tabs-tab-label">{item.label}</span>
                                    {closable ? (
                                        <span
                                            class="mku-tabs-tab-remove"
                                            role="button"
                                            aria-label="タブを閉じる"
                                            onclick={(event: MouseEvent) => this.handleRemove(attrs, item.key, event)}
                                        >
                                            ×
                                        </span>
                                    ) : null}
                                </button>
                            );
                        })}
                    </div>
                </div>
                {showAdd ? (
                    <button
                        type="button"
                        class="mku-tabs-add-btn"
                        onclick={(event: MouseEvent) => this.handleAdd(attrs, event)}
                        aria-label="タブを追加"
                    >
                        {attrs.addIcon ?? "+"}
                    </button>
                ) : null}
            </div>
        );
    }

    /**
     * @method resolveOrientation
     * @description 配置位置から ARIA 用の orientation を返します。
     * @param {TabsClassicPosition} [tabPosition] タブ配置
     * @returns {"horizontal" | "vertical"} 向き
     */
    private resolveOrientation(tabPosition?: TabsClassicPosition): "horizontal" | "vertical" {
        if (tabPosition === "left" || tabPosition === "right") {
            return "vertical";
        }

        return "horizontal";
    }

    /**
     * @method renderTabContent
     * @description タブ本文領域を描画します。
     * @param {m.Vnode<TabsClassicAttrs>} vnode Mithril 仮想ノード
     * @param {string} activeKey 現在のアクティブキー
     * @returns {m.Children} タブ本文
     */
    private renderTabContent(vnode: m.Vnode<TabsClassicAttrs>, activeKey: string): m.Children {
        const attrs = vnode.attrs;
        const destroyInactive = attrs.destroyInactiveTabPane ?? false;
        const renderableItems = attrs.items.filter((item) => {
            const isActive = item.key === activeKey;
            const shouldRender = item.forceRender || isActive || this.renderedKeys.has(item.key);

            if (!shouldRender) {
                return false;
            }

            if (destroyInactive && !isActive) {
                return false;
            }

            return true;
        });

        return (
            <div class={classNames("mku-tabs-content", { "mku-tabs-content-animated": attrs.animated !== false })}>
                {renderableItems.map((item) => {
                    const isActive = item.key === activeKey;

                    return (
                        <div
                            key={item.key}
                            id={`${this.uid}-panel-${item.key}`}
                            class={classNames("mku-tabs-tabpane", item.class, {
                                "mku-tabs-tabpane-active": isActive,
                            })}
                            role="tabpanel"
                            aria-labelledby={`${this.uid}-tab-${item.key}`}
                            hidden={!isActive}
                        >
                            {item.children}
                        </div>
                    );
                })}
            </div>
        );
    }

    /**
     * @method view
     * @description TabsClassic 全体を描画します。
     * @param {m.Vnode<TabsClassicAttrs>} vnode Mithril 仮想ノード
     * @returns {m.Children} レンダリング結果
     */
    public view(vnode: m.Vnode<TabsClassicAttrs>) {
        const attrs = vnode.attrs;
        const activeKey = this.getCurrentActiveKey(attrs);
        const type = attrs.type ?? "line";
        const size = attrs.size ?? "middle";
        const tabPosition = attrs.tabPosition ?? "top";

        if (activeKey) {
            this.renderedKeys.add(activeKey);
        }

        return (
            <div
                class={classNames(
                    "mku-tabs",
                    `mku-tabs-${type}`,
                    `mku-tabs-${tabPosition}`,
                    `mku-tabs-${size}`,
                    attrs.class
                )}
                style={attrs.style}
            >
                {this.renderTabNav(vnode, activeKey)}
                {this.renderTabContent(vnode, activeKey)}
            </div>
        );
    }
}