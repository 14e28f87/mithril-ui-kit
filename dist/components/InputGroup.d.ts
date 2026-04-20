/** @jsx m */
import m from "mithril";
/** サイズ */
export type InputGroupSize = "xs" | "sm" | "md" | "lg";
/** バリアント */
export type InputGroupVariant = "outline" | "filled" | "flushed";
/**
 * InputGroup.Root に渡せる属性
 */
export type InputGroupRootAttrs = {
    /** サイズ（デフォルト: "md"） */
    size?: InputGroupSize;
    /** バリアント（デフォルト: "outline"） */
    variant?: InputGroupVariant;
    /** 無効化 */
    disabled?: boolean;
    /** バリデーションエラー */
    invalid?: boolean;
    /** 追加クラス */
    class?: string;
    /** スタイル */
    style?: Record<string, string>;
};
/** InputGroup.Field に渡せる属性 */
export type InputGroupFieldAttrs = {
    /** 入力値（制御モード） */
    value?: string | null;
    /** 入力時のコールバック */
    oninput?: (value: string) => void;
    /** プレースホルダー */
    placeholder?: string;
    /** input タイプ */
    type?: string;
    /** 無効化 */
    disabled?: boolean;
    /** 読み取り専用 */
    readonly?: boolean;
    /** name 属性 */
    name?: string;
    /** id 属性 */
    id?: string;
    /** aria-label */
    "aria-label"?: string;
    /** 追加クラス */
    class?: string;
    /** スタイル */
    style?: Record<string, string>;
};
/** InputGroup.Addon に渡せる属性 */
export type InputGroupAddonAttrs = {
    /** 配置（デフォルト: auto） */
    placement?: "start" | "end";
    /** 追加クラス */
    class?: string;
    /** スタイル */
    style?: Record<string, string>;
};
/** InputGroup.Element に渡せる属性 */
export type InputGroupElementAttrs = {
    /** 配置（デフォルト: auto） */
    placement?: "start" | "end";
    /** 追加クラス */
    class?: string;
    /** スタイル */
    style?: Record<string, string>;
};
type IGRole = "field" | "addon" | "element";
/** InputGroup.Field — 入力フィールドのマーカー */
export declare class IGFieldMarker implements m.Component<InputGroupFieldAttrs> {
    static __igRole: IGRole;
    view(vnode: m.Vnode<InputGroupFieldAttrs>): JSX.Element;
}
/** InputGroup.Addon — アドオンのマーカー */
export declare class IGAddonMarker implements m.Component<InputGroupAddonAttrs> {
    static __igRole: IGRole;
    view(vnode: m.Vnode<InputGroupAddonAttrs>): JSX.Element;
}
/** InputGroup.Element — オーバーレイ要素のマーカー */
export declare class IGElementMarker implements m.Component<InputGroupElementAttrs> {
    static __igRole: IGRole;
    view(vnode: m.Vnode<InputGroupElementAttrs>): JSX.Element;
}
/**
 * @class InputGroupRoot
 * @description
 * Chakra UI 風の InputGroup compound component。
 *
 * テキスト入力にアドオン（接頭辞/接尾辞）やオーバーレイ要素を追加する。
 * size / variant / disabled / invalid を統一的に管理する。
 *
 * @example
 * <InputGroup.Root size="md" variant="outline">
 *   <InputGroup.Addon>$</InputGroup.Addon>
 *   <InputGroup.Field placeholder="Amount" />
 *   <InputGroup.Element placement="end">✓</InputGroup.Element>
 * </InputGroup.Root>
 */
export declare class InputGroupRoot implements m.Component<InputGroupRootAttrs> {
    view(vnode: m.Vnode<InputGroupRootAttrs>): JSX.Element;
}
/**
 * InputGroup compound component
 *
 * @example
 * ```tsx
 * <InputGroup.Root size="md">
 *   <InputGroup.Addon>$</InputGroup.Addon>
 *   <InputGroup.Field placeholder="金額を入力" />
 * </InputGroup.Root>
 * ```
 */
export declare const InputGroup: {
    Root: typeof InputGroupRoot;
    Field: typeof IGFieldMarker;
    Addon: typeof IGAddonMarker;
    Element: typeof IGElementMarker;
};
export {};
//# sourceMappingURL=InputGroup.d.ts.map