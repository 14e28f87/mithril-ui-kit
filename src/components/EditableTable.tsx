/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import * as _ from "lodash-es";

import { Input } from "./Input";
import { InputNumberClassic } from "./InputNumberClassic";
import { SelectClassic as Select } from "./SelectClassic";
import styles from "./EditableTable.module.scss";

/** Handler 型エイリアス */
export type CreateHandler<TRow> = (newRow: TRow) => void | boolean | TRow | Promise<void | boolean | TRow>;
export type UpdateHandler<TRow> = (oldRow: TRow, newRow: TRow) => void | boolean | TRow | Promise<void | boolean | TRow>;
export type DeleteHandler<TRow> = (row: TRow) => void | boolean | Promise<void | boolean>;

/**
 * 列定義（ジェネリック）
 *
 * @property {string} title - 列の表示タイトル
 * @property {keyof TRow | string} dataIndex - データソースのキー
 * @property {string} [key] - 列の一意キー（省略時は dataIndex が使用される）
 * @property {function} [render] - カスタムレンダリング関数
 * @property {boolean} [editable] - 編集可能かどうか
 * @property {"text" | "number" | "select"} [inputType] - 入力タイプ
 * @property {Array<{label: string, value: any}>} [options] - selectタイプの選択肢
 * @property {string} [class] - 列のCSSクラス
 * @property {function} [validator] - バリデーション関数
 * @property {function} [visible] - 行表示の判定関数（レコードを受けて true/false を返す）
 */
export type EditableColumn<TRow = any> = {
	title: string;
	dataIndex: keyof TRow | string;
	key?: string;
	render?: (value: any, record: TRow, index: number) => m.Children;
	editable?: boolean;
	inputType?: "text" | "number" | "select";
	options?: { label: string; value: any }[];
	class?: string;
	validator?: (v: any, record?: TRow) => boolean | string | Promise<boolean | string>;
	visible?: (record: TRow) => boolean;
};

/**
 * EditableTable コンポーネント属性（ジェネリック）
 *
 * @property {TRow[]} dataSource - テーブルに表示するデータ配列
 * @property {EditableColumn<TRow>[]} columns - 列定義の配列
 * @property {keyof TRow | string} [rowKey] - 行の一意キー（デフォルト: "key"）
 * @property {string} [class] - テーブルのCSSクラス
 * @property {Record<string, string>} [style] - テーブルのスタイル
 * @property {function} [onChange] - データ変更時のコールバック
 * @property {function} [newRowFactory] - 新規行作成用のファクトリ関数
 * @property {"top" | "bottom"} [newRowPosition] - 新規行の挿入位置（デフォルト: "top"）
 * @property {CreateHandler<TRow>} [onCreate] - 新規作成時のハンドラ
 * @property {UpdateHandler<TRow>} [onUpdate] - 更新時のハンドラ
 * @property {DeleteHandler<TRow>} [onDelete] - 削除時のハンドラ
 * @property {boolean} [preserveDraftsOnExternalChange] - 外部からのデータ変更時にドラフトを保持するか（デフォルト: true）
 */
export type EditableTableAttrs<TRow = any> = {
	dataSource: TRow[];
	columns: EditableColumn<TRow>[];
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
};

/**
 * ユニークキー生成（簡易 UUID ライク）
 */
function generateKey(prefix = "k") {
	return `${prefix}_${Date.now().toString(36)}_${Math.floor(Math.random() * 0xffff).toString(36)}`;
}

/**
 * EditableTable
 *
 * 概要:
 * - インラインで編集可能なテーブルコンポーネント
 * - ドラフト段階で必ずユニーク key を生成
 * - Save/Delete/Edit は key ベースで管理
 * - 親 dataSource 更新時はドラフトを保持（オプション）
 * - 行の移動は FLIP アニメーション
 * - Delete は height 0px + opacity 0 で消える
 *
 * 使用例:
 * ```tsx
 * <EditableTable<User>
 *   dataSource={users}
 *   columns={columns}
 *   rowKey="id"
 *   onCreate={async (row) => await api.create(row)}
 *   onUpdate={async (old, new) => await api.update(new)}
 *   onDelete={async (row) => await api.delete(row)}
 *   onChange={(data) => users = data}
 * />
 * ```
 *
 * @template TRow - テーブルの行データ型
 */
export class EditableTable<TRow = any> implements m.Component<EditableTableAttrs<TRow>> {
  /** ドラフト状態（編集中の行データ） */
  private drafts: Record<string, TRow> = {};
  /** ドラフトの順序 */
  private draftOrder: string[] = [];
  /** 編集中のキーセット */
  private editingKeys: Set<string> = new Set();
  /** エラー状態 */
  private errors: Record<string, Record<string, string>> = {};
  /** ローカルデータソース */
  private localData: TRow[] = [];

  /** FLIP 用：直前の行位置 */
  private lastPositions: Record<string, DOMRect> = {};
  /** 削除アニメーション中のキー */
  private leavingKeys: Set<string> = new Set();

  /**
   * 初期化時にデータソースをコピーし、キーを生成
   * @param vnode Mithril 仮想ノード
   */
  oninit(vnode: m.Vnode<EditableTableAttrs<TRow>>) {
		this.localData = (vnode.attrs.dataSource || []).map((r) => ({ ...(r as any) }));
		const keyName = this.getRowKeyName(vnode);
		this.localData = this.localData.map((r: any) => {
			if (r[keyName] == null) r[keyName] = generateKey("p");
			return r;
		});
	}

	/**
	 * 更新前に現在の行位置を記録（FLIP: First）
	 */
	onbeforeupdate(vnode: m.Vnode<EditableTableAttrs<TRow>>, old: m.VnodeDOM<any>) {
		this.capturePositions();

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
				this.editingKeys.clear();
				this.errors = {};
			}
		}
	}

	/**
	 * 更新後に FLIP アニメーションを再生（FLIP: Last → Invert → Play）
	 */
	onupdate() {
		this.playFLIP();
	}

	private getRowKeyName(vnode: m.Vnode<EditableTableAttrs<TRow>>) {
		return (vnode.attrs.rowKey as string) ?? "key";
	}

	private getRowKeyFromRow(vnode: m.Vnode<EditableTableAttrs<TRow>>, row: any, idx: number) {
		const keyName = this.getRowKeyName(vnode);
		return String(row?.[keyName] ?? `r_${idx}`);
	}

	/**
	 * 現在の行位置を記録（テーブル全体）
	 */
	private capturePositions() {
		const rows = document.querySelectorAll("tr[data-rowkey]");
		const map: Record<string, DOMRect> = {};
		rows.forEach((row) => {
			const el = row as HTMLElement;
			const key = el.dataset.rowkey;
			if (!key) return;
			map[key] = el.getBoundingClientRect();
		});
		this.lastPositions = map;
	}

	/**
	 * FLIP アニメーションを再生
	 */
	private playFLIP() {
		const rows = document.querySelectorAll("tr[data-rowkey]");
		rows.forEach((row) => {
			const el = row as HTMLElement;
			const key = el.dataset.rowkey;
			if (!key) return;
			const oldPos = this.lastPositions[key];
			if (!oldPos) return;

			const newPos = el.getBoundingClientRect();
			const dx = oldPos.left - newPos.left;
			const dy = oldPos.top - newPos.top;

			if (dx === 0 && dy === 0) return;

			el.style.transition = "none";
			el.style.transform = `translate(${dx}px, ${dy}px)`;

			requestAnimationFrame(() => {
				el.style.transition = "transform 0.25s ease";
				el.style.transform = "";
			});
		});

		this.lastPositions = {};
	}

	/**
	 * Add: 新規ドラフトを追加（ユニーク key 割り当て）
	 */
	private addRow(vnode: m.Vnode<EditableTableAttrs<TRow>>) {
		const factory = vnode.attrs.newRowFactory ?? (() => ({} as TRow));
		const newRow = factory();
		const keyName = this.getRowKeyName(vnode);
		const generated = generateKey("d");
		(newRow as any)[keyName] = generated;
		const key = String((newRow as any)[keyName]);
		this.drafts[key] = { ...(newRow as any) };
		const pos = vnode.attrs.newRowPosition ?? "top";
		if (pos === "top") this.draftOrder = [key, ...this.draftOrder];
		else this.draftOrder = [...this.draftOrder, key];
		this.editingKeys.add(key);
		this.errors[key] = {};
		m.redraw();
	}

	/**
	 * 既存行の編集開始
	 */
	private startEditExisting(vnode: m.Vnode<EditableTableAttrs<TRow>>, row: any, idx: number) {
		const keyName = this.getRowKeyName(vnode);
		if (row[keyName] == null) {
			(row as any)[keyName] = generateKey("p");
		}
		const key = String((row as any)[keyName]);
		this.drafts[key] = { ...(row as any) };
		this.editingKeys.add(key);
		this.errors[key] = {};
		m.redraw();
	}

	/**
	 * 編集をキャンセル
	 */
	private cancelEdit(vnode: m.Vnode<EditableTableAttrs<TRow>>, rowKey: string) {
		if (this.drafts[rowKey]) delete this.drafts[rowKey];
		this.draftOrder = this.draftOrder.filter((k) => k !== rowKey);
		this.editingKeys.delete(rowKey);
		if (this.errors[rowKey]) delete this.errors[rowKey];
		m.redraw();
	}

	/**
	 * バリデータを実行
	 */
	private async runValidator(col: EditableColumn<TRow>, value: any, draft: TRow): Promise<string | null> {
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
	private async validateRow(vnode: m.Vnode<EditableTableAttrs<TRow>>, rowKey: string, draft: TRow) {
		const cols = vnode.attrs.columns;
		const errs: Record<string, string> = {};
		for (const col of cols) {
			if (!col.editable) continue;
			// visible 条件をチェック
			if (col.visible && !col.visible(draft)) continue;
			const val = (draft as any)[col.dataIndex as string];
			const msg = await this.runValidator(col as EditableColumn<TRow>, val, draft);
			if (msg) errs[col.dataIndex as string] = msg;
		}
		this.errors[rowKey] = errs;
		m.redraw();
		return Object.keys(errs).length === 0;
	}

	/**
	 * セル単位でバリデート
	 */
	private async validateCell(vnode: m.Vnode<EditableTableAttrs<TRow>>, rowKey: string, col: EditableColumn<TRow>) {
		if (!col.editable) return true;
		const draft = this.drafts[rowKey] ?? ({} as TRow);
		const val = (draft as any)[col.dataIndex as string];
		const msg = await this.runValidator(col, val, draft);
		const rowErrs = { ...(this.errors[rowKey] || {}) };
		if (msg) rowErrs[col.dataIndex as string] = msg;
		else delete rowErrs[col.dataIndex as string];
		this.errors[rowKey] = rowErrs;
		m.redraw();
		return !msg;
	}

	/**
	 * saveEdit: Create / Update
	 */
	private async saveEdit(vnode: m.Vnode<EditableTableAttrs<TRow>>, rowKey: string) {
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
		this.editingKeys.delete(rowKey);
		if (this.errors[rowKey]) delete this.errors[rowKey];
		m.redraw();
	}

	/**
	 * 内部用：実際の削除ロジック（データ更新だけ）
	 */
	private performDelete(vnode: m.Vnode<EditableTableAttrs<TRow>>, rowKey: string) {
		const keyName = this.getRowKeyName(vnode);

		const hasDraft = !!this.drafts[rowKey];
		const persistedIdx = this.localData.findIndex((r) => String((r as any)?.[keyName]) === String(rowKey));
		const isPersisted = persistedIdx >= 0;

		if (hasDraft) {
			delete this.drafts[rowKey];
			this.draftOrder = this.draftOrder.filter((k) => k !== rowKey);
			this.editingKeys.delete(rowKey);
			if (this.errors[rowKey]) delete this.errors[rowKey];
			if (isPersisted) {
				this.localData = this.localData.filter((r) => String((r as any)?.[keyName]) !== String(rowKey));
				vnode.attrs.onChange?.(this.localData.map((r) => ({ ...(r as any) } as TRow)));
			}
			return;
		}

		if (isPersisted) {
			this.localData = this.localData.filter((r) => String((r as any)?.[keyName]) !== String(rowKey));
			vnode.attrs.onChange?.(this.localData.map((r) => ({ ...(r as any) } as TRow)));
			this.editingKeys.delete(rowKey);
			if (this.errors[rowKey]) delete this.errors[rowKey];
		}
	}

	/**
	 * deleteRow: アニメーションしてから削除
	 */
	private async deleteRow(vnode: m.Vnode<EditableTableAttrs<TRow>>, rowKey: string) {
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

		// 削除アニメーション：高さ 0px + opacity 0
		const rowEl = document.querySelector(`tr[data-rowkey="${rowKey}"]`) as HTMLElement | null;
		if (rowEl && !this.leavingKeys.has(rowKey)) {
			this.leavingKeys.add(rowKey);
			const height = rowEl.offsetHeight;
			rowEl.style.height = height + "px";
			rowEl.style.transition = "height 0.25s ease, opacity 0.25s ease";
			rowEl.offsetHeight; // reflow
			rowEl.style.height = "0px";
			rowEl.style.opacity = "0";

			await new Promise((resolve) => setTimeout(resolve, 260));
			this.leavingKeys.delete(rowKey);
		}

		this.performDelete(vnode, rowKey);
		m.redraw();
	}

	/**
	 * セルのレンダリング（編集モード切り替え）
	 */
	private renderCell(
		vnode: m.Vnode<EditableTableAttrs<TRow>>,
		col: EditableColumn<TRow>,
		row: any,
		rowKey: string,
		rowIndex: number
	) {
		const isEditing = this.editingKeys.has(rowKey) || !!this.drafts[rowKey];
		if (!isEditing) {
			const value = row[col.dataIndex as string];
			return col.render ? col.render(value, row, rowIndex) : value;
		}

		const draft = (this.drafts[rowKey] ?? row) as any;
		const value = draft[col.dataIndex as string];

		const setValue = (v: any, validateNow = false) => {
			if (!this.drafts[rowKey]) this.drafts[rowKey] = { ...(row as any) };
			(this.drafts[rowKey] as any)[col.dataIndex as string] = v;
			if (this.errors[rowKey]?.[col.dataIndex as string]) {
				this.runValidator(col, v, this.drafts[rowKey]).then((msg) => {
					const rowErrs = { ...(this.errors[rowKey] || {}) };
					if (!msg) delete rowErrs[col.dataIndex as string];
					else rowErrs[col.dataIndex as string] = msg;
					this.errors[rowKey] = rowErrs;
					m.redraw();
				});
			} else if (validateNow) {
				this.runValidator(col, v, this.drafts[rowKey]).then((msg) => {
					const rowErrs = { ...(this.errors[rowKey] || {}) };
					if (msg) rowErrs[col.dataIndex as string] = msg;
					else delete rowErrs[col.dataIndex as string];
					this.errors[rowKey] = rowErrs;
					m.redraw();
				});
			} else {
				m.redraw();
			}
		};

		const errorMsg = this.errors[rowKey]?.[col.dataIndex as string];

		if (col.inputType === "number") {
			return (
				<div>
					<InputNumberClassic
						value={value}
						oninput={(v: any) => setValue(v)}
						class={classNames({ "is-invalid": !!errorMsg })}
					/>
					{errorMsg && <div class="invalid-feedback d-block">{errorMsg}</div>}
				</div>
			);
		} else if (col.inputType === "select") {
			return (
				<div>
					<Select
						value={value}
						oninput={(v: any) => {
							setValue(v, true);
						}}
						options={(col.options || []).map((o) => ({ label: o.label, value: o.value }))}
						showSearch={false}
						allowClear
						class={classNames({ "is-invalid": !!errorMsg })}
						onDropdownVisibleChange={async (open: boolean) => {
							if (!open) {
								await this.validateCell(vnode, rowKey, col);
							}
						}}
					/>
					{errorMsg && <div class="invalid-feedback d-block">{errorMsg}</div>}
				</div>
			);
		} else {
			return (
				<div>
					<Input
						value={value}
						oninput={(v: any) => setValue(v)}
						class={classNames({ "is-invalid": !!errorMsg })}
					/>
					{errorMsg && <div class="invalid-feedback d-block">{errorMsg}</div>}
				</div>
			);
		}
	}

	/**
	 * view: テーブルの描画
	 */
	view(vnode: m.Vnode<EditableTableAttrs<TRow>>) {
		const cols = vnode.attrs.columns;
		const keyName = this.getRowKeyName(vnode);

		const persistedRows = this.localData.map((r) => ({ ...(r as any) }));

		const persistedReplaced = persistedRows.map((r, idx) => {
			const k = String((r as any)?.[keyName] ?? `r_${idx}`);
			if (this.drafts[k]) return this.drafts[k];
			return r;
		});

		const newDraftKeys = this.draftOrder.filter((k) => {
			return !persistedRows.some((r) => String((r as any)?.[keyName]) === k);
		});
		const newDraftRows = newDraftKeys.map((k) => this.drafts[k]).filter(Boolean);

		const pos = vnode.attrs.newRowPosition ?? "top";
		const rowsToRender = pos === "top" ? [...newDraftRows, ...persistedReplaced] : [...persistedReplaced, ...newDraftRows];

		const tableClass = classNames("table table-sm table-hover", vnode.attrs.class);

		/**
		 * 与えられたレコードに対して表示条件を満たすカラムをフィルタリング
		 */
		const getVisibleCols = (record: any) => {
			return cols.filter((col) => {
				if (col.visible) {
					return col.visible(record as TRow);
				}
				return true;
			});
		};

		return (
			<div class={styles["editable-table-wrapper"]}>
				<div class="d-flex justify-content-between align-items-center mb-2">
					<div>
						<button type="button" class="btn btn-sm btn-primary" onclick={() => this.addRow(vnode)}>
							<i class="bi bi-plus-circle"></i> 追加
						</button>
					</div>
					<div class="text-muted small">件数: {rowsToRender.length}</div>
				</div>

				<table class={tableClass} style={vnode.attrs.style}>
					<thead>
						<tr>
							{getVisibleCols(rowsToRender.length > 0 ? rowsToRender[0] : {}).map((col) => (
								<th key={col.key ?? (col.dataIndex as string)} class={col.class}>
									{col.title}
								</th>
							))}
							<th style={{ width: "200px" }}>操作</th>
						</tr>
					</thead>

					<tbody>
						{rowsToRender.map((record, idx) => {
							const rowKey = String((record as any)?.[keyName] ?? `r_${idx}`);
							const isEditing = !!this.drafts[rowKey] || this.editingKeys.has(rowKey);
							const visibleCols = getVisibleCols(record);

							return (
								<tr key={rowKey} data-rowkey={rowKey} class={classNames({ [styles["editable-table-row-editing"]]: isEditing })}>
									{visibleCols.map((col) => (
										<td key={col.key ?? (col.dataIndex as string)}>
											{this.renderCell(vnode, col as EditableColumn<TRow>, record, rowKey, idx)}
										</td>
									))}

									<td class={classNames(styles["editable-table-actions"], { [styles["is-editing"]]: isEditing })}>
										{isEditing ? (
											<div class="d-flex gap-1">
												<button type="button" class="btn btn-sm btn-success" onclick={() => this.saveEdit(vnode, rowKey)}>
													<i class="bi bi-check-circle"></i> 保存
												</button>
												<button type="button" class="btn btn-sm btn-secondary" onclick={() => this.cancelEdit(vnode, rowKey)}>
													<i class="bi bi-x"></i> キャンセル
												</button>
											</div>
										) : (
											<div class="d-flex gap-1">
												<button
													type="button"
													class="btn btn-sm btn-outline-primary"
													onclick={() => this.startEditExisting(vnode, record, idx)}
												>
													<i class="bi bi-pencil"></i> 編集
												</button>
												<button type="button" class="btn btn-sm btn-outline-danger" onclick={() => this.deleteRow(vnode, rowKey)}>
													<i class="bi bi-trash"></i> 削除
												</button>
											</div>
										)}
									</td>
								</tr>
							);
						})}

						{rowsToRender.length === 0 && (
							<tr>
								<td colspan={cols.length + 1} class="text-center text-muted py-3">
									データがありません
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		);
	}
}
