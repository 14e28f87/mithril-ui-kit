/** @jsx m */
/**
 * @fileoverview
 * Steps — Chakra UI 現行 API 準拠の compound component 型ステッパー
 *
 * @example
 * ```tsx
 * <Steps.Root step={1} count={3}>
 *   <Steps.List>
 *     <Steps.Item index={0}><Steps.Trigger><Steps.Indicator />ステップ 1</Steps.Trigger><Steps.Separator /></Steps.Item>
 *     <Steps.Item index={1}><Steps.Trigger><Steps.Indicator />ステップ 2</Steps.Trigger><Steps.Separator /></Steps.Item>
 *     <Steps.Item index={2}><Steps.Trigger><Steps.Indicator />ステップ 3</Steps.Trigger></Steps.Item>
 *   </Steps.List>
 *   <Steps.Content index={0}>ステップ 1 の内容</Steps.Content>
 *   <Steps.Content index={1}>ステップ 2 の内容</Steps.Content>
 *   <Steps.Content index={2}>ステップ 3 の内容</Steps.Content>
 *   <Steps.CompletedContent>完了！</Steps.CompletedContent>
 * </Steps.Root>
 * ```
 *
 * @module Steps
 */
/** @jsx m */
import m from "mithril";
/** ステッパーの外観バリエーション */
export type StepsVariant = "solid" | "subtle";
/** ステッパーのサイズ */
export type StepsSize = "xs" | "sm" | "md" | "lg";
/** ステッパーの方向 */
export type StepsOrientation = "horizontal" | "vertical";
/**
 * ステップ変更イベントの詳細
 */
export type StepsStepChangeDetails = {
    step: number;
};
/**
 * Steps.Root に渡せる属性
 */
export type StepsRootAttrs = {
    /** ステップ総数 */
    count: number;
    /** 制御モード: 現在のステップ（0始まり） */
    step?: number;
    /** 非制御モード: 初期ステップ */
    defaultStep?: number;
    /** ステップが変わったときのコールバック */
    onStepChange?: (details: StepsStepChangeDetails) => void;
    /** 完了時のコールバック */
    onStepComplete?: () => void;
    /** リニアモード（順序制約） */
    linear?: boolean;
    /** 外観（デフォルト: "solid"） */
    variant?: StepsVariant;
    /** サイズ（デフォルト: "md"） */
    size?: StepsSize;
    /** 方向（デフォルト: "horizontal"） */
    orientation?: StepsOrientation;
    class?: string;
    style?: Record<string, string>;
};
/** Steps.List に渡せる属性 */
export type StepsListAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Steps.Item に渡せる属性 */
export type StepsItemAttrs = {
    /** ステップインデックス（0始まり） */
    index: number;
    class?: string;
    style?: Record<string, string>;
};
/** Steps.Trigger に渡せる属性 */
export type StepsTriggerAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Steps.Indicator に渡せる属性 */
export type StepsIndicatorAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Steps.Separator に渡せる属性 */
export type StepsSeparatorAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Steps.Content に渡せる属性 */
export type StepsContentAttrs = {
    /** 対応するステップインデックス */
    index: number;
    class?: string;
    style?: Record<string, string>;
};
/** Steps.CompletedContent に渡せる属性 */
export type StepsCompletedContentAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Steps.Title に渡せる属性 */
export type StepsTitleAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Steps.Description に渡せる属性 */
export type StepsDescriptionAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Steps.PrevTrigger に渡せる属性 */
export type StepsPrevTriggerAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Steps.NextTrigger に渡せる属性 */
export type StepsNextTriggerAttrs = {
    class?: string;
    style?: Record<string, string>;
};
type StepsRole = "list" | "item" | "trigger" | "indicator" | "separator" | "content" | "completed-content" | "title" | "description" | "prev-trigger" | "next-trigger";
/** @class StepsList */
export declare class StepsList implements m.Component<StepsListAttrs> {
    static __stepsRole: StepsRole;
    view(vnode: m.Vnode<StepsListAttrs>): JSX.Element;
}
/** @class StepsItem */
export declare class StepsItemMarker implements m.Component<StepsItemAttrs> {
    static __stepsRole: StepsRole;
    view(vnode: m.Vnode<StepsItemAttrs>): JSX.Element;
}
/** @class StepsTrigger */
export declare class StepsTriggerMarker implements m.Component<StepsTriggerAttrs> {
    static __stepsRole: StepsRole;
    view(vnode: m.Vnode<StepsTriggerAttrs>): JSX.Element;
}
/** @class StepsIndicator */
export declare class StepsIndicatorMarker implements m.Component<StepsIndicatorAttrs> {
    static __stepsRole: StepsRole;
    view(vnode: m.Vnode<StepsIndicatorAttrs>): JSX.Element;
}
/** @class StepsSeparator */
export declare class StepsSeparatorMarker implements m.Component<StepsSeparatorAttrs> {
    static __stepsRole: StepsRole;
    view(vnode: m.Vnode<StepsSeparatorAttrs>): JSX.Element;
}
/** @class StepsContentMarker */
export declare class StepsContentMarker implements m.Component<StepsContentAttrs> {
    static __stepsRole: StepsRole;
    view(vnode: m.Vnode<StepsContentAttrs>): JSX.Element;
}
/** @class StepsCompletedContentMarker */
export declare class StepsCompletedContentMarker implements m.Component<StepsCompletedContentAttrs> {
    static __stepsRole: StepsRole;
    view(vnode: m.Vnode<StepsCompletedContentAttrs>): JSX.Element;
}
/** @class StepsTitleMarker */
export declare class StepsTitleMarker implements m.Component<StepsTitleAttrs> {
    static __stepsRole: StepsRole;
    view(vnode: m.Vnode<StepsTitleAttrs>): JSX.Element;
}
/** @class StepsDescriptionMarker */
export declare class StepsDescriptionMarker implements m.Component<StepsDescriptionAttrs> {
    static __stepsRole: StepsRole;
    view(vnode: m.Vnode<StepsDescriptionAttrs>): JSX.Element;
}
/** @class StepsPrevTriggerMarker */
export declare class StepsPrevTriggerMarker implements m.Component<StepsPrevTriggerAttrs> {
    static __stepsRole: StepsRole;
    view(vnode: m.Vnode<StepsPrevTriggerAttrs>): JSX.Element;
}
/** @class StepsNextTriggerMarker */
export declare class StepsNextTriggerMarker implements m.Component<StepsNextTriggerAttrs> {
    static __stepsRole: StepsRole;
    view(vnode: m.Vnode<StepsNextTriggerAttrs>): JSX.Element;
}
/**
 * @class StepsRoot
 * @description
 * ステッパーのルートコンポーネント。
 * ステップのリスト表示、現在ステップのコンテンツ切り替え、
 * 前へ/次へナビゲーションを管理する。
 *
 * 主な機能:
 * - variant (solid / subtle)
 * - size (xs / sm / md / lg)
 * - orientation (horizontal / vertical)
 * - 制御/非制御両対応 (step / defaultStep)
 * - リニアモード
 * - PrevTrigger / NextTrigger
 *
 * @example
 * <Steps.Root count={3} defaultStep={0} variant="solid">
 *   <Steps.List>
 *     <Steps.Item index={0}><Steps.Trigger><Steps.Indicator />手順 1</Steps.Trigger><Steps.Separator /></Steps.Item>
 *     <Steps.Item index={1}><Steps.Trigger><Steps.Indicator />手順 2</Steps.Trigger></Steps.Item>
 *   </Steps.List>
 *   <Steps.Content index={0}>内容 1</Steps.Content>
 *   <Steps.Content index={1}>内容 2</Steps.Content>
 *   <Steps.CompletedContent>完了！</Steps.CompletedContent>
 *   <Steps.PrevTrigger>戻る</Steps.PrevTrigger>
 *   <Steps.NextTrigger>次へ</Steps.NextTrigger>
 * </Steps.Root>
 */
export declare class StepsRoot implements m.Component<StepsRootAttrs> {
    private currentStep;
    oninit(vnode: m.Vnode<StepsRootAttrs>): void;
    private isControlled;
    private resolveStep;
    private setStep;
    private collectItems;
    private renderTriggerContent;
    view(vnode: m.Vnode<StepsRootAttrs>): JSX.Element;
}
/**
 * Steps compound component のバンドル。
 */
export declare const Steps: {
    Root: typeof StepsRoot;
    List: typeof StepsList;
    Item: typeof StepsItemMarker;
    Trigger: typeof StepsTriggerMarker;
    Indicator: typeof StepsIndicatorMarker;
    Separator: typeof StepsSeparatorMarker;
    Content: typeof StepsContentMarker;
    CompletedContent: typeof StepsCompletedContentMarker;
    Title: typeof StepsTitleMarker;
    Description: typeof StepsDescriptionMarker;
    PrevTrigger: typeof StepsPrevTriggerMarker;
    NextTrigger: typeof StepsNextTriggerMarker;
};
export {};
//# sourceMappingURL=Steps.d.ts.map