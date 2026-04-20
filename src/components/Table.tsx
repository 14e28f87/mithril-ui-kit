/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Table.module.scss";

/**
 * Table バリアント
 */
export type TableVariant = "line" | "outline";

/**
 * Table サイズ
 */
export type TableSize = "sm" | "md" | "lg";

/* ─── Role Types ─── */
type TableRole = "header" | "body" | "footer" | "row" | "columnHeader" | "cell" | "caption"
	| "scrollArea" | "columnGroup" | "column";

/* ─── Attrs ─── */
export interface TableRootAttrs {
	/** バリアント */
	variant?: TableVariant;
	/** サイズ */
	size?: TableSize;
	/** ストライプ */
	striped?: boolean;
	/** ホバーハイライト */
	hoverable?: boolean;
	/** スティッキーヘッダー */
	stickyHeader?: boolean;
	/** 追加クラス */
	class?: string;
	[key: string]: any;
}

function capitalize(s: string): string {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

/* ─── マーカークラス ─── */
class THeaderMarker { static __tRole: TableRole = "header"; view() { return null; } }
class TBodyMarker { static __tRole: TableRole = "body"; view() { return null; } }
class TFooterMarker { static __tRole: TableRole = "footer"; view() { return null; } }
class TRowMarker { static __tRole: TableRole = "row"; view() { return null; } }
class TColumnHeaderMarker { static __tRole: TableRole = "columnHeader"; view() { return null; } }
class TCellMarker { static __tRole: TableRole = "cell"; view() { return null; } }
class TCaptionMarker { static __tRole: TableRole = "caption"; view() { return null; } }
class TScrollAreaMarker { static __tRole: TableRole = "scrollArea"; view() { return null; } }
class TColumnGroupMarker { static __tRole: TableRole = "columnGroup"; view() { return null; } }
class TColumnMarker { static __tRole: TableRole = "column"; view() { return null; } }

/**
 * Table Root コンポーネント — データテーブル表示
 *
 * @example
 * ```tsx
 * <Table.Root variant="line" striped>
 *   <Table.Header>
 *     <Table.Row>
 *       <Table.ColumnHeader>名前</Table.ColumnHeader>
 *       <Table.ColumnHeader>値</Table.ColumnHeader>
 *     </Table.Row>
 *   </Table.Header>
 *   <Table.Body>
 *     <Table.Row>
 *       <Table.Cell>項目A</Table.Cell>
 *       <Table.Cell>100</Table.Cell>
 *     </Table.Row>
 *   </Table.Body>
 * </Table.Root>
 * ```
 */
class TableRoot implements m.ClassComponent<TableRootAttrs> {
	view(vnode: m.Vnode<TableRootAttrs>) {
		const {
			variant = "line",
			size = "md",
			striped,
			hoverable,
			stickyHeader,
			class: className,
			...rest
		} = vnode.attrs;

		return (
			<table
				{...rest}
				class={classNames(
					styles.root,
					(styles as any)[`variant${capitalize(variant)}`],
					(styles as any)[`size${capitalize(size)}`],
					{ [styles.striped]: striped },
					{ [styles.hoverable]: hoverable },
					{ [styles.stickyHeader]: stickyHeader },
					className
				)}
			>
				{this.renderChildren(vnode.children)}
			</table>
		);
	}

	private renderChildren(children: m.Children): m.Children[] {
		const arr = (Array.isArray(children) ? (children as any[]) : [children]).flat(Infinity);
		const rendered: m.Children[] = [];

		for (const child of arr) {
			if (child && typeof child === "object" && "tag" in child) {
				const tag = (child as m.Vnode<any>).tag as any;
				const cv = child as m.Vnode<any>;
				if (tag?.__tRole === "header") {
					rendered.push(<thead class={classNames(styles.header, cv.attrs?.class)}>{this.renderChildren(cv.children)}</thead>);
					continue;
				}
				if (tag?.__tRole === "body") {
					rendered.push(<tbody class={classNames(styles.body, cv.attrs?.class)}>{this.renderChildren(cv.children)}</tbody>);
					continue;
				}
				if (tag?.__tRole === "footer") {
					rendered.push(<tfoot class={classNames(styles.footer, cv.attrs?.class)}>{this.renderChildren(cv.children)}</tfoot>);
					continue;
				}
				if (tag?.__tRole === "row") {
					rendered.push(<tr class={classNames(styles.row, cv.attrs?.class)}>{this.renderChildren(cv.children)}</tr>);
					continue;
				}
				if (tag?.__tRole === "columnHeader") {
					rendered.push(<th class={classNames(styles.columnHeader, cv.attrs?.class)}>{cv.children}</th>);
					continue;
				}
				if (tag?.__tRole === "cell") {
					rendered.push(<td class={classNames(styles.cell, cv.attrs?.class)}>{cv.children}</td>);
					continue;
				}
				if (tag?.__tRole === "caption") {
					rendered.push(<caption class={classNames(styles.caption, cv.attrs?.class)}>{cv.children}</caption>);
					continue;
				}
			}
			rendered.push(child as m.Children);
		}
		return rendered;
	}
}

/**
 * Table コンポーネント名前空間
 */
export const Table = {
	Root: TableRoot,
	Header: THeaderMarker,
	Body: TBodyMarker,
	Footer: TFooterMarker,
	Row: TRowMarker,
	ColumnHeader: TColumnHeaderMarker,
	Cell: TCellMarker,
	Caption: TCaptionMarker,
	ScrollArea: TScrollAreaMarker,
	ColumnGroup: TColumnGroupMarker,
	Column: TColumnMarker,
} as const;

export { TableRoot };
