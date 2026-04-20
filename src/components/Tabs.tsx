/** @jsx m */
/**
 * @fileoverview
 * Tabs — Chakra UI 現行 API 準拠の compound component 型タブ
 *
 * `Tabs.Root` / `Tabs.List` / `Tabs.Trigger` / `Tabs.Content` の形式で使う。
 *
 * @example
 * ```tsx
 * <Tabs.Root defaultValue="members" variant="line">
 *   <Tabs.List>
 *     <Tabs.Trigger value="members">メンバー</Tabs.Trigger>
 *     <Tabs.Trigger value="projects">プロジェクト</Tabs.Trigger>
 *   </Tabs.List>
 *   <Tabs.Content value="members">メンバー一覧</Tabs.Content>
 *   <Tabs.Content value="projects">プロジェクト一覧</Tabs.Content>
 * </Tabs.Root>
 * ```
 *
 * @module Tabs
 */
/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Tabs.module.scss";

/** タブの外観バリエーション */
export type TabsVariant = "line" | "subtle" | "enclosed" | "outline" | "plain";

/** タブのサイズ */
export type TabsSize = "sm" | "md" | "lg";

/** タブの方向 */
export type TabsOrientation = "horizontal" | "vertical";

/** タブのアクティベーションモード */
export type TabsActivationMode = "automatic" | "manual";

/**
 * 値変更イベントの詳細
 * @property {string} value - 選択されたタブの value
 */
export type TabsValueChangeDetails = {
	value: string;
};

/**
 * Tabs.Root に渡せる属性
 */
export type TabsRootAttrs = {
	/** 制御モード: 選択中のタブの value */
	value?: string;
	/** 非制御モード: 初期選択タブの value */
	defaultValue?: string;
	/** タブが変更されたときのコールバック */
	onValueChange?: (details: TabsValueChangeDetails) => void;
	/** 外観バリエーション（デフォルト: "line"） */
	variant?: TabsVariant;
	/** サイズ（デフォルト: "md"） */
	size?: TabsSize;
	/** 方向（デフォルト: "horizontal"） */
	orientation?: TabsOrientation;
	/** アクティベーションモード（デフォルト: "automatic"） */
	activationMode?: TabsActivationMode;
	/** true にすると未表示タブの Content DOM を生成しない */
	lazyMount?: boolean;
	/** true にすると非アクティブタブの Content DOM を即破棄 */
	unmountOnExit?: boolean;
	/** キーボードループ（デフォルト: true） */
	loopFocus?: boolean;
	/** タブを均等幅にする */
	fitted?: boolean;
	/** ルート要素の id */
	id?: string;
	/** ルート要素の追加 CSS クラス */
	class?: string;
	/** ルート要素のインラインスタイル */
	style?: Record<string, string>;
};

/** Tabs.List に渡せる属性 */
export type TabsListAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Tabs.Trigger に渡せる属性 */
export type TabsTriggerAttrs = {
	/** このタブの識別値 */
	value: string;
	/** 無効化するか */
	disabled?: boolean;
	class?: string;
	style?: Record<string, string>;
};

/** Tabs.Content に渡せる属性 */
export type TabsContentAttrs = {
	/** 対応するタブの value */
	value: string;
	class?: string;
	style?: Record<string, string>;
};

/** Tabs.Indicator に渡せる属性 */
export type TabsIndicatorAttrs = {
	class?: string;
	style?: Record<string, string>;
};

// --- サブコンポーネントロール ---
type TabsRole = "list" | "trigger" | "content" | "indicator";

/**
 * @class TabsList
 * @description タブリスト領域のマーカー。実際の描画は Root が担う。
 */
export class TabsList implements m.Component<TabsListAttrs> {
	public static __tabsRole: TabsRole = "list";
	public view(vnode: m.Vnode<TabsListAttrs>) {
		return <div>{vnode.children}</div>;
	}
}

/**
 * @class TabsTrigger
 * @description 個々のタブボタンのマーカー。
 */
export class TabsTrigger implements m.Component<TabsTriggerAttrs> {
	public static __tabsRole: TabsRole = "trigger";
	public view(vnode: m.Vnode<TabsTriggerAttrs>) {
		return <button type="button">{vnode.children}</button>;
	}
}

/**
 * @class TabsContent
 * @description タブ本文のマーカー。
 */
export class TabsContent implements m.Component<TabsContentAttrs> {
	public static __tabsRole: TabsRole = "content";
	public view(vnode: m.Vnode<TabsContentAttrs>) {
		return <div>{vnode.children}</div>;
	}
}

/**
 * @class TabsIndicator
 * @description アクティブタブのインジケーター線のマーカー。
 */
export class TabsIndicator implements m.Component<TabsIndicatorAttrs> {
	public static __tabsRole: TabsRole = "indicator";
	public view(vnode: m.Vnode<TabsIndicatorAttrs>) {
		return <div />;
	}
}

// --- ユーティリティ ---
function toChildArray(children: m.Children): any[] {
	if (Array.isArray(children)) return children.flatMap(c => toChildArray(c));
	if (children === null || children === undefined || typeof children === "boolean") return [];
	return [children];
}

function isVnodeLike(v: any): v is m.Vnode<any> {
	return !!v && typeof v === "object" && "tag" in v;
}

function getTabsRole(v: any): TabsRole | undefined {
	if (!isVnodeLike(v)) return undefined;
	return (v.tag as any)?.__tabsRole;
}

function capitalize(s: string): string {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

type ParsedTrigger = {
	value: string;
	disabled: boolean;
	className?: string;
	style?: Record<string, string>;
	children: m.Children;
};

type ParsedContent = {
	value: string;
	className?: string;
	style?: Record<string, string>;
	children: m.Children;
};

/**
 * @class TabsRoot
 * @description
 * Tabs のルートコンポーネント。
 * 子の Tabs.List / Tabs.Trigger / Tabs.Content を収集・解析し、
 * タブ切り替え・キーボードナビゲーション・ARIA 属性を管理する。
 *
 * 主な機能:
 * - variant (line / subtle / enclosed / outline / plain)
 * - size (sm / md / lg)
 * - 制御/非制御両対応
 * - lazyMount / unmountOnExit
 * - ArrowLeft/Right (horizontal) / ArrowUp/Down (vertical) + Home/End
 * - fitted（均等幅）
 *
 * @example
 * <Tabs.Root defaultValue="tab1" variant="enclosed" size="md">
 *   <Tabs.List>
 *     <Tabs.Trigger value="tab1">タブ 1</Tabs.Trigger>
 *     <Tabs.Trigger value="tab2">タブ 2</Tabs.Trigger>
 *   </Tabs.List>
 *   <Tabs.Content value="tab1">コンテンツ 1</Tabs.Content>
 *   <Tabs.Content value="tab2">コンテンツ 2</Tabs.Content>
 * </Tabs.Root>
 */
export class TabsRoot implements m.Component<TabsRootAttrs> {
	private selectedValue = "";
	private mountedValues = new Set<string>();
	private triggerRefs = new Map<string, HTMLButtonElement>();
	private readonly uid = `muk-tabs-${TabsRoot.seed++}`;
	private static seed = 1;

	public oninit(vnode: m.Vnode<TabsRootAttrs>) {
		this.selectedValue = this.resolveValue(vnode.attrs, true);
	}

	public onbeforeupdate(vnode: m.Vnode<TabsRootAttrs>) {
		const next = this.resolveValue(vnode.attrs, false);
		if (next) this.mountedValues.add(next);
		return true;
	}

	public onremove() {
		this.triggerRefs.clear();
	}

	private isControlled(attrs: TabsRootAttrs): boolean {
		return attrs.value !== undefined;
	}

	private resolveValue(attrs: TabsRootAttrs, preferDefault: boolean): string {
		if (this.isControlled(attrs)) return attrs.value!;
		if (preferDefault && attrs.defaultValue !== undefined) return attrs.defaultValue;
		return this.selectedValue;
	}

	private getRootId(attrs: TabsRootAttrs): string {
		return attrs.id ?? this.uid;
	}

	private collectTriggers(listVNode: m.Vnode<TabsListAttrs> | undefined): ParsedTrigger[] {
		if (!listVNode) return [];
		return toChildArray(listVNode.children)
			.filter(c => getTabsRole(c) === "trigger")
			.map(c => {
				const v = c as m.Vnode<TabsTriggerAttrs>;
				return {
					value: v.attrs.value,
					disabled: !!v.attrs.disabled,
					className: v.attrs.class,
					style: v.attrs.style,
					children: v.children,
				};
			});
	}

	private collectContents(children: any[]): ParsedContent[] {
		return children
			.filter(c => getTabsRole(c) === "content")
			.map(c => {
				const v = c as m.Vnode<TabsContentAttrs>;
				return {
					value: v.attrs.value,
					className: v.attrs.class,
					style: v.attrs.style,
					children: v.children,
				};
			});
	}

	private select(attrs: TabsRootAttrs, value: string) {
		if (!this.isControlled(attrs)) {
			this.selectedValue = value;
		}
		this.mountedValues.add(value);
		attrs.onValueChange?.({ value });
		if (!this.isControlled(attrs)) m.redraw();
	}

	private moveFocus(triggers: ParsedTrigger[], current: string, delta: number, loop: boolean) {
		const enabled = triggers.filter(t => !t.disabled);
		if (!enabled.length) return;
		const idx = enabled.findIndex(t => t.value === current);
		let next = idx + delta;
		if (loop) {
			next = (next + enabled.length) % enabled.length;
		} else {
			next = Math.max(0, Math.min(next, enabled.length - 1));
		}
		const target = enabled[next];
		this.triggerRefs.get(target.value)?.focus();
	}

	private focusEdge(triggers: ParsedTrigger[], position: "first" | "last") {
		const enabled = triggers.filter(t => !t.disabled);
		if (!enabled.length) return;
		const target = position === "first" ? enabled[0] : enabled[enabled.length - 1];
		this.triggerRefs.get(target.value)?.focus();
	}

	private handleKeydown(attrs: TabsRootAttrs, triggers: ParsedTrigger[], currentValue: string, event: KeyboardEvent) {
		const orientation = attrs.orientation ?? "horizontal";
		const loop = attrs.loopFocus !== false;
		const mode = attrs.activationMode ?? "automatic";

		if (event.key === "Home") {
			event.preventDefault();
			this.focusEdge(triggers, "first");
			return;
		}
		if (event.key === "End") {
			event.preventDefault();
			this.focusEdge(triggers, "last");
			return;
		}

		const isNext = (orientation === "horizontal" && event.key === "ArrowRight") || (orientation === "vertical" && event.key === "ArrowDown");
		const isPrev = (orientation === "horizontal" && event.key === "ArrowLeft") || (orientation === "vertical" && event.key === "ArrowUp");

		if (isNext || isPrev) {
			event.preventDefault();
			this.moveFocus(triggers, currentValue, isNext ? 1 : -1, loop);
			return;
		}

		if (mode === "manual" && (event.key === "Enter" || event.key === " ")) {
			event.preventDefault();
			this.select(attrs, currentValue);
		}
	}

	private shouldRender(attrs: TabsRootAttrs, active: boolean, value: string): boolean {
		if (active) {
			this.mountedValues.add(value);
			return true;
		}
		if (attrs.unmountOnExit) return false;
		if (attrs.lazyMount) return this.mountedValues.has(value);
		return true;
	}

	public view(vnode: m.Vnode<TabsRootAttrs>) {
		const attrs = vnode.attrs;
		const allChildren = toChildArray(vnode.children);
		const listVNode = allChildren.find(c => getTabsRole(c) === "list") as m.Vnode<TabsListAttrs> | undefined;
		const triggers = this.collectTriggers(listVNode);
		const contents = this.collectContents(allChildren);
		const selectedValue = this.resolveValue(attrs, false);
		const variant = attrs.variant ?? "line";
		const size = attrs.size ?? "md";
		const orientation = attrs.orientation ?? "horizontal";
		const mode = attrs.activationMode ?? "automatic";
		const rootId = this.getRootId(attrs);

		// 初期値が無い場合、最初の有効なトリガーを選択
		if (!selectedValue && triggers.length) {
			const first = triggers.find(t => !t.disabled);
			if (first) {
				this.selectedValue = first.value;
				this.mountedValues.add(first.value);
			}
		}

		const activeValue = this.resolveValue(attrs, false);

		return (
			<div
				id={rootId}
				class={classNames(
					styles.root,
					styles[`variant${capitalize(variant)}`],
					styles[`size${capitalize(size)}`],
					{ [styles.orientationVertical]: orientation === "vertical", [styles.fitted]: !!attrs.fitted },
					attrs.class
				)}
				style={attrs.style}
				data-scope="tabs"
				data-part="root"
				data-orientation={orientation}
			>
				{/* タブリスト */}
				<div
					class={classNames(styles.list, listVNode?.attrs.class)}
					style={listVNode?.attrs.style}
					role="tablist"
					aria-orientation={orientation}
					data-part="list"
				>
					{triggers.map(trigger => {
						const active = trigger.value === activeValue;
						return (
							<button
								key={trigger.value}
								id={`${rootId}-trigger-${trigger.value}`}
								type="button"
								role="tab"
								class={classNames(styles.trigger, trigger.className, {
									[styles.triggerActive]: active,
									[styles.triggerDisabled]: trigger.disabled,
								})}
								style={trigger.style}
								data-part="trigger"
								data-state={active ? "active" : "inactive"}
								aria-selected={active ? "true" : "false"}
								aria-controls={`${rootId}-content-${trigger.value}`}
								tabindex={active ? 0 : -1}
								disabled={trigger.disabled}
								onclick={() => { if (!trigger.disabled) this.select(attrs, trigger.value); }}
								onfocus={() => {
									// automatic モードではフォーカスで即選択
									if (mode === "automatic" && !trigger.disabled) this.select(attrs, trigger.value);
								}}
								onkeydown={(e: KeyboardEvent) => this.handleKeydown(attrs, triggers, trigger.value, e)}
								oncreate={({ dom }) => { this.triggerRefs.set(trigger.value, dom as HTMLButtonElement); }}
								onupdate={({ dom }) => { this.triggerRefs.set(trigger.value, dom as HTMLButtonElement); }}
								onremove={() => { this.triggerRefs.delete(trigger.value); }}
							>
								{trigger.children}
							</button>
						);
					})}
				</div>

				{/* コンテンツ */}
				{contents.map(content => {
					const active = content.value === activeValue;
					if (!this.shouldRender(attrs, active, content.value)) return null;
					return (
						<div
							key={content.value}
							id={`${rootId}-content-${content.value}`}
							class={classNames(styles.content, content.className, {
								[styles.contentHidden]: !active,
							})}
							style={content.style}
							role="tabpanel"
							data-part="content"
							data-state={active ? "active" : "inactive"}
							aria-labelledby={`${rootId}-trigger-${content.value}`}
							hidden={!active}
						>
							{content.children}
						</div>
					);
				})}
			</div>
		);
	}
}

/**
 * Tabs compound component のバンドル。
 * `Tabs.Root`, `Tabs.List`, `Tabs.Trigger`, `Tabs.Content`, `Tabs.Indicator` の形式で使う。
 */
export const Tabs = {
	Root: TabsRoot,
	List: TabsList,
	Trigger: TabsTrigger,
	Content: TabsContent,
	Indicator: TabsIndicator,
} as const;
