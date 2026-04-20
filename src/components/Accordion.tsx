/** @jsx m */
/**
 * @fileoverview
 * Accordion — Chakra UI 現行 API 準拠の compound component 型アコーディオン
 *
 * Chakra UI の `Accordion.Root` / `Accordion.Item` 系の命名規則に合わせた
 * Mithril.js 用アコーディオンコンポーネント。
 * 旧 `Accordion` は `AccordionClassic` として継続提供する。
 *
 * 使い方:
 * ```tsx
 * <Accordion.Root collapsible variant="enclosed">
 *   <Accordion.Item value="item-1">
 *     <Accordion.ItemTrigger>
 *       見出し
 *       <Accordion.ItemIndicator />
 *     </Accordion.ItemTrigger>
 *     <Accordion.ItemContent>
 *       <Accordion.ItemBody>本文</Accordion.ItemBody>
 *     </Accordion.ItemContent>
 *   </Accordion.Item>
 * </Accordion.Root>
 * ```
 *
 * @module Accordion
 */
/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Accordion.module.scss";

/** アコーディオン項目の識別値。文字列または数値 */
export type AccordionValue = string | number;

/** サイズバリエーション */
export type AccordionSize = "sm" | "md" | "lg";

/** 外観バリエーション */
export type AccordionVariant = "outline" | "subtle" | "enclosed" | "plain";

/** レイアウト方向 */
export type AccordionOrientation = "vertical" | "horizontal";

/**
 * 値変更イベントの詳細
 * @property {AccordionValue[]} value - 現在開いている項目の value 配列
 * @property {number[]} indices - 現在開いている項目のインデックス配列
 */
export type AccordionValueChangeDetails = {
	value: AccordionValue[];
	indices: number[];
};

/**
 * フォーカス変更イベントの詳細
 * @property {AccordionValue} value - フォーカスされた項目の value
 * @property {number} index - フォーカスされた項目のインデックス
 */
export type AccordionFocusChangeDetails = {
	value: AccordionValue;
	index: number;
};

/**
 * Accordion.Root に渡せる属性
 */
export type AccordionRootAttrs = {
	/** 複数項目の同時展開を許可するか */
	multiple?: boolean;
	/** すべての項目を閉じることを許可するか（single モード時） */
	collapsible?: boolean;
	/** 制御モード: 展開する項目の value（単体 or 配列） */
	value?: AccordionValue | AccordionValue[] | null;
	/** 非制御モード: 初期展開する項目の value */
	defaultValue?: AccordionValue | AccordionValue[] | null;
	/** 展開状態が変わったときのコールバック */
	onValueChange?: (details: AccordionValueChangeDetails) => void;
	/** フォーカスが移動したときのコールバック */
	onFocusChange?: (details: AccordionFocusChangeDetails) => void;
	/** 全項目を一括で無効化するか */
	disabled?: boolean;
	/** true にすると、一度も開いていない項目のコンテンツ DOM を生成しない */
	lazyMount?: boolean;
	/** true にすると、閉じた項目のコンテンツ DOM を即座に破棄する */
	unmountOnExit?: boolean;
	/** キーボードナビゲーションの方向 */
	orientation?: AccordionOrientation;
	/** 外観バリエーション（デフォルト: "outline"） */
	variant?: AccordionVariant;
	/** サイズ（デフォルト: "md"） */
	size?: AccordionSize;
	/** 各要素のカスタム ID 生成関数 */
	ids?: Partial<{
		root: string;
		item: (value: AccordionValue) => string;
		itemContent: (value: AccordionValue) => string;
		itemTrigger: (value: AccordionValue) => string;
	}>;
	/** ルート要素の id 属性 */
	id?: string;
	/** ルート要素の追加 CSS クラス */
	class?: string;
	/** ルート要素のインラインスタイル */
	style?: Record<string, string>;
};

/** Accordion.Item に渡せる属性 */
export type AccordionItemAttrs = {
	/** この項目の識別値。省略するとインデックスが使われる */
	value?: AccordionValue;
	/** 個別に無効化するか */
	disabled?: boolean;
	class?: string;
	style?: Record<string, string>;
};

/** Accordion.ItemTrigger に渡せる属性 */
export type AccordionItemTriggerAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Accordion.ItemContent に渡せる属性 */
export type AccordionItemContentAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Accordion.ItemBody に渡せる属性 */
export type AccordionItemBodyAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Accordion.ItemIndicator に渡せる属性 */
export type AccordionItemIndicatorAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** 子コンポーネントの役割を示す内部型 */
type AccordionRole = "item" | "item-trigger" | "item-content" | "item-body" | "item-indicator";

/** collectItems() が返すパース済み Item 構造 */
type ParsedAccordionItem = {
	index: number;
	value: AccordionValue;
	disabled: boolean;
	className?: string;
	style?: Record<string, string>;
	triggerVNode?: m.Vnode<AccordionItemTriggerAttrs>;
	contentVNode?: m.Vnode<AccordionItemContentAttrs>;
};

/** vnode.children を平坦な配列に展開する（null/undefined/boolean を除去） */
function toChildArray(children: m.Children): any[] {
	if (Array.isArray(children)) {
		return children.flatMap((child) => toChildArray(child));
	}

	if (children === null || children === undefined || typeof children === "boolean") {
		return [];
	}

	return [children];
}

/** 値が vnode 的な構造かどうかを判定する */
function isVnodeLike(value: any): value is m.Vnode<any> {
	return !!value && typeof value === "object" && "tag" in value;
}

/** vnode の tag から Accordion サブコンポーネントのロールを取得する */
function getAccordionRole(value: any): AccordionRole | undefined {
	if (!isVnodeLike(value)) {
		return undefined;
	}

	const tag = value.tag as { __accordionRole?: AccordionRole };
	return tag?.__accordionRole;
}

/** value を ID 安全な文字列に変換する（英数字・ハイフン・アンダースコア以外を除去） */
function sanitizeValue(value: AccordionValue): string {
	return String(value).replace(/[^a-zA-Z0-9_-]+/g, "-");
}

/** 先頭を大文字にする（CSS クラス名の生成用） */
function capitalize(value: string): string {
	return value.charAt(0).toUpperCase() + value.slice(1);
}

/**
 * @class AccordionItem
 * @description
 * アコーディオンの各項目を表すマーカーコンポーネント。
 * 実際の描画は `AccordionRoot.view()` が担うため、このクラスの view はフォールバック用。
 * `__accordionRole = "item"` で役割を識別させている。
 */
export class AccordionItem implements m.Component<AccordionItemAttrs> {
	public static __accordionRole: AccordionRole = "item";

	public view(vnode: m.Vnode<AccordionItemAttrs>) {
		return <div class={vnode.attrs.class} style={vnode.attrs.style}>{vnode.children}</div>;
	}
}

/**
 * @class AccordionItemTrigger
 * @description 開閉トリガーボタンのマーカー。実際の描画は Root が担う。
 */
export class AccordionItemTrigger implements m.Component<AccordionItemTriggerAttrs> {
	public static __accordionRole: AccordionRole = "item-trigger";

	public view(vnode: m.Vnode<AccordionItemTriggerAttrs>) {
		return <button type="button" class={vnode.attrs.class} style={vnode.attrs.style}>{vnode.children}</button>;
	}
}

/**
 * @class AccordionItemContent
 * @description コンテンツ領域のマーカー。lazyMount / unmountOnExit の制御は Root が行う。
 */
export class AccordionItemContent implements m.Component<AccordionItemContentAttrs> {
	public static __accordionRole: AccordionRole = "item-content";

	public view(vnode: m.Vnode<AccordionItemContentAttrs>) {
		return <div class={vnode.attrs.class} style={vnode.attrs.style}>{vnode.children}</div>;
	}
}

/**
 * @class AccordionItemBody
 * @description コンテンツ内の本文領域マーカー。省略しても Root 側で自動ラップされる。
 */
export class AccordionItemBody implements m.Component<AccordionItemBodyAttrs> {
	public static __accordionRole: AccordionRole = "item-body";

	public view(vnode: m.Vnode<AccordionItemBodyAttrs>) {
		return <div class={vnode.attrs.class} style={vnode.attrs.style}>{vnode.children}</div>;
	}
}

/**
 * @class AccordionItemIndicator
 * @description 開閉状態を示すインジケーターのマーカー。デフォルトはシェブロン SVG。
 */
export class AccordionItemIndicator implements m.Component<AccordionItemIndicatorAttrs> {
	public static __accordionRole: AccordionRole = "item-indicator";

	public view(vnode: m.Vnode<AccordionItemIndicatorAttrs>) {
		return <span class={vnode.attrs.class} style={vnode.attrs.style}>{vnode.children}</span>;
	}
}

/**
 * @class AccordionRoot
 * @description
 * Accordion のルートコンポーネント。
 * 子の `Accordion.Item` を収集・解析し、展開状態管理・キーボードナビゲーション・
 * ARIA 属性付与など主要ロジックを担う。
 *
 * 主な機能:
 * - 単一/複数展開モード (`multiple`)
 * - 全閉じ許可 (`collapsible`)
 * - 制御/非制御両対応 (`value` vs `defaultValue`)
 * - バリアント・サイズ・方向のカスタマイズ
 * - lazyMount / unmountOnExit によるパフォーマンス最適化
 * - ArrowUp/Down, Home/End, Enter/Space によるキーボード操作
 *
 * @example
 * <Accordion.Root collapsible variant="enclosed" size="md">
 *   <Accordion.Item value="section-1">
 *     <Accordion.ItemTrigger>
 *       セクション 1
 *       <Accordion.ItemIndicator />
 *     </Accordion.ItemTrigger>
 *     <Accordion.ItemContent>
 *       <Accordion.ItemBody>本文をここに書く</Accordion.ItemBody>
 *     </Accordion.ItemContent>
 *   </Accordion.Item>
 * </Accordion.Root>
 */
export class AccordionRoot implements m.Component<AccordionRootAttrs> {
	private openValues = new Set<AccordionValue>();
	private mountedValues = new Set<AccordionValue>();
	private buttonRefs = new Map<AccordionValue, HTMLButtonElement>();
	private readonly uid = `muk-accordion-${AccordionRoot.seed++}`;
	private static seed = 1;

	public oninit(vnode: m.Vnode<AccordionRootAttrs>) {
		const initial = this.resolveOpenValues(vnode.attrs, true);
		this.openValues = initial;
		this.syncMounted(initial);
	}

	public onbeforeupdate(vnode: m.Vnode<AccordionRootAttrs>) {
		const next = this.resolveOpenValues(vnode.attrs, false);
		this.syncMounted(next);
		return true;
	}

	public onremove() {
		this.buttonRefs.clear();
	}

	private isMultiple(attrs: AccordionRootAttrs): boolean {
		return attrs.multiple ?? false;
	}

	private isCollapsible(attrs: AccordionRootAttrs): boolean {
		return attrs.collapsible ?? false;
	}

	private isControlled(attrs: AccordionRootAttrs): boolean {
		return attrs.value !== undefined;
	}

	private normalizeValues(raw: AccordionRootAttrs["value"], multiple: boolean): AccordionValue[] {
		const list = Array.isArray(raw) ? raw : raw === null || raw === undefined ? [] : [raw];
		const normalized = Array.from(new Set(list.filter((value): value is AccordionValue => value !== null && value !== undefined)));
		return multiple ? normalized : normalized.slice(0, 1);
	}

	private resolveOpenValues(attrs: AccordionRootAttrs, preferDefault: boolean): Set<AccordionValue> {
		const multiple = this.isMultiple(attrs);

		if (this.isControlled(attrs)) {
			return new Set(this.normalizeValues(attrs.value, multiple));
		}

		if (preferDefault) {
			return new Set(this.normalizeValues(attrs.defaultValue, multiple));
		}

		return new Set(this.openValues);
	}

	private syncMounted(values: Set<AccordionValue>) {
		values.forEach((value) => this.mountedValues.add(value));
	}

	private getRootId(attrs: AccordionRootAttrs): string {
		return attrs.ids?.root ?? attrs.id ?? this.uid;
	}

	private getTriggerId(attrs: AccordionRootAttrs, value: AccordionValue): string {
		return attrs.ids?.itemTrigger?.(value) ?? `${this.getRootId(attrs)}-trigger-${sanitizeValue(value)}`;
	}

	private getContentId(attrs: AccordionRootAttrs, value: AccordionValue): string {
		return attrs.ids?.itemContent?.(value) ?? `${this.getRootId(attrs)}-content-${sanitizeValue(value)}`;
	}

	private getItemId(attrs: AccordionRootAttrs, value: AccordionValue): string {
		return attrs.ids?.item?.(value) ?? `${this.getRootId(attrs)}-item-${sanitizeValue(value)}`;
	}

	private collectItems(vnode: m.Vnode<AccordionRootAttrs>): ParsedAccordionItem[] {
		const rootDisabled = !!vnode.attrs.disabled;
		return toChildArray(vnode.children)
			.filter((child) => getAccordionRole(child) === "item")
			.map((child, index) => {
				const itemVNode = child as m.Vnode<AccordionItemAttrs>;
				const value = itemVNode.attrs.value ?? index;
				const nestedChildren = toChildArray(itemVNode.children);
				const triggerVNode = nestedChildren.find((node) => getAccordionRole(node) === "item-trigger") as m.Vnode<AccordionItemTriggerAttrs> | undefined;
				const contentVNode = nestedChildren.find((node) => getAccordionRole(node) === "item-content") as m.Vnode<AccordionItemContentAttrs> | undefined;

				return {
					index,
					value,
					disabled: rootDisabled || !!itemVNode.attrs.disabled,
					className: itemVNode.attrs.class,
					style: itemVNode.attrs.style,
					triggerVNode,
					contentVNode,
				};
			});
	}

	private emitChanges(attrs: AccordionRootAttrs, items: ParsedAccordionItem[], next: Set<AccordionValue>) {
		const values = Array.from(next);
		const indices = items.filter((item) => next.has(item.value)).map((item) => item.index);
		attrs.onValueChange?.({ value: values, indices });
	}

	private toggle(vnode: m.Vnode<AccordionRootAttrs>, items: ParsedAccordionItem[], target: ParsedAccordionItem) {
		if (target.disabled) {
			return;
		}

		const attrs = vnode.attrs;
		const current = this.resolveOpenValues(attrs, false);
		const next = new Set(current);
		const multiple = this.isMultiple(attrs);
		const collapsible = this.isCollapsible(attrs);

		if (multiple) {
			if (next.has(target.value)) {
				next.delete(target.value);
			} else {
				next.add(target.value);
			}
		} else if (next.has(target.value)) {
			if (!collapsible) {
				return;
			}
			next.clear();
		} else {
			next.clear();
			next.add(target.value);
		}

		this.syncMounted(next);
		if (!this.isControlled(attrs)) {
			this.openValues = next;
		}

		this.emitChanges(attrs, items, next);
		if (!this.isControlled(attrs)) {
			m.redraw();
		}
	}

	private moveFocus(items: ParsedAccordionItem[], current: ParsedAccordionItem, delta: number) {
		const enabledItems = items.filter((item) => !item.disabled);
		if (enabledItems.length === 0) {
			return;
		}

		const currentIndex = Math.max(0, enabledItems.findIndex((item) => item.value === current.value));
		const nextIndex = (currentIndex + delta + enabledItems.length) % enabledItems.length;
		this.buttonRefs.get(enabledItems[nextIndex].value)?.focus();
	}

	private focusEdge(items: ParsedAccordionItem[], position: "first" | "last") {
		const enabledItems = items.filter((item) => !item.disabled);
		if (enabledItems.length === 0) {
			return;
		}

		const target = position === "first" ? enabledItems[0] : enabledItems[enabledItems.length - 1];
		this.buttonRefs.get(target.value)?.focus();
	}

	private handleTriggerKeydown(vnode: m.Vnode<AccordionRootAttrs>, items: ParsedAccordionItem[], item: ParsedAccordionItem, event: KeyboardEvent) {
		const orientation = vnode.attrs.orientation ?? "vertical";

		if (event.key === "Home") {
			event.preventDefault();
			this.focusEdge(items, "first");
			return;
		}

		if (event.key === "End") {
			event.preventDefault();
			this.focusEdge(items, "last");
			return;
		}

		if ((orientation === "vertical" && event.key === "ArrowDown") || (orientation === "horizontal" && event.key === "ArrowRight")) {
			event.preventDefault();
			this.moveFocus(items, item, 1);
			return;
		}

		if ((orientation === "vertical" && event.key === "ArrowUp") || (orientation === "horizontal" && event.key === "ArrowLeft")) {
			event.preventDefault();
			this.moveFocus(items, item, -1);
			return;
		}

		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			this.toggle(vnode, items, item);
		}
	}

	private shouldRenderContent(attrs: AccordionRootAttrs, open: boolean, value: AccordionValue): boolean {
		if (open) {
			this.mountedValues.add(value);
			return true;
		}

		if (attrs.unmountOnExit) {
			return false;
		}

		if (attrs.lazyMount) {
			return this.mountedValues.has(value);
		}

		return true;
	}

	private renderIndicator(indicatorVNode: m.Vnode<AccordionItemIndicatorAttrs> | undefined, open: boolean) {
		const customChildren = indicatorVNode ? toChildArray(indicatorVNode.children) : [];
		return (
			<span
				class={classNames(styles.itemIndicator, indicatorVNode?.attrs.class, {
					[styles.itemIndicatorOpen]: open,
				})}
				style={indicatorVNode?.attrs.style}
				data-part="item-indicator"
				aria-hidden="true"
			>
				{customChildren.length ? (
					customChildren
				) : (
					<svg viewBox="0 0 20 20" fill="currentColor" focusable="false" aria-hidden="true">
						<path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.12l3.71-3.89a.75.75 0 1 1 1.08 1.04l-4.25 4.46a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06Z" />
					</svg>
				)}
			</span>
		);
	}

	private renderContentBody(contentVNode: m.Vnode<AccordionItemContentAttrs> | undefined) {
		if (!contentVNode) {
			return null;
		}

		const children = toChildArray(contentVNode.children);
		const hasBodyNode = children.some((child) => getAccordionRole(child) === "item-body");

		if (!hasBodyNode) {
			return <div class={styles.itemBody}>{contentVNode.children}</div>;
		}

		return children.map((child, index) => {
			if (getAccordionRole(child) !== "item-body") {
				return isVnodeLike(child) ? { ...child, key: `${index}` } : child;
			}

			const bodyVNode = child as m.Vnode<AccordionItemBodyAttrs>;
			return (
				<div key={`${index}`} class={classNames(styles.itemBody, bodyVNode.attrs.class)} style={bodyVNode.attrs.style} data-part="item-body">
					{bodyVNode.children}
				</div>
			);
		});
	}

	public view(vnode: m.Vnode<AccordionRootAttrs>) {
		const attrs = vnode.attrs;
		const items = this.collectItems(vnode);
		const openValues = this.resolveOpenValues(attrs, false);
		const variant = attrs.variant ?? "outline";
		const size = attrs.size ?? "md";
		const orientation = attrs.orientation ?? "vertical";

		return (
			<div
				id={this.getRootId(attrs)}
				class={classNames(
					styles.root,
					styles[`variant${capitalize(variant)}`],
					styles[`size${capitalize(size)}`],
					{
						[styles.orientationHorizontal]: orientation === "horizontal",
					},
					attrs.class
				)}
				style={attrs.style}
				data-scope="accordion"
				data-part="root"
				data-orientation={orientation}
			>
				{items.map((item) => {
					const open = openValues.has(item.value);
					const contentId = this.getContentId(attrs, item.value);
					const triggerId = this.getTriggerId(attrs, item.value);
					const triggerChildren = toChildArray(item.triggerVNode?.children);
					const indicatorVNode = triggerChildren.find((child) => getAccordionRole(child) === "item-indicator") as m.Vnode<AccordionItemIndicatorAttrs> | undefined;
					const labelChildren = triggerChildren.filter((child) => getAccordionRole(child) !== "item-indicator");
					const shouldRenderContent = this.shouldRenderContent(attrs, open, item.value);

					return (
						<div
							key={String(item.value)}
							id={this.getItemId(attrs, item.value)}
							class={classNames(styles.item, item.className, {
								[styles.itemOpen]: open,
								[styles.itemDisabled]: item.disabled,
							})}
							style={item.style}
							data-part="item"
							data-state={open ? "open" : "closed"}
						>
							<h3 class={styles.itemHeading}>
								<button
									id={triggerId}
									type="button"
									class={classNames(styles.itemTrigger, item.triggerVNode?.attrs.class)}
									style={item.triggerVNode?.attrs.style}
									data-part="item-trigger"
									data-state={open ? "open" : "closed"}
									aria-expanded={open ? "true" : "false"}
									aria-controls={contentId}
									disabled={item.disabled}
									onclick={() => this.toggle(vnode, items, item)}
									onkeydown={(event: KeyboardEvent) => this.handleTriggerKeydown(vnode, items, item, event)}
									onfocus={() => attrs.onFocusChange?.({ value: item.value, index: item.index })}
									oncreate={({ dom }) => {
										this.buttonRefs.set(item.value, dom as HTMLButtonElement);
									}}
									onupdate={({ dom }) => {
										this.buttonRefs.set(item.value, dom as HTMLButtonElement);
									}}
									onremove={() => {
										this.buttonRefs.delete(item.value);
									}}
								>
									<span class={styles.itemTriggerLabel}>{labelChildren.length ? labelChildren : `Item ${item.index + 1}`}</span>
									{this.renderIndicator(indicatorVNode, open)}
								</button>
							</h3>
							{shouldRenderContent ? (
								<div
									id={contentId}
									class={classNames(styles.itemContent, item.contentVNode?.attrs.class, {
										[styles.itemContentClosed]: !open,
									})}
									style={item.contentVNode?.attrs.style}
									data-part="item-content"
									data-state={open ? "open" : "closed"}
									aria-labelledby={triggerId}
									aria-hidden={open ? "false" : "true"}
								>
									<div class={styles.itemContentInner}>{this.renderContentBody(item.contentVNode)}</div>
								</div>
							) : null}
						</div>
					);
				})}
			</div>
		);
	}
}

/**
 * Accordion compound component のバンドル。
 * `Accordion.Root`, `Accordion.Item` などの形式で使う。
 *
 * @example
 * import { Accordion } from "mithril-ui-kit";
 *
 * <Accordion.Root collapsible>
 *   <Accordion.Item value="a">
 *     <Accordion.ItemTrigger>見出し<Accordion.ItemIndicator /></Accordion.ItemTrigger>
 *     <Accordion.ItemContent><Accordion.ItemBody>本文</Accordion.ItemBody></Accordion.ItemContent>
 *   </Accordion.Item>
 * </Accordion.Root>
 */
export const Accordion = {
	Root: AccordionRoot,
	Item: AccordionItem,
	ItemTrigger: AccordionItemTrigger,
	ItemContent: AccordionItemContent,
	ItemBody: AccordionItemBody,
	ItemIndicator: AccordionItemIndicator,
} as const;
