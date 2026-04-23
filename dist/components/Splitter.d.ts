/** @jsx m */
import m from "mithril";
/**
 * Splitter パネルデータ
 */
export interface SplitterPanelData {
    /** パネル ID */
    id: string;
    /** デフォルトサイズ（%） */
    defaultSize?: number;
    /** 現在のサイズ（%） */
    size?: number;
    /** 最小サイズ（%） */
    minSize?: number;
    /** 最大サイズ（%） */
    maxSize?: number;
    /** 折りたたみ可能 */
    collapsible?: boolean;
}
/**
 * Splitter.Root の属性
 */
export interface SplitterRootAttrs {
    /** パネルデータ */
    panels?: SplitterPanelData[];
    /** 方向 */
    orientation?: "horizontal" | "vertical";
    /** リサイズ時コールバック */
    onResize?: (sizes: number[]) => void;
    /** 追加クラス */
    class?: string;
    /** インラインスタイル */
    style?: Record<string, string> | string;
    [key: string]: any;
}
/**
 * SplitterPanel の属性
 */
export interface SplitterPanelAttrs {
    /** デフォルトサイズ（%） */
    defaultSize?: number;
    /** 最小サイズ（%） */
    minSize?: number;
    /** 最大サイズ（%） */
    maxSize?: number;
    /** 折りたたみ可能 */
    collapsible?: boolean;
    /** 追加クラス */
    class?: string;
    [key: string]: any;
}
/**
 * SplitterResizeTrigger の属性
 */
export interface SplitterResizeTriggerAttrs {
    /** 追加クラス */
    class?: string;
    /** 無効状態 */
    disabled?: boolean;
    [key: string]: any;
}
/**
 * @class SplitterRoot
 * @description
 * パネルを分割してリサイズ可能にするコンポーネント。
 * Chakra UI の Splitter に相当する。
 *
 * @example
 * <Splitter.Root orientation="horizontal">
 *   <Splitter.Panel defaultSize={50}>左パネル</Splitter.Panel>
 *   <Splitter.ResizeTrigger />
 *   <Splitter.Panel defaultSize={50}>右パネル</Splitter.Panel>
 * </Splitter.Root>
 */
declare class SplitterRoot implements m.ClassComponent<SplitterRootAttrs> {
    private sizes;
    private dragging;
    private dragIndex;
    private dragStart;
    private containerSize;
    private containerEl;
    private panelElements;
    private get isVertical();
    private orientation;
    oninit(vnode: m.Vnode<SplitterRootAttrs>): void;
    oncreate(vnode: m.VnodeDOM<SplitterRootAttrs>): void;
    onupdate(vnode: m.VnodeDOM<SplitterRootAttrs>): void;
    private initSizes;
    private handleMouseDown;
    private handleMouseMove;
    private handleMouseUp;
    view(vnode: m.Vnode<SplitterRootAttrs>): JSX.Element;
}
/**
 * @class SplitterPanel
 * @description スプリッターの個別パネル
 */
declare class SplitterPanel implements m.ClassComponent<SplitterPanelAttrs> {
    view(vnode: m.Vnode<SplitterPanelAttrs>): JSX.Element;
}
/**
 * @class SplitterResizeTrigger
 * @description ドラッグ可能なリサイズハンドル
 */
declare class SplitterResizeTrigger implements m.ClassComponent<SplitterResizeTriggerAttrs & {
    _orientation?: string;
    _onMouseDown?: (e: MouseEvent) => void;
}> {
    view(vnode: m.Vnode<SplitterResizeTriggerAttrs & {
        _orientation?: string;
        _onMouseDown?: (e: MouseEvent) => void;
    }>): JSX.Element;
}
/**
 * Splitter 複合コンポーネント namespace
 */
declare const Splitter: {
    Root: typeof SplitterRoot;
    Panel: typeof SplitterPanel;
    ResizeTrigger: typeof SplitterResizeTrigger;
};
export { Splitter, SplitterRoot, SplitterPanel, SplitterResizeTrigger };
//# sourceMappingURL=Splitter.d.ts.map