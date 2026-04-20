/** @jsx m */
/**
 * @fileoverview
 * Steps — Chakra UI 現行 API 準拠の compound component 型ステッパー
 *
 * @example
 * ```tsx
 * <Steps.Root step={1} count={3}>
 *   <Steps.List>
 *     <Steps.Item index={0}><Steps.Trigger><Steps.Indicator />ステップ 1</Steps.Trigger><Steps.Separator /></Steps.Item>
 *     <Steps.Item index={1}><Steps.Trigger><Steps.Indicator />ステップ 2</Steps.Trigger><Steps.Separator /></Steps.Item>
 *     <Steps.Item index={2}><Steps.Trigger><Steps.Indicator />ステップ 3</Steps.Trigger></Steps.Item>
 *   </Steps.List>
 *   <Steps.Content index={0}>ステップ 1 の内容</Steps.Content>
 *   <Steps.Content index={1}>ステップ 2 の内容</Steps.Content>
 *   <Steps.Content index={2}>ステップ 3 の内容</Steps.Content>
 *   <Steps.CompletedContent>完了！</Steps.CompletedContent>
 * </Steps.Root>
 * ```
 *
 * @module Steps
 */
/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Steps.module.scss";

/** ステッパーの外観バリエーション */
export type StepsVariant = "solid" | "subtle";

/** ステッパーのサイズ */
export type StepsSize = "xs" | "sm" | "md" | "lg";

/** ステッパーの方向 */
export type StepsOrientation = "horizontal" | "vertical";

/**
 * ステップ変更イベントの詳細
 */
export type StepsStepChangeDetails = {
	step: number;
};

/**
 * Steps.Root に渡せる属性
 */
export type StepsRootAttrs = {
	/** ステップ総数 */
	count: number;
	/** 制御モード: 現在のステップ（0始まり） */
	step?: number;
	/** 非制御モード: 初期ステップ */
	defaultStep?: number;
	/** ステップが変わったときのコールバック */
	onStepChange?: (details: StepsStepChangeDetails) => void;
	/** 完了時のコールバック */
	onStepComplete?: () => void;
	/** リニアモード（順序制約） */
	linear?: boolean;
	/** 外観（デフォルト: "solid"） */
	variant?: StepsVariant;
	/** サイズ（デフォルト: "md"） */
	size?: StepsSize;
	/** 方向（デフォルト: "horizontal"） */
	orientation?: StepsOrientation;
	class?: string;
	style?: Record<string, string>;
};

/** Steps.List に渡せる属性 */
export type StepsListAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Steps.Item に渡せる属性 */
export type StepsItemAttrs = {
	/** ステップインデックス（0始まり） */
	index: number;
	class?: string;
	style?: Record<string, string>;
};

/** Steps.Trigger に渡せる属性 */
export type StepsTriggerAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Steps.Indicator に渡せる属性 */
export type StepsIndicatorAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Steps.Separator に渡せる属性 */
export type StepsSeparatorAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Steps.Content に渡せる属性 */
export type StepsContentAttrs = {
	/** 対応するステップインデックス */
	index: number;
	class?: string;
	style?: Record<string, string>;
};

/** Steps.CompletedContent に渡せる属性 */
export type StepsCompletedContentAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Steps.Title に渡せる属性 */
export type StepsTitleAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Steps.Description に渡せる属性 */
export type StepsDescriptionAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Steps.PrevTrigger に渡せる属性 */
export type StepsPrevTriggerAttrs = {
	class?: string;
	style?: Record<string, string>;
};

/** Steps.NextTrigger に渡せる属性 */
export type StepsNextTriggerAttrs = {
	class?: string;
	style?: Record<string, string>;
};

type StepsRole = "list" | "item" | "trigger" | "indicator" | "separator" | "content" | "completed-content" | "title" | "description" | "prev-trigger" | "next-trigger";

function capitalize(s: string): string {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

// --- マーカークラス ---

/** @class StepsList */
export class StepsList implements m.Component<StepsListAttrs> {
	static __stepsRole: StepsRole = "list";
	view(vnode: m.Vnode<StepsListAttrs>) { return <div>{vnode.children}</div>; }
}

/** @class StepsItem */
export class StepsItemMarker implements m.Component<StepsItemAttrs> {
	static __stepsRole: StepsRole = "item";
	view(vnode: m.Vnode<StepsItemAttrs>) { return <div>{vnode.children}</div>; }
}

/** @class StepsTrigger */
export class StepsTriggerMarker implements m.Component<StepsTriggerAttrs> {
	static __stepsRole: StepsRole = "trigger";
	view(vnode: m.Vnode<StepsTriggerAttrs>) { return <button type="button">{vnode.children}</button>; }
}

/** @class StepsIndicator */
export class StepsIndicatorMarker implements m.Component<StepsIndicatorAttrs> {
	static __stepsRole: StepsRole = "indicator";
	view(vnode: m.Vnode<StepsIndicatorAttrs>) { return <div>{vnode.children}</div>; }
}

/** @class StepsSeparator */
export class StepsSeparatorMarker implements m.Component<StepsSeparatorAttrs> {
	static __stepsRole: StepsRole = "separator";
	view(vnode: m.Vnode<StepsSeparatorAttrs>) { return <div />; }
}

/** @class StepsContentMarker */
export class StepsContentMarker implements m.Component<StepsContentAttrs> {
	static __stepsRole: StepsRole = "content";
	view(vnode: m.Vnode<StepsContentAttrs>) { return <div>{vnode.children}</div>; }
}

/** @class StepsCompletedContentMarker */
export class StepsCompletedContentMarker implements m.Component<StepsCompletedContentAttrs> {
	static __stepsRole: StepsRole = "completed-content";
	view(vnode: m.Vnode<StepsCompletedContentAttrs>) { return <div>{vnode.children}</div>; }
}

/** @class StepsTitleMarker */
export class StepsTitleMarker implements m.Component<StepsTitleAttrs> {
	static __stepsRole: StepsRole = "title";
	view(vnode: m.Vnode<StepsTitleAttrs>) { return <span>{vnode.children}</span>; }
}

/** @class StepsDescriptionMarker */
export class StepsDescriptionMarker implements m.Component<StepsDescriptionAttrs> {
	static __stepsRole: StepsRole = "description";
	view(vnode: m.Vnode<StepsDescriptionAttrs>) { return <span>{vnode.children}</span>; }
}

/** @class StepsPrevTriggerMarker */
export class StepsPrevTriggerMarker implements m.Component<StepsPrevTriggerAttrs> {
	static __stepsRole: StepsRole = "prev-trigger";
	view(vnode: m.Vnode<StepsPrevTriggerAttrs>) { return <button type="button">{vnode.children}</button>; }
}

/** @class StepsNextTriggerMarker */
export class StepsNextTriggerMarker implements m.Component<StepsNextTriggerAttrs> {
	static __stepsRole: StepsRole = "next-trigger";
	view(vnode: m.Vnode<StepsNextTriggerAttrs>) { return <button type="button">{vnode.children}</button>; }
}

// --- ユーティリティ ---

function toChildArray(children: m.Children): m.Vnode<any>[] {
	if (Array.isArray(children)) return children.flatMap(c => toChildArray(c));
	if (children === null || children === undefined || typeof children === "boolean") return [];
	return [children as m.Vnode<any>];
}

function isVnodeLike(v: any): v is m.Vnode<any> {
	return !!v && typeof v === "object" && "tag" in v;
}

function getRole(v: any): StepsRole | undefined {
	if (!isVnodeLike(v)) return undefined;
	return (v.tag as any)?.__stepsRole;
}

/**
 * @class StepsRoot
 * @description
 * ステッパーのルートコンポーネント。
 * ステップのリスト表示、現在ステップのコンテンツ切り替え、
 * 前へ/次へナビゲーションを管理する。
 *
 * 主な機能:
 * - variant (solid / subtle)
 * - size (xs / sm / md / lg)
 * - orientation (horizontal / vertical)
 * - 制御/非制御両対応 (step / defaultStep)
 * - リニアモード
 * - PrevTrigger / NextTrigger
 *
 * @example
 * <Steps.Root count={3} defaultStep={0} variant="solid">
 *   <Steps.List>
 *     <Steps.Item index={0}><Steps.Trigger><Steps.Indicator />手順 1</Steps.Trigger><Steps.Separator /></Steps.Item>
 *     <Steps.Item index={1}><Steps.Trigger><Steps.Indicator />手順 2</Steps.Trigger></Steps.Item>
 *   </Steps.List>
 *   <Steps.Content index={0}>内容 1</Steps.Content>
 *   <Steps.Content index={1}>内容 2</Steps.Content>
 *   <Steps.CompletedContent>完了！</Steps.CompletedContent>
 *   <Steps.PrevTrigger>戻る</Steps.PrevTrigger>
 *   <Steps.NextTrigger>次へ</Steps.NextTrigger>
 * </Steps.Root>
 */
export class StepsRoot implements m.Component<StepsRootAttrs> {
	private currentStep = 0;

	oninit(vnode: m.Vnode<StepsRootAttrs>) {
		this.currentStep = this.resolveStep(vnode.attrs, true);
	}

	private isControlled(attrs: StepsRootAttrs): boolean {
		return attrs.step !== undefined;
	}

	private resolveStep(attrs: StepsRootAttrs, preferDefault: boolean): number {
		if (this.isControlled(attrs)) return attrs.step!;
		if (preferDefault && attrs.defaultStep !== undefined) return attrs.defaultStep;
		return this.currentStep;
	}

	private setStep(attrs: StepsRootAttrs, next: number) {
		const clamped = Math.max(0, Math.min(next, attrs.count));
		if (!this.isControlled(attrs)) {
			this.currentStep = clamped;
		}
		attrs.onStepChange?.({ step: clamped });
		if (clamped >= attrs.count) {
			attrs.onStepComplete?.();
		}
		if (!this.isControlled(attrs)) m.redraw();
	}

	private collectItems(listVNode: m.Vnode<any> | undefined) {
		if (!listVNode) return [];
		return toChildArray(listVNode.children)
			.filter(c => getRole(c) === "item")
			.map(c => {
				const v = c as m.Vnode<StepsItemAttrs>;
				const children = toChildArray(v.children);
				return {
					index: v.attrs.index,
					className: v.attrs.class,
					style: v.attrs.style,
					triggerVNode: children.find(ch => getRole(ch) === "trigger") as m.Vnode<StepsTriggerAttrs> | undefined,
					separatorVNode: children.find(ch => getRole(ch) === "separator") as m.Vnode<StepsSeparatorAttrs> | undefined,
				};
			});
	}

	private renderTriggerContent(triggerVNode: m.Vnode<StepsTriggerAttrs> | undefined, stepIndex: number, current: number): m.Children {
		if (!triggerVNode) return <span class={styles.indicator}>{stepIndex + 1}</span>;
		const children = toChildArray(triggerVNode.children);
		return children.map((child: any) => {
			const role = getRole(child);
			if (role === "indicator") {
				const v = child as m.Vnode<StepsIndicatorAttrs>;
				const state = stepIndex < current ? "complete" : stepIndex === current ? "current" : "incomplete";
				return (
					<span
						class={classNames(styles.indicator, v.attrs.class, (styles as any)[`indicator${capitalize(state)}`])}
						style={v.attrs.style}
						data-part="indicator"
						data-state={state}
					>
						{state === "complete" ? (
							<svg viewBox="0 0 20 20" fill="currentColor" width="1em" height="1em">
								<path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" />
							</svg>
						) : (stepIndex + 1)}
					</span>
				);
			}
			if (role === "title") {
				const v = child as m.Vnode<StepsTitleAttrs>;
				return <span class={classNames(styles.title, v.attrs.class)} style={v.attrs.style} data-part="title">{v.children}</span>;
			}
			if (role === "description") {
				const v = child as m.Vnode<StepsDescriptionAttrs>;
				return <span class={classNames(styles.description, v.attrs.class)} style={v.attrs.style} data-part="description">{v.children}</span>;
			}
			return child;
		});
	}

	view(vnode: m.Vnode<StepsRootAttrs>) {
		const attrs = vnode.attrs;
		const allChildren = toChildArray(vnode.children);
		const listVNode = allChildren.find(c => getRole(c) === "list");
		const contents = allChildren.filter(c => getRole(c) === "content") as m.Vnode<StepsContentAttrs>[];
		const completedContent = allChildren.find(c => getRole(c) === "completed-content") as m.Vnode<StepsCompletedContentAttrs> | undefined;
		const prevTrigger = allChildren.find(c => getRole(c) === "prev-trigger") as m.Vnode<StepsPrevTriggerAttrs> | undefined;
		const nextTrigger = allChildren.find(c => getRole(c) === "next-trigger") as m.Vnode<StepsNextTriggerAttrs> | undefined;

		const items = this.collectItems(listVNode);
		const current = this.resolveStep(attrs, false);
		const variant = attrs.variant ?? "solid";
		const size = attrs.size ?? "md";
		const orientation = attrs.orientation ?? "horizontal";
		const isComplete = current >= attrs.count;
		const activeContent = contents.find(c => c.attrs.index === current);

		return (
			<div
				class={classNames(
					styles.root,
					(styles as any)[`variant${capitalize(variant)}`],
					(styles as any)[`size${capitalize(size)}`],
					{ [styles.orientationVertical]: orientation === "vertical" },
					attrs.class,
				)}
				style={attrs.style}
				data-scope="steps"
				data-part="root"
				data-orientation={orientation}
			>
				<div class={classNames(styles.list, listVNode?.attrs.class)} style={listVNode?.attrs.style} data-part="list">
					{items.map(item => {
						const state = item.index < current ? "complete" : item.index === current ? "current" : "incomplete";
						return (
							<div
								key={item.index}
								class={classNames(styles.item, item.className, (styles as any)[`item${capitalize(state)}`])}
								style={item.style}
								data-part="item"
								data-state={state}
							>
								<button
									type="button"
									class={classNames(styles.trigger, item.triggerVNode?.attrs.class)}
									style={item.triggerVNode?.attrs.style}
									data-part="trigger"
									data-state={state}
									disabled={attrs.linear && item.index > current}
									onclick={() => {
										if (!attrs.linear || item.index <= current) {
											this.setStep(attrs, item.index);
										}
									}}
								>
									{this.renderTriggerContent(item.triggerVNode, item.index, current)}
								</button>
								{item.separatorVNode ? (
									<div
										class={classNames(styles.separator, item.separatorVNode.attrs.class, {
											[styles.separatorComplete]: item.index < current,
										})}
										style={item.separatorVNode.attrs.style}
										data-part="separator"
										data-state={item.index < current ? "complete" : "incomplete"}
									/>
								) : null}
							</div>
						);
					})}
				</div>

				{isComplete && completedContent ? (
					<div class={classNames(styles.content, completedContent.attrs.class)} style={completedContent.attrs.style} data-part="completed-content">
						{completedContent.children}
					</div>
				) : activeContent ? (
					<div class={classNames(styles.content, activeContent.attrs.class)} style={activeContent.attrs.style} data-part="content">
						{activeContent.children}
					</div>
				) : null}

				{(prevTrigger || nextTrigger) ? (
					<div class={styles.navigation} data-part="navigation">
						{prevTrigger ? (
							<button
								type="button"
								class={classNames(styles.prevTrigger, prevTrigger.attrs.class)}
								style={prevTrigger.attrs.style}
								data-part="prev-trigger"
								disabled={current <= 0}
								onclick={() => this.setStep(attrs, current - 1)}
							>
								{prevTrigger.children}
							</button>
						) : null}
						{nextTrigger ? (
							<button
								type="button"
								class={classNames(styles.nextTrigger, nextTrigger.attrs.class)}
								style={nextTrigger.attrs.style}
								data-part="next-trigger"
								disabled={isComplete}
								onclick={() => this.setStep(attrs, current + 1)}
							>
								{nextTrigger.children}
							</button>
						) : null}
					</div>
				) : null}
			</div>
		);
	}
}

/**
 * Steps compound component のバンドル。
 */
export const Steps = {
	Root: StepsRoot,
	List: StepsList,
	Item: StepsItemMarker,
	Trigger: StepsTriggerMarker,
	Indicator: StepsIndicatorMarker,
	Separator: StepsSeparatorMarker,
	Content: StepsContentMarker,
	CompletedContent: StepsCompletedContentMarker,
	Title: StepsTitleMarker,
	Description: StepsDescriptionMarker,
	PrevTrigger: StepsPrevTriggerMarker,
	NextTrigger: StepsNextTriggerMarker,
};
