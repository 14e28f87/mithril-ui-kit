/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import { autoUpdate, computePosition, flip, offset, shift, arrow, type Placement } from "@floating-ui/dom";
import styles from "./DropdownClassic.module.scss";

type DropdownTrigger = "click" | "contextMenu";

type VirtualReference = {
    getBoundingClientRect: () => DOMRect;
};

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
export class DropdownClassic implements m.ClassComponent<DropdownClassicAttrs> {
    private open = false;
    private referenceEl?: HTMLElement;
    private floatingEl?: HTMLElement;
    private arrowEl?: HTMLElement;
    private contextMenuPoint?: { x: number; y: number };
    private portal?: HTMLElement;
    private cleanupAutoUpdate?: () => void;
    private cleanupOutsideClose?: () => void;
    private uid = `mku-dropdown-${DropdownClassic.seed++}`;
    private static seed = 1;

    /**
     * コンポーネント初期化時に非制御モード用の開閉状態を設定します。
     *
     * @param vnode Mithril の仮想ノード
     */
    oninit(vnode: m.Vnode<DropdownClassicAttrs>) {
        this.open = vnode.attrs.defaultOpen ?? false;
    }

    /**
     * 初回描画後にポータルを準備し、必要に応じてポップアップを描画します。
     *
     * @param vnode Mithril の DOM 付き仮想ノード
     */
    oncreate(vnode: m.VnodeDOM<DropdownClassicAttrs>) {
        this.ensurePortal();
        this.renderFloating(vnode.attrs);
    }

    /**
     * 更新時に現在の属性に合わせてポップアップ描画を再計算します。
     *
     * @param vnode Mithril の DOM 付き仮想ノード
     */
    onupdate(vnode: m.VnodeDOM<DropdownClassicAttrs>) {
        this.renderFloating(vnode.attrs);
    }

    /**
     * コンポーネント破棄時にイベント・監視・ポータルをクリーンアップします。
     */
    onremove() {
        this.teardownAutoUpdate();
        this.teardownOutsideClose();
        this.destroyPortal();
    }

    /**
     * トリガー要素（ボタンまたは右クリック領域）を描画します。
     *
     * @param vnode Mithril の仮想ノード
     * @returns トリガー要素の仮想ノード
     */
    view(vnode: m.Vnode<DropdownClassicAttrs>) {
        const attrs = vnode.attrs;
        const isOpen = this.getOpenState(attrs);
        const triggers = this.normalizeTriggers(attrs.trigger);
        const triggerClass = classNames(styles.dropdownToggle, attrs.class, {
            [styles.dropdownMenuShow]: isOpen,
        });

        if (triggers.contextMenu) {
            return (
                <div class={classNames(styles.dropdown, attrs.rootClass)}>
                    <div
                        class={attrs.class}
                        id={this.uid}
                        aria-expanded={isOpen}
                        aria-disabled={attrs.disabled}
                        role="button"
                        tabindex={attrs.disabled ? -1 : 0}
                        onclick={triggers.click ? () => this.handleToggle(attrs) : undefined}
                        oncontextmenu={(event: MouseEvent) => this.handleContextMenu(event, attrs)}
                        oncreate={(v) => {
                            this.referenceEl = v.dom as HTMLElement;
                            this.renderFloating(attrs);
                        }}
                        onupdate={(v) => {
                            this.referenceEl = v.dom as HTMLElement;
                        }}
                    >
                        {vnode.children}
                    </div>
                </div>
            );
        }

        return (
            <div class={classNames(styles.dropdown, attrs.rootClass)}>
                <button
                    class={triggerClass}
                    type="button"
                    id={this.uid}
                    aria-expanded={isOpen}
                    disabled={attrs.disabled}
                    onclick={() => this.handleToggle(attrs)}
                    oncreate={(v) => {
                        this.referenceEl = v.dom as HTMLElement;
                        this.renderFloating(attrs);
                    }}
                    onupdate={(v) => {
                        this.referenceEl = v.dom as HTMLElement;
                    }}
                >
                    {vnode.children}
                </button>
            </div>
        );
    }

    /**
     * クリックトリガー時に開閉状態をトグルします。
     *
     * @param attrs Dropdown の属性
     */
    private handleToggle(attrs: DropdownClassicAttrs) {
        if (attrs.disabled) return;
        const next = !this.getOpenState(attrs);
        this.setOpen(next, attrs);
    }

    /**
     * コンテキストメニュートリガー時に表示座標を記録して開きます。
     *
     * @param event マウスイベント
     * @param attrs Dropdown の属性
     */
    private handleContextMenu(event: MouseEvent, attrs: DropdownClassicAttrs) {
        if (attrs.disabled) return;
        event.preventDefault();
        this.contextMenuPoint = {
            x: event.clientX,
            y: event.clientY,
        };
        this.setOpen(true, attrs);
    }

    /**
     * `trigger` 属性を正規化し、クリック/右クリックの有効状態を返します。
     *
     * @param trigger トリガー指定
     * @returns 正規化済みトリガー情報
     */
    private normalizeTriggers(trigger?: DropdownTrigger | DropdownTrigger[]) {
        const values = Array.isArray(trigger) ? trigger : (trigger ? [trigger] : ["click"]);
        return {
            click: values.includes("click"),
            contextMenu: values.includes("contextMenu"),
        };
    }

    /**
     * `open` 属性による制御モードかどうかを判定します。
     *
     * @param attrs Dropdown の属性
     * @returns 制御モードなら `true`
     */
    private isControlled(attrs: DropdownClassicAttrs) {
        return typeof attrs.open === "boolean";
    }

    /**
     * 現在の開閉状態を取得します。
     * 制御モードでは `attrs.open`、非制御モードでは内部状態を返します。
     *
     * @param attrs Dropdown の属性
     * @returns 現在の開閉状態
     */
    private getOpenState(attrs: DropdownClassicAttrs) {
        return this.isControlled(attrs) ? !!attrs.open : this.open;
    }

    /**
     * 開閉状態を更新し、必要な副作用（コールバック・再描画・後始末）を実行します。
     *
     * @param next 次の開閉状態
     * @param attrs Dropdown の属性
     */
    private setOpen(next: boolean, attrs: DropdownClassicAttrs) {
        const prev = this.getOpenState(attrs);
        if (!this.isControlled(attrs)) {
            this.open = next;
        }
        if (!next) {
            this.contextMenuPoint = undefined;
            this.teardownOutsideClose();
        }
        if (prev !== next) {
            attrs.onOpenChange?.(next);
        }
        this.renderFloating(attrs);
    }

    /**
     * ポップアップ描画先となるポータル要素を `document.body` に作成します。
     */
    private ensurePortal() {
        if (!this.portal) {
            this.portal = document.createElement("div");
            this.portal.className = "mku-dropdown-portal";
            document.body.appendChild(this.portal);
        }
    }

    /**
     * ポータルを破棄し、Mithril 管理下のノードも明示的にアンマウントします。
     */
    private destroyPortal() {
        if (this.portal) {
            m.render(this.portal, []);
            document.body.removeChild(this.portal);
            this.portal = undefined;
        }
    }

    /**
     * Floating UI の `autoUpdate` 監視を解除します。
     */
    private teardownAutoUpdate() {
        if (this.cleanupAutoUpdate) {
            this.cleanupAutoUpdate();
            this.cleanupAutoUpdate = undefined;
        }
    }

    /**
     * 外側クリック監視を解除します。
     */
    private teardownOutsideClose() {
        if (this.cleanupOutsideClose) {
            this.cleanupOutsideClose();
            this.cleanupOutsideClose = undefined;
        }
    }

    /**
     * ポップアップ外クリックで閉じるためのイベント監視を設定します。
     *
     * @param attrs Dropdown の属性
     */
    private setupOutsideClose(attrs: DropdownClassicAttrs) {
        this.teardownOutsideClose();
        const triggers = this.normalizeTriggers(attrs.trigger);
        const shouldCloseOnOutsideClick = attrs.closeOnOutsideClick ?? triggers.contextMenu;

        if (!shouldCloseOnOutsideClick) {
            return;
        }

        const handleMouseDown = (event: MouseEvent) => {
            if (event.button !== 0) return;
            if (!this.getOpenState(attrs)) return;

            const targetNode = event.target as Node | null;
            if (!targetNode) return;

            if (this.floatingEl?.contains(targetNode)) {
                return;
            }

            if (triggers.click && this.referenceEl?.contains(targetNode)) {
                return;
            }

            this.setOpen(false, attrs);
            m.redraw();
        };

        document.addEventListener("mousedown", handleMouseDown, true);
        this.cleanupOutsideClose = () => {
            document.removeEventListener("mousedown", handleMouseDown, true);
        };
    }

    /**
     * ポップアップ本体をポータルへ描画し、位置計算・追従更新を設定します。
     *
     * @param attrs Dropdown の属性
     */
    private renderFloating(attrs: DropdownClassicAttrs) {
        if (!this.portal) return;

        const isOpen = this.getOpenState(attrs);
        if (!isOpen) {
            this.teardownAutoUpdate();
            this.teardownOutsideClose();
            m.render(this.portal, []);
            this.floatingEl = undefined;
            return;
        }

        const triggers = this.normalizeTriggers(attrs.trigger);
        const useContextPoint = triggers.contextMenu && !!this.contextMenuPoint;
        const reference: HTMLElement | VirtualReference | undefined = useContextPoint
            ? this.createVirtualReference(this.contextMenuPoint!)
            : this.referenceEl;

        if (!reference) return;

        const popupNode = attrs.popupRender ? attrs.popupRender() : this.renderMenu(attrs);

        m.render(this.portal, (
            <div class="mku-dropdown-popup-root">
                {popupNode}
            </div>
        ));

        const popupEl = this.portal.firstElementChild as HTMLElement | null;
        if (!popupEl) return;

        this.floatingEl = popupEl;
        this.setupOutsideClose(attrs);

        // Floating UI で位置調整
        this.teardownAutoUpdate();
        const strategy = useContextPoint ? "fixed" : "absolute";
        const updatePosition = () => {
            computePosition(reference as any, this.floatingEl!, {
                strategy,
                placement: attrs.placement ?? "bottom-start",
                middleware: [
                    offset(attrs.offset ?? 2),
                    flip(),
                    shift(),
                ],
            }).then(({ x, y }) => {
                Object.assign(this.floatingEl!.style, {
                    position: strategy,
                    left: `${x}px`,
                    top: `${y}px`,
                    zIndex: "1050",
                });
            });
        };

        updatePosition();

        if (!useContextPoint && this.referenceEl) {
            this.cleanupAutoUpdate = autoUpdate(this.referenceEl, this.floatingEl, updatePosition);
        }
    }

    /**
     * 標準メニュー部分の Mithril ノードを生成します。
     * `popupRender` が未指定の場合はこのノードがそのまま表示されます。
     *
     * @param attrs Dropdown の属性
     * @returns メニューの Mithril ノード
     */
    private renderMenu(attrs: DropdownClassicAttrs): m.Children {
        const menuItems = attrs.menu ?? [];

        return (
            <div class={classNames(styles.dropdownMenu, styles.dropdownMenuShow)} aria-labelledby={this.uid}>
                {menuItems.map((item) => {
                    if (item.divider) {
                        return (
                            <li key={item.key}>
                                <hr class={styles.dropdownDivider} />
                            </li>
                        );
                    }

                    return (
                        <li key={item.key}>
                            <a
                                class={classNames(styles.dropdownItem, {
                                    disabled: item.disabled,
                                })}
                                href="#"
                                onclick={(event: MouseEvent) => {
                                    event.preventDefault();
                                    if (!item.disabled && item.onClick) {
                                        item.onClick();
                                        this.setOpen(false, attrs);
                                    }
                                }}
                            >
                                {item.label}
                            </a>
                        </li>
                    );
                })}
            </div>
        );
    }

    /**
     * 右クリック表示用に、任意座標を参照要素として扱う仮想参照オブジェクトを作成します。
     *
     * @param point 表示基準となる画面座標
     * @returns Floating UI 互換の仮想参照
     */
    private createVirtualReference(point: { x: number; y: number }): VirtualReference {
        return {
            getBoundingClientRect: () => {
                const { x, y } = point;
                return {
                    x,
                    y,
                    left: x,
                    top: y,
                    right: x,
                    bottom: y,
                    width: 0,
                    height: 0,
                    toJSON: () => ({}),
                } as DOMRect;
            },
        };
    }
}