/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import * as _ from "lodash-es";

/**
 * セレクトで表示する個々のオプションを表す型
 * - `label`: 表示用の内容（テキストや Mithril の子要素）
 * - `value`: 内部で扱う値
 * - `disabled`: 選択不可にするか
 * - `title`: ツールチップ等に使える文字列
 */
export type SelectOption = {
	label: m.Children;
	value: any;
	disabled?: boolean;
	title?: string;
	[key: string]: any;
};

/**
 * `Select` コンポーネントの属性
 */
export type SelectAttrs = {
	/** 単一選択では value、複数選択では配列 */
	value?: any | any[];
	/** 選択変更時や配列変更時に呼ばれるコールバック */
	oninput?: (v: any | any[] | Event) => void;
	options?: SelectOption[];
	multiple?: boolean;
	placeholder?: string;
	disabled?: boolean;
	showSearch?: boolean;
	allowClear?: boolean;
	class?: string;
	style?: Record<string, string>;
	dropdownStyle?: Record<string, string>;
	dropdownClass?: string;
	/** フィルタ関数（同期または Promise を返す非同期） */
	filter?: ((input: string, option: SelectOption) => boolean | Promise<boolean>) | null;
	/** 外部から開閉を制御する場合に使用 */
	open?: boolean;
	onDropdownVisibleChange?: (open: boolean) => void;
	renderOption?: (opt: SelectOption) => m.Children;
	maxVisibleOptions?: number;
};

/** `Option` コンポーネントに渡す属性 */
export type OptionAttrs = {
	value: any;
	label?: m.Children;
	disabled?: boolean;
	title?: string;
	class?: string;
};

/** `OptGroup` コンポーネントに渡す属性 */
export type OptGroupAttrs = {
	label: m.Children;
	children?: m.Children;
	class?: string;
};

export class SelectClassic implements m.Component<SelectAttrs> {
	/** ドロップダウンが開いているか */
	private isOpen = false;
	/** 検索入力のテキスト */
	private searchText = "";
	/** 現在フォーカスされているオプションの index */
	private focusedIndex = -1;
	/** フィルタ処理後に表示するオプション */
	private filteredOptions: SelectOption[] = [];
	/** コンポーネントのルート要素 */
	private container?: HTMLElement;
	/** ドロップダウン要素 */
	private dropdownRef?: HTMLElement;
	/** view に渡された直近の vnode を保持（イベントハンドラから参照するため） */
	private lastVnode?: m.Vnode<SelectAttrs>;
	/** ドキュメントクリックを処理するハンドラ（外部クリックでドロップダウンを閉じる） */
	private handleDocumentClick: (e: MouseEvent) => void;
	private debouncedRedraw: (s: string) => void;

	constructor() {
		this.debouncedRedraw = _.debounce(() => {
			m.redraw();
		}, 200);

		this.handleDocumentClick = (e: MouseEvent) => {
			const target = e.target as Node | null;
			if (!this.lastVnode) return;
			// クリックがコンテナやドロップダウンの内部であれば無視
			if (this.container && target && this.container.contains(target)) return;
			if (this.dropdownRef && target && this.dropdownRef.contains(target)) return;
			// それ以外はドロップダウンを閉じる
			if (this.isOpen) {
				try {
					this.close(this.lastVnode);
				} catch (err) {
					// 失敗しても無視
				}
				// ドキュメントイベントは Mithril の自動再描画外で発生する
				// 明示的に再描画を呼ぶことで UI を確実に更新する
				m.redraw();
			}
		};
	}

	private collectOptions(vnode: m.Vnode<SelectAttrs>): SelectOption[] {
		const { options } = vnode.attrs;
		if (options && options.length) return options;
		const children = vnode.children as any;
		if (!children) return [];
		const arr = Array.isArray(children) ? children : [children];
		const out: SelectOption[] = [];

		arr.forEach((ch: any) => {
			if (!ch) return;
			if (ch.tag === OptGroupClassic) {
				const groupChildren = ch.children ? (Array.isArray(ch.children) ? ch.children : [ch.children]) : [];
				groupChildren.forEach((gc: any) => {
					if (!gc || !gc.attrs) return;
					out.push({
						label: gc.attrs.label ?? gc.children,
						value: gc.attrs.value,
						disabled: !!gc.attrs.disabled,
						title: gc.attrs.title,
					});
				});
			} else if (ch.tag === OptionClassic && ch.attrs) {
				out.push({
					label: ch.attrs.label ?? ch.children,
					value: ch.attrs.value,
					disabled: !!ch.attrs.disabled,
					title: ch.attrs.title,
				});
			}
		});

		return out;
	}

	private async filterOptions(vnode: m.Vnode<SelectAttrs>) {
		const { filter } = vnode.attrs;
		const all = this.collectOptions(vnode);
		const input = (this.searchText ?? "").toLowerCase();

		// フィルタ関数が渡されていない場合は、ラベルに対する単純な部分一致フィルタを行う
		if (!filter) {
			if (!input) {
				this.filteredOptions = all;
				return;
			}
			this.filteredOptions = all.filter((opt) => {
				try {
					const lab = opt.label as any;
					let s: string;
					if (typeof lab === "string") s = lab;
					else if (Array.isArray(lab)) s = lab.map((x) => String(x)).join("");
					else s = String(lab);
					return s.toLowerCase().includes(input);
				} catch {
					return false;
				}
			});
			return;
		}
		const results: SelectOption[] = [];
		for (const opt of all) {
			try {
				const res = filter(input, opt);
				if (res && typeof (res as Promise<any>).then === "function") {
					const ok = await (res as Promise<boolean>);
					if (ok) results.push(opt);
				} else if (res) {
					results.push(opt);
				}
			} catch {
				// 個別のフィルタエラーは無視
			}
		}
		this.filteredOptions = results;
	}


	/**
	 * ドロップダウンを開く
	 * @param vnode vnode
	 */
	private open(vnode: m.Vnode<SelectAttrs>) {
		if (vnode.attrs.disabled) return;
		this.isOpen = true;
		this.focusedIndex = -1;
		this.filterOptions(vnode);
		vnode.attrs.onDropdownVisibleChange?.(true);
	}

	private close(vnode: m.Vnode<SelectAttrs>) {
		this.isOpen = false;
		this.searchText = "";
		this.filteredOptions = [];
		this.focusedIndex = -1;
		vnode.attrs.onDropdownVisibleChange?.(false);
	}

	private isEqual(a: any, b: any) {
		if (a === b) return true;
		if ((typeof a === "number" || typeof a === "string") && (typeof b === "number" || typeof b === "string")) {
			return String(a) === String(b);
		}
		return false;
	}

	private isSelected(attrs: SelectAttrs, val: any) {
		if (attrs.multiple) {
			return Array.isArray(attrs.value) && attrs.value.some((v: any) => this.isEqual(v, val));
		}
		return this.isEqual(attrs.value, val);
	}

	private selectValue(vnode: m.Vnode<SelectAttrs>, val: any) {
		const attrs = vnode.attrs;
		if (attrs.multiple) {
			const cur = Array.isArray(attrs.value) ? [...attrs.value] : [];
			const idx = cur.findIndex((x) => this.isEqual(x, val));
			if (idx === -1) cur.push(val);
			else cur.splice(idx, 1);
			attrs.oninput?.(cur);
		} else {
			attrs.oninput?.(val);
			this.close(vnode);
		}
	}

	private clearSelection(vnode: m.Vnode<SelectAttrs>) {
		const attrs = vnode.attrs;
		attrs.oninput?.(attrs.multiple ? [] : null);
	}

	private onKeyDown(vnode: m.Vnode<SelectAttrs>, e: KeyboardEvent) {
		const isOpen = vnode.attrs.open ?? this.isOpen;
		if (!isOpen && (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ")) {
			e.preventDefault();
			this.open(vnode);
			return;
		}
		if (!isOpen) return;

		if (e.key === "ArrowDown") {
			e.preventDefault();
			const len = this.filteredOptions.length;
			if (len === 0) return;
			this.focusedIndex = (this.focusedIndex + 1 + len) % len;
			m.redraw();
		} else if (e.key === "ArrowUp") {
			e.preventDefault();
			const len = this.filteredOptions.length;
			if (len === 0) return;
			this.focusedIndex = (this.focusedIndex - 1 + len) % len;
			m.redraw();
		} else if (e.key === "Enter") {
			e.preventDefault();
			if (this.focusedIndex >= 0 && this.focusedIndex < this.filteredOptions.length) {
				const opt = this.filteredOptions[this.focusedIndex];
				if (!opt.disabled) this.selectValue(vnode, opt.value);
			}
		} else if (e.key === "Escape") {
			e.preventDefault();
			this.close(vnode);
		}
	}

	/**
	 * コンポーネントの描画
	 * - vnode を this.lastVnode に保持して、ドキュメントクリックハンドラから参照できるようにする
	 */
	view(vnode: m.Vnode<SelectAttrs>) {
		this.lastVnode = vnode;
		const attrs = vnode.attrs;
		const allOptions = this.collectOptions(vnode);
		if (!this.filteredOptions.length) this.filteredOptions = allOptions;
		const isOpen = attrs.open ?? this.isOpen;

		const containerClass = classNames("position-relative", attrs.class, {
			"select-disabled": attrs.disabled,
		});

		const selectionClass = classNames(
			"form-control d-flex align-items-center justify-content-between",
			{ "is-invalid": !!(attrs.class && String(attrs.class).split(/\s+/).includes("is-invalid")) }
		);

		const displayLabel = () => {
			if (attrs.multiple) {
				const vals = Array.isArray(attrs.value) ? attrs.value : [];
				if (vals.length === 0) return attrs.placeholder ?? "";
				const labels = vals.map((v) => {
					const found = allOptions.find((o) => this.isEqual(o.value, v));
					return found ? found.label : String(v);
				});
				return labels;
			}
			if (attrs.value == null) return attrs.placeholder ?? "";
			const found = allOptions.find((o) => this.isEqual(o.value, attrs.value));
			return found ? found.label : String(attrs.value);
		};

		const renderedValue = displayLabel();
		const visibleOptions = attrs.maxVisibleOptions
			? this.filteredOptions.slice(0, attrs.maxVisibleOptions)
			: this.filteredOptions;
		const focusedIndex = this.focusedIndex >= 0 && visibleOptions.length > 0
			? Math.min(this.focusedIndex, visibleOptions.length - 1)
			: -1;

		return (
			<div
				class={containerClass}
				style={attrs.style}
				tabindex={0}
				onkeydown={(e: KeyboardEvent) => this.onKeyDown(vnode, e)}
				oncreate={(dom) => {
					this.container = dom.dom as HTMLElement;
					document.addEventListener("click", this.handleDocumentClick);
				}}
				onremove={() => {
					document.removeEventListener("click", this.handleDocumentClick);
					this.container = undefined;
					this.dropdownRef = undefined;
				}}
			>
				<div
					class={selectionClass}
					role="button"
					onclick={() => {
						if (isOpen) this.close(vnode);
						else this.open(vnode);
					}}
					aria-haspopup="listbox"
					aria-expanded={isOpen}
				>
					<div class="d-flex align-items-center flex-wrap gap-1" style={{ minHeight: "1.5rem" }}>
						{attrs.multiple ? (
							Array.isArray(renderedValue) && renderedValue.length > 0 ? (
								renderedValue.map((lab: any, i: number) => (
									<span class="badge bg-secondary text-truncate" style={{ maxWidth: "160px" }} key={i}>
										{lab}
									</span>
								))
							) : (
								<span class="text-muted">{attrs.placeholder ?? "選択してください"}</span>
							)
						) : renderedValue && renderedValue !== (attrs.placeholder ?? "") ? (
							<span>{renderedValue}</span>
						) : (
							<span class="text-muted">{attrs.placeholder ?? "選択してください"}</span>
						)}
					</div>

					<div class="d-flex align-items-center">
						{(() => {
							const isMultiple = !!attrs.multiple;
							const val = attrs.value;
							const hasValue = isMultiple
								? Array.isArray(val) && val.length > 0
								: val !== null && val !== undefined && !(typeof val === "string" && val === "");
							return attrs.allowClear && hasValue && !attrs.disabled ? (
								<button
									type="button"
									class="btn btn-sm btn-link p-0 me-2 d-flex align-items-center"
									onclick={(e: Event) => {
										e.stopPropagation();
										e.preventDefault();
										this.clearSelection(vnode);
									}}
									aria-label="clear selection"
									title="Clear"
								>
									x
								</button>
							) : null;
						})()}
						<span class="dropdown-toggle-split" style={{ marginLeft: "0.25rem" }} aria-hidden="true" />
					</div>
				</div>

				{isOpen && (
					<div
						class={classNames("dropdown-menu show shadow-sm", attrs.dropdownClass)}
						style={Object.assign({ maxHeight: "240px", overflow: "auto", width: "100%" }, attrs.dropdownStyle)}
						oncreate={(d) => {
							this.dropdownRef = d.dom as HTMLElement;
						}}
						onremove={() => {
							this.dropdownRef = undefined;
						}}
					>
						{attrs.showSearch && (
							<div class="px-2 py-2">
								<input
									type="text"
									class="form-control form-control-sm"
									placeholder="検索..."
									value={this.searchText}
									oninput={async (e: Event) => {
										const t = e.target as HTMLInputElement;
										this.searchText = t.value;
										this.debouncedRedraw(this.searchText);
										await this.filterOptions(vnode);
										this.focusedIndex = this.filteredOptions.length ? 0 : -1;
										m.redraw();
									}}
								/>
							</div>
						)}

						<div role="listbox" aria-activedescendant={focusedIndex >= 0 ? `select-opt-${focusedIndex}` : undefined}>
							{visibleOptions.length === 0 && <div class="dropdown-item text-muted">該当なし</div>}
							{visibleOptions.map((opt, idx) => {
								const isFocused = idx === focusedIndex;
								const isSel = this.isSelected(attrs, opt.value);
								return (
									<button
										id={`select-opt-${idx}`}
										type="button"
										role="option"
										aria-selected={isSel}
										class={classNames("dropdown-item d-flex justify-content-between align-items-center", {
											active: isFocused,
											disabled: opt.disabled,
										})}
										onclick={() => {
											if (!opt.disabled) this.selectValue(vnode, opt.value);
										}}
										onmouseover={() => {
											this.focusedIndex = idx;
										}}
										title={opt.title}
									>
										<span class={classNames({ "text-muted": opt.disabled })}>{attrs.renderOption ? attrs.renderOption(opt) : opt.label}</span>
										{isSel && <span class="text-primary">✓</span>}
									</button>
								);
							})}
						</div>
					</div>
				)}
			</div>
		);
	}
}

/**
 * 単一のオプションを静的に定義するためのダミーコンポーネント
 * 実体は `Select` が子要素として解釈して利用するため、レンダリングは行わない
 */
export class OptionClassic implements m.Component<OptionAttrs> {
	view(_vnode: m.Vnode<OptionAttrs>) {
		return <div style={{ display: "none" }} />;
	}
}

/**
 * オプションのグループを定義するためのダミーコンポーネント
 * `Select` が子要素として解釈してグルーピングを行う
 */
export class OptGroupClassic implements m.Component<OptGroupAttrs> {
	view(_vnode: m.Vnode<OptGroupAttrs>) {
		return <div style={{ display: "none" }} />;
	}
}
