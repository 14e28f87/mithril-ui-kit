/** @jsx m */
import m from "mithril";
/**
 * Timeline バリアント
 */
export type TimelineVariant = "subtle" | "solid" | "outline" | "plain";
/**
 * Timeline サイズ
 */
export type TimelineSize = "sm" | "md" | "lg" | "xl";
type TimelineRole = "item" | "connector" | "separator" | "indicator" | "content" | "title" | "description";
export interface TimelineRootAttrs {
    /** バリアント */
    variant?: TimelineVariant;
    /** サイズ */
    size?: TimelineSize;
    /** 追加クラス */
    class?: string;
    [key: string]: any;
}
declare class TimelineItemMarker {
    static __tlRole: TimelineRole;
    view(): null;
}
declare class TimelineConnectorMarker {
    static __tlRole: TimelineRole;
    view(): null;
}
declare class TimelineSeparatorMarker {
    static __tlRole: TimelineRole;
    view(): null;
}
declare class TimelineIndicatorMarker {
    static __tlRole: TimelineRole;
    view(): null;
}
declare class TimelineContentMarker {
    static __tlRole: TimelineRole;
    view(): null;
}
declare class TimelineTitleMarker {
    static __tlRole: TimelineRole;
    view(): null;
}
declare class TimelineDescriptionMarker {
    static __tlRole: TimelineRole;
    view(): null;
}
/**
 * Timeline Root コンポーネント — タイムライン表示
 *
 * @example
 * ```tsx
 * <Timeline.Root>
 *   <Timeline.Item>
 *     <Timeline.Separator>
 *       <Timeline.Indicator>🔵</Timeline.Indicator>
 *       <Timeline.Connector />
 *     </Timeline.Separator>
 *     <Timeline.Content>
 *       <Timeline.Title>ステップ 1</Timeline.Title>
 *       <Timeline.Description>説明テキスト</Timeline.Description>
 *     </Timeline.Content>
 *   </Timeline.Item>
 * </Timeline.Root>
 * ```
 */
declare class TimelineRoot implements m.ClassComponent<TimelineRootAttrs> {
    view(vnode: m.Vnode<TimelineRootAttrs>): JSX.Element;
    private renderChildren;
}
/**
 * Timeline コンポーネント名前空間
 */
export declare const Timeline: {
    readonly Root: typeof TimelineRoot;
    readonly Item: typeof TimelineItemMarker;
    readonly Connector: typeof TimelineConnectorMarker;
    readonly Separator: typeof TimelineSeparatorMarker;
    readonly Indicator: typeof TimelineIndicatorMarker;
    readonly Content: typeof TimelineContentMarker;
    readonly Title: typeof TimelineTitleMarker;
    readonly Description: typeof TimelineDescriptionMarker;
};
export { TimelineRoot };
//# sourceMappingURL=Timeline.d.ts.map