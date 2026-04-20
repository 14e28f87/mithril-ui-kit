/** @jsx m */
import m from "mithril";
import "animate.css";
export type OffcanvasClassicPlacement = "start" | "end" | "top" | "bottom";
export type OffcanvasClassicOptions<T = any> = {
    title?: string;
    content: m.ComponentTypes<any>;
    placement?: OffcanvasClassicPlacement;
    attrs?: Record<string, any>;
    closeOnEscapeKey?: boolean;
    closeOnOutsideClick?: boolean;
    hasBackdrop?: boolean;
    inline?: boolean;
    class?: string;
    bodyClass?: string;
};
export type OffcanvasClassicContentAttrs<T = any> = {
    resolve: (v: T) => void;
    hide: () => void;
    [key: string]: any;
};
export declare class OffcanvasClassic {
    private static seed;
    static show<T = boolean>(opts: OffcanvasClassicOptions<T>): Promise<T>;
}
//# sourceMappingURL=OffcanvasClassic.d.ts.map