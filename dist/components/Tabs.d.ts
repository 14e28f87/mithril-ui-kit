/** @jsx m */
/**
 * @fileoverview
 * Tabs — Chakra UI 現行 API 準拠の compound component 型タブ
 *
 * `Tabs.Root` / `Tabs.List` / `Tabs.Trigger` / `Tabs.Content` の形式で使う。
 *
 * @example
 * ```tsx
 * <Tabs.Root defaultValue="members" variant="line">
 *   <Tabs.List>
 *     <Tabs.Trigger value="members">メンバー</Tabs.Trigger>
 *     <Tabs.Trigger value="projects">プロジェクト</Tabs.Trigger>
 *   </Tabs.List>
 *   <Tabs.Content value="members">メンバー一覧</Tabs.Content>
 *   <Tabs.Content value="projects">プロジェクト一覧</Tabs.Content>
 * </Tabs.Root>
 * ```
 *
 * @module Tabs
 */
/** @jsx m */
import m from "mithril";
/** タブの外観バリエーション */
export type TabsVariant = "line" | "subtle" | "enclosed" | "outline" | "plain";
/** タブのサイズ */
export type TabsSize = "sm" | "md" | "lg";
/** タブの方向 */
export type TabsOrientation = "horizontal" | "vertical";
/** タブのアクティベーションモード */
export type TabsActivationMode = "automatic" | "manual";
/**
 * 値変更イベントの詳細
 * @property {string} value - 選択されたタブの value
 */
export type TabsValueChangeDetails = {
    value: string;
};
/**
 * Tabs.Root に渡せる属性
 */
export type TabsRootAttrs = {
    /** 制御モード: 選択中のタブの value */
    value?: string;
    /** 非制御モード: 初期選択タブの value */
    defaultValue?: string;
    /** タブが変更されたときのコールバック */
    onValueChange?: (details: TabsValueChangeDetails) => void;
    /** 外観バリエーション（デフォルト: "line"） */
    variant?: TabsVariant;
    /** サイズ（デフォルト: "md"） */
    size?: TabsSize;
    /** 方向（デフォルト: "horizontal"） */
    orientation?: TabsOrientation;
    /** アクティベーションモード（デフォルト: "automatic"） */
    activationMode?: TabsActivationMode;
    /** true にすると未表示タブの Content DOM を生成しない */
    lazyMount?: boolean;
    /** true にすると非アクティブタブの Content DOM を即破棄 */
    unmountOnExit?: boolean;
    /** キーボードループ（デフォルト: true） */
    loopFocus?: boolean;
    /** タブを均等幅にする */
    fitted?: boolean;
    /** ルート要素の id */
    id?: string;
    /** ルート要素の追加 CSS クラス */
    class?: string;
    /** ルート要素のインラインスタイル */
    style?: Record<string, string>;
};
/** Tabs.List に渡せる属性 */
export type TabsListAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Tabs.Trigger に渡せる属性 */
export type TabsTriggerAttrs = {
    /** このタブの識別値 */
    value: string;
    /** 無効化するか */
    disabled?: boolean;
    class?: string;
    style?: Record<string, string>;
};
/** Tabs.Content に渡せる属性 */
export type TabsContentAttrs = {
    /** 対応するタブの value */
    value: string;
    class?: string;
    style?: Record<string, string>;
};
/** Tabs.Indicator に渡せる属性 */
export type TabsIndicatorAttrs = {
    class?: string;
    style?: Record<string, string>;
};
type TabsRole = "list" | "trigger" | "content" | "indicator";
/**
 * @class TabsList
 * @description タブリスト領域のマーカー。実際の描画は Root が担う。
 */
export declare class TabsList implements m.Component<TabsListAttrs> {
    static __tabsRole: TabsRole;
    view(vnode: m.Vnode<TabsListAttrs>): JSX.Element;
}
/**
 * @class TabsTrigger
 * @description 個々のタブボタンのマーカー。
 */
export declare class TabsTrigger implements m.Component<TabsTriggerAttrs> {
    static __tabsRole: TabsRole;
    view(vnode: m.Vnode<TabsTriggerAttrs>): JSX.Element;
}
/**
 * @class TabsContent
 * @description タブ本文のマーカー。
 */
export declare class TabsContent implements m.Component<TabsContentAttrs> {
    static __tabsRole: TabsRole;
    view(vnode: m.Vnode<TabsContentAttrs>): JSX.Element;
}
/**
 * @class TabsIndicator
 * @description アクティブタブのインジケーター線のマーカー。
 */
export declare class TabsIndicator implements m.Component<TabsIndicatorAttrs> {
    static __tabsRole: TabsRole;
    view(vnode: m.Vnode<TabsIndicatorAttrs>): JSX.Element;
}
/**
 * @class TabsRoot
 * @description
 * Tabs のルートコンポーネント。
 * 子の Tabs.List / Tabs.Trigger / Tabs.Content を収集・解析し、
 * タブ切り替え・キーボードナビゲーション・ARIA 属性を管理する。
 *
 * 主な機能:
 * - variant (line / subtle / enclosed / outline / plain)
 * - size (sm / md / lg)
 * - 制御/非制御両対応
 * - lazyMount / unmountOnExit
 * - ArrowLeft/Right (horizontal) / ArrowUp/Down (vertical) + Home/End
 * - fitted（均等幅）
 *
 * @example
 * <Tabs.Root defaultValue="tab1" variant="enclosed" size="md">
 *   <Tabs.List>
 *     <Tabs.Trigger value="tab1">タブ 1</Tabs.Trigger>
 *     <Tabs.Trigger value="tab2">タブ 2</Tabs.Trigger>
 *   </Tabs.List>
 *   <Tabs.Content value="tab1">コンテンツ 1</Tabs.Content>
 *   <Tabs.Content value="tab2">コンテンツ 2</Tabs.Content>
 * </Tabs.Root>
 */
export declare class TabsRoot implements m.Component<TabsRootAttrs> {
    private selectedValue;
    private mountedValues;
    private triggerRefs;
    private readonly uid;
    private static seed;
    oninit(vnode: m.Vnode<TabsRootAttrs>): void;
    onbeforeupdate(vnode: m.Vnode<TabsRootAttrs>): boolean;
    onremove(): void;
    private isControlled;
    private resolveValue;
    private getRootId;
    private collectTriggers;
    private collectContents;
    private select;
    private moveFocus;
    private focusEdge;
    private handleKeydown;
    private shouldRender;
    view(vnode: m.Vnode<TabsRootAttrs>): JSX.Element;
}
/**
 * Tabs compound component のバンドル。
 * `Tabs.Root`, `Tabs.List`, `Tabs.Trigger`, `Tabs.Content`, `Tabs.Indicator` の形式で使う。
 */
export declare const Tabs: {
    readonly Root: typeof TabsRoot;
    readonly List: typeof TabsList;
    readonly Trigger: typeof TabsTrigger;
    readonly Content: typeof TabsContent;
    readonly Indicator: typeof TabsIndicator;
};
export {};
//# sourceMappingURL=Tabs.d.ts.map