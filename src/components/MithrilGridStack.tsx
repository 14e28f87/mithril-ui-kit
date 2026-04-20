/** @jsx m */
import m from "mithril";
import { GridStack, type GridStackWidget } from "gridstack";
import "gridstack/dist/gridstack.css";

/**
 * GridStack 上に配置するウィジェット定義です。
 */
export interface MithrilGridWidget {
	/** GridStack レイアウト設定 (x, y, w, h, id, ...) */
	gridOpts: GridStackWidget;
	/** ウィジェット内部を描画する Mithril コンポーネント */
	component: m.ComponentTypes<any>;
	/** コンポーネントに渡す attrs */
	attrs?: Record<string, any>;
}

/**
 * MithrilGridStack の属性です。
 */
export interface MithrilGridStackAttrs {
	/** グリッドの初期オプション */
	options?: GridStack["opts"];
	/** 初期ウィジェット一覧 */
	widgets?: MithrilGridWidget[];
	/** 初期化後の GridStack インスタンスを親に渡すコールバック */
	onGridInit?: (grid: GridStack) => void;
	/** 初期化後の操作 API を親に渡すコールバック */
	onControllerInit?: (controller: MithrilGridStackController) => void;
}

/**
 * 親コンポーネントが利用できる MithrilGridStack の操作 API です。
 */
export interface MithrilGridStackController {
	mountWidget: (widget: MithrilGridWidget) => void;
	unmountWidget: (id: string) => void;
	removeAllWidgets: () => void;
}

/**
 * GridStack と Mithril の仮想 DOM を橋渡しするコンポーネントです。
 *
 * 注意:
 * - mountedElements はインスタンスごとに保持し、複数グリッド間で干渉しないようにします。
 */
export class MithrilGridStack implements m.Component<MithrilGridStackAttrs> {
	private grid: GridStack | null = null;
	private containerEl: HTMLElement | null = null;
	private mountedElements = new Map<string, HTMLElement>();

	public oncreate(vnode: m.VnodeDOM<MithrilGridStackAttrs>) {
		this.containerEl = vnode.dom as HTMLElement;

        // GridStack が最初にロードされて表示されるときは アニメーション がついてしまい気持ち悪い... 
        // とはいえ ロード後には Drag&Drop で配置を変えるときにアニメーションがあると 気持ちよい...
		this.grid = GridStack.init(
			{
				cellHeight: 80,
				//animate: true,
				animate: false,
				...vnode.attrs.options,
			},
			this.containerEl,
		);

		if (vnode.attrs.widgets) {
			for (const w of vnode.attrs.widgets) {
				this.mountWidget(w);
			}
		}

        //  ロード完了後、アニメーションを有効にする
        // ※念のため、描画サイクルを待つために setTimeout を使うのが確実です
        setTimeout(() => {
            if(this.grid){
                this.grid.setAnimation(true);
            }
        }, 0);
        

		vnode.attrs.onGridInit?.(this.grid);
		vnode.attrs.onControllerInit?.({
			mountWidget: (widget: MithrilGridWidget) => this.mountWidget(widget),
			unmountWidget: (id: string) => this.unmountWidget(id),
			removeAllWidgets: () => this.removeAllWidgets(),
		});
	}

	public onremove() {
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
	public mountWidget(widget: MithrilGridWidget): void {
		if (!this.grid) return;

		const id = widget.gridOpts.id ?? `gs-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
		const opts: GridStackWidget = { ...widget.gridOpts, id, content: "" };
		const gridEl = this.grid.addWidget(opts);
		const contentEl = gridEl.querySelector(".grid-stack-item-content") as HTMLElement | null;
		if (!contentEl) return;

		const comp = widget.component;
		const attrs = widget.attrs ?? {};
		m.mount(contentEl, { view: () => m(comp, attrs) });
		this.mountedElements.set(id, contentEl);
	}

	/**
	 * 指定 id のウィジェットを Mithril アンマウントしてから GridStack から除去します。
	 */
	public unmountWidget(id: string): void {
		if (!this.grid) return;

		const el = this.mountedElements.get(id);
		if (el) {
			m.mount(el, null);
			this.mountedElements.delete(id);
		}

		const gridItem = this.grid.el.querySelector(`[gs-id="${id}"]`);
		if (gridItem) {
			this.grid.removeWidget(gridItem as HTMLElement, true);
		}
	}

	/**
	 * すべてのウィジェットを Mithril アンマウントしてから GridStack から除去します。
	 */
	public removeAllWidgets(): void {
		if (!this.grid) return;

		for (const [id, el] of this.mountedElements) {
			m.mount(el, null);
			this.mountedElements.delete(id);
		}

		this.grid.removeAll(true);
	}

	public view() {
		return <div class="grid-stack"></div>;
	}
}
