/** @jsx m */
import m from "mithril";
import styles from "./DatePicker.module.scss";
class DPLabelMarker {
    view(vnode) { return m("span", null, vnode.children); }
}
DPLabelMarker.__dpRole = "label";
class DPControlMarker {
    view(vnode) { return m("span", null, vnode.children); }
}
DPControlMarker.__dpRole = "control";
class DPInputMarker {
    view(vnode) { return m("span", null, vnode.children); }
}
DPInputMarker.__dpRole = "input";
class DPIndicatorGroupMarker {
    view(vnode) { return m("span", null, vnode.children); }
}
DPIndicatorGroupMarker.__dpRole = "indicatorGroup";
class DPTriggerMarker {
    view(vnode) { return m("span", null, vnode.children); }
}
DPTriggerMarker.__dpRole = "trigger";
class DPClearTriggerMarker {
    view(vnode) { return m("span", null, vnode.children); }
}
DPClearTriggerMarker.__dpRole = "clearTrigger";
class DPPositionerMarker {
    view(vnode) { return m("span", null, vnode.children); }
}
DPPositionerMarker.__dpRole = "positioner";
class DPContentMarker {
    view(vnode) { return m("span", null, vnode.children); }
}
DPContentMarker.__dpRole = "content";
class DPViewMarker {
    view(vnode) { return m("span", null, vnode.children); }
}
DPViewMarker.__dpRole = "view";
class DPHeaderMarker {
    view(vnode) { return m("span", null, vnode.children); }
}
DPHeaderMarker.__dpRole = "header";
class DPDayTableMarker {
    view(vnode) { return m("span", null); }
}
DPDayTableMarker.__dpRole = "dayTable";
class DPMonthTableMarker {
    view(vnode) { return m("span", null); }
}
DPMonthTableMarker.__dpRole = "monthTable";
class DPYearTableMarker {
    view(vnode) { return m("span", null); }
}
DPYearTableMarker.__dpRole = "yearTable";
class DPPresetTriggerMarker {
    view(vnode) { return m("span", null, vnode.children); }
}
DPPresetTriggerMarker.__dpRole = "presetTrigger";
// ============================================================
// ユーティリティ
// ============================================================
/** Date → "yyyy-mm-dd" */
function formatISO(d) {
    const y = d.getFullYear();
    const mo = String(d.getMonth() + 1).padStart(2, "0");
    const da = String(d.getDate()).padStart(2, "0");
    return `${y}-${mo}-${da}`;
}
/** 同じ日付か */
function isSameDay(a, b) {
    return a.getFullYear() === b.getFullYear()
        && a.getMonth() === b.getMonth()
        && a.getDate() === b.getDate();
}
/** 同じ月か */
function isSameMonth(a, b) {
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();
}
/** 同じ年か */
function isSameYear(a, b) {
    return a.getFullYear() === b.getFullYear();
}
/** Date を所定のフォーマットで文字列化 */
function defaultFormat(d, locale) {
    try {
        return d.toLocaleDateString(locale, { year: "numeric", month: "2-digit", day: "2-digit" });
    }
    catch {
        return formatISO(d);
    }
}
/** 月の日数を取得 */
function daysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}
/** カレンダーグリッド生成 (6週 x 7日 or 可変) */
function buildDayGrid(year, month, startOfWeek, fixedWeeks) {
    const first = new Date(year, month, 1);
    let dayOfWeek = first.getDay() - startOfWeek;
    if (dayOfWeek < 0)
        dayOfWeek += 7;
    const start = new Date(year, month, 1 - dayOfWeek);
    const weeks = [];
    const totalWeeks = fixedWeeks ? 6 : Math.ceil((dayOfWeek + daysInMonth(year, month)) / 7);
    for (let w = 0; w < totalWeeks; w++) {
        const week = [];
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
function weekdayHeaders(locale, startOfWeek) {
    const headers = [];
    const base = new Date(2024, 0, 7 + startOfWeek); // 2024-01-07 is a Sunday
    for (let i = 0; i < 7; i++) {
        const d = new Date(base);
        d.setDate(base.getDate() + i);
        headers.push(d.toLocaleDateString(locale, { weekday: "short" }));
    }
    return headers;
}
/** ビュー階層 (上位へ) */
const VIEW_ORDER = ["day", "month", "year"];
function viewUp(current, maxView) {
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
export class DatePickerRoot {
    constructor() {
        // --- 内部状態 ---
        this.selectedDates = [];
        this.currentView = "day";
        this.focusedMonth = new Date().getMonth();
        this.focusedYear = new Date().getFullYear();
        this.isOpen = false;
        this.inputText = "";
        this.rangeHoverDate = null;
        this.rootEl = null;
        // --- 外部クリック ---
        // Shadow DOM 内でクリックされた場合、document レベルのリスナーには e.target が
        // Shadow Host にリターゲティングされるため、composedPath() で実パスを確認する。
        this.handleOutsideClick = (e) => {
            if (!this.isOpen || !this.rootEl)
                return;
            const path = e.composedPath();
            if (!path.includes(this.rootEl)) {
                this.setOpen(false);
            }
        };
    }
    // --- ライフサイクル ---
    oninit(vnode) {
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
    onbeforeupdate(vnode, old) {
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
    oncreate(vnode) {
        this.rootEl = vnode.dom;
        document.addEventListener("mousedown", this.handleOutsideClick);
    }
    onremove() {
        document.removeEventListener("mousedown", this.handleOutsideClick);
        this.rootEl = null;
    }
    // --- 状態操作 ---
    getAttr(vnode, key, fallback) {
        return (vnode.attrs[key] ?? fallback);
    }
    setOpen(open, attrs) {
        if (this.isOpen === open)
            return;
        this.isOpen = open;
        (attrs ?? {}).onOpenChange?.({ open });
        m.redraw();
    }
    toggleOpen(attrs) {
        this.setOpen(!this.isOpen, attrs);
    }
    selectDate(date, attrs) {
        if (attrs.disabled || attrs.readOnly)
            return;
        if (attrs.isDateUnavailable?.(date))
            return;
        if (attrs.min && date < attrs.min)
            return;
        if (attrs.max && date > attrs.max)
            return;
        const mode = attrs.selectionMode ?? "single";
        if (mode === "single") {
            this.selectedDates = [date];
        }
        else if (mode === "multiple") {
            const idx = this.selectedDates.findIndex(d => isSameDay(d, date));
            if (idx >= 0) {
                this.selectedDates = this.selectedDates.filter((_, i) => i !== idx);
            }
            else {
                this.selectedDates = [...this.selectedDates, date];
            }
        }
        else if (mode === "range") {
            if (this.selectedDates.length === 0 || this.selectedDates.length === 2) {
                this.selectedDates = [date];
            }
            else {
                const start = this.selectedDates[0];
                if (date < start) {
                    this.selectedDates = [date, start];
                }
                else {
                    this.selectedDates = [start, date];
                }
            }
        }
        this.syncInputText(attrs);
        const details = {
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
    selectMonth(month, attrs) {
        this.focusedMonth = month;
        const minView = attrs.minView ?? "day";
        if (minView === "month") {
            // 月選択モード: 選択確定
            const d = new Date(this.focusedYear, month, 1);
            this.selectDate(d, attrs);
        }
        else {
            this.currentView = "day";
            attrs.onViewChange?.({ view: "day" });
        }
    }
    selectYear(year, attrs) {
        this.focusedYear = year;
        const minView = attrs.minView ?? "day";
        if (minView === "year") {
            const d = new Date(year, 0, 1);
            this.selectDate(d, attrs);
        }
        else {
            this.currentView = "month";
            attrs.onViewChange?.({ view: "month" });
        }
    }
    syncInputText(attrs) {
        const locale = attrs.locale ?? "ja-JP";
        const fmt = attrs.format ?? ((d) => defaultFormat(d, locale));
        if (attrs.selectionMode === "range" && this.selectedDates.length === 2) {
            this.inputText = `${fmt(this.selectedDates[0])} – ${fmt(this.selectedDates[1])}`;
        }
        else if (this.selectedDates.length > 0) {
            this.inputText = this.selectedDates.map(d => fmt(d)).join(", ");
        }
        else {
            this.inputText = "";
        }
    }
    clearSelection(attrs) {
        this.selectedDates = [];
        this.inputText = "";
        attrs.onValueChange?.({ value: [], valueAsString: [] });
    }
    applyPreset(presetValue, attrs) {
        if (Array.isArray(presetValue)) {
            this.selectedDates = [...presetValue];
        }
        else {
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
    handleInputChange(text, attrs) {
        this.inputText = text;
        const parser = attrs.parse ?? ((t) => {
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
    prevMonth() {
        if (this.focusedMonth === 0) {
            this.focusedMonth = 11;
            this.focusedYear--;
        }
        else {
            this.focusedMonth--;
        }
    }
    nextMonth() {
        if (this.focusedMonth === 11) {
            this.focusedMonth = 0;
            this.focusedYear++;
        }
        else {
            this.focusedMonth++;
        }
    }
    prevYear() { this.focusedYear--; }
    nextYear() { this.focusedYear++; }
    prevDecade() { this.focusedYear -= 10; }
    nextDecade() { this.focusedYear += 10; }
    // --- 描画ヘルパー ---
    isSelected(date) {
        return this.selectedDates.some(d => isSameDay(d, date));
    }
    isInRange(date) {
        if (this.selectedDates.length !== 2)
            return false;
        const [start, end] = this.selectedDates;
        return date > start && date < end;
    }
    isRangeHover(date) {
        if (this.selectedDates.length !== 1 || !this.rangeHoverDate)
            return false;
        const start = this.selectedDates[0];
        const hover = this.rangeHoverDate;
        const lo = start < hover ? start : hover;
        const hi = start < hover ? hover : start;
        return date > lo && date < hi;
    }
    isDateDisabled(date, attrs) {
        if (attrs.min && date < attrs.min)
            return true;
        if (attrs.max && date > attrs.max)
            return true;
        return false;
    }
    getCellClass(date, attrs, isOutside) {
        const classes = [styles.cellBtn];
        const today = new Date();
        if (isSameDay(date, today))
            classes.push(styles.cellToday);
        if (this.isSelected(date))
            classes.push(styles.cellSelected);
        if (this.isInRange(date) || this.isRangeHover(date))
            classes.push(styles.cellInRange);
        if (this.selectedDates.length === 2 && isSameDay(date, this.selectedDates[0]))
            classes.push(styles.cellRangeStart);
        if (this.selectedDates.length === 2 && isSameDay(date, this.selectedDates[1]))
            classes.push(styles.cellRangeEnd);
        if (isOutside)
            classes.push(styles.cellOutside);
        if (this.isDateDisabled(date, attrs))
            classes.push(styles.cellDisabled);
        if (attrs.isDateUnavailable?.(date))
            classes.push(styles.cellUnavailable);
        return classes.join(" ");
    }
    // --- 描画: Header ---
    renderHeader(attrs) {
        const maxView = attrs.maxView ?? "year";
        if (this.currentView === "day") {
            const monthName = new Date(this.focusedYear, this.focusedMonth).toLocaleDateString(attrs.locale ?? "ja-JP", { year: "numeric", month: "long" });
            return (m("div", { class: styles.header, "data-part": "header" },
                m("button", { type: "button", class: styles.headerNavBtn, onclick: () => this.prevMonth(), "aria-label": "\u524D\u306E\u6708" }, "\u2039"),
                m("span", { class: styles.headerTitle, onclick: () => {
                        const up = viewUp("day", maxView);
                        if (up) {
                            this.currentView = up;
                            attrs.onViewChange?.({ view: up });
                        }
                    } }, monthName),
                m("button", { type: "button", class: styles.headerNavBtn, onclick: () => this.nextMonth(), "aria-label": "\u6B21\u306E\u6708" }, "\u203A")));
        }
        else if (this.currentView === "month") {
            return (m("div", { class: styles.header, "data-part": "header" },
                m("button", { type: "button", class: styles.headerNavBtn, onclick: () => this.prevYear(), "aria-label": "\u524D\u306E\u5E74" }, "\u2039"),
                m("span", { class: styles.headerTitle, onclick: () => {
                        const up = viewUp("month", maxView);
                        if (up) {
                            this.currentView = up;
                            attrs.onViewChange?.({ view: up });
                        }
                    } },
                    this.focusedYear,
                    "\u5E74"),
                m("button", { type: "button", class: styles.headerNavBtn, onclick: () => this.nextYear(), "aria-label": "\u6B21\u306E\u5E74" }, "\u203A")));
        }
        else {
            // year view
            const decadeStart = Math.floor(this.focusedYear / 10) * 10;
            return (m("div", { class: styles.header, "data-part": "header" },
                m("button", { type: "button", class: styles.headerNavBtn, onclick: () => this.prevDecade(), "aria-label": "\u524D\u306E10\u5E74" }, "\u2039"),
                m("span", { class: styles.headerTitle },
                    decadeStart,
                    " \u2013 ",
                    decadeStart + 9),
                m("button", { type: "button", class: styles.headerNavBtn, onclick: () => this.nextDecade(), "aria-label": "\u6B21\u306E10\u5E74" }, "\u203A")));
        }
    }
    // --- 描画: DayTable ---
    renderDayTable(attrs, monthOffset = 0) {
        const locale = attrs.locale ?? "ja-JP";
        const startOfWeek = attrs.startOfWeek ?? 0;
        const fixedWeeks = attrs.fixedWeeks ?? false;
        const hideOutside = attrs.hideOutsideDays ?? false;
        const year = this.focusedYear;
        let month = this.focusedMonth + monthOffset;
        let adjustedYear = year;
        if (month > 11) {
            month -= 12;
            adjustedYear++;
        }
        if (month < 0) {
            month += 12;
            adjustedYear--;
        }
        const weeks = buildDayGrid(adjustedYear, month, startOfWeek, fixedWeeks);
        const headers = weekdayHeaders(locale, startOfWeek);
        const mode = attrs.selectionMode ?? "single";
        return (m("table", { class: styles.table, "data-part": "day-table" },
            m("thead", null,
                m("tr", null, headers.map(h => m("th", null, h)))),
            m("tbody", null, weeks.map(week => (m("tr", null, week.map(date => {
                const isOutside = date.getMonth() !== month;
                if (hideOutside && isOutside) {
                    return m("td", { class: styles.cell });
                }
                return (m("td", { class: styles.cell },
                    m("button", { type: "button", class: this.getCellClass(date, attrs, isOutside), onclick: () => this.selectDate(date, attrs), onmouseenter: () => {
                            if (mode === "range") {
                                this.rangeHoverDate = date;
                            }
                        }, disabled: this.isDateDisabled(date, attrs) || !!attrs.isDateUnavailable?.(date) }, date.getDate())));
            })))))));
    }
    // --- 描画: MonthTable ---
    renderMonthTable(attrs) {
        const locale = attrs.locale ?? "ja-JP";
        const months = [];
        for (let i = 0; i < 12; i++) {
            months.push(new Date(2024, i).toLocaleDateString(locale, { month: "short" }));
        }
        const rows = [];
        for (let r = 0; r < 3; r++) {
            const cells = [];
            for (let c = 0; c < 4; c++) {
                const mi = r * 4 + c;
                const isSelected = this.selectedDates.some(d => d.getMonth() === mi && d.getFullYear() === this.focusedYear);
                const isCurrent = new Date().getMonth() === mi && new Date().getFullYear() === this.focusedYear;
                const cls = [styles.cellBtnMonth];
                if (isSelected)
                    cls.push(styles.cellSelected);
                if (isCurrent)
                    cls.push(styles.cellToday);
                cells.push(m("td", { class: styles.cell },
                    m("button", { type: "button", class: cls.join(" "), onclick: () => this.selectMonth(mi, attrs) }, months[mi])));
            }
            rows.push(m("tr", null, cells));
        }
        return (m("table", { class: styles.table, "data-part": "month-table" },
            m("tbody", null, rows)));
    }
    // --- 描画: YearTable ---
    renderYearTable(attrs) {
        const decadeStart = Math.floor(this.focusedYear / 10) * 10;
        const years = [];
        for (let i = decadeStart - 1; i <= decadeStart + 10; i++) {
            years.push(i);
        }
        const rows = [];
        for (let r = 0; r < 3; r++) {
            const cells = [];
            for (let c = 0; c < 4; c++) {
                const idx = r * 4 + c;
                if (idx >= years.length)
                    break;
                const yr = years[idx];
                const isOutside = yr < decadeStart || yr > decadeStart + 9;
                const isSelected = this.selectedDates.some(d => d.getFullYear() === yr);
                const isCurrent = new Date().getFullYear() === yr;
                const cls = [styles.cellBtnYear];
                if (isSelected)
                    cls.push(styles.cellSelected);
                if (isCurrent)
                    cls.push(styles.cellToday);
                if (isOutside)
                    cls.push(styles.cellOutside);
                cells.push(m("td", { class: styles.cell },
                    m("button", { type: "button", class: cls.join(" "), onclick: () => this.selectYear(yr, attrs) }, yr)));
            }
            rows.push(m("tr", null, cells));
        }
        return (m("table", { class: styles.table, "data-part": "year-table" },
            m("tbody", null, rows)));
    }
    // --- 子要素の再帰的描画 ---
    renderChildren(children, attrs) {
        if (!Array.isArray(children)) {
            if (children && typeof children === "object" && "tag" in children) {
                return this.renderChild(children, attrs);
            }
            return children;
        }
        return children.map(child => {
            if (!child || typeof child !== "object" || !("tag" in child))
                return child;
            return this.renderChild(child, attrs);
        });
    }
    renderChild(child, attrs) {
        const tag = child.tag;
        if (!tag || !tag.__dpRole) {
            // 通常の VNode — 子があれば再帰
            if (child.children) {
                return {
                    ...child,
                    children: this.renderChildren(child.children, attrs),
                };
            }
            return child;
        }
        const role = tag.__dpRole;
        const childAttrs = (child.attrs ?? {});
        const childChildren = child.children;
        switch (role) {
            case "label":
                return m("span", { class: `${styles.label} ${childAttrs.class ?? ""}`, "data-part": "label" }, childChildren);
            case "control":
                return (m("div", { class: `${styles.control} ${attrs.disabled ? styles.controlDisabled : ""} ${childAttrs.class ?? ""}`, "data-part": "control" }, this.renderChildren(childChildren, attrs)));
            case "input": {
                const isRange = (attrs.selectionMode ?? "single") === "range";
                const placeholder = childAttrs.placeholder ?? attrs.placeholder ?? "日付を選択";
                if (isRange) {
                    const parts = this.inputText.split(" – ");
                    return [(m("input", { class: `${styles.input} ${styles.inputRange} ${childAttrs.class ?? ""}`, "data-part": "input", value: parts[0] ?? "", placeholder: "\u958B\u59CB\u65E5", readonly: attrs.readOnly, onfocus: () => { if (!attrs.inline)
                                this.setOpen(true, attrs); }, oninput: (e) => this.handleInputChange(e.target.value, attrs) })), (m("span", { class: styles.rangeSeparator }, "\u2013")), (m("input", { class: `${styles.input} ${styles.inputRange} ${childAttrs.class ?? ""}`, "data-part": "input", value: parts[1] ?? "", placeholder: "\u7D42\u4E86\u65E5", readonly: attrs.readOnly, onfocus: () => { if (!attrs.inline)
                                this.setOpen(true, attrs); } }))];
                }
                return (m("input", { class: `${styles.input} ${childAttrs.class ?? ""}`, "data-part": "input", value: this.inputText, placeholder: placeholder, readonly: attrs.readOnly, name: attrs.name, onfocus: () => { if (!attrs.inline)
                        this.setOpen(true, attrs); }, oninput: (e) => this.handleInputChange(e.target.value, attrs) }));
            }
            case "indicatorGroup":
                return m("span", { class: `${styles.indicatorGroup} ${childAttrs.class ?? ""}`, "data-part": "indicator-group" }, this.renderChildren(childChildren, attrs));
            case "trigger":
                return (m("button", { type: "button", class: `${styles.trigger} ${childAttrs.class ?? ""}`, "data-part": "trigger", onclick: () => this.toggleOpen(attrs), disabled: attrs.disabled, "aria-label": "\u30AB\u30EC\u30F3\u30C0\u30FC\u3092\u958B\u304F" }, childChildren && childChildren.length > 0 ? childChildren : "📅"));
            case "clearTrigger":
                if (this.selectedDates.length === 0)
                    return null;
                return (m("button", { type: "button", class: `${styles.clearTrigger} ${childAttrs.class ?? ""}`, "data-part": "clear-trigger", onclick: () => this.clearSelection(attrs), "aria-label": "\u9078\u629E\u3092\u30AF\u30EA\u30A2" }, childChildren && childChildren.length > 0 ? childChildren : "✕"));
            case "positioner":
                if (attrs.inline) {
                    // inline モード: Positioner は不要
                    return this.renderChildren(childChildren, attrs);
                }
                if (!this.isOpen)
                    return null;
                return (m("div", { class: `${styles.positioner} ${childAttrs.class ?? ""}`, "data-part": "positioner" }, this.renderChildren(childChildren, attrs)));
            case "content": {
                const isInline = attrs.inline ?? false;
                const numMonths = attrs.numOfMonths ?? 1;
                const contentClass = `${styles.content} ${isInline ? styles.contentInline : ""} ${childAttrs.class ?? ""}`;
                if (numMonths > 1 && this.currentView === "day") {
                    return (m("div", { class: contentClass, "data-part": "content" },
                        m("div", { class: styles.multiMonth }, Array.from({ length: numMonths }, (_, i) => (m("div", null,
                            i === 0 ? this.renderHeader(attrs) : this.renderMonthHeader(attrs, i),
                            this.renderDayTable(attrs, i)))))));
                }
                return (m("div", { class: contentClass, "data-part": "content" }, this.renderChildren(childChildren, attrs)));
            }
            case "view": {
                const viewAttr = childAttrs.view ?? "day";
                if (viewAttr !== this.currentView)
                    return null;
                return (m("div", { "data-part": "view", "data-view": viewAttr }, this.renderChildren(childChildren, attrs)));
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
                const val = childAttrs.value;
                return (m("button", { type: "button", class: `${styles.presetBtn} ${childAttrs.class ?? ""}`, "data-part": "preset-trigger", onclick: () => this.applyPreset(val, attrs) }, childChildren));
            }
            default:
                return child;
        }
    }
    /** マルチ月表示用のサブヘッダー */
    renderMonthHeader(attrs, monthOffset) {
        let month = this.focusedMonth + monthOffset;
        let year = this.focusedYear;
        if (month > 11) {
            month -= 12;
            year++;
        }
        const name = new Date(year, month).toLocaleDateString(attrs.locale ?? "ja-JP", { year: "numeric", month: "long" });
        return (m("div", { class: styles.header, "data-part": "header" },
            m("span", { class: styles.headerTitle }, name)));
    }
    // --- view() ---
    view(vnode) {
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
        return (m("div", { class: rootClass, "data-part": "root", style: attrs.style }, this.renderChildren(vnode.children, attrs)));
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
