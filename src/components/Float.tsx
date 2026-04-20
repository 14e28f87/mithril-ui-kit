/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Float.module.scss";

/** Float の配置タイプ */
export type FloatPlacement =
	| "top-start" | "top-center" | "top-end"
	| "middle-start" | "middle-center" | "middle-end"
	| "bottom-start" | "bottom-center" | "bottom-end";

/**
 * Float の属性
 */
export interface FloatAttrs {
	/** 配置 */
	placement?: FloatPlacement;
	/** X オフセット */
	offsetX?: string | number;
	/** Y オフセット */
	offsetY?: string | number;
	/** X・Y 両方のオフセット */
	offset?: string | number;
	/** レンダリングする要素タグ */
	as?: string;
	/** 追加クラス */
	class?: string;
	/** インラインスタイル */
	style?: Record<string, string> | string;
	[key: string]: any;
}

function capitalize(s: string): string {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

function camelCase(str: string): string {
	return str.split("-").map((part, i) => i === 0 ? part : capitalize(part)).join("");
}

/**
 * @class Float
 * @description
 * 親要素のエッジにアンカーする位置決めコンポーネント。
 * Chakra UI の Float に相当する。親要素に position: relative が必要。
 *
 * @example
 * <Box style={{ position: "relative" }}>
 *   <Float placement="top-end">
 *     <Badge>3</Badge>
 *   </Float>
 * </Box>
 */
class FloatComponent implements m.ClassComponent<FloatAttrs> {
	view(vnode: m.Vnode<FloatAttrs>) {
		const {
			placement = "top-end", offsetX, offsetY, offset,
			as: tag = "div", class: className, style,
			...rest
		} = vnode.attrs;

		const placementClass = (styles as any)[camelCase(placement)] || "";

		const inlineStyle: Record<string, string> = {};
		const offX = offsetX ?? offset;
		const offY = offsetY ?? offset;
		if (offX !== undefined) inlineStyle["--float-offset-x"] = typeof offX === "number" ? `${offX}px` : offX;
		if (offY !== undefined) inlineStyle["--float-offset-y"] = typeof offY === "number" ? `${offY}px` : offY;

		const mergedStyle = typeof style === "string"
			? `${Object.entries(inlineStyle).map(([k, v]) => `${k}:${v}`).join(";")}${style ? `;${style}` : ""}`
			: { ...inlineStyle, ...(style || {}) };

		return m(tag, {
			...rest,
			class: classNames(styles.float, placementClass, className),
			style: mergedStyle,
		}, vnode.children);
	}
}

export { FloatComponent as Float };
