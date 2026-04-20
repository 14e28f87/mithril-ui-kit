/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./AspectRatio.module.scss";

/**
 * AspectRatio の属性
 */
export interface AspectRatioAttrs {
	/** アスペクト比（数値で指定、例: 16/9） */
	ratio?: number;
	/** レンダリングする要素タグ */
	as?: string;
	/** 追加クラス */
	class?: string;
	/** インラインスタイル */
	style?: Record<string, string> | string;
	[key: string]: any;
}

/**
 * @class AspectRatio
 * @description
 * 子要素のアスペクト比を維持するコンポーネント。
 * Chakra UI の AspectRatio に相当する。
 *
 * @example
 * <AspectRatio ratio={16 / 9}>
 *   <img src="photo.jpg" style={{ objectFit: "cover" }} />
 * </AspectRatio>
 */
class AspectRatioComponent implements m.ClassComponent<AspectRatioAttrs> {
	view(vnode: m.Vnode<AspectRatioAttrs>) {
		const { ratio = 4 / 3, as: tag = "div", class: className, style, ...rest } = vnode.attrs;

		const ratioStyle: Record<string, string> = {
			aspectRatio: String(ratio),
		};

		const mergedStyle = typeof style === "string"
			? `aspect-ratio:${ratio};${style}`
			: { ...ratioStyle, ...(style || {}) };

		return m(tag, {
			...rest,
			class: classNames(styles.aspectRatio, className),
			style: mergedStyle,
		}, vnode.children);
	}
}

export { AspectRatioComponent as AspectRatio };
