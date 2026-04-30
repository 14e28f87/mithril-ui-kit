/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Stack.module.scss";

/**
 * レスポンシブ方向指定のブレークポイントオブジェクト
 */
export interface ResponsiveDirection {
	/** デフォルト（モバイルファースト） */
	base?: "row" | "column" | "row-reverse" | "column-reverse";
	/** ≥576px */
	sm?: "row" | "column" | "row-reverse" | "column-reverse";
	/** ≥768px */
	md?: "row" | "column" | "row-reverse" | "column-reverse";
	/** ≥992px */
	lg?: "row" | "column" | "row-reverse" | "column-reverse";
	/** ≥1200px */
	xl?: "row" | "column" | "row-reverse" | "column-reverse";
	/** ≥1400px */
	xxl?: "row" | "column" | "row-reverse" | "column-reverse";
}

/**
 * Stack の属性
 */
export interface StackAttrs {
	/**
	 * スタック方向。文字列またはレスポンシブオブジェクトで指定可能。
	 * @example
	 * direction="row"
	 * direction={{ base: "column", md: "row" }}
	 */
	direction?: "row" | "column" | "row-reverse" | "column-reverse" | ResponsiveDirection;
	/** gap */
	gap?: string | number;
	/** align-items */
	align?: string;
	/** justify-content */
	justify?: string;
	/** flex-wrap */
	wrap?: "wrap" | "nowrap" | "wrap-reverse";
	/** セパレーター要素。StackSeparator を渡すと方向に合わせて自動回転する */
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
 * StackSeparator の属性
 */
export interface StackSeparatorAttrs {
	/** Stack から注入される方向（手動指定も可） */
	_direction?: "row" | "column" | "row-reverse" | "column-reverse";
	/** 追加クラス */
	class?: string;
	/** インラインスタイル */
	style?: Record<string, string> | string;
	[key: string]: any;
}

/** Bootstrap 5 互換ブレークポイント (px) */
const BREAKPOINTS: Record<string, number> = {
	sm: 576,
	md: 768,
	lg: 992,
	xl: 1200,
	xxl: 1400,
};

/**
 * @class StackSeparator
 * @description
 * Stack の方向（縦/横）に合わせて自動で向きが変わるセパレーターコンポーネント。
 * Stack の `separator` prop に渡すと、Stack が `_direction` を自動的に注入する。
 *
 * @example
 * <Stack direction="row" separator={<StackSeparator />}>
 *   <div>A</div>
 *   <div>B</div>
 * </Stack>
 */
class StackSeparatorComponent implements m.ClassComponent<StackSeparatorAttrs> {
	view(vnode: m.Vnode<StackSeparatorAttrs>) {
		const { _direction = "column", class: className, style, ...rest } = vnode.attrs;
		// 横並び Stack の場合 → 縦線、縦並び Stack の場合 → 横線
		const isRow = _direction === "row" || _direction === "row-reverse";
		const orientation = isRow ? "vertical" : "horizontal";

		const baseStyle: Record<string, string> = isRow
			? { alignSelf: "stretch", borderInlineStartWidth: "1px", borderInlineStartStyle: "solid" }
			: { width: "100%", borderTopWidth: "1px", borderTopStyle: "solid" };

		const mergedStyle = typeof style === "string"
			? style
			: { ...baseStyle, ...(style || {}) };

		return m("hr", {
			...rest,
			"aria-orientation": orientation,
			class: classNames(styles.stackSeparator, className),
			style: mergedStyle,
		});
	}
}

/**
 * vnode が StackSeparator かどうかを判定する
 */
function isStackSeparatorVnode(v: any): boolean {
	return v != null && typeof v === "object" && v.tag === StackSeparatorComponent;
}

/**
 * StackSeparator vnode に `_direction` を注入して複製する
 */
function injectDirection(
	sep: m.Children,
	direction: "row" | "column" | "row-reverse" | "column-reverse",
): m.Children {
	if (!isStackSeparatorVnode(sep)) return sep;
	const v = sep as m.Vnode<StackSeparatorAttrs>;
	return m(StackSeparatorComponent, { ...v.attrs, _direction: direction });
}

/**
 * @class Stack
 * @description
 * 子要素を縦方向または横方向に並べるレイアウトコンポーネント。
 * Chakra UI の Stack に相当する。デフォルトは column 方向。
 * `direction` にオブジェクトを渡すとレスポンシブ方向切り替えが有効になる。
 *
 * @example
 * <Stack gap="8px">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Stack>
 *
 * @example レスポンシブ方向
 * <Stack direction={{ base: "column", md: "row" }} gap="16px">
 *   <div>A</div>
 *   <div>B</div>
 * </Stack>
 */
class StackComponent implements m.ClassComponent<StackAttrs> {
	/** レスポンシブ用スタイル要素を管理する一意 ID */
	private uid = `muk-stack-${Math.random().toString(36).slice(2, 9)}`;

	/** レスポンシブ direction の場合に <style> を生成・更新する */
	private syncResponsiveStyle(direction: ResponsiveDirection): void {
		const id = `style-${this.uid}`;
		let styleEl = document.getElementById(id) as HTMLStyleElement | null;
		if (!styleEl) {
			styleEl = document.createElement("style");
			styleEl.id = id;
			document.head.appendChild(styleEl);
		}
		const sel = `[data-muk-stack-id="${this.uid}"]`;
		const lines: string[] = [];
		if (direction.base) lines.push(`${sel}{flex-direction:${direction.base}}`);
		for (const [bp, px] of Object.entries(BREAKPOINTS)) {
			const val = (direction as Record<string, string>)[bp];
			if (val) lines.push(`@media(min-width:${px}px){${sel}{flex-direction:${val}}}`);
		}
		styleEl.textContent = lines.join("\n");
	}

	oncreate(vnode: m.VnodeDOM<StackAttrs>): void {
		if (typeof vnode.attrs.direction === "object" && vnode.attrs.direction !== null) {
			this.syncResponsiveStyle(vnode.attrs.direction as ResponsiveDirection);
		}
	}

	onupdate(vnode: m.VnodeDOM<StackAttrs>): void {
		if (typeof vnode.attrs.direction === "object" && vnode.attrs.direction !== null) {
			this.syncResponsiveStyle(vnode.attrs.direction as ResponsiveDirection);
		}
	}

	onremove(): void {
		document.getElementById(`style-${this.uid}`)?.remove();
	}

	view(vnode: m.Vnode<StackAttrs>) {
		const {
			direction: directionProp = "column", gap, align, justify, wrap, separator,
			as: tag = "div", class: className, style,
			...rest
		} = vnode.attrs;

		const isResponsive = typeof directionProp === "object" && directionProp !== null;
		// 非レスポンシブ時の確定方向（セパレーター向き判定・inline style に使用）
		const resolvedDirection: "row" | "column" | "row-reverse" | "column-reverse" = isResponsive
			? ((directionProp as ResponsiveDirection).base ?? "column")
			: (directionProp as "row" | "column" | "row-reverse" | "column-reverse");

		const inlineStyle: Record<string, string> = {};
		if (!isResponsive) {
			inlineStyle.flexDirection = resolvedDirection;
		}
		if (gap !== undefined && !separator) inlineStyle.gap = typeof gap === "number" ? `${gap}px` : gap;
		if (align) inlineStyle.alignItems = align;
		if (justify) inlineStyle.justifyContent = justify;
		if (wrap) inlineStyle.flexWrap = wrap;

		const mergedStyle = typeof style === "string"
			? `${Object.entries(inlineStyle).map(([k, v]) => `${k.replace(/[A-Z]/g, c => `-${c.toLowerCase()}`)}:${v}`).join(";")}${style ? `;${style}` : ""}`
			: { ...inlineStyle, ...(style || {}) };

		let children = vnode.children;
		// セパレーター挿入（StackSeparator には resolvedDirection を注入）
		if (separator && Array.isArray(children)) {
			const flat = (children as any[]).flat().filter((c: any) => c != null && c !== false && c !== "");
			const withSep: m.Children[] = [];
			flat.forEach((child: any, i: number) => {
				if (i > 0) withSep.push(injectDirection(separator, resolvedDirection));
				withSep.push(child);
			});
			children = withSep;
		}

		const extraAttrs = isResponsive ? { "data-muk-stack-id": this.uid } : {};

		return m(tag, {
			...rest,
			...extraAttrs,
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

export {
	StackComponent as Stack,
	HStackComponent as HStack,
	VStackComponent as VStack,
	StackSeparatorComponent as StackSeparator,
};
export type { StackAttrs as HStackAttrs, StackAttrs as VStackAttrs };
