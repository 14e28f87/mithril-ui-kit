/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./TreeView.module.scss";

/**
 * TreeView サイズ
 */
export type TreeViewSize = "sm" | "md" | "lg";

/**
 * ツリーノードデータ
 */
export interface TreeNode {
	id: string;
	name: string;
	children?: TreeNode[];
	icon?: string;
	disabled?: boolean;
}

/* ─── Role Types ─── */
type TVRole = "root" | "tree" | "branch" | "item" | "node" | "branchContent"
	| "branchControl" | "branchText" | "branchIndicator" | "itemText" | "itemIndicator";

/* ─── Attrs ─── */
export interface TreeViewRootAttrs {
	/** サイズ */
	size?: TreeViewSize;
	/** バリアント */
	variant?: "plain" | "subtle";
	/** 選択値 */
	selectedIds?: string[];
	/** 値変更コールバック */
	onSelectionChange?: (ids: string[]) => void;
	/** 展開中のノード */
	expandedIds?: string[];
	/** 展開変更コールバック */
	onExpandChange?: (ids: string[]) => void;
	/** ツリーデータ */
	data?: TreeNode[];
	/** 追加クラス */
	class?: string;
	[key: string]: any;
}

function capitalize(s: string): string {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

/**
 * TreeView Root コンポーネント — ツリー構造の表示
 *
 * @example
 * ```tsx
 * const data = [
 *   { id: "1", name: "フォルダA", children: [
 *     { id: "1-1", name: "ファイル1" },
 *   ]},
 * ];
 * <TreeView.Root data={data} size="md" />
 * ```
 */
class TreeViewRoot implements m.ClassComponent<TreeViewRootAttrs> {
	private expandedIds: Set<string> = new Set();
	private selectedIds: Set<string> = new Set();

	oninit(vnode: m.Vnode<TreeViewRootAttrs>) {
		if (vnode.attrs.expandedIds) {
			this.expandedIds = new Set(vnode.attrs.expandedIds);
		}
		if (vnode.attrs.selectedIds) {
			this.selectedIds = new Set(vnode.attrs.selectedIds);
		}
	}

	onupdate(vnode: m.Vnode<TreeViewRootAttrs>) {
		if (vnode.attrs.expandedIds) {
			this.expandedIds = new Set(vnode.attrs.expandedIds);
		}
		if (vnode.attrs.selectedIds) {
			this.selectedIds = new Set(vnode.attrs.selectedIds);
		}
	}

	private toggleExpand(id: string, attrs: TreeViewRootAttrs) {
		if (this.expandedIds.has(id)) {
			this.expandedIds.delete(id);
		} else {
			this.expandedIds.add(id);
		}
		attrs.onExpandChange?.(Array.from(this.expandedIds));
	}

	private toggleSelect(id: string, attrs: TreeViewRootAttrs) {
		if (this.selectedIds.has(id)) {
			this.selectedIds.delete(id);
		} else {
			this.selectedIds.add(id);
		}
		attrs.onSelectionChange?.(Array.from(this.selectedIds));
	}

	view(vnode: m.Vnode<TreeViewRootAttrs>) {
		const {
			size = "md",
			variant = "plain",
			data = [],
			class: className,
			...rest
		} = vnode.attrs;

		return (
			<div
				{...rest}
				role="tree"
				class={classNames(
					styles.root,
					(styles as any)[`size${capitalize(size)}`],
					(styles as any)[`variant${capitalize(variant)}`],
					className
				)}
			>
				{data.map(node => this.renderNode(node, 0, vnode.attrs))}
			</div>
		);
	}

	private renderNode(node: TreeNode, depth: number, attrs: TreeViewRootAttrs): m.Children {
		const hasBranch = node.children && node.children.length > 0;
		const expanded = this.expandedIds.has(node.id);
		const selected = this.selectedIds.has(node.id);

		if (hasBranch) {
			return (
				<div class={styles.branch} key={node.id}>
					<div
						class={classNames(styles.branchControl, { [styles.selected]: selected })}
						style={{ paddingLeft: `${depth * 1.25}rem` }}
						onclick={() => {
							this.toggleExpand(node.id, attrs);
							this.toggleSelect(node.id, attrs);
						}}
						role="treeitem"
						aria-expanded={expanded}
					>
						<span class={classNames(styles.branchIndicator, { [styles.expanded]: expanded })}>
							▶
						</span>
						{node.icon && <span class={styles.icon}>{node.icon}</span>}
						<span class={styles.branchText}>{node.name}</span>
					</div>
					{expanded && (
						<div class={styles.branchContent} role="group">
							{node.children!.map(child => this.renderNode(child, depth + 1, attrs))}
						</div>
					)}
				</div>
			);
		}

		return (
			<div
				key={node.id}
				class={classNames(styles.item, { [styles.selected]: selected }, { [styles.disabled]: node.disabled })}
				style={{ paddingLeft: `${depth * 1.25 + 1.25}rem` }}
				onclick={() => { if (!node.disabled) this.toggleSelect(node.id, attrs); }}
				role="treeitem"
			>
				{node.icon && <span class={styles.icon}>{node.icon}</span>}
				<span class={styles.itemText}>{node.name}</span>
			</div>
		);
	}
}

/**
 * TreeView コンポーネント名前空間
 */
export const TreeView = {
	Root: TreeViewRoot,
} as const;

export { TreeViewRoot };
