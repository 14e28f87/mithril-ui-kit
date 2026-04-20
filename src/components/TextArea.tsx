/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./TextArea.module.scss";

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

function capitalize(s: string): string {
	return s.charAt(0).toUpperCase() + s.slice(1);
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
class TextAreaComponent implements m.ClassComponent<TextAreaAttrs> {
	view(vnode: m.Vnode<TextAreaAttrs>) {
		const {
			variant = "outline",
			size = "md",
			autoresize,
			resize = "vertical",
			disabled,
			invalid,
			class: className,
			...rest
		} = vnode.attrs;

		return (
			<textarea
				{...rest}
				disabled={disabled}
				aria-invalid={invalid || undefined}
				class={classNames(
					styles.textarea,
					(styles as any)[`variant${capitalize(variant)}`],
					(styles as any)[`size${capitalize(size)}`],
					{ [styles.disabled]: disabled },
					{ [styles.invalid]: invalid },
					className
				)}
				style={{ resize: autoresize ? "none" : resize }}
				oninput={autoresize ? (e: Event) => {
					const target = e.target as HTMLTextAreaElement;
					target.style.height = "auto";
					target.style.height = target.scrollHeight + "px";
					if (rest.oninput) rest.oninput(e);
				} : rest.oninput}
			/>
		);
	}
}

export { TextAreaComponent as TextArea };
