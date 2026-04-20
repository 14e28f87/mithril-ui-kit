/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Bleed.module.scss";

/**
 * Bleed の属性
 */
export interface BleedAttrs {
	/** 水平方向のネガティブマージン */
	inline?: string | number;
	/** 垂直方向のネガティブマージン */
	block?: string | number;
	/** inline-start 方向 */
	inlineStart?: string | number;
	/** inline-end 方向 */
	inlineEnd?: string | number;
	/** block-start 方向 */
	blockStart?: string | number;
	/** block-end 方向 */
	blockEnd?: string | number;
	/** レンダリングする要素タグ */
	as?: string;
	/** 追加クラス */
	class?: string;
	/** インラインスタイル */
	style?: Record<string, string> | string;
	[key: string]: any;
}

function toNegative(val: string | number): string {
	if (typeof val === "number") return `-${val}px`;
	return val.startsWith("-") ? val : `-${val}`;
}

/**
 * @class Bleed
 * @description
 * コンテナの境界を超えて要素を拡張するコンポーネント。
 * Chakra UI の Bleed に相当する。
 *
 * @example
 * <Box style={{ padding: "20px" }}>
 *   <Bleed inline="20px">
 *     <div style={{ background: "tomato", padding: "20px" }}>Bleed</div>
 *   </Bleed>
 * </Box>
 */
class BleedComponent implements m.ClassComponent<BleedAttrs> {
	view(vnode: m.Vnode<BleedAttrs>) {
		const {
			inline, block, inlineStart, inlineEnd, blockStart, blockEnd,
			as: tag = "div", class: className, style,
			...rest
		} = vnode.attrs;

		const inlineStyle: Record<string, string> = {};
		if (inline !== undefined) inlineStyle.marginInline = toNegative(inline);
		if (block !== undefined) inlineStyle.marginBlock = toNegative(block);
		if (inlineStart !== undefined) inlineStyle.marginInlineStart = toNegative(inlineStart);
		if (inlineEnd !== undefined) inlineStyle.marginInlineEnd = toNegative(inlineEnd);
		if (blockStart !== undefined) inlineStyle.marginBlockStart = toNegative(blockStart);
		if (blockEnd !== undefined) inlineStyle.marginBlockEnd = toNegative(blockEnd);

		const mergedStyle = typeof style === "string"
			? `${Object.entries(inlineStyle).map(([k, v]) => `${k.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`)}:${v}`).join(";")}${style ? `;${style}` : ""}`
			: { ...inlineStyle, ...(style || {}) };

		return m(tag, {
			...rest,
			class: classNames(styles.bleed, className),
			style: mergedStyle,
		}, vnode.children);
	}
}

export { BleedComponent as Bleed };
