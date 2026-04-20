/** @jsx m */
import m from "mithril";
/**
 * PinInput サイズ
 */
export type PinInputSize = "xs" | "sm" | "md" | "lg" | "xl";
export interface PinInputRootAttrs {
    /** サイズ */
    size?: PinInputSize;
    /** 入力桁数 */
    count?: number;
    /** 値の配列 */
    value?: string[];
    /** 値変更コールバック */
    onValueChange?: (values: string[]) => void;
    /** 全入力完了コールバック */
    onComplete?: (valueString: string) => void;
    /** マスク表示（パスワード用） */
    mask?: boolean;
    /** OTP自動補完ヒント */
    otp?: boolean;
    /** プレースホルダー */
    placeholder?: string;
    /** 入力タイプ */
    type?: "alphanumeric" | "numeric" | "alphabetic";
    /** 無効状態 */
    disabled?: boolean;
    /** 追加クラス */
    class?: string;
    [key: string]: any;
}
/**
 * PinInput Root コンポーネント — PIN / OTP 入力フィールド
 *
 * @example
 * ```tsx
 * <PinInput.Root count={4} onComplete={v => console.log("完了:", v)} />
 * <PinInput.Root count={6} otp mask />
 * ```
 */
declare class PinInputRoot implements m.ClassComponent<PinInputRootAttrs> {
    private values;
    private inputRefs;
    oninit(vnode: m.Vnode<PinInputRootAttrs>): void;
    view(vnode: m.Vnode<PinInputRootAttrs>): JSX.Element;
    private isValid;
    private handleInput;
    private handleKeydown;
    private handlePaste;
}
/**
 * PinInput コンポーネント名前空間
 */
export declare const PinInput: {
    readonly Root: typeof PinInputRoot;
};
export { PinInputRoot };
//# sourceMappingURL=PinInput.d.ts.map