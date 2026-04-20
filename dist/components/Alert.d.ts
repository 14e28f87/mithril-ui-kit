/** @jsx m */
import m from "mithril";
/**
 * Alert ステータス
 */
export type AlertStatus = "info" | "warning" | "success" | "error" | "neutral";
/**
 * Alert バリアント
 */
export type AlertVariant = "subtle" | "surface" | "outline" | "solid";
/**
 * Alert サイズ
 */
export type AlertSize = "sm" | "md" | "lg";
type AlertRole = "indicator" | "content" | "title" | "description";
export interface AlertRootAttrs {
    /** ステータス */
    status?: AlertStatus;
    /** バリアント */
    variant?: AlertVariant;
    /** サイズ */
    size?: AlertSize;
    /** 追加クラス */
    class?: string;
    [key: string]: any;
}
export interface AlertIndicatorAttrs {
    class?: string;
    [key: string]: any;
}
export interface AlertContentAttrs {
    class?: string;
    [key: string]: any;
}
export interface AlertTitleAttrs {
    class?: string;
    [key: string]: any;
}
export interface AlertDescriptionAttrs {
    class?: string;
    [key: string]: any;
}
declare class AlertIndicatorMarker {
    static __alertRole: AlertRole;
    view(): null;
}
declare class AlertContentMarker {
    static __alertRole: AlertRole;
    view(): null;
}
declare class AlertTitleMarker {
    static __alertRole: AlertRole;
    view(): null;
}
declare class AlertDescriptionMarker {
    static __alertRole: AlertRole;
    view(): null;
}
/**
 * Alert Root コンポーネント — フィードバックメッセージの表示
 *
 * @example
 * ```tsx
 * <Alert.Root status="success" variant="subtle">
 *   <Alert.Indicator />
 *   <Alert.Content>
 *     <Alert.Title>成功</Alert.Title>
 *     <Alert.Description>操作が完了しました。</Alert.Description>
 *   </Alert.Content>
 * </Alert.Root>
 * ```
 */
declare class AlertRoot implements m.ClassComponent<AlertRootAttrs> {
    view(vnode: m.Vnode<AlertRootAttrs>): JSX.Element;
    private renderContent;
}
/**
 * Alert コンポーネント名前空間
 */
export declare const Alert: {
    readonly Root: typeof AlertRoot;
    readonly Indicator: typeof AlertIndicatorMarker;
    readonly Content: typeof AlertContentMarker;
    readonly Title: typeof AlertTitleMarker;
    readonly Description: typeof AlertDescriptionMarker;
};
export { AlertRoot };
//# sourceMappingURL=Alert.d.ts.map