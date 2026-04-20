/** @jsx m */
import m from "mithril";
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
type DPRole = "label" | "control" | "input" | "indicatorGroup" | "trigger" | "clearTrigger" | "positioner" | "content" | "view" | "header" | "dayTable" | "monthTable" | "yearTable" | "presetTrigger";
declare class DPLabelMarker implements m.Component<DatePickerLabelAttrs> {
    static __dpRole: DPRole;
    view(vnode: m.Vnode<DatePickerLabelAttrs>): JSX.Element;
}
declare class DPControlMarker implements m.Component<DatePickerControlAttrs> {
    static __dpRole: DPRole;
    view(vnode: m.Vnode<DatePickerControlAttrs>): JSX.Element;
}
declare class DPInputMarker implements m.Component<DatePickerInputAttrs> {
    static __dpRole: DPRole;
    view(vnode: m.Vnode<DatePickerInputAttrs>): JSX.Element;
}
declare class DPIndicatorGroupMarker implements m.Component<DatePickerIndicatorGroupAttrs> {
    static __dpRole: DPRole;
    view(vnode: m.Vnode<DatePickerIndicatorGroupAttrs>): JSX.Element;
}
declare class DPTriggerMarker implements m.Component<DatePickerTriggerAttrs> {
    static __dpRole: DPRole;
    view(vnode: m.Vnode<DatePickerTriggerAttrs>): JSX.Element;
}
declare class DPClearTriggerMarker implements m.Component<DatePickerClearTriggerAttrs> {
    static __dpRole: DPRole;
    view(vnode: m.Vnode<DatePickerClearTriggerAttrs>): JSX.Element;
}
declare class DPPositionerMarker implements m.Component<DatePickerPositionerAttrs> {
    static __dpRole: DPRole;
    view(vnode: m.Vnode<DatePickerPositionerAttrs>): JSX.Element;
}
declare class DPContentMarker implements m.Component<DatePickerContentAttrs> {
    static __dpRole: DPRole;
    view(vnode: m.Vnode<DatePickerContentAttrs>): JSX.Element;
}
declare class DPViewMarker implements m.Component<DatePickerViewAttrs> {
    static __dpRole: DPRole;
    view(vnode: m.Vnode<DatePickerViewAttrs>): JSX.Element;
}
declare class DPHeaderMarker implements m.Component<DatePickerHeaderAttrs> {
    static __dpRole: DPRole;
    view(vnode: m.Vnode<DatePickerHeaderAttrs>): JSX.Element;
}
declare class DPDayTableMarker implements m.Component<DatePickerDayTableAttrs> {
    static __dpRole: DPRole;
    view(vnode: m.Vnode<DatePickerDayTableAttrs>): JSX.Element;
}
declare class DPMonthTableMarker implements m.Component<DatePickerMonthTableAttrs> {
    static __dpRole: DPRole;
    view(vnode: m.Vnode<DatePickerMonthTableAttrs>): JSX.Element;
}
declare class DPYearTableMarker implements m.Component<DatePickerYearTableAttrs> {
    static __dpRole: DPRole;
    view(vnode: m.Vnode<DatePickerYearTableAttrs>): JSX.Element;
}
declare class DPPresetTriggerMarker implements m.Component<DatePickerPresetTriggerAttrs> {
    static __dpRole: DPRole;
    view(vnode: m.Vnode<DatePickerPresetTriggerAttrs>): JSX.Element;
}
/**
 * DatePickerRoot — Chakra UI 風 DatePicker のルートコンポーネント。
 *
 * 責務:
 * 1. 選択状態 (value) の管理
 * 2. カレンダービュー (day/month/year) の管理
 * 3. ポップアップ開閉の管理
 * 4. 子マーカーを再帰的に描画
 */
export declare class DatePickerRoot implements m.Component<DatePickerRootAttrs> {
    private selectedDates;
    private currentView;
    private focusedMonth;
    private focusedYear;
    private isOpen;
    private inputText;
    private rangeHoverDate;
    private rootEl;
    oninit(vnode: m.Vnode<DatePickerRootAttrs>): void;
    onbeforeupdate(vnode: m.Vnode<DatePickerRootAttrs>, old: m.VnodeDOM<DatePickerRootAttrs>): void;
    oncreate(vnode: m.VnodeDOM<DatePickerRootAttrs>): void;
    onremove(): void;
    private handleOutsideClick;
    private getAttr;
    private setOpen;
    private toggleOpen;
    private selectDate;
    private selectMonth;
    private selectYear;
    private syncInputText;
    private clearSelection;
    private applyPreset;
    private handleInputChange;
    private prevMonth;
    private nextMonth;
    private prevYear;
    private nextYear;
    private prevDecade;
    private nextDecade;
    private isSelected;
    private isInRange;
    private isRangeHover;
    private isDateDisabled;
    private getCellClass;
    private renderHeader;
    private renderDayTable;
    private renderMonthTable;
    private renderYearTable;
    private renderChildren;
    private renderChild;
    /** マルチ月表示用のサブヘッダー */
    private renderMonthHeader;
    view(vnode: m.Vnode<DatePickerRootAttrs>): JSX.Element;
}
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
export declare const DatePicker: {
    Root: typeof DatePickerRoot;
    Label: typeof DPLabelMarker;
    Control: typeof DPControlMarker;
    Input: typeof DPInputMarker;
    IndicatorGroup: typeof DPIndicatorGroupMarker;
    Trigger: typeof DPTriggerMarker;
    ClearTrigger: typeof DPClearTriggerMarker;
    Positioner: typeof DPPositionerMarker;
    Content: typeof DPContentMarker;
    View: typeof DPViewMarker;
    Header: typeof DPHeaderMarker;
    DayTable: typeof DPDayTableMarker;
    MonthTable: typeof DPMonthTableMarker;
    YearTable: typeof DPYearTableMarker;
    PresetTrigger: typeof DPPresetTriggerMarker;
};
export {};
//# sourceMappingURL=DatePicker.d.ts.map