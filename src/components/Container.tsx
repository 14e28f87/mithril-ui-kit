/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Container.module.scss";

/**
 * Container の属性
 */
export interface ContainerAttrs {
	/** 最大幅 */
	maxWidth?: string;
	/** コンテンツを中央揃えにする */
	centerContent?: boolean;
	/** 幅いっぱいに広がる */
	fluid?: boolean;
	/** レンダリングする要素タグ */
	as?: string;
	/** 追加クラス */
	class?: string;
	/** インラインスタイル */
	style?: Record<string, string> | string;
	[key: string]: any;
}

/**
 * @class Container
 * @description
 * コンテンツの幅を制約するコンテナコンポーネント。
 * Chakra UI の Container に相当する。
 *
 * @example
 * <Container maxWidth="960px">
 *   <p>コンテンツ...</p>
 * </Container>
 */
class ContainerComponent implements m.ClassComponent<ContainerAttrs> {
	view(vnode: m.Vnode<ContainerAttrs>) {
		const {
			maxWidth, centerContent, fluid,
			as: tag = "div", class: className, style,
			...rest
		} = vnode.attrs;

		const inlineStyle: Record<string, string> = {};
		if (maxWidth && !fluid) inlineStyle.maxWidth = maxWidth;

		const mergedStyle = typeof style === "string"
			? `${Object.entries(inlineStyle).map(([k, v]) => `${k.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`)}:${v}`).join(";")}${style ? `;${style}` : ""}`
			: { ...inlineStyle, ...(style || {}) };

		return m(tag, {
			...rest,
			class: classNames(
				styles.container,
				fluid && styles.fluid,
				centerContent && styles.centerContent,
				className
			),
			style: mergedStyle,
		}, vnode.children);
	}
}

export { ContainerComponent as Container };
