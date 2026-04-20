/** @jsx m */
import m from "mithril";
import styles from "./Toast.module.scss";
// ─── Context ────────────────────────────────────────────────
/** @internal 現在レンダリング中のトーストアイテムコンテキスト */
let _toastCtx = null;
// ─── Meta ───────────────────────────────────────────────────
const TYPE_META = {
    info: { icon: "ℹ" },
    success: { icon: "✓" },
    warning: { icon: "⚠" },
    error: { icon: "✕" },
    loading: { icon: "⏳" },
};
// ─── Utility ────────────────────────────────────────────────
/** @internal */
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
// ─── createToaster ──────────────────────────────────────────
/**
 * トースター（トースト管理エンジン）を作成する
 *
 * @param options - 初期設定
 * @returns 命令的 API（create / success / error 等）を持つオブジェクト
 *
 * @example
 * ```tsx
 * const toaster = createToaster({ placement: "top-end" });
 * toaster.success({ title: "保存しました" });
 *
 * // JSX 内に Toaster を配置
 * <Toast.Toaster toaster={toaster} />
 * ```
 */
export function createToaster(options = {}) {
    const { placement = "bottom-end", duration: defaultDuration = 5000, max = 24, removeDelay = 200, pauseOnHover = true, } = options;
    let toasts = [];
    let nextId = 1;
    const subscribers = new Set();
    const notify = () => {
        for (const cb of subscribers)
            cb([...toasts]);
        m.redraw();
    };
    const api = {
        placement,
        pauseOnHover,
        removeDelay,
        /** トーストを作成して ID を返す */
        create(opts) {
            const id = `toast-${nextId++}`;
            const dur = opts.duration ?? defaultDuration;
            const item = {
                id,
                type: opts.type ?? "info",
                title: opts.title,
                description: opts.description,
                duration: dur,
                action: opts.action,
                status: "open",
                createdAt: Date.now(),
            };
            toasts = [...toasts, item];
            // 上限超過分を削除
            while (toasts.length > max) {
                const oldest = toasts[0];
                if (oldest._timerId)
                    clearTimeout(oldest._timerId);
                toasts = toasts.slice(1);
            }
            // 自動消去タイマー
            if (dur > 0) {
                item._timerId = window.setTimeout(() => api.dismiss(id), dur);
            }
            notify();
            return id;
        },
        /** 成功トースト */
        success(opts) {
            return api.create({ ...opts, type: "success" });
        },
        /** エラートースト */
        error(opts) {
            return api.create({ ...opts, type: "error" });
        },
        /** 警告トースト */
        warning(opts) {
            return api.create({ ...opts, type: "warning" });
        },
        /** 情報トースト */
        info(opts) {
            return api.create({ ...opts, type: "info" });
        },
        /** ローディングトースト（持続表示） */
        loading(opts) {
            return api.create({ ...opts, type: "loading", duration: 0 });
        },
        /** トーストを閉じる */
        dismiss(id) {
            const item = toasts.find(t => t.id === id);
            if (!item || item.status !== "open")
                return;
            item.status = "closing";
            if (item._timerId) {
                clearTimeout(item._timerId);
                item._timerId = undefined;
            }
            notify();
            window.setTimeout(() => {
                toasts = toasts.filter(t => t.id !== id);
                notify();
            }, removeDelay);
        },
        /** すべてのトーストを閉じる */
        dismissAll() {
            [...toasts].forEach(t => api.dismiss(t.id));
        },
        /** 既存トーストを更新 */
        update(id, opts) {
            const item = toasts.find(t => t.id === id);
            if (!item)
                return;
            if (opts.type !== undefined)
                item.type = opts.type;
            if (opts.title !== undefined)
                item.title = opts.title;
            if (opts.description !== undefined)
                item.description = opts.description;
            if (opts.action !== undefined)
                item.action = opts.action;
            notify();
        },
        /**
         * Promise トースト — loading → success / error に自動遷移
         */
        promise(promise, opts) {
            const id = api.loading(opts.loading);
            promise
                .then(result => {
                const sOpts = typeof opts.success === "function" ? opts.success(result) : opts.success;
                api.update(id, { ...sOpts, type: "success" });
                const item = toasts.find(t => t.id === id);
                if (item) {
                    item.duration = sOpts.duration ?? defaultDuration;
                    if (item.duration > 0) {
                        item._timerId = window.setTimeout(() => api.dismiss(id), item.duration);
                    }
                }
            })
                .catch(err => {
                const eOpts = typeof opts.error === "function" ? opts.error(err) : opts.error;
                api.update(id, { ...eOpts, type: "error" });
                const item = toasts.find(t => t.id === id);
                if (item) {
                    item.duration = eOpts.duration ?? defaultDuration;
                    if (item.duration > 0) {
                        item._timerId = window.setTimeout(() => api.dismiss(id), item.duration);
                    }
                }
            });
            return id;
        },
        /** 表示中のトースト一覧 */
        getToasts() { return [...toasts]; },
        /** トースト数 */
        getCount() { return toasts.length; },
        /** 変更を購読 */
        subscribe(cb) {
            subscribers.add(cb);
            return () => subscribers.delete(cb);
        },
    };
    return api;
}
// ─── Compound Sub-components ────────────────────────────────
/**
 * トーストのルートコンテナ
 *
 * コンテキストから type / status を読み取り、適切なスタイルクラスを適用する。
 * duration > 0 の場合はプログレスバーを自動表示する。
 */
class ToastRoot {
    view(vnode) {
        const ctx = _toastCtx;
        if (!ctx)
            return null;
        const { class: cls, ...rest } = vnode.attrs;
        const typeClass = styles[`type${capitalize(ctx.item.type)}`] ?? "";
        return (m("div", { class: [styles.root, typeClass, ctx.item.status === "closing" ? styles.closing : "", cls].filter(Boolean).join(" "), "data-type": ctx.item.type, "data-state": ctx.item.status === "closing" ? "closed" : "open", role: "alert", "aria-live": ctx.item.type === "error" || ctx.item.type === "warning" ? "assertive" : "polite", "aria-atomic": "true", ...rest },
            vnode.children,
            ctx.item.duration > 0 && (m("div", { class: styles.progress, "aria-hidden": "true" },
                m("span", { class: styles.progressBar, style: { animationDuration: `${ctx.item.duration}ms` } })))));
    }
}
ToastRoot.__role = "ToastRoot";
/** タイプアイコンインジケーター */
class ToastIndicator {
    view(vnode) {
        const ctx = _toastCtx;
        if (!ctx)
            return null;
        const { class: cls, ...rest } = vnode.attrs;
        const meta = TYPE_META[ctx.item.type];
        const hasChildren = vnode.children && vnode.children.length > 0;
        return (m("div", { class: [styles.indicator, cls].filter(Boolean).join(" "), "aria-hidden": "true", ...rest }, hasChildren ? vnode.children : meta.icon));
    }
}
ToastIndicator.__role = "ToastIndicator";
/** トーストのタイトル */
class ToastTitle {
    view(vnode) {
        const ctx = _toastCtx;
        if (!ctx)
            return null;
        const { class: cls, ...rest } = vnode.attrs;
        const hasChildren = vnode.children && vnode.children.length > 0;
        return (m("div", { class: [styles.title, cls].filter(Boolean).join(" "), ...rest }, hasChildren ? vnode.children : ctx.item.title));
    }
}
ToastTitle.__role = "ToastTitle";
/** トーストの説明文 */
class ToastDescription {
    view(vnode) {
        const ctx = _toastCtx;
        if (!ctx)
            return null;
        const { class: cls, ...rest } = vnode.attrs;
        const hasChildren = vnode.children && vnode.children.length > 0;
        return (m("div", { class: [styles.description, cls].filter(Boolean).join(" "), ...rest }, hasChildren ? vnode.children : ctx.item.description));
    }
}
ToastDescription.__role = "ToastDescription";
/** アクションボタン */
class ToastActionTrigger {
    view(vnode) {
        const ctx = _toastCtx;
        if (!ctx)
            return null;
        const { class: cls, ...rest } = vnode.attrs;
        const action = ctx.item.action;
        const hasChildren = vnode.children && vnode.children.length > 0;
        return (m("button", { type: "button", class: [styles.actionTrigger, cls].filter(Boolean).join(" "), onclick: () => { action?.onClick(); ctx.dismiss(); }, ...rest }, hasChildren ? vnode.children : action?.label));
    }
}
ToastActionTrigger.__role = "ToastActionTrigger";
/** 閉じるボタン */
class ToastCloseTrigger {
    view(vnode) {
        const ctx = _toastCtx;
        if (!ctx)
            return null;
        const { class: cls, ...rest } = vnode.attrs;
        const hasChildren = vnode.children && vnode.children.length > 0;
        return (m("button", { type: "button", class: [styles.closeTrigger, cls].filter(Boolean).join(" "), "aria-label": "Close", onclick: () => ctx.dismiss(), ...rest }, hasChildren ? vnode.children : "×"));
    }
}
ToastCloseTrigger.__role = "ToastCloseTrigger";
// ─── Internal: Toast item context wrapper ───────────────────
/**
 * @internal 各トーストのコンテキスト設定ラッパー。
 * Mithril の深さ優先レンダリングにより、このコンポーネントの view() 内で
 * _toastCtx を設定すれば、子ツリーが同じコンテキストを参照できる。
 */
class ToastItemWrapper {
    view(vnode) {
        const { item, toaster, each } = vnode.attrs;
        const dismiss = () => toaster.dismiss(item.id);
        _toastCtx = { item, dismiss };
        if (each) {
            return each(item, dismiss);
        }
        // デフォルトテンプレート
        return (m(ToastRoot, null,
            m(ToastIndicator, null),
            m("div", { class: styles.content },
                item.title ? m(ToastTitle, null) : null,
                item.description ? m(ToastDescription, null) : null),
            item.action ? m(ToastActionTrigger, null) : null,
            m(ToastCloseTrigger, null)));
    }
}
// ─── Toaster Component ──────────────────────────────────────
/**
 * Toaster コンポーネント
 *
 * createToaster() で作成したトースターを受け取り、
 * 全トーストを固定位置コンテナ内にレンダリングする。
 *
 * @example
 * ```tsx
 * const toaster = createToaster({ placement: "top-end" });
 * // ...
 * <Toast.Toaster toaster={toaster} />
 * ```
 */
class ToasterComponent {
    constructor() {
        this.pausedTimers = new Map();
    }
    view(vnode) {
        const { toaster, each } = vnode.attrs;
        const toasts = toaster.getToasts();
        const placement = toaster.placement;
        const placementKey = `placement${placement.split("-").map(capitalize).join("")}`;
        const placementClass = styles[placementKey] ?? "";
        const hoverHandlers = toaster.pauseOnHover
            ? {
                onmouseenter: () => this.pauseAll(toaster),
                onmouseleave: () => this.resumeAll(toaster),
            }
            : {};
        return (m("div", { class: [styles.toaster, placementClass].filter(Boolean).join(" "), ...hoverHandlers }, toasts.map(item => (m(ToastItemWrapper, { key: item.id, item, toaster, each })))));
    }
    /** @internal タイマーを一時停止 */
    pauseAll(toaster) {
        const toasts = toaster.getToasts();
        for (const item of toasts) {
            if (item._timerId && item.status === "open") {
                clearTimeout(item._timerId);
                const elapsed = Date.now() - item.createdAt;
                const remaining = Math.max(0, item.duration - elapsed);
                this.pausedTimers.set(item.id, remaining);
                item._timerId = undefined;
            }
        }
    }
    /** @internal タイマーを再開 */
    resumeAll(toaster) {
        for (const [id, remaining] of this.pausedTimers) {
            if (remaining > 0) {
                const item = toaster.getToasts().find(t => t.id === id);
                if (item && item.status === "open") {
                    item._timerId = window.setTimeout(() => toaster.dismiss(id), remaining);
                }
            }
        }
        this.pausedTimers.clear();
    }
}
ToasterComponent.__role = "Toaster";
// ─── Export ─────────────────────────────────────────────────
/**
 * Toast 複合コンポーネント
 *
 * Ark UI / Chakra UI スタイルの命令的トースト通知システム。
 * `createToaster()` でトースター管理エンジンを作成し、
 * `Toast.Toaster` コンポーネントでレンダリングする。
 *
 * サブコンポーネント:
 * - `Toast.Root` — ルートコンテナ（type/status に応じたスタイル + プログレスバー）
 * - `Toast.Indicator` — タイプアイコン
 * - `Toast.Title` — タイトル
 * - `Toast.Description` — 説明文
 * - `Toast.ActionTrigger` — アクションボタン
 * - `Toast.CloseTrigger` — 閉じるボタン
 * - `Toast.Toaster` — 全トーストを表示する固定位置コンテナ
 *
 * @example
 * ```tsx
 * const toaster = createToaster({ placement: "top-end" });
 *
 * // 命令的に呼び出し
 * toaster.success({ title: "保存しました" });
 * toaster.error({ title: "エラー", description: "接続に失敗しました" });
 *
 * // JSX
 * <Toast.Toaster toaster={toaster} />
 * ```
 */
export const Toast = {
    Root: ToastRoot,
    Indicator: ToastIndicator,
    Title: ToastTitle,
    Description: ToastDescription,
    ActionTrigger: ToastActionTrigger,
    CloseTrigger: ToastCloseTrigger,
    Toaster: ToasterComponent,
};
