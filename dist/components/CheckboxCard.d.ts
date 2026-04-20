/** @jsx m */
import m from "mithril";
/**
 * CheckboxCard バリアント
 */
export type CheckboxCardVariant = "surface" | "subtle" | "outline" | "solid";
/**
 * CheckboxCard サイズ
 */
export type CheckboxCardSize = "sm" | "md" | "lg";
type CheckboxCardRole = "hiddenInput" | "control" | "content" | "label" | "description" | "indicator" | "addon";
export interface CheckboxCardRootAttrs {
    /** バリアント */
    variant?: CheckboxCardVariant;
    /** サイズ */
    size?: CheckboxCardSize;
    /** チェック状態 */
    checked?: boolean;
    /** デフォルトチェック */
    defaultChecked?: boolean;
    /** 変更コールバック */
    onCheckedChange?: (checked: boolean) => void;
    /** 無効状態 */
    disabled?: boolean;
    /** 追加クラス */
    class?: string;
    [key: string]: any;
}
declare class CCHiddenInputMarker {
    static __ccRole: CheckboxCardRole;
    view(): null;
}
declare class CCControlMarker {
    static __ccRole: CheckboxCardRole;
    view(): null;
}
declare class CCContentMarker {
    static __ccRole: CheckboxCardRole;
    view(): null;
}
declare class CCLabelMarker {
    static __ccRole: CheckboxCardRole;
    view(): null;
}
declare class CCDescriptionMarker {
    static __ccRole: CheckboxCardRole;
    view(): null;
}
declare class CCIndicatorMarker {
    static __ccRole: CheckboxCardRole;
    view(): null;
}
declare class CCAddonMarker {
    static __ccRole: CheckboxCardRole;
    view(): null;
}
/**
 * CheckboxCard Root コンポーネント — カード形式のチェックボックス
 *
 * @example
 * ```tsx
 * <CheckboxCard.Root checked={isChecked} onCheckedChange={v => isChecked = v}>
 *   <CheckboxCard.Control>
 *     <CheckboxCard.Content>
 *       <CheckboxCard.Label>ラベル</CheckboxCard.Label>
 *       <CheckboxCard.Description>説明</CheckboxCard.Description>
 *     </CheckboxCard.Content>
 *     <CheckboxCard.Indicator />
 *   </CheckboxCard.Control>
 * </CheckboxCard.Root>
 * ```
 */
declare class CheckboxCardRoot implements m.ClassComponent<CheckboxCardRootAttrs> {
    private internalChecked;
    oninit(vnode: m.Vnode<CheckboxCardRootAttrs>): void;
    view(vnode: m.Vnode<CheckboxCardRootAttrs>): JSX.Element;
    private renderChildren;
}
/**
 * CheckboxCard コンポーネント名前空間
 */
export declare const CheckboxCard: {
    readonly Root: typeof CheckboxCardRoot;
    readonly HiddenInput: typeof CCHiddenInputMarker;
    readonly Control: typeof CCControlMarker;
    readonly Content: typeof CCContentMarker;
    readonly Label: typeof CCLabelMarker;
    readonly Description: typeof CCDescriptionMarker;
    readonly Indicator: typeof CCIndicatorMarker;
    readonly Addon: typeof CCAddonMarker;
};
export { CheckboxCardRoot };
//# sourceMappingURL=CheckboxCard.d.ts.map