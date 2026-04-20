/** @jsx m */
import m from "mithril";
/**
 * Status の状態値
 */
export type StatusValue = "info" | "warning" | "success" | "error";
/**
 * Status サイズ
 */
export type StatusSize = "sm" | "md" | "lg";
type StatusRole = "indicator";
export interface StatusRootAttrs {
    /** 状態値 */
    value?: StatusValue;
    /** サイズ */
    size?: StatusSize;
    /** 追加クラス */
    class?: string;
    [key: string]: any;
}
export interface StatusIndicatorAttrs {
    /** 追加クラス */
    class?: string;
    [key: string]: any;
}
declare class StatusIndicatorMarker {
    static __statusRole: StatusRole;
    view(): null;
}
/**
 * Status Root コンポーネント — プロセスやステートの状態表示
 *
 * @example
 * ```tsx
 * <Status.Root value="success">
 *   <Status.Indicator />
 *   完了
 * </Status.Root>
 * ```
 */
declare class StatusRoot implements m.ClassComponent<StatusRootAttrs> {
    view(vnode: m.Vnode<StatusRootAttrs>): JSX.Element;
}
/**
 * Status コンポーネント名前空間
 */
export declare const Status: {
    readonly Root: typeof StatusRoot;
    readonly Indicator: typeof StatusIndicatorMarker;
};
export { StatusRoot };
//# sourceMappingURL=Status.d.ts.map