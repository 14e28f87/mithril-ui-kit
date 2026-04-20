/** @jsx m */
import m from "mithril";
/**
 * Tag バリアント
 */
export type TagVariant = "subtle" | "solid" | "outline" | "surface";
/**
 * Tag サイズ
 */
export type TagSize = "sm" | "md" | "lg" | "xl";
type TagRole = "label" | "startElement" | "endElement" | "closeTrigger";
export interface TagRootAttrs {
    /** バリアント */
    variant?: TagVariant;
    /** サイズ */
    size?: TagSize;
    /** カラーパレット */
    colorPalette?: string;
    /** 閉じ可能 */
    closable?: boolean;
    /** 閉じるボタン押下時 */
    onClose?: () => void;
    /** 追加クラス */
    class?: string;
    [key: string]: any;
}
declare class TagLabelMarker {
    static __tagRole: TagRole;
    view(): null;
}
declare class TagStartElementMarker {
    static __tagRole: TagRole;
    view(): null;
}
declare class TagEndElementMarker {
    static __tagRole: TagRole;
    view(): null;
}
declare class TagCloseTriggerMarker {
    static __tagRole: TagRole;
    view(): null;
}
/**
 * Tag Root コンポーネント — ラベルやカテゴリの表示
 *
 * @example
 * ```tsx
 * <Tag.Root variant="solid" colorPalette="blue">
 *   <Tag.Label>TypeScript</Tag.Label>
 * </Tag.Root>
 * <Tag.Root closable onClose={() => console.log("closed")}>
 *   <Tag.Label>削除可能</Tag.Label>
 * </Tag.Root>
 * ```
 */
declare class TagRoot implements m.ClassComponent<TagRootAttrs> {
    view(vnode: m.Vnode<TagRootAttrs>): JSX.Element;
}
/**
 * Tag コンポーネント名前空間
 */
export declare const Tag: {
    readonly Root: typeof TagRoot;
    readonly Label: typeof TagLabelMarker;
    readonly StartElement: typeof TagStartElementMarker;
    readonly EndElement: typeof TagEndElementMarker;
    readonly CloseTrigger: typeof TagCloseTriggerMarker;
};
export { TagRoot };
//# sourceMappingURL=Tag.d.ts.map