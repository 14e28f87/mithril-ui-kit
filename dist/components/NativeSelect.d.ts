/** @jsx m */
import m from "mithril";
/**
 * NativeSelect バリアント
 */
export type NativeSelectVariant = "outline" | "subtle" | "plain" | "ghost";
/**
 * NativeSelect サイズ
 */
export type NativeSelectSize = "xs" | "sm" | "md" | "lg" | "xl";
type NativeSelectRole = "field" | "indicator";
export interface NativeSelectRootAttrs {
    /** バリアント */
    variant?: NativeSelectVariant;
    /** サイズ */
    size?: NativeSelectSize;
    /** 無効状態 */
    disabled?: boolean;
    /** 追加クラス */
    class?: string;
    [key: string]: any;
}
export interface NativeSelectFieldAttrs {
    [key: string]: any;
}
declare class NativeSelectFieldMarker {
    static __nsRole: NativeSelectRole;
    view(): null;
}
declare class NativeSelectIndicatorMarker {
    static __nsRole: NativeSelectRole;
    view(): null;
}
/**
 * NativeSelect Root コンポーネント — ネイティブセレクトボックス
 *
 * @example
 * ```tsx
 * <NativeSelect.Root variant="outline" size="md">
 *   <NativeSelect.Field>
 *     <option value="">選択してください</option>
 *     <option value="a">オプションA</option>
 *     <option value="b">オプションB</option>
 *   </NativeSelect.Field>
 *   <NativeSelect.Indicator />
 * </NativeSelect.Root>
 * ```
 */
declare class NativeSelectRoot implements m.ClassComponent<NativeSelectRootAttrs> {
    view(vnode: m.Vnode<NativeSelectRootAttrs>): JSX.Element;
}
/**
 * NativeSelect コンポーネント名前空間
 */
export declare const NativeSelect: {
    readonly Root: typeof NativeSelectRoot;
    readonly Field: typeof NativeSelectFieldMarker;
    readonly Indicator: typeof NativeSelectIndicatorMarker;
};
export { NativeSelectRoot };
//# sourceMappingURL=NativeSelect.d.ts.map