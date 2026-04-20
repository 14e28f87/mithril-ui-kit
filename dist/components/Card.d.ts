/** @jsx m */
import m from "mithril";
/**
 * Card バリアント
 */
export type CardVariant = "elevated" | "outline" | "subtle";
/**
 * Card サイズ
 */
export type CardSize = "sm" | "md" | "lg";
type CardRole = "header" | "body" | "footer" | "title" | "description";
export interface CardRootAttrs {
    /** バリアント */
    variant?: CardVariant;
    /** サイズ */
    size?: CardSize;
    /** 追加クラス */
    class?: string;
    [key: string]: any;
}
export interface CardPartAttrs {
    class?: string;
    [key: string]: any;
}
declare class CardHeaderMarker {
    static __cardRole: CardRole;
    view(): null;
}
declare class CardBodyMarker {
    static __cardRole: CardRole;
    view(): null;
}
declare class CardFooterMarker {
    static __cardRole: CardRole;
    view(): null;
}
declare class CardTitleMarker {
    static __cardRole: CardRole;
    view(): null;
}
declare class CardDescriptionMarker {
    static __cardRole: CardRole;
    view(): null;
}
/**
 * Card Root コンポーネント — コンテンツのグルーピング表示
 *
 * @example
 * ```tsx
 * <Card.Root variant="outline">
 *   <Card.Header>
 *     <Card.Title>カードタイトル</Card.Title>
 *   </Card.Header>
 *   <Card.Body>本文テキスト</Card.Body>
 *   <Card.Footer>フッター</Card.Footer>
 * </Card.Root>
 * ```
 */
declare class CardRoot implements m.ClassComponent<CardRootAttrs> {
    view(vnode: m.Vnode<CardRootAttrs>): JSX.Element;
    private renderChildren;
}
/**
 * Card コンポーネント名前空間
 */
export declare const Card: {
    readonly Root: typeof CardRoot;
    readonly Header: typeof CardHeaderMarker;
    readonly Body: typeof CardBodyMarker;
    readonly Footer: typeof CardFooterMarker;
    readonly Title: typeof CardTitleMarker;
    readonly Description: typeof CardDescriptionMarker;
};
export { CardRoot };
//# sourceMappingURL=Card.d.ts.map