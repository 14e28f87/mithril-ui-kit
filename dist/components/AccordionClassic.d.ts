/** @jsx m */
import m from "mithril";
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
export declare class AccordionClassic implements m.Component<AccordionClassicAttrs> {
    /** 非制御モード時の内部状態（展開キーの集合） */
    private openKeys;
    /** コンテナ参照（キーボードナビゲーションで使用） */
    private container?;
    /** 一意な ID 生成用 */
    private uid;
    private static counter;
    /**
     * @constructor
     * @description Accordion インスタンスを初期化
     */
    constructor();
    /**
     * @method oninit
     * @description コンポーネント初期化時に呼び出される
     * @param {m.Vnode<AccordionClassicAttrs>} vnode - Mithril の仮想ノード
     */
    oninit(vnode: m.Vnode<AccordionClassicAttrs>): void;
    /**
     * @method currentKeys
     * @description 現在の展開キー（制御モードなら attrs.activeKeys を優先）
     * @param {AccordionClassicAttrs} attrs - コンポーネント属性
     * @returns {Set<string | number>} 展開キーのセット
     * @private
     */
    private currentKeys;
    /**
     * @method isOpen
     * @description 指定キーが展開中かを判定
     * @param {AccordionClassicAttrs} attrs - コンポーネント属性
     * @param {string | number} key - 判定するキー
     * @returns {boolean} 展開中なら true
     * @private
     */
    private isOpen;
    /**
     * @method toggle
     * @description パネルの展開/折りたたみを切り替え
     * @param {m.Vnode<AccordionClassicAttrs>} vnode - Mithril の仮想ノード
     * @param {string | number} key - 切り替え対象のキー
     * @param {boolean} disabled - 無効化フラグ
     * @private
     */
    private toggle;
    /**
     * @method getItems
     * @description 属性からアイテム配列を取得
     * @param {m.Vnode<AccordionClassicAttrs>} vnode - Mithril の仮想ノード
     * @returns {AccordionClassicItem[]} アイテム配列
     * @private
     */
    private getItems;
    /**
     * @method focusHeaderByDelta
     * @description ヘッダボタンを相対位置でフォーカス
     * @param {number} delta - 移動量（1: 次, -1: 前）
     * @private
     */
    private focusHeaderByDelta;
    /**
     * @method focusHeaderAt
     * @description ヘッダボタンを絶対位置でフォーカス
     * @param {"first" | "last"} pos - 位置
     * @private
     */
    private focusHeaderAt;
    /**
     * @method view
     * @description コンポーネントのレンダリング
     * @param {m.Vnode<AccordionClassicAttrs>} vnode - Mithril の仮想ノード
     * @returns {m.Children} レンダリング結果
     */
    view(vnode: m.Vnode<AccordionClassicAttrs>): JSX.Element;
}
//# sourceMappingURL=AccordionClassic.d.ts.map