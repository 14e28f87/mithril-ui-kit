/** @jsx m */
import m, { Vnode, VnodeDOM } from "mithril";
/**
 * Popover コンポーネント（Mithril + TypeScript）
 * - Root, Trigger, Content, Arrow, Header, Body, Footer, CloseTrigger を提供
 * - Trigger に asChild?: boolean を追加。true の場合、単一の子 vnode に対して属性をマージして直接レンダリングする
 *
 * 注意:
 * - 実際のポップオーバーの位置決め（placement）やフォーカス管理、外部クリックでのクローズ等は
 *	 シンプル実装に留めている。必要に応じてポップアップ位置計算（Popper.js 等）を組み込んでください。
 */
type RootAttrs = {
    placement?: "top" | "bottom" | "left" | "right";
    size?: "sm" | "md" | "lg";
    class?: string;
    style?: string;
};
type TriggerAttrs = {
    asChild?: boolean;
    class?: string;
    onclick?: (e: Event) => void;
    [key: string]: any;
};
type ContentAttrs = {
    class?: string;
    style?: string;
    oncreate?: (vnode: VnodeDOM<any, any>) => void;
    onremove?: (vnode: VnodeDOM<any, any>) => void;
    [key: string]: any;
};
type CloseTriggerAttrs = {
    class?: string;
    onclick?: (e: Event) => void;
    [key: string]: any;
};
export declare const Popover: {
    Root: {
        oninit(vnode: Vnode<RootAttrs>): void;
        view(vnode: Vnode<RootAttrs>): m.Vnode<any, any>;
    };
    Trigger: {
        view(vnode: Vnode<TriggerAttrs>): m.Vnode<any, any>;
    };
    Content: {
        oncreate(vnode: VnodeDOM<ContentAttrs>): void;
        onremove(vnode: VnodeDOM<ContentAttrs>): void;
        view(vnode: Vnode<ContentAttrs>): m.Vnode<any, any>;
    };
    Arrow: {
        view(): m.Vnode<any, any>;
    };
    Header: {
        view(vnode: Vnode<any>): m.Vnode<any, any>;
    };
    Body: {
        view(vnode: Vnode<any>): m.Vnode<any, any>;
    };
    Footer: {
        view(vnode: Vnode<any>): m.Vnode<any, any>;
    };
    CloseTrigger: {
        view(vnode: Vnode<CloseTriggerAttrs>): m.Vnode<any, any>;
    };
};
export {};
//# sourceMappingURL=_Popover.d.ts.map