/** @jsx m */
import m from "mithril";
import styles from "./DatePicker.module.scss";

// ============================================================
// 型定義
// ============================================================

/** DatePicker のビュー状態 */
export type DatePickerView = "day" | "month" | "year";

/** 選択モード */
export type DatePickerSelectionMode = "single" | "multiple" | "range";

/** サイズ */
export type DatePickerSize = "sm" | "md" | "lg";

/** 値変更イベント詳細 */
export type DatePickerValueChangeDetails = {
	value: Date[];
	valueAsString: string[];
};

/** 開閉イベント詳細 */
export type DatePickerOpenChangeDetails = {
	open: boolean;
};

/** ビュー変更イベント詳細 */
export type DatePickerViewChangeDetails = {
	view: DatePickerView;
};

/** プリセットトリガー値 */
export type DatePickerPresetValue = Date | Date[];

// --- Sub-component Attrs ---

/**
 * DatePicker.Root の属性定義。
 *
 * @example
 * ```tsx
 * <DatePicker.Root selectionMode="single" onValueChange={(d) => console.log(d)}>
 *   <DatePicker.Label>日付を選択</DatePicker.Label>
 *   <DatePicker.Control>
 *     <DatePicker.Input />
 *     <DatePicker.IndicatorGroup>
 *       <DatePicker.Trigger>📅</DatePicker.Trigger>
 *     </DatePicker.IndicatorGroup>
 *   </DatePicker.Control>
 *   <DatePicker.Positioner>
 *     <DatePicker.Content>
 *       <DatePicker.View view="day">
 *         <DatePicker.Header />
 *         <DatePicker.DayTable />
 *       </DatePicker.View>
 *     </DatePicker.Content>
 *   </DatePicker.Positioner>
 * </DatePicker.Root>
 * ```
 */
export type DatePickerRootAttrs = {
	/** 選択モード (single / multiple / range) */
	selectionMode?: DatePickerSelectionMode;
	/** 制御値 (Date 配列) */
	value?: Date[];
	/** デフォルト値 */
	defaultValue?: Date[];
	/** 値変更コールバック */
	onValueChange?: (details: DatePickerValueChangeDetails) => void;
	/** デフォルトビュー */
	defaultView?: DatePickerView;
	/** 最小ビュー （これ以上ドリルダウンしない） */
	minView?: DatePickerView;
	/** 最大ビュー */
	maxView?: DatePickerView;
	/** 制御ビュー */
	view?: DatePickerView;
	/** ビュー変更コールバック */
	onViewChange?: (details: DatePickerViewChangeDetails) => void;
	/** インラインモード（Calendar として使用） */
	inline?: boolean;
	/** 制御開閉 */
	open?: boolean;
	/** デフォルト開閉 */
	defaultOpen?: boolean;
	/** 開閉コールバック */
	onOpenChange?: (details: DatePickerOpenChangeDetails) => void;
	/** 選択後に閉じるか (single モード時、デフォルト true) */
	closeOnSelect?: boolean;
	/** 無効状態 */
	disabled?: boolean;
	/** 読み取り専用 */
	readOnly?: boolean;
	/** 最小日付 */
	min?: Date;
	/** 最大日付 */
	max?: Date;
	/** 利用不可日判定 */
	isDateUnavailable?: (date: Date) => boolean;
	/** 外側の日付を非表示にするか */
	hideOutsideDays?: boolean;
	/** 固定6週表示 */
	fixedWeeks?: boolean;
	/** 月表示数 (2以上でマルチ) */
	numOfMonths?: number;
	/** 週の開始曜日 (0=Sun, 1=Mon ..) */
	startOfWeek?: number;
	/** locale BCP47 */
	locale?: string;
	/** placeholder */
	placeholder?: string;
	/** name (form) */
	name?: string;
	/** サイズ */
	size?: DatePickerSize;
	/** フォーマット関数 */
	format?: (date: Date) => string;
	/** パース関数 */
	parse?: (text: string) => Date | undefined;
	/** class */
	class?: string;
	/** style */
	style?: Record<string, string>;
};

export type DatePickerLabelAttrs = {
	class?: string;
};
export type DatePickerControlAttrs = {
	class?: string;
};
export type DatePickerInputAttrs = {
	index?: number;
	class?: string;
	placeholder?: string;
};
export type DatePickerIndicatorGroupAttrs = {
	class?: string;
};
export type DatePickerTriggerAttrs = {
	class?: string;
};
export type DatePickerClearTriggerAttrs = {
	class?: string;
};
export type DatePickerPositionerAttrs = {
	class?: string;
};
export type DatePickerContentAttrs = {
	class?: string;
};
export type DatePickerViewAttrs = {
	view: DatePickerView;
	class?: string;
};
export type DatePickerHeaderAttrs = {
	class?: string;
};
export type DatePickerDayTableAttrs = {
	class?: string;
};
export type DatePickerMonthTableAttrs = {
	class?: string;
};
export type DatePickerYearTableAttrs = {
	class?: string;
};
export type DatePickerPresetTriggerAttrs = {
	value: DatePickerPresetValue;
	class?: string;
};

// ============================================================
// マーカー（サブコンポーネント）
// ============================================================

type DPRole =
	| "label" | "control" | "input" | "indicatorGroup"
	| "trigger" | "clearTrigger" | "positioner" | "content"
	| "view" | "header" | "dayTable" | "monthTable" | "yearTable"
	| "presetTrigger";

class DPLabelMarker implements m.Component<DatePickerLabelAttrs> {
	static __dpRole: DPRole = "label";
	view(vnode: m.Vnode<DatePickerLabelAttrs>) { return <span>{vnode.children}</span>; }
}
class DPControlMarker implements m.Component<DatePickerControlAttrs> {
	static __dpRole: DPRole = "control";
	view(vnode: m.Vnode<DatePickerControlAttrs>) { return <span>{vnode.children}</span>; }
}
class DPInputMarker implements m.Component<DatePickerInputAttrs> {
	static __dpRole: DPRole = "input";
	view(vnode: m.Vnode<DatePickerInputAttrs>) { return <span>{vnode.children}</span>; }
}
class DPIndicatorGroupMarker implements m.Component<DatePickerIndicatorGroupAttrs> {
	static __dpRole: DPRole = "indicatorGroup";
	view(vnode: m.Vnode<DatePickerIndicatorGroupAttrs>) { return <span>{vnode.children}</span>; }
}
class DPTriggerMarker implements m.Component<DatePickerTriggerAttrs> {
	static __dpRole: DPRole = "trigger";
	view(vnode: m.Vnode<DatePickerTriggerAttrs>) { return <span>{vnode.children}</span>; }
}
class DPClearTriggerMarker implements m.Component<DatePickerClearTriggerAttrs> {
	static __dpRole: DPRole = "clearTrigger";
	view(vnode: m.Vnode<DatePickerClearTriggerAttrs>) { return <span>{vnode.children}</span>; }
}
class DPPositionerMarker implements m.Component<DatePickerPositionerAttrs> {
	static __dpRole: DPRole = "positioner";
	view(vnode: m.Vnode<DatePickerPositionerAttrs>) { return <span>{vnode.children}</span>; }
}
class DPContentMarker implements m.Component<DatePickerContentAttrs> {
	static __dpRole: DPRole = "content";
	view(vnode: m.Vnode<DatePickerContentAttrs>) { return <span>{vnode.children}</span>; }
}
class DPViewMarker implements m.Component<DatePickerViewAttrs> {
	static __dpRole: DPRole = "view";
	view(vnode: m.Vnode<DatePickerViewAttrs>) { return <span>{vnode.children}</span>; }
}
class DPHeaderMarker implements m.Component<DatePickerHeaderAttrs> {
	static __dpRole: DPRole = "header";
	view(vnode: m.Vnode<DatePickerHeaderAttrs>) { return <span>{vnode.children}</span>; }
}
class DPDayTableMarker implements m.Component<DatePickerDayTableAttrs> {
	static __dpRole: DPRole = "dayTable";
	view(vnode: m.Vnode<DatePickerDayTableAttrs>) { return <span />; }
}
class DPMonthTableMarker implements m.Component<DatePickerMonthTableAttrs> {
	static __dpRole: DPRole = "monthTable";
	view(vnode: m.Vnode<DatePickerMonthTableAttrs>) { return <span />; }
}
class DPYearTableMarker implements m.Component<DatePickerYearTableAttrs> {
	static __dpRole: DPRole = "yearTable";
	view(vnode: m.Vnode<DatePickerYearTableAttrs>) { return <span />; }
}
class DPPresetTriggerMarker implements m.Component<DatePickerPresetTriggerAttrs> {
	static __dpRole: DPRole = "presetTrigger";
	view(vnode: m.Vnode<DatePickerPresetTriggerAttrs>) { return <span>{vnode.children}</span>; }
}

// ============================================================
// ユーティリティ
// ============================================================

/** Date → "yyyy-mm-dd" */
function formatISO(d: Date): string {
	const y = d.getFullYear();
	const mo = String(d.getMonth() + 1).padStart(2, "0");
	const da = String(d.getDate()).padStart(2, "0");
	return `${y}-${mo}-${da}`;
}

/** 同じ日付か */
function isSameDay(a: Date, b: Date): boolean {
	return a.getFullYear() === b.getFullYear()
		&& a.getMonth() === b.getMonth()
		&& a.getDate() === b.getDate();
}

/** 同じ月か */
function isSameMonth(a: Date, b: Date): boolean {
	return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();
}

/** 同じ年か */
function isSameYear(a: Date, b: Date): boolean {
	return a.getFullYear() === b.getFullYear();
}

/** Date を所定のフォーマットで文字列化 */
function defaultFormat(d: Date, locale: string): string {
	try {
		return d.toLocaleDateString(locale, { year: "numeric", month: "2-digit", day: "2-digit" });
	} catch {
		return formatISO(d);
	}
}

/** 月の日数を取得 */
function daysInMonth(year: number, month: number): number {
	return new Date(year, month + 1, 0).getDate();
}

/** カレンダーグリッド生成 (6週 x 7日 or 可変) */
function buildDayGrid(year: number, month: number, startOfWeek: number, fixedWeeks: boolean): Date[][] {
	const first = new Date(year, month, 1);
	let dayOfWeek = first.getDay() - startOfWeek;
	if (dayOfWeek < 0) dayOfWeek += 7;

	const start = new Date(year, month, 1 - dayOfWeek);
	const weeks: Date[][] = [];
	const totalWeeks = fixedWeeks ? 6 : Math.ceil((dayOfWeek + daysInMonth(year, month)) / 7);

	for (let w = 0; w < totalWeeks; w++) {
		const week: Date[] = [];
		for (let d = 0; d < 7; d++) {
			const date = new Date(start);
			date.setDate(start.getDate() + w * 7 + d);
			week.push(date);
		}
		weeks.push(week);
	}
	return weeks;
}

/** 曜日ヘッダー名 */
function weekdayHeaders(locale: string, startOfWeek: number): string[] {
	const headers: string[] = [];
	const base = new Date(2024, 0, 7 + startOfWeek); // 2024-01-07 is a Sunday
	for (let i = 0; i < 7; i++) {
		const d = new Date(base);
		d.setDate(base.getDate() + i);
		headers.push(d.toLocaleDateString(locale, { weekday: "short" }));
	}
	return headers;
}

/** ビュー階層 (上位へ) */
const VIEW_ORDER: DatePickerView[] = ["day", "month", "year"];
function viewUp(current: DatePickerView, maxView: DatePickerView): DatePickerView | null {
	const ci = VIEW_ORDER.indexOf(current);
	const mi = VIEW_ORDER.indexOf(maxView);
	return ci < mi ? VIEW_ORDER[ci + 1] : null;
}

// ============================================================
// DatePickerRoot
// ============================================================

/**
 * DatePickerRoot — Chakra UI 風 DatePicker のルートコンポーネント。
 *
 * 責務:
 * 1. 選択状態 (value) の管理
 * 2. カレンダービュー (day/month/year) の管理
 * 3. ポップアップ開閉の管理
 * 4. 子マーカーを再帰的に描画
 */
export class DatePickerRoot implements m.Component<DatePickerRootAttrs> {
	// --- 内部状態 ---
	private selectedDates: Date[] = [];
	private currentView: DatePickerView = "day";
	private focusedMonth: number = new Date().getMonth();
	private focusedYear: number = new Date().getFullYear();
	private isOpen = false;
	private inputText = "";
	private rangeHoverDate: Date | null = null;
	private rootEl: HTMLElement | null = null;

	// --- ライフサイクル ---
	oninit(vnode: m.Vnode<DatePickerRootAttrs>) {
		const a = vnode.attrs;
		this.selectedDates = a.value ?? a.defaultValue ?? [];
		this.currentView = a.view ?? a.defaultView ?? "day";
		this.isOpen = a.open ?? a.defaultOpen ?? false;
		this.syncInputText(a);
		if (this.selectedDates.length > 0) {
			const ref = this.selectedDates[0];
			this.focusedMonth = ref.getMonth();
			this.focusedYear = ref.getFullYear();
		}
	}

	onbeforeupdate(vnode: m.Vnode<DatePickerRootAttrs>, old: m.VnodeDOM<DatePickerRootAttrs>) {
		const a = vnode.attrs;
		if (a.value !== undefined && a.value !== old.attrs.value) {
			this.selectedDates = a.value;
			this.syncInputText(a);
		}
		if (a.view !== undefined && a.view !== old.attrs.view) {
			this.currentView = a.view;
		}
		if (a.open !== undefined && a.open !== old.attrs.open) {
			this.isOpen = a.open;
		}
	}

	oncreate(vnode: m.VnodeDOM<DatePickerRootAttrs>) {
		this.rootEl = vnode.dom as HTMLElement;
		document.addEventListener("mousedown", this.handleOutsideClick);
	}

	onremove() {
		document.removeEventListener("mousedown", this.handleOutsideClick);
		this.rootEl = null;
	}

	// --- 外部クリック ---
	private handleOutsideClick = (e: MouseEvent) => {
		if (!this.isOpen || !this.rootEl) return;
		if (!this.rootEl.contains(e.target as Node)) {
			this.setOpen(false);
		}
	};

	// --- 状態操作 ---
	private getAttr<K extends keyof DatePickerRootAttrs>(vnode: m.Vnode<DatePickerRootAttrs>, key: K, fallback: NonNullable<DatePickerRootAttrs[K]>): NonNullable<DatePickerRootAttrs[K]> {
		return (vnode.attrs[key] ?? fallback) as NonNullable<DatePickerRootAttrs[K]>;
	}

	private setOpen(open: boolean, attrs?: DatePickerRootAttrs) {
		if (this.isOpen === open) return;
		this.isOpen = open;
		(attrs ?? {} as DatePickerRootAttrs).onOpenChange?.({ open });
		m.redraw();
	}

	private toggleOpen(attrs: DatePickerRootAttrs) {
		this.setOpen(!this.isOpen, attrs);
	}

	private selectDate(date: Date, attrs: DatePickerRootAttrs) {
		if (attrs.disabled || attrs.readOnly) return;
		if (attrs.isDateUnavailable?.(date)) return;
		if (attrs.min && date < attrs.min) return;
		if (attrs.max && date > attrs.max) return;

		const mode = attrs.selectionMode ?? "single";

		if (mode === "single") {
			this.selectedDates = [date];
		} else if (mode === "multiple") {
			const idx = this.selectedDates.findIndex(d => isSameDay(d, date));
			if (idx >= 0) {
				this.selectedDates = this.selectedDates.filter((_, i) => i !== idx);
			} else {
				this.selectedDates = [...this.selectedDates, date];
			}
		} else if (mode === "range") {
			if (this.selectedDates.length === 0 || this.selectedDates.length === 2) {
				this.selectedDates = [date];
			} else {
				const start = this.selectedDates[0];
				if (date < start) {
					this.selectedDates = [date, start];
				} else {
					this.selectedDates = [start, date];
				}
			}
		}

		this.syncInputText(attrs);

		const details: DatePickerValueChangeDetails = {
			value: [...this.selectedDates],
			valueAsString: this.selectedDates.map(d => formatISO(d)),
		};
		attrs.onValueChange?.(details);

		// 自動で閉じる
		const closeOnSelect = attrs.closeOnSelect ?? true;
		if (!attrs.inline && closeOnSelect && mode === "single") {
			this.setOpen(false, attrs);
		}
		if (!attrs.inline && mode === "range" && this.selectedDates.length === 2) {
			this.setOpen(false, attrs);
		}
	}

	private selectMonth(month: number, attrs: DatePickerRootAttrs) {
		this.focusedMonth = month;
		const minView = attrs.minView ?? "day";
		if (minView === "month") {
			// 月選択モード: 選択確定
			const d = new Date(this.focusedYear, month, 1);
			this.selectDate(d, attrs);
		} else {
			this.currentView = "day";
			attrs.onViewChange?.({ view: "day" });
		}
	}

	private selectYear(year: number, attrs: DatePickerRootAttrs) {
		this.focusedYear = year;
		const minView = attrs.minView ?? "day";
		if (minView === "year") {
			const d = new Date(year, 0, 1);
			this.selectDate(d, attrs);
		} else {
			this.currentView = "month";
			attrs.onViewChange?.({ view: "month" });
		}
	}

	private syncInputText(attrs: DatePickerRootAttrs) {
		const locale = attrs.locale ?? "ja-JP";
		const fmt = attrs.format ?? ((d: Date) => defaultFormat(d, locale));
		if (attrs.selectionMode === "range" && this.selectedDates.length === 2) {
			this.inputText = `${fmt(this.selectedDates[0])} – ${fmt(this.selectedDates[1])}`;
		} else if (this.selectedDates.length > 0) {
			this.inputText = this.selectedDates.map(d => fmt(d)).join(", ");
		} else {
			this.inputText = "";
		}
	}

	private clearSelection(attrs: DatePickerRootAttrs) {
		this.selectedDates = [];
		this.inputText = "";
		attrs.onValueChange?.({ value: [], valueAsString: [] });
	}

	private applyPreset(presetValue: DatePickerPresetValue, attrs: DatePickerRootAttrs) {
		if (Array.isArray(presetValue)) {
			this.selectedDates = [...presetValue];
		} else {
			this.selectedDates = [presetValue];
		}
		this.syncInputText(attrs);
		attrs.onValueChange?.({
			value: [...this.selectedDates],
			valueAsString: this.selectedDates.map(d => formatISO(d)),
		});
		if (!attrs.inline) {
			this.setOpen(false, attrs);
		}
	}

	private handleInputChange(text: string, attrs: DatePickerRootAttrs) {
		this.inputText = text;
		const parser = attrs.parse ?? ((t: string) => {
			const d = new Date(t);
			return isNaN(d.getTime()) ? undefined : d;
		});
		const parsed = parser(text);
		if (parsed) {
			this.selectedDates = [parsed];
			this.focusedYear = parsed.getFullYear();
			this.focusedMonth = parsed.getMonth();
			attrs.onValueChange?.({
				value: [parsed],
				valueAsString: [formatISO(parsed)],
			});
		}
	}

	// --- ナビゲーション ---
	private prevMonth() {
		if (this.focusedMonth === 0) {
			this.focusedMonth = 11;
			this.focusedYear--;
		} else {
			this.focusedMonth--;
		}
	}

	private nextMonth() {
		if (this.focusedMonth === 11) {
			this.focusedMonth = 0;
			this.focusedYear++;
		} else {
			this.focusedMonth++;
		}
	}

	private prevYear() { this.focusedYear--; }
	private nextYear() { this.focusedYear++; }
	private prevDecade() { this.focusedYear -= 10; }
	private nextDecade() { this.focusedYear += 10; }

	// --- 描画ヘルパー ---
	private isSelected(date: Date): boolean {
		return this.selectedDates.some(d => isSameDay(d, date));
	}

	private isInRange(date: Date): boolean {
		if (this.selectedDates.length !== 2) return false;
		const [start, end] = this.selectedDates;
		return date > start && date < end;
	}

	private isRangeHover(date: Date): boolean {
		if (this.selectedDates.length !== 1 || !this.rangeHoverDate) return false;
		const start = this.selectedDates[0];
		const hover = this.rangeHoverDate;
		const lo = start < hover ? start : hover;
		const hi = start < hover ? hover : start;
		return date > lo && date < hi;
	}

	private isDateDisabled(date: Date, attrs: DatePickerRootAttrs): boolean {
		if (attrs.min && date < attrs.min) return true;
		if (attrs.max && date > attrs.max) return true;
		return false;
	}

	private getCellClass(date: Date, attrs: DatePickerRootAttrs, isOutside: boolean): string {
		const classes: string[] = [styles.cellBtn];
		const today = new Date();
		if (isSameDay(date, today)) classes.push(styles.cellToday);
		if (this.isSelected(date)) classes.push(styles.cellSelected);
		if (this.isInRange(date) || this.isRangeHover(date)) classes.push(styles.cellInRange);
		if (this.selectedDates.length === 2 && isSameDay(date, this.selectedDates[0])) classes.push(styles.cellRangeStart);
		if (this.selectedDates.length === 2 && isSameDay(date, this.selectedDates[1])) classes.push(styles.cellRangeEnd);
		if (isOutside) classes.push(styles.cellOutside);
		if (this.isDateDisabled(date, attrs)) classes.push(styles.cellDisabled);
		if (attrs.isDateUnavailable?.(date)) classes.push(styles.cellUnavailable);
		return classes.join(" ");
	}

	// --- 描画: Header ---
	private renderHeader(attrs: DatePickerRootAttrs): m.Children {
		const maxView = attrs.maxView ?? "year";

		if (this.currentView === "day") {
			const monthName = new Date(this.focusedYear, this.focusedMonth).toLocaleDateString(
				attrs.locale ?? "ja-JP",
				{ year: "numeric", month: "long" }
			);
			return (
				<div class={styles.header} data-part="header">
					<button type="button" class={styles.headerNavBtn} onclick={() => this.prevMonth()} aria-label="前の月">‹</button>
					<span
						class={styles.headerTitle}
						onclick={() => {
							const up = viewUp("day", maxView);
							if (up) {
								this.currentView = up;
								attrs.onViewChange?.({ view: up });
							}
						}}
					>{monthName}</span>
					<button type="button" class={styles.headerNavBtn} onclick={() => this.nextMonth()} aria-label="次の月">›</button>
				</div>
			);
		} else if (this.currentView === "month") {
			return (
				<div class={styles.header} data-part="header">
					<button type="button" class={styles.headerNavBtn} onclick={() => this.prevYear()} aria-label="前の年">‹</button>
					<span
						class={styles.headerTitle}
						onclick={() => {
							const up = viewUp("month", maxView);
							if (up) {
								this.currentView = up;
								attrs.onViewChange?.({ view: up });
							}
						}}
					>{this.focusedYear}年</span>
					<button type="button" class={styles.headerNavBtn} onclick={() => this.nextYear()} aria-label="次の年">›</button>
				</div>
			);
		} else {
			// year view
			const decadeStart = Math.floor(this.focusedYear / 10) * 10;
			return (
				<div class={styles.header} data-part="header">
					<button type="button" class={styles.headerNavBtn} onclick={() => this.prevDecade()} aria-label="前の10年">‹</button>
					<span class={styles.headerTitle}>{decadeStart} – {decadeStart + 9}</span>
					<button type="button" class={styles.headerNavBtn} onclick={() => this.nextDecade()} aria-label="次の10年">›</button>
				</div>
			);
		}
	}

	// --- 描画: DayTable ---
	private renderDayTable(attrs: DatePickerRootAttrs, monthOffset = 0): m.Children {
		const locale = attrs.locale ?? "ja-JP";
		const startOfWeek = attrs.startOfWeek ?? 0;
		const fixedWeeks = attrs.fixedWeeks ?? false;
		const hideOutside = attrs.hideOutsideDays ?? false;

		const year = this.focusedYear;
		let month = this.focusedMonth + monthOffset;
		let adjustedYear = year;
		if (month > 11) { month -= 12; adjustedYear++; }
		if (month < 0) { month += 12; adjustedYear--; }

		const weeks = buildDayGrid(adjustedYear, month, startOfWeek, fixedWeeks);
		const headers = weekdayHeaders(locale, startOfWeek);
		const mode = attrs.selectionMode ?? "single";

		return (
			<table class={styles.table} data-part="day-table">
				<thead>
					<tr>{headers.map(h => <th>{h}</th>)}</tr>
				</thead>
				<tbody>
					{weeks.map(week => (
						<tr>
							{week.map(date => {
								const isOutside = date.getMonth() !== month;
								if (hideOutside && isOutside) {
									return <td class={styles.cell}></td>;
								}
								return (
									<td class={styles.cell}>
										<button
											type="button"
											class={this.getCellClass(date, attrs, isOutside)}
											onclick={() => this.selectDate(date, attrs)}
											onmouseenter={() => {
												if (mode === "range") {
													this.rangeHoverDate = date;
												}
											}}
											disabled={this.isDateDisabled(date, attrs) || !!attrs.isDateUnavailable?.(date)}
										>
											{date.getDate()}
										</button>
									</td>
								);
							})}
						</tr>
					))}
				</tbody>
			</table>
		);
	}

	// --- 描画: MonthTable ---
	private renderMonthTable(attrs: DatePickerRootAttrs): m.Children {
		const locale = attrs.locale ?? "ja-JP";
		const months: string[] = [];
		for (let i = 0; i < 12; i++) {
			months.push(new Date(2024, i).toLocaleDateString(locale, { month: "short" }));
		}
		const rows: m.Children[] = [];
		for (let r = 0; r < 3; r++) {
			const cells: m.Children[] = [];
			for (let c = 0; c < 4; c++) {
				const mi = r * 4 + c;
				const isSelected = this.selectedDates.some(d => d.getMonth() === mi && d.getFullYear() === this.focusedYear);
				const isCurrent = new Date().getMonth() === mi && new Date().getFullYear() === this.focusedYear;
				const cls = [styles.cellBtnMonth];
				if (isSelected) cls.push(styles.cellSelected);
				if (isCurrent) cls.push(styles.cellToday);
				cells.push(
					<td class={styles.cell}>
						<button type="button" class={cls.join(" ")} onclick={() => this.selectMonth(mi, attrs)}>
							{months[mi]}
						</button>
					</td>
				);
			}
			rows.push(<tr>{cells}</tr>);
		}
		return (
			<table class={styles.table} data-part="month-table">
				<tbody>{rows}</tbody>
			</table>
		);
	}

	// --- 描画: YearTable ---
	private renderYearTable(attrs: DatePickerRootAttrs): m.Children {
		const decadeStart = Math.floor(this.focusedYear / 10) * 10;
		const years: number[] = [];
		for (let i = decadeStart - 1; i <= decadeStart + 10; i++) {
			years.push(i);
		}
		const rows: m.Children[] = [];
		for (let r = 0; r < 3; r++) {
			const cells: m.Children[] = [];
			for (let c = 0; c < 4; c++) {
				const idx = r * 4 + c;
				if (idx >= years.length) break;
				const yr = years[idx];
				const isOutside = yr < decadeStart || yr > decadeStart + 9;
				const isSelected = this.selectedDates.some(d => d.getFullYear() === yr);
				const isCurrent = new Date().getFullYear() === yr;
				const cls = [styles.cellBtnYear];
				if (isSelected) cls.push(styles.cellSelected);
				if (isCurrent) cls.push(styles.cellToday);
				if (isOutside) cls.push(styles.cellOutside);
				cells.push(
					<td class={styles.cell}>
						<button type="button" class={cls.join(" ")} onclick={() => this.selectYear(yr, attrs)}>
							{yr}
						</button>
					</td>
				);
			}
			rows.push(<tr>{cells}</tr>);
		}
		return (
			<table class={styles.table} data-part="year-table">
				<tbody>{rows}</tbody>
			</table>
		);
	}

	// --- 子要素の再帰的描画 ---
	private renderChildren(children: m.Children, attrs: DatePickerRootAttrs): m.Children {
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

	private renderChild(child: m.Vnode, attrs: DatePickerRootAttrs): m.Children {
		const tag = child.tag as any;
		if (!tag || !tag.__dpRole) {
			// 通常の VNode — 子があれば再帰
			if (child.children) {
				return {
					...child,
					children: this.renderChildren(child.children as m.Children, attrs),
				} as any;
			}
			return child;
		}

		const role: DPRole = tag.__dpRole;
		const childAttrs = (child.attrs ?? {}) as any;
		const childChildren = child.children as m.Children;

		switch (role) {
			case "label":
				return <span class={`${styles.label} ${childAttrs.class ?? ""}`} data-part="label">{childChildren}</span>;

			case "control":
				return (
					<div
						class={`${styles.control} ${attrs.disabled ? styles.controlDisabled : ""} ${childAttrs.class ?? ""}`}
						data-part="control"
					>
						{this.renderChildren(childChildren, attrs)}
					</div>
				);

			case "input": {
				const isRange = (attrs.selectionMode ?? "single") === "range";
				const placeholder = childAttrs.placeholder ?? attrs.placeholder ?? "日付を選択";
				if (isRange) {
					const parts = this.inputText.split(" – ");
					return [(
						<input
							class={`${styles.input} ${styles.inputRange} ${childAttrs.class ?? ""}`}
							data-part="input"
							value={parts[0] ?? ""}
							placeholder="開始日"
							readonly={attrs.readOnly}
							onfocus={() => { if (!attrs.inline) this.setOpen(true, attrs); }}
							oninput={(e: Event) => this.handleInputChange((e.target as HTMLInputElement).value, attrs)}
						/>
					), (
						<span class={styles.rangeSeparator}>–</span>
					), (
						<input
							class={`${styles.input} ${styles.inputRange} ${childAttrs.class ?? ""}`}
							data-part="input"
							value={parts[1] ?? ""}
							placeholder="終了日"
							readonly={attrs.readOnly}
							onfocus={() => { if (!attrs.inline) this.setOpen(true, attrs); }}
						/>
					)];
				}
				return (
					<input
						class={`${styles.input} ${childAttrs.class ?? ""}`}
						data-part="input"
						value={this.inputText}
						placeholder={placeholder}
						readonly={attrs.readOnly}
						name={attrs.name}
						onfocus={() => { if (!attrs.inline) this.setOpen(true, attrs); }}
						oninput={(e: Event) => this.handleInputChange((e.target as HTMLInputElement).value, attrs)}
					/>
				);
			}

			case "indicatorGroup":
				return <span class={`${styles.indicatorGroup} ${childAttrs.class ?? ""}`} data-part="indicator-group">{this.renderChildren(childChildren, attrs)}</span>;

			case "trigger":
				return (
					<button
						type="button"
						class={`${styles.trigger} ${childAttrs.class ?? ""}`}
						data-part="trigger"
						onclick={() => this.toggleOpen(attrs)}
						disabled={attrs.disabled}
						aria-label="カレンダーを開く"
					>
						{childChildren && (childChildren as any[]).length > 0 ? childChildren : "📅"}
					</button>
				);

			case "clearTrigger":
				if (this.selectedDates.length === 0) return null;
				return (
					<button
						type="button"
						class={`${styles.clearTrigger} ${childAttrs.class ?? ""}`}
						data-part="clear-trigger"
						onclick={() => this.clearSelection(attrs)}
						aria-label="選択をクリア"
					>
						{childChildren && (childChildren as any[]).length > 0 ? childChildren : "✕"}
					</button>
				);

			case "positioner":
				if (attrs.inline) {
					// inline モード: Positioner は不要
					return this.renderChildren(childChildren, attrs);
				}
				if (!this.isOpen) return null;
				return (
					<div class={`${styles.positioner} ${childAttrs.class ?? ""}`} data-part="positioner">
						{this.renderChildren(childChildren, attrs)}
					</div>
				);

			case "content": {
				const isInline = attrs.inline ?? false;
				const numMonths = attrs.numOfMonths ?? 1;
				const contentClass = `${styles.content} ${isInline ? styles.contentInline : ""} ${childAttrs.class ?? ""}`;

				if (numMonths > 1 && this.currentView === "day") {
					return (
						<div class={contentClass} data-part="content">
							<div class={styles.multiMonth}>
								{Array.from({ length: numMonths }, (_, i) => (
									<div>
										{i === 0 ? this.renderHeader(attrs) : this.renderMonthHeader(attrs, i)}
										{this.renderDayTable(attrs, i)}
									</div>
								))}
							</div>
							{this.renderChildren(childChildren, attrs)}
						</div>
					);
				}

				return (
					<div class={contentClass} data-part="content">
						{this.renderChildren(childChildren, attrs)}
					</div>
				);
			}

			case "view": {
				const viewAttr: DatePickerView = childAttrs.view ?? "day";
				if (viewAttr !== this.currentView) return null;
				return (
					<div data-part="view" data-view={viewAttr}>
						{this.renderChildren(childChildren, attrs)}
					</div>
				);
			}

			case "header":
				return this.renderHeader(attrs);

			case "dayTable":
				return this.renderDayTable(attrs);

			case "monthTable":
				return this.renderMonthTable(attrs);

			case "yearTable":
				return this.renderYearTable(attrs);

			case "presetTrigger": {
				const val = childAttrs.value as DatePickerPresetValue;
				return (
					<button
						type="button"
						class={`${styles.presetBtn} ${childAttrs.class ?? ""}`}
						data-part="preset-trigger"
						onclick={() => this.applyPreset(val, attrs)}
					>
						{childChildren}
					</button>
				);
			}

			default:
				return child;
		}
	}

	/** マルチ月表示用のサブヘッダー */
	private renderMonthHeader(attrs: DatePickerRootAttrs, monthOffset: number): m.Children {
		let month = this.focusedMonth + monthOffset;
		let year = this.focusedYear;
		if (month > 11) { month -= 12; year++; }
		const name = new Date(year, month).toLocaleDateString(
			attrs.locale ?? "ja-JP",
			{ year: "numeric", month: "long" }
		);
		return (
			<div class={styles.header} data-part="header">
				<span class={styles.headerTitle}>{name}</span>
			</div>
		);
	}

	// --- view() ---
	view(vnode: m.Vnode<DatePickerRootAttrs>) {
		const attrs = vnode.attrs;
		const isInline = attrs.inline ?? false;
		const size = attrs.size ?? "md";
		const sizeClass = size === "sm" ? styles.sizeSm : size === "lg" ? styles.sizeLg : styles.sizeMd;

		const rootClass = [
			styles.root,
			isInline ? styles.rootInline : "",
			sizeClass,
			attrs.class ?? "",
		].filter(Boolean).join(" ");

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
 * DatePicker — Chakra UI 風の compound component DatePicker。
 *
 * @example
 * ```tsx
 * <DatePicker.Root>
 *   <DatePicker.Label>日付</DatePicker.Label>
 *   <DatePicker.Control>
 *     <DatePicker.Input />
 *     <DatePicker.IndicatorGroup>
 *       <DatePicker.Trigger />
 *     </DatePicker.IndicatorGroup>
 *   </DatePicker.Control>
 *   <Portal>
 *     <DatePicker.Positioner>
 *       <DatePicker.Content>
 *         <DatePicker.View view="day">
 *           <DatePicker.Header />
 *           <DatePicker.DayTable />
 *         </DatePicker.View>
 *         <DatePicker.View view="month">
 *           <DatePicker.Header />
 *           <DatePicker.MonthTable />
 *         </DatePicker.View>
 *         <DatePicker.View view="year">
 *           <DatePicker.Header />
 *           <DatePicker.YearTable />
 *         </DatePicker.View>
 *       </DatePicker.Content>
 *     </DatePicker.Positioner>
 *   </Portal>
 * </DatePicker.Root>
 * ```
 */
export const DatePicker = {
	Root: DatePickerRoot,
	Label: DPLabelMarker,
	Control: DPControlMarker,
	Input: DPInputMarker,
	IndicatorGroup: DPIndicatorGroupMarker,
	Trigger: DPTriggerMarker,
	ClearTrigger: DPClearTriggerMarker,
	Positioner: DPPositionerMarker,
	Content: DPContentMarker,
	View: DPViewMarker,
	Header: DPHeaderMarker,
	DayTable: DPDayTableMarker,
	MonthTable: DPMonthTableMarker,
	YearTable: DPYearTableMarker,
	PresetTrigger: DPPresetTriggerMarker,
};
