/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Spinner.module.scss";

/**
 * Spinner サイズ
 */
export type SpinnerSize = "inherit" | "xs" | "sm" | "md" | "lg" | "xl";

/**
 * Spinner の属性
 */
export interface SpinnerAttrs {
	/** サイズ */
	size?: SpinnerSize;
	/** カラーパレット */
	colorPalette?: string;
	/** ラベル（アクセシビリティ用） */
	label?: string;
	/** 追加クラス */
	class?: string;
	[key: string]: any;
}

function capitalize(s: string): string {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

/**
 * Spinner コンポーネント — 処理中であることを示すビジュアルキュー
 *
 * @example
 * ```tsx
 * <Spinner size="md" />
 * <Spinner size="lg" colorPalette="blue" />
 * ```
 */
class SpinnerComponent implements m.ClassComponent<SpinnerAttrs> {
	view(vnode: m.Vnode<SpinnerAttrs>) {
		const {
			size = "md",
			colorPalette,
			label = "読み込み中",
			class: className,
			...rest
		} = vnode.attrs;

		return (
			<span
				{...rest}
				role="status"
				class={classNames(
					styles.spinner,
					(styles as any)[`size${capitalize(size)}`],
					colorPalette && (styles as any)[`color${capitalize(colorPalette)}`],
					className
				)}
			>
				<span class={styles.srOnly}>{label}</span>
			</span>
		);
	}
}

export { SpinnerComponent as Spinner };
