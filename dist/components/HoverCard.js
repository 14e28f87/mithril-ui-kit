/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./HoverCard.module.scss";
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
/* ─── マーカークラス ─── */
class HCTriggerMarker {
    view() { return null; }
}
HCTriggerMarker.__hcRole = "trigger";
class HCPositionerMarker {
    view() { return null; }
}
HCPositionerMarker.__hcRole = "positioner";
class HCContentMarker {
    view() { return null; }
}
HCContentMarker.__hcRole = "content";
class HCArrowMarker {
    view() { return null; }
}
HCArrowMarker.__hcRole = "arrow";
class HCArrowTipMarker {
    view() { return null; }
}
HCArrowTipMarker.__hcRole = "arrowTip";
/**
 * HoverCard Root コンポーネント — ホバーで表示されるカード
 *
 * @example
 * ```tsx
 * <HoverCard.Root openDelay={200} closeDelay={150}>
 *   <HoverCard.Trigger>ホバーしてください</HoverCard.Trigger>
 *   <HoverCard.Content>
 *     カードの内容...
 *   </HoverCard.Content>
 * </HoverCard.Root>
 * ```
 */
class HoverCardRoot {
    constructor() {
        this.isOpen = false;
        this.openTimer = null;
        this.closeTimer = null;
    }
    onremove() {
        if (this.openTimer)
            clearTimeout(this.openTimer);
        if (this.closeTimer)
            clearTimeout(this.closeTimer);
    }
    view(vnode) {
        const { openDelay = 600, closeDelay = 300, size = "md", placement = "bottom", class: className, ...rest } = vnode.attrs;
        const children = (Array.isArray(vnode.children) ? vnode.children : [vnode.children]).flat(Infinity);
        let triggerContent = null;
        let cardContent = null;
        for (const child of children) {
            if (child && typeof child === "object" && "tag" in child) {
                const tag = child.tag;
                const cv = child;
                if (tag?.__hcRole === "trigger") {
                    triggerContent = cv.children;
                }
                if (tag?.__hcRole === "content" || tag?.__hcRole === "positioner") {
                    cardContent = tag?.__hcRole === "positioner"
                        ? this.extractContent(cv.children)
                        : cv.children;
                }
            }
        }
        return (m("div", { ...rest, class: classNames(styles.root, className), onmouseenter: () => this.startOpen(openDelay), onmouseleave: () => this.startClose(closeDelay) },
            m("div", { class: styles.trigger }, triggerContent),
            this.isOpen && (m("div", { class: classNames(styles.content, styles[`size${capitalize(size)}`], styles[`placement${capitalize(placement)}`]), onmouseenter: () => this.cancelClose(), onmouseleave: () => this.startClose(closeDelay) }, cardContent))));
    }
    extractContent(children) {
        const arr = (Array.isArray(children) ? children : [children]).flat(Infinity);
        for (const child of arr) {
            if (child && typeof child === "object" && "tag" in child) {
                const tag = child.tag;
                if (tag?.__hcRole === "content")
                    return child.children;
            }
        }
        return children;
    }
    startOpen(delay) {
        if (this.closeTimer) {
            clearTimeout(this.closeTimer);
            this.closeTimer = null;
        }
        if (this.isOpen)
            return;
        this.openTimer = setTimeout(() => {
            this.isOpen = true;
            m.redraw();
        }, delay);
    }
    startClose(delay) {
        if (this.openTimer) {
            clearTimeout(this.openTimer);
            this.openTimer = null;
        }
        this.closeTimer = setTimeout(() => {
            this.isOpen = false;
            m.redraw();
        }, delay);
    }
    cancelClose() {
        if (this.closeTimer) {
            clearTimeout(this.closeTimer);
            this.closeTimer = null;
        }
    }
}
/**
 * HoverCard コンポーネント名前空間
 */
export const HoverCard = {
    Root: HoverCardRoot,
    Trigger: HCTriggerMarker,
    Positioner: HCPositionerMarker,
    Content: HCContentMarker,
    Arrow: HCArrowMarker,
    ArrowTip: HCArrowTipMarker,
};
export { HoverCardRoot };
