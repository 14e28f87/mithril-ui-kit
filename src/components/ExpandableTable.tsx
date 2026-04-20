/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./ExpandableTable.module.scss";

/**
 * 列定義
 */
export type ExpandableColumn<TRow = any> = {
	title: string;
	dataIndex: keyof TRow | string;
	key?: string;
	render?: (value: any, record: TRow, index: number) => m.Children;
	class?: string;
	visible?: (record: TRow) => boolean;
};

export type ExpandedRowRender<TRow = any> = (record: TRow, index: number) => m.Children;

export type ExpandableTableExpandable<TRow = any> = {
	expandedRowRender: ExpandedRowRender<TRow>;
	rowExpandable?: (record: TRow) => boolean;
};

/**
 * ExpandableTable コンポーネント属性
 */
export type ExpandableTableAttrs<TRow = any> = {
	dataSource: TRow[];
	columns: ExpandableColumn<TRow>[];
	rowKey?: keyof TRow | string;
	class?: string;
	style?: Record<string, string>;
	expandable: ExpandableTableExpandable<TRow>;
	expandedRowKeys?: (string | number)[];
	onExpandedRowsChange?: (expandedRowKeys: (string | number)[]) => void;
};

/**
 * ExpandableTable
 *
 * 概要:
 * - テーブル形式のリスト表示
 * - 各行の左側にある展開ボタンをクリックするとアコーディオン展開
 * - 展開時に指定されたコンテンツを表示
 *
 * 使用例:
 * ```tsx
 * <ExpandableTable<User>
 *   dataSource={users}
 *   columns={columns}
 *   rowKey="id"
 *   expandable={{
 *     expandedRowRender: (record, index) => <div>詳細: {record.name}</div>
 *   }}
 * />
 * ```
 */
export class ExpandableTable<TRow = any> implements m.Component<ExpandableTableAttrs<TRow>> {
	private internalExpandedKeys: Set<string | number> = new Set();

	private getExpandedKeys(vnode: m.Vnode<ExpandableTableAttrs<TRow>>): Set<string | number> {
		if (vnode.attrs.expandedRowKeys !== undefined) {
			return new Set(vnode.attrs.expandedRowKeys);
		}
		return this.internalExpandedKeys;
	}

	private setExpandedKeys(vnode: m.Vnode<ExpandableTableAttrs<TRow>>, keys: Set<string | number>) {
		if (vnode.attrs.onExpandedRowsChange) {
			vnode.attrs.onExpandedRowsChange(Array.from(keys));
		} else {
			this.internalExpandedKeys = keys;
		}
	}

	private getRowKeyName(vnode: m.Vnode<ExpandableTableAttrs<TRow>>) {
		return (vnode.attrs.rowKey as string) ?? "key";
	}

	private getRowKeyFromRow(vnode: m.Vnode<ExpandableTableAttrs<TRow>>, row: any, idx: number) {
		const keyName = this.getRowKeyName(vnode);
		return String(row?.[keyName] ?? `r_${idx}`);
	}

	/**
	 * 展開を切り替え
	 */
	private toggleExpand(vnode: m.Vnode<ExpandableTableAttrs<TRow>>, rowKey: string) {
		const expandedKeys = this.getExpandedKeys(vnode);
		if (expandedKeys.has(rowKey)) {
			expandedKeys.delete(rowKey);
		} else {
			expandedKeys.add(rowKey);
		}
		this.setExpandedKeys(vnode, expandedKeys);
		m.redraw();
	}

	/**
	 * view: テンプレートの描画
	 */
	view(vnode: m.Vnode<ExpandableTableAttrs<TRow>>) {
		const rows = vnode.attrs.dataSource;
		const cols = vnode.attrs.columns;

		return (
			<div class={classNames(styles.expandableTable, vnode.attrs.class)} style={vnode.attrs.style}>
				{rows.length === 0 ? (
					<div class={styles.emptyAlert} role="alert">
						データがありません
					</div>
				) : (
					<div class={styles.tableResponsive}>
						<table class={styles.table}>
							<thead>
								<tr>
									<th style="width: 50px;"></th>
									{cols.map((col) => (
										<th key={col.key ?? (col.dataIndex as string)}>{col.title}</th>
									))}
								</tr>
							</thead>
							<tbody>
								{rows.map((record, index) => {
									const rowKey = this.getRowKeyFromRow(vnode, record, index);
									const expandedKeys = this.getExpandedKeys(vnode);
									const isExpanded = expandedKeys.has(rowKey);
									const canExpand = vnode.attrs.expandable.rowExpandable
										? vnode.attrs.expandable.rowExpandable(record)
										: true;
									const expandedContent = isExpanded && canExpand
										? vnode.attrs.expandable.expandedRowRender(record, index)
										: null;

									return m.fragment(
										{ key: `rowfrag_${rowKey}` },
										[
											<tr>
												<td style="width: 50px; text-align: center;">
													{canExpand && (
														<button
															type="button"
															class={styles.expandBtn}
															onclick={(e: Event) => {
																e.stopPropagation();
																this.toggleExpand(vnode, rowKey);
															}}
															style="text-decoration: none;"
														>
															<i class={classNames("bi", isExpanded ? "bi-dash-square" : "bi-plus-square")}></i>
														</button>
													)}
												</td>
												{cols.map((col) => {
													const value = (record as any)[col.dataIndex as string];
													const displayValue = col.render ? col.render(value, record, index) : value;
													const isVisible = col.visible ? col.visible(record) : true;
													return (
														<td key={col.key ?? (col.dataIndex as string)} class={col.class}>
															{isVisible ? displayValue : ""}
														</td>
													);
												})}
											</tr>,
											isExpanded && canExpand ? (
												<tr>
													<td colSpan={cols.length + 1}>{expandedContent}</td>
												</tr>
											) : null,
										]
									);
								})}
							</tbody>
						</table>
					</div>
				)}
			</div>
		);
	}
}