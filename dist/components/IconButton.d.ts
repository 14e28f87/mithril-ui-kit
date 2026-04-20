/** @jsx m */
import m from "mithril";
import type { ButtonVariant, ButtonSize } from "./Button.js";
/**
 * IconButton の属性
 */
export interface IconButtonAttrs {
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
    /** 角丸 */
    rounded?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
    /** アクセシビリティラベル */
    "aria-label"?: string;
    /** 追加クラス */
    class?: string;
    /** クリックイベント */
    onclick?: (e: Event) => void;
    [key: string]: any;
}
/**
 * @class IconButton
 * @description
 * アイコンのみを表示する正方形のボタンコンポーネント。
 * Chakra UI の IconButton に相当する。
 *
 * @example
 * <IconButton aria-label="検索" variant="outline">
 *   <i class="bi bi-search" />
 * </IconButton>
 */
declare class IconButtonComponent implements m.ClassComponent<IconButtonAttrs> {
    view(vnode: m.Vnode<IconButtonAttrs>): JSX.Element;
}
export { IconButtonComponent as IconButton };
//# sourceMappingURL=IconButton.d.ts.map