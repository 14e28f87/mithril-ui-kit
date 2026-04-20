/** @jsx m */
import m from "mithril";
/**
 * TextArea バリアント
 */
export type TextAreaVariant = "outline" | "subtle" | "flushed";
/**
 * TextArea サイズ
 */
export type TextAreaSize = "xs" | "sm" | "md" | "lg" | "xl";
/**
 * TextArea の属性
 */
export interface TextAreaAttrs {
    /** バリアント */
    variant?: TextAreaVariant;
    /** サイズ */
    size?: TextAreaSize;
    /** 自動リサイズ */
    autoresize?: boolean;
    /** リサイズ方向 */
    resize?: "none" | "vertical" | "horizontal" | "both";
    /** 無効状態 */
    disabled?: boolean;
    /** エラー状態 */
    invalid?: boolean;
    /** プレースホルダー */
    placeholder?: string;
    /** 追加クラス */
    class?: string;
    [key: string]: any;
}
/**
 * TextArea コンポーネント — 複数行テキスト入力
 *
 * @example
 * ```tsx
 * <TextArea placeholder="コメントを入力..." />
 * <TextArea variant="flushed" size="lg" autoresize />
 * ```
 */
declare class TextAreaComponent implements m.ClassComponent<TextAreaAttrs> {
    view(vnode: m.Vnode<TextAreaAttrs>): JSX.Element;
}
export { TextAreaComponent as TextArea };
//# sourceMappingURL=TextArea.d.ts.map