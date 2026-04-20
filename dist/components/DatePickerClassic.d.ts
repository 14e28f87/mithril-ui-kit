/** @jsx m */
import m from "mithril";
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
/**
 * @class DatePickerClassic
 * @description
 * Ant Design の DatePicker の API 体験を参老E��した Mithril 用 DatePicker�E�レガシー�E�、E
 * Bootstrap5 系のト�Eンで表示し、単体選択�E期間選択�E日時選択に対応します、E
 */
export declare class DatePickerClassic implements m.Component<DatePickerClassicAttrs> {
    /** パネルの表示基準日 */
    private panelDate;
    /** 開閉状態（非制御モード時�E�E*/
    private internalOpen;
    /** range モードで現在編雁E��の側 */
    private rangePart;
    /** range モードで終亁E��の hover プレビュー対象 */
    private hoverDate;
    /** ルート要素 */
    private rootElement?;
    /** ポップアチE�E要素 */
    private popupElement?;
    /** 直迁Eattrs */
    private lastAttrs;
    /** 値変化を判定するため�E直近シグネチャ */
    private lastValueSignature;
    /** 直近�E開閉状慁E*/
    private lastOpenState;
    /**
     * @method oninit
     * @description 初期化時に panelDate を同朁E
     */
    oninit(vnode: m.Vnode<DatePickerClassicAttrs>): void;
    /**
     * @method onbeforeupdate
     * @description attrs 変更時に panelDate と開閉制御モードを同期
     */
    onbeforeupdate(vnode: m.Vnode<DatePickerClassicAttrs>): void;
    /**
     * @method oncreate
     * @description 外�EクリチE��で閉じるため�Eイベントを登録
     */
    oncreate(): void;
    /**
     * @method onremove
     * @description 後片付け
     */
    onremove(): void;
    /**
     * @method handleDocumentMouseDown
     * @description コンポ�Eネント外クリチE��時にポップアチE�Eを閉じる
     */
    private handleDocumentMouseDown;
    private getPicker;
    private getLocale;
    private getDisplayFormat;
    private setOpen;
    private isOpen;
    private createValueSignature;
    private parseAnyDate;
    private normalizeValue;
    private normalizeRangeValue;
    private syncPanelDate;
    private pad;
    private getQuarter;
    private getWeekStart;
    private getWeekNumber;
    private formatDate;
    private emitValue;
    private emitRangeValue;
    private isSameDate;
    private isSameMonth;
    private isSameYear;
    private isSameQuarter;
    private isInRange;
    private isInHoverRange;
    private isDisabledDate;
    private isDisabledTime;
    private isDisabled;
    private getDateCells;
    private shiftPanel;
    private applySelection;
    private updateTimePart;
    /**
     * @method getTimePartValue
     * @description Date から時�E刁E�E秒いずれか�E値を取征E
     */
    private getTimePartValue;
    /**
     * @method isTimeOptionDisabled
     * @description disabledTime 設定を允E��、時刻候補が無効か判宁E
     */
    private isTimeOptionDisabled;
    /**
     * @method renderTimeColumn
     * @description スクロール可能な時刻カラム�E�時/刁E秒）を描画
     */
    private renderTimeColumn;
    /**
     * @method renderTimePanel
     * @description 右側の時刻選択パネルを描画
     */
    private renderTimePanel;
    private getPanelTitle;
    private renderDateGrid;
    private renderMonthGrid;
    private renderQuarterGrid;
    private renderYearGrid;
    private renderPickerGrid;
    private renderPresets;
    /**
     * @method renderPanel
     * @description カレンダーパネル本体を描画�E�忁E��に応じて右側時刻パネルを併設�E�E
     */
    private renderPanel;
    private getInputText;
    /**
     * @method view
     * @description DatePicker 描画
     */
    view(vnode: m.Vnode<DatePickerClassicAttrs>): JSX.Element;
}
export default DatePickerClassic;
//# sourceMappingURL=DatePickerClassic.d.ts.map