/** @jsx m */
import m from "mithril";
import styles from "./Popover.module.scss";
/* ヘルパー */
const isVnodeElement = (child) => child && typeof child === "object" && "tag" in child && child.tag != null;
function mergeClasses(a, b) {
    return [a, b].filter(Boolean).join(" ");
}
function renderChildWithProps(child, props) {
    const childTag = child.tag;
    const childAttrs = child.attrs || {};
    const mergedAttrs = {
        ...childAttrs,
        ...props,
        class: mergeClasses(childAttrs.class || childAttrs.className, props.class),
    };
    // 子がコンポーネント関数またはタグの場合に対応
    return m(childTag, mergedAttrs, child.children);
}
/* シンプルな状態管理（Root 単位で open を管理） */
function createRootState() {
    let open = false;
    const subscribers = new Set();
    return {
        isOpen() {
            return open;
        },
        setOpen(v) {
            open = v;
            subscribers.forEach((s) => s());
        },
        toggle() {
            open = !open;
            subscribers.forEach((s) => s());
        },
        subscribe(fn) {
            subscribers.add(fn);
            return () => subscribers.delete(fn);
        },
    };
}
/* Root コンポーネント */
export const Popover = {
    Root: {
        oninit(vnode) {
            // attach a state object to vnode.state so children can access via vnode.attrs.__popoverState
            vnode.state.__popoverState = createRootState();
        },
        view(vnode) {
            const { placement = "bottom", size = "md", class: className, style, ...rest } = vnode.attrs;
            const rootClass = mergeClasses(styles.root, className);
            return m("div", {
                class: rootClass,
                style,
                "data-placement": placement,
                "data-size": size,
                ...rest,
            }, vnode.children);
        },
    },
    /* Trigger */
    Trigger: {
        view(vnode) {
            const asChild = !!vnode.attrs.asChild;
            const className = vnode.attrs.class;
            const onclick = vnode.attrs.onclick;
            const rest = { ...vnode.attrs };
            delete rest.asChild;
            delete rest.class;
            delete rest.onclick;
            const triggerProps = {
                class: mergeClasses(styles.trigger, className),
                onclick: (e) => {
                    // find root state by walking up vnode tree: mithril doesn't provide direct parent access here,
                    // so we rely on DOM traversal to find nearest .popover-root and toggle a stored state on it.
                    // For simplicity, we toggle by dispatching a custom event; Root listens to it.
                    const ev = new CustomEvent("mithril-popover-toggle", { bubbles: true });
                    e.target.dispatchEvent(ev);
                    if (typeof onclick === "function")
                        onclick(e);
                },
                ...rest,
            };
            const children = vnode.children;
            // asChild が true かつ単一 vnode 要素なら子に属性をマージして返す
            if (asChild && !Array.isArray(children) && isVnodeElement(children)) {
                return renderChildWithProps(children, triggerProps);
            }
            // フォールバック: button をレンダリング（button 固有クラスを付与）
            return m("button", {
                type: "button",
                class: mergeClasses(triggerProps.class, styles.triggerButton),
                onclick: triggerProps.onclick,
                ...rest,
            }, children);
        },
    },
    /* Content */
    Content: {
        oncreate(vnode) {
            // Root の open 状態を DOM イベントで受け取り、表示制御する簡易実装
            const el = vnode.dom;
            const root = el.closest(`.${styles.root}`);
            if (!root)
                return;
            // toggle イベントを受け取る
            const onToggle = (e) => {
                const isOpen = root.classList.toggle(styles.open);
                // optional: focus management
                if (isOpen) {
                    // focus first focusable element inside content
                    const focusable = el.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                    focusable?.focus();
                }
            };
            root.addEventListener("mithril-popover-toggle", onToggle);
            // close on outside click
            const onDocClick = (ev) => {
                if (!root.contains(ev.target)) {
                    root.classList.remove(styles.open);
                }
            };
            document.addEventListener("click", onDocClick);
            // store cleanup
            vnode.state.__cleanup = () => {
                root.removeEventListener("mithril-popover-toggle", onToggle);
                document.removeEventListener("click", onDocClick);
            };
        },
        onremove(vnode) {
            const cleanup = vnode.state.__cleanup;
            if (typeof cleanup === "function")
                cleanup();
        },
        view(vnode) {
            const className = vnode.attrs.class;
            const rest = { ...vnode.attrs };
            delete rest.class;
            return m("div", {
                class: mergeClasses(styles.content, className),
                role: "dialog",
                "aria-modal": "false",
                ...rest,
            }, vnode.children);
        },
    },
    Arrow: {
        view() {
            return m("div", { class: styles.arrow });
        },
    },
    Header: {
        view(vnode) {
            return m("div", { class: styles.header }, vnode.children);
        },
    },
    Body: {
        view(vnode) {
            return m("div", { class: styles.body }, vnode.children);
        },
    },
    Footer: {
        view(vnode) {
            return m("div", { class: styles.footer }, vnode.children);
        },
    },
    CloseTrigger: {
        view(vnode) {
            const onclick = vnode.attrs.onclick;
            const className = vnode.attrs.class;
            const rest = { ...vnode.attrs };
            delete rest.onclick;
            delete rest.class;
            const handler = (e) => {
                // find nearest root and remove open class
                const el = e.target;
                const root = el.closest(`.${styles.root}`);
                if (root)
                    root.classList.remove(styles.open);
                if (typeof onclick === "function")
                    onclick(e);
            };
            // デフォルトは button
            return m("button", {
                type: "button",
                class: mergeClasses(mergeClasses(styles.trigger, styles.triggerButton), className),
                onclick: handler,
                ...rest,
            }, vnode.children);
        },
    },
};
