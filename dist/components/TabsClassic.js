/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import "./TabsClassic.scss";
/**
 * @class TabsClassic
 * @description
 * Ant Design TabsClassic と Ark UI TabsClassic の操作感を参考にしたタブコンポーネントです。
 * line / card / editable-card をサポートし、制御モードと非制御モードの両方に対応します。
 */
export class TabsClassic {
    constructor() {
        /** 非制御モード時の内部アクティブキー */
        this.internalActiveKey = "";
        /** 一度でも描画したペインのキーを保持し lazy 描画に利用する */
        this.renderedKeys = new Set();
        /** キーボードナビゲーション用のタブボタン参照 */
        this.tabRefs = new Map();
        /** ARIA 関連 ID の接頭辞 */
        this.uid = `mku-tabs-${TabsClassic.seed++}`;
    }
    /**
     * @method oninit
     * @description 初回表示時に妥当なアクティブキーを決定します。
     * @param {m.Vnode<TabsClassicAttrs>} vnode Mithril 仮想ノード
     */
    oninit(vnode) {
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
    onbeforeupdate(vnode) {
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
    onremove() {
        this.tabRefs.clear();
    }
    /**
     * @method getCurrentActiveKey
     * @description 現在有効なアクティブキーを返します。
     * @param {TabsClassicAttrs} attrs コンポーネント属性
     * @returns {string} 現在のアクティブキー
     */
    getCurrentActiveKey(attrs) {
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
    resolveActiveKey(attrs) {
        const items = attrs.items ?? [];
        if (items.length === 0) {
            return "";
        }
        const candidates = [attrs.activeKey, this.internalActiveKey, attrs.defaultActiveKey].filter((value) => !!value);
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
    isTabAvailable(items, key) {
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
    selectTab(attrs, key) {
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
    handleTabClick(attrs, key, event) {
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
    handleAdd(attrs, event) {
        attrs.onEdit?.(event, "add");
    }
    /**
     * @method handleRemove
     * @description editable-card の削除操作を通知します。
     * @param {TabsClassicAttrs} attrs コンポーネント属性
     * @param {string} key 対象タブキー
     * @param {MouseEvent} event 元イベント
     */
    handleRemove(attrs, key, event) {
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
    moveFocus(attrs, currentKey, delta) {
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
    focusEdge(attrs, position) {
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
    handleKeydown(attrs, item, event) {
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
    getTabButtonStyle(attrs, index) {
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
    renderTabNav(vnode, activeKey) {
        const attrs = vnode.attrs;
        const type = attrs.type ?? "line";
        const showAdd = type === "editable-card" && !attrs.hideAdd;
        return (m("div", { class: classNames("mku-tabs-nav", {
                "mku-tabs-nav-centered": !!attrs.centered,
            }), style: attrs.tabBarStyle },
            m("div", { class: "mku-tabs-nav-wrap" },
                m("div", { class: "mku-tabs-nav-list", role: "tablist", "aria-orientation": this.resolveOrientation(attrs.tabPosition) }, attrs.items.map((item, index) => {
                    const isActive = item.key === activeKey;
                    const closable = type === "editable-card" && (item.closable ?? true) && !item.disabled;
                    const tabId = `${this.uid}-tab-${item.key}`;
                    const panelId = `${this.uid}-panel-${item.key}`;
                    return (m("button", { type: "button", key: item.key, id: tabId, class: classNames("mku-tabs-tab", {
                            "mku-tabs-tab-active": isActive,
                            "mku-tabs-tab-disabled": !!item.disabled,
                        }), style: this.getTabButtonStyle(attrs, index), role: "tab", "aria-selected": isActive, "aria-controls": panelId, "aria-disabled": item.disabled ? "true" : "false", tabindex: isActive ? 0 : -1, onclick: (event) => this.handleTabClick(attrs, item.key, event), onkeydown: (event) => this.handleKeydown(attrs, item, event), oncreate: (ref) => this.tabRefs.set(item.key, ref.dom), onupdate: (ref) => this.tabRefs.set(item.key, ref.dom), onremove: () => this.tabRefs.delete(item.key) },
                        m("span", { class: "mku-tabs-tab-label" }, item.label),
                        closable ? (m("span", { class: "mku-tabs-tab-remove", role: "button", "aria-label": "\u30BF\u30D6\u3092\u9589\u3058\u308B", onclick: (event) => this.handleRemove(attrs, item.key, event) }, "\u00D7")) : null));
                }))),
            showAdd ? (m("button", { type: "button", class: "mku-tabs-add-btn", onclick: (event) => this.handleAdd(attrs, event), "aria-label": "\u30BF\u30D6\u3092\u8FFD\u52A0" }, attrs.addIcon ?? "+")) : null));
    }
    /**
     * @method resolveOrientation
     * @description 配置位置から ARIA 用の orientation を返します。
     * @param {TabsClassicPosition} [tabPosition] タブ配置
     * @returns {"horizontal" | "vertical"} 向き
     */
    resolveOrientation(tabPosition) {
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
    renderTabContent(vnode, activeKey) {
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
        return (m("div", { class: classNames("mku-tabs-content", { "mku-tabs-content-animated": attrs.animated !== false }) }, renderableItems.map((item) => {
            const isActive = item.key === activeKey;
            return (m("div", { key: item.key, id: `${this.uid}-panel-${item.key}`, class: classNames("mku-tabs-tabpane", item.class, {
                    "mku-tabs-tabpane-active": isActive,
                }), role: "tabpanel", "aria-labelledby": `${this.uid}-tab-${item.key}`, hidden: !isActive }, item.children));
        })));
    }
    /**
     * @method view
     * @description TabsClassic 全体を描画します。
     * @param {m.Vnode<TabsClassicAttrs>} vnode Mithril 仮想ノード
     * @returns {m.Children} レンダリング結果
     */
    view(vnode) {
        const attrs = vnode.attrs;
        const activeKey = this.getCurrentActiveKey(attrs);
        const type = attrs.type ?? "line";
        const size = attrs.size ?? "middle";
        const tabPosition = attrs.tabPosition ?? "top";
        if (activeKey) {
            this.renderedKeys.add(activeKey);
        }
        return (m("div", { class: classNames("mku-tabs", `mku-tabs-${type}`, `mku-tabs-${tabPosition}`, `mku-tabs-${size}`, attrs.class), style: attrs.style },
            this.renderTabNav(vnode, activeKey),
            this.renderTabContent(vnode, activeKey)));
    }
}
/** インスタンスごとの ID 採番用カウンタ */
TabsClassic.seed = 1;
