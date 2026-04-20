/** @jsx m */
import m from "mithril";
/** Button のバリアント */
export type ButtonVariant = "solid" | "subtle" | "surface" | "outline" | "ghost" | "plain";
/** Button のサイズ */
export type ButtonSize = "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
/**
 * Button の属性
 */
export interface ButtonAttrs {
    /** バリアント */
    variant?: ButtonVariant;
    /** サイズ */
    size?: ButtonSize;
    /** カラーパレット */
    colorPalette?: string;
    /** 無効状態 */
    disabled?: boolean;
    /** ローディング状態 */
    loading?: boolean;
    /** ローディング中のテキスト */
    loadingText?: string;
    /** スピナーの表示位置 */
    spinnerPlacement?: "start" | "end";
    /** 角丸 */
    rounded?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
    /** レンダリングする要素タグ */
    as?: string;
    /** 追加クラス */
    class?: string;
    /** クリックイベント */
    onclick?: (e: Event) => void;
    [key: string]: any;
}
/**
 * @class Button
 * @description
 * アクションやイベントをトリガーするボタンコンポーネント。
 * Chakra UI の Button に相当する。
 *
 * @example
 * <Button variant="solid" colorPalette="blue">クリック</Button>
 * <Button variant="outline" size="lg" loading>保存中...</Button>
 */
declare class ButtonComponent implements m.ClassComponent<ButtonAttrs> {
    view(vnode: m.Vnode<ButtonAttrs>): m.Vnode<any, any>;
}
/**
 * ButtonGroup の属性
 */
export interface ButtonGroupAttrs {
    /** 子要素を接着する */
    attached?: boolean;
    /** サイズ */
    size?: ButtonSize;
    /** バリアント */
    variant?: ButtonVariant;
    /** gap */
    gap?: string | number;
    /** 追加クラス */
    class?: string;
    [key: string]: any;
}
/**
 * @class ButtonGroup
 * @description ボタンのグループ化
 */
declare class ButtonGroupComponent implements m.ClassComponent<ButtonGroupAttrs> {
    view(vnode: m.Vnode<ButtonGroupAttrs>): JSX.Element;
}
export { ButtonComponent as Button, ButtonGroupComponent as ButtonGroup };
//# sourceMappingURL=Button.d.ts.map