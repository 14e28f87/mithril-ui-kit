/** @jsx m */
import m from "mithril";
import { type Placement } from "@floating-ui/dom";
export type TooltipClassicPlacement = Placement;
export type TooltipClassicTrigger = "hover" | "click" | "focus";
export type TooltipClassicAttrs = {
    content: m.Children;
    placement?: TooltipClassicPlacement;
    trigger?: TooltipClassicTrigger | TooltipClassicTrigger[];
    open?: boolean;
    defaultOpen?: boolean;
    offset?: number;
    class?: string;
    style?: Record<string, string>;
    showDelay?: number;
    hideDelay?: number;
    disabled?: boolean;
    id?: string;
    onOpenChange?: (open: boolean) => void;
};
export declare class TooltipClassic implements m.ClassComponent<TooltipClassicAttrs> {
    private open;
    private referenceEl?;
    private floatingEl?;
    private arrowEl?;
    private portal?;
    private cleanupAutoUpdate?;
    private showTimer;
    private hideTimer;
    private uid;
    private static seed;
    oninit(vnode: m.Vnode<TooltipClassicAttrs>): void;
    oncreate(vnode: m.VnodeDOM<TooltipClassicAttrs>): void;
    onupdate(vnode: m.VnodeDOM<TooltipClassicAttrs>): void;
    onremove(): void;
    view(vnode: m.Vnode<TooltipClassicAttrs>): JSX.Element;
    private normalizeTriggers;
    private handleShow;
    private handleHide;
    private handleToggle;
    private clearTimers;
    private isControlled;
    private getOpenState;
    private setOpen;
    private ensurePortal;
    private destroyPortal;
    private renderFloating;
    private setupAutoUpdate;
    private teardownAutoUpdate;
    private updatePosition;
}
//# sourceMappingURL=TooltipClassic.d.ts.map