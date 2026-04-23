/** @jsx m */
import m from "mithril";
import styles from "./Dropdown.module.scss";

// ============================================================
// 型定義
// ============================================================

/** Menu のサイズ */
export type DropdownSize = "sm" | "md" | "lg";

/** Menu 開閉イベント詳細 */
export type DropdownOpenChangeDetails = {
	open: boolean;
};

/** Menu アイテム選択イベント詳細 */
export type DropdownSelectDetails = {
	value: string;
};

// --- Sub-component Attrs ---

/**
 * DropdownRoot の属性定義
 */
export type DropdownRootAttrs = {
	/** 制御開閉 */
	open?: boolean;
	/** デフォルト開閉 */
	defaultOpen?: boolean;
	/** 開閉コールバック */
	onOpenChange?: (details: DropdownOpenChangeDetails) => void;
	/** 選択コールバック */
	onSelect?: (details: DropdownSelectDetails) => void;
	/** サイズ */
	size?: DropdownSize;
	/** 配置 (start | end | right) */
	positioning?: "start" | "end" | "right";
	/** class */
	class?: string;
	/** style */
	style?: Record<string, string>;
};

export type DropdownTriggerAttrs = {
	class?: string;
	style?: Record<string, string>;
};
export type DropdownPositionerAttrs = {
	class?: string;
};
export type DropdownContentAttrs = {
	class?: string;
};
export type DropdownArrowAttrs = {
	class?: string;
};
export type DropdownContextTriggerAttrs = {
	class?: string;
	style?: Record<string, string>;
};
export type DropdownItemAttrs = {
	value?: string;
	disabled?: boolean;
	destructive?: boolean;
	closeOnSelect?: boolean;
	class?: string;
};
export type DropdownItemGroupAttrs = {
	label?: string;
	class?: string;
};
export type DropdownSeparatorAttrs = {
	class?: string;
};
export type DropdownCheckboxItemAttrs = {
	value: string;
	checked?: boolean;
	onCheckedChange?: (checked: boolean) => void;
	disabled?: boolean;
	class?: string;
};
export type DropdownRadioItemGroupAttrs = {
	value?: string;
	onValueChange?: (value: string) => void;
	class?: string;
};
export type DropdownRadioItemAttrs = {
	value: string;
	disabled?: boolean;
	class?: string;
};

// ============================================================
// マーカー
// ============================================================

type MnRole =
	| "trigger" | "positioner" | "content" | "arrow"
	| "item" | "itemGroup" | "separator"
	| "checkboxItem" | "radioItemGroup" | "radioItem"
	| "contextTrigger";

class MnTriggerMarker implements m.Component<DropdownTriggerAttrs> {
	static __mnRole: MnRole = "trigger";
	view(vnode: m.Vnode<DropdownTriggerAttrs>) { return <span>{vnode.children}</span>; }
}
class MnPositionerMarker implements m.Component<DropdownPositionerAttrs> {
	static __mnRole: MnRole = "positioner";
	view(vnode: m.Vnode<DropdownPositionerAttrs>) { return <span>{vnode.children}</span>; }
}
class MnContentMarker implements m.Component<DropdownContentAttrs> {
	static __mnRole: MnRole = "content";
	view(vnode: m.Vnode<DropdownContentAttrs>) { return <span>{vnode.children}</span>; }
}
class MnArrowMarker implements m.Component<DropdownArrowAttrs> {
	static __mnRole: MnRole = "arrow";
	view() { return <span />; }
}
class MnItemMarker implements m.Component<DropdownItemAttrs> {
	static __mnRole: MnRole = "item";
	view(vnode: m.Vnode<DropdownItemAttrs>) { return <span>{vnode.children}</span>; }
}
class MnItemGroupMarker implements m.Component<DropdownItemGroupAttrs> {
	static __mnRole: MnRole = "itemGroup";
	view(vnode: m.Vnode<DropdownItemGroupAttrs>) { return <span>{vnode.children}</span>; }
}
class MnSeparatorMarker implements m.Component<DropdownSeparatorAttrs> {
	static __mnRole: MnRole = "separator";
	view() { return <span />; }
}
class MnCheckboxItemMarker implements m.Component<DropdownCheckboxItemAttrs> {
	static __mnRole: MnRole = "checkboxItem";
	view(vnode: m.Vnode<DropdownCheckboxItemAttrs>) { return <span>{vnode.children}</span>; }
}
class MnRadioItemGroupMarker implements m.Component<DropdownRadioItemGroupAttrs> {
	static __mnRole: MnRole = "radioItemGroup";
	view(vnode: m.Vnode<DropdownRadioItemGroupAttrs>) { return <span>{vnode.children}</span>; }
}
class MnRadioItemMarker implements m.Component<DropdownRadioItemAttrs> {
	static __mnRole: MnRole = "radioItem";
	view(vnode: m.Vnode<DropdownRadioItemAttrs>) { return <span>{vnode.children}</span>; }
}
class MnContextTriggerMarker implements m.Component<DropdownContextTriggerAttrs> {
	static __mnRole: MnRole = "contextTrigger";
	view(vnode: m.Vnode<DropdownContextTriggerAttrs>) { return <span>{vnode.children}</span>; }
}

// ============================================================
// DropdownRoot
// ============================================================

/**
 * DropdownRoot — Chakra UI 風 Menu のルートコンポーネント。
 *
 * 責務:
 * 1. 開閉状態管理
 * 2. アイテム選択のコールバック
 * 3. 子マーカーの再帰的描画
 */
export class DropdownRoot implements m.Component<DropdownRootAttrs> {
	private isOpen = false;
	private rootEl: HTMLElement | null = null;
	/** RadioItemGroup 内の現在値マップ (一時管理) */
	private radioValues: Map<string, string> = new Map();
	/** コンテキストメニュー用カーソル座標 */
	private contextX = 0;
	private contextY = 0;
	/** コンテキストメニューモード（右クリックで開いた） */
	private isContextMenu = false;

	oninit(vnode: m.Vnode<DropdownRootAttrs>) {
		this.isOpen = vnode.attrs.open ?? vnode.attrs.defaultOpen ?? false;
	}

	onbeforeupdate(vnode: m.Vnode<DropdownRootAttrs>, old: m.VnodeDOM<DropdownRootAttrs>) {
		if (vnode.attrs.open !== undefined && vnode.attrs.open !== old.attrs.open) {
			this.isOpen = vnode.attrs.open;
		}
	}

	oncreate(vnode: m.VnodeDOM<DropdownRootAttrs>) {
		this.rootEl = vnode.dom as HTMLElement;
		document.addEventListener("mousedown", this.handleOutsideClick);
	}

	onremove() {
		document.removeEventListener("mousedown", this.handleOutsideClick);
		this.rootEl = null;
	}

	private handleOutsideClick = (e: MouseEvent) => {
		if (!this.isOpen || !this.rootEl) return;
		// Shadow DOM 内クリック時は e.target がリターゲティングされるため composedPath() で判定
		if (!e.composedPath().includes(this.rootEl)) {
			this.setOpen(false);
		}
	};

	private setOpen(open: boolean, attrs?: DropdownRootAttrs) {
		if (this.isOpen === open) return;
		this.isOpen = open;
		if (!open) this.isContextMenu = false;
		(attrs ?? {} as DropdownRootAttrs).onOpenChange?.({ open });
		m.redraw();
	}

	private toggleOpen(attrs: DropdownRootAttrs) {
		this.setOpen(!this.isOpen, attrs);
	}

	private selectItem(value: string | undefined, attrs: DropdownRootAttrs, closeOnSelect: boolean) {
		if (value) {
			attrs.onSelect?.({ value });
		}
		if (closeOnSelect) {
			this.setOpen(false, attrs);
		}
	}

	// --- 再帰描画 ---
	private renderChildren(children: m.Children, attrs: DropdownRootAttrs): m.Children {
		if (!Array.isArray(children)) {
			if (children && typeof children === "object" && "tag" in children) {
				return this.renderChild(children as m.Vnode, attrs);
			}
			return children;
		}
		return children.map(child => {
			if (!child || typeof child !== "object" || !("tag" in child)) return child;
			return this.renderChild(child as m.Vnode, attrs);
		});
	}

	private renderChild(child: m.Vnode, attrs: DropdownRootAttrs): m.Children {
		const tag = child.tag as any;
		if (!tag || !tag.__mnRole) {
			// HTMLタグ（string）の場合のみ子要素を再帰処理する
			// コンポーネント（class/function）の場合は内部マーカーを処理しないよう そのまま返す
			if (typeof tag === "string" && child.children) {
				return {
					...child,
					children: this.renderChildren(child.children as m.Children, attrs),
				} as any;
			}
			return child;
		}

		const role: MnRole = tag.__mnRole;
		const ca = (child.attrs ?? {}) as any;
		const cc = child.children as m.Children;

		switch (role) {
			case "trigger":
				return (
					<button
						type="button"
						class={`${styles.trigger} ${ca.class ?? ""}`}
						style={ca.style}
						data-part="trigger"
						onclick={() => this.toggleOpen(attrs)}
						aria-expanded={this.isOpen}
						aria-haspopup="menu"
					>
						{cc}
					</button>
				);

			case "positioner": {
				if (!this.isOpen) return null;
				const isEnd = !this.isContextMenu && attrs.positioning === "end";
				const isRight = !this.isContextMenu && attrs.positioning === "right";
				const posStyle = this.isContextMenu
					? { position: "fixed" as const, top: `${this.contextY}px`, left: `${this.contextX}px`, paddingTop: "0" }
					: undefined;
				return (
					<div
						class={[
							styles.positioner,
							isEnd ? styles.positionerEnd : "",
							isRight ? styles.positionerRight : "",
							ca.class ?? "",
						].filter(Boolean).join(" ")}
						style={posStyle}
						data-part="positioner"
					>
						{this.renderChildren(cc, attrs)}
					</div>
				);
			}

			case "content":
				return (
					<div class={`${styles.content} ${ca.class ?? ""}`} data-part="content" role="menu">
						{this.renderChildren(cc, attrs)}
					</div>
				);

			case "arrow":
				return <div class={`${styles.arrow} ${ca.class ?? ""}`} data-part="arrow" />;

			case "item": {
				const disabled = ca.disabled ?? false;
				const destructive = ca.destructive ?? false;
				const closeOnSel = ca.closeOnSelect !== false;
				const cls = [
					styles.item,
					destructive ? styles.itemDestructive : "",
					disabled ? styles.itemDisabled : "",
					ca.class ?? "",
				].filter(Boolean).join(" ");
				return (
					<button
						type="button"
						class={cls}
						data-part="item"
						data-value={ca.value}
						role="menuitem"
						disabled={disabled}
						onclick={() => { if (!disabled) this.selectItem(ca.value, attrs, closeOnSel); }}
					>
						{cc}
					</button>
				);
			}

			case "itemGroup": {
				const label = ca.label;
				return (
					<div class={`${styles.itemGroup} ${ca.class ?? ""}`} data-part="item-group" role="group">
						{label && <div class={styles.itemGroupLabel}>{label}</div>}
						{this.renderChildren(cc, attrs)}
					</div>
				);
			}

			case "separator":
				return <div class={`${styles.separator} ${ca.class ?? ""}`} data-part="separator" role="separator" />;

			case "checkboxItem": {
				const checked = ca.checked ?? false;
				const disabled = ca.disabled ?? false;
				const cls = [
					styles.checkboxItem,
					disabled ? styles.itemDisabled : "",
					ca.class ?? "",
				].filter(Boolean).join(" ");
				return (
					<button
						type="button"
						class={cls}
						data-part="checkbox-item"
						role="menuitemcheckbox"
						aria-checked={checked}
						disabled={disabled}
						onclick={() => {
							if (!disabled) {
								ca.onCheckedChange?.(!checked);
							}
						}}
					>
						{checked && <span class={styles.itemIndicator}>✓</span>}
						{cc}
					</button>
				);
			}

			case "radioItemGroup": {
				// RadioItemGroup: 子の RadioItem に現在値を渡す
				const groupId = ca.value ?? "";
				return (
					<div class={`${styles.itemGroup} ${ca.class ?? ""}`} data-part="radio-item-group" role="radiogroup">
						{this.renderRadioItems(cc, attrs, ca)}
					</div>
				);
			}

			case "radioItem": {
				// ここには直接到達しない (radioItemGroup 内で処理)
				return child;
			}

			case "contextTrigger":
				return (
					<div
						class={`${styles.contextTrigger} ${ca.class ?? ""}`}
						style={ca.style}
						data-part="context-trigger"
						oncontextmenu={(e: MouseEvent) => {
							e.preventDefault();
							this.contextX = e.clientX;
							this.contextY = e.clientY;
							this.isContextMenu = true;
							if (!this.isOpen) {
								this.setOpen(true, attrs);
							}
						}}
					>
						{cc}
					</div>
				);

			default:
				return child;
		}
	}

	/** RadioItemGroup 内の RadioItem を描画 */
	private renderRadioItems(children: m.Children, attrs: DropdownRootAttrs, groupAttrs: DropdownRadioItemGroupAttrs): m.Children {
		if (!Array.isArray(children)) return children;
		return children.map(child => {
			if (!child || typeof child !== "object" || !("tag" in child)) return child;
			const tag = (child as m.Vnode).tag as any;
			if (tag?.__mnRole === "radioItem") {
				const ca = ((child as m.Vnode).attrs ?? {}) as DropdownRadioItemAttrs;
				const cc = (child as m.Vnode).children as m.Children;
				const checked = groupAttrs.value === ca.value;
				const disabled = ca.disabled ?? false;
				const cls = [
					styles.radioItem,
					disabled ? styles.itemDisabled : "",
					ca.class ?? "",
				].filter(Boolean).join(" ");
				return (
					<button
						type="button"
						class={cls}
						data-part="radio-item"
						role="menuitemradio"
						aria-checked={checked}
						disabled={disabled}
						onclick={() => {
							if (!disabled) {
								groupAttrs.onValueChange?.(ca.value);
								this.setOpen(false, attrs);
							}
						}}
					>
						{checked && <span class={styles.itemIndicator}>●</span>}
						{cc}
					</button>
				);
			}
			return child;
		});
	}

	// --- view() ---
	view(vnode: m.Vnode<DropdownRootAttrs>) {
		const attrs = vnode.attrs;
		const size = attrs.size ?? "md";
		const sizeClass = size === "sm" ? styles.sizeSm : size === "lg" ? styles.sizeLg : "";
		const rootClass = [styles.root, sizeClass, attrs.class ?? ""].filter(Boolean).join(" ");

		return (
			<div class={rootClass} data-part="root" style={attrs.style}>
				{this.renderChildren(vnode.children as m.Children, attrs)}
			</div>
		);
	}
}

// ============================================================
// namespace export
// ============================================================

/**
 * Menu — Chakra UI 風の compound component Menu。
 *
 * @example
 * ```tsx
 * <Menu.Root onSelect={(d) => console.log(d.value)}>
 *   <Menu.Trigger>Actions ▾</Menu.Trigger>
 *   <Menu.Positioner>
 *     <Menu.Content>
 *       <Menu.Item value="edit">Edit</Menu.Item>
 *       <Menu.Item value="delete" destructive>Delete</Menu.Item>
 *     </Menu.Content>
 *   </Menu.Positioner>
 * </Menu.Root>
 * ```
 */
export const Dropdown = {
	Root: DropdownRoot,
	Trigger: MnTriggerMarker,
	Positioner: MnPositionerMarker,
	Content: MnContentMarker,
	Arrow: MnArrowMarker,
	Item: MnItemMarker,
	ItemGroup: MnItemGroupMarker,
	Separator: MnSeparatorMarker,
	CheckboxItem: MnCheckboxItemMarker,
	RadioItemGroup: MnRadioItemGroupMarker,
	RadioItem: MnRadioItemMarker,
	ContextTrigger: MnContextTriggerMarker,
};
