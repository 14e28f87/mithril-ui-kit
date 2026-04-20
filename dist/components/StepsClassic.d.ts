/** @jsx m */
import m from "mithril";
import "./StepsClassic.scss";
export type StepsClassicStepStatus = "wait" | "process" | "finish" | "error";
export type StepsClassicDirection = "horizontal" | "vertical";
export type StepsClassicSize = "default" | "small";
export type StepsClassicLabelPlacement = "horizontal" | "vertical";
export type StepsClassicStepItem = {
    title: m.Children;
    description?: m.Children;
    subTitle?: m.Children;
    icon?: m.Children;
    status?: StepsClassicStepStatus;
    disabled?: boolean;
    class?: string;
    onClick?: (index: number) => void;
};
export type StepsClassicProgressDotRenderInfo = {
    index: number;
    status: StepsClassicStepStatus;
    title: m.Children;
    description?: m.Children;
};
export type StepsClassicAttrs = {
    items: StepsClassicStepItem[];
    current?: number;
    initial?: number;
    status?: StepsClassicStepStatus;
    direction?: StepsClassicDirection;
    size?: StepsClassicSize;
    labelPlacement?: StepsClassicLabelPlacement;
    progressDot?: boolean | ((dot: m.Children, info: StepsClassicProgressDotRenderInfo) => m.Children);
    onChange?: (current: number) => void;
    class?: string;
    style?: Record<string, string>;
};
export declare class StepsClassic implements m.Component<StepsClassicAttrs> {
    private resolveStatus;
    private renderDefaultIcon;
    private renderIcon;
    private handleStepClick;
    view(vnode: m.Vnode<StepsClassicAttrs>): JSX.Element;
}
//# sourceMappingURL=StepsClassic.d.ts.map