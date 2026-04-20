/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./InputGroup.module.scss";

// ===========================
// 型定義
// ===========================

/** サイズ */
export type InputGroupSize = "xs" | "sm" | "md" | "lg";

/** バリアント */
export type InputGroupVariant = "outline" | "filled" | "flushed";

/**
 * InputGroup.Root に渡せる属性
 */
export type InputGroupRootAttrs = {
	/** サイズ（デフォルト: "md"） */
	size?: InputGroupSize;
	/** バリアント（デフォルト: "outline"） */
	variant?: InputGroupVariant;
	/** 無効化 */
	disabled?: boolean;
	/** バリデーションエラー */
	invalid?: boolean;
	/** 追加クラス */
	class?: string;
	/** スタイル */
	style?: Record<string, string>;
};

/** InputGroup.Field に渡せる属性 */
export type InputGroupFieldAttrs = {
	/** 入力値（制御モード） */
	value?: string | null;
	/** 入力時のコールバック */
	oninput?: (value: string) => void;
	/** プレースホルダー */
	placeholder?: string;
	/** input タイプ */
	type?: string;
	/** 無効化 */
	disabled?: boolean;
	/** 読み取り専用 */
	readonly?: boolean;
	/** name 属性 */
	name?: string;
	/** id 属性 */
	id?: string;
	/** aria-label */
	"aria-label"?: string;
	/** 追加クラス */
	class?: string;
	/** スタイル */
	style?: Record<string, string>;
};

/** InputGroup.Addon に渡せる属性 */
export type InputGroupAddonAttrs = {
	/** 配置（デフォルト: auto） */
	placement?: "start" | "end";
	/** 追加クラス */
	class?: string;
	/** スタイル */
	style?: Record<string, string>;
};

/** InputGroup.Element に渡せる属性 */
export type InputGroupElementAttrs = {
	/** 配置（デフォルト: auto） */
	placement?: "start" | "end";
	/** 追加クラス */
	class?: string;
	/** スタイル */
	style?: Record<string, string>;
};

// ===========================
// 内部ロール定義
// ===========================

type IGRole = "field" | "addon" | "element";

// ===========================
// マーカーコンポーネント
// ===========================

/** InputGroup.Field — 入力フィールドのマーカー */
export class IGFieldMarker implements m.Component<InputGroupFieldAttrs> {
	static __igRole: IGRole = "field";
	view(vnode: m.Vnode<InputGroupFieldAttrs>) {
		return <div>{vnode.children}</div>;
	}
}

/** InputGroup.Addon — アドオンのマーカー */
export class IGAddonMarker implements m.Component<InputGroupAddonAttrs> {
	static __igRole: IGRole = "addon";
	view(vnode: m.Vnode<InputGroupAddonAttrs>) {
		return <div>{vnode.children}</div>;
	}
}

/** InputGroup.Element — オーバーレイ要素のマーカー */
export class IGElementMarker implements m.Component<InputGroupElementAttrs> {
	static __igRole: IGRole = "element";
	view(vnode: m.Vnode<InputGroupElementAttrs>) {
		return <div>{vnode.children}</div>;
	}
}

// ===========================
// ユーティリティ
// ===========================

function capitalize(s: string): string {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

type MarkerEntry = { role: IGRole; vnode: m.Vnode<any>; index: number };

/** 子要素から全マーカーを順序付きで抽出 */
function collectMarkers(children: m.Children): MarkerEntry[] {
	const result: MarkerEntry[] = [];
	if (!children) return result;
	const arr = Array.isArray(children) ? children : [children];
	for (let i = 0; i < arr.length; i++) {
		const child = arr[i];
		if (child && typeof child === "object" && "tag" in child) {
			const tag = child.tag as any;
			if (tag && tag.__igRole) {
				result.push({ role: tag.__igRole, vnode: child, index: i });
			}
		}
	}
	return result;
}

// ===========================
// メインコンポーネント
// ===========================

/**
 * @class InputGroupRoot
 * @description
 * Chakra UI 風の InputGroup compound component。
 *
 * テキスト入力にアドオン（接頭辞/接尾辞）やオーバーレイ要素を追加する。
 * size / variant / disabled / invalid を統一的に管理する。
 *
 * @example
 * <InputGroup.Root size="md" variant="outline">
 *   <InputGroup.Addon>$</InputGroup.Addon>
 *   <InputGroup.Field placeholder="Amount" />
 *   <InputGroup.Element placement="end">✓</InputGroup.Element>
 * </InputGroup.Root>
 */
export class InputGroupRoot implements m.Component<InputGroupRootAttrs> {
	view(vnode: m.Vnode<InputGroupRootAttrs>) {
		const attrs = vnode.attrs;
		const size = attrs.size ?? "md";
		const variant = attrs.variant ?? "outline";

		const markers = collectMarkers(vnode.children);
		const fieldMarker = markers.find((e) => e.role === "field");
		const addonMarkers = markers.filter((e) => e.role === "addon");
		const elementMarkers = markers.filter((e) => e.role === "element");

		// 配置を判定: addon/element が field の前にある → start、後 → end
		const fieldIdx = fieldMarker ? fieldMarker.index : Infinity;

		const hasAddonStart = addonMarkers.some((e) => {
			if (e.vnode.attrs?.placement) return e.vnode.attrs.placement === "start";
			return e.index < fieldIdx;
		});
		const hasAddonEnd = addonMarkers.some((e) => {
			if (e.vnode.attrs?.placement) return e.vnode.attrs.placement === "end";
			return e.index > fieldIdx;
		});

		// Element の padding 計算 (left/right padding on field)
		const elementStartMarkers = elementMarkers.filter((e) => {
			if (e.vnode.attrs?.placement) return e.vnode.attrs.placement === "start";
			return e.index < fieldIdx;
		});
		const elementEndMarkers = elementMarkers.filter((e) => {
			if (e.vnode.attrs?.placement) return e.vnode.attrs.placement === "end";
			return e.index > fieldIdx;
		});

		// element 幅に応じた field padding
		const elementWidth = size === "xs" ? 1.5 : size === "sm" ? 2 : size === "lg" ? 3 : 2.5;
		const extraStyle: Record<string, string> = {};
		if (elementStartMarkers.length > 0) {
			extraStyle.paddingLeft = `${elementWidth * elementStartMarkers.length}rem`;
		}
		if (elementEndMarkers.length > 0) {
			extraStyle.paddingRight = `${elementWidth * elementEndMarkers.length}rem`;
		}

		return (
			<div
				class={classNames(
					styles.root,
					(styles as any)[`size${capitalize(size)}`],
					(styles as any)[`variant${capitalize(variant)}`],
					{
						[styles.hasAddonStart]: hasAddonStart,
						[styles.hasAddonEnd]: hasAddonEnd,
						[styles.invalid]: attrs.invalid,
						[styles.disabled]: attrs.disabled,
					},
					attrs.class,
				)}
				style={attrs.style}
				data-scope="input-group"
				data-part="root"
			>
				{/* Start addons */}
				{addonMarkers
					.filter((e) => {
						if (e.vnode.attrs?.placement) return e.vnode.attrs.placement === "start";
						return e.index < fieldIdx;
					})
					.map((e) => (
						<span
							class={classNames(styles.addon, styles.addonStart, e.vnode.attrs?.class)}
							style={e.vnode.attrs?.style}
							data-part="addon"
						>
							{e.vnode.children}
						</span>
					))}

				{/* Start elements */}
				{elementStartMarkers.map((e) => (
					<span
						class={classNames(styles.element, styles.elementStart, e.vnode.attrs?.class)}
						style={e.vnode.attrs?.style}
						data-part="element"
					>
						{e.vnode.children}
					</span>
				))}

				{/* Field */}
				{fieldMarker && (
					<input
						class={classNames(styles.field, fieldMarker.vnode.attrs?.class)}
						style={{ ...(fieldMarker.vnode.attrs?.style ?? {}), ...extraStyle }}
						type={fieldMarker.vnode.attrs?.type ?? "text"}
						value={fieldMarker.vnode.attrs?.value ?? ""}
						placeholder={fieldMarker.vnode.attrs?.placeholder}
						disabled={fieldMarker.vnode.attrs?.disabled ?? attrs.disabled}
						readonly={fieldMarker.vnode.attrs?.readonly}
						name={fieldMarker.vnode.attrs?.name}
						id={fieldMarker.vnode.attrs?.id}
						aria-label={fieldMarker.vnode.attrs?.["aria-label"]}
						aria-invalid={attrs.invalid || undefined}
						data-part="field"
						oninput={(e: Event) => {
							fieldMarker.vnode.attrs?.oninput?.((e.target as HTMLInputElement).value);
						}}
					/>
				)}

				{/* End elements */}
				{elementEndMarkers.map((e) => (
					<span
						class={classNames(styles.element, styles.elementEnd, e.vnode.attrs?.class)}
						style={e.vnode.attrs?.style}
						data-part="element"
					>
						{e.vnode.children}
					</span>
				))}

				{/* End addons */}
				{addonMarkers
					.filter((e) => {
						if (e.vnode.attrs?.placement) return e.vnode.attrs.placement === "end";
						return e.index > fieldIdx;
					})
					.map((e) => (
						<span
							class={classNames(styles.addon, styles.addonEnd, e.vnode.attrs?.class)}
							style={e.vnode.attrs?.style}
							data-part="addon"
						>
							{e.vnode.children}
						</span>
					))}
			</div>
		);
	}
}

// ===========================
// バンドルエクスポート
// ===========================

/**
 * InputGroup compound component
 *
 * @example
 * ```tsx
 * <InputGroup.Root size="md">
 *   <InputGroup.Addon>$</InputGroup.Addon>
 *   <InputGroup.Field placeholder="金額を入力" />
 * </InputGroup.Root>
 * ```
 */
export const InputGroup = {
	Root: InputGroupRoot,
	Field: IGFieldMarker,
	Addon: IGAddonMarker,
	Element: IGElementMarker,
};
