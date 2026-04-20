/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./ProList.module.scss";

type Key = string | number;

export type ProListMetaValueRender<TRow = any> = (text: any, record: TRow, index: number) => m.Children;

export type ProListMetaField<TRow = any> = {
	dataIndex?: keyof TRow | string;
	title?: m.Children;
	render?: ProListMetaValueRender<TRow>;
};

export type ProListMetas<TRow = any> = {
	avatar?: ProListMetaField<TRow>;
	title?: ProListMetaField<TRow>;
	subTitle?: ProListMetaField<TRow>;
	description?: ProListMetaField<TRow>;
	content?: ProListMetaField<TRow>;
	extra?: ProListMetaField<TRow>;
	actions?: ProListMetaField<TRow>;
};

export type ProListRowSelection<TRow = any> = {
	selectedRowKeys?: Key[];
	defaultSelectedRowKeys?: Key[];
	onChange?: (selectedRowKeys: Key[], selectedRows: TRow[]) => void;
	getCheckboxProps?: (record: TRow) => { disabled?: boolean };
};

export type ProListExpandable<TRow = any> = {
	expandedRowRender: (record: TRow, index: number) => m.Children;
	rowExpandable?: (record: TRow) => boolean;
	expandedRowKeys?: Key[];
	defaultExpandedRowKeys?: Key[];
	onExpandedRowsChange?: (expandedRowKeys: Key[]) => void;
	expandIconPosition?: "left" | "right";
};

export type ProListPagination = {
	current?: number;
	defaultCurrent?: number;
	pageSize?: number;
	defaultPageSize?: number;
	total?: number;
	showSizeChanger?: boolean;
	pageSizeOptions?: number[];
	onChange?: (page: number, pageSize: number) => void;
};

export type ProListAttrs<TRow = any> = {
	dataSource: TRow[];
	rowKey?: keyof TRow | string | ((record: TRow, index: number) => Key);
	metas?: ProListMetas<TRow>;
	renderItem?: (record: TRow, index: number, metaDom: m.Children) => m.Children;
	rowSelection?: ProListRowSelection<TRow>;
	expandable?: ProListExpandable<TRow>;
	pagination?: false | ProListPagination;
	headerTitle?: m.Children;
	toolBarRender?: () => m.Children;
	loading?: boolean;
	locale?: { emptyText?: m.Children };
	size?: "small" | "default" | "large";
	bordered?: boolean;
	ghost?: boolean;
	split?: boolean;
	onRow?: (record: TRow, index: number) => {
		onclick?: (e: Event) => void;
	};
	class?: string;
	style?: Record<string, string>;
};

export class ProList<TRow = any> implements m.Component<ProListAttrs<TRow>> {
	private internalSelectedKeys = new Set<Key>();
	private internalExpandedKeys = new Set<Key>();
	private internalCurrent = 1;
	private internalPageSize = 10;

	oninit(vnode: m.Vnode<ProListAttrs<TRow>>) {
		const rs = vnode.attrs.rowSelection;
		if (rs?.defaultSelectedRowKeys) {
			this.internalSelectedKeys = new Set(rs.defaultSelectedRowKeys);
		}

		const ex = vnode.attrs.expandable;
		if (ex?.defaultExpandedRowKeys) {
			this.internalExpandedKeys = new Set(ex.defaultExpandedRowKeys);
		}

		const pg = vnode.attrs.pagination;
		if (pg && typeof pg === "object") {
			this.internalCurrent = pg.defaultCurrent ?? 1;
			this.internalPageSize = pg.defaultPageSize ?? 10;
		}
	}

	private resolveRowKey(vnode: m.Vnode<ProListAttrs<TRow>>, record: TRow, index: number): Key {
		const rowKey = vnode.attrs.rowKey;
		if (typeof rowKey === "function") {
			return rowKey(record, index);
		}
		const keyName = (rowKey as string) ?? "key";
		const value = (record as any)?.[keyName];
		return value ?? `row_${index}`;
	}

	private getSelectionKeys(attrs: ProListAttrs<TRow>): Set<Key> {
		if (attrs.rowSelection?.selectedRowKeys) {
			return new Set(attrs.rowSelection.selectedRowKeys);
		}
		return this.internalSelectedKeys;
	}

	private updateSelection(vnode: m.Vnode<ProListAttrs<TRow>>, keys: Set<Key>) {
		const rs = vnode.attrs.rowSelection;
		const nextKeys = Array.from(keys);
		const selectedRows = vnode.attrs.dataSource.filter((record, index) => {
			const rowKey = this.resolveRowKey(vnode, record, index);
			return keys.has(rowKey);
		});
		rs?.onChange?.(nextKeys, selectedRows);
		if (!rs?.selectedRowKeys) {
			this.internalSelectedKeys = keys;
		}
		m.redraw();
	}

	private getExpandedKeys(attrs: ProListAttrs<TRow>): Set<Key> {
		if (attrs.expandable?.expandedRowKeys) {
			return new Set(attrs.expandable.expandedRowKeys);
		}
		return this.internalExpandedKeys;
	}

	private updateExpanded(vnode: m.Vnode<ProListAttrs<TRow>>, keys: Set<Key>) {
		const ex = vnode.attrs.expandable;
		ex?.onExpandedRowsChange?.(Array.from(keys));
		if (!ex?.expandedRowKeys) {
			this.internalExpandedKeys = keys;
		}
		m.redraw();
	}

	private getPagination(attrs: ProListAttrs<TRow>): ProListPagination | null {
		if (attrs.pagination === false) return null;
		return attrs.pagination ?? { defaultCurrent: 1, defaultPageSize: 10 };
	}

	private getCurrentPage(pg: ProListPagination): number {
		return pg.current ?? this.internalCurrent;
	}

	private getPageSize(pg: ProListPagination): number {
		return pg.pageSize ?? this.internalPageSize;
	}

	private updatePagination(vnode: m.Vnode<ProListAttrs<TRow>>, page: number, pageSize: number) {
		const pg = this.getPagination(vnode.attrs);
		if (!pg) return;
		const safePage = Math.max(1, page);
		const safeSize = Math.max(1, pageSize);
		pg.onChange?.(safePage, safeSize);
		if (pg.current == null) this.internalCurrent = safePage;
		if (pg.pageSize == null) this.internalPageSize = safeSize;
		m.redraw();
	}

	private getMetaRawValue(meta: ProListMetaField<TRow> | undefined, record: TRow): any {
		if (!meta?.dataIndex) return undefined;
		return (record as any)?.[meta.dataIndex as string];
	}

	private renderMeta(meta: ProListMetaField<TRow> | undefined, record: TRow, index: number): m.Children {
		if (!meta) return null;
		const raw = this.getMetaRawValue(meta, record);
		if (meta.render) return meta.render(raw, record, index);
		if (raw != null) return raw;
		return meta.title ?? null;
	}

	private renderActions(actionsDom: m.Children): m.Children {
		if (actionsDom == null) return null;
		if (Array.isArray(actionsDom)) {
			return (
				<ul class={styles.actions}>
					{actionsDom.map((action, idx) => (
						<li key={`action_${idx}`}>{action}</li>
					))}
				</ul>
			);
		}
		return actionsDom;
	}

	private renderMetaDom(vnode: m.Vnode<ProListAttrs<TRow>>, record: TRow, index: number): m.Children {
		const metas = vnode.attrs.metas;
		if (!metas) return null;

		const avatarDom = this.renderMeta(metas.avatar, record, index);
		const titleDom = this.renderMeta(metas.title, record, index);
		const subTitleDom = this.renderMeta(metas.subTitle, record, index);
		const descriptionDom = this.renderMeta(metas.description, record, index);
		const contentDom = this.renderMeta(metas.content, record, index);
		const extraDom = this.renderMeta(metas.extra, record, index);
		const actionsDom = this.renderActions(this.renderMeta(metas.actions, record, index));

		return [
			avatarDom ? <div>{avatarDom}</div> : null,
			<div class={styles.metaMain}>
				<div class={styles.titleRow}>
					<div class={styles.titleBlock}>
						{titleDom ? <h4 class={styles.title}>{titleDom}</h4> : null}
						{subTitleDom ? <div>{subTitleDom}</div> : null}
					</div>
					{extraDom ? <div class={styles.extra}>{extraDom}</div> : null}
				</div>
				{descriptionDom ? <div class={styles.description}>{descriptionDom}</div> : null}
				{contentDom ? <div class={styles.content}>{contentDom}</div> : null}
				{actionsDom ? <div>{actionsDom}</div> : null}
			</div>,
		];
	}

	private renderExpandIcon(vnode: m.Vnode<ProListAttrs<TRow>>, record: TRow, index: number): m.Children {
		const ex = vnode.attrs.expandable;
		if (!ex) return null;
		const rowKey = this.resolveRowKey(vnode, record, index);
		const expandedKeys = this.getExpandedKeys(vnode.attrs);
		const expanded = expandedKeys.has(rowKey);
		const canExpand = ex.rowExpandable ? ex.rowExpandable(record) : true;

		return (
			<button
				type="button"
				class={classNames(styles.expandTrigger, { [styles.expandTriggerDisabled]: !canExpand })}
				disabled={!canExpand}
				onclick={(e: Event) => {
					e.stopPropagation();
					if (!canExpand) return;
					const next = this.getExpandedKeys(vnode.attrs);
					if (next.has(rowKey)) next.delete(rowKey);
					else next.add(rowKey);
					this.updateExpanded(vnode, next);
				}}
				aria-label={expanded ? "collapse" : "expand"}
			>
				<i class={classNames("bi", expanded ? "bi-dash-square" : "bi-plus-square")}></i>
			</button>
		);
	}

	private buildPageNumbers(current: number, pageCount: number): number[] {
		if (pageCount <= 7) {
			return Array.from({ length: pageCount }, (_, i) => i + 1);
		}
		const start = Math.max(1, current - 2);
		const end = Math.min(pageCount, start + 4);
		const adjustedStart = Math.max(1, end - 4);
		return Array.from({ length: end - adjustedStart + 1 }, (_, i) => adjustedStart + i);
	}

	view(vnode: m.Vnode<ProListAttrs<TRow>>) {
		const attrs = vnode.attrs;
		const data = attrs.dataSource ?? [];
		const split = attrs.split ?? true;
		const size = attrs.size ?? "default";

		const pagination = this.getPagination(attrs);
		const total = pagination?.total ?? data.length;
		const current = pagination ? this.getCurrentPage(pagination) : 1;
		const pageSize = pagination ? this.getPageSize(pagination) : data.length;
		const pageCount = pagination ? Math.max(1, Math.ceil(total / pageSize)) : 1;
		const clampedCurrent = Math.min(Math.max(current, 1), pageCount);

		const useLocalPaging = !pagination || pagination.total == null || pagination.total <= data.length;
		const pageData = pagination && useLocalPaging
			? data.slice((clampedCurrent - 1) * pageSize, clampedCurrent * pageSize)
			: data;

		const pageNumbers = pagination ? this.buildPageNumbers(clampedCurrent, pageCount) : [];
		const pageStartIndex = pagination && useLocalPaging ? (clampedCurrent - 1) * pageSize : 0;

		const selectionKeys = this.getSelectionKeys(attrs);
		const selectableRows = pageData.filter((record) => !(attrs.rowSelection?.getCheckboxProps?.(record)?.disabled));
		const selectableRowKeys = new Set(
			selectableRows.map((record, index) => this.resolveRowKey(vnode, record, pageStartIndex + index))
		);
		const checkedAll = selectableRows.length > 0 && Array.from(selectableRowKeys).every((key) => selectionKeys.has(key));

		return (
			<div
				class={classNames(styles.proList, attrs.class, {
					[styles.bordered]: attrs.bordered,
					[styles.ghost]: attrs.ghost,
				})}
				style={attrs.style}
			>
				{(attrs.headerTitle || attrs.toolBarRender) && (
					<div class={styles.toolbar}>
						<div class={styles.headerTitle}>{attrs.headerTitle}</div>
						<div>{attrs.toolBarRender?.()}</div>
					</div>
				)}

				{attrs.loading ? (
					<div class="d-flex justify-content-center py-4">
						<div class="spinner-border" role="status" aria-label="loading"></div>
					</div>
				) : pageData.length === 0 ? (
					<div class={styles.empty}>{attrs.locale?.emptyText ?? "データがありません"}</div>
				) : (
					<ul class={styles.items}>
						{pageData.map((record, index) => {
							const globalIndex = pageStartIndex + index;
							const rowKey = this.resolveRowKey(vnode, record, globalIndex);
							const rowProps = attrs.onRow?.(record, globalIndex);
							const disabled = attrs.rowSelection?.getCheckboxProps?.(record)?.disabled ?? false;
							const checked = selectionKeys.has(rowKey);
							const metaDom = this.renderMetaDom(vnode, record, globalIndex);
							const customItem = attrs.renderItem?.(record, globalIndex, metaDom);
							const ex = attrs.expandable;
							const expanded = ex ? this.getExpandedKeys(attrs).has(rowKey) : false;
							const canExpand = ex ? (ex.rowExpandable ? ex.rowExpandable(record) : true) : false;

							const expandIcon = ex ? this.renderExpandIcon(vnode, record, globalIndex) : null;
							const expandLeft = ex && (ex.expandIconPosition ?? "left") === "left";

							return (
								<li
									key={`pli_${String(rowKey)}`}
									class={classNames(styles.item, {
										[styles.itemNoSplit]: !split,
										[styles.smallItem]: size === "small",
										[styles.largeItem]: size === "large",
									})}
									onclick={rowProps?.onclick}
								>
									<div class={styles.itemInner}>
										{attrs.rowSelection && (
											<div class={styles.selector}>
												<input
													type="checkbox"
													class="form-check-input"
													disabled={disabled}
													checked={checked}
													onclick={(e: Event) => e.stopPropagation()}
													onchange={(e: Event) => {
														e.stopPropagation();
														if (disabled) return;
														const next = this.getSelectionKeys(attrs);
														const input = e.target as HTMLInputElement;
														if (input.checked) next.add(rowKey);
														else next.delete(rowKey);
														this.updateSelection(vnode, next);
													}}
												/>
											</div>
										)}

										{expandLeft ? expandIcon : null}

										<div class={styles.metaMain}>
											{customItem ?? metaDom}
											{ex && expanded && canExpand ? (
												<div class={styles.expanded}>{ex.expandedRowRender(record, globalIndex)}</div>
											) : null}
										</div>

										{!expandLeft ? expandIcon : null}
									</div>
								</li>
							);
						})}
					</ul>
				)}

				{attrs.rowSelection && pageData.length > 0 && (
					<div class={styles.pagination}>
						<div class="form-check">
							<input
								type="checkbox"
								class="form-check-input"
								checked={checkedAll}
								onchange={(e: Event) => {
									const input = e.target as HTMLInputElement;
									const next = this.getSelectionKeys(attrs);
									if (input.checked) {
										selectableRows.forEach((record, index) => {
											next.add(this.resolveRowKey(vnode, record, pageStartIndex + index));
										});
									} else {
										selectableRows.forEach((record, index) => {
											next.delete(this.resolveRowKey(vnode, record, pageStartIndex + index));
										});
									}
									this.updateSelection(vnode, next);
								}}
							/>
							<label class="form-check-label ms-2">ページ内をすべて選択</label>
						</div>
						<div class="small text-muted">{selectionKeys.size} 件選択中</div>
					</div>
				)}

				{pagination && pageData.length > 0 && (
					<div class={styles.pagination}>
						<div class="small text-muted">合計 {total} 件</div>
						<div class={styles.pager}>
							<button
								type="button"
								class="btn btn-sm btn-outline-secondary"
								disabled={clampedCurrent <= 1}
								onclick={() => this.updatePagination(vnode, clampedCurrent - 1, pageSize)}
							>
								前へ
							</button>

							{pageNumbers.map((p) => (
								<button
									key={`pg_${p}`}
									type="button"
									class={classNames("btn btn-sm", p === clampedCurrent ? "btn-primary" : "btn-outline-secondary")}
									onclick={() => this.updatePagination(vnode, p, pageSize)}
								>
									{p}
								</button>
							))}

							<button
								type="button"
								class="btn btn-sm btn-outline-secondary"
								disabled={clampedCurrent >= pageCount}
								onclick={() => this.updatePagination(vnode, clampedCurrent + 1, pageSize)}
							>
								次へ
							</button>

							{pagination.showSizeChanger && (
								<select
									class="form-select form-select-sm"
									style="width: auto;"
									value={String(pageSize)}
									onchange={(e: Event) => {
										const target = e.target as HTMLSelectElement;
										this.updatePagination(vnode, 1, Number(target.value));
									}}
								>
									{(pagination.pageSizeOptions ?? [5, 10, 20, 50]).map((sizeOption) => (
										<option value={String(sizeOption)}>{sizeOption} / page</option>
									))}
								</select>
							)}
						</div>
					</div>
				)}
			</div>
		);
	}
}
