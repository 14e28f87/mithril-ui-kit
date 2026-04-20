/** @jsx m */
import m from "mithril";
/**
 * HoverCard サイズ
 */
export type HoverCardSize = "xs" | "sm" | "md" | "lg";
type HoverCardRole = "trigger" | "positioner" | "content" | "arrow" | "arrowTip";
export interface HoverCardRootAttrs {
    /** 表示遅延 (ms) */
    openDelay?: number;
    /** 非表示遅延 (ms) */
    closeDelay?: number;
    /** サイズ */
    size?: HoverCardSize;
    /** 配置 */
    placement?: "top" | "bottom" | "left" | "right";
    /** 追加クラス */
    class?: string;
    [key: string]: any;
}
declare class HCTriggerMarker {
    static __hcRole: HoverCardRole;
    view(): null;
}
declare class HCPositionerMarker {
    static __hcRole: HoverCardRole;
    view(): null;
}
declare class HCContentMarker {
    static __hcRole: HoverCardRole;
    view(): null;
}
declare class HCArrowMarker {
    static __hcRole: HoverCardRole;
    view(): null;
}
declare class HCArrowTipMarker {
    static __hcRole: HoverCardRole;
    view(): null;
}
/**
 * HoverCard Root コンポーネント — ホバーで表示されるカード
 *
 * @example
 * ```tsx
 * <HoverCard.Root openDelay={200} closeDelay={150}>
 *   <HoverCard.Trigger>ホバーしてください</HoverCard.Trigger>
 *   <HoverCard.Content>
 *     カードの内容...
 *   </HoverCard.Content>
 * </HoverCard.Root>
 * ```
 */
declare class HoverCardRoot implements m.ClassComponent<HoverCardRootAttrs> {
    private isOpen;
    private openTimer;
    private closeTimer;
    onremove(): void;
    view(vnode: m.Vnode<HoverCardRootAttrs>): JSX.Element;
    private extractContent;
    private startOpen;
    private startClose;
    private cancelClose;
}
/**
 * HoverCard コンポーネント名前空間
 */
export declare const HoverCard: {
    readonly Root: typeof HoverCardRoot;
    readonly Trigger: typeof HCTriggerMarker;
    readonly Positioner: typeof HCPositionerMarker;
    readonly Content: typeof HCContentMarker;
    readonly Arrow: typeof HCArrowMarker;
    readonly ArrowTip: typeof HCArrowTipMarker;
};
export { HoverCardRoot };
//# sourceMappingURL=HoverCard.d.ts.map