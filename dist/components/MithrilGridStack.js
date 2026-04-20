/** @jsx m */
import m from "mithril";
import { GridStack } from "gridstack";
import "gridstack/dist/gridstack.css";
/**
 * GridStack と Mithril の仮想 DOM を橋渡しするコンポーネントです。
 *
 * 注意:
 * - mountedElements はインスタンスごとに保持し、複数グリッド間で干渉しないようにします。
 */
export class MithrilGridStack {
    constructor() {
        this.grid = null;
        this.containerEl = null;
        this.mountedElements = new Map();
    }
    oncreate(vnode) {
        this.containerEl = vnode.dom;
        // GridStack が最初にロードされて表示されるときは アニメーション がついてしまい気持ち悪い... 
        // とはいえ ロード後には Drag&Drop で配置を変えるときにアニメーションがあると 気持ちよい...
        this.grid = GridStack.init({
            cellHeight: 80,
            //animate: true,
            animate: false,
            ...vnode.attrs.options,
        }, this.containerEl);
        if (vnode.attrs.widgets) {
            for (const w of vnode.attrs.widgets) {
                this.mountWidget(w);
            }
        }
        //  ロード完了後、アニメーションを有効にする
        // ※念のため、描画サイクルを待つために setTimeout を使うのが確実です
        setTimeout(() => {
            if (this.grid) {
                this.grid.setAnimation(true);
            }
        }, 0);
        vnode.attrs.onGridInit?.(this.grid);
        vnode.attrs.onControllerInit?.({
            mountWidget: (widget) => this.mountWidget(widget),
            unmountWidget: (id) => this.unmountWidget(id),
            removeAllWidgets: () => this.removeAllWidgets(),
        });
    }
    onremove() {
        for (const [id, el] of this.mountedElements) {
            m.mount(el, null);
            this.mountedElements.delete(id);
        }
        if (this.grid) {
            this.grid.destroy(true);
            this.grid = null;
        }
    }
    /**
     * ウィジェットを GridStack に追加し、内容を Mithril でマウントします。
     */
    mountWidget(widget) {
        if (!this.grid)
            return;
        const id = widget.gridOpts.id ?? `gs-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
        const opts = { ...widget.gridOpts, id, content: "" };
        const gridEl = this.grid.addWidget(opts);
        const contentEl = gridEl.querySelector(".grid-stack-item-content");
        if (!contentEl)
            return;
        const comp = widget.component;
        const attrs = widget.attrs ?? {};
        m.mount(contentEl, { view: () => m(comp, attrs) });
        this.mountedElements.set(id, contentEl);
    }
    /**
     * 指定 id のウィジェットを Mithril アンマウントしてから GridStack から除去します。
     */
    unmountWidget(id) {
        if (!this.grid)
            return;
        const el = this.mountedElements.get(id);
        if (el) {
            m.mount(el, null);
            this.mountedElements.delete(id);
        }
        const gridItem = this.grid.el.querySelector(`[gs-id="${id}"]`);
        if (gridItem) {
            this.grid.removeWidget(gridItem, true);
        }
    }
    /**
     * すべてのウィジェットを Mithril アンマウントしてから GridStack から除去します。
     */
    removeAllWidgets() {
        if (!this.grid)
            return;
        for (const [id, el] of this.mountedElements) {
            m.mount(el, null);
            this.mountedElements.delete(id);
        }
        this.grid.removeAll(true);
    }
    view() {
        return m("div", { class: "grid-stack" });
    }
}
