/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import * as _ from "lodash-es";
export class SelectClassic {
    constructor() {
        /** ドロップダウンが開いているか */
        this.isOpen = false;
        /** 検索入力のテキスト */
        this.searchText = "";
        /** 現在フォーカスされているオプションの index */
        this.focusedIndex = -1;
        /** フィルタ処理後に表示するオプション */
        this.filteredOptions = [];
        this.debouncedRedraw = _.debounce(() => {
            m.redraw();
        }, 200);
        this.handleDocumentClick = (e) => {
            const target = e.target;
            if (!this.lastVnode)
                return;
            // クリックがコンテナやドロップダウンの内部であれば無視
            if (this.container && target && this.container.contains(target))
                return;
            if (this.dropdownRef && target && this.dropdownRef.contains(target))
                return;
            // それ以外はドロップダウンを閉じる
            if (this.isOpen) {
                try {
                    this.close(this.lastVnode);
                }
                catch (err) {
                    // 失敗しても無視
                }
                // ドキュメントイベントは Mithril の自動再描画外で発生する
                // 明示的に再描画を呼ぶことで UI を確実に更新する
                m.redraw();
            }
        };
    }
    collectOptions(vnode) {
        const { options } = vnode.attrs;
        if (options && options.length)
            return options;
        const children = vnode.children;
        if (!children)
            return [];
        const arr = Array.isArray(children) ? children : [children];
        const out = [];
        arr.forEach((ch) => {
            if (!ch)
                return;
            if (ch.tag === OptGroupClassic) {
                const groupChildren = ch.children ? (Array.isArray(ch.children) ? ch.children : [ch.children]) : [];
                groupChildren.forEach((gc) => {
                    if (!gc || !gc.attrs)
                        return;
                    out.push({
                        label: gc.attrs.label ?? gc.children,
                        value: gc.attrs.value,
                        disabled: !!gc.attrs.disabled,
                        title: gc.attrs.title,
                    });
                });
            }
            else if (ch.tag === OptionClassic && ch.attrs) {
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
    async filterOptions(vnode) {
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
                    const lab = opt.label;
                    let s;
                    if (typeof lab === "string")
                        s = lab;
                    else if (Array.isArray(lab))
                        s = lab.map((x) => String(x)).join("");
                    else
                        s = String(lab);
                    return s.toLowerCase().includes(input);
                }
                catch {
                    return false;
                }
            });
            return;
        }
        const results = [];
        for (const opt of all) {
            try {
                const res = filter(input, opt);
                if (res && typeof res.then === "function") {
                    const ok = await res;
                    if (ok)
                        results.push(opt);
                }
                else if (res) {
                    results.push(opt);
                }
            }
            catch {
                // 個別のフィルタエラーは無視
            }
        }
        this.filteredOptions = results;
    }
    /**
     * ドロップダウンを開く
     * @param vnode vnode
     */
    open(vnode) {
        if (vnode.attrs.disabled)
            return;
        this.isOpen = true;
        this.focusedIndex = -1;
        this.filterOptions(vnode);
        vnode.attrs.onDropdownVisibleChange?.(true);
    }
    close(vnode) {
        this.isOpen = false;
        this.searchText = "";
        this.filteredOptions = [];
        this.focusedIndex = -1;
        vnode.attrs.onDropdownVisibleChange?.(false);
    }
    isEqual(a, b) {
        if (a === b)
            return true;
        if ((typeof a === "number" || typeof a === "string") && (typeof b === "number" || typeof b === "string")) {
            return String(a) === String(b);
        }
        return false;
    }
    isSelected(attrs, val) {
        if (attrs.multiple) {
            return Array.isArray(attrs.value) && attrs.value.some((v) => this.isEqual(v, val));
        }
        return this.isEqual(attrs.value, val);
    }
    selectValue(vnode, val) {
        const attrs = vnode.attrs;
        if (attrs.multiple) {
            const cur = Array.isArray(attrs.value) ? [...attrs.value] : [];
            const idx = cur.findIndex((x) => this.isEqual(x, val));
            if (idx === -1)
                cur.push(val);
            else
                cur.splice(idx, 1);
            attrs.oninput?.(cur);
        }
        else {
            attrs.oninput?.(val);
            this.close(vnode);
        }
    }
    clearSelection(vnode) {
        const attrs = vnode.attrs;
        attrs.oninput?.(attrs.multiple ? [] : null);
    }
    onKeyDown(vnode, e) {
        const isOpen = vnode.attrs.open ?? this.isOpen;
        if (!isOpen && (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            this.open(vnode);
            return;
        }
        if (!isOpen)
            return;
        if (e.key === "ArrowDown") {
            e.preventDefault();
            const len = this.filteredOptions.length;
            if (len === 0)
                return;
            this.focusedIndex = (this.focusedIndex + 1 + len) % len;
            m.redraw();
        }
        else if (e.key === "ArrowUp") {
            e.preventDefault();
            const len = this.filteredOptions.length;
            if (len === 0)
                return;
            this.focusedIndex = (this.focusedIndex - 1 + len) % len;
            m.redraw();
        }
        else if (e.key === "Enter") {
            e.preventDefault();
            if (this.focusedIndex >= 0 && this.focusedIndex < this.filteredOptions.length) {
                const opt = this.filteredOptions[this.focusedIndex];
                if (!opt.disabled)
                    this.selectValue(vnode, opt.value);
            }
        }
        else if (e.key === "Escape") {
            e.preventDefault();
            this.close(vnode);
        }
    }
    /**
     * コンポーネントの描画
     * - vnode を this.lastVnode に保持して、ドキュメントクリックハンドラから参照できるようにする
     */
    view(vnode) {
        this.lastVnode = vnode;
        const attrs = vnode.attrs;
        const allOptions = this.collectOptions(vnode);
        if (!this.filteredOptions.length)
            this.filteredOptions = allOptions;
        const isOpen = attrs.open ?? this.isOpen;
        const containerClass = classNames("position-relative", attrs.class, {
            "select-disabled": attrs.disabled,
        });
        const selectionClass = classNames("form-control d-flex align-items-center justify-content-between", { "is-invalid": !!(attrs.class && String(attrs.class).split(/\s+/).includes("is-invalid")) });
        const displayLabel = () => {
            if (attrs.multiple) {
                const vals = Array.isArray(attrs.value) ? attrs.value : [];
                if (vals.length === 0)
                    return attrs.placeholder ?? "";
                const labels = vals.map((v) => {
                    const found = allOptions.find((o) => this.isEqual(o.value, v));
                    return found ? found.label : String(v);
                });
                return labels;
            }
            if (attrs.value == null)
                return attrs.placeholder ?? "";
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
        return (m("div", { class: containerClass, style: attrs.style, tabindex: 0, onkeydown: (e) => this.onKeyDown(vnode, e), oncreate: (dom) => {
                this.container = dom.dom;
                document.addEventListener("click", this.handleDocumentClick);
            }, onremove: () => {
                document.removeEventListener("click", this.handleDocumentClick);
                this.container = undefined;
                this.dropdownRef = undefined;
            } },
            m("div", { class: selectionClass, role: "button", onclick: () => {
                    if (isOpen)
                        this.close(vnode);
                    else
                        this.open(vnode);
                }, "aria-haspopup": "listbox", "aria-expanded": isOpen },
                m("div", { class: "d-flex align-items-center flex-wrap gap-1", style: { minHeight: "1.5rem" } }, attrs.multiple ? (Array.isArray(renderedValue) && renderedValue.length > 0 ? (renderedValue.map((lab, i) => (m("span", { class: "badge bg-secondary text-truncate", style: { maxWidth: "160px" }, key: i }, lab)))) : (m("span", { class: "text-muted" }, attrs.placeholder ?? "選択してください"))) : renderedValue && renderedValue !== (attrs.placeholder ?? "") ? (m("span", null, renderedValue)) : (m("span", { class: "text-muted" }, attrs.placeholder ?? "選択してください"))),
                m("div", { class: "d-flex align-items-center" },
                    (() => {
                        const isMultiple = !!attrs.multiple;
                        const val = attrs.value;
                        const hasValue = isMultiple
                            ? Array.isArray(val) && val.length > 0
                            : val !== null && val !== undefined && !(typeof val === "string" && val === "");
                        return attrs.allowClear && hasValue && !attrs.disabled ? (m("button", { type: "button", class: "btn btn-sm btn-link p-0 me-2 d-flex align-items-center", onclick: (e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                this.clearSelection(vnode);
                            }, "aria-label": "clear selection", title: "Clear" }, "x")) : null;
                    })(),
                    m("span", { class: "dropdown-toggle-split", style: { marginLeft: "0.25rem" }, "aria-hidden": "true" }))),
            isOpen && (m("div", { class: classNames("dropdown-menu show shadow-sm", attrs.dropdownClass), style: Object.assign({ maxHeight: "240px", overflow: "auto", width: "100%" }, attrs.dropdownStyle), oncreate: (d) => {
                    this.dropdownRef = d.dom;
                }, onremove: () => {
                    this.dropdownRef = undefined;
                } },
                attrs.showSearch && (m("div", { class: "px-2 py-2" },
                    m("input", { type: "text", class: "form-control form-control-sm", placeholder: "\u691C\u7D22...", value: this.searchText, oninput: async (e) => {
                            const t = e.target;
                            this.searchText = t.value;
                            this.debouncedRedraw(this.searchText);
                            await this.filterOptions(vnode);
                            this.focusedIndex = this.filteredOptions.length ? 0 : -1;
                            m.redraw();
                        } }))),
                m("div", { role: "listbox", "aria-activedescendant": focusedIndex >= 0 ? `select-opt-${focusedIndex}` : undefined },
                    visibleOptions.length === 0 && m("div", { class: "dropdown-item text-muted" }, "\u8A72\u5F53\u306A\u3057"),
                    visibleOptions.map((opt, idx) => {
                        const isFocused = idx === focusedIndex;
                        const isSel = this.isSelected(attrs, opt.value);
                        return (m("button", { id: `select-opt-${idx}`, type: "button", role: "option", "aria-selected": isSel, class: classNames("dropdown-item d-flex justify-content-between align-items-center", {
                                active: isFocused,
                                disabled: opt.disabled,
                            }), onclick: () => {
                                if (!opt.disabled)
                                    this.selectValue(vnode, opt.value);
                            }, onmouseover: () => {
                                this.focusedIndex = idx;
                            }, title: opt.title },
                            m("span", { class: classNames({ "text-muted": opt.disabled }) }, attrs.renderOption ? attrs.renderOption(opt) : opt.label),
                            isSel && m("span", { class: "text-primary" }, "\u2713")));
                    }))))));
    }
}
/**
 * 単一のオプションを静的に定義するためのダミーコンポーネント
 * 実体は `Select` が子要素として解釈して利用するため、レンダリングは行わない
 */
export class OptionClassic {
    view(_vnode) {
        return m("div", { style: { display: "none" } });
    }
}
/**
 * オプションのグループを定義するためのダミーコンポーネント
 * `Select` が子要素として解釈してグルーピングを行う
 */
export class OptGroupClassic {
    view(_vnode) {
        return m("div", { style: { display: "none" } });
    }
}
