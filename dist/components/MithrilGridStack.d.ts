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
export declare class MithrilGridStack implements m.Component<MithrilGridStackAttrs> {
    private grid;
    private containerEl;
    private mountedElements;
    oncreate(vnode: m.VnodeDOM<MithrilGridStackAttrs>): void;
    onremove(): void;
    /**
     * ウィジェットを GridStack に追加し、内容を Mithril でマウントします。
     */
    mountWidget(widget: MithrilGridWidget): void;
    /**
     * 指定 id のウィジェットを Mithril アンマウントしてから GridStack から除去します。
     */
    unmountWidget(id: string): void;
    /**
     * すべてのウィジェットを Mithril アンマウントしてから GridStack から除去します。
     */
    removeAllWidgets(): void;
    view(): JSX.Element;
}
//# sourceMappingURL=MithrilGridStack.d.ts.map