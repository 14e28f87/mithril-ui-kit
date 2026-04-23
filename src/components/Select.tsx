/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Select.module.scss";

/* ─── 型定義 ─── */

/**
 * Select アイテム
 */
export interface SelectItem {
	/** 値（一意識別子） */
	value: string;
	/** 表示ラベル */
	label: string;
	/** 無効状態 */
	disabled?: boolean;
	/** 説明文 */
	description?: string;
	/** グループ名 */
	group?: string;
}

/** Select バリアント */
export type SelectVariant = "outline" | "subtle" | "ghost";

/** Select サイズ */
export type SelectSize = "xs" | "sm" | "md" | "lg";

/** 値変更イベント詳細 */
export interface SelectValueChangeDetails {
	value: string[];
	items: SelectItem[];
}

/** 開閉変更イベント詳細 */
export interface SelectOpenChangeDetails {
	open: boolean;
}

/** Select.Root の属性 */
export interface SelectRootAttrs {
	/** 項目リスト */
	items: SelectItem[];
	/** 選択値（単一選択: string[], 複数選択: string[]） */
	value?: string[];
	/** デフォルト値 */
	defaultValue?: string[];
	/** 値変更コールバック */
	onValueChange?: (details: SelectValueChangeDetails) => void;
	/** 複数選択 */
	multiple?: boolean;
	/** 無効状態 */
	disabled?: boolean;
	/** 読み取り専用 */
	readOnly?: boolean;
	/** 必須 */
	required?: boolean;
	/** 不正状態 */
	invalid?: boolean;
	/** バリアント */
	variant?: SelectVariant;
	/** サイズ */
	size?: SelectSize;
	/** プレースホルダ */
	placeholder?: string;
	/** アイテム選択後に閉じるか（単一選択のデフォルト: true） */
	closeOnSelect?: boolean;
	/** 選択解除を許可するか（単一選択で再クリックで解除） */
	deselectable?: boolean;
	/** キーボードナビゲーションをループするか */
	loopFocus?: boolean;
	/** 開閉の制御 */
	open?: boolean;
	/** 開閉変更コールバック */
	onOpenChange?: (details: SelectOpenChangeDetails) => void;
	/** name 属性（hidden select 用） */
	name?: string;
	/** 追加クラス */
	class?: string;
	/** ドロップダウンの配置 */
	positioning?: "bottom" | "top";
	[key: string]: any;
}

/* ─── ユーティリティ ─── */
function capitalize(s: string): string {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

/* ─── マーカーロール ─── */
type SelectRole =
	| "hidden-select"
	| "label"
	| "control"
	| "trigger"
	| "value-text"
	| "indicator-group"
	| "indicator"
	| "clear-trigger"
	| "positioner"
	| "content"
	| "item"
	| "item-group"
	| "item-group-label";

/* ─── Context（Root → 子コンポーネント間で共有する状態） ─── */
interface SelectContext {
	items: SelectItem[];
	value: string[];
	multiple: boolean;
	disabled: boolean;
	readOnly: boolean;
	invalid: boolean;
	placeholder: string;
	isOpen: boolean;
	highlightIndex: number;
	variant: SelectVariant;
	size: SelectSize;
	toggle: () => void;
	selectItem: (val: string) => void;
	clearAll: () => void;
	removeTag: (val: string) => void;
	setHighlight: (idx: number) => void;
	getSelectedItems: () => SelectItem[];
	getVisibleItems: () => SelectItem[];
}

/** グローバル context 保持（Mithril にはReactのcontextがないため） */
let currentCtx: SelectContext | null = null;

/* ─── マーカークラス群 ─── */

class HiddenSelectMarker {
	static __selRole: SelectRole = "hidden-select";
	view() { return null; }
}

class LabelMarker {
	static __selRole: SelectRole = "label";
	view() { return null; }
}

class ControlMarker {
	static __selRole: SelectRole = "control";
	view() { return null; }
}

class TriggerMarker {
	static __selRole: SelectRole = "trigger";
	view() { return null; }
}

class ValueTextMarker {
	static __selRole: SelectRole = "value-text";
	view() { return null; }
}

class IndicatorGroupMarker {
	static __selRole: SelectRole = "indicator-group";
	view() { return null; }
}

class IndicatorMarker {
	static __selRole: SelectRole = "indicator";
	view() { return null; }
}

class ClearTriggerMarker {
	static __selRole: SelectRole = "clear-trigger";
	view() { return null; }
}

class PositionerMarker {
	static __selRole: SelectRole = "positioner";
	view() { return null; }
}

class ContentMarker {
	static __selRole: SelectRole = "content";
	view() { return null; }
}

/** Select.Item の属性 */
export interface SelectItemAttrs {
	/** 項目の値 */
	item: string;
	/** 無効状態 */
	disabled?: boolean;
	/** 追加クラス */
	class?: string;
	[key: string]: any;
}

class ItemMarker {
	static __selRole: SelectRole = "item";
	view() { return null; }
}

class ItemGroupMarker {
	static __selRole: SelectRole = "item-group";
	view() { return null; }
}

class ItemGroupLabelMarker {
	static __selRole: SelectRole = "item-group-label";
	view() { return null; }
}

/* ─── Root コンポーネント ─── */

class SelectRoot implements m.ClassComponent<SelectRootAttrs> {
	private internalOpen = false;
	private internalValue: string[] = [];
	private highlightIndex = -1;
	private containerEl?: HTMLElement;
	private handleDocClick: (e: MouseEvent) => void;

	constructor() {
		this.handleDocClick = (e: MouseEvent) => {
			// Shadow DOM 内クリック時は e.target がリターゲティングされるため composedPath() で判定
			if (this.containerEl && e.composedPath().includes(this.containerEl)) return;
			if (this.internalOpen) {
				this.internalOpen = false;
				m.redraw();
			}
		};
	}

	oninit(vnode: m.Vnode<SelectRootAttrs>) {
		this.internalValue = vnode.attrs.value ?? vnode.attrs.defaultValue ?? [];
	}

	onbeforeupdate(vnode: m.Vnode<SelectRootAttrs>, old: m.VnodeDOM<SelectRootAttrs>) {
		if (vnode.attrs.value !== undefined && vnode.attrs.value !== old.attrs.value) {
			this.internalValue = vnode.attrs.value;
		}
	}

	private get isControlled(): boolean {
		return false; // open は常に内部管理（外部制御は onOpenChange で通知）
	}

	private getOpen(attrs: SelectRootAttrs): boolean {
		return attrs.open !== undefined ? attrs.open : this.internalOpen;
	}

	private setOpen(attrs: SelectRootAttrs, open: boolean) {
		this.internalOpen = open;
		this.highlightIndex = open ? 0 : -1;
		attrs.onOpenChange?.({ open });
	}

	private toggle(attrs: SelectRootAttrs) {
		if (attrs.disabled || attrs.readOnly) return;
		this.setOpen(attrs, !this.getOpen(attrs));
	}

	private selectItem(attrs: SelectRootAttrs, val: string) {
		if (attrs.disabled || attrs.readOnly) return;
		const item = attrs.items.find(i => i.value === val);
		if (item?.disabled) return;

		let newVal: string[];
		if (attrs.multiple) {
			const cur = [...this.internalValue];
			const idx = cur.indexOf(val);
			if (idx === -1) {
				cur.push(val);
			} else {
				cur.splice(idx, 1);
			}
			newVal = cur;
		} else {
			if (attrs.deselectable && this.internalValue.includes(val)) {
				newVal = [];
			} else {
				newVal = [val];
			}
			const shouldClose = attrs.closeOnSelect !== undefined ? attrs.closeOnSelect : true;
			if (shouldClose) {
				this.setOpen(attrs, false);
			}
		}

		if (attrs.value === undefined) {
			this.internalValue = newVal;
		}
		const selectedItems = newVal.map(v => attrs.items.find(i => i.value === v)).filter(Boolean) as SelectItem[];
		attrs.onValueChange?.({ value: newVal, items: selectedItems });
	}

	private clearAll(attrs: SelectRootAttrs) {
		if (attrs.disabled || attrs.readOnly) return;
		const newVal: string[] = [];
		if (attrs.value === undefined) {
			this.internalValue = newVal;
		}
		attrs.onValueChange?.({ value: newVal, items: [] });
	}

	private removeTag(attrs: SelectRootAttrs, val: string) {
		if (attrs.disabled || attrs.readOnly) return;
		const newVal = this.internalValue.filter(v => v !== val);
		if (attrs.value === undefined) {
			this.internalValue = newVal;
		}
		const selectedItems = newVal.map(v => attrs.items.find(i => i.value === v)).filter(Boolean) as SelectItem[];
		attrs.onValueChange?.({ value: newVal, items: selectedItems });
	}

	private onKeyDown(attrs: SelectRootAttrs, e: KeyboardEvent) {
		const isOpen = this.getOpen(attrs);
		if (!isOpen) {
			if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter" || e.key === " ") {
				e.preventDefault();
				this.setOpen(attrs, true);
			}
			return;
		}

		const visibleItems = this.getVisibleItems(attrs);
		const len = visibleItems.length;
		if (len === 0) return;

		if (e.key === "ArrowDown") {
			e.preventDefault();
			if (attrs.loopFocus) {
				this.highlightIndex = (this.highlightIndex + 1) % len;
			} else {
				this.highlightIndex = Math.min(this.highlightIndex + 1, len - 1);
			}
			// 無効項目をスキップ
			this.skipDisabled(visibleItems, 1, attrs.loopFocus);
		} else if (e.key === "ArrowUp") {
			e.preventDefault();
			if (attrs.loopFocus) {
				this.highlightIndex = (this.highlightIndex - 1 + len) % len;
			} else {
				this.highlightIndex = Math.max(this.highlightIndex - 1, 0);
			}
			this.skipDisabled(visibleItems, -1, attrs.loopFocus);
		} else if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			if (this.highlightIndex >= 0 && this.highlightIndex < len) {
				const item = visibleItems[this.highlightIndex];
				if (!item.disabled) this.selectItem(attrs, item.value);
			}
		} else if (e.key === "Escape") {
			e.preventDefault();
			this.setOpen(attrs, false);
		} else if (e.key === "Home") {
			e.preventDefault();
			this.highlightIndex = 0;
			this.skipDisabled(visibleItems, 1, false);
		} else if (e.key === "End") {
			e.preventDefault();
			this.highlightIndex = len - 1;
			this.skipDisabled(visibleItems, -1, false);
		}
	}

	private skipDisabled(items: SelectItem[], dir: number, loop?: boolean) {
		const len = items.length;
		let tries = 0;
		while (tries < len && items[this.highlightIndex]?.disabled) {
			if (loop) {
				this.highlightIndex = (this.highlightIndex + dir + len) % len;
			} else {
				this.highlightIndex = Math.max(0, Math.min(this.highlightIndex + dir, len - 1));
			}
			tries++;
		}
	}

	private getVisibleItems(attrs: SelectRootAttrs): SelectItem[] {
		return attrs.items;
	}

	/* ─── ツリー描画 ─── */

	view(vnode: m.Vnode<SelectRootAttrs>) {
		const attrs = vnode.attrs;
		const {
			items,
			variant = "outline",
			size = "md",
			disabled = false,
			readOnly = false,
			invalid = false,
			multiple = false,
			placeholder = "選択してください",
			name,
			class: className,
			positioning = "bottom",
			...rest
		} = attrs;

		const isOpen = this.getOpen(attrs);
		const value = this.internalValue;

		// context をグローバルに設定（子コンポーネント描画中に参照される）
		const ctx: SelectContext = {
			items,
			value,
			multiple,
			disabled,
			readOnly,
			invalid,
			placeholder,
			isOpen,
			highlightIndex: this.highlightIndex,
			variant,
			size,
			toggle: () => this.toggle(attrs),
			selectItem: (val) => this.selectItem(attrs, val),
			clearAll: () => this.clearAll(attrs),
			removeTag: (val) => this.removeTag(attrs, val),
			setHighlight: (idx) => { this.highlightIndex = idx; },
			getSelectedItems: () => value.map(v => items.find(i => i.value === v)).filter(Boolean) as SelectItem[],
			getVisibleItems: () => this.getVisibleItems(attrs),
		};
		currentCtx = ctx;

		const children = vnode.children as any;
		const rendered = this.renderChildren(children, ctx, attrs);

		return (
			<div
				{...filterDomAttrs(rest)}
				class={classNames(
					styles.root,
					(styles as any)[`variant${capitalize(variant)}`],
					(styles as any)[`size${capitalize(size)}`],
					{ [styles.disabled]: disabled },
					{ [styles.invalid]: invalid },
					className,
				)}
				data-select-root=""
				onkeydown={(e: KeyboardEvent) => this.onKeyDown(attrs, e)}
				oncreate={(dom: m.VnodeDOM<any>) => {
					this.containerEl = dom.dom as HTMLElement;
					document.addEventListener("click", this.handleDocClick);
				}}
				onremove={() => {
					document.removeEventListener("click", this.handleDocClick);
					this.containerEl = undefined;
					currentCtx = null;
				}}
			>
				{rendered}
			</div>
		);
	}

	private renderChildren(children: any, ctx: SelectContext, attrs: SelectRootAttrs): m.Children {
		if (!children) return null;
		const arr = Array.isArray(children) ? children.flat(Infinity) : [children];
		const result: m.Children[] = [];

		for (const child of arr) {
			if (!child || typeof child !== "object" || !("tag" in child)) {
				result.push(child as m.Children);
				continue;
			}
			const cv = child as m.Vnode<any>;
			const tag = cv.tag as any;
			const role: SelectRole | undefined = tag?.__selRole;

			if (!role) {
				result.push(child as m.Children);
				continue;
			}

			switch (role) {
				case "hidden-select":
					result.push(this.renderHiddenSelect(cv, ctx, attrs));
					break;
				case "label":
					result.push(this.renderLabel(cv, ctx));
					break;
				case "control":
					result.push(this.renderControl(cv, ctx, attrs));
					break;
				case "positioner":
					result.push(this.renderPositioner(cv, ctx, attrs));
					break;
				default:
					result.push(child as m.Children);
			}
		}
		return result;
	}

	private renderHiddenSelect(_cv: m.Vnode<any>, ctx: SelectContext, attrs: SelectRootAttrs): m.Children {
		return (
			<select
				name={attrs.name}
				multiple={ctx.multiple || undefined}
				required={attrs.required || undefined}
				disabled={ctx.disabled || undefined}
				style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);border:0;padding:0"
				tabindex={-1}
				aria-hidden="true"
			>
				{ctx.value.length === 0 && <option value="" />}
				{ctx.value.map(v => <option key={v} value={v} selected>{v}</option>)}
			</select>
		);
	}

	private renderLabel(cv: m.Vnode<any>, ctx: SelectContext): m.Children {
		return (
			<label
				{...(cv.attrs || {})}
				class={classNames(styles.label, cv.attrs?.class)}
			>
				{cv.children}
			</label>
		);
	}

	private renderControl(cv: m.Vnode<any>, ctx: SelectContext, attrs: SelectRootAttrs): m.Children {
		const controlChildren = cv.children as any;
		const rendered = this.renderControlChildren(controlChildren, ctx, attrs);
		return (
			<div
				{...(cv.attrs || {})}
				class={classNames(styles.control, cv.attrs?.class)}
			>
				{rendered}
			</div>
		);
	}

	private renderControlChildren(children: any, ctx: SelectContext, attrs: SelectRootAttrs): m.Children {
		if (!children) return null;
		const arr = Array.isArray(children) ? children.flat(Infinity) : [children];
		const result: m.Children[] = [];

		for (const child of arr) {
			if (!child || typeof child !== "object" || !("tag" in child)) {
				result.push(child as m.Children);
				continue;
			}
			const cv = child as m.Vnode<any>;
			const tag = cv.tag as any;
			const role: SelectRole | undefined = tag?.__selRole;

			if (!role) {
				result.push(child as m.Children);
				continue;
			}

			switch (role) {
				case "trigger":
					result.push(this.renderTrigger(cv, ctx, attrs));
					break;
				case "indicator-group":
					result.push(this.renderIndicatorGroup(cv, ctx, attrs));
					break;
				default:
					result.push(child as m.Children);
			}
		}
		return result;
	}

	private renderTrigger(cv: m.Vnode<any>, ctx: SelectContext, attrs: SelectRootAttrs): m.Children {
		const triggerChildren = cv.children as any;
		const rendered = this.renderTriggerChildren(triggerChildren, ctx);

		const isMulti = ctx.multiple;
		const selectedItems = ctx.getSelectedItems();

		return (
			<button
				type="button"
				{...(cv.attrs || {})}
				class={classNames(
					styles.trigger,
					{ [styles.triggerMultiple]: isMulti && selectedItems.length > 0 },
					cv.attrs?.class,
				)}
				role="combobox"
				aria-haspopup="listbox"
				aria-expanded={ctx.isOpen}
				aria-disabled={ctx.disabled || undefined}
				disabled={ctx.disabled || undefined}
				onclick={() => ctx.toggle()}
			>
				{isMulti && selectedItems.length > 0 ? (
					m.fragment({}, [
						...selectedItems.map(item => (
							<span class={styles.tag} key={item.value}>
								<span>{item.label}</span>
								<button
									type="button"
									class={styles.tagClose}
									onclick={(e: Event) => {
										e.stopPropagation();
										ctx.removeTag(item.value);
									}}
									aria-label={`${item.label} を削除`}
								>×</button>
							</span>
						)),
					])
				) : (
					rendered
				)}
			</button>
		);
	}

	private renderTriggerChildren(children: any, ctx: SelectContext): m.Children {
		if (!children) return null;
		const arr = Array.isArray(children) ? children.flat(Infinity) : [children];
		const result: m.Children[] = [];

		for (const child of arr) {
			if (!child || typeof child !== "object" || !("tag" in child)) {
				result.push(child as m.Children);
				continue;
			}
			const cv = child as m.Vnode<any>;
			const tag = cv.tag as any;

			if (tag?.__selRole === "value-text") {
				result.push(this.renderValueText(cv, ctx));
			} else if (tag?.__selRole === "indicator-group") {
				// IndicatorGroup inside trigger — render it too
				result.push(this.renderIndicatorGroupInline(cv, ctx));
			} else {
				result.push(child as m.Children);
			}
		}
		return result;
	}

	private renderValueText(cv: m.Vnode<any>, ctx: SelectContext): m.Children {
		const selectedItems = ctx.getSelectedItems();
		const phText = cv.attrs?.placeholder ?? ctx.placeholder;

		let displayText: string;
		if (selectedItems.length === 0) {
			displayText = phText;
		} else if (ctx.multiple) {
			displayText = selectedItems.map(i => i.label).join(", ");
		} else {
			displayText = selectedItems[0]?.label ?? phText;
		}

		const isEmpty = selectedItems.length === 0;

		return (
			<span
				{...(cv.attrs || {})}
				class={classNames(
					styles.valueText,
					{ [styles.placeholder]: isEmpty },
					cv.attrs?.class,
				)}
			>
				{cv.children && (cv.children as any[]).length > 0 ? cv.children : displayText}
			</span>
		);
	}

	private renderIndicatorGroup(cv: m.Vnode<any>, ctx: SelectContext, attrs: SelectRootAttrs): m.Children {
		const igChildren = cv.children as any;
		const rendered = this.renderIndicatorGroupChildren(igChildren, ctx, attrs);
		return (
			<div
				{...(cv.attrs || {})}
				class={classNames(styles.indicatorGroup, cv.attrs?.class)}
			>
				{rendered}
			</div>
		);
	}

	private renderIndicatorGroupInline(cv: m.Vnode<any>, ctx: SelectContext): m.Children {
		const igChildren = cv.children as any;
		const arr = Array.isArray(igChildren) ? igChildren.flat(Infinity) : [igChildren];
		const result: m.Children[] = [];

		for (const child of arr) {
			if (!child || typeof child !== "object" || !("tag" in child)) {
				result.push(child as m.Children);
				continue;
			}
			const childVnode = child as m.Vnode<any>;
			const tag = childVnode.tag as any;

			if (tag?.__selRole === "indicator") {
				result.push(this.renderIndicator(childVnode, ctx));
			} else if (tag?.__selRole === "clear-trigger") {
				result.push(this.renderClearTrigger(childVnode, ctx));
			} else {
				result.push(child as m.Children);
			}
		}

		return (
			<div class={styles.indicatorGroup}>
				{result}
			</div>
		);
	}

	private renderIndicatorGroupChildren(children: any, ctx: SelectContext, _attrs: SelectRootAttrs): m.Children {
		if (!children) return null;
		const arr = Array.isArray(children) ? children.flat(Infinity) : [children];
		const result: m.Children[] = [];

		for (const child of arr) {
			if (!child || typeof child !== "object" || !("tag" in child)) {
				result.push(child as m.Children);
				continue;
			}
			const cv = child as m.Vnode<any>;
			const tag = cv.tag as any;

			if (tag?.__selRole === "indicator") {
				result.push(this.renderIndicator(cv, ctx));
			} else if (tag?.__selRole === "clear-trigger") {
				result.push(this.renderClearTrigger(cv, ctx));
			} else {
				result.push(child as m.Children);
			}
		}
		return result;
	}

	private renderIndicator(cv: m.Vnode<any>, ctx: SelectContext): m.Children {
		return (
			<span
				{...(cv.attrs || {})}
				class={classNames(
					styles.indicator,
					{ [styles.indicatorOpen]: ctx.isOpen },
					cv.attrs?.class,
				)}
				aria-hidden="true"
			>
				{cv.children && (cv.children as any[]).length > 0 ? cv.children : (
					<svg viewBox="0 0 16 16" fill="currentColor">
						<path d="M4.47 5.47a.75.75 0 0 1 1.06 0L8 7.94l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 0-1.06z" />
					</svg>
				)}
			</span>
		);
	}

	private renderClearTrigger(cv: m.Vnode<any>, ctx: SelectContext): m.Children {
		if (ctx.value.length === 0 || ctx.disabled || ctx.readOnly) return null;

		return (
			<button
				type="button"
				{...(cv.attrs || {})}
				class={classNames(styles.clearTrigger, cv.attrs?.class)}
				onclick={(e: Event) => {
					e.stopPropagation();
					ctx.clearAll();
				}}
				aria-label="選択をクリア"
			>
				{cv.children && (cv.children as any[]).length > 0 ? cv.children : "×"}
			</button>
		);
	}

	private renderPositioner(cv: m.Vnode<any>, ctx: SelectContext, attrs: SelectRootAttrs): m.Children {
		if (!ctx.isOpen) return null;

		const pos = attrs.positioning ?? "bottom";
		const posChildren = cv.children as any;
		const rendered = this.renderPositionerChildren(posChildren, ctx, attrs);

		return (
			<div
				{...(cv.attrs || {})}
				class={classNames(
					styles.positioner,
					pos === "top" ? styles.positionerTop : styles.positionerBottom,
					cv.attrs?.class,
				)}
			>
				{rendered}
			</div>
		);
	}

	private renderPositionerChildren(children: any, ctx: SelectContext, attrs: SelectRootAttrs): m.Children {
		if (!children) return null;
		const arr = Array.isArray(children) ? children.flat(Infinity) : [children];
		const result: m.Children[] = [];

		for (const child of arr) {
			if (!child || typeof child !== "object" || !("tag" in child)) {
				result.push(child as m.Children);
				continue;
			}
			const cv = child as m.Vnode<any>;
			const tag = cv.tag as any;

			if (tag?.__selRole === "content") {
				result.push(this.renderContent(cv, ctx, attrs));
			} else {
				result.push(child as m.Children);
			}
		}
		return result;
	}

	private renderContent(cv: m.Vnode<any>, ctx: SelectContext, attrs: SelectRootAttrs): m.Children {
		const contentChildren = cv.children as any;
		const rendered = this.renderContentChildren(contentChildren, ctx, attrs);

		return (
			<div
				{...(cv.attrs || {})}
				role="listbox"
				aria-multiselectable={ctx.multiple || undefined}
				class={classNames(styles.content, cv.attrs?.class)}
			>
				{rendered}
			</div>
		);
	}

	private renderContentChildren(children: any, ctx: SelectContext, attrs: SelectRootAttrs): m.Children {
		if (!children) return null;
		const arr = Array.isArray(children) ? children.flat(Infinity) : [children];
		const result: m.Children[] = [];

		for (const child of arr) {
			if (!child || typeof child !== "object" || !("tag" in child)) {
				result.push(child as m.Children);
				continue;
			}
			const cv = child as m.Vnode<any>;
			const tag = cv.tag as any;

			if (tag?.__selRole === "item") {
				result.push(this.renderItem(cv, ctx));
			} else if (tag?.__selRole === "item-group") {
				result.push(this.renderItemGroup(cv, ctx));
			} else {
				result.push(child as m.Children);
			}
		}

		if (result.length === 0) {
			result.push(<div class={styles.noItems}>該当する項目がありません</div>);
		}

		return result;
	}

	private renderItem(cv: m.Vnode<any>, ctx: SelectContext): m.Children {
		const itemVal: string = cv.attrs?.item;
		if (!itemVal) return null;

		const itemObj = ctx.items.find(i => i.value === itemVal);
		const isSelected = ctx.value.includes(itemVal);
		const isDisabled = cv.attrs?.disabled || itemObj?.disabled;
		const visibleItems = ctx.getVisibleItems();
		const flatIdx = visibleItems.findIndex(i => i.value === itemVal);
		const isHighlighted = flatIdx === ctx.highlightIndex;

		return (
			<div
				{...filterDomAttrs(cv.attrs || {})}
				role="option"
				aria-selected={isSelected}
				aria-disabled={isDisabled || undefined}
				data-value={itemVal}
				class={classNames(
					styles.item,
					{ [styles.itemSelected]: isSelected },
					{ [styles.itemHighlighted]: isHighlighted },
					{ [styles.itemDisabled]: isDisabled },
					cv.attrs?.class,
				)}
				onclick={() => {
					if (!isDisabled) ctx.selectItem(itemVal);
				}}
				onmousemove={() => {
					if (!isDisabled) ctx.setHighlight(flatIdx);
				}}
			>
				{ctx.multiple && (
					<span class={styles.itemIndicator}>
						{isSelected ? "✓" : ""}
					</span>
				)}
				<span class={styles.itemText}>
					{cv.children && (cv.children as any[]).length > 0 ? cv.children : itemObj?.label ?? itemVal}
				</span>
				{!ctx.multiple && isSelected && (
					<span class={styles.itemIndicator}>✓</span>
				)}
			</div>
		);
	}

	private renderItemGroup(cv: m.Vnode<any>, ctx: SelectContext): m.Children {
		const groupChildren = cv.children as any;
		const rendered = this.renderItemGroupChildren(groupChildren, ctx);
		return (
			<div
				{...(cv.attrs || {})}
				class={classNames(styles.itemGroup, cv.attrs?.class)}
				role="group"
			>
				{rendered}
			</div>
		);
	}

	private renderItemGroupChildren(children: any, ctx: SelectContext): m.Children {
		if (!children) return null;
		const arr = Array.isArray(children) ? children.flat(Infinity) : [children];
		const result: m.Children[] = [];

		for (const child of arr) {
			if (!child || typeof child !== "object" || !("tag" in child)) {
				result.push(child as m.Children);
				continue;
			}
			const cv = child as m.Vnode<any>;
			const tag = cv.tag as any;

			if (tag?.__selRole === "item") {
				result.push(this.renderItem(cv, ctx));
			} else if (tag?.__selRole === "item-group-label") {
				result.push(
					<div class={classNames(styles.itemGroupLabel, cv.attrs?.class)}>
						{cv.children}
					</div>
				);
			} else {
				result.push(child as m.Children);
			}
		}
		return result;
	}
}

/* ─── DOM attrs フィルタ ─── */
function filterDomAttrs(attrs: Record<string, any>): Record<string, any> {
	const skip = new Set([
		"items", "value", "defaultValue", "onValueChange", "multiple",
		"disabled", "readOnly", "required", "invalid", "variant", "size",
		"placeholder", "closeOnSelect", "deselectable", "loopFocus",
		"open", "onOpenChange", "name", "positioning", "item",
	]);
	const out: Record<string, any> = {};
	for (const k of Object.keys(attrs)) {
		if (!skip.has(k)) out[k] = attrs[k];
	}
	return out;
}

/* ─── 名前空間エクスポート ─── */

export const Select = {
	Root: SelectRoot,
	HiddenSelect: HiddenSelectMarker,
	Label: LabelMarker,
	Control: ControlMarker,
	Trigger: TriggerMarker,
	ValueText: ValueTextMarker,
	IndicatorGroup: IndicatorGroupMarker,
	Indicator: IndicatorMarker,
	ClearTrigger: ClearTriggerMarker,
	Positioner: PositionerMarker,
	Content: ContentMarker,
	Item: ItemMarker,
	ItemGroup: ItemGroupMarker,
	ItemGroupLabel: ItemGroupLabelMarker,
} as const;

export { SelectRoot };
