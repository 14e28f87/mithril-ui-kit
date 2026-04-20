/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import "./DatePickerClassic.scss";

/**
 * @typedef {"date"|"week"|"month"|"quarter"|"year"} DatePickerClassicMode
 * @description DatePicker の選択モーチE
 */
export type DatePickerClassicMode = "date" | "week" | "month" | "quarter" | "year";

/**
 * @typedef {Date|string|null} DatePickerClassicValue
 * @description 単一選択時の値
 */
export type DatePickerClassicValue = Date | string | null;

/**
 * @typedef {[Date|string|null, Date|string|null]|null} DatePickerClassicRangeValue
 * @description 篁E��選択時の値
 */
export type DatePickerClassicRangeValue = [Date | string | null, Date | string | null] | null;

/**
 * @typedef {DatePickerClassicValue|DatePickerClassicRangeValue} DatePickerClassicEmitValue
 * @description oninput / onCalendarChange で返却される値
 */
export type DatePickerClassicEmitValue = DatePickerClassicValue | DatePickerClassicRangeValue;

/**
 * @typedef {Object} DatePickerClassicTimeDisabled
 * @description 時刻選択を無効化するため�E設宁E
 */
export type DatePickerClassicTimeDisabled = {
	disabledHours?: () => number[];
	disabledMinutes?: (hour: number) => number[];
	disabledSeconds?: (hour: number, minute: number) => number[];
};

/**
 * @typedef {Object} DatePickerClassicPreset
 * @property {m.Children} label - プリセチE��表示ラベル
 * @property {Date|[Date,Date]|(() => Date|[Date,Date])} value - プリセチE��値
 */
export type DatePickerClassicPreset = {
	label: m.Children;
	value: Date | [Date, Date] | (() => Date | [Date, Date]);
};

/**
 * @typedef {Object} DatePickerClassicAttrs
 * @description DatePicker コンポ�Eネント属性
 */
export type DatePickerClassicAttrs = {
	value?: DatePickerClassicEmitValue;
	oninput?: (value: DatePickerClassicEmitValue) => void;
	onblur?: () => void;
	picker?: DatePickerClassicMode;
	range?: boolean;
	/**
	 * 表示するカレンダーパネル数�E�デフォルチE 1�E�E
	 * - `panelCount={2}` を指定すると 2 カ月表示
	 */
	panelCount?: number;
	showTime?: boolean;
	allowClear?: boolean;
	disabled?: boolean;
	placeholder?: string | [string, string];
	format?: string;
	valueFormat?: string;
	separator?: string;
	class?: string;
	style?: Record<string, string>;
	popupClass?: string;
	popupStyle?: Record<string, string>;
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
	onPanelChange?: (panelDate: Date, picker: DatePickerClassicMode) => void;
	onCalendarChange?: (value: DatePickerClassicEmitValue) => void;
	disabledDate?: (date: Date) => boolean;
	disabledTime?: (date: Date | null) => DatePickerClassicTimeDisabled;
	presets?: DatePickerClassicPreset[];
	locale?: string;
};

type InternalRangeValue = [Date | null, Date | null];
type RangePart = "start" | "end";

type CalendarCell = {
	date: Date;
	label: string;
	outside: boolean;
};

/**
 * @class DatePickerClassic
 * @description
 * Ant Design の DatePicker の API 体験を参老E��した Mithril 用 DatePicker�E�レガシー�E�、E
 * Bootstrap5 系のト�Eンで表示し、単体選択�E期間選択�E日時選択に対応します、E
 */
export class DatePickerClassic implements m.Component<DatePickerClassicAttrs> {
	/** パネルの表示基準日 */
	private panelDate = new Date();
	/** 開閉状態（非制御モード時�E�E*/
	private internalOpen = false;
	/** range モードで現在編雁E��の側 */
	private rangePart: RangePart = "start";
	/** range モードで終亁E��の hover プレビュー対象 */
	private hoverDate: Date | null = null;
	/** ルート要素 */
	private rootElement?: HTMLElement;
	/** ポップアチE�E要素 */
	private popupElement?: HTMLElement;
	/** 直迁Eattrs */
	private lastAttrs: DatePickerClassicAttrs = {};
	/** 値変化を判定するため�E直近シグネチャ */
	private lastValueSignature = "";
	/** 直近�E開閉状慁E*/
	private lastOpenState = false;

	/**
	 * @method oninit
	 * @description 初期化時に panelDate を同朁E
	 */
	oninit(vnode: m.Vnode<DatePickerClassicAttrs>) {
		this.lastAttrs = vnode.attrs;
		this.syncPanelDate(vnode.attrs);
		this.lastValueSignature = this.createValueSignature(vnode.attrs);
		this.lastOpenState = this.isOpen(vnode.attrs);
	}

	/**
	 * @method onbeforeupdate
	 * @description attrs 変更時に panelDate と開閉制御モードを同期
	 */
	onbeforeupdate(vnode: m.Vnode<DatePickerClassicAttrs>) {
		this.lastAttrs = vnode.attrs;
		const nextOpen = typeof vnode.attrs.open === "boolean" ? vnode.attrs.open : this.internalOpen;
		const nextValueSignature = this.createValueSignature(vnode.attrs);
		if (nextValueSignature !== this.lastValueSignature || (!this.lastOpenState && nextOpen)) {
			this.syncPanelDate(vnode.attrs);
		}
		this.lastValueSignature = nextValueSignature;
		this.lastOpenState = nextOpen;
		if (typeof vnode.attrs.open === "boolean") {
			this.internalOpen = vnode.attrs.open;
		}
	}

	/**
	 * @method oncreate
	 * @description 外�EクリチE��で閉じるため�Eイベントを登録
	 */
	oncreate() {
		document.addEventListener("mousedown", this.handleDocumentMouseDown, true);
	}

	/**
	 * @method onremove
	 * @description 後片付け
	 */
	onremove() {
		document.removeEventListener("mousedown", this.handleDocumentMouseDown, true);
		this.rootElement = undefined;
		this.popupElement = undefined;
	}

	/**
	 * @method handleDocumentMouseDown
	 * @description コンポ�Eネント外クリチE��時にポップアチE�Eを閉じる
	 */
	private handleDocumentMouseDown = (event: MouseEvent) => {
		const targetNode = event.target as Node | null;
		if (!targetNode) return;
		if (this.rootElement?.contains(targetNode)) return;
		if (this.popupElement?.contains(targetNode)) return;
		this.setOpen(false, this.lastAttrs);
		m.redraw();
	};

	private getPicker(attrs: DatePickerClassicAttrs): DatePickerClassicMode {
		return attrs.picker ?? "date";
	}

	private getLocale(attrs: DatePickerClassicAttrs): string {
		return attrs.locale ?? "ja-JP";
	}

	private getDisplayFormat(attrs: DatePickerClassicAttrs): string {
		if (attrs.format) return attrs.format;
		const pickerMode = this.getPicker(attrs);
		if (pickerMode === "month") return "YYYY-MM";
		if (pickerMode === "quarter") return "YYYY-[Q]Q";
		if (pickerMode === "year") return "YYYY";
		if (pickerMode === "week") return "YYYY-[W]WW";
		if (attrs.showTime) return "YYYY-MM-DD HH:mm:ss";
		return "YYYY-MM-DD";
	}

	private setOpen(nextOpen: boolean, attrs: DatePickerClassicAttrs) {
		if (typeof attrs.open !== "boolean") {
			this.internalOpen = nextOpen;
		}
		if (!nextOpen) {
			this.rangePart = "start";
			this.hoverDate = null;
		}
		attrs.onOpenChange?.(nextOpen);
	}

	private isOpen(attrs: DatePickerClassicAttrs): boolean {
		return typeof attrs.open === "boolean" ? attrs.open : this.internalOpen;
	}

	private createValueSignature(attrs: DatePickerClassicAttrs): string {
		if (attrs.range) {
			const [startValue, endValue] = this.normalizeRangeValue(attrs);
			return `r:${startValue ? startValue.getTime() : "null"}:${endValue ? endValue.getTime() : "null"}`;
		}
		const value = this.normalizeValue(attrs);
		return `s:${value ? value.getTime() : "null"}`;
	}

	private parseAnyDate(input: Date | string | null | undefined): Date | null {
		if (!input) return null;
		if (input instanceof Date) {
			if (Number.isNaN(input.getTime())) return null;
			return new Date(input.getTime());
		}
		const parsedDate = new Date(input);
		if (Number.isNaN(parsedDate.getTime())) return null;
		return parsedDate;
	}

	private normalizeValue(attrs: DatePickerClassicAttrs): Date | null {
		return this.parseAnyDate(attrs.value as DatePickerClassicValue);
	}

	private normalizeRangeValue(attrs: DatePickerClassicAttrs): InternalRangeValue {
		if (!attrs.range) return [null, null];
		if (!Array.isArray(attrs.value)) return [null, null];
		const [startValue, endValue] = attrs.value;
		return [this.parseAnyDate(startValue), this.parseAnyDate(endValue)];
	}

	private syncPanelDate(attrs: DatePickerClassicAttrs) {
		const singleValue = this.normalizeValue(attrs);
		const [rangeStart] = this.normalizeRangeValue(attrs);
		const baseDate = singleValue ?? rangeStart;
		if (baseDate) {
			this.panelDate = new Date(baseDate.getTime());
		}
	}

	private pad(value: number, width = 2): string {
		return String(value).padStart(width, "0");
	}

	private getQuarter(date: Date): number {
		return Math.floor(date.getMonth() / 3) + 1;
	}

	private getWeekStart(date: Date): Date {
		const startDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
		const dayOfWeek = startDate.getDay();
		const offset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
		startDate.setDate(startDate.getDate() + offset);
		return startDate;
	}

	private getWeekNumber(date: Date): number {
		const targetDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
		targetDate.setHours(0, 0, 0, 0);
		targetDate.setDate(targetDate.getDate() + 3 - ((targetDate.getDay() + 6) % 7));
		const weekOne = new Date(targetDate.getFullYear(), 0, 4);
		return 1 + Math.round(((targetDate.getTime() - weekOne.getTime()) / 86400000 - 3 + ((weekOne.getDay() + 6) % 7)) / 7);
	}

	private formatDate(date: Date, format: string): string {
		const year = date.getFullYear();
		const month = date.getMonth() + 1;
		const day = date.getDate();
		const hour = date.getHours();
		const minute = date.getMinutes();
		const second = date.getSeconds();
		const quarter = this.getQuarter(date);
		const weekNumber = this.getWeekNumber(date);

		const literals: string[] = [];
		const tokenizedFormat = format.replace(/\[([^\]]+)\]/g, (_, rawLiteral) => {
			const literalIndex = literals.push(String(rawLiteral)) - 1;
			return `__LITERAL_${literalIndex}__`;
		});

		const formatted = tokenizedFormat
			.replace(/YYYY/g, String(year))
			.replace(/MM/g, this.pad(month))
			.replace(/DD/g, this.pad(day))
			.replace(/HH/g, this.pad(hour))
			.replace(/mm/g, this.pad(minute))
			.replace(/ss/g, this.pad(second))
			.replace(/Q/g, String(quarter))
			.replace(/WW/g, this.pad(weekNumber));

		return formatted.replace(/__LITERAL_(\d+)__/g, (_, literalIndex) => literals[Number(literalIndex)] ?? "");
	}

	private emitValue(attrs: DatePickerClassicAttrs, value: Date | null): DatePickerClassicValue {
		if (!value) return null;
		if (attrs.valueFormat) return this.formatDate(value, attrs.valueFormat);
		return value;
	}

	private emitRangeValue(attrs: DatePickerClassicAttrs, value: InternalRangeValue): DatePickerClassicRangeValue {
		if (!value[0] && !value[1]) return null;
		return [this.emitValue(attrs, value[0]), this.emitValue(attrs, value[1])];
	}

	private isSameDate(leftDate: Date | null, rightDate: Date | null): boolean {
		if (!leftDate || !rightDate) return false;
		return (
			leftDate.getFullYear() === rightDate.getFullYear()
			&& leftDate.getMonth() === rightDate.getMonth()
			&& leftDate.getDate() === rightDate.getDate()
		);
	}

	private isSameMonth(leftDate: Date | null, rightDate: Date | null): boolean {
		if (!leftDate || !rightDate) return false;
		return leftDate.getFullYear() === rightDate.getFullYear() && leftDate.getMonth() === rightDate.getMonth();
	}

	private isSameYear(leftDate: Date | null, rightDate: Date | null): boolean {
		if (!leftDate || !rightDate) return false;
		return leftDate.getFullYear() === rightDate.getFullYear();
	}

	private isSameQuarter(leftDate: Date | null, rightDate: Date | null): boolean {
		if (!leftDate || !rightDate) return false;
		return leftDate.getFullYear() === rightDate.getFullYear() && this.getQuarter(leftDate) === this.getQuarter(rightDate);
	}

	private isInRange(date: Date, rangeValue: InternalRangeValue): boolean {
		const [rangeStart, rangeEnd] = rangeValue;
		if (!rangeStart || !rangeEnd) return false;
		const currentTime = date.getTime();
		return currentTime > rangeStart.getTime() && currentTime < rangeEnd.getTime();
	}

	private isInHoverRange(date: Date, attrs: DatePickerClassicAttrs): boolean {
		if (!attrs.range) return false;
		if (this.rangePart !== "end") return false;
		const [rangeStart, rangeEnd] = this.normalizeRangeValue(attrs);
		if (!rangeStart || rangeEnd) return false;
		if (!this.hoverDate) return false;
		const startTime = rangeStart.getTime();
		const hoverTime = this.hoverDate.getTime();
		const min = Math.min(startTime, hoverTime);
		const max = Math.max(startTime, hoverTime);
		const current = date.getTime();
		return current > min && current < max;
	}

	private isDisabledDate(attrs: DatePickerClassicAttrs, date: Date): boolean {
		return !!attrs.disabledDate?.(new Date(date.getTime()));
	}

	private isDisabledTime(attrs: DatePickerClassicAttrs, date: Date): boolean {
		if (!attrs.showTime || !attrs.disabledTime) return false;
		const disabledConfig = attrs.disabledTime(date);
		const hour = date.getHours();
		const minute = date.getMinutes();
		const second = date.getSeconds();
		if (disabledConfig.disabledHours?.().includes(hour)) return true;
		if (disabledConfig.disabledMinutes?.(hour).includes(minute)) return true;
		if (disabledConfig.disabledSeconds?.(hour, minute).includes(second)) return true;
		return false;
	}

	private isDisabled(attrs: DatePickerClassicAttrs, date: Date): boolean {
		return this.isDisabledDate(attrs, date) || this.isDisabledTime(attrs, date);
	}

	private getDateCells(panelDate: Date): CalendarCell[] {
		const firstDay = new Date(panelDate.getFullYear(), panelDate.getMonth(), 1);
		const startDate = this.getWeekStart(firstDay);
		const cells: CalendarCell[] = [];
		for (let index = 0; index < 42; index += 1) {
			const cellDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + index);
			cells.push({
				date: cellDate,
				label: String(cellDate.getDate()),
				outside: cellDate.getMonth() !== panelDate.getMonth(),
			});
		}
		return cells;
	}

	private shiftPanel(attrs: DatePickerClassicAttrs, delta: number) {
		const pickerMode = this.getPicker(attrs);
		const nextDate = new Date(this.panelDate.getTime());
		if (pickerMode === "year") nextDate.setFullYear(nextDate.getFullYear() + 12 * delta);
		else if (pickerMode === "month" || pickerMode === "quarter") nextDate.setFullYear(nextDate.getFullYear() + delta);
		else nextDate.setMonth(nextDate.getMonth() + delta);

		this.panelDate = nextDate;
		attrs.onPanelChange?.(new Date(this.panelDate.getTime()), pickerMode);
	}

	private applySelection(attrs: DatePickerClassicAttrs, selectedDate: Date) {
		if (attrs.range) {
			const [rangeStart, rangeEnd] = this.normalizeRangeValue(attrs);
			if (this.rangePart === "start") {
				const nextValue: InternalRangeValue = [selectedDate, null];
				attrs.onCalendarChange?.(this.emitRangeValue(attrs, nextValue));
				attrs.oninput?.(this.emitRangeValue(attrs, nextValue));
				this.rangePart = "end";
				this.hoverDate = null;
				return;
			}

			let nextStart = rangeStart;
			let nextEnd = selectedDate;
			if (!nextStart || selectedDate.getTime() < nextStart.getTime()) {
				nextEnd = nextStart ?? selectedDate;
				nextStart = selectedDate;
			}

			const nextValue: InternalRangeValue = [nextStart ?? null, nextEnd ?? null];
			attrs.onCalendarChange?.(this.emitRangeValue(attrs, nextValue));
			attrs.oninput?.(this.emitRangeValue(attrs, nextValue));
			this.rangePart = "start";
			this.hoverDate = null;
			this.setOpen(false, attrs);
			return;
		}

		const emitted = this.emitValue(attrs, selectedDate);
		attrs.onCalendarChange?.(emitted);
		attrs.oninput?.(emitted);
		this.hoverDate = null;
		this.setOpen(false, attrs);
	}

	private updateTimePart(attrs: DatePickerClassicAttrs, part: "hour" | "minute" | "second", value: number, rangeSide?: RangePart) {
		if (attrs.range) {
			const current = this.normalizeRangeValue(attrs);
			const index = rangeSide === "end" ? 1 : 0;
			const baseDate = current[index] ?? new Date(this.panelDate.getTime());
			const nextDate = new Date(baseDate.getTime());
			if (part === "hour") nextDate.setHours(value);
			if (part === "minute") nextDate.setMinutes(value);
			if (part === "second") nextDate.setSeconds(value);
			current[index] = nextDate;
			attrs.onCalendarChange?.(this.emitRangeValue(attrs, current));
			attrs.oninput?.(this.emitRangeValue(attrs, current));
			return;
		}

		const baseDate = this.normalizeValue(attrs) ?? new Date(this.panelDate.getTime());
		const nextDate = new Date(baseDate.getTime());
		if (part === "hour") nextDate.setHours(value);
		if (part === "minute") nextDate.setMinutes(value);
		if (part === "second") nextDate.setSeconds(value);
		attrs.onCalendarChange?.(this.emitValue(attrs, nextDate));
		attrs.oninput?.(this.emitValue(attrs, nextDate));
	}

	/**
	 * @method getTimePartValue
	 * @description Date から時�E刁E�E秒いずれか�E値を取征E
	 */
	private getTimePartValue(baseDate: Date, part: "hour" | "minute" | "second"): number {
		if (part === "hour") return baseDate.getHours();
		if (part === "minute") return baseDate.getMinutes();
		return baseDate.getSeconds();
	}

	/**
	 * @method isTimeOptionDisabled
	 * @description disabledTime 設定を允E��、時刻候補が無効か判宁E
	 */
	private isTimeOptionDisabled(
		attrs: DatePickerClassicAttrs,
		part: "hour" | "minute" | "second",
		optionValue: number,
		selectedDate: Date,
	): boolean {
		const disabledConfig = attrs.disabledTime?.(selectedDate);
		const selectedHour = selectedDate.getHours();
		const selectedMinute = selectedDate.getMinutes();
		if (part === "hour") return disabledConfig?.disabledHours?.().includes(optionValue) ?? false;
		if (part === "minute") return disabledConfig?.disabledMinutes?.(selectedHour).includes(optionValue) ?? false;
		return disabledConfig?.disabledSeconds?.(selectedHour, selectedMinute).includes(optionValue) ?? false;
	}

	/**
	 * @method renderTimeColumn
	 * @description スクロール可能な時刻カラム�E�時/刁E秒）を描画
	 */
	private renderTimeColumn(attrs: DatePickerClassicAttrs, part: "hour" | "minute" | "second", selectedDate: Date | null, rangeSide?: RangePart) {
		const baseDate = selectedDate ?? new Date(this.panelDate.getTime());
		const max = part === "hour" ? 24 : 60;
		const values = Array.from({ length: max }).map((_, value) => value);
		const currentValue = this.getTimePartValue(baseDate, part);
		const labelMap: Record<"hour" | "minute" | "second", string> = {
			hour: "時",
			minute: "分",
			second: "秒",
		};

		return (
			<div class="mku-date-picker-time-column-wrap">
				<div class="mku-date-picker-time-column-label">{labelMap[part]}</div>
				<ul class="mku-date-picker-time-column">
					{values.map((value) => {
						const disabled = this.isTimeOptionDisabled(attrs, part, value, baseDate);
						return (
							<li
								class={classNames("mku-date-picker-time-option-item", {
									"is-active": value === currentValue,
									"is-disabled": disabled,
								})}
							>
								<button
									type="button"
									class="mku-date-picker-time-option"
									disabled={disabled}
									onclick={() => this.updateTimePart(attrs, part, value, rangeSide)}
								>
									{this.pad(value)}
								</button>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}

	/**
	 * @method renderTimePanel
	 * @description 右側の時刻選択パネルを描画
	 */
	private renderTimePanel(attrs: DatePickerClassicAttrs, selectedDate: Date | null, rangeSide?: RangePart, title?: string) {
		return (
			<div class="mku-date-picker-time-panel">
				{title && <div class="mku-date-picker-time-title">{title}</div>}
				<div class="mku-date-picker-time-columns">
					{this.renderTimeColumn(attrs, "hour", selectedDate, rangeSide)}
					{this.renderTimeColumn(attrs, "minute", selectedDate, rangeSide)}
					{this.renderTimeColumn(attrs, "second", selectedDate, rangeSide)}
				</div>
			</div>
		);
	}

	private getPanelTitle(attrs: DatePickerClassicAttrs, panelDate: Date): string {
		const pickerMode = this.getPicker(attrs);
		if (pickerMode === "year") {
			const startYear = Math.floor(panelDate.getFullYear() / 12) * 12;
			return `${startYear} - ${startYear + 11}`;
		}
		if (pickerMode === "month" || pickerMode === "quarter") {
			return String(panelDate.getFullYear());
		}
		return `${panelDate.getFullYear()} / ${this.pad(panelDate.getMonth() + 1)}`;
	}

	private renderDateGrid(attrs: DatePickerClassicAttrs, panelDate: Date) {
		const singleValue = this.normalizeValue(attrs);
		const rangeValue = this.normalizeRangeValue(attrs);
		const cells = this.getDateCells(panelDate);
		const today = new Date();
		const pickerMode = this.getPicker(attrs);

		return (
			<div class="mku-date-picker-grid date">
				{["月", "火", "水", "木", "金", "土", "日"].map((weekdayLabel) => (
					<div class="mku-date-picker-weekday">{weekdayLabel}</div>
				))}
				{cells.map((cell) => {
					const hoverInRange = this.isInHoverRange(cell.date, attrs);
					const selected = attrs.range
						? this.isSameDate(cell.date, rangeValue[0]) || this.isSameDate(cell.date, rangeValue[1])
						: this.isSameDate(cell.date, singleValue);
					const inRange = attrs.range ? this.isInRange(cell.date, rangeValue) : false;
					const disabled = this.isDisabled(attrs, cell.date);
					const isToday = this.isSameDate(cell.date, today);
					const weekLabel = pickerMode === "week" ? `W${this.pad(this.getWeekNumber(cell.date))}` : "";

					return (
						<button
							type="button"
							class={classNames("mku-date-picker-cell", {
								"is-muted": cell.outside,
								"is-selected": selected,
								"is-in-range": inRange,
								"is-in-hover-range": hoverInRange,
								"is-disabled": disabled,
								"is-today": isToday,
							})}
							disabled={disabled}
							onmouseenter={() => {
								if (!attrs.range || this.rangePart !== "end") return;
								if (disabled) return;
								this.hoverDate = new Date(cell.date.getTime());
							}}
							onmouseleave={() => {
								if (!attrs.range || this.rangePart !== "end") return;
								this.hoverDate = null;
							}}
							onclick={() => {
								const pickedDate = pickerMode === "week" ? this.getWeekStart(cell.date) : cell.date;
								if (this.isDisabled(attrs, pickedDate)) return;
								this.applySelection(attrs, pickedDate);
							}}
						>
							{pickerMode === "week" ? `${weekLabel} ${cell.label}` : cell.label}
						</button>
					);
				})}
			</div>
		);
	}

	private renderMonthGrid(attrs: DatePickerClassicAttrs, panelDate: Date) {
		const singleValue = this.normalizeValue(attrs);
		const rangeValue = this.normalizeRangeValue(attrs);
		const locale = this.getLocale(attrs);
		const labels = Array.from({ length: 12 }).map((_, monthIndex) => new Date(panelDate.getFullYear(), monthIndex, 1).toLocaleString(locale, { month: "short" }));

		return (
			<div class="mku-date-picker-grid month">
				{labels.map((label, monthIndex) => {
					const date = new Date(panelDate.getFullYear(), monthIndex, 1);
					const selected = attrs.range
						? this.isSameMonth(date, rangeValue[0]) || this.isSameMonth(date, rangeValue[1])
						: this.isSameMonth(date, singleValue);
					const inRange = attrs.range ? this.isInRange(date, rangeValue) : false;
					const disabled = this.isDisabledDate(attrs, date);

					return (
						<button
							type="button"
							class={classNames("mku-date-picker-cell", {
								"is-selected": selected,
								"is-in-range": inRange,
								"is-disabled": disabled,
							})}
							disabled={disabled}
							onclick={() => this.applySelection(attrs, date)}
						>
							{label}
						</button>
					);
				})}
			</div>
		);
	}

	private renderQuarterGrid(attrs: DatePickerClassicAttrs, panelDate: Date) {
		const singleValue = this.normalizeValue(attrs);
		const rangeValue = this.normalizeRangeValue(attrs);
		return (
			<div class="mku-date-picker-grid quarter">
				{[1, 2, 3, 4].map((quarter) => {
					const date = new Date(panelDate.getFullYear(), (quarter - 1) * 3, 1);
					const selected = attrs.range
						? this.isSameQuarter(date, rangeValue[0]) || this.isSameQuarter(date, rangeValue[1])
						: this.isSameQuarter(date, singleValue);
					const inRange = attrs.range ? this.isInRange(date, rangeValue) : false;
					const disabled = this.isDisabledDate(attrs, date);
					return (
						<button
							type="button"
							class={classNames("mku-date-picker-cell", {
								"is-selected": selected,
								"is-in-range": inRange,
								"is-disabled": disabled,
							})}
							disabled={disabled}
							onclick={() => this.applySelection(attrs, date)}
						>
							Q{quarter}
						</button>
					);
				})}
			</div>
		);
	}

	private renderYearGrid(attrs: DatePickerClassicAttrs, panelDate: Date) {
		const singleValue = this.normalizeValue(attrs);
		const rangeValue = this.normalizeRangeValue(attrs);
		const startYear = Math.floor(panelDate.getFullYear() / 12) * 12;
		return (
			<div class="mku-date-picker-grid year">
				{Array.from({ length: 12 }).map((_, index) => {
					const year = startYear + index;
					const date = new Date(year, 0, 1);
					const selected = attrs.range
						? this.isSameYear(date, rangeValue[0]) || this.isSameYear(date, rangeValue[1])
						: this.isSameYear(date, singleValue);
					const inRange = attrs.range ? this.isInRange(date, rangeValue) : false;
					const disabled = this.isDisabledDate(attrs, date);

					return (
						<button
							type="button"
							class={classNames("mku-date-picker-cell", {
								"is-selected": selected,
								"is-in-range": inRange,
								"is-disabled": disabled,
							})}
							disabled={disabled}
							onclick={() => this.applySelection(attrs, date)}
						>
							{year}
						</button>
					);
				})}
			</div>
		);
	}

	private renderPickerGrid(attrs: DatePickerClassicAttrs, panelDate: Date) {
		const pickerMode = this.getPicker(attrs);
		if (pickerMode === "month") return this.renderMonthGrid(attrs, panelDate);
		if (pickerMode === "quarter") return this.renderQuarterGrid(attrs, panelDate);
		if (pickerMode === "year") return this.renderYearGrid(attrs, panelDate);
		return this.renderDateGrid(attrs, panelDate);
	}

	private renderPresets(attrs: DatePickerClassicAttrs) {
		if (!attrs.presets || attrs.presets.length === 0) return null;
		return (
			<div class="mku-date-picker-presets">
				{attrs.presets.map((preset) => (
					<button
						type="button"
						class="btn btn-outline-secondary btn-sm"
						onclick={() => {
							const rawValue = typeof preset.value === "function" ? preset.value() : preset.value;
							if (Array.isArray(rawValue)) {
								const nextRange: InternalRangeValue = [new Date(rawValue[0].getTime()), new Date(rawValue[1].getTime())];
								attrs.onCalendarChange?.(this.emitRangeValue(attrs, nextRange));
								attrs.oninput?.(this.emitRangeValue(attrs, nextRange));
								if (nextRange[0]) this.panelDate = new Date(nextRange[0].getTime());
							} else {
								const nextDate = new Date(rawValue.getTime());
								attrs.onCalendarChange?.(this.emitValue(attrs, nextDate));
								attrs.oninput?.(this.emitValue(attrs, nextDate));
								this.panelDate = nextDate;
							}
							this.setOpen(false, attrs);
						}}
					>
						{preset.label}
					</button>
				))}
			</div>
		);
	}

	/**
	 * @method renderPanel
	 * @description カレンダーパネル本体を描画�E�忁E��に応じて右側時刻パネルを併設�E�E
	 */
	private renderPanel(attrs: DatePickerClassicAttrs) {
		const pickerMode = this.getPicker(attrs);
		const isRange = !!attrs.range;
		const showTimePanel = attrs.showTime && pickerMode === "date";
		const panelCount = Math.max(1, Math.floor(attrs.panelCount ?? 1));
		const panelDates = Array.from({ length: panelCount }).map((_, panelIndex) => (
			new Date(this.panelDate.getFullYear(), this.panelDate.getMonth() + panelIndex, 1)
		));

		const [rangeStart, rangeEnd] = this.normalizeRangeValue(attrs);
		const singleValue = this.normalizeValue(attrs);

		return (
			<div
				class={classNames("mku-date-picker-popup", attrs.popupClass, { range: panelCount > 1, "with-time": showTimePanel })}
				style={attrs.popupStyle}
				oncreate={(vnode) => {
					this.popupElement = vnode.dom as HTMLElement;
				}}
				onremove={() => {
					this.popupElement = undefined;
				}}
			>
				<div class="mku-date-picker-panel-layout">
					<div class="mku-date-picker-popup-inner">
						{panelDates.map((panelDate, panelIndex) => (
							<div class="mku-date-picker-panel">
								<div class="mku-date-picker-header">
									<button
										type="button"
										class="mku-date-picker-header-btn"
										onclick={() => this.shiftPanel(attrs, -1)}
									>
										◀
									</button>
									<div class="mku-date-picker-header-title">{this.getPanelTitle(attrs, panelDate)}</div>
									<button
										type="button"
										class="mku-date-picker-header-btn"
										onclick={() => this.shiftPanel(attrs, 1)}
									>
										▶
									</button>
								</div>
								{isRange && panelCount > 1 && <div class="mku-date-picker-range-label">{panelIndex === 0 ? "開始日" : "終亁E��"}</div>}
								{this.renderPickerGrid(attrs, panelDate)}
							</div>
						))}
					</div>

					{showTimePanel && (
						<div class="mku-date-picker-time-layout">
							{isRange ? (
								<div class="mku-date-picker-time-range-grid">
									{this.renderTimePanel(attrs, rangeStart, "start", "開始時刻")}
									{this.renderTimePanel(attrs, rangeEnd, "end", "終亁E��刻")}
								</div>
							) : (
								this.renderTimePanel(attrs, singleValue)
							)}
						</div>
					)}
				</div>

				<div class="mku-date-picker-footer">
					{this.renderPresets(attrs)}
					<div class="d-flex gap-2">
						<button
							type="button"
							class="btn btn-outline-secondary btn-sm"
							onclick={() => {
								const now = new Date();
								if (attrs.range) {
									const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
									const endOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
									attrs.oninput?.(this.emitRangeValue(attrs, [startOfToday, endOfToday]));
									attrs.onCalendarChange?.(this.emitRangeValue(attrs, [startOfToday, endOfToday]));
								} else {
									attrs.oninput?.(this.emitValue(attrs, now));
									attrs.onCalendarChange?.(this.emitValue(attrs, now));
								}
								this.panelDate = now;
								this.setOpen(false, attrs);
							}}
						>
							今日
						</button>
						<button type="button" class="btn btn-primary btn-sm" onclick={() => this.setOpen(false, attrs)}>
							OK
						</button>
					</div>
				</div>
			</div>
		);
	}

	private getInputText(attrs: DatePickerClassicAttrs): string {
		const displayFormat = this.getDisplayFormat(attrs);
		const separator = attrs.separator ?? " ~ ";
		if (attrs.range) {
			const [startValue, endValue] = this.normalizeRangeValue(attrs);
			const startText = startValue ? this.formatDate(startValue, displayFormat) : "";
			const endText = endValue ? this.formatDate(endValue, displayFormat) : "";
			return [startText, endText].filter(Boolean).join(separator);
		}
		const singleValue = this.normalizeValue(attrs);
		return singleValue ? this.formatDate(singleValue, displayFormat) : "";
	}

	/**
	 * @method view
	 * @description DatePicker 描画
	 */
	view(vnode: m.Vnode<DatePickerClassicAttrs>) {
		const attrs = vnode.attrs;
		const opened = this.isOpen(attrs);
		const hasValue = attrs.range
			? (() => {
				const [startValue, endValue] = this.normalizeRangeValue(attrs);
				return !!startValue || !!endValue;
			})()
			: !!this.normalizeValue(attrs);

		const placeholder = Array.isArray(attrs.placeholder)
			? attrs.placeholder.join(attrs.separator ?? " ~ ")
			: attrs.placeholder ?? (attrs.range ? "期間を選択" : "日付を選択");

		return (
			<div
				class={classNames("mku-date-picker", attrs.class, { "is-disabled": attrs.disabled })}
				style={attrs.style}
				oncreate={(created) => {
					this.rootElement = created.dom as HTMLElement;
				}}
				onremove={() => {
					this.rootElement = undefined;
				}}
			>
				<input
					type="text"
					class="form-control"
					placeholder={placeholder}
					readonly
					disabled={attrs.disabled}
					value={this.getInputText(attrs)}
					onclick={() => {
						if (attrs.disabled) return;
						this.setOpen(!opened, attrs);
					}}
					onblur={() => attrs.onblur?.()}
				/>
				<div class="mku-date-picker-actions">
					{attrs.allowClear && hasValue && !attrs.disabled && (
						<button
							type="button"
							class="mku-date-picker-clear"
							onclick={(event: Event) => {
								event.preventDefault();
								event.stopPropagation();
								attrs.oninput?.(null);
								attrs.onCalendarChange?.(null);
							}}
							title="クリア"
						>
							✁E
						</button>
					)}
					<span class="mku-date-picker-icon">📅</span>
				</div>

				{opened && this.renderPanel(attrs)}
			</div>
		);
	}
}

export default DatePickerClassic;
