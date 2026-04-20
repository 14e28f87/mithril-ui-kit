/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import * as _ from "lodash-es";
import styles from "./ExpandableEditingTable.module.scss";

import { Input } from "./Input";
import { InputNumberClassic } from "./InputNumberClassic";
import { SelectClassic as Select } from "./SelectClassic";
import { Form, FormState } from "./Form";
import { FormItem } from "./FormItem";

/** Handler 型エイリアス（EditableTable と同じ） */
export type CreateHandler<TRow> = (newRow: TRow) => void | boolean | TRow | Promise<void | boolean | TRow>;
export type UpdateHandler<TRow> = (oldRow: TRow, newRow: TRow) => void | boolean | TRow | Promise<void | boolean | TRow>;
export type DeleteHandler<TRow> = (row: TRow) => void | boolean | Promise<void | boolean>;

/**
 * render 関数の戻り値（colspan 対応）
 * - 単純な m.Children を返すか
 * - { children: m.Children; props: { colSpan?: number } } を返すか
 * colSpan: 0 の場合はセルをスキップ
 */
export type RenderResult = 
	| m.Children 
	| { children: m.Children; props: { colSpan?: number } };

/**
 * 列定義（EditableTable と同じ）
 */
export type ExpandableEditableColumn<TRow = any> = {
	title: string;
	dataIndex: keyof TRow | string;
	key?: string;
	render?: (value: any, record: TRow, index: number) => RenderResult;
	editable?: boolean;
	inputType?: "text" | "number" | "select";
	options?: { label: string; value: any }[];
	class?: string;
	validator?: (v: any, record?: TRow) => boolean | string | Promise<boolean | string>;
	visible?: (record: TRow) => boolean;
};

export type ExpandedRowRender<TRow = any> = (record: TRow, index: number, defaultContent?: m.Children) => m.Children;

export type ExpandableEditingTableExpandable<TRow = any> = {
	expandedRowRender?: ExpandedRowRender<TRow>;
	rowExpandable?: (record: TRow) => boolean;
};

/**
 * ExpandableEditingTable コンポーネント属性
 */
export type ExpandableEditingTableAttrs<TRow = any> = {
	dataSource: TRow[];
	columns: ExpandableEditableColumn<TRow>[];
	rowKey?: keyof TRow | string;
	class?: string;
	style?: Record<string, string>;
	onChange?: (newData: TRow[]) => void;
	newRowFactory?: () => TRow;
	newRowPosition?: "top" | "bottom";
	onCreate?: CreateHandler<TRow>;
	onUpdate?: UpdateHandler<TRow>;
	onDelete?: DeleteHandler<TRow>;
	preserveDraftsOnExternalChange?: boolean;
	expandable?: ExpandableEditingTableExpandable<TRow>;
	expandedRowKeys?: (string | number)[];
	onExpandedRowsChange?: (expandedRowKeys: (string | number)[]) => void;
};

/**
 * ユニークキー生成（簡易 UUID ライク）
 */
function generateKey(prefix = "k") {
	return `${prefix}_${Date.now().toString(36)}_${Math.floor(Math.random() * 0xffff).toString(36)}`;
}

/**
 * ExpandableEditingTable
 *
 * 概要:
 * - テーブル形式のリスト表示
 * - 各行の左側にある展開ボタン（+/-）をクリックするとアコーディオン展開
 * - EditableTable のバリデーション・Create/Update/Delete ロジックを再利用
 *
 * 使用例:
 * ```tsx
 * <ExpandableEditingTable<User>
 *   dataSource={users}
 *   columns={columns}
 *   rowKey="id"
 *   onCreate={async (row) => await api.create(row)}
 *   onUpdate={async (old, new) => await api.update(new)}
 *   onDelete={async (row) => await api.delete(row)}
 *   onChange={(data) => users = data}
 * />
 * ```
 */
export class ExpandableEditingTable<TRow = any> implements m.Component<ExpandableEditingTableAttrs<TRow>> {
	private drafts: Record<string, TRow> = {};
	private draftOrder: string[] = [];
	private internalExpandedKeys: Set<string | number> = new Set();
	private editingForms: Record<string, Form> = {};
	private errors: Record<string, Record<string, string>> = {};
	private localData: TRow[] = [];

	private getExpandedKeys(vnode: m.Vnode<ExpandableEditingTableAttrs<TRow>>): Set<string | number> {
		if (vnode.attrs.expandedRowKeys !== undefined) {
			return new Set(vnode.attrs.expandedRowKeys);
		}
		return this.internalExpandedKeys;
	}

	private setExpandedKeys(vnode: m.Vnode<ExpandableEditingTableAttrs<TRow>>, keys: Set<string | number>) {
		if (vnode.attrs.onExpandedRowsChange) {
			vnode.attrs.onExpandedRowsChange(Array.from(keys));
		} else {
			this.internalExpandedKeys = keys;
		}
	}

	/**
	 * 初期化時にデータソースをコピーし、キーを生成
	 */
	oninit(vnode: m.Vnode<ExpandableEditingTableAttrs<TRow>>) {
		this.localData = (vnode.attrs.dataSource || []).map((r) => ({ ...(r as any) }));
		const keyName = this.getRowKeyName(vnode);
		this.localData = this.localData.map((r: any) => {
			if (r[keyName] == null) r[keyName] = generateKey("p");
			return r;
		});
	}

	/**
	 * 外部からのデータ変更を反映
	 */
	onbeforeupdate(vnode: m.Vnode<ExpandableEditingTableAttrs<TRow>>, old: m.VnodeDOM<any>) {
		if (!_.isEqual(vnode.attrs.dataSource, old.attrs.dataSource)) {
			const preserve = vnode.attrs.preserveDraftsOnExternalChange ?? true;
			const keyName = this.getRowKeyName(vnode);

			const incoming = (vnode.attrs.dataSource || []).map((r: any) => {
				const copy = { ...(r || {}) };
				if (copy[keyName] == null) copy[keyName] = generateKey("p");
				return copy;
			});

			if (preserve) {
				this.localData = incoming;
				Object.keys(this.drafts).forEach((k) => {
					if (!this.draftOrder.includes(k)) this.draftOrder.push(k);
					if (!this.errors[k]) this.errors[k] = {};
				});
			} else {
				this.localData = incoming;
				this.drafts = {};
				this.draftOrder = [];
				this.internalExpandedKeys.clear();
				this.editingForms = {};
				this.errors = {};
			}
		}
	}

	private getRowKeyName(vnode: m.Vnode<ExpandableEditingTableAttrs<TRow>>) {
		return (vnode.attrs.rowKey as string) ?? "key";
	}

	private getRowKeyFromRow(vnode: m.Vnode<ExpandableEditingTableAttrs<TRow>>, row: any, idx: number) {
		const keyName = this.getRowKeyName(vnode);
		return String(row?.[keyName] ?? `r_${idx}`);
	}

	/**
	 * 新規行を追加
	 */
	private addRow(vnode: m.Vnode<ExpandableEditingTableAttrs<TRow>>) {
		const factory = vnode.attrs.newRowFactory ?? (() => ({} as TRow));
		const newRow = factory();
		const keyName = this.getRowKeyName(vnode);
		const generated = generateKey("d");
		(newRow as any)[keyName] = generated;
		const key = String((newRow as any)[keyName]);
		this.drafts[key] = { ...(newRow as any) };
		this.draftOrder.push(key);
		const expandedKeys = this.getExpandedKeys(vnode);
		expandedKeys.clear();
		expandedKeys.add(key);
		this.setExpandedKeys(vnode, expandedKeys);
		this.editingForms[key] = new Form();
		this.errors[key] = {};
		m.redraw();
	}

	/**
	 * 展開を切り替え
	 */
	private toggleExpand(vnode: m.Vnode<ExpandableEditingTableAttrs<TRow>>, rowKey: string) {
		const expandedKeys = this.getExpandedKeys(vnode);
		if (expandedKeys.has(rowKey)) {
			expandedKeys.delete(rowKey);
			if (!this.draftOrder.includes(rowKey)) {
				delete this.drafts[rowKey];
				delete this.editingForms[rowKey];
				if (this.errors[rowKey]) delete this.errors[rowKey];
			}
			this.setExpandedKeys(vnode, expandedKeys);
			m.redraw();
			return;
		}

		expandedKeys.clear();
		expandedKeys.add(rowKey);
		// 初めて展開する場合はフォーム参照を確保
		if (!this.editingForms[rowKey]) {
			this.editingForms[rowKey] = new Form();
		}
		this.setExpandedKeys(vnode, expandedKeys);
		m.redraw();
	}

	/**
	 * バリデータを実行
	 */
	private async runValidator(col: ExpandableEditableColumn<TRow>, value: any, draft: TRow): Promise<string | null> {
		if (!col.validator) return null;
		try {
			const res = col.validator(value, draft);
			if (res && typeof (res as Promise<any>).then === "function") {
				const awaited = await (res as Promise<boolean | string>);
				if (awaited === true) return null;
				if (awaited === false) return "入力が不正です";
				if (typeof awaited === "string") return awaited;
				return null;
			} else {
				if (res === true) return null;
				if (res === false) return "入力が不正です";
				if (typeof res === "string") return res;
				return null;
			}
		} catch {
			return "検証中にエラーが発生しました";
		}
	}

	/**
	 * 行全体をバリデート
	 */
	private async validateRow(vnode: m.Vnode<ExpandableEditingTableAttrs<TRow>>, rowKey: string, draft: TRow) {
		const cols = vnode.attrs.columns;
		const errs: Record<string, string> = {};
		for (const col of cols) {
			if (!col.editable) continue;
			if (col.visible && !col.visible(draft)) continue;
			const val = (draft as any)[col.dataIndex as string];
			const msg = await this.runValidator(col as ExpandableEditableColumn<TRow>, val, draft);
			if (msg) errs[col.dataIndex as string] = msg;
		}
		this.errors[rowKey] = errs;
		m.redraw();
		return Object.keys(errs).length === 0;
	}

	/**
	 * 編集内容を保存（Create or Update）
	 */
	private async saveEdit(vnode: m.Vnode<ExpandableEditingTableAttrs<TRow>>, rowKey: string) {
		const draft = this.drafts[rowKey];
		if (!draft) return;
		const ok = await this.validateRow(vnode, rowKey, draft);
		if (!ok) return;

		const keyName = this.getRowKeyName(vnode);
		const isExisting = this.localData.some((r) => String((r as any)?.[keyName]) === String(rowKey));

		if (isExisting) {
			const idx = this.localData.findIndex((r) => String((r as any)?.[keyName]) === String(rowKey));
			const oldRow = { ...(this.localData[idx] as any) } as TRow;
			if (vnode.attrs.onUpdate) {
				try {
					const res = await vnode.attrs.onUpdate(oldRow, { ...(draft as any) } as TRow);
					if (res === false) return;
					if (res && typeof res === "object") {
						this.localData[idx] = { ...(res as any) } as TRow;
					} else {
						this.localData[idx] = { ...(draft as any) } as TRow;
					}
				} catch {
					return;
				}
			} else {
				this.localData[idx] = { ...(draft as any) } as TRow;
			}
		} else {
			if (vnode.attrs.onCreate) {
				try {
					const res = await vnode.attrs.onCreate({ ...(draft as any) } as TRow);
					if (res === false) return;
					const pos = vnode.attrs.newRowPosition ?? "top";
					if (res && typeof res === "object") {
						if (pos === "top") this.localData = [{ ...(res as any) } as TRow, ...this.localData];
						else this.localData = [...this.localData, { ...(res as any) } as TRow];
					} else {
						if (pos === "top") this.localData = [{ ...(draft as any) } as TRow, ...this.localData];
						else this.localData = [...this.localData, { ...(draft as any) } as TRow];
					}
				} catch {
					return;
				}
			} else {
				const pos = vnode.attrs.newRowPosition ?? "top";
				if (pos === "top") this.localData = [{ ...(draft as any) } as TRow, ...this.localData];
				else this.localData = [...this.localData, { ...(draft as any) } as TRow];
			}
		}

		vnode.attrs.onChange?.(this.localData.map((r) => ({ ...(r as any) } as TRow)));

		delete this.drafts[rowKey];
		this.draftOrder = this.draftOrder.filter((k) => k !== rowKey);
		const expandedKeys = this.getExpandedKeys(vnode);
		expandedKeys.delete(rowKey);
		this.setExpandedKeys(vnode, expandedKeys);
		delete this.editingForms[rowKey];
		if (this.errors[rowKey]) delete this.errors[rowKey];
		m.redraw();
	}

	/**
	 * 削除（アニメーション + API呼び出し）
	 */
	private async deleteRow(vnode: m.Vnode<ExpandableEditingTableAttrs<TRow>>, rowKey: string) {
		const keyName = this.getRowKeyName(vnode);

		const hasDraft = !!this.drafts[rowKey];
		const persistedIdx = this.localData.findIndex((r) => String((r as any)?.[keyName]) === String(rowKey));
		const isPersisted = persistedIdx >= 0;

		const target = hasDraft
			? { ...(this.drafts[rowKey] as any) }
			: isPersisted
			? { ...(this.localData[persistedIdx] as any) }
			: null;

		if (vnode.attrs.onDelete && target) {
			try {
				const res = await vnode.attrs.onDelete(target as any);
				if (res === false) return;
			} catch {
				return;
			}
		}

		if (hasDraft) {
			delete this.drafts[rowKey];
			this.draftOrder = this.draftOrder.filter((k) => k !== rowKey);
			const expandedKeys = this.getExpandedKeys(vnode);
			expandedKeys.delete(rowKey);
			this.setExpandedKeys(vnode, expandedKeys);
			delete this.editingForms[rowKey];
			if (this.errors[rowKey]) delete this.errors[rowKey];
		} else if (isPersisted) {
			this.localData = this.localData.filter((r) => String((r as any)?.[keyName]) !== String(rowKey));
		}

		vnode.attrs.onChange?.(this.localData.map((r) => ({ ...(r as any) } as TRow)));
		m.redraw();
	}

	/**
	 * フォーム内の入力フィールドを生成
	 */
	private renderFormField(
		vnode: m.Vnode<ExpandableEditingTableAttrs<TRow>>,
		col: ExpandableEditableColumn<TRow>,
		rowKey: string,
		draft: TRow,
		formRef: Form
	) {
		if (!col.editable) return null;

		const errorMsg = this.errors[rowKey]?.[col.dataIndex as string];

		const handleValueChange = (v: any) => {
			(draft as any)[col.dataIndex as string] = v;
			formRef.setFieldValue(col.dataIndex as string, v);
		};

		if (col.inputType === "number") {
			return (
				<FormItem
					name={col.dataIndex as string}
					label={col.title}
					formRef={formRef}
					initialValue={(draft as any)[col.dataIndex as string]}
				>
					<InputNumberClassic
						value={(draft as any)[col.dataIndex as string]}
						oninput={handleValueChange}
						class={classNames({ "is-invalid": !!errorMsg })}
					/>
				</FormItem>
			);
		} else if (col.inputType === "select") {
			return (
				<FormItem
					name={col.dataIndex as string}
					label={col.title}
					formRef={formRef}
					initialValue={(draft as any)[col.dataIndex as string]}
				>
					<Select
						value={(draft as any)[col.dataIndex as string]}
						oninput={(v: any) => handleValueChange(v)}
						options={(col.options || []).map((o) => ({ label: o.label, value: o.value }))}
						showSearch={false}
						allowClear
						class={classNames({ "is-invalid": !!errorMsg })}
					/>
				</FormItem>
			);
		} else {
			return (
				<FormItem
					name={col.dataIndex as string}
					label={col.title}
					formRef={formRef}
					initialValue={(draft as any)[col.dataIndex as string]}
				>
					<Input
						value={(draft as any)[col.dataIndex as string]}
						oninput={handleValueChange}
						class={classNames({ "is-invalid": !!errorMsg })}
					/>
				</FormItem>
			);
		}
	}

	/**
	 * 拡張可能な行を生成（リスト + アコーディオン）
	 */
	private getRowsToRender(vnode: m.Vnode<ExpandableEditingTableAttrs<TRow>>) {
		const keyName = this.getRowKeyName(vnode);

		const persistedRows = this.localData.map((r) => ({ ...(r as any) }));

		const newDraftKeys = this.draftOrder.filter((k) => {
			return !persistedRows.some((r) => String((r as any)?.[keyName]) === k);
		});
		const newDraftRows = newDraftKeys.map((k) => this.drafts[k]).filter(Boolean);

		const pos = vnode.attrs.newRowPosition ?? "top";
		const rowsToRender = pos === "top" ? [...newDraftRows, ...persistedRows] : [...persistedRows, ...newDraftRows];

		return rowsToRender.map((record, idx) => {
			const rowKey = String((record as any)?.[keyName] ?? `r_${idx}`);
			return { record, rowKey, index: idx };
		});
	}

	private ensureDraftForRow(
		vnode: m.Vnode<ExpandableEditingTableAttrs<TRow>>,
		record: TRow,
		rowKey: string
	) {
		if (!this.drafts[rowKey]) {
			this.drafts[rowKey] = { ...(record as any) } as TRow;
		}
		if (!this.editingForms[rowKey]) {
			this.editingForms[rowKey] = new Form();
		}
		if (!this.errors[rowKey]) {
			this.errors[rowKey] = {};
		}
		return this.drafts[rowKey];
	}

	private renderExpandedContent(
		vnode: m.Vnode<ExpandableEditingTableAttrs<TRow>>,
		draft: TRow,
		rowKey: string,
		idx: number
	) {
		const cols = vnode.attrs.columns;
		const formRef = this.editingForms[rowKey] || new Form();

		const visibleCols = cols.filter((col) => {
			if (col.visible) {
				return col.visible(draft as TRow);
			}
			return true;
		});

		return (
			<div class={styles.expandedContent}>
				<form onsubmit={(e: Event) => {
					e.preventDefault();
					this.saveEdit(vnode, rowKey);
				}}>
					<div class="mb-3">
						{visibleCols.map((col) => {
							if (!col.editable) {
								const value = (draft as any)[col.dataIndex as string];
								const displayValue = col.render ? col.render(value, draft as TRow, idx) : value;
								return (
									<div key={col.key ?? (col.dataIndex as string)} class="mb-2">
										<label class="form-label"><strong>{col.title}:</strong></label>
										<div class="form-control-plaintext">{displayValue}</div>
									</div>
								);
							}
							return this.renderFormField(vnode, col, rowKey, draft as TRow, formRef);
						})}
					</div>

					<div class={styles.formActions}>
						<button type="submit" class="btn btn-sm btn-success">
							<i class="bi bi-check-circle"></i> 保存
						</button>
						<button
							type="button"
							class="btn btn-sm btn-secondary"
							onclick={() => this.toggleExpand(vnode, rowKey)}
						>
							<i class="bi bi-x"></i> キャンセル
						</button>
						<button
							type="button"
							class="btn btn-sm btn-outline-danger"
							onclick={() => this.deleteRow(vnode, rowKey)}
						>
							<i class="bi bi-trash"></i> 削除
						</button>
					</div>
				</form>
			</div>
		);
	}

	/**
	 * render 関数の結果を解析し、children と colSpan を抽出
	 */
	private parseRenderResult(result: RenderResult): { children: m.Children; colSpan?: number } {
		if (
			result && 
			typeof result === "object" && 
			!Array.isArray(result) &&
			"children" in result &&
			"props" in result
		) {
			const obj = result as { children: m.Children; props: { colSpan?: number } };
			return {
				children: obj.children,
				colSpan: obj.props.colSpan,
			};
		}
		return { children: result };
	}

	/**
	 * 行の各セル info を事前計算（colSpan 対応）
	 */
	private computeCellInfos(
		vnode: m.Vnode<ExpandableEditingTableAttrs<TRow>>,
		record: TRow,
		index: number
	): Array<{ 
		col: ExpandableEditableColumn<TRow>;
		value: any;
		displayValue: m.Children;
		colSpan?: number;
		shouldSkip: boolean;
	}> {
		const cols = vnode.attrs.columns;
		const cellInfos = [];

		for (const col of cols) {
			const value = (record as any)[col.dataIndex as string];
			const isVisible = col.visible ? col.visible(record as TRow) : true;
			
			let displayValue: m.Children = "";
			let colSpan: number | undefined = undefined;
			let shouldSkip = false;

			if (!isVisible) {
				// visible: false の場合、このセルはスキップ
				shouldSkip = true;
			} else if (col.render) {
				const renderResult = col.render(value, record as TRow, index);
				const parsed = this.parseRenderResult(renderResult);
				displayValue = parsed.children;
				colSpan = parsed.colSpan;
				if (colSpan === 0) {
					shouldSkip = true;
				}
			} else {
				displayValue = value;
			}

			cellInfos.push({
				col,
				value,
				displayValue,
				colSpan,
				shouldSkip,
			});
		}

		return cellInfos;
	}

	/**
	 * view: テンプレートの描画
	 */
	view(vnode: m.Vnode<ExpandableEditingTableAttrs<TRow>>) {
		const rows = this.getRowsToRender(vnode);
		const cols = vnode.attrs.columns;

		return (
			<div class={classNames(styles.expandableEditingTable, vnode.attrs.class)} style={vnode.attrs.style}>
				<div class={styles.toolbar}>
					<div>
						<button type="button" class="btn btn-sm btn-primary" onclick={() => this.addRow(vnode)}>
							<i class="bi bi-plus-circle"></i> 追加
						</button>
					</div>
					<div class={styles.countText}>件数: {rows.length}</div>
				</div>

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
									<th>操作</th>
								</tr>
							</thead>
							<tbody>
								{rows.map(({ record, rowKey, index }) => {
									const expandedKeys = this.getExpandedKeys(vnode);
									const isExpanded = expandedKeys.has(rowKey);
									const canExpand = vnode.attrs.expandable?.rowExpandable
										? vnode.attrs.expandable.rowExpandable(record as TRow)
										: true;
									let expandedContent: m.Children | null = null;
									if (isExpanded && canExpand) {
										const draft = this.ensureDraftForRow(vnode, record as TRow, rowKey);
										const defaultExpandedContent = this.renderExpandedContent(vnode, draft as TRow, rowKey, index);
										expandedContent = vnode.attrs.expandable?.expandedRowRender
											? vnode.attrs.expandable.expandedRowRender(record as TRow, index, defaultExpandedContent)
											: defaultExpandedContent;
									}

									// セル情報を事前計算
									const cellInfos = this.computeCellInfos(vnode, record as TRow, index);

									const renderedCells = cellInfos
										.map((cellInfo) => {
											if (cellInfo.shouldSkip) {
												return null;
											}
											const tdAttrs: any = {
												key: cellInfo.col.key ?? (cellInfo.col.dataIndex as string),
												class: cellInfo.col.class,
											};
											if (cellInfo.colSpan !== undefined && cellInfo.colSpan !== 1) {
												tdAttrs.colSpan = cellInfo.colSpan;
											}
											return <td {...tdAttrs}>{cellInfo.displayValue}</td>;
										})
											.filter((x) => x !== null);

									const tableRows = [
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
											{renderedCells}
											<td class={styles.textEnd}>
												<span class={styles.badgeSecondary}>{isExpanded ? "編集中" : ""}</span>
											</td>
										</tr>,
										...(isExpanded && canExpand
											? [
													<tr id={`exp-row-${rowKey}`}>
														<td colSpan={cols.length + 2}>{expandedContent}</td>
													</tr>,
												]
											: []),
									];

									return m.fragment({ key: `rowfrag_${rowKey}` }, tableRows);
								})}
							</tbody>
						</table>
					</div>
				)}
			</div>
		);
	}
}
