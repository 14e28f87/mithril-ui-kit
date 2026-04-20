/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Stack.module.scss";

/**
 * Stack の属性
 */
export interface StackAttrs {
	/** スタック方向 */
	direction?: "row" | "column" | "row-reverse" | "column-reverse";
	/** gap */
	gap?: string | number;
	/** align-items */
	align?: string;
	/** justify-content */
	justify?: string;
	/** flex-wrap */
	wrap?: "wrap" | "nowrap" | "wrap-reverse";
	/** セパレーター要素 */
	separator?: m.Children;
	/** レンダリングする要素タグ */
	as?: string;
	/** 追加クラス */
	class?: string;
	/** インラインスタイル */
	style?: Record<string, string> | string;
	[key: string]: any;
}

/**
 * @class Stack
 * @description
 * 子要素を縦方向または横方向に並べるレイアウトコンポーネント。
 * Chakra UI の Stack に相当する。デフォルトは column 方向。
 *
 * @example
 * <Stack gap="8px">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Stack>
 */
class StackComponent implements m.ClassComponent<StackAttrs> {
	view(vnode: m.Vnode<StackAttrs>) {
		const {
			direction = "column", gap, align, justify, wrap, separator,
			as: tag = "div", class: className, style,
			...rest
		} = vnode.attrs;

		const inlineStyle: Record<string, string> = {};
		inlineStyle.flexDirection = direction;
		if (gap !== undefined && !separator) inlineStyle.gap = typeof gap === "number" ? `${gap}px` : gap;
		if (align) inlineStyle.alignItems = align;
		if (justify) inlineStyle.justifyContent = justify;
		if (wrap) inlineStyle.flexWrap = wrap;

		const mergedStyle = typeof style === "string"
			? `${Object.entries(inlineStyle).map(([k, v]) => `${k.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`)}:${v}`).join(";")}${style ? `;${style}` : ""}`
			: { ...inlineStyle, ...(style || {}) };

		let children = vnode.children;
		// セパレーター挿入
		if (separator && Array.isArray(children)) {
			const flat = (children as any[]).flat().filter((c: any) => c != null && c !== false && c !== "");
			const withSep: m.Children[] = [];
			flat.forEach((child: any, i: number) => {
				if (i > 0) withSep.push(separator);
				withSep.push(child);
			});
			children = withSep;
		}

		return m(tag, {
			...rest,
			class: classNames(styles.stack, className),
			style: mergedStyle,
		}, children);
	}
}

/**
 * HStack — 横方向 Stack のショートカット
 */
class HStackComponent implements m.ClassComponent<StackAttrs> {
	view(vnode: m.Vnode<StackAttrs>) {
		return m(StackComponent, { ...vnode.attrs, direction: "row" }, vnode.children);
	}
}

/**
 * VStack — 縦方向 Stack のショートカット
 */
class VStackComponent implements m.ClassComponent<StackAttrs> {
	view(vnode: m.Vnode<StackAttrs>) {
		return m(StackComponent, { ...vnode.attrs, direction: "column" }, vnode.children);
	}
}

export { StackComponent as Stack, HStackComponent as HStack, VStackComponent as VStack };
export type { StackAttrs as HStackAttrs, StackAttrs as VStackAttrs };
