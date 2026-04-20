/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./AccordionClassic.module.scss";

/**
 * アコーディオンの各パネルを表す型
 * - `key`: 一意なキー（未指定の場合はインデックスを使用）
 * - `header`: ヘッダ部分の表示内容
 * - `content`: 展開時に表示される内容
 * - `disabled`: 無効化（クリック・キーボード操作不可）
 */
export type AccordionClassicItem = {
  key?: string | number;
  header: m.Children;
  content: m.Children;
  disabled?: boolean;
};

/**
 * Accordion コンポーネントの属性
 * - `items`: パネルの配列定義
 * - `multiple`: 複数展開を許可（デフォルト: false）
 * - `activeKeys`: 制御モードで現在展開中のキー配列
 * - `defaultActiveKeys`: 非制御モードの初期展開キー
 * - `onChange`: 展開キーが変化したときのコールバック
 * - `class`/`style`: 追加クラスとスタイル
 */
export type AccordionClassicAttrs = {
  items?: AccordionClassicItem[];
  multiple?: boolean;
  activeKeys?: Array<string | number> | null;
  defaultActiveKeys?: Array<string | number> | null;
  onChange?: (keys: Array<string | number>) => void;
  class?: string;
  style?: Record<string, string>;
};

/**
 * @class AccordionClassic
 * @description
 * Bootstrap5 ベースの旧アコーディオンコンポーネント。
 * 既存互換用に `AccordionClassic` として提供する。
 *
 * 主な機能:
 * - 非制御/制御モード両対応（`defaultActiveKeys` or `activeKeys`）
 * - `multiple` で複数同時展開
 * - ヘッダボタンの ArrowUp/ArrowDown/Home/End/Enter/Space 対応
 * - Bootstrap の `.accordion`, `.accordion-item`, `.accordion-button`, `.accordion-collapse` を使用
 *
 * アクセシビリティ:
 * - WAI-ARIA 属性（aria-expanded, aria-controls, aria-labelledby）を適切に設定
 * - キーボードナビゲーションをサポート
 * - フォーカス管理を適切に行う
 *
 * 使用例:
 * ```tsx
 * <AccordionClassic items={items} multiple />
 * ```
 */
export class AccordionClassic implements m.Component<AccordionClassicAttrs> {
  /** 非制御モード時の内部状態（展開キーの集合） */
  private openKeys = new Set<string | number>();
  /** コンテナ参照（キーボードナビゲーションで使用） */
  private container?: HTMLElement;
  /** 一意な ID 生成用 */
  private uid: number;
  private static counter = 0;

  /**
   * @constructor
   * @description Accordion インスタンスを初期化
   */
  constructor() {
    this.uid = ++AccordionClassic.counter;
  }

  /**
   * @method oninit
   * @description コンポーネント初期化時に呼び出される
   * @param {m.Vnode<AccordionClassicAttrs>} vnode - Mithril の仮想ノード
   */
  oninit(vnode: m.Vnode<AccordionClassicAttrs>) {
    const d = vnode.attrs.defaultActiveKeys ?? null;
    if (Array.isArray(d)) {
      d.forEach((k) => this.openKeys.add(k));
    }
  }

  /**
   * @method currentKeys
   * @description 現在の展開キー（制御モードなら attrs.activeKeys を優先）
   * @param {AccordionClassicAttrs} attrs - コンポーネント属性
   * @returns {Set<string | number>} 展開キーのセット
   * @private
   */
  private currentKeys(attrs: AccordionClassicAttrs): Set<string | number> {
    if (attrs.activeKeys) return new Set(attrs.activeKeys);
    return this.openKeys;
  }

  /**
   * @method isOpen
   * @description 指定キーが展開中かを判定
   * @param {AccordionClassicAttrs} attrs - コンポーネント属性
   * @param {string | number} key - 判定するキー
   * @returns {boolean} 展開中なら true
   * @private
   */
  private isOpen(attrs: AccordionClassicAttrs, key: string | number): boolean {
    return this.currentKeys(attrs).has(key);
  }

  /**
   * @method toggle
   * @description パネルの展開/折りたたみを切り替え
   * @param {m.Vnode<AccordionClassicAttrs>} vnode - Mithril の仮想ノード
   * @param {string | number} key - 切り替え対象のキー
   * @param {boolean} disabled - 無効化フラグ
   * @private
   */
  private toggle(vnode: m.Vnode<AccordionClassicAttrs>, key: string | number, disabled?: boolean) {
    const attrs = vnode.attrs;
    if (disabled) return;
    const cur = this.currentKeys(attrs);
    const next = new Set(cur);
    const allowMulti = !!attrs.multiple;

    if (allowMulti) {
      if (next.has(key)) next.delete(key);
      else next.add(key);
    } else {
      if (next.has(key)) next.clear();
      else {
        next.clear();
        next.add(key);
      }
    }

    const out = Array.from(next);
    if (attrs.activeKeys) {
      // 制御モード：コールバックのみ
      attrs.onChange?.(out);
    } else {
      // 非制御モード：内部状態を更新してからコールバック
      this.openKeys = next;
      attrs.onChange?.(out);
      m.redraw();
    }
  }

  /**
   * @method getItems
   * @description 属性からアイテム配列を取得
   * @param {m.Vnode<AccordionClassicAttrs>} vnode - Mithril の仮想ノード
   * @returns {AccordionClassicItem[]} アイテム配列
   * @private
   */
  private getItems(vnode: m.Vnode<AccordionClassicAttrs>): AccordionClassicItem[] {
    const { items } = vnode.attrs;
    if (Array.isArray(items)) return items;
    return [];
  }

  /**
   * @method focusHeaderByDelta
   * @description ヘッダボタンを相対位置でフォーカス
   * @param {number} delta - 移動量（1: 次, -1: 前）
   * @private
   */
  private focusHeaderByDelta(delta: number) {
    if (!this.container) return;
    const headers = Array.from(this.container.querySelectorAll<HTMLButtonElement>("[data-accordion-button]"));
    if (!headers.length) return;
    const activeEl = document.activeElement as HTMLElement | null;
    let idx = headers.findIndex((b) => b === activeEl);
    if (idx < 0) idx = 0;
    const next = (idx + delta + headers.length) % headers.length;
    headers[next].focus();
  }

  /**
   * @method focusHeaderAt
   * @description ヘッダボタンを絶対位置でフォーカス
   * @param {"first" | "last"} pos - 位置
   * @private
   */
  private focusHeaderAt(pos: "first" | "last") {
    if (!this.container) return;
    const headers = Array.from(this.container.querySelectorAll<HTMLButtonElement>("[data-accordion-button]"));
    if (!headers.length) return;
    const target = pos === "first" ? headers[0] : headers[headers.length - 1];
    target.focus();
  }

  /**
   * @method view
   * @description コンポーネントのレンダリング
   * @param {m.Vnode<AccordionClassicAttrs>} vnode - Mithril の仮想ノード
   * @returns {m.Children} レンダリング結果
   */
  view(vnode: m.Vnode<AccordionClassicAttrs>) {
    const attrs = vnode.attrs;
    const items = this.getItems(vnode);

    const rootClass = classNames(styles.accordion, attrs.class);

    return (
      <div
        class={rootClass}
        style={attrs.style}
        oncreate={(d) => (this.container = d.dom as HTMLElement)}
        onremove={() => (this.container = undefined)}
      >
        {items.map((it, index) => {
          const key = it.key ?? index;
          const panelId = `acc-${this.uid}-panel-${index}`;
          const collapseId = `acc-${this.uid}-collapse-${index}`;
          const open = this.isOpen(attrs, key);

          return (
            <div class={styles.accordionItem} key={String(key)}>
              <div class={styles.accordionHeader} id={panelId}>
                <button
                  class={classNames(styles.accordionButton, { [styles.accordionButtonCollapsed]: !open, disabled: !!it.disabled })}
                  type="button"
                  data-accordion-button=""
                  aria-expanded={open}
                  aria-controls={collapseId}
                  onclick={() => this.toggle(vnode, key, it.disabled)}
                  onkeydown={(e: KeyboardEvent) => {
                    if (e.key === "ArrowDown") {
                      e.preventDefault();
                      this.focusHeaderByDelta(1);
                    } else if (e.key === "ArrowUp") {
                      e.preventDefault();
                      this.focusHeaderByDelta(-1);
                    } else if (e.key === "Home") {
                      e.preventDefault();
                      this.focusHeaderAt("first");
                    } else if (e.key === "End") {
                      e.preventDefault();
                      this.focusHeaderAt("last");
                    } else if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      this.toggle(vnode, key, it.disabled);
                    }
                  }}
                >
                  {it.header}
                </button>
              </div>
              <div
                id={collapseId}
                class={classNames(styles.accordionCollapse, { [styles.accordionCollapseHidden]: !open })}
                aria-labelledby={panelId}
              >
                <div class={styles.accordionBody}>{it.content}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
