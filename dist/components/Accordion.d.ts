/** @jsx m */
/**
 * @fileoverview
 * Accordion — Chakra UI 現行 API 準拠の compound component 型アコーディオン
 *
 * Chakra UI の `Accordion.Root` / `Accordion.Item` 系の命名規則に合わせた
 * Mithril.js 用アコーディオンコンポーネント。
 *
 * 使い方:
 * ```tsx
 * <Accordion.Root collapsible variant="enclosed">
 *   <Accordion.Item value="item-1">
 *     <Accordion.ItemTrigger>
 *       見出し
 *       <Accordion.ItemIndicator />
 *     </Accordion.ItemTrigger>
 *     <Accordion.ItemContent>
 *       <Accordion.ItemBody>本文</Accordion.ItemBody>
 *     </Accordion.ItemContent>
 *   </Accordion.Item>
 * </Accordion.Root>
 * ```
 *
 * @module Accordion
 */
/** @jsx m */
import m from "mithril";
/** アコーディオン項目の識別値。文字列または数値 */
export type AccordionValue = string | number;
/** サイズバリエーション */
export type AccordionSize = "sm" | "md" | "lg";
/** 外観バリエーション */
export type AccordionVariant = "outline" | "subtle" | "enclosed" | "plain";
/** レイアウト方向 */
export type AccordionOrientation = "vertical" | "horizontal";
/**
 * 値変更イベントの詳細
 * @property {AccordionValue[]} value - 現在開いている項目の value 配列
 * @property {number[]} indices - 現在開いている項目のインデックス配列
 */
export type AccordionValueChangeDetails = {
    value: AccordionValue[];
    indices: number[];
};
/**
 * フォーカス変更イベントの詳細
 * @property {AccordionValue} value - フォーカスされた項目の value
 * @property {number} index - フォーカスされた項目のインデックス
 */
export type AccordionFocusChangeDetails = {
    value: AccordionValue;
    index: number;
};
/**
 * Accordion.Root に渡せる属性
 */
export type AccordionRootAttrs = {
    /** 複数項目の同時展開を許可するか */
    multiple?: boolean;
    /** すべての項目を閉じることを許可するか（single モード時） */
    collapsible?: boolean;
    /** 制御モード: 展開する項目の value（単体 or 配列） */
    value?: AccordionValue | AccordionValue[] | null;
    /** 非制御モード: 初期展開する項目の value */
    defaultValue?: AccordionValue | AccordionValue[] | null;
    /** 展開状態が変わったときのコールバック */
    onValueChange?: (details: AccordionValueChangeDetails) => void;
    /** フォーカスが移動したときのコールバック */
    onFocusChange?: (details: AccordionFocusChangeDetails) => void;
    /** 全項目を一括で無効化するか */
    disabled?: boolean;
    /** true にすると、一度も開いていない項目のコンテンツ DOM を生成しない */
    lazyMount?: boolean;
    /** true にすると、閉じた項目のコンテンツ DOM を即座に破棄する */
    unmountOnExit?: boolean;
    /** キーボードナビゲーションの方向 */
    orientation?: AccordionOrientation;
    /** 外観バリエーション（デフォルト: "outline"） */
    variant?: AccordionVariant;
    /** サイズ（デフォルト: "md"） */
    size?: AccordionSize;
    /** 各要素のカスタム ID 生成関数 */
    ids?: Partial<{
        root: string;
        item: (value: AccordionValue) => string;
        itemContent: (value: AccordionValue) => string;
        itemTrigger: (value: AccordionValue) => string;
    }>;
    /** ルート要素の id 属性 */
    id?: string;
    /** ルート要素の追加 CSS クラス */
    class?: string;
    /** ルート要素のインラインスタイル */
    style?: Record<string, string>;
};
/** Accordion.Item に渡せる属性 */
export type AccordionItemAttrs = {
    /** この項目の識別値。省略するとインデックスが使われる */
    value?: AccordionValue;
    /** 個別に無効化するか */
    disabled?: boolean;
    class?: string;
    style?: Record<string, string>;
};
/** Accordion.ItemTrigger に渡せる属性 */
export type AccordionItemTriggerAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Accordion.ItemContent に渡せる属性 */
export type AccordionItemContentAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Accordion.ItemBody に渡せる属性 */
export type AccordionItemBodyAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Accordion.ItemIndicator に渡せる属性 */
export type AccordionItemIndicatorAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** 子コンポーネントの役割を示す内部型 */
type AccordionRole = "item" | "item-trigger" | "item-content" | "item-body" | "item-indicator";
/**
 * @class AccordionItem
 * @description
 * アコーディオンの各項目を表すマーカーコンポーネント。
 * 実際の描画は `AccordionRoot.view()` が担うため、このクラスの view はフォールバック用。
 * `__accordionRole = "item"` で役割を識別させている。
 */
export declare class AccordionItem implements m.Component<AccordionItemAttrs> {
    static __accordionRole: AccordionRole;
    view(vnode: m.Vnode<AccordionItemAttrs>): JSX.Element;
}
/**
 * @class AccordionItemTrigger
 * @description 開閉トリガーボタンのマーカー。実際の描画は Root が担う。
 */
export declare class AccordionItemTrigger implements m.Component<AccordionItemTriggerAttrs> {
    static __accordionRole: AccordionRole;
    view(vnode: m.Vnode<AccordionItemTriggerAttrs>): JSX.Element;
}
/**
 * @class AccordionItemContent
 * @description コンテンツ領域のマーカー。lazyMount / unmountOnExit の制御は Root が行う。
 */
export declare class AccordionItemContent implements m.Component<AccordionItemContentAttrs> {
    static __accordionRole: AccordionRole;
    view(vnode: m.Vnode<AccordionItemContentAttrs>): JSX.Element;
}
/**
 * @class AccordionItemBody
 * @description コンテンツ内の本文領域マーカー。省略しても Root 側で自動ラップされる。
 */
export declare class AccordionItemBody implements m.Component<AccordionItemBodyAttrs> {
    static __accordionRole: AccordionRole;
    view(vnode: m.Vnode<AccordionItemBodyAttrs>): JSX.Element;
}
/**
 * @class AccordionItemIndicator
 * @description 開閉状態を示すインジケーターのマーカー。デフォルトはシェブロン SVG。
 */
export declare class AccordionItemIndicator implements m.Component<AccordionItemIndicatorAttrs> {
    static __accordionRole: AccordionRole;
    view(vnode: m.Vnode<AccordionItemIndicatorAttrs>): JSX.Element;
}
/**
 * @class AccordionRoot
 * @description
 * Accordion のルートコンポーネント。
 * 子の `Accordion.Item` を収集・解析し、展開状態管理・キーボードナビゲーション・
 * ARIA 属性付与など主要ロジックを担う。
 *
 * 主な機能:
 * - 単一/複数展開モード (`multiple`)
 * - 全閉じ許可 (`collapsible`)
 * - 制御/非制御両対応 (`value` vs `defaultValue`)
 * - バリアント・サイズ・方向のカスタマイズ
 * - lazyMount / unmountOnExit によるパフォーマンス最適化
 * - ArrowUp/Down, Home/End, Enter/Space によるキーボード操作
 *
 * @example
 * <Accordion.Root collapsible variant="enclosed" size="md">
 *   <Accordion.Item value="section-1">
 *     <Accordion.ItemTrigger>
 *       セクション 1
 *       <Accordion.ItemIndicator />
 *     </Accordion.ItemTrigger>
 *     <Accordion.ItemContent>
 *       <Accordion.ItemBody>本文をここに書く</Accordion.ItemBody>
 *     </Accordion.ItemContent>
 *   </Accordion.Item>
 * </Accordion.Root>
 */
export declare class AccordionRoot implements m.Component<AccordionRootAttrs> {
    private openValues;
    private mountedValues;
    private buttonRefs;
    private readonly uid;
    private static seed;
    oninit(vnode: m.Vnode<AccordionRootAttrs>): void;
    onbeforeupdate(vnode: m.Vnode<AccordionRootAttrs>): boolean;
    onremove(): void;
    private isMultiple;
    private isCollapsible;
    private isControlled;
    private normalizeValues;
    private resolveOpenValues;
    private syncMounted;
    private getRootId;
    private getTriggerId;
    private getContentId;
    private getItemId;
    private collectItems;
    private emitChanges;
    private toggle;
    private moveFocus;
    private focusEdge;
    private handleTriggerKeydown;
    private shouldRenderContent;
    private renderIndicator;
    private renderContentBody;
    view(vnode: m.Vnode<AccordionRootAttrs>): JSX.Element;
}
/**
 * Accordion compound component のバンドル。
 * `Accordion.Root`, `Accordion.Item` などの形式で使う。
 *
 * @example
 * import { Accordion } from "mithril-ui-kit";
 *
 * <Accordion.Root collapsible>
 *   <Accordion.Item value="a">
 *     <Accordion.ItemTrigger>見出し<Accordion.ItemIndicator /></Accordion.ItemTrigger>
 *     <Accordion.ItemContent><Accordion.ItemBody>本文</Accordion.ItemBody></Accordion.ItemContent>
 *   </Accordion.Item>
 * </Accordion.Root>
 */
export declare const Accordion: {
    readonly Root: typeof AccordionRoot;
    readonly Item: typeof AccordionItem;
    readonly ItemTrigger: typeof AccordionItemTrigger;
    readonly ItemContent: typeof AccordionItemContent;
    readonly ItemBody: typeof AccordionItemBody;
    readonly ItemIndicator: typeof AccordionItemIndicator;
};
export {};
//# sourceMappingURL=Accordion.d.ts.map