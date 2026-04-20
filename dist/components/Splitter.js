/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Splitter.module.scss";
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
class SplitterRoot {
    constructor() {
        this.sizes = [];
        this.dragging = false;
        this.dragIndex = -1;
        this.dragStart = 0;
        this.containerSize = 0;
        this.panelElements = [];
        this.orientation = "horizontal";
        this.handleMouseDown = (e, triggerIndex) => {
            e.preventDefault();
            this.dragging = true;
            this.dragIndex = triggerIndex;
            this.dragStart = this.orientation === "horizontal" ? e.clientX : e.clientY;
            const el = e.target.parentElement;
            if (el) {
                this.containerSize = this.orientation === "horizontal" ? el.offsetWidth : el.offsetHeight;
            }
            document.addEventListener("mousemove", this.handleMouseMove);
            document.addEventListener("mouseup", this.handleMouseUp);
        };
        this.handleMouseMove = (e) => {
            if (!this.dragging)
                return;
            const current = this.orientation === "horizontal" ? e.clientX : e.clientY;
            const delta = ((current - this.dragStart) / this.containerSize) * 100;
            this.dragStart = current;
            const leftIdx = this.dragIndex;
            const rightIdx = this.dragIndex + 1;
            if (leftIdx < 0 || rightIdx >= this.sizes.length)
                return;
            const newLeft = this.sizes[leftIdx] + delta;
            const newRight = this.sizes[rightIdx] - delta;
            if (newLeft >= 5 && newRight >= 5) {
                this.sizes[leftIdx] = newLeft;
                this.sizes[rightIdx] = newRight;
                m.redraw();
            }
        };
        this.handleMouseUp = () => {
            this.dragging = false;
            document.removeEventListener("mousemove", this.handleMouseMove);
            document.removeEventListener("mouseup", this.handleMouseUp);
        };
    }
    get isVertical() { return false; }
    oninit(vnode) {
        this.orientation = vnode.attrs.orientation || "horizontal";
    }
    oncreate(vnode) {
        this.initSizes(vnode);
    }
    onupdate(vnode) {
        this.orientation = vnode.attrs.orientation || "horizontal";
    }
    initSizes(vnode) {
        const children = vnode.children;
        if (!children)
            return;
        const panels = (Array.isArray(children) ? children.flat() : [children])
            .filter((c) => c && c.tag === SplitterPanel);
        if (panels.length === 0)
            return;
        this.sizes = panels.map((p, i) => {
            return p.attrs?.defaultSize ?? (100 / panels.length);
        });
    }
    view(vnode) {
        const { orientation = "horizontal", onResize, class: className, style, panels, ...rest } = vnode.attrs;
        this.orientation = orientation;
        const children = vnode.children;
        const flatChildren = Array.isArray(children) ? children.flat() : children ? [children] : [];
        let panelIdx = 0;
        let triggerIdx = 0;
        const processedChildren = flatChildren.map((child) => {
            if (!child || typeof child !== "object")
                return child;
            if (child.tag === SplitterPanel) {
                const idx = panelIdx++;
                const size = this.sizes[idx];
                const sizeStyle = size !== undefined
                    ? (orientation === "horizontal"
                        ? { width: `${size}%`, minWidth: 0 }
                        : { height: `${size}%`, minHeight: 0 })
                    : {};
                return m(SplitterPanel, {
                    ...child.attrs,
                    style: { ...sizeStyle, ...(child.attrs?.style || {}) },
                }, child.children);
            }
            if (child.tag === SplitterResizeTrigger) {
                const idx = triggerIdx++;
                return m(SplitterResizeTrigger, {
                    ...child.attrs,
                    _orientation: orientation,
                    _onMouseDown: (e) => this.handleMouseDown(e, idx),
                }, child.children);
            }
            return child;
        });
        return (m("div", { ...rest, class: classNames(styles.root, orientation === "vertical" ? styles.vertical : styles.horizontal, this.dragging && styles.dragging, className), style: style }, processedChildren));
    }
}
/**
 * @class SplitterPanel
 * @description スプリッターの個別パネル
 */
class SplitterPanel {
    view(vnode) {
        const { defaultSize, minSize, maxSize, collapsible, class: className, ...rest } = vnode.attrs;
        return (m("div", { ...rest, class: classNames(styles.panel, className) }, vnode.children));
    }
}
/**
 * @class SplitterResizeTrigger
 * @description ドラッグ可能なリサイズハンドル
 */
class SplitterResizeTrigger {
    view(vnode) {
        const { disabled, class: className, _orientation, _onMouseDown, ...rest } = vnode.attrs;
        const isVertical = _orientation === "vertical";
        return (m("div", { ...rest, role: "separator", tabindex: 0, class: classNames(styles.trigger, isVertical ? styles.triggerVertical : styles.triggerHorizontal, disabled && styles.triggerDisabled, className), onmousedown: disabled ? undefined : _onMouseDown },
            m("span", { class: styles.triggerBar })));
    }
}
/**
 * Splitter 複合コンポーネント namespace
 */
const Splitter = {
    Root: SplitterRoot,
    Panel: SplitterPanel,
    ResizeTrigger: SplitterResizeTrigger,
};
export { Splitter, SplitterRoot, SplitterPanel, SplitterResizeTrigger };
